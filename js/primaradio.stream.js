// =============================================== //
// - Remove any active classes (yellow boxes)
// - please add your options (host, port, version, etc..)
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //

    $.kast({
        host: 'stream.primaradio.co.id',
        port: 9188,
        protocol: 'http',
        version: 1,
        directStreamURL: 'https://simbacast.herokuapp.com/?q=http://stream.primaradio.co.id:9188/;',
        defaultArtwork: ['https://warningfm.github.io/v3/images/1d205655ef29e14a8255c89fe2383a41.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        position: 'left',
        colors: 'dynamic',
        theme: 'dynamic',
        autoPlay: true,
        played: false
      })
