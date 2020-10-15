// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'ssg.streamingmurah.com',
        port: 9560,
        protocol: 'https',
        version: 1,
        sid: 1,
        statsPath: 'stats',
        //directStreamURL: 'https://cast4.mbahnunungonline.net/proxy/mbahnunung55?mp=/stream',
        autoUpdate: true,
        autoPlay: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: ['false'],
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
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
        theme: 'dark',
        ui: 'colored',
        played: false,
        artwork: true,
        continuous: false
    })
