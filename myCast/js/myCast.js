/*! myCast - Fantastic Shoutcast & Icecast Radio Player  v1.8 [10/30/18] - (c) 2017, Diego Navarro [dgone1988@gmail.com] */
(function ($) {
    "use strict";
	$(".myCast").append('<div class="player-wpr"><div class="bg-wpr"> <div class="ppBtn play-btn"></div><div class="blur"></div><div class="data-panel animated"> <div class="data-panel-row"> <div class="data-panel-info"><span class="listenersTxt"></span><span class="qualityTxt"></span><span class="genreTxt"></span></div><div class="data-panel-r-icon"><i class="fa fa-bolt" aria-hidden="true"></i></div></div><div class="data-panel-row"> <div class="data-panel-info"> <div class="history"> <ul></ul> </div></div><div class="data-panel-r-icon"><i class="fa fa-history" aria-hidden="true"></i></div></div><div class="data-panel-row"> <div class="data-panel-info"> <div class="share"> <ul> <li class="afacebook"><i class="fa fa-facebook facebook" aria-hidden="true"></i><a target="_blank" href="#">Facebook</a></li><li class="atwitter"><i class="fa fa-twitter twitter" aria-hidden="true"></i><a target="_blank" href="#">Twitter</a></li><li class="agoogle"><i class="fa fa-google google" aria-hidden="true"></i><a target="_blank" href="#">Google+</a></li></div></div><div class="data-panel-r-icon"><i class="fa fa-share-alt" aria-hidden="true"></i></div></div></div><div class="more fa"></div><div class="player-ctr"><div class="album-cover-wpr"> <div class="album-cover animated"></div></div><div class="album-cover-wpr2"> <div class="album-cover2 animated"></div></div><div class="track-info animated"> <div class="track-title animated"></div><div class="artist-name animated"></div></div><div class="controls-wpr animated"> <div class="vol-icon fa"></div><div class="volume-slider-wpr"> <input class="volume-slider" type="range" min="0" max="100" step="0.10" value="" autocomplete="off"><span class="vol-value"></span></div></div></div></div></div>');
	$.fn.myCast = function (options) {
        var settings = $.extend({
            // Default Settings
            URL: "",
			version: "2",
            stream_id: 1,
			mount_point: "", //For Icecast
			type: "/;type=mp3",
            streampath: "/stream?icy=http",
			enable_cors: false,
			cors: "https://plugstream.herokuapp.com/",
			artwork: true,
            logo: "https://live.staticflickr.com/65535/53373243248_fcb877c3d8_n.jpg",
			vertical_layout: false,
            bg: "grey",
            accent: "deeporange",
			blur: false,
			blur_opacity: 0.16,
            lang: "en",            
            src: "",
            volume: 0.75,			
            autoplay: false

        }, options);
        var thisObj;
        thisObj = this;
        var audio;
        var cBGwpr = $(".bg-wpr", thisObj);
        var ppBtn = $(".ppBtn", thisObj);		
        var cVolumeSlider = $(".volume-slider", thisObj);
        var cVolumeIcon = $(".vol-icon", thisObj);		
        audio = new Audio();
        audio.volume = settings.volume;
        audio.preload = "auto";
		$(".album-cover, .album-cover2", thisObj).css({'background-image': 'url('+ settings.logo +')', 'background-size': '100% 100%'});
		$(".blur", thisObj).css({'background-image': 'url('+ settings.logo +')', 'background-position': 'center center', 'opacity': + settings.blur_opacity, 'filter': 'blur(5px)', '-ms-filter': 'blur(5px)', '-webkit-filter': 'blur(5px)', 'transition': 'opacity 1s ease-in', 'transition-delay': '1.5s'});
		
		thisObj.each(function () {
            if(settings.bg.length > 0){
                $(cBGwpr).addClass('bg-' + settings.bg);				
            }
			if(settings.accent.length > 0){              
                $(cBGwpr).addClass("accent-" + settings.accent);				
            }
			if(settings.blur == true){
                $(".blur", thisObj).css('display', 'block');
            }
            if (settings.autoplay == true){
                audio.autoplay = true;
            }
            if (settings.vertical_layout == true){
                $(".player-wpr", thisObj).addClass("vertical");
                $(".album-cover-wpr", thisObj).addClass("hidden");
            }
            ShareButtons();
			
            if(settings.version == 1) {
                audio.src = settings.URL + "/;type=mp3";
                settings.src = audio.src;				
                var dataURL = settings.cors + "?q=" + settings.URL + "/7.html";
                var hisURL = settings.cors + "?q=" + settings.URL + "/played.html";
                getSD(dataURL, hisURL);
            }

            else if(settings.version == 2) {
				audio.src = settings.URL + settings.streampath;
				settings.src = audio.src;				
                if(settings.enable_cors == true) {
					var dataURL = settings.cors + "?q=" + settings.URL + "/stats?sid="+ settings.stream_id +"&json=1&callback=?";
					var hisURL = settings.cors + "?q=" + settings.URL + "/played?sid="+ settings.stream_id +"&type=json&callback=?";
				}
				else {
					var dataURL = settings.URL + "/stats?sid="+ settings.stream_id +"&json=1&callback=?";
					var hisURL = settings.URL + "/played?sid="+ settings.stream_id +"&type=json&callback=?";
				}
                getSD(dataURL, hisURL);				
            }

            else if(settings.version == "icecast") {
                audio.src = settings.URL + "/" + settings.mount_point;
                settings.src = audio.src;
                var dataURL = settings.cors + "?q=" + settings.URL + "/status-json.xsl";
                getIC(dataURL);				
            }

        });
		
		//Play/Pause Handling
        function togglePlying(tog, bool) {
            $(tog).toggleClass("playing", bool);
        }

        function playHandling() {
            if (audio.paused) {
                audio.src = settings.src;
                audio.play();
                var $playing = $('.ppBtn.playing');
                if ($(thisObj).find($playing).length === 0) {
                    $playing.click();
                }
            }
            else {
                audio.pause();
            }
        }
		
        $(audio).on("playing", function () {
            togglePlying(ppBtn, true);
            $(ppBtn).addClass("stop-btn");
            $(ppBtn).removeClass("play-btn");
        });
        $(audio).on("pause", function () {
            togglePlying(ppBtn, false);
            $(ppBtn).removeClass("stop-btn");
            $(ppBtn).addClass("play-btn");
        });		
        $(ppBtn, thisObj).on("click tap", function () {
            playHandling();
        });
		
        //Initial Visual Volume
        var volVal = audio.volume * 100;
        $(cVolumeSlider).val(volVal);
        $(".vol-value", thisObj).text(volVal +'%');
        volumeIcon();

        //Volume Icon Handling
        function volumeIcon() {
            if($(cVolumeSlider).val() < 55 && $(cVolumeSlider).val() > 0){
                $(cVolumeIcon).removeClass("vol-icon3 vol-icon1");
                $(cVolumeIcon).addClass("vol-icon2");				
            }
            if($(cVolumeSlider).val() == 0){
                $(cVolumeIcon).removeClass("vol-icon2 vol-icon3");
                $(cVolumeIcon).addClass("vol-icon1");				
            }
            else if($(cVolumeSlider).val() > 55){
                $(cVolumeIcon).removeClass("vol-icon1 vol-icon2");
                $(cVolumeIcon).addClass("vol-icon3");
            }
        }
		
        //Volume Slider Handling			
        if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
			{
			cVolumeSlider.change('input', function(){
			audio.volume = parseInt(this.value, 10)/100;
			var volumeVal = audio.volume * 100;
			var volumeVal = Math.round(volumeVal);
			$(".vol-value", thisObj).text(volumeVal + '%');
			volumeIcon();
			
			}, false);
		
			}
		
        else {
            cVolumeSlider.on('input',  function () {
            var volumeVal = $(cVolumeSlider).val();
            audio.volume = volumeVal/100;		
            var volumeVal = Math.round(volumeVal);
            $(".vol-value", thisObj).text(volumeVal +'%')		
            volumeIcon();			

            });			
        }

		 //Update Track Info	
        function getTag() {
            return $(thisObj).attr("data-tag");
        }
		function formatArtist(artist){
            artist = artist.toLowerCase();			
			artist = $.trim(artist);
            if (artist.includes("&")) {
                 artist = artist.substr(0, artist.indexOf(' &'));				
            }
            else if(artist.includes("feat")) {
                artist = artist.substr(0, artist.indexOf(' feat'));
            } else if (artist.includes("ft.")) {
                artist = artist.substr(0, artist.indexOf(' ft.'));
            }

            return artist;
        }
		
		function formatTitle(title){
            title = title.toLowerCase();            
			title = $.trim(title);
            if (title.includes("&")) {
                title = title.replace('&', 'and');				
            }
            else if(title.includes("(")) {
                title = title.substr(0, title.indexOf(' ('));
            } else if (title.includes("ft")) {
                title = title.substr(0, title.indexOf(' ft'));
            }

            return title;
        }
        function getSD(url, sHistory) {
		    if(settings.version == 1) {
			    function foo() {
                    $.ajax ({
				    type: 'GET',
                    dataType: 'html',
                    url: url,
                    success: 
                        function(data) {						
					        var result = $.parseHTML(data)[1].data;
						    var songtitle  = result.split(",")[6];
					        if (songtitle != getTag()) {
                                updateTag(songtitle);
                                var songtitleSplit = songtitle.split('-');
                                var artist = songtitleSplit[0];
                                var title = songtitleSplit[1];
                                updateArtist(artist);
                                updateTitle(title);
                                updateServerInfo(result);
                                if (settings.artwork == true) { 
									getCover(artist, title); 
								};						
                                updateHistory(sHistory);                             						
                            }
                        },
					error: 
						function() { console.log("error getting metadata") }
                    })	
                }
			    foo();
		        setInterval(foo, 12000); 
			}
            
            else if(settings.version == 2) {
			    function foo() {
                    $.ajax ({
                    dataType: 'jsonp',
                    url: url,
                    success: 
                        function(result) {
                            if (result.songtitle != getTag()) {
                                updateTag(result.songtitle);
                                var songtitle = result.songtitle;
                                var songtitleSplit = songtitle.split('-');
                                var artist = songtitleSplit[0];
                                var title = songtitleSplit[1];
                                updateArtist(artist);
                                updateTitle(title);
                                updateServerInfo(result);
                                if (settings.artwork == true) { 
									getCover(artist, title); 
								};						
                                updateHistory(sHistory);                             						
                            }
                        },
					error: 
						function() { console.log("error getting metadata") }
                    })	
                }
			        foo();
		            setInterval(foo, 12000); 
			}		
        }
		
		//Icecast
		function getIC(url) {		                
            if(settings.version == "icecast") {
			    function foo() {
                    $.ajax ({
                    dataType: 'json',
                    url: url,
                    success: 
                        function(data) {
                            var result = findMPData(data);
                            if (result.title != getTag()) {
                                updateTag(result.title);
						        var songtitle = result.title;
                                var songtitleSplit = songtitle.split('-');
                                var artist = songtitleSplit[0];
                                var title = songtitleSplit[1];
                                updateArtist(artist);
                                updateTitle(title);
						        getCover(artist, title);
                                if (icHis.length >= 20){
                                    icHis = [];
                                }
                                updateHistoryIC(artist, title);
                                updateServerInfoIC(result);
                            }
                        },
					error: 
						function() { console.log("error getting metadata") }
                   })	
                }
			    foo();
		        setInterval(foo, 12000);
			}	
        }
		
		var icHis = new Array();
		
		function findMPData(data) {
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
		
		function updateArtist(name) {
            $(".artist-name", thisObj).text(name);
			$(".artist-name", thisObj).addClass("lightSpeedIn");
			setTimeout( function(){ 
                $(".artist-name", thisObj).removeClass("lightSpeedIn"); 
            }, 3000 );
        }

        function updateTitle(name) {
            $(".track-title", thisObj).text(name);
            $(".track-title", thisObj).addClass("lightSpeedIn");			
            setTimeout( function(){ 
                $(".track-title", thisObj).removeClass("lightSpeedIn"); 
            }, 3000 );
        }
		
        function updateTag(data) {
            $(thisObj).attr("data-tag", data);
        }
		
		//Album Cover Handling
		function getCover(artist, title) {		
			artist = formatArtist(artist);
			title = formatTitle(title);
            artist = encodeURI(artist);
            title = encodeURI(title);	
            var url = "https://itunes.apple.com/search?term==" + artist + "-" + title + "&media=music&limit=1";
            $.ajax ({
                dataType: 'jsonp',
                url: url,
                success:
                    function(data) {						
                        if (data.results.length == 1){							
                            cover = data.results[0].artworkUrl100;
                            cover = cover.replace('100x100', '300x300');
					    }
                        else {
                            var cover = settings.logo;
					    }
                        var blur_opacity = settings.blur_opacity;
                        if (settings.blur_opacity < 0.31){
                           var blur_level = "5px";
                        }
                        else {
                           var blur_level ="18px";
                        }
                        $(".album-cover, .album-cover2", thisObj).css({'background-image': 'url('+ cover +')', 'background-size': '100% 100%'});
                        $(".album-cover, .album-cover2", thisObj).addClass("fadeIn");
                        setTimeout( function(){ 
                           $(".album-cover, .album-cover2", thisObj).removeClass("fadeIn");
                        }, 5000 );
                        $(".blur", thisObj).css({'background-image': 'url('+ cover +')', 'background-position': 'center center', 'opacity': + blur_opacity, 'filter': 'blur(' + blur_level +')', '-ms-filter': 'blur(' + blur_level +')', '-webkit-filter': 'blur(' + blur_level +')', 'transition': 'opacity 1s ease-in', 'transition-delay': '1.5s'});
                    },				
                error: 
                    function() {
                        console.log("Error on track title " + encodeURI(title));
                    }
            })
        }
		
		//Update Server Info		
		function updateServerInfo(result) {
			if(settings.version == 1) {
                $(".listenersTxt", thisObj).text(listenersTxt + ": " + result.split(",")[0]);
                $(".qualityTxt", thisObj).text(qualityTxt + ": " + result.split(",")[5] + "kbps");
            }
			
			else if(settings.version == 2) {
				$(".listenersTxt", thisObj).text(listenersTxt + ": " + result.currentlisteners);
                $(".qualityTxt", thisObj).text(qualityTxt + ": " + result.bitrate + "k");
                $(".genreTxt", thisObj).text(genreTxt + ": " + result.servergenre +", " + result.servergenre2);
			}
		}
		
		//Update Song History
        function updateHistory(url) {
            $(".history ul li", thisObj).remove();			
            if(settings.version == 1){
			    $.ajax({
                    type: 'GET', 
                    url: url,
                    dataType: 'html',
                    success: function(data) {
                        var result = $(data).find("table")[2];
			            var table = $(result);
			            var tbody = $(result).find("tbody");
			            var tr = $(tbody).find("tr");
			            var td = $(tr).find("td");
			                $(".history ul", thisObj).append(
                                "<li class='list' id='row" +  "'>" + "1 - "  + td[3].innerHTML + "</li>" +
							    "<li class='list' id='row" +  "'>" + "2 - "  + td[6].innerHTML + "</li>" +
							    "<li class='list' id='row" +  "'>" + "3 - "  + td[8].innerHTML + "</li>" +
							    "<li class='list' id='row" +  "'>" + "4 - "  + td[10].innerHTML + "</li>" + 
							    "<li class='list' id='row" +  "'>" + "5 - "  + td[12].innerHTML + "</li>" + 
							    "<li class='list' id='row" +  "'>" + "6 - "  + td[14].innerHTML + "</li>" + 
							    "<li class='list' id='row" +  "'>" + "7 - "  + td[16].innerHTML + "</li>"
                            );
                    }
		        })
            }
			
			else if(settings.version == 2){
				$.ajax ({
                dataType: 'jsonp',
                url: url,
                success: 
                    function(data) {
                        for (var i = 1; i < data.length; i++) {
                            var rows = i;
                            var title = data[i].title;
                            $(".history ul", thisObj).append(
                                "<li class='list' id='row" +  "'>" + rows + " - " + title + "</li>"
                            );
                        }
                    }
                })
			}			
        }
		
		function updateHistoryIC(artist, title) {
            addToArray(title, artist);
            createHisList();
        }

        function addToArray(title, artist) {
            icHis.unshift({ar: artist, tt: title});
        }
		
		function createHisList(){
            $(".history ul li", thisObj).remove();

            for(var i = 0; i < icHis.length; i++){
                var rows = i;
                var artist = icHis[i].ar;
                var title = icHis[i].tt;
                $(".history ul", thisObj).append(
					"<li class='list' id='row" +  "'>" + rows + " - " + title + " - " + artist + "</li>"
                );
            }
        }
		
		function updateServerInfoIC(data) {            
			$(".listenersTxt", thisObj).text(listenersTxt + ": " + data.listeners);
            $(".qualityTxt", thisObj).text(qualityTxt + ": " + data.bitrate + "k");
            $(".genreTxt", thisObj).text(genreTxt + ": " + data.genre);
        }

        // Data Panel Handling
        $('.more', thisObj).on("click tap", function() {
            if (!$(".more", thisObj).hasClass("morert")) {
                $(".more", thisObj).addClass("morert");
                $(".controls-wpr, .track-info, .album-cover-wpr", thisObj).fadeOut("slow");			
				$(".data-panel", thisObj).delay(600).fadeIn(400);
            }
            else if($(".more", thisObj).hasClass("morert")){
                $(".more", thisObj).removeClass("morert");
                $(".data-panel", thisObj).fadeOut(400);
				$(".controls-wpr, .track-info, .album-cover-wpr", thisObj).delay(600).fadeIn(400);
            }			
        });
		
		// Share
		function ShareButtons() {
            setTimeout(function(){
                "use strict";
                var trackURL = window.location.href;
                FBShareLink(trackURL);
                TWShareLink(trackURL);
                GPShareLink(trackURL);
            }, 3500);
        }
		
        function FBShareLink(siteURL) {
            var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(siteURL);
            $("li.afacebook", thisObj).find("a").attr("href", url);
        }

        function TWShareLink(siteURL) {
            var url = "https://twitter.com/home?status="  + encodeURIComponent(siteURL);
            $("li.atwitter", thisObj).find("a").attr("href", url);
        }

        function GPShareLink(siteURL) {
            var url = "https://plus.google.com/share?url=" + encodeURIComponent(siteURL);
            $("li.agoogle", thisObj).find("a").attr("href", url);
        }
		//Mobile Volume Classes
		if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
			$(cVolumeSlider).addClass("dis-none");
			$(".vol-value").addClass("dis-none");
			$(cVolumeIcon).addClass("vol-dis");
			}

        //Language
        if (settings.lang == "en") {
                var listenersTxt = "Online";
                var qualityTxt = "Qlty";
                var genreTxt = "Genre";
		}
			
        if (settings.lang == "es") {
                var listenersTxt = "En Linea";
                var qualityTxt = "Calidad";
                var genreTxt = "Genero";
		}
		
		if (settings.lang == "pt") {
                var listenersTxt = "Conectados";
                var qualityTxt = "Qualidade";
                var genreTxt = "GÃªnero";
		}
		
		if (settings.lang == "fr") {
                var listenersTxt = "En Ligne";
                var qualityTxt = "QualitÃ©";
                var genreTxt = "Genre";
		}
		
		if (settings.lang == "it") {
                var listenersTxt = "In Linea";
                var qualityTxt = "QualitÃ ";
                var genreTxt = "Genere";
		}
    };

})(jQuery);
