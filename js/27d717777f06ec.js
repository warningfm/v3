// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 9560,
        protocol: 'http',
        version: 2,
        sid: 1,
        statsPath: 'stats',
        directStreamURL: 'https://rbtfm.herokuapp.com/?q=http://live.sg.radiobintangtenggara.com:9560/rbtfm',
        autoUpdate: true,
        autoPlay: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: ['false'],
        defaultArtwork: ['https://warningfm.github.io/v3/images/f69c7be1aa497aaa87f40d2306c4c355.png'],
        offlineCheck: false,
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: 'Informasi & Solusi - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Bintang Tenggara' 
        }, 
        overHTTPS: true,
        position: 'left',
        container: 'body',
        colors: 'dynamic',
        theme: 'light',
        ui: 'colored',
        played: false,
        artwork: true,
        continuous: false
    })
