// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'cast2.bintangtenggarafm.com',
        port: 1057,
        protocol: 'http',
        version: 2,
        sid: 1,
        statsPath: 'stats',
        directStreamURL: 'https://zet.pluginsandthemes.ro/http://cast2.bintangtenggarafm.com:1057/stream',
        autoUpdate: true,
        autoPlay: true,
        betaProxies: true,
        mobileCare: false,
        minimizeMaximize: false,
        muteUnmute: false,
        statusBar: false,
        startTemplate: 'maximized',
        irrelevantWords: ['false'],
        defaultArtwork: ['https://4.bp.blogspot.com/-_5ew1iwjNhM/XkbDaTDKRJI/AAAAAAAAMGE/rYz9oWB_usMkG4NNNqv9pyb1DWxyV2cVACLcBGAsYHQ/s1600/andikafm.png'],
        offlineCheck: false,
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: 'Informasi & Solusi - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Andika Kediri' 
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
