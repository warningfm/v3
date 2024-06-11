

const RADIO_NAME = 'Radio mbah nunung Online';

// SELECT ARTWORK PROVIDER, ITUNES, DEEZER & SPOTIFY or AZURACAST. eg : spotify 
var API_SERVICE = 'spotify';

// Change Stream URL Here, Supports, ICECAST, ZENO, SHOUTCAST, RADIOJAR and any other stream service.
const URL_STREAMING = 'https://stream.zeno.fm/n4gzbe9ufzzuv';

//PASTE YOUR MEDIA CP JSON URL HERE TO GET NOW PLAYING SONG TITLE.
const MEDIACP_JSON_URL = ''

//API URL /
const API_URL = 'https://twj.es/radio_info/?radio_url=' + encodeURIComponent(URL_STREAMING);

// Visit https://api.vagalume.com.br/docs/ to get your API key
const API_KEY = "18fe07917957c289983464588aabddfb";

let userInteracted = true;

window.onload = function () {
    var page = new Page;
    page.changeTitlePage();
    page.setVolume();

    var player = new Player();
    player.play();

    getStreamingData();
    // Interval to get streaming data in miliseconds
    setInterval(function () {
        getStreamingData();
    }, 10000);

    var coverArt = document.getElementsByClassName('cover-album')[0];

    coverArt.style.height = coverArt.offsetWidth + 'px';
}

// DOM control
class Page {
    constructor() {
        this.changeTitlePage = function (title = RADIO_NAME) {
            document.title = title;
        };

        this.refreshCurrentSong = function (song, artist) {
            var currentSong = document.getElementById('currentSong');
            var currentArtist = document.getElementById('currentArtist');

            if (song !== currentSong.innerHTML) {
                // Animate transition
                currentSong.className = 'animated flipInY text-uppercase';
                currentSong.innerHTML = song;

                currentArtist.className = 'animated flipInY text-capitalize';
                currentArtist.innerHTML = artist;

                // Refresh modal title
                document.getElementById('lyricsSong').innerHTML = song + ' - ' + artist;

                // Remove animation classes
                setTimeout(function () {
                    currentSong.className = 'text-uppercase';
                    currentArtist.className = 'text-capitalize';
                }, 2000);
            }
        };

        this.refreshHistoric = function (info, n) {
            var $historicDiv = document.querySelectorAll('#historicSong article');
            var $songName = document.querySelectorAll('#historicSong article .music-info .song');
            var $artistName = document.querySelectorAll('#historicSong article .music-info .artist');
          
            // Imagem padrão definida apenas uma vez
            const defaultCoverArt = 'img/cover.png'; 
            let urlCoverArt = defaultCoverArt; // Começa com a imagem padrão
          
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                
                // Verifica se as propriedades existem
                if (data && data.results && data.results.artwork) { 
                  urlCoverArt = data.results.artwork;
          
                  // Seleciona o elemento correto
                  var coverHistoric = document.querySelectorAll('#historicSong article .cover-historic')[n];
                  if (coverHistoric) { // Verifica se o elemento existe
                    coverHistoric.style.backgroundImage = 'url(' + urlCoverArt + ')';
                  } else {
                    console.warn("Elemento cover-historic não encontrado para o índice:", n);
                  }
          
                } else {
                  console.warn("Resposta da API inválida ou dados de artwork ausentes:", data);
                  // Mantém a imagem padrão
                }
              }
          
              // Formatando caracteres para UTF-8
              var music = info.song.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');
              var artist = info.artist.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');
          
              $songName[n].innerHTML = music;
              $artistName[n].innerHTML = artist;
          
              // Adiciona classes para animação (se necessário)
              $historicDiv[n].classList.add('animated', 'slideInRight');
          
              setTimeout(function () {
                for (var j = 0; j < 2; j++) {
                  $historicDiv[j].classList.remove('animated', 'slideInRight');
                }
              }, 2000);
            };
          
            // Requisição com timestamp para evitar cache
            xhttp.open('GET', 'https://api.streamafrica.net/new.search?query=' + info.artist + ' ' + info.song + '&service=' + API_SERVICE.toLowerCase());
            xhttp.send();
          };

        this.refreshCover = function (song = '', artist) {
            // Imagem padrão definida apenas uma vez
            const defaultCoverArt = 'img/cover.png'; 
            let urlCoverArt = defaultCoverArt; // Começa com a imagem padrão
          
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              var coverArt = document.getElementById('currentCoverArt');
              var coverBackground = document.getElementById('bgCover');
          
              // Verifica se a API retornou um resultado válido
              if (this.readyState === 4 && this.status === 200 && this.responseText.trim() !== '') {
                var data = JSON.parse(this.responseText);
          
                // Verifica se as propriedades existem
                if (data && data.results && data.results.artwork) { 
                  urlCoverArt = data.results.artwork; 
                } else {
                  console.warn("Resposta da API inválida ou dados de artwork ausentes:", data);
                  // Mantém a imagem padrão
                }
              } else {
                console.warn("Erro na requisição da API ou resposta vazia.");
                // Mantém a imagem padrão
              }
          
              // Aplica a imagem de capa (sempre, mesmo se for a padrão)
              coverArt.style.backgroundImage = 'url(' + urlCoverArt + ')';
              coverArt.className = 'animated bounceInLeft';
          
              coverBackground.style.backgroundImage = 'url(' + urlCoverArt + ')';
          
              setTimeout(function () {
                coverArt.className = '';
              }, 2000);
          
              if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                  title: song,
                  artist: artist,
                  artwork: [
                    { src: urlCoverArt, sizes: '96x96', type: 'image/png' },
                    { src: urlCoverArt, sizes: '128x128', type: 'image/png' },
                    { src: urlCoverArt, sizes: '192x192', type: 'image/png' },
                    { src: urlCoverArt, sizes: '256x256', type: 'image/png' },
                    { src: urlCoverArt, sizes: '384x384', type: 'image/png' },
                    { src: urlCoverArt, sizes: '512x512', type: 'image/png' }
                  ]
                });
              }
            };
          
            // Requisição com timestamp para evitar cache
            xhttp.open('GET', 'https://api.streamafrica.net/new.search?query=' + artist + ' ' + song + '&service=' + API_SERVICE.toLowerCase());
            xhttp.send();
        };

        this.changeVolumeIndicator = function (volume) {
            document.getElementById('volIndicator').innerHTML = volume;

            if (typeof (Storage) !== 'undefined') {
                localStorage.setItem('volume', volume);
            }
        };

        this.setVolume = function () {
            if (typeof (Storage) !== 'undefined') {
                var volumeLocalStorage = (!localStorage.getItem('volume')) ? 80 : localStorage.getItem('volume');
                document.getElementById('volume').value = volumeLocalStorage;
                document.getElementById('volIndicator').innerHTML = volumeLocalStorage;
            }
        };

        this.refreshLyric = function (currentSong, currentArtist) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    var data = JSON.parse(this.responseText);

                    var openLyric = document.getElementsByClassName('lyrics')[0];

                    if (data.type === 'exact' || data.type === 'aprox') {
                        var lyric = data.mus[0].text;

                        document.getElementById('lyric').innerHTML = lyric.replace(/\n/g, '<br />');
                        openLyric.style.opacity = "1";
                        openLyric.setAttribute('data-toggle', 'modal');
                    } else {
                        openLyric.style.opacity = "0.3";
                        openLyric.removeAttribute('data-toggle');

                        var modalLyric = document.getElementById('modalLyrics');
                        modalLyric.style.display = "none";
                        modalLyric.setAttribute('aria-hidden', 'true');
                        (document.getElementsByClassName('modal-backdrop')[0]) ? document.getElementsByClassName('modal-backdrop')[0].remove() : '';
                    }
                } else {
                    document.getElementsByClassName('lyrics')[0].style.opacity = "0.3";
                    document.getElementsByClassName('lyrics')[0].removeAttribute('data-toggle');
                }
            };
            xhttp.open('GET', 'https://api.vagalume.com.br/search.php?apikey=' + API_KEY + '&art=' + currentArtist + '&mus=' + currentSong.toLowerCase(), true);
            xhttp.send();
        };
    }
}


function getStreamingData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            if(this.response.length === 0) {
                console.log('%cdebug', 'font-size: 22px')
            }

            var data = JSON.parse(this.responseText);

            var page = new Page();

            // Formating characters to UTF-8
            let song = data.currentSong.replace(/&apos;/g, '\'');
            currentSong = song.replace(/&amp;/g, '&');

            let artist = data.currentArtist.replace(/&apos;/g, '\'');
            currentArtist = artist.replace(/&amp;/g, '&');

            // Change the title
            document.title = currentSong + ' - ' + currentArtist + ' | ' + RADIO_NAME;

            if (document.getElementById('currentSong').innerHTML !== song) {
                page.refreshCover(currentSong, currentArtist);
                page.refreshCurrentSong(currentSong, currentArtist);
                page.refreshLyric(currentSong, currentArtist);

                for (var i = 0; i < 4; i++) {
                    page.refreshHistoric(data.songHistory[i], i);
                }
            }
        } 
    };

    var d = new Date();

    // Requisition with timestamp to prevent cache on mobile devices
    xhttp.open('GET', API_URL);
    xhttp.send();
}

// Player control by keys
document.addEventListener('keydown', function (k) {
    var k = k || window.event;
    var key = k.keyCode || k.which;
    
    var slideVolume = document.getElementById('volume');

    var page = new Page();

    switch (key) {
        // Arrow up
        case 38:
            volumeUp();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        // Arrow down
        case 40:
            volumeDown();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        // Spacebar
        case 32:
            togglePlay();
            break;
        // P
        case 80:
            togglePlay();
            break;
        // M
        case 77:
            mute();
            break;
        // 0
        case 48:
            audio.volume = 0;
            slideVolume.value = 0;
            page.changeVolumeIndicator(0);
            break;
        // 0 numeric keyboard
        case 96:
            audio.volume = 0;
            slideVolume.value = 0;
            page.changeVolumeIndicator(0);
            break;
        // 1
        case 49:
            audio.volume = .1;
            slideVolume.value = 10;
            page.changeVolumeIndicator(10);
            break;
        // 1 numeric key
        case 97:
            audio.volume = .1;
            slideVolume.value = 10;
            page.changeVolumeIndicator(10);
            break;
        // 2
        case 50:
            audio.volume = .2;
            slideVolume.value = 20;
            page.changeVolumeIndicator(20);
            break;
        // 2 numeric key
        case 98:
            audio.volume = .2;
            slideVolume.value = 20;
            page.changeVolumeIndicator(20);
            break;
        // 3
        case 51:
            audio.volume = .3;
            slideVolume.value = 30;
            page.changeVolumeIndicator(30);
            break;
        // 3 numeric key
        case 99:
            audio.volume = .3;
            slideVolume.value = 30;
            page.changeVolumeIndicator(30);
            break;
        // 4
        case 52:
            audio.volume = .4;
            slideVolume.value = 40;
            page.changeVolumeIndicator(40);
            break;
        // 4 numeric key
        case 100:
            audio.volume = .4;
            slideVolume.value = 40;
            page.changeVolumeIndicator(40);
            break;
        // 5
        case 53:
            audio.volume = .5;
            slideVolume.value = 50;
            page.changeVolumeIndicator(50);
            break;
        // 5 numeric key
        case 101:
            audio.volume = .5;
            slideVolume.value = 50;
            page.changeVolumeIndicator(50);
            break;
        // 6 
        case 54:
            audio.volume = .6;
            slideVolume.value = 60;
            page.changeVolumeIndicator(60);
            break;
        // 6 numeric key
        case 102:
            audio.volume = .6;
            slideVolume.value = 60;
            page.changeVolumeIndicator(60);
            break;
        // 7
        case 55:
            audio.volume = .7;
            slideVolume.value = 70;
            page.changeVolumeIndicator(70);
            break;
        // 7 numeric key
        case 103:
            audio.volume = .7;
            slideVolume.value = 70;
            page.changeVolumeIndicator(70);
            break;
        // 8
        case 56:
            audio.volume = .8;
            slideVolume.value = 80;
            page.changeVolumeIndicator(80);
            break;
        // 8 numeric key
        case 104:
            audio.volume = .8;
            slideVolume.value = 80;
            page.changeVolumeIndicator(80);
            break;
        // 9
        case 57:
            audio.volume = .9;
            slideVolume.value = 90;
            page.changeVolumeIndicator(90);
            break;
        // 9 numeric key
        case 105:
            audio.volume = .9;
            slideVolume.value = 90;
            page.changeVolumeIndicator(90);
            break;
    }
});

function intToDecimal(vol) {
    return vol / 100;
}

function decimalToInt(vol) {
    return vol * 100;
}

/* show / hide historic songs */
let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
    }, duration);
  }

  let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
      display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }
   let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }
   
// ====  
  
// let speedAnimation = 400;
// let targetId = document.getElementById("historicSong");

// let slideBtnClick = (id, sl) => document.getElementById(id).addEventListener('click', () => sl(targetId, speedAnimation));

// slideBtnClick('triggerUp', slideUp);
// slideBtnClick('triggerDown', slideDown);
// slideBtnClick('triggerToggle', slideToggle);


// =========== old

//   document.getElementById("triggerUp").addEventListener('click', function() {
//   slideUp(document.getElementById("target"), 400);
// });
//   document.getElementById("triggerDown").addEventListener('click', function() {
//   slideDown(document.getElementById("target"), 400);
// });
//   document.getElementById("triggerToggle").addEventListener('click', function() {
//   slideToggle(document.getElementById("target"), 400);
// });
