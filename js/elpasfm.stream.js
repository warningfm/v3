// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'live.elpasfm.com',
        port: 8072,
        protocol: 'http',
        version: 2,
        sid: 1,
        directStreamURL: 'https://api.codetabs.com/v1/proxy?quest=http://live.elpasfm.com:8072/elpasfm',
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


