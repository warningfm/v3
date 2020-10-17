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
        defaultArtwork: ['https://1.bp.blogspot.com/-tL2c7aRRNRg/X4thWvxvTYI/AAAAAAAAMZw/tYgR-g_vu9MZvy0NEq-96KjzxbPlkZBswCLcBGAsYHQ/s0/logo-prima-fm.jpg'],
        statusBar: false,
        startTemplate: 'maximized',
        position: 'left',
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: false
      })
