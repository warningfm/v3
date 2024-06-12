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
        const Commercial_Break = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibcs6vIO8Vba2tDSU0hUJP3hs91nM0creXY3ZIOdj-q5YWXxZp_X5R7nSCwaxWd-K_erlfIkdDH9CvgXfKr-gUmJ_JzNLyohKv0eLqxHUhWfO7hOjgcQ95D4dFOFlsV_rTmGYFJ-13tU0GUeis_VPd2SWxrRNhCYMPusLfZ_U5g4W4jg1ONV3aT8UaPTqJ/s1600/gMzoJtq.jpg';
        const JINGLESETELAHIKLAN = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7LcmmE4HMmFeQYRqMJsfOlI7qtoBGpvk2Y2aMm1XSpQ_FcIZWELwnh-8ykQy9s05Qlz5nFgJAQy2zTZn_k3G8DtVQwWTlgDIEZeqm3mas2VCv-36CklyI5D4QZkF_EzD8eq7DcwqmTsndHC17wGUCVltPbyWqWSKoODfbKwg_D73Q4wEASuu77Xb-BugP/s1600/dbwvp4y.png';
        const TS = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoYOoThYoQy_1IHIOkOWhSv7ZumvhWQVgCCUAa1PtItmRqi7LpFLBOlRVnmMJvjw2_m91utqlbmj_XRJzqxROWHC5fJqk664UghWdsbX_sqI4vMFue3Ii68m4cfh5kQNAWFM6v4YGjSyP1TdH1SySeBmMx9Ewaeyyu5qhTcon4wKP0VFY9KxHvJrEScFED/s1600/P8KFcGD.png';
        const BintangTenggara = 'https://cdn.bintangtenggarafm.com/img/f69c7be1aa497aaa87f40d2306c4b3577.png';
        const Dengarkami = 'https://warningfm.github.io/v3/img/yx3lPLHp_t.jpg';
        const jingle = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwRqAS90NVntGw3KRvRy8ZfMmOWAUH6r7-0fDph8OXZE5aOEE8VHnvNP4DqpPNTOaQ6eqJJUpyW-QG9092-UjOCnbw4hzHXkZ4q4_68WeZHMqWHcUW6qV42XVK-EJhiqNSLXwveYZnUGWuSs6QOy0bz2omDTyrE-yUay1TbClQS5a91JjyKskyNtWT0bRo/s1600/ed6F7ZU.jpg';
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
        const Kirana_Setio = 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9c/43/2e/9c432e8e-15ec-e94f-35f3-8322ca48bab3/artwork.jpg/1200x1200bf-60.jpg';
        const Fadly_Ft_Natasha = 'https://i.scdn.co/image/ab67616d0000b2737022d4a537820482e1034044';
        const Alma_Esbeye = 'https://i.scdn.co/image/ab67616d0000b2739e7d30df02b301c12516ca65'; 
        const TAHUKAH_ANDA = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxAJ1sodtny4phVNn5gBDdaT9a_vgRaMfqSwZYFSJ82OoQDJgBmf9GILFpvJp440vMTSZzOR19Fs5-PIFrkMCOMD_QVXJieodRVrWRblE4m-_uwgzjk1_kZFY5F-c-ElZvU8k7tcU-Kpp_lWnnpj_a_f8yIc4A21NmlP7pim9NJDLUS2ttWtIPXvAkm4if/s1600/CeeDxW74_t.jpg'; 
        const Alfina_Nindiyani  = 'https://i.scdn.co/image/ab67616d0000b273946b5d7310dc575af58ac613'; 
        const OPENING  = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grand-opening-design-template-3a37c804c55cf85d2ba959af479c656d_screen.jpg?ts=1575735007'; 
        const TS_MAGHRIB  = 'https://thumbs2.imgbox.com/ee/79/665Dlrr2_t.jpg'; 
        const CLOSING  = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvJpO-eAcjIJ4w2y6YQMxNpaB7FEO9Z_GqZUDsp97gEg3BtCVGePx0vX56MiTTpsnVpjm8xoUif8ifFQFYNcfcJihj-rWw-1ik3rhtU5hDJ1uyy184-w7U6Gmisnp58bcOFIeS9lxFEg7RI_VenietESGTzEgnz5TBkYH9WBvpD-aylJtfqfyqGwm93L1a/s1600/ms5QoI6.jpg'; 
        const Alda_Risma  = 'https://i.pinimg.com/736x/dd/03/f6/dd03f6bd9ef00663800fcf5ac957967a.jpg'; 
        const PERISTIWA_HARI_INI  = 'https://cdn.bintangtenggarafm.com/img/nTZlhHe.jpg'; 
        const Mayang_Sari  = 'https://i.scdn.co/image/ab67616d0000b2733deb71f184e845a821d500d6'; 
        const Samsons = 'https://images.genius.com/6ef0ad66be031798666d9f8e2305aca9.640x640x1.jpg'; 
        const TANDA_WAKTU_SHOLAT_ISYA = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzt-WdylfzOt4IZmb5vj6PbWsGNOGpV8YlrDTs7fejgDXPUhPI3BZ46RGlcEQGZJ9odFY0F6b9nNLHLHkXQRv8ihvehx7hIv6fz9gsclWh-gA22pMZuoVZNQvralLXFH6DLGAuAIWN400HhQkL3XmycIIopi0EZCT8TqTdhpFUYSMsFrz-jGhGOtluDwW3/s1600/uSKMZns.jpg'; 
        const Anisa_Rahman = 'https://i.scdn.co/image/ab67616d0000b273948e6ac1d0bc98d8269b9697'; 
        const Anggun = 'https://i.scdn.co/image/ab67616d0000b273068bcbbb986ad0ee76c02f76'; 
        
        if (artist == 'FRATELLO') {var urlCoverArt = FRATELLO;}
            else if (artist == 'Commercial Break') {var urlCoverArt = Commercial_Break;}
            else if (artist == 'JINGLE SETELAH IKLAN') {var urlCoverArt = JINGLESETELAHIKLAN;}
            else if (artist == 'TS') {var urlCoverArt = TS;}
            else if (artist == 'Bintang Tenggara') {var urlCoverArt = BintangTenggara;}
            else if (artist == 'DENGAR KAMI') {var urlCoverArt = Dengarkami;}
            else if (artist == 'JINGLE') {var urlCoverArt = jingle;}
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
            else if (artist == 'Kotak') {var urlCoverArt = Kotak;}
            else if (artist == 'Kirana Setio') {var urlCoverArt = Kirana_Setio;}
            else if (artist == 'Alma Esbeye') {var urlCoverArt = Alma_Esbeye;} 
            else if (artist == 'TAHUKAH ANDA') {var urlCoverArt = TAHUKAH_ANDA;} 
            else if (artist == 'Alfina Nindiyani') {var urlCoverArt = Alfina_Nindiyani;} 
            else if (artist == 'OPENING') {var urlCoverArt = OPENING;} 
            else if (artist == 'TS MAGHRIB') {var urlCoverArt = TS_MAGHRIB;} 
            else if (artist == 'CLOSING') {var urlCoverArt = CLOSING;} 
            else if (artist == 'Alda Risma') {var urlCoverArt = Alda_Risma;} 
            else if (artist == 'PERISTIWA HARI INI') {var urlCoverArt = PERISTIWA_HARI_INI;} 
            else if (artist == 'Mayang Sari') {var urlCoverArt = Mayang_Sari;} 
            else if (artist == 'Samsons') {var urlCoverArt = Samsons;} 
            else if (artist == 'TANDA WAKTU SHOLAT ISYA') {var urlCoverArt = TANDA_WAKTU_SHOLAT_ISYA;} 
            else if (artist == 'Anisa Rahman') {var urlCoverArt = Anisa_Rahman;} 
            else if (artist == 'Anggun') {var urlCoverArt = Anggun;} 
        // Default cover art
        else {var urlCoverArt = DEFAULT_COVER_ART;}
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
