// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'live.sg.mcfmbwi.com',
        port: 9720,
        protocol: 'http',
        version: 2,
        sid: 1,
        statsPath: 'stats',
        directStreamURL: '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x68\x69\x76\x79\x72\x75\x62\x79\x63\x6f\x72\x73\x2e\x68\x65\x72\x6f\x6b\x75\x61\x70\x70\x2e\x63\x6f\x6d\x2f\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x69\x76\x65\x2e\x73\x67\x2e\x6d\x63\x66\x6d\x62\x77\x69\x2e\x63\x6f\x6d\x3a\x39\x37\x32\x30\x2f\x6d\x63\x66\x6d',
        autoUpdate: true,
        autoPlay: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: ['false'],
        defaultArtwork: ['https://2.bp.blogspot.com/-lRkFcc6_lYI/W5Vh1v8GwTI/AAAAAAAAJaY/u2FGIl8Gk4Udqqyg7fZ_PTa8p329strVgCLcBGAs/s1600/44-721522597654ctljd.png'],
        offlineCheck: false,
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: '97.2 - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'RADIO MC FM' 
        }, 
        overHTTPS: true,
        position: 'left',
        container: 'body',
        colors: 'dynamic',
        theme: 'light',
        ui: 'colored',
        played: false,
        artwork: true,
        continuous: true
    })
