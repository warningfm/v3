// =============================================== //
// - Remove any active classes (yellow boxes)
// - Add active class to the clicked example box
// - Destroy any pervious Kast
// - On example box click, call Kast
// =============================================== //


// Handle: All Example boxes
$('.card-content').click(function () {
    $('.card-content').removeClass('active');
    $(this).addClass('active');
    
    // Destroy any pervious Kast
    // before we call a new Kast
    $.kast('destroy')    
})

// Handle: Example 1 click function
$('#top-1').click(function () {
    $.kast({
        host: 'sonic-mercury.wlservices.org',
        port: 4000,
        protocol: 'https',
        version: 1,
        betaProxies: true,
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        colors: 'dynamic',
        theme: 'dynamic',
        autoPlay: true,
        mobileCare: false
    })
})

// Handle: Example 2 click function
$('#top-2').click(function () {
    $.kast({
        host: 'bogor.nagaswarafm.com',
        port: 8088,
        betaProxies: true,
        mobileCare: false,
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'colored',
        //serverInfo: ['servergenre', 'servertitle'],
        autoPlay: true,
        continuous: false
    })
})

// Handle: Example 3 click function
$('#top-3').click(function () {
    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 9560,
        autoPlay: true,
        betaProxies: true,
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        mobileCare: false,
        colors: 'dynamic',
        theme: 'dynamic'
    })
})

// Handle: Example 4 click function
$('#top-4').click(function () {
    $.kast({
        host: 'live.sg.radiobintangtenggara.com',
        port: 9720,
        version: 2,
        betaProxies: true,
        mobileCare: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        irrelevantWords: false,
        colors: 'dynamic',
        theme: 'dark',
        autoPlay: true,
        played: true
    })
})

// Handle: Example 5 click function
$('#top-5').click(function () {
    $.kast({
        host: 'stm6.srvstm.com',
        port: 21512,
        mobileCare: false,
        artwork: true,
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        colors: 'dynamic',
        theme: 'dynamic',
        ui: 'colored',
        autoPlay: true
    })
})

// Handle: Example 6 click function
$('#top-6').click(function () {
    $.kast({
        host: '204.44.90.87',
        port: 8080,
        version: 2,
        mobileCare: false,
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        colors: {
            primary: 'blue grey'
            //accent: 'yellow' // Because accent is yellow by default
        },
        theme: 'dynamic',
        autoPlay: true,
        continuous: false
    })
})

// Handle: Example 7 click function
$('#top-7').click(function () {
    $.kast({
        host: 'stream.denger.in',
        port: 8000,
        version: 2,
        mobileCare: false,
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        colors: {
            primary: 'grey',
            accent: 'light blue'
        },
        theme: 'dynamic',
        autoPlay: true,
        ui: 'colored',
        played: true
    })
})

// Handle: Example 8 click function
$('#top-8').click(function () {
    $.kast({
        host: 'baseman.biru.co.id',
        port: 8910,
        colors: 'dynamic',
        theme: 'dynamic',
        irrelevantWords: false,
        defaultArtwork: ['https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e9/38/24/e938243e-d983-db13-803e-f165e3a2057f/source/512x512bb.jpg'],
        //startTemplate: 'minimized',
        autoPlay: true,
        statusBar: true
    })
})

// Handle: Example 9 click function
$('#top-9').click(function () {
    $.kast({
        host: '206.190.136.212',
        port: 9402,
        colors: 'dynamic',
        theme: 'dynamic',
        mobileCare: ['ultra', '4069px'], // the pixel number here is to force MobileCare to run on Desktops and Tablets too (Up to 4K Screens)
        continuous: false
    })
})
