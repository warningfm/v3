// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'bogor.nagaswarafm.com',
        port: 8088,
        protocol: 'http',
        version: 2,
        sid: 1,
        statsPath: 'stats',
        autoUpdate: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: false,
        defaultArtwork: ['https://1.bp.blogspot.com/-1PGbt3jWDbM/VuFhjTl8oxI/AAAAAAAAAM8/mkvogooUuds/s400/7.png'],
        offlineCheck: false,
        overHTTPS: true,
        position: 'left',
        container: 'body',
        colors: 'dynamic',
        theme: 'light',
        ui: 'colored',
        played: false,
        autoPlay: true,
        continuous: false
    })


