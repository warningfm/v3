(function ($) {
    "use strict";
	$(".nng").append('');
	$.fn.nng = function (options) {
        var settings = $.extend({
            // Default Settings
            URL: "",
			version: "2",
            stream_id: 1,
			mount_point: "", //For Icecast server
			type: "/;type=mp3",
            streampath: "/stream",			
			enable_cors: false,
			cors: "https://shoutcastapps.herokuapp.com",			
			artwork: true,
            logo: "https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg",
			servertitle: "mbah nunung Online", //For Shoutcast v1 server
            show_listeners: true,    
            src: "",
            volume: 0.95,			
            autoplay: true
        }, options);
        var thisObj;
        thisObj = this;
        var audio;
        var ppBtn = $(".ppBtn", thisObj);		
        var cVolumeSlider = $(".volume-slider", thisObj);
        var cVolumeIcon = $(".icons-volume", thisObj);
		var cVolumeIconM = $(".icons-volumeM", thisObj);
        audio = new Audio();
        audio.volume = settings.volume;
        audio.preload = "auto";
		//$(".album-cover", thisObj).css({'background-image': 'url('+ settings.logo +')', 'background-size': '100% 100%'});
		//$(".blur", thisObj).css({'background': 'url('+ settings.logo +')', 'background-size': '100% 100%'});
		
		thisObj.each(function () {
            if(settings.autoplay == true){
                audio.autoplay = true;
            }

            if(settings.version == 1) {
                audio.src = settings.URL + "/;type=mp3";
                settings.src = audio.src;				
                var dataURL = settings.cors + "?q=" + settings.URL + "/7.html";
                var hisURL = settings.cors + "?q=" + settings.URL + "/played.html";
                getSH(dataURL, hisURL);
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
                getSH(dataURL, hisURL);				
            }

            else if(settings.version == "icecast") {
                audio.src = settings.URL + "/" + settings.mount_point;
                settings.src = audio.src;
				var dataURL = settings.cors + "?q=" + settings.URL + "/status-json.xsl";
                getIC(dataURL);				
            }
        });
		
		
		//Format title and artist for album cover gathering
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
		
        function getSH(url, sHistory) {
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
                                updateHistoryIC(artist, title);
                                FBShare(result);
                                TWShare2(result);								
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
								var servertitle = result.servertitle;
                                updateArtist(artist);
                                updateTitle(title);
                                updateServerInfo(result);
								updateHistory(sHistory);
                                if (settings.artwork == true) { 
									getCover(artist, title); 
								};
                                FBShare(result);
                                TWShare(result);								
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
                    url: settings.cors + "/?q=" + settings.URL + "/status-json.xsl",
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
						        if (settings.artwork == true) { 
									getCover(artist, title); 
								};
                                updateServerInfoIC(result);
								updateHistoryIC(artist, title);
								FBShare(result);
								TWShare3(result);
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
		
		 //Update Track Info	
        function getTag() {
            return $(thisObj).attr("data-tag");
        }
		
		function updateArtist(name) {
            $(".artist-name", thisObj).text(name);
        }
		
        function updateTitle(name) {
            $(".songtitle", thisObj).text(name);
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
                            cover = cover.replace('100x100', '500x500');
					    }
                        else {
                            var cover = settings.logo;
					    }
                        $(".artwork", thisObj).css({'background-image': 'url('+ cover +')', 'background-size': '100% 100%'});
						            $(".bg-artwork").css({'background-image': 'url('+ cover +')', 'background-size': 'cover', 'background-position-x': '50%', 'background-position-y': '50%'});
                        $(".artwork", thisObj).addClass("bounceInDown");
                        setTimeout( function(){ 
                           $(".artwork", thisObj).removeClass("bounceInDown");
                        }, 5000 );
                        $(".blur", thisObj).css({'background': 'url('+ cover +')', 'background-size': '100% 100%'});
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
        $(".servertitle", thisObj).text(settings.servertitle);
				$(".listeners", thisObj).text(result.split(",")[0]);
            }
			
			else if(settings.version == 2) {
				$(".servertitle", thisObj).text(result.servertitle);
				$(".listeners", thisObj).text(result.currentlisteners);
			}
		}
		
		//Update Song History
        function updateHistory(url) {
            $(".history ul li", thisObj).remove();			
            if(settings.version == 1){
			    //Do nothing
            }
			
    			else if(settings.version == 2){
    				$(".row-wpr").remove();

							doCORSRequest({
								  method: 'GET',
								  url: url/*,
								  data: dataField.value*/
							}, function printResult(result) {    
    						            
                            //console.log("history: " + result);
                            var startPoint=result.indexOf("([{")+1;
														var lengthPoint=result.indexOf("}])")-startPoint+2;
														var historystring=result.substr(startPoint,lengthPoint);
                            //console.log("history after: " + historystring);
                            var historyarray=jQuery.parseJSON(historystring);
                            //console.log("row: " + historyarray[0].title);
                            for (var i = 1; i < 6; i++) {
                                var rowNum = i;
    							              var listVal = rowNum;
                                
                                var songtitle = historyarray[i].title;
    							              var songtitleSplit = songtitle.split('-');
                                var artist = songtitleSplit[0];
                                var title = songtitleSplit[1];
                                $(".history-wpr").append(
    								            "<div class='row-wpr'><div class='history-cover' id='row" + rowNum +"'></div><div class='history-track-info'><div class='history-songtitle'>" + title + "</div><div class='history-artist-name'>"+ artist + "</div></div><div class='rowNum'>"+ listVal + "</div></div>"
                                );
    							
                  							getImageList(artist, title, rowNum);
                  							console.log("Play: "+artist+" - "+title);
                            }
 
              });
     
    			}	
        }
		
		
		function getImageList(artist, title, i) {
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
                            cover = cover.replace('100x100', '400x400');
					    }
                        else {
                            var cover = settings.logo;
					    }
                        $('#row'+ i).css({"background-image": "url(" + cover + ")", "background-size": "100% 100%"});
                    },
				error: 
				function() { console.log("#getImageList(), Error in loading history image list for "  + decodeURI(artist)) }
            })  
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
                                updateServerInfoIC(result);
								updateHistoryIC(artist, title);
								FBShare(result);
								TWShare3(result);
                            }
                        }
                   })	
                }
			    foo();
		        setInterval(foo, 30000); 
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

		function updateServerInfoIC(data) {            
			$(".servertitle", thisObj).text(data.server_name);
			$(".listeners", thisObj).text(data.listeners);
        }
		
		function updateHistoryIC(artist, title) {
            addToArray(artist, title);
            createHisList();
        }

        function addToArray(artist, title) {
            icHis.unshift({ar: artist, tt: title});
			icHis.length = icHis.length < 6 ? icHis.length : 6;
        }
		
		function createHisList(){
			$(".row-wpr", thisObj).remove();
            for(var i = 1; i < icHis.length; i++){
                var rowNum = i;
				var listVal = rowNum;
                var artist = icHis[i].ar;
                var title = icHis[i].tt;
                $(".history-wpr", thisObj).append(
					"<div class='row-wpr'><div class='history-cover' id='row" + rowNum +"'></div><div class='history-track-info'><div class='history-songtitle'>" + title + "</div><div class='history-artist-name'>"+ artist + "</div></div><div class='rowNum'>"+ listVal + "</div></div>"
                );
				//getImageList(artist, title, rowNum);
            }
        }

  
  // CORSRequest    
	function doCORSRequest(options, printResult) {
		var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
		//var cors_api_url = 'https://crossorigin.me/';
		var x = new XMLHttpRequest();
		x.open(options.method, cors_api_url + options.url);
		x.onload = x.onerror = function() {
		  printResult(
			options.method + ' ' + options.url + '\n' +
			x.status + ' ' + x.statusText + '\n\n' + 
			(x.responseText || '')
		  );
		};

		//////x.setRequestHeader("Origin", "X-Requested-With");
		if (/^POST/i.test(options.method)) {
		  x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		}
		x.send(options.data);
	} 
      
    };

})(jQuery);
