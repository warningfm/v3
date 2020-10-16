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
        version: 1,
        directStreamURL: 'https://proxy.webdesign-flash.ro/?q=http://live.elpasfm.com:8072/elpasfm',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: 'Bogor - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Elpas FM' 
        },
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })


