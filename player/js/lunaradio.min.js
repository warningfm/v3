/*
 LUNA RADIO PLAYER V5.21.01.28
 https://www.luna-universe.com

 Copyright (C) NNG.NET | 2024
 https://mbahnunungonline.net/live

*/
(function(d, G) {
    "function" === typeof define && define.amd ? define(["jquery"], G) : d.jQuery ? G(d.jQuery) : G(d.Zepto)
})(this, function(d, G) {
    d.fn.lunaradio = function(n) {
        var t = "string" === typeof n,
            I = Array.prototype.slice.call(arguments, 1),
            r = this;
        n = !t && I.length ? d.extend.apply(null, [!0, n].concat(I)) : n;
        if (t && "_" === n.charAt(0)) return r;
        t ? this.each(function() {
            var P = d(this).data("lunaradio"),
                H = P && d.isFunction(P[n]) ? P[n].apply(P, I) : P;
            if (H !== P && H !== G) return r = H, !1
        }) : this.each(function() {
            d(this).data("lunaradio", new d.lunaradio(this,
                n))
        });
        return r
    };
    d.lunaradio = function(n, t) {
        function I(b) {
            c = b;
            w("autoplay: " + oa);
            if (b = "real" == da) b = "safari" == pa.browser.name.toLowerCase() ? !0 : !1, b = b || ba();
            b && (da = "fake");
            try {
                var a = window.localStorage.getItem(c + "volume");
                null !== a && (Ra = parseInt(a))
            } catch (h) {
                w(h)
            }
            E = d("#" + c).width();
            x = d("#" + c).height();
            "small" == fa && 0 == x && (cb = !0, db());
            e("Roboto:400");
            "" != eb && e(eb);
            a = "@keyframes " + c + "pulse { ";
            a = a + "\t0% { \t  fill: rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 1.0);";
            a = a + "\t} \t50% { \t  fill: rgba(" + f(u).r + ", " +
                f(u).g + ", " + f(u).b + ", 1.0); ";
            a = a + "\t} \t100% { \t\tfill: rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 1.0); ";
            a += "\t} }";
            d("head").append('<style type="text/css">' + a + "</style>");
            a = window.location.href.toString().toLocaleLowerCase();
            b = Sa(fb).toString();
            "" != fb && -1 != a.indexOf(b) && 4 < b.length || -1 != a.indexOf(Sa("ZFNWW2FiXlNrV2QgXmdgUx9nYFtoV2RlVyBVYV8=").toString()) || (a = Sa("SURBQDkSRkE9N0ATExMSQj43M0U3Ejk3RhIzEkA3SRJGQT03QBJBQCwSWmZmYmUsISFkU1ZbYWJeU2tXZCBeZ2BTH2dgW2hXZGVXIFVhXyFkV1lbZWZXZA=="), gb = 0, document.getElementById(c).innerHTML =
                a);
            gb || (B(), Ta = !0)
        }

        function r(b, a) {
            if (b === G || "" == b.toString()) b = a;
            return b
        }

        function P(b) {
            var a = document.getElementsByTagName("script"),
                h, p;
            for (h = 0; p = a[h]; h++)
                if (p = p.src, 0 <= p.indexOf(b)) var v = p.substring(0, p.indexOf(b));
            return v
        }

        function H() {
            if (!ba()) {
                for (; F.lastElementChild;) F.removeChild(F.lastElementChild);
                F.load()
            }
        }

        function T() {
            if (ba()) Va || (F.src = Ua, F.load());
            else {
                var b = document.createElement("source");
                b.src = Ua;
                F.appendChild(b);
                F.load()
            }
            Va = !0
        }

        function X() {
            F = new Audio;
            F.id = c + "html5audio";
            F.preload =
                "auto";
            "true" == oa && (w("autoplay enabled"), F.autoplay = !0);
            F.addEventListener("timeupdate", function() {
                0 == F.paused && (d("#" + c + "audiopreloader").fadeOut(0), d("#" + c + "smallaudiopreloader").fadeOut(0))
            }, !1);
            F.addEventListener("loadedmetadata", function() {
                w("loadedmetadata")
            }, !1);
            F.addEventListener("ended", function() {
                H();
                T();
                Y && F.play()["catch"](function() {
                    w("error on html5 play")
                });
                w("ended")
            }, !1);
            F.addEventListener("play", function() {
                hb();
                w("play")
            }, !1);
            F.addEventListener("loadstart", function() {
                Y && (d("#" +
                    c + "audiopreloader").fadeIn(0), d("#" + c + "smallaudiopreloader").fadeIn(0));
                w("loadstart")
            }, !1);
            F.addEventListener("waiting", function() {
                d("#" + c + "audiopreloader").fadeIn(0);
                d("#" + c + "smallaudiopreloader").fadeIn(0);
                w("waiting")
            }, !1);
            F.addEventListener("seeked", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                w("seeked")
            }, !1);
            F.addEventListener("canplaythrough", function() {
                d("#" + c + "audiopreloader").fadeOut(0);
                d("#" + c + "smallaudiopreloader").fadeOut(0);
                d("#" + c + "iconlive, #" +
                    c + "smalliconlive").css({
                    opacity: "1.0"
                });
                w("canplaythrough")
            }, !1);
            F.addEventListener("pause", function() {
                F.currentTime.toFixed(1) < F.duration.toFixed(1) && ib();
                w("pause: currentTime: " + F.currentTime.toFixed(1) + " duration: " + F.duration.toFixed(1))
            }, !1);
            F.addEventListener("error", function(b) {
                w(F.readyState);
                setTimeout(function() {
                    H();
                    T();
                    Y && F.play()["catch"](function() {
                        w("error on html5 play")
                    })
                }, 1E3);
                d("#" + c + "iconlive, #" + c + "smalliconlive").css({
                    opacity: "0"
                })
            }, !0)
        }

        function e(b) {
            var a = document.createElement("link");
            a.type = "text/css";
            a.rel = "stylesheet";
            a.href = "https://fonts.googleapis.com/css?family=" + b;
            document.getElementsByTagName("head")[0].appendChild(a)
        }

        function B() {
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
                background: ub
            });
            Ua = "true" == vb && "" != Ca ? Ca +
                Wa() : Wa();
            X();
            "big" == fa && wb(a);
            xb(a);
            "big" == fa ? yb(a) : zb(a);
            ba() && (d("#" + c + "buttonvolumeoff, #" + c + "buttonvolumeon, #" + c + "volumegrab, #" + c + "textvolumeend, #" + c + "volumewrapper").css({
                display: "none"
            }), d("#" + c + "smallvolumegrab, #" + c + "smalltextvolume, #" + c + "smalliconvolume").css({
                display: "none"
            }));
            b = "ie" == pa.browser.name.toLowerCase() && 12 > parseInt(pa.browser.version) ? !0 : !1;
            b && d("#" + c + "backgroundimage").css({
                display: "none"
            });
            jb();
            d(window).resize(function() {
                jb(!1)
            });
            va();
            "true" == qa ? (qa = "false", R(ra + "?" +
                Math.floor(99999 * Math.random()), ""), qa = "true") : R(ra, "");
            C();
            setInterval(function() {
                C()
            }, Ab);
            "true" == oa && (Y = !0, Ja())
        }

        function C() {
            switch (sa) {
                case "ownmetadataurl":
                    Q();
                    break;
                case "stream-icy-meta":
                    wa();
                    break;
                default:
                    switch (kb) {
                        case "icecast2":
                            Z();
                            break;
                        case "shoutcast2":
                            Ka();
                            break;
                        case "radionomy":
                            La();
                            break;
                        case "radiojar":
                            Bb();
                            break;
                        case "radioco":
                            Cb()
                    }
            }
        }

        function y(b, a) {
            xa != d("<div/>").html(b).text() && (xa = d("<div/>").html(b).text(), w("New Title: " + xa), d("." + c + "texttitlespan, ." + c + "smalltexttitlespan").html(xa),
                "" == a ? "true" == qa ? (qa = "false", R(ra + "?" + Math.floor(99999 * Math.random()), ""), qa = "true") : K() : R(a, ""), lb(!0))
        }

        function K() {
            if ("" != xa) {
                var b = xa.replace(/ *\([^)]*\) */g, ""),
                    a = b = "https://itunes.apple.com/search?term=" + encodeURIComponent(b) + "&media=music&limit=1&url=" + encodeURIComponent(ha),
                    h = a,
                    p = "GET";
                ba() && (p = "POST", h = ha + "fallback.php", a = b);
                w("ITUNES: " + h);
                d.ajax({
                    dataType: "text",
                    method: p,
                    crossDomain: !0,
                    url: h,
                    data: {
                        url: a
                    },
                    success: function(v) {
                        try {
                            v = JSON.parse(v);
                            var z = "",
                                m = "";
                            1 == v.results.length ? (z = v.results[0].artworkUrl100,
                                z = z.replace("100x100bb", "1200x1200bb"), w("COVER: " + z), "" != mb && (m = v.results[0].trackViewUrl + "&app=itunes&at=" + mb), R(z, m)) : R(ra, "")
                        } catch (l) {
                            R(ra, "")
                        }
                    },
                    error: function() {
                        R(ra, "")
                    }
                })
            } else R(ra, "")
        }

        function R(b, a) {
            "false" == qa && (ya = a, "" != ya ? d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                cursor: "pointer"
            }) : d("#" + c + "coverwrapper, #" + c + "smallcoverwrapper").css({
                cursor: "hand"
            }), ta++, 2 < ta && (ta = 1), d("<img/>").attr("src", b).on("load", function() {
                d(this).remove();
                d("#" + c + "backgroundimage" + ta + ", #" + c + "coverwrapper" +
                    ta + ", #" + c + "smallcoverwrapper" + ta).css({
                    background: "url(" + b + ")",
                    opacity: "1.0",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                });
                1 == ta ? d("#" + c + "backgroundimage2, #" + c + "coverwrapper2, #" + c + "smallcoverwrapper2").css({
                    opacity: "0.0"
                }) : d("#" + c + "backgroundimage1, #" + c + "coverwrapper1, #" + c + "smallcoverwrapper1").css({
                    opacity: "0.0"
                })
            }))
        }

        function Q() {
            var b = "GET",
                a = Db,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }

        function wa() {
            var b = Wa();
            d.ajax({
                dataType: "text",
                url: ha + "stream-icy-meta.php",
                method: "POST",
                crossDomain: !0,
                data: {
                    url: b
                },
                success: function(a) {
                    y(a, "")
                },
                error: function(a, h, p) {
                    y("", "")
                }
            })
        }

        function Z() {
            var b = "GET",
                a = ia + "/status-json.xsl",
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    try {
                        v =
                            JSON.parse(v);
                        var z = {};
                        if (v.icestats.source.length === G) z = v.icestats.source;
                        else
                            for (var m = 0; m < v.icestats.source.length; m++) {
                                var l = v.icestats.source[m].listenurl;
                                Ma == l.substr(l.length - Ma.length, Ma.length) && (z = v.icestats.source[m])
                            }
                        m = v = "";
                        z.hasOwnProperty("title") && (m = z.title);
                        z.hasOwnProperty("artist") && (v = z.artist);
                        "" != v && "" != m ? y(v + " - " + m, "") : "" != v ? y(v, "") : y(m, "")
                    } catch (D) {
                        w("Error on JSON File: " + D), y("", "")
                    }
                },
                error: function(v, z, m) {
                    w("Error on JSON File: " + z);
                    y("", "")
                }
            })
        }


if (w.metadatatechnic === "corsproxy") {
        function Ka() {
            var b = "GET",
                a = ia + "/currentsong?sid=" + Eb,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "text",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }
		
	} else {	
		
		function Ka() {
            var b = "GET",
                a = ia + "/stats?json=1&sid=" + Eb,
                h = a,
                p = {};
            "corsproxy" == sa && (b = "GET", h = a = Ca + a, p = {});
            "fallback" == sa && (b = "POST", h = ha + "fallback.php", p = {
                url: a
            });
            d.ajax({
                dataType: "jsonp",
                method: b,
                crossDomain: !0,
                url: h,
                data: p,
                success: function(v) {
                    y(v.songtitle, "")
                },
                error: function(v, z, m) {
                    y("", "")
                }
            })
        }
        
}
		

        function La() {
            d.ajax({
                dataType: "xml",
                method: "GET",
                crossDomain: !0,
                url: "https://api.radionomy.com/currentsong.cfm?radiouid=" + Fb + "&apikey=" + Gb + "&callmeback=yes&type=xml&cover=yes&previous=yes",
                success: function(b) {
                    try {
                        var a = d(b).find("track").find("artists").text();
                        d(b).find("track").find("title").text() != d(b).find("track").find("artists").text() && (a += " - " + d(b).find("track").find("title").text());
                        var h = d(b).find("track").find("cover").text();
                        y(a, h)
                    } catch (p) {
                        y("", "")
                    }
                },
                error: function(b, a, h) {
                    y("", "")
                }
            })
        }

        function Bb() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://www.radiojar.com/api/stations/" + Hb + "/now_playing/?rand=" + Math.random(),
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        y(a.artist + " - " + a.title, a.thumb)
                    } catch (h) {
                        y("", "")
                    }
                },
                error: function(b,
                    a, h) {
                    y("", "")
                }
            })
        }

        function Cb() {
            d.ajax({
                dataType: "text",
                method: "GET",
                crossDomain: !0,
                url: "https://public.radio.co/stations/" + Ib + "/status",
                success: function(b) {
                    try {
                        var a = JSON.parse(b);
                        y(a.current_track.title, a.current_track.artwork_url_large)
                    } catch (h) {
                        y("", "")
                    }
                },
                error: function(b, a, h) {
                    y("", "")
                }
            })
        }

        function xb(b) {
            k = document.createElement("canvas");
            k.id = c + "canvas";
            b.appendChild(k);
            d("#" + c + "canvas").css({
                display: "block",
                background: "none",
                position: "absolute",
                top: "0px",
                opacity: Jb
            });
            g = k.getContext("2d")
        }

        function yb(b) {
            var a =
                document.createElement("div");
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
            Kb(a);
            n = document.createElement("div");
            n.id = c + "iconlive";
            a.appendChild(n);
            d("#" + c + "iconlive").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)",
                animation: c + "pulse 2s infinite"
            }).html('<svg class="lunaradioliveicon" x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            "false" == nb && d("#" + c + "iconlive").css({
                display: "none"
            });
            n = document.createElement("div");
            n.id = c + "buttonvolumeoff";
            a.appendChild(n);
            d("#" + c + "buttonvolumeoff").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovolumeofficon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                Xa(0)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "buttonvolumeon";
            a.appendChild(n);
            d("#" + c + "buttonvolumeon").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                Xa(100)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "buttonanalyzer";
            a.appendChild(n);
            d("#" + c + "buttonanalyzer").css({
                position: "absolute",
                transition: "fill 0.5s",
                cursor: "pointer",
                fill: A
            }).html('<svg class="lunaradiovisualizericon" x="0px" y="0px" viewBox="0 0 24 24"><path d="M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).on("click", function() {
                if ("none" != d("#" + c + "buttonshuffle").css("pointer-events")) {
                    ja = parseInt(ja) + 1;
                    9 < ja && (ja = 0);
                    try {
                        window.localStorage.removeItem(c + "visualizer"), window.localStorage.setItem(c + "visualizer", ja)
                    } catch (h) {
                        w(h)
                    }
                    w("changeanalyzer: " + ja)
                }
            }).lunaradiodisableSelection();
            "false" == Lb && d("#" + c + "buttonanalyzer").css({
                display: "none"
            });
            n = document.createElement("span");
            n.classList.add(c + "textradionamespan");
            a.appendChild(n);
            d("." + c + "textradionamespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html(ob);
            n = document.createElement("div");
            n.id = c + "textradioname";
            n.dataset.speed = .5;
            n.dataset.reverse = !0;
            a.appendChild(n);
            d("#" + c + "textradioname").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "font-family": ka,
                color: A
            }).addClass(c + "textradioname").html(d("." + c + "textradionamespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "textradioname").css({
                "text-overflow": "ellipsis"
            });
            n = document.createElement("span");
            n.classList.add(c + "texttitlespan");
            a.appendChild(n);
            d("." + c + "texttitlespan").css({
                "padding-left": "10px",
                "padding-right": "10px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html("");
            n = document.createElement("div");
            n.id = c + "texttitle";
            n.dataset.speed = .9;
            a.appendChild(n);
            d("#" + c + "texttitle").css({
                position: "absolute",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                "white-space": "nowrap",
                "text-align": "center",
                "font-family": ka,
                color: A
            }).addClass(c + "texttitle").html(d("." + c + "texttitlespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "texttitle").css({
                "text-overflow": "ellipsis"
            });
            n = document.createElement("div");
            n.id = c + "textvolumeend";
            a.appendChild(n);
            d("#" + c + "textvolumeend").css({
                position: "absolute",
                "text-align": "center",
                "font-family": "Roboto",
                color: A
            }).html("100").lunaradiodisableSelection();
            Mb(a);
            Nb(a);
            ba() ? (S = 100, za(100)) : Xa(Ra)
        }

        function lb(b) {
            if ("true" == Da) {
                var a = "";
                "small" == fa && (a = "small");
                b &&
                    d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause());
                d("#" + c + a + "textradioname").width() > d("." + c + a + "textradionamespan").first().width() + 10 ? d("#" + c + a + "textradioname").hasClass(c + "Marquee") && (d("#" + c + a + "textradioname").removeClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").data("lunaradioMarquee").pause()) :
                    d("#" + c + a + "textradioname").hasClass(c + "Marquee") || (d("#" + c + a + "textradioname").addClass(c + "Marquee"), d("#" + c + a + "textradioname").html(d("." + c + a + "textradionamespan").first()), d("#" + c + a + "textradioname").lunaradioMarquee());
                d("#" + c + a + "texttitle").width() > d("." + c + a + "texttitlespan").first().width() + 10 ? d("#" + c + a + "texttitle").hasClass(c + "Marquee") && (d("#" + c + a + "texttitle").removeClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").data("lunaradioMarquee").pause()) :
                    d("#" + c + a + "texttitle").hasClass(c + "Marquee") || (d("#" + c + a + "texttitle").addClass(c + "Marquee"), d("#" + c + a + "texttitle").html(d("." + c + a + "texttitlespan").first()), d("#" + c + a + "texttitle").lunaradioMarquee())
            }
        }

        function Nb(b) {
            var a = document.createElement("div");
            a.id = c + "pauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "pauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                pb();
                Y ? Ya() : Ja()
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonplay";
            a.appendChild(b);
            d("#" + c + "buttonplay").css({
                position: "absolute",
                top: "9px",
                left: "9px",
                width: "3000%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M15 12L10 15V9"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "buttonpause";
            a.appendChild(b);
            d("#" + c + "buttonpause").css({
                position: "absolute",
                 top: "9px",
                left: "9px",
                width: "3000%",
                height: "100%",
                transition: "fill 0.5s",
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M11 9V15H9V9M15 9V15H13V9"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
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
                fill: A
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function wb(b) {
            var a = document.createElement("div"); //efect blur OFICIAL
           a.id = c + "backgroundimage";
            b.appendChild(a);
            d("#" + c + "backgroundimage").css({
                position: "absolute",
                left: "0px !important",
                top: "0px",
                height: "100%",
                width: "100%",
                opacity: "1.0"
    
            });
            
            b = document.createElement("div");
            b.id = c + "backgroundimage1";
            a.appendChild(b);
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
            b = document.createElement("div");
            b.id = c + "backgroundimage2";
            a.appendChild(b);
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
            })
        }

        function Kb(b) {
            var a = document.createElement("div");
            a.id = c + "coverwrapper";
            b.appendChild(a);
            d("#" + c + "coverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + f(A).r + ", " + f(A).g + ", " +
                    f(A).b + ", 0.1)",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "box-sizing": "border-box"
            }).on("click", function() {
                "" != ya && window.open(ya)
            }).lunaradiodisableSelection();
            n = document.createElement("div");
            n.id = c + "coverwrapper1";
            a.appendChild(n);
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
            n = document.createElement("div");
            n.id = c + "coverwrapper2";
            a.appendChild(n);
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
            "circle" == Na && (d("#" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                "border-radius": "50%"
            }), d("#" + c + "backgroundimage, #" + c + "backgroundimage1, #" + c + "backgroundimage2").css({
                "border-radius": "50%"
            }))
        }

        function Mb(b) {
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
                background: A
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumefill";
            a.appendChild(b);
            d("#" + c + "volumefill").css({
                position: "absolute",
                width: "0",
                background: u
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "volumeicon";
            a.appendChild(b);
            d("#" + c + "volumeicon").css({
                position: "absolute",
                top: "0px",
                "border-radius": "50%",
                background: u
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
                d(this).css("cursor",
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    la = S
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "volumewrapper").width();
                    S = 100 > la + h ? la + h : 100;
                    0 > la + h && (S = 0);
                    za(S)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(c + "volume"), window.localStorage.setItem(c + "volume", S)
                    } catch (p) {
                        w(p)
                    }
                }
            })
        }

        function zb(b) {
            w("iniSmallPlayer");
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
                background: "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.5)"
            }).lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconlive";
            a.appendChild(b);
            d("#" + c + "smalliconlive").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html('<svg class="lunaradioliveicon" x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection();
            "false" == nb && d("#" + c + "smalliconlive").css({
                display: "none"
            });
            b = document.createElement("div");
            b.id = c + "smalltextvolume";
            a.appendChild(b);
            d("#" + c + "smalltextvolume").css({
                position: "absolute",
                "text-align": "right",
                "font-family": "Roboto",
                color: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html("100").lunaradiodisableSelection();
            b = document.createElement("div");
            b.id = c + "smalliconvolume";
            a.appendChild(b);
            d("#" + c + "smalliconvolume").css({
                position: "absolute",
                fill: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.3)"
            }).html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').lunaradiodisableSelection();
            b = document.createElement("span");
            b.classList.add(c + "smalltextradionamespan");
            a.appendChild(b);
            d("." + c + "smalltextradionamespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
            }).html(ob);
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
                "font-family": ka,
                color: A
            }).addClass(c +
                "smalltextradioname").html(d("." + c + "smalltextradionamespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "smalltextradioname").css({
                "text-overflow": "ellipsis"
            });
            b = document.createElement("span");
            b.classList.add(c + "smalltexttitlespan");
            a.appendChild(b);
            d("." + c + "smalltexttitlespan").css({
                "padding-right": "30px",
                margin: "0",
                "white-space": "nowrap",
                "font-family": ka,
                color: A
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
                "font-family": ka,
                color: A
            }).addClass(c + "smalltexttitle").html(d("." + c + "smalltexttitlespan")).lunaradiodisableSelection();
            "true" != Da && d("#" + c + "smalltexttitle").css({
                "text-overflow": "ellipsis"
            });
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
                d(this).css("cursor",
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
            }).lunaradiograb({
                onstart: function(h) {
                    d(this).css("cursor",
                        "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto");
                    la = S
                },
                onmove: function(h) {
                    h = 100 * h.offset.x / d("#" + c + "smallvolumegrab").width();
                    S = 100 > la + h ? la + h : 100;
                    0 > la + h && (S = 0);
                    Oa(S)
                },
                onfinish: function(h) {
                    d(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto");
                    try {
                        window.localStorage.removeItem(c + "volume"), window.localStorage.setItem(c + "volume", S)
                    } catch (p) {
                        w(p)
                    }
                }
            }).lunaradiodisableSelection();
            Ob(a);
            Pb(a);
            ba() ? (S = 100, za(100)) : Qb(Ra)
        }

        function Pb(b) {
            var a = document.createElement("div");
            a.id = c + "smallcoverwrapper";
            b.appendChild(a);
            d("#" + c + "smallcoverwrapper").css({
                position: "absolute",
                overflow: "hidden",
                background: "rgba(" + f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.1)"
            }).on("click", function() {
                "" != ya && window.open(ya)
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
            "circle" == Na && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2").css({
                "border-radius": "50%"
            })
        }

        function Ob(b) {
            var a = document.createElement("div");
            a.id = c + "smallpauseplaywrapper";
            b.appendChild(a);
            d("#" + c + "smallpauseplaywrapper").css({
                position: "absolute",
                cursor: "pointer"
            }).on("click", function() {
                pb();
                Y ? Ya() : Ja()
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
                fill: A
            }).html('<svg class="lunaradioplayicon" x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
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
                fill: A
            }).html('<svg class="lunaradiopauseicon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter",
                function() {
                    d(this).css("fill", u)
                }).on("mouseleave", function() {
                d(this).css("fill", A)
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
                fill: A
            }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
        }

        function za(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            ba() || (F.volume = b / 100);
            var a = d("#" + c + "volumewrapper").width() * b / 100;
            d("#" + c + "volumefill").css({
                width: a + "px"
            });
            d("#" + c + "volumeicon").css({
                left: a - d("#" + c + "volumeicon").width() / 2 + "px"
            });
            d("#" + c + "textvolumeend").html(Math.round(b) + "%")
        }

        function Oa(b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 == Math.round(b) ? d("#" + c + "smalliconvolume").html('<svg class="lunaradiovolumeofficon" x="0px" y="0px" viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>') :
                d("#" + c + "smalliconvolume").html('<svg class="lunaradiovolumeonicon" x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>');
            ba() || (F.volume = b / 100);
            d("#" + c + "smalltextvolume").html(Math.round(b) + "%");
            b = d("#" + c + "smallvolumegrab").width() * b / 100;
            d("#" + c + "smallvolumebackground").css({
                width: b + "px"
            });
            k.width = b;
            k.height = x
        }

        function db() {
            E = d("#" + c + "containerinside").width();
            x = d("#" + c + "containerinside").height();
            cb && "small" == fa && (x = 80, 959 > E && (x = 60), 599 > E && (x = 40), d("#" + c).css({
                height: x + "px"
            }))
        }

        function jb() {
            db();
            if ("big" == fa) {
                k.width = E;
                k.height = x;
                var b = 1 * x / 100,
                    a = x / 2 - 20 - b - 4 * b;
                d("#" + c + "coverwrapper").css({
                    border: "solid " + 2 * b + "px rgba(" +
                        f(A).r + ", " + f(A).g + ", " + f(A).b + ", 0.2)",
                    top: x / 4 - a / 2 - b + "px",
                    left: E / 2 - a / 2 + "px",
                    width: a + "px",
                    height: a + "px"
                });
                d("#" + c + "backgroundimage").css({
                    "-webkit-filter": "saturate(1.2)",
                    position: "absolute",
                    filter: "saturate(1.2)",
                    top: "0px",
                    left: "0px",
 "-webkit-filter": "blur(20px)", 
                filter: "blur(10px)",  //blur effect
                    width: "100%",
                    height: "100%",
                });
                a = x / 8;
                var h = a / 2,
                    p = a * qb,
                    v = a - p,
                    z = x / 2 + b,
                    m = z + p + b,
                    l = m + v + 2 * b,
                    D = l + h,
                    aa = (x - (l + h)) / 2 + l + h - a / 1.25,
                    ea = aa + a / 1.25 - h / 2;
                d("#" + c + "textradioname").css({
                    top: z + "px",
                    left: "20px",
                    width: E - 40 + "px",
                    height: p + 2 * b + "px",
                    "font-size": p + "px",
                    "line-height": p + 2 * b + "px"
                });
                d("#" + c + "texttitle").css({
                    top: m + "px",
                    left: "20px",
                    width: E - 40 + "px",
                    height: v + 2 * b + "px",
                    "font-size": v + "px",
                    "line-height": v + 2 * b + "px"
                });
                d("#" + c + "volumewrapper").css({
                    top: l + "px",
                    left: "40px",
                    width: E - 80 + "px",
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
                    top: D + "px",
                    left: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "buttonvolumeon").css({
                    top: D +
                        "px",
                    right: "40px",
                    width: h + "px",
                    height: h + "px"
                });
                d("#" + c + "textvolumeend").css({
                    top: D + "px",
                    right: h + 40 + "px",
                    width: 2 * h + "px",
                    height: h + "px",
                    "font-size": h / 2 + "px",
                    "line-height": h + "px"
                });
                d("#" + c + "pauseplaywrapper").css({
                    top: aa + "px",
                    left: E / 2 - a / 1.25 + "px",
                    width: 1.5 * a + "px",
                    height: 1.5 * a + "px"
                });
                d("#" + c + "iconlive").css({
                    top: ea + "px",
                    left: E / 2 + a / 1.25 + 20 + "px",
                    height: h + "px",
                    width: h + "px"
                });
                d("#" + c + "buttonanalyzer").css({
                    top: ea + "px",
                    left: E / 2 - a / 1.25 - 20 - h + "px",
                    height: h + "px",
                    width: h + "px"
                });
                za(S)
            } else b = 10 * x / 100, a = (x - 3 * b) * qb,
                h = x - 3 * b - a, d("#" + c + "smalltextradioname").css({
                    top: "0px",
                    left: x + b + "px",
                    width: E - 3 * x - 2 * b + "px",
                    height: a + 2 * b + "px",
                    "font-size": a + "px",
                    "line-height": a + 2 * b + "px"
                }), d("#" + c + "smalltexttitle").css({
                    top: a + b + "px",
                    left: x + b + "px",
                    width: E - 3 * x - 2 * b + "px",
                    height: h + 2 * b + "px",
                    "font-size": h + "px",
                    "line-height": h + 2 * b + "px"
                }), d("#" + c + "smallpauseplaywrapper").css({
                    top: "0px",
                    left: "0px",
                    width: x + "px",
                    height: x + "px"
                }), "circle" == Na ? d("#" + c + "smallcoverwrapper").css({
                    top: b + "px",
                    right: b + "px",
                    width: x - 2 * b + "px",
                    height: x - 2 * b + "px"
                }) : d("#" + c +
                    "smallcoverwrapper").css({
                    top: "0px",
                    right: "0px",
                    width: x + "px",
                    height: x + "px"
                }), d("#" + c + "smallvolumegrab").css({
                    top: "0px",
                    left: x + "px",
                    width: E - 2 * x + "px",
                    height: x + "px"
                }), d("#" + c + "smallvolumebackground").css({
                    left: x + "px",
                    height: x + "px"
                }), d("#" + c + "smalliconlive").css({
                    top: b + "px",
                    right: x + 2 * b + "px",
                    width: x / 2 + "px",
                    height: x / 2 + "px"
                }), d("#" + c + "smalltextvolume").css({
                    overflow: "hidden",
                    bottom: "0px",
                    right: x / 2.5 + x + 2 * b + "px",
                    width: E / 2 + "px",
                    height: x / 2.5 + "px",
                    "font-size": x / 2.5 - 2 * b + "px",
                    "line-height": x / 2.5 + "px"
                }), d("#" + c +
                    "smalliconvolume").css({
                    bottom: "0px",
                    right: x + 2 * b + "px",
                    width: x / 2.5 + "px",
                    height: x / 2.5 + "px",
                    "font-size": x / 2.5 - 2 * b + "px",
                    "line-height": x / 2.5 + "px"
                }), d("#" + c + "canvas").css({
                    left: x + "px"
                }), Oa(S);
            lb(!1)
        }

        function pb() {
            "none" != d("#" + c + "buttonplay").css("pointer-events") && (d("#" + c + "buttonpause").stop(), d("#" + c + "buttonplay").stop(), d("#" + c + "smallbuttonpause").stop(), d("#" + c + "smallbuttonplay").stop())
        }

        function hb() {
            Y = !0;
            d("#" + c + "buttonpause").fadeIn(200, function() {});
            d("#" + c + "buttonplay").fadeOut(200, function() {});
            d("#" + c + "smallbuttonpause").fadeIn(200, function() {});
            d("#" + c + "smallbuttonplay").fadeOut(200, function() {})
        }

        function ib() {
            Y = !1;
            d("#" + c + "buttonpause").fadeOut(200, function() {});
            d("#" + c + "buttonplay").fadeIn(200, function() {});
            d("#" + c + "smallbuttonpause").fadeOut(200, function() {});
            d("#" + c + "smallbuttonplay").fadeIn(200, function() {});
            d("#" + c + "audiopreloader").fadeOut(0);
            d("#" + c + "smallaudiopreloader").fadeOut(0)
        }

        function Ja() {
            w("playmode");
            try {
                d(".lunaaudioplayer").each(function() {
                    d(this).attr("id") != c && d(this).data("lunaradio").pause()
                })
            } catch (b) {
                w(b)
            }
            hb();
            if (!Va)
                if ("undefined" == typeof Aa) {
                    if ("real" == da) {
                        try {
                            Aa = new(window.AudioContext || window.webkitAudioContext), ua = Aa.createAnalyser(), rb = Rb(Aa), ua.smoothingTimeConstant = .9, ua.fftSize = 1024, w("analyzer is created")
                        } catch (b) {
                            w("error" + b), "real" == da && (da = "fake")
                        }
                        try {
                            "crossOrigin" in F ? (w("found crossOrigin"), F.crossOrigin = "anonymous", F.onerror = Sb, sb = F, Za = Aa.createMediaElementSource(sb), Za.connect(ua), Za.connect(rb), ua.connect(Aa.destination), w("analyzer is connected")) : w("no crossOrigin")
                        } catch (b) {
                            w("error" +
                                b)
                        }
                    }
                } else w("analyzer_audioContext is not undefined");
            T();
            ba() ? (F.muted = !1, F.play()) : F.play()["catch"](function() {
                w("error on html5 play")
            })
        }

        function Ya() {
            ib();
            if (ba()) F.muted = !0;
            else try {
                F.pause(), H()
            } catch (b) {}
        }

        function Rb(b) {
            var a = b.createScriptProcessor(512);
            a.onaudioprocess = Tb;
            a.averaging = .98;
            a.connect(b.destination);
            return a
        }

        function Tb(b) {
            var a = b.inputBuffer.getChannelData(0);
            b = b.inputBuffer.getChannelData(1);
            for (var h = a.length, p = b.length, v = 0, z, m = 0; m < h; m++) z = a[m], v += z * z;
            a = Math.sqrt(v / h);
            Ea =
                Math.max(a, Ea * this.averaging);
            for (m = v = 0; m < p; m++) z = b[m], v += z * z;
            a = Math.sqrt(v / p);
            Fa = Math.max(a, Fa * this.averaging)
        }

        function Sb(b) {
            b.target ? w("server not set correctly") : w("browser doesn't support crossOrigin requests")
        }

        function va() {
            if ("fake" == da || "real" == da) {
                try {
                    window.requestAnimationFrame(va) || window.mozRequestAnimationFrame(va) || window.webkitRequestAnimationFrame(va) || window.msRequestAnimationFrame(va) || window.oRequestAnimationFrame(va)
                } catch (tb) {}
                if ("fake" == da) {
                    q = [];
                    for (var b = 0; 511 > b; b += 1) Y ? q.push(Math.floor(254 /
                        (b / 100 + 1) * Math.random() + 1)) : q.push(0), Ga[b] += (q[b] - Ga[b]) / 9;
                    q = Ga
                }
                try {
                    "real" == da && (q = new Uint8Array(ua.frequencyBinCount), ua.getByteFrequencyData(q))
                } catch (tb) {}
                "animated" == Na && d("#" + c + "smallcoverwrapper, #" + c + "smallcoverwrapper1, #" + c + "smallcoverwrapper2, #" + c + "coverwrapper, #" + c + "coverwrapper1, #" + c + "coverwrapper2").css({
                    "border-top-left-radius": 50 - 50 * Ea + "%",
                    "border-top-right-radius": 50 - 50 * Fa + "%",
                    "border-bottom-left-radius": 50 - 50 * Ea + "%",
                    "border-bottom-right-radius": 50 - 50 * Fa + "%"
                });
                try {
                    switch (ja) {
                        case 0:
                            g.clearRect(0,
                                0, k.width, k.height);
                            break;
                        case 1:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.miterLimit = 1;
                            g.closePath();
                            g.beginPath();
                            for (var a = 0; a < q.length / 2; a += 1) g.lineTo(a * k.width / q.length * 2, k.height - q[a] * k.height / 255 + 2);
                            if ("true" == W) {
                                var h = g.createLinearGradient(0, 0, k.width, 0);
                                h.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                h.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                h.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                h.addColorStop(1,
                                    "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = h
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 2:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 1;
                            g.miterLimit = 1;
                            g.beginPath();
                            for (a = 0; a < q.length / 2; a += 1) g.lineTo(a * k.width / q.length * 2, k.height - q[a] * k.height / 255 + 2);
                            g.lineTo(k.width, k.height);
                            g.lineTo(0, k.height);
                            g.closePath();
                            if ("true" == W) {
                                var p = g.createLinearGradient(0, 0, k.width, 0);
                                p.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                p.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                p.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                p.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.fillStyle = p
                            } else g.fillStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.fill();
                            break;
                        case 3:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            for (a = 0; a < k.width; a += 6) {
                                var v = Math.round(q.length / 2 * a / k.width);
                                g.moveTo(a, k.height);
                                g.lineTo(a,
                                    k.height - q[v] * k.height / 255 + 2)
                            }
                            if ("true" == W) {
                                var z = g.createLinearGradient(0, 0, k.width, 0);
                                z.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                z.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                z.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                z.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = z
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 4:
                            g.clearRect(0,
                                0, k.width, k.height);
                            g.lineWidth = 0;
                            g.miterLimit = 1;
                            a = [];
                            g.beginPath();
                            g.moveTo(0, k.height);
                            for (var m = 0; m < E + 20; m += 20) {
                                var l = Math.round(q.length / 8 * m / E);
                                a.push(m);
                                a.push(k.height - q[l] * k.height / 255 + 2)
                            }
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.20)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height -
                                q[l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.40)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height - q[l + l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.80)" : "rgba(" + f(u).r + ", " +
                                f(u).g + ", " + f(u).b + ", 0.60)";
                            g.fill();
                            g.closePath();
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (m = 0; m < E + 20; m += 20) l = Math.round(q.length / 8 * m / E), a.push(m), a.push(k.height - q[l + l + l + l] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.lineTo(E, k.height);
                            g.lineTo(0, k.height);
                            g.fillStyle = "true" == W ? "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.80)";
                            g.fill();
                            g.closePath();
                            break;
                        case 5:
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 3;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" ==
                                W ? "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.2)";
                            a = [];
                            g.beginPath();
                            g.moveTo(0, k.height);
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.4)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m =
                                Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit = 1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.6)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            g.lineWidth = 2;
                            g.lineCap = "round";
                            g.miterLimit =
                                1;
                            g.strokeStyle = "true" == W ? "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.80)" : "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.8)";
                            g.beginPath();
                            g.moveTo(0, k.height);
                            a = [];
                            for (l = 0; l < E + 20; l += 20) m = Math.round(q.length / 8 * l / E), a.push(l), a.push(k.height - q[m + m + m + m] * k.height / 255 + 2);
                            ma(g, a, .5);
                            g.stroke();
                            g.closePath();
                            break;
                        case 6:
                            var D = k.height;
                            a = D / 2;
                            "big" == fa && (a = x / 2 + x / 8 + 1 * x / 100 * 4 + x / 32, D = 2 * (k.height - a));
                            g.clearRect(0, 0, k.width, k.height);
                            g.lineWidth = 2;
                            g.lineJoin = "round";
                            g.beginPath();
                            for (l = 0; l < k.width; l += 6) {
                                var aa =
                                    Math.round(q.length / 2 * l / k.width);
                                g.moveTo(l, a);
                                g.lineTo(l, a - q[aa] * D / 2 / 255);
                                g.moveTo(l, a);
                                g.lineTo(l, a + q[aa] * D / 2 / 255)
                            }
                            for (l = 3; l < k.width; l += 6) aa = Math.round(q.length / 2 * l / k.width), g.moveTo(l, a), g.lineTo(l, a - q[aa] * D / 4 / 255), g.moveTo(l, a), g.lineTo(l, a + q[aa] * D / 4 / 255);
                            if ("true" == W) {
                                var ea = g.createLinearGradient(0, 0, k.width, 0);
                                ea.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                ea.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.99)");
                                ea.addColorStop(.66 + q[20] / 1E3, "rgba(" +
                                    f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                ea.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = ea
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 7:
                            g.clearRect(0, 0, k.width, k.height);
                            Ha++;
                            if ("true" == W)
                                for (var J = 0; J < q.length / 2; J++) g.beginPath(), g.arc(Math.cos(Ha / V[J].speed) * V[J].radius + V[J].x, Math.sin(Ha / V[J].speed) * V[J].radius + V[J].y, V[J].radius * q[J] / 255, 0, 2 * Math.PI), g.closePath(), g.fillStyle = 0 == J % 2 ? "rgba(" + f(L).r + ", " + f(L).g + ", " +
                                    f(L).b + ", 0.2)" : 0 == J % 3 ? "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", 0.2)" : 0 == J % 5 ? "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.2)" : "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.2)", g.fill();
                            else
                                for (J = 0; J < q.length / 2; J++) g.beginPath(), g.arc(Math.cos(Ha / V[J].speed) * V[J].radius + V[J].x, Math.sin(Ha / V[J].speed) * V[J].radius + V[J].y, V[J].radius * q[J] / 255, 0, 2 * Math.PI), g.closePath(), g.fillStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.2)", g.fill();
                            break;
                        case 8:
                            g.clearRect(0, 0, k.width, k.height);
                            var Ia = k.height / 2,
                                U = k.height / 2;
                            a = 0;
                            "big" == fa && (U = x / 2 + x / 8 + 1 * x / 100 * 4 + x / 32 - x / 8 / 2 / 4 / 2 / 2, Ia = x / 32, a = 40);
                            g.lineWidth = 4;
                            g.lineJoin = "round";
                            g.beginPath();
                            var Pa = Math.round(200 * Ea * (k.width - 40) / 100);
                            for (l = a; l < Pa; l += 6) g.moveTo(l, U), g.lineTo(l, U - Ia);
                            var Qa = Math.round(200 * Fa * (k.width - 40) / 100);
                            for (l = a; l < Qa; l += 6) g.moveTo(l, U), g.lineTo(l, U + Ia);
                            if ("true" == W) {
                                var na = g.createLinearGradient(0, 0, k.width, 0);
                                na.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", 0.99)");
                                na.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b +
                                    ", 0.99)");
                                na.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", 0.99)");
                                na.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", 0.99)");
                                g.strokeStyle = na
                            } else g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " + f(u).b + ", 0.99)";
                            g.stroke();
                            break;
                        case 9:
                            g.clearRect(0, 0, k.width, k.height);
                            D = m = l = 0;
                            g.clearRect(0, 0, k.width, k.height);
                            g.miterLimit = 1;
                            for (m = 0; 10 > m; m += 1) {
                                g.beginPath();
                                g.lineWidth = 2 - m / 10;
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length /
                                    1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length / 1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length / 1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D + D] * k.height / 255 + 2 + 5 * m);
                                g.moveTo(0, k.height - q[0] * k.height / 255 + 2 + 5 * m);
                                for (l = 0; l < q.length / 2; l += 1) D = Math.round(q.length /
                                    1 * l / E), g.lineTo(l * k.width / q.length * 2 + 5 * m, k.height - q[D + D + D + D] * k.height / 255 + 2 + 5 * m);
                                "true" == W ? (a = g.createLinearGradient(0, 0, k.width, 0), a.addColorStop(0, "rgba(" + f(L).r + ", " + f(L).g + ", " + f(L).b + ", " + m / 10 + ")"), a.addColorStop(.33 - q[20] / 1E3, "rgba(" + f(M).r + ", " + f(M).g + ", " + f(M).b + ", " + m / 10 + ")"), a.addColorStop(.66 + q[20] / 1E3, "rgba(" + f(N).r + ", " + f(N).g + ", " + f(N).b + ", " + m / 10 + ")"), a.addColorStop(1, "rgba(" + f(O).r + ", " + f(O).g + ", " + f(O).b + ", " + m / 10 + ")"), g.strokeStyle = a) : g.strokeStyle = "rgba(" + f(u).r + ", " + f(u).g + ", " +
                                    f(u).b + ", " + m / 10 + ")";
                                g.stroke()
                            }
                            break;
                        default:
                            g.clearRect(0, 0, k.width, k.height)
                    }
                } catch (tb) {}
            }
        }

        function ma(b, a, h, p, v, z) {
            b.beginPath();
            var m = p;
            h = "undefined" != typeof h ? h : .5;
            m = m ? m : !1;
            v = v ? v : 16;
            var l = [],
                D;
            p = a.slice(0);
            m ? (p.unshift(a[a.length - 1]), p.unshift(a[a.length - 2]), p.unshift(a[a.length - 1]), p.unshift(a[a.length - 2]), p.push(a[0]), p.push(a[1])) : (p.unshift(a[1]), p.unshift(a[0]), p.push(a[a.length - 2]), p.push(a[a.length - 1]));
            for (D = 2; D < p.length - 4; D += 2)
                for (m = 0; m <= v; m++) {
                    var aa = (p[D + 2] - p[D - 2]) * h;
                    var ea = (p[D +
                        4] - p[D]) * h;
                    var J = (p[D + 3] - p[D - 1]) * h;
                    var Ia = (p[D + 5] - p[D + 1]) * h;
                    var U = m / v;
                    var Pa = 2 * Math.pow(U, 3) - 3 * Math.pow(U, 2) + 1;
                    var Qa = -(2 * Math.pow(U, 3)) + 3 * Math.pow(U, 2);
                    var na = Math.pow(U, 3) - 2 * Math.pow(U, 2) + U;
                    U = Math.pow(U, 3) - Math.pow(U, 2);
                    aa = Pa * p[D] + Qa * p[D + 2] + na * aa + U * ea;
                    J = Pa * p[D + 1] + Qa * p[D + 3] + na * J + U * Ia;
                    l.push(aa);
                    l.push(J)
                }
            b.moveTo(l[0], l[1]);
            for (ca = 2; ca < l.length - 1; ca += 2) b.lineTo(l[ca], l[ca + 1]);
            if (z)
                for (b.beginPath(), z = 0; z < a.length - 1; z += 2) b.rect(a[z] - 2, a[z + 1] - 2, 4, 4)
        }

        function Xa(b) {
            d({
                countNum: S
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    S = this.countNum;
                    za(this.countNum)
                },
                complete: function() {
                    S = b;
                    za(b)
                }
            })
        }

        function Qb(b) {
            d({
                countNum: S
            }).animate({
                countNum: Math.floor(b)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    S = this.countNum;
                    Oa(this.countNum)
                },
                complete: function() {
                    S = b;
                    Oa(b)
                }
            })
        }

        function Wa() {
            switch (kb) {
                case "icecast2":
                    var b = ia + Ma;
                    break;
                case "shoutcast2":
                    b = ia + Ub;
                    break;
                case "radionomy":
                    b = ia;
                    break;
                case "radiojar":
                    b = ia;
                    break;
                case "radioco":
                    b = ia;
                    break;
                default:
                    "#" == $a && ($a = ""), b = ia + $a
            }
            return b
        }

        function ba() {
            return "ios" == pa.os.name.toLowerCase() ? !0 : !1
        }

        function Sa(b) {
            b = ab.decode(b);
            var a = 0,
                h = "";
            do h += String.fromCharCode(b.charCodeAt(a++) - -14); while (a < b.length);
            return h
        }

        function w(b) {
            if ("true" == Vb) {
                var a = new Date;
                b = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + ": " + b;
                window.console && console.log(b);
                0 < d("#debug").length && d("#debug").html(d("#debug").html() + "<br>" + b)
            }
        }

        function f(b) {
            return (b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)) ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3],
                    16)
            } : null
        }
        var bb = n.id;
        if (arguments.length) {
            this.element = d(n);
            this.options = d.extend(!0, {}, this.options, t);
            var Wb = this;
            this.element.bind("remove.lunaradio", function() {
                Wb.destroy()
            })
        }
        for (var fb = r(t.token, ""), fa = r(t.userinterface, "small").toString().toLowerCase(), ub = r(t.backgroundcolor, "rgba(0,0,0,0)"), A = r(t.fontcolor, "#ffffff"), u = r(t.hightlightcolor, "#f86808"), ka = r(t.fontname, ""), eb = r(t.googlefont, ""), qb = r(t.fontratio, "0.4"), ob = r(t.radioname, ""), Da = r(t.scroll, "true").toString().toLowerCase(), ra = r(t.coverimage,
                    "data:image/png;base64,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"),
                qa = r(t.onlycoverimage, "false").toString().toLowerCase(), Na = r(t.coverstyle, "circle").toString().toLowerCase(), da = r(t.usevisualizer, "fake").toString().toLowerCase(), ja = parseInt(r(t.visualizertype, 4)), mb = r(t.itunestoken, ""), sa = r(t.metadatatechnic, "php").toString().toLowerCase(), Db = r(t.ownmetadataurl, ""), Ca = r(t.corsproxy, ""), vb = r(t.usestreamcorsproxy, "false").toString().toLowerCase(), ia = r(t.streamurl, ""), kb = r(t.streamtype, "other").toString().toLowerCase(), Ma = r(t.icecastmountpoint, ""), Fb = r(t.radionomyid,
                    ""), Gb = r(t.radionomyapikey, ""), Hb = r(t.radiojarid, ""), Ib = r(t.radiocoid, ""), Ub = r(t.shoutcastpath, ""), Eb = r(t.shoutcastid, ""), $a = r(t.streamsuffix, "/;type=mp3"), Ab = parseInt(r(t.metadatainterval, 2E4)), Ra = parseInt(r(t.volume, 90)), Vb = r(t.debug, "false").toString().toLowerCase(), oa = r(t.autoplay, "false").toString().toLowerCase(), nb = r(t.displayliveicon, "true").toString().toLowerCase(), Lb = r(t.displayvisualizericon, "true").toString().toLowerCase(), W = r(t.multicolorvisualizer, "false").toString().toLowerCase(), L =
                r(t.color1, "#e66c35").toString().toLowerCase(), M = r(t.color2, "#d04345").toString().toLowerCase(), N = r(t.color3, "#85a752").toString().toLowerCase(), O = r(t.color4, "#067dcc").toString().toLowerCase(), Jb = r(t.visualizeropacity, "0.4"), c, x = 0, E = 0, xa = "", S = 0, la = 0, Y = !1, gb = !1, sb, Aa, k, ua, rb, Ea = 0, Fa = 0, g, Za, F, Ua, q = [], V = [], Ha = 0, Ga = [], ta = 0, Va = !1, pa = (new LUNARADIOParser).getResult(), Ta = !1, ya = "", ca = 0; 511 > ca; ca += 1) Ga.push(Math.floor(254 / (ca / 100 + 1) * Math.random() + 1));
        V = [];
        for (ca = 0; 512 > ca; ca++) {
            var Ba = {};
            Ba.x = Math.floor(1920 *
                Math.random() + 1);
            Ba.y = Math.floor(1080 * Math.random() + 1);
            Ba.radius = Math.floor(1080 * Math.random() / 5 + 2);
            Ba.alpha = 1;
            Ba.speed = Math.floor(50 * Math.random() + 30);
            V.push(Ba)
        }
        var ha = "",
            cb = !1;
        d(document).ready(function() {
            ha = P("lunaradio.min.js");
            w("SCRIPT FOLDER: " + ha);
            w("USERAGENT: " + navigator.userAgent);
            w("BROWSER: " + pa.browser.name);
            w("OS: " + pa.os.name);
            w("usevisualizer: " + da);
            w("visualizertype: " + ja);
            var b = "mobile" == pa.device.type ? !0 : !1;
            w("ismobile: " + b);
            if ("true" == oa) {
                oa = "false";
                try {
                    var a = new Audio;
                    a.autoplay = !0;
                    a.addEventListener("error", function(h) {
                        w(a.readyState)
                    });
                    a.addEventListener("loadedmetadata", function() {
                        w("checkaudio loadedmetadata")
                    }, !1);
                    a.addEventListener("ended", function() {
                        w("checkaudio ended")
                    }, !1);
                    a.addEventListener("play", function() {
                        w("checkaudio play");
                        w("autoplay is allowed by browser");
                        oa = "true"
                    }, !1);
                    a.addEventListener("loadstart", function() {
                        w("checkaudio loadstart")
                    }, !1);
                    a.addEventListener("waiting", function() {
                        w("checkaudio waiting")
                    }, !1);
                    a.addEventListener("seeked", function() {
                            w("checkaudio seeked")
                        },
                        !1);
                    a.addEventListener("canplaythrough", function() {
                        w("checkaudio canplaythrough");
                        I(bb)
                    }, !1);
                    a.addEventListener("pause", function() {
                        w("checkaudio pause")
                    }, !1);
                    a.src = "data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
                } catch (h) {
                    w("autoplay is not allowed by browser"),
                        w(h), oa = "false", I(bb)
                }
            } else I(bb)
        });
        var Xb = function(b) {
            if ("function" === typeof Promise) return new Promise(b);
            this._handler = b;
            this.then = function(a, h) {
                this._handler(a, h)
            };
            return this
        };
        this.Promise = function(b) {
            return new Xb(b)
        };
        var ab = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(b) {
                var a = "",
                    h = 0;
                for (b = ab._utf8_encode(b); h < b.length;) {
                    var p = b.charCodeAt(h++);
                    var v = b.charCodeAt(h++);
                    var z = b.charCodeAt(h++);
                    var m = p >> 2;
                    p = (p & 3) << 4 | v >> 4;
                    var l = (v & 15) << 2 | z >> 6;
                    var D =
                        z & 63;
                    isNaN(v) ? l = D = 64 : isNaN(z) && (D = 64);
                    a = a + this._keyStr.charAt(m) + this._keyStr.charAt(p) + this._keyStr.charAt(l) + this._keyStr.charAt(D)
                }
                return a
            },
            decode: function(b) {
                var a = "",
                    h = 0;
                for (b = b.replace(/[^A-Za-z0-9\+\/=]/g, ""); h < b.length;) {
                    var p = this._keyStr.indexOf(b.charAt(h++));
                    var v = this._keyStr.indexOf(b.charAt(h++));
                    var z = this._keyStr.indexOf(b.charAt(h++));
                    var m = this._keyStr.indexOf(b.charAt(h++));
                    p = p << 2 | v >> 4;
                    v = (v & 15) << 4 | z >> 2;
                    var l = (z & 3) << 6 | m;
                    a += String.fromCharCode(p);
                    64 != z && (a += String.fromCharCode(v));
                    64 != m && (a += String.fromCharCode(l))
                }
                return a = ab._utf8_decode(a)
            },
            _utf8_encode: function(b) {
                b = b.replace(/\r\n/g, "\n");
                for (var a = "", h = 0; h < b.length; h++) {
                    var p = b.charCodeAt(h);
                    128 > p ? a += String.fromCharCode(p) : (127 < p && 2048 > p ? a += String.fromCharCode(p >> 6 | 192) : (a += String.fromCharCode(p >> 12 | 224), a += String.fromCharCode(p >> 6 & 63 | 128)), a += String.fromCharCode(p & 63 | 128))
                }
                return a
            },
            _utf8_decode: function(b) {
                for (var a = "", h = 0, p, v, z; h < b.length;) z = b.charCodeAt(h), 128 > z ? (a += String.fromCharCode(z), h++) : 191 < z && 224 > z ? (p = b.charCodeAt(h +
                    1), a += String.fromCharCode((z & 31) << 6 | p & 63), h += 2) : (p = b.charCodeAt(h + 1), v = b.charCodeAt(h + 2), a += String.fromCharCode((z & 15) << 12 | (p & 63) << 6 | v & 63), h += 3);
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
                    jQuery(this).css("-webkit-touch-callout", "none");
                    jQuery(this).css("-khtml-user-select",
                        "none");
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
            Ta && (w("API CALL: play"), Y || (Y = !0, Ja()))
        };
        this.pause = function() {
            Ta && (w("API CALL: pause"), Y && (Y = !1, Ya()))
        }
    }
});
(function(d, G) {
    var n = {
            extend: function(e, B) {
                var C = {},
                    y;
                for (y in e) C[y] = B[y] && 0 === B[y].length % 2 ? B[y].concat(e[y]) : e[y];
                return C
            },
            has: function(e, B) {
                return "string" === typeof e ? -1 !== B.toLowerCase().indexOf(e.toLowerCase()) : !1
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" === typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : G
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        t = function(e, B) {
            for (var C = 0, y, K, R, Q, wa, Z; C < B.length && !wa;) {
                var Ka = B[C],
                    La =
                    B[C + 1];
                for (y = K = 0; y < Ka.length && !wa;)
                    if (wa = Ka[y++].exec(e))
                        for (R = 0; R < La.length; R++) Z = wa[++K], Q = La[R], "object" === typeof Q && 0 < Q.length ? 2 == Q.length ? this[Q[0]] = "function" == typeof Q[1] ? Q[1].call(this, Z) : Q[1] : 3 == Q.length ? this[Q[0]] = "function" !== typeof Q[1] || Q[1].exec && Q[1].test ? Z ? Z.replace(Q[1], Q[2]) : G : Z ? Q[1].call(this, Z, Q[2]) : G : 4 == Q.length && (this[Q[0]] = Z ? Q[3].call(this, Z.replace(Q[1], Q[2])) : G) : this[Q] = Z ? Z : G;
                C += 2
            }
        },
        I = function(e, B) {
            for (var C in B)
                if ("object" === typeof B[C] && 0 < B[C].length)
                    for (var y = 0; y < B[C].length; y++) {
                        if (n.has(B[C][y],
                                e)) return "?" === C ? G : C
                    } else if (n.has(B[C], e)) return "?" === C ? G : C;
            return e
        },
        r = {
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
        P = {
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
                ["name", ["version", I, {
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
                    ["architecture", n.lowerize]
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
                    ["architecture", /ower/, "", n.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", n.lowerize]
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
                    ["model", I, {
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
                    ["vendor", I, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }],
                    ["model", I, {
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
                    ["vendor", n.trim],
                    ["model", n.trim],
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
                    ["type", n.lowerize], "vendor", "model"
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
                ["name", ["version", I, r]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    ["name", "Windows"],
                    ["version", I, r]
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
        H = function(e, B) {
            "object" === typeof e && (B = e, e = G);
            if (!(this instanceof H)) return (new H(e, B)).getResult();
            var C = e || (d && d.navigator && d.navigator.userAgent ? d.navigator.userAgent : ""),
                y = B ? n.extend(P, B) : P;
            this.getBrowser = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.browser);
                K.major = n.major(K.version);
                return K
            };
            this.getCPU = function() {
                var K = {
                    architecture: G
                };
                t.call(K, C, y.cpu);
                return K
            };
            this.getDevice = function() {
                var K = {
                    vendor: G,
                    model: G,
                    type: G
                };
                t.call(K, C, y.device);
                return K
            };
            this.getEngine = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.engine);
                return K
            };
            this.getOS = function() {
                var K = {
                    name: G,
                    version: G
                };
                t.call(K, C, y.os);
                return K
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
                return C
            };
            this.setUA = function(K) {
                C = K;
                return this
            };
            return this
        };
    H.VERSION = "0.7.21";
    H.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    };
    H.CPU = {
        ARCHITECTURE: "architecture"
    };
    H.DEVICE = {
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
    H.ENGINE = {
        NAME: "name",
        VERSION: "version"
    };
    H.OS = {
        NAME: "name",
        VERSION: "version"
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports =
        H), exports.LUNARADIOParser = H) : "function" === typeof define && define.amd ? define(function() {
        return H
    }) : d && (d.LUNARADIOParser = H);
    var T = d && (d.jQuery || d.Zepto);
    if (T && !T.ua) {
        var X = new H;
        T.ua = X.getResult();
        T.ua.get = function() {
            return X.getUA()
        };
        T.ua.set = function(e) {
            X.setUA(e);
            e = X.getResult();
            for (var B in e) T.ua[B] = e[B]
        }
    }
})("object" === typeof window ? window : this);
(function(d, G) {
    "function" === typeof define && define.amd ? define(["jquery"], G) : d.jQuery ? G(d.jQuery) : G(d.Zepto)
})(this, function(d, G) {
    d.fn.lunaradioMarquee = function(n) {
        var t = "string" === typeof n,
            I = Array.prototype.slice.call(arguments, 1),
            r = this;
        n = !t && I.length ? d.extend.apply(null, [!0, n].concat(I)) : n;
        if (t && "_" === n.charAt(0)) return r;
        t ? this.each(function() {
            var P = d(this).data("lunaradioMarquee"),
                H = P && d.isFunction(P[n]) ? P[n].apply(P, I) : P;
            if (H !== P && H !== G) return r = H, !1
        }) : this.each(function() {
            d(this).data("lunaradioMarquee",
                new d.lunaradioMarquee(this, n))
        });
        return r
    };
    d.lunaradioMarquee = function(n, t) {
        function I() {
            var B = T ? -1 : 1,
                C = T ? -1 * P : 0;
            r = (T ? 0 > r : r > -1 * P) ? r - H * B : C;
            e.style.whiteSpace = "nowrap";
            e.style.transform = "translate(" + r + "px, 0) translateZ(0)";
            window.requestAnimationFrame(I) || window.mozRequestAnimationFrame(I) || window.webkitRequestAnimationFrame(I) || window.msRequestAnimationFrame(I) || window.oRequestAnimationFrame(I)
        }
        var r = 0,
            P, H = n.dataset.speed || .25,
            T = n.dataset.reverse;
        n.parentElement.getBoundingClientRect();
        var X = n.children[0];
        var e = document.createElement("div");
        e.style.whiteSpace = "nowrap";
        (function() {
            X.style.display = "inline-block";
            P = X.offsetWidth;
            for (var B = 0; 20 > B; B++) {
                var C = X.cloneNode(!0);
                C.style.display = "inline-block";
                e.appendChild(C)
            }
            T && (r = -1 * P);
            n.classList.add("is-init")
        })();
        e.appendChild(X);
        n.appendChild(e);
        I();
        this.play = function() {
            I()
        };
        this.pause = function() {}
    }
});
(function(d) {
    function G(e, B, C) {
        if ("touch" !== B.substr(0, 5)) return d(e).unbind(B, C);
        var y;
        for (y = 0; y < n._binds.length; y++) n._binds[y].elem === e && n._binds[y].type === B && n._binds[y].func === C && (document.addEventListener ? e.removeEventListener(B, n._binds[y].fnc, !1) : e.detachEvent("on" + B, n._binds[y].fnc), n._binds.splice(y--, 1))
    }

    function n(e, B, C, y) {
        if ("touch" !== B.substr(0, 5)) return d(e).bind(B, y, C);
        if (n[B]) return n[B].bind(e, B, C, y);
        var K = function(R) {
            R || (R = window.event);
            R.stopPropagation || (R.stopPropagation = function() {
                this.cancelBubble = !0
            });
            R.data = y;
            C.call(e, R)
        };
        document.addEventListener ? e.addEventListener(B, K, !1) : e.attachEvent("on" + B, K);
        n._binds.push({
            elem: e,
            type: B,
            func: C,
            fnc: K
        })
    }

    function t(e) {
        e.data.position.x = e.pageX;
        e.data.position.y = e.pageY;
        e.data.start.x = e.pageX;
        e.data.start.y = e.pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), n(e.data.affects, "mousemove", I, e.data), n(e.data.affects,
            "mouseup", r, e.data))
    }

    function I(e) {
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

    function r(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        G(e.data.affects, "mousemove", I);
        G(e.data.affects, "mouseup", r);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }

    function P(e) {
        e.data.position.x = e.touches[0].pageX;
        e.data.position.y = e.touches[0].pageY;
        e.data.start.x = e.touches[0].pageX;
        e.data.start.y = e.touches[0].pageY;
        e.data.event = e;
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation &&
            e.data.stopPropagation && e.stopPropagation(), n(e.data.affects, "touchmove", H, e.data), n(e.data.affects, "touchend", T, e.data))
    }

    function H(e) {
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

    function T(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault();
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation();
        G(e.data.affects, "touchmove", H);
        G(e.data.affects, "touchend", T);
        e.data.event = e;
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    var X = d.extend;
    n._binds = [];
    d.fn.lunaradiograb = function(e, B) {
        return this.each(function() {
            var C = {
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
            X(C, e);
            C.element = this;
            n(this, "mousedown", t, C);
            C.touch && n(this, "touchstart", P, C)
        })
    };
    d.fn.lunaradioungrab = function(e) {
        return this.each(function() {
            G(this, "mousedown", "mousedown")
        })
    }
})(jQuery);

//]]>
