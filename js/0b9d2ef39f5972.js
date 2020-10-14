
jQuery(function() {
  jQuery("#cont")
    $.kast({
        host: '\x6c\x69\x76\x65\x2e\x73\x67\x2e\x6d\x63\x66\x6d\x62\x77\x69\x2e\x63\x6f\x6d',
        port: 9720,
        protocol: 'http',
        version: 1,
        sid: 1,
        statsPath: 'stats',
        directStreamURL: 'https://proxy.webdesign-flash.ro/?q=http://live.sg.mcfmbwi.com:9720/mcfm',
        autoUpdate: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: ['false'],
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        offlineCheck: false,
        overHTTPS: true,
        position: 'left',
        container: 'body',
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'colored',
        played: false,
        autoPlay: true,
        continuous: true
     });
   });
