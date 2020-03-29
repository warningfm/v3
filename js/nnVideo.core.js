/*
   nnVideo Object for Core-Developers
*/

// Chapter 1: Beginning
if (typeof jQuery !== 'function') {
  var warnJQueryUndefinedStr = 'nnVideo.core.js needs jQuery 1.1x.x to run properly!';
  console.log(warnJQueryUndefinedStr);
  alert(warnJQueryUndefinedStr);
  throw new Error(warnJQueryUndefinedStr); // this line will stop the script
};



// Chapter 2: Configuration
var nnVideo = {};
nnVideo.playerName     = 'nnVideo';
nnVideo.coreVersion    = '1.0.0'; // VideoJS v7.1.0 , VideoJS-Contrib-Ads v6.6.1 , VideoJS-IMA v1.5.2
nnVideo.companyName    = 'nnNetwork';
nnVideo.coreHeaderInfo = '[nnVideo.core]';

nnVideo.libs = {};
nnVideo.libs.protocol  = window.location.href.indexOf("https://") === 0 ? "https:" : "http:";
// basePath default for Production
nnVideo.libs.basePath      = 'https://warningfm.github.io/nnVideo';
if (window.location.hostname.indexOf('127.0.0.1') !== -1) {
  // switch to basePath for Development if domain is 127.0.0.1
  nnVideo.libs.basePath    = nnVideo.libs.protocol+'//127.0.0.1/nnVideo';

};

nnVideo.libs.vjsVersion    = 7;
nnVideo.libs.vjsCore       = '/lib/video.min.v7.1.0.js';
nnVideo.libs.vjsCoreAlt    = '/lib/video.min.v6.11.0.js';
nnVideo.libs.vjsLang       = '/lang/id.js';
nnVideo.libs.vjsHls        = '/lib/videojs-hlsjs-plugin.v1.0.5.js';
nnVideo.libs.vjsQPicker    = '/lib/vjs-quality-picker.v0.0.2.js';
nnVideo.libs.detectAB      = '/nnVideo.detect.js';
nnVideo.libs.detectABWithFck = '/nnVideo.detect2.js';
nnVideo.libs.vjsAds        = '/lib/videojs.ads.min.v6.6.1.js';
nnVideo.libs.vjsIma        = '/lib/videojs.ima.v1.5.2.bgfixadsmanager.js';
nnVideo.libs.pushstream    = '/lib/pushstream.js';
nnVideo.libs.Ima           = 'https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js';
nnVideo.libs.vjsCueMarker  = '/lib/videojs-markers.min.v1.0.1.bgfixinit.js';
nnVideo.libs.vjsVR         = '/lib/videojs-vr.min.v1.5.0.js';
nnVideo.libs.portal        = '/nnVideo.portal.js';
nnVideo.libs.vjsContribHls = '/lib/videojs-contrib-hls.min.v5.14.1.js';
nnVideo.libs.jqCarousel    = '/lib/jquery.carousel-3d.min.v0.2.2.js';
nnVideo.libs.jqResize      = '/lib/jquery.resize.v0.5.3.js';
nnVideo.libs.jqWaitImage   = '/lib/jquery.waitforimages.v2.0.0.js';
nnVideo.libs.modernizr     = '/lib/modernizr.v2.8.3.js';
nnVideo.libs.canAutoplay   = '/lib/can-autoplay.min.v3.0.0.js';
nnVideo.libs.later         = '/lib/later.min.v1.2.0.js';

nnVideo.images = {};
nnVideo.images.basePath    = nnVideo.libs.basePath; // as default
nnVideo.images.vjsLoading  = '/img/empty1x1.png';

nnVideo.styles = {};
nnVideo.styles.basePath    = nnVideo.libs.basePath; // as default
nnVideo.styles.vjsCore     = '/css/video-js.v7.1.0.css';
nnVideo.styles.vjsCoreAlt  = '/css/video-js.v6.11.0.css';
nnVideo.styles.vjsAds      = '/css/videojs.ads.v6.6.1.css';
nnVideo.styles.vjsIma      = '/css/videojs.ima.v1.5.2.css';
nnVideo.styles.vjsCueMarker= '/css/videojs.markers.v1.0.1.css';
nnVideo.styles.jqCarousel  = '/css/jquery.carousel-3d.v0.2.2.css';
nnVideo.styles.custom      = '/css/videojs-custom.css';

nnVideo.scriptconf = {};
nnVideo.scriptconf.target        = 'player';
nnVideo.scriptconf.autoplay      = true;
nnVideo.scriptconf.mute          = false;
nnVideo.scriptconf.live          = false; // true means videoUrl is a live streaming, false is vod streaming
nnVideo.scriptconf.title         = null;
nnVideo.scriptconf.imageUrl      = '/nnVideo/img/blueredplay.png';
nnVideo.scriptconf.videoUrl      = null;
nnVideo.scriptconf.videoType     = 'application/x-mpegURL';
nnVideo.scriptconf.channel       = null;
nnVideo.scriptconf.adRules       = null;
nnVideo.scriptconf.vastTag       = undefined; // will be deprecated
nnVideo.scriptconf.hideControlbar= false;// player will hide its controlbar
nnVideo.scriptconf.adsManagerLoadedCallback        = undefined;
nnVideo.scriptconf.adsManagerInstantiationCallback = undefined;
nnVideo.scriptconf.nnVideoLoadedCallback        = undefined;
nnVideo.scriptconf.libs          = null;
nnVideo.scriptconf.images        = null;
nnVideo.scriptconf.styles        = null;
nnVideo.scriptconf.features      = null;
nnVideo.scriptconf.vjsconf       = null;
nnVideo.scriptconf.hlsjsconf     = null;
nnVideo.scriptconf.adsconf       = null;
nnVideo.scriptconf.cbadsconf     = null;
nnVideo.scriptconf.vrconf        = null;

nnVideo.features = {};
nnVideo.features.enableStringSrc  = true;
nnVideo.features.loadCustomCSS    = true;
nnVideo.features.smartAutoplay    = true; // can-autoplay loader and executor
nnVideo.features.smartAutoplayMuted = false;
nnVideo.features.smartAutoplayTimoutPerStep = 150; // ms
nnVideo.features.smartAutoplayAffectIMA = true;
// vod preload - begin - copycat nnFlow
nnVideo.features.vodPreload      = 'auto'; // default is 'auto', 'none', 'metadata', 'auto'
nnVideo.features.vodAutoStartLoad = true; // default is true, if true then vodPreload can be metadata or auto 
nnVideo.features.vodBufferWhilePausedAutoStop    = true; // default is false
nnVideo.features.vodBufferWhilePausedMaxSeconds  = 7000;  // default is 7000
// vod preload - end
// live preload- begin - copycat nnFlow
nnVideo.features.livePreload     = 'auto'; // default is 'auto', 'none', 'metadata', 'auto'
nnVideo.features.liveAutoStartLoad= false; // default is true, if true then livePreload can be metadata or auto
nnVideo.features.liveBufferWhilePausedAutoStop   = false; // default is false
nnVideo.features.liveBufferWhilePausedMaxSeconds = 7000;  // default is 7000
// live preload- end
nnVideo.features.liveOnlyImaCompletedThenPlayAgain=true;
nnVideo.features.enableHideSpinnerWhileAutoplayTrue  = true;
nnVideo.features.hideSpinnerWhileAutoplayTrueGapTime = 2000;
nnVideo.features.playsinlineString       = 'playsinline'; // String or emptyString ''
nnVideo.features.webkitplaysinlineString = 'webkit-playsinline'; // String or emptyString ''
nnVideo.features.stylesLoader    = true;
nnVideo.features.logTextarea     = false; // set this value from coreInit()
nnVideo.features.logTextarea2    = false; // set this value from coreInit(), log is inside LogModal
nnVideo.features.logTextareaCheckRetry = 1; // trying to get textareaId  in X+1 times
nnVideo.features.logTextarea2CheckRetry= 1; // trying to get textareaId2 in X+1 times
nnVideo.features.logModalCols    = null;
nnVideo.features.logModalRows    = null;
nnVideo.features.logModalColWidth  = 7; // in px
nnVideo.features.logModalRowHeight = 10;// in px
nnVideo.features.logModalVGap    = 200; // in px
nnVideo.features.logModalHGap    = 150; // in px
nnVideo.features.logModalVGap2   = 350; // in px
nnVideo.features.logModalHGap2   = 250; // in px
nnVideo.features.logModalPlayerWidthDefault  = 640; // in px just for assumption
nnVideo.features.logModalPlayerHeightDefault = 360; // in px just for assumption
nnVideo.features.ajaxSetupCache  = true;
nnVideo.features.ajaxSetupASync  = true;
nnVideo.features.vjsLoaderAjaxSetupCache   = false;
nnVideo.features.vjsLoaderAjaxSetupASync   = true;
nnVideo.features.vjsLoaderWaitingVJSFunction=false;
nnVideo.features.vjsLoaderWaitingTimout     = 100; // in ms
nnVideo.features.vjsLoaderWaitingCheckRetry = 3;
nnVideo.features.vTail           = true;
nnVideo.features.detectAB        = true;
nnVideo.features.detectABWithFck = false; // false v1 is nnVideo.detect.js, true v2 is nnVideo.detect2.js
nnVideo.features.loadIma         = true;
nnVideo.features.loadDrawCueMarker   = true;
nnVideo.features.cueMarkerText   = 'Iklan';
nnVideo.features.drawAdCueMarkersGapTime = 3000; // milliseconds
nnVideo.features.cueMarkerStyle  = {
  'width':'4px',
  'border-radius':'8%',
  'background-color':'red'
};
nnVideo.features.detectFlowPlayer = false;
nnVideo.features.loadByDiv       = false;
nnVideo.features.loadByDivStyle = ''; //'background-color: black;';
nnVideo.features.loadVR          = false;
nnVideo.features.skipLibGetScripts               = false;
nnVideo.features.getScriptToBodyAppend           = false;
nnVideo.features.checkAndroid4ThenGetScriptToBodyAppend = true;
nnVideo.features.loadGetAllowedStartLevel        = true;
nnVideo.features.suppressedStartLevel            = 0;
nnVideo.features.restoreCustomPlaybackStateOnAdBreakComplete = true;
// videojs-contrib-hls is new engine builtin videojs-core v7.x, it has a different event comparing with videojs-hlsjs
nnVideo.features.loadVjsContribHls               = false;
nnVideo.features.loadVjsLoadingByDomain          = false;
nnVideo.features.vjsLoadingByDomain      = [
  { domain: 'tv.mbahnunungonline.net',      image: '/img/trans7.png' },
  
];
nnVideo.features.loadColorThemeByDomain  = true;
nnVideo.features.playProgressColor       = null;
nnVideo.features.volumeLevelColor        = null;
nnVideo.features.markerColor             = null;
nnVideo.features.backgroundColor         = '#000'; //'rgba(43, 51, 63, 0.7)';
nnVideo.features.colorThemeByDomain      = [
  { domain: 'tv.mbahnunungonline.net',         playProgressColor: 'white', volumeLevelColor: 'white', markerColor: 'red', backgroundColor: '#000' },
  
];
nnVideo.features.reloadVideoAtEnd           = false;
nnVideo.features.loadXhrIASDetector         = false;
nnVideo.features.loadVjsGeneralMenu         = false; // true is good
nnVideo.features.vjnnVideosGMButtonLabel           = 'Menu Umum';
nnVideo.features.vjsGMItemLogLabel          = 'Metadata';
nnVideo.features.vjsGMItemRelatedVideoLabel = 'Video Terkait';
nnVideo.features.loadVjsRelatedVideoModal   = false;
nnVideo.features.relatedVideoModalUrl       = '';
nnVideo.features.showRelatedVideoModalAtEnd = false;
nnVideo.features.vjsGMItemRelatedVideo3DLabel  = 'Video Terkait Carousel';
nnVideo.features.loadVjsRelatedVideoModal3D    = false;
nnVideo.features.relatedVideoModal3DContent    = '';
nnVideo.features.showRelatedVideoModal3DAtEnd  = false;
nnVideo.features.patchingHdButtonTitle = true;
nnVideo.features.hdButtonTitle         = 'Kualitas Video';
nnVideo.features.patchingVjsBgImgFromUrl = false;
nnVideo.features.enableLivePlaybackRates = false;
nnVideo.features.enableVodPlaybackRates  = false; // true is good
nnVideo.features.controlBarChildren = { 
  playToggle: true,
  volumePanel: true,
  currentTimeDisplay: true,
  timeDivider: true,
  durationDisplay: true,
  progressControl: true,
  liveDisplay: true,
  remainingTimeDisplay: true,
  customControlSpacer: true,
  playbackRateMenuButton: true,
  fullscreenToggle: true
};
nnVideo.features.enableGSReviver        = true;
nnVideo.features.gsReviverImaTimeout    = 4000;
nnVideo.features.gsReviverVjsAdsTimeout = 4000;
nnVideo.features.gsReviverVjsImaTimeout = 4000;
nnVideo.features.enableLiveAdsInterval  = false;
nnVideo.features.liveAdsIntervalAdRules = [];      // array of string
nnVideo.features.liveAdsIntervalTimeout = 120000;  // 2 minutes
nnVideo.features.enableLiveAdsServerPush   = false;
nnVideo.features.liveAdsServerPushStream   = null;
nnVideo.features.liveAdsServerPushHost     = 'vidio.nn.com';
nnVideo.features.liveAdsServerPushPort     = '80';
nnVideo.features.liveAdsServerPushModes    = 'websocket|eventsource|stream';
nnVideo.features.liveAdsServerPushChannel  = 'liveAds';
nnVideo.features.liveAdsServerPushLogLevel = null; // or 'debug'
nnVideo.features.liveAdsServerPushRequestAdsTimeout      = 250;   // in ms
nnVideo.features.liveAdsServerPushWaitingForAllowMessage = 10000; // in ms
nnVideo.features.enableLiveAdsCron         = false;
nnVideo.features.liveAdsCronHasSeconds     = false;         
nnVideo.features.liveAdsCronData           = [
  {
    'cronText':'0/5 * * * *', // min hour day mon year
    'adRules' :'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
  }
];

nnVideo.vjsconf = {};
nnVideo.vjsconf.id               = 'player';
nnVideo.vjsconf.autoplay         = true;  // false, true, 'muted', 'play', 'any'
nnVideo.vjsconf.controls         = true;   // false, true
nnVideo.vjsconf.height           = 340;   // string, number
nnVideo.vjsconf.width            = 596;   // string, number
nnVideo.vjsconf.loop             = false;  // false, true
nnVideo.vjsconf.muted            = false;  // false, true
nnVideo.vjsconf.poster           = null;   // string
nnVideo.vjsconf.preload          = 'none'; // 'none', 'metadata', 'auto'
nnVideo.vjsconf.src              = null;   // string
nnVideo.vjsconf.aspectRatio      = '16:9'; // '16:9', '4:3'
nnVideo.vjsconf.autoSetup        = false;  // false, true
nnVideo.vjsconf.fluid            = true;   // false, true
nnVideo.vjsconf.inactivityTimeout= 3000;      // number in milliseconds
nnVideo.vjsconf.language         = 'id';   // 'en', 'id'
nnVideo.vjsconf.languages        = null;   // Object
nnVideo.vjsconf.notSupportedMessage = 'Maaf, Player tidak dapat menayangkan sumber media ini'; // string
nnVideo.vjsconf.playbackRates    = [0.5, 1, 1.5, 2]; // Array of Numbers
nnVideo.vjsconf.plugins          = null;   // Object ex: { foo: {bar: true}, boo: {baz: false} }
nnVideo.vjsconf.sources          = null;   // Array ex: sources: [{ src: '//path/to/video.mp4', type: 'video/mp4' }, { src: '//path/to/video.webm', type: 'video/webm' }]
nnVideo.vjsconf.techCanOverridePoster = false; // false, true
nnVideo.vjsconf.techOrder        = ['html5'];
nnVideo.vjsconf.nativeControlsForTouch = false; // false, true
nnVideo.vjsconf.nativeTextTracks = false; // false, true
nnVideo.vjsconf.nativeAudioTracks= false; // false, true for videojs-contrib-hls.js plugin
nnVideo.vjsconf.nativeVideoTracks= false; // false, true for videojs-contrib-hls.js plugin
nnVideo.vjsconf.children         = {
  mediaLoader: {},
  posterImage: {},
//  textTrackDisplay: {}, // unused check hlsjs textTrackDisplay
  loadingSpinner: {},
  bigPlayButton: {},
  controlBar: {},
  errorDisplay: {},
//  textTrackSettings: {}, // unused check hlsjs textTrackDisplay
  resizeManager: {}
};   // Array, Object
nnVideo.vjsconf.html5            = {};
nnVideo.vjsconf.html5.hlsjsConfig= {};

nnVideo.hlsjsconf = {};
nnVideo.hlsjsconf.autoStartLoad  = false;
nnVideo.hlsjsconf.startPosition  = -1;
nnVideo.hlsjsconf.capLevelToPlayerSize= false;
nnVideo.hlsjsconf.debug          = false;
nnVideo.hlsjsconf.defaultAudioCodec = undefined;
nnVideo.hlsjsconf.initialLiveManifestSize = 1;
nnVideo.hlsjsconf.maxBufferLength= 30;
nnVideo.hlsjsconf.maxMaxBufferLength = 600;
nnVideo.hlsjsconf.maxBufferSize  = 60*1000*1000;
nnVideo.hlsjsconf.maxBufferHole  = 0.5;
nnVideo.hlsjsconf.lowBufferWatchdogPeriod  = 0.5;
nnVideo.hlsjsconf.highBufferWatchdogPeriod = 3;
nnVideo.hlsjsconf.nudgeOffset    = 0.1;
nnVideo.hlsjsconf.nudgeMaxRetry  = 15; // default is 3
nnVideo.hlsjsconf.maxFragLookUpTolerance   = 0.2;
nnVideo.hlsjsconf.liveSyncDurationCount    = 3;
nnVideo.hlsjsconf.liveMaxLatencyDurationCount = 10;
nnVideo.hlsjsconf.enableWorker   = true;
nnVideo.hlsjsconf.enableSoftwareAES        = false;
nnVideo.hlsjsconf.manifestLoadingTimeOut   = 10000;
nnVideo.hlsjsconf.manifestLoadingMaxRetry  = 1;
nnVideo.hlsjsconf.manifestLoadingRetryDelay= 500;
nnVideo.hlsjsconf.manifestLoadingMaxRetryTimeout = 64000;
nnVideo.hlsjsconf.startLevel     = 0;
nnVideo.hlsjsconf.levelLoadingTimeOut    = 10000;
nnVideo.hlsjsconf.levelLoadingMaxRetry   = 4;
nnVideo.hlsjsconf.levelLoadingRetryDelay = 500;
nnVideo.hlsjsconf.levelLoadingMaxRetryTimeout= 64000;
nnVideo.hlsjsconf.fragLoadingTimeOut     = 20000;
nnVideo.hlsjsconf.fragLoadingMaxRetry    = 6;
nnVideo.hlsjsconf.fragLoadingRetryDelay  = 500;
nnVideo.hlsjsconf.fragLoadingMaxRetryTimeout= 64000;
nnVideo.hlsjsconf.startFragPrefetch      = false;
nnVideo.hlsjsconf.appendErrorMaxRetry    = 3;
//nnVideo.hlsjsconf.loader                 = undefined; //nnVideo.hlsjsCustomLoader;
//nnVideo.hlsjsconf.fLoader                = undefined; //nnVideo.hlsjsCustomFragmentLoader;
//nnVideo.hlsjsconf.pLoader                = undefined; //nnVideo.hlsjsCustomPlaylistLoader;
//nnVideo.hlsjsconf.fetchSetup             = undefined; //nnVideo.hlsjsFetchSetupCallback;
//nnVideo.hlsjsconf.abrController          = undefined; //nnVideo.hlsjsCustomAbrController;
//nnVideo.hlsjsconf.timelineController     = undefined; //nnVideo.hlsjsTimelineController;
nnVideo.hlsjsconf.xhrSetup               = nnVideo.hlsjsXhrSetupCallback;
nnVideo.hlsjsconf.enableWebVTT         = false;
nnVideo.hlsjsconf.enableCEA708Captions = false;
nnVideo.hlsjsconf.stretchShortVideoTrack= false;
nnVideo.hlsjsconf.maxAudioFramesDrift = 1;
nnVideo.hlsjsconf.forceKeyFrameOnDiscontinuity = true;
nnVideo.hlsjsconf.abrEwmaFastLive      = 5.0;
nnVideo.hlsjsconf.abrEwmaSlowLive      = 9.0;
nnVideo.hlsjsconf.abrEwmaFastVoD       = 4.0;
nnVideo.hlsjsconf.abrEwmaSlowVoD       = 15.0;
nnVideo.hlsjsconf.abrEwmaDefaultEstimate= 500000;
nnVideo.hlsjsconf.abrBandWidthFactor   = 0.95;
nnVideo.hlsjsconf.abrBandWidthUpFactor = 0.7;
nnVideo.hlsjsconf.minAutoBitrate       = 0;

nnVideo.adsconf = {};
nnVideo.adsconf.id               = 'player'; // string of id
nnVideo.adsconf.adTagUrl         = null; // string URL of vastTag
nnVideo.adsconf.adTagUrlCopied   = null; // experimental, copied adsconf.adTagUrl in syncOthers
nnVideo.adsconf.adsResponse      = null; // string URL of adRules
nnVideo.adsconf.adsResponseCopied= null; // experimental, copied adsconf.adsResponseCopied in syncOthers
nnVideo.adsconf.adsRequest       = null; // Object of Params requested
nnVideo.adsconf.adLabel          = 'iklan'; // default is 'Iklan' string
nnVideo.adsconf.adLabelNofN      = 'dari'; // default is 'dari' string
nnVideo.adsconf.adsRenderingSettings = null; // Object of adsRenderingSettings in IMA Docs
nnVideo.adsconf.autoPlayAdBreaks = true; // boolean
nnVideo.adsconf.adWillAutoPlay   = undefined; // boolean but deprecated
nnVideo.adsconf.adWillPlayMuted  = undefined; // boolean but deprecated
nnVideo.adsconf.contribAdsSettings = null; // Object of contrib-ads plugin settings
nnVideo.adsconf.debug            = false;
nnVideo.adsconf.disableFlashAds  = true;
nnVideo.adsconf.disableCustomPlaybackForIOS10Plus = false; // boolean
nnVideo.adsconf.forceNonLinearFullSlot = false; // boolean
nnVideo.adsconf.locale           = 'id';  // 2 letters ex: 'en' or 'id'
nnVideo.adsconf.adsManagerWidth  = undefined; // bgfixadsmanager
nnVideo.adsconf.adsManagerHeight = undefined; // bgfixadsmanager
nnVideo.adsconf.nonLinearWidth   = null; // number please look at vjsconf
nnVideo.adsconf.nonLinearHeight  = null; // number please look at vjsconf
nnVideo.adsconf.numRedirects     = 4; // number, 4 follow Flowplayer
nnVideo.adsconf.showControlsForJSAds = true; // boolean
nnVideo.adsconf.showCountdown    = true; // boolean
nnVideo.adsconf.vastLoadTimeout  = 5000; // in milliseconds, number
nnVideo.adsconf.vpaidAllowed     = true; // boolean but deprecated
nnVideo.adsconf.vpaidMode        = 'ENABLED'; // 'ENABLED','DISABLED','INSECURE'
nnVideo.adsconf.adsManagerLoadedCallback         = undefined; // will be ctx.syncOthers to nnVideo.imaAdsManagerLoadedCallback
nnVideo.adsconf.adsManagerInstantiationCallback  = undefined; // will be ctx.syncOthers to nnVideo.imaAdsManagerInstantiationCallback
nnVideo.adsconf.linearAdStartedCallback          = undefined; // will be ctx.syncOthers to nnVideo.imaLinearAdStartedCallback

nnVideo.cbadsconf  = {};
nnVideo.cbadsconf.timeout        = 7000; // in milliseconds, number
nnVideo.cbadsconf.prerollTimeout = 7000; // in milliseconds, number
nnVideo.cbadsconf.postrollTimeout= 7000; // in milliseconds, number
nnVideo.cbadsconf.stitchedAds    = false; // boolean
nnVideo.cbadsconf.liveCuePoints  = false; // boolean // true is dangerous for preroll
nnVideo.cbadsconf.contentIsLive  = false; // boolean
nnVideo.cbadsconf.debug          = false; // boolean

nnVideo.vrconf = {};
nnVideo.vrconf.debug             = false;
nnVideo.vrconf.forceCardboard    = false; // boolean
nnVideo.vrconf.projection        = '360'; // 'NONE', 'AUTO', '360', '360_CUBE', '360_LR', '360_TB'
nnVideo.vrconf.player = {};
nnVideo.vrconf.player.mediainfo = {};
nnVideo.vrconf.player.mediainfo.projection = 'AUTO'; // 'NONE' or 'AUTO', '360', '360_CUBE', '360_LR', '360_TB'

nnVideo.vars = {};
nnVideo.vars.scriptMarker        = 'nnVideo.core.';
nnVideo.vars.scriptMarker2       = 'detikFlow.';
nnVideo.vars.scriptSrc           = null;
nnVideo.vars.v                   = null;
nnVideo.vars.xhrOpenOriginal     = null;
nnVideo.vars.vjsLoaderWaitingRetry = 0;
nnVideo.vars.textareaId            = 'nnVideoLog';
nnVideo.vars.textareaCheck         = 0;
nnVideo.vars.isLogTextareaEnabled  = null;
nnVideo.vars.textareaElement       = null;
nnVideo.vars.textareaElementLen    = null;
nnVideo.vars.textareaId2           = 'nnVideoLog2';
nnVideo.vars.textarea2Check        = 0;
nnVideo.vars.isLogTextareaEnabled2 = null;
nnVideo.vars.textareaElement2      = null;
nnVideo.vars.textareaElementLen2   = null;
nnVideo.vars.logModal              = null;
nnVideo.vars.scriptconfOriginalId  = null;
nnVideo.vars.isABDetected        = false;
nnVideo.vars.scriptSrcParams     = {};
nnVideo.vars.player              = null;
nnVideo.vars.imaAdsManager       = null; // object contain value from ima.getAdsManager()
nnVideo.vars.imaAdsRenderingSettings = null;
nnVideo.vars.cuePoints           = null; // array of integer in second(s)
nnVideo.vars.cuePointsObjects    = []; // [ { time: x, text: 'test'} ]
nnVideo.vars.hlsjsInstance       = null;
nnVideo.vars.vodBufferWhilePausedAutoStopNeeded  = false;
nnVideo.vars.liveBufferWhilePausedAutoStopNeeded = false;
nnVideo.vars.hlsjsXhrSetupCallback1stTouch       = false;
nnVideo.vars.xhrLastStatus       = 0;
nnVideo.vars.showXhrStatusModal  = [];
nnVideo.vars.drawAdCueMarkersOnce   = false;
nnVideo.vars.bufferWhilePausedAutoStopOnce   = false;
nnVideo.vars.bufferWhilePausedAutoStartOnce  = false;
nnVideo.vars.vjsGMenuButton          = null;
nnVideo.vars.vjsGMenu                = null;
nnVideo.vars.vjsGMItemLogModal       = null;
nnVideo.vars.vjsGMItemRelatedVideo   = null;
nnVideo.vars.vjsGMItemRelatedVideo3D = null;
nnVideo.vars.iframeRelatedVideoElement  = null;
nnVideo.vars.relatedVideoModal          = null;
nnVideo.vars.divRelatedVideo3DElement   = null;
nnVideo.vars.relatedVideoModal3D        = null;
nnVideo.vars.patchingHdButtonTitleDone  = false;
nnVideo.vars.carousel3DInit = false;
nnVideo.vars.hideSpinnerWhileAutoplayTrueLock = false;
nnVideo.vars.hideSpinnerWhileAutoplaySIHandler= null;
nnVideo.vars.canAutoplayVideo            = true;
nnVideo.vars.canAutoplayVideoMuted       = false;
nnVideo.vars.canAutoplayVideoInline      = false;
nnVideo.vars.canAutoplayVideoMutedInline = false;
nnVideo.vars.assumeNoPauseEvent          = false;
nnVideo.vars.assumeNoPlayEvent           = false;
nnVideo.vars.gsImaSuccess        = false;
nnVideo.vars.gsVjsAdsSuccess     = false;
nnVideo.vars.gsVjsImaSuccess     = false;
nnVideo.vars.gsReviverToNextStep = false;
nnVideo.vars.liveAdsIntervalNextIdx = 0;
nnVideo.vars.liveAdsIntervalHandler = null;
nnVideo.vars.pushstream  = null;
nnVideo.vars.pushstreamIsAllowMessage = false;
nnVideo.vars.isCountProgressCallback  = true;
nnVideo.vars.numProgressCallback      = 0;
nnVideo.vars.liveAdsCronLock     = false;
nnVideo.vars.liveAdsCronScheduleHandlers = [];
nnVideo.vars.liveAdsCronSIHandlers       = [];

// Chapter 3: Load internal libraries
/* nnVideo.Purl to parse http get params, please wait ... */
/*
 * Purl (A JavaScript URL parser) v2.3.1
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */
;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.purl = factory();
    }
})(function() {

    var tag2attr = {
            a       : 'href',
            img     : 'src',
            form    : 'action',
            base    : 'href',
            script  : 'src',
            iframe  : 'src',
            link    : 'href',
            embed   : 'src',
            object  : 'data'
        },

        key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'], // keys available to query

        aliases = { 'anchor' : 'fragment' }, // aliases for backwards compatability

        parser = {
            strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        },

        isint = /^[0-9]+$/;

    function parseUri( url, strictMode ) {
        var str = decodeURI( url ),
        res   = parser[ strictMode || false ? 'strict' : 'loose' ].exec( str ),
        uri = { attr : {}, param : {}, seg : {} },
        i   = 14;

        while ( i-- ) {
            uri.attr[ key[i] ] = res[i] || '';
        }

        // build query and fragment parameters
        uri.param['query'] = parseString(uri.attr['query']);
        uri.param['fragment'] = parseString(uri.attr['fragment']);

        // split path and fragement into segments
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');

        // compile a 'base' domain attribute
        uri.attr['base'] = uri.attr.host ? (uri.attr.protocol ?  uri.attr.protocol+'://'+uri.attr.host : uri.attr.host) + (uri.attr.port ? ':'+uri.attr.port : '') : '';

        return uri;
    }

    function getAttrName( elm ) {
        var tn = elm.tagName;
        if ( typeof tn !== 'undefined' ) return tag2attr[tn.toLowerCase()];
        return tn;
    }

    function promote(parent, key) {
        if (parent[key].length === 0) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        parent[key] = t;
        return t;
    }

    function parse(parts, parent, key, val) {
        var part = parts.shift();
        if (!part) {
            if (isArray(parent[key])) {
                parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
                parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
                parent[key] = val;
            } else {
                parent[key] = [parent[key], val];
            }
        } else {
            var obj = parent[key] = parent[key] || [];
            if (']' == part) {
                if (isArray(obj)) {
                    if ('' !== val) obj.push(val);
                } else if ('object' == typeof obj) {
                    obj[keys(obj).length] = val;
                } else {
                    obj = parent[key] = [parent[key], val];
                }
            } else if (~part.indexOf(']')) {
                part = part.substr(0, part.length - 1);
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
                // key
            } else {
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            }
        }
    }

    function merge(parent, key, val) {
        if (~key.indexOf(']')) {
            var parts = key.split('[');
            parse(parts, parent, 'base', val);
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t;
            }
            if (key !== '') {
                set(parent.base, key, val);
            }
        }
        return parent;
    }

    function parseString(str) {
        return reduce(String(str).split(/&|;/), function(ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, ' '));
            } catch(e) {
                // ignore
            }
            var eql = pair.indexOf('='),
                brace = lastBraceInKey(pair),
                key = pair.substr(0, brace || eql),
                val = pair.substr(brace || eql, pair.length);

            val = val.substr(val.indexOf('=') + 1, val.length);

            if (key === '') {
                key = pair;
                val = '';
            }

            return merge(ret, key, val);
        }, { base: {} }).base;
    }

    function set(obj, key, val) {
        var v = obj[key];
        if (typeof v === 'undefined') {
            obj[key] = val;
        } else if (isArray(v)) {
            v.push(val);
        } else {
            obj[key] = [v, val];
        }
    }

    function lastBraceInKey(str) {
        var len = str.length,
            brace,
            c;
        for (var i = 0; i < len; ++i) {
            c = str[i];
            if (']' == c) brace = false;
            if ('[' == c) brace = true;
            if ('=' == c && !brace) return i;
        }
    }

    function reduce(obj, accumulator){
        var i = 0,
            l = obj.length >> 0,
            curr = arguments[2];
        while (i < l) {
            if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
            ++i;
        }
        return curr;
    }

    function isArray(vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    }

    function keys(obj) {
        var key_array = [];
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) key_array.push(prop);
        }
        return key_array;
    }

    function purl( url, strictMode ) {
        if ( arguments.length === 1 && url === true ) {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();

        return {

            data : parseUri(url, strictMode),

            // get various attributes from the URI
            attr : function( attr ) {
                attr = aliases[attr] || attr;
                return typeof attr !== 'undefined' ? this.data.attr[attr] : this.data.attr;
            },

            // return query string parameters
            param : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.query[param] : this.data.param.query;
            },

            // return fragment parameters
            fparam : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.fragment[param] : this.data.param.fragment;
            },

            // return path segments
            segment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.path;
                } else {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];
                }
            },

            // return fragment segments
            fsegment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.fragment;
                } else {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];
                }
            }

        };

    }

    purl.jQuery = function($){
        if ($ != null) {
            $.fn.url = function( strictMode ) {
                var url = '';
                if ( this.length ) {
                    url = $(this).attr( getAttrName(this[0]) ) || '';
                }
                return purl( url, strictMode );
            };

            $.url = purl;
        }
    };

    purl.jQuery(window.jQuery);

    return purl;

});
/* end of nnVideo.Purl */



// Chapter 4: nnVideo Context as ctx
(function(ctx) {

  'use strict';

  ctx.log = function(header, txtLog, txtVal) {
    // check textarea id JQuery DOM
    if (ctx.vars.isLogTextareaEnabled === null) {
      console.log(ctx.playerName + ' log function is checking textareaId');
      // check textarea id name
      if (((typeof ctx.vars.textareaId) === 'undefined') || (ctx.vars.textareaId === null)) {
        ctx.vars.isLogTextareaEnabled = false;  // no textarea id name means isLogTextareaEnabled is always false 
      } else {
        ctx.vars.textareaElement = $('#' + ctx.vars.textareaId);
        ctx.vars.textareaElementLen = ctx.vars.textareaElement.length;
        if (ctx.vars.textareaElementLen > 0) {
          // if textarea id is given and it's exist then isLogTextareaEnabled
          // depends it value to the feature control
          ctx.vars.isLogTextareaEnabled = ctx.features.logTextarea;
          console.log(ctx.playerName + ' logTextarea is ok');
        } else {
          if (ctx.vars.textareaCheck < ctx.features.logTextareaCheckRetry) {
            ctx.vars.isLogTextareaEnabled = false;
            console.log(ctx.playerName + ' logTextarea is stop-working', ctx.vars.textareaCheck);
          } else {
            ctx.vars.textareaCheck++;
            console.log(ctx.playerName + ' logTextarea is trying', ctx.vars.textareaCheck);
          };
        };
      };
    };
    // textarea log
    if ((ctx.vars.textareaElementLen > 0) && (ctx.vars.isLogTextareaEnabled === true)) {
      var currentTextareaValue = ctx.vars.textareaElement.val() ;
      if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
        ctx.vars.textareaElement.val(currentTextareaValue + "\r\n\r\n" + header + ' ' + txtLog);
      } else {
        ctx.vars.textareaElement.val(currentTextareaValue + "\r\n\r\n" + header + ' ' + txtLog + " -> " + txtVal);
      };
    };
    // check textarea2 id JQuery DOM
    if (ctx.vars.isLogTextareaEnabled2 === null) {
      console.log(ctx.playerName + ' log function is checking textareaId2');
      // check textarea id name
      if (((typeof ctx.vars.textareaId2) === 'undefined') || (ctx.vars.textareaId2 === null)) {
        ctx.vars.isLogTextareaEnabled2 = false;  // no textarea id name means isLogTextareaEnabled2 is always false 
      } else {
        ctx.vars.textareaElement2 = $('#' + ctx.vars.textareaId2);
        ctx.vars.textareaElementLen2 = ctx.vars.textareaElement2.length;
        if (ctx.vars.textareaElementLen2 > 0) {
          // if textarea id is given and it's exist then isLogTextareaEnabled
          // depends it value to the feature control
          ctx.vars.isLogTextareaEnabled2 = ctx.features.logTextarea2;
          console.log(ctx.playerName + ' logTextarea2 is ok');
        } else {
          if (ctx.vars.textarea2Check < ctx.features.logTextarea2CheckRetry) {
            ctx.vars.isLogTextareaEnabled2 = false;
            console.log(ctx.playerName + ' logTextarea2 is stop-working', ctx.vars.textarea2Check);
          } else {
            ctx.vars.textarea2Check++;
            console.log(ctx.playerName + ' logTextarea2 is trying', ctx.vars.textarea2Check);
          };
        };
      };
    };
    // textarea2 log
    if ((ctx.vars.textareaElementLen2 > 0) && (ctx.vars.isLogTextareaEnabled2 === true)) {
      var currentTextareaValue2 = ctx.vars.textareaElement2.val() ;
      if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
        ctx.vars.textareaElement2.val(currentTextareaValue2 + "\r\n\r\n" + header + ' ' + txtLog);
      } else {
        ctx.vars.textareaElement2.val(currentTextareaValue2 + "\r\n\r\n" + header + ' ' + txtLog + " -> " + txtVal);
      };
    };
    // ordinary log
    if (((typeof txtVal) === 'undefined') || (txtVal === null)) {
      console.log(header + ' ' + txtLog);
    } else {
      console.log(header + ' ' + txtLog, txtVal);
    };
  };

  // core Logging
  ctx.clog = function(txtLog, txtVal) {
    ctx.log(ctx.coreHeaderInfo, txtLog, txtVal);
  };

  ctx.showCoreVersion = function() {
    ctx.clog('version is', ctx.coreVersion);
  };

  ctx.isFlowPlayerDiv = function() {
    var result = false;
    if (ctx.features.detectFlowPlayer === true) {
      var el = $('#'+ctx.scriptconf.target);
      if ((typeof el === 'object') && (el !== null) && (el.length > 0)) {
        if (el.hasClass('fp-slim') || el.hasClass('fp-mute')) {
          result = true;
        };
      };
    };
    return result;
  };

  ctx.divLoader = function() {
    if ( (ctx.features.loadByDiv === true) && ((typeof ctx.scriptconf.target) === 'string') ) {
      ctx.clog('divLoader is working', null);
      ctx.vars.scriptconfOriginalId = ctx.scriptconf.target;
      var newId = ctx.vars.scriptconfOriginalId + 'NewId';
      var styleWH = {};
      if ( ((typeof ctx.vjsconf.width) === 'number') && ((typeof ctx.vjsconf.width) === 'number') ) {
        styleWH = {
         'max-width': ctx.vjsconf.width+'px',
         'width':     ctx.vjsconf.width+'px',
         'height':    ctx.vjsconf.height+'px'
        };
      } else if ((typeof ctx.vjsconf.width) === 'number') {
        styleWH = {
         'max-width': ctx.vjsconf.width+'px',
         'width':     ctx.vjsconf.width+'px'
        };
      }
      ctx.clog('divLoader styleWH', styleWH);
      var el = $('#'+ctx.vars.scriptconfOriginalId);
      var videoHtml = '<video id="' + newId + '" class="video-js vjs-default-skin vjs-big-play-centered vjs-fluid" poster="' + ctx.images.basePath + '/img/empty1x1.png' + '" '+ ctx.features.playsinlineString +' '+ ctx.features.webkitplaysinlineString +' style="' + ctx.features.loadByDivStyle + '"><p class="vjs-no-js">Untuk menampilkan video ini, mohon aktifkan JavaScript, dan upgrade web browser anda agar mensupport <a href="https://videojs.com/html5-video-support/" target="_blank">HTML5 Video</a>, Terima Kasih</p></video>';
      if ((typeof el === 'object') && (el !== null) && (el.length > 0)) {
        el.removeClass();
        el.css(styleWH);
        el.append(videoHtml);
        ctx.scriptconf.target = newId;
        ctx.syncId();
      };
    };
  };

  ctx.defaultColor = function() {
    if ((typeof ctx.features.playProgressColor) === 'string') {
      $('.vjs-play-progress').css('background-color', ctx.features.playProgressColor);
    };
    if ((typeof ctx.features.volumeLevelColor) === 'string') {
      $('.vjs-volume-level').css('background-color', ctx.features.volumeLevelColor);
    };
    if ((typeof ctx.features.markerColor) === 'string') {
      ctx.features.cueMarkerStyle['background-color'] = ctx.features.markerColor;
    };
    if ((typeof ctx.features.backgroundColor) === 'string') {
      var p = $('#' + ctx.scriptconf.target + '_html5_api');
      p.css('background-color', ctx.features.backgroundColor );
    };
  };

  ctx.colorTheme = function() {
    if (ctx.features.loadColorThemeByDomain === true) {
      var refUrl = (window.location !== window.parent.location) ? document.referrer : document.location.href;
      // override styles
      $.each(ctx.features.colorThemeByDomain, function(i, v) {
        if (refUrl.indexOf(v.domain) !== -1) {
          $('.vjs-play-progress').css('background-color', v.playProgressColor);
          $('.vjs-volume-level').css('background-color', v.volumeLevelColor);
          ctx.features.cueMarkerStyle['background-color'] = v.markerColor;
          var p = $('#' + ctx.scriptconf.target + '_html5_api');
          p.css('background-color', v.backgroundColor );
          ctx.clog('colorTheme', v);
          //return false;
        };
      });
    };
  };

  ctx.nnVideoLoadedCallback = function() {
    ctx.patchingAfterVjsLoader();
  };
 
  ctx.patchingBeforeVjsLoader = function() {
    ctx.vjsLoadingByDomainBeforeVjsLoader();
  };

  ctx.vjsLoadingByDomainBeforeVjsLoader = function() {
    if (ctx.features.loadVjsLoadingByDomain === true) {
      var refUrl = (window.location !== window.parent.location) ? document.referrer : document.location.href;
      // override ctx.images.vjsLoading
      ctx.images.vjsLoading = '/img/empty1x1.png';
      $.each(ctx.features.vjsLoadingByDomain, function(i, v) {
        if (refUrl.indexOf(v.domain) !== -1) {
          ctx.images.vjsLoading = v.image;
          ctx.clog('vjsLoadingByDomainBeforeVjsLoader vjsLoading', ctx.images.vjsLoading);
          //return false;
        };
      });
    };
  };

  ctx.patchingAfterVjsLoader  = function() {
    ctx.defaultColor();
    ctx.colorTheme();
    // patching background of videojs if browser isnot IE
    if (ctx.features.patchingVjsBgImgFromUrl === true) {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');
      if (msie === -1) {
        var p = $('#' + ctx.scriptconf.target + '_html5_api');
        p.css('background-image', 'url("'+ctx.scriptconf.imageUrl+'")' );
        p.css('background-size',  'cover');
        ctx.clog('patchingAfterVjsLoader VjsBgImgFromUrl', null);
      };
    };
  };

  ctx.patchingHdButtonTitle = function() {
    // patching HD button to have a title ctx.features.hdButtonTitle
    if (ctx.features.patchingHdButtonTitle === true) {
      if (ctx.vars.patchingHdButtonTitleDone === false) {
        $('button.vjs-icon-hd.vjs-icon-placeholder.vjs-menu-button.vjs-menu-button-popup.vjs-button').attr('title', ctx.features.hdButtonTitle);
        ctx.clog('patchingHdButtonTitle is working', null);
        ctx.vars.patchingHdButtonTitleDone = true;
      };
    };
  };

  ctx.getScriptTemplate = function(gsUrl, gsNextFunction, gsStatusOK) {
    if (ctx.features.getScriptToBodyAppend === false) {
      // JQuery getScripts
      $.ajaxSetup( { async: ctx.features.ajaxSetupASync , cache: ctx.features.ajaxSetupCache } );
      $.getScript(gsUrl, function() {
        ctx.clog('calls', gsUrl);
        if ((typeof gsStatusOK) === 'function') {
          gsStatusOK();
        };
        if ((typeof gsNextFunction) === 'function') {
          gsNextFunction();
        };
        $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
      }).fail(function() {
        ctx.clog('calls failed', gsUrl);
        if ((typeof gsStatusOK) === 'function') {
          gsStatusOK();
        };
        $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
        if ((typeof gsNextFunction) === 'function') {
          gsNextFunction();
        };
      });
    } else {
      // JQuery Body Append
      ctx.clog('getScriptTemplate Body Append', gsUrl);
      var el = document.createElement('script');
      el.onload = function() { 
        ctx.clog('getScriptTemplate Body Append is running', null); 
        if ((typeof gsStatusOK) === 'function') {
          gsStatusOK();
        };
        gsNextFunction(); 
      };
      el.src = gsUrl;
      document.body.appendChild(el);
    };
  };

  ctx.getScriptSrc = function() {
    var result = null;
    $.each($('script'), function(i, v) {
      if ( (v.src.indexOf(ctx.vars.scriptMarker) !== -1) || (v.src.indexOf(ctx.vars.scriptMarker2) !== -1) ) {
        result = v.src;
      };
    });
    return result;
  };

  ctx.reRoute = function() {
    ctx.vars.scriptSrc = ctx.getScriptSrc();
    ctx.clog('scriptSrc is',  ctx.vars.scriptSrc);
    ctx.vars.v = $.url(ctx.vars.scriptSrc).param('v');
    if (ctx.features.vTail === true) {
      if ((typeof ctx.vars.v) === 'string') {
        ctx.clog('will add tails v while getScripts', ctx.vars.v);
        // ok give them all tails except nnVideo.libs.Ima
        ctx.libs.vjsCore      = ctx.libs.vjsCore + '?v=' + ctx.vars.v;
        ctx.libs.vjsLang      = ctx.libs.vjsLang + '?v=' + ctx.vars.v;
        ctx.libs.vjsHls       = ctx.libs.vjsHls  + '?v=' + ctx.vars.v;
        ctx.libs.vjsAds       = ctx.libs.vjsAds  + '?v=' + ctx.vars.v;
        ctx.libs.vjsIma       = ctx.libs.vjsIma  + '?v=' + ctx.vars.v;
        ctx.libs.pushstream   = ctx.libs.pushstream   + '?v=' + ctx.vars.v;
        ctx.libs.detectAB     = ctx.libs.detectAB     + '?v=' + ctx.vars.v;
        ctx.libs.detectABWithFck = ctx.libs.detectABWithFck     + '?v=' + ctx.vars.v;
        ctx.libs.vjsQPicker   = ctx.libs.vjsQPicker   + '?v=' + ctx.vars.v;
        ctx.libs.vjsCueMarker = ctx.libs.vjsCueMarker + '?v=' + ctx.vars.v;
        ctx.libs.vjsVR        = ctx.libs.vjsVR        + '?v=' + ctx.vars.v;
        ctx.libs.portal       = ctx.libs.portal       + '?v=' + ctx.vars.v;
        ctx.libs.vjsContribHls= ctx.libs.vjsContribHls+ '?v=' + ctx.vars.v;
        ctx.libs.jqCarousel   = ctx.libs.jqCarousel   + '?v=' + ctx.vars.v;
        ctx.libs.jqResize     = ctx.libs.jqResize     + '?v=' + ctx.vars.v;
        ctx.libs.jqWaitImage  = ctx.libs.jqWaitImage  + '?v=' + ctx.vars.v;
        ctx.libs.modernizr    = ctx.libs.modernizr    + '?v=' + ctx.vars.v;
        ctx.libs.canAutoplay  = ctx.libs.canAutoplay  + '?v=' + ctx.vars.v;
        ctx.libs.later        = ctx.libs.later        + '?v=' + ctx.vars.v;
      };
    };
  };

  ctx.gsDetectAB = function() {
    if (ctx.features.detectABWithFck === false) {
      // Non FckAdBlock detector (nnVideo.detect.js)
      if (ctx.features.getScriptToBodyAppend === false) {
        // JQuery getScripts
        $.ajaxSetup( { async: ctx.features.ajaxSetupASync , cache: ctx.features.ajaxSetupCache } );
        $.getScript(ctx.libs.basePath + ctx.libs.detectAB, function() {
          ctx.clog('calls', ctx.libs.basePath + ctx.libs.detectAB);
          // run adblockDetect
          adblockDetect(function(abdetected) {
            if (abdetected) {
              ctx.clog('says Adblocker is detected', null);
              ctx.vars.isABDetected = true;
              ctx.gs1();
            } else {
              ctx.clog('says Adblocker is not detected', null);
              ctx.vars.isABDetected = false;
              ctx.gs1();
            };
          }, {
            testInterval: 40,
            testRuns: 5
          });
          $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
        }).fail(function() {
          ctx.clog('calls failed because of gsDetectAB failure', ctx.libs.detectAB);
          ctx.clog('assumed that Adblocker is detected so vars.isABDetected is', ctx.vars.isABDetected);
          ctx.vars.isABDetected = true; // assumed AB is detected !
          ctx.gs1(); // maybe detectAB has failed, go through the gs1
          $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
        });
      } else {
        // JQuery Body Append
        ctx.clog('gsDetectAB Body Append', null);
        var el = document.createElement('script');
        el.onload = function() {
          // run adblockDetect
          ctx.clog('gsDetectAB Body Append is running', null);
          adblockDetect(function(abdetected) {
            if (abdetected) {
              ctx.clog('says Adblocker is detected', null);
              ctx.vars.isABDetected = true;
              ctx.gs1();
            } else {
              ctx.clog('says Adblocker is not detected', null);
              ctx.vars.isABDetected = false;
              ctx.gs1();
            };
          }, {
            testInterval: 40,
            testRuns: 5
          });
        };
        el.src = ctx.libs.basePath + ctx.libs.detectAB;
        document.body.appendChild(el);
      };
    } else {
      // FckAdBlock detector (nnVideo.detect2.js)
      if (typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
        ctx.clog('says Adblocker is detected bcoz fck var usrupting', null);
        ctx.vars.isABDetected = true;
        ctx.gs1();
      } else {
        if (ctx.features.getScriptToBodyAppend === false) {
          // JQuery getScripts
          $.ajaxSetup( { async: ctx.features.ajaxSetupASync , cache: ctx.features.ajaxSetupCache } );
          $.getScript(ctx.libs.basePath + ctx.libs.detectABWithFck, function() {
            ctx.clog('calls', ctx.libs.basePath + ctx.libs.detectABWithFck);
            // run adblockDetect Fck
            fuckAdBlock.onDetected(function() {
              ctx.clog('says Adblocker is detected by Fck', null);
              ctx.vars.isABDetected = true;
              ctx.gs1();
            });
            fuckAdBlock.onNotDetected(function() {
              ctx.clog('says Adblocker is not detected by Fck', null);
              ctx.vars.isABDetected = false;
              ctx.gs1();
            });
            $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
          }).fail(function() {
            ctx.clog('calls failed because of gsDetectAB failure', ctx.libs.detectABWithFck);
            ctx.clog('assumed that Adblocker Fck is detected so vars.isABDetected is', ctx.vars.isABDetected);
            ctx.vars.isABDetected = true; // assumed AB is detected !
            ctx.gs1(); // maybe detectAB has failed, go through the gs1
            $.ajaxSetup( { async: true , cache: false } ); // reset ajax config
          });
        } else {
          // JQuery Body Append
          ctx.clog('gsDetectAB Body Append', null);
          var el = document.createElement('script');
          el.onload = function() {
            // run adblockDetect Fck
            fuckAdBlock.onDetected(function() {
              ctx.clog('says Adblocker is detected', null);
              ctx.vars.isABDetected = true;
              ctx.gs1();
            });
            fuckAdBlock.onNotDetected(function() {
              ctx.clog('says Adblocker is not detected', null);
              ctx.vars.isABDetected = false;
              ctx.gs1();
            });
          };
          el.src = ctx.libs.basePath + ctx.libs.detectABWithFck;
          document.body.appendChild(el);
        };
      };
    };
  };

  ctx.gs95 = function() {
    if (ctx.features.enableLiveAdsCron === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.later;
      var gsNextFunction = ctx.coreRun;
      ctx.clog('this is later lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.coreRun();
    };
  };

  ctx.gs94 = function() {
    if (ctx.features.smartAutoplay === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.canAutoplay;
      var gsNextFunction = ctx.coreRun;
      ctx.clog('this is can-autoplay lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs95();
    };
  };

  ctx.gs93 = function() {
    if (ctx.features.loadVjsRelatedVideoModal3D === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.jqCarousel;
      var gsNextFunction = ctx.coreRun;
      ctx.clog('this is jqCarousel lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs94();
    };
  };

  ctx.gs92 = function() {
    if (ctx.features.loadVjsRelatedVideoModal3D === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.modernizr;
      var gsNextFunction = ctx.gs93;
      ctx.clog('this is modernizr lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs93();
    };
  };

  ctx.gs91 = function() {
    if (ctx.features.loadVjsRelatedVideoModal3D === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.jqWaitImage;
      var gsNextFunction = ctx.gs92;
      ctx.clog('this is jqWaitImage lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs92();
    };
  };

  ctx.gs9 = function() {
    if (ctx.features.loadVjsRelatedVideoModal3D === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.jqResize;
      var gsNextFunction = ctx.gs91;
      ctx.clog('this is jqResize lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs91();
    };
  };

  ctx.gs8 = function() {
    if (ctx.features.loadVR === true) {
      var gsUrl = ctx.libs.basePath + ctx.libs.vjsVR;
      var gsNextFunction = ctx.gs9;
      ctx.clog('this is vjsVR lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs9();
    };
  };

  ctx.gs71 = function() {
    var gsUrl = ctx.libs.basePath + ctx.libs.vjsCueMarker;
    var gsNextFunction = ctx.gs8;
    ctx.clog('this is vjsCueMarker lib caller', null);
    ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
  };

  ctx.gs70 = function() {
    var gsUrl = ctx.libs.basePath + ctx.libs.portal;
    var gsNextFunction = ctx.gs71;
    ctx.clog('this is portal lib caller', null);
    ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
  };

  ctx.gs7 = function() {
    if ((ctx.features.enableLiveAdsServerPush === true) && (ctx.features.loadIma === true) && (ctx.vars.isABDetected === false)) {
      var gsUrl = ctx.libs.basePath + ctx.libs.pushstream;
      var gsNextFunction = ctx.gs70;
      ctx.clog('this is pushstream lib caller', null);
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    } else {
      ctx.gs70();
    };
  };

  ctx.gsVjsImaSuccess = function() {
    ctx.vars.gsVjsImaSuccess = true;
  };

  ctx.gsReviverVjsIma = function() {
    if (ctx.features.enableGSReviver === true) {
      ctx.clog('gsReviverVjsIma is activated', null);
      setTimeout(function() {
        if (ctx.vars.gsVjsImaSuccess === true) {
          ctx.clog('gsReviverVjsIma is deactivated', null);
        } else {
          ctx.clog('gsReviverVjsIma has detected adblock! REVIVE to Next Step', null);
          ctx.vars.gsReviverToNextStep = true;
          ctx.vars.isABDetected       = true;
          ctx.gs7();
        };
      }, ctx.features.gsReviverVjsImaTimeout);
    };
  };

  ctx.gsVjsAdsSuccess = function() {
    ctx.vars.gsVjsAdsSuccess = true;
  };

  ctx.gsReviverVjsAds = function() {
    if (ctx.features.enableGSReviver === true) {
      ctx.clog('gsReviverVjsAds is activated', null);
      setTimeout(function() {
        if (ctx.vars.gsVjsAdsSuccess === true) {
          ctx.clog('gsReviverVjsAds is deactivated', null);
        } else {
          ctx.clog('gsReviverVjsAds has detected adblock! REVIVE to Next Step', null);
          ctx.vars.gsReviverToNextStep = true;
          ctx.vars.isABDetected       = true;
          ctx.gs7();
        };
      }, ctx.features.gsReviverVjsAdsTimeout);
    };
  };

  ctx.gsImaSuccess = function() {
    ctx.vars.gsImaSuccess = true;
  };

  ctx.gsReviverIma = function() {
    if (ctx.features.enableGSReviver === true) {
      ctx.clog('gsReviverIma is activated', null);
      setTimeout(function() {
        if (ctx.vars.gsImaSuccess === true) {
          ctx.clog('gsReviverIma is deactivated', null);
        } else {
          ctx.clog('gsReviverIma has detected adblock! REVIVE to Next Step', null);
          ctx.vars.gsReviverToNextStep = true;
          ctx.vars.isABDetected       = true;
          ctx.gs7();
        };
      }, ctx.features.gsReviverImaTimeout);
    };
  };

  ctx.gs6 = function() {
    if ((ctx.features.enableGSReviver === true) && (ctx.vars.gsReviverToNextStep === true)) {
      ctx.clog('ctx.gs6 vjsIma lib caller stops bcoz of Reviver', null);
      return false;
    };
    if ( ((typeof google) === 'object') && (google !== null) && ((typeof google.ima) === 'object') && (google.ima !== null) ) {
      var gsUrl = ctx.libs.basePath + ctx.libs.vjsIma;
      var gsNextFunction = ctx.gs7;
      ctx.clog('this is vjsIma lib caller', null);
      ctx.gsReviverVjsIma();
      ctx.getScriptTemplate(gsUrl, gsNextFunction, ctx.gsVjsImaSuccess);
    } else {
      ctx.clog('skip-loading-of vjsIma because google.ima object is missing', null);
      ctx.gs7();
    };
  };

  ctx.gs5 = function() {
    if ((ctx.features.enableGSReviver === true) && (ctx.vars.gsReviverToNextStep === true)) {
      ctx.clog('ctx.gs5 vjsAds lib caller stops bcoz of Reviver', null);
      return false;
    };
    if ( ((typeof google) === 'object') && (google !== null) && ((typeof google.ima) === 'object') && (google.ima !== null) ) {
      var gsUrl = ctx.libs.basePath + ctx.libs.vjsAds;
      var gsNextFunction = ctx.gs6;
      ctx.clog('this is vjsAds lib caller', null);
      ctx.gsReviverVjsAds();
      ctx.getScriptTemplate(gsUrl, gsNextFunction, ctx.gsVjsAdsSuccess);
    } else {
      ctx.clog('skip-loading-of vjsAds because google.ima object is missing', null);
      ctx.gs6();
    };
  };

  ctx.gs4 = function() {
    if (ctx.features.loadIma === true) {
      var gsUrl = ctx.libs.Ima; // this is from Google Server !
      var gsNextFunction = ctx.gs5;
      ctx.clog('this is Ima lib caller', null);
      if (ctx.features.detectAB === false) {
        ctx.clog('is-loading-of ima because ctx.features.detectAB is false', null);
        ctx.getScriptTemplate(gsUrl, gsNextFunction, ctx.gsImaSuccess);
        ctx.gsReviverIma();
      } else if ((ctx.features.detectAB === true) && (ctx.vars.isABDetected === true)) {
        ctx.clog('skip-loading-of ima because ctx.vars.isABDetected is true', null);
        ctx.gs5();
      } else {
        ctx.clog('is-loading-of ima because ctx.vars.isABDetected is false', null);
        ctx.gsReviverIma();
        ctx.getScriptTemplate(gsUrl, gsNextFunction, ctx.gsImaSuccess);
      };      
    } else {
      ctx.clog('skip-loading-of ima because ctx.features.loadIma is false', null);
      ctx.gs5();
    };
  };

  ctx.gs3 = function() {
    var gsUrl = ctx.libs.basePath + ctx.libs.vjsHls;
    var gsNextFunction = ctx.gs4;
    ctx.clog('this is vjsHls lib caller', null);
    if ((ctx.features.loadVjsContribHls === true) && (ctx.libs.vjsVersion === 7)) {
      ctx.clog('skip-loading-of vjsHls because vjsVersion 7 has builtin hlsjs-engine', null);
      gsNextFunction();
    } else {
      ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
    };
  };

  ctx.gs21 = function() {
    var gsUrl = ctx.libs.basePath + ctx.libs.vjsQPicker;
    var gsNextFunction = ctx.gs3;
    ctx.clog('this is vjsQPicker lib caller', null);
    ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
  };

  ctx.gs2 = function() {
    var gsUrl = ctx.libs.basePath + ctx.libs.vjsLang;
    var gsNextFunction = ctx.gs21;
    ctx.clog('this is vjsLang lib caller', null);
    ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
  };

  ctx.gs1 = function() {
    var gsUrl = ctx.libs.basePath + ctx.libs.vjsCore;
    var gsNextFunction = ctx.gs2;
    ctx.clog('this is vjsCore lib caller', null);
    ctx.getScriptTemplate(gsUrl, gsNextFunction, null);
  };

  ctx.coreInit = function() {
    // default settings for logTextarea and logTextarea2
    ctx.features.logTextarea  = true;
    ctx.features.logTextarea2 = false;
    // coreInit here...
    $(document).ready(function() {
    //$(window).load(function() {
      ctx.clog('coreInit', null);
      ctx.clog('is running the script', null);
      ctx.showCoreVersion();
      if ((typeof onNnVideoParams) !== 'function') {
        ctx.clog('params from scriptSrcParams()', null);
        ctx.vars.scriptSrcParams = ctx.scriptSrcParams();
      } else {
        ctx.clog('params from onNnVideoParams()', null);
        ctx.vars.scriptSrcParams = onNnVideoParams();
      };
      ctx.clog('scriptSrcParams are', ctx.vars.scriptSrcParams);
      ctx.scConfProcess(ctx.vars.scriptSrcParams);
      ctx.syncId();
      ctx.syncOthers();
      ctx.clog('please check these configs below', null);
      ctx.libsProcess();
      ctx.imagesProcess();
      ctx.stylesProcess();
      ctx.featuresProcess();
      ctx.vjsConfProcess();
      ctx.hlsjsConfProcess();
      ctx.adsConfProcess();
      ctx.cbadsConfProcess();
      ctx.vrConfProcess();
      // after xxxProcess then we're trying to get all files
      ctx.reRoute();
      ctx.stylesLoader();
      if (ctx.isFlowPlayerDiv() === true) {
        ctx.features.loadByDiv = true;
      };
      ctx.divLoader(); // it will be reload ctx.syncId()
      ctx.patchingBeforeVjsLoader();
      if ( (ctx.features.loadGetAllowedStartLevel === true) && (ctx.features.suppressedStartLevel > 0) ) {
        ctx.hlsjsconf.startLevel = ctx.getAllowedStartLevel(ctx.scriptconf.videoUrl, ctx.features.suppressedStartLevel);
      };
      ctx.clog('READY FOR LOADING LIBRARIES', null);
      if (ctx.features.skipLibGetScripts === false) {
        // if skipLibGetScripts is true, here we use GetScripts
        if (ctx.features.detectAB === true) {
          ctx.gsDetectAB();
        } else {
          ctx.gs1();
        };
      } else {
        // we skip Libraries loading with GetScripts, go to coreRun NOW !
        ctx.coreRun();
      };
    });
  };

  ctx.scriptSrcParams = function() {
    ctx.clog('scriptSrcParams is here', null);
    var result = {};
    $.each($('script'), function(i, v) {
      if ( (v.src.indexOf(ctx.vars.scriptMarker) !== -1) || (v.src.indexOf(ctx.vars.scriptMarker2) !== -1) ) {
        var vText = v.text.trim();
        ctx.clog('scriptSrcParams vText is', vText);
        if ((typeof vText) === 'string') {
          if (vText.length > 0) {
            try {
              var vTextEval = eval('(' + vText + ')'); // object evaluation, not code evaluation
              if ( ( typeof vTextEval === 'object') && ( typeof vTextEval !== 'null' ) ) {
                result = vTextEval;
                return result;
              };
            } catch (error) {
              var errMessage = '';
              if (error.hasOwnProperty('name') === true) {
                errMessage = 'Error Name: ' + error.name;
              };
              if (error.hasOwnProperty('message') === true) {
                errMessage = errMessage + ', Error Message: ' + error.message;
              };
              ctx.clog('scriptSrcParams got an error inside eval-uation', errMessage);
            };
          };
        };
      };
    });
    return result;
  };

  ctx.scConfProcess = function(scriptSrcParams) {
    $.each(ctx.scriptconf, function (idx, val) {
      if (((typeof scriptSrcParams) !== 'undefined') && (scriptSrcParams !== null)) {
        if ((typeof scriptSrcParams[idx]) !== 'undefined') {
          ctx.scriptconf[idx] = scriptSrcParams[idx];
        };
      };
      ctx.clog('scriptconf.' + idx, ctx.scriptconf[idx]);
   });
  };

  ctx.libsProcess = function() {
    $.each(ctx.libs, function (idx, val) {
      if (((typeof ctx.scriptconf.libs) !== 'undefined') && (ctx.scriptconf.libs !== null)) {
        if ((typeof ctx.scriptconf.libs[idx]) !== 'undefined') {
          ctx.libs[idx] = ctx.scriptconf.libs[idx];
        };
      };
      //ctx.clog('libs.' + idx, ctx.libs[idx]);
   });
  };

  ctx.imagesProcess = function() {
    $.each(ctx.images, function (idx, val) {
      if (((typeof ctx.scriptconf.images) !== 'undefined') && (ctx.scriptconf.images !== null)) {
        if ((typeof ctx.scriptconf.images[idx]) !== 'undefined') {
          ctx.images[idx] = ctx.scriptconf.images[idx];
        };
      };
      //ctx.clog('images.' + idx, ctx.images[idx]);
   });
  };

  ctx.stylesProcess = function() {
    $.each(ctx.styles, function (idx, val) {
      if (((typeof ctx.scriptconf.styles) !== 'undefined') && (ctx.scriptconf.styles !== null)) {
        if ((typeof ctx.scriptconf.styles[idx]) !== 'undefined') {
          ctx.styles[idx] = ctx.scriptconf.styles[idx];
        };
      };
      //ctx.clog('styles.' + idx, ctx.styles[idx]);
   });
  };

  ctx.stylesLoader = function() {
    if (ctx.features.stylesLoader === true) {
      if ((typeof document.createStyleSheet) === 'function') {
        // IE Styles
        document.createStyleSheet(ctx.styles.basePath + ctx.styles.vjsCore + '?v=' + ctx.vars.v);
        document.createStyleSheet(ctx.styles.basePath + ctx.styles.vjsAds  + '?v=' + ctx.vars.v);
        document.createStyleSheet(ctx.styles.basePath + ctx.styles.vjsIma  + '?v=' + ctx.vars.v);
        document.createStyleSheet(ctx.styles.basePath + ctx.styles.vjsCueMarker + '?v=' + ctx.vars.v);
        if (ctx.features.loadVjsRelatedVideoModal3D === true) {
          document.createStyleSheet(ctx.styles.basePath + ctx.styles.jqCarousel + '?v=' + ctx.vars.v);
        };
      } else {
        // Non-IE Styles
        var headEl = document.getElementsByTagName('head');
        if ( ((typeof headEl) === 'object') && (headEl !== null) ) {
          $('<link rel="stylesheet" type="text/css" href="' + ctx.styles.basePath + ctx.styles.vjsCore       + '?v=' + ctx.vars.v + '" />').appendTo('head');
          $('<link rel="stylesheet" type="text/css" href="' + ctx.styles.basePath + ctx.styles.vjsAds        + '?v=' + ctx.vars.v + '" />').appendTo('head');
          $('<link rel="stylesheet" type="text/css" href="' + ctx.styles.basePath + ctx.styles.vjsIma        + '?v=' + ctx.vars.v + '" />').appendTo('head');
          $('<link rel="stylesheet" type="text/css" href="' + ctx.styles.basePath + ctx.styles.vjsCueMarker  + '?v=' + ctx.vars.v + '" />').appendTo('head');
          if (ctx.features.loadCustomCSS === true) {
            $('<link rel="stylesheet" type="text/css" href="' + ctx.styles.basePath + ctx.styles.custom        + '?v=' + ctx.vars.v + '" />').appendTo('head');
          };
          if (ctx.features.loadVjsRelatedVideoModal3D === true) {
            $('<link rel="stylesheet" type="text/css" href="' + ctx.styles.basePath + ctx.styles.jqCarousel  + '?v=' + ctx.vars.v + '" />').appendTo('head');
          };
        };
      };
      ctx.clog('stylesLoader is working', null);
    } else {
      ctx.clog('stylesLoader has been skipped', null);
    };
  };

  ctx.featuresProcess = function() {
    $.each(ctx.features, function (idx, val) {
      if (((typeof ctx.scriptconf.features) !== 'undefined') && (ctx.scriptconf.features !== null)) {
        if ((typeof ctx.scriptconf.features[idx]) !== 'undefined') {
          ctx.features[idx] = ctx.scriptconf.features[idx];
        };
      };
      //ctx.clog('features.' + idx, ctx.features[idx]);
   });
  };

  ctx.vjsConfProcess = function() {
    $.each(ctx.vjsconf, function (idx, val) {
      if (((typeof ctx.scriptconf.vjsconf) !== 'undefined') && (ctx.scriptconf.vjsconf !== null)) {
        if ((typeof ctx.scriptconf.vjsconf[idx]) !== 'undefined') {
          ctx.vjsconf[idx] = ctx.scriptconf.vjsconf[idx];
        };
      };
      //ctx.clog('vjsconf.' + idx, ctx.vjsconf[idx]);
   });
  };

  ctx.hlsjsConfProcess = function() {
    $.each(ctx.hlsjsconf, function (idx, val) {
      if (((typeof ctx.scriptconf.hlsjsconf) !== 'undefined') && (ctx.scriptconf.hlsjsconf !== null)) {
        if ((typeof ctx.scriptconf.hlsjsconf[idx]) !== 'undefined') {
          ctx.hlsjsconf[idx] = ctx.scriptconf.hlsjsconf[idx];
        };
      };
      //ctx.clog('hlsjsconf.' + idx, ctx.hlsjsconf[idx]);
   });
  };

  ctx.adsConfProcess = function() {
    $.each(ctx.adsconf, function (idx, val) {
      if (((typeof ctx.scriptconf.adsconf) !== 'undefined') && (ctx.scriptconf.adsconf !== null)) {
        if ((typeof ctx.scriptconf.adsconf[idx]) !== 'undefined') {
          ctx.adsconf[idx] = ctx.scriptconf.adsconf[idx];
        };
      };
      //ctx.clog('adsconf.' + idx, ctx.adsconf[idx]);
   });
  };

  ctx.cbadsConfProcess = function() {
    $.each(ctx.cbadsconf, function (idx, val) {
      if (((typeof ctx.scriptconf.cbadsconf) !== 'undefined') && (ctx.scriptconf.cbadsconf !== null)) {
        if ((typeof ctx.scriptconf.cbadsconf[idx]) !== 'undefined') {
          ctx.cbadsconf[idx] = ctx.scriptconf.cbadsconf[idx];
        };
      };
      //ctx.clog('cbadsconf.' + idx, ctx.cbadsconf[idx]);
   });
  };

  ctx.vrConfProcess = function() {
    $.each(ctx.vrconf, function (idx, val) {
      if (((typeof ctx.scriptconf.vrconf) !== 'undefined') && (ctx.scriptconf.vrconf !== null)) {
        if ((typeof ctx.scriptconf.vrconf[idx]) !== 'undefined') {
          ctx.vrconf[idx] = ctx.scriptconf.vrconf[idx];
        };
      };
      //ctx.clog('vrconf.' + idx, ctx.vrconf[idx]);
   });
  };

  ctx.syncId = function() {
    // make all id in scriptconf, vjsconf and adsconf, same
    // in scriptconf id written as target
    // we replace '#' prefix in id with ''
    var id = null;
    if ((typeof ctx.scriptconf.target) === 'string') {
      id = ctx.scriptconf.target.replace('#','');
    };
    ctx.scriptconf.target = id;
    ctx.vjsconf.id = id;
    ctx.adsconf.id = id;
    ctx.clog('sync id for scriptconf.target', ctx.scriptconf.target);
    ctx.clog('sync id for vjsconf.id', ctx.vjsconf.id);
    ctx.clog('sync id for adsconf.id', ctx.adsconf.id);
  };

  ctx.syncOthers = function() {
    ctx.clog('syncOthers is working', null);
    if ((typeof ctx.scriptconf.autoplay) !== 'undefined') {
      ctx.vjsconf.autoplay = ctx.scriptconf.autoplay;
      ctx.clog('scriptconf.autoplay to vjsconf.autoplay', ctx.vjsconf.autoplay);
    };
    if ((typeof ctx.scriptconf.live) !== 'undefined') {
      ctx.cbadsconf.contentIsLive = ctx.scriptconf.live;
      ctx.clog('scriptconf.live to cbadsconf.contentIsLive', ctx.cbadsconf.contentIsLive);
    };
    if ((typeof ctx.scriptconf.mute) !== 'undefined') {
      ctx.vjsconf.muted = ctx.scriptconf.mute;
      ctx.clog('scriptconf.mute to vjsconf.muted', ctx.vjsconf.muted);
    };
    if ((typeof ctx.scriptconf.imageUrl) !== 'undefined') {
      ctx.vjsconf.poster = ctx.scriptconf.imageUrl;
      ctx.clog('scriptconf.imageUrl to vjsconf.poster', ctx.vjsconf.poster);
    };
    if ((typeof ctx.scriptconf.videoUrl) !== 'undefined') {
      ctx.vjsconf.src = ctx.scriptconf.videoUrl;
      ctx.clog('scriptconf.videoUrl to vjsconf.src', ctx.vjsconf.src);
      //ctx.vjsconf.sources = [ { src: ctx.scriptconf.videoUrl, type: ctx.scriptconf.videoUrl } ];
      //ctx.clog('scriptconf.videoUrl to vjsconf.sources', ctx.vjsconf.sources);
    };
    if ((typeof ctx.scriptconf.vastTag) !== 'undefined') {
      ctx.adsconf.adTagUrl = ctx.scriptconf.vastTag;
      ctx.clog('scriptconf.vastTag to adsconf.adTagUrl', ctx.adsconf.adTagUrl);
    };
    if ((typeof ctx.scriptconf.adRules) !== 'undefined') {
      ctx.adsconf.adTagUrl = ctx.scriptconf.adRules;
      ctx.clog('scriptconf.adRules to adsconf.adTagUrl', ctx.adsconf.adTagUrl);
    };
    // default value
    ctx.adsconf.adTagUrlCopied = ctx.adsconf.adTagUrl;
    ctx.adsconf.adsResponseCopied = ctx.adsconf.adsResponse;
    ctx.adsconf.adsManagerLoadedCallback = ctx.imaAdsManagerLoadedCallback.bind(ctx);
    ctx.clog('ctx.adsconf.adsManagerLoadedCallback = ctx.imaAdsManagerLoadedCallback', null);
    ctx.adsconf.adsManagerInstantiationCallback = ctx.imaAdsManagerInstantiationCallback.bind(ctx);
    ctx.clog('ctx.adsconf.adsManagerInstantiationCallback = ctx.imaAdsManagerInstantiationCallback', null);
    ctx.adsconf.linearAdStartedCallback = ctx.imaLinearAdStartedCallback.bind(ctx);
    ctx.clog('ctx.adsconf.linearAdStartedCallback = ctx.imaLinearAdStartedCallback', null);
    ctx.adsconf.contribAdsSettings = ctx.cbadsconf; // ctx.cbadsconf is configuration for player.ads (cb means contrib-ads)
    ctx.clog('ctx.adsconf.contribAdsSettings = ctx.cbadsconf', null);
    ctx.hlsjsconf.xhrSetup = ctx.hlsjsXhrSetupCallback;
    ctx.clog('ctx.hlsjsconf.xhrSetup = ctx.hlsjsXhrSetupCallback', null);
    if (ctx.features.loadVjsContribHls === true) {
      ctx.libs.vjsHls = ctx.libs.vjsContribHls; // switch from hlsjs-project to videojs-contrib-hls-project
    };
    if (ctx.scriptconf.live === false) {
      // VOD
      if (ctx.features.enableVodPlaybackRates === true) {
        ctx.vjsconf.playbackRates = [0.5, 1, 1.5, 2];
      } else {
        ctx.vjsconf.playbackRates = null;
      };
    } else {
      // Live
      if (ctx.features.enableLivePlaybackRates === true) {
        ctx.vjsconf.playbackRates = [ 1 ];
      } else {
        ctx.vjsconf.playbackRates = null;
      };
      // No drawCueMarker for Live, no timeline in Live !
      ctx.features.loadDrawCueMarker = false;
    };
    ctx.clog('syncOthers vjsconf.playebackRates is', ctx.vjsconf.playbackRates);
    ctx.clog('syncOthers features.loadDrawCueMarker is', ctx.features.loadDrawCueMarker);
    // if live streaming please hide General Menu and its contents
    if (ctx.scriptconf.live === true) {
      ctx.features.logTextarea2               = false; // vjsLogModal
      ctx.features.loadVjsGeneralMenu         = false;
      ctx.features.loadVjsRelatedVideoModal   = false;
      ctx.features.showRelatedVideoModalAtEnd = false;
      ctx.features.loadVjsRelatedVideoModal3D = false;
      ctx.features.showRelatedVideoModal3DAtEnd = false;
      ctx.clog('syncOthers ctx.features.logTextarea2', ctx.features.logTextarea2);
      ctx.clog('syncOthers ctx.features.loadVjsGeneralMenu', ctx.features.loadVjsGeneralMenu);
      ctx.clog('syncOthers ctx.features.loadVjsRelatedVideoModal', ctx.features.loadVjsRelatedVideoModal);
      ctx.clog('syncOthers ctx.features.showRelatedVideoModalAtEnd', ctx.features.showRelatedVideoModalAtEnd);
      ctx.clog('syncOthers ctx.features.loadVjsRelatedVideoModal3D', ctx.features.loadVjsRelatedVideoModal3D);
      ctx.clog('syncOthers ctx.features.showRelatedVideoModal3DAtEnd', ctx.features.showRelatedVideoModal3DAtEnd);
    };
    if ((ctx.scriptconf.live === false) && (ctx.features.vodAutoStartLoad !== null)) {
      ctx.hlsjsconf.autoStartLoad = ctx.features.vodAutoStartLoad;
      ctx.clog('syncOthers ctx.features.vodAutoStartLoad makes ctx.hlsjsconf.autoStartLoad into',  ctx.hlsjsconf.autoStartLoad);
    };
    if ((ctx.scriptconf.live === true) && (ctx.features.liveAutoStartLoad !== null)) {
      ctx.hlsjsconf.autoStartLoad = ctx.features.liveAutoStartLoad;
      ctx.clog('syncOthers ctx.features.liveAutoStartLoad makes ctx.hlsjsconf.autoStartLoad into', ctx.hlsjsconf.autoStartLoad);
    };
    if ((ctx.scriptconf.live === false) && (ctx.features.vodPreload !== null)) {
      ctx.vjsconf.preload = ctx.features.vodPreload; 
      ctx.clog('syncOthers ctx.features.vodPreload makes ctx.vjsconf.preload into',  ctx.vjsconf.preload);
    };
    if ((ctx.scriptconf.live === true) && (ctx.features.livePreload !== null)) {
      ctx.vjsconf.preload = ctx.features.livePreload;
      ctx.clog('syncOthers ctx.features.livePreload makes ctx.vjsconf.preload into', ctx.vjsconf.preload);
    };
    if ((ctx.features.controlBarChildren !== null) && (typeof ctx.features.controlBarChildren === 'object')) {
      if ((typeof ctx.vjsconf.children === 'object') && (typeof ctx.vjsconf.children.controlBar === 'object')) {
        ctx.vjsconf.children.controlBar = ctx.features.controlBarChildren;
        ctx.clog('syncOthers merges ctx.features.controlBarChildren into ctx.vjsconf.children', ctx.vjsconf.children);
      };
    };
    var androidVersion = ctx.checkAndroidVersion();
    var isUCBrowserM = ctx.isUCBrowserMobile();
    var isMIUIBrowserM = ctx.isMIUIBrowserMobile();
    var isMSECompliant = window.hasOwnProperty('MediaSource');
    ctx.clog('isMSECompliant is', isMSECompliant);
    if ( ((androidVersion !== 0) && (androidVersion <= 4)) || isUCBrowserM || isMIUIBrowserM || !isMSECompliant ) {
      ctx.clog('syncOthers found youre using Android version 4 or UCBrowser Mobile', null);
      ctx.libs.vjsVersion                 = 6;
      ctx.features.loadVjsContribHls      = true;
      ctx.features.getScriptToBodyAppend  = true;
      ctx.libs.vjsCore    = ctx.libs.vjsCoreAlt;
      ctx.styles.vjsCore  = ctx.styles.vjsCoreAlt;
      ctx.clog('syncOthers sets VideoJS to version 6 automatically');
      ctx.clog('syncOthers sets ctx.libs.vjsVersion to', ctx.libs.vjsVersion);
      ctx.clog('syncOthers sets ctx.features.loadVjsContribHls to', ctx.features.loadVjsContribHls);
      ctx.clog('syncOthers sets ctx.features.getScriptToBodyAppend to', ctx.features.getScriptToBodyAppend);
      ctx.clog('syncOthers sets ctx.libs.vjsCore to', ctx.libs.vjsCore);
      ctx.clog('syncOthers sets ctx.styles.vjsCore to', ctx.styles.vjsCore);
    };
    // if autoplay is true then disable vodAutoStartLoad and liveAutoStartLoad
    if (ctx.scriptconf.autoplay === true) {
      ctx.features.vodAutoStartLoad   = true;
      ctx.features.liveAutoStartLoad  = true;
      ctx.hlsjsconf.autoStartLoad     = true;
      ctx.features.vodBufferWhilePausedAutoStop    = false;
      ctx.features.liveBufferWhilePausedAutoStop   = false;
      ctx.clog('syncOthers reads autoplay true then it sets all autoStartLoad, vodAutoStartLoad, liveAutoStartLoad to true', null);
    };
  };

  ctx.vjsLoader = function() {
    // checking...
    ctx.clog('VJSLOADER IS DRAWING A PLAYER :)', null);
    var idChecker = document.getElementById(ctx.scriptconf.target);
    if ( ((typeof idChecker) !== 'object') && (idChecker === null) ) {
      ctx.clog('your supplied id from ctx.scriptconf.target is wrong/failed --------------------X8', idChecker);
      return false;
    };
    $.ajaxSetup( { async: ctx.features.vjsLoaderAjaxSetupASync , cache: ctx.features.vjsLoaderAjaxSetupCache } );
    // hlsjs-project setup
    if (ctx.features.loadVjsContribHls === false) {
      ctx.clog('vjsLoader is writing html5.hlsjsconfig from hlsjsconf', null);
      ctx.vjsconf.html5.hlsjsConfig = ctx.hlsjsconf;
      // setup beforeinitialize hook hls.js
      if (ctx.libs.vjsVersion > 6) {
        try {
          videojs.Html5Hlsjs.addHook('beforeinitialize', function(videojsPlayer, hlsjsInstance) {
            // here you can interact with hls.js instance and/or video.js playback is initialized
            ctx.vars.hlsjsInstance = hlsjsInstance;
            ctx.clog('vjsLoader is grabbing hlsjsInstance', ctx.vars.hlsjsInstance);
          });
        } catch (error) {
          var errMessage = '';
          if (error.hasOwnProperty('name') === true) {
            errMessage = 'Error Name: ' + error.name;
          };
          if (error.hasOwnProperty('message') === true) {
            errMessage = errMessage + ', Error Message: ' + error.message;
          };
          ctx.clog('vjsLoader got an error while injecting Video-Dev HLS.js Engine into Browser', errMessage);
        };
      };
    };
    // player setup
    ctx.clog('vjsLoader is creating player', null);
    if (ctx.libs.vjsVersion === 6) {
      ctx.vjsconf.html5 = {};
      ctx.vjsconf.html5.nativeAudioTracks = true;
      ctx.vjsconf.html5.nativeVideoTracks = true;
      ctx.vjsconf.html5.hls = {};
      ctx.vjsconf.html5.hls.debug = false;
      ctx.vjsconf.html5.hls.overrideNative = false;
      ctx.clog('vjsLoader adds vjs6 HLS overrideNative into ctx.vjsconf', ctx.vjsconf.html5.hls.overrideNative);
    };
    // BEGIN INSTANTIATION INSIDE TRY CATCH
    try {
      ctx.vars.player = videojs(ctx.scriptconf.target, ctx.vjsconf);
    } catch (error) {
      var errMessage = '';
      if (error.hasOwnProperty('name') === true) {
        errMessage = 'Error Name: ' + error.name;
      };
      if (error.hasOwnProperty('message') === true) {
        errMessage = errMessage + ', Error Message: ' + error.message;
      };
      ctx.clog('vjsLoader got an error while instantiation VideoJS into Browser', errMessage);
    };
    // END INSTANTIATION
    if (ctx.vars.player !== null) {
      if ( ((typeof ctx.vjsconf.width) === 'number') && ((typeof ctx.vjsconf.height) === 'number') ) {
        ctx.vars.player.dimensions(ctx.vjsconf.width, ctx.vjsconf.height);
      };
      // vjsEvents here to registered
      ctx.vjsRegisteringAllEvents();
      // vjsLogModal
      ctx.vjsLogModal();
      // vjsRelatedVideoModal
      ctx.vjsRelatedVideoModal();
      // vjsRelatedVideoModal3D
      ctx.vjsRelatedVideoModal3D();
      // vjsGeneralMenu
      ctx.vjsGeneralMenu();
      // load M3U8
      ctx.vjsM3U8Loader();
      // activate videojs-quality-picker plugin
      ctx.vars.player.qualityPickerPlugin();
      ctx.clog('vjsLoader is activating qualityPicker Plugin', null);
      // load IMA
      ctx.vjsIMALoader();
      // activate VR plugin
      if (ctx.features.loadVR === true) {
        ctx.vars.player.vr(ctx.vrconf);
        ctx.clog('vjsLoader is activating VirtualReality plugin', null);
      };
      // vjsCueMarkers style
      ctx.vars.player.markers({
        markerStyle: ctx.features.cueMarkerStyle
      });
      // vjsloader player instance
      ctx.clog('VJSLOADER IS FINISHED, THIS IS A PLAYER INSTANCE -------------------X8', ctx.vars.player);
    } else {
      ctx.clog('VJSLOADER IS FAILED ! NO PLAYER INSTANCE :(', null);
    };
  };

  ctx.vjsLoadingImage = function() {
    $('.vjs-loading-spinner').css('background-image',     'url(' + ctx.images.basePath + ctx.images.vjsLoading + ')');
    $('.vjs-loading-spinner').css('background-size',      'contain');                      /* <------ */
    $('.vjs-loading-spinner').css('background-repeat',    'no-repeat');
    $('.vjs-loading-spinner').css('background-position',  'center center'); 
  };

  ctx.vjsLogModal = function() {
    if (nnVideo.features.logTextarea2 === true) {
      ctx.clog('vjsLogModal is working', null);
      if ((ctx.features.logModalCols === null) && (ctx.features.logModalRows === null)) {
        var playerWidth  = ctx.features.logModalPlayerWidthDefault;
        var playerHeight = ctx.features.logModalPlayerHeightDefault;
        if ( ( (typeof ctx.vars.player.width()) === 'number' ) && (ctx.vars.player.width() > ctx.features.logModalHGap) ) {
          playerWidth = ctx.vars.player.width();
        };
        if ( ( (typeof ctx.vars.player.height()) === 'number' ) && (ctx.vars.player.height() > ctx.features.logModalVGap) ) {
          playerHeight = ctx.vars.player.height();
        };
        ctx.features.logModalCols = Math.floor((playerWidth - ctx.features.logModalHGap) / ctx.features.logModalColWidth);
        ctx.features.logModalRows = Math.floor((playerHeight - ctx.features.logModalVGap) / ctx.features.logModalRowHeight);
      };
      ctx.vars.textareaElement2 = $('<textarea id="' + ctx.vars.textareaId2 + '" readonly style="resize:none;" cols="' + ctx.features.logModalCols + '" rows="' +  + ctx.features.logModalRows + '">');
      ctx.vars.textareaElementLen2 = ctx.vars.textareaElement2.length;
      ctx.vars.textareaElement2.val(
        ctx.playerName + " v" + ctx.coreVersion + " build " + ctx.vars.v + " for " + ctx.companyName + "\r\n\r\n" +
        "General Information ...\r\n\r\n" +
        "target   : " + ctx.scriptconf.target   + "\r\n\r\n" +
        "autoplay : " + ctx.scriptconf.autoplay + "\r\n\r\n" +
        "mute     : " + ctx.scriptconf.mute     + "\r\n\r\n" +
        "live     : " + ctx.scriptconf.live     + "\r\n\r\n" +
        "title    : " + ctx.scriptconf.title    + "\r\n\r\n" +
        "imageUrl : " + ctx.scriptconf.imageUrl + "\r\n\r\n" +
        "videoUrl : " + ctx.scriptconf.videoUrl + "\r\n\r\n" +
        "channel  : " + ctx.scriptconf.channel  + "\r\n\r\n" +
        "adRules  : " + ctx.scriptconf.adRules  + "\r\n\r\n\r\n" +
        "Additional Information ...\r\n\r\n" +
        "Log(s) ...\r\n"        
      );
      if (typeof ctx.vars.textareaElement2.get(0) === 'object') {
        var options = {
          content: ctx.vars.textareaElement2.get( 0 ), // native el
          description: 'Log Modal',
          label: 'Log Modal',
          fillAlways: false,
          unclosable: false,
          temporary: false
        };
        var ModalDialog = videojs.getComponent('ModalDialog');
        ctx.vars.logModal = new ModalDialog(ctx.vars.player, options);
        ctx.vars.player.addChild(ctx.vars.logModal);
        ctx.vars.isLogTextareaEnabled2 = null;
      };
    };
  };

  ctx.vjsRelatedVideoModal = function() {
    if (ctx.features.loadVjsRelatedVideoModal === true) {
      ctx.clog('vjsRelatedVideoModal is working', null);
      ctx.vars.iframeRelatedVideoElement = $('<iframe id="' + ctx.playerName + 'RelatedVideoIFrame' +'" src="' + ctx.features.relatedVideoModalUrl + '" width="100%" height="100%" allow allowfullscreen frameborder="0"></iframe>');
      var options = {
        content: ctx.vars.iframeRelatedVideoElement.get( 0 ), // native el
        description: 'Related Video Modal',
        label: 'Related Video Modal',
        fillAlways: false,
        unclosable: false,
        temporary: false
      };
      var ModalDialog = videojs.getComponent('ModalDialog');
      ctx.vars.relatedVideoModal = new ModalDialog(ctx.vars.player, options);
      ctx.vars.player.addChild(ctx.vars.relatedVideoModal);
    };
  };

  ctx.vjsRelatedVideoModal3D = function() {
    if (ctx.features.loadVjsRelatedVideoModal3D === true) {
      ctx.clog('vjsRelatedVideoModal3D is working', null);
      ctx.vars.divRelatedVideo3DElement = $('<div id="' + ctx.scriptconf.target + 'RelatedVideo3D' +'" width="100%" height="100%" styles="text-align: center; display:table-cell; vertical-align:middle;"><div id="'+ctx.scriptconf.target+'RelatedVideoCarousel" data-carousel-3d >' + ctx.features.relatedVideoModal3DContent + '</div></div>');
      var options = {
        content: ctx.vars.divRelatedVideo3DElement.get( 0 ), // native el
        description: 'Related Video Modal 3D',
        label: 'Related Video Modal 3D',
        fillAlways: false,
        unclosable: false,
        temporary: false
      };
      var ModalDialog = videojs.getComponent('ModalDialog');
      ctx.vars.relatedVideoModal3D = new ModalDialog(ctx.vars.player, options);
      ctx.vars.player.addChild(ctx.vars.relatedVideoModal3D);
    };
  };

  ctx.carousel3DInit = function() {
    if (ctx.vars.carousel3DInit === false) {
      $('#'+ctx.scriptconf.target+'RelatedVideoCarousel').Carousel3d();
      ctx.vars.carousel3DInit = true;
    };
  };

  ctx.vjsGeneralMenu = function() {
    if (ctx.features.loadVjsGeneralMenu === true) {
      ctx.clog('vjsGeneralMenu is working', null);
      var MenuButton = videojs.getComponent('MenuButton');

      ctx.vars.vjsGMenuButton = videojs.extend(MenuButton, {
        constructor: function(player, options) {
            MenuButton.call(this, player, options);
            this.controlText(ctx.features.vjsGMButtonLabel);
        },
        createMenu: function() {
          var MenuItem    = videojs.getComponent('MenuItem');
          var Menu        = videojs.getComponent('Menu');
          ctx.vars.vjsGMenu           = new Menu(ctx.vars.player, {});
          ctx.vars.vjsGMItemLogModal      = new MenuItem(ctx.vars.player, { label: ctx.features.vjsGMItemLogLabel });
          ctx.vars.vjsGMItemRelatedVideo  = new MenuItem(ctx.vars.player, { label: ctx.features.vjsGMItemRelatedVideoLabel });
          ctx.vars.vjsGMItemRelatedVideo3D= new MenuItem(ctx.vars.player, { label: ctx.features.vjsGMItemRelatedVideo3DLabel });
          ctx.vars.vjsGMItemLogModal.on('click', function() {
            var isPlaying = false;
            if (ctx.vars.player.paused() === false) {
              isPlaying = true;
            };
            if ( ((typeof ctx.vars.logModal) === 'object') && (ctx.vars.logModal !== null) ) {
              ctx.vars.logModal.open();
            };
            if (isPlaying === true) {
              //ctx.vars.player.play();
            };
          });
          ctx.vars.vjsGMItemRelatedVideo.on('click', function() {
            var isPlaying = false;
            if (ctx.vars.player.paused() === false) {
              isPlaying = true;
            };
            if ( ((typeof ctx.vars.relatedVideoModal) === 'object') && (ctx.vars.relatedVideoModal !== null) ) {
              ctx.vars.relatedVideoModal.open();
            };
            if (isPlaying === true) {
              //ctx.vars.player.play();
            };
          });
          ctx.vars.vjsGMItemRelatedVideo3D.on('click', function() {
            var isPlaying = false;
            if (ctx.vars.player.paused() === false) {
              isPlaying = true;
            };
            if ( ((typeof ctx.vars.relatedVideoModal3D) === 'object') && (ctx.vars.relatedVideoModal3D !== null) ) {
              ctx.vars.relatedVideoModal3D.open();
              ctx.carousel3DInit();
            };
            if (isPlaying === true) {
              //ctx.vars.player.play();
            };
          });
          // inserting to Menu of GMenuButton
          if ( ((typeof ctx.vars.relatedVideoModal3D) === 'object') && (ctx.vars.relatedVideoModal3D !== null) ) {
            ctx.vars.vjsGMenu.addItem(ctx.vars.vjsGMItemRelatedVideo3D); // Related Video on the top
          };
          if ( ((typeof ctx.vars.relatedVideoModal) === 'object') && (ctx.vars.relatedVideoModal !== null) ) {
            ctx.vars.vjsGMenu.addItem(ctx.vars.vjsGMItemRelatedVideo); // Related Video on the middle
          };
          if ( ((typeof ctx.vars.logModal) === 'object') && (ctx.vars.logModal !== null) ) {
            ctx.vars.vjsGMenu.addItem(ctx.vars.vjsGMItemLogModal); // Log on the bottom
          };
          return ctx.vars.vjsGMenu;
        },
        buildCSSClass: function() {
          return 'vjs-icon-placeholder vjs-icon-cog';
        }
      });

      videojs.registerComponent('GMenuButton', ctx.vars.vjsGMenuButton);
      ctx.vars.player.controlBar.addChild('GMenuButton', {});
    };
  };

  ctx.vjsRegisteringAllEvents = function() {
    ctx.vars.player.ready(function() {
      ctx.vjsLoadingImage();
      // registered all to ctx functions
      ctx.vars.player.on('loadstart', function() {
        //ctx.clog('vjsEvent loadstart', null);
        ctx.vjsLoadStartCallback(ctx.vars.player);
      });
      ctx.vars.player.on('progress', function() {
        //ctx.clog('vjsEvent progress', null);
        ctx.vjsProgressCallback(ctx.vars.player);
      });
      ctx.vars.player.on('abort', function() {
        //ctx.clog('vjsEvent abort', null);
        ctx.vjsAbortCallback(ctx.vars.player);
      });
      ctx.vars.player.on('error', function() {
        //ctx.clog('vjsEvent error', null);
        ctx.vjsErrorCallback(ctx.vars.player);
      });
      ctx.vars.player.on('emptied', function() {
        //ctx.clog('vjsEvent emptied', null);
        ctx.vjsEmptiedCallback(ctx.vars.player);
      });
      ctx.vars.player.on('stalled', function() {
        //ctx.clog('vjsEvent stalled', null);
        ctx.vjsStalledCallback(ctx.vars.player);
      });
      ctx.vars.player.on('loadedmetadata', function() {
        //ctx.clog('vjsEvent loadedmetadata', null);
        ctx.vjsLoadedMetadataCallback(ctx.vars.player);
      });
      ctx.vars.player.on('loadeddata', function() {
        //ctx.clog('vjsEvent loadeddata', null);
        ctx.vjsLoadedDataCallback(ctx.vars.player);
      });
      ctx.vars.player.on('canplay', function() {
        //ctx.clog('vjsEvent canplay', null);
        ctx.vjsCanPlayCallback(ctx.vars.player);
      });
      ctx.vars.player.on('canplaythrough', function() {
        //ctx.clog('vjsEvent canplaythrough', null);
        ctx.vjsCanPlayThroughCallback(ctx.vars.player);
      });
      ctx.vars.player.on('playing', function() {
        //ctx.clog('vjsEvent playing', null);
        ctx.vjsPlayingCallback(ctx.vars.player);
      });
      ctx.vars.player.on('waiting', function() {
        //ctx.clog('vjsEvent waiting', null);
        ctx.vjsWaitingCallback(ctx.vars.player);
      });
      ctx.vars.player.on('seeking', function() {
        //ctx.clog('vjsEvent seeking', null);
        ctx.vjsSeekingCallback(ctx.vars.player);
      });
      ctx.vars.player.on('seeked', function() {
        //ctx.clog('vjsEvent seeked', null);
        ctx.vjsSeekedCallback(ctx.vars.player);
      });
      ctx.vars.player.on('ended', function() {
        //ctx.clog('vjsEvent ended', null);
        ctx.vjsEndedCallback(ctx.vars.player);
      });
      ctx.vars.player.on('durationchanged', function() {
        //ctx.clog('vjsEvent durationchanged', null);
        ctx.vjsDurationChangedCallback(ctx.vars.player);
      });
      ctx.vars.player.on('timeupdate', function() {
        //ctx.clog('vjsEvent timeupdate', null);
        ctx.vjsTimeUpdateCallback(ctx.vars.player);
      });
      ctx.vars.player.on('play', function() {
        //ctx.clog('vjsEvent play', null);
        if (ctx.vars.assumeNoPlayEvent === true) {
          ctx.vars.assumeNoPlayEvent = false;
        } else {
          ctx.vjsPlayCallback(ctx.vars.player);
        };
      });
      ctx.vars.player.on('pause', function() {
        //ctx.clog('vjsEvent pause', null);
        if (ctx.vars.assumeNoPauseEvent === true) {
          ctx.vars.assumeNoPauseEvent = false;
        } else {
          ctx.vjsPauseCallback(ctx.vars.player);
        };
      });
      ctx.vars.player.on('ratechange', function() {
        //ctx.clog('vjsEvent ratechange', null);
        ctx.vjsRateChangeCallback(ctx.vars.player);
      });
      ctx.vars.player.on('resize', function() {
        //ctx.clog('vjsEvent resize', null);
        ctx.vjsResizeCallback(ctx.vars.player);
      });
      ctx.vars.player.on('volumechange', function() {
        //ctx.clog('vjsEvent volumechange', null);
        ctx.vjsVolumeChangeCallback(ctx.vars.player);
      });
      ctx.vars.player.on('fullscreenchange', function() {
        //ctx.clog('vjsEvent fullscreenchange', null);
        ctx.vjsFullscreenChangeCallback(ctx.vars.player);
      });
      ctx.nnVideoLoadedCallback();
      // call ctx.scriptconf.nnVideoLoadedCallback
      if ((typeof ctx.scriptconf.nnVideoLoadedCallback) === 'function') {
        ctx.scriptconf.nnVideoLoadedCallback(ctx.vars.player);
      };
    });
  };

  ctx.vjsIMALoader = function() {
    // activate videojs.ima plugin
    if ( ((typeof google) === 'object') && (google !== null) && ((typeof google.ima) === 'object') && (google.ima !== null) ) {
      if ((ctx.features.loadIma === true) || (ctx.vars.isABDetected === false)) {
        // experimental value restoreCustomPlaybackStateOnAdBreakComplete, default is true
        var myAdsRenderingSettings = new google.ima.AdsRenderingSettings();
        myAdsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = ctx.features.restoreCustomPlaybackStateOnAdBreakComplete;
        ctx.adsconf.adsRenderingSettings = myAdsRenderingSettings;
        // Remove controls from the player on iPad to stop native controls from stealing
        // our click
        var contentHtml5Api = ctx.adsconf.id + '_html5_api';
        ctx.clog('vjsIMALoader check contentHtml5Api', contentHtml5Api);
        var contentPlayer = document.getElementById(contentHtml5Api); // beware _html5_api !!! it must !!!
        if ((navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/Android/i)) &&
            contentPlayer.hasAttribute('controls')) {
          contentPlayer.removeAttribute('controls');
        };
        ctx.clog('vjsIMALoader is hacking tablet-controls step 1 for ima and ads Plugins', null);
        // Initialize the ad container when the video player is clicked, but only the
        var startEvent = 'click';
        if (navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/Android/i)) {
          startEvent = 'touchend';
        };
        ctx.clog('vjsIMALoader is hacking tablet-controls step 2 for ima and ads Plugins', null);

        // first time it's clicked.
        var initAdDisplayContainer = function() {
          ctx.vars.player.ima.initializeAdDisplayContainer();
          ctx.clog('vjsIMALoader initAdDisplayContainer is doing ima.initializeAdDisplayContainer', null);
          if ((typeof ctx.adsconf.adTagUrl) === 'string') {
            ctx.vars.player.ima.setContentWithAdTag(null, ctx.adsconf.adTagUrl, false);
            ctx.vars.player.ima.requestAds();
            ctx.clog('vjsIMALoader initAdDisplayContainer is doing ima.requestAds with adTagUrl', ctx.adsconf.adTagUrl);
          } else {
            ctx.clog('vjsIMALoader initAdDisplayContainer adTagUrl is empty', null);
          };
          wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
          ctx.clog('vjsIMALoader removeEventListener and make successfully initializeAdDisplayContainer', null);
        };
        ctx.clog('vjsIMALoader is hacking tablet-controls step 3 for ima and ads Plugins', null);

        if (ctx.scriptconf.autoplay === false) {
          // NON-AUTOPLAY BY CLICK/TOUCHEND
          var wrapperDiv = document.getElementById(ctx.adsconf.id);
          wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
          ctx.clog('vjsIMALoader is hacking tablet-controls step 4 for ima and ads Plugins in non-autoplay mode', null);
        } else {
          // AUTOPLAY WITH INTERNAL initializeAdDisplayContainer
          ctx.clog('vjsIMALoader is hacking tablet-controls step 4 for ima and ads Plugins in autoplay mode', null);
        }

        // Activating ima plugins !
        // ctx.adsconf is configuration for player.ima
        // if using ima.requestAds then adTagUrl set inside setContentWithAdTag, not in options of ima plugins
        
        // THIS IS A DEFAULT
        if (ctx.scriptconf.autoplay === false) {
          // NON-AUTOPLAY BY Click/Touchend 
          ctx.adsconf.adTagUrl = null;
          ctx.vars.player.ima(ctx.adsconf);
          ctx.adsconf.adTagUrl = ctx.adsconf.adTagUrlCopied;
        } else {
          // AUTOPLAY WITH INTERNAL initializeAdDisplayContainer
          ctx.vars.player.ima(ctx.adsconf);
        };

        ctx.clog('vjsIMALoader is activating ima and ads Plugins', null);
      };
    };
  };

  ctx.vjsM3U8Loader = function() {
    // load m3u8 file
    if (ctx.features.loadVjsContribHls === true) {
      // experimental
      var vjsCHlsOptions = null;
      if (ctx.features.enableStringSrc === true) {
        vjsCHlsOptions = ctx.scriptconf.videoUrl;
      } else {
        vjsCHlsOptions = {
          src: ctx.scriptconf.videoUrl,
          type: ctx.scriptconf.videoType
        };
      };
      ctx.vars.player.src(vjsCHlsOptions);
      ctx.clog('vjsM3U8Loader is loading vjsconf.src for videojs-contrib-hls', vjsCHlsOptions);
    } else {
      // more stable is hlsjs project
      var vjsHlsjsOptions = null;
      if (ctx.features.enableStringSrc === true) {
        vjsHlsjsOptions = ctx.scriptconf.videoUrl;
      } else {
        vjsHlsjsOptions = {
          src: ctx.scriptconf.videoUrl,
          type: ctx.scriptconf.videoType
        };
      };
      ctx.vars.player.src(vjsHlsjsOptions);
      ctx.clog('vjsM3U8Loader is loading vjsconf.src for videojs-hlsjs-plugin', vjsHlsjsOptions);
    };
    // use vjsconf.sources, the old way
    //ctx.vars.player.src(ctx.vjsconf.sources);
    //ctx.clog('vjsLoader is loading vjsconf.sources');
  };

  ctx.coreRun = function() {
    ctx.clog('coreRun', null);
    // step 0: show us features, vjsconf, hlsjsconf, adsconf, vrconf
    ctx.clog('coreRun shows features',  ctx.features);
    ctx.clog('coreRun shows vjsconf',   ctx.vjsconf);
    ctx.clog('coreRun shows hlsjsconf', ctx.hlsjsconf);
    ctx.clog('coreRun shows adsconf',   ctx.adsconf);
    ctx.clog('coreRun shows vrconf',    ctx.vrconf);
    // step 1: call portalInit()
    if ((typeof ctx.portalInit) === 'function') {
      ctx.portalInit();
    };
    if (ctx.features.smartAutoplay === true) {
      ctx.clog('smartAutoplay is working now', null);
      ctx.smartAutoplayStep1();
    } else {
      //ctx.coreRun2(); // go to coreRun2 !
      ctx.coreRun2WaitingVJSFunction(); // replace coreRun2 with coreRun2WaitingVJSFunction for avoiding "videojs isnot a function"
    };
  };
  
  ctx.coreRun2WaitingVJSFunction = function() {
    if (ctx.features.vjsLoaderWaitingVJSFunction === true) {
      ctx.clog('vjsLoaderWaitingVJSFunction is working', null);
      if (ctx.vars.vjsLoaderWaitingRetry < ctx.features.vjsLoaderWaitingCheckRetry) {
        setTimeout(function() {
          ctx.clog('vjsLoaderWaitingVJSFunction is trying to get videojs function', null);
          if (typeof videojs === 'function') {
            ctx.clog('vjsLoaderWaitingVJSFunction is catching videojs function', null);
            ctx.coreRun2(); // go to coreRun2 !
          } else {
            ctx.vars.vjsLoaderWaitingRetry++;
            ctx.coreRun2WaitingVJSFunction();
          }; 
        }, ctx.features.vjsLoaderWaitingTimout);
      } else {
        ctx.clog('vjsLoaderWaitingVJSFunction is failed maybe because of GetScript of VideoJS Libraries is failed', null);       
      };
    } else {
      ctx.coreRun2(); // go to coreRun2 !
    };
  };

  ctx.coreRun2 = function() {
    // step 2: vjsLoader()
    // until player and ima objects fully created
    // registering all events of all plugins to nnVideo.core and nnVideo.portal
    ctx.xhrIASDetector();
    ctx.vjsLoader();
    // step 3: call portalRun()
    if ((typeof ctx.portalRun) === 'function') {
      ctx.portalRun(ctx.vars.player);
    };
  };

  // hlsjs Customize Functions

  ctx.hlsjsCustomLoader = function() { // unused TBD ToBeDefined
  };

  ctx.hlsjsCustomFragmentLoader = function() { // unused TBD
  };

  ctx.hlsjsCustomPlaylistLoader = function() { // unused TBD
  };

  ctx.hlsjsFetchSetupCallback = function() { // unused TBD
  };

  ctx.hlsjsCustomAbrController = function() { // unused TBD
  };

  ctx.hlsjsTimelineController = function() { // unused TBD
  };

  ctx.showXhrStatus = function(status, statusText, fileName) {
    if ((typeof status) === 'number') {
      var contentEl = document.createElement('div');
      var warnText = 'xhr status : ' + status.toString() + '<br/>xhr statusText : ' + statusText + '<br/>xhr fileName : ' + fileName;
      contentEl.innerHTML = warnText;
      var options = {
        content: contentEl,
        description: 'XHR Information',
        label: 'XHR Information',
        fillAlways: false,
        unclosable: false,
        temporary: true
      };
      var ModalDialog = videojs.getComponent('ModalDialog');
      var myModal = new ModalDialog(ctx.vars.player, options);
      ctx.vars.player.addChild(myModal);
      myModal.open();
      ctx.vars.showXhrStatusModal.push(myModal);
    };
  };

  ctx.hlsjsXhrSetupCallback = function(xhr, url) {
    // inject xhr here !
    // hlsjsXhrSetupCallback1stTouch
    if (ctx.vars.hlsjsXhrSetupCallback1stTouch === false) {
      ctx.vars.hlsjsXhrSetupCallback1stTouch = true;
      ctx.clog('hlsjsXhrSetupCallback 1stTouch', null);
      ctx.clog('hlsjsXhrSetupCallback is settings xhr callback function(s)', null);
      xhr.onreadystatechange = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.onreadystatechange xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
      xhr.onloadstart = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.onloadstart xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
      xhr.onload = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.onload xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
      xhr.onabort = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.onabort xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
      xhr.ontimeout = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.ontimeout xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
      xhr.onerror = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.onerror xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
      xhr.onloadend = function() {
        if ((xhr.status !== 0) && (xhr.status !== 200)) {
          ctx.clog('xhrSetupCallback xhr.onloadend xhr.status', xhr.status);
          if (xhr.status !== ctx.vars.xhrLastStatus) {
            ctx.vars.xhrLastStatus = xhr.status;
            ctx.showXhrStatus(xhr.status, xhr.statusText, url);
            ctx.clog('xhrSetupCallback XHR STATUS', xhr.status);
          };
        };
      };
    };
    // end inject
    if ((typeof ctx.portalHlsjsXhrSetupCallback) === 'function') {
      ctx.portalHlsjsXhrSetupCallback(xhr, url);
    };
  };

  ctx.bufferWhilePausedStopLoad = function() {
    // begin
    // vod  BufferWhilePaused AutoStop
    if (ctx.vars.bufferWhilePausedAutoStopOnce === false) {
      if ((ctx.features.vodBufferWhilePausedAutoStop === true) && (ctx.hlsjsconf.autoStartLoad === true) &&
        ((typeof ctx.vars.hlsjsInstance) === 'object') && (ctx.vars.hlsjsInstance !== null) && (ctx.scriptconf.live === false) ) {
        ctx.vars.vodBufferWhilePausedAutoStopNeeded = true;
        setTimeout(function() {
          if (ctx.vars.vodBufferWhilePausedAutoStopNeeded === true) {
            ctx.vars.hlsjsInstance.stopLoad();
            ctx.clog('vjsLoadStartCallback features.vodBufferWhilePausedAutoStop stopLoad()', ctx.vars.hlsjsInstance);
          };
        }, ctx.features.vodBufferWhilePausedMaxSeconds);
        ctx.clog('vjsLoadStartCallback features.vodBufferWhilePausedAutoStop', ctx.vars.hlsjsInstance);
      };
      // live BufferWhilePaused AutoStop
      if ((ctx.features.liveBufferWhilePausedAutoStop === true) && (ctx.hlsjsconf.autoStartLoad === true) &&
        ((typeof ctx.vars.hlsjsInstance) === 'object') && (ctx.vars.hlsjsInstance !== null) && (ctx.scriptconf.live === true) ) {
        ctx.vars.liveBufferWhilePausedAutoStopNeeded = true;
        setTimeout(function() {
          if (ctx.vars.liveBufferWhilePausedAutoStopNeeded === true) {
            ctx.vars.hlsjsInstance.stopLoad();
            ctx.clog('vjsLoadStartCallback features.liveBufferWhilePausedAutoStop stopLoad()', ctx.vars.hlsjsInstance);
          };
        }, ctx.features.liveBufferWhilePausedMaxSeconds);
        ctx.clog('vjsLoadStartCallback features.liveBufferWhilePausedAutoStop', ctx.vars.hlsjsInstance);
      };
      // bufferWhilePausedAutoStopOnce lock
      ctx.vars.bufferWhilePausedAutoStopOnce = true;
    };
    // end
  };

  ctx.bufferWhilePausedStartLoad = function() {
    // begin
    // vod  BufferWhilePaused AutoStop , startLoad again
    if (ctx.vars.bufferWhilePausedAutoStartOnce === false) {
      if ((ctx.features.vodBufferWhilePausedAutoStop === true) && (ctx.hlsjsconf.autoStartLoad === true) &&
        ((typeof ctx.vars.hlsjsInstance) === 'object') && (ctx.vars.hlsjsInstance !== null) && (ctx.scriptconf.live === false)) {
        if (ctx.vars.vodBufferWhilePausedAutoStopNeeded === true) {
          ctx.vars.hlsjsInstance.startLoad();
          ctx.clog('vjsPlayCallback features.vodBufferWhilePausedAutoStop startLoad()', ctx.vars.hlsjsInstance);
        };
        ctx.vars.vodBufferWhilePausedAutoStopNeeded = false;
        ctx.clog('vjsPlayCallback features.vodBufferWhilePausedAutoStop', ctx.vars.hlsjsInstance);
      };
      // live BufferWhilePaused AutoStop , startLoad again
      if ((ctx.features.liveBufferWhilePausedAutoStop === true) && (ctx.hlsjsconf.autoStartLoad === true) &&
        ((typeof ctx.vars.hlsjsInstance) === 'object') && (ctx.vars.hlsjsInstance !== null) && (ctx.scriptconf.live === true)) {
        if (ctx.vars.liveBufferWhilePausedAutoStopNeeded === true) {
          ctx.vars.hlsjsInstance.startLoad();
          ctx.clog('vjsPlayCallback features.liveBufferWhilePausedAutoStop startLoad()', ctx.vars.hlsjsInstance);
        };
        ctx.vars.vodBufferWhilePausedAutoStopNeeded = false;
        ctx.clog('vjsCanPlayCallback features.liveBufferWhilePausedAutoStop', ctx.vars.hlsjsInstance);
      };
      // bufferWhilePausedAutoStartOnce lock
      ctx.vars.bufferWhilePausedAutoStartOnce = true;
    };
    // end
  };

  // vjs Customize Callback-Functions

  ctx.vjsLoadStartCallback = function(player) {
    ctx.bufferWhilePausedStopLoad();
    if (ctx.scriptconf.hideControlbar === true) {
      ctx.vars.player.controls(false);
    };
    if ((typeof ctx.portalVjsLoadStartCallback) === 'function') {
      ctx.portalVjsLoadStartCallback(player);
    };
  };

  ctx.vjsProgressCallback = function(player) {
    if ((typeof ctx.portalVjsProgressCallback) === 'function') {
      ctx.portalVjsProgressCallback(player);
    };
  };

  ctx.vjsAbortCallback = function(player) {
    if ((typeof ctx.portalVjsAbortCallback) === 'function') {
      ctx.portalVjsAbortCallback(player);
    };
  };

  ctx.vjsErrorCallback = function(player) {
    if ((typeof ctx.portalVjsErrorCallback) === 'function') {
      ctx.portalVjsErrorCallback(player);
    };
  };

  ctx.vjsEmptiedCallback = function(player) {
    if ((typeof ctx.portalVjsEmptiedCallback) === 'function') {
      ctx.portalVjsEmptiedCallback(player);
    };
  };

  ctx.vjsStalledCallback = function(player) {
    if ((typeof ctx.portalVjsStalledCallback) === 'function') {
      ctx.portalVjsStalledCallback(player);
    };
  };

  ctx.vjsLoadedMetadataCallback = function(player) {
    if ((typeof ctx.portalVjsLoadedMetadataCallback) === 'function') {
      ctx.portalVjsLoadedMetadataCallback(player);
    };
  };

  ctx.vjsLoadedDataCallback = function(player) {
    if ((typeof ctx.portalVjsLoadedDataCallback) === 'function') {
      ctx.portalVjsLoadedDataCallback(player);
    };
  };

  ctx.vjsCanPlayCallback = function(player) {
    if ((typeof ctx.portalVjsCanPlayCallback) === 'function') {
      ctx.portalVjsCanPlayCallback(player);
    };
  };

  ctx.vjsCanPlayThroughCallback = function(player) {
    if ((typeof ctx.portalVjsCanPlayThroughCallback) === 'function') {
      ctx.portalVjsCanPlayThroughCallback(player);
    };
  };

  ctx.vjsPlayingCallback = function(player) {
    if ((typeof ctx.portalVjsPlayingCallback) === 'function') {
      ctx.portalVjsPlayingCallback(player);
    };
  };

  ctx.vjsWaitingCallback = function(player) {
    if ((typeof ctx.portalVjsWaitingCallback) === 'function') {
      ctx.portalVjsWaitingCallback(player);
    };
  };

  ctx.vjsSeekingCallback = function(player) {
    if ((typeof ctx.portalVjsSeekingCallback) === 'function') {
      ctx.portalVjsSeekingCallback(player);
    };
  };

  ctx.vjsSeekedCallback = function(player) {
    if ((typeof ctx.portalVjsSeekedCallback) === 'function') {
      ctx.portalVjsSeekedCallback(player);
    };
  };

  ctx.vjsEndedCallback = function(player) {
    var currTime = Math.floor(ctx.vars.player.currentTime());
    var duration = Math.floor(ctx.vars.player.duration());
    ctx.clog('vjsEndedCallback currTime', currTime);
    ctx.clog('vjsEndedCallback duration', duration);
    if (currTime === duration) {
      if (ctx.features.showRelatedVideoModalAtEnd === true) {
        ctx.clog('vjsEndedCallback showRelatedVideoModalAtEnd is working', null);
        ctx.vars.relatedVideoModal.open();
      };
      if (ctx.features.showRelatedVideoModal3DAtEnd === true) {
        ctx.clog('vjsEndedCallback showRelatedVideoModal3DAtEnd is working', null);
        ctx.vars.relatedVideoModal3D.open();
        ctx.carousel3DInit();
      };
    };
    if (ctx.features.reloadVideoAtEnd === true) {
      ctx.clog('vjsEndedCallback reloadVideoAtEnd is working', null);
      ctx.vjsM3U8Loader();
      if ((ctx.features.loadIma === true) && (ctx.vars.player.ima !== null)) {
        ctx.vars.player.ima.changeAdTag(ctx.scriptconf.adRules);
        ctx.vars.player.ima.requestAds();
      };
    };
    if ((typeof ctx.portalVjsEndedCallback) === 'function') {
      ctx.portalVjsEndedCallback(player);
    };
  };

  ctx.vjsDurationChangedCallback = function(player) {
    if ((typeof ctx.portalVjsDurationChangedCallback) === 'function') {
      ctx.portalVjsDurationChangedCallback(player);
    };
  };

  ctx.vjsTimeUpdateCallback = function(player) {
    ctx.patchingHdButtonTitle();
    if ((typeof ctx.portalVjsTimeUpdateCallback) === 'function') {
      ctx.portalVjsTimeUpdateCallback(player);
    };
  };

  ctx.vjsPlayCallback = function(player) {
    ctx.bufferWhilePausedStartLoad();
    ctx.hideSpinnerWhileAutoplayTrue();
    ctx.liveAdsInterval();
    ctx.liveAdsServerPush();
    ctx.liveAdsCron();
    ctx.drawAdCueMarkers();
    if ((typeof ctx.portalVjsPlayCallback) === 'function') {
      ctx.portalVjsPlayCallback(player);
    };
  };

  ctx.vjsPauseCallback = function(player) {
    if ((typeof ctx.portalVjsPauseCallback) === 'function') {
      ctx.portalVjsPauseCallback(player);
    };
  };

  ctx.vjsRateChangeCallback = function(player) {
    if ((typeof ctx.portalVjsRateChangeCallback) === 'function') {
      ctx.portalVjsRateChangeCallback(player);
    };
  };

  ctx.vjsResizeCallback = function(player) {
    if ((typeof ctx.portalVjsResizeCallback) === 'function') {
      ctx.portalVjsResizeCallback(player);
    };
  };

  ctx.vjsVolumeChangeCallback = function(player) {
    if ((typeof ctx.portalVjsVolumeChangeCallback) === 'function') {
      ctx.portalVjsVolumeChangeCallback(player);
    };
  };

  ctx.vjsFullscreenChangeCallback = function(player) {
    ctx.fullscreenChangeTextareaElement2();
    if ((typeof ctx.portalVjsFullscreenChangeCallback) === 'function') {
      ctx.portalVjsFullscreenChangeCallback(player);
    };
  };

  ctx.fullscreenChangeTextareaElement2 = function() {
    if ( ((typeof ctx.vars.textareaElement2) === 'object') && (ctx.vars.textareaElement2 !== null) ) {
      var cols = null;
      var rows = null;
      if (ctx.vars.player.isFullscreen() === true) {
        //ctx.clog('fullscreenChangeTextareaElement2 is fullscreen', null);
        cols = Math.floor((window.screen.width - ctx.features.logModalHGap2) / ctx.features.logModalColWidth);
        rows = Math.floor((window.screen.height - ctx.features.logModalVGap2) / ctx.features.logModalRowHeight);
      } else {
        //ctx.clog('fullscreenChangeTextareaElement2 is not fullscreen', null);
        var playerWidth  = ctx.features.logModalPlayerWidthDefault;
        var playerHeight = ctx.features.logModalPlayerHeightDefault;
        if ( ( (typeof ctx.vars.player.width()) === 'number' ) && (ctx.vars.player.width() > ctx.features.logModalHGap) ) {
          playerWidth = ctx.vars.player.width();
        };
        if ( ( (typeof ctx.vars.player.height()) === 'number' ) && (ctx.vars.player.height() > ctx.features.logModalVGap) ) {
          playerHeight = ctx.vars.player.height();
        };
        cols = Math.floor((playerWidth - ctx.features.logModalHGap) / ctx.features.logModalColWidth);
        rows = Math.floor((playerHeight - ctx.features.logModalVGap) / ctx.features.logModalRowHeight);      
      };
      //ctx.clog('fullscreenChangeTextareaElement2 resize cols', cols);
      //ctx.clog('fullscreenChangeTextareaElement2 resize rows', rows);
      if (typeof ctx.vars.textareaElement2.get(0) === 'object') {
        ctx.vars.textareaElement2.get(0).cols = cols;
        ctx.vars.textareaElement2.get(0).rows = rows;
      };
    };
  };

  // IMA and Ads Customize Callback-Functions
  ctx.imaAdsRegisteringAllCallbacks = function() {
    ctx.clog('imaAdsRegisteringAllCallbacks is here', null);
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, ctx.imaAllAdsCompleted.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.CLICK,             ctx.imaClick.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.COMPLETE,          ctx.imaComplete.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE,    ctx.imaFirstQuartile.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.LOADED,            ctx.imaLoaded.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.MIDPOINT,          ctx.imaMidPoint.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.PAUSED,            ctx.imaPaused.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.RESUMED,           ctx.imaResumed.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.STARTED,           ctx.imaStarted.bind(ctx));
    ctx.vars.player.ima.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE,    ctx.imaThirdQuartile.bind(ctx));
    ctx.vars.player.on('adslog',            ctx.onAdsLog.bind(ctx));
    ctx.vars.player.on('adsready',          ctx.onAdsReady.bind(ctx));
    ctx.vars.player.on('adscanceled',       ctx.onAdsCanceled.bind(ctx));
    ctx.vars.player.on('adskip',            ctx.onAdSkip.bind(ctx));
    ctx.vars.player.on('adserror',          ctx.onAdsError.bind(ctx));
    ctx.vars.player.on('adtimeout',         ctx.onAdTimeout.bind(ctx));
    ctx.vars.player.on('adended',           ctx.onAdEnded.bind(ctx));
    ctx.vars.player.on('ads-ad-started',    ctx.onAdsAdStarted.bind(ctx));
    ctx.vars.player.on('readyforpostroll',  ctx.onAdReadyForPostroll.bind(ctx));
    ctx.vars.player.on('nopreroll',         ctx.onAdNoPreroll.bind(ctx));
    ctx.vars.player.on('nopostroll',        ctx.onAdNoPostroll.bind(ctx));
  };

  ctx.imaAdsManagerInstantiationCallback = function(adsManager) {
    ctx.clog('imaAdsManagerInstantiationCallback is here', null);
    if ((typeof ctx.scriptconf.adsManagerInstantiationCallback) === 'function') {
      // function onAdsManagerInstantiationCallback(ima){} in Webpage
      ctx.scriptconf.adsManagerInstantiationCallback(adsManager);
    };
  };

  ctx.imaLinearAdStartedCallback = function(currentAdSimpleObj) {
    var casoStr = 'currentAdSimpleObj';
    ctx.clog('================================currentAd=Begin===');
    ctx.clog('imaLinearAdStartedCallback '+casoStr, currentAdSimpleObj);
    ctx.clog(casoStr+'.adId',                currentAdSimpleObj.adId);
    ctx.clog(casoStr+'.adSystem',            currentAdSimpleObj.adSystem);
    ctx.clog(casoStr+'.title',               currentAdSimpleObj.title);
    ctx.clog(casoStr+'.description',         currentAdSimpleObj.description);
    ctx.clog(casoStr+'.advertiserName',      currentAdSimpleObj.advertiserName);
    ctx.clog(casoStr+'.creativeId',          currentAdSimpleObj.creativeId);
    ctx.clog(casoStr+'.creativeAdId',        currentAdSimpleObj.creativeAdId);
    ctx.clog(casoStr+'.universalAdIdValue',  currentAdSimpleObj.universalAdIdValue);
    ctx.clog(casoStr+'.universalAdIdRegistry', currentAdSimpleObj.universalAdIdRegistry);
    ctx.clog(casoStr+'.contentType',         currentAdSimpleObj.contentType);
    ctx.clog(casoStr+'.duration',            currentAdSimpleObj.duration);
    ctx.clog(casoStr+'.width',               currentAdSimpleObj.width);
    ctx.clog(casoStr+'.height',              currentAdSimpleObj.height);
    ctx.clog(casoStr+'.vastMediaWidth',      currentAdSimpleObj.vastMediaWidth);
    ctx.clog(casoStr+'.vastMediaHeight',     currentAdSimpleObj.vastMediaHeight);
    ctx.clog(casoStr+'.vastMediaBitrate',    currentAdSimpleObj.vastMediaBitrate);
    ctx.clog(casoStr+'.mediaUrl',            currentAdSimpleObj.mediaUrl);
    ctx.clog(casoStr+'.isSkippable',         currentAdSimpleObj.isSkippable);
    ctx.clog(casoStr+'.skipTimeOffset',      currentAdSimpleObj.skipTimeOffset);
    ctx.clog('================================currentAd=End=====');
  };

  ctx.imaAdsManagerLoadedCallback = function() {
    ctx.clog('imaAdsManagerLoadedCallback is here', null);
    ctx.imaAdsRegisteringAllCallbacks();
    // from videojs player instance, plugin ima
    var playerIma = ctx.vars.player.ima;
    // for draw adCueMarkers
    ctx.vars.imaAdsManager = ctx.vars.player.ima.controller.sdkImpl.adsManager;
    ctx.vars.imaAdsRenderingSettings = ctx.vars.player.ima.controller.sdkImpl.adsRenderingSettings;
    // ok send ima object to onAdsManagerLoadedCallback in Webpage
    ctx.clog('imaAdsManagerLoadedCallback is processing ima', playerIma);
    if ((typeof ctx.scriptconf.adsManagerLoadedCallback) === 'function') {
      // function onAdsManagerLoadedCallback(ima){} in Webpage
      ctx.scriptconf.adsManagerLoadedCallback(playerIma);
    };
  };

  ctx.drawAdCueMarkers = function() {
    if ((ctx.vars.drawAdCueMarkersOnce === false) && (ctx.scriptconf.live === false)) {
      ctx.clog('drawAdCueMarkers is working', null);
      setTimeout(function() {
        if ( ((typeof ctx.vars.imaAdsManager) === 'object') && (ctx.vars.imaAdsManager !== null) ) {
          ctx.vars.cuePoints = ctx.vars.imaAdsManager.getCuePoints();
          ctx.clog('drawAdCueMarkers features.loadDrawCueMarker imaAdsManager', ctx.vars.imaAdsManager);
          ctx.clog('drawAdCueMarkers features.loadDrawCueMarker imaAdsRenderingSettings', ctx.vars.imaAdsRenderingSettings);
          ctx.clog('drawAdCueMarkers features.loadDrawCueMarker cuePoints', ctx.vars.cuePoints);

          // activate features.loadDrawCueMarker
          if (($.type(ctx.vars.cuePoints) === 'array') && (ctx.features.loadDrawCueMarker === true)) {
            // write cuePointsObjects
            $.each(ctx.vars.cuePoints, function(idx, val) {
              var cpObj = { time: 0, text: null };
              var valp1 = idx + 1;
              if (val >= 0) {
                cpObj.time = val;
              } else {
                cpObj.time = ctx.vars.player.duration();
              };
              cpObj.text = ctx.features.cueMarkerText + ' ' + valp1.toString();
              ctx.vars.cuePointsObjects.push(cpObj);
            });
            ctx.clog('drawAdCueMarkers features.loadDrawCueMarker ctx.var.cuePointsObjects', ctx.vars.cuePointsObjects);
            ctx.clog('drawAdCueMarkers features.loadDrawCueMarker ctx.features.cueMarkerStyle', ctx.features.cueMarkerStyle);
            // draw cuePointsObjects
            ctx.vars.player.markers.add(ctx.vars.cuePointsObjects);
          };
        };
      }, ctx.features.drawAdCueMarkersGapTime);
      ctx.vars.drawAdCueMarkersOnce = true;
    };
  };

  ctx.onAdsLog = function(data) {
    if ((typeof ctx.portalOnAdsLog) === 'function') {
      ctx.portalOnAdsLog(data);
    };
  };

  ctx.onAdsReady = function(data) {
    if ((typeof ctx.portalOnAdsReady) === 'function') {
      ctx.portalOnAdsReady(data);
    };
  };

  ctx.onAdsCanceled = function(data) {
    if ((typeof ctx.portalOnAdsCanceled) === 'function') {
      ctx.portalOnAdsCanceled(data);
    };
  };

  ctx.onAdSkip = function(data) {
    if ((typeof ctx.portalOnAdSkip) === 'function') {
      ctx.portalOnAdSkip(data);
    };
  };

  ctx.onAdsError = function(data) {
    if ((typeof ctx.portalOnAdsError) === 'function') {
      ctx.portalOnAdsError(data);
    };
  };

  ctx.onAdTimeout = function(data) {
    if ((typeof ctx.portalOnAdTimeout) === 'function') {
      ctx.portalOnAdTimeout(data);
    };
  };

  ctx.onAdEnded = function(data) {
    if ((typeof ctx.portalOnAdEnded) === 'function') {
      ctx.portalOnAdEnded(data);
    };
  };

  ctx.onAdsAdStarted = function(data) {
    if ((typeof ctx.portalOnAdsAdStarted) === 'function') {
      ctx.portalOnAdsAdStarted(data);
    };
  };

  ctx.onAdReadyForPostroll = function(data) {
    if ((typeof ctx.portalOnAdReadyForPostroll) === 'function') {
      ctx.portalOnAdReadyForPostroll(data);
    };
  };

  ctx.onAdNoPreroll = function(data) {
    if ((typeof ctx.portalOnAdNoPreroll) === 'function') {
      ctx.portalOnAdNoPreroll(data);
    };
  };

  ctx.onAdNoPostroll = function(data) {
    if ((typeof ctx.portalOnAdNoPostroll) === 'function') {
      ctx.portalOnAdNoPostroll(data);
    };
  };

  ctx.imaAllAdsCompleted = function(event) {
    if ((typeof ctx.portalImaAllAdsCompleted) === 'function') {
      ctx.portalImaAllAdsCompleted(event);
    };
  };

  ctx.imaClick = function(event) {
    if ((typeof ctx.portalImaClick) === 'function') {
      ctx.portalImaClick(event);
    };
  };

  ctx.imaComplete = function(event) {
    ctx.liveOnlyImaCompletedThenPlayAgain();
    if ((typeof ctx.portalImaComplete) === 'function') {
      ctx.portalImaComplete(event);
    };
  };

  ctx.imaFirstQuartile = function(event) {
    if ((typeof ctx.portalImaFirstQuartile) === 'function') {
      ctx.portalImaFirstQuartile(event);
    };
  };

  ctx.imaLoaded = function(event) {
    if ((typeof ctx.portalImaLoaded) === 'function') {
      ctx.portalImaLoaded(event);
    };
  };

  ctx.imaMidPoint = function(event) {
    if ((typeof ctx.portalImaMidPoint) === 'function') {
      ctx.portalImaMidPoint(event);
    };
  };

  ctx.imaPaused = function(event) {
    if ((typeof ctx.portalImaPaused) === 'function') {
      ctx.portalImaPaused(event);
    };
  };

  ctx.imaResumed = function(event) {
    if ((typeof ctx.portalImaResumed) === 'function') {
      ctx.portalImaResumed(event);
    };
  };

  ctx.imaStarted = function(event) {
    if ((typeof ctx.portalImaStarted) === 'function') {
      ctx.portalImaStarted(event);
    };
  };

  ctx.imaThirdQuartile = function(event) {
    if ((typeof ctx.portalImaThirdQuartile) === 'function') {
      ctx.portalImaThirdQuartile(event);
    };
  };

  ctx.getAllowedStartLevel = function(m3u8Url, suppressedStartLevel) {
    var result = 0;
    var count = 0;
    var sign = 'm3u8';
    $.ajaxSetup( { async: false , cache: true } );
    $.get(m3u8Url, function(data) {
      if ( ((typeof data) === 'string') && (sign.length <= data.length) ) {
        ctx.clog('getAllowedStartLevel is sniffing m3u8', null);
        var pos = data.indexOf(sign);
        while ( (pos !== -1) && ((pos + sign.length) < data.length) ) {
          count++;
          pos = data.indexOf(sign, pos + sign.length);
          ctx.clog('getAllowedStartLevel is sniffing bitrate(s)', null);
        };
        if (count == 0) {
          result = 0;
        } else if ((count-1) >= suppressedStartLevel) {
          result = suppressedStartLevel;
        } else if ((count-1) <  suppressedStartLevel) {
          result = count - 1;
        };
      };
    });
    $.ajaxSetup( { async: true , cache: false } ); // reset
    ctx.clog('getAllowedStartLevel reads m3u8 and counts bitrate(s)', count);
    ctx.clog('getAllowedStartLevel result is (from 0 to N)', result); 
    return result;
  };

  ctx.xhrIASDetector = function() {
    if (ctx.features.loadXhrIASDetector === true) {
      ctx.vars.xhrOpenOriginal = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        this.addEventListener('readystatechange', function() {
          if (this.readyState === 4) {
            if (url.indexOf(ctx.features.xhrIASmonUrlMark) !== -1) {
              ctx.clog('xhrIASDetector MON-CALLS !', null);
            } else if (url.indexOf(ctx.features.xhrIASdtUrlMark) !== -1) {
              ctx.clog('xhrIASDetector DT--CALLS !', null);
            };
          };
        }, false);
        ctx.vars.xhrOpenOriginal.call(this, method, url, async, user, pass);
      };
    };
  };

  ctx.hideSpinnerWhileAutoplayTrue = function() {
    if (ctx.features.enableHideSpinnerWhileAutoplayTrue === true) {
      if (ctx.vars.hideSpinnerWhileAutoplayTrueLock === false) {
        if ((ctx.scriptconf.autoplay === true)  ||
          (ctx.scriptconf.autoplay === 'muted') ||
          (ctx.scriptconf.autoplay === 'play')  ||
          (ctx.scriptconf.autoplay === 'any')) {
          ctx.clog('hideSpinnerWhileAutoplayTrue is activated', null);
          ctx.vars.hideSpinnerWhileAutoplaySIHandler = setInterval(function() {
            if ( (ctx.vars.player !== null) && (!ctx.vars.player.paused()) && (!ctx.vars.player.ended()) && (!ctx.vars.player.seeking()) ) {
              ctx.vars.assumeNoPauseEvent = true;
              ctx.vars.player.pause();
              ctx.vars.assumeNoPlayEvent  = true;
              ctx.vars.player.play();
              clearInterval(ctx.vars.hideSpinnerWhileAutoplaySIHandler);
              ctx.clog('hideSpinnerWhileAutoplayTrue is running', null);
            } else {
              ctx.clog('hideSpinnerWhileAutoplayTrue is waiting', null);
            };
          }, ctx.features.hideSpinnerWhileAutoplayTrueGapTime);
        };
        ctx.vars.hideSpinnerWhileAutoplayTrueLock = true;
      };
    };
  };

  ctx.liveOnlyImaCompletedThenPlayAgain = function() {
    if ((ctx.features.liveOnlyImaCompletedThenPlayAgain === true) && (ctx.scriptconf.live === true)) {
      ctx.vars.assumeNoPlayEvent = true;
      ctx.vars.player.play();
      ctx.clog('liveOnlyImaCompletedThenPlayAgain is playing LiveStreaming again' , null);
    };    
  };

  /* smartAutoplay --- begin */

  ctx.smartAutoplayStep1 = function() {
    if ((ctx.features.smartAutoplay === true) && (ctx.isIOS2() === false)) {
      canAutoplay.video({muted:false,inline:false,timeout:ctx.features.smartAutoplayTimoutPerStep}).then(function(obj) {
        if (obj.result === true) {
          ctx.vars.canAutoplayVideo = true;
        };
        ctx.clog('smartAutoplaySteps1 canAutoplayVideo', ctx.vars.canAutoplayVideo);
        ctx.smartAutoplayStep2();
      });
    } else {
      ctx.clog('smartAutoplaySteps1 skipped', null);
      ctx.smartAutoplayStep2();
    };
  };

  ctx.smartAutoplayStep2 = function() {
    if ((ctx.features.smartAutoplay === true) && (ctx.isIOS2() === false)) {
      canAutoplay.video({muted:true,inline:false,timeout:ctx.features.smartAutoplayTimoutPerStep}).then(function(obj) {
        if (obj.result === true) {
          ctx.vars.canAutoplayVideoMuted = true;
        };
        ctx.clog('smartAutoplaySteps2 canAutoplayVideoMuted', ctx.vars.canAutoplayVideoMuted);
        ctx.smartAutoplayStep3();
      });
    } else {
      ctx.clog('smartAutoplaySteps2 skipped', null);
      ctx.smartAutoplayStep3();
    };
  };

  ctx.smartAutoplayStep3 = function() {
    if ((ctx.features.smartAutoplay === true) && (ctx.isIOS2() === true)) {
      canAutoplay.video({muted:false,inline:true,timeout:ctx.features.smartAutoplayTimoutPerStep}).then(function(obj) {
        if (obj.result === true) {
          ctx.vars.canAutoplayVideoInline = true;
        };
        ctx.clog('smartAutoplaySteps3 canAutoplayVideoInline', ctx.vars.canAutoplayVideoInline);
        ctx.smartAutoplayStep4();
      });
    } else {
      ctx.clog('smartAutoplaySteps3 skipped', null);
      ctx.smartAutoplayStep4();
    };
  };

  ctx.smartAutoplayStep4 = function() {
    if ((ctx.features.smartAutoplay === true) && (ctx.isIOS2() === true)) {
      canAutoplay.video({muted:true,inline:true,timeout:ctx.features.smartAutoplayTimoutPerStep}).then(function(obj) {
        if (obj.result === true) {
          ctx.vars.canAutoplayVideoMutedInline = true;
        };
        ctx.clog('smartAutoplaySteps4 canAutoplayVideoMutedInline', ctx.vars.canAutoplayVideoMutedInline);
        ctx.smartAutoplayStep5();
      });
    } else {
      ctx.clog('smartAutoplaySteps4 skipped', null);
      ctx.smartAutoplayStep5();
    };
  };

  ctx.smartAutoplayStep5 = function() {
    if (ctx.features.smartAutoplay === true) {  
      if ((ctx.vars.canAutoplayVideo === true) || (ctx.vars.canAutoplayVideoInline === true)) {
        ctx.scriptconf.autoplay = true;
        if (ctx.features.smartAutoplayMuted === true) {
          ctx.clog('smartAutoplayStep5 smartAutoplayMuted feature is running', null);
          ctx.scriptconf.mute     = true;
        } else {
          ctx.scriptconf.mute     = false;
        };
        ctx.vjsconf.autoplay    = ctx.scriptconf.autoplay;
        ctx.vjsconf.muted       = ctx.scriptconf.mute;
        ctx.features.vodPreload = 'auto';
        ctx.features.livePreload= 'auto';
        ctx.hlsjsconf.autoStartLoad   = true;
        ctx.features.vodAutoStartLoad = true;
        ctx.features.liveAutoStartLoad= true;
        ctx.features.vodBufferWhilePausedAutoStop    = false;
        ctx.features.liveBufferWhilePausedAutoStop   = false;
      } else if ((ctx.vars.canAutoplayVideoMuted === true) || (ctx.vars.canAutoplayVideoMutedInline === true)) {
        ctx.scriptconf.autoplay = true;
        ctx.scriptconf.mute     = true;
        ctx.vjsconf.autoplay    = ctx.scriptconf.autoplay;
        ctx.vjsconf.muted       = ctx.scriptconf.mute;
        ctx.features.vodPreload = 'auto';
        ctx.features.livePreload= 'auto';
        ctx.hlsjsconf.autoStartLoad   = true;
        ctx.features.vodAutoStartLoad = true;
        ctx.features.liveAutoStartLoad= true;
        ctx.features.vodBufferWhilePausedAutoStop    = false;
        ctx.features.liveBufferWhilePausedAutoStop   = false;
      } else {
        ctx.scriptconf.autoplay = false;
        ctx.scriptconf.mute     = false;
        ctx.vjsconf.autoplay    = ctx.scriptconf.autoplay;
        ctx.vjsconf.muted       = ctx.scriptconf.mute;
        //ctx.features.vodPreload = 'auto';
        //ctx.features.livePreload= 'auto';
        //ctx.features.vodAutoStartLoad = true;
        //ctx.features.liveAutoStartLoad= true;
        //ctx.features.vodBufferWhilePausedAutoStop    = false;
        //ctx.features.liveBufferWhilePausedAutoStop   = false;
      };
      ctx.clog('smartAutoplayStep5 scriptconf.autoplay'                   , ctx.scriptconf.autoplay);
      ctx.clog('smartAutoplayStep5 scriptconf.mute'                       , ctx.scriptconf.mute);
      ctx.clog('smartAutoplayStep5 vjsconf.autoplay'                      , ctx.vjsconf.autoplay);
      ctx.clog('smartAutoplayStep5 vjsconf.muted'                         , ctx.vjsconf.muted);
      ctx.clog('smartAutoplayStep5 features.vodAutoStartLoad'             , ctx.features.vodAutoStartLoad);
      ctx.clog('smartAutoplayStep5 features.liveAutoStartLoad'            , ctx.features.liveAutoStartLoad);
      ctx.clog('smartAutoplayStep5 features.vodBufferWhilePausedAutoStop' , ctx.features.vodBufferWhilePausedAutoStop);
      ctx.clog('smartAutoplayStep5 features.liveBufferWhilePausedAutoStop', ctx.features.liveBufferWhilePausedAutoStop);

      if (ctx.features.smartAutoplayAffectIMA === true) {
        ctx.adsconf.addWillAutoPlay = ctx.scriptconf.autoplay;
        ctx.adsconf.addWillPlayMuted= ctx.scriptconf.mute;
        ctx.clog('smartAutoplayStep5 adsconf.addWillAutoPlay' , ctx.adsconf.addWillAutoPlay);
        ctx.clog('smartAutoplayStep5 adsconf.addWillPlayMuted', ctx.adsconf.addWillPlayMuted);
      };

      ctx.coreRun2();
    };
  };

  ctx.isIOS2 = function() {
    var result = !!navigator.platform.match(/iPhone|iPod|iPad/);
    ctx.clog('isIOS2 checks, is it iOS?', result);
    return result;
  };

  /* smartAutoplay --- end */

  ctx.checkAndroidVersion = function() {
    var result = 0;
    var ua = navigator.userAgent;
    ua = ua.toLowerCase();
    var andPos = ua.search('android');
    if (andPos !== -1) {
      var pvPos = ua.indexOf(';', andPos);
      var versao = ua.slice(andPos+8, pvPos);
      result = parseInt(versao);
    };
    return result;
  };

  ctx.isUCBrowserMobile = function() {
    var result = false;
    var ua = navigator.userAgent;
    ua = ua.toLowerCase();
    if ( (ua.indexOf('ucbrowser') !== -1) && (ua.indexOf('mobile') !== -1) ) {
      result = true;
    };
    return result;
  };

  ctx.isMIUIBrowserMobile = function() {
    var result = false;
    var ua = navigator.userAgent;
    ua = ua.toLowerCase();
    if ( (ua.indexOf('xiaomi') !== -1) && (ua.indexOf('miuibrowser') !== -1) ) {
      result = true;
    };
    return result;
  };

  /* liveAdsInterval --- begin */

  ctx.liveAdsInterval = function() {
    if ((ctx.features.enableLiveAdsInterval === true) && (ctx.vars.liveAdsIntervalHandler === null)) { // one time only init
      if (ctx.scriptconf.live === true) {
        ctx.clog('liveAdsInterval is activated', null);
        ctx.vars.liveAdsIntervalHandler = setInterval(function() {
          ctx.clog('liveAdsInterval is trying to call requestAds', null);
          if ( (ctx.vars.player !== null) && (!ctx.vars.player.paused()) && (!ctx.vars.player.ended()) && (!ctx.vars.player.seeking()) ) {
            var adRules = ctx.features.liveAdsIntervalAdRules;
            if ($.isArray(adRules) === true) {
              if (adRules.length === ctx.vars.liveAdsIntervalNextIdx) {
                ctx.vars.liveAdsIntervalNextIdx = 0;
              };
              if ((ctx.features.loadIma === true) && (ctx.vars.player.ima !== null)) {
                ctx.clog('liveAdsInterval is requesting Ad now', adRules[ctx.vars.liveAdsIntervalNextIdx]);
                ctx.vars.player.ima.changeAdTag(adRules[ctx.vars.liveAdsIntervalNextIdx]);
                ctx.vars.player.ima.requestAds();
                ctx.vars.assumeNoPlayEvent = true;
                ctx.vars.player.play();
              };
              ctx.vars.liveAdsIntervalNextIdx++;
            };
          };
        }, ctx.features.liveAdsIntervalTimeout);
      };
    };
  };

  /* liveAdsInterval --- end */

  /* liveAdsServerPush --- begin */

  ctx.liveAdsServerPushRequestAds = function(adRules) {
    if ((ctx.features.enableLiveAdsServerPush === true) && (typeof adRules === 'string')) {
      ctx.clog('liveAdsServerPushRequestAds is trying to call requestAds', null);
      if ( (ctx.vars.player !== null) && (!ctx.vars.player.paused()) && (!ctx.vars.player.ended()) && (!ctx.vars.player.seeking()) ) {
        if ((ctx.features.loadIma === true) && (ctx.vars.player.ima !== null)) {
          ctx.clog('liveAdsServerPushRequestAds is requesting Ad now', adRules);
          ctx.vars.player.ima.changeAdTag(adRules);
          ctx.vars.player.ima.requestAds();
          ctx.vars.assumeNoPlayEvent = true;
          ctx.vars.player.play();
        };
      };
    };
  };

  ctx.liveAdsServerPushManageEvent = function(eventMessage) {
    if ((ctx.features.enableLiveAdsServerPush === true) && (ctx.vars.pushstreamIsAllowMessage === true) && (eventMessage !== null) 
      && (eventMessage !== undefined) && (typeof eventMessage === 'string') 
      && (eventMessage !== '')) {
      var value = null;
      try {
        value = eval('(' + eventMessage + ')');
      } catch (error) {
        var errMessage = '';
        if (error.hasOwnProperty('name') === true) {
          errMessage = 'Error Name: ' + error.name;
        };
        if (error.hasOwnProperty('message') === true) {
          errMessage = errMessage + ', Error Message: ' + error.message;
        };
        ctx.clog('liveAdsServerPushManageEvent got an error while receive an eventMessage', errMessage);
      };
      if ( (value !== null) && (value.hasOwnProperty('adRules') === true) ) {
        ctx.clog('liveAdsServerPushManageEvent reads adRules', value.adRules);
        setTimeout(function() {
          ctx.liveAdsServerPushRequestAds(value.adRules);
        }, ctx.features.liveAdsServerPushRequestAdsTimeout);
      } else {
        ctx.clog('liveAdsServerPushManageEvent cannot read adRules', null);
      };
    };
  };

  ctx.liveAdsServerPushConnect = function(channel) {
    if ((ctx.features.enableLiveAdsServerPush === true) && (ctx.vars.pushstream !== null)) {
      ctx.vars.pushstream.removeAllChannels();
      try {
        ctx.vars.pushstream.addChannel(channel);
        ctx.vars.pushstream.connect();
        ctx.clog('liveAdsServerPushConnect is connecting to channel', channel);
      } catch (error) {
        var errMessage = '';
        if (error.hasOwnProperty('name') === true) {
          errMessage = 'Error Name: ' + error.name;
        };
        if (error.hasOwnProperty('message') === true) {
          errMessage = errMessage + ', Error Message: ' + error.message;
        };
        ctx.clog('liveAdsServerPushConnect got an error while connect to a channel', errMessage);
      };
    };
  };

  ctx.liveAdsServerPush = function() {
    if ((ctx.features.enableLiveAdsServerPush === true) && (ctx.vars.pushstream === null)) { // one time only init
      if ((ctx.scriptconf.live === true) && (PushStream !== null)) {
        PushStream.LOG_LEVEL = ctx.features.liveAdsServerPushLogLevel;
        if (ctx.features.liveAdsServerPushStream === null) {
          try {
            ctx.vars.pushstream = new window.PushStream({
                host:  ctx.features.liveAdsServerPushHost,
                port:  ctx.features.liveAdsServerPush,
                modes: ctx.features.liveAdsServerPushModes
            });
          } catch (error) {
            var errMessage = '';
            if (error.hasOwnProperty('name') === true) {
              errMessage = 'Error Name: ' + error.name;
            };
            if (error.hasOwnProperty('message') === true) {
              errMessage = errMessage + ', Error Message: ' + error.message;
            };
            ctx.clog('liveAdsServerPush got an error while pushstream instantation', errMessage);
          };
        } else {
          ctx.vars.pushstream = ctx.features.liveAdsServerPushStream;
        };
        ctx.vars.pushstream.onmessage = ctx.liveAdsServerPushManageEvent;
        ctx.liveAdsServerPushConnect(ctx.features.liveAdsServerPushChannel);
        ctx.clog('liveAdsServerPush is activated', null);
        setTimeout(function() {
          ctx.vars.pushstreamIsAllowMessage = true;
          ctx.clog('liveAdsServerPush sets pushstreamIsAllowMessage', ctx.vars.pushstreamIsAllowMessage);
        }, ctx.features.liveAdsServerPushWaitingForAllowMessage);
      };
    };
  };

  /* liveAdsServerPush --- end */

  /* liveAdsCron       --- begin */

  ctx.liveAdsCron = function() {
    if ( (ctx.features.enableLiveAdsCron === true) && 
      (ctx.vars.liveAdsCronLock === false) &&
      (ctx.scriptconf.live === true) ) {
      ctx.vars.liveAdsCronLock === true;
      ctx.clog('liveAdsCron is activated', null);
      $.each(ctx.features.liveAdsCronData, function(i, v) {
        if ((v.hasOwnProperty('cronText') === true) && (v.hasOwnProperty('adRules') === true)) {
          var cronText = v.cronText;
          var adRules  = v.adRules;
          var cronSchedule = later.parse.cron(cronText, ctx.features.liveAdsCronHasSeconds);
          ctx.vars.liveAdsCronScheduleHandlers.push(cronSchedule);
          var timer = later.setInterval(function() {
            ctx.clog('liveAdsCron is trying to call requestAds', null);
            if ( (ctx.vars.player !== null) && (!ctx.vars.player.paused()) && (!ctx.vars.player.ended()) && (!ctx.vars.player.seeking()) ) {
              if ((ctx.features.loadIma === true) && (ctx.vars.player.ima !== null)) {
                ctx.clog('liveAdsCron cronText: ' + cronText, adRules);
                ctx.vars.player.ima.changeAdTag(adRules);
                ctx.vars.player.ima.requestAds();
                ctx.vars.assumeNoPlayEvent = true;
                ctx.vars.player.play();
              };
            };
          }, cronSchedule);
          ctx.vars.liveAdsCroSIHandlers.push(timer);
        };
      });
    };
  };

  /* liveAdsCron       --- end */

})(nnVideo);



// Chapter 5: Init first then Run !
nnVideo.coreInit();
