/*
LUNA RADIO PLAYER V5.20.07.07
https://www.luna-universe.com

Copyright (C) SODAH | JOERG KRUEGER
https://www.sodah.de

*/
(function(d, D) {
    "function" === typeof define && define.amd ? define(["jquery"], D) : d.jQuery ? D(d.jQuery) : D(d.Zepto)
})(this, function(d, D) {
    d.fn.lunaradio = function(m) {
        var w = "string" === typeof m,
            t = Array.prototype.slice.call(arguments, 1),
            K = this;
        m = !w && t.length ? d.extend.apply(null, [!0, m].concat(t)) : m;
        if (w && "_" === m.charAt(0)) return K;
        w ? this.each(function() {
            var G = d(this).data("lunaradio"),
                F = G && d.isFunction(G[m]) ? G[m].apply(G, t) : G;
            if (F !== G && F !== D) return K = F, !1
        }) : this.each(function() {
            d(this).data("lunaradio", new d.lunaradio(this,
                m))
        });
        return K
    };
    d.lunaradio = function(m, w) {
        function t(b, a) {
            if (b === D || "" == b.toString()) b = a;
            return b
        }

        function K() {
            if (!T()) {
                for (; B.lastElementChild;) B.removeChild(B.lastElementChild);
                B.load()
            }
        }

        function G() {
            if (T()) Ga || (B.src = Fa, B.load());
            else {
                var b = document.createElement("source");
                b.src = Fa;
                B.appendChild(b);
                B.load()
            }
            Ga = !0
        }

        function F() {
            B = new Audio;
            B.id = c + "html5audio";
            B.preload = "auto";
            B.addEventListener("timeupdate", function() {
                E("timeupdate: " + B.currentTime);
                0 == B.paused && (d("#" + c + "audiopreloader").fadeOut(0),
                    d("#" + c + "smallaudiopreloader").fadeOut(0))
            }, !1);
            B.addEventListener("loadedmetadata", function() {
                E("loadedmetadata")
            }, !1);
            B.addEventListener("ended", function() {
                K();
                G();
                R && B.play()["catch"](function() {
                    E("error on html5 play")
                });
                E("ended")
            }, !1);
            B.addEventListener("play", function() {
                Sa();
                E("play")
            }, !1);
            B.addEventListener("loadstart", function() {
                R && (d("#" + c + "audiopreloader").fadeIn(0), d("#" + c + "smallaudiopreloader").fadeIn(0));
                E("loadstart")
            }, !1);
            B.addEventListener("waiting", function() {
                d("#" + c + "audiopreloader").fadeIn(0);
                d("#" + c + "smallaudiopreloader").fadeIn(0);
                E("waiting")
            }, !1);
            B.addEventListener("seeked", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                E("seeked")
            }, !1);
            B.addEventListener("canplaythrough", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                d("#" + c + "iconlive, #" + c + "smalliconlive").css({
                    opacity: "1.0"
                });
                E("canplaythrough")
            }, !1);
            B.addEventListener("pause", function() {
                B.currentTime.toFixed(1) < B.duration.toFixed(1) && Ta();
                E("pause: currentTime: " +
                    B.currentTime.toFixed(1) + " duration: " + B.duration.toFixed(1))
            }, !1);
            B.addEventListener("error", function(b) {
                E(B.readyState);
                setTimeout(function() {
                    K();
                    G();
                    R && B.play()["catch"](function() {
                        E("error on html5 play")
                    })
                }, 1E3);
                d("#" + c + "iconlive, #" + c + "smalliconlive").css({
                    opacity: "0"
                })
            }, !0)
        }

        function N(b) {
            var a = document.createElement("link");
            a.type = "text/css";
            a.rel = "stylesheet";
            a.href = "https://fonts.googleapis.com/css?family=" + b;
            document.getElementsByTagName("head")[0].appendChild(a)
        }

        function P() {
            var b = document.getElementById(c);
            b.innerHTML = "";
            d("#" + c).addClass("lunaaudioplayer").css({
                overflow: "hidden",
                display: "block"
            });
            var a = document.createElement("div");
            a.id = c + "containerinside";
            b.appendChild(a);
            d("#" + c + "containerinside").css({
                position: "relative",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                background: kb
            });
            Fa = "true" == lb && "" != ua ? ua + Ha() : Ha();
            F();
            mb(a);
            "big" == ja ? nb(a) : ob(a);
            T() && (d("#" + c + "buttonvolumeoff, #" + c + "buttonvolumeon, #" + c + "volumegrab, #" + c + "textvolumeend, #" + c + "volumewrapper").css({
                display: "none"
            }), d("#" + c + "smallvolumegrab, #" +
                c + "smalltextvolume, #" + c + "smalliconvolume").css({
                display: "none"
            }));
            b = "ie" == ka.browser.name.toLowerCase() && 12 > parseInt(ka.browser.version) ? !0 : !1;
            b && d("#" + c + "backgroundimage").css({
                display: "none"
            });
            Ua();
            d(window).resize(function() {
                Ua(!1)
            });
            la();
            "true" == za ? (za = "false", z(ma, ""), za = "true") : z(ma, "");
            e();
            setInterval(function() {
                e()
            }, pb)
        }

        function e() {
            switch (fa) {
                case "ownmetadataurl":
                    H();
                    break;
                case "stream-icy-meta":
                    Q();
                    break;
                default:
                    switch (Va) {
                        case "icecast2":
                            J();
                            break;
                        case "shoutcast2":
                            na();
                            break;
                        case "radionomy":
                            S();
                            break;
                        case "radiozeno":
                            Rz();
                            break;
                        case "radiojar":
                            Aa();
                            break;
                        case "radioco":
                            Ba()
                    }
            }
        }

        function p(b, a) {
            oa != d("<div/>").html(b).text() && (oa = d("<div/>").html(b).text(), E("New Title: " + oa), d("." + c + "texttitlespan, ." + c + "smalltexttitlespan").html(oa), "" == a ? y() : z(a, ""), Wa(!0))
        }



        function y() {
            if ("" != oa) {
                var b = oa.replace(/ *\([^)]*\) */g, ""),
                    a = b = "https://itunes.apple.com/search?term=" + encodeURIComponent(b) + "&media=music&limit=1",
                    //a = b = "https://itunes.apple.com/search?term=" + encodeURIComponent(b) + "&media=music&limit=1&url=" + encodeURIComponent(Y),
                    h = a,
                    f = "GET";
                T() && (f = "POST", h = Y + "fallback.php", a = b);
                E("ITUNES: " + h);
                d.ajax({
                    dataType: "jsonp",
                    method: f,
                    crossDomain: !0,
                    url: h,
                    data: {
                        url: a
                    },
                    success: function(k) {
                        try {
                            //k = JSON.parse(k);
                            var v = "",
                                A = "";
                            1 == k.results.length ? (v = k.results[0].artworkUrl100, v = v.replace("100x100bb", "600x600bb"), E("COVER: " + v), "" != Xa && (A = k.results[0].trackViewUrl + "&app=itunes&at=" + Xa), z(v, A)) : z(ma, "")
                        } catch (L) {
                            z(ma, "")
                        }
                    },
                    error: function() {
                        z(ma, "")
                    }
                })
            } else z(ma, "")
        }



        function z(b, a) {
            "false" == za && (pa = a, "" != pa ? d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                    cursor: "pointer"
                }) : d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                    cursor: "hand"
                }),
                ha++, 2 < ha && (ha = 1), d("<img/>").attr("src", b).on("load", function() {
                    d(this).remove();
                    d("#" + c + "backgroundimage" + ha + ", #" + c + "coverwrapper" + ha + ", #" + c + "smallcoverwrapper" + ha).css({
                        background: "url(" + b + ")",
                        opacity: "1.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    });
                    1 == ha ? d("#" + c + "backgroundimage2, #" + c + "coverwrapper2, #" + c + "smallcoverwrapper2").css({
                        opacity: "0.0"
                    }) : d("#" + c + "backgroundimage1, #" + c + "coverwrapper1, #" + c + "smallcoverwrapper1").css({
                        opacity: "0.0"
                    })
                }))
        }

        function H() {
            var b = "GET",
                a = qb,
                h = a,
                f = {};
            "corsproxy" == fa && (b = "GET", h = a = ua + a, f = {});
            "fallback" == fa && (b = "POST", h = Y + "fallback.php", f = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: f,
                success: function(k) {
                    p(k, "")
                },
                error: function(k, v, A) {
                    p("", "")
                }
            })
        }

        function Q() {
            var b = Ha();
            d.ajax({
                dataType: "text",
                url: Y + "stream-icy-meta.php",
                method: "POST",
                crossDomain: !0,
                data: {
                    url: b
                },
                success: function(a) {
                    p(a, "")
                },
                error: function(a, h, f) {
                    p("", "")
                }
            })
        }

        function J() {
            var b = "GET",
                a = Z + "/status-json.xsl",
                h = a,
                f = {};
            "corsproxy" == fa && (b = "GET", h = a = ua +
                a, f = {});
            "fallback" == fa && (b = "POST", h = Y + "fallback.php", f = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: f,
                success: function(k) {
                    try {
                        k = JSON.parse(k);
                        var v = {};
                        if (k.icestats.source.length === D) v = k.icestats.source;
                        else
                            for (var A = 0; A < k.icestats.source.length; A++) {
                                var L = k.icestats.source[A].listenurl;
                                Ca == L.substr(L.length - Ca.length, Ca.length) && (v = k.icestats.source[A])
                            }
                        A = k = "";
                        v.hasOwnProperty("title") && (A = v.title);
                        v.hasOwnProperty("artist") && (k = v.artist);
                        "" != k && "" != A ? p(k + " - " + A, "") : "" !=
                            k ? p(k, "") : p(A, "")
                    } catch (I) {
                        E("Error on JSON File: " + I), p("", "")
                    }
                },
                error: function(k, v, A) {
                    E("Error on JSON File: " + v);
                    p("", "")
                }
            })
        }



if (w.metadatatechnic === "corsproxy") {
    
        function na() {
        var b = "GET",
        a = Z + "/currentsong?sid=" + rb,
        h = a,
        f = {};
        "corsproxy" == fa && (b = "GET", h = a = ua + a, f = {});
        "fallback" == fa && (b = "POST", h = Y + "fallback.php", f = {url: a});

        d.ajax({
        dataType: "text",
        method: b,
        crossDomain: !0,
        url: h,
        data: f,
        success: function(k) {
        p(k, "")
        },
        error: function(k, v, A) {
        p("", "")
        }
        })
        }
  
  
} else {

        function na() {
            var b = "GET",
                a = Z + "/stats?json=1&sid=" + rb,
                h = a,
                f = {};
            "corsproxy" == fa && (b = "GET", h = a = ua + a, f = {});
            "fallback" == fa && (b = "POST", h = Y + "fallback.php", f = {
                url: a
            });

            d.ajax({
                dataType: "jsonp",
                method: b,
                crossDomain: !0,
                url: h,
                data: f,
                success: function(k) {
                    p(k.songtitle, "")
                },
                error: function(k, v, A) {
                    p("", "")
                }
            })
        }
        
}


        function S() {
            d.ajax({
                dataType: "xml",
                method: "GET",
                crossDomain: !0,
                url: "https://api.radionomy.com/currentsong.cfm?radiouid=" +
                    sb + "&apikey=" + tb + "&callmeback=yes&type=xml&cover=yes&previous=yes",
                success: function(b) {
                    try {
                        var a = d(b).find("track").find("artists").text();
                        d(b).find("track").find("title").text() != d(b).find("track").find("artists").text() && (a += " - " + d(b).find("track").find("title").text());
                        var h = d(b).find("track").find("cover").text();
                        p(a, h)
                    } catch (f) {
                        p("", "")
                    }
                },
                error: function(b, a, h) {
                    p("", "")
                }
            })
        }


            function Aa() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://www.radiojar.com/api/stations/" + ub + "/now_playing/?rand=" +
                    Math.random(),
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        p(a.artist + " - " + a.title, a.thumb)
                    } catch (h) {
                        p("", "")
                    }
                },
                error: function(b, a, h) {
                    p("", "")
                }
            })
        }


        function Rz() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://tools.zenoradio.com/api/stations/" + zn + "/now_playing/",
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        p(a.artist + " - " + a.title, a.thumb)
                    } catch (h) {
                        p("", "")
                    }
                },
                error: function(b, a, h) {
                    p("", "")
                }
            })
        }

        function Ba() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://public.radio.co/stations/" + vb + "/status",
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        p(a.current_track.title, a.current_track.artwork_url_large)
                    } catch (h) {
                        p("", "")
                    }
                },
                error: function(b, a, h) {
                    p("", "")
                }
            })
        }

        function mb(b) {
            l = document.createElement("canvas");
            l.id = c + "canvas";
            b.appendChild(l);
            d("#" + c + "canvas").css({
                display: "block",
                background: "none",
                position: "absolute",
                top: "0px"
            });
            g = l.getContext("2d")
        }

        function nb(b) {
            var a = document.createElement("div");
            a.id = c + "playerwrapper";
            b.appendChild(a);
            d("#" + c + "playerwrapper").css({
                overflow: "hidden",
                display: "block",
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%"
            });
            wb(a);
            m = document.createElement("div");
            m.id = c + "iconlive";
            a.appendChild(m);
            d("#" + c + "iconlive").css({
                position: "absolute",
                fill: "rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.3)"
            }).html('<svg x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            m = document.createElement("div");
            m.id = c + "buttonvolumeoff";
            a.appendChild(m);
            d("#" + c + "buttonvolumeoff").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: x
            }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).on("click", function() {
                Ia(0)
            }).lunaradiodisableSelection();
            m = document.createElement("div");
            m.id = c + "buttonvolumeon";
            a.appendChild(m);
            d("#" + c + "buttonvolumeon").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: x
            }).html('<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).on("click", function() {
                Ia(100)
            }).lunaradiodisableSelection();
            m = document.createElement("div");
            m.id = c + "buttonanalyzer";
            a.appendChild(m);
            d("#" + c + "buttonanalyzer").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: x
            }).html('<svg  x="0px" y="0px"\t viewBox="0 0 800 800"><path d="M180.3,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V235.8c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v469.1\tC204.7,718.4,193.7,729.4,180.3,729.4"/><path d="M351,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V331.7c0-13.5,11-24.5,24.5-24.5H351c13.5,0,24.5,11,24.5,24.5v373.2\tC375.4,718.4,364.4,729.4,351,729.4"/><path d="M521.9,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V95.1c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v609.8\tC546.3,718.4,535.3,729.4,521.9,729.4"/><path d="M692.1,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V331.7c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v373.2\tC716.6,718.4,705.6,729.4,692.1,729.4"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).on("click", function() {
                "none" != d("#" + c + "buttonshuffle").css("pointer-events") && (qa = parseInt(qa) + 1, 9 < qa && (qa = 0), E("changeanalyzer: " + qa))
            }).lunaradiodisableSelection();
            m = document.createElement("span");
            m.classList.add(c + "textradionamespan");
            a.appendChild(m);
            d("." + c + "textradionamespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": aa,
                color: x
            }).html(Ya);
            m = document.createElement("div");
            m.id = c + "textradioname";
            m.dataset.speed = .5;
            m.dataset.reverse = !0;
            a.appendChild(m);
            d("#" + c + "textradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "text-overflow": "ellipsis",
                "font-family": aa,
                color: x
            }).addClass(c + "textradioname").html(d("." + c + "textradionamespan")).lunaradiodisableSelection();
            m = document.createElement("span");
            m.classList.add(c + "texttitlespan");
            a.appendChild(m);
            d("." + c + "texttitlespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": aa,
                color: x
            }).html("");
            m = document.createElement("div");
            m.id = c + "texttitle";
            m.dataset.speed = .9;
            a.appendChild(m);
            d("#" + c + "texttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "text-overflow": "ellipsis",
                "font-family": aa,
                color: x
            }).addClass(c + "texttitle").html(d("." + c + "texttitlespan")).lunaradiodisableSelection();
            m = document.createElement("div");
            m.id = c + "textvolumeend";
            a.appendChild(m);
            d("#" +
                c + "textvolumeend").css({
                position: "absolute",
                "text-align": "center",
                "font-family": "Roboto",
                color: x
            }).html("100").lunaradiodisableSelection();
            xb(a);
            yb(a);
            T() ? (M = 100, ra(100)) : Ia(Za)
        }

        function Wa(b) {
            if ("true" == zb) {
                var a = "";
                "small" == ja && (a = "small");
                b && d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause());
                d("#" + c + a + "textradioname").width() > d("." +
                    c + a + "textradionamespan").first().width() ? d("#" + c + a + "textradioname").hasClass(c + "Marquee") && (d("#" + c + a + "textradioname").removeClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").data("lunaradioMarquee").pause()) : d("#" + c + a + "textradioname").hasClass(c + "Marquee") || (d("#" + c + a + "textradioname").addClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").lunaradioMarquee());
                d("#" +
                    c + a + "texttitle").width() > d("." + c + a + "texttitlespan").first().width() ? d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause()) : d("#" + c + a + "texttitle").hasClass(c + "Marquee") || (d("#" + c + a + "texttitle").addClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").lunaradioMarquee())
            }
        }

        function yb(b) {
            var a =
                document.createElement("div");
            a.id = c + "pauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "pauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                $a();
                R ? Ja() : Ka()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonplay";
            a.appendChild(b);
            d("#" + c + "buttonplay").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: x
            }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonpause";
            a.appendChild(b);
            d("#" + c + "buttonpause").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: x
            }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).fadeOut(0).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "audiopreloader";
            a.appendChild(b);
            d("#" + c + "audiopreloader").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                fill: x
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function wb(b) {
            var a = document.createElement("div");
            a.id = c + "backgroundimage";
            b.appendChild(a);
            d("#" + c + "backgroundimage").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                "-webkit-filter": "blur(40px)",
                filter: "blur(40px)",
                opacity: "0.5"
            });
            var h = document.createElement("div");
            h.id = c + "backgroundimage1";
            a.appendChild(h);
            d("#" + c + "backgroundimage1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            h = document.createElement("div");
            h.id = c + "backgroundimage2";
            a.appendChild(h);
            d("#" + c + "backgroundimage2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            a = document.createElement("div");
            a.id = c + "coverwrapper";
            b.appendChild(a);
            d("#" + c + "coverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.1)"
            }).on("click",
                function() {
                    "" != pa && window.open(pa)
                }).lunaradiodisableSelection();
            h = document.createElement("div");
            h.id = c + "coverwrapper1";
            a.appendChild(h);
            d("#" + c + "coverwrapper1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            h = document.createElement("div");
            h.id = c + "coverwrapper2";
            a.appendChild(h);
            d("#" + c + "coverwrapper2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            "circle" == Da && (d("#" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                "border-radius": "50%"
            }), d("#" + c + "backgroundimage, #" + c + "backgroundimage1, #" + c + "backgroundimage2").css({
                "border-radius": "50%"
            }))
        }

        function xb(b) {
            var a = document.createElement("div");
            a.id = c + "volumewrapper";
            b.appendChild(a);
            d("#" + c + "volumewrapper").css({
                position: "absolute"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumebackground";
            a.appendChild(b);
            d("#" + c + "volumebackground").css({
                position: "absolute",
                width: "100%",
                background: x
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumefill";
            a.appendChild(b);
            d("#" + c + "volumefill").css({
                position: "absolute",
                width: "0",
                background: q
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumeicon";
            a.appendChild(b);
            d("#" + c + "volumeicon").css({
                position: "absolute",
                top: "0px",
                "border-radius": "50%",
                background: q
            }).lunaradiodisableSelection();
            b = document.createElement("img");
            b.id = c + "volumegrab";
            a.appendChild(b);
            b.src = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D";
            d("#" + c + "volumegrab").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                padding: "0",
                margin: "0"
            }).mouseover(function(h) {
                d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    ba = M
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "volumewrapper").width();
                    M = 100 > ba + h ? ba + h : 100;
                    0 > ba + h && (M = 0);
                    ra(M)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
                }
            })
        }

        function ob(b) {
            E("iniSmallPlayer");
            var a = document.createElement("div");
            a.id = c + "smallplayerwrapper";
            b.appendChild(a);
            d("#" + c + "smallplayerwrapper").css({
                overflow: "hidden",
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%"
            });
            b = document.createElement("div");
            b.id = c + "smallvolumebackground";
            a.appendChild(b);
            d("#" + c + "smallvolumebackground").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                background: "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconlive";
            a.appendChild(b);
            d("#" + c + "smalliconlive").css({
                position: "absolute",
                fill: "rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.3)"
            }).html('<svg x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalltextvolume";
            a.appendChild(b);
            d("#" + c + "smalltextvolume").css({
                position: "absolute",
                "text-align": "right",
                "font-family": "Roboto",
                color: "rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.3)"
            }).html("100").lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconvolume";
            a.appendChild(b);
            d("#" + c + "smalliconvolume").css({
                position: "absolute",
                fill: "rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.3)"
            }).html('<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').lunaradiodisableSelection();
            b = document.createElement("span");
            b.classList.add(c + "smalltextradionamespan");
            a.appendChild(b);
            d("." + c + "smalltextradionamespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": aa,
                color: x
            }).html(Ya);
            b = document.createElement("div");
            b.id = c + "smalltextradioname";
            b.dataset.speed = .5;
            b.dataset.reverse = !0;
            a.appendChild(b);
            d("#" + c + "smalltextradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0 0 10px 0",
                "white-space": "nowrap",
                "text-align": "left",
                "text-overflow": "ellipsis",
                "font-family": aa,
                color: x
            }).addClass(c + "smalltextradioname").html(d("." + c + "smalltextradionamespan")).lunaradiodisableSelection();
            b = document.createElement("span");
            b.classList.add(c + "smalltexttitlespan");
            a.appendChild(b);
            d("." + c + "smalltexttitlespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": aa,
                color: x
            }).html("");
            b = document.createElement("div");
            b.id = c + "smalltexttitle";
            b.dataset.speed = .7;
            a.appendChild(b);
            d("#" + c + "smalltexttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0 0 10px 0",
                "white-space": "nowrap",
                "text-align": "left",
                "text-overflow": "ellipsis",
                "font-family": aa,
                color: x
            }).addClass(c + "smalltexttitle").html(d("." + c + "smalltexttitlespan")).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallvolumegrab";
            a.appendChild(b);
            d("#" + c + "smallvolumegrab").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                cursor: "pointer",
                height: "100%",
                width: "100%",
                padding: "0",
                margin: "0"
            }).mouseover(function(h) {
                d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    ba = M
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "smallvolumegrab").width();
                    M = 100 > ba + h ? ba + h : 100;
                    0 > ba + h && (M = 0);
                    Ea(M)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
                }
            }).lunaradiodisableSelection();
            Ab(a);
            Bb(a);
            T() ? (M = 100, ra(100)) : Cb(Za)
        }

        function Bb(b) {
            var a = document.createElement("div");
            a.id = c + "smallcoverwrapper";
            b.appendChild(a);
            d("#" + c + "smallcoverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.1)"
            }).on("click", function() {
                "" != pa && window.open(pa)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallcoverwrapper1";
            a.appendChild(b);
            d("#" + c + "smallcoverwrapper1").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                transition: "opacity 1s",
                overflow: "hidden",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            b = document.createElement("div");
            b.id = c + "smallcoverwrapper2";
            a.appendChild(b);
            d("#" + c + "smallcoverwrapper2").css({
                position: "absolute",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                overflow: "hidden",
                transition: "opacity 1s",
                opacity: "0.0",
                "background-repeat": "no-repeat",
                "background-size": "cover"
            });
            "circle" == Da && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2").css({
                "border-radius": "50%"
            })
        }

        function Ab(b) {
            var a = document.createElement("div");
            a.id = c + "smallpauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "smallpauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                $a();
                R ? Ja() : Ka()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallbuttonplay";
            a.appendChild(b);
            d("#" + c + "smallbuttonplay").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: x
            }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallbuttonpause";
            a.appendChild(b);
            d("#" + c + "smallbuttonpause").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                transition: "fill 0.5s",
                fill: x
            }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", q)
                }).on("mouseleave", function() {
                d(this).css("fill", x)
            }).fadeOut(0).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smallaudiopreloader";
            a.appendChild(b);
            d("#" + c + "smallaudiopreloader").css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                fill: x
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function ra(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            T() || (B.volume = b / 100);
            var a = d("#" + c + "volumewrapper").width() * b / 100;
            d("#" + c + "volumefill").css({
                width: a + "px"
            });
            d("#" + c + "volumeicon").css({
                left: a - d("#" + c + "volumeicon").width() / 2 + "px"
            });
            d("#" + c + "textvolumeend").html(Math.round(b) + "%")
        }

        function Ea(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 == Math.round(b) ? d("#" + c + "smalliconvolume").html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>') :
                d("#" + c + "smalliconvolume").html('<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>');
            T() || (B.volume = b / 100);
            d("#" + c + "smalltextvolume").html(Math.round(b) + "%");
            b = d("#" + c + "smallvolumegrab").width() * b / 100;
            d("#" + c + "smallvolumebackground").css({
                width: b + "px"
            });
            l.width = b;
            l.height = u
        }

        function ab() {
            C = d("#" + c).width();
            u = d("#" + c).height();
            bb && (u = 80, 959 > C && (u = 60), 599 > C && (u = 40), d("#" + c).css({
                height: u + "px"
            }))
        }

        function Ua() {
            ab();
            if ("big" == ja) {
                l.width = C;
                l.height = u;
                var b = 1 * u / 100,
                    a = u / 2 - 20 - b - 4 * b;
                d("#" + c + "coverwrapper").css({
                    top: u / 4 - a / 2 - b + "px",
                    left: C / 2 - a / 2 - 2 * b + "px",
                    width: a + "px",
                    height: a + "px",
                    border: "solid " +
                        2 * b + "px rgba(" + n(x).r + ", " + n(x).g + ", " + n(x).b + ", 0.2)"
                });
                d("#" + c + "backgroundimage").css({
                    "-webkit-filter": "blur(" + 5 * b + "px)",
                    filter: "blur(" + 5 * b + "px)",
                    top: 14 * b + "px",
                    left: C / 2 - a / 1.25 + "px",
                    width: 1.5 * a + "px",
                    height: 1.5 * a + "px"
                });
                a = u / 8;
                var h = a / 2,
                    f = a * cb,
                    k = a - f,
                    v = u / 2 + b,
                    A = v + f + b,
                    L = A + k + 2 * b,
                    I = L + h,
                    ca = (u - (L + h)) / 2 + L + h - a / 1.25,
                    da = ca + a / 1.25 - h / 2;
                d("#" + c + "textradioname").css({
                    top: v + "px",
                    left: "20px",
                    width: C - 40 + "px",
                    height: f + 2 * b + "px",
                    "font-size": f + "px",
                    "line-height": f + 2 * b + "px"
                });
                d("#" + c + "texttitle").css({
                    top: A + "px",
                    left: "20px",
                    width: C - 40 + "px",
                    height: k + 2 * b + "px",
                    "font-size": k + "px",
                    "line-height": k + 2 * b + "px"
                });
                d("#" + c + "volumewrapper").css({
                    top: L + "px",
                    left: "40px",
                    width: C - 80 + "px",
                    height: h + "px"
                });
                d("#" + c + "volumebackground, #" + c + "volumefill").css({
                    height: h / 4 / 2 + "px",
                    top: h / 2 - h / 4 / 2 + "px",
                    "border-radius": h / 2 / 2 + "px"
                });
                d("#" + c + "volumeicon").css({
                    top: h / 6 + "px",
                    height: h / 2 + "px",
                    width: h / 2 + "px"
                });
                d("#" + c + "buttonvolumeoff").css({
                    top: I + "px",
                    left: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "buttonvolumeon").css({
                    top: I + "px",
                    right: "40px",
                    width: h +
                        "px",
                    height: h + "px"
                });
                d("#" + c + "textvolumeend").css({
                    top: I + "px",
                    right: h + 40 + "px",
                    width: 2 * h + "px",
                    height: h + "px",
                    "font-size": h / 2 + "px",
                    "line-height": h + "px"
                });
                d("#" + c + "pauseplaywrapper").css({
                    top: ca + "px",
                    left: C / 2 - a / 1.25 + "px",
                    width: 1.5 * a + "px",
                    height: 1.5 * a + "px"
                });
                d("#" + c + "iconlive").css({
                    top: da + "px",
                    left: C / 2 + a / 1.25 + 20 + "px",
                    height: h + "px",
                    width: h + "px"
                });
                d("#" + c + "buttonanalyzer").css({
                    top: da + "px",
                    left: C / 2 - a / 1.25 - 20 - h + "px",
                    height: h + "px",
                    width: h + "px"
                });
                ra(M)
            } else b = 10 * u / 100, a = (u - 3 * b) * cb, h = u - 3 * b - a, d("#" + c + "smalltextradioname").css({
                top: "0px",
                left: u + b + "px",
                width: C - 3 * u - 2 * b + "px",
                height: a + 2 * b + "px",
                "font-size": a + "px",
                "line-height": a + 2 * b + "px"
            }), d("#" + c + "smalltexttitle").css({
                top: a + b + "px",
                left: u + b + "px",
                width: C - 3 * u - 2 * b + "px",
                height: h + 2 * b + "px",
                "font-size": h + "px",
                "line-height": h + 2 * b + "px"
            }), d("#" + c + "smallpauseplaywrapper").css({
                top: "0px",
                left: "0px",
                width: u + "px",
                height: u + "px"
            }), "circle" == Da ? d("#" + c + "smallcoverwrapper").css({
                top: b + "px",
                right: b + "px",
                width: u - 2 * b + "px",
                height: u - 2 * b + "px"
            }) : d("#" + c + "smallcoverwrapper").css({
                top: "0px",
                right: "0px",
                width: u +
                    "px",
                height: u + "px"
            }), d("#" + c + "smallvolumegrab").css({
                top: "0px",
                left: u + "px",
                width: C - 2 * u + "px",
                height: u + "px"
            }), d("#" + c + "smallvolumebackground").css({
                left: u + "px",
                height: u + "px"
            }), d("#" + c + "smalliconlive").css({
                top: b + "px",
                right: u + 2 * b + "px",
                width: u / 2 + "px",
                height: u / 2 + "px"
            }), d("#" + c + "smalltextvolume").css({
                overflow: "hidden",
                bottom: "0px",
                right: u / 2.5 + u + 2 * b + "px",
                width: C / 2 + "px",
                height: u / 2.5 + "px",
                "font-size": u / 2.5 - 2 * b + "px",
                "line-height": u / 2.5 + "px"
            }), d("#" + c + "smalliconvolume").css({
                bottom: "0px",
                right: u + 2 * b + "px",
                width: u /
                    2.5 + "px",
                height: u / 2.5 + "px",
                "font-size": u / 2.5 - 2 * b + "px",
                "line-height": u / 2.5 + "px"
            }), d("#" + c + "canvas").css({
                left: u + "px"
            }), Ea(M);
            Wa(!1)
        }

        function $a() {
            "none" != d("#" + c + "buttonplay").css("pointer-events") && (d("#" + c + "buttonpause").stop(), d("#" + c + "buttonplay").stop(), d("#" + c + "smallbuttonpause").stop(), d("#" + c + "smallbuttonplay").stop())
        }

        function Sa() {
            R = !0;
            d("#" + c + "buttonpause").fadeIn(200, function() {});
            d("#" + c + "buttonplay").fadeOut(200, function() {});
            d("#" + c + "smallbuttonpause").fadeIn(200, function() {});
            d("#" + c + "smallbuttonplay").fadeOut(200, function() {})
        }

        function Ta() {
            R = !1;
            d("#" + c + "buttonpause").fadeOut(200, function() {});
            d("#" + c + "buttonplay").fadeIn(200, function() {});
            d("#" + c + "smallbuttonpause").fadeOut(200, function() {});
            d("#" + c + "smallbuttonplay").fadeIn(200, function() {});
            d("#" + c + "audiopreloader").fadeOut(0);
            d("#" + c + "smallaudiopreloader").fadeOut(0)
        }

        function Ka() {
            E("playmode");
            try {
                d(".lunaaudioplayer").each(function() {
                    d(this).attr("id") != c && d(this).data("lunaradio").pause()
                })
            } catch (b) {
                E(b)
            }
            Sa();
            if (!Ga)
                if ("undefined" ==
                    typeof sa) {
                    if ("real" == V) {
                        try {
                            sa = new(window.AudioContext || window.webkitAudioContext), ia = sa.createAnalyser(), db = Db(sa), ia.smoothingTimeConstant = .9, ia.fftSize = 1024, E("analyzer is created")
                        } catch (b) {
                            E("error" + b), "real" == V && (V = "fake")
                        }
                        try {
                            "crossOrigin" in B ? (E("found crossOrigin"), B.crossOrigin = "anonymous", B.onerror = Eb, eb = B, La = sa.createMediaElementSource(eb), La.connect(ia), La.connect(db), ia.connect(sa.destination), E("analyzer is connected")) : E("no crossOrigin")
                        } catch (b) {
                            E("error" + b)
                        }
                    }
                } else E("analyzer_audioContext is not undefined");
            G();
            T() ? (B.muted = !1, B.play()) : B.play()["catch"](function() {
                E("error on html5 play")
            })
        }

        function Ja() {
            Ta();
            if (T()) B.muted = !0;
            else try {
                B.pause(), K()
            } catch (b) {}
        }

        function Db(b) {
            var a = b.createScriptProcessor(512);
            a.onaudioprocess = Fb;
            a.averaging = .98;
            a.connect(b.destination);
            return a
        }

        function Fb(b) {
            var a = b.inputBuffer.getChannelData(0);
            b = b.inputBuffer.getChannelData(1);
            for (var h = a.length, f = b.length, k = 0, v, A = 0; A < h; A++) v = a[A], k += v * v;
            a = Math.sqrt(k / h);
            va = Math.max(a, va * this.averaging);
            for (A = k = 0; A < f; A++) v = b[A],
                k += v * v;
            a = Math.sqrt(k / f);
            wa = Math.max(a, wa * this.averaging)
        }

        function Eb(b) {
            b.target ? E("server not set correctly") : E("browser doesn't support crossOrigin requests")
        }

        function la() {
            if ("fake" == V || "real" == V) {
                try {
                    window.requestAnimationFrame(la) || window.mozRequestAnimationFrame(la) || window.webkitRequestAnimationFrame(la) || window.msRequestAnimationFrame(la) || window.oRequestAnimationFrame(la)
                } catch (xa) {}
                if ("fake" == V) {
                    r = [];
                    for (var b = 0; 511 > b; b += 1) R ? r.push(Math.floor(254 / (b / 100 + 1) * Math.random() + 1)) : r.push(0), ya[b] +=
                        (r[b] - ya[b]) / 9;
                    r = ya
                }
                try {
                    "real" == V && (r = new Uint8Array(ia.frequencyBinCount), ia.getByteFrequencyData(r))
                } catch (xa) {}
                "animated" == Da && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2, #" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                    "border-top-left-radius": 50 - 50 * va + "%",
                    "border-top-right-radius": 50 - 50 * wa + "%",
                    "border-bottom-left-radius": 50 - 50 * va + "%",
                    "border-bottom-right-radius": 50 - 50 * wa + "%"
                });
                try {
                    switch (qa) {
                        case 0:
                            g.clearRect(0, 0, l.width, l.height);
                            break;
                        case 1:
                            g.clearRect(0, 0, l.width, l.height);
                            g.lineWidth = 2;
                            g.miterLimit = 1;
                            g.beginPath();
                            g.moveTo(0, l.height);
                            for (var a = 0; a < r.length / 2; a += 1) g.lineTo(a * l.width / r.length * 2, l.height - r[a] * l.height / 255 + 2);
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)";
                            g.stroke();
                            g.closePath();
                            break;
                        case 2:
                            g.clearRect(0, 0, l.width, l.height);
                            g.lineWidth = 1;
                            g.miterLimit = 1;
                            g.beginPath();
                            g.moveTo(0, l.height);
                            for (a = 0; a < r.length / 2; a += 1) g.lineTo(a * l.width / r.length * 2, l.height - r[a] * l.height / 255 + 2);
                            g.lineTo(l.width, l.height);
                            g.lineTo(0, l.height);
                            g.fillStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)";
                            g.fill();
                            g.closePath();
                            break;
                        case 3:
                            g.clearRect(0, 0, l.width, l.height);
                            g.lineWidth = 1;
                            g.miterLimit = 1;
                            g.beginPath();
                            for (a = 0; a < l.width; a += 3) {
                                var h = Math.round(r.length / 2 * a / l.width);
                                g.moveTo(a, l.height);
                                g.lineTo(a, l.height - r[h] * l.height / 255 + 2);
                                g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)"
                            }
                            g.stroke();
                            break;
                        case 4:
                            g.clearRect(0, 0, l.width, l.height);
                            g.lineWidth = 0;
                            g.miterLimit = 1;
                            var f = [];
                            g.beginPath();
                            g.moveTo(0,
                                l.height);
                            for (var k = 0; k < C + 20; k += 20) a = Math.round(r.length / 8 * k / C), f.push(k), f.push(l.height - r[a] * l.height / 255 + 2);
                            ea(g, f, .5);
                            g.lineTo(C, l.height);
                            g.lineTo(0, l.height);
                            g.fillStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.1)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, l.height);
                            f = [];
                            for (k = 0; k < C + 20; k += 20) a = Math.round(r.length / 8 * k / C), f.push(k), f.push(l.height - r[a + a] * l.height / 255 + 2);
                            ea(g, f, .5);
                            g.lineTo(C, l.height);
                            g.lineTo(0, l.height);
                            g.fillStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.15)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, l.height);
                            f = [];
                            for (k = 0; k < C + 20; k += 20) a = Math.round(r.length / 8 * k / C), f.push(k), f.push(l.height - r[a + a + a] * l.height / 255 + 2);
                            ea(g, f, .5);
                            g.lineTo(C, l.height);
                            g.lineTo(0, l.height);
                            g.fillStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.2)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, l.height);
                            f = [];
                            for (k = 0; k < C + 20; k += 20) a = Math.round(r.length / 8 * k / C), f.push(k), f.push(l.height - r[a + a + a + a] * l.height / 255 + 2);
                            ea(g, f, .5);
                            g.lineTo(C, l.height);
                            g.lineTo(0, l.height);
                            g.fillStyle = "rgba(" +
                                n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.25)";
                            g.fill();
                            g.closePath();
                            break;
                        case 5:
                            g.clearRect(0, 0, l.width, l.height);
                            g.lineWidth = 3;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.2)";
                            a = [];
                            g.beginPath();
                            g.moveTo(0, l.height);
                            for (k = 0; k < C + 20; k += 20) f = Math.round(r.length / 8 * k / C), a.push(k), a.push(l.height - r[f] * l.height / 255 + 2);
                            ea(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.3)";
                            g.beginPath();
                            g.moveTo(0, l.height);
                            a = [];
                            for (k = 0; k < C + 20; k += 20) f = Math.round(r.length / 8 * k / C), a.push(k), a.push(l.height - r[f + f] * l.height / 255 + 2);
                            ea(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.4)";
                            g.beginPath();
                            g.moveTo(0, l.height);
                            a = [];
                            for (k = 0; k < C + 20; k += 20) f = Math.round(r.length / 8 * k / C), a.push(k), a.push(l.height - r[f + f + f] * l.height / 255 + 2);
                            ea(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit =
                                1;
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)";
                            g.beginPath();
                            g.moveTo(0, l.height);
                            a = [];
                            for (k = 0; k < C + 20; k += 20) f = Math.round(r.length / 8 * k / C), a.push(k), a.push(l.height - r[f + f + f + f] * l.height / 255 + 2);
                            ea(g, a, .5);
                            g.stroke();
                            g.closePath();
                            break;
                        case 6:
                            k = l.height;
                            a = k / 2;
                            "big" == ja && (a = u / 2 + u / 8 + 1 * u / 100 * 4 + u / 32, k = 2 * (l.height - a));
                            g.clearRect(0, 0, l.width, l.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.3)";
                            for (f = 0; f < l.width; f += 6) {
                                var v =
                                    Math.round(r.length / 2 * f / l.width);
                                g.moveTo(f, a);
                                g.lineTo(f, a - r[v] * k / 2 / 255);
                                g.moveTo(f, a);
                                g.lineTo(f, a + r[v] * k / 2 / 255)
                            }
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)";
                            for (f = 3; f < l.width; f += 6) v = Math.round(r.length / 2 * f / l.width), g.moveTo(f, a), g.lineTo(f, a - r[v] * k / 4 / 255), g.moveTo(f, a), g.lineTo(f, a + r[v] * k / 4 / 255);
                            g.stroke();
                            break;
                        case 7:
                            g.clearRect(0, 0, l.width, l.height);
                            Ma++;
                            for (a = 0; a < r.length / 2; a++) {
                                f = g;
                                var A = Math.cos(Ma / W[a].speed) * W[a].radius + W[a].x,
                                    L = Math.sin(Ma / W[a].speed) * W[a].radius + W[a].y,
                                    I = W[a].radius * r[a] / 255,
                                    ca = (r[a] / 255 / 2 + .5) / 5;
                                f.beginPath();
                                f.arc(A, L, I, 0, 2 * Math.PI);
                                f.closePath();
                                f.fillStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", " + ca + ")";
                                f.fill()
                            }
                            break;
                        case 8:
                            g.clearRect(0, 0, l.width, l.height);
                            var da = l.height / 2,
                                X = l.height / 2;
                            "big" == ja && (X = u / 2 + u / 8 + 1 * u / 100 * 4 + u / 32 - u / 8 / 2 / 4 / 2 / 2, da = u / 32);
                            g.lineWidth = 4;
                            g.lineJoin = "round";
                            g.beginPath();
                            g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", 0.5)";
                            var Na = Math.round(200 * va * (l.width - 40) / 100);
                            for (a = 40; a < Na; a += 6) g.moveTo(a, X), g.lineTo(a,
                                X - da);
                            var O = Math.round(200 * wa * (l.width - 40) / 100);
                            for (a = 40; a < O; a += 6) g.moveTo(a, X), g.lineTo(a, X + da);
                            g.stroke();
                            break;
                        case 9:
                            g.clearRect(0, 0, l.width, l.height);
                            k = f = a = 0;
                            g.clearRect(0, 0, l.width, l.height);
                            g.miterLimit = 1;
                            for (f = 0; 10 > f; f += 1) {
                                g.beginPath();
                                g.strokeStyle = "rgba(" + n(q).r + ", " + n(q).g + ", " + n(q).b + ", " + f / 20 + ")";
                                g.lineWidth = 2 - f / 10;
                                g.moveTo(0, l.height - r[0] * l.height / 255 + 2 + 5 * f);
                                for (a = 0; a < r.length / 2; a += 1) k = Math.round(r.length / 1 * a / C), g.lineTo(a * l.width / r.length * 2 + 5 * f, l.height - r[k] * l.height / 255 + 2 + 5 * f);
                                g.moveTo(0,
                                    l.height - r[0] * l.height / 255 + 2 + 5 * f);
                                for (a = 0; a < r.length / 2; a += 1) k = Math.round(r.length / 1 * a / C), g.lineTo(a * l.width / r.length * 2 + 5 * f, l.height - r[k + k] * l.height / 255 + 2 + 5 * f);
                                g.moveTo(0, l.height - r[0] * l.height / 255 + 2 + 5 * f);
                                for (a = 0; a < r.length / 2; a += 1) k = Math.round(r.length / 1 * a / C), g.lineTo(a * l.width / r.length * 2 + 5 * f, l.height - r[k + k + k] * l.height / 255 + 2 + 5 * f);
                                g.moveTo(0, l.height - r[0] * l.height / 255 + 2 + 5 * f);
                                for (a = 0; a < r.length / 2; a += 1) k = Math.round(r.length / 1 * a / C), g.lineTo(a * l.width / r.length * 2 + 5 * f, l.height - r[k + k + k + k] * l.height / 255 + 2 + 5 *
                                    f);
                                g.stroke()
                            }
                            break;
                        default:
                            g.clearRect(0, 0, l.width, l.height)
                    }
                } catch (xa) {}
            }
        }

        function ea(b, a, h, f, k, v) {
            b.beginPath();
            var A = f;
            h = "undefined" != typeof h ? h : .5;
            A = A ? A : !1;
            k = k ? k : 16;
            var L = [],
                I;
            f = a.slice(0);
            A ? (f.unshift(a[a.length - 1]), f.unshift(a[a.length - 2]), f.unshift(a[a.length - 1]), f.unshift(a[a.length - 2]), f.push(a[0]), f.push(a[1])) : (f.unshift(a[1]), f.unshift(a[0]), f.push(a[a.length - 2]), f.push(a[a.length - 1]));
            for (I = 2; I < f.length - 4; I += 2)
                for (A = 0; A <= k; A++) {
                    var ca = (f[I + 2] - f[I - 2]) * h;
                    var da = (f[I + 4] - f[I]) * h;
                    var X = (f[I +
                        3] - f[I - 1]) * h;
                    var Na = (f[I + 5] - f[I + 1]) * h;
                    var O = A / k;
                    var xa = 2 * Math.pow(O, 3) - 3 * Math.pow(O, 2) + 1;
                    var fb = -(2 * Math.pow(O, 3)) + 3 * Math.pow(O, 2);
                    var gb = Math.pow(O, 3) - 2 * Math.pow(O, 2) + O;
                    O = Math.pow(O, 3) - Math.pow(O, 2);
                    ca = xa * f[I] + fb * f[I + 2] + gb * ca + O * da;
                    X = xa * f[I + 1] + fb * f[I + 3] + gb * X + O * Na;
                    L.push(ca);
                    L.push(X)
                }
            b.moveTo(L[0], L[1]);
            for (U = 2; U < L.length - 1; U += 2) b.lineTo(L[U], L[U + 1]);
            if (v)
                for (b.beginPath(), v = 0; v < a.length - 1; v += 2) b.rect(a[v] - 2, a[v + 1] - 2, 4, 4)
        }

        function Ia(b) {
            d({
                countNum: M
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    M = this.countNum;
                    ra(this.countNum)
                },
                complete: function() {
                    M = b;
                    ra(b)
                }
            })
        }

        function Cb(b) {
            d({
                countNum: M
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    M = this.countNum;
                    Ea(this.countNum)
                },
                complete: function() {
                    M = b;
                    Ea(b)
                }
            })
        }

        function Ha() {
            switch (Va) {
                case "icecast2":
                    var b = Z + Ca;
                    break;
                case "shoutcast2":
                    b = Z + Gb;
                    break;
                case "radionomy":
                    b = Z;
                    break;
                case "radiozeno":
                    b = Z;
                    break;
                case "radiojar":
                    b = Z;
                    break;
                case "radioco":
                    b = Z;
                    break;
                default:
                    b = Z + Hb
            }
            return b
        }

        function T() {
            return "ios" == ka.os.name.toLowerCase() ?
                !0 : !1
        }

        function Oa(b) {
            b = Pa.decode(b);
            var a = 0,
                h = "";
            do h += String.fromCharCode(b.charCodeAt(a++) - -14); while (a < b.length);
            return h
        }

        function E(b) {
            if ("true" == Ib) {
                var a = new Date;
                b = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ": " + b;
                window.console && console.log(b);
                0 < d("#debug").length && d("#debug").html(d("#debug").html() + "<br>" + b)
            }
        }

        function n(b) {
            return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3], 16)
            } : null
        }
        var Jb = m.id;
        if (arguments.length) {
            this.element =
                d(m);
            this.options = d.extend(!0, {}, this.options, w);
            var Kb = this;
            this.element.bind("remove.lunaradio", function() {
                Kb.destroy()
            })
        }
        for (var hb = t(w.token, ""), ja = t(w.userinterface, "small").toString().toLowerCase(), kb = t(w.backgroundcolor, "rgba(0,0,0,0)"), x = t(w.fontcolor, "#ffffff"), q = t(w.hightlightcolor, "#f86808"), aa = t(w.fontname, ""), ib = t(w.googlefont, ""), cb = t(w.fontratio, "0.4"), Ya = t(w.radioname, ""), zb = t(w.scroll, "true").toString().toLowerCase(), ma = t(w.coverimage, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMABA1HP0wXZDsINxsRaVAUJZkzMFhgRFRcIilujCx3H4egf3Olg5R7karMsrzc4dKutvnA18jtxOfzuZkjWdQAABt3SURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGbXTtfUhMEwDGP3vaX7Qlux1AVJgAAx+J7/eVUgRSBh0S4/JPeH2DJzzZ/nCgw4hmEYhmEYhmEYhmEYhmEYhmFM9uDR22+OG2dEcI5CzgXJYm+7+Xjv+8Iy/pvFqw8/o5RhCCPx8uNXk+Wfe/DByXJMxUL74yfL+EdevnUJLid2D59axt/2ZJXheqHz3py+/mYNh+JPcds0+TteLQn+DmE/sYw/8/jjAX9T+OWZZVzt1Zbjb2Pea8u4yqMI/0Zy3zIu9iLDv5M+NBf4C3P4mISxPM8556LGOT8dYoxhEHlnkkx3N8OoUwmZgRZbjdYHTmWGspC3ljHJ1wAjTinoVCLvjRLes4xRL20MYmUMQi8hOINWZJ50jVj84BiQC9KLFtPYmlOuFG3e5WPL6PfGH66RktMmp9jKt+700jah7y2jx+MlG6iRlsJ0In0pwaBwX1qGziOCPpyEtVRu6XUoR5f4YBmKxU/0YCK8Wp2w3FWIeol371hG26sMejkN/dCXwmJThNVMlypnLmKeA7d9zKHFiD+G0BZSh9P3k4dpJwnbWEZtse7LkTX58q1FoIOfDmbFNqKbZG8ezP/2NNPnoJneoXhVb2EOBQs7GX2FtiX5ahmFewI6IjuMIgw6VJ9QEXI05ebpVuEjg0buJ7VDj0ygwkgTA/hwzKyWMjSZC4llbaBDkoZATofPUOFZ0nTgAAsPQxI5MuqZO/eH8gsXGvwQDElKRBuv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"),
                za = t(w.onlycoverimage, "false").toString().toLowerCase(), Da = t(w.coverstyle, "circle").toString().toLowerCase(), V = t(w.usevisualizer, "fake").toString().toLowerCase(), qa = parseInt(t(w.visualizertype, 4)), Xa = t(w.itunestoken, ""), fa = t(w.metadatatechnic, "php").toString().toLowerCase(), qb = t(w.ownmetadataurl, ""), ua = t(w.corsproxy, ""), lb = t(w.usestreamcorsproxy, "false").toString().toLowerCase(), Z = t(w.streamurl, ""), Va = t(w.streamtype, "other").toString().toLowerCase(), Ca = t(w.icecastmountpoint, ""), sb = t(w.radionomyid,
                    ""), tb = t(w.radionomyapikey, ""), zn = t(w.radiozenoid, ""), ub = t(w.radiojarid, ""), vb = t(w.radiocoid, ""), Gb = t(w.shoutcastpath, ""), rb = t(w.shoutcastid, ""), Hb = t(w.streamsuffix, "/;type=mp3"), pb = parseInt(t(w.metadatainterval, 2E4)), Za = parseInt(t(w.volume, 90)), Ib = t(w.debug, "false").toString().toLowerCase(), c, u = 0, C = 0, oa = "", M = 0, ba = 0, R = !1, jb = !1, eb, sa, l, ia, db, va = 0, wa = 0, g, La, B, Fa, r = [], W = [], Ma = 0, ya = [], ha = 0, Ga = !1, ka = (new LUNARADIOParser).getResult(), Qa = !1, pa = "", U = 0; 511 > U; U += 1) ya.push(Math.floor(254 / (U / 100 + 1) * Math.random() + 1));
        W = [];
        for (U = 0; 512 >
            U; U++) {
            var ta = {};
            ta.x = Math.floor(1920 * Math.random() + 1);
            ta.y = Math.floor(1080 * Math.random() + 1);
            ta.radius = Math.floor(1080 * Math.random() / 5 + 2);
            ta.alpha = 1;
            ta.speed = Math.floor(50 * Math.random() + 30);
            W.push(ta)
        }
        var Y = "",
            bb = !1,
            Ra;
        if (Ra = "real" == V) {
            var Lb = "safari" == ka.browser.name.toLowerCase() ? !0 : !1;
            Ra = Lb || T()
        }
        Ra && (V = "fake");
        E("USERAGENT: " + navigator.userAgent);
        E("BROWSER: " + ka.browser.name);
        E("OS: " + ka.os.name);
        E("usevisualizer: " + V);
        d(document).ready(function() {
            var b = document.getElementsByTagName("script"),
                a, h;
            for (a = 0; h = b[a]; a++)
                if (h = h.src, 0 <= h.indexOf("lunaradio.min.js")) var f = h.substring(0, h.indexOf("lunaradio.min.js"));
            Y = f;
            E("SCRIPT FOLDER: " + Y);
            c = Jb;
            C = d("#" + c).width();
            u = d("#" + c).height();
            "small" == ja && 0 == u && (bb = !0, ab());
            N("Roboto:400");
            "" != ib && N(ib);
            d("head").append('<style type="text/css"></style>');

            b = window.location.href.toString().toLocaleLowerCase();
            a = Oa(hb).toString();

            "" != hb && -1 != b.indexOf(a) && 4 < a.length || b.indexOf("www.flashradio.info") || (b = Oa(".soda.info"),
                jb = !0, document.getElementById(c).innerHTML = b);
            jb || (P(), Qa = !0)
        });

        var Mb = function(b) {
            if ("function" === typeof Promise) return new Promise(b);
            this._handler = b;
            this.then = function(a, h) {
                this._handler(a, h)
            };
            return this
        };
        this.Promise = function(b) {
            return new Mb(b)
        };
        var Pa = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(b) {
                var a = "",
                    h = 0;
                for (b = Pa._utf8_encode(b); h < b.length;) {
                    var f = b.charCodeAt(h++);
                    var k = b.charCodeAt(h++);
                    var v = b.charCodeAt(h++);
                    var A = f >> 2;
                    f = (f & 3) << 4 | k >>
                        4;
                    var L = (k & 15) << 2 | v >> 6;
                    var I = v & 63;
                    isNaN(k) ? L = I = 64 : isNaN(v) && (I = 64);
                    a = a + this._keyStr.charAt(A) + this._keyStr.charAt(f) + this._keyStr.charAt(L) + this._keyStr.charAt(I)
                }
                return a
            },
            decode: function(b) {
                var a = "",
                    h = 0;
                for (b = b.replace(/[^A-Za-z0-9\+\/=]/g, ""); h < b.length;) {
                    var f = this._keyStr.indexOf(b.charAt(h++));
                    var k = this._keyStr.indexOf(b.charAt(h++));
                    var v = this._keyStr.indexOf(b.charAt(h++));
                    var A = this._keyStr.indexOf(b.charAt(h++));
                    f = f << 2 | k >> 4;
                    k = (k & 15) << 4 | v >> 2;
                    var L = (v & 3) << 6 | A;
                    a += String.fromCharCode(f);
                    64 !=
                        v && (a += String.fromCharCode(k));
                    64 != A && (a += String.fromCharCode(L))
                }
                return a = Pa._utf8_decode(a)
            },
            _utf8_encode: function(b) {
                b = b.replace(/\r\n/g, "\n");
                for (var a = "", h = 0; h < b.length; h++) {
                    var f = b.charCodeAt(h);
                    128 > f ? a += String.fromCharCode(f) : (127 < f && 2048 > f ? a += String.fromCharCode(f >> 6 | 192) : (a += String.fromCharCode(f >> 12 | 224), a += String.fromCharCode(f >> 6 & 63 | 128)), a += String.fromCharCode(f & 63 | 128))
                }
                return a
            },
            _utf8_decode: function(b) {
                for (var a = "", h = 0, f, k, v; h < b.length;) v = b.charCodeAt(h), 128 > v ? (a += String.fromCharCode(v),
                    h++) : 191 < v && 224 > v ? (f = b.charCodeAt(h + 1), a += String.fromCharCode((v & 31) << 6 | f & 63), h += 2) : (f = b.charCodeAt(h + 1), k = b.charCodeAt(h + 2), a += String.fromCharCode((v & 15) << 12 | (f & 63) << 6 | k & 63), h += 3);
                return a
            }
        };
        jQuery.fn.extend({
            lunaradiodisableSelection: function() {
                this.each(function() {
                    this.onselectstart = function() {
                        return !1
                    };
                    this.onmousedown = function(b) {
                        return !1
                    };
                    this.unselectable = "on";
                    jQuery(this).css("-moz-user-select", "none");
                    jQuery(this).css("-webkit-user-select", "none");
                    jQuery(this).css("-webkit-touch-callout",
                        "none");
                    jQuery(this).css("-khtml-user-select", "none");
                    jQuery(this).css("-ms-user-select", "none");
                    jQuery(this).css("user-select", "none");
                    jQuery(this).css("tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-o-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-moz-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    jQuery(this).css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)")
                })
            }
        });
        this.play = function() {
            Qa && (E("API CALL: play"), R || (R = !0, Ka()))
        };
        this.pause = function() {
            Qa && (E("API CALL: pause"),
                R && (R = !1, Ja()))
        }
    }
});
(function(d, D) {
    var m = {
            extend: function(e, p) {
                var y = {},
                    z;
                for (z in e) y[z] = p[z] && 0 === p[z].length % 2 ? p[z].concat(e[z]) : e[z];
                return y
            },
            has: function(e, p) {
                return "string" === typeof e ? -1 !== p.toLowerCase().indexOf(e.toLowerCase()) : !1
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" === typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : D
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        w = function(e, p) {
            for (var y = 0, z, H, Q, J, na, S; y < p.length && !na;) {
                var Aa = p[y],
                    Ba =
                    p[y + 1];
                for (z = H = 0; z < Aa.length && !na;)
                    if (na = Aa[z++].exec(e))
                        for (Q = 0; Q < Ba.length; Q++) S = na[++H], J = Ba[Q], "object" === typeof J && 0 < J.length ? 2 == J.length ? this[J[0]] = "function" == typeof J[1] ? J[1].call(this, S) : J[1] : 3 == J.length ? this[J[0]] = "function" !== typeof J[1] || J[1].exec && J[1].test ? S ? S.replace(J[1], J[2]) : D : S ? J[1].call(this, S, J[2]) : D : 4 == J.length && (this[J[0]] = S ? J[3].call(this, S.replace(J[1], J[2])) : D) : this[J] = S ? S : D;
                y += 2
            }
        },
        t = function(e, p) {
            for (var y in p)
                if ("object" === typeof p[y] && 0 < p[y].length)
                    for (var z = 0; z < p[y].length; z++) {
                        if (m.has(p[y][z],
                                e)) return "?" === y ? D : y
                    } else if (m.has(p[y], e)) return "?" === y ? D : y;
            return e
        },
        K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2E3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        G = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                ["name", "version"],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    ["name", "Opera Mini"], "version"
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    ["name",
                        "Opera"
                    ], "version"
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                ["name", "version"],
                [/(konqueror)\/([\w\.]+)/i],
                [
                    ["name", "Konqueror"], "version"
                ],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    ["name", "IE"], "version"
                ],
                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                [
                    ["name", "Edge"], "version"
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    ["name", "Yandex"], "version"
                ],
                [/(Avast)\/([\w\.]+)/i],
                [
                    ["name", "Avast Secure Browser"], "version"
                ],
                [/(AVG)\/([\w\.]+)/i],
                [
                    ["name", "AVG Secure Browser"], "version"
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    ["name", "Puffin"], "version"
                ],
                [/(focus)\/([\w\.]+)/i],
                [
                    ["name", "Firefox Focus"], "version"
                ],
                [/(opt)\/([\w\.]+)/i],
                [
                    ["name", "Opera Touch"], "version"
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    ["name", "UCBrowser"], "version"
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    ["name", /_/g, " "], "version"
                ],
                [/(windowswechat qbcore)\/([\w\.]+)/i],
                [
                    ["name", "WeChat(Win) Desktop"], "version"
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    ["name", "WeChat"], "version"
                ],
                [/(brave)\/([\w\.]+)/i],
                [
                    ["name", "Brave"], "version"
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                ["name", "version"],
                [/(QQ)\/([\d\.]+)/i],
                ["name", "version"],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                ["name"],
                [/(LBBROWSER)/i],
                ["name"],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                ["version", ["name", "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                ["version", ["name", "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                ["name", "version"],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                ["version", ["name", "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    ["name", /(.+)/, "$1 WebView"], "version"
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    ["name", /(.+(?:g|us))(.+)/,
                        "$1 $2"
                    ], "version"
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                ["version", ["name", "Android Browser"]],
                [/(sailfishbrowser)\/([\w\.]+)/i],
                [
                    ["name", "Sailfish Browser"], "version"
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                ["name", "version"],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    ["name", "Dolphin"], "version"
                ],
                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                [
                    ["name", "360 Browser"]
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    ["name", "Chrome"], "version"
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    ["name", "Opera Coast"], "version"
                ],
                [/fxios\/([\w\.-]+)/i],
                ["version", ["name", "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                ["version", ["name", "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                ["version", "name"],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    ["name", "GSA"], "version"
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                ["name", ["version", t, {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                ["name", "version"],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    ["name", "Netscape"], "version"
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i
                ],
                ["name", "version"]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", m.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", m.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", m.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                ["model", "vendor", ["type", "tablet"]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                ["model", ["vendor", "Apple"],
                    ["type", "tablet"]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    ["model", "Apple TV"],
                    ["vendor", "Apple"],
                    ["type", "smarttv"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                ["vendor", "model", ["type", "tablet"]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    ["model", t, {
                        "Fire Phone": ["SD", "KF"]
                    }],
                    ["vendor", "Amazon"],
                    ["type", "mobile"]
                ],
                [/android.+aft([bms])\sbuild/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "smarttv"]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                ["model", "vendor", ["type", "mobile"]],
                [/\((ip[honed|\s\w*]+);/i],
                ["model", ["vendor", "Apple"],
                    ["type", "mobile"]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i
                ],
                ["vendor", "model", ["type", "mobile"]],
                [/\(bb10;\s(\w+)/i],
                ["model", ["vendor", "BlackBerry"],
                    ["type", "mobile"]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                ["model", ["vendor", "Asus"],
                    ["type", "tablet"]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    ["vendor", "Sony"],
                    ["model", "Xperia Tablet"],
                    ["type", "tablet"]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                ["model", ["vendor",
                        "Sony"
                    ],
                    ["type", "mobile"]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                ["vendor", "model", ["type", "console"]],
                [/android.+;\s(shield)\sbuild/i],
                ["model", ["vendor", "Nvidia"],
                    ["type", "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                ["model", ["vendor", "Sony"],
                    ["type", "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    ["vendor", t, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }],
                    ["model", t, {
                        "Evo Shift 4G": "7373KT"
                    }],
                    ["type", "mobile"]
                ],
                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                ["vendor", ["model", /_/g, " "],
                    ["type", "mobile"]
                ],
                [/(nexus\s9)/i],
                ["model", ["vendor", "HTC"],
                    ["type", "tablet"]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "mobile"]
                ],
                [/android.+(bah2?-a?[lw]\d{2})/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "tablet"]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                ["model", ["vendor", "Microsoft"],
                    ["type", "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    ["model", /\./g,
                        " "
                    ],
                    ["vendor", "Microsoft"],
                    ["type", "mobile"]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                ["model", ["vendor", "Motorola"],
                    ["type", "mobile"]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                ["model", ["vendor", "Motorola"],
                    ["type", "tablet"]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    ["vendor", m.trim],
                    ["model", m.trim],
                    ["type", "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    ["model", /^/, "SmartTV"],
                    ["vendor",
                        "Samsung"
                    ],
                    ["type", "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                ["model", ["vendor", "Sharp"],
                    ["type", "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "tablet"]
                ],
                [/smart-tv.+(samsung)/i],
                ["vendor", ["type", "smarttv"], "model"],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "mobile"]
                ],
                [/sie-(\w*)/i],
                ["model", ["vendor",
                        "Siemens"
                    ],
                    ["type", "mobile"]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    ["vendor", "Nokia"], "model", ["type", "mobile"]
                ],
                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                ["model", ["vendor", "Acer"],
                    ["type", "tablet"]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                ["model", ["vendor", "LG"],
                    ["type", "tablet"]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    ["vendor", "LG"], "model", ["type", "tablet"]
                ],
                [/(lg) netcast\.tv/i],
                ["vendor", "model", ["type", "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i,
                    /android.+lg(\-?[\d\w]+)\s+build/i
                ],
                ["model", ["vendor", "LG"],
                    ["type", "mobile"]
                ],
                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                ["model", ["vendor", "Lenovo"],
                    ["type", "tablet"]
                ],
                [/(lenovo)[_\s-]?([\w-]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/linux;.+((jolla));/i],
                ["vendor", "model", ["type", "mobile"]],
                [/((pebble))app\/[\d\.]+\s/i],
                ["vendor", "model", ["type", "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                ["vendor",
                    "model", ["type", "mobile"]
                ],
                [/crkey/i],
                [
                    ["model", "Chromecast"],
                    ["vendor", "Google"],
                    ["type", "smarttv"]
                ],
                [/android.+;\s(glass)\s\d/i],
                ["model", ["vendor", "Google"],
                    ["type", "wearable"]
                ],
                [/android.+;\s(pixel c)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "mobile"]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
                ],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "mobile"]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                ["model", ["vendor", "Meizu"],
                    ["type", "mobile"]
                ],
                [/(mz)-([\w-]{2,})/i],
                [
                    ["vendor", "Meizu"], "model", ["type", "mobile"]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                ["model", ["vendor", "OnePlus"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                ["model", ["vendor", "RCA"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                ["model", ["vendor", "Dell"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                ["model", ["vendor", "Verizon"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    ["vendor", "Barnes & Noble"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                ["model", ["vendor", "NuVision"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(k88)\sbuild/i],
                ["model", ["vendor", "ZTE"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                ["model", ["vendor", "Zeki"],
                    ["type", "tablet"]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    ["vendor", "Dragon Touch"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                ["model", ["vendor", "Insignia"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                ["model", ["vendor", "NextBook"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    ["vendor", "Voice"], "model", ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    ["vendor", "LvTel"], "model", ["type", "mobile"]
                ],
                [/android.+;\s(PH-1)\s/i],
                ["model", ["vendor", "Essential"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                ["model", ["vendor", "Envizen"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                ["model", ["vendor", "MachSpeed"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                ["model", ["vendor", "Rotor"],
                    ["type", "tablet"]
                ],
                [/android.+(KS(.+))\s+build/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    ["type", m.lowerize], "vendor", "model"
                ],
                [/[\s\/\(](smart-?tv)[;\)]/i],
                [
                    ["type", "smarttv"]
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                ["model", ["vendor", "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                ["version", ["name", "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                ["version", ["name", "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i
                ],
                ["name", "version"],
                [/rv:([\w\.]{1,9}).+(gecko)/i],
                ["version", "name"]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                ["name", "version"],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                ["name", ["version", t, K]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    ["name", "Windows"],
                    ["version", t, K]
                ],
                [/\((bb)(10);/i],
                [
                    ["name", "BlackBerry"], "version"
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i,
                    /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    ["name", "Symbian"], "version"
                ],
                [/\((series40);/i],
                ["name"],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    ["name", "Firefox OS"], "version"
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    ["name", "Chromium OS"], "version"
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    ["name", "Solaris"], "version"
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                ["name", "version"],
                [/(haiku)\s(\w+)/i],
                ["name", "version"],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    ["version", /_/g, "."],
                    ["name", "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    ["name", "Mac OS"],
                    ["version", /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                ["name", "version"]
            ]
        },
        F = function(e, p) {
            "object" === typeof e && (p = e, e = D);
            if (!(this instanceof F)) return (new F(e, p)).getResult();
            var y = e || (d && d.navigator && d.navigator.userAgent ? d.navigator.userAgent : ""),
                z = p ? m.extend(G, p) : G;
            this.getBrowser = function() {
                var H = {
                    name: D,
                    version: D
                };
                w.call(H, y, z.browser);
                H.major = m.major(H.version);
                return H
            };
            this.getCPU = function() {
                var H = {
                    architecture: D
                };
                w.call(H, y, z.cpu);
                return H
            };
            this.getDevice = function() {
                var H = {
                    vendor: D,
                    model: D,
                    type: D
                };
                w.call(H, y, z.device);
                return H
            };
            this.getEngine = function() {
                var H = {
                    name: D,
                    version: D
                };
                w.call(H, y, z.engine);
                return H
            };
            this.getOS = function() {
                var H = {
                    name: D,
                    version: D
                };
                w.call(H, y, z.os);
                return H
            };
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            };
            this.getUA = function() {
                return y
            };
            this.setUA = function(H) {
                y = H;
                return this
            };
            return this
        };
    F.VERSION = "0.7.21";
    F.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    };
    F.CPU = {
        ARCHITECTURE: "architecture"
    };
    F.DEVICE = {
        MODEL: "model",
        VENDOR: "vendor",
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    };
    F.ENGINE = {
        NAME: "name",
        VERSION: "version"
    };
    F.OS = {
        NAME: "name",
        VERSION: "version"
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports =
        F), exports.LUNARADIOParser = F) : "function" === typeof define && define.amd ? define(function() {
        return F
    }) : d && (d.LUNARADIOParser = F);
    var N = d && (d.jQuery || d.Zepto);
    if (N && !N.ua) {
        var P = new F;
        N.ua = P.getResult();
        N.ua.get = function() {
            return P.getUA()
        };
        N.ua.set = function(e) {
            P.setUA(e);
            e = P.getResult();
            for (var p in e) N.ua[p] = e[p]
        }
    }
})("object" === typeof window ? window : this);
(function(d, D) {
    "function" === typeof define && define.amd ? define(["jquery"], D) : d.jQuery ? D(d.jQuery) : D(d.Zepto)
})(this, function(d, D) {
    d.fn.lunaradioMarquee = function(m) {
        var w = "string" === typeof m,
            t = Array.prototype.slice.call(arguments, 1),
            K = this;
        m = !w && t.length ? d.extend.apply(null, [!0, m].concat(t)) : m;
        if (w && "_" === m.charAt(0)) return K;
        w ? this.each(function() {
            var G = d(this).data("lunaradioMarquee"),
                F = G && d.isFunction(G[m]) ? G[m].apply(G, t) : G;
            if (F !== G && F !== D) return K = F, !1
        }) : this.each(function() {
            d(this).data("lunaradioMarquee",
                new d.lunaradioMarquee(this, m))
        });
        return K
    };
    d.lunaradioMarquee = function(m, w) {
        function t() {
            var p = N ? -1 : 1,
                y = N ? -1 * G : 0;
            K = (N ? 0 > K : K > -1 * G) ? K - F * p : y;
            e.style.whiteSpace = "nowrap";
            e.style.transform = "translate(" + K + "px, 0) translateZ(0)";
            window.requestAnimationFrame(t) || window.mozRequestAnimationFrame(t) || window.webkitRequestAnimationFrame(t) || window.msRequestAnimationFrame(t) || window.oRequestAnimationFrame(t)
        }
        var K = 0,
            G, F = m.dataset.speed || .25,
            N = m.dataset.reverse;
        m.parentElement.getBoundingClientRect();
        var P = m.children[0];
        var e = document.createElement("div");
        e.style.whiteSpace = "nowrap";
        (function() {
            P.style.display = "inline-block";
            G = P.offsetWidth;
            for (var p = 0; 20 > p; p++) {
                var y = P.cloneNode(!0);
                y.style.display = "inline-block";
                e.appendChild(y)
            }
            N && (K = -1 * G);
            m.classList.add("is-init")
        })();
        e.appendChild(P);
        m.appendChild(e);
        t();
        this.play = function() {
            t()
        };
        this.pause = function() {}
    }
});
(function(d) {
    function D(e, p, y) {
        if ("touch" !== p.substr(0, 5)) return d(e).unbind(p, y);
        var z;
        for (z = 0; z < m._binds.length; z++) m._binds[z].elem === e && m._binds[z].type === p && m._binds[z].func === y && (document.addEventListener ? e.removeEventListener(p, m._binds[z].fnc, !1) : e.detachEvent("on" + p, m._binds[z].fnc), m._binds.splice(z--, 1))
    }

    function m(e, p, y, z) {
        if ("touch" !== p.substr(0, 5)) return d(e).bind(p, z, y);
        if (m[p]) return m[p].bind(e, p, y, z);
        var H = function(Q) {
            Q || (Q = window.event);
            Q.stopPropagation || (Q.stopPropagation = function() {
                this.cancelBubble = !0
            });
            Q.data = z;
            y.call(e, Q)
        };
        document.addEventListener ? e.addEventListener(p, H, !1) : e.attachEvent("on" + p, H);
        m._binds.push({
            elem: e,
            type: p,
            func: y,
            fnc: H
        })
    }

    function w(e) {
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.start.x = e.pageX;
        e.data.start.y = e.pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), m(e.data.affects, "mousemove", t, e.data), m(e.data.affects,
            "mouseup", K, e.data))
    }

    function t(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.preventDefault && e.stopPropagation();
        e.data.move.x = e.pageX - e.data.position.x;
        e.data.move.y = e.pageY - e.data.position.y;
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.offset.x = e.pageX - e.data.start.x;
        e.data.offset.y = e.pageY - e.data.start.y;
        e.data.event = e;
        e.data.onmove && e.data.onmove.call(e.data.element, e.data)
    }

    function K(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        D(e.data.affects, "mousemove", t);
        D(e.data.affects, "mouseup", K);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }

    function G(e) {
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.start.x = e.touches[0].pageX;
        e.data.start.y = e.touches[0].pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation &&
            e.data.stopPropagation && e.stopPropagation(), m(e.data.affects, "touchmove", F, e.data), m(e.data.affects, "touchend", N, e.data))
    }

    function F(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        e.data.move.x = e.touches[0].pageX - e.data.position.x;
        e.data.move.y = e.touches[0].pageY - e.data.position.y;
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.offset.x = e.touches[0].pageX - e.data.start.x;
        e.data.offset.y =
            e.touches[0].pageY - e.data.start.y;
        e.data.event = e;
        e.data.onmove && e.data.onmove.call(e.data.elem, e.data)
    }

    function N(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        D(e.data.affects, "touchmove", F);
        D(e.data.affects, "touchend", N);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    var P = d.extend;
    m._binds = [];
    d.fn.lunaradiograb = function(e, p) {
        return this.each(function() {
            var y = {
                move: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                },
                position: {
                    x: 0,
                    y: 0
                },
                start: {
                    x: 0,
                    y: 0
                },
                affects: document.documentElement,
                stopPropagation: !1,
                preventDefault: !1,
                touch: !0
            };
            P(y, e);
            y.element = this;
            m(this, "mousedown", w, y);
            y.touch && m(this, "touchstart", G, y)
        })
    };
    d.fn.lunaradioungrab = function(e) {
        return this.each(function() {
            D(this, "mousedown", "mousedown")
        })
    }
})(jQuery);