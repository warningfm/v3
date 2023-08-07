// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'rbtfm.cloudns.info',
        port: 9560,
        protocol: 'http',
        version: 1,
        directStreamURL: 'https://ssg.streamingmurah.com:9560/rbtfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: 'Informasi & Solusi - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Bintang Tenggara' 
        },
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })
