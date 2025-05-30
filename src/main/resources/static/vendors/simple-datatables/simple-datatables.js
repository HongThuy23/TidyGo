(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.simpleDatatables = f()
    }
})(function () {
    var define, module, exports;
    return (function () {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {
                        exports: {}
                    };
                    e[i][0].call(p.exports, function (r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }
            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }
        return r
    })()({
        1: [function (require, module, exports) {
            (function (global) {
                "use strict";
                var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

                function createCommonjsModule(t, n) {
                    return t(n = {
                        exports: {}
                    }, n.exports), n.exports
                }
                var dayjs_min = createCommonjsModule(function (t, n) {
                    t.exports = function () {
                        var t = "millisecond",
                            n = "second",
                            e = "minute",
                            r = "hour",
                            i = "day",
                            s = "week",
                            o = "month",
                            a = "quarter",
                            u = "year",
                            h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                            f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                            c = function (t, n, e) {
                                var r = String(t);
                                return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t
                            },
                            d = {
                                s: c,
                                z: function (t) {
                                    var n = -t.utcOffset(),
                                        e = Math.abs(n),
                                        r = Math.floor(e / 60),
                                        i = e % 60;
                                    return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0")
                                },
                                m: function (t, n) {
                                    var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                        r = t.clone().add(e, o),
                                        i = n - r < 0,
                                        s = t.clone().add(e + (i ? -1 : 1), o);
                                    return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0)
                                },
                                a: function (t) {
                                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                                },
                                p: function (h) {
                                    return {
                                        M: o,
                                        y: u,
                                        w: s,
                                        d: i,
                                        h: r,
                                        m: e,
                                        s: n,
                                        ms: t,
                                        Q: a
                                    }[h] || String(h || "").toLowerCase().replace(/s$/, "")
                                },
                                u: function (t) {
                                    return void 0 === t
                                }
                            },
                            l = {
                                name: "en",
                                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                            },
                            m = "en",
                            $ = {};
                        $[m] = l;
                        var M = function (t) {
                            return t instanceof v
                        },
                            D = function (t, n, e) {
                                var r;
                                if (!t) return m;
                                if ("string" == typeof t) $[t] && (r = t), n && ($[t] = n, r = t);
                                else {
                                    var i = t.name;
                                    $[i] = t, r = i
                                }
                                return e || (m = r), r
                            },
                            y = function (t, n, e) {
                                if (M(t)) return t.clone();
                                var r = n ? "string" == typeof n ? {
                                    format: n,
                                    pl: e
                                } : n : {};
                                return r.date = t, new v(r)
                            },
                            g = d;
                        g.l = D, g.i = M, g.w = function (t, n) {
                            return y(t, {
                                locale: n.$L,
                                utc: n.$u
                            })
                        };
                        var v = function () {
                            function c(t) {
                                this.$L = this.$L || D(t.locale, null, !0), this.parse(t)
                            }
                            var d = c.prototype;
                            return d.parse = function (t) {
                                this.$d = function (t) {
                                    var n = t.date,
                                        e = t.utc;
                                    if (null === n) return new Date(NaN);
                                    if (g.u(n)) return new Date;
                                    if (n instanceof Date) return new Date(n);
                                    if ("string" == typeof n && !/Z$/i.test(n)) {
                                        var r = n.match(h);
                                        if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)
                                    }
                                    return new Date(n)
                                }(t), this.init()
                            }, d.init = function () {
                                var t = this.$d;
                                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                            }, d.$utils = function () {
                                return g
                            }, d.isValid = function () {
                                return !("Invalid Date" === this.$d.toString())
                            }, d.isSame = function (t, n) {
                                var e = y(t);
                                return this.startOf(n) <= e && e <= this.endOf(n)
                            }, d.isAfter = function (t, n) {
                                return y(t) < this.startOf(n)
                            }, d.isBefore = function (t, n) {
                                return this.endOf(n) < y(t)
                            }, d.$g = function (t, n, e) {
                                return g.u(t) ? this[n] : this.set(e, t)
                            }, d.year = function (t) {
                                return this.$g(t, "$y", u)
                            }, d.month = function (t) {
                                return this.$g(t, "$M", o)
                            }, d.day = function (t) {
                                return this.$g(t, "$W", i)
                            }, d.date = function (t) {
                                return this.$g(t, "$D", "date")
                            }, d.hour = function (t) {
                                return this.$g(t, "$H", r)
                            }, d.minute = function (t) {
                                return this.$g(t, "$m", e)
                            }, d.second = function (t) {
                                return this.$g(t, "$s", n)
                            }, d.millisecond = function (n) {
                                return this.$g(n, "$ms", t)
                            }, d.unix = function () {
                                return Math.floor(this.valueOf() / 1e3)
                            }, d.valueOf = function () {
                                return this.$d.getTime()
                            }, d.startOf = function (t, a) {
                                var h = this,
                                    f = !!g.u(a) || a,
                                    c = g.p(t),
                                    d = function (t, n) {
                                        var e = g.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);
                                        return f ? e : e.endOf(i)
                                    },
                                    l = function (t, n) {
                                        return g.w(h.toDate()[t].apply(h.toDate(), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h)
                                    },
                                    m = this.$W,
                                    $ = this.$M,
                                    M = this.$D,
                                    D = "set" + (this.$u ? "UTC" : "");
                                switch (c) {
                                    case u:
                                        return f ? d(1, 0) : d(31, 11);
                                    case o:
                                        return f ? d(1, $) : d(0, $ + 1);
                                    case s:
                                        var y = this.$locale().weekStart || 0,
                                            v = (m < y ? m + 7 : m) - y;
                                        return d(f ? M - v : M + (6 - v), $);
                                    case i:
                                    case "date":
                                        return l(D + "Hours", 0);
                                    case r:
                                        return l(D + "Minutes", 1);
                                    case e:
                                        return l(D + "Seconds", 2);
                                    case n:
                                        return l(D + "Milliseconds", 3);
                                    default:
                                        return this.clone()
                                }
                            }, d.endOf = function (t) {
                                return this.startOf(t, !1)
                            }, d.$set = function (s, a) {
                                var h, f = g.p(s),
                                    c = "set" + (this.$u ? "UTC" : ""),
                                    d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[o] = c + "Month", h[u] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
                                    l = f === i ? this.$D + (a - this.$W) : a;
                                if (f === o || f === u) {
                                    var m = this.clone().set("date", 1);
                                    m.$d[d](l), m.init(), this.$d = m.set("date", Math.min(this.$D, m.daysInMonth())).toDate()
                                } else d && this.$d[d](l);
                                return this.init(), this
                            }, d.set = function (t, n) {
                                return this.clone().$set(t, n)
                            }, d.get = function (t) {
                                return this[g.p(t)]()
                            }, d.add = function (t, a) {
                                var h, f = this;
                                t = Number(t);
                                var c = g.p(a),
                                    d = function (n) {
                                        var e = y(f);
                                        return g.w(e.date(e.date() + Math.round(n * t)), f)
                                    };
                                if (c === o) return this.set(o, this.$M + t);
                                if (c === u) return this.set(u, this.$y + t);
                                if (c === i) return d(1);
                                if (c === s) return d(7);
                                var l = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,
                                    m = this.valueOf() + t * l;
                                return g.w(m, this)
                            }, d.subtract = function (t, n) {
                                return this.add(-1 * t, n)
                            }, d.format = function (t) {
                                var n = this;
                                if (!this.isValid()) return "Invalid Date";
                                var e = t || "YYYY-MM-DDTHH:mm:ssZ",
                                    r = g.z(this),
                                    i = this.$locale(),
                                    s = this.$H,
                                    o = this.$m,
                                    a = this.$M,
                                    u = i.weekdays,
                                    h = i.months,
                                    c = function (t, r, i, s) {
                                        return t && (t[r] || t(n, e)) || i[r].substr(0, s)
                                    },
                                    d = function (t) {
                                        return g.s(s % 12 || 12, t, "0")
                                    },
                                    l = i.meridiem || function (t, n, e) {
                                        var r = t < 12 ? "AM" : "PM";
                                        return e ? r.toLowerCase() : r
                                    },
                                    m = {
                                        YY: String(this.$y).slice(-2),
                                        YYYY: this.$y,
                                        M: a + 1,
                                        MM: g.s(a + 1, 2, "0"),
                                        MMM: c(i.monthsShort, a, h, 3),
                                        MMMM: h[a] || h(this, e),
                                        D: this.$D,
                                        DD: g.s(this.$D, 2, "0"),
                                        d: String(this.$W),
                                        dd: c(i.weekdaysMin, this.$W, u, 2),
                                        ddd: c(i.weekdaysShort, this.$W, u, 3),
                                        dddd: u[this.$W],
                                        H: String(s),
                                        HH: g.s(s, 2, "0"),
                                        h: d(1),
                                        hh: d(2),
                                        a: l(s, o, !0),
                                        A: l(s, o, !1),
                                        m: String(o),
                                        mm: g.s(o, 2, "0"),
                                        s: String(this.$s),
                                        ss: g.s(this.$s, 2, "0"),
                                        SSS: g.s(this.$ms, 3, "0"),
                                        Z: r
                                    };
                                return e.replace(f, function (t, n) {
                                    return n || m[t] || r.replace(":", "")
                                })
                            }, d.utcOffset = function () {
                                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                            }, d.diff = function (t, h, f) {
                                var c, d = g.p(h),
                                    l = y(t),
                                    m = 6e4 * (l.utcOffset() - this.utcOffset()),
                                    $ = this - l,
                                    M = g.m(this, l);
                                return M = (c = {}, c[u] = M / 12, c[o] = M, c[a] = M / 3, c[s] = ($ - m) / 6048e5, c[i] = ($ - m) / 864e5, c[r] = $ / 36e5, c[e] = $ / 6e4, c[n] = $ / 1e3, c)[d] || $, f ? M : g.a(M)
                            }, d.daysInMonth = function () {
                                return this.endOf(o).$D
                            }, d.$locale = function () {
                                return $[this.$L]
                            }, d.locale = function (t, n) {
                                if (!t) return this.$L;
                                var e = this.clone();
                                return e.$L = D(t, n, !0), e
                            }, d.clone = function () {
                                return g.w(this.toDate(), this)
                            }, d.toDate = function () {
                                return new Date(this.$d)
                            }, d.toJSON = function () {
                                return this.isValid() ? this.toISOString() : null
                            }, d.toISOString = function () {
                                return this.$d.toISOString()
                            }, d.toString = function () {
                                return this.$d.toUTCString()
                            }, c
                        }();
                        return y.prototype = v.prototype, y.extend = function (t, n) {
                            return t(n, v, y), y
                        }, y.locale = D, y.isDayjs = M, y.unix = function (t) {
                            return y(1e3 * t)
                        }, y.en = $[m], y.Ls = $, y
                    }()
                }),
                    customParseFormat = createCommonjsModule(function (t, n) {
                        var e, r, i, s, o, a, u, h, f;
                        t.exports = (r = /(\[[^[]*\])|([-:\/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d*[^\s\d-:\/.()]+/, u = [/[+-]\d\d:?\d\d/, function (t) {
                            var n, e;
                            (this.zone || (this.zone = {})).offset = (n = t.match(/([+-]|\d\d)/g), 0 == (e = 60 * n[1] + +n[2]) ? 0 : "+" === n[0] ? -e : e)
                        }], h = {
                            A: [/[AP]M/, function (t) {
                                this.afternoon = "PM" === t
                            }],
                            a: [/[ap]m/, function (t) {
                                this.afternoon = "pm" === t
                            }],
                            S: [/\d/, function (t) {
                                this.milliseconds = 100 * +t
                            }],
                            SS: [i = /\d\d/, function (t) {
                                this.milliseconds = 10 * +t
                            }],
                            SSS: [/\d{3}/, function (t) {
                                this.milliseconds = +t
                            }],
                            s: [s = /\d\d?/, (a = function (t) {
                                return function (n) {
                                    this[t] = +n
                                }
                            })("seconds")],
                            ss: [s, a("seconds")],
                            m: [s, a("minutes")],
                            mm: [s, a("minutes")],
                            H: [s, a("hours")],
                            h: [s, a("hours")],
                            HH: [s, a("hours")],
                            hh: [s, a("hours")],
                            D: [s, a("day")],
                            DD: [i, a("day")],
                            Do: [o, function (t) {
                                var n = e.ordinal,
                                    r = t.match(/\d+/);
                                if (this.day = r[0], n)
                                    for (var i = 1; i <= 31; i += 1) n(i).replace(/\[|\]/g, "") === t && (this.day = i)
                            }],
                            M: [s, a("month")],
                            MM: [i, a("month")],
                            MMM: [o, function (t) {
                                var n = e,
                                    r = n.months,
                                    i = n.monthsShort,
                                    s = i ? i.findIndex(function (n) {
                                        return n === t
                                    }) : r.findIndex(function (n) {
                                        return n.substr(0, 3) === t
                                    });
                                if (s < 0) throw new Error;
                                this.month = s + 1
                            }],
                            MMMM: [o, function (t) {
                                var n = e.months.indexOf(t);
                                if (n < 0) throw new Error;
                                this.month = n + 1
                            }],
                            Y: [/[+-]?\d+/, a("year")],
                            YY: [i, function (t) {
                                t = +t, this.year = t + (t > 68 ? 1900 : 2e3)
                            }],
                            YYYY: [/\d{4}/, a("year")],
                            Z: u,
                            ZZ: u
                        }, f = function (t, n, e) {
                            try {
                                var i = function (t) {
                                    for (var n = t.match(r), e = n.length, i = 0; i < e; i += 1) {
                                        var s = n[i],
                                            o = h[s],
                                            a = o && o[0],
                                            u = o && o[1];
                                        n[i] = u ? {
                                            regex: a,
                                            parser: u
                                        } : s.replace(/^\[|\]$/g, "")
                                    }
                                    return function (t) {
                                        for (var r = {}, i = 0, s = 0; i < e; i += 1) {
                                            var o = n[i];
                                            if ("string" == typeof o) s += o.length;
                                            else {
                                                var a = o.regex,
                                                    u = o.parser,
                                                    h = t.substr(s),
                                                    f = a.exec(h)[0];
                                                u.call(r, f), t = t.replace(f, "")
                                            }
                                        }
                                        return function (t) {
                                            var n = t.afternoon;
                                            if (void 0 !== n) {
                                                var e = t.hours;
                                                n ? e < 12 && (t.hours += 12) : 12 === e && (t.hours = 0), delete t.afternoon
                                            }
                                        }(r), r
                                    }
                                }(n)(t),
                                    s = i.year,
                                    o = i.month,
                                    a = i.day,
                                    u = i.hours,
                                    f = i.minutes,
                                    c = i.seconds,
                                    d = i.milliseconds,
                                    l = i.zone;
                                if (l) return new Date(Date.UTC(s, o - 1, a, u || 0, f || 0, c || 0, d || 0) + 60 * l.offset * 1e3);
                                var m = new Date,
                                    $ = s || m.getFullYear(),
                                    M = o > 0 ? o - 1 : m.getMonth(),
                                    D = a || m.getDate(),
                                    y = u || 0,
                                    g = f || 0,
                                    v = c || 0,
                                    p = d || 0;
                                return e ? new Date(Date.UTC($, M, D, y, g, v, p)) : new Date($, M, D, y, g, v, p)
                            } catch (t) {
                                return new Date("")
                            }
                        }, function (t, n, r) {
                            var i = n.prototype,
                                s = i.parse;
                            i.parse = function (t) {
                                var n = t.date,
                                    i = t.format,
                                    o = t.pl,
                                    a = t.utc;
                                this.$u = a, i ? (e = o ? r.Ls[o] : this.$locale(), this.$d = f(n, i, a), this.init(t)) : s.call(this, t)
                            }
                        })
                    });
                dayjs_min.extend(customParseFormat);
                const parseDate = (t, n) => {
                    let e = !1;
                    if (n) switch (n) {
                        case "ISO_8601":
                            e = t;
                            break;
                        case "RFC_2822":
                            e = dayjs_min(t, "ddd, MM MMM YYYY HH:mm:ss ZZ").format("YYYYMMDD");
                            break;
                        case "MYSQL":
                            e = dayjs_min(t, "YYYY-MM-DD hh:mm:ss").format("YYYYMMDD");
                            break;
                        case "UNIX":
                            e = dayjs_min(t).unix();
                            break;
                        default:
                            e = dayjs_min(t, n).format("YYYYMMDD")
                    }
                    return e
                };
                exports.parseDate = parseDate;


            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}],
        2: [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            const isObject = t => "[object Object]" === Object.prototype.toString.call(t),
                isJson = t => {
                    let e = !1;
                    try {
                        e = JSON.parse(t)
                    } catch (t) {
                        return !1
                    }
                    return !(null === e || !Array.isArray(e) && !isObject(e)) && e
                },
                createElement = (t, e) => {
                    const s = document.createElement(t);
                    if (e && "object" == typeof e)
                        for (const t in e) "html" === t ? s.innerHTML = e[t] : s.setAttribute(t, e[t]);
                    return s
                },
                flush = t => {
                    t instanceof NodeList ? t.forEach(t => flush(t)) : t.innerHTML = ""
                },
                button = (t, e, s) => createElement("li", {
                    class: "page-item " + t,
                    html: `<a href="#" class="page-link" data-page="${e}">${s}</a>`
                }),
                sortItems = (t, e) => {
                    let s, a;
                    1 === e ? (s = 0, a = t.length) : -1 === e && (s = t.length - 1, a = -1);
                    for (let i = !0; i;) {
                        i = !1;
                        for (let n = s; n != a; n += e)
                            if (t[n + e] && t[n].value > t[n + e].value) {
                                const s = t[n],
                                    a = t[n + e],
                                    l = s;
                                t[n] = a, t[n + e] = l, i = !0
                            }
                    }
                    return t
                },
                truncate = (t, e, s, a, i) => {
                    let n;
                    const l = 2 * (a = a || 2);
                    let r = e - a,
                        h = e + a;
                    const o = [],
                        d = [];
                    e < 4 - a + l ? h = 3 + l : e > s - (3 - a + l) && (r = s - (2 + l));
                    for (let e = 1; e <= s; e++)
                        if (1 == e || e == s || e >= r && e <= h) {
                            const s = t[e - 1];
                            s.classList.remove("active"), o.push(s)
                        } return o.forEach(e => {
                            const s = e.children[0].getAttribute("data-page");
                            if (n) {
                                const e = n.children[0].getAttribute("data-page");
                                if (s - e == 2) d.push(t[e]);
                                else if (s - e != 1) {
                                    const t = createElement("li", {
                                        class: "ellipsis",
                                        html: `<a href="#">${i}</a>`
                                    });
                                    d.push(t)
                                }
                            }
                            d.push(e), n = e
                        }), d
                };
            class Rows {
                constructor(t, e) {
                    return this.dt = t, this.rows = e, this
                }
                build(t) {
                    const e = createElement("tr");
                    let s = this.dt.headings;
                    return s.length || (s = t.map(() => "")), s.forEach((s, a) => {
                        const i = createElement("td");
                        t[a] && t[a].length || (t[a] = ""), i.innerHTML = t[a], i.data = t[a], e.appendChild(i)
                    }), e
                }
                render(t) {
                    return t
                }
                add(t) {
                    if (Array.isArray(t)) {
                        const e = this.dt;
                        Array.isArray(t[0]) ? t.forEach(t => {
                            e.data.push(this.build(t))
                        }) : e.data.push(this.build(t)), e.data.length && (e.hasRows = !0), this.update(), e.columns().rebuild()
                    }
                }
                remove(t) {
                    const e = this.dt;
                    Array.isArray(t) ? (t.sort((t, e) => e - t), t.forEach(t => {
                        e.data.splice(t, 1)
                    })) : "all" == t ? e.data = [] : e.data.splice(t, 1), e.data.length || (e.hasRows = !1), this.update(), e.columns().rebuild()
                }
                update() {
                    this.dt.data.forEach((t, e) => {
                        t.dataIndex = e
                    })
                }
            }
            class Columns {
                constructor(t) {
                    return this.dt = t, this
                }
                swap(t) {
                    if (t.length && 2 === t.length) {
                        const e = [];
                        this.dt.headings.forEach((t, s) => {
                            e.push(s)
                        });
                        const s = t[0],
                            a = t[1],
                            i = e[a];
                        e[a] = e[s], e[s] = i, this.order(e)
                    }
                }
                order(t) {
                    let e, s, a, i, n, l, r;
                    const h = [
                        [],
                        [],
                        [],
                        []
                    ],
                        o = this.dt;
                    t.forEach((t, a) => {
                        n = o.headings[t], l = "false" !== n.getAttribute("data-sortable"), (e = n.cloneNode(!0)).originalCellIndex = a, e.sortable = l, h[0].push(e), o.hiddenColumns.includes(t) || ((s = n.cloneNode(!0)).originalCellIndex = a, s.sortable = l, h[1].push(s))
                    }), o.data.forEach((e, s) => {
                        a = e.cloneNode(!1), i = e.cloneNode(!1), a.dataIndex = i.dataIndex = s, null !== e.searchIndex && void 0 !== e.searchIndex && (a.searchIndex = i.searchIndex = e.searchIndex), t.forEach(t => {
                            (r = e.cells[t].cloneNode(!0)).data = e.cells[t].data, a.appendChild(r), o.hiddenColumns.includes(t) || ((r = e.cells[t].cloneNode(!0)).data = e.cells[t].data, i.appendChild(r))
                        }), h[2].push(a), h[3].push(i)
                    }), o.headings = h[0], o.activeHeadings = h[1], o.data = h[2], o.activeRows = h[3], o.update()
                }
                hide(t) {
                    if (t.length) {
                        const e = this.dt;
                        t.forEach(t => {
                            e.hiddenColumns.includes(t) || e.hiddenColumns.push(t)
                        }), this.rebuild()
                    }
                }
                show(t) {
                    if (t.length) {
                        let e;
                        const s = this.dt;
                        t.forEach(t => {
                            (e = s.hiddenColumns.indexOf(t)) > -1 && s.hiddenColumns.splice(e, 1)
                        }), this.rebuild()
                    }
                }
                visible(t) {
                    let e;
                    const s = this.dt;
                    return t = t || s.headings.map(t => t.originalCellIndex), isNaN(t) ? Array.isArray(t) && (e = [], t.forEach(t => {
                        e.push(!s.hiddenColumns.includes(t))
                    })) : e = !s.hiddenColumns.includes(t), e
                }
                add(t) {
                    let e;
                    const s = document.createElement("th");
                    if (!this.dt.headings.length) return this.dt.insert({
                        headings: [t.heading],
                        data: t.data.map(t => [t])
                    }), void this.rebuild();
                    this.dt.hiddenHeader ? s.innerHTML = "" : t.heading.nodeName ? s.appendChild(t.heading) : s.innerHTML = t.heading, this.dt.headings.push(s), this.dt.data.forEach((s, a) => {
                        t.data[a] && (e = document.createElement("td"), t.data[a].nodeName ? e.appendChild(t.data[a]) : e.innerHTML = t.data[a], e.data = e.innerHTML, t.render && (e.innerHTML = t.render.call(this, e.data, e, s)), s.appendChild(e))
                    }), t.type && s.setAttribute("data-type", t.type), t.format && s.setAttribute("data-format", t.format), t.hasOwnProperty("sortable") && (s.sortable = t.sortable, s.setAttribute("data-sortable", !0 === t.sortable ? "true" : "false")), this.rebuild(), this.dt.renderHeader()
                }
                remove(t) {
                    Array.isArray(t) ? (t.sort((t, e) => e - t), t.forEach(t => this.remove(t))) : (this.dt.headings.splice(t, 1), this.dt.data.forEach(e => {
                        e.removeChild(e.cells[t])
                    })), this.rebuild()
                }
                filter(t, e, s, a) {
                    const i = this.dt;
                    if (i.filterState || (i.filterState = {
                        originalData: i.data
                    }), !i.filterState[t]) {
                        const e = [...a, () => !0];
                        i.filterState[t] = function () {
                            let t = 0;
                            return () => e[t++ % e.length]
                        }()
                    }
                    const n = i.filterState[t](),
                        l = Array.from(i.filterState.originalData).filter(e => {
                            const s = e.cells[t],
                                a = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.innerText;
                            return "function" == typeof n ? n(a) : a === n
                        });
                    i.data = l, this.rebuild(), i.update(), s || i.emit("datatable.sort", t, e)
                }
                sort(t, e, s) {
                    const a = this.dt;
                    if (a.hasHeadings && (t < 0 || t > a.headings.length)) return !1;
                    const i = a.options.filters && a.options.filters[a.headings[t].textContent];
                    if (i && 0 !== i.length) return void this.filter(t, e, s, i);
                    a.sorting = !0, s || a.emit("datatable.sorting", t, e);
                    let n = a.data;
                    const l = [],
                        r = [];
                    let h = 0,
                        o = 0;
                    const d = a.headings[t],
                        c = [];
                    if ("date" === d.getAttribute("data-type")) {
                        let t = !1;
                        d.hasAttribute("data-format") && (t = d.getAttribute("data-format")), c.push(new Promise(function (t) {
                            t(require("./date-4abbfef1.js"))
                        }).then(({
                            parseDate: e
                        }) => s => e(s, t)))
                    }
                    Promise.all(c).then(i => {
                        const c = i[0];
                        let p, u;
                        Array.from(n).forEach(e => {
                            const s = e.cells[t],
                                a = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.innerText;
                            let i;
                            i = c ? c(a) : "string" == typeof a ? a.replace(/(\$|,|\s|%)/g, "") : a, parseFloat(i) == i ? r[o++] = {
                                value: Number(i),
                                row: e
                            } : l[h++] = {
                                value: "string" == typeof a ? a.toLowerCase() : a,
                                row: e
                            }
                        }), e || (e = d.classList.contains("asc") ? "desc" : "asc"), "desc" == e ? (p = sortItems(l, -1), u = sortItems(r, -1), d.classList.remove("asc"), d.classList.add("desc")) : (p = sortItems(r, 1), u = sortItems(l, 1), d.classList.remove("desc"), d.classList.add("asc")), a.lastTh && d != a.lastTh && (a.lastTh.classList.remove("desc"), a.lastTh.classList.remove("asc")), a.lastTh = d, n = p.concat(u), a.data = [];
                        const g = [];
                        n.forEach((t, e) => {
                            a.data.push(t.row), null !== t.row.searchIndex && void 0 !== t.row.searchIndex && g.push(e)
                        }), a.searchData = g, this.rebuild(), a.update(), s || a.emit("datatable.sort", t, e)
                    })
                }
                rebuild() {
                    let t, e, s, a;
                    const i = this.dt,
                        n = [];
                    i.activeRows = [], i.activeHeadings = [], i.headings.forEach((t, e) => {
                        t.originalCellIndex = e, t.sortable = "false" !== t.getAttribute("data-sortable"), i.hiddenColumns.includes(e) || i.activeHeadings.push(t)
                    }), i.data.forEach((l, r) => {
                        t = l.cloneNode(!1), e = l.cloneNode(!1), t.dataIndex = e.dataIndex = r, null !== l.searchIndex && void 0 !== l.searchIndex && (t.searchIndex = e.searchIndex = l.searchIndex), Array.from(l.cells).forEach(n => {
                            (s = n.cloneNode(!0)).data = n.data, t.appendChild(s), i.hiddenColumns.includes(s.cellIndex) || ((a = s.cloneNode(!0)).data = s.data, e.appendChild(a))
                        }), n.push(t), i.activeRows.push(e)
                    }), i.data = n, i.update()
                }
            }
            const dataToTable = function (t) {
                let e = !1,
                    s = !1;
                if ((t = t || this.options.data).headings) {
                    e = createElement("thead");
                    const s = createElement("tr");
                    t.headings.forEach(t => {
                        const e = createElement("th", {
                            html: t
                        });
                        s.appendChild(e)
                    }), e.appendChild(s)
                }
                t.data && t.data.length && (s = createElement("tbody"), t.data.forEach(e => {
                    if (t.headings && t.headings.length !== e.length) throw new Error("The number of rows do not match the number of headings.");
                    const a = createElement("tr");
                    e.forEach(t => {
                        const e = createElement("td", {
                            html: t
                        });
                        a.appendChild(e)
                    }), s.appendChild(a)
                })), e && (null !== this.table.tHead && this.table.removeChild(this.table.tHead), this.table.appendChild(e)), s && (this.table.tBodies.length && this.table.removeChild(this.table.tBodies[0]), this.table.appendChild(s))
            },
                defaultConfig = {
                    sortable: !0,
                    searchable: !0,
                    paging: !0,
                    perPage: 10,
                    perPageSelect: [5, 10, 15, 20, 25],
                    nextPrev: !0,
                    firstLast: !1,
                    prevText: "&lsaquo;",
                    nextText: "&rsaquo;",
                    firstText: "&laquo;",
                    lastText: "&raquo;",
                    ellipsisText: "&hellip;",
                    ascText: "▴",
                    descText: "▾",
                    truncatePager: !0,
                    pagerDelta: 2,
                    scrollY: "",
                    fixedColumns: !0,
                    fixedHeight: !1,
                    header: !0,
                    footer: !1,
                    labels: {
                        placeholder: "Search...",
                        perPage: "{select}",
                        noRows: "Không tìm thấy dữ liệu",
                        info: "Hiển thị {start} tới {end} trên tổng số {rows} dòng"
                    },
                    layout: {
                        top: "{select}{search}",
                        bottom: "{info}{pager}"
                    }
                };
            class DataTable {
                constructor(t, e = {}) {
                    if (this.initialized = !1, this.options = {
                        ...defaultConfig,
                        ...e,
                        layout: {
                            ...defaultConfig.layout,
                            ...e.layout
                        },
                        labels: {
                            ...defaultConfig.labels,
                            ...e.labels
                        }
                    }, "string" == typeof t && (t = document.querySelector(t)), this.initialLayout = t.innerHTML, this.initialSortable = this.options.sortable, this.options.header || (this.options.sortable = !1), null === t.tHead && (!this.options.data || this.options.data && !this.options.data.headings) && (this.options.sortable = !1), t.tBodies.length && !t.tBodies[0].rows.length && this.options.data && !this.options.data.data) throw new Error("You seem to be using the data option, but you've not defined any rows.");
                    this.table = t, this.init()
                }
                static extend(t, e) {
                    "function" == typeof e ? DataTable.prototype[t] = e : DataTable[t] = e
                }
                init(t) {
                    if (this.initialized || this.table.classList.contains("dataTable-table")) return !1;
                    Object.assign(this.options, t || {}), this.currentPage = 1, this.onFirstPage = !0, this.hiddenColumns = [], this.columnRenderers = [], this.selectedColumns = [], this.render(), setTimeout(() => {
                        this.emit("datatable.init"), this.initialized = !0, this.options.plugins && Object.entries(this.options.plugins).forEach(([t, e]) => {
                            this[t] && "function" == typeof this[t] && (this[t] = this[t](e, {
                                createElement: createElement
                            }), e.enabled && this[t].init && "function" == typeof this[t].init && this[t].init())
                        })
                    }, 10)
                }
                render(t) {
                    if (t) {
                        switch (t) {
                            case "page":
                                this.renderPage();
                                break;
                            case "pager":
                                this.renderPager();
                                break;
                            case "header":
                                this.renderHeader()
                        }
                        return !1
                    }
                    const e = this.options;
                    let s = "";
                    if (e.data && dataToTable.call(this), e.ajax) {
                        const t = e.ajax,
                            s = new XMLHttpRequest,
                            a = t => {
                                this.emit("datatable.ajax.progress", t, s)
                            },
                            i = e => {
                                if (4 === s.readyState)
                                    if (this.emit("datatable.ajax.loaded", e, s), 200 === s.status) {
                                        const a = {};
                                        a.data = t.load ? t.load.call(this, s) : s.responseText, a.type = "json", t.content && t.content.type && (a.type = t.content.type, Object.assign(a, t.content)), this.import(a), this.setColumns(!0), this.emit("datatable.ajax.success", e, s)
                                    } else this.emit("datatable.ajax.error", e, s)
                            },
                            n = t => {
                                this.emit("datatable.ajax.error", t, s)
                            },
                            l = t => {
                                this.emit("datatable.ajax.abort", t, s)
                            };
                        s.addEventListener("progress", a, !1), s.addEventListener("load", i, !1), s.addEventListener("error", n, !1), s.addEventListener("abort", l, !1), this.emit("datatable.ajax.loading", s), s.open("GET", "string" == typeof t ? e.ajax : e.ajax.url), s.send()
                    }
                    if (this.body = this.table.tBodies[0], this.head = this.table.tHead, this.foot = this.table.tFoot, this.body || (this.body = createElement("tbody"), this.table.appendChild(this.body)), this.hasRows = this.body.rows.length > 0, !this.head) {
                        const t = createElement("thead"),
                            s = createElement("tr");
                        this.hasRows && (Array.from(this.body.rows[0].cells).forEach(() => {
                            s.appendChild(createElement("th"))
                        }), t.appendChild(s)), this.head = t, this.table.insertBefore(this.head, this.body), this.hiddenHeader = !e.ajax
                    }
                    if (this.headings = [], this.hasHeadings = this.head.rows.length > 0, this.hasHeadings && (this.header = this.head.rows[0], this.headings = [].slice.call(this.header.cells)), e.header || this.head && this.table.removeChild(this.table.tHead), e.footer ? this.head && !this.foot && (this.foot = createElement("tfoot", {
                        html: this.head.innerHTML
                    }), this.table.appendChild(this.foot)) : this.foot && this.table.removeChild(this.table.tFoot), this.wrapper = createElement("div", {
                        class: "dataTable-wrapper dataTable-loading"
                    }), s += "<div class='dataTable-top'>", s += e.layout.top, s += "</div>", e.scrollY.length ? s += `<div class='dataTable-container' style='height: ${e.scrollY}; overflow-Y: auto;'></div>` : s += "<div class='dataTable-container'></div>", s += "<div class='dataTable-bottom'>", s += e.layout.bottom, s = (s += "</div>").replace("{info}", e.paging ? "<div class='dataTable-info'></div>" : ""), e.paging && e.perPageSelect) {
                        let t = "<div class='dataTable-dropdown'>";
                        t += e.labels.perPage, t += "<label>dòng</label></div>";
                        const a = createElement("select", {
                            class: "dataTable-selector form-select"
                        });
                        e.perPageSelect.forEach(t => {
                            const s = t === e.perPage,
                                i = new Option(t, t, s, s);
                            a.add(i)
                        }), t = t.replace("{select}", a.outerHTML), s = s.replace("{select}", t)
                    } else s = s.replace("{select}", "");
                    if (e.searchable) {
                        const t = `<div class='dataTable-search'><input class='dataTable-input' placeholder='Tìm kiếm' type='text'></div>`;
                        s = s.replace("{search}", t)
                    } else s = s.replace("{search}", "");
                    this.hasHeadings && this.render("header"), this.table.classList.add("dataTable-table");
                    const a = createElement("ul", {
                        class: "pagination pagination-primary float-end dataTable-pagination"
                    }),
                        i = createElement("ul");
                    a.appendChild(i), s = s.replace(/\{pager\}/g, a.outerHTML), this.wrapper.innerHTML = s, this.container = this.wrapper.querySelector(".dataTable-container"), this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination"), this.label = this.wrapper.querySelector(".dataTable-info"), this.table.parentNode.replaceChild(this.wrapper, this.table), this.container.appendChild(this.table), this.rect = this.table.getBoundingClientRect(), this.data = Array.from(this.body.rows), this.activeRows = this.data.slice(), this.activeHeadings = this.headings.slice(), this.update(), e.ajax || this.setColumns(), this.fixHeight(), this.fixColumns(), e.header || this.wrapper.classList.add("no-header"), e.footer || this.wrapper.classList.add("no-footer"), e.sortable && this.wrapper.classList.add("sortable"), e.searchable && this.wrapper.classList.add("searchable"), e.fixedHeight && this.wrapper.classList.add("fixed-height"), e.fixedColumns && this.wrapper.classList.add("fixed-columns"), this.bindEvents()
                }
                renderPage() {
                    if (this.hasHeadings && (flush(this.header), this.activeHeadings.forEach(t => this.header.appendChild(t))), this.hasRows && this.totalPages) {
                        this.currentPage > this.totalPages && (this.currentPage = 1);
                        const t = this.currentPage - 1,
                            e = document.createDocumentFragment();
                        this.pages[t].forEach(t => e.appendChild(this.rows().render(t))), this.clear(e), this.onFirstPage = 1 === this.currentPage, this.onLastPage = this.currentPage === this.lastPage
                    } else this.setMessage(this.options.labels.noRows);
                    let t, e = 0,
                        s = 0,
                        a = 0;
                    if (this.totalPages && (a = (s = (e = this.currentPage - 1) * this.options.perPage) + this.pages[e].length, s += 1, t = this.searching ? this.searchData.length : this.data.length), this.label && this.options.labels.info.length) {
                        const e = this.options.labels.info.replace("{start}", s).replace("{end}", a).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", t);
                        this.label.innerHTML = t ? e : ""
                    }
                    1 == this.currentPage && this.fixHeight()
                }
                renderPager() {
                    if (flush(this.pagers), this.totalPages > 1) {
                        const t = "pager",
                            e = document.createDocumentFragment(),
                            s = this.onFirstPage ? 1 : this.currentPage - 1,
                            a = this.onLastPage ? this.totalPages : this.currentPage + 1;
                        this.options.firstLast && e.appendChild(button(t, 1, this.options.firstText)), this.options.nextPrev && e.appendChild(button(t, s, this.options.prevText));
                        let i = this.links;
                        this.options.truncatePager && (i = truncate(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText)), this.links[this.currentPage - 1].classList.add("active"), i.forEach(t => {
                            t.classList.remove("active"), e.appendChild(t)
                        }), this.links[this.currentPage - 1].classList.add("active"), this.options.nextPrev && e.appendChild(button(t, a, this.options.nextText)), this.options.firstLast && e.appendChild(button(t, this.totalPages, this.options.lastText)), this.pagers.forEach(t => {
                            t.appendChild(e.cloneNode(!0))
                        })
                    }
                }
                renderHeader() {
                    this.labels = [], this.headings && this.headings.length && this.headings.forEach((t, e) => {
                        if (this.labels[e] = t.textContent, t.firstElementChild && t.firstElementChild.classList.contains("dataTable-sorter") && (t.innerHTML = t.firstElementChild.innerHTML), t.sortable = "false" !== t.getAttribute("data-sortable"), t.originalCellIndex = e, this.options.sortable && t.sortable) {
                            const e = createElement("a", {
                                href: "#",
                                class: "dataTable-sorter",
                                html: t.innerHTML
                            });
                            t.innerHTML = "", t.setAttribute("data-sortable", ""), t.appendChild(e)
                        }
                    }), this.fixColumns()
                }
                bindEvents() {
                    const t = this.options;
                    if (t.perPageSelect) {
                        const e = this.wrapper.querySelector(".dataTable-selector");
                        e && e.addEventListener("change", () => {
                            t.perPage = parseInt(e.value, 10), this.update(), this.fixHeight(), this.emit("datatable.perpage", t.perPage)
                        }, !1)
                    }
                    t.searchable && (this.input = this.wrapper.querySelector(".dataTable-input"), this.input && this.input.addEventListener("keyup", () => this.search(this.input.value), !1)), this.wrapper.addEventListener("click", e => {
                        const s = e.target;
                        "a" === s.nodeName.toLowerCase() && (s.hasAttribute("data-page") ? (this.page(s.getAttribute("data-page")), e.preventDefault()) : t.sortable && s.classList.contains("dataTable-sorter") && "false" != s.parentNode.getAttribute("data-sortable") && (this.columns().sort(this.headings.indexOf(s.parentNode)), e.preventDefault()))
                    }, !1), window.addEventListener("resize", () => {
                        this.rect = this.container.getBoundingClientRect(), this.fixColumns()
                    })
                }
                setColumns(t) {
                    t || this.data.forEach(t => {
                        Array.from(t.cells).forEach(t => {
                            t.data = t.innerHTML
                        })
                    }), this.options.columns && this.headings.length && this.options.columns.forEach(t => {
                        Array.isArray(t.select) || (t.select = [t.select]), t.hasOwnProperty("render") && "function" == typeof t.render && (this.selectedColumns = this.selectedColumns.concat(t.select), this.columnRenderers.push({
                            columns: t.select,
                            renderer: t.render
                        })), t.select.forEach(e => {
                            const s = this.headings[e];
                            t.type && s.setAttribute("data-type", t.type), t.format && s.setAttribute("data-format", t.format), t.hasOwnProperty("sortable") && s.setAttribute("data-sortable", t.sortable), t.hasOwnProperty("hidden") && !1 !== t.hidden && this.columns().hide([e]), t.hasOwnProperty("sort") && 1 === t.select.length && this.columns().sort(t.select[0], t.sort, !0)
                        })
                    }), this.hasRows && (this.data.forEach((t, e) => {
                        t.dataIndex = e, Array.from(t.cells).forEach(t => {
                            t.data = t.innerHTML
                        })
                    }), this.selectedColumns.length && this.data.forEach(t => {
                        Array.from(t.cells).forEach((e, s) => {
                            this.selectedColumns.includes(s) && this.columnRenderers.forEach(a => {
                                a.columns.includes(s) && (e.innerHTML = a.renderer.call(this, e.data, e, t))
                            })
                        })
                    }), this.columns().rebuild()), this.render("header")
                }
                destroy() {
                    this.table.innerHTML = this.initialLayout, this.table.classList.remove("dataTable-table"), this.wrapper.parentNode.replaceChild(this.table, this.wrapper), this.initialized = !1
                }
                update() {
                    this.wrapper.classList.remove("dataTable-empty"), this.paginate(this), this.render("page"), this.links = [];
                    let t = this.pages.length;
                    for (; t--;) {
                        const e = t + 1;
                        this.links[t] = button(0 === t ? "active" : "", e, e)
                    }
                    this.sorting = !1, this.render("pager"), this.rows().update(), this.emit("datatable.update")
                }
                paginate() {
                    const t = this.options.perPage;
                    let e = this.activeRows;
                    return this.searching && (e = [], this.searchData.forEach(t => e.push(this.activeRows[t]))), this.options.paging ? this.pages = e.map((s, a) => a % t == 0 ? e.slice(a, a + t) : null).filter(t => t) : this.pages = [e], this.totalPages = this.lastPage = this.pages.length, this.totalPages
                }
                fixColumns() {
                    if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
                        let t, e = !1;
                        if (this.columnWidths = [], this.table.tHead) {
                            if (this.options.scrollY.length && ((e = createElement("thead")).appendChild(createElement("tr")), e.style.height = "0px", this.headerTable && (this.table.tHead = this.headerTable.tHead)), this.activeHeadings.forEach(t => {
                                t.style.width = ""
                            }), this.activeHeadings.forEach((t, s) => {
                                const a = t.offsetWidth,
                                    i = a / this.rect.width * 100;
                                if (t.style.width = `${i}%`, this.columnWidths[s] = a, this.options.scrollY.length) {
                                    const t = createElement("th");
                                    e.firstElementChild.appendChild(t), t.style.width = `${i}%`, t.style.paddingTop = "0", t.style.paddingBottom = "0", t.style.border = "0"
                                }
                            }), this.options.scrollY.length) {
                                const t = this.table.parentElement;
                                if (!this.headerTable) {
                                    this.headerTable = createElement("table", {
                                        class: "dataTable-table"
                                    });
                                    const e = createElement("div", {
                                        class: "dataTable-headercontainer"
                                    });
                                    e.appendChild(this.headerTable), t.parentElement.insertBefore(e, t)
                                }
                                const s = this.table.tHead;
                                this.table.replaceChild(e, s), this.headerTable.tHead = s, this.headerTable.parentElement.style.paddingRight = `${this.headerTable.clientWidth - this.table.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || "0", 10)}px`, t.scrollHeight > t.clientHeight && (t.style.overflowY = "scroll")
                            }
                        } else {
                            t = [], e = createElement("thead");
                            const s = createElement("tr");
                            Array.from(this.table.tBodies[0].rows[0].cells).forEach(() => {
                                const e = createElement("th");
                                s.appendChild(e), t.push(e)
                            }), e.appendChild(s), this.table.insertBefore(e, this.body);
                            const a = [];
                            t.forEach((t, e) => {
                                const s = t.offsetWidth,
                                    i = s / this.rect.width * 100;
                                a.push(i), this.columnWidths[e] = s
                            }), this.data.forEach(t => {
                                Array.from(t.cells).forEach((t, e) => {
                                    this.columns(t.cellIndex).visible() && (t.style.width = `${a[e]}%`)
                                })
                            }), this.table.removeChild(e)
                        }
                    }
                }
                fixHeight() {
                    this.options.fixedHeight && (this.container.style.height = null, this.rect = this.container.getBoundingClientRect(), this.container.style.height = `${this.rect.height}px`)
                }
                search(t) {
                    return !!this.hasRows && (t = t.toLowerCase(), this.currentPage = 1, this.searching = !0, this.searchData = [], t.length ? (this.clear(), this.data.forEach((e, s) => {
                        const a = this.searchData.includes(e);
                        t.split(" ").reduce((t, s) => {
                            let a = !1,
                                i = null,
                                n = null;
                            for (let t = 0; t < e.cells.length; t++)
                                if ((n = (i = e.cells[t]).hasAttribute("data-content") ? i.getAttribute("data-content") : i.textContent).toLowerCase().includes(s) && this.columns(i.cellIndex).visible()) {
                                    a = !0;
                                    break
                                } return t && a
                        }, !0) && !a ? (e.searchIndex = s, this.searchData.push(s)) : e.searchIndex = null
                    }), this.wrapper.classList.add("search-results"), this.searchData.length ? this.update() : (this.wrapper.classList.remove("search-results"), this.setMessage(this.options.labels.noRows)), void this.emit("datatable.search", t, this.searchData)) : (this.searching = !1, this.update(), this.emit("datatable.search", t, this.searchData), this.wrapper.classList.remove("search-results"), !1))
                }
                page(t) {
                    return t != this.currentPage && (isNaN(t) || (this.currentPage = parseInt(t, 10)), !(t > this.pages.length || t < 0) && (this.render("page"), this.render("pager"), void this.emit("datatable.page", t)))
                }
                sortColumn(t, e) {
                    this.columns().sort(t, e)
                }
                insert(t) {
                    let e = [];
                    if (isObject(t)) {
                        if (t.headings && !this.hasHeadings && !this.hasRows) {
                            const e = createElement("tr");
                            t.headings.forEach(t => {
                                const s = createElement("th", {
                                    html: t
                                });
                                e.appendChild(s)
                            }), this.head.appendChild(e), this.header = e, this.headings = [].slice.call(e.cells), this.hasHeadings = !0, this.options.sortable = this.initialSortable, this.render("header"), this.activeHeadings = this.headings.slice()
                        }
                        t.data && Array.isArray(t.data) && (e = t.data)
                    } else Array.isArray(t) && t.forEach(t => {
                        const s = [];
                        Object.entries(t).forEach(([t, e]) => {
                            const a = this.labels.indexOf(t);
                            a > -1 && (s[a] = e)
                        }), e.push(s)
                    });
                    e.length && (this.rows().add(e), this.hasRows = !0), this.update(), this.setColumns(), this.fixColumns()
                }
                refresh() {
                    this.options.searchable && (this.input.value = "", this.searching = !1), this.currentPage = 1, this.onFirstPage = !0, this.update(), this.emit("datatable.refresh")
                }
                clear(t) {
                    this.body && flush(this.body);
                    let e = this.body;
                    if (this.body || (e = this.table), t) {
                        if ("string" == typeof t) {
                            document.createDocumentFragment().innerHTML = t
                        }
                        e.appendChild(t)
                    }
                }
                export(t) {
                    if (!this.hasHeadings && !this.hasRows) return !1;
                    const e = this.activeHeadings;
                    let s = [];
                    const a = [];
                    let i, n, l, r;
                    if (!isObject(t)) return !1;
                    const h = {
                        download: !0,
                        skipColumn: [],
                        lineDelimiter: "\n",
                        columnDelimiter: ",",
                        tableName: "myTable",
                        replacer: null,
                        space: 4,
                        ...t
                    };
                    if (h.type) {
                        if ("txt" !== h.type && "csv" !== h.type || (s[0] = this.header), h.selection)
                            if (isNaN(h.selection)) {
                                if (Array.isArray(h.selection))
                                    for (i = 0; i < h.selection.length; i++) s = s.concat(this.pages[h.selection[i] - 1])
                            } else s = s.concat(this.pages[h.selection - 1]);
                        else s = s.concat(this.activeRows);
                        if (s.length) {
                            if ("txt" === h.type || "csv" === h.type) {
                                for (l = "", i = 0; i < s.length; i++) {
                                    for (n = 0; n < s[i].cells.length; n++)
                                        if (!h.skipColumn.includes(e[n].originalCellIndex) && this.columns(e[n].originalCellIndex).visible()) {
                                            let t = s[i].cells[n].textContent;
                                            (t = (t = (t = (t = (t = t.trim()).replace(/\s{2,}/g, " ")).replace(/\n/g, "  ")).replace(/"/g, '""')).replace(/#/g, "%23")).includes(",") && (t = `"${t}"`), l += t + h.columnDelimiter
                                        } l = l.trim().substring(0, l.length - 1), l += h.lineDelimiter
                                }
                                l = l.trim().substring(0, l.length - 1), h.download && (l = `data:text/csv;charset=utf-8,${l}`)
                            } else if ("sql" === h.type) {
                                for (l = `INSERT INTO \`${h.tableName}\` (`, i = 0; i < e.length; i++) !h.skipColumn.includes(e[i].originalCellIndex) && this.columns(e[i].originalCellIndex).visible() && (l += `\`${e[i].textContent}\`,`);
                                for (l = l.trim().substring(0, l.length - 1), l += ") VALUES ", i = 0; i < s.length; i++) {
                                    for (l += "(", n = 0; n < s[i].cells.length; n++) !h.skipColumn.includes(e[n].originalCellIndex) && this.columns(e[n].originalCellIndex).visible() && (l += `"${s[i].cells[n].textContent}",`);
                                    l = l.trim().substring(0, l.length - 1), l += "),"
                                }
                                l = l.trim().substring(0, l.length - 1), l += ";", h.download && (l = `data:application/sql;charset=utf-8,${l}`)
                            } else if ("json" === h.type) {
                                for (n = 0; n < s.length; n++)
                                    for (a[n] = a[n] || {}, i = 0; i < e.length; i++) !h.skipColumn.includes(e[i].originalCellIndex) && this.columns(e[i].originalCellIndex).visible() && (a[n][e[i].textContent] = s[n].cells[i].textContent);
                                l = JSON.stringify(a, h.replacer, h.space), h.download && (l = `data:application/json;charset=utf-8,${l}`)
                            }
                            return h.download && (h.filename = h.filename || "datatable_export", h.filename += `.${h.type}`, l = encodeURI(l), (r = document.createElement("a")).href = l, r.download = h.filename, document.body.appendChild(r), r.click(), document.body.removeChild(r)), l
                        }
                    }
                    return !1
                }
                import(t) {
                    let e = !1;
                    if (!isObject(t)) return !1;
                    const s = {
                        lineDelimiter: "\n",
                        columnDelimiter: ",",
                        ...t
                    };
                    if (s.data.length || isObject(s.data)) {
                        if ("csv" === s.type) {
                            e = {
                                data: []
                            };
                            const t = s.data.split(s.lineDelimiter);
                            t.length && (s.headings && (e.headings = t[0].split(s.columnDelimiter), t.shift()), t.forEach((t, a) => {
                                e.data[a] = [];
                                const i = t.split(s.columnDelimiter);
                                i.length && i.forEach(t => {
                                    e.data[a].push(t)
                                })
                            }))
                        } else if ("json" === s.type) {
                            const t = isJson(s.data);
                            t && (e = {
                                headings: [],
                                data: []
                            }, t.forEach((t, s) => {
                                e.data[s] = [], Object.entries(t).forEach(([t, a]) => {
                                    e.headings.includes(t) || e.headings.push(t), e.data[s].push(a)
                                })
                            }))
                        }
                        isObject(s.data) && (e = s.data), e && this.insert(e)
                    }
                    return !1
                }
                print() {
                    const t = this.activeHeadings,
                        e = this.activeRows,
                        s = createElement("table"),
                        a = createElement("thead"),
                        i = createElement("tbody"),
                        n = createElement("tr");
                    t.forEach(t => {
                        n.appendChild(createElement("th", {
                            html: t.textContent
                        }))
                    }), a.appendChild(n), e.forEach(t => {
                        const e = createElement("tr");
                        Array.from(t.cells).forEach(t => {
                            e.appendChild(createElement("td", {
                                html: t.textContent
                            }))
                        }), i.appendChild(e)
                    }), s.appendChild(a), s.appendChild(i);
                    const l = window.open();
                    l.document.body.appendChild(s), l.print()
                }
                setMessage(t) {
                    let e = 1;
                    this.hasRows ? e = this.data[0].cells.length : this.activeHeadings.length && (e = this.activeHeadings.length), this.wrapper.classList.add("dataTable-empty"), this.label && (this.label.innerHTML = ""), this.totalPages = 0, this.render("pager"), this.clear(createElement("tr", {
                        html: `<td class="dataTables-empty" colspan="${e}">${t}</td>`
                    }))
                }
                columns(t) {
                    return new Columns(this, t)
                }
                rows(t) {
                    return new Rows(this, t)
                }
                on(t, e) {
                    this.events = this.events || {}, this.events[t] = this.events[t] || [], this.events[t].push(e)
                }
                off(t, e) {
                    this.events = this.events || {}, t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
                }
                emit(t) {
                    if (this.events = this.events || {}, t in this.events != !1)
                        for (let e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            }
            exports.DataTable = DataTable;


        }, {
            "./date-4abbfef1.js": 1
        }]
    }, {}, [2])(2)
});