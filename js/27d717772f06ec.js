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
        directStreamURL: 'https://api.codetabs.com/v1/proxy?quest=http://live.sg.mcfmbwi.com:9720/mcfm',
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
        theme: 'dark',
        ui: 'colored',
        played: false,
        artwork: true,
        continuous: true
    })
