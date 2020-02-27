// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'live.radiobintangtenggara.com',
        port: 8000,
        protocol: 'http',
        version: 2,
        sid: 1,
        statsPath: 'stats',
        directStreamURL: 'https://warningfm.herokuapp.com/?q=http://live.radiobintangtenggara.com:8000/mbahnunungonline',
        autoUpdate: true,
        autoPlay: false,
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
        theme: 'light',
        ui: 'colored',
        played: false,
        artwork: true,
        continuous: true
    })
