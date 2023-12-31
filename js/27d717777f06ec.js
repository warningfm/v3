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
        version: 2,  
        sid: 1,  
        direct: true,  
        betaProxies: false,
        //directStreamURL: 'https://ssg.streamingmurah.com:9560/rbtfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false, 
        minimizeMaximize: true,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Mari Diputer :</font>',
            unknownTrackText: 'Informasi & Solusi - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Bintang Tenggara' 
        },
        position: 'right',
        colors: 'dynamic',  
        continuous: true,
        theme: 'dynamic',
        autoPlay: true,
        played: true
      })
