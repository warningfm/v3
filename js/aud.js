(function($) {
    "use strict";

    $("div.warningfm").append(
        '<div class="blur"></div>'+
        '<div class="mainsctn">' +
        '<div class="frnt">' +
        '<div class="atwrk"><a href="" target="_blank" title="iTunes"></a></div></div></div></div>').attr("data-tag");
        

    $.fn.warningfm = function(options) {
        var settings = $.extend({
            // These are the defaults
            type: "",
            URL: "",
            lastFMkey: "ea7d059d320c505c2dae59e07fc7423a",
            mount_point: "",
            cors_proxy: "",
            enable_cors: false,
            stream_id: 1,
            streampath: "/stream",
            default_image: "https://warningfm.github.io/v3/images/no-cover-large.png",
            blurriness: "",
            autoplay: false,
            src: "",
            itunes: true,
            lastFM: true,

        }, options);
        var thisObj;
        thisObj = this;
        var audio;
        var ppBtn = $("div.plbtn", thisObj);

        audio = new Audio();
        audio.preload = "auto";

        $(audio).on("playing", function () {
            togglePlying(ppBtn, true);
            $(ppBtn).addClass("icon-stop2");
            $(ppBtn).removeClass("icon-play2");
            $("div.timg", thisObj).addClass("blinker");
        });
        $(audio).on("pause", function () {
            togglePlying(ppBtn, false);
            $(ppBtn).removeClass("icon-stop2");
            $(ppBtn).addClass("icon-play2");
            $("div.timg", thisObj).removeClass("blinker");
        });
        $(audio).on("timeupdate", function () {
            $("div.timg", thisObj).text(getReadableTime(this.currentTime));
        });



        thisObj.each(function() {
            if(settings.blurriness.length > 0){
                $("div.blur", thisObj).css({
                    'filter': 'blur(' + settings.blurriness + ')',
                    '-webkit-filter': 'blur(' + settings.blurriness + ')',
                    '-moz-filter': 'blur(' + settings.blurriness + ')',
                    '-ms-filter': 'blur(' + settings.blurriness + ')',
                    '-o-filter': 'blur(' + settings.blurriness + ')'
                })
            }
            if (settings.autoplay){
                audio.autoplay = true;
            }
            ShareImplementation();

            if (settings.type.toLowerCase() === "shoutcast") {

                audio.src = settings.URL + settings.streampath;
                settings.src = audio.src;
                var dataURL = settings.URL + "/stats?sid="+ settings.stream_id +"&json=1&callback=?";
                var hisURL = settings.URL + "/played?sid="+ settings.stream_id +"&type=json&callback=?";


                updateSH(dataURL, hisURL);
            }
            else if (settings.type.toLowerCase() == "icecast") {
                audio.src = settings.URL + "/" + settings.mount_point;
                settings.src = audio.src;
                var dataURL = settings.cors_proxy + settings.URL + "/status-json.xsl";

                updateIC(dataURL);
            }


        });


        //Utility Functions
        function togglePlying(aClassName, bool) {
            $(aClassName).toggleClass("playing", bool);
        }

        function playManagement() {
            if (audio.paused) {
                audio.src = settings.src;
                audio.play();

                var $playing = $('.plbtn.playing');
                if ($(thisObj).find($playing).length === 0) {
                    $playing.click();
                }

                $(thisObj).addClass("bekhon");
                $(".warningfm", thisObj).removeClass("nakhon ");
            } else {
                audio.pause();

                $(thisObj).addClass("nakhon");
                $(".warningfm", thisObj).removeClass("bekhon");
            }

        }

        function getReadableTime(value) {
            //Convert milisec to "readable" time
            if (value == "Infinity") {
                return "live";
            } else {
                var durmins = Math.floor(value / 60);
                var dursecs = Math.floor(value - durmins * 60);
                if (dursecs < 10) {
                    dursecs = "0" + dursecs;
                }
                if (durmins < 10) {
                    durmins = "0" + durmins;
                }
                return durmins + ":" + dursecs;
            }

        }

        function getTag() {
            return $(thisObj).attr("data-tag");
        }

        function updateTag(data) {
            $(thisObj).attr("data-tag", data);
        }

        function splitter(text, ref) {
            if(text === undefined){
                text = "undefined - undefined";
            }
            if(text.indexOf('-') > -1) {
                var dan = text.split(/-(.+)?/);
                var artist = dan[0];
                var title = dan[1];
                if (ref == "artist") {
                    return artist.trim();
                }
                else if (ref == "title") {
                    return title.trim();
                }
            }
            else{
                console.log("The track name is not separated by - (dash)!");
                if (ref == "artist") {
                    return "";
                }
                else if (ref == "title") {
                    return text;
                }
            }
        }

        function updateArtist(name) {
            $(".arst", thisObj).attr("data-text", name).text(name);
        }

        function updateTitle(name) {
            $(".ttl", thisObj).attr("data-text", name).text(name);
        }

        function getImage(artist)  {
            artist = prepareArtistName(artist);
            artist = encodeURI(artist);

            if(settings.itunes_bg === false || settings.itunes_image.length <= 0){
                var url = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=" + settings.lastFMkey + "&format=json";
                $.getJSON(url, function (data) {
                    var image = settings.default_image;
                    if(data.error){
                        console.log(data.message);
                        console.log("The above error is for " + decodeURI(artist));
                    }
                    else if(data.artist.image[data.artist.image.length - 1]["#text"].length > 0){
                        settings.itunes_image = data.artist.image[data.artist.image.length - 1]["#text"];
                        console.log("From Last.fm: " + decodeURI(artist) + " " + data.artist.image[data.artist.image.length - 1]["#text"]);
                    }
                    else{
                        settings.itunes_image = settings.default_image;
                        console.log("No image is associated with \'"+ decodeURI(artist) + "\' on Last.FM!")
                    }

                    $(".blur, .atwrk", thisObj).css("background-image", "url(" + settings.itunes_image + ")");

                })
                    .fail(function() {
                        console.log("#getImage(), Error in loading artist background image for "  + decodeURI(artist));
                    });
            }

        }

        function textShortener(text, length){
            if(text.length > length){
                return text.substring(0, length - 1) + "...";
            }else{
                return text;
            }
        }

        function prepareArtistName(artist){
            artist = artist.toLowerCase();
            if (artist.includes("&")) {
                artist = artist.replace('&', 'and');
            }
            else if(artist.includes("feat")) {
                artist = artist.substr(0, artist.indexOf('feat'));
            } else if (artist.includes("ft")) {
                artist = artist.substr(0, artist.indexOf('ft'));
            }

            return artist;
        }

        // SHOUTcast
        function updateHistory(url) {
            $(".rhis ul li", thisObj).remove();
            $.getJSON(url, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var rowNum = i;
                    var artist = splitter(data[i].title, "artist");
                    var title = splitter(data[i].title, "title");
                    var listVal = rowNum;
                    if (rowNum === 0) {
                        listVal = "NOW";
                    }

                    var artistTEMP = textShortener(artist, 24);
                    var titleTEMP = textShortener(title, 34);

                    $(".rhis ul", thisObj).append(
                        "<li class='list' id='row" + rowNum + "'>" +
                        "<div class='hnum listNum'><span>" + listVal + "</span></div>" +
                        "<div class='hnme'>" + titleTEMP + " - " + artistTEMP + "</div>" +
                        "</li>"
                    );
                }
            });
        }

        function getNextSong(data) {
            setTimeout(function () {
                if(data.nexttitle !== undefined){
                    var artist = splitter(data.nexttitle, "artist");
                    var title = splitter(data.nexttitle, "title");

                    var artistTEMP = textShortener(artist, 20);
                    var titleTEMP = textShortener(title, 28);

                    $(".rhis ul li.list#row0", thisObj).before(
                        "<li class='list' id='row" + "NEXT" + "'>" +
                        "<div class='hnum listNum nxttrack'><span>" + "NEXT" + "</span></div>" +
                        "<div class='hnme'>" + titleTEMP + " - " + artistTEMP + "</div>" +
                        "</li>"
                    );
                }

            }, 20000);
        }

        function updateServerInfoSH(data) {
            $("div.radnme a", thisObj).text(data.servertitle).attr("href", data.serverurl);;
            $("div.rcurr > .cntn", thisObj).text(data.currentlisteners); // Option - out
            $("div.rpeak > .cntn", thisObj).text(data.peaklisteners); // Option - out
        }

        function updateSH(url, history) {
            setInterval(function () {
                $.getJSON(url, function (data) {

                    if (data.songtitle !== getTag()) {
                        updateTag(data.songtitle);
                        var artist = splitter(data.songtitle, "artist");
                        var title = splitter(data.songtitle, "title");
                        updateArtist(artist);
                        updateTitle(title);
                        mixture(artist, title);




                        updateHistory(history);
                        getNextSong(data);
                        updateServerInfoSH(data);
                    }
                })
                    .fail(function() { console.log("Error, in loading ShoutCast " + url); });
            }, 750);
        }

        //IceCast
        var history = new Array();

        function findMountPointData(data) {
            if (data.icestats.source.length === undefined){
                return data.icestats.source;
            }
            else{

                for (var i = 0; i < data.icestats.source.length; i++) {
                    var str = data.icestats.source[i].listenurl;

                    if (str.indexOf(settings.mount_point) >= 0) {
                        return data.icestats.source[i];
                    }
                }
            }
        }

        function updateHistoryIC(artist, title) {
            addToHistoryArray(title, artist);
            createHistoryRows();
        }

        function addToHistoryArray(title, artist) {
            history.unshift({ar: artist, tt: title});
        }

        function createHistoryRows(){
            $(".rhis ul li", thisObj).remove();

            for(var i = 0; i < history.length; i++){
                var rowNum = i;
                var listVal = rowNum;

                if (rowNum === 0) {
                    listVal = "NOW";
                }

                var artist = history[i].ar;
                var title = history[i].tt;

                var artistTEMP = textShortener(artist, 22);
                var titleTEMP = textShortener(title, 28);

                $(".rhis ul", thisObj).append(
                    "<li class='list' id='row" + rowNum + "'>" +
                    "<div class='hnum listNum'><span>" + listVal + "</span></div>" +
                    "<div class='hnme'>" + titleTEMP + " - " + artistTEMP + "</div>" +
                    "</li>"
                );
            }
        }

        function updateServerInfoIC(data) {
            $("div.radnme a", thisObj).text(data.server_name).attr("href", data.server_url);
            $("div.rcurr > .cntn", thisObj).text(data.listeners); // Option - out
            $("div.rpeak > .cntn", thisObj).text(data.listener_peak); // Option - out
        }

        function updateIC(url) {
            setInterval(function () {
                $.getJSON(url, function (data) {
                    var dataBit = findMountPointData(data);

                    if (dataBit.title != getTag()) {
                        updateTag(dataBit.title);
                        var artist = splitter(dataBit.title, "artist");
                        var title = splitter(dataBit.title, "title");
                        updateArtist(artist);
                        updateTitle(title);
                        mixture(artist, title);


                        if(history.length >= 20){
                            history = [];
                        }

                        updateHistoryIC(artist, title);
                        updateServerInfoIC(dataBit);
                    }
                })
                    .fail(function() { console.log("Error, in loading Icecast " + url); });;
            }, 750);
        }

        // Share
        function setFBShareAttr(siteURL) {
            var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(siteURL);
            $("div.fb", thisObj).find("a").attr("href", url);
        }

        function setTWShareAttr(siteURL) {
            var url = "https://twitter.com/home?status=" + encodeURIComponent(siteURL);
            $("div.tw", thisObj).find("a").attr("href", url);
        }

        function setEmailAttr(siteURL) {
            var radioName = $("div.radnme", thisObj).find("a").text();

            var subjectText = "Listen to " + radioName;
            var bodyText = "Check out the radio station " + radioName + " on " + siteURL;

            var url = 'mailto:' + '' + '?subject=' + subjectText + '&body=' + bodyText;
            $("div.emil", thisObj).on("click tap", function(event) {
                event.preventDefault();
                window.location = url;

            });
        }

        function ShareImplementation() {
            // Share implementations
            setTimeout(function(){
                "use strict";
                var trackURL = window.location.href;
                setFBShareAttr(trackURL);
                setTWShareAttr(trackURL);
                setEmailAttr(trackURL);
            }, 3000);
        }

        function mixture(artist, title){
            $(".itns", thisObj).removeClass("deselect");
            title = title.replace("?", "");
            var replacedArtist = artist.split(' ').join('+');
            var replacedTitle = title.split(' ').join('+');
            var iTunessearchArtist = "https://itunes.apple.com/search?term="+ replacedArtist +"&media=music&entity=song&attribute=artistTerm&limit=100&callback=?";
            var iTunessearchTrack = "https://itunes.apple.com/search?term="+ replacedTitle +"&media=music&entity=song&attribute=songTerm&limit=100&callback=?";

            (async () => {
                let image, data = await $.getJSON(iTunessearchArtist), link;
                if(data && settings.itunes) {
                    for(let value of data.results) {
                        if(!image && value.trackName.toLowerCase() === title.toLowerCase() || title.toLowerCase().indexOf(value.trackName.toLowerCase()) >= 0 || value.trackName.toLowerCase().indexOf(title.toLowerCase()) >= 0) {
                            link = value.trackViewUrl;
                            image = value.artworkUrl30.replace("30x30bb", "600x600");

                            break;
                        }
                    }

                } else {
                    // request failed
                }
                if(!image && settings.itunes) {
                    let data = await $.getJSON(iTunessearchTrack);
                    for(let value of data.results) {
                        if(!image && value.artistName.toLowerCase() === artist.toLowerCase() || artist.toLowerCase().indexOf(value.artistName.toLowerCase()) >= 0) {
                            link = value.trackViewUrl;
                            image = value.artworkUrl30.replace("30x30bb", "600x600");
                            break;
                        }
                        else{

                        }
                    }
                }
                if(!link) {
                    let tempURL = "https://itunes.apple.com/search?term="+ replacedArtist +"&media=music&entity=musicArtist&attribute=artistTerm&limit=10&callback=?";
                    let data = await $.getJSON(tempURL);
                    if(data.resultCount !== 0){
                        link = data.results[0].artistLinkUrl;
                    }
                }
                if(!image && settings.lastFM){ // Last.FM
                    artist = prepareArtistName(artist);
                    artist = encodeURI(artist);
                    let lastFMsearchArtist = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=" + settings.lastFMkey + "&format=json";
                    let data = await $.getJSON(lastFMsearchArtist);
                    if(data.error){
                        console.log(data.message);
                        console.log("The above error is for " + decodeURI(artist));
                    }
                    else if(data.artist.image[data.artist.image.length - 1]["#text"].length > 0){
                        image = data.artist.image[data.artist.image.length - 1]["#text"];
                    }
                    else{
                        console.log("No image is associated with \'"+ decodeURI(artist) + "\' on Last.FM!")
                    }
                }
                if(!image) {
                    image = settings.default_image;
                }
                if(!link){
                    link = "#";
                    $(".itns", thisObj).addClass("deselect");
                }

                $(".itns", thisObj).find("a").attr("href", link);
                $(".blur, .atwrk", thisObj).css("background-image", "url(" + image + ")");
            })().catch();

        }



        // Buttons
        $("div.mnu", thisObj).on("click tap", function() {
            var visibleObj = $('.mainsctn > div:visible', thisObj);
            if ($("div.bck", thisObj).css("display") === "none") {
                var inVisibleObj = $("div.bck", thisObj);
                setTimeout(function(){
                    $("div.mnu", thisObj).addClass("icon-cross");
                }, 600);
            } else {
                inVisibleObj = $("div.frnt", thisObj);
                setTimeout(function(){
                    $("div.mnu", thisObj).removeClass("icon-cross");
                }, 600);

            }
            visibleObj.fadeOut(500, function() {
                inVisibleObj.fadeIn(500);
            })
        });
        $("div.shr", thisObj).on("click tap", function() {
            if ($("div.pnl", thisObj).css("display") === "none") {
                $("div.pnl", thisObj).fadeIn(500, function() {
                    $(this, thisObj).css("display", "block");
                    $("div.shr", thisObj).toggleClass('pressed');
                })
            } else {
                $("div.pnl", thisObj).fadeOut(500, function() {
                    $(this, thisObj).css("display", "none");
                    $("div.shr", thisObj).toggleClass('pressed');
                });
            }
        });
        $(ppBtn, thisObj).on("click tap", function () {
            playManagement();
        });
        $("div.vlm", thisObj).on("click tap", function() {
            if ($("div.pnlVol", thisObj).css("display") === "none") {
                $("div.pnlVol", thisObj).fadeIn(500, function() {
                    $(this, thisObj).css("display", "block");
                    $("div.vlm", thisObj).toggleClass('pressed');
                })
            } else {
                $("div.pnlVol", thisObj).fadeOut(500, function() {
                    $(this, thisObj).css("display", "none");
                    $("div.vlm", thisObj).toggleClass('pressed');
                });
            }
        });
        $('.volsl', thisObj).on('input propertychange', function() {
            audio.volume = $(this).val() / 100;

            if ($(this).val() >= 75) {
                $("div.vlm", thisObj).addClass("icon-volume-100", 1000, "linear" );
                $("div.vlm", thisObj).removeClass("icon-volume-50 icon-volume-20 icon-mute2", 1000, "linear" );
            } else if ($(this).val() <= 74 && $(this).val() >= 50) {
                $("div.vlm", thisObj).addClass("icon-volume-50", 1000, "linear" );
                $("div.vlm", thisObj).removeClass("icon-volume-100 icon-volume-20 icon-mute2", 1000, "linear" );
            } else if ($(this).val() <= 49 && $(this).val() >= 1) {
                $("div.vlm", thisObj).addClass("icon-volume-20", 1000, "linear" );
                $("div.vlm", thisObj).removeClass("icon-volume-50 icon-volume-100 icon-mute2", 1000, "linear" );
            } else if ($(this).val() <= 0) {
                $("div.vlm", thisObj).addClass("icon-mute2", 1000, "linear" );
                $("div.vlm", thisObj).removeClass("icon-volume-50 icon-volume-20 icon-volume-100", 1000, "linear" );
            }

        });
    };


}(jQuery));