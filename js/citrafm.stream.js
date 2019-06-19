// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: '\x6c\x69\x76\x65\x2e\x63\x69\x74\x72\x61\x66\x6d\x72\x61\x64\x69\x6f\x2e\x63\x6f\x6d',
        port: 9882,
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
        defaultArtwork: ['https://lh3.googleusercontent.com/MjH8Hd86LGfBfPhwZznGzjblrvhcNvTQ-8wN59KUXCQLAarnxL-_xATQ0VQL-WQSuU5H=w1366-h654'],
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
    })

