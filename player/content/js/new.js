var mrpjq=jQuery;
(function(d){d.fn.mrp=function(c){function Ba(a){(function(a,l,f){var b=a.getElementsByTagName(l)[0];a.getElementById(f)||(a=a.createElement(l),a.id=f,a.src="//connect.facebook.net/en_US/sdk.js",b.parentNode.insertBefore(a,b))})(document,"script","facebook-jssdk");window.fbAsyncInit=function(){FB.init({appId:a,xfbml:!0,version:"v2.9"})}}function Xa(a){if(m){if(!U){if("touchstart"==a.type){if(a=a.originalEvent.touches,!(a&&0<a.length))return!1}else a.preventDefault();U=!0;O.on(J,function(a){a:{if("touchmove"==a.type){if(a.originalEvent.touches&&
a.originalEvent.touches.length)var b=a.originalEvent.touches;else if(a.originalEvent.changedTouches&&a.originalEvent.changedTouches.length)b=a.originalEvent.changedTouches;else break a;if(1<b.length)break a;b=b[0]}else b=a;a.preventDefault();Ca(b)}}).on(V,function(a){a:if(U){U=!1;O.off(J).off(V);if("touchend"==a.type){if(a.originalEvent.touches&&a.originalEvent.touches.length)var b=a.originalEvent.touches;else if(a.originalEvent.changedTouches&&a.originalEvent.changedTouches.length)b=a.originalEvent.changedTouches;
else break a;if(1<b.length)break a;b=b[0]}else b=a;a.preventDefault();Ca(b)}})}return!1}}function E(){if(!m)return!1;0<g?(ia=g,g=0):g=ia;W()}function Ca(a){F?(g=Math.max(0,Math.min(1,(a.pageY-A.offset().top)/B)),g=1-g):g=Math.max(0,Math.min(1,(a.pageX-A.offset().left)/B));W()}function W(a){"undefined"!==typeof a&&(g=a);h&&(h.volume=g);a=F?"height":"width";MRPUtils.isNumber(B)||(B=F?A.height():A.width());Ya.css(a,g*B+"px");0==g?(P.find(".mrp-volume-icon").hide(),P.find(".mrp-mute-icon").show()):(P.find(".mrp-volume-icon").show(),
P.find(".mrp-mute-icon").hide())}function Da(a){var b=F?a.pageY-A.offset().top:a.pageX-A.offset().left;0>b?b=0:b>B&&(b=B);b=Math.max(0,Math.min(1,b/B));if(!MRPUtils.isNumber(b))return!1;F&&(b=1-b);b=parseInt(100*b,10);r.text(b+" %");b=e[0].getBoundingClientRect();var l=y[0].getBoundingClientRect();if(F){var f=parseInt(l.left-b.left-r.outerWidth()/2+y.outerWidth()/2);a=parseInt(a.pageY-Ea.scrollTop()-b.top-r.outerHeight()-10)}else f=parseInt(a.pageX-Ea.scrollLeft()-b.left-r.outerWidth()/2),a=parseInt(l.top-
b.top-r.outerHeight());0>a+b.top&&(a=parseInt(l.top-b.top+r.outerHeight()+15));r.css({left:f+"px",top:a+"px"}).show()}function Za(a){if(!m)return!1;a=d(a.currentTarget);if(a.hasClass("mrp-playback-toggle"))p.togglePlayback();else if(a.hasClass("mrp-volume-btn"))Q&&void 0==a.attr("data-toggle-mute")||E();else if(a.hasClass("mrp-popup-toggle"))p.openPopup();else if(a.hasClass("mrp-share-item")){a=a.attr("data-type").toLowerCase();var b=(window.screen.width-600)/2,l=(window.screen.height-300)/2,f=z||
"",c=n.description||"",e=Fa||"",h=n.share||window.location.href,g;MRPUtils.relativePath(e)||(e=MRPUtils.qualifyURL(e));"facebook"==a?window.FB&&FB.ui({method:"share_open_graph",action_type:"og.shares",action_properties:JSON.stringify({object:{"og:url":h,"og:title":f,"og:description":c,"og:image":e}})}):"twitter"==a?g=Ga+"//twitter.com/share?url="+encodeURIComponent(h)+"&text="+encodeURIComponent(f):"tumblr"==a&&(g=Ga+"//www.tumblr.com/share/link?url="+encodeURIComponent(h)+"&amp;name="+encodeURIComponent(f)+
"&amp;description="+encodeURIComponent(c));g&&window.open(g,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=600,height=300,left="+b+",top="+l)}}function X(a){if("undefined"===typeof mCustomScrollbar)if(window.playlistScrollLoading)var b=setInterval(function(){playlistScrollLoading||(clearInterval(b),X(a))},100);else{window.playlistScrollLoading=!0;var l=document.createElement("script");l.type="text/javascript";l.src=MRPUtils.qualifyURL(ja+"js/jquery.mCustomScrollbar.concat.min.js");l.onload=
l.onreadystatechange=function(){this.readyState&&"complete"!=this.readyState||(X(a),window.playlistScrollLoading=!1)};l.onerror=function(){alert("Error loading "+this.src)};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(l,f)}else a.mCustomScrollbar({axis:"horizontal"==$a?"x":"y",theme:c.scrollTheme,scrollInertia:0,mouseWheel:{normalizeDelta:!0,deltaFactor:50,preventDefault:!0},keyboard:{enable:!1},advanced:{autoExpandHorizontalScroll:!0},callbacks:{onOverflowYNone:function(){a.find(".mCSB_container").addClass("mrp-mCSB_full")},
onOverflowY:function(){a.find(".mCSB_container").removeClass("mrp-mCSB_full")}}})}function ka(a){R=!0;Ha.show();la&&Ia();la=a;n=ab(a);v=n.type;W(g);Ja?(Ja=!1,setTimeout(function(){Ka()},250)):Ka()}function ma(){var a=n.radio;";"==a.substring(a.length-1)&&(a=a.substring(0,a.length-1));window.radioDataXHR&&window.radioDataXHR.abort();var b=new XMLHttpRequest;b.onerror=function(a){};b.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){if(n.version&&1==n.version)var a=b.responseText.split(","),
f=a[6];else a=JSON.parse(b.responseText),f=a.songtitle;G=a;if(Y)z?z!=f&&na():na();else{var c=f.split("-");a=d.trim(c[0]);c=d.trim(c[1]);q=[];w=-1;q.push({artist:a,title:c,thumb:C});K=1;z?z!=f&&(C?D():H()):C?D():H()}z=f}else S||(t&&clearInterval(t),t=setInterval(function(){ma()},Z))};n.version&&1==n.version?b.open("GET",L[x]+a+"7.html",!0):b.open("GET",L[x]+a+"stats?sid=1&json=1",!0);b.send();window.radioDataXHR=b}function na(){q=[];w=-1;var a=n.radio;";"==a.substring(a.length-1)&&(a=a.substring(0,
a.length-1));window.radioXHR&&window.radioXHR.abort();var b=new XMLHttpRequest;b.onerror=function(a){};b.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var a=b.responseText,c=a.indexOf("Song Title")+12;a=a.substr(c,a.length);a=a.split("</td><td>");a.shift();var d;K=a.length;La&&(K=1);for(d=0;d<K;d++){c=a[d].indexOf("</");a[d]=a[d].substr(0,c);a[d]=a[d].replace(/<\/?[^>]+(>|$)/g,"");var e=a[d].split(" - ");c=e[0].trim();e=e[1]?e[1].trim():"";0==d?q.push({artist:c,title:e,
thumb:C}):q.push({artist:c,title:e,thumb:oa})}C||oa?D():H()}else S||(t&&clearInterval(t),t=setInterval(function(){na()},Z))};b.open("GET",L[x]+a+"played.html");b.send();window.radioXHR=b}function pa(){var a=n.radio;";"==a.substring(a.length-1)&&(a=a.substring(0,a.length-1));window.radioXHR&&window.radioXHR.abort();a=new XMLHttpRequest;a.onerror=function(a){};a.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var a=JSON.parse(this.responseText);if(void 0===a.icestats.source.length)var c=
a.icestats.source;else{var f,e=a.icestats.source.length;for(f=0;f<e;f++)if(0<=a.icestats.source[f].listenurl.indexOf(n.mountpoint)){c=a.icestats.source[f];break}}G=c;a=c.title;f=a.split("-");c=d.trim(f[0]);f=d.trim(f[1]);q=[];w=-1;q.push({artist:c,title:f,thumb:!0});K=1;z?z!=a&&(C?D():H()):C?D():H();z=a}else S||(t&&clearInterval(t),t=setInterval(function(){pa()},Z))};a.open("GET",L[x]+n.radio+"/status-json.xsl",!0);a.send();window.radioXHR=a}function H(){Ha.hide();x=0;if("shoutcast"==v)if(La){var a=
q.shift();qa(a);Y&&(0==k.length?k.push(a):(k[0].artist==a.artist&&k[0].title==a.title&&k[0].thumb==a.thumb||k.unshift(a),10<k.length&&k.pop(),1<k.length&&ra(k.slice(1))))}else qa(q.shift()),Y&&ra(q);else"icecast"==v&&(a=q.shift(),qa(a),Y&&(0==k.length?k.push(a):(k[0].artist==a.artist&&k[0].title==a.title&&k[0].thumb==a.thumb||k.unshift(a),10<k.length&&k.pop(),1<k.length&&ra(k.slice(1)))));S=!0;R=!1;t&&clearInterval(t);t=setInterval(function(){"shoutcast"==v?ma():"icecast"==v&&pa()},Z)}function D(){w++;
if(w==K)H();else if(!oa&&0<w)H();else if(q[w].thumb){var a=q[w].artist,b=q[w].title,c,d=sa.length;for(c=0;c<d;c++)a=a.replace(sa[c],""),b=b.replace(sa[c],"");c=L[x]+"https://itunes.apple.com/search?type=jsonp&term=="+encodeURI(a)+" "+encodeURI(b)+"&media=music&limit=1";a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var a=JSON.parse(this.responseText);a=a.resultCount?a.results[0].artworkUrl100:u;q[w]&&(q[w].thumb=a,D())}else 403===this.status&&q[w]&&
(x++,x>L.length-1&&(x=0),D())};a.open("GET",c,!0);a.send();window.artworkDataXHR=a}else D()}function ra(a){ta.empty();var b,c=a.length,f;for(b=0;b<c;b++){var e=a[b];var g=d('<div class="mrp-playlist-item"/>');if((f=e.thumb||u)&&!0!==f){var h=new Image;h.className="mrp-playlist-thumb-img";h.onload=function(){this.className+=" mrp-visible"};h.src=f;d('<span class="mrp-playlist-thumb"></span>').append(h).appendTo(g)}f=d('<span class="mrp-playlist-info"></span>').appendTo(g);e=bb.replace("%title%",e.title).replace("%artist%",
e.artist);d(e).appendTo(f);g.appendTo(ta)}Ma&&!Na&&(Na=!0,X(aa))}function cb(){var a,b,c,e,h,g;ba.find(".mrp-playlist").each(function(){a=d(this);b=d('<div class="mrp-playlist-item"/>').on("click",function(){if(R)return!1;var a=d(this);if(a.hasClass("mrp-playlist-item-active"))return!1;ca&&ca.removeClass("mrp-playlist-item-active");ca=a.addClass("mrp-playlist-item-active");setTimeout(function(){ua.click()},500);ka(a)});var f=a.attr("data-radio-thumb");if(f){var l=new Image;l.className="mrp-playlist-thumb-img";
l.onload=function(){this.className+=" mrp-visible"};l.src=f;d('<span class="mrp-playlist-thumb"></span>').append(l).appendTo(b)}e=d('<span class="mrp-playlist-info"></span>').appendTo(b);c=a.attr("data-radio-title")||"";h=db.replace("%title%",c);d(h).appendTo(e);g=a.prop("attributes");d.each(g,function(){"id"!=this.name&&"class"!=this.name&&(b.attr(this.name,this.value),"data-mrp-playlist-item-active"==this.name&&(ca=b.addClass("mrp-playlist-item-active").removeAttr("data-mrp-playlist-item-active")))});
b.appendTo(eb)});Ma&&!va&&(va=!0,X(wa))}function qa(a){Oa.html(a.title);Pa.html(a.artist);if(!C)if(u)a.thumb=u;else return;var b=a.thumb;if(b&&(Fa=b=b==u&&Qa?Qa:b.replace("100x100bb",c.playerArtworkSize),da.hasClass("mrp-thumb-hidden")?da.css("background-image","url("+b+")").removeClass("mrp-thumb-hidden"):(Ra.css("background-image","url("+b+")").removeClass("mrp-thumb-hidden"),da.addClass("mrp-thumb-hidden")),"mediaSession"in navigator)){b=a.thumb!=u?a.thumb.replace("100x100bb","96x96bb"):u;var d=
a.thumb!=u?a.thumb.replace("100x100bb","128x128bb"):u,e=a.thumb!=u?a.thumb.replace("100x100bb","192x192bb"):u,h=a.thumb!=u?a.thumb.replace("100x100bb","512x512bb"):u,g=a.thumb!=u?a.thumb.replace("100x100bb","640x640bb"):u;navigator.mediaSession.metadata=new MediaMetadata({title:a.title,artist:a.artist,artwork:[{src:b,sizes:"96x96",type:"image/png"},{src:d,sizes:"128x128",type:"image/png"},{src:e,sizes:"192x192",type:"image/png"},{src:h,sizes:"512x512",type:"image/png"},{src:g,sizes:"640x640",type:"image/png"},
{src:g,sizes:"512x512",type:"image/png"}]})}}function Ka(){Sa||(T=d(document.createElement("audio")).attr("preload",fb),h=T[0],Sa=!0);xa=n.radio;n.mountpoint&&(xa+=n.mountpoint);h.src=xa;T.on("ended",function(){}).on("canplay",function(a){}).on("canplaythrough",function(a){}).on("loadedmetadata",function(){n.playbackRate&&(h.playbackRate=Number(n.playbackRate))}).on("play",function(){ya||(ya=!0,d(p).trigger("soundStart",{instance:p,instanceName:M,radioData:G}));if(gb&&1<mrp_mediaArr.length){var a,
c=mrp_mediaArr.length;for(a=0;a<c;a++)p!=mrp_mediaArr[a].inst&&mrp_mediaArr[a].inst.pauseMedia()}I.find(".mrp-play-icon").hide();I.find(".mrp-pause-icon").show();N=!0;d(p).trigger("soundPlay",{instance:p,instanceName:M,radioData:G})}).on("pause",function(){I.find(".mrp-play-icon").show();I.find(".mrp-pause-icon").hide();N=!1;d(p).trigger("soundPause",{instance:p,instanceName:M,radioData:G})}).on("error",function(a){d(p).trigger("soundError",{instance:p,instanceName:M})});if(ea){var a=h.play();void 0!==
a&&a.then(function(){})["catch"](function(a){})}h.volume=g;ea=!0;"shoutcast"==v?ma():"icecast"==v&&pa()}function Ta(){t&&clearInterval(t);t=null;h&&(h.pause(),h.src="");T&&T.off("ended canplay canplaythrough loadedmetadata pause play error");Oa.html("");Pa.html("");Ra.css("background-image","none").addClass("mrp-thumb-hidden");da.css("background-image","none").addClass("mrp-thumb-hidden");v=G=null;ya=N=!1;I.find(".mrp-play-icon").show();I.find(".mrp-pause-icon").hide()}function Ia(){window.radioXHR&&
(window.radioXHR.abort(),delete window.radioXHR);window.radioDataXHR&&(window.radioDataXHR.abort(),delete window.radioDataXHR);window.artworkDataXHR&&(window.artworkDataXHR.abort(),delete window.artworkDataXHR);v&&Ta();x=0;ta.empty();S=null;k=[]}function ab(a){var b={};void 0!=a.attr("data-type")&&(b.type=a.attr("data-type"));void 0!=a.attr("data-radio-url")&&(b.radio=a.attr("data-radio-url"),"icecast"==b.type&&(b.mountpoint=b.radio.substr(b.radio.lastIndexOf("/")+1),b.radio=b.radio.substr(0,b.radio.lastIndexOf("/")+
1)));void 0!=a.attr("data-version")&&(b.version=a.attr("data-version"));return b}d(this).hasClass("mrp-fixed")&&d(this).appendTo(d("body")).css("opacity",1);var e=d(this),eb=e.find(".mrp-playlist-content"),wa=e.find(".mrp-playlist-inner"),ta=e.find(".mrp-history-content"),aa=e.find(".mrp-history-inner"),hb=e.find(".mrp-popup-toggle"),Ra=e.find(".mrp-player-thumb1"),da=e.find(".mrp-player-thumb2"),Oa=e.find(".mrp-player-title"),Pa=e.find(".mrp-player-artist"),I=e.find(".mrp-playback-toggle"),Ha=e.find(".mrp-preloader"),
ua=e.find(".mrp-history-title").on("click",function(){if(!m||d(this).hasClass("mrp-title-active"))return!1;aa.css({transform:"translateX(0px)"});wa.css({transform:"translateX(0)"});ua.addClass("mrp-title-active");Ua.removeClass("mrp-title-active")}),Ua=e.find(".mrp-station-title").on("click",function(){if(!m||d(this).hasClass("mrp-title-active"))return!1;aa.css({transform:"translateX(-100%)"});wa.css({transform:"translateX(-100%)"});ua.removeClass("mrp-title-active");Ua.addClass("mrp-title-active")});
c=d.extend(!0,{},{playlistList:"#mrp-playlist-list",volume:.5,preload:"auto",togglePlaybackOnMultipleInstances:!0,useKeyboardNavigationForPlayback:!1,scrollOrientation:"vertical",scrollTheme:"minimal",cors:"https://kastproxy-us.herokuapp.com/,https://kastproxy-eu.herokuapp.com/,https://cors-anywhere.herokuapp.com/,https://mtl9.hnux.com/",getPlayerArtwork:!0,getHistoryArtwork:!1,createHistoryList:!0,playerArtworkSize:"512x512bb",instanceName:"player"+Math.floor(1E6*Math.random()),historyTitleMarkup:'<span class="mrp-playlist-title">%title%</span><span class="mrp-playlist-artist">%artist%</span>',
playlistTitleMarkup:'<span class="mrp-playlist-title">%title%</span>',defaultHistoryArtwork:"data/default_artwork/star_small.png",defaultPlayerArtwork:"data/default_artwork/podcast.png"},c);var Q=MRPUtils.isMobile();MRPUtils.hasLocalStorage();var ba=d(c.playlistList),ja=c.sourcePath,M=c.instanceName,ea=c.autoPlay,fb=c.preload,Ma=c.useScroll,$a=c.scrollOrientation,ib=c.useKeyboardNavigationForPlayback,Va=c.facebookAppId,g=c.volume,L=c.cors.split(",").map(function(a){return a.trim()}),gb=c.togglePlaybackOnMultipleInstances,
C=c.getPlayerArtwork,Qa=c.defaultPlayerArtwork,oa=c.getHistoryArtwork,u=c.defaultHistoryArtwork,Y=c.createHistoryList,La=c.createHistoryListAsItPlays,bb=c.historyTitleMarkup,db=c.playlistTitleMarkup,p=this;d("body");var Ea=d(window),O=d(document);MRPUtils.isIOS();MRPUtils.isAndroid();var jb=MRPUtils.isChrome(),kb=MRPUtils.isSafari(),Ga="https:"==window.location.protocol?"https:":"http:",lb=MRPUtils.volumeCanBeSet(),Sa,T,h,G,S,z,Fa,Na,va,k=[],q=[],w,K,t,Z=c.lastPlayedInterval,ya,v,xa,N,n,la,R=!0,ca,
sa=["feat.","ft.","Feat.","Ft."],x=0;"undefined"===typeof window.mrp_mediaArr&&(window.mrp_mediaArr=[]);window.mrp_mediaArr.push({inst:p,id:M});if(ea&&!MRPUtils.iFrame&&(jb||kb)&&!Q){var mb=MRPUtils.qualifyURL(ja+"data/silence.mp3");MRPUtils.iFrame=d('<iframe src="'+mb+'" allow="autoplay" style="display:none"></iframe>').appendTo("body");var Ja=!0}Q&&(ea=!1);MRPUtils.isEmpty(Va)||"file:"==window.location.protocol?console.log("facebookAppId has not been set in settings!"):Ba(Va);var r=e.find(".mrp-tooltip");
Q||("static"==e.css("position")&&console.log("wrapper css position is static, therefore tooltip might not work correctly. Please set wrapper css to other than static."),e.on("mouseenter","[data-tooltip]",function(a){var b=d(this);a=e[0].getBoundingClientRect();var c=b[0].getBoundingClientRect();r.text(b.attr("data-tooltip"));var f=parseInt(c.top-a.top-r.outerHeight());b=parseInt(c.left-a.left-r.outerWidth()/2+b.outerWidth()/2);b+r.outerWidth()>e.width()?b=e.width()-r.outerWidth():0>b&&(b=0);0>f+a.top&&
(f=parseInt(c.top-a.top+r.outerHeight()+15));r.css({left:b+"px",top:f+"px"}).show()}).on("mouseleave","[data-tooltip]",function(a){r.hide()}));if("ontouchstart"in window){var za="touchstart.ap mousedown.ap";var J="touchmove.ap mousemove.ap";var V="touchend.ap mouseup.ap"}else window.PointerEvent?(za="pointerdown.ap",J="pointermove.ap",V="pointerup.ap"):(za="mousedown.ap",J="mousemove.ap",V="mouseup.ap");var ia=.5,U,P=e.find(".mrp-volume-toggle"),y=e.find(".mrp-volume-seekbar"),A=e.find(".mrp-volume-bg"),
Ya=e.find(".mrp-volume-level"),F=void 0!=y.attr("data-is-vertical")?!0:!1,B=F?A.height():A.width();0>g?g=0:1<g&&(g=1);0!=g&&(ia=g);if(lb)y.on(za,function(a){Xa(a);return!1});else P.remove();if(!Q){var fa=function(){y.off(J,Da).off("mouseout",fa);O.off("mouseout",fa);r.hide()};y.on("mouseover",function(){y.on(J,Da).on("mouseout",fa);O.on("mouseout",fa)})}ib&&O.keyup(function(a){if(!m)return!1;var b=a.keyCode;d(a.target);32==b?(p.togglePlayback(),a.preventDefault()):77==b&&E()});var Wa=[e.find(".mrp-share-item"),
hb,I,e.find(".mrp-volume-btn")],nb=Wa.length,ha;for(ha=0;ha<nb;ha++)d(Wa[ha]).css("cursor","pointer").on("click",Za);this.playMedia=function(){if(!m||!v||N)return!1;if(h){h.load();var a=h.play();void 0!==a&&a.then(function(){})["catch"](function(a){})}};this.pauseMedia=function(){if(!m||!v||!N)return!1;h&&h.pause()};this.togglePlayback=function(){if(!m||!v)return!1;if(h)if(h.paused){h.load();var a=h.play();void 0!==a&&a.then(function(){})["catch"](function(a){})}else h.pause()};this.destroyInstance=
function(){window.radioXHR&&(window.radioXHR.abort(),delete window.radioXHR);window.radioDataXHR&&(window.radioDataXHR.abort(),delete window.radioDataXHR);window.artworkDataXHR&&(window.artworkDataXHR.abort(),delete window.artworkDataXHR);y&&y.off();Ta();"undefined"!==typeof mCustomScrollbar&&aa.mCustomScrollbar("destroy");va=!1};this.destroyPlaylist=function(){if(!m)return!1;Ia()};this.loadPlaylist=function(a){if(!m||R)return!1;if("undefined"===typeof a||MRPUtils.isEmpty(a))return alert("loadPlaylist method requires id parameter. loadPlaylist failed."),
!1;if(la==a)return!1;a=ba.find(d(a));if(0==a.length)return alert("Failed playlist selection! Playlist - "+c.activePlaylist+" does not exist. Check activePlaylist option in settings!"),!1;ka(a)};this.openPopup=function(){if(!m)return!1;if("function"===typeof mrpOpenPopup)mrpOpenPopup(p,c);else{var a=document.createElement("script");a.type="text/javascript";a.src=MRPUtils.qualifyURL(ja+"js/popup.js?35");a.onload=a.onreadystatechange=function(){this.readyState&&"complete"!=this.readyState||mrpOpenPopup(p,
c)};a.onerror=function(){alert("Error loading "+this.src)};var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}};this.getRadioData=function(){return m?G:!1};this.getPlaylistLoading=function(){return R};this.setPlaybackRate=function(a){if(!m||!v)return!1;h&&(h.playbackRate=Number(a))};this.setVolume=function(a){if(!m)return!1;0>a?a=0:1<a&&(a=1);W(a)};this.getVolume=function(){return g};this.toggleMute=function(){if(!m)return!1;E()};this.getSetupDone=function(){return m};
this.getMediaPlaying=function(){return m?N:!1};this.getWrapper=function(){return e};this.getPlaylistList=function(){return ba};this.getSettings=function(){return c};var m=!0;d(p).trigger("setupDone",{instance:p,instanceName:M});if(c.activePlaylist){var Aa=ba.find(d(c.activePlaylist));0==Aa.length&&alert("Failed playlist selection! Playlist - "+c.activePlaylist+" does not exist. Check activePlaylist option in settings!");Aa.attr("data-mrp-playlist-item-active",1);ka(Aa)}c.createRadioList&&cb();return this}})(jQuery);
(function(d){var c=function(){};c.isEmpty=function(c){return 0==c.replace(/^\s+|\s+$/g,"").length};c.isNumber=function(c){return!isNaN(parseFloat(c))&&isFinite(c)};c.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent)};c.isIE=function(){var c=-1;if("Microsoft Internet Explorer"==navigator.appName){var d=navigator.userAgent,E=/MSIE ([0-9]{1,}[.0-9]{0,})/;null!=E.exec(d)&&(c=parseFloat(RegExp.$1))}else"Netscape"==navigator.appName&&(d=navigator.userAgent,
E=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,null!=E.exec(d)&&(c=parseFloat(RegExp.$1)));return-1!=c?!0:!1};c.isIOS=function(){return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)};c.isAndroid=function(){return-1<navigator.userAgent.indexOf("Android")};c.qualifyURL=function(c){var d=document.createElement("a");d.href=c;return d.href};c.relativePath=function(c){return/^(?:[a-z]+:)?\/\//i.test(c)};c.hasLocalStorage=function(){try{return"localStorage"in d&&null!==d.localStorage}catch(Ba){return!1}};c.isChrome=
function(){return!!d.chrome&&(!!d.chrome.webstore||!!d.chrome.runtime)};c.isSafari=function(){return 0<Object.prototype.toString.call(d.HTMLElement).indexOf("Constructor")};c.volumeCanBeSet=function(){var c=document.createElement("audio");if(!c)return!1;c.volume=0;return 0==c.volume?!0:!1};d.MRPUtils=c})(window);
