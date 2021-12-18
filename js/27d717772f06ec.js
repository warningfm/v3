// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'scg.streamingmurah.com',
        port: 9720,
        protocol: 'http',
        version: 1,
        directStreamURL: 'https://ssg.streamingmurah.com:9720/mcfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: '97.2 - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio MC FM' 
        },
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })
