!function(y,k,b,i){var l={host:"",port:80,protocol:"http",version:2,sid:1,statsPath:"stats",playedPath:"played",directStreamURL:!1,ui:"colored",theme:"light",colors:{primary:"cyan",accent:"yellow"},startTemplate:"minimize",position:"right",container:"body",autoPlay:!1,autoUpdate:!0,artwork:!0,statusBar:!0,minimizeMaximize:!0,muteUnmute:!0,startMuted:!1,serverInfo:!1,played:!0,currentTrack:!0,currentArtist:!0,playedTracks:!0,playedArtists:!0,offlineCheck:!1,language:{offlineText:"Temporarily Offline",playedText:"Mari Diputer :",unknownTrackText:"Unknown Track",unknownArtistText:"Unknown Artist"},mobileCare:!1,irrelevantWords:["feat.","ft.","Feat.","Ft."],overHTTPS:!0,direct:!1,defaultArtwork:!1,betaProxies:!0,continuous:!1,onReady:function(){},onAudioLoad:function(){},onMobile:function(){},onPlay:function(){},onPause:function(){},onStop:function(){},onMinimize:function(){},onMaximize:function(){},onMute:function(){},onUnmute:function(){},onUpdate:function(){},onUpdateAll:function(){},onOffline:function(){},onOnline:function(){},onCurrentArtwork:function(){},onPlayedArtworks:function(){},onCurrentInfo:function(){},onPlayedInfo:function(){},onDynamicColors:function(){},onDynamicColorsContrast:function(){},onDynamicTheme:function(){}};function r(t,e){this.opt=y.extend({},l,e);if(!this.opt.host||!k.DOMParser||!b.implementation.createHTMLDocument)throw y.data(b.body,"plugin_kast",null),Error("Kast couldn't load");e.language&&(this.opt.language=y.extend({},l.language,e.language)),"object"==typeof e.colors&&(this.opt.colors=y.extend({},l.colors,e.colors)),"minimized"!==this.opt.startTemplate||this.opt.statusBar&&this.opt.minimizeMaximize||(this.opt.played=!1);var a=this.opt,r="https:"===b.location.protocol?"https":"http";a.direct&&"https"===r&&(a.protocol=r),this.host=a.protocol+"://"+a.host+":"+a.port+"/",this.hostCORS=[r+"https://mtl9.hnux.com/"+this.host,r+"https://player.cloudrad.io/"+this.host,r+"://zet.pluginsandthemes.ro/"+this.host,r+"://rbx2.hnux.com/"+this.host],a.overHTTPS&&"https:"===r&&(this.host=this.hostCORS[0]);var n=a.sid,s=a.directStreamURL||(1<n?this.host+"stream/"+n+"/;":this.host+";");this.audio=b.createElement("audio"),this.audio.src=s+"?_="+Math.random(),this.audio.load(),a.onAudioLoad(this.audio),this.mobile=!1,this.mobileMedium=!1,this.mobileUltra=!1;var i=a.mobileCare,o=i[1]||"599px";i&&k.matchMedia&&k.matchMedia("(max-width: "+o+")").matches&&(this.mobile=!0,a.autoPlay=!1,a.startTemplate="minimized",a.offlineCheck=!1,"medium"!==i[0]&&"high"!==i[0]&&"very high"!==i[0]&&"ultra"!==i[0]||(this.mobileMedium=!0,"all"===a.autoUpdate&&(a.autoUpdate=!0),"dynamic"===a.theme&&(a.theme="light"),"dynamic"===a.colors&&(a.colors=!1)),"high"!==i[0]&&"very high"!==i[0]&&"ultra"!==i[0]||(a.artwork=a.played=!1),"very high"!==i[0]&&"ultra"!==i[0]||(a.autoUpdate=a.minimizeMaximize=!1),"ultra"===i[0]&&(this.mobileUltra=!0,a.statusBar=a.serverInfo=a.currentArtist=a.currentTrack=!1),a.onMobile()),this.init()}var p=function(t){this.canvas=b.createElement("canvas"),this.context=this.canvas.getContext("2d"),b.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)},t=function(){};if(p.prototype={clear:function(){this.context.clearRect(0,0,this.width,this.height)},update:function(t){this.context.putImageData(t,0,0)},getPixelCount:function(){return this.width*this.height},getImageData:function(){return this.context.getImageData(0,0,this.width,this.height)},removeCanvas:function(){this.canvas.parentNode.removeChild(this.canvas)}},t.prototype.getPalette=function(t,e){for(var a,r,n,s,i=new p(t),o=i.getImageData().data,l=i.getPixelCount(),u=[],c=0;c<l;c+=10)r=o[(a=4*c)+0],n=o[a+1],s=o[a+2],125<=o[a+3]&&(250<r&&250<n&&250<s||u.push([r,n,s]));var d=f.quantize(u,e),m=d?d.palette():null;return i.removeCanvas(),m},!U)var U={map:function(t,a){var r={};return a?t.map(function(t,e){return r.index=e,a.call(r,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:e<t?1:0},sum:function(t,r){var n={};return t.reduce(r?function(t,e,a){return n.index=a,t+r.call(n,e)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?U.map(t,e):t)}};var f=function(){var w=5,A=8-w;function E(t,e,a){return(t<<2*w)+(e<<w)+a}function I(t){var e=[],a=!1;function r(){e.sort(t),a=!0}return{push:function(t){e.push(t),a=!1},peek:function(t){return a||r(),t===i&&(t=e.length-1),e[t]},pop:function(){return a||r(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return a||r(),e}}}function B(t,e,a,r,n,s,i){var o=this;o.r1=t,o.r2=e,o.g1=a,o.g2=r,o.b1=n,o.b2=s,o.histo=i}function z(){this.vboxes=new I(function(t,e){return U.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}function M(t,u){if(u.count()){var e=u.r2-u.r1+1,a=u.g2-u.g1+1,r=u.b2-u.b1+1,n=U.max([e,a,r]);if(1==u.count())return[u.copy()];var c,s,i,o,d=0,m=[],p=[];if(n==e)for(c=u.r1;c<=u.r2;c++){for(o=0,s=u.g1;s<=u.g2;s++)for(i=u.b1;i<=u.b2;i++)o+=t[E(c,s,i)]||0;d+=o,m[c]=d}else if(n==a)for(c=u.g1;c<=u.g2;c++){for(o=0,s=u.r1;s<=u.r2;s++)for(i=u.b1;i<=u.b2;i++)o+=t[E(s,c,i)]||0;d+=o,m[c]=d}else for(c=u.b1;c<=u.b2;c++){for(o=0,s=u.r1;s<=u.r2;s++)for(i=u.g1;i<=u.g2;i++)o+=t[E(s,i,c)]||0;d+=o,m[c]=d}return m.forEach(function(t,e){p[e]=d-t}),l(n==e?"r":n==a?"g":"b")}function l(t){var e,a,r,n,s,i=t+"1",o=t+"2",l=0;for(c=u[i];c<=u[o];c++)if(m[c]>d/2){for(r=u.copy(),n=u.copy(),s=(e=c-u[i])<=(a=u[o]-c)?Math.min(u[o]-1,~~(c+a/2)):Math.max(u[i],~~(c-1-e/2));!m[s];)s++;for(l=p[s];!l&&m[s-1];)l=p[--s];return r[o]=s,n[i]=r[o]+1,[r,n]}}}return B.prototype={volume:function(t){var e=this;return e._volume&&!t||(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(t){var e=this,a=e.histo;if(!e._count_set||t){var r,n,s,i=0;for(r=e.r1;r<=e.r2;r++)for(n=e.g1;n<=e.g2;n++)for(s=e.b1;s<=e.b2;s++)index=E(r,n,s),i+=a[index]||0;e._count=i,e._count_set=!0}return e._count},copy:function(){var t=this;return new B(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(t){var e=this,a=e.histo;if(!e._avg||t){var r,n,s,i,o=0,l=1<<8-w,u=0,c=0,d=0;for(n=e.r1;n<=e.r2;n++)for(s=e.g1;s<=e.g2;s++)for(i=e.b1;i<=e.b2;i++)o+=r=a[E(n,s,i)]||0,u+=r*(n+.5)*l,c+=r*(s+.5)*l,d+=r*(i+.5)*l;e._avg=o?[~~(u/o),~~(c/o),~~(d/o)]:[~~(l*(e.r1+e.r2+1)/2),~~(l*(e.g1+e.g2+1)/2),~~(l*(e.b1+e.b2+1)/2)]}return e._avg},contains:function(t){var e=this,a=t[0]>>A;return gval=t[1]>>A,bval=t[2]>>A,a>=e.r1&&a<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},z.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,a=0;a<e.size();a++)if(e.peek(a).vbox.contains(t))return e.peek(a).color;return this.nearest(t)},nearest:function(t){for(var e,a,r,n=this.vboxes,s=0;s<n.size();s++)((a=Math.sqrt(Math.pow(t[0]-n.peek(s).color[0],2)+Math.pow(t[1]-n.peek(s).color[1],2)+Math.pow(t[2]-n.peek(s).color[2],2)))<e||e===i)&&(e=a,r=n.peek(s).color);return r},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return U.naturalOrder(U.sum(t.color),U.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var a=t.length-1,r=t[a].color;251<r[0]&&251<r[1]&&251<r[2]&&(t[a].color=[255,255,255])}},{quantize:function(t,e){if(!t.length||e<2||256<e)return!1;var a,r,n,s,i,o,l=(a=t,o=new Array(1<<3*w),a.forEach(function(t){n=t[0]>>A,s=t[1]>>A,i=t[2]>>A,r=E(n,s,i),o[r]=(o[r]||0)+1}),o);l.forEach(function(){});var u,c,d,m,p,f,h,k,v,y,g=(u=l,v=h=p=1e6,y=k=f=0,t.forEach(function(t){c=t[0]>>A,d=t[1]>>A,m=t[2]>>A,c<p?p=c:f<c&&(f=c),d<h?h=d:k<d&&(k=d),m<v?v=m:y<m&&(y=m)}),new B(p,f,h,k,v,y,u)),b=new I(function(t,e){return U.naturalOrder(t.count(),e.count())});function x(t,e){for(var a,r=1,n=0;n<1e3;)if((a=t.pop()).count()){var s=M(l,a),i=s[0],o=s[1];if(!i)return;if(t.push(i),o&&(t.push(o),r++),e<=r)return;if(1e3<n++)return}else t.push(a),n++}b.push(g),x(b,.75*e);for(var C=new I(function(t,e){return U.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});b.size();)C.push(b.pop());x(C,e-C.size());for(var T=new z;C.size();)T.push(C.pop());return T}}}(),v=function(t){if(!t)return null;var e=t.match(/^rgba?[\s+]?\(\s*(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]))\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,?(?:\s*([\d.]+))?\s*\)?\s*/im);return e?146<=(299*parseInt(e[1],10)+587*parseInt(e[2],10)+114*parseInt(e[3],10))/1e3?"dark":"light":null},g=new t,x=function(t,e,a,r){for(var n,s=e.length,i=b.createDocumentFragment(),o=0;o<s;o++){if(t.direct)n=a[e[o]];else if(2===t.version)n=a.getElementsByTagName(e[o].toUpperCase())[0].textContent;else{var l=a.body.textContent.split(",");"currentlisteners"===e[o]?n=l[0]:"streamstatus"===e[o]?n=l[1]:"peaklisteners"===e[o]?n=l[2]:"maxlisteners"===e[o]?n=l[3]:"uniquelisteners"===e[o]?n=l[4]:"bitrate"===e[o]?n=l[5]:"songtitle"===e[o]&&(n=l[6])}o===s-1?i.appendChild(b.createTextNode(n)):i.appendChild(b.createTextNode(n+" - "))}r.appendChild(i)},C=function(e){var a;a=k.XMLHttpRequest?new XMLHttpRequest:new XDomainRequest;try{if(a.open("GET",e.url,!0),e.arraybuffer){if("string"!=typeof a.responseType)return void(e.error&&e.error());a.responseType="arraybuffer"}a.timeout=e.timeout||3e3}catch(t){return void(e.error&&e.error())}a.onload=function(){if(4===a.readyState)if(200===a.status){var t=e.arraybuffer?a.response:a.responseText;e.load(t,a)}else e.error&&e.error()},e.error&&(a.onerror=e.error),a.ontimeout=a.onerror,setTimeout(function(){a.send()},0),k.kastXHR=a},u=function(t){return t.replace(/(\[.*?\]|\(.*?\))/g,"").replace(/[|&^'`;:$%@"#<>+,]/g,"")};function T(t){var e=b.implementation.createHTMLDocument("html");return e.documentElement.innerHTML=t,e}var w=b.documentElement.classList;r.prototype={init:function(){var r=this,n=r.opt,t=b.querySelector(n.container),e=n.colors,a="object"==typeof e?"kast-primary-"+e.primary.replace(" ",""):"",s="object"==typeof e?"kast-accent-"+e.accent.replace(" ",""):"",i="string"==typeof e?"kast-colors-"+e:"",o=r.mobile&&r.mobileUltra?"kast-ultra":"",l=n.statusBar&&n.muteUnmute&&n.minimizeMaximize?"":"kast-not-full-statusbar",u=n.played?" kast-played ":" kast-current ",c="body"!==n.container?"kast-custom-container":"",d=t.offsetWidth<380?"kast-thin-container":"",m="dynamic"===n.theme?"kast-light":"",p="",f="";if(n.statusBar){var h=n.muteUnmute?'<i id="kast-volume" class="kast-mdi kast-mdi-volume-high"></i>':"",k=n.minimizeMaximize?'<i id="kast-minmax" class="kast-mdi kast-mdi-chevron-down"></i>':"";p='<div id="kast-bar"><p class="kast-offline-status">'+n.language.offlineText+'</p><p id="kast-server"></p>'+h+k+"</div>"}n.played&&(f='<div id="kast-bottom" class="kast-clearfix"><p>'+n.language.playedText+'</p><ul id="kast-playedlist" class="kast-clearfix"></ul></div>');var v=n.continuous?"kast-paused kast-continuous ":"kast-stopped ",y="";y+='<div id="kast" class="kast-recss kast-'+n.theme+" kast-"+n.ui+" "+a+" "+s+" "+i+" kast-"+n.startTemplate+" kast-"+n.position+" "+o+" "+l+u+" "+c+" "+m+" "+d+'">',y+='<div id="kast-wrapper">',y+=p,y+='<div id="kast-top" class="kast-default-art">',y+='<div class="kast-album-wrapper"><i class="kast-mdi kast-mdi-album"></i></div>',y+='<div id="kast-top-content" class="kast-top-content">',y+='<div id="kast-nowplaying"><p id="kast-np-title"></p><p id="kast-np-artist"></p></div>',y+='<div id="kast-linear"></div>',y+="</div>",y+='<div id="kast-play" class="'+v+'">',y+='<i class="kast-mdi kast-mdi-play"></i>',y+='<i class="kast-mdi kast-mdi-pause"></i>',y+='<i class="kast-mdi kast-mdi-stop"></i>',y+="</div></div>"+f+"</div></div>",t.insertAdjacentHTML("beforeend",y),n.onReady(),(n.statusBar||n.currentTrack||n.currentArtist)&&this.stats(function(t){var e=n.serverInfo;if(e&&n.statusBar){var a=b.getElementById("kast-server");"string"==typeof e?a.textContent=e:x(n,e,t,a)}r.stats(t)}),n.played&&(Array.isArray&&Array.isArray(n.artwork)?r.played(!1,!0):r.played());var g=n.autoUpdate;return"all"===g?r.autoUpdate("all"):g&&r.autoUpdate(!0),b.getElementById("kast-play").onclick=function(){-1===this.className.indexOf("playing")?r.play(!n.continuous):n.continuous?r.pause():r.stop()},n.statusBar&&(n.muteUnmute&&(b.getElementById("kast-volume").onclick=function(){-1!==this.className.indexOf("high")?r.mute():r.unmute()}),n.minimizeMaximize&&(b.getElementById("kast-minmax").onclick=function(){-1!==kast.className.indexOf("minimized")?r.maximize():r.minimize()})),n.autoPlay&&r.play(),n.startMuted&&r.mute(),this},play:function(t){var e=b.getElementById("kast"),a=b.getElementById("kast-play");if(w){var r=a.classList;r.remove("kast-paused"),r.remove("kast-stopped"),r.add("kast-playing")}else y(a).removeClass("kast-paused kast-stopped").addClass("kast-playing");var n=this.opt.offlineCheck&&"false"===e.getAttribute("data-offline");return(t||n)&&(this.audio.load(),n&&e.removeAttribute("data-offline")),this.audio.play(),this.opt.onPlay(this.audio),this},pause:function(){var t=b.getElementById("kast-play");if(w){var e=t.classList;e.remove("kast-playing"),e.remove("kast-stopped"),e.add("kast-paused"),e.add("kast-continuous")}else y(t).removeClass("kast-playing kast-stopped").addClass("kast-paused kast-continuous");return this.audio.pause(),this.opt.onPause(this.audio),this},stop:function(){var t=b.getElementById("kast-play");if(w){var e=t.classList;e.remove("kast-playing"),e.remove("kast-paused"),e.remove("kast-continuous"),e.add("kast-stopped")}else y(t).removeClass("kast-playing kast-paused kast-continuous").addClass("kast-stopped");return this.audio.pause(),this.opt.onStop(this.audio),this},mute:function(){return b.getElementById("kast-volume").className="kast-mdi kast-mdi-volume-off",this.audio.muted=!0,this.opt.onMute(this.audio),this},unmute:function(){return b.getElementById("kast-volume").className="kast-mdi kast-mdi-volume-high",this.audio.muted=!1,this.opt.onUnmute(this.audio),this},minimize:function(){var t=b.getElementById("kast");if(w){var e=t.classList;e.remove("kast-maximized"),e.add("kast-minimized")}else y(t).removeClass("kast-maximized").addClass("kast-minimized");return this.opt.onMinimize(),this},maximize:function(){var t=b.getElementById("kast");if(w){var e=t.classList;e.remove("kast-minimized"),e.add("kast-maximized")}else y(t).removeClass("kast-minimized").addClass("kast-maximized");return this.opt.onMaximize(),this},stats:function(n){var i=this,c=i.opt,d=b.getElementById("kast"),o=b.getElementById("kast-np-title"),l=b.getElementById("kast-np-artist"),u=b.getElementById("kast-top"),m=b.getElementById("kast-bar"),p=b.getElementById("kast-top-content"),f=b.getElementById("kast-play"),s=function(t){var e,a,r,n=c.language.unknownTrackText,s=c.language.unknownArtistText;try{e=(c.direct?t.songtitle:2===c.version?t.getElementsByTagName("SONGTITLE")[0].textContent:t.body.textContent.split(",")[6])||s+" - "+n}catch(t){e=s+" - "+n}a="string"==typeof c.currentTrack?c.currentTrack:e.split(" - ")[1]||e||n,r="string"==typeof c.currentArtist?c.currentArtist:e.split(" - ")[0]||s,c.currentTrack&&(o.textContent=a),c.currentArtist&&(l.textContent=r),c.artwork&&i.artwork(r,a,function(t){if(t){var e=t[0],a=t[1]||e;u.style.backgroundImage="url("+e+")",u.removeAttribute("class"),c.onCurrentArtwork(e),"dynamic"!==c.theme&&"dynamic"!==c.colors||!k.Blob||C({url:a,arraybuffer:!0,load:function(t,e){k.URL=k.URL||k.webkitURL;var u=b.createElement("img"),a=e.getResponseHeader("content-type"),r=new Uint8Array(t),n=new Blob([r],{type:a});u.src=k.URL.createObjectURL(n),u.onload=function(){var t=g.getPalette(u,5),e="rgb("+t[0]+")",a="rgb("+t[1]+")",r=v(e)||"light",n="kast-primary-"+r,s=v(a)||"dark",i="kast-accent-"+s;if("dynamic"===c.colors){var o=c.continuous?"kast-paused ":"kast-stopped ";-1!==f.className.indexOf("playing")?f.className="kast-playing "+i:f.className=o+i,c.continuous&&(f.className+=" kast-continuous "),p.className="kast-top-content "+n,c.statusBar&&(m.className=n),f.style.backgroundColor=a,"colored"===c.ui&&(p.style.backgroundColor=e),c.onDynamicColors(e,a),c.onDynamicColorsContrast(r,s)}if("dynamic"===c.theme)if("light"===r){if(w)(l=d.classList).remove("kast-dark"),l.add("kast-light");else y(d).removeClass("kast-dark").addClass("kast-light");c.onDynamicTheme("light")}else{var l;if(w)(l=d.classList).remove("kast-light"),l.add("kast-dark");else y(d).removeClass("kast-light").addClass("kast-dark");c.onDynamicTheme("dark")}k.URL.revokeObjectURL(u.src),u=null}}})}else{if(w){var r=d.classList,n=f.classList;n.remove("kast-accent-light"),n.remove("kast-accent-dark"),"dark"===c.theme?(r.remove("kast-light"),r.add("kast-dark")):(r.remove("kast-dark"),r.add("kast-light"))}else y(f).removeClass("kast-accent-light kast-accent-dark"),"dark"===c.theme?y(d).removeClass("kast-light").addClass("kast-dark"):y(d).removeClass("kast-dark").addClass("kast-light");u.className="kast-default-art",c.statusBar&&m.removeAttribute("class"),f.removeAttribute("style"),u.removeAttribute("style"),p.removeAttribute("style"),p.className="kast-top-content"}}),c.onCurrentInfo(a,r)};if("object"==typeof n)s(n);else{var h=function(t,a){var e=t+c.statsPath+"?sid="+c.sid,r=1===c.version?"#":"?_=";1===c.version&&(e=t+"7.html"),C({url:e+r+Math.random(),timeout:8e3,load:function(t){var e=1===c.version?T(t):(new DOMParser).parseFromString(t,"text/xml");"function"==typeof n?n(e):s(e)},error:function(){if(a){var t=d.hasAttribute("data-offline"),e=b.getElementById("kast-np-title");c.offlineCheck&&c.autoUpdate&&!t&&(w?d.classList.add("kast-offline"):y(d).addClass("kast-offline"),d.setAttribute("data-offline","true"),c.onOffline()),e.hasChildNodes()||s("error")}else h(i.hostCORS[c.betaProxies?3:1],!0)}})};c.direct?y.ajax({url:i.host+c.statsPath+"?sid="+c.sid+"&json=1&_="+Math.random(),dataType:"jsonp",timeout:8e3,success:function(t){"function"==typeof n?n(t):s(t)},error:function(){var t=d.hasAttribute("data-offline"),e=b.getElementById("kast-np-title");c.offlineCheck&&c.autoUpdate&&!t&&(w?d.classList.add("kast-offline"):y(d).addClass("kast-offline"),d.setAttribute("data-offline","true"),c.onOffline()),e.hasChildNodes()||s("error")}}):h(i.hostCORS[c.betaProxies?2:0],!1)}return this},played:function(n,h){var k=this,v=k.opt,i=b.getElementById("kast-playedlist"),s=function(t){for(;i.firstChild;)i.removeChild(i.firstChild);var e,a,r=b.createDocumentFragment(),p=v.language.unknownTrackText,f=v.language.unknownArtistText;try{a=(e=v.direct?t:2===v.version?t.getElementsByTagName("SONG"):t.getElementsByTagName("table")[2].getElementsByTagName("tr")).length}catch(t){a=3}for(var n=function(t,e,a,r){var n,s,i;try{i=(v.direct?e[t].title:2===v.version?e[t].getElementsByTagName("TITLE")[0].textContent:e[t].getElementsByTagName("td")[1].textContent)||f+" - "+p}catch(t){i=f+" - "+p}v.playedTracks&&(n=i.split(" - ")[1]||i||p),v.playedArtists&&(s=i.split(" - ")[0]||f);var o=b.createElement("li"),l=b.createElement("div"),u=b.createElement("i"),c=b.createElement("div"),d=b.createElement("p"),m=b.createElement("p");l.className="kast-p-art",u.className="kast-mdi kast-mdi-album",c.className="kast-p-info",d.className="kast-p-title",d.textContent=n,m.className="kast-p-artist",m.textContent=s,o.appendChild(l),o.appendChild(c),l.appendChild(u),c.appendChild(d),c.appendChild(m),v.artwork&&!h?k.artwork(s,n,function(t){t?(l.style.backgroundImage="url("+t[1]+")",v.onPlayedArtworks(t[1])):l.className="kast-p-art kast-p-default-art"}):l.className="kast-p-art kast-p-default-art",v.onPlayedInfo(n,s),r.appendChild(o)},s=2===v.version?1:2;s<a;s++)n(s,e,0,r);i.appendChild(r)},o=function(t,e){var a=t+v.playedPath+"?sid="+v.sid+"&type=xml",r=1===v.version?"#":"&_=";1===v.version&&(a=t+v.playedPath+".html"),C({url:a+r+Math.random(),timeout:8e3,load:function(t){var e=1===v.version?T(t):(new DOMParser).parseFromString(t,"text/xml");n?n(e):s(e)},error:function(t){e?i.hasChildNodes()||s("error"):o(k.hostCORS[v.betaProxies?3:1],!0)}})};return v.direct?y.ajax({url:k.host+v.playedPath+"?sid="+v.sid+"&type=json",timeout:8e3,dataType:"jsonp",success:function(t){n?n(t):s(t)},error:function(){i.hasChildNodes()||s("error")}}):o(k.hostCORS[v.betaProxies?2:0],!1),this},autoUpdate:function(u){var c,d=this,m=d.opt,p=b.getElementById("kast"),f=b.getElementById("kast-server"),h=b.getElementById("kast-play");if(w&&(c=p.classList),!u)return clearInterval(p.getAttribute("data-interval")),void p.removeAttribute("data-interval");var t=8e3;return d.mobile&&(t=d.mobileMedium?16e3:12e3),function(t,e){if(!p.hasAttribute("data-interval")){var a=setInterval(t,e);p.setAttribute("data-interval",a)}}(function(){d.stats(function(t){var e=-1!==h.className.indexOf("playing");if(m.offlineCheck){var a=m.direct?t.streamstatus:2===m.version?t.getElementsByTagName("STREAMSTATUS")[0].textContent:t.body.textContent.split(",")[1],r=p.hasAttribute("data-offline");t&&1==a?r&&(w?c.remove("kast-offline"):y(p).removeClass("kast-offline"),p.setAttribute("data-offline","false"),m.onOnline()):r||(w?c.add("kast-offline"):y(p).addClass("kast-offline"),p.setAttribute("data-offline","true"),m.onOffline())}if(e&&d.play(),"all"===u){var n=m.serverInfo,s=m.statusBar;"string"!=typeof n&&s&&(f.textContent="",x(m,n,t,f))}var i="string"==typeof m.currentTrack&&"string"==typeof m.currentArtist;if(i&&!m.played)return m.onUpdate(t),void m.onUpdateAll(t);var o=m.direct?t.songtitle:2===m.version?t.getElementsByTagName("SONGTITLE")[0].textContent:t.body.textContent.split(",")[6],l=p.getAttribute("data-current");if(!l)return p.setAttribute("data-current",o);l!==o&&(i||d.stats(t),m.played&&(Array.isArray&&Array.isArray(m.artwork)?d.played(!1,!0):d.played()),p.setAttribute("data-current",o),m.onUpdate(t)),m.onUpdateAll(t)})},t),this},artwork:function(t,e,i){var a=this.opt;if(Array.isArray&&Array.isArray(a.artwork))return i(a.artwork);if(t===a.language.unknownArtistText)return i(null);var r=u(t),n=u(e);if(ajaxArtwork=function(t,e,a){var r,n=new RegExp(/ /,"g"),s=t.replace(n,"+")+"+-+"+e.replace(n,"+");r=s,y.ajax({type:"GET",url:"https://itunes.apple.com/search?term="+r+"&entity=song&limit=1",contentType:"application/json",dataType:"jsonp",success:function(t){if(0==t.resultCount)return i(null);i([t.results[0].artworkUrl100.replace("100x100","640x640"),t.results[0].artworkUrl60.replace("60x60","74x74")])}})},iW=a.irrelevantWords,iW){for(var s=iW.length,o=0;o<s;o++)r=r.replace(iW[o],""),n=n.replace(iW[o],"");ajaxArtwork(r,n)}else ajaxArtwork(r,n);return this},destroy:function(){k.kastXHR&&k.kastXHR.abort(),this.autoUpdate(!1),this.audio.pause(),y.data(b.body,"plugin_kast",null);var t=b.getElementById("kast");return t&&t.parentNode.removeChild(t),this}},y.kast=function(t,e){var a=b.body;if(y.data(a,"plugin_kast"))"function"==typeof r.prototype[t]&&y.data(a,"plugin_kast")[t](e);else{if("destroy"===t)return;y.data(a,"plugin_kast",new r(this,t))}}}(jQuery,window,document);
