// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: '\x6c\x69\x76\x65\x2e\x63\x69\x74\x72\x61\x66\x6d\x72\x61\x64\x69\x6f\x2e\x63\x6f\x6d',
        port: 9882,
        protocol: 'http',
        version: 1,
        directStreamURL: 'https://free.rcast.net/69714',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        language: {
            offlineText: 'Temporarily Offline',
            playedText: '<font face="Georgia" color="blue">Wes Mari Diputer :</font>',
            unknownTrackText: 'Bondowoso - c^o^d^e^l^i^s^t^.^c^c', 
            unknownArtistText: 'Radio Citra' 
        },
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })

