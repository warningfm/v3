/*
The MIT License (MIT)

Copyright (c) 2017-2019 Guilherme Sávio
Github: https://github.com/gsavio

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const RADIO_NAME = "RBT FM";

// Change Stream URL Here
const URL_STREAMING = "https://stream.zeno.fm/r4mpcrfwfzzuv";

//API URL /
const API_URL = 'https://twj.es/radio_info/?radio_url=' + encodeURIComponent(URL_STREAMING);

// Visit https://api.vagalume.com.br/docs/ to get your API key
const API_KEY = "18fe07917957c289983464588aabddfb";

// Set HISTORIC to true to get the last songs played
const HISTORIC = true;

const audio = new Audio(URL_STREAMING);

window.onload = function () {
    const page = new Page();
    page.changeTitlePage();
    page.setVolume();

    const player = new Player();
    player.play();

    getStreamingData();
    setInterval(getStreamingData, 10000);

    const coverArt = document.querySelector('.cover-album');
    if (coverArt) {
        coverArt.style.height = coverArt.offsetWidth + 'px';
    }
};

// DOM control
class Page {
    changeTitlePage(title = RADIO_NAME) {
        document.title = title;
    }

    refreshCurrentSong(song, artist) {
        const currentSong = document.getElementById('currentSong');
        const currentArtist = document.getElementById('currentArtist');
        const lyricsSong = document.getElementById('lyricsSong');

        if (currentSong && currentArtist && lyricsSong && song !== currentSong.innerHTML) {
            currentSong.className = 'animated flipInY text-uppercase';
            currentSong.innerHTML = song;
            currentArtist.className = 'animated flipInY text-capitalize';
            currentArtist.innerHTML = artist;
            lyricsSong.innerHTML = `${song} - ${artist}`;

            setTimeout(() => {
                currentSong.className = 'text-uppercase';
                currentArtist.className = 'text-capitalize';
            }, 2000);
        }
    }

    refreshHistoric(info, n) {
        const $historicDiv = document.querySelectorAll('#historicSong article');
        const $songName = document.querySelectorAll('#historicSong article .music-info .song');
        const $artistName = document.querySelectorAll('#historicSong article .music-info .artist');
        const defaultCoverArt = 'img/cover.png';

        if (!$historicDiv[n] || !$songName[n] || !$artistName[n]) {
            console.warn("Elementos de histórico não encontrados para o índice:", n);
            return;
        }

        const url = 'https://itunes.apple.com/search?term=' + encodeURIComponent(info.artist + ' ' + info.song) + '&media=music&limit=1';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const artworkUrl100 = data.resultCount ? data.results[0].artworkUrl100 : defaultCoverArt;
                const coverHistoric = document.querySelectorAll('#historicSong article .cover-historic')[n];

                if (coverHistoric) {
                    coverHistoric.style.backgroundImage = `url(${artworkUrl100})`;
                } else {
                    console.warn("Elemento cover-historic não encontrado para o índice:", n);
                }

                const music = info.song.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');
                const artist = info.artist.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');

                $songName[n].innerHTML = music;
                $artistName[n].innerHTML = artist;

                $historicDiv[n].classList.add('animated', 'slideInRight');
                setTimeout(() => {
                    $historicDiv[n].classList.remove('animated', 'slideInRight');
                }, 2000);
            })
            .catch(error => console.error('Erro ao buscar dados do iTunes:', error));
    }

    refreshCover(song = '', artist) {
        const defaultCoverArt = 'img/cover.png';
        const coverArt = document.getElementById('currentCoverArt');
        const coverBackground = document.getElementById('bgCover');

        if (!coverArt || !coverBackground) {
            console.warn("Elementos de capa não encontrados.");
            return;
        }

        const url = 'https://itunes.apple.com/search?term=' + encodeURIComponent(artist + ' ' + song) + '&media=music&limit=1';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const artworkUrl = data.resultCount ? data.results[0].artworkUrl100.replace('100x100bb', '512x512bb') : defaultCoverArt;

                coverArt.style.backgroundImage = `url(${artworkUrl})`;
                coverArt.className = 'animated bounceInLeft';
                coverBackground.style.backgroundImage = `url(${artworkUrl})`;

                setTimeout(() => {
                    coverArt.className = '';
                }, 2000);

                if ('mediaSession' in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: song,
                        artist: artist,
                        artwork: [
                            { src: artworkUrl.replace('512x512bb', '96x96bb'), sizes: '96x96', type: 'image/png' },
                            { src: artworkUrl.replace('512x512bb', '128x128bb'), sizes: '128x128', type: 'image/png' },
                            { src: artworkUrl.replace('512x512bb', '192x192bb'), sizes: '192x192', type: 'image/png' },
                            { src: artworkUrl.replace('512x512bb', '256x256bb'), sizes: '256x256', type: 'image/png' },
                            { src: artworkUrl.replace('512x512bb', '384x384bb'), sizes: '384x384', type: 'image/png' },
                            { src: artworkUrl, sizes: '512x512', type: 'image/png' }
                        ]
                    });
                }
            })
            .catch(error => console.error('Erro ao buscar dados do iTunes:', error));
    }

    changeVolumeIndicator(volume) {
        const volIndicator = document.getElementById('volIndicator');
        if (volIndicator) {
            volIndicator.innerHTML = volume;
        }

        if (typeof Storage !== 'undefined') {
            localStorage.setItem('volume', volume);
        }
    }

    setVolume() {
        if (typeof Storage !== 'undefined') {
            const volume = localStorage.getItem('volume') || 80;
            const volumeElement = document.getElementById('volume');
            const volIndicator = document.getElementById('volIndicator');

            if (volumeElement && volIndicator) {
                volumeElement.value = volume;
                volIndicator.innerHTML = volume;
            }
        }
    }

    refreshLyric(currentSong, currentArtist) {
        const url = `https://api.vagalume.com.br/search.php?apikey=${API_KEY}&art=${encodeURIComponent(currentArtist)}&mus=${encodeURIComponent(currentSong.toLowerCase())}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const openLyric = document.querySelector('.lyrics');
                const modalLyric = document.getElementById('modalLyrics');

                if (data.type === 'exact' || data.type === 'aprox') {
                    const lyric = data.mus[0].text;
                    document.getElementById('lyric').innerHTML = lyric.replace(/\n/g, '<br />');
                    openLyric.style.opacity = "1";
                    openLyric.setAttribute('data-toggle', 'modal');
                } else {
                    openLyric.style.opacity = "0.3";
                    openLyric.removeAttribute('data-toggle');
                    if (modalLyric) {
                        modalLyric.style.display = "none";
                        modalLyric.setAttribute('aria-hidden', 'true');
                        const backdrop = document.querySelector('.modal-backdrop');
                        if (backdrop) backdrop.remove();
                    }
                }
            })
            .catch(() => {
                const openLyric = document.querySelector('.lyrics');
                if (openLyric) {
                    openLyric.style.opacity = "0.3";
                    openLyric.removeAttribute('data-toggle');
                }
            });
    }
}



function getStreamingData() {
    const url = `${API_URL}&timestamp=${new Date().getTime()}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const page = new Page();
            let song = data.currentSong.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');
            let artist = data.currentArtist.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');

            document.title = `${song} - ${artist} | ${RADIO_NAME}`;

            const currentSongElem = document.getElementById('currentSong');
            if (currentSongElem && currentSongElem.innerHTML !== song) {
                page.refreshCover(song, artist);
                page.refreshCurrentSong(song, artist);
                page.refreshLyric(song, artist);

                for (let i = 0; i < data.songHistory.length; i++) {
                    page.refreshHistoric(data.songHistory[i], i);
                }
            }
        })
        .catch(error => console.error('Erro ao obter dados de streaming:', error));
}


//####################################### AUDIO #######################################

class Player {
    constructor() {
        this.initAudio();
    }

    initAudio() {
        audio.volume = this.getStoredVolume() || this.getDefaultVolume();
        this.updateVolumeIndicator();
        this.addAudioEventListeners();
    }

    play() {
        audio.play();
        togglePlay(); // Atualiza o botão
    }

    pause() {
        audio.pause();
    }

    getStoredVolume() {
        return typeof Storage !== 'undefined' ? intToDecimal(localStorage.getItem('volume')) : null;
    }

    getDefaultVolume() {
        const defaultVolume = document.getElementById('volume').value;
        return intToDecimal(defaultVolume);
    }

    updateVolumeIndicator() {
        const volume = document.getElementById('volume').value;
        document.getElementById('volIndicator').innerHTML = volume;
    }

    addAudioEventListeners() {
        audio.onplay = this.updatePlayButton;
        audio.onpause = this.updatePauseButton;
        audio.onvolumechange = this.handleVolumeChange;
        audio.onerror = this.handleError;
    }

    updatePlayButton() {
        const botao = document.getElementById('playerButton');
        const bplay = document.getElementById('buttonPlay');
        if (botao.className === 'fa fa-play') {
            botao.className = 'fa fa-pause';
            bplay.firstChild.data = 'PAUSAR';
        }
    }

    updatePauseButton() {
        const botao = document.getElementById('playerButton');
        const bplay = document.getElementById('buttonPlay');
        if (botao.className === 'fa fa-pause') {
            botao.className = 'fa fa-play';
            bplay.firstChild.data = 'PLAY';
        }
    }

    handleVolumeChange() {
        if (audio.volume > 0) {
            audio.muted = false;
        }
    }

    handleError() {
        const confirmacao = confirm('Stream Down / Network Error. \nClick OK to try again.');
        if (confirmacao) {
            window.location.reload();
        }
    }
}

document.getElementById('volume').oninput = function () {
    audio.volume = intToDecimal(this.value);
    const page = new Page();
    page.changeVolumeIndicator(this.value);
};

function togglePlay() {
    const playerButton = document.getElementById("playerButton");
    const isPlaying = playerButton.classList.contains("fa-pause-circle");

    if (isPlaying) {
        playerButton.classList.remove("fa-pause-circle");
        playerButton.classList.add("fa-play-circle");
        playerButton.style.textShadow = "0 0 5px black";
        audio.pause();
    } else {
        playerButton.classList.remove("fa-play-circle");
        playerButton.classList.add("fa-pause-circle");
        playerButton.style.textShadow = "0 0 5px black";
        audio.load();
        audio.play();
    }
}

function volumeUp() {
    if (audio && audio.volume < 1) {
        audio.volume = Math.min((audio.volume + 0.01).toFixed(2), 1);
    }
}

function volumeDown() {
    if (audio && audio.volume > 0) {
        audio.volume = Math.max((audio.volume - 0.01).toFixed(2), 0);
    }
}

function mute() {
    const volume = audio.muted ? localStorage.getItem('volume') || 80 : 0;
    document.getElementById('volIndicator').innerHTML = volume;
    document.getElementById('volume').value = volume;
    audio.volume = intToDecimal(volume);
    audio.muted = !audio.muted;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const slideVolume = document.getElementById('volume');
    const page = new Page();

    switch (key) {
        case 'ArrowUp':
            volumeUp();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        case 'ArrowDown':
            volumeDown();
            slideVolume.value = decimalToInt(audio.volume);
            page.changeVolumeIndicator(decimalToInt(audio.volume));
            break;
        case ' ':
        case 'Spacebar':
        case 'p':
        case 'P':
            togglePlay();
            break;
        case 'm':
        case 'M':
            mute();
            break;
        default:
            if (/^[0-9]$/.test(key)) {
                const volumeValue = parseInt(key);
                audio.volume = volumeValue / 10;
                slideVolume.value = volumeValue * 10;
                page.changeVolumeIndicator(volumeValue * 10);
            }
    }
});

function intToDecimal(vol) {
    return vol / 100;
}

function decimalToInt(vol) {
    return vol * 100;
}
