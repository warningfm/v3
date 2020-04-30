// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 8060,
        protocol: 'http',
        version: 2,
        sid: 1,
        directStreamURL: 'https://ihon.herokuapp.com/http://live.sg.radiobintangtenggara.com:8060/rsta',
        statsPath: 'stats',
        autoUpdate: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: false,
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        offlineCheck: false,
        overHTTPS: true,
        position: 'left',
        container: 'body',
        colors: 'dynamic',
        theme: 'dark',
        ui: 'colored',
        played: false,
        autoPlay: true,
        continuous: true
    })
