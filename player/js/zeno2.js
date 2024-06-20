

const RADIO_NAME = 'mbah nunung Online';

// SELECT ARTWORK PROVIDER, ITUNES, DEEZER & SPOTIFY  eg : spotify 
// var API_SERVICE = 'spotify';

//PASTE YOUR MEDIA CP JSON URL HERE TO GET NOW PLAYING SONG TITLE.
const MEDIACP_JSON_URL = '' 

const DEFAULT_COVER_ART = 'https://i.imgur.com/y9mWiAx.png';

// Change Stream URL Here, Supports, ZENO
const URL_STREAMING = 'https://stream.zeno.fm/n4gzbe9ufzzuv';

const url = 'https://api.zeno.fm/mounts/metadata/subscribe/n4gzbe9ufzzuv';

// Visit https://api.vagalume.com.br/docs/ to get your API key
const API_KEY = "18fe07917957c289983464588aabddfb";

// Variable to control history display: true = display / false = hides
let showHistory = true; 

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
function Page() {
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
    }

    this.refreshHistoric = function (info, n) {
        var $historicDiv = document.querySelectorAll('#historicSong article');
        var $songName = document.querySelectorAll('#historicSong article .music-info .song');
        var $artistName = document.querySelectorAll('#historicSong article .music-info .artist');

        // Default cover art
        var urlCoverArt = DEFAULT_COVER_ART;

        // Get cover art for song history
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                var artworkUrl100 = (data.resultCount) ? data.results[0].artworkUrl100 : urlCoverArt;

                document.querySelectorAll('#historicSong article .cover-historic')[n].style.backgroundImage = 'url(' + artworkUrl100 + ')';
            }
            // Formating characters to UTF-8
            var music = info.song.replace(/&apos;/g, '\'');
            var songHist = music.replace(/&amp;/g, '&');

            var artist = info.artist.replace(/&apos;/g, '\'');
            var artistHist = artist.replace(/&amp;/g, '&');

            $songName[n].innerHTML = songHist;
            $artistName[n].innerHTML = artistHist;

            // Add class for animation
            $historicDiv[n].classList.add('animated');
            $historicDiv[n].classList.add('slideInRight');
        }
        xhttp.open('GET', 'https://itunes.apple.com/search?term=' + artist + ' ' + song + '&media=music&limit=1', true);
        xhttp.send();

        setTimeout(function () {
            for (var j = 0; j < 2; j++) {
                $historicDiv[j].classList.remove('animated');
                $historicDiv[j].classList.remove('slideInRight');
            }
        }, 2000);
    }
   
  // Artist Covers - Below 
  this.refreshCover = function (song = '', artist) {
        const Commercial_Break = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibcs6vIO8Vba2tDSU0hUJP3hs91nM0creXY3ZIOdj-q5YWXxZp_X5R7nSCwaxWd-K_erlfIkdDH9CvgXfKr-gUmJ_JzNLyohKv0eLqxHUhWfO7hOjgcQ95D4dFOFlsV_rTmGYFJ-13tU0GUeis_VPd2SWxrRNhCYMPusLfZ_U5g4W4jg1ONV3aT8UaPTqJ/s1600/gMzoJtq.jpg';
        const JINGLESETELAHIKLAN = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7LcmmE4HMmFeQYRqMJsfOlI7qtoBGpvk2Y2aMm1XSpQ_FcIZWELwnh-8ykQy9s05Qlz5nFgJAQy2zTZn_k3G8DtVQwWTlgDIEZeqm3mas2VCv-36CklyI5D4QZkF_EzD8eq7DcwqmTsndHC17wGUCVltPbyWqWSKoODfbKwg_D73Q4wEASuu77Xb-BugP/s1600/dbwvp4y.png';
        const TS = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoYOoThYoQy_1IHIOkOWhSv7ZumvhWQVgCCUAa1PtItmRqi7LpFLBOlRVnmMJvjw2_m91utqlbmj_XRJzqxROWHC5fJqk664UghWdsbX_sqI4vMFue3Ii68m4cfh5kQNAWFM6v4YGjSyP1TdH1SySeBmMx9Ewaeyyu5qhTcon4wKP0VFY9KxHvJrEScFED/s1600/P8KFcGD.png';
        const Bintang_Tenggara = 'img/fF8yUE0.png';
        const Dengarkami = 'https://warningfm.github.io/v3/img/yx3lPLHp_t.jpg';
        const JINGLE = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwRqAS90NVntGw3KRvRy8ZfMmOWAUH6r7-0fDph8OXZE5aOEE8VHnvNP4DqpPNTOaQ6eqJJUpyW-QG9092-UjOCnbw4hzHXkZ4q4_68WeZHMqWHcUW6qV42XVK-EJhiqNSLXwveYZnUGWuSs6QOy0bz2omDTyrE-yUay1TbClQS5a91JjyKskyNtWT0bRo/s1600/ed6F7ZU.jpg';
        const TANDAWAKTUSHOLATDHUHUR = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2F9RU0k7w_EWKjhsDP-YJAfCnFxFzW21G8mqmiSDSf-J5ocGv4yOjb5nuGFhlJW9iBAPWgjEn4jhr-bt-CK84RGFtJf6JneNMZgpbYV1Mi-mwbr7rzeu77mm-MqL7rbk_8O5sduTnGPdMj000VGVCbGc_gR1IgAr6-FrDcXpg-vun-lebVxtLEnuGAwUz/s1600/m2iqnIm.jpg';
        const ASHAR = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAkb2u1BXZyewCrcabezpQsAP5OVlOJBW1bSR2VD3Ct497ubsePRslOC74TCSna3aKQoPo8j_oPsX0UZpC1Qau0-pztX0uH66cuxA2F017wwnoFXYauEwaJPiqLEjtepu4PH0xxwVVIXExDIRCw7yWREoGPxQ5pN-gLftIwtSJD7fcUOgeuGMtGAyR-RYu/s1600/uJr1nZIi_t.jpg';
        const ADZANMAGHRIB = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNqNb72rVTrjbv4OaLt1qAFkjySlaFJp34YyC_XJ6RNtoBXq_bYSp8cmubhyphenhyphenKBUxxytuneVwHHCSMmomBwSYN4LdmH6QXTV1e5YIkjTS0677w_lnuMqX3isz5WIhFO_6pAHJriBkQyevuv5AgH1_hpsoQYsliB_5KsyFzXi2STQ9GGKWIB9l5IiAg8_uuc/s1600/sXTgm2j.jpg';
        const OpeningRadio = 'https://cdn.bintangtenggarafm.com/img/oJTOhsL.jpg';
        const LAGUPENUTUPRADIO = 'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/ec/3f/64/ec3f643b-0ffd-eb61-9ccf-c8d2c027594f/3ad3589a-548e-4b13-970c-83a2937c7d5c.jpg/1200x1200bb.jpg';
        const Citizen = 'https://thumbs2.imgbox.com/b1/29/LxXCnvNr_t.jpg';
        const JELAJAHDESA = 'https://thumbs2.imgbox.com/7e/dc/vOGdajpd_t.jpg';
        const WISATABUDAYA = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj76_ShbSLBp_jr_Og-mX5b-010-7qIIEPM3ZZeN84zyldmyMX2NS-yLfMPZLa46N7tBFwX8EKlwbUe-9wqU6U_0FO2jV54YFdV0AEvhW0r8jAa5YAE-5TCHgS-uB2HUVHHj0MN9P8xhg5jHAFY-3tMvD_u1BvHdUScYgev4ZcBSCrepzs_75lcKn4dAOdN/s1600/G8Qnr1y.jpg';
        const SHOLAWAT = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIpqY48J4bs8uxDW02DXU_87iAkbYboTn0pxJQ5p0wyoQKt4YYr7BnqczK2UhAcbHkeUyM2m-5IHhUD_jTvWts-7HPMgRU1s4ZJsstS-Kq74NNqHRgsdxkrUoEGhttVFPkCjjR_O766XT_r1WaC2kcUgwkAP9zWSXLzvocqlz-0Y8NU3ViCiC-T9Jfb5bz/s1600/Wf3SDEt.png';
        const RadioBintangTenggara = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLSPAs-qRbddzeii-poy3k5Tsz26fYDw8AFeK04iNOxM1HCD6zMOmi5i9bhK6FBGDree32YzCUhiThpyFYr5Cd9A4yiHlOH9MnYPlH3psMW_zzRL0I6yCuMuAA1RvFfGSJEsY0UY3kQjG8xUDSarEVEWBdFS046suoDe25Ar0K8izBvMwrJIZl-aJ_U_1I/s1600/fF8yUE0.png';
        const AlffyRev  = 'https://i.scdn.co/image/ab67616d0000b273d0572746e75788f3a073899b';
        const Ajeng = 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/e5/47/cf/e547cfe3-f707-7175-9123-b640435f6a8c/cover.jpg/1200x1200bb.jpg';
        const Agnes_Monica = 'https://i.scdn.co/image/ab6761610000e5eb09160e5ffdc256e65713a8a9';
        const INNA_Ft_Yandel = 'https://i1.sndcdn.com/artworks-000060831547-7emuqa-t500x500.jpg';
        const SOLUSI_SEHAT = 'https://images2.imgbox.com/f8/ca/GwuLQxLZ_o.jpg';
        const Ari_Lasso = 'https://i.scdn.co/image/ab6761610000e5eb4e1ed336c3ff93a95fa44e14';
        const Gracie_Abrams = 'https://i.scdn.co/image/ab67616d0000b2733be2b12525a2f506780901a3';
        const Andmesh = 'https://i1.sndcdn.com/artworks-000644192974-fr8aja-t500x500.jpg';
        const Dewa_19_Ft_Virzha = 'https://i.scdn.co/image/ab67616d0000b2734383e26d01a2dd18452b7b37';
        const Dewa_19_Ft_Ello = 'https://i.scdn.co/image/ab67616d0000b2730b591f8644a5a5106169a30a';
        const Libianca_Ft_Cian_Ducrot = 'https://i.scdn.co/image/ab67616d0000b273d14949518f0851b6d9e61eeb';
        const TRIAD = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9VTihL_Wl56YYsKExxz0JJk3GD8LS6roXDK7lz01orNPSLAOpUxVMdSOcKeI3LzUDHnhUFAgvfZmOyyeq-52UEqVkIaA9wzioIrgRvIP8cuCyywILD3-IVphe-VpLF4d6WMyH4jROrHICBlTTb1mMj20ezaD_Ue9GJ_nNOb3I4LsSCbIGNkmoxvvpv6Ov/s1600/2281e5d180adff9b.jpg';
        const Kotak = 'https://i.scdn.co/image/ab67616d0000b273db843f40730bee6fb77ecb13';
        const Adistya = 'https://i.scdn.co/image/ab67616d0000b273cac7c5e2d5bf5e61ebcbfae1';
        const DemyYoker = 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c6/6d/ba/c66dba5b-2972-3f16-ba13-f21eb6705287/cover.jpg/1200x1200bb.jpg';
        const Rozy = 'https://yt3.googleusercontent.com/k3FluG3Cks7LH-1dveRTySBs2p7dUgvdDbV_Cd5wE7njxyyiGBL9brJ7xGHaZ5GY6ocrVv-9dg=s900-c-k-c0x00ffffff-no-rj';
        const Reny = 'https://viberatecdn.blob.core.windows.net/entity/artist/reny-farida-sWRmh';
        const Kurnia_Dewi = 'https://i.imgur.com/9H315Oi.jpg';
        const AlviAnanta = 'https://joox-cms-image-1251316161.file.myqcloud.com/2021/09/28/8cbaa312-151c-4ba3-b28e-52c5be1c2766.jpg/500';
        const Catur_Arum  = 'https://i1.sndcdn.com/artworks-000227858822-l8w6ww-t500x500.jpg'; 
        const Syahiba_Saufa_Ft_Shinta_Arsinta = 'https://i.scdn.co/image/ab67616d0000b2737dd4ba70910664a26fb1c7e0'; 
        const Lusiana = 'https://id-test-11.slatic.net/p/60eb11ec48bf720ce80a1bab4065e08d.jpg'; 
        const Suliyana = 'https://i.scdn.co/image/ab67616d0000b2733e4c6986797db1877c5be37d';
        const Syahiba = 'https://i.scdn.co/image/ab67616d0000b27378fdcad5374c66bd8f7321c5'; 
        const OmpRock = 'https://i1.sndcdn.com/artworks-000069866100-96taaq-t500x500.jpg';
        const Virgia_Hassan = 'https://i.ytimg.com/vi/g3A7Cp2yAro/maxresdefault.jpg';
        const Anisa_Rahman = 'https://i.scdn.co/image/ab67616d0000b273948e6ac1d0bc98d8269b9697'; 
        const Anggun = 'https://i.scdn.co/image/ab67616d0000b273068bcbbb986ad0ee76c02f76'; 
        
        if (artist == 'FRATELLO') {var urlCoverArt = FRATELLO;}
            else if (artist == 'Commercial Break') {var urlCoverArt = Commercial_Break;}
            else if (artist == 'JINGLE SETELAH IKLAN') {var urlCoverArt = JINGLESETELAHIKLAN;}
            else if (artist == 'TS') {var urlCoverArt = TS;}
            else if (artist == 'Bintang Tenggara') {var urlCoverArt = Bintang_Tenggara;}
            else if (artist == 'DENGAR KAMI') {var urlCoverArt = Dengarkami;}
            else if (artist == 'JINGLE') {var urlCoverArt = JINGLE;}
            else if (artist == 'TANDA WAKTU SHOLAT DHUHUR') {var urlCoverArt = TANDAWAKTUSHOLATDHUHUR;}
            else if (artist == 'TANDA WAKTU SHOLAT ASHAR') {var urlCoverArt = ASHAR;}
            else if (artist == 'ADZAN MAGHRIB') {var urlCoverArt = ADZANMAGHRIB;}
            else if (artist == 'Opening Radio') {var urlCoverArt = OpeningRadio;}
            else if (artist == 'LAGU PENUTUP RADIO') {var urlCoverArt = LAGUPENUTUPRADIO;}
            else if (artist == 'Citizen Journalism') {var urlCoverArt = Citizen;}
            else if (artist == 'JELAJAH DESA') {var urlCoverArt = JELAJAHDESA;}
            else if (artist == 'WISATA BUDAYA') {var urlCoverArt = WISATABUDAYA;}
            else if (artist == 'SHOLAWAT THIBBIL QULUB') {var urlCoverArt = SHOLAWAT;}
            else if (artist == 'Radio Bintang Tenggara') {var urlCoverArt = RadioBintangTenggara;}
            else if (artist == 'Alffy Rev') {var urlCoverArt = AlffyRev;}
            else if (artist == 'Ajeng') {var urlCoverArt = Ajeng;}
            else if (artist == 'Agnes Monica') {var urlCoverArt = Agnes_Monica;}
            else if (artist == 'INNA Ft Yandel') {var urlCoverArt = INNA_Ft_Yandel;}
            else if (artist == 'SOLUSI SEHAT') {var urlCoverArt = SOLUSI_SEHAT;}
            else if (artist == 'Ari Lasso') {var urlCoverArt = Ari_Lasso;}
            else if (artist == 'Gracie Abrams') {var urlCoverArt = Gracie_Abrams;}
            else if (artist == 'Andmesh') {var urlCoverArt = Andmesh;}
            else if (artist == 'Dewa 19 Ft Virzha') {var urlCoverArt = Dewa_19_Ft_Virzha;}
            else if (artist == 'Dewa 19 Ft Ello') {var urlCoverArt = Dewa_19_Ft_Ello;}
            else if (artist == 'Fadly Ft Natasha') {var urlCoverArt = Fadly_Ft_Natasha;}
            else if (artist == 'T.R.I.A.D') {var urlCoverArt = TRIAD;}
            else if (artist == 'Adistya Mayasari') {var urlCoverArt = Adistya;}
            else if (artist == 'Demy Yoker') {var urlCoverArt = DemyYoker;}
            else if (artist == 'Rozy Abdillah') {var urlCoverArt = Rozy;} 
            else if (artist == 'Reny Farida') {var urlCoverArt = Reny;} 
            else if (artist == 'Kurnia Dewi') {var urlCoverArt = Kurnia_Dewi;} 
            else if (artist == 'Alvi Ananta') {var urlCoverArt = AlviAnanta;} 
            else if (artist == 'Catur Arum') {var urlCoverArt = Catur_Arum;} 
            else if (artist == 'Syahiba Saufa Ft. Shinta Arsinta') {var urlCoverArt = Syahiba_Saufa_Ft_Shinta_Arsinta;} 
            else if (artist == 'Lusiana Safara') {var urlCoverArt = Lusiana;} 
            else if (artist == 'Suliyana') {var urlCoverArt = Suliyana;} 
            else if (artist == 'Syahiba Saufa') {var urlCoverArt = Syahiba;} 
            else if (artist == 'OmpRock') {var urlCoverArt = OmpRock;} 
            else if (artist == 'Virgia Hassan') {var urlCoverArt = Virgia_Hassan;} 
            else if (artist == 'Anisa Rahman') {var urlCoverArt = Anisa_Rahman;} 
            else if (artist == 'Anggun') {var urlCoverArt = Anggun;} 
        // Default cover art
        else {var urlCoverArt = DEFAULT_COVER_ART;}
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var coverArt = document.getElementById('currentCoverArt');
            var coverBackground = document.getElementById('bgCover');

           // Get cover art URL on iTunes API
            if (this.readyState === 4 && this.status === 200) {
                var data = JSON.parse(this.responseText);
                var artworkUrl100 = (data.resultCount) ? data.results[0].artworkUrl100 : urlCoverArt;

                // Se retornar algum dado, alterar a resolução da imagem ou definir a padrão
                urlCoverArt = (artworkUrl100 != urlCoverArt) ? artworkUrl100.replace('100x100bb', '640x640bb') : urlCoverArt;
                var urlCoverArt96 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '96x96bb') : urlCoverArt;
                var urlCoverArt128 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '128x128bb') : urlCoverArt;
                var urlCoverArt192 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '192x192bb') : urlCoverArt;
                var urlCoverArt256 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '256x256bb') : urlCoverArt;
                var urlCoverArt384 = (artworkUrl100 != urlCoverArt) ? urlCoverArt.replace('512x512bb', '384x384bb') : urlCoverArt;

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
                        artwork: [{
                                src: urlCoverArt96,
                                sizes: '96x96',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt128,
                                sizes: '128x128',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt192,
                                sizes: '192x192',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt256,
                                sizes: '256x256',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt384,
                                sizes: '384x384',
                                type: 'image/png'
                            },
                            {
                                src: urlCoverArt,
                                sizes: '512x512',
                                type: 'image/png'
                            }
                        ]
                    });
                }
            }
        }
        xhttp.open('GET', 'https://itunes.apple.com/search?term=' + artist + ' ' + song + '&media=music&limit=1', true);
        xhttp.send();
    }

    this.changeVolumeIndicator = function (volume) {
        document.getElementById('volIndicator').innerHTML = volume;

        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('volume', volume);
        }
    }

    this.setVolume = function () {
        if (typeof (Storage) !== 'undefined') {
            var volumeLocalStorage = (!localStorage.getItem('volume')) ? 80 : localStorage.getItem('volume');
            document.getElementById('volume').value = volumeLocalStorage;
            document.getElementById('volIndicator').innerHTML = volumeLocalStorage;
        }
    }

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
                    (document.getElementsByClassName('modal-backdrop')[0]) ? document.getElementsByClassName('modal-backdrop')[0].remove(): '';
                }
            } else {
                document.getElementsByClassName('lyrics')[0].style.opacity = "0.3";
                document.getElementsByClassName('lyrics')[0].removeAttribute('data-toggle');
            }
        }
        xhttp.open('GET', 'https://api.vagalume.com.br/search.php?apikey=' + API_KEY + '&art=' + currentArtist + '&mus=' + currentSong.toLowerCase(), true);
        xhttp.send()
    }
}

var audio = new Audio(URL_STREAMING); 

function getStreamingData(data) {

    console.log("Content of received data:", data);
    // Parse JSON
    var jsonData = JSON.parse(data);

    var page = new Page();

    // Format characters to UTF-8
    let song = jsonData.currentSong.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');
    let artist = jsonData.currentArtist.replace(/&apos;/g, '\'').replace(/&amp;/g, '&');

    // Change the title
    document.title = artist + ' - ' + song + ' | ' + RADIO_NAME;

    page.refreshCover(song, artist);
    page.refreshCurrentSong(song, artist);
    page.refreshLyric(song, artist);

    if (showHistory) {

        // Check if the song is different from the last updated one
        if (musicHistory.length === 0 || (musicHistory[0].song !== song)) {
            // Update history with new song
            updateMusicHistory(artist, song);
        }

        // Update the history interface
        updateHistoryUI();

    }
}

function updateHistoryUI() {
    let historicElement = document.querySelector('.historic');
    if (showHistory) {
      historicElement.classList.remove('hidden'); // Show history
    } else {
      historicElement.classList.add('hidden'); // Hide history
    }
}

// Global variable to store the history of the last two songs
var musicHistory = [];

// Function to update the history of the last two songs
function updateMusicHistory(artist, song) {
    // Adicionar a nova música no início do histórico
    musicHistory.unshift({ artist: artist, song: song });

    // Keep only the last two songs in history
    if (musicHistory.length > 4) {
        musicHistory.pop(); // Remove the oldest song from the history
    }

    // Call function to display updated history
    displayHistory();
}


function displayHistory() {
    var $historicDiv = document.querySelectorAll('#historicSong article');
    var $songName = document.querySelectorAll('#historicSong article .music-info .song');
    var $artistName = document.querySelectorAll('#historicSong article .music-info .artist');

    // Display the last two songs in history, starting from index 1 to delete the current song
    for (var i = 1; i < musicHistory.length && i < 3; i++) {
        $songName[i - 1].innerHTML = musicHistory[i].song;
        $artistName[i - 1].innerHTML = musicHistory[i].artist;

        // Call the function to search for the song cover in the Deezer API
        refreshCoverForHistory(musicHistory[i].song, musicHistory[i].artist, i - 1);

        // Add class for animation
        $historicDiv[i - 1].classList.add('animated');
        $historicDiv[i - 1].classList.add('slideInRight');
    }

    // Remove animation classes after 2 seconds
    setTimeout(function () {
        for (var j = 0; j < 2; j++) {
            $historicDiv[j].classList.remove('animated');
            $historicDiv[j].classList.remove('slideInRight');
        }
    }, 2000);
}

// Function to update song cover in history
function refreshCoverForHistory(song, artist, index) {
    // Creation of the script tag to make the JSONP request to the Deezer API
    const script = document.createElement('script');
    script.src = `https://api.deezer.com/search?q=${encodeURIComponent(artist)} ${encodeURIComponent(song)}&output=jsonp&callback=handleDeezerResponseForHistory_${index}`;
    document.body.appendChild(script);

    // Deezer API response handling function for music history
    window['handleDeezerResponseForHistory_' + index] = function (data) {
        if (data.data && data.data.length > 0) {
            // Update cover by artist name
            // var artworkUrl = data.data[0].artist.picture_big;
            // Update cover by song name
            var artworkUrl = data.data[0].album.cover_big;
            // Update song cover in history using correct index
            var $coverArt = document.querySelectorAll('#historicSong article .cover-historic')[index];
            $coverArt.style.backgroundImage = 'url(' + artworkUrl + ')';
        }
    };
}

// Player control
function Player() {
    this.play = function () {
        audio.play();

        var defaultVolume = document.getElementById('volume').value;

        if (typeof (Storage) !== 'undefined') {
            if (localStorage.getItem('volume') !== null) {
                audio.volume = intToDecimal(localStorage.getItem('volume'));
            } else {
                audio.volume = intToDecimal(defaultVolume);
            }
        } else {
            audio.volume = intToDecimal(defaultVolume);
        }
        document.getElementById('volIndicator').innerHTML = defaultVolume;
    };

    this.pause = function () {
        audio.pause();
    };
}

// On play, change the button to pause
audio.onplay = function () {
    var botao = document.getElementById('playerButton');
    var bplay = document.getElementById('buttonPlay');
    if (botao.className === 'fa fa-play') {
        botao.className = 'fa fa-pause';
        bplay.firstChild.data = 'PAUSE';
    }
}

// On pause, change the button to play
audio.onpause = function () {
    var botao = document.getElementById('playerButton');
    var bplay = document.getElementById('buttonPlay');
    if (botao.className === 'fa fa-pause') {
        botao.className = 'fa fa-play';
        bplay.firstChild.data = 'PLAY';
    }
}

// Unmute when volume changed
audio.onvolumechange = function () {
    if (audio.volume > 0) {
        audio.muted = false;
    }
}

audio.onerror = function () {
    var confirmacao = confirm('Stream Down / Network Error. \nClick OK to try again.');

    if (confirmacao) {
        window.location.reload();
    }
}

document.getElementById('volume').oninput = function () {
    audio.volume = intToDecimal(this.value);

    var page = new Page();
    page.changeVolumeIndicator(this.value);
}

function togglePlay() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.load();
        audio.play();
    }
}

function volumeUp() {
    var vol = audio.volume;
    if(audio) {
        if(audio.volume >= 0 && audio.volume < 1) {
            audio.volume = (vol + .01).toFixed(2);
        }
    }
}

function volumeDown() {
    var vol = audio.volume;
    if(audio) {
        if(audio.volume >= 0.01 && audio.volume <= 1) {
            audio.volume = (vol - .01).toFixed(2);
        }
    }
}

function mute() {
    if (!audio.muted) {
        document.getElementById('volIndicator').innerHTML = 0;
        document.getElementById('volume').value = 0;
        audio.volume = 0;
        audio.muted = true;
    } else {
        var localVolume = localStorage.getItem('volume');
        document.getElementById('volIndicator').innerHTML = localVolume;
        document.getElementById('volume').value = localVolume;
        audio.volume = intToDecimal(localVolume);
        audio.muted = false;
    }
}

// Function to handle event wiring
function connectToEventSource(url) {
    // Create a new EventSource instance with the provided URL
    const eventSource = new EventSource(url);

    // Add a listener for the 'message' event
    eventSource.addEventListener('message', function(event) {
        // Call the function to process the received data, passing the URL as well
        processData(event.data, url);
    });

    // Add a listener for the 'error' event
    eventSource.addEventListener('error', function(event) {
        console.error('Erro na conexão de eventos:', event);
        // Tentar reconectar após um intervalo de tempo
        setTimeout(function() {
            connectToEventSource(url);
        }, 1000);
    });
}

// Function to process received data
function processData(data) {
    // Parse JSON
    const parsedData = JSON.parse(data);
    
    // Check if the message is about the song
    if (parsedData.streamTitle) {
        // Extract song title and artist
        let artist, song;
        const streamTitle = parsedData.streamTitle;

        if (streamTitle.includes('-')) {
            [artist, song] = streamTitle.split(' - ');
        } else {
            // If there is no "-" in the string, we consider the title to be just the name of the song
            artist = '';
            song = streamTitle;
        }

        // Create the object with the formatted data
        const formattedData = {
            currentSong: song.trim(),
            currentArtist: artist.trim()
        };

        // Convert the object to JSON
        const jsonData = JSON.stringify(formattedData);

        // Call the getStreamingData function with the formatted data and URL
        getStreamingData(jsonData);
    } else {
        console.log('Mensagem recebida:', parsedData);
    }
}

// Start connecting to the API
connectToEventSource(url);

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
