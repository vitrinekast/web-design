"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Mercury = function () {
  "use strict";

  function $n() {
    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs");
  }

  function e(e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }

  var t = e(function (O) {
    !function (e) {
      var c,
          t = Object.prototype,
          l = t.hasOwnProperty,
          n = "function" == typeof Symbol ? Symbol : {},
          a = n.iterator || "@@iterator",
          r = n.asyncIterator || "@@asyncIterator",
          i = n.toStringTag || "@@toStringTag",
          o = e.regeneratorRuntime;
      if (o) O.exports = o;else {
        (o = e.regeneratorRuntime = O.exports).wrap = y;
        var f = "suspendedStart",
            d = "suspendedYield",
            h = "executing",
            p = "completed",
            m = {},
            s = {};

        s[a] = function () {
          return this;
        };

        var u = Object.getPrototypeOf,
            g = u && u(u(C([])));
        g && g !== t && l.call(g, a) && (s = g);
        var v = A.prototype = _.prototype = Object.create(s);
        w.prototype = v.constructor = A, A.constructor = w, A[i] = w.displayName = "GeneratorFunction", o.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name));
        }, o.mark = function (e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : (e.__proto__ = A, i in e || (e[i] = "GeneratorFunction")), e.prototype = Object.create(v), e;
        }, o.awrap = function (e) {
          return {
            __await: e
          };
        }, x(k.prototype), k.prototype[r] = function () {
          return this;
        }, o.AsyncIterator = k, o.async = function (e, t, n, r) {
          var a = new k(y(e, t, n, r));
          return o.isGeneratorFunction(t) ? a : a.next().then(function (e) {
            return e.done ? e.value : a.next();
          });
        }, x(v), v[i] = "Generator", v[a] = function () {
          return this;
        }, v.toString = function () {
          return "[object Generator]";
        }, o.keys = function (n) {
          var r = [];

          for (var e in n) {
            r.push(e);
          }

          return r.reverse(), function e() {
            for (; r.length;) {
              var t = r.pop();
              if (t in n) return e.value = t, e.done = !1, e;
            }

            return e.done = !0, e;
          };
        }, o.values = C, T.prototype = {
          constructor: T,
          reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(M), !e) for (var t in this) {
              "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = c);
            }
          },
          stop: function stop() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(n) {
            if (this.done) throw n;
            var r = this;

            function e(e, t) {
              return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = c), !!t;
            }

            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var a = this.tryEntries[t],
                  i = a.completion;
              if ("root" === a.tryLoc) return e("end");

              if (a.tryLoc <= this.prev) {
                var o = l.call(a, "catchLoc"),
                    s = l.call(a, "finallyLoc");

                if (o && s) {
                  if (this.prev < a.catchLoc) return e(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return e(a.finallyLoc);
                } else if (o) {
                  if (this.prev < a.catchLoc) return e(a.catchLoc, !0);
                } else {
                  if (!s) throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return e(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(e, t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var r = this.tryEntries[n];

              if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var a = r;
                break;
              }
            }

            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
            var i = a ? a.completion : {};
            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i);
          },
          complete: function complete(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m;
          },
          finish: function finish(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), m;
            }
          },
          "catch": function _catch(e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var n = this.tryEntries[t];

              if (n.tryLoc === e) {
                var r = n.completion;

                if ("throw" === r.type) {
                  var a = r.arg;
                  M(n);
                }

                return a;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e, t, n) {
            return this.delegate = {
              iterator: C(e),
              resultName: t,
              nextLoc: n
            }, "next" === this.method && (this.arg = c), m;
          }
        };
      }

      function y(e, t, n, r) {
        var i,
            o,
            s,
            c,
            a = t && t.prototype instanceof _ ? t : _,
            l = Object.create(a.prototype),
            u = new T(r || []);
        return l._invoke = (i = e, o = n, s = u, c = f, function (e, t) {
          if (c === h) throw new Error("Generator is already running");

          if (c === p) {
            if ("throw" === e) throw t;
            return D();
          }

          for (s.method = e, s.arg = t;;) {
            var n = s.delegate;

            if (n) {
              var r = S(n, s);

              if (r) {
                if (r === m) continue;
                return r;
              }
            }

            if ("next" === s.method) s.sent = s._sent = s.arg;else if ("throw" === s.method) {
              if (c === f) throw c = p, s.arg;
              s.dispatchException(s.arg);
            } else "return" === s.method && s.abrupt("return", s.arg);
            c = h;
            var a = b(i, o, s);

            if ("normal" === a.type) {
              if (c = s.done ? p : d, a.arg === m) continue;
              return {
                value: a.arg,
                done: s.done
              };
            }

            "throw" === a.type && (c = p, s.method = "throw", s.arg = a.arg);
          }
        }), l;
      }

      function b(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }

      function _() {}

      function w() {}

      function A() {}

      function x(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }

      function k(c) {
        var t;

        this._invoke = function (n, r) {
          function e() {
            return new Promise(function (e, t) {
              !function t(e, n, r, a) {
                var i = b(c[e], c, n);

                if ("throw" !== i.type) {
                  var o = i.arg,
                      s = o.value;
                  return s && "object" == _typeof(s) && l.call(s, "__await") ? Promise.resolve(s.__await).then(function (e) {
                    t("next", e, r, a);
                  }, function (e) {
                    t("throw", e, r, a);
                  }) : Promise.resolve(s).then(function (e) {
                    o.value = e, r(o);
                  }, function (e) {
                    return t("throw", e, r, a);
                  });
                }

                a(i.arg);
              }(n, r, e, t);
            });
          }

          return t = t ? t.then(e, e) : e();
        };
      }

      function S(e, t) {
        var n = e.iterator[t.method];

        if (n === c) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator["return"] && (t.method = "return", t.arg = c, S(e, t), "throw" === t.method)) return m;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return m;
        }

        var r = b(n, e.iterator, t.arg);
        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, m;
        var a = r.arg;
        return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = c), t.delegate = null, m) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m);
      }

      function E(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }

      function M(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }

      function T(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(E, this), this.reset(!0);
      }

      function C(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var n = -1,
                r = function e() {
              for (; ++n < t.length;) {
                if (l.call(t, n)) return e.value = t[n], e.done = !1, e;
              }

              return e.value = c, e.done = !0, e;
            };

            return r.next = r;
          }
        }

        return {
          next: D
        };
      }

      function D() {
        return {
          value: c,
          done: !0
        };
      }
    }(function () {
      return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
    }() || Function("return this")());
  }),
      n = function () {
    return this || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;
  }() || Function("return this")(),
      r = n.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),
      a = r && n.regeneratorRuntime;

  n.regeneratorRuntime = void 0;
  var i = t;
  if (r) n.regeneratorRuntime = a;else try {
    delete n.regeneratorRuntime;
  } catch (e) {
    n.regeneratorRuntime = void 0;
  }

  var S = i,
      o = {}.toString,
      s = function s(e) {
    return o.call(e).slice(8, -1);
  },
      f = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
    return "String" == s(e) ? e.split("") : Object(e);
  },
      c = function c(e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e;
  },
      l = function l(e) {
    return f(c(e));
  },
      u = {
    f: {}.propertyIsEnumerable
  },
      A = function A(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
      d = function d(e) {
    return "object" == _typeof(e) ? null !== e : "function" == typeof e;
  },
      h = function h(e, t) {
    if (!d(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !d(r = n.call(e))) return r;
    if ("function" == typeof (n = e.valueOf) && !d(r = n.call(e))) return r;
    if (!t && "function" == typeof (n = e.toString) && !d(r = n.call(e))) return r;
    throw TypeError("Can't convert object to primitive value");
  },
      p = {}.hasOwnProperty,
      m = function m(e, t) {
    return p.call(e, t);
  },
      g = function g(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
      v = !g(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      y = e(function (e) {
    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = t);
  }),
      b = y.document,
      _ = d(b) && d(b.createElement),
      w = function w(e) {
    return _ ? b.createElement(e) : {};
  },
      x = !v && !g(function () {
    return 7 != Object.defineProperty(w("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  }),
      k = Object.getOwnPropertyDescriptor,
      E = {
    f: v ? k : function (e, t) {
      if (e = l(e), t = h(t, !0), x) try {
        return k(e, t);
      } catch (e) {}
      if (m(e, t)) return A(!u.f.call(e, t), e[t]);
    }
  },
      M = e(function (e) {
    var t = e.exports = {
      version: "2.6.2"
    };
    "number" == typeof __e && (__e = t);
  }),
      T = (M.version, function (e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e;
  }),
      C = function C(r, a, e) {
    if (T(r), void 0 === a) return r;

    switch (e) {
      case 1:
        return function (e) {
          return r.call(a, e);
        };

      case 2:
        return function (e, t) {
          return r.call(a, e, t);
        };

      case 3:
        return function (e, t, n) {
          return r.call(a, e, t, n);
        };
    }

    return function () {
      return r.apply(a, arguments);
    };
  },
      D = function D(e) {
    if (!d(e)) throw TypeError(e + " is not an object!");
    return e;
  },
      O = Object.defineProperty,
      N = {
    f: v ? Object.defineProperty : function (e, t, n) {
      if (D(e), t = h(t, !0), D(n), x) try {
        return O(e, t, n);
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e;
    }
  },
      j = v ? function (e, t, n) {
    return N.f(e, t, A(1, n));
  } : function (e, t, n) {
    return e[t] = n, e;
  },
      P = "prototype",
      z = function z(e, t, n) {
    var r,
        a,
        i,
        o = e & z.F,
        s = e & z.G,
        c = e & z.S,
        l = e & z.P,
        u = e & z.B,
        f = e & z.W,
        d = s ? M : M[t] || (M[t] = {}),
        h = d[P],
        p = s ? y : c ? y[t] : (y[t] || {})[P];

    for (r in s && (n = t), n) {
      (a = !o && p && void 0 !== p[r]) && m(d, r) || (i = a ? p[r] : n[r], d[r] = s && "function" != typeof p[r] ? n[r] : u && a ? C(i, y) : f && p[r] == i ? function (r) {
        var e = function e(_e2, t, n) {
          if (this instanceof r) {
            switch (arguments.length) {
              case 0:
                return new r();

              case 1:
                return new r(_e2);

              case 2:
                return new r(_e2, t);
            }

            return new r(_e2, t, n);
          }

          return r.apply(this, arguments);
        };

        return e[P] = r[P], e;
      }(i) : l && "function" == typeof i ? C(Function.call, i) : i, l && ((d.virtual || (d.virtual = {}))[r] = i, e & z.R && h && !h[r] && j(h, r, i)));
    }
  };

  z.F = 1, z.G = 2, z.S = 4, z.P = 8, z.B = 16, z.W = 32, z.U = 64, z.R = 128;

  var L = z,
      R = function R(e, t) {
    var n = (M.Object || {})[e] || Object[e],
        r = {};
    r[e] = t(n), L(L.S + L.F * g(function () {
      n(1);
    }), "Object", r);
  },
      Y = E.f;

  R("getOwnPropertyDescriptor", function () {
    return function (e, t) {
      return Y(l(e), t);
    };
  });

  var W,
      q = M.Object,
      I = function I(e, t) {
    return q.getOwnPropertyDescriptor(e, t);
  },
      H = j,
      F = 0,
      B = Math.random(),
      G = function G(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++F + B).toString(36));
  },
      U = e(function (e) {
    var n = G("meta"),
        t = N.f,
        r = 0,
        a = Object.isExtensible || function () {
      return !0;
    },
        i = !g(function () {
      return a(Object.preventExtensions({}));
    }),
        o = function o(e) {
      t(e, n, {
        value: {
          i: "O" + ++r,
          w: {}
        }
      });
    },
        s = e.exports = {
      KEY: n,
      NEED: !1,
      fastKey: function fastKey(e, t) {
        if (!d(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;

        if (!m(e, n)) {
          if (!a(e)) return "F";
          if (!t) return "E";
          o(e);
        }

        return e[n].i;
      },
      getWeak: function getWeak(e, t) {
        if (!m(e, n)) {
          if (!a(e)) return !0;
          if (!t) return !1;
          o(e);
        }

        return e[n].w;
      },
      onFreeze: function onFreeze(e) {
        return i && s.NEED && a(e) && !m(e, n) && o(e), e;
      }
    };
  }),
      $ = (U.KEY, U.NEED, U.fastKey, U.getWeak, U.onFreeze, e(function (e) {
    var t = "__core-js_shared__",
        n = y[t] || (y[t] = {});
    (e.exports = function (e, t) {
      return n[e] || (n[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: M.version,
      mode: "pure",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  })),
      V = e(function (e) {
    var t = $("wks"),
        n = y.Symbol,
        r = "function" == typeof n;
    (e.exports = function (e) {
      return t[e] || (t[e] = r && n[e] || (r ? n : G)("Symbol." + e));
    }).store = t;
  }),
      K = N.f,
      J = V("toStringTag"),
      X = function X(e, t, n) {
    e && !m(e = n ? e : e.prototype, J) && K(e, J, {
      configurable: !0,
      value: t
    });
  },
      Z = {
    f: V
  },
      Q = N.f,
      ee = function ee(e) {
    var t = M.Symbol || (M.Symbol = {});
    "_" == e.charAt(0) || e in t || Q(t, e, {
      value: Z.f(e)
    });
  },
      te = Math.ceil,
      ne = Math.floor,
      re = function re(e) {
    return isNaN(e = +e) ? 0 : (0 < e ? ne : te)(e);
  },
      ae = Math.min,
      ie = function ie(e) {
    return 0 < e ? ae(re(e), 9007199254740991) : 0;
  },
      oe = Math.max,
      se = Math.min,
      ce = $("keys"),
      le = function le(e) {
    return ce[e] || (ce[e] = G(e));
  },
      ue = (W = !1, function (e, t, n) {
    var r,
        a,
        i,
        o = l(e),
        s = ie(o.length),
        c = (a = s, (r = re(r = n)) < 0 ? oe(r + a, 0) : se(r, a));

    if (W && t != t) {
      for (; c < s;) {
        if ((i = o[c++]) != i) return !0;
      }
    } else for (; c < s; c++) {
      if ((W || c in o) && o[c] === t) return W || c || 0;
    }

    return !W && -1;
  }),
      fe = le("IE_PROTO"),
      de = function de(e, t) {
    var n,
        r = l(e),
        a = 0,
        i = [];

    for (n in r) {
      n != fe && m(r, n) && i.push(n);
    }

    for (; t.length > a;) {
      m(r, n = t[a++]) && (~ue(i, n) || i.push(n));
    }

    return i;
  },
      he = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
      pe = Object.keys || function (e) {
    return de(e, he);
  },
      me = {
    f: Object.getOwnPropertySymbols
  },
      ge = Array.isArray || function (e) {
    return "Array" == s(e);
  },
      ve = v ? Object.defineProperties : function (e, t) {
    D(e);

    for (var n, r = pe(t), a = r.length, i = 0; i < a;) {
      N.f(e, n = r[i++], t[n]);
    }

    return e;
  },
      ye = y.document,
      be = ye && ye.documentElement,
      _e = le("IE_PROTO"),
      we = function we() {},
      Ae = "prototype",
      _xe = function xe() {
    var e,
        t = w("iframe"),
        n = he.length;

    for (t.style.display = "none", be.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _xe = e.F; n--;) {
      delete _xe[Ae][he[n]];
    }

    return _xe();
  },
      ke = Object.create || function (e, t) {
    var n;
    return null !== e ? (we[Ae] = D(e), n = new we(), we[Ae] = null, n[_e] = e) : n = _xe(), void 0 === t ? n : ve(n, t);
  },
      Se = he.concat("length", "prototype"),
      Ee = {
    f: Object.getOwnPropertyNames || function (e) {
      return de(e, Se);
    }
  },
      Me = Ee.f,
      Te = {}.toString,
      Ce = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      De = {
    f: function f(e) {
      return Ce && "[object Window]" == Te.call(e) ? function (e) {
        try {
          return Me(e);
        } catch (e) {
          return Ce.slice();
        }
      }(e) : Me(l(e));
    }
  },
      Oe = U.KEY,
      Ne = E.f,
      je = N.f,
      Pe = De.f,
      _ze = y.Symbol,
      Le = y.JSON,
      Re = Le && Le.stringify,
      Ye = "prototype",
      We = V("_hidden"),
      qe = V("toPrimitive"),
      Ie = {}.propertyIsEnumerable,
      He = $("symbol-registry"),
      Fe = $("symbols"),
      Be = $("op-symbols"),
      Ge = Object[Ye],
      Ue = "function" == typeof _ze,
      $e = y.QObject,
      Ve = !$e || !$e[Ye] || !$e[Ye].findChild,
      Ke = v && g(function () {
    return 7 != ke(je({}, "a", {
      get: function get() {
        return je(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (e, t, n) {
    var r = Ne(Ge, t);
    r && delete Ge[t], je(e, t, n), r && e !== Ge && je(Ge, t, r);
  } : je,
      Je = function Je(e) {
    var t = Fe[e] = ke(_ze[Ye]);
    return t._k = e, t;
  },
      Xe = Ue && "symbol" == _typeof(_ze.iterator) ? function (e) {
    return "symbol" == _typeof(e);
  } : function (e) {
    return e instanceof _ze;
  },
      Ze = function Ze(e, t, n) {
    return e === Ge && Ze(Be, t, n), D(e), t = h(t, !0), D(n), m(Fe, t) ? (n.enumerable ? (m(e, We) && e[We][t] && (e[We][t] = !1), n = ke(n, {
      enumerable: A(0, !1)
    })) : (m(e, We) || je(e, We, A(1, {})), e[We][t] = !0), Ke(e, t, n)) : je(e, t, n);
  },
      Qe = function Qe(e, t) {
    D(e);

    for (var n, r = function (e) {
      var t = pe(e),
          n = me.f;
      if (n) for (var r, a = n(e), i = u.f, o = 0; a.length > o;) {
        i.call(e, r = a[o++]) && t.push(r);
      }
      return t;
    }(t = l(t)), a = 0, i = r.length; a < i;) {
      Ze(e, n = r[a++], t[n]);
    }

    return e;
  },
      et = function et(e) {
    var t = Ie.call(this, e = h(e, !0));
    return !(this === Ge && m(Fe, e) && !m(Be, e)) && (!(t || !m(this, e) || !m(Fe, e) || m(this, We) && this[We][e]) || t);
  },
      tt = function tt(e, t) {
    if (e = l(e), t = h(t, !0), e !== Ge || !m(Fe, t) || m(Be, t)) {
      var n = Ne(e, t);
      return !n || !m(Fe, t) || m(e, We) && e[We][t] || (n.enumerable = !0), n;
    }
  },
      nt = function nt(e) {
    for (var t, n = Pe(l(e)), r = [], a = 0; n.length > a;) {
      m(Fe, t = n[a++]) || t == We || t == Oe || r.push(t);
    }

    return r;
  },
      rt = function rt(e) {
    for (var t, n = e === Ge, r = Pe(n ? Be : l(e)), a = [], i = 0; r.length > i;) {
      !m(Fe, t = r[i++]) || n && !m(Ge, t) || a.push(Fe[t]);
    }

    return a;
  };

  Ue || (H((_ze = function ze() {
    if (this instanceof _ze) throw TypeError("Symbol is not a constructor!");

    var t = G(0 < arguments.length ? arguments[0] : void 0),
        n = function n(e) {
      this === Ge && n.call(Be, e), m(this, We) && m(this[We], t) && (this[We][t] = !1), Ke(this, t, A(1, e));
    };

    return v && Ve && Ke(Ge, t, {
      configurable: !0,
      set: n
    }), Je(t);
  })[Ye], "toString", function () {
    return this._k;
  }), E.f = tt, N.f = Ze, Ee.f = De.f = nt, u.f = et, me.f = rt, Z.f = function (e) {
    return Je(V(e));
  }), L(L.G + L.W + L.F * !Ue, {
    Symbol: _ze
  });

  for (var at = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; at.length > it;) {
    V(at[it++]);
  }

  for (var ot = pe(V.store), st = 0; ot.length > st;) {
    ee(ot[st++]);
  }

  L(L.S + L.F * !Ue, "Symbol", {
    "for": function _for(e) {
      return m(He, e += "") ? He[e] : He[e] = _ze(e);
    },
    keyFor: function keyFor(e) {
      if (!Xe(e)) throw TypeError(e + " is not a symbol!");

      for (var t in He) {
        if (He[t] === e) return t;
      }
    },
    useSetter: function useSetter() {
      Ve = !0;
    },
    useSimple: function useSimple() {
      Ve = !1;
    }
  }), L(L.S + L.F * !Ue, "Object", {
    create: function create(e, t) {
      return void 0 === t ? ke(e) : Qe(ke(e), t);
    },
    defineProperty: Ze,
    defineProperties: Qe,
    getOwnPropertyDescriptor: tt,
    getOwnPropertyNames: nt,
    getOwnPropertySymbols: rt
  }), Le && L(L.S + L.F * (!Ue || g(function () {
    var e = _ze();

    return "[null]" != Re([e]) || "{}" != Re({
      a: e
    }) || "{}" != Re(Object(e));
  })), "JSON", {
    stringify: function stringify(e) {
      for (var t, n, r = [e], a = 1; arguments.length > a;) {
        r.push(arguments[a++]);
      }

      if (n = t = r[1], (d(t) || void 0 !== e) && !Xe(e)) return ge(t) || (t = function t(e, _t2) {
        if ("function" == typeof n && (_t2 = n.call(this, e, _t2)), !Xe(_t2)) return _t2;
      }), r[1] = t, Re.apply(Le, r);
    }
  }), _ze[Ye][qe] || j(_ze[Ye], qe, _ze[Ye].valueOf), X(_ze, "Symbol"), X(Math, "Math", !0), X(y.JSON, "JSON", !0);

  var ct = M.Object.getOwnPropertySymbols,
      lt = function lt(e) {
    return Object(c(e));
  };

  R("keys", function () {
    return function (e) {
      return pe(lt(e));
    };
  });
  var ut = M.Object.keys;
  L(L.S + L.F * !v, "Object", {
    defineProperty: N.f
  });

  var ft = M.Object,
      dt = function dt(e, t, n) {
    return ft.defineProperty(e, t, n);
  };

  var ht = function ht(e, t, n) {
    return t in e ? dt(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  };

  var pt = function pt(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
          r = ut(n);
      "function" == typeof ct && (r = r.concat(ct(n).filter(function (e) {
        return I(n, e).enumerable;
      }))), r.forEach(function (e) {
        ht(t, e, n[e]);
      });
    }

    return t;
  };

  var mt = function mt(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = {},
        i = ut(e);

    for (r = 0; r < i.length; r++) {
      n = i[r], 0 <= t.indexOf(n) || (a[n] = e[n]);
    }

    return a;
  };

  var gt = function gt(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = mt(e, t);

    if (ct) {
      var i = ct(e);

      for (r = 0; r < i.length; r++) {
        n = i[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      }
    }

    return a;
  },
      vt = {},
      yt = {};

  j(yt, V("iterator"), function () {
    return this;
  });

  var bt,
      _t = le("IE_PROTO"),
      wt = Object.prototype,
      At = Object.getPrototypeOf || function (e) {
    return e = lt(e), m(e, _t) ? e[_t] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? wt : null;
  },
      xt = V("iterator"),
      kt = !([].keys && "next" in [].keys()),
      St = "values",
      Et = function Et() {
    return this;
  },
      Mt = function Mt(e, t, n, r, a, i, o) {
    var s, c, l;
    c = t, l = r, (s = n).prototype = ke(yt, {
      next: A(1, l)
    }), X(s, c + " Iterator");

    var u,
        f,
        d,
        h = function h(e) {
      if (!kt && e in v) return v[e];

      switch (e) {
        case "keys":
        case St:
          return function () {
            return new n(this, e);
          };
      }

      return function () {
        return new n(this, e);
      };
    },
        p = t + " Iterator",
        m = a == St,
        g = !1,
        v = e.prototype,
        y = v[xt] || v["@@iterator"] || a && v[a],
        b = y || h(a),
        _ = a ? m ? h("entries") : b : void 0,
        w = "Array" == t && v.entries || y;

    if (w && (d = At(w.call(new e()))) !== Object.prototype && d.next && X(d, p, !0), m && y && y.name !== St && (g = !0, b = function b() {
      return y.call(this);
    }), o && (kt || g || !v[xt]) && j(v, xt, b), vt[t] = b, vt[p] = Et, a) if (u = {
      values: m ? b : h(St),
      keys: i ? b : h("keys"),
      entries: _
    }, o) for (f in u) {
      f in v || H(v, f, u[f]);
    } else L(L.P + L.F * (kt || g), t, u);
    return u;
  },
      Tt = (bt = !0, function (e, t) {
    var n,
        r,
        a = String(c(e)),
        i = re(t),
        o = a.length;
    return i < 0 || o <= i ? bt ? "" : void 0 : (n = a.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === o || (r = a.charCodeAt(i + 1)) < 56320 || 57343 < r ? bt ? a.charAt(i) : n : bt ? a.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536;
  });

  Mt(String, "String", function (e) {
    this._t = String(e), this._i = 0;
  }, function () {
    var e,
        t = this._t,
        n = this._i;
    return n >= t.length ? {
      value: void 0,
      done: !0
    } : (e = Tt(t, n), this._i += e.length, {
      value: e,
      done: !1
    });
  });

  var Ct = function Ct(e, t) {
    return {
      value: t,
      done: !!e
    };
  };

  Mt(Array, "Array", function (e, t) {
    this._t = l(e), this._i = 0, this._k = t;
  }, function () {
    var e = this._t,
        t = this._k,
        n = this._i++;
    return !e || n >= e.length ? (this._t = void 0, Ct(1)) : Ct(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
  }, "values");
  vt.Arguments = vt.Array;

  for (var Dt = V("toStringTag"), Ot = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Nt = 0; Nt < Ot.length; Nt++) {
    var jt = Ot[Nt],
        Pt = y[jt],
        zt = Pt && Pt.prototype;
    zt && !zt[Dt] && j(zt, Dt, jt), vt[jt] = vt.Array;
  }

  var Lt,
      Rt,
      Yt,
      Wt = V("toStringTag"),
      qt = "Arguments" == s(function () {
    return arguments;
  }()),
      It = function It(e) {
    var t, n, r;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    }(t = Object(e), Wt)) ? n : qt ? s(t) : "Object" == (r = s(t)) && "function" == typeof t.callee ? "Arguments" : r;
  },
      Ht = function Ht(e, t, n, r) {
    if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
    return e;
  },
      Ft = function Ft(t, e, n, r) {
    try {
      return r ? e(D(n)[0], n[1]) : e(n);
    } catch (e) {
      var a = t["return"];
      throw void 0 !== a && D(a.call(t)), e;
    }
  },
      Bt = V("iterator"),
      Gt = Array.prototype,
      Ut = function Ut(e) {
    return void 0 !== e && (vt.Array === e || Gt[Bt] === e);
  },
      $t = V("iterator"),
      Vt = M.getIteratorMethod = function (e) {
    if (null != e) return e[$t] || e["@@iterator"] || vt[It(e)];
  },
      Kt = e(function (e) {
    var d = {},
        h = {},
        t = e.exports = function (e, t, n, r, a) {
      var i,
          o,
          s,
          c,
          l = a ? function () {
        return e;
      } : Vt(e),
          u = C(n, r, t ? 2 : 1),
          f = 0;
      if ("function" != typeof l) throw TypeError(e + " is not iterable!");

      if (Ut(l)) {
        for (i = ie(e.length); f < i; f++) {
          if ((c = t ? u(D(o = e[f])[0], o[1]) : u(e[f])) === d || c === h) return c;
        }
      } else for (s = l.call(e); !(o = s.next()).done;) {
        if ((c = Ft(s, u, o.value, t)) === d || c === h) return c;
      }
    };

    t.BREAK = d, t.RETURN = h;
  }),
      Jt = V("species"),
      Xt = function Xt(e, t) {
    var n,
        r = D(e).constructor;
    return void 0 === r || null == (n = D(r)[Jt]) ? t : T(n);
  },
      Zt = y.process,
      Qt = y.setImmediate,
      en = y.clearImmediate,
      tn = y.MessageChannel,
      nn = y.Dispatch,
      rn = 0,
      an = {},
      on = "onreadystatechange",
      sn = function sn() {
    var e = +this;

    if (an.hasOwnProperty(e)) {
      var t = an[e];
      delete an[e], t();
    }
  },
      cn = function cn(e) {
    sn.call(e.data);
  };

  Qt && en || (Qt = function Qt(e) {
    for (var t = [], n = 1; arguments.length > n;) {
      t.push(arguments[n++]);
    }

    return an[++rn] = function () {
      !function (e, t, n) {
        var r = void 0 === n;

        switch (t.length) {
          case 0:
            return r ? e() : e.call(n);

          case 1:
            return r ? e(t[0]) : e.call(n, t[0]);

          case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

          case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

          case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
        }

        e.apply(n, t);
      }("function" == typeof e ? e : Function(e), t);
    }, Lt(rn), rn;
  }, en = function en(e) {
    delete an[e];
  }, "process" == s(Zt) ? Lt = function Lt(e) {
    Zt.nextTick(C(sn, e, 1));
  } : nn && nn.now ? Lt = function Lt(e) {
    nn.now(C(sn, e, 1));
  } : tn ? (Yt = (Rt = new tn()).port2, Rt.port1.onmessage = cn, Lt = C(Yt.postMessage, Yt, 1)) : y.addEventListener && "function" == typeof postMessage && !y.importScripts ? (Lt = function Lt(e) {
    y.postMessage(e + "", "*");
  }, y.addEventListener("message", cn, !1)) : Lt = on in w("script") ? function (e) {
    be.appendChild(w("script"))[on] = function () {
      be.removeChild(this), sn.call(e);
    };
  } : function (e) {
    setTimeout(C(sn, e, 1), 0);
  });
  var ln = {
    set: Qt,
    clear: en
  },
      un = ln.set,
      fn = y.MutationObserver || y.WebKitMutationObserver,
      dn = y.process,
      hn = y.Promise,
      pn = "process" == s(dn);

  function mn(e) {
    var n, r;
    this.promise = new e(function (e, t) {
      if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
      n = e, r = t;
    }), this.resolve = T(n), this.reject = T(r);
  }

  var gn = {
    f: function f(e) {
      return new mn(e);
    }
  },
      vn = function vn(e) {
    try {
      return {
        e: !1,
        v: e()
      };
    } catch (e) {
      return {
        e: !0,
        v: e
      };
    }
  },
      yn = y.navigator,
      bn = yn && yn.userAgent || "",
      _n = function _n(e, t) {
    if (D(e), d(t) && t.constructor === e) return t;
    var n = gn.f(e);
    return (0, n.resolve)(t), n.promise;
  },
      wn = function wn(e, t, n) {
    for (var r in t) {
      n && e[r] ? e[r] = t[r] : j(e, r, t[r]);
    }

    return e;
  },
      An = V("species"),
      xn = function xn(e) {
    var t = "function" == typeof M[e] ? M[e] : y[e];
    v && t && !t[An] && N.f(t, An, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  },
      kn = V("iterator"),
      Sn = !1;

  try {
    [7][kn]()["return"] = function () {
      Sn = !0;
    };
  } catch (e) {}

  var En,
      Mn,
      Tn,
      Cn,
      Dn = function Dn(e, t) {
    if (!t && !Sn) return !1;
    var n = !1;

    try {
      var r = [7],
          a = r[kn]();
      a.next = function () {
        return {
          done: n = !0
        };
      }, r[kn] = function () {
        return a;
      }, e(r);
    } catch (e) {}

    return n;
  },
      On = ln.set,
      Nn = function () {
    var n,
        r,
        a,
        e = function e() {
      var e, t;

      for (pn && (e = dn.domain) && e.exit(); n;) {
        t = n.fn, n = n.next;

        try {
          t();
        } catch (e) {
          throw n ? a() : r = void 0, e;
        }
      }

      r = void 0, e && e.enter();
    };

    if (pn) a = function a() {
      dn.nextTick(e);
    };else if (!fn || y.navigator && y.navigator.standalone) {
      if (hn && hn.resolve) {
        var t = hn.resolve(void 0);

        a = function a() {
          t.then(e);
        };
      } else a = function a() {
        un.call(y, e);
      };
    } else {
      var i = !0,
          o = document.createTextNode("");
      new fn(e).observe(o, {
        characterData: !0
      }), a = function a() {
        o.data = i = !i;
      };
    }
    return function (e) {
      var t = {
        fn: e,
        next: void 0
      };
      r && (r.next = t), n || (n = t, a()), r = t;
    };
  }(),
      jn = "Promise",
      Pn = y.TypeError,
      zn = y.process,
      Ln = zn && zn.versions,
      Rn = Ln && Ln.v8 || "",
      _Yn = y[jn],
      Wn = "process" == It(zn),
      qn = function qn() {},
      In = Mn = gn.f,
      Hn = !!function () {
    try {
      var e = _Yn.resolve(1),
          t = (e.constructor = {})[V("species")] = function (e) {
        e(qn, qn);
      };

      return (Wn || "function" == typeof PromiseRejectionEvent) && e.then(qn) instanceof t && 0 !== Rn.indexOf("6.6") && -1 === bn.indexOf("Chrome/66");
    } catch (e) {}
  }(),
      Fn = function Fn(e) {
    var t;
    return !(!d(e) || "function" != typeof (t = e.then)) && t;
  },
      Bn = function Bn(u, n) {
    if (!u._n) {
      u._n = !0;
      var r = u._c;
      Nn(function () {
        for (var c = u._v, l = 1 == u._s, e = 0, t = function t(e) {
          var t,
              n,
              r,
              a = l ? e.ok : e.fail,
              i = e.resolve,
              o = e.reject,
              s = e.domain;

          try {
            a ? (l || (2 == u._h && Vn(u), u._h = 1), !0 === a ? t = c : (s && s.enter(), t = a(c), s && (s.exit(), r = !0)), t === e.promise ? o(Pn("Promise-chain cycle")) : (n = Fn(t)) ? n.call(t, i, o) : i(t)) : o(c);
          } catch (e) {
            s && !r && s.exit(), o(e);
          }
        }; r.length > e;) {
          t(r[e++]);
        }

        u._c = [], u._n = !1, n && !u._h && Gn(u);
      });
    }
  },
      Gn = function Gn(i) {
    On.call(y, function () {
      var e,
          t,
          n,
          r = i._v,
          a = Un(i);
      if (a && (e = vn(function () {
        Wn ? zn.emit("unhandledRejection", r, i) : (t = y.onunhandledrejection) ? t({
          promise: i,
          reason: r
        }) : (n = y.console) && n.error && n.error("Unhandled promise rejection", r);
      }), i._h = Wn || Un(i) ? 2 : 1), i._a = void 0, a && e.e) throw e.v;
    });
  },
      Un = function Un(e) {
    return 1 !== e._h && 0 === (e._a || e._c).length;
  },
      Vn = function Vn(t) {
    On.call(y, function () {
      var e;
      Wn ? zn.emit("rejectionHandled", t) : (e = y.onrejectionhandled) && e({
        promise: t,
        reason: t._v
      });
    });
  },
      Kn = function Kn(e) {
    var t = this;
    t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Bn(t, !0));
  },
      Jn = function Jn(e) {
    var n,
        r = this;

    if (!r._d) {
      r._d = !0, r = r._w || r;

      try {
        if (r === e) throw Pn("Promise can't be resolved itself");
        (n = Fn(e)) ? Nn(function () {
          var t = {
            _w: r,
            _d: !1
          };

          try {
            n.call(e, C(Jn, t, 1), C(Kn, t, 1));
          } catch (e) {
            Kn.call(t, e);
          }
        }) : (r._v = e, r._s = 1, Bn(r, !1));
      } catch (e) {
        Kn.call({
          _w: r,
          _d: !1
        }, e);
      }
    }
  };

  Hn || (_Yn = function Yn(e) {
    Ht(this, _Yn, jn, "_h"), T(e), En.call(this);

    try {
      e(C(Jn, this, 1), C(Kn, this, 1));
    } catch (e) {
      Kn.call(this, e);
    }
  }, (En = function En(e) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
  }).prototype = wn(_Yn.prototype, {
    then: function then(e, t) {
      var n = In(Xt(this, _Yn));
      return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Wn ? zn.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Bn(this, !1), n.promise;
    },
    "catch": function _catch(e) {
      return this.then(void 0, e);
    }
  }), Tn = function Tn() {
    var e = new En();
    this.promise = e, this.resolve = C(Jn, e, 1), this.reject = C(Kn, e, 1);
  }, gn.f = In = function In(e) {
    return e === _Yn || e === Cn ? new Tn(e) : Mn(e);
  }), L(L.G + L.W + L.F * !Hn, {
    Promise: _Yn
  }), X(_Yn, jn), xn(jn), Cn = M[jn], L(L.S + L.F * !Hn, jn, {
    reject: function reject(e) {
      var t = In(this);
      return (0, t.reject)(e), t.promise;
    }
  }), L(L.S + !0 * L.F, jn, {
    resolve: function resolve(e) {
      return _n(this === Cn ? _Yn : this, e);
    }
  }), L(L.S + L.F * !(Hn && Dn(function (e) {
    _Yn.all(e)["catch"](qn);
  })), jn, {
    all: function all(e) {
      var o = this,
          t = In(o),
          s = t.resolve,
          c = t.reject,
          n = vn(function () {
        var r = [],
            a = 0,
            i = 1;
        Kt(e, !1, function (e) {
          var t = a++,
              n = !1;
          r.push(void 0), i++, o.resolve(e).then(function (e) {
            n || (n = !0, r[t] = e, --i || s(r));
          }, c);
        }), --i || s(r);
      });
      return n.e && c(n.v), t.promise;
    },
    race: function race(e) {
      var t = this,
          n = In(t),
          r = n.reject,
          a = vn(function () {
        Kt(e, !1, function (e) {
          t.resolve(e).then(n.resolve, r);
        });
      });
      return a.e && r(a.v), n.promise;
    }
  }), L(L.P + L.R, "Promise", {
    "finally": function _finally(t) {
      var n = Xt(this, M.Promise || y.Promise),
          e = "function" == typeof t;
      return this.then(e ? function (e) {
        return _n(n, t()).then(function () {
          return e;
        });
      } : t, e ? function (e) {
        return _n(n, t()).then(function () {
          throw e;
        });
      } : t);
    }
  }), L(L.S, "Promise", {
    "try": function _try(e) {
      var t = gn.f(this),
          n = vn(e);
      return (n.e ? t.reject : t.resolve)(n.v), t.promise;
    }
  });
  var Xn = M.Promise;

  function Zn(e, t, n, r, a, i, o) {
    try {
      var s = e[i](o),
          c = s.value;
    } catch (e) {
      return void n(e);
    }

    s.done ? t(c) : Xn.resolve(c).then(r, a);
  }

  var Qn = function Qn(s) {
    return function () {
      var e = this,
          o = arguments;
      return new Xn(function (t, n) {
        var r = s.apply(e, o);

        function a(e) {
          Zn(r, t, n, a, i, "next", e);
        }

        function i(e) {
          Zn(r, t, n, a, i, "throw", e);
        }

        a(void 0);
      });
    };
  },
      er = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
      tr = e(function (O, N) {
    !function (e) {
      var t = N && !N.nodeType && N,
          n = O && !O.nodeType && O,
          r = "object" == _typeof(er) && er;
      r.global !== r && r.window !== r && r.self !== r || (e = r);
      var a,
          i,
          v = 2147483647,
          y = 36,
          b = 1,
          _ = 26,
          o = 38,
          s = 700,
          w = 72,
          A = 128,
          x = "-",
          c = /^xn--/,
          l = /[^\x20-\x7E]/,
          u = /[\x2E\u3002\uFF0E\uFF61]/g,
          f = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      },
          d = y - b,
          k = Math.floor,
          S = String.fromCharCode;

      function E(e) {
        throw RangeError(f[e]);
      }

      function h(e, t) {
        for (var n = e.length, r = []; n--;) {
          r[n] = t(e[n]);
        }

        return r;
      }

      function p(e, t) {
        var n = e.split("@"),
            r = "";
        return 1 < n.length && (r = n[0] + "@", e = n[1]), r + h((e = e.replace(u, ".")).split("."), t).join(".");
      }

      function M(e) {
        for (var t, n, r = [], a = 0, i = e.length; a < i;) {
          55296 <= (t = e.charCodeAt(a++)) && t <= 56319 && a < i ? 56320 == (64512 & (n = e.charCodeAt(a++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), a--) : r.push(t);
        }

        return r;
      }

      function T(e) {
        return h(e, function (e) {
          var t = "";
          return 65535 < e && (t += S((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += S(e);
        }).join("");
      }

      function C(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
      }

      function D(e, t, n) {
        var r = 0;

        for (e = n ? k(e / s) : e >> 1, e += k(e / t); d * _ >> 1 < e; r += y) {
          e = k(e / d);
        }

        return k(r + (d + 1) * e / (e + o));
      }

      function m(e) {
        var t,
            n,
            r,
            a,
            i,
            o,
            s,
            c,
            l,
            u,
            f,
            d = [],
            h = e.length,
            p = 0,
            m = A,
            g = w;

        for ((n = e.lastIndexOf(x)) < 0 && (n = 0), r = 0; r < n; ++r) {
          128 <= e.charCodeAt(r) && E("not-basic"), d.push(e.charCodeAt(r));
        }

        for (a = 0 < n ? n + 1 : 0; a < h;) {
          for (i = p, o = 1, s = y; h <= a && E("invalid-input"), f = e.charCodeAt(a++), (y <= (c = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : y) || c > k((v - p) / o)) && E("overflow"), p += c * o, !(c < (l = s <= g ? b : g + _ <= s ? _ : s - g)); s += y) {
            o > k(v / (u = y - l)) && E("overflow"), o *= u;
          }

          g = D(p - i, t = d.length + 1, 0 == i), k(p / t) > v - m && E("overflow"), m += k(p / t), p %= t, d.splice(p++, 0, m);
        }

        return T(d);
      }

      function g(e) {
        var t,
            n,
            r,
            a,
            i,
            o,
            s,
            c,
            l,
            u,
            f,
            d,
            h,
            p,
            m,
            g = [];

        for (d = (e = M(e)).length, t = A, i = w, o = n = 0; o < d; ++o) {
          (f = e[o]) < 128 && g.push(S(f));
        }

        for (r = a = g.length, a && g.push(x); r < d;) {
          for (s = v, o = 0; o < d; ++o) {
            t <= (f = e[o]) && f < s && (s = f);
          }

          for (s - t > k((v - n) / (h = r + 1)) && E("overflow"), n += (s - t) * h, t = s, o = 0; o < d; ++o) {
            if ((f = e[o]) < t && ++n > v && E("overflow"), f == t) {
              for (c = n, l = y; !(c < (u = l <= i ? b : i + _ <= l ? _ : l - i)); l += y) {
                m = c - u, p = y - u, g.push(S(C(u + m % p, 0))), c = k(m / p);
              }

              g.push(S(C(c, 0))), i = D(n, h, r == a), n = 0, ++r;
            }
          }

          ++n, ++t;
        }

        return g.join("");
      }

      if (a = {
        version: "1.3.2",
        ucs2: {
          decode: M,
          encode: T
        },
        decode: m,
        encode: g,
        toASCII: function toASCII(e) {
          return p(e, function (e) {
            return l.test(e) ? "xn--" + g(e) : e;
          });
        },
        toUnicode: function toUnicode(e) {
          return p(e, function (e) {
            return c.test(e) ? m(e.slice(4).toLowerCase()) : e;
          });
        }
      }, t && n) {
        if (O.exports == t) n.exports = a;else for (i in a) {
          a.hasOwnProperty(i) && (t[i] = a[i]);
        }
      } else e.punycode = a;
    }(this);
  }),
      nr = {
    isString: function isString(e) {
      return "string" == typeof e;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e;
    },
    isNull: function isNull(e) {
      return null === e;
    },
    isNullOrUndefined: function isNullOrUndefined(e) {
      return null == e;
    }
  };

  var rr = function rr(e, t, n, r) {
    t = t || "&", n = n || "=";
    var a = {};
    if ("string" != typeof e || 0 === e.length) return a;
    var i = /\+/g;
    e = e.split(t);
    var o = 1e3;
    r && "number" == typeof r.maxKeys && (o = r.maxKeys);
    var s,
        c,
        l = e.length;
    0 < o && o < l && (l = o);

    for (var u = 0; u < l; ++u) {
      var f,
          d,
          h,
          p,
          m = e[u].replace(i, "%20"),
          g = m.indexOf(n);
      d = 0 <= g ? (f = m.substr(0, g), m.substr(g + 1)) : (f = m, ""), h = decodeURIComponent(f), p = decodeURIComponent(d), s = a, c = h, Object.prototype.hasOwnProperty.call(s, c) ? Array.isArray(a[h]) ? a[h].push(p) : a[h] = [a[h], p] : a[h] = p;
    }

    return a;
  },
      ar = function ar(e) {
    switch (_typeof(e)) {
      case "string":
        return e;

      case "boolean":
        return e ? "true" : "false";

      case "number":
        return isFinite(e) ? e : "";

      default:
        return "";
    }
  },
      ir = function ir(n, r, a, e) {
    return r = r || "&", a = a || "=", null === n && (n = void 0), "object" == _typeof(n) ? Object.keys(n).map(function (e) {
      var t = encodeURIComponent(ar(e)) + a;
      return Array.isArray(n[e]) ? n[e].map(function (e) {
        return t + encodeURIComponent(ar(e));
      }).join(r) : t + encodeURIComponent(ar(n[e]));
    }).join(r) : e ? encodeURIComponent(ar(e)) + a + encodeURIComponent(ar(n)) : "";
  },
      or = e(function (e, t) {
    t.decode = t.parse = rr, t.encode = t.stringify = ir;
  }),
      sr = (or.decode, or.parse, or.encode, or.stringify, Sr),
      cr = function cr(e, t) {
    return Sr(e, !1, !0).resolve(t);
  },
      lr = function lr(e, t) {
    return e ? Sr(e, !1, !0).resolveObject(t) : t;
  },
      ur = function ur(e) {
    nr.isString(e) && (e = Sr(e));
    return e instanceof dr ? e.format() : dr.prototype.format.call(e);
  },
      fr = dr;

  function dr() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }

  var hr = /^([a-z0-9.+-]+:)/i,
      pr = /:[0-9]*$/,
      mr = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      gr = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
      vr = ["'"].concat(gr),
      yr = ["%", "/", "?", ";", "#"].concat(vr),
      br = ["/", "?", "#"],
      _r = /^[+a-z0-9A-Z_-]{0,63}$/,
      wr = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      Ar = {
    javascript: !0,
    "javascript:": !0
  },
      xr = {
    javascript: !0,
    "javascript:": !0
  },
      kr = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  };

  function Sr(e, t, n) {
    if (e && nr.isObject(e) && e instanceof dr) return e;
    var r = new dr();
    return r.parse(e, t, n), r;
  }

  dr.prototype.parse = function (e, t, n) {
    if (!nr.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(e));
    var r = e.indexOf("?"),
        a = -1 !== r && r < e.indexOf("#") ? "?" : "#",
        i = e.split(a);
    i[0] = i[0].replace(/\\/g, "/");
    var o = e = i.join(a);

    if (o = o.trim(), !n && 1 === e.split("#").length) {
      var s = mr.exec(o);
      if (s) return this.path = o, this.href = o, this.pathname = s[1], s[2] ? (this.search = s[2], this.query = t ? or.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
    }

    var c = hr.exec(o);

    if (c) {
      var l = (c = c[0]).toLowerCase();
      this.protocol = l, o = o.substr(c.length);
    }

    if (n || c || o.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var u = "//" === o.substr(0, 2);
      !u || c && xr[c] || (o = o.substr(2), this.slashes = !0);
    }

    if (!xr[c] && (u || c && !kr[c])) {
      for (var f, d, h = -1, p = 0; p < br.length; p++) {
        -1 !== (m = o.indexOf(br[p])) && (-1 === h || m < h) && (h = m);
      }

      -1 !== (d = -1 === h ? o.lastIndexOf("@") : o.lastIndexOf("@", h)) && (f = o.slice(0, d), o = o.slice(d + 1), this.auth = decodeURIComponent(f)), h = -1;

      for (p = 0; p < yr.length; p++) {
        var m;
        -1 !== (m = o.indexOf(yr[p])) && (-1 === h || m < h) && (h = m);
      }

      -1 === h && (h = o.length), this.host = o.slice(0, h), o = o.slice(h), this.parseHost(), this.hostname = this.hostname || "";
      var g = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!g) for (var v = this.hostname.split(/\./), y = (p = 0, v.length); p < y; p++) {
        var b = v[p];

        if (b && !b.match(_r)) {
          for (var _ = "", w = 0, A = b.length; w < A; w++) {
            127 < b.charCodeAt(w) ? _ += "x" : _ += b[w];
          }

          if (!_.match(_r)) {
            var x = v.slice(0, p),
                k = v.slice(p + 1),
                S = b.match(wr);
            S && (x.push(S[1]), k.unshift(S[2])), k.length && (o = "/" + k.join(".") + o), this.hostname = x.join(".");
            break;
          }
        }
      }
      255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = tr.toASCII(this.hostname));
      var E = this.port ? ":" + this.port : "",
          M = this.hostname || "";
      this.host = M + E, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== o[0] && (o = "/" + o));
    }

    if (!Ar[l]) for (p = 0, y = vr.length; p < y; p++) {
      var T = vr[p];

      if (-1 !== o.indexOf(T)) {
        var C = encodeURIComponent(T);
        C === T && (C = escape(T)), o = o.split(T).join(C);
      }
    }
    var D = o.indexOf("#");
    -1 !== D && (this.hash = o.substr(D), o = o.slice(0, D));
    var O = o.indexOf("?");

    if (-1 !== O ? (this.search = o.substr(O), this.query = o.substr(O + 1), t && (this.query = or.parse(this.query)), o = o.slice(0, O)) : t && (this.search = "", this.query = {}), o && (this.pathname = o), kr[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      E = this.pathname || "";
      var N = this.search || "";
      this.path = E + N;
    }

    return this.href = this.format(), this;
  }, dr.prototype.format = function () {
    var e = this.auth || "";
    e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
    var t = this.protocol || "",
        n = this.pathname || "",
        r = this.hash || "",
        a = !1,
        i = "";
    this.host ? a = e + this.host : this.hostname && (a = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && nr.isObject(this.query) && Object.keys(this.query).length && (i = or.stringify(this.query));
    var o = this.search || i && "?" + i || "";
    return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || kr[t]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : a || (a = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), t + a + (n = n.replace(/[?#]/g, function (e) {
      return encodeURIComponent(e);
    })) + (o = o.replace("#", "%23")) + r;
  }, dr.prototype.resolve = function (e) {
    return this.resolveObject(Sr(e, !1, !0)).format();
  }, dr.prototype.resolveObject = function (e) {
    if (nr.isString(e)) {
      var t = new dr();
      t.parse(e, !1, !0), e = t;
    }

    for (var n = new dr(), r = Object.keys(this), a = 0; a < r.length; a++) {
      var i = r[a];
      n[i] = this[i];
    }

    if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;

    if (e.slashes && !e.protocol) {
      for (var o = Object.keys(e), s = 0; s < o.length; s++) {
        var c = o[s];
        "protocol" !== c && (n[c] = e[c]);
      }

      return kr[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
    }

    if (e.protocol && e.protocol !== n.protocol) {
      if (!kr[e.protocol]) {
        for (var l = Object.keys(e), u = 0; u < l.length; u++) {
          var f = l[u];
          n[f] = e[f];
        }

        return n.href = n.format(), n;
      }

      if (n.protocol = e.protocol, e.host || xr[e.protocol]) n.pathname = e.pathname;else {
        for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift());) {
          ;
        }

        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/");
      }

      if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
        var h = n.pathname || "",
            p = n.search || "";
        n.path = h + p;
      }

      return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
    }

    var m = n.pathname && "/" === n.pathname.charAt(0),
        g = e.host || e.pathname && "/" === e.pathname.charAt(0),
        v = g || m || n.host && e.pathname,
        y = v,
        b = n.pathname && n.pathname.split("/") || [],
        _ = (d = e.pathname && e.pathname.split("/") || [], n.protocol && !kr[n.protocol]);

    if (_ && (n.hostname = "", n.port = null, n.host && ("" === b[0] ? b[0] = n.host : b.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), v = v && ("" === d[0] || "" === b[0])), g) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, b = d;else if (d.length) b || (b = []), b.pop(), b = b.concat(d), n.search = e.search, n.query = e.query;else if (!nr.isNullOrUndefined(e.search)) {
      if (_) n.hostname = n.host = b.shift(), (S = !!(n.host && 0 < n.host.indexOf("@")) && n.host.split("@")) && (n.auth = S.shift(), n.host = n.hostname = S.shift());
      return n.search = e.search, n.query = e.query, nr.isNull(n.pathname) && nr.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
    }
    if (!b.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;

    for (var w = b.slice(-1)[0], A = (n.host || e.host || 1 < b.length) && ("." === w || ".." === w) || "" === w, x = 0, k = b.length; 0 <= k; k--) {
      "." === (w = b[k]) ? b.splice(k, 1) : ".." === w ? (b.splice(k, 1), x++) : x && (b.splice(k, 1), x--);
    }

    if (!v && !y) for (; x--; x) {
      b.unshift("..");
    }
    !v || "" === b[0] || b[0] && "/" === b[0].charAt(0) || b.unshift(""), A && "/" !== b.join("/").substr(-1) && b.push("");
    var S,
        E = "" === b[0] || b[0] && "/" === b[0].charAt(0);
    _ && (n.hostname = n.host = E ? "" : b.length ? b.shift() : "", (S = !!(n.host && 0 < n.host.indexOf("@")) && n.host.split("@")) && (n.auth = S.shift(), n.host = n.hostname = S.shift()));
    return (v = v || n.host && b.length) && !E && b.unshift(""), b.length ? n.pathname = b.join("/") : (n.pathname = null, n.path = null), nr.isNull(n.pathname) && nr.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
  }, dr.prototype.parseHost = function () {
    var e = this.host,
        t = pr.exec(e);
    t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
  };
  var Er,
      Mr = {
    parse: sr,
    resolve: cr,
    resolveObject: lr,
    format: ur,
    Url: fr
  },
      Tr = e(function (e) {
    var t, n;
    t = "undefined" != typeof window ? window : this, n = function n(x, e) {
      var t = [],
          k = x.document,
          r = Object.getPrototypeOf,
          s = t.slice,
          m = t.concat,
          c = t.push,
          a = t.indexOf,
          n = {},
          i = n.toString,
          g = n.hasOwnProperty,
          o = g.toString,
          l = o.call(Object),
          v = {},
          y = function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
          b = function b(e) {
        return null != e && e === e.window;
      },
          u = {
        type: !0,
        src: !0,
        noModule: !0
      };

      function _(e, t, n) {
        var r,
            a = (t = t || k).createElement("script");
        if (a.text = e, n) for (r in u) {
          n[r] && (a[r] = n[r]);
        }
        t.head.appendChild(a).parentNode.removeChild(a);
      }

      function w(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[i.call(e)] || "object" : _typeof(e);
      }

      var S = function S(e, t) {
        return new S.fn.init(e, t);
      },
          f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
      }

      S.fn = S.prototype = {
        jquery: "3.3.1",
        constructor: S,
        length: 0,
        toArray: function toArray() {
          return s.call(this);
        },
        get: function get(e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function pushStack(e) {
          var t = S.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        each: function each(e) {
          return S.each(this, e);
        },
        map: function map(n) {
          return this.pushStack(S.map(this, function (e, t) {
            return n.call(e, t, e);
          }));
        },
        slice: function slice() {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: t.sort,
        splice: t.splice
      }, S.extend = S.fn.extend = function () {
        var e,
            t,
            n,
            r,
            a,
            i,
            o = arguments[0] || {},
            s = 1,
            c = arguments.length,
            l = !1;

        for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == _typeof(o) || y(o) || (o = {}), s === c && (o = this, s--); s < c; s++) {
          if (null != (e = arguments[s])) for (t in e) {
            n = o[t], o !== (r = e[t]) && (l && r && (S.isPlainObject(r) || (a = Array.isArray(r))) ? (i = a ? (a = !1, n && Array.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, o[t] = S.extend(l, i, r)) : void 0 !== r && (o[t] = r));
          }
        }

        return o;
      }, S.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function error(e) {
          throw new Error(e);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(e) {
          var t, n;
          return !(!e || "[object Object]" !== i.call(e) || (t = r(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || o.call(n) !== l));
        },
        isEmptyObject: function isEmptyObject(e) {
          var t;

          for (t in e) {
            return !1;
          }

          return !0;
        },
        globalEval: function globalEval(e) {
          _(e);
        },
        each: function each(e, t) {
          var n,
              r = 0;
          if (d(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
            ;
          } else for (r in e) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }
          return e;
        },
        trim: function trim(e) {
          return null == e ? "" : (e + "").replace(f, "");
        },
        makeArray: function makeArray(e, t) {
          var n = t || [];
          return null != e && (d(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
        },
        inArray: function inArray(e, t, n) {
          return null == t ? -1 : a.call(t, e, n);
        },
        merge: function merge(e, t) {
          for (var n = +t.length, r = 0, a = e.length; r < n; r++) {
            e[a++] = t[r];
          }

          return e.length = a, e;
        },
        grep: function grep(e, t, n) {
          for (var r = [], a = 0, i = e.length, o = !n; a < i; a++) {
            !t(e[a], a) !== o && r.push(e[a]);
          }

          return r;
        },
        map: function map(e, t, n) {
          var r,
              a,
              i = 0,
              o = [];
          if (d(e)) for (r = e.length; i < r; i++) {
            null != (a = t(e[i], i, n)) && o.push(a);
          } else for (i in e) {
            null != (a = t(e[i], i, n)) && o.push(a);
          }
          return m.apply([], o);
        },
        guid: 1,
        support: v
      }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      });

      var h = function (n) {
        var e,
            h,
            _,
            i,
            a,
            p,
            f,
            m,
            w,
            c,
            l,
            A,
            x,
            o,
            k,
            g,
            s,
            u,
            v,
            S = "sizzle" + 1 * new Date(),
            y = n.document,
            E = 0,
            r = 0,
            d = oe(),
            b = oe(),
            M = oe(),
            T = function T(e, t) {
          return e === t && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            O = t.push,
            N = t.push,
            j = t.slice,
            P = function P(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }

          return -1;
        },
            z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            Y = "\\[" + L + "*(" + R + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + L + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Y + ")*)|.*)\\)|)",
            q = new RegExp(L + "+", "g"),
            I = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            H = new RegExp("^" + L + "*," + L + "*"),
            F = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            B = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            G = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            $ = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + Y),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + z + ")$", "i"),
          needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        },
            V = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            Q = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ee = function ee(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function ne(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            re = function re() {
          A();
        },
            ae = ye(function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          N.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType;
        } catch (n) {
          N = {
            apply: t.length ? function (e, t) {
              O.apply(e, j.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) {
                ;
              }

              e.length = n - 1;
            }
          };
        }

        function ie(e, t, n, r) {
          var a,
              i,
              o,
              s,
              c,
              l,
              u,
              f = t && t.ownerDocument,
              d = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;

          if (!r && ((t ? t.ownerDocument || t : y) !== x && A(t), t = t || x, k)) {
            if (11 !== d && (c = X.exec(e))) if (a = c[1]) {
              if (9 === d) {
                if (!(o = t.getElementById(a))) return n;
                if (o.id === a) return n.push(o), n;
              } else if (f && (o = f.getElementById(a)) && v(t, o) && o.id === a) return n.push(o), n;
            } else {
              if (c[2]) return N.apply(n, t.getElementsByTagName(e)), n;
              if ((a = c[3]) && h.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(a)), n;
            }

            if (h.qsa && !M[e + " "] && (!g || !g.test(e))) {
              if (1 !== d) f = t, u = e;else if ("object" !== t.nodeName.toLowerCase()) {
                for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = S), i = (l = p(e)).length; i--;) {
                  l[i] = "#" + s + " " + ve(l[i]);
                }

                u = l.join(","), f = Z.test(e) && me(t.parentNode) || t;
              }
              if (u) try {
                return N.apply(n, f.querySelectorAll(u)), n;
              } catch (e) {} finally {
                s === S && t.removeAttribute("id");
              }
            }
          }

          return m(e.replace(I, "$1"), t, n, r);
        }

        function oe() {
          var r = [];
          return function e(t, n) {
            return r.push(t + " ") > _.cacheLength && delete e[r.shift()], e[t + " "] = n;
          };
        }

        function se(e) {
          return e[S] = !0, e;
        }

        function ce(e) {
          var t = x.createElement("fieldset");

          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }

        function le(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) {
            _.attrHandle[n[r]] = t;
          }
        }

        function ue(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }
          return e ? 1 : -1;
        }

        function fe(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }

        function de(n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
          };
        }

        function he(t) {
          return function (e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
          };
        }

        function pe(o) {
          return se(function (i) {
            return i = +i, se(function (e, t) {
              for (var n, r = o([], e.length, i), a = r.length; a--;) {
                e[n = r[a]] && (e[n] = !(t[n] = e[n]));
              }
            });
          });
        }

        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }

        for (e in h = ie.support = {}, a = ie.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }, A = ie.setDocument = function (e) {
          var t,
              n,
              r = e ? e.ownerDocument || e : y;
          return r !== x && 9 === r.nodeType && r.documentElement && (o = (x = r).documentElement, k = !a(x), y !== x && (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), h.attributes = ce(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), h.getElementsByTagName = ce(function (e) {
            return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length;
          }), h.getElementsByClassName = J.test(x.getElementsByClassName), h.getById = ce(function (e) {
            return o.appendChild(e).id = S, !x.getElementsByName || !x.getElementsByName(S).length;
          }), h.getById ? (_.filter.ID = function (e) {
            var t = e.replace(Q, ee);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }, _.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && k) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          }) : (_.filter.ID = function (e) {
            var n = e.replace(Q, ee);
            return function (e) {
              var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return t && t.value === n;
            };
          }, _.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && k) {
              var n,
                  r,
                  a,
                  i = t.getElementById(e);

              if (i) {
                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];

                for (a = t.getElementsByName(e), r = 0; i = a[r++];) {
                  if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                }
              }

              return [];
            }
          }), _.find.TAG = h.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                a = 0,
                i = t.getElementsByTagName(e);
            if ("*" !== e) return i;

            for (; n = i[a++];) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }, _.find.CLASS = h.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e);
          }, s = [], g = [], (h.qsa = J.test(x.querySelectorAll)) && (ce(function (e) {
            o.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + z + ")"), e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]");
          }), ce(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = x.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), o.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
          })), (h.matchesSelector = J.test(u = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ce(function (e) {
            h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), s.push("!=", W);
          }), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = J.test(o.compareDocumentPosition), v = t || J.test(o.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }
            return !1;
          }, T = t ? function (e, t) {
            if (e === t) return l = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === x || e.ownerDocument === y && v(y, e) ? -1 : t === x || t.ownerDocument === y && v(y, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & n ? -1 : 1);
          } : function (e, t) {
            if (e === t) return l = !0, 0;
            var n,
                r = 0,
                a = e.parentNode,
                i = t.parentNode,
                o = [e],
                s = [t];
            if (!a || !i) return e === x ? -1 : t === x ? 1 : a ? -1 : i ? 1 : c ? P(c, e) - P(c, t) : 0;
            if (a === i) return ue(e, t);

            for (n = e; n = n.parentNode;) {
              o.unshift(n);
            }

            for (n = t; n = n.parentNode;) {
              s.unshift(n);
            }

            for (; o[r] === s[r];) {
              r++;
            }

            return r ? ue(o[r], s[r]) : o[r] === y ? -1 : s[r] === y ? 1 : 0;
          }), x;
        }, ie.matches = function (e, t) {
          return ie(e, null, null, t);
        }, ie.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== x && A(e), t = t.replace(B, "='$1']"), h.matchesSelector && k && !M[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
            var n = u.call(e, t);
            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
          } catch (e) {}
          return 0 < ie(t, x, null, [e]).length;
        }, ie.contains = function (e, t) {
          return (e.ownerDocument || e) !== x && A(e), v(e, t);
        }, ie.attr = function (e, t) {
          (e.ownerDocument || e) !== x && A(e);

          var n = _.attrHandle[t.toLowerCase()],
              r = n && C.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;

          return void 0 !== r ? r : h.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, ie.escape = function (e) {
          return (e + "").replace(te, ne);
        }, ie.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, ie.uniqueSort = function (e) {
          var t,
              n = [],
              r = 0,
              a = 0;

          if (l = !h.detectDuplicates, c = !h.sortStable && e.slice(0), e.sort(T), l) {
            for (; t = e[a++];) {
              t === e[a] && (r = n.push(a));
            }

            for (; r--;) {
              e.splice(n[r], 1);
            }
          }

          return c = null, e;
        }, i = ie.getText = function (e) {
          var t,
              n = "",
              r = 0,
              a = e.nodeType;

          if (a) {
            if (1 === a || 9 === a || 11 === a) {
              if ("string" == typeof e.textContent) return e.textContent;

              for (e = e.firstChild; e; e = e.nextSibling) {
                n += i(e);
              }
            } else if (3 === a || 4 === a) return e.nodeValue;
          } else for (; t = e[r++];) {
            n += i(t);
          }

          return n;
        }, (_ = ie.selectors = {
          cacheLength: 50,
          createPseudo: se,
          match: $,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(e) {
              return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e;
            },
            PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];
              return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(e) {
              var t = e.replace(Q, ee).toLowerCase();
              return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            },
            CLASS: function CLASS(e) {
              var t = d[e + " "];
              return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && d(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(n, r, a) {
              return function (e) {
                var t = ie.attr(e, n);
                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === a : "!=" === r ? t !== a : "^=" === r ? a && 0 === t.indexOf(a) : "*=" === r ? a && -1 < t.indexOf(a) : "$=" === r ? a && t.slice(-a.length) === a : "~=" === r ? -1 < (" " + t.replace(q, " ") + " ").indexOf(a) : "|=" === r && (t === a || t.slice(0, a.length + 1) === a + "-"));
              };
            },
            CHILD: function CHILD(p, e, t, m, g) {
              var v = "nth" !== p.slice(0, 3),
                  y = "last" !== p.slice(-4),
                  b = "of-type" === e;
              return 1 === m && 0 === g ? function (e) {
                return !!e.parentNode;
              } : function (e, t, n) {
                var r,
                    a,
                    i,
                    o,
                    s,
                    c,
                    l = v !== y ? "nextSibling" : "previousSibling",
                    u = e.parentNode,
                    f = b && e.nodeName.toLowerCase(),
                    d = !n && !b,
                    h = !1;

                if (u) {
                  if (v) {
                    for (; l;) {
                      for (o = e; o = o[l];) {
                        if (b ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                      }

                      c = l = "only" === p && !c && "nextSibling";
                    }

                    return !0;
                  }

                  if (c = [y ? u.firstChild : u.lastChild], y && d) {
                    for (h = (s = (r = (a = (i = (o = u)[S] || (o[S] = {}))[o.uniqueID] || (i[o.uniqueID] = {}))[p] || [])[0] === E && r[1]) && r[2], o = s && u.childNodes[s]; o = ++s && o && o[l] || (h = s = 0) || c.pop();) {
                      if (1 === o.nodeType && ++h && o === e) {
                        a[p] = [E, s, h];
                        break;
                      }
                    }
                  } else if (d && (h = s = (r = (a = (i = (o = e)[S] || (o[S] = {}))[o.uniqueID] || (i[o.uniqueID] = {}))[p] || [])[0] === E && r[1]), !1 === h) for (; (o = ++s && o && o[l] || (h = s = 0) || c.pop()) && ((b ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++h || (d && ((a = (i = o[S] || (o[S] = {}))[o.uniqueID] || (i[o.uniqueID] = {}))[p] = [E, h]), o !== e));) {
                    ;
                  }

                  return (h -= g) === m || h % m == 0 && 0 <= h / m;
                }
              };
            },
            PSEUDO: function PSEUDO(e, i) {
              var t,
                  o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
              return o[S] ? o(i) : 1 < o.length ? (t = [e, e, "", i], _.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                for (var n, r = o(e, i), a = r.length; a--;) {
                  e[n = P(e, r[a])] = !(t[n] = r[a]);
                }
              }) : function (e) {
                return o(e, 0, t);
              }) : o;
            }
          },
          pseudos: {
            not: se(function (e) {
              var r = [],
                  a = [],
                  s = f(e.replace(I, "$1"));
              return s[S] ? se(function (e, t, n, r) {
                for (var a, i = s(e, null, r, []), o = e.length; o--;) {
                  (a = i[o]) && (e[o] = !(t[o] = a));
                }
              }) : function (e, t, n) {
                return r[0] = e, s(r, null, n, a), r[0] = null, !a.pop();
              };
            }),
            has: se(function (t) {
              return function (e) {
                return 0 < ie(t, e).length;
              };
            }),
            contains: se(function (t) {
              return t = t.replace(Q, ee), function (e) {
                return -1 < (e.textContent || e.innerText || i(e)).indexOf(t);
              };
            }),
            lang: se(function (n) {
              return U.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(Q, ee).toLowerCase(), function (e) {
                var t;

                do {
                  if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);

                return !1;
              };
            }),
            target: function target(e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function root(e) {
              return e === o;
            },
            focus: function focus(e) {
              return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: he(!1),
            disabled: he(!0),
            checked: function checked(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected;
            },
            selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(e) {
              return !_.pseudos.empty(e);
            },
            header: function header(e) {
              return K.test(e.nodeName);
            },
            input: function input(e) {
              return V.test(e.nodeName);
            },
            button: function button(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t;
            },
            text: function text(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: pe(function () {
              return [0];
            }),
            last: pe(function (e, t) {
              return [t - 1];
            }),
            eq: pe(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: pe(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            odd: pe(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            lt: pe(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; 0 <= --r;) {
                e.push(r);
              }

              return e;
            }),
            gt: pe(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }

              return e;
            })
          }
        }).pseudos.nth = _.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          _.pseudos[e] = fe(e);
        }

        for (e in {
          submit: !0,
          reset: !0
        }) {
          _.pseudos[e] = de(e);
        }

        function ge() {}

        function ve(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }

          return r;
        }

        function ye(s, e, t) {
          var c = e.dir,
              l = e.next,
              u = l || c,
              f = t && "parentNode" === u,
              d = r++;
          return e.first ? function (e, t, n) {
            for (; e = e[c];) {
              if (1 === e.nodeType || f) return s(e, t, n);
            }

            return !1;
          } : function (e, t, n) {
            var r,
                a,
                i,
                o = [E, d];

            if (n) {
              for (; e = e[c];) {
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
              }
            } else for (; e = e[c];) {
              if (1 === e.nodeType || f) if (a = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[c] || e;else {
                if ((r = a[u]) && r[0] === E && r[1] === d) return o[2] = r[2];
                if ((a[u] = o)[2] = s(e, t, n)) return !0;
              }
            }

            return !1;
          };
        }

        function be(a) {
          return 1 < a.length ? function (e, t, n) {
            for (var r = a.length; r--;) {
              if (!a[r](e, t, n)) return !1;
            }

            return !0;
          } : a[0];
        }

        function _e(e, t, n, r, a) {
          for (var i, o = [], s = 0, c = e.length, l = null != t; s < c; s++) {
            (i = e[s]) && (n && !n(i, r, a) || (o.push(i), l && t.push(s)));
          }

          return o;
        }

        function we(h, p, m, g, v, e) {
          return g && !g[S] && (g = we(g)), v && !v[S] && (v = we(v, e)), se(function (e, t, n, r) {
            var a,
                i,
                o,
                s = [],
                c = [],
                l = t.length,
                u = e || function (e, t, n) {
              for (var r = 0, a = t.length; r < a; r++) {
                ie(e, t[r], n);
              }

              return n;
            }(p || "*", n.nodeType ? [n] : n, []),
                f = !h || !e && p ? u : _e(u, s, h, n, r),
                d = m ? v || (e ? h : l || g) ? [] : t : f;

            if (m && m(f, d, n, r), g) for (a = _e(d, c), g(a, [], n, r), i = a.length; i--;) {
              (o = a[i]) && (d[c[i]] = !(f[c[i]] = o));
            }

            if (e) {
              if (v || h) {
                if (v) {
                  for (a = [], i = d.length; i--;) {
                    (o = d[i]) && a.push(f[i] = o);
                  }

                  v(null, d = [], a, r);
                }

                for (i = d.length; i--;) {
                  (o = d[i]) && -1 < (a = v ? P(e, o) : s[i]) && (e[a] = !(t[a] = o));
                }
              }
            } else d = _e(d === t ? d.splice(l, d.length) : d), v ? v(null, t, d, r) : N.apply(t, d);
          });
        }

        function Ae(e) {
          for (var a, t, n, r = e.length, i = _.relative[e[0].type], o = i || _.relative[" "], s = i ? 1 : 0, c = ye(function (e) {
            return e === a;
          }, o, !0), l = ye(function (e) {
            return -1 < P(a, e);
          }, o, !0), u = [function (e, t, n) {
            var r = !i && (n || t !== w) || ((a = t).nodeType ? c(e, t, n) : l(e, t, n));
            return a = null, r;
          }]; s < r; s++) {
            if (t = _.relative[e[s].type]) u = [ye(be(u), t)];else {
              if ((t = _.filter[e[s].type].apply(null, e[s].matches))[S]) {
                for (n = ++s; n < r && !_.relative[e[n].type]; n++) {
                  ;
                }

                return we(1 < s && be(u), 1 < s && ve(e.slice(0, s - 1).concat({
                  value: " " === e[s - 2].type ? "*" : ""
                })).replace(I, "$1"), t, s < n && Ae(e.slice(s, n)), n < r && Ae(e = e.slice(n)), n < r && ve(e));
              }

              u.push(t);
            }
          }

          return be(u);
        }

        return ge.prototype = _.filters = _.pseudos, _.setFilters = new ge(), p = ie.tokenize = function (e, t) {
          var n,
              r,
              a,
              i,
              o,
              s,
              c,
              l = b[e + " "];
          if (l) return t ? 0 : l.slice(0);

          for (o = e, s = [], c = _.preFilter; o;) {
            for (i in n && !(r = H.exec(o)) || (r && (o = o.slice(r[0].length) || o), s.push(a = [])), n = !1, (r = F.exec(o)) && (n = r.shift(), a.push({
              value: n,
              type: r[0].replace(I, " ")
            }), o = o.slice(n.length)), _.filter) {
              !(r = $[i].exec(o)) || c[i] && !(r = c[i](r)) || (n = r.shift(), a.push({
                value: n,
                type: i,
                matches: r
              }), o = o.slice(n.length));
            }

            if (!n) break;
          }

          return t ? o.length : o ? ie.error(e) : b(e, s).slice(0);
        }, f = ie.compile = function (e, t) {
          var n,
              g,
              v,
              y,
              b,
              r,
              a = [],
              i = [],
              o = M[e + " "];

          if (!o) {
            for (t || (t = p(e)), n = t.length; n--;) {
              (o = Ae(t[n]))[S] ? a.push(o) : i.push(o);
            }

            (o = M(e, (g = i, v = a, y = 0 < v.length, b = 0 < g.length, r = function r(e, t, n, _r2, a) {
              var i,
                  o,
                  s,
                  c = 0,
                  l = "0",
                  u = e && [],
                  f = [],
                  d = w,
                  h = e || b && _.find.TAG("*", a),
                  p = E += null == d ? 1 : Math.random() || .1,
                  m = h.length;

              for (a && (w = t === x || t || a); l !== m && null != (i = h[l]); l++) {
                if (b && i) {
                  for (o = 0, t || i.ownerDocument === x || (A(i), n = !k); s = g[o++];) {
                    if (s(i, t || x, n)) {
                      _r2.push(i);

                      break;
                    }
                  }

                  a && (E = p);
                }

                y && ((i = !s && i) && c--, e && u.push(i));
              }

              if (c += l, y && l !== c) {
                for (o = 0; s = v[o++];) {
                  s(u, f, t, n);
                }

                if (e) {
                  if (0 < c) for (; l--;) {
                    u[l] || f[l] || (f[l] = D.call(_r2));
                  }
                  f = _e(f);
                }

                N.apply(_r2, f), a && !e && 0 < f.length && 1 < c + v.length && ie.uniqueSort(_r2);
              }

              return a && (E = p, w = d), u;
            }, y ? se(r) : r))).selector = e;
          }

          return o;
        }, m = ie.select = function (e, t, n, r) {
          var a,
              i,
              o,
              s,
              c,
              l = "function" == typeof e && e,
              u = !r && p(e = l.selector || e);

          if (n = n || [], 1 === u.length) {
            if (2 < (i = u[0] = u[0].slice(0)).length && "ID" === (o = i[0]).type && 9 === t.nodeType && k && _.relative[i[1].type]) {
              if (!(t = (_.find.ID(o.matches[0].replace(Q, ee), t) || [])[0])) return n;
              l && (t = t.parentNode), e = e.slice(i.shift().value.length);
            }

            for (a = $.needsContext.test(e) ? 0 : i.length; a-- && (o = i[a], !_.relative[s = o.type]);) {
              if ((c = _.find[s]) && (r = c(o.matches[0].replace(Q, ee), Z.test(i[0].type) && me(t.parentNode) || t))) {
                if (i.splice(a, 1), !(e = r.length && ve(i))) return N.apply(n, r), n;
                break;
              }
            }
          }

          return (l || f(e, u))(r, t, !k, n, !t || Z.test(e) && me(t.parentNode) || t), n;
        }, h.sortStable = S.split("").sort(T).join("") === S, h.detectDuplicates = !!l, A(), h.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(x.createElement("fieldset"));
        }), ce(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), h.attributes && ce(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function (e) {
          return null == e.getAttribute("disabled");
        }) || le(z, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), ie;
      }(x);

      S.find = h, S.expr = h.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = h.uniqueSort, S.text = h.getText, S.isXMLDoc = h.isXML, S.contains = h.contains, S.escapeSelector = h.escape;

      var p = function p(e, t, n) {
        for (var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
          if (1 === e.nodeType) {
            if (a && S(e).is(n)) break;
            r.push(e);
          }
        }

        return r;
      },
          A = function A(e, t) {
        for (var n = []; e; e = e.nextSibling) {
          1 === e.nodeType && e !== t && n.push(e);
        }

        return n;
      },
          E = S.expr.match.needsContext;

      function M(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }

      var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function C(e, n, r) {
        return y(n) ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? S.grep(e, function (e) {
          return e === n !== r;
        }) : "string" != typeof n ? S.grep(e, function (e) {
          return -1 < a.call(n, e) !== r;
        }) : S.filter(n, e, r);
      }

      S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, S.fn.extend({
        find: function find(e) {
          var t,
              n,
              r = this.length,
              a = this;
          if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
            for (t = 0; t < r; t++) {
              if (S.contains(a[t], this)) return !0;
            }
          }));

          for (n = this.pushStack([]), t = 0; t < r; t++) {
            S.find(e, a[t], n);
          }

          return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function filter(e) {
          return this.pushStack(C(this, e || [], !1));
        },
        not: function not(e) {
          return this.pushStack(C(this, e || [], !0));
        },
        is: function is(e) {
          return !!C(this, "string" == typeof e && E.test(e) ? S(e) : e || [], !1).length;
        }
      });
      var D,
          O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (S.fn.init = function (e, t, n) {
        var r, a;
        if (!e) return this;
        if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), T.test(r[1]) && S.isPlainObject(t)) for (r in t) {
            y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (a = k.getElementById(r[2])) && (this[0] = a, this.length = 1), this;
      }).prototype = S.fn, D = S(k);
      var N = /^(?:parents|prev(?:Until|All))/,
          j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

      function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
          ;
        }

        return e;
      }

      S.fn.extend({
        has: function has(e) {
          var t = S(e, this),
              n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (S.contains(this, t[e])) return !0;
            }
          });
        },
        closest: function closest(e, t) {
          var n,
              r = 0,
              a = this.length,
              i = [],
              o = "string" != typeof e && S(e);
          if (!E.test(e)) for (; r < a; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                i.push(n);
                break;
              }
            }
          }
          return this.pushStack(1 < i.length ? S.uniqueSort(i) : i);
        },
        index: function index(e) {
          return e ? "string" == typeof e ? a.call(S(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function add(e, t) {
          return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }), S.each({
        parent: function parent(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function parents(e) {
          return p(e, "parentNode");
        },
        parentsUntil: function parentsUntil(e, t, n) {
          return p(e, "parentNode", n);
        },
        next: function next(e) {
          return P(e, "nextSibling");
        },
        prev: function prev(e) {
          return P(e, "previousSibling");
        },
        nextAll: function nextAll(e) {
          return p(e, "nextSibling");
        },
        prevAll: function prevAll(e) {
          return p(e, "previousSibling");
        },
        nextUntil: function nextUntil(e, t, n) {
          return p(e, "nextSibling", n);
        },
        prevUntil: function prevUntil(e, t, n) {
          return p(e, "previousSibling", n);
        },
        siblings: function siblings(e) {
          return A((e.parentNode || {}).firstChild, e);
        },
        children: function children(e) {
          return A(e.firstChild);
        },
        contents: function contents(e) {
          return M(e, "iframe") ? e.contentDocument : (M(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
        }
      }, function (r, a) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, a, e);
          return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (j[r] || S.uniqueSort(n), N.test(r) && n.reverse()), this.pushStack(n);
        };
      });
      var z = /[^\x20\t\r\n\f]+/g;

      function L(e) {
        return e;
      }

      function R(e) {
        throw e;
      }

      function Y(e, t, n, r) {
        var a;

        try {
          e && y(a = e.promise) ? a.call(e).done(t).fail(n) : e && y(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }

      S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(z) || [], function (e, t) {
          n[t] = !0;
        }), n) : S.extend({}, r);

        var a,
            t,
            i,
            o,
            s = [],
            c = [],
            l = -1,
            u = function u() {
          for (o = o || r.once, i = a = !0; c.length; l = -1) {
            for (t = c.shift(); ++l < s.length;) {
              !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
            }
          }

          r.memory || (t = !1), a = !1, o && (s = t ? [] : "");
        },
            f = {
          add: function add() {
            return s && (t && !a && (l = s.length - 1, c.push(t)), function n(e) {
              S.each(e, function (e, t) {
                y(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
              });
            }(arguments), t && !a && u()), this;
          },
          remove: function remove() {
            return S.each(arguments, function (e, t) {
              for (var n; -1 < (n = S.inArray(t, s, n));) {
                s.splice(n, 1), n <= l && l--;
              }
            }), this;
          },
          has: function has(e) {
            return e ? -1 < S.inArray(e, s) : 0 < s.length;
          },
          empty: function empty() {
            return s && (s = []), this;
          },
          disable: function disable() {
            return o = c = [], s = t = "", this;
          },
          disabled: function disabled() {
            return !s;
          },
          lock: function lock() {
            return o = c = [], t || a || (s = t = ""), this;
          },
          locked: function locked() {
            return !!o;
          },
          fireWith: function fireWith(e, t) {
            return o || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), a || u()), this;
          },
          fire: function fire() {
            return f.fireWith(this, arguments), this;
          },
          fired: function fired() {
            return !!i;
          }
        };

        return f;
      }, S.extend({
        Deferred: function Deferred(e) {
          var i = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
              a = "pending",
              o = {
            state: function state() {
              return a;
            },
            always: function always() {
              return s.done(arguments).fail(arguments), this;
            },
            "catch": function _catch(e) {
              return o.then(null, e);
            },
            pipe: function pipe() {
              var a = arguments;
              return S.Deferred(function (r) {
                S.each(i, function (e, t) {
                  var n = y(a[t[4]]) && a[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }), a = null;
              }).promise();
            },
            then: function then(t, n, r) {
              var c = 0;

              function l(a, i, o, s) {
                return function () {
                  var n = this,
                      r = arguments,
                      e = function e() {
                    var e, t;

                    if (!(a < c)) {
                      if ((e = o.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, l(c, i, L, s), l(c, i, R, s)) : (c++, t.call(e, l(c, i, L, s), l(c, i, R, s), l(c, i, L, i.notifyWith))) : (o !== L && (n = void 0, r = [e]), (s || i.resolveWith)(n, r));
                    }
                  },
                      t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), c <= a + 1 && (o !== R && (n = void 0, r = [e]), i.rejectWith(n, r));
                    }
                  };

                  a ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), x.setTimeout(t));
                };
              }

              return S.Deferred(function (e) {
                i[0][3].add(l(0, e, y(r) ? r : L, e.notifyWith)), i[1][3].add(l(0, e, y(t) ? t : L)), i[2][3].add(l(0, e, y(n) ? n : R));
              }).promise();
            },
            promise: function promise(e) {
              return null != e ? S.extend(e, o) : o;
            }
          },
              s = {};
          return S.each(i, function (e, t) {
            var n = t[2],
                r = t[5];
            o[t[1]] = n.add, r && n.add(function () {
              a = r;
            }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
              return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
            }, s[t[0] + "With"] = n.fireWith;
          }), o.promise(s), e && e.call(s, s), s;
        },
        when: function when(e) {
          var n = arguments.length,
              t = n,
              r = Array(t),
              a = s.call(arguments),
              i = S.Deferred(),
              o = function o(t) {
            return function (e) {
              r[t] = this, a[t] = 1 < arguments.length ? s.call(arguments) : e, --n || i.resolveWith(r, a);
            };
          };

          if (n <= 1 && (Y(e, i.done(o(t)).resolve, i.reject, !n), "pending" === i.state() || y(a[t] && a[t].then))) return i.then();

          for (; t--;) {
            Y(a[t], o(t), i.reject);
          }

          return i.promise();
        }
      });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      S.Deferred.exceptionHook = function (e, t) {
        x.console && x.console.warn && e && W.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }, S.readyException = function (e) {
        x.setTimeout(function () {
          throw e;
        });
      };
      var q = S.Deferred();

      function I() {
        k.removeEventListener("DOMContentLoaded", I), x.removeEventListener("load", I), S.ready();
      }

      S.fn.ready = function (e) {
        return q.then(e)["catch"](function (e) {
          S.readyException(e);
        }), this;
      }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function ready(e) {
          (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || q.resolveWith(k, [S]);
        }
      }), S.ready.then = q.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? x.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", I), x.addEventListener("load", I));

      var H = function H(e, t, n, r, a, i, o) {
        var s = 0,
            c = e.length,
            l = null == n;
        if ("object" === w(n)) for (s in a = !0, n) {
          H(e, t, s, n[s], !0, i, o);
        } else if (void 0 !== r && (a = !0, y(r) || (o = !0), l && (t = o ? (t.call(e, r), null) : (l = t, function (e, t, n) {
          return l.call(S(e), n);
        })), t)) for (; s < c; s++) {
          t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
        }
        return a ? e : l ? t.call(e) : c ? t(e[0], n) : i;
      },
          F = /^-ms-/,
          B = /-([a-z])/g;

      function G(e, t) {
        return t.toUpperCase();
      }

      function U(e) {
        return e.replace(F, "ms-").replace(B, G);
      }

      var $ = function $(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };

      function V() {
        this.expando = S.expando + V.uid++;
      }

      V.uid = 1, V.prototype = {
        cache: function cache(e) {
          var t = e[this.expando];
          return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function set(e, t, n) {
          var r,
              a = this.cache(e);
          if ("string" == typeof t) a[U(t)] = n;else for (r in t) {
            a[U(r)] = t[r];
          }
          return a;
        },
        get: function get(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
        },
        access: function access(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function remove(e, t) {
          var n,
              r = e[this.expando];

          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(z) || []).length;

              for (; n--;) {
                delete r[t[n]];
              }
            }

            (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function hasData(e) {
          var t = e[this.expando];
          return void 0 !== t && !S.isEmptyObject(t);
        }
      };
      var K = new V(),
          J = new V(),
          X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Z = /[A-Z]/g;

      function Q(e, t, n) {
        var r, a;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = "true" === (a = n) || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
          } catch (e) {}

          J.set(e, t, n);
        } else n = void 0;
        return n;
      }

      S.extend({
        hasData: function hasData(e) {
          return J.hasData(e) || K.hasData(e);
        },
        data: function data(e, t, n) {
          return J.access(e, t, n);
        },
        removeData: function removeData(e, t) {
          J.remove(e, t);
        },
        _data: function _data(e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function _removeData(e, t) {
          K.remove(e, t);
        }
      }), S.fn.extend({
        data: function data(n, e) {
          var t,
              r,
              a,
              i = this[0],
              o = i && i.attributes;
          if (void 0 !== n) return "object" == _typeof(n) ? this.each(function () {
            J.set(this, n);
          }) : H(this, function (e) {
            var t;

            if (i && void 0 === e) {
              if (void 0 !== (t = J.get(i, n))) return t;
              if (void 0 !== (t = Q(i, n))) return t;
            } else this.each(function () {
              J.set(this, n, e);
            });
          }, null, e, 1 < arguments.length, null, !0);

          if (this.length && (a = J.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
            for (t = o.length; t--;) {
              o[t] && 0 === (r = o[t].name).indexOf("data-") && (r = U(r.slice(5)), Q(i, r, a[r]));
            }

            K.set(i, "hasDataAttrs", !0);
          }

          return a;
        },
        removeData: function removeData(e) {
          return this.each(function () {
            J.remove(this, e);
          });
        }
      }), S.extend({
        queue: function queue(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function dequeue(e, t) {
          t = t || "fx";

          var n = S.queue(e, t),
              r = n.length,
              a = n.shift(),
              i = S._queueHooks(e, t);

          "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, function () {
            S.dequeue(e, t);
          }, i)), !r && i && i.empty.fire();
        },
        _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";
          return K.get(e, n) || K.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              K.remove(e, [t + "queue", n]);
            })
          });
        }
      }), S.fn.extend({
        queue: function queue(t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
            var e = S.queue(this, t, n);
            S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
          });
        },
        dequeue: function dequeue(e) {
          return this.each(function () {
            S.dequeue(this, e);
          });
        },
        clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        },
        promise: function promise(e, t) {
          var n,
              r = 1,
              a = S.Deferred(),
              i = this,
              o = this.length,
              s = function s() {
            --r || a.resolveWith(i, [i]);
          };

          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) {
            (n = K.get(i[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          }

          return s(), a.promise(t);
        }
      });

      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
          ne = ["Top", "Right", "Bottom", "Left"],
          re = function re(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display");
      },
          ae = function ae(e, t, n, r) {
        var a,
            i,
            o = {};

        for (i in t) {
          o[i] = e.style[i], e.style[i] = t[i];
        }

        for (i in a = n.apply(e, r || []), t) {
          e.style[i] = o[i];
        }

        return a;
      };

      function ie(e, t, n, r) {
        var a,
            i,
            o = 20,
            s = r ? function () {
          return r.cur();
        } : function () {
          return S.css(e, t, "");
        },
            c = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            u = (S.cssNumber[t] || "px" !== l && +c) && te.exec(S.css(e, t));

        if (u && u[3] !== l) {
          for (c /= 2, l = l || u[3], u = +c || 1; o--;) {
            S.style(e, t, u + l), (1 - i) * (1 - (i = s() / c || .5)) <= 0 && (o = 0), u /= i;
          }

          u *= 2, S.style(e, t, u + l), n = n || [];
        }

        return n && (u = +u || +c || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = a)), a;
      }

      var oe = {};

      function se(e, t) {
        for (var n, r, a = [], i = 0, o = e.length; i < o; i++) {
          (r = e[i]).style && (n = r.style.display, t ? ("none" === n && (a[i] = K.get(r, "display") || null, a[i] || (r.style.display = "")), "" === r.style.display && re(r) && (a[i] = (f = l = c = void 0, l = (s = r).ownerDocument, u = s.nodeName, (f = oe[u]) || (c = l.body.appendChild(l.createElement(u)), f = S.css(c, "display"), c.parentNode.removeChild(c), "none" === f && (f = "block"), oe[u] = f)))) : "none" !== n && (a[i] = "none", K.set(r, "display", n)));
        }

        var s, c, l, u, f;

        for (i = 0; i < o; i++) {
          null != a[i] && (e[i].style.display = a[i]);
        }

        return e;
      }

      S.fn.extend({
        show: function show() {
          return se(this, !0);
        },
        hide: function hide() {
          return se(this);
        },
        toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            re(this) ? S(this).show() : S(this).hide();
          });
        }
      });
      var ce = /^(?:checkbox|radio)$/i,
          le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          ue = /^$|^module$|\/(?:java|ecma)script/i,
          fe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function de(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && M(e, t) ? S.merge([e], n) : n;
      }

      function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
        }
      }

      fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
      var pe,
          me,
          ge = /<|&#?\w+;/;

      function ve(e, t, n, r, a) {
        for (var i, o, s, c, l, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) {
          if ((i = e[h]) || 0 === i) if ("object" === w(i)) S.merge(d, i.nodeType ? [i] : i);else if (ge.test(i)) {
            for (o = o || f.appendChild(t.createElement("div")), s = (le.exec(i) || ["", ""])[1].toLowerCase(), c = fe[s] || fe._default, o.innerHTML = c[1] + S.htmlPrefilter(i) + c[2], u = c[0]; u--;) {
              o = o.lastChild;
            }

            S.merge(d, o.childNodes), (o = f.firstChild).textContent = "";
          } else d.push(t.createTextNode(i));
        }

        for (f.textContent = "", h = 0; i = d[h++];) {
          if (r && -1 < S.inArray(i, r)) a && a.push(i);else if (l = S.contains(i.ownerDocument, i), o = de(f.appendChild(i), "script"), l && he(o), n) for (u = 0; i = o[u++];) {
            ue.test(i.type || "") && n.push(i);
          }
        }

        return f;
      }

      pe = k.createDocumentFragment().appendChild(k.createElement("div")), (me = k.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), pe.appendChild(me), v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue;
      var ye = k.documentElement,
          be = /^key/,
          _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          we = /^([^.]*)(?:\.(.+)|)/;

      function Ae() {
        return !0;
      }

      function xe() {
        return !1;
      }

      function ke() {
        try {
          return k.activeElement;
        } catch (e) {}
      }

      function Se(e, t, n, r, a, i) {
        var o, s;

        if ("object" == _typeof(t)) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
            Se(e, s, n, r, t[s], i);
          }

          return e;
        }

        if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), !1 === a) a = xe;else if (!a) return e;
        return 1 === i && (o = a, (a = function a(e) {
          return S().off(e), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = S.guid++)), e.each(function () {
          S.event.add(this, t, a, r, n);
        });
      }

      S.event = {
        global: {},
        add: function add(t, e, n, r, a) {
          var i,
              o,
              s,
              c,
              l,
              u,
              f,
              d,
              h,
              p,
              m,
              g = K.get(t);
          if (g) for (n.handler && (n = (i = n).handler, a = i.selector), a && S.find.matchesSelector(ye, a), n.guid || (n.guid = S.guid++), (c = g.events) || (c = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
            return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
          }), l = (e = (e || "").match(z) || [""]).length; l--;) {
            h = m = (s = we.exec(e[l]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = S.event.special[h] || {}, h = (a ? f.delegateType : f.bindType) || h, f = S.event.special[h] || {}, u = S.extend({
              type: h,
              origType: m,
              data: r,
              handler: n,
              guid: n.guid,
              selector: a,
              needsContext: a && S.expr.match.needsContext.test(a),
              namespace: p.join(".")
            }, i), (d = c[h]) || ((d = c[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, o) || t.addEventListener && t.addEventListener(h, o)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), a ? d.splice(d.delegateCount++, 0, u) : d.push(u), S.event.global[h] = !0);
          }
        },
        remove: function remove(e, t, n, r, a) {
          var i,
              o,
              s,
              c,
              l,
              u,
              f,
              d,
              h,
              p,
              m,
              g = K.hasData(e) && K.get(e);

          if (g && (c = g.events)) {
            for (l = (t = (t || "").match(z) || [""]).length; l--;) {
              if (h = m = (s = we.exec(t[l]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                for (f = S.event.special[h] || {}, d = c[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = i = d.length; i--;) {
                  u = d[i], !a && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (d.splice(i, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                }

                o && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || S.removeEvent(e, h, g.handle), delete c[h]);
              } else for (h in c) {
                S.event.remove(e, h + t[l], n, r, !0);
              }
            }

            S.isEmptyObject(c) && K.remove(e, "handle events");
          }
        },
        dispatch: function dispatch(e) {
          var t,
              n,
              r,
              a,
              i,
              o,
              s = S.event.fix(e),
              c = new Array(arguments.length),
              l = (K.get(this, "events") || {})[s.type] || [],
              u = S.event.special[s.type] || {};

          for (c[0] = s, t = 1; t < arguments.length; t++) {
            c[t] = arguments[t];
          }

          if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
            for (o = S.event.handlers.call(this, s, l), t = 0; (a = o[t++]) && !s.isPropagationStopped();) {
              for (s.currentTarget = a.elem, n = 0; (i = a.handlers[n++]) && !s.isImmediatePropagationStopped();) {
                s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((S.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, c)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
              }
            }

            return u.postDispatch && u.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function handlers(e, t) {
          var n,
              r,
              a,
              i,
              o,
              s = [],
              c = t.delegateCount,
              l = e.target;
          if (c && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (i = [], o = {}, n = 0; n < c; n++) {
                void 0 === o[a = (r = t[n]).selector + " "] && (o[a] = r.needsContext ? -1 < S(a, this).index(l) : S.find(a, this, null, [l]).length), o[a] && i.push(r);
              }

              i.length && s.push({
                elem: l,
                handlers: i
              });
            }
          }
          return l = this, c < t.length && s.push({
            elem: l,
            handlers: t.slice(c)
          }), s;
        },
        addProp: function addProp(t, e) {
          Object.defineProperty(S.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: y(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
            set: function set(e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              });
            }
          });
        },
        fix: function fix(e) {
          return e[S.expando] ? e : new S.Event(e);
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            trigger: function trigger() {
              if (this !== ke() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function trigger() {
              if (this === ke() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function trigger() {
              if ("checkbox" === this.type && this.click && M(this, "input")) return this.click(), !1;
            },
            _default: function _default(e) {
              return M(e.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
      }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(e) {
          var t = e.button;
          return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
      }, S.event.addProp), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, a) {
        S.event.special[e] = {
          delegateType: a,
          bindType: a,
          handle: function handle(e) {
            var t,
                n = e.relatedTarget,
                r = e.handleObj;
            return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = a), t;
          }
        };
      }), S.fn.extend({
        on: function on(e, t, n, r) {
          return Se(this, e, t, n, r);
        },
        one: function one(e, t, n, r) {
          return Se(this, e, t, n, r, 1);
        },
        off: function off(e, t, n) {
          var r, a;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" != _typeof(e)) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function () {
            S.event.remove(this, e, n, t);
          });

          for (a in e) {
            this.off(a, t, e[a]);
          }

          return this;
        }
      });
      var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Me = /<script|<style|<link/i,
          Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function De(e, t) {
        return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
      }

      function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }

      function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }

      function je(e, t) {
        var n, r, a, i, o, s, c, l;

        if (1 === t.nodeType) {
          if (K.hasData(e) && (i = K.access(e), o = K.set(t, i), l = i.events)) for (a in delete o.handle, o.events = {}, l) {
            for (n = 0, r = l[a].length; n < r; n++) {
              S.event.add(t, a, l[a][n]);
            }
          }
          J.hasData(e) && (s = J.access(e), c = S.extend({}, s), J.set(t, c));
        }
      }

      function Pe(n, r, a, i) {
        r = m.apply([], r);
        var e,
            t,
            o,
            s,
            c,
            l,
            u = 0,
            f = n.length,
            d = f - 1,
            h = r[0],
            p = y(h);
        if (p || 1 < f && "string" == typeof h && !v.checkClone && Te.test(h)) return n.each(function (e) {
          var t = n.eq(e);
          p && (r[0] = h.call(this, e, t.html())), Pe(t, r, a, i);
        });

        if (f && (t = (e = ve(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
          for (s = (o = S.map(de(e, "script"), Oe)).length; u < f; u++) {
            c = e, u !== d && (c = S.clone(c, !0, !0), s && S.merge(o, de(c, "script"))), a.call(n[u], c, u);
          }

          if (s) for (l = o[o.length - 1].ownerDocument, S.map(o, Ne), u = 0; u < s; u++) {
            c = o[u], ue.test(c.type || "") && !K.access(c, "globalEval") && S.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(c.src) : _(c.textContent.replace(Ce, ""), l, c));
          }
        }

        return n;
      }

      function ze(e, t, n) {
        for (var r, a = t ? S.filter(t, e) : e, i = 0; null != (r = a[i]); i++) {
          n || 1 !== r.nodeType || S.cleanData(de(r)), r.parentNode && (n && S.contains(r.ownerDocument, r) && he(de(r, "script")), r.parentNode.removeChild(r));
        }

        return e;
      }

      S.extend({
        htmlPrefilter: function htmlPrefilter(e) {
          return e.replace(Ee, "<$1></$2>");
        },
        clone: function clone(e, t, n) {
          var r,
              a,
              i,
              o,
              s,
              c,
              l,
              u = e.cloneNode(!0),
              f = S.contains(e.ownerDocument, e);
          if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (o = de(u), r = 0, a = (i = de(e)).length; r < a; r++) {
            s = i[r], c = o[r], void 0, "input" === (l = c.nodeName.toLowerCase()) && ce.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
          }
          if (t) if (n) for (i = i || de(e), o = o || de(u), r = 0, a = i.length; r < a; r++) {
            je(i[r], o[r]);
          } else je(e, u);
          return 0 < (o = de(u, "script")).length && he(o, !f && de(e, "script")), u;
        },
        cleanData: function cleanData(e) {
          for (var t, n, r, a = S.event.special, i = 0; void 0 !== (n = e[i]); i++) {
            if ($(n)) {
              if (t = n[K.expando]) {
                if (t.events) for (r in t.events) {
                  a[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                }
                n[K.expando] = void 0;
              }

              n[J.expando] && (n[J.expando] = void 0);
            }
          }
        }
      }), S.fn.extend({
        detach: function detach(e) {
          return ze(this, e, !0);
        },
        remove: function remove(e) {
          return ze(this, e);
        },
        text: function text(e) {
          return H(this, function (e) {
            return void 0 === e ? S.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        },
        append: function append() {
          return Pe(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e);
          });
        },
        prepend: function prepend() {
          return Pe(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = De(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function before() {
          return Pe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function after() {
          return Pe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (S.cleanData(de(e, !1)), e.textContent = "");
          }

          return this;
        },
        clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return S.clone(this, e, t);
          });
        },
        html: function html(e) {
          return H(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

            if ("string" == typeof e && !Me.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);

              try {
                for (; n < r; n++) {
                  1 === (t = this[n] || {}).nodeType && (S.cleanData(de(t, !1)), t.innerHTML = e);
                }

                t = 0;
              } catch (e) {}
            }

            t && this.empty().append(e);
          }, null, e, arguments.length);
        },
        replaceWith: function replaceWith() {
          var n = [];
          return Pe(this, arguments, function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 && (S.cleanData(de(this)), t && t.replaceChild(e, this));
          }, n);
        }
      }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, o) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), a = r.length - 1, i = 0; i <= a; i++) {
            t = i === a ? this : this.clone(!0), S(r[i])[o](t), c.apply(n, t.get());
          }

          return this.pushStack(n);
        };
      });

      var Le = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
          Re = function Re(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = x), t.getComputedStyle(e);
      },
          Ye = new RegExp(ne.join("|"), "i");

      function We(e, t, n) {
        var r,
            a,
            i,
            o,
            s = e.style;
        return (n = n || Re(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (o = S.style(e, t)), !v.pixelBoxStyles() && Le.test(o) && Ye.test(t) && (r = s.width, a = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = a, s.maxWidth = i)), void 0 !== o ? o + "" : o;
      }

      function qe(e, t) {
        return {
          get: function get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }

      !function () {
        function e() {
          if (c) {
            s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(s).appendChild(c);
            var e = x.getComputedStyle(c);
            n = "1%" !== e.top, o = 12 === t(e.marginLeft), c.style.right = "60%", i = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", ye.removeChild(s), c = null;
          }
        }

        function t(e) {
          return Math.round(parseFloat(e));
        }

        var n,
            r,
            a,
            i,
            o,
            s = k.createElement("div"),
            c = k.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, S.extend(v, {
          boxSizingReliable: function boxSizingReliable() {
            return e(), r;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            return e(), i;
          },
          pixelPosition: function pixelPosition() {
            return e(), n;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            return e(), o;
          },
          scrollboxSize: function scrollboxSize() {
            return e(), a;
          }
        }));
      }();
      var Ie = /^(none|table(?!-c[ea]).+)/,
          He = /^--/,
          Fe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          Be = {
        letterSpacing: "0",
        fontWeight: "400"
      },
          Ge = ["Webkit", "Moz", "ms"],
          Ue = k.createElement("div").style;

      function $e(e) {
        var t = S.cssProps[e];
        return t || (t = S.cssProps[e] = function (e) {
          if (e in Ue) return e;

          for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) {
            if ((e = Ge[n] + t) in Ue) return e;
          }
        }(e) || e), t;
      }

      function Ve(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }

      function Ke(e, t, n, r, a, i) {
        var o = "width" === t ? 1 : 0,
            s = 0,
            c = 0;
        if (n === (r ? "border" : "content")) return 0;

        for (; o < 4; o += 2) {
          "margin" === n && (c += S.css(e, n + ne[o], !0, a)), r ? ("content" === n && (c -= S.css(e, "padding" + ne[o], !0, a)), "margin" !== n && (c -= S.css(e, "border" + ne[o] + "Width", !0, a))) : (c += S.css(e, "padding" + ne[o], !0, a), "padding" !== n ? c += S.css(e, "border" + ne[o] + "Width", !0, a) : s += S.css(e, "border" + ne[o] + "Width", !0, a));
        }

        return !r && 0 <= i && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - .5))), c;
      }

      function Je(e, t, n) {
        var r = Re(e),
            a = We(e, t, r),
            i = "border-box" === S.css(e, "boxSizing", !1, r),
            o = i;

        if (Le.test(a)) {
          if (!n) return a;
          a = "auto";
        }

        return o = o && (v.boxSizingReliable() || a === e.style[t]), ("auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && (a = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
      }

      function Xe(e, t, n, r, a) {
        return new Xe.prototype.init(e, t, n, r, a);
      }

      S.extend({
        cssHooks: {
          opacity: {
            get: function get(e, t) {
              if (t) {
                var n = We(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function style(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a,
                i,
                o,
                s = U(t),
                c = He.test(t),
                l = e.style;
            if (c || (t = $e(s)), o = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (a = o.get(e, !1, r)) ? a : l[t];
            "string" == (i = _typeof(n)) && (a = te.exec(n)) && a[1] && (n = ie(e, t, a), i = "number"), null != n && n == n && ("number" === i && (n += a && a[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n));
          }
        },
        css: function css(e, t, n, r) {
          var a,
              i,
              o,
              s = U(t);
          return He.test(t) || (t = $e(s)), (o = S.cssHooks[t] || S.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = We(e, t, r)), "normal" === a && t in Be && (a = Be[t]), "" === n || n ? (i = parseFloat(a), !0 === n || isFinite(i) ? i || 0 : a) : a;
        }
      }), S.each(["height", "width"], function (e, s) {
        S.cssHooks[s] = {
          get: function get(e, t, n) {
            if (t) return !Ie.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, s, n) : ae(e, Fe, function () {
              return Je(e, s, n);
            });
          },
          set: function set(e, t, n) {
            var r,
                a = Re(e),
                i = "border-box" === S.css(e, "boxSizing", !1, a),
                o = n && Ke(e, s, n, i, a);
            return i && v.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(a[s]) - Ke(e, s, "border", !1, a) - .5)), o && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = S.css(e, s)), Ve(0, t, o);
          }
        };
      }), S.cssHooks.marginLeft = qe(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), S.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (a, i) {
        S.cssHooks[a + i] = {
          expand: function expand(e) {
            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
              n[a + ne[t] + i] = r[t] || r[t - 2] || r[0];
            }

            return n;
          }
        }, "margin" !== a && (S.cssHooks[a + i].set = Ve);
      }), S.fn.extend({
        css: function css(e, t) {
          return H(this, function (e, t, n) {
            var r,
                a,
                i = {},
                o = 0;

            if (Array.isArray(t)) {
              for (r = Re(e), a = t.length; o < a; o++) {
                i[t[o]] = S.css(e, t[o], !1, r);
              }

              return i;
            }

            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          }, e, t, 1 < arguments.length);
        }
      }), ((S.Tween = Xe).prototype = {
        constructor: Xe,
        init: function init(e, t, n, r, a, i) {
          this.elem = e, this.prop = n, this.easing = a || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (S.cssNumber[n] ? "" : "px");
        },
        cur: function cur() {
          var e = Xe.propHooks[this.prop];
          return e && e.get ? e.get(this) : Xe.propHooks._default.get(this);
        },
        run: function run(e) {
          var t,
              n = Xe.propHooks[this.prop];
          return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xe.propHooks._default.set(this), this;
        }
      }).init.prototype = Xe.prototype, (Xe.propHooks = {
        _default: {
          get: function get(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
          },
          set: function set(e) {
            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }).scrollTop = Xe.propHooks.scrollLeft = {
        set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, S.easing = {
        linear: function linear(e) {
          return e;
        },
        swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, S.fx = Xe.prototype.init, S.fx.step = {};
      var Ze,
          Qe,
          et,
          tt,
          nt = /^(?:toggle|show|hide)$/,
          rt = /queueHooks$/;

      function at() {
        Qe && (!1 === k.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(at) : x.setTimeout(at, S.fx.interval), S.fx.tick());
      }

      function it() {
        return x.setTimeout(function () {
          Ze = void 0;
        }), Ze = Date.now();
      }

      function ot(e, t) {
        var n,
            r = 0,
            a = {
          height: e
        };

        for (t = t ? 1 : 0; r < 4; r += 2 - t) {
          a["margin" + (n = ne[r])] = a["padding" + n] = e;
        }

        return t && (a.opacity = a.width = e), a;
      }

      function st(e, t, n) {
        for (var r, a = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), i = 0, o = a.length; i < o; i++) {
          if (r = a[i].call(n, t, e)) return r;
        }
      }

      function ct(i, e, t) {
        var n,
            o,
            r = 0,
            a = ct.prefilters.length,
            s = S.Deferred().always(function () {
          delete c.elem;
        }),
            c = function c() {
          if (o) return !1;

          for (var e = Ze || it(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, a = l.tweens.length; r < a; r++) {
            l.tweens[r].run(n);
          }

          return s.notifyWith(i, [l, n, t]), n < 1 && a ? t : (a || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1);
        },
            l = s.promise({
          elem: i,
          props: S.extend({}, e),
          opts: S.extend(!0, {
            specialEasing: {},
            easing: S.easing._default
          }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: Ze || it(),
          duration: t.duration,
          tweens: [],
          createTween: function createTween(e, t) {
            var n = S.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(n), n;
          },
          stop: function stop(e) {
            var t = 0,
                n = e ? l.tweens.length : 0;
            if (o) return this;

            for (o = !0; t < n; t++) {
              l.tweens[t].run(1);
            }

            return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this;
          }
        }),
            u = l.props;

        for (function (e, t) {
          var n, r, a, i, o;

          for (n in e) {
            if (a = t[r = U(n)], i = e[n], Array.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (o = S.cssHooks[r]) && ("expand" in o)) for (n in i = o.expand(i), delete e[r], i) {
              (n in e) || (e[n] = i[n], t[n] = a);
            } else t[r] = a;
          }
        }(u, l.opts.specialEasing); r < a; r++) {
          if (n = ct.prefilters[r].call(l, i, u, l.opts)) return y(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        }

        return S.map(u, st, l), y(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(c, {
          elem: i,
          anim: l,
          queue: l.opts.queue
        })), l;
      }

      S.Animation = S.extend(ct, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return ie(n.elem, e, te.exec(t), n), n;
          }]
        },
        tweener: function tweener(e, t) {
          for (var n, r = 0, a = (e = y(e) ? (t = e, ["*"]) : e.match(z)).length; r < a; r++) {
            n = e[r], ct.tweeners[n] = ct.tweeners[n] || [], ct.tweeners[n].unshift(t);
          }
        },
        prefilters: [function (e, t, n) {
          var r,
              a,
              i,
              o,
              s,
              c,
              l,
              u,
              f = "width" in t || "height" in t,
              d = this,
              h = {},
              p = e.style,
              m = e.nodeType && re(e),
              g = K.get(e, "fxshow");

          for (r in n.queue || (null == (o = S._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function () {
            o.unqueued || s();
          }), o.unqueued++, d.always(function () {
            d.always(function () {
              o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
            });
          })), t) {
            if (a = t[r], nt.test(a)) {
              if (delete t[r], i = i || "toggle" === a, a === (m ? "hide" : "show")) {
                if ("show" !== a || !g || void 0 === g[r]) continue;
                m = !0;
              }

              h[r] = g && g[r] || S.style(e, r);
            }
          }

          if ((c = !S.isEmptyObject(t)) || !S.isEmptyObject(h)) for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = K.get(e, "display")), "none" === (u = S.css(e, "display")) && (l ? u = l : (se([e], !0), l = e.style.display || l, u = S.css(e, "display"), se([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === S.css(e, "float") && (c || (d.done(function () {
            p.display = l;
          }), null == l && (u = p.display, l = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
          })), c = !1, h) {
            c || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
              display: l
            }), i && (g.hidden = !m), m && se([e], !0), d.done(function () {
              for (r in m || se([e]), K.remove(e, "fxshow"), h) {
                S.style(e, r, h[r]);
              }
            })), c = st(m ? g[r] : 0, r, d), r in g || (g[r] = c.start, m && (c.end = c.start, c.start = 0));
          }
        }],
        prefilter: function prefilter(e, t) {
          t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
        }
      }), S.speed = function (e, t, n) {
        var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
          complete: n || !n && t || y(e) && e,
          duration: e,
          easing: n && t || t && !y(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          y(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }, r;
      }, S.fn.extend({
        fadeTo: function fadeTo(e, t, n, r) {
          return this.filter(re).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r);
        },
        animate: function animate(t, e, n, r) {
          var a = S.isEmptyObject(t),
              i = S.speed(e, n, r),
              o = function o() {
            var e = ct(this, S.extend({}, t), i);
            (a || K.get(this, "finish")) && e.stop(!0);
          };

          return o.finish = o, a || !1 === i.queue ? this.each(o) : this.queue(i.queue, o);
        },
        stop: function stop(a, e, i) {
          var o = function o(e) {
            var t = e.stop;
            delete e.stop, t(i);
          };

          return "string" != typeof a && (i = e, e = a, a = void 0), e && !1 !== a && this.queue(a || "fx", []), this.each(function () {
            var e = !0,
                t = null != a && a + "queueHooks",
                n = S.timers,
                r = K.get(this);
            if (t) r[t] && r[t].stop && o(r[t]);else for (t in r) {
              r[t] && r[t].stop && rt.test(t) && o(r[t]);
            }

            for (t = n.length; t--;) {
              n[t].elem !== this || null != a && n[t].queue !== a || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
            }

            !e && i || S.dequeue(this, a);
          });
        },
        finish: function finish(o) {
          return !1 !== o && (o = o || "fx"), this.each(function () {
            var e,
                t = K.get(this),
                n = t[o + "queue"],
                r = t[o + "queueHooks"],
                a = S.timers,
                i = n ? n.length : 0;

            for (t.finish = !0, S.queue(this, o, []), r && r.stop && r.stop.call(this, !0), e = a.length; e--;) {
              a[e].elem === this && a[e].queue === o && (a[e].anim.stop(!0), a.splice(e, 1));
            }

            for (e = 0; e < i; e++) {
              n[e] && n[e].finish && n[e].finish.call(this);
            }

            delete t.finish;
          });
        }
      }), S.each(["toggle", "show", "hide"], function (e, r) {
        var a = S.fn[r];

        S.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(ot(r, !0), e, t, n);
        };
      }), S.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }), S.timers = [], S.fx.tick = function () {
        var e,
            t = 0,
            n = S.timers;

        for (Ze = Date.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }

        n.length || S.fx.stop(), Ze = void 0;
      }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start();
      }, S.fx.interval = 13, S.fx.start = function () {
        Qe || (Qe = !0, at());
      }, S.fx.stop = function () {
        Qe = null;
      }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
          var n = x.setTimeout(e, r);

          t.stop = function () {
            x.clearTimeout(n);
          };
        });
      }, et = k.createElement("input"), tt = k.createElement("select").appendChild(k.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = k.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
      var lt,
          ut = S.expr.attrHandle;
      S.fn.extend({
        attr: function attr(e, t) {
          return H(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function removeAttr(e) {
          return this.each(function () {
            S.removeAttr(this, e);
          });
        }
      }), S.extend({
        attr: function attr(e, t, n) {
          var r,
              a,
              i = e.nodeType;
          if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === i && S.isXMLDoc(e) || (a = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
          type: {
            set: function set(e, t) {
              if (!v.radioValue && "radio" === t && M(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function removeAttr(e, t) {
          var n,
              r = 0,
              a = t && t.match(z);
          if (a && 1 === e.nodeType) for (; n = a[r++];) {
            e.removeAttribute(n);
          }
        }
      }), lt = {
        set: function set(e, t, n) {
          return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = ut[t] || S.find.attr;

        ut[t] = function (e, t, n) {
          var r,
              a,
              i = t.toLowerCase();
          return n || (a = ut[i], ut[i] = r, r = null != o(e, t, n) ? i : null, ut[i] = a), r;
        };
      });
      var ft = /^(?:input|select|textarea|button)$/i,
          dt = /^(?:a|area)$/i;

      function ht(e) {
        return (e.match(z) || []).join(" ");
      }

      function pt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }

      function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(z) || [];
      }

      S.fn.extend({
        prop: function prop(e, t) {
          return H(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[S.propFix[e] || e];
          });
        }
      }), S.extend({
        prop: function prop(e, t, n) {
          var r,
              a,
              i = e.nodeType;
          if (3 !== i && 8 !== i && 2 !== i) return 1 === i && S.isXMLDoc(e) || (t = S.propFix[t] || t, a = S.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function get(e) {
              var t = S.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : ft.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      }), v.optSelected || (S.propHooks.selected = {
        get: function get(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function set(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this;
      }), S.fn.extend({
        addClass: function addClass(t) {
          var e,
              n,
              r,
              a,
              i,
              o,
              s,
              c = 0;
          if (y(t)) return this.each(function (e) {
            S(this).addClass(t.call(this, e, pt(this)));
          });
          if ((e = mt(t)).length) for (; n = this[c++];) {
            if (a = pt(n), r = 1 === n.nodeType && " " + ht(a) + " ") {
              for (o = 0; i = e[o++];) {
                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              }

              a !== (s = ht(r)) && n.setAttribute("class", s);
            }
          }
          return this;
        },
        removeClass: function removeClass(t) {
          var e,
              n,
              r,
              a,
              i,
              o,
              s,
              c = 0;
          if (y(t)) return this.each(function (e) {
            S(this).removeClass(t.call(this, e, pt(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ((e = mt(t)).length) for (; n = this[c++];) {
            if (a = pt(n), r = 1 === n.nodeType && " " + ht(a) + " ") {
              for (o = 0; i = e[o++];) {
                for (; -1 < r.indexOf(" " + i + " ");) {
                  r = r.replace(" " + i + " ", " ");
                }
              }

              a !== (s = ht(r)) && n.setAttribute("class", s);
            }
          }
          return this;
        },
        toggleClass: function toggleClass(a, t) {
          var i = _typeof(a),
              o = "string" === i || Array.isArray(a);

          return "boolean" == typeof t && o ? t ? this.addClass(a) : this.removeClass(a) : y(a) ? this.each(function (e) {
            S(this).toggleClass(a.call(this, e, pt(this), t), t);
          }) : this.each(function () {
            var e, t, n, r;
            if (o) for (t = 0, n = S(this), r = mt(a); e = r[t++];) {
              n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            } else void 0 !== a && "boolean" !== i || ((e = pt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === a ? "" : K.get(this, "__className__") || ""));
          });
        },
        hasClass: function hasClass(e) {
          var t,
              n,
              r = 0;

          for (t = " " + e + " "; n = this[r++];) {
            if (1 === n.nodeType && -1 < (" " + ht(pt(n)) + " ").indexOf(t)) return !0;
          }

          return !1;
        }
      });
      var gt = /\r/g;
      S.fn.extend({
        val: function val(n) {
          var r,
              e,
              a,
              t = this[0];
          return arguments.length ? (a = y(n), this.each(function (e) {
            var t;
            1 === this.nodeType && (null == (t = a ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
              return null == e ? "" : e + "";
            })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
          })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0;
        }
      }), S.extend({
        valHooks: {
          option: {
            get: function get(e) {
              var t = S.find.attr(e, "value");
              return null != t ? t : ht(S.text(e));
            }
          },
          select: {
            get: function get(e) {
              var t,
                  n,
                  r,
                  a = e.options,
                  i = e.selectedIndex,
                  o = "select-one" === e.type,
                  s = o ? null : [],
                  c = o ? i + 1 : a.length;

              for (r = i < 0 ? c : o ? i : 0; r < c; r++) {
                if (((n = a[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                  if (t = S(n).val(), o) return t;
                  s.push(t);
                }
              }

              return s;
            },
            set: function set(e, t) {
              for (var n, r, a = e.options, i = S.makeArray(t), o = a.length; o--;) {
                ((r = a[o]).selected = -1 < S.inArray(S.valHooks.option.get(r), i)) && (n = !0);
              }

              return n || (e.selectedIndex = -1), i;
            }
          }
        }
      }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
          set: function set(e, t) {
            if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
          }
        }, v.checkOn || (S.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), v.focusin = "onfocusin" in x;

      var vt = /^(?:focusinfocus|focusoutblur)$/,
          yt = function yt(e) {
        e.stopPropagation();
      };

      S.extend(S.event, {
        trigger: function trigger(e, t, n, r) {
          var a,
              i,
              o,
              s,
              c,
              l,
              u,
              f,
              d = [n || k],
              h = g.call(e, "type") ? e.type : e,
              p = g.call(e, "namespace") ? e.namespace.split(".") : [];

          if (i = f = o = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(h + S.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, (e = e[S.expando] ? e : new S.Event(h, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[h] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
            if (!r && !u.noBubble && !b(n)) {
              for (s = u.delegateType || h, vt.test(s + h) || (i = i.parentNode); i; i = i.parentNode) {
                d.push(i), o = i;
              }

              o === (n.ownerDocument || k) && d.push(o.defaultView || o.parentWindow || x);
            }

            for (a = 0; (i = d[a++]) && !e.isPropagationStopped();) {
              f = i, e.type = 1 < a ? s : u.bindType || h, (l = (K.get(i, "events") || {})[e.type] && K.get(i, "handle")) && l.apply(i, t), (l = c && i[c]) && l.apply && $(i) && (e.result = l.apply(i, t), !1 === e.result && e.preventDefault());
            }

            return e.type = h, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !$(n) || c && y(n[h]) && !b(n) && ((o = n[c]) && (n[c] = null), S.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, yt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, yt), S.event.triggered = void 0, o && (n[c] = o)), e.result;
          }
        },
        simulate: function simulate(e, t, n) {
          var r = S.extend(new S.Event(), n, {
            type: e,
            isSimulated: !0
          });
          S.event.trigger(r, null, t);
        }
      }), S.fn.extend({
        trigger: function trigger(e, t) {
          return this.each(function () {
            S.event.trigger(e, t, this);
          });
        },
        triggerHandler: function triggerHandler(e, t) {
          var n = this[0];
          if (n) return S.event.trigger(e, t, n, !0);
        }
      }), v.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
      }, function (n, r) {
        var a = function a(e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };

        S.event.special[r] = {
          setup: function setup() {
            var e = this.ownerDocument || this,
                t = K.access(e, r);
            t || e.addEventListener(n, a, !0), K.access(e, r, (t || 0) + 1);
          },
          teardown: function teardown() {
            var e = this.ownerDocument || this,
                t = K.access(e, r) - 1;
            t ? K.access(e, r, t) : (e.removeEventListener(n, a, !0), K.remove(e, r));
          }
        };
      });

      var bt = x.location,
          _t = Date.now(),
          wt = /\?/;

      S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;

        try {
          t = new x.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }

        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
      };

      var At = /\[\]$/,
          xt = /\r?\n/g,
          kt = /^(?:submit|button|image|reset|file)$/i,
          St = /^(?:input|select|textarea|keygen)/i;

      function Et(n, e, r, a) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
          r || At.test(n) ? a(n, t) : Et(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, a);
        });else if (r || "object" !== w(e)) a(n, e);else for (t in e) {
          Et(n + "[" + t + "]", e[t], r, a);
        }
      }

      S.param = function (e, t) {
        var n,
            r = [],
            a = function a(e, t) {
          var n = y(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };

        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
          a(this.name, this.value);
        });else for (n in e) {
          Et(n, e[n], t, a);
        }
        return r.join("&");
      }, S.fn.extend({
        serialize: function serialize() {
          return S.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;
            return this.name && !S(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !ce.test(e));
          }).map(function (e, t) {
            var n = S(this).val();
            return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(xt, "\r\n")
              };
            }) : {
              name: t.name,
              value: n.replace(xt, "\r\n")
            };
          }).get();
        }
      });
      var Mt = /%20/g,
          Tt = /#.*$/,
          Ct = /([?&])_=[^&]*/,
          Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ot = /^(?:GET|HEAD)$/,
          Nt = /^\/\//,
          jt = {},
          Pt = {},
          zt = "*/".concat("*"),
          Lt = k.createElement("a");

      function Rt(i) {
        return function (e, t) {
          "string" != typeof e && (t = e, e = "*");
          var n,
              r = 0,
              a = e.toLowerCase().match(z) || [];
          if (y(t)) for (; n = a[r++];) {
            "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t);
          }
        };
      }

      function Yt(t, a, i, o) {
        var s = {},
            c = t === Pt;

        function l(e) {
          var r;
          return s[e] = !0, S.each(t[e] || [], function (e, t) {
            var n = t(a, i, o);
            return "string" != typeof n || c || s[n] ? c ? !(r = n) : void 0 : (a.dataTypes.unshift(n), l(n), !1);
          }), r;
        }

        return l(a.dataTypes[0]) || !s["*"] && l("*");
      }

      function Wt(e, t) {
        var n,
            r,
            a = S.ajaxSettings.flatOptions || {};

        for (n in t) {
          void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
        }

        return r && S.extend(!0, e, r), e;
      }

      Lt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: bt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": zt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": S.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function ajaxSetup(e, t) {
          return t ? Wt(Wt(e, S.ajaxSettings), t) : Wt(S.ajaxSettings, e);
        },
        ajaxPrefilter: Rt(jt),
        ajaxTransport: Rt(Pt),
        ajax: function ajax(e, t) {
          "object" == _typeof(e) && (t = e, e = void 0), t = t || {};

          var u,
              f,
              d,
              n,
              h,
              r,
              p,
              m,
              a,
              i,
              g = S.ajaxSetup({}, t),
              v = g.context || g,
              y = g.context && (v.nodeType || v.jquery) ? S(v) : S.event,
              b = S.Deferred(),
              _ = S.Callbacks("once memory"),
              w = g.statusCode || {},
              o = {},
              s = {},
              c = "canceled",
              A = {
            readyState: 0,
            getResponseHeader: function getResponseHeader(e) {
              var t;

              if (p) {
                if (!n) for (n = {}; t = Dt.exec(d);) {
                  n[t[1].toLowerCase()] = t[2];
                }
                t = n[e.toLowerCase()];
              }

              return null == t ? null : t;
            },
            getAllResponseHeaders: function getAllResponseHeaders() {
              return p ? d : null;
            },
            setRequestHeader: function setRequestHeader(e, t) {
              return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, o[e] = t), this;
            },
            overrideMimeType: function overrideMimeType(e) {
              return null == p && (g.mimeType = e), this;
            },
            statusCode: function statusCode(e) {
              var t;
              if (e) if (p) A.always(e[A.status]);else for (t in e) {
                w[t] = [w[t], e[t]];
              }
              return this;
            },
            abort: function abort(e) {
              var t = e || c;
              return u && u.abort(t), l(0, t), this;
            }
          };

          if (b.promise(A), g.url = ((e || g.url || bt.href) + "").replace(Nt, bt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(z) || [""], null == g.crossDomain) {
            r = k.createElement("a");

            try {
              r.href = g.url, r.href = r.href, g.crossDomain = Lt.protocol + "//" + Lt.host != r.protocol + "//" + r.host;
            } catch (e) {
              g.crossDomain = !0;
            }
          }

          if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), Yt(jt, g, t, A), p) return A;

          for (a in (m = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ot.test(g.type), f = g.url.replace(Tt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Mt, "+")) : (i = g.url.slice(f.length), g.data && (g.processData || "string" == typeof g.data) && (f += (wt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(Ct, "$1"), i = (wt.test(f) ? "&" : "?") + "_=" + _t++ + i), g.url = f + i), g.ifModified && (S.lastModified[f] && A.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && A.setRequestHeader("If-None-Match", S.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && A.setRequestHeader("Content-Type", g.contentType), A.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : g.accepts["*"]), g.headers) {
            A.setRequestHeader(a, g.headers[a]);
          }

          if (g.beforeSend && (!1 === g.beforeSend.call(v, A, g) || p)) return A.abort();

          if (c = "abort", _.add(g.complete), A.done(g.success), A.fail(g.error), u = Yt(Pt, g, t, A)) {
            if (A.readyState = 1, m && y.trigger("ajaxSend", [A, g]), p) return A;
            g.async && 0 < g.timeout && (h = x.setTimeout(function () {
              A.abort("timeout");
            }, g.timeout));

            try {
              p = !1, u.send(o, l);
            } catch (e) {
              if (p) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");

          function l(e, t, n, r) {
            var a,
                i,
                o,
                s,
                c,
                l = t;
            p || (p = !0, h && x.clearTimeout(h), u = void 0, d = r || "", A.readyState = 0 < e ? 4 : 0, a = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
              for (var r, a, i, o, s = e.contents, c = e.dataTypes; "*" === c[0];) {
                c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              }

              if (r) for (a in s) {
                if (s[a] && s[a].test(r)) {
                  c.unshift(a);
                  break;
                }
              }
              if (c[0] in n) i = c[0];else {
                for (a in n) {
                  if (!c[0] || e.converters[a + " " + c[0]]) {
                    i = a;
                    break;
                  }

                  o || (o = a);
                }

                i = i || o;
              }
              if (i) return i !== c[0] && c.unshift(i), n[i];
            }(g, A, n)), s = function (e, t, n, r) {
              var a,
                  i,
                  o,
                  s,
                  c,
                  l = {},
                  u = e.dataTypes.slice();
              if (u[1]) for (o in e.converters) {
                l[o.toLowerCase()] = e.converters[o];
              }

              for (i = u.shift(); i;) {
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = u.shift()) if ("*" === i) i = c;else if ("*" !== c && c !== i) {
                  if (!(o = l[c + " " + i] || l["* " + i])) for (a in l) {
                    if ((s = a.split(" "))[1] === i && (o = l[c + " " + s[0]] || l["* " + s[0]])) {
                      !0 === o ? o = l[a] : !0 !== l[a] && (i = s[0], u.unshift(s[1]));
                      break;
                    }
                  }
                  if (!0 !== o) if (o && e["throws"]) t = o(t);else try {
                    t = o(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: o ? e : "No conversion from " + c + " to " + i
                    };
                  }
                }
              }

              return {
                state: "success",
                data: t
              };
            }(g, s, A, a), a ? (g.ifModified && ((c = A.getResponseHeader("Last-Modified")) && (S.lastModified[f] = c), (c = A.getResponseHeader("etag")) && (S.etag[f] = c)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, i = s.data, a = !(o = s.error))) : (o = l, !e && l || (l = "error", e < 0 && (e = 0))), A.status = e, A.statusText = (t || l) + "", a ? b.resolveWith(v, [i, l, A]) : b.rejectWith(v, [A, l, o]), A.statusCode(w), w = void 0, m && y.trigger(a ? "ajaxSuccess" : "ajaxError", [A, g, a ? i : o]), _.fireWith(v, [A, l]), m && (y.trigger("ajaxComplete", [A, g]), --S.active || S.event.trigger("ajaxStop")));
          }

          return A;
        },
        getJSON: function getJSON(e, t, n) {
          return S.get(e, t, n, "json");
        },
        getScript: function getScript(e, t) {
          return S.get(e, void 0, t, "script");
        }
      }), S.each(["get", "post"], function (e, a) {
        S[a] = function (e, t, n, r) {
          return y(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
            url: e,
            type: a,
            dataType: r,
            data: t,
            success: n
          }, S.isPlainObject(e) && e));
        };
      }), S._evalUrl = function (e) {
        return S.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
        });
      }, S.fn.extend({
        wrapAll: function wrapAll(e) {
          var t;
          return this[0] && (y(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }

            return e;
          }).append(this)), this;
        },
        wrapInner: function wrapInner(n) {
          return y(n) ? this.each(function (e) {
            S(this).wrapInner(n.call(this, e));
          }) : this.each(function () {
            var e = S(this),
                t = e.contents();
            t.length ? t.wrapAll(n) : e.append(n);
          });
        },
        wrap: function wrap(t) {
          var n = y(t);
          return this.each(function (e) {
            S(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function unwrap(e) {
          return this.parent(e).not("body").each(function () {
            S(this).replaceWith(this.childNodes);
          }), this;
        }
      }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e);
      }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, S.ajaxSettings.xhr = function () {
        try {
          return new x.XMLHttpRequest();
        } catch (e) {}
      };
      var qt = {
        0: 200,
        1223: 204
      },
          It = S.ajaxSettings.xhr();
      v.cors = !!It && "withCredentials" in It, v.ajax = It = !!It, S.ajaxTransport(function (a) {
        var _i2, o;

        if (v.cors || It && !a.crossDomain) return {
          send: function send(e, t) {
            var n,
                r = a.xhr();
            if (r.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (n in a.xhrFields) {
              r[n] = a.xhrFields[n];
            }

            for (n in a.mimeType && r.overrideMimeType && r.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
              r.setRequestHeader(n, e[n]);
            }

            _i2 = function i(e) {
              return function () {
                _i2 && (_i2 = o = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(qt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                  binary: r.response
                } : {
                  text: r.responseText
                }, r.getAllResponseHeaders()));
              };
            }, r.onload = _i2(), o = r.onerror = r.ontimeout = _i2("error"), void 0 !== r.onabort ? r.onabort = o : r.onreadystatechange = function () {
              4 === r.readyState && x.setTimeout(function () {
                _i2 && o();
              });
            }, _i2 = _i2("abort");

            try {
              r.send(a.hasContent && a.data || null);
            } catch (e) {
              if (_i2) throw e;
            }
          },
          abort: function abort() {
            _i2 && _i2();
          }
        };
      }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), S.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(e) {
            return S.globalEval(e), e;
          }
        }
      }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), S.ajaxTransport("script", function (n) {
        var r, _a2;

        if (n.crossDomain) return {
          send: function send(e, t) {
            r = S("<script>").prop({
              charset: n.scriptCharset,
              src: n.url
            }).on("load error", _a2 = function a(e) {
              r.remove(), _a2 = null, e && t("error" === e.type ? 404 : 200, e.type);
            }), k.head.appendChild(r[0]);
          },
          abort: function abort() {
            _a2 && _a2();
          }
        };
      });
      var Ht,
          Ft = [],
          Bt = /(=)\?(?=&|$)|\?\?/;
      S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var e = Ft.pop() || S.expando + "_" + _t++;
          return this[e] = !0, e;
        }
      }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
            a,
            i,
            o = !1 !== e.jsonp && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
        if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Bt, "$1" + r) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
          return i || S.error(r + " was not called"), i[0];
        }, e.dataTypes[0] = "json", a = x[r], x[r] = function () {
          i = arguments;
        }, n.always(function () {
          void 0 === a ? S(x).removeProp(r) : x[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Ft.push(r)), i && y(a) && a(i[0]), i = a = void 0;
        }), "script";
      }), v.createHTMLDocument = ((Ht = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ht.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(r)) : t = k), i = !n && [], (a = T.exec(e)) ? [t.createElement(a[1])] : (a = ve([e], t, i), i && i.length && S(i).remove(), S.merge([], a.childNodes)));
        var r, a, i;
      }, S.fn.load = function (e, t, n) {
        var r,
            a,
            i,
            o = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (a = "POST"), 0 < o.length && S.ajax({
          url: e,
          type: a || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          i = arguments, o.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
          o.each(function () {
            n.apply(this, i || [e.responseText, t, e]);
          });
        }), this;
      }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
          return t === e.elem;
        }).length;
      }, S.offset = {
        setOffset: function setOffset(e, t, n) {
          var r,
              a,
              i,
              o,
              s,
              c,
              l = S.css(e, "position"),
              u = S(e),
              f = {};
          "static" === l && (e.style.position = "relative"), s = u.offset(), i = S.css(e, "top"), c = S.css(e, "left"), a = ("absolute" === l || "fixed" === l) && -1 < (i + c).indexOf("auto") ? (o = (r = u.position()).top, r.left) : (o = parseFloat(i) || 0, parseFloat(c) || 0), y(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + a), "using" in t ? t.using.call(e, f) : u.css(f);
        }
      }, S.fn.extend({
        offset: function offset(t) {
          if (arguments.length) return void 0 === t ? this : this.each(function (e) {
            S.offset.setOffset(this, t, e);
          });
          var e,
              n,
              r = this[0];
          return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: e.top + n.pageYOffset,
            left: e.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0;
        },
        position: function position() {
          if (this[0]) {
            var e,
                t,
                n,
                r = this[0],
                a = {
              top: 0,
              left: 0
            };
            if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) {
                e = e.parentNode;
              }

              e && e !== r && 1 === e.nodeType && ((a = S(e).offset()).top += S.css(e, "borderTopWidth", !0), a.left += S.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - a.top - S.css(r, "marginTop", !0),
              left: t.left - a.left - S.css(r, "marginLeft", !0)
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === S.css(e, "position");) {
              e = e.offsetParent;
            }

            return e || ye;
          });
        }
      }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (t, a) {
        var i = "pageYOffset" === a;

        S.fn[t] = function (e) {
          return H(this, function (e, t, n) {
            var r;
            if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[a] : e[t];
            r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n;
          }, t, e, arguments.length);
        };
      }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = qe(v.pixelPosition, function (e, t) {
          if (t) return t = We(e, n), Le.test(t) ? S(e).position()[n] + "px" : t;
        });
      }), S.each({
        Height: "height",
        Width: "width"
      }, function (o, s) {
        S.each({
          padding: "inner" + o,
          content: s,
          "": "outer" + o
        }, function (r, i) {
          S.fn[i] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
                a = r || (!0 === e || !0 === t ? "margin" : "border");
            return H(this, function (e, t, n) {
              var r;
              return b(e) ? 0 === i.indexOf("outer") ? e["inner" + o] : e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? S.css(e, t, a) : S.style(e, t, n, a);
            }, s, n ? e : void 0, n);
          };
        });
      }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
      }), S.fn.extend({
        hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }), S.fn.extend({
        bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function unbind(e, t) {
          return this.off(e, null, t);
        },
        delegate: function delegate(e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
      }), S.proxy = function (e, t) {
        var n, r, a;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (a = function a() {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || S.guid++, a;
      }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0);
      }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = M, S.isFunction = y, S.isWindow = b, S.camelCase = U, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      };
      var Gt = x.jQuery,
          Ut = x.$;
      return S.noConflict = function (e) {
        return x.$ === S && (x.$ = Ut), e && x.jQuery === S && (x.jQuery = Gt), S;
      }, e || (x.jQuery = x.$ = S), S;
    }, e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    };
  });
  Tr.noConflict();

  var Cr = function Cr(e, t, n) {
    return (!(3 < arguments.length && void 0 !== arguments[3]) || arguments[3]) && (t && "string" == typeof t ? t = Er.find(t) : t || (t = Er)), new Tr.fn.init(e, t, n);
  };

  Cr.fn = Cr.prototype = Tr.fn, Tr.extend(Cr, Tr);

  var Dr = function Dr(e) {
    return e.find('script, style, link[rel="stylesheet"]').remove(), e;
  };

  Cr.cloneHtml = function () {
    return Dr(Cr("html", null, null, !1).clone()).children().wrap("<div />").wrap("<div />");
  }, Cr.root = function () {
    return Cr("*").first();
  }, Cr.browser = !0;

  var Or = function Or(e) {
    var t = e.get(0);
    return !(!t || !t.tagName) && "container" === t.tagName.toLowerCase();
  };

  function Nr(e, t) {
    return Array(t + 1).join(e);
  }

  Cr.html = function (e) {
    if (e) return Or(e) || Or(e.children("container")) ? e.children("container").html() || e.html() : Cr("<div>").append(e.eq(0).clone()).html();
    var t = Dr(Cr("body", null, null, !1).clone()),
        n = Dr(Cr("head", null, null, !1).clone());
    return Er && 0 < Er.length ? Er.children().html() : Cr("<container />").append(Cr("<container>".concat(n.html(), "</container>"))).append(Cr("<container>".concat(t.html(), "</container>"))).wrap("<container />").parent().html();
  }, Cr.load = function (e) {
    var t = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    return e = e ? Cr("<container />").html(e) : Cr.cloneHtml(), Er = Er || Cr('<div class="'.concat("mercury-parsing-container", '" style="display:none;" />')), (e = Dr(e)).find("*").contents().each(function () {
      this.nodeType === Node.COMMENT_NODE && Cr(this).remove();
    }), Er.html(e), t ? {
      $: Cr,
      html: e.html()
    } : Cr;
  };
  var jr = ["address", "article", "aside", "audio", "blockquote", "body", "canvas", "center", "dd", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "isindex", "li", "main", "menu", "nav", "noframes", "noscript", "ol", "output", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul"];

  function Pr(e) {
    return -1 !== jr.indexOf(e.nodeName.toLowerCase());
  }

  var zr = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];

  function Lr(e) {
    return -1 !== zr.indexOf(e.nodeName.toLowerCase());
  }

  var Rr = zr.join();
  var Yr = {};

  function Wr(e) {
    for (var t in this.options = e, this._keep = [], this._remove = [], this.blankRule = {
      replacement: e.blankReplacement
    }, this.keepReplacement = e.keepReplacement, this.defaultRule = {
      replacement: e.defaultReplacement
    }, this.array = [], e.rules) {
      this.array.push(e.rules[t]);
    }
  }

  function qr(e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var a = e[r];
      if (Ir(a, t, n)) return a;
    }
  }

  function Ir(e, t, n) {
    var r = e.filter;

    if ("string" == typeof r) {
      if (r === t.nodeName.toLowerCase()) return !0;
    } else if (Array.isArray(r)) {
      if (-1 < r.indexOf(t.nodeName.toLowerCase())) return !0;
    } else {
      if ("function" != typeof r) throw new TypeError("`filter` needs to be a string, array, or function");
      if (r.call(e, t, n)) return !0;
    }
  }

  function Hr(e) {
    var t = e.nextSibling || e.parentNode;
    return e.parentNode.removeChild(e), t;
  }

  function Fr(e, t, n) {
    return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode;
  }

  Yr.paragraph = {
    filter: "p",
    replacement: function replacement(e) {
      return "\n\n" + e + "\n\n";
    }
  }, Yr.lineBreak = {
    filter: "br",
    replacement: function replacement(e, t, n) {
      return n.br + "\n";
    }
  }, Yr.heading = {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    replacement: function replacement(e, t, n) {
      var r = Number(t.nodeName.charAt(1));
      return "setext" === n.headingStyle && r < 3 ? "\n\n" + e + "\n" + Nr(1 === r ? "=" : "-", e.length) + "\n\n" : "\n\n" + Nr("#", r) + " " + e + "\n\n";
    }
  }, Yr.blockquote = {
    filter: "blockquote",
    replacement: function replacement(e) {
      return "\n\n" + (e = (e = e.replace(/^\n+|\n+$/g, "")).replace(/^/gm, "> ")) + "\n\n";
    }
  }, Yr.list = {
    filter: ["ul", "ol"],
    replacement: function replacement(e, t) {
      var n = t.parentNode;
      return "LI" === n.nodeName && n.lastElementChild === t ? "\n" + e : "\n\n" + e + "\n\n";
    }
  }, Yr.listItem = {
    filter: "li",
    replacement: function replacement(e, t, n) {
      e = e.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n    ");
      var r = n.bulletListMarker + "   ",
          a = t.parentNode;

      if ("OL" === a.nodeName) {
        var i = a.getAttribute("start"),
            o = Array.prototype.indexOf.call(a.children, t);
        r = (i ? Number(i) + o : o + 1) + ".  ";
      }

      return r + e + (t.nextSibling && !/\n$/.test(e) ? "\n" : "");
    }
  }, Yr.indentedCodeBlock = {
    filter: function filter(e, t) {
      return "indented" === t.codeBlockStyle && "PRE" === e.nodeName && e.firstChild && "CODE" === e.firstChild.nodeName;
    },
    replacement: function replacement(e, t, n) {
      return "\n\n    " + t.firstChild.textContent.replace(/\n/g, "\n    ") + "\n\n";
    }
  }, Yr.fencedCodeBlock = {
    filter: function filter(e, t) {
      return "fenced" === t.codeBlockStyle && "PRE" === e.nodeName && e.firstChild && "CODE" === e.firstChild.nodeName;
    },
    replacement: function replacement(e, t, n) {
      var r = ((t.firstChild.className || "").match(/language-(\S+)/) || [null, ""])[1];
      return "\n\n" + n.fence + r + "\n" + t.firstChild.textContent + "\n" + n.fence + "\n\n";
    }
  }, Yr.horizontalRule = {
    filter: "hr",
    replacement: function replacement(e, t, n) {
      return "\n\n" + n.hr + "\n\n";
    }
  }, Yr.inlineLink = {
    filter: function filter(e, t) {
      return "inlined" === t.linkStyle && "A" === e.nodeName && e.getAttribute("href");
    },
    replacement: function replacement(e, t) {
      return "[" + e + "](" + t.getAttribute("href") + (t.title ? ' "' + t.title + '"' : "") + ")";
    }
  }, Yr.referenceLink = {
    filter: function filter(e, t) {
      return "referenced" === t.linkStyle && "A" === e.nodeName && e.getAttribute("href");
    },
    replacement: function replacement(e, t, n) {
      var r,
          a,
          i = t.getAttribute("href"),
          o = t.title ? ' "' + t.title + '"' : "";

      switch (n.linkReferenceStyle) {
        case "collapsed":
          r = "[" + e + "][]", a = "[" + e + "]: " + i + o;
          break;

        case "shortcut":
          r = "[" + e + "]", a = "[" + e + "]: " + i + o;
          break;

        default:
          var s = this.references.length + 1;
          r = "[" + e + "][" + s + "]", a = "[" + s + "]: " + i + o;
      }

      return this.references.push(a), r;
    },
    references: [],
    append: function append(e) {
      var t = "";
      return this.references.length && (t = "\n\n" + this.references.join("\n") + "\n\n", this.references = []), t;
    }
  }, Yr.emphasis = {
    filter: ["em", "i"],
    replacement: function replacement(e, t, n) {
      return e.trim() ? n.emDelimiter + e + n.emDelimiter : "";
    }
  }, Yr.strong = {
    filter: ["strong", "b"],
    replacement: function replacement(e, t, n) {
      return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : "";
    }
  }, Yr.code = {
    filter: function filter(e) {
      var t = e.previousSibling || e.nextSibling,
          n = "PRE" === e.parentNode.nodeName && !t;
      return "CODE" === e.nodeName && !n;
    },
    replacement: function replacement(e) {
      if (!e.trim()) return "";
      var t = "`",
          n = "",
          r = "",
          a = e.match(/`+/gm);
      if (a) for (/^`/.test(e) && (n = " "), /`$/.test(e) && (r = " "); -1 !== a.indexOf(t);) {
        t += "`";
      }
      return t + n + e + r + t;
    }
  }, Yr.image = {
    filter: "img",
    replacement: function replacement(e, t) {
      var n = t.alt || "",
          r = t.getAttribute("src") || "",
          a = t.title || "";
      return r ? "![" + n + "](" + r + (a ? ' "' + a + '"' : "") + ")" : "";
    }
  }, Wr.prototype = {
    add: function add(e, t) {
      this.array.unshift(t);
    },
    keep: function keep(e) {
      this._keep.unshift({
        filter: e,
        replacement: this.keepReplacement
      });
    },
    remove: function remove(e) {
      this._remove.unshift({
        filter: e,
        replacement: function replacement() {
          return "";
        }
      });
    },
    forNode: function forNode(e) {
      return e.isBlank ? this.blankRule : (t = qr(this.array, e, this.options)) ? t : (t = qr(this._keep, e, this.options)) ? t : (t = qr(this._remove, e, this.options)) ? t : this.defaultRule;
      var t;
    },
    forEach: function forEach(e) {
      for (var t = 0; t < this.array.length; t++) {
        e(this.array[t], t);
      }
    }
  };
  var Br = "undefined" != typeof window ? window : {};
  var Gr,
      Ur,
      $r,
      Vr = function () {
    var e = Br.DOMParser,
        t = !1;

    try {
      new e().parseFromString("", "text/html") && (t = !0);
    } catch (e) {}

    return t;
  }() ? Br.DOMParser : (Gr = function Gr() {}, Ur = require("jsdom").JSDOM, Gr.prototype.parseFromString = function (e) {
    return new Ur(e).window.document;
  }, Gr);

  function Kr(e) {
    var t;
    "string" == typeof e ? t = ($r = $r || new Vr()).parseFromString('<x-turndown id="turndown-root">' + e + "</x-turndown>", "text/html").getElementById("turndown-root") : t = e.cloneNode(!0);
    return function (e) {
      var t = e.element,
          n = e.isBlock,
          r = e.isVoid,
          a = e.isPre || function (e) {
        return "PRE" === e.nodeName;
      };

      if (t.firstChild && !a(t)) {
        for (var i = null, o = !1, s = null, c = Fr(s, t, a); c !== t;) {
          if (3 === c.nodeType || 4 === c.nodeType) {
            var l = c.data.replace(/[ \r\n\t]+/g, " ");

            if (i && !/ $/.test(i.data) || o || " " !== l[0] || (l = l.substr(1)), !l) {
              c = Hr(c);
              continue;
            }

            c.data = l, i = c;
          } else {
            if (1 !== c.nodeType) {
              c = Hr(c);
              continue;
            }

            n(c) || "BR" === c.nodeName ? (i && (i.data = i.data.replace(/ $/, "")), i = null, o = !1) : r(c) && (o = !(i = null));
          }

          var u = Fr(s, c, a);
          s = c, c = u;
        }

        i && (i.data = i.data.replace(/ $/, ""), i.data || Hr(i));
      }
    }({
      element: t,
      isBlock: Pr,
      isVoid: Lr
    }), t;
  }

  function Jr(e) {
    var t, n;
    return e.isBlock = Pr(e), e.isCode = "code" === e.nodeName.toLowerCase() || e.parentNode.isCode, e.isBlank = -1 === ["A", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"].indexOf((t = e).nodeName) && /^\s*$/i.test(t.textContent) && !Lr(t) && !((n = t).querySelector && n.querySelector(Rr)), e.flankingWhitespace = function (e) {
      var t = "",
          n = "";

      if (!e.isBlock) {
        var r = /^[ \r\n\t]/.test(e.textContent),
            a = /[ \r\n\t]$/.test(e.textContent);
        r && !Xr("left", e) && (t = " "), a && !Xr("right", e) && (n = " ");
      }

      return {
        leading: t,
        trailing: n
      };
    }(e), e;
  }

  function Xr(e, t) {
    var n, r, a;
    return r = "left" === e ? (n = t.previousSibling, / $/) : (n = t.nextSibling, /^ /), n && (3 === n.nodeType ? a = r.test(n.nodeValue) : 1 !== n.nodeType || Pr(n) || (a = r.test(n.textContent))), a;
  }

  var Zr = Array.prototype.reduce,
      Qr = /^\n*/,
      ea = /\n*$/,
      ta = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];

  function na(e) {
    if (!(this instanceof na)) return new na(e);
    var t = {
      rules: Yr,
      headingStyle: "setext",
      hr: "* * *",
      bulletListMarker: "*",
      codeBlockStyle: "indented",
      fence: "```",
      emDelimiter: "_",
      strongDelimiter: "**",
      linkStyle: "inlined",
      linkReferenceStyle: "full",
      br: "  ",
      blankReplacement: function blankReplacement(e, t) {
        return t.isBlock ? "\n\n" : "";
      },
      keepReplacement: function keepReplacement(e, t) {
        return t.isBlock ? "\n\n" + t.outerHTML + "\n\n" : t.outerHTML;
      },
      defaultReplacement: function defaultReplacement(e, t) {
        return t.isBlock ? "\n\n" + e + "\n\n" : e;
      }
    };
    this.options = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var r in n) {
          n.hasOwnProperty(r) && (e[r] = n[r]);
        }
      }

      return e;
    }({}, t, e), this.rules = new Wr(this.options);
  }

  function ra(e) {
    var r = this;
    return Zr.call(e.childNodes, function (e, t) {
      var n = "";
      return 3 === (t = new Jr(t)).nodeType ? n = t.isCode ? t.nodeValue : r.escape(t.nodeValue) : 1 === t.nodeType && (n = function (e) {
        var t = this.rules.forNode(e),
            n = ra.call(this, e),
            r = e.flankingWhitespace;
        (r.leading || r.trailing) && (n = n.trim());
        return r.leading + t.replacement(n, e, this.options) + r.trailing;
      }.call(r, t)), aa(e, n);
    }, "");
  }

  function aa(e, t) {
    var n,
        r,
        a,
        i = (n = t, r = [e.match(ea)[0], n.match(Qr)[0]].sort(), (a = r[r.length - 1]).length < 2 ? a : "\n\n");
    return (e = e.replace(ea, "")) + i + (t = t.replace(Qr, ""));
  }

  na.prototype = {
    turndown: function turndown(e) {
      if (null == (t = e) || "string" != typeof t && (!t.nodeType || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw new TypeError(e + " is not a string, or an element/document/fragment node.");
      var t;
      if ("" === e) return "";
      var n = ra.call(this, new Kr(e));
      return function (t) {
        var n = this;
        return this.rules.forEach(function (e) {
          "function" == typeof e.append && (t = aa(t, e.append(n.options)));
        }), t.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
      }.call(this, n);
    },
    use: function use(e) {
      if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
        this.use(e[t]);
      } else {
        if ("function" != typeof e) throw new TypeError("plugin must be a Function or an Array of Functions");
        e(this);
      }
      return this;
    },
    addRule: function addRule(e, t) {
      return this.rules.add(e, t), this;
    },
    keep: function keep(e) {
      return this.rules.keep(e), this;
    },
    remove: function remove(e) {
      return this.rules.remove(e), this;
    },
    escape: function escape(e) {
      return ta.reduce(function (e, t) {
        return e.replace(t[0], t[1]);
      }, e);
    }
  };

  var ia = function ia() {
    return !1;
  },
      oa = function oa(e) {
    return e;
  },
      sa = /\s{2,}(?![^<>]*<\/(pre|code|textarea)>)/g;

  function ca(e) {
    return e.replace(sa, " ").trim();
  }

  var la = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
      ua = "[" + la + "]",
      fa = RegExp("^" + ua + ua + "*"),
      da = RegExp(ua + ua + "*$"),
      ha = function ha(e, t, n) {
    var r = {},
        a = g(function () {
      return !!la[e]() || "​" != "​"[e]();
    }),
        i = r[e] = a ? t(pa) : la[e];
    n && (r[n] = i), L(L.P + L.F * a, "String", r);
  },
      pa = ha.trim = function (e, t) {
    return e = String(c(e)), 1 & t && (e = e.replace(fa, "")), 2 & t && (e = e.replace(da, "")), e;
  },
      ma = ha,
      ga = y.parseInt,
      va = ma.trim,
      ya = /^[-+]?0[xX]/,
      ba = 8 !== ga(la + "08") || 22 !== ga(la + "0x16") ? function (e, t) {
    var n = va(String(e), 3);
    return ga(n, t >>> 0 || (ya.test(n) ? 16 : 10));
  } : ga;

  L(L.G + L.F * (parseInt != ba), {
    parseInt: ba
  });
  var _a = M.parseInt,
      wa = new RegExp("(page|paging|(p(a|g|ag)?(e|enum|ewanted|ing|ination)))?(=|/)([0-9]{1,3})", "i"),
      Aa = /[a-z]/i,
      xa = /^[a-z]+$/i,
      ka = /^[0-9]+$/i,
      Sa = /charset=([\w-]+)\b/;

  function Ea(e) {
    return e.split("#")[0].replace(/\/$/, "");
  }

  L(L.S, "Array", {
    isArray: ge
  });
  var Ma = M.Array.isArray;

  var Ta = function Ta(e) {
    if (Ma(e)) return e;
  },
      Ca = M.getIterator = function (e) {
    var t = Vt(e);
    if ("function" != typeof t) throw TypeError(e + " is not iterable!");
    return D(t.call(e));
  };

  var Da = function Da(e, t) {
    var n = [],
        r = !0,
        a = !1,
        i = void 0;

    try {
      for (var o, s = Ca(e); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0) {
        ;
      }
    } catch (e) {
      a = !0, i = e;
    } finally {
      try {
        r || null == s["return"] || s["return"]();
      } finally {
        if (a) throw i;
      }
    }

    return n;
  };

  var Oa = function Oa() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };

  var Na = function Na(e, t) {
    return Ta(e) || Da(e, t) || Oa();
  };

  function ja(e, t) {
    var n = t || Mr.parse(e),
        r = n.protocol,
        a = n.host,
        i = n.path,
        d = !1,
        o = i.split("/").reverse().reduce(function (e, t, n) {
      var r,
          a,
          i,
          o,
          s = t;

      if (s.includes(".")) {
        var c = s.split("."),
            l = Na(c, 2),
            u = l[0],
            f = l[1];
        xa.test(f) && (s = u);
      }

      return wa.test(s) && n < 2 && (s = s.replace(wa, "")), 0 === n && (d = Aa.test(s)), r = s, i = d, o = !0, (a = n) < 2 && ka.test(r) && r.length < 3 && (o = !0), 0 === a && "index" === r.toLowerCase() && (o = !1), a < 2 && r.length < 3 && !i && (o = !1), o && e.push(s), e;
    }, []);
    return "".concat(r, "//").concat(a).concat(o.reverse().join("/"));
  }

  var Pa = new RegExp(".( |$)");

  function za(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
    return e.trim().split(/\s+/).slice(0, t).join(" ");
  }

  function La(e) {
    var t = "utf-8",
        n = Sa.exec(e);
    null !== n && (e = Na(n, 2)[1]);
    return ia(e) && (t = e), t;
  }

  var Ra = function Ra(i) {
    var o = 0;
    return i = i.toString(), function () {
      var e = i.indexOf("\r\n", o),
          t = i.indexOf("\n", o),
          n = i.indexOf("\r", o),
          r = [e, t, n].sort(function (e, t) {
        return t < e ? 1 : e < t ? -1 : 0;
      }).filter(function (e) {
        return -1 !== e;
      })[0];
      if (void 0 !== r) return s(r, r === e ? 2 : 1);
      var a = i.length;
      return a === o ? null : s(a, 0);
    };

    function s(e, t) {
      var n = i.substr(o, e - o);
      return o = e + t, n;
    }
  },
      Ya = /^[A-Z_]+(\/\d\.\d)? /,
      Wa = /^([A-Z_]+) (.+) [A-Z]+\/(\d)\.(\d)$/,
      qa = /^[A-Z]+\/(\d)\.(\d) (\d{3}) (.*)$/,
      Ia = function Ia(e, t) {
    return n = function (e) {
      e && e._header && (e = e._header);
      return e && "function" == typeof e.toString ? e.toString().trim() : "";
    }(e), r = t, s = (o = n).indexOf("\r\n"), i = -1 === s ? o : o.slice(0, s), r && Ya.test(i) ? Ha(n) : null !== (a = i.match(Wa)) ? {
      method: a[1],
      url: a[2],
      version: {
        major: parseInt(a[3], 10),
        minor: parseInt(a[4], 10)
      },
      headers: Ha(n)
    } : null !== (a = i.match(qa)) ? {
      version: {
        major: parseInt(a[1], 10),
        minor: parseInt(a[2], 10)
      },
      statusCode: parseInt(a[3], 10),
      statusMessage: a[4],
      headers: Ha(n)
    } : Ha(n);
    var n, r, a, i, o, s;
  };

  function Ha(e) {
    var t,
        n,
        r,
        a = {},
        i = Ra(e),
        o = i();

    for (Ya.test(o) && (o = i()); o;) {
      o = (" " !== o[0] && "\t" !== o[0] ? (n && Fa(n, r, a), t = o.indexOf(":"), n = o.substr(0, t), r = o.substr(t + 1).trim()) : r += " " + o.trim(), i());
    }

    return n && Fa(n, r, a), a;
  }

  function Fa(e, t, n) {
    switch (e = e.toLowerCase()) {
      case "set-cookie":
        void 0 !== n[e] ? n[e].push(t) : n[e] = [t];
        break;

      case "content-type":
      case "content-length":
      case "user-agent":
      case "referer":
      case "host":
      case "authorization":
      case "proxy-authorization":
      case "if-modified-since":
      case "if-unmodified-since":
      case "from":
      case "location":
      case "max-forwards":
      case "retry-after":
      case "etag":
      case "last-modified":
      case "server":
      case "age":
      case "expires":
        void 0 === n[e] && (n[e] = t);
        break;

      default:
        "string" == typeof n[e] ? n[e] += ", " + t : n[e] = t;
    }
  }

  var Ba = XMLHttpRequest;
  if (!Ba) throw new Error("missing XMLHttpRequest");
  Ga.log = {
    trace: $a,
    debug: $a,
    info: $a,
    warn: $a,
    error: $a
  };

  function Ga(e, t) {
    if ("function" != typeof t) throw new Error("Bad callback given: " + t);
    if (!e) throw new Error("No options given");
    var n = e.onResponse;
    if ((e = "string" == typeof e ? {
      uri: e
    } : JSON.parse(JSON.stringify(e))).onResponse = n, e.verbose && (Ga.log = function () {
      var e,
          t,
          n = {},
          r = ["trace", "debug", "info", "warn", "error"];

      for (t = 0; t < r.length; t++) {
        n[e = r[t]] = $a, "undefined" != typeof console && console && console[e] && (n[e] = Va(console, e));
      }

      return n;
    }()), e.url && (e.uri = e.url, delete e.url), !e.uri && "" !== e.uri) throw new Error("options.uri is a required argument");
    if ("string" != typeof e.uri) throw new Error("options.uri must be a string");

    for (var r = ["proxy", "_redirectsFollowed", "maxRedirects", "followRedirect"], a = 0; a < r.length; a++) {
      if (e[r[a]]) throw new Error("options." + r[a] + " is not supported");
    }

    if (e.callback = t, e.method = e.method || "GET", e.headers = e.headers || {}, e.body = e.body || null, e.timeout = e.timeout || Ga.DEFAULT_TIMEOUT, e.headers.host) throw new Error("Options.headers.host is not supported");
    e.json && (e.headers.accept = e.headers.accept || "application/json", "GET" !== e.method && (e.headers["content-type"] = "application/json"), "boolean" != typeof e.json ? e.body = JSON.stringify(e.json) : "string" != typeof e.body && (e.body = JSON.stringify(e.body)));

    var i = function i(e) {
      var t = [];

      for (var n in e) {
        e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      }

      return t.join("&");
    };

    if (e.qs) {
      var o = "string" == typeof e.qs ? e.qs : i(e.qs);
      -1 !== e.uri.indexOf("?") ? e.uri = e.uri + "&" + o : e.uri = e.uri + "?" + o;
    }

    if (e.form) {
      if ("string" == typeof e.form) throw "form name unsupported";

      if ("POST" === e.method) {
        var s = (e.encoding || "application/x-www-form-urlencoded").toLowerCase();

        switch (e.headers["content-type"] = s) {
          case "application/x-www-form-urlencoded":
            e.body = i(e.form).replace(/%20/g, "+");
            break;

          case "multipart/form-data":
            var c = function (e) {
              var t = {};
              t.boundry = "-------------------------------" + Math.floor(1e9 * Math.random());
              var n = [];

              for (var r in e) {
                e.hasOwnProperty(r) && n.push("--" + t.boundry + '\nContent-Disposition: form-data; name="' + r + '"\n\n' + e[r] + "\n");
              }

              return n.push("--" + t.boundry + "--"), t.body = n.join(""), t.length = t.body.length, t.type = "multipart/form-data; boundary=" + t.boundry, t;
            }(e.form);

            e.body = c.body, e.headers["content-type"] = c.type;
            break;

          default:
            throw new Error("unsupported encoding:" + s);
        }
      }
    }

    return e.onResponse = e.onResponse || $a, !0 === e.onResponse && (e.onResponse = t, e.callback = $a), !e.headers.authorization && e.auth && (e.headers.authorization = "Basic " + function (e) {
      var t,
          n,
          r,
          a,
          i,
          o,
          s,
          c,
          l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          u = 0,
          f = 0,
          d = "",
          h = [];
      if (!e) return e;

      for (; t = e.charCodeAt(u++), n = e.charCodeAt(u++), r = e.charCodeAt(u++), a = (c = t << 16 | n << 8 | r) >> 18 & 63, i = c >> 12 & 63, o = c >> 6 & 63, s = 63 & c, h[f++] = l.charAt(a) + l.charAt(i) + l.charAt(o) + l.charAt(s), u < e.length;) {
        ;
      }

      switch (d = h.join(""), e.length % 3) {
        case 1:
          d = d.slice(0, -2) + "==";
          break;

        case 2:
          d = d.slice(0, -1) + "=";
      }

      return d;
    }(e.auth.username + ":" + e.auth.password)), function (n) {
      var r = new Ba(),
          a = !1,
          t = function (e) {
        var t,
            n = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;

        try {
          t = location.href;
        } catch (e) {
          (t = document.createElement("a")).href = "", t = t.href;
        }

        var r = n.exec(t.toLowerCase()) || [],
            a = n.exec(e.toLowerCase());
        return !(!a || a[1] == r[1] && a[2] == r[2] && (a[3] || ("http:" === a[1] ? 80 : 443)) == (r[3] || ("http:" === r[1] ? 80 : 443)));
      }(n.uri),
          e = "withCredentials" in r;

      if (Ua += 1, r.seq_id = Ua, r.id = Ua + ": " + n.method + " " + n.uri, r._id = r.id, t && !e) {
        var i = new Error("Browser does not support cross-origin request: " + n.uri);
        return i.cors = "unsupported", n.callback(i, r);
      }

      r.timeoutTimer = setTimeout(function () {
        a = !0;
        var e = new Error("ETIMEDOUT");
        return e.code = "ETIMEDOUT", e.duration = n.timeout, Ga.log.error("Timeout", {
          id: r._id,
          milliseconds: n.timeout
        }), n.callback(e, r);
      }, n.timeout);
      var o = {
        response: !1,
        loading: !1,
        end: !1
      };
      r.onreadystatechange = function (e) {
        if (a) return Ga.log.debug("Ignoring timed out state change", {
          state: r.readyState,
          id: r.id
        });
        if (Ga.log.debug("State change", {
          state: r.readyState,
          id: r.id,
          timed_out: a
        }), r.readyState === Ba.OPENED) for (var t in Ga.log.debug("Request started", {
          id: r.id
        }), n.headers) {
          r.setRequestHeader(t, n.headers[t]);
        } else r.readyState === Ba.HEADERS_RECEIVED ? s() : r.readyState === Ba.LOADING ? (s(), c()) : r.readyState === Ba.DONE && (s(), c(), function () {
          if (!o.end) {
            if (o.end = !0, Ga.log.debug("Request done", {
              id: r.id
            }), r.body = r.responseText, r.headers = Ia(r.getAllResponseHeaders()), n.json) try {
              r.body = JSON.parse(r.responseText);
            } catch (e) {
              return n.callback(e, r);
            }
            n.callback(null, r, r.body);
          }
        }());
      }, r.open(n.method, n.uri, !0), t && (r.withCredentials = !!n.withCredentials);
      return r.send(n.body), r;

      function s() {
        if (!o.response) {
          if (o.response = !0, Ga.log.debug("Got response", {
            id: r.id,
            status: r.status
          }), clearTimeout(r.timeoutTimer), r.statusCode = r.status, t && 0 == r.statusCode) {
            var e = new Error("CORS request rejected: " + n.uri);
            return e.cors = "rejected", o.loading = !0, o.end = !0, n.callback(e, r);
          }

          n.onResponse(null, r);
        }
      }

      function c() {
        o.loading || (o.loading = !0, Ga.log.debug("Response body loading", {
          id: r.id
        }));
      }
    }(e);
  }

  var Ua = 0;
  Ga.withCredentials = !1, Ga.DEFAULT_TIMEOUT = 18e4, Ga.defaults = function (a, e) {
    var t = function t(r) {
      return function (e, t) {
        for (var n in e = "string" == typeof e ? {
          uri: e
        } : JSON.parse(JSON.stringify(e)), a) {
          void 0 === e[n] && (e[n] = a[n]);
        }

        return r(e, t);
      };
    },
        n = t(Ga);

    return n.get = t(Ga.get), n.post = t(Ga.post), n.put = t(Ga.put), n.head = t(Ga.head), n;
  };

  function $a() {}

  function Va(n, r) {
    return function (e, t) {
      "object" == _typeof(t) && (e += " " + JSON.stringify(t));
      return n[r].call(n, e);
    };
  }

  ["get", "put", "post", "head"].forEach(function (e) {
    var n = e.toUpperCase();

    Ga[e.toLowerCase()] = function (e) {
      "string" == typeof e ? e = {
        method: n,
        uri: e
      } : (e = JSON.parse(JSON.stringify(e))).method = n;
      var t = [e].concat(Array.prototype.slice.apply(arguments, [1]));
      return Ga.apply(this, t);
    };
  }), Ga.couch = function (e, a) {
    return "string" == typeof e && (e = {
      uri: e
    }), e.json = !0, e.body && (e.json = e.body), delete e.body, a = a || $a, Ga(e, function (e, t, n) {
      if (e) return a(e, t, n);

      if ((t.statusCode < 200 || 299 < t.statusCode) && n.error) {
        for (var r in e = new Error("CouchDB error: " + (n.error.reason || n.error.error)), n) {
          e[r] = n[r];
        }

        return a(e, t, n);
      }

      return a(e, t, n);
    });
  };
  var Ka = Ga,
      Ja = Cr.browser ? {} : {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
  },
      Xa = 1e4,
      Za = new RegExp("^(".concat(["audio/mpeg", "image/gif", "image/jpeg", "image/jpg"].join("|"), ")$"), "i"),
      Qa = 5242880;

  function ei(e) {
    return new Xn(function (r, a) {
      Ka(e, function (e, t, n) {
        e ? a(e) : r({
          body: n,
          response: t
        });
      });
    });
  }

  function ti(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];

    if (e.statusMessage && "OK" !== e.statusMessage || 200 !== e.statusCode) {
      if (!e.statusCode) throw new Error("Unable to fetch content. Original exception was ".concat(e.error));
      if (!t) throw new Error("Resource returned a response status code of ".concat(e.statusCode, " and resource was instructed to reject non-200 status codes."));
    }

    var n = e.headers,
        r = n["content-type"],
        a = n["content-length"];
    if (Za.test(r)) throw new Error("Content-type for this resource was ".concat(r, " and is not allowed."));
    if (Qa < a) throw new Error("Content for this resource was too large. Maximum content length is ".concat(Qa, "."));
    return !0;
  }

  function ni(e, t) {
    return ri.apply(this, arguments);
  }

  function ri() {
    return (ri = Qn(S.mark(function e(t, n) {
      var r,
          a,
          i,
          o,
          s,
          c = arguments;
      return S.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              return r = 2 < c.length && void 0 !== c[2] ? c[2] : {}, n = n || Mr.parse(encodeURI(t)), a = pt({
                url: n.href,
                headers: pt({}, Ja, r),
                timeout: Xa,
                jar: !0,
                encoding: null,
                gzip: !0,
                followAllRedirects: !0
              }, "undefined" != typeof window ? {} : {
                followRedirect: !0
              }), e.next = 5, ei(a);

            case 5:
              return i = e.sent, o = i.response, s = i.body, e.prev = 8, ti(o), e.abrupt("return", {
                body: s,
                response: o
              });

            case 13:
              return e.prev = 13, e.t0 = e["catch"](8), e.abrupt("return", {
                error: !0,
                message: e.t0.message
              });

            case 16:
            case "end":
              return e.stop();
          }
        }
      }, e, this, [[8, 13]]);
    }))).apply(this, arguments);
  }

  function ai(a, i, o) {
    return a("meta[".concat(i, "]")).each(function (e, t) {
      var n = a(t),
          r = n.attr(i);
      n.attr(o, r), n.removeAttr(i);
    }), a;
  }

  var ii = y.Reflect,
      oi = ii && ii.ownKeys || function (e) {
    var t = Ee.f(D(e)),
        n = me.f;
    return n ? t.concat(n(e)) : t;
  };

  L(L.S, "Reflect", {
    ownKeys: oi
  });

  var si = M.Reflect.ownKeys,
      ci = new RegExp("transparent|spacer|blank", "i"),
      li = "mercury-parser-keep",
      ui = ['iframe[src^="https://www.youtube.com"]', 'iframe[src^="https://www.youtube-nocookie.com"]', 'iframe[src^="http://www.youtube.com"]', 'iframe[src^="https://player.vimeo"]', 'iframe[src^="http://player.vimeo"]', 'iframe[src^="https://www.redditmedia.com"]'],
      fi = ["title", "script", "noscript", "link", "style", "hr", "embed", "iframe", "object"],
      di = new RegExp("^(".concat(["src", "srcset", "sizes", "type", "href", "class", "id", "alt", "xlink:href", "width", "height"].join("|"), ")$"), "i"),
      hi = ["ul", "ol", "table", "div", "button", "form"].join(","),
      pi = ["h2", "h3", "h4", "h5", "h6"].join(","),
      mi = ["a", "blockquote", "dl", "div", "img", "p", "pre", "table"].join(","),
      gi = new RegExp(["article", "articlecontent", "instapaper_body", "blog", "body", "content", "entry-content-asset", "entry", "hentry", "main", "Normal", "page", "pagination", "permalink", "post", "story", "text", "[-_]copy", "\\Bcopy"].join("|"), "i"),
      vi = new RegExp(["adbox", "advert", "author", "bio", "bookmark", "bottom", "byline", "clear", "com-", "combx", "comment", "comment\\B", "contact", "copy", "credit", "crumb", "date", "deck", "excerpt", "featured", "foot", "footer", "footnote", "graf", "head", "info", "infotext", "instapaper_ignore", "jump", "linebreak", "link", "masthead", "media", "meta", "modal", "outbrain", "promo", "pr_", "related", "respond", "roundcontent", "scroll", "secondary", "share", "shopping", "shoutbox", "side", "sidebar", "sponsor", "stamp", "sub", "summary", "tags", "tools", "widget"].join("|"), "i"),
      yi = "meta[name=generator][value^=WordPress]",
      bi = new RegExp("pag(e|ing|inat)", "i"),
      _i = new RegExp("^(".concat(["article", "aside", "blockquote", "body", "br", "button", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "map", "object", "ol", "output", "p", "pre", "progress", "section", "table", "tbody", "textarea", "tfoot", "th", "thead", "tr", "ul", "video"].join("|"), ")$"), "i"),
      wi = ["ad-break", "adbox", "advert", "addthis", "agegate", "aux", "blogger-labels", "combx", "comment", "conversation", "disqus", "entry-unrelated", "extra", "foot", "header", "hidden", "loader", "login", "menu", "meta", "nav", "outbrain", "pager", "pagination", "predicta", "presence_control_external", "popup", "printfriendly", "related", "remove", "remark", "rss", "share", "shoutbox", "sidebar", "sociable", "sponsor", "taboola", "tools"].join("|"),
      Ai = new RegExp(wi, "i"),
      xi = ["and", "article", "body", "blogindex", "column", "content", "entry-content-asset", "format", "hfeed", "hentry", "hatom", "main", "page", "posts", "shadow"].join("|"),
      ki = new RegExp(xi, "i");

  function Si(a) {
    var i = !1;
    return a("br").each(function (e, t) {
      var n = a(t),
          r = n.next().get(0);
      r && "br" === r.tagName.toLowerCase() ? (i = !0, n.remove()) : i && function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = t(e);

        if (n) {
          for (var a = e.nextSibling, i = t("<p></p>"); a && (!a.tagName || !_i.test(a.tagName));) {
            var o = a,
                s = o.nextSibling;
            t(a).appendTo(i), a = s;
          }

          return r.replaceWith(i), r.remove();
        }
      }(t, a, !(i = !1));
    }), a;
  }

  function Ei(e) {
    var r, a;
    return e = Si(e), (r = e)("div").each(function (e, t) {
      var n = r(t);
      0 === n.children(mi).length && Mi(n, r, "p");
    }), (a = e = r)("span").each(function (e, t) {
      var n = a(t);
      0 === n.parents("p, div").length && Mi(n, a, "p");
    }), e = a;
  }

  function Mi(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "p",
        r = e.get(0);
    if (!r) return t;
    var a,
        i = ns(r) || {},
        o = si(i).map(function (e) {
      return "".concat(e, "=").concat(i[e]);
    }).join(" ");
    return a = t.browser ? "noscript" === r.tagName.toLowerCase() ? e.text() : e.html() : e.contents(), e.replaceWith("<".concat(n, " ").concat(o, ">").concat(a, "</").concat(n, ">")), t;
  }

  function Ti(e, s) {
    return e.find("img").each(function (e, t) {
      var n,
          r,
          a,
          i,
          o = s(t);
      r = _a((n = o).attr("height"), 10), a = _a(n.attr("width"), 10) || 20, (r || 20) < 10 || a < 10 ? n.remove() : r && n.removeAttr("height"), i = o, ci.test(i.attr("src")) && i.remove();
    }), s;
  }

  var Ci = function Ci(e) {
    if (Ma(e)) {
      for (var t = 0, n = new Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }

      return n;
    }
  },
      Di = function Di(e, t, n) {
    t in e ? N.f(e, t, A(0, n)) : e[t] = n;
  };

  L(L.S + L.F * !Dn(function (e) {}), "Array", {
    from: function from(e) {
      var t,
          n,
          r,
          a,
          i = lt(e),
          o = "function" == typeof this ? this : Array,
          s = arguments.length,
          c = 1 < s ? arguments[1] : void 0,
          l = void 0 !== c,
          u = 0,
          f = Vt(i);
      if (l && (c = C(c, 2 < s ? arguments[2] : void 0, 2)), null == f || o == Array && Ut(f)) for (n = new o(t = ie(i.length)); u < t; u++) {
        Di(n, u, l ? c(i[u], u) : i[u]);
      } else for (a = f.call(i), n = new o(); !(r = a.next()).done; u++) {
        Di(n, u, l ? Ft(a, c, [r.value, u], !0) : r.value);
      }
      return n.length = u, n;
    }
  });

  var Oi = M.Array.from,
      Ni = V("iterator"),
      ji = M.isIterable = function (e) {
    var t = Object(e);
    return void 0 !== t[Ni] || "@@iterator" in t || vt.hasOwnProperty(It(t));
  };

  var Pi = function Pi(e) {
    if (ji(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return Oi(e);
  };

  var zi = function zi() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  };

  var Li = function Li(e) {
    return Ci(e) || Pi(e) || zi();
  };

  function Ri(e, t) {
    return e.find("*").each(function (e, t) {
      var n = ns(t);
      !function (t, n) {
        if (t.attribs) t.attribs = n;else if (t.attributes) {
          for (; 0 < t.attributes.length;) {
            t.removeAttribute(t.attributes[0].name);
          }

          si(n).forEach(function (e) {
            t.setAttribute(e, n[e]);
          });
        }
      }(t, si(n).reduce(function (e, t) {
        return di.test(t) ? pt({}, e, ht({}, t, n[t])) : e;
      }, {}));
    }), t(".".concat(li), e).removeClass(li), e;
  }

  var Yi = new RegExp("^(".concat(["br", "b", "i", "label", "hr", "area", "base", "basefont", "input", "img", "link", "meta"].join("|"), ")$"), "i"),
      Wi = [[".hentry", ".entry-content"], ["entry", ".entry-content"], [".entry", ".entry_content"], [".post", ".postbody"], [".post", ".post_body"], [".post", ".post-body"]],
      qi = new RegExp(["figure", "photo", "image", "caption"].join("|"), "i"),
      Ii = new RegExp(["article", "articlecontent", "instapaper_body", "blog", "body", "content", "entry-content-asset", "entry", "hentry", "main", "Normal", "page", "pagination", "permalink", "post", "story", "text", "[-_]copy", "\\Bcopy"].join("|"), "i"),
      Hi = new RegExp("entry-content-asset", "i"),
      Fi = new RegExp(["adbox", "advert", "author", "bio", "bookmark", "bottom", "byline", "clear", "com-", "combx", "comment", "comment\\B", "contact", "copy", "credit", "crumb", "date", "deck", "excerpt", "featured", "foot", "footer", "footnote", "graf", "head", "info", "infotext", "instapaper_ignore", "jump", "linebreak", "link", "masthead", "media", "meta", "modal", "outbrain", "promo", "pr_", "related", "respond", "roundcontent", "scroll", "secondary", "share", "shopping", "shoutbox", "side", "sidebar", "sponsor", "stamp", "sub", "summary", "tags", "tools", "widget"].join("|"), "i"),
      Bi = new RegExp("^(p|li|span|pre)$", "i"),
      Gi = new RegExp("^(td|blockquote|ol|ul|dl)$", "i"),
      Ui = new RegExp("^(address|form)$", "i");

  function $i(e) {
    var t = e.attr("class"),
        n = e.attr("id"),
        r = 0;
    return n && (Ii.test(n) && (r += 25), Fi.test(n) && (r -= 25)), t && (0 === r && (Ii.test(t) && (r += 25), Fi.test(t) && (r -= 25)), qi.test(t) && (r += 10), Hi.test(t) && (r += 25)), r;
  }

  var Vi = y.parseFloat,
      Ki = ma.trim,
      Ji = 1 / Vi(la + "-0") != -1 / 0 ? function (e) {
    var t = Ki(String(e), 3),
        n = Vi(t);
    return 0 === n && "-" == t.charAt(0) ? -0 : n;
  } : Vi;
  L(L.G + L.F * (parseFloat != Ji), {
    parseFloat: Ji
  });
  var Xi = M.parseFloat;

  function Zi(e) {
    return Xi(e.attr("score")) || null;
  }

  function Qi(e) {
    return (e.match(/,/g) || []).length;
  }

  var eo = new RegExp("^(p|pre)$", "i");

  function to(e) {
    var t = 1,
        n = e.text().trim(),
        r = n.length;
    return r < 25 ? 0 : (t += Qi(n), t += function (e) {
      var t,
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "p",
          r = e / 50;
      return 0 < r ? (t = eo.test(n) ? r - 2 : r - 1.25, Math.min(Math.max(t, 0), 3)) : 0;
    }(r), ":" === n.slice(-1) && (t -= 1), t);
  }

  function no(e, t, n) {
    return e.attr("score", n), e;
  }

  function ro(e, t, n) {
    try {
      no(e, 0, ao(e, t) + n);
    } catch (e) {}

    return e;
  }

  function ao(e, t) {
    var n,
        r,
        a,
        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
        o = Zi(e);
    return o || (o = io(e), i && (o += $i(e)), n = t, r = o, (a = e.parent()) && ro(a, n, .25 * r), o);
  }

  function io(e) {
    var t = e.get(0).tagName;
    return Bi.test(t) ? to(e) : "div" === t.toLowerCase() ? 5 : Gi.test(t) ? 3 : Ui.test(t) ? -3 : "th" === t.toLowerCase() ? -5 : 0;
  }

  function oo(e, t, n) {
    var r, a;
    e && (a = t, (r = e).get(0) && "span" === r.get(0).tagName && Mi(r, a, "div"), ro(e, t, n));
  }

  function so(i, o) {
    return i("p, pre").not("[score]").each(function (e, t) {
      var n = i(t),
          r = (n = no(n, 0, ao(n, i, o))).parent(),
          a = io(n);
      oo(r, i, a), r && oo(r.parent(), i, a / 2);
    }), i;
  }

  function co(l, u, f) {
    if (!l.parent().length) return l;
    var d = Math.max(10, .25 * u),
        h = f("<div></div>");
    return l.parent().children().each(function (e, t) {
      var n = f(t);
      if (Yi.test(t.tagName)) return null;
      var r,
          a = Zi(n);
      if (a) if (n.get(0) === l.get(0)) h.append(n);else {
        var i = 0,
            o = $o(n);
        if (o < .05 && (i += 20), .5 <= o && (i -= 20), n.attr("class") === l.attr("class") && (i += .2 * u), d <= a + i) return h.append(n);

        if ("p" === t.tagName) {
          var s = n.text(),
              c = Uo(s);
          if (80 < c && o < .25) return h.append(n);
          if (c <= 80 && 0 === o && (r = s, Pa.test(r))) return h.append(n);
        }
      }
      return null;
    }), 1 === h.children().length && h.children().first().get(0) === l.get(0) ? l : h;
  }

  function lo(e, a) {
    return a(hi, e).each(function (e, t) {
      var n = a(t);

      if (!(n.hasClass(li) || 0 < n.find(".".concat(li)).length)) {
        var r = Zi(n);
        r || no(n, 0, r = ao(n, a)), r < 0 ? n.remove() : function (e, t, n) {
          if (!e.hasClass("entry-content-asset")) {
            var r = ca(e.text());

            if (Qi(r) < 10) {
              if (t("p", e).length / 3 < t("input", e).length) return e.remove();
              var a = r.length,
                  i = t("img", e).length;
              if (a < 25 && 0 === i) return e.remove();
              var o = $o(e);
              if (n < 25 && .2 < o && 75 < a) return e.remove();

              if (25 <= n && .5 < o) {
                var s = e.get(0).tagName.toLowerCase();

                if ("ol" === s || "ul" === s) {
                  var c = e.prev();
                  if (c && ":" === ca(c.text()).slice(-1)) return;
                }

                return e.remove();
              }

              0 < t("script", e).length && a < 150 && e.remove();
            }
          }
        }(n, a, r);
      }
    }), a;
  }

  var uo,
      fo,
      ho,
      po,
      mo,
      go,
      vo,
      yo,
      bo,
      _o,
      wo,
      Ao,
      xo,
      ko,
      So,
      Eo,
      Mo,
      To,
      Co,
      Do,
      Oo,
      No = function No(e, t) {
    if (!d(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
    return e;
  },
      jo = N.f,
      Po = U.fastKey,
      zo = v ? "_s" : "size",
      Lo = function Lo(e, t) {
    var n,
        r = Po(t);
    if ("F" !== r) return e._i[r];

    for (n = e._f; n; n = n.n) {
      if (n.k == t) return n;
    }
  },
      Ro = {
    getConstructor: function getConstructor(e, i, n, r) {
      var a = e(function (e, t) {
        Ht(e, a, i, "_i"), e._t = i, e._i = ke(null), e._f = void 0, e._l = void 0, e[zo] = 0, null != t && Kt(t, n, e[r], e);
      });
      return wn(a.prototype, {
        clear: function clear() {
          for (var e = No(this, i), t = e._i, n = e._f; n; n = n.n) {
            n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
          }

          e._f = e._l = void 0, e[zo] = 0;
        },
        "delete": function _delete(e) {
          var t = No(this, i),
              n = Lo(t, e);

          if (n) {
            var r = n.n,
                a = n.p;
            delete t._i[n.i], n.r = !0, a && (a.n = r), r && (r.p = a), t._f == n && (t._f = r), t._l == n && (t._l = a), t[zo]--;
          }

          return !!n;
        },
        forEach: function forEach(e) {
          No(this, i);

          for (var t, n = C(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f;) {
            for (n(t.v, t.k, this); t && t.r;) {
              t = t.p;
            }
          }
        },
        has: function has(e) {
          return !!Lo(No(this, i), e);
        }
      }), v && jo(a.prototype, "size", {
        get: function get() {
          return No(this, i)[zo];
        }
      }), a;
    },
    def: function def(e, t, n) {
      var r,
          a,
          i = Lo(e, t);
      return i ? i.v = n : (e._l = i = {
        i: a = Po(t, !0),
        k: t,
        v: n,
        p: r = e._l,
        n: void 0,
        r: !1
      }, e._f || (e._f = i), r && (r.n = i), e[zo]++, "F" !== a && (e._i[a] = i)), e;
    },
    getEntry: Lo,
    setStrong: function setStrong(e, n, t) {
      Mt(e, n, function (e, t) {
        this._t = No(e, n), this._k = t, this._l = void 0;
      }, function () {
        for (var e = this._k, t = this._l; t && t.r;) {
          t = t.p;
        }

        return this._t && (this._l = t = t ? t.n : this._t._f) ? Ct(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, Ct(1));
      }, t ? "entries" : "values", !t, !0), xn(n);
    }
  },
      Yo = V("species"),
      Wo = function Wo(e, t) {
    return ge(n = e) && ("function" != typeof (r = n.constructor) || r !== Array && !ge(r.prototype) || (r = void 0), d(r) && null === (r = r[Yo]) && (r = void 0)), new (void 0 === r ? Array : r)(t);
    var n, r;
  },
      qo = N.f,
      Io = (ho = 1 == (uo = 0), po = 2 == uo, mo = 3 == uo, go = 4 == uo, vo = 6 == uo, yo = 5 == uo || vo, bo = fo || Wo, function (e, t, n) {
    for (var r, a, i = lt(e), o = f(i), s = C(t, n, 3), c = ie(o.length), l = 0, u = ho ? bo(e, c) : po ? bo(e, 0) : void 0; l < c; l++) {
      if ((yo || l in o) && (a = s(r = o[l], l, i), uo)) if (ho) u[l] = a;else if (a) switch (uo) {
        case 3:
          return !0;

        case 5:
          return r;

        case 6:
          return l;

        case 2:
          u.push(r);
      } else if (go) return !1;
    }

    return vo ? -1 : mo || go ? go : u;
  });

  wo = function wo(e) {
    return function () {
      return e(this, 0 < arguments.length ? arguments[0] : void 0);
    };
  }, Ao = {
    add: function add(e) {
      return Ro.def(No(this, "Set"), e = 0 === e ? 0 : e, e);
    }
  }, xo = Ro, Eo = y[_o = "Set"], To = ko ? "set" : "add", Co = (Mo = Eo) && Mo.prototype, Do = {}, v && "function" == typeof Mo && (So || Co.forEach && !g(function () {
    new Mo().entries().next();
  })) ? (Mo = wo(function (e, t) {
    Ht(e, Mo, _o, "_c"), e._c = new Eo(), null != t && Kt(t, ko, e[To], e);
  }), Io("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (r) {
    var a = "add" == r || "set" == r;
    r in Co && (!So || "clear" != r) && j(Mo.prototype, r, function (e, t) {
      if (Ht(this, Mo, r), !a && So && !d(e)) return "get" == r && void 0;

      var n = this._c[r](0 === e ? 0 : e, t);

      return a ? this : n;
    });
  }), So || qo(Mo.prototype, "size", {
    get: function get() {
      return this._c.size;
    }
  })) : (Mo = xo.getConstructor(wo, _o, ko, To), wn(Mo.prototype, Ao), U.NEED = !0), X(Mo, _o), Do[_o] = Mo, L(L.G + L.W + L.F, Do), So || xo.setStrong(Mo, _o, ko);
  L(L.P + L.R, "Set", {
    toJSON: (Oo = "Set", function () {
      if (It(this) != Oo) throw TypeError(Oo + "#toJSON isn't generic");
      return Kt(this, !(t = []), t.push, t, e), t;
      var e, t;
    })
  });
  var Ho;
  Ho = "Set", L(L.S, Ho, {
    of: function of() {
      for (var e = arguments.length, t = new Array(e); e--;) {
        t[e] = arguments[e];
      }

      return new this(t);
    }
  });
  var Fo;
  Fo = "Set", L(L.S, Fo, {
    from: function from(e) {
      var t,
          n,
          r,
          a,
          i = arguments[1];
      return T(this), (t = void 0 !== i) && T(i), null == e ? new this() : (n = [], t ? (r = 0, a = C(i, arguments[2], 2), Kt(e, !1, function (e) {
        n.push(a(e, r++));
      })) : Kt(e, !1, n.push, n), new this(n));
    }
  });
  var Bo = M.Set;

  function Go(e, n, r) {
    var a;
    return ["href", "src"].forEach(function (e) {
      return a = r, i = e, o = (t = n)("base").attr("href"), void t("[".concat(i, "]")).each(function (e, t) {
        var n = ns(t)[i];

        if (n) {
          var r = Mr.resolve(o || a, n);
          rs(t, i, r);
        }
      });
      var t, a, i, o;
    }), a = r, n("[srcset]", e).each(function (e, t) {
      var n = ns(t).srcset;

      if (n) {
        var r = n.match(/(?:\s*)(\S+(?:\s*[\d.]+[wx])?)(?:\s*,\s*)?/g).map(function (e) {
          var t = e.trim().replace(/,$/, "").split(/\s+/);
          return t[0] = Mr.resolve(a, t[0]), t.join(" ");
        });
        rs(t, "srcset", Li(new Bo(r)).join(", "));
      }
    }), e;
  }

  function Uo(e) {
    return e.trim().replace(/\s+/g, " ").length;
  }

  function $o(e) {
    var t = Uo(e.text()),
        n = Uo(e.find("a").text());
    return 0 < t ? n / t : 0 === t && 0 < n ? 1 : 0;
  }

  var Vo = Z.f("iterator");
  ee("asyncIterator"), ee("observable");
  var Ko = M.Symbol,
      Jo = e(function (t) {
    function n(e) {
      return (n = "function" == typeof Ko && "symbol" == _typeof(Vo) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Ko && e.constructor === Ko && e !== Ko.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function r(e) {
      return "function" == typeof Ko && "symbol" === n(Vo) ? t.exports = r = function r(e) {
        return n(e);
      } : t.exports = r = function r(e) {
        return e && "function" == typeof Ko && e.constructor === Ko && e !== Ko.prototype ? "symbol" : n(e);
      }, r(e);
    }

    t.exports = r;
  });

  function Xo(r, e, t) {
    var a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
        n = e.filter(function (e) {
      return -1 !== t.indexOf(e);
    }),
        i = !0,
        o = !1,
        s = void 0;

    try {
      for (var c, l = function l() {
        var e = c.value,
            t = r("meta[".concat("name", '="').concat(e, '"]')).map(function (e, t) {
          return r(t).attr("value");
        }).toArray().filter(function (e) {
          return "" !== e;
        });

        if (1 === t.length) {
          var n;
          if (a) n = es(t[0], r);else n = Na(t, 1)[0];
          return {
            v: n
          };
        }
      }, u = Ca(n); !(i = (c = u.next()).done); i = !0) {
        var f = l();
        if ("object" === Jo(f)) return f.v;
      }
    } catch (e) {
      o = !0, s = e;
    } finally {
      try {
        i || null == u["return"] || u["return"]();
      } finally {
        if (o) throw s;
      }
    }

    return null;
  }

  function Zo(e, t) {
    return !(e.children().length > t) && void 0 === e.parents().toArray().find(function (e) {
      var t = ns(e),
          n = t["class"],
          r = t.id,
          a = "".concat(n, " ").concat(r);
      return a.includes("comment");
    });
  }

  function Qo(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
        r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
        a = !0,
        i = !1,
        o = void 0;

    try {
      for (var s, c = Ca(t); !(a = (s = c.next()).done); a = !0) {
        var l = e(s.value);

        if (1 === l.length) {
          var u = e(l[0]);

          if (Zo(u, n)) {
            var f = void 0;
            if (f = r ? u.text() : u.html()) return f;
          }
        }
      }
    } catch (e) {
      i = !0, o = e;
    } finally {
      try {
        a || null == c["return"] || c["return"]();
      } finally {
        if (i) throw o;
      }
    }

    return null;
  }

  function es(e, t) {
    var n = t("<span>".concat(e, "</span>")).text();
    return "" === n ? e : n;
  }

  function ts(e) {
    return 100 <= e.text().trim().length;
  }

  function ns(e) {
    var t = e.attribs,
        r = e.attributes;
    return t || !r ? t : si(r).reduce(function (e, t) {
      var n = r[t];
      return n.name && n.value && (e[n.name] = n.value), e;
    }, {});
  }

  function rs(e, t, n) {
    return e.attribs ? e.attribs[t] = n : e.attributes && e.setAttribute(t, n), e;
  }

  var as = new RegExp("https?://", "i"),
      is = ".(png|gif|jpe?g)",
      os = new RegExp("".concat(is), "i"),
      ss = new RegExp("".concat(is, "(\\s*[\\d.]+[wx])"), "i"),
      cs = ["script", "style", "form"].join(",");

  function ls(e, t) {
    return "comment" === t.type;
  }

  function us(e) {
    var t;
    return e(cs).remove(), (t = e).root().find("*").contents().filter(ls).remove(), e = t;
  }

  var fs,
      ds = {
    create: (fs = Qn(S.mark(function e(t, n, r) {
      var a,
          i,
          o = arguments;
      return S.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (a = 3 < o.length && void 0 !== o[3] ? o[3] : {}, !n) {
                e.next = 6;
                break;
              }

              i = {
                body: n,
                response: {
                  statusMessage: "OK",
                  statusCode: 200,
                  headers: {
                    "content-type": "text/html",
                    "content-length": 500
                  }
                }
              }, e.next = 9;
              break;

            case 6:
              return e.next = 8, ni(t, r, a);

            case 8:
              i = e.sent;

            case 9:
              if (i.error) return i.failed = !0, e.abrupt("return", i);
              e.next = 12;
              break;

            case 12:
              return e.abrupt("return", this.generateDoc(i));

            case 13:
            case "end":
              return e.stop();
          }
        }
      }, e, this);
    })), function (e, t, n) {
      return fs.apply(this, arguments);
    }),
    generateDoc: function generateDoc(e) {
      var t = e.body,
          n = e.response.headers["content-type"],
          r = void 0 === n ? "" : n;
      if (!r.includes("html") && !r.includes("text")) throw new Error("Content does not appear to be text.");
      var a,
          i = this.encodeDoc({
        content: t,
        contentType: r
      });
      if (0 === i.root().children().length) throw new Error("No children, likely a bad parse.");
      return i = ai(ai(i, "content", "value"), "property", "name"), (a = i)("img").each(function (e, n) {
        var r = ns(n);
        si(r).forEach(function (e) {
          var t = r[e];
          "srcset" !== e && as.test(t) && ss.test(t) ? a(n).attr("srcset", t) : "src" !== e && "srcset" !== e && as.test(t) && os.test(t) && a(n).attr("src", t);
        });
      }), i = us(i = a);
    },
    encodeDoc: function encodeDoc(e) {
      var t = e.content,
          n = La(e.contentType),
          r = oa(t, n),
          a = Cr.load(r),
          i = a(Cr.browser ? "meta[http-equiv=content-type]" : "meta[http-equiv=content-type i]").attr("content") || a("meta[charset]").attr("charset"),
          o = La(i);
      return i && o !== n && (r = oa(t, o), a = Cr.load(r)), a;
    }
  },
      hs = S.mark(ps);

  function ps() {
    var t,
        n,
        r = arguments;
    return S.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = 0 < r.length && void 0 !== r[0] ? r[0] : 1, n = 1 < r.length && void 0 !== r[1] ? r[1] : 1;

          case 2:
            if (t <= n) return e.next = 5, t += 1;
            e.next = 7;
            break;

          case 5:
            e.next = 2;
            break;

          case 7:
          case "end":
            return e.stop();
        }
      }
    }, hs, this);
  }

  var ms = function ms(n, e) {
    return e.reduce(function (e, t) {
      return e[t] = n, e;
    }, {});
  };

  var gs = {
    domain: "blogspot.com",
    content: {
      selectors: [".post-content noscript"],
      clean: [],
      transforms: {
        noscript: "div"
      }
    },
    author: {
      selectors: [".post-author-name"]
    },
    title: {
      selectors: [".post h2.title"]
    },
    date_published: {
      selectors: ["span.publishdate"]
    }
  },
      vs = {
    domain: "nymag.com",
    content: {
      selectors: ["div.article-content", "section.body", "article.article"],
      clean: [".ad", ".single-related-story"],
      transforms: {
        h1: "h2",
        noscript: function noscript(e, t) {
          var n = t.browser ? t(e.text()) : e.children();
          return 1 === n.length && void 0 !== n.get(0) && "img" === n.get(0).tagName.toLowerCase() ? "figure" : null;
        }
      }
    },
    title: {
      selectors: ["h1.lede-feature-title", "h1.headline-primary", "h1"]
    },
    author: {
      selectors: [".by-authors", ".lede-feature-author"]
    },
    dek: {
      selectors: [".lede-feature-teaser"]
    },
    date_published: {
      selectors: [["time.article-timestamp[datetime]", "datetime"], "time.article-timestamp"]
    }
  },
      ys = {
    domain: "www.apartmenttherapy.com",
    title: {
      selectors: ["h1.headline"]
    },
    author: {
      selectors: [".PostByline__name"]
    },
    content: {
      selectors: ["div.post__content"],
      transforms: {
        'div[data-render-react-id="images/LazyPicture"]': function divDataRenderReactIdImagesLazyPicture(e, t) {
          var n = JSON.parse(e.attr("data-props")).sources[0].src,
              r = t("<img />").attr("src", n);
          e.replaceWith(r);
        }
      },
      clean: []
    },
    date_published: {
      selectors: [[".PostByline__timestamp[datetime]", "datetime"]]
    },
    lead_image_url: {
      selectors: [['meta[name="og:image"]', "value"]]
    },
    dek: {
      selectors: []
    },
    next_page_url: {
      selectors: []
    },
    excerpt: {
      selectors: []
    }
  },
      bs = {
    domain: "medium.com",
    supportedDomains: ["trackchanges.postlight.com"],
    title: {
      selectors: ["h1"]
    },
    author: {
      selectors: [['meta[name="author"]', "value"]]
    },
    content: {
      selectors: [[".section-content"], ".section-content", "article > div > section"],
      transforms: {
        iframe: function iframe(e) {
          var t = /https:\/\/i.embed.ly\/.+url=https:\/\/i\.ytimg\.com\/vi\/(\w+)\//,
              n = decodeURIComponent(e.attr("data-thumbnail"));

          if (t.test(n)) {
            var r = n.match(t),
                a = Na(r, 2),
                i = (a[0], a[1]);
            e.attr("src", "https://www.youtube.com/embed/".concat(i));
            var o = e.parents("figure"),
                s = o.find("figcaption");
            o.empty().append([e, s]);
          }
        },
        figure: function figure(e) {
          if (!(0 < e.find("iframe").length)) {
            var t = e.find("img").slice(-1)[0],
                n = e.find("figcaption");
            e.empty().append([t, n]);
          }
        }
      },
      clean: []
    },
    date_published: {
      selectors: [["time[datetime]", "datetime"]]
    },
    lead_image_url: {
      selectors: [['meta[name="og:image"]', "value"]]
    },
    dek: {
      selectors: []
    },
    next_page_url: {
      selectors: []
    },
    excerpt: {
      selectors: []
    }
  },
      _s = {
    domain: "www.msnbc.com",
    title: {
      selectors: ["h1", "h1.is-title-pane"]
    },
    author: {
      selectors: [".author"]
    },
    date_published: {
      selectors: [['meta[name="DC.date.issued"]', "value"]]
    },
    dek: {
      selectors: [['meta[name="description"]', "value"]]
    },
    lead_image_url: {
      selectors: [['meta[name="og:image"]', "value"]]
    },
    content: {
      selectors: [".pane-node-body"],
      transforms: {
        ".pane-node-body": function paneNodeBody(e, t) {
          var n = Na(_s.lead_image_url.selectors[0], 2),
              r = n[0],
              a = n[1],
              i = t(r).attr(a);
          i && e.prepend('<img src="'.concat(i, '" />'));
        }
      },
      clean: []
    }
  },
      ws = {
    domain: "genius.com",
    title: {
      selectors: ["h1"]
    },
    author: {
      selectors: ["h2 a"]
    },
    date_published: {
      selectors: [["meta[itemprop=page_data]", "value", function (e) {
        return JSON.parse(e).song.release_date;
      }]]
    },
    dek: {
      selectors: []
    },
    lead_image_url: {
      selectors: [["meta[itemprop=page_data]", "value", function (e) {
        return JSON.parse(e).song.album.cover_art_url;
      }]]
    },
    content: {
      selectors: [".lyrics"],
      transforms: {},
      clean: []
    }
  },
      As = Object.freeze({
    BloggerExtractor: gs,
    NYMagExtractor: vs,
    WikipediaExtractor: {
      domain: "wikipedia.org",
      content: {
        selectors: ["#mw-content-text"],
        defaultCleaner: !1,
        transforms: {
          ".infobox img": function infoboxImg(e) {
            var t = e.parents(".infobox");
            0 === t.children("img").length && t.prepend(e);
          },
          ".infobox caption": "figcaption",
          ".infobox": "figure"
        },
        clean: [".mw-editsection", "figure tr, figure td, figure tbody", "#toc", ".navbox"]
      },
      author: "Wikipedia Contributors",
      title: {
        selectors: ["h2.title"]
      },
      date_published: {
        selectors: ["#footer-info-lastmod"]
      }
    },
    TwitterExtractor: {
      domain: "twitter.com",
      content: {
        transforms: {
          ".permalink[role=main]": function permalinkRoleMain(e, t) {
            var n = e.find(".tweet"),
                r = t('<div id="TWEETS_GO_HERE"></div>');
            r.append(n), e.replaceWith(r);
          },
          s: "span"
        },
        selectors: [".permalink[role=main]"],
        defaultCleaner: !1,
        clean: [".stream-item-footer", "button", ".tweet-details-fixer"]
      },
      author: {
        selectors: [".tweet.permalink-tweet .username"]
      },
      date_published: {
        selectors: [[".permalink-tweet ._timestamp[data-time-ms]", "data-time-ms"]]
      }
    },
    NYTimesExtractor: {
      domain: "www.nytimes.com",
      title: {
        selectors: ["h1.g-headline", 'h1[itemprop="headline"]', "h1.headline"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"], ".g-byline", ".byline"]
      },
      content: {
        selectors: ["div.g-blocks", "article#story"],
        transforms: {
          "img.g-lazy": function imgGLazy(e) {
            var t = e.attr("src");
            t = t.replace("{{size}}", 640), e.attr("src", t);
          }
        },
        clean: [".ad", "header#story-header", ".story-body-1 .lede.video", ".visually-hidden", "#newsletter-promo", ".promo", ".comments-button", ".hidden", ".comments", ".supplemental", ".nocontent", ".story-footer-links"]
      },
      date_published: {
        selectors: [['meta[name="article:published"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: null,
      next_page_url: null,
      excerpt: null
    },
    TheAtlanticExtractor: {
      domain: "www.theatlantic.com",
      title: {
        selectors: ["h1.hed"]
      },
      author: {
        selectors: ["article#article .article-cover-extra .metadata .byline a"]
      },
      content: {
        selectors: [[".article-cover figure.lead-img", ".article-body"], ".article-body"],
        transforms: [],
        clean: [".partner-box", ".callout"]
      },
      date_published: {
        selectors: [['time[itemProp="datePublished"]', "datetime"]]
      },
      lead_image_url: null,
      next_page_url: null,
      excerpt: null
    },
    NewYorkerExtractor: {
      domain: "www.newyorker.com",
      title: {
        selectors: ["h1.title"]
      },
      author: {
        selectors: [".contributors"]
      },
      content: {
        selectors: ["div#articleBody", "div.articleBody"],
        transforms: [],
        clean: []
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"], ['time[itemProp="datePublished"]', "content"]],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: [".dek", "h2.dek"]
      },
      next_page_url: null,
      excerpt: null
    },
    WiredExtractor: {
      domain: "www.wired.com",
      title: {
        selectors: ["h1.post-title"]
      },
      author: {
        selectors: ['a[rel="author"]']
      },
      content: {
        selectors: ["article.content"],
        transforms: [],
        clean: [".visually-hidden", "figcaption img.photo"]
      },
      date_published: {
        selectors: [['meta[itemprop="datePublished"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: null,
      excerpt: null
    },
    MSNExtractor: {
      domain: "www.msn.com",
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: ["span.authorname-txt"]
      },
      content: {
        selectors: ["div.richtext"],
        transforms: [],
        clean: ["span.caption"]
      },
      date_published: {
        selectors: ["span.time"]
      },
      lead_image_url: {
        selectors: []
      },
      dek: {
        selectors: []
      },
      next_page_url: null,
      excerpt: null
    },
    YahooExtractor: {
      domain: "www.yahoo.com",
      title: {
        selectors: ["header.canvas-header"]
      },
      author: {
        selectors: ["span.provider-name"]
      },
      content: {
        selectors: [".content-canvas"],
        transforms: [],
        clean: [".figure-caption"]
      },
      date_published: {
        selectors: [["time.date[datetime]", "datetime"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: null,
      excerpt: null
    },
    BuzzfeedExtractor: {
      domain: "www.buzzfeed.com",
      title: {
        selectors: ['h1[id="post-title"]']
      },
      author: {
        selectors: ['a[data-action="user/username"]', "byline__author"]
      },
      content: {
        selectors: [[".longform_custom_header_media", "#buzz_sub_buzz"], "#buzz_sub_buzz"],
        defaultCleaner: !1,
        transforms: {
          h2: "b",
          "div.longform_custom_header_media": function divLongform_custom_header_media(e) {
            return e.has("img") && e.has(".longform_header_image_source") ? "figure" : null;
          },
          "figure.longform_custom_header_media .longform_header_image_source": "figcaption"
        },
        clean: [".instapaper_ignore", ".suplist_list_hide .buzz_superlist_item .buzz_superlist_number_inline", ".share-box", ".print"]
      },
      date_published: {
        selectors: [".buzz-datetime"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: null,
      excerpt: null
    },
    WikiaExtractor: {
      domain: "fandom.wikia.com",
      title: {
        selectors: ["h1.entry-title"]
      },
      author: {
        selectors: [".author vcard", ".fn"]
      },
      content: {
        selectors: [".grid-content", ".entry-content"],
        transforms: [],
        clean: []
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: null,
      excerpt: null
    },
    LittleThingsExtractor: {
      domain: "www.littlethings.com",
      title: {
        selectors: ["h1.post-title"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      content: {
        selectors: [".mainContentIntro", ".content-wrapper"],
        transforms: [],
        clean: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      next_page_url: null,
      excerpt: null
    },
    PoliticoExtractor: {
      domain: "www.politico.com",
      title: {
        selectors: [['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: [".story-main-content .byline .vcard"]
      },
      content: {
        selectors: [".story-main-content", ".content-group", ".story-core", ".story-text"],
        transforms: [],
        clean: ["figcaption"]
      },
      date_published: {
        selectors: [[".story-main-content .timestamp time[datetime]", "datetime"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: null,
      excerpt: null
    },
    DeadspinExtractor: {
      domain: "deadspin.com",
      supportedDomains: ["jezebel.com", "lifehacker.com", "kotaku.com", "gizmodo.com", "jalopnik.com", "kinja.com", "avclub.com", "clickhole.com", "splinternews.com", "theonion.com", "theroot.com", "thetakeout.com", "theinventory.com"],
      title: {
        selectors: ["h1.headline"]
      },
      author: {
        selectors: [".author"]
      },
      content: {
        selectors: [".post-content", ".entry-content"],
        transforms: {
          'iframe.lazyload[data-recommend-id^="youtube://"]': function iframeLazyloadDataRecommendIdYoutube(e) {
            var t = e.attr("id").split("youtube-")[1];
            e.attr("src", "https://www.youtube.com/embed/".concat(t));
          }
        },
        clean: [".magnifier", ".lightbox"]
      },
      date_published: {
        selectors: [["time.updated[datetime]", "datetime"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: {
        selectors: []
      },
      excerpt: {
        selectors: []
      }
    },
    BroadwayWorldExtractor: {
      domain: "www.broadwayworld.com",
      title: {
        selectors: ["h1.article-title"]
      },
      author: {
        selectors: ["span[itemprop=author]"]
      },
      content: {
        selectors: ["div[itemprop=articlebody]"],
        transforms: {},
        clean: []
      },
      date_published: {
        selectors: [["meta[itemprop=datePublished]", "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      dek: {
        selectors: []
      },
      next_page_url: {
        selectors: []
      },
      excerpt: {
        selectors: []
      }
    },
    ApartmentTherapyExtractor: ys,
    MediumExtractor: bs,
    WwwTmzComExtractor: {
      domain: "www.tmz.com",
      title: {
        selectors: [".post-title-breadcrumb", "h1", ".headline"]
      },
      author: "TMZ STAFF",
      date_published: {
        selectors: [".article-posted-date"],
        timezone: "America/Los_Angeles"
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-content", ".all-post-body"],
        transforms: {},
        clean: [".lightbox-link"]
      }
    },
    WwwWashingtonpostComExtractor: {
      domain: "www.washingtonpost.com",
      title: {
        selectors: ["h1", "#topper-headline-wrapper"]
      },
      author: {
        selectors: [".pb-author-name"]
      },
      date_published: {
        selectors: [['.author-timestamp[itemprop="datePublished"]', "content"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-body"],
        transforms: {
          "div.inline-content": function divInlineContent(e) {
            return 0 < e.has("img,iframe,video").length ? "figure" : (e.remove(), null);
          },
          ".pb-caption": "figcaption"
        },
        clean: [".interstitial-link", ".newsletter-inline-unit"]
      }
    },
    WwwHuffingtonpostComExtractor: {
      domain: "www.huffingtonpost.com",
      title: {
        selectors: ["h1.headline__title"]
      },
      author: {
        selectors: ["span.author-card__details__name"]
      },
      date_published: {
        selectors: [['meta[name="article:modified_time"]', "value"], ['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: ["h2.headline__subtitle"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.entry__body"],
        defaultCleaner: !1,
        transforms: {},
        clean: [".pull-quote", ".tag-cloud", ".embed-asset", ".below-entry", ".entry-corrections", "#suggested-story"]
      }
    },
    NewrepublicComExtractor: {
      domain: "newrepublic.com",
      title: {
        selectors: ["h1.article-headline", ".minutes-primary h1.minute-title"]
      },
      author: {
        selectors: ["div.author-list", ".minutes-primary h3.minute-byline"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]],
        timezone: "America/New_York"
      },
      dek: {
        selectors: ["h2.article-subhead"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".article-cover", "div.content-body"], [".minute-image", ".minutes-primary div.content-body"]],
        transforms: {},
        clean: ["aside"]
      }
    },
    MoneyCnnComExtractor: {
      domain: "money.cnn.com",
      title: {
        selectors: [".article-title"]
      },
      author: {
        selectors: [".byline a"]
      },
      date_published: {
        selectors: [['meta[name="date"]', "value"]],
        timezone: "GMT"
      },
      dek: {
        selectors: ["#storytext h2"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#storytext"],
        transforms: {},
        clean: [".inStoryHeading"]
      }
    },
    WwwThevergeComExtractor: {
      domain: "www.theverge.com",
      supportedDomains: ["www.polygon.com"],
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: ["h2.p-dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".c-entry-hero .e-image", ".c-entry-intro", ".c-entry-content"], [".e-image--hero", ".c-entry-content"], ".l-wrapper .l-feature", "div.c-entry-content"],
        transforms: {
          noscript: function noscript(e) {
            var t = e.children();
            return 1 === t.length && "img" === t.get(0).tagName ? "span" : null;
          }
        },
        clean: [".aside", "img.c-dynamic-image"]
      }
    },
    WwwCnnComExtractor: {
      domain: "www.cnn.com",
      title: {
        selectors: ["h1.pg-headline", "h1"]
      },
      author: {
        selectors: [".metadata__byline__author"]
      },
      date_published: {
        selectors: [['meta[name="pubdate"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".media__video--thumbnail", ".zn-body-text"], ".zn-body-text", 'div[itemprop="articleBody"]'],
        transforms: {
          ".zn-body__paragraph, .el__leafmedia--sourced-paragraph": function znBody__paragraphEl__leafmediaSourcedParagraph(e) {
            return e.html() ? "p" : null;
          },
          ".zn-body__paragraph": function znBody__paragraph(e) {
            e.has("a") && e.text().trim() === e.find("a").text().trim() && e.remove();
          },
          ".media__video--thumbnail": "figure"
        },
        clean: []
      }
    },
    WwwAolComExtractor: {
      domain: "www.aol.com",
      title: {
        selectors: ["h1.p-article__title"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [".p-article__byline__date"],
        timezone: "America/New_York"
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-content"],
        transforms: {},
        clean: []
      }
    },
    WwwYoutubeComExtractor: {
      domain: "www.youtube.com",
      title: {
        selectors: [".watch-title", "h1.watch-title-container"]
      },
      author: {
        selectors: [".yt-user-info"]
      },
      date_published: {
        selectors: [['meta[itemProp="datePublished"]', "value"]],
        timezone: "GMT"
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        defaultCleaner: !1,
        selectors: [["#player-api", "#eow-description"]],
        transforms: {
          "#player-api": function playerApi(e, t) {
            var n = t('meta[itemProp="videoId"]').attr("value");
            e.html('\n          <iframe src="https://www.youtube.com/embed/'.concat(n, '" frameborder="0" allowfullscreen></iframe>'));
          }
        },
        clean: []
      }
    },
    WwwTheguardianComExtractor: {
      domain: "www.theguardian.com",
      title: {
        selectors: [".content__headline"]
      },
      author: {
        selectors: ["p.byline"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [".content__standfirst"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".content__article-body"],
        transforms: {},
        clean: [".hide-on-mobile", ".inline-icon"]
      }
    },
    WwwSbnationComExtractor: {
      domain: "www.sbnation.com",
      title: {
        selectors: ["h1.c-page-title"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: ["h2.c-entry-summary.p-dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.c-entry-content"],
        transforms: {},
        clean: []
      }
    },
    WwwBloombergComExtractor: {
      domain: "www.bloomberg.com",
      title: {
        selectors: [".lede-headline", "h1.article-title", "h1.lede-text-only__hed"]
      },
      author: {
        selectors: [['meta[name="parsely-author"]', "value"], ".byline-details__link", ".bydek", ".author"]
      },
      date_published: {
        selectors: [["time.published-at", "datetime"], ["time[datetime]", "datetime"], ['meta[name="date"]', "value"], ['meta[name="parsely-pub-date"]', "value"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-body__content", ["section.copy-block"], ".body-copy"],
        transforms: {},
        clean: [".inline-newsletter", ".page-ad"]
      }
    },
    WwwBustleComExtractor: {
      domain: "www.bustle.com",
      title: {
        selectors: ["h1.post-page__title"]
      },
      author: {
        selectors: ["div.content-meta__author"]
      },
      date_published: {
        selectors: [["time.content-meta__published-date[datetime]", "datetime"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".post-page__body"],
        transforms: {},
        clean: []
      }
    },
    WwwNprOrgExtractor: {
      domain: "www.npr.org",
      title: {
        selectors: ["h1", ".storytitle"]
      },
      author: {
        selectors: ["p.byline__name.byline__name--block"]
      },
      date_published: {
        selectors: [[".dateblock time[datetime]", "datetime"], ['meta[name="date"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"], ['meta[name="twitter:image:src"]', "value"]]
      },
      content: {
        selectors: [".storytext"],
        transforms: {
          ".bucketwrap.image": "figure",
          ".bucketwrap.image .credit-caption": "figcaption"
        },
        clean: ["div.enlarge_measure"]
      }
    },
    WwwRecodeNetExtractor: {
      domain: "www.recode.net",
      title: {
        selectors: ["h1.c-page-title"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: ["h2.c-entry-summary.p-dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["figure.e-image--hero", ".c-entry-content"], ".c-entry-content"],
        transforms: {},
        clean: []
      }
    },
    QzComExtractor: {
      domain: "qz.com",
      title: {
        selectors: ["header.item-header.content-width-responsive"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [".timestamp"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["figure.featured-image", ".item-body"], ".item-body"],
        transforms: {},
        clean: [".article-aside", ".progressive-image-thumbnail"]
      }
    },
    WwwDmagazineComExtractor: {
      domain: "www.dmagazine.com",
      title: {
        selectors: ["h1.story__title"]
      },
      author: {
        selectors: [".story__info .story__info__item:first-child"]
      },
      date_published: {
        selectors: [".story__info"],
        timezone: "America/Chicago"
      },
      dek: {
        selectors: [".story__subhead"]
      },
      lead_image_url: {
        selectors: [["article figure a:first-child", "href"]]
      },
      content: {
        selectors: [".story__content"],
        transforms: {},
        clean: []
      }
    },
    WwwReutersComExtractor: {
      domain: "www.reuters.com",
      title: {
        selectors: ["h1.article-headline"]
      },
      author: {
        selectors: [".author"]
      },
      date_published: {
        selectors: [['meta[name="og:article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#article-text"],
        transforms: {
          ".article-subtitle": "h4"
        },
        clean: ["#article-byline .author"]
      }
    },
    MashableComExtractor: {
      domain: "mashable.com",
      title: {
        selectors: ["h1.title"]
      },
      author: {
        selectors: ["span.author_name a"]
      },
      date_published: {
        selectors: [['meta[name="og:article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["section.article-content.blueprint"],
        transforms: {
          ".image-credit": "figcaption"
        },
        clean: []
      }
    },
    WwwChicagotribuneComExtractor: {
      domain: "www.chicagotribune.com",
      title: {
        selectors: ["h1.trb_ar_hl_t"]
      },
      author: {
        selectors: ["span.trb_ar_by_nm_au"]
      },
      date_published: {
        selectors: [['meta[itemprop="datePublished"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.trb_ar_page"],
        transforms: {},
        clean: []
      }
    },
    WwwVoxComExtractor: {
      domain: "www.vox.com",
      title: {
        selectors: ["h1.c-page-title"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [".p-dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["figure.e-image--hero", ".c-entry-content"], ".c-entry-content"],
        transforms: {
          "figure .e-image__image noscript": function figureEImage__imageNoscript(e) {
            var t = e.html();
            e.parents(".e-image__image").find(".c-dynamic-image").replaceWith(t);
          },
          "figure .e-image__meta": "figcaption"
        },
        clean: []
      }
    },
    NewsNationalgeographicComExtractor: {
      domain: "news.nationalgeographic.com",
      title: {
        selectors: ["h1", "h1.main-title"]
      },
      author: {
        selectors: [".byline-component__contributors b span"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]],
        format: "ddd MMM DD HH:mm:ss zz YYYY",
        timezone: "EST"
      },
      dek: {
        selectors: [".article__deck"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".parsys.content", ".__image-lead__"], ".content"],
        transforms: {
          ".parsys.content": function parsysContent(e, t) {
            var n = e.find(".image.parbase.section").find(".picturefill").first().data("platform-src");
            n && e.prepend(t('<img class="__image-lead__" src="'.concat(n, '"/>')));
          }
        },
        clean: [".pull-quote.pull-quote--large"]
      }
    },
    WwwNationalgeographicComExtractor: {
      domain: "www.nationalgeographic.com",
      title: {
        selectors: ["h1", "h1.main-title"]
      },
      author: {
        selectors: [".byline-component__contributors b span"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [".article__deck"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".parsys.content", ".__image-lead__"], ".content"],
        transforms: {
          ".parsys.content": function parsysContent(e, t) {
            var n = e.children().first();

            if (n.hasClass("imageGroup")) {
              var r = n.find(".media--medium__container").children().first(),
                  a = r.data("platform-image1-path"),
                  i = r.data("platform-image2-path");
              i && a && e.prepend(t('<div class="__image-lead__">\n                <img src="'.concat(a, '"/>\n                <img src="').concat(i, '"/>\n              </div>')));
            } else {
              var o = e.find(".image.parbase.section").find(".picturefill").first().data("platform-src");
              o && e.prepend(t('<img class="__image-lead__" src="'.concat(o, '"/>')));
            }
          }
        },
        clean: [".pull-quote.pull-quote--small"]
      }
    },
    WwwLatimesComExtractor: {
      domain: "www.latimes.com",
      title: {
        selectors: [".trb_ar_hl"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[itemprop="datePublished"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".trb_ar_main"],
        transforms: {
          ".trb_ar_la": function trb_ar_la(e) {
            var t = e.find("figure");
            e.replaceWith(t);
          }
        },
        clean: [".trb_ar_by", ".trb_ar_cr"]
      }
    },
    PagesixComExtractor: {
      domain: "pagesix.com",
      supportedDomains: ["nypost.com"],
      title: {
        selectors: ["h1 a"]
      },
      author: {
        selectors: [".byline"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [['meta[name="description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["#featured-image-wrapper", ".entry-content"], ".entry-content"],
        transforms: {
          "#featured-image-wrapper": "figure",
          ".wp-caption-text": "figcaption"
        },
        clean: [".modal-trigger"]
      }
    },
    ThefederalistpapersOrgExtractor: {
      domain: "thefederalistpapers.org",
      title: {
        selectors: ["h1.entry-title"]
      },
      author: {
        selectors: ["main span.entry-author-name"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry-content"],
        transforms: {},
        clean: [["p[style]"]]
      }
    },
    WwwCbssportsComExtractor: {
      domain: "www.cbssports.com",
      title: {
        selectors: [".article-headline"]
      },
      author: {
        selectors: [".author-name"]
      },
      date_published: {
        selectors: [[".date-original-reading-time time", "datetime"]],
        timezone: "UTC"
      },
      dek: {
        selectors: [".article-subline"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article"],
        transforms: {},
        clean: []
      }
    },
    WwwMsnbcComExtractor: _s,
    WwwThepoliticalinsiderComExtractor: {
      domain: "www.thepoliticalinsider.com",
      title: {
        selectors: [['meta[name="sailthru.title"]', "value"]]
      },
      author: {
        selectors: [['meta[name="sailthru.author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="sailthru.date"]', "value"]],
        timezone: "America/New_York"
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div#article-body"],
        transforms: {},
        clean: []
      }
    },
    WwwMentalflossComExtractor: {
      domain: "www.mentalfloss.com",
      title: {
        selectors: ["h1.title", ".title-group", ".inner"]
      },
      author: {
        selectors: [".field-name-field-enhanced-authors"]
      },
      date_published: {
        selectors: [".date-display-single"],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.field.field-name-body"],
        transforms: {},
        clean: []
      }
    },
    AbcnewsGoComExtractor: {
      domain: "abcnews.go.com",
      title: {
        selectors: [".article-header h1"]
      },
      author: {
        selectors: [".authors"],
        clean: [".author-overlay", ".by-text"]
      },
      date_published: {
        selectors: [".timestamp"],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-copy"],
        transforms: {},
        clean: []
      }
    },
    WwwNydailynewsComExtractor: {
      domain: "www.nydailynews.com",
      title: {
        selectors: ["h1#ra-headline"]
      },
      author: {
        selectors: [['meta[name="parsely-author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="sailthru.date"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["article#ra-body"],
        transforms: {},
        clean: ["dl#ra-tags", ".ra-related", "a.ra-editor", "dl#ra-share-bottom"]
      }
    },
    WwwCnbcComExtractor: {
      domain: "www.cnbc.com",
      title: {
        selectors: ["h1.title", "h1.ArticleHeader-headline"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div#article_body.content", "div.story", "div.ArticleBody-articleBody"],
        transforms: {},
        clean: []
      }
    },
    WwwPopsugarComExtractor: {
      domain: "www.popsugar.com",
      title: {
        selectors: ["h2.post-title", "title-text"]
      },
      author: {
        selectors: [['meta[name="article:author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#content"],
        transforms: {},
        clean: [".share-copy-title", ".post-tags", ".reactions"]
      }
    },
    ObserverComExtractor: {
      domain: "observer.com",
      title: {
        selectors: ["h1.entry-title"]
      },
      author: {
        selectors: [".author", ".vcard"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: ["h2.dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.entry-content"],
        transforms: {},
        clean: []
      }
    },
    PeopleComExtractor: {
      domain: "people.com",
      title: {
        selectors: [['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: ["a.author.url.fn"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.article-body__inner"],
        transforms: {},
        clean: []
      }
    },
    WwwUsmagazineComExtractor: {
      domain: "www.usmagazine.com",
      title: {
        selectors: ["header h1"]
      },
      author: {
        selectors: ["a.article-byline.tracked-offpage"]
      },
      date_published: {
        timezone: "America/New_York",
        selectors: ["time.article-published-date"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.article-body-inner"],
        transforms: {},
        clean: [".module-related"]
      }
    },
    WwwRollingstoneComExtractor: {
      domain: "www.rollingstone.com",
      title: {
        selectors: ["h1.content-title"]
      },
      author: {
        selectors: ["a.content-author.tracked-offpage"]
      },
      date_published: {
        selectors: ["time.content-published-date"],
        timezone: "America/New_York"
      },
      dek: {
        selectors: [".content-description"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".lead-container", ".article-content"], ".article-content"],
        transforms: {},
        clean: [".module-related"]
      }
    },
    twofortysevensportsComExtractor: {
      domain: "247sports.com",
      title: {
        selectors: ["title", "article header h1"]
      },
      author: {
        selectors: [".author"]
      },
      date_published: {
        selectors: [["time[data-published]", "data-published"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["section.body.article"],
        transforms: {},
        clean: []
      }
    },
    UproxxComExtractor: {
      domain: "uproxx.com",
      title: {
        selectors: ["div.post-top h1"]
      },
      author: {
        selectors: [".post-top .authorname"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".post-body"],
        transforms: {
          "div.image": "figure",
          "div.image .wp-media-credit": "figcaption"
        },
        clean: []
      }
    },
    WwwEonlineComExtractor: {
      domain: "www.eonline.com",
      title: {
        selectors: ["h1.article__title"]
      },
      author: {
        selectors: [".entry-meta__author a"]
      },
      date_published: {
        selectors: [['meta[itemprop="datePublished"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".post-content section, .post-content div.post-content__image"]],
        transforms: {
          "div.post-content__image": "figure",
          "div.post-content__image .image__credits": "figcaption"
        },
        clean: []
      }
    },
    WwwMiamiheraldComExtractor: {
      domain: "www.miamiherald.com",
      title: {
        selectors: ["h1.title"]
      },
      date_published: {
        selectors: ["p.published-date"],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.dateline-storybody"],
        transforms: {},
        clean: []
      }
    },
    WwwRefinery29ComExtractor: {
      domain: "www.refinery29.com",
      title: {
        selectors: ["h1.title"]
      },
      author: {
        selectors: [".contributor"]
      },
      date_published: {
        selectors: [['meta[name="sailthru.date"]', "value"]],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".full-width-opener", ".article-content"], ".article-content", ".body"],
        transforms: {
          "div.loading noscript": function divLoadingNoscript(e) {
            var t = e.html();
            e.parents(".loading").replaceWith(t);
          },
          ".section-image": "figure",
          ".section-image .content-caption": "figcaption",
          ".section-text": "p"
        },
        clean: [".story-share"]
      }
    },
    WwwMacrumorsComExtractor: {
      domain: "www.macrumors.com",
      title: {
        selectors: ["h1", "h1.title"]
      },
      author: {
        selectors: [".author-url"]
      },
      date_published: {
        selectors: [".article .byline"],
        format: "dddd MMMM D, YYYY h:mm A zz",
        timezone: "America/Los_Angeles"
      },
      dek: {
        selectors: [['meta[name="description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article"],
        transforms: {},
        clean: []
      }
    },
    WwwAndroidcentralComExtractor: {
      domain: "www.androidcentral.com",
      title: {
        selectors: ["h1", "h1.main-title"]
      },
      author: {
        selectors: [".meta-by"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [['meta[name="og:description"]', "value"]]
      },
      lead_image_url: {
        selectors: [[".image-large", "src"]]
      },
      content: {
        selectors: [".article-body"],
        transforms: {},
        clean: [".intro", "blockquote"]
      }
    },
    WwwSiComExtractor: {
      domain: "www.si.com",
      title: {
        selectors: ["h1", "h1.headline"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [".timestamp"],
        timezone: "America/New_York"
      },
      dek: {
        selectors: [".quick-hit ul"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["p", ".marquee_large_2x", ".component.image"]],
        transforms: {
          noscript: function noscript(e) {
            var t = e.children();
            return 1 === t.length && "img" === t.get(0).tagName ? "figure" : null;
          }
        },
        clean: [[".inline-thumb", ".primary-message", ".description", ".instructions"]]
      }
    },
    WwwRawstoryComExtractor: {
      domain: "www.rawstory.com",
      title: {
        selectors: [".blog-title"]
      },
      author: {
        selectors: [".blog-author a:first-of-type"]
      },
      date_published: {
        selectors: [".blog-author a:last-of-type"],
        timezone: "EST"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".blog-content"],
        transforms: {},
        clean: []
      }
    },
    WwwCnetComExtractor: {
      domain: "www.cnet.com",
      title: {
        selectors: [['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: ["a.author"]
      },
      date_published: {
        selectors: ["time"],
        timezone: "America/Los_Angeles"
      },
      dek: {
        selectors: [".article-dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["img.__image-lead__", ".article-main-body"], ".article-main-body"],
        transforms: {
          "figure.image": function figureImage(e) {
            var t = e.find("img");
            t.attr("width", "100%"), t.attr("height", "100%"), t.addClass("__image-lead__"), e.remove(".imgContainer").prepend(t);
          }
        },
        clean: []
      }
    },
    WwwCinemablendComExtractor: {
      domain: "www.cinemablend.com",
      title: {
        selectors: [".story_title"]
      },
      author: {
        selectors: [".author"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]],
        timezone: "EST"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div#wrap_left_content"],
        transforms: {},
        clean: []
      }
    },
    WwwTodayComExtractor: {
      domain: "www.today.com",
      title: {
        selectors: ["h1.entry-headline"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="DC.date.issued"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry-container"],
        transforms: {},
        clean: [".label-comment"]
      }
    },
    WwwHowtogeekComExtractor: {
      domain: "www.howtogeek.com",
      title: {
        selectors: ["title"]
      },
      author: {
        selectors: ["#authorinfobox a"]
      },
      date_published: {
        selectors: ["#authorinfobox + div li"],
        timezone: "GMT"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".thecontent"],
        transforms: {},
        clean: []
      }
    },
    WwwAlComExtractor: {
      domain: "www.al.com",
      title: {
        selectors: [['meta[name="title"]', "value"]]
      },
      author: {
        selectors: [['meta[name="article_author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article_date_original"]', "value"]],
        timezone: "EST"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry-content"],
        transforms: {},
        clean: []
      }
    },
    WwwThepennyhoarderComExtractor: {
      domain: "www.thepennyhoarder.com",
      title: {
        selectors: [['meta[name="dcterms.title"]', "value"]]
      },
      author: {
        selectors: [['link[rel="author"]', "title"]]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".post-img", ".post-text"], ".post-text"],
        transforms: {},
        clean: []
      }
    },
    WwwWesternjournalismComExtractor: {
      domain: "www.westernjournalism.com",
      title: {
        selectors: ["title", "h1.entry-title"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="DC.date.issued"]', "value"]]
      },
      dek: {
        selectors: [".subtitle"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.article-sharing.top + div"],
        transforms: {},
        clean: [".ad-notice-small"]
      }
    },
    FusionNetExtractor: {
      domain: "fusion.net",
      title: {
        selectors: [".post-title", ".single-title", ".headline"]
      },
      author: {
        selectors: [".show-for-medium .byline"]
      },
      date_published: {
        selectors: [["time.local-time", "datetime"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".post-featured-media", ".article-content"], ".article-content"],
        transforms: {
          ".fusion-youtube-oembed": "figure"
        },
        clean: []
      }
    },
    WwwAmericanowComExtractor: {
      domain: "www.americanow.com",
      title: {
        selectors: [".title", ['meta[name="title"]', "value"]]
      },
      author: {
        selectors: [".byline"]
      },
      date_published: {
        selectors: [['meta[name="publish_date"]', "value"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".article-content", ".image", ".body"], ".body"],
        transforms: {},
        clean: [".article-video-wrapper", ".show-for-small-only"]
      }
    },
    ScienceflyComExtractor: {
      domain: "sciencefly.com",
      title: {
        selectors: [".entry-title", ".cb-entry-title", ".cb-single-title"]
      },
      author: {
        selectors: ["div.cb-author", "div.cb-author-title"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [["div.theiaPostSlider_slides img", "src"]]
      },
      content: {
        selectors: ["div.theiaPostSlider_slides"],
        transforms: {},
        clean: []
      }
    },
    HellogigglesComExtractor: {
      domain: "hellogiggles.com",
      title: {
        selectors: [".title"]
      },
      author: {
        selectors: [".author-link"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry-content"],
        transforms: {},
        clean: []
      }
    },
    ThoughtcatalogComExtractor: {
      domain: "thoughtcatalog.com",
      title: {
        selectors: ["h1.title", ['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: ["div.col-xs-12.article_header div.writer-container.writer-container-inline.writer-no-avatar h4.writer-name", "h1.writer-name"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry.post"],
        transforms: {},
        clean: [".tc_mark"]
      }
    },
    WwwNjComExtractor: {
      domain: "www.nj.com",
      title: {
        selectors: [['meta[name="title"]', "value"]]
      },
      author: {
        selectors: [['meta[name="article_author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="article_date_original"]', "value"]],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry-content"],
        transforms: {},
        clean: []
      }
    },
    WwwInquisitrComExtractor: {
      domain: "www.inquisitr.com",
      title: {
        selectors: ["h1.entry-title.story--header--title"]
      },
      author: {
        selectors: ["div.story--header--author"]
      },
      date_published: {
        selectors: [['meta[name="datePublished"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["article.story", ".entry-content."],
        transforms: {},
        clean: [".post-category", ".story--header--socials", ".story--header--content"]
      }
    },
    WwwNbcnewsComExtractor: {
      domain: "www.nbcnews.com",
      title: {
        selectors: ["div.article-hed h1"]
      },
      author: {
        selectors: ["span.byline_author"]
      },
      date_published: {
        selectors: [[".flag_article-wrapper time.timestamp_article[datetime]", "datetime"], ".flag_article-wrapper time"],
        timezone: "America/New_York"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.article-body"],
        transforms: {},
        clean: []
      }
    },
    FortuneComExtractor: {
      domain: "fortune.com",
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: [['meta[name="author"]', "value"]]
      },
      date_published: {
        selectors: [".MblGHNMJ"],
        timezone: "UTC"
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["picture", "article.row"], "article.row"],
        transforms: {},
        clean: []
      }
    },
    WwwLinkedinComExtractor: {
      domain: "www.linkedin.com",
      title: {
        selectors: [".article-title", "h1"]
      },
      author: {
        selectors: [['meta[name="article:author"]', "value"], ".entity-name a[rel=author]"]
      },
      date_published: {
        selectors: [['time[itemprop="datePublished"]', "datetime"]],
        timezone: "America/Los_Angeles"
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["header figure", ".prose"], ".prose"],
        transforms: {},
        clean: [".entity-image"]
      }
    },
    ObamawhitehouseArchivesGovExtractor: {
      domain: "obamawhitehouse.archives.gov",
      supportedDomains: ["whitehouse.gov"],
      title: {
        selectors: ["h1", ".pane-node-title"]
      },
      author: {
        selectors: [".blog-author-link", ".node-person-name-link"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [".field-name-field-forall-summary"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        defaultCleaner: !1,
        selectors: ["div#content-start", ".pane-node-field-forall-body"],
        transforms: {},
        clean: [".pane-node-title", ".pane-custom.pane-1"]
      }
    },
    WwwOpposingviewsComExtractor: {
      domain: "www.opposingviews.com",
      title: {
        selectors: ["h1.title"]
      },
      author: {
        selectors: ["div.date span span a"]
      },
      date_published: {
        selectors: [['meta[name="publish_date"]', "value"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-content"],
        transforms: {},
        clean: [".show-for-small-only"]
      }
    },
    WwwProspectmagazineCoUkExtractor: {
      domain: "www.prospectmagazine.co.uk",
      title: {
        selectors: [".page-title"]
      },
      author: {
        selectors: [".aside_author .title"]
      },
      date_published: {
        selectors: [".post-info"],
        timezone: "Europe/London"
      },
      dek: {
        selectors: [".page-subtitle"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["article .post_content"],
        transforms: {},
        clean: []
      }
    },
    ForwardComExtractor: {
      domain: "forward.com",
      title: {
        selectors: [['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: [".author-name", ['meta[name="sailthru.author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="date"]', "value"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".post-item-media-wrap", ".post-item p"]],
        transforms: {},
        clean: [".donate-box", ".message", ".subtitle"]
      }
    },
    WwwQdailyComExtractor: {
      domain: "www.qdaily.com",
      title: {
        selectors: ["h2", "h2.title"]
      },
      author: {
        selectors: [".name"]
      },
      date_published: {
        selectors: [[".date.smart-date", "data-origindate"]]
      },
      dek: {
        selectors: [".excerpt"]
      },
      lead_image_url: {
        selectors: [[".article-detail-hd img", "src"]]
      },
      content: {
        selectors: [".detail"],
        transforms: {},
        clean: [".lazyload", ".lazylad", ".lazylood"]
      }
    },
    GothamistComExtractor: {
      domain: "gothamist.com",
      supportedDomains: ["chicagoist.com", "laist.com", "sfist.com", "shanghaiist.com", "dcist.com"],
      title: {
        selectors: ["h1", ".entry-header h1"]
      },
      author: {
        selectors: [".author"]
      },
      date_published: {
        selectors: ["abbr", "abbr.published"],
        timezone: "America/New_York"
      },
      dek: {
        selectors: [null]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".entry-body"],
        transforms: {
          "div.image-none": "figure",
          ".image-none i": "figcaption",
          "div.image-left": "figure",
          ".image-left i": "figcaption",
          "div.image-right": "figure",
          ".image-right i": "figcaption"
        },
        clean: [".image-none br", ".image-left br", ".image-right br", ".galleryEase"]
      }
    },
    WwwFoolComExtractor: {
      domain: "www.fool.com",
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: [".author-inline .author-name"]
      },
      date_published: {
        selectors: [['meta[name="date"]', "value"]]
      },
      dek: {
        selectors: ["header h2"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".article-content"],
        transforms: {
          ".caption img": function captionImg(e) {
            var t = e.attr("src");
            e.parent().replaceWith('<figure><img src="'.concat(t, '"/></figure>'));
          },
          ".caption": "figcaption"
        },
        clean: ["#pitch"]
      }
    },
    WwwSlateComExtractor: {
      domain: "www.slate.com",
      title: {
        selectors: [".hed", "h1"]
      },
      author: {
        selectors: ["a[rel=author]"]
      },
      date_published: {
        selectors: [".pub-date"],
        timezone: "America/New_York"
      },
      dek: {
        selectors: [".dek"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".body"],
        transforms: {},
        clean: [".about-the-author", ".pullquote", ".newsletter-signup-component", ".top-comment"]
      }
    },
    IciRadioCanadaCaExtractor: {
      domain: "ici.radio-canada.ca",
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: [['meta[name="dc.creator"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="dc.date.created"]', "value"]],
        timezone: "America/New_York"
      },
      dek: {
        selectors: [".bunker-component.lead"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [[".main-multimedia-item", ".news-story-content"]],
        transforms: {},
        clean: []
      }
    },
    WwwFortinetComExtractor: {
      domain: "www.fortinet.com",
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: [".b15-blog-meta__author"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12"],
        transforms: {
          noscript: function noscript(e) {
            var t = e.children();
            return 1 === t.length && "img" === t.get(0).tagName ? "figure" : null;
          }
        }
      }
    },
    WwwFastcompanyComExtractor: {
      domain: "www.fastcompany.com",
      title: {
        selectors: ["h1"]
      },
      author: {
        selectors: [".post__by"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [".post__deck"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [".post__article"]
      }
    },
    BlisterreviewComExtractor: {
      domain: "blisterreview.com",
      title: {
        selectors: [['meta[name="og:title"]', "value"], "h1.entry-title"]
      },
      author: {
        selectors: ["span.author-name"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"], ["time.entry-date", "datetime"], ['meta[itemprop="datePublished"]', "content"]]
      },
      dek: {
        selectors: []
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"], ['meta[property="og:image"]', "content"], ['meta[itemprop="image"]', "content"], ['meta[name="twitter:image"]', "content"], ["img.attachment-large", "src"]]
      },
      content: {
        selectors: [[".elementor-section-wrap", ".elementor-text-editor > p, .elementor-text-editor > ul > li, .attachment-large, .wp-caption-text"]],
        transforms: {
          figcaption: "p"
        },
        clean: [".comments-area"]
      }
    },
    NewsMynaviJpExtractor: {
      domain: "news.mynavi.jp",
      title: {
        selectors: [['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: ["main div.article-author a.article-author__name"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [['meta[name="og:description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["main article div"],
        transforms: {
          img: function img(e) {
            var t = e.attr("data-original");
            "" !== t && e.attr("src", t);
          }
        },
        clean: []
      }
    },
    GithubComExtractor: {
      domain: "github.com",
      title: {
        selectors: [['meta[name="og:title"]', "value"]]
      },
      author: {
        selectors: []
      },
      date_published: {
        selectors: [['span[itemprop="dateModified"] relative-time', "datetime"]]
      },
      dek: {
        selectors: ['span[itemprop="about"]']
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [["#readme article"]],
        transforms: {},
        clean: []
      }
    },
    WwwRedditComExtractor: {
      domain: "www.reddit.com",
      title: {
        selectors: ['div[data-test-id="post-content"] h2']
      },
      author: {
        selectors: ['div[data-test-id="post-content"] a[href*="user/"]']
      },
      date_published: {
        selectors: ['div[data-test-id="post-content"] a[data-click-id="timestamp"]']
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: [['div[data-test-id="post-content"] p'], ['div[data-test-id="post-content"] a[target="_blank"]:not([data-click-id="timestamp"])', 'div[data-test-id="post-content"] div[data-click-id="media"]'], ['div[data-test-id="post-content"] div[data-click-id="media"]'], ['div[data-test-id="post-content"] a[target="_blank"]:not([data-click-id="timestamp"])'], 'div[data-test-id="post-content"]'],
        transforms: {
          'div[role="img"]': function divRoleImg(e) {
            var t = e.find("img"),
                n = e.css("background-image");
            return 1 === t.length && n ? (t.attr("src", n.match(/\((.*?)\)/)[1].replace(/('|")/g, "")), t) : e;
          }
        },
        clean: [".icon"]
      }
    },
    OtrsComExtractor: {
      domain: "otrs.com",
      title: {
        selectors: ["#main article h1"]
      },
      author: {
        selectors: ["div.dateplusauthor a"]
      },
      date_published: {
        selectors: [['meta[name="article:published_time"]', "value"]]
      },
      dek: {
        selectors: [['meta[name="og:description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#main article"],
        defaultCleaner: !1,
        transforms: {},
        clean: ["div.dateplusauthor", "div.gr-12.push-6.footershare", "#atftbx", "div.category-modul"]
      }
    },
    WwwOssnewsJpExtractor: {
      domain: "www.ossnews.jp",
      title: {
        selectors: ["#alpha-block h1.hxnewstitle"]
      },
      author: null,
      date_published: null,
      dek: null,
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#alpha-block .section:has(h1.hxnewstitle)"],
        defaultCleaner: !1,
        transforms: {},
        clean: []
      }
    },
    BuzzapJpExtractor: {
      domain: "buzzap.jp",
      title: {
        selectors: ["h1.entry-title"]
      },
      author: null,
      date_published: {
        selectors: [["time.entry-date", "datetime"]]
      },
      dek: null,
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.ctiframe"],
        defaultCleaner: !1,
        transforms: {},
        clean: []
      }
    },
    WwwAsahiComExtractor: {
      domain: "www.asahi.com",
      title: {
        selectors: [".ArticleTitle h1"]
      },
      author: {
        selectors: [['meta[name="article:author"]', "value"]]
      },
      date_published: {
        selectors: [['meta[name="pubdate"]', "value"]]
      },
      dek: null,
      excerpt: {
        selectors: [['meta[name="og:description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#MainInner div.ArticleBody"],
        defaultCleaner: !1,
        transforms: {},
        clean: ["div.AdMod", "div.LoginSelectArea"]
      }
    },
    WwwSanwaCoJpExtractor: {
      domain: "www.sanwa.co.jp",
      title: {
        selectors: ["#newsContent h1"]
      },
      author: null,
      date_published: null,
      dek: {
        selectors: [['meta[name="og:description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#newsContent"],
        defaultCleaner: !1,
        transforms: {},
        clean: ["#smartphone", "div.sns_box", "div.contentFoot"]
      }
    },
    WwwElecomCoJpExtractor: {
      domain: "www.elecom.co.jp",
      title: {
        selectors: ["title"]
      },
      author: null,
      date_published: null,
      dek: null,
      lead_image_url: null,
      content: {
        selectors: ["td.TableMain2"],
        defaultCleaner: !1,
        transforms: {
          table: function table(e) {
            e.attr("width", "auto");
          }
        },
        clean: []
      }
    },
    ScanNetsecurityNeJpExtractor: {
      domain: "scan.netsecurity.ne.jp",
      title: {
        selectors: ["header.arti-header h1.head"]
      },
      author: null,
      date_published: {
        selectors: [['meta[name="article:modified_time"]', "value"]]
      },
      dek: {
        selectors: ["header.arti-header p.arti-summary"]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["div.arti-content.arti-content--thumbnail"],
        defaultCleaner: !1,
        transforms: {},
        clean: ["aside.arti-giga"]
      }
    },
    JvndbJvnJpExtractor: {
      domain: "jvndb.jvn.jp",
      title: {
        selectors: ["title"]
      },
      author: null,
      date_published: null,
      dek: null,
      lead_image_url: null,
      content: {
        selectors: ["#news-list"],
        defaultCleaner: !1,
        transforms: {},
        clean: []
      }
    },
    GeniusComExtractor: ws,
    WwwJnsaOrgExtractor: {
      domain: "www.jnsa.org",
      title: {
        selectors: ["#wgtitle h2"]
      },
      author: null,
      date_published: null,
      dek: null,
      excerpt: {
        selectors: [['meta[name="og:description"]', "value"]]
      },
      lead_image_url: {
        selectors: [['meta[name="og:image"]', "value"]]
      },
      content: {
        selectors: ["#main_area"],
        transforms: {},
        clean: ["#pankuzu", "#side"]
      }
    }
  }),
      xs = ut(As).reduce(function (e, t) {
    var n,
        r = As[t];
    return pt({}, e, (n = r).supportedDomains ? ms(n, [n.domain].concat(Li(n.supportedDomains))) : ms(n, [n.domain]));
  }, {}),
      ks = e(function (e, t) {
    (function () {
      var r = "‎",
          a = "‏",
          m = "ltr",
          g = "rtl",
          i = "bidi",
          o = "",
          v = {
        Hebrew: ["0590", "05FF"],
        Arabic: ["0600", "06FF"],
        NKo: ["07C0", "07FF"],
        Syriac: ["0700", "074F"],
        Thaana: ["0780", "07BF"],
        Tifinagh: ["2D30", "2D7F"]
      };

      function e(e) {
        if (void 0 === e) throw new Error("TypeError missing argument");
        if ("string" != typeof e) throw new Error("TypeError getDirection expects strings");
        if ("" === e) return o;
        if (-1 < e.indexOf(r) && -1 < e.indexOf(a)) return i;
        if (-1 < e.indexOf(r)) return m;
        if (-1 < e.indexOf(a)) return g;
        var t = s(e, g),
            n = s(e, m);
        return t && n ? i : n ? m : t ? g : o;
      }

      function s(e, t) {
        var n,
            r,
            a,
            i,
            o,
            s,
            c,
            l,
            u,
            f,
            d,
            h = !1,
            p = !1;

        for (o = -1 < e.search(/[0-9]/), e = e.replace(/[\s\n\0\f\t\v\'\"\-0-9\+\?\!]+/gm, ""), n = 0; n < e.length; n++) {
          for (a in r = e.charAt(n), i = !1, v) {
            v.hasOwnProperty(a) && (s = r, c = v[a][0], l = v[a][1], void 0, u = s.charCodeAt(0), f = parseInt(c, 16), d = parseInt(l, 16), f < u && u < d && (i = h = !0));
          }

          !1 === i && (p = !0);
        }

        return t === g ? h : t === m ? p || !h && o : void 0;
      }

      t.getDirection = e, t.patch = function () {
        String.prototype.getDirection = function () {
          return e(this.valueOf());
        };
      };
    }).call(this);
  }),
      Ss = (ks.getDirection, ks.patch, /^\s*(posted |written )?by\s*:?\s*(.*)/i),
      Es = new RegExp("http(s)?://", "i"),
      Ms = /^\d{13}$/i,
      Ts = /^\d{10}$/i,
      Cs = /^\s*published\s*:?\s*(.*)/i,
      Ds = /(.*\d)(am|pm)(.*)/i,
      Os = /\.m\./i,
      Ns = /^\s*(just|right)?\s*now\s*/i,
      js = ["seconds?", "minutes?", "hours?", "days?", "weeks?", "months?", "years?"].join("|"),
      Ps = new RegExp("(\\d+)\\s+(".concat(js, ")\\s+ago"), "i"),
      zs = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].join("|"),
      Ls = new RegExp("(".concat("[0-9]{1,2}:[0-9]{2,2}( ?[ap].?m.?)?", ")|(").concat("[0-9]{1,2}[/-][0-9]{1,2}[/-][0-9]{2,4}", ")|(").concat("-[0-9]{3,4}$", ")|([0-9]{1,4})|(").concat(zs, ")"), "ig"),
      Rs = /-\d{3,4}$/,
      Ys = /(: | - | \| )/g,
      Ws = new RegExp(".com$|.net$|.org$|.co.uk$", "g");

  function qs(e) {
    return ca(e.replace(Ss, "$2").trim());
  }

  var Is = e(function (e) {
    !function (e) {
      e.exports.is_uri = f, e.exports.is_http_uri = t, e.exports.is_https_uri = n, e.exports.is_web_uri = r, e.exports.isUri = f, e.exports.isHttpUri = t, e.exports.isHttpsUri = n, e.exports.isWebUri = r;

      var u = function u(e) {
        return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
      };

      function f(e) {
        if (e && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) && !/%[^0-9a-f]/i.test(e) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)) {
          var t,
              n,
              r,
              a,
              i,
              o = "",
              s = "";

          if (o = (t = u(e))[1], n = t[2], r = t[3], a = t[4], i = t[5], o && o.length && 0 <= r.length) {
            if (n && n.length) {
              if (0 !== r.length && !/^\//.test(r)) return;
            } else if (/^\/\//.test(r)) return;

            if (/^[a-z][a-z0-9\+\-\.]*$/.test(o.toLowerCase())) return s += o + ":", n && n.length && (s += "//" + n), s += r, a && a.length && (s += "?" + a), i && i.length && (s += "#" + i), s;
          }
        }
      }

      function t(e, t) {
        if (f(e)) {
          var n,
              r,
              a,
              i,
              o = "",
              s = "",
              c = "",
              l = "";

          if (o = (n = u(e))[1], s = n[2], r = n[3], a = n[4], i = n[5], o) {
            if (t) {
              if ("https" != o.toLowerCase()) return;
            } else if ("http" != o.toLowerCase()) return;

            if (s) return /:(\d+)$/.test(s) && (c = s.match(/:(\d+)$/)[0], s = s.replace(/:\d+$/, "")), l += o + ":", l += "//" + s, c && (l += c), l += r, a && a.length && (l += "?" + a), i && i.length && (l += "#" + i), l;
          }
        }
      }

      function n(e) {
        return t(e, !0);
      }

      function r(e) {
        return t(e) || n(e);
      }
    }(e);
  });

  function Hs(e) {
    return e = e.trim(), Is.isWebUri(e) ? e : null;
  }

  var Fs = e(function (Un, e) {
    Un.exports = function () {
      var e, a;

      function g() {
        return e.apply(null, arguments);
      }

      function s(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
      }

      function c(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e);
      }

      function i(e) {
        return void 0 === e;
      }

      function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
      }

      function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
      }

      function l(e, t) {
        var n,
            r = [];

        for (n = 0; n < e.length; ++n) {
          r.push(t(e[n], n));
        }

        return r;
      }

      function v(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      function f(e, t) {
        for (var n in t) {
          v(t, n) && (e[n] = t[n]);
        }

        return v(t, "toString") && (e.toString = t.toString), v(t, "valueOf") && (e.valueOf = t.valueOf), e;
      }

      function d(e, t, n, r) {
        return Ct(e, t, n, r, !0).utc();
      }

      function y(e) {
        return null == e._pf && (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        }), e._pf;
      }

      function h(e) {
        if (null == e._isValid) {
          var t = y(e),
              n = a.call(t.parsedDateParts, function (e) {
            return null != e;
          }),
              r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
          if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
          e._isValid = r;
        }

        return e._isValid;
      }

      function p(e) {
        var t = d(NaN);
        return null != e ? f(y(t), e) : y(t).userInvalidated = !0, t;
      }

      a = Array.prototype.some ? Array.prototype.some : function (e) {
        for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++) {
          if (r in t && e.call(this, t[r], r, t)) return !0;
        }

        return !1;
      };
      var m = g.momentProperties = [];

      function b(e, t) {
        var n, r, a;
        if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = y(t)), i(t._locale) || (e._locale = t._locale), 0 < m.length) for (n = 0; n < m.length; n++) {
          r = m[n], i(a = t[r]) || (e[r] = a);
        }
        return e;
      }

      var t = !1;

      function _(e) {
        b(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, g.updateOffset(this), t = !1);
      }

      function w(e) {
        return e instanceof _ || null != e && null != e._isAMomentObject;
      }

      function A(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }

      function x(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = A(t)), n;
      }

      function k(e, t, n) {
        var r,
            a = Math.min(e.length, t.length),
            i = Math.abs(e.length - t.length),
            o = 0;

        for (r = 0; r < a; r++) {
          (n && e[r] !== t[r] || !n && x(e[r]) !== x(t[r])) && o++;
        }

        return o + i;
      }

      function S(e) {
        !1 === g.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
      }

      function n(a, i) {
        var o = !0;
        return f(function () {
          if (null != g.deprecationHandler && g.deprecationHandler(null, a), o) {
            for (var e, t = [], n = 0; n < arguments.length; n++) {
              if (e = "", "object" == _typeof(arguments[n])) {
                for (var r in e += "\n[" + n + "] ", arguments[0]) {
                  e += r + ": " + arguments[0][r] + ", ";
                }

                e = e.slice(0, -2);
              } else e = arguments[n];

              t.push(e);
            }

            S(a + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + new Error().stack), o = !1;
          }

          return i.apply(this, arguments);
        }, i);
      }

      var r,
          E = {};

      function M(e, t) {
        null != g.deprecationHandler && g.deprecationHandler(e, t), E[e] || (S(t), E[e] = !0);
      }

      function T(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
      }

      function C(e, t) {
        var n,
            r = f({}, e);

        for (n in t) {
          v(t, n) && (c(e[n]) && c(t[n]) ? (r[n] = {}, f(r[n], e[n]), f(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
        }

        for (n in e) {
          v(e, n) && !v(t, n) && c(e[n]) && (r[n] = f({}, r[n]));
        }

        return r;
      }

      function D(e) {
        null != e && this.set(e);
      }

      g.suppressDeprecationWarnings = !1, g.deprecationHandler = null, r = Object.keys ? Object.keys : function (e) {
        var t,
            n = [];

        for (t in e) {
          v(e, t) && n.push(t);
        }

        return n;
      };
      var O = {};

      function N(e, t) {
        var n = e.toLowerCase();
        O[n] = O[n + "s"] = O[t] = e;
      }

      function j(e) {
        return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0;
      }

      function P(e) {
        var t,
            n,
            r = {};

        for (n in e) {
          v(e, n) && (t = j(n)) && (r[t] = e[n]);
        }

        return r;
      }

      var z = {};

      function L(e, t) {
        z[e] = t;
      }

      function R(e) {
        var t = [];

        for (var n in e) {
          t.push({
            unit: n,
            priority: z[n]
          });
        }

        return t.sort(function (e, t) {
          return e.priority - t.priority;
        }), t;
      }

      function Y(e, t, n) {
        var r = "" + Math.abs(e),
            a = t - r.length,
            i = 0 <= e;
        return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
      }

      var W = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          I = {},
          H = {};

      function F(e, t, n, r) {
        var a = r;
        "string" == typeof r && (a = function a() {
          return this[r]();
        }), e && (H[e] = a), t && (H[t[0]] = function () {
          return Y(a.apply(this, arguments), t[1], t[2]);
        }), n && (H[n] = function () {
          return this.localeData().ordinal(a.apply(this, arguments), e);
        });
      }

      function B(e, t) {
        return e.isValid() ? (t = G(t, e.localeData()), I[t] = I[t] || function (r) {
          var e,
              a,
              t,
              i = r.match(W);

          for (e = 0, a = i.length; e < a; e++) {
            H[i[e]] ? i[e] = H[i[e]] : i[e] = (t = i[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
          }

          return function (e) {
            var t,
                n = "";

            for (t = 0; t < a; t++) {
              n += T(i[t]) ? i[t].call(e, r) : i[t];
            }

            return n;
          };
        }(t), I[t](e)) : e.localeData().invalidDate();
      }

      function G(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e;
        }

        for (q.lastIndex = 0; 0 <= n && q.test(e);) {
          e = e.replace(q, r), q.lastIndex = 0, n -= 1;
        }

        return e;
      }

      var U = /\d/,
          $ = /\d\d/,
          V = /\d{3}/,
          K = /\d{4}/,
          J = /[+-]?\d{6}/,
          X = /\d\d?/,
          Z = /\d\d\d\d?/,
          Q = /\d\d\d\d\d\d?/,
          ee = /\d{1,3}/,
          te = /\d{1,4}/,
          ne = /[+-]?\d{1,6}/,
          re = /\d+/,
          ae = /[+-]?\d+/,
          ie = /Z|[+-]\d\d:?\d\d/gi,
          oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
          se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          ce = {};

      function le(e, n, r) {
        ce[e] = T(n) ? n : function (e, t) {
          return e && r ? r : n;
        };
      }

      function ue(e, t) {
        return v(ce, e) ? ce[e](t._strict, t._locale) : new RegExp(fe(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, a) {
          return t || n || r || a;
        })));
      }

      function fe(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }

      var de = {};

      function he(e, n) {
        var t,
            r = n;

        for ("string" == typeof e && (e = [e]), u(n) && (r = function r(e, t) {
          t[n] = x(e);
        }), t = 0; t < e.length; t++) {
          de[e[t]] = r;
        }
      }

      function pe(e, a) {
        he(e, function (e, t, n, r) {
          n._w = n._w || {}, a(e, n._w, n, r);
        });
      }

      var me = 0,
          ge = 1,
          ve = 2,
          ye = 3,
          be = 4,
          _e = 5,
          we = 6,
          Ae = 7,
          xe = 8;

      function ke(e) {
        return Se(e) ? 366 : 365;
      }

      function Se(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
      }

      F("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e;
      }), F(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }), F(0, ["YYYY", 4], 0, "year"), F(0, ["YYYYY", 5], 0, "year"), F(0, ["YYYYYY", 6, !0], 0, "year"), N("year", "y"), L("year", 1), le("Y", ae), le("YY", X, $), le("YYYY", te, K), le("YYYYY", ne, J), le("YYYYYY", ne, J), he(["YYYYY", "YYYYYY"], me), he("YYYY", function (e, t) {
        t[me] = 2 === e.length ? g.parseTwoDigitYear(e) : x(e);
      }), he("YY", function (e, t) {
        t[me] = g.parseTwoDigitYear(e);
      }), he("Y", function (e, t) {
        t[me] = parseInt(e, 10);
      }), g.parseTwoDigitYear = function (e) {
        return x(e) + (68 < x(e) ? 1900 : 2e3);
      };
      var Ee,
          Me = Te("FullYear", !0);

      function Te(t, n) {
        return function (e) {
          return null != e ? (De(this, t, e), g.updateOffset(this, n), this) : Ce(this, t);
        };
      }

      function Ce(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
      }

      function De(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && Se(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
      }

      function Oe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n,
            r = (t % (n = 12) + n) % n;
        return e += (t - r) / 12, 1 === r ? Se(e) ? 29 : 28 : 31 - r % 7 % 2;
      }

      Ee = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
        var t;

        for (t = 0; t < this.length; ++t) {
          if (this[t] === e) return t;
        }

        return -1;
      }, F("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
      }), F("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
      }), F("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e);
      }), N("month", "M"), L("month", 8), le("M", X), le("MM", X, $), le("MMM", function (e, t) {
        return t.monthsShortRegex(e);
      }), le("MMMM", function (e, t) {
        return t.monthsRegex(e);
      }), he(["M", "MM"], function (e, t) {
        t[ge] = x(e) - 1;
      }), he(["MMM", "MMMM"], function (e, t, n, r) {
        var a = n._locale.monthsParse(e, r, n._strict);

        null != a ? t[ge] = a : y(n).invalidMonth = e;
      });
      var Ne = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          je = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

      function ze(e, t, n) {
        var r,
            a,
            i,
            o = e.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) {
          i = d([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
        }
        return n ? "MMM" === t ? -1 !== (a = Ee.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = Ee.call(this._longMonthsParse, o)) ? a : null : "MMM" === t ? -1 !== (a = Ee.call(this._shortMonthsParse, o)) ? a : -1 !== (a = Ee.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = Ee.call(this._longMonthsParse, o)) ? a : -1 !== (a = Ee.call(this._shortMonthsParse, o)) ? a : null;
      }

      function Le(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = x(t);else if (!u(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
      }

      function Re(e) {
        return null != e ? (Le(this, e), g.updateOffset(this, !0), this) : Ce(this, "Month");
      }

      var Ye = se,
          We = se;

      function qe() {
        function e(e, t) {
          return t.length - e.length;
        }

        var t,
            n,
            r = [],
            a = [],
            i = [];

        for (t = 0; t < 12; t++) {
          n = d([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
        }

        for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++) {
          r[t] = fe(r[t]), a[t] = fe(a[t]);
        }

        for (t = 0; t < 24; t++) {
          i[t] = fe(i[t]);
        }

        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
      }

      function Ie(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t;
      }

      function He(e, t, n) {
        var r = 7 + t - n,
            a = (7 + Ie(e, 0, r).getUTCDay() - t) % 7;
        return -a + r - 1;
      }

      function Fe(e, t, n, r, a) {
        var i,
            o,
            s = (7 + n - r) % 7,
            c = He(e, r, a),
            l = 1 + 7 * (t - 1) + s + c;
        return o = l <= 0 ? ke(i = e - 1) + l : l > ke(e) ? (i = e + 1, l - ke(e)) : (i = e, l), {
          year: i,
          dayOfYear: o
        };
      }

      function Be(e, t, n) {
        var r,
            a,
            i = He(e.year(), t, n),
            o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return o < 1 ? (a = e.year() - 1, r = o + Ge(a, t, n)) : o > Ge(e.year(), t, n) ? (r = o - Ge(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = o), {
          week: r,
          year: a
        };
      }

      function Ge(e, t, n) {
        var r = He(e, t, n),
            a = He(e + 1, t, n);
        return (ke(e) - r + a) / 7;
      }

      F("w", ["ww", 2], "wo", "week"), F("W", ["WW", 2], "Wo", "isoWeek"), N("week", "w"), N("isoWeek", "W"), L("week", 5), L("isoWeek", 5), le("w", X), le("ww", X, $), le("W", X), le("WW", X, $), pe(["w", "ww", "W", "WW"], function (e, t, n, r) {
        t[r.substr(0, 1)] = x(e);
      }), F("d", 0, "do", "day"), F("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
      }), F("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
      }), F("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
      }), F("e", 0, 0, "weekday"), F("E", 0, 0, "isoWeekday"), N("day", "d"), N("weekday", "e"), N("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), le("d", X), le("e", X), le("E", X), le("dd", function (e, t) {
        return t.weekdaysMinRegex(e);
      }), le("ddd", function (e, t) {
        return t.weekdaysShortRegex(e);
      }), le("dddd", function (e, t) {
        return t.weekdaysRegex(e);
      }), pe(["dd", "ddd", "dddd"], function (e, t, n, r) {
        var a = n._locale.weekdaysParse(e, r, n._strict);

        null != a ? t.d = a : y(n).invalidWeekday = e;
      }), pe(["d", "e", "E"], function (e, t, n, r) {
        t[r] = x(e);
      });
      var Ue = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Ve = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

      function Ke(e, t, n) {
        var r,
            a,
            i,
            o = e.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) {
          i = d([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
        }
        return n ? "dddd" === t ? -1 !== (a = Ee.call(this._weekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Ee.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = Ee.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === t ? -1 !== (a = Ee.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ee.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ee.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === t ? -1 !== (a = Ee.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = Ee.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ee.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = Ee.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = Ee.call(this._weekdaysParse, o)) ? a : -1 !== (a = Ee.call(this._shortWeekdaysParse, o)) ? a : null;
      }

      var Je = se,
          Xe = se,
          Ze = se;

      function Qe() {
        function e(e, t) {
          return t.length - e.length;
        }

        var t,
            n,
            r,
            a,
            i,
            o = [],
            s = [],
            c = [],
            l = [];

        for (t = 0; t < 7; t++) {
          n = d([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), o.push(r), s.push(a), c.push(i), l.push(r), l.push(a), l.push(i);
        }

        for (o.sort(e), s.sort(e), c.sort(e), l.sort(e), t = 0; t < 7; t++) {
          s[t] = fe(s[t]), c[t] = fe(c[t]), l[t] = fe(l[t]);
        }

        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
      }

      function et() {
        return this.hours() % 12 || 12;
      }

      function tt(e, t) {
        F(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
      }

      function nt(e, t) {
        return t._meridiemParse;
      }

      F("H", ["HH", 2], 0, "hour"), F("h", ["hh", 2], 0, et), F("k", ["kk", 2], 0, function () {
        return this.hours() || 24;
      }), F("hmm", 0, 0, function () {
        return "" + et.apply(this) + Y(this.minutes(), 2);
      }), F("hmmss", 0, 0, function () {
        return "" + et.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2);
      }), F("Hmm", 0, 0, function () {
        return "" + this.hours() + Y(this.minutes(), 2);
      }), F("Hmmss", 0, 0, function () {
        return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2);
      }), tt("a", !0), tt("A", !1), N("hour", "h"), L("hour", 13), le("a", nt), le("A", nt), le("H", X), le("h", X), le("k", X), le("HH", X, $), le("hh", X, $), le("kk", X, $), le("hmm", Z), le("hmmss", Q), le("Hmm", Z), le("Hmmss", Q), he(["H", "HH"], ye), he(["k", "kk"], function (e, t, n) {
        var r = x(e);
        t[ye] = 24 === r ? 0 : r;
      }), he(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e;
      }), he(["h", "hh"], function (e, t, n) {
        t[ye] = x(e), y(n).bigHour = !0;
      }), he("hmm", function (e, t, n) {
        var r = e.length - 2;
        t[ye] = x(e.substr(0, r)), t[be] = x(e.substr(r)), y(n).bigHour = !0;
      }), he("hmmss", function (e, t, n) {
        var r = e.length - 4,
            a = e.length - 2;
        t[ye] = x(e.substr(0, r)), t[be] = x(e.substr(r, 2)), t[_e] = x(e.substr(a)), y(n).bigHour = !0;
      }), he("Hmm", function (e, t, n) {
        var r = e.length - 2;
        t[ye] = x(e.substr(0, r)), t[be] = x(e.substr(r));
      }), he("Hmmss", function (e, t, n) {
        var r = e.length - 4,
            a = e.length - 2;
        t[ye] = x(e.substr(0, r)), t[be] = x(e.substr(r, 2)), t[_e] = x(e.substr(a));
      });
      var rt,
          at = Te("Hours", !0),
          it = {
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        longDateFormat: {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        months: je,
        monthsShort: Pe,
        week: {
          dow: 0,
          doy: 6
        },
        weekdays: Ue,
        weekdaysMin: Ve,
        weekdaysShort: $e,
        meridiemParse: /[ap]\.?m?\.?/i
      },
          ot = {},
          st = {};

      function ct(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
      }

      function lt(e) {
        var t = null;
        if (!ot[e] && Un && Un.exports) try {
          t = rt._abbr;
          var n = $n;
          n("./locale/" + e), ut(t);
        } catch (e) {}
        return ot[e];
      }

      function ut(e, t) {
        var n;
        return e && ((n = i(t) ? dt(e) : ft(e, t)) ? rt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), rt._abbr;
      }

      function ft(e, t) {
        if (null === t) return delete ot[e], null;
        var n,
            r = it;
        if (t.abbr = e, null != ot[e]) M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = ot[e]._config;else if (null != t.parentLocale) if (null != ot[t.parentLocale]) r = ot[t.parentLocale]._config;else {
          if (null == (n = lt(t.parentLocale))) return st[t.parentLocale] || (st[t.parentLocale] = []), st[t.parentLocale].push({
            name: e,
            config: t
          }), null;
          r = n._config;
        }
        return ot[e] = new D(C(r, t)), st[e] && st[e].forEach(function (e) {
          ft(e.name, e.config);
        }), ut(e), ot[e];
      }

      function dt(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return rt;

        if (!s(e)) {
          if (t = lt(e)) return t;
          e = [e];
        }

        return function (e) {
          for (var t, n, r, a, i = 0; i < e.length;) {
            for (a = ct(e[i]).split("-"), t = a.length, n = (n = ct(e[i + 1])) ? n.split("-") : null; 0 < t;) {
              if (r = lt(a.slice(0, t).join("-"))) return r;
              if (n && n.length >= t && k(a, n, !0) >= t - 1) break;
              t--;
            }

            i++;
          }

          return rt;
        }(e);
      }

      function ht(e) {
        var t,
            n = e._a;
        return n && -2 === y(e).overflow && (t = n[ge] < 0 || 11 < n[ge] ? ge : n[ve] < 1 || n[ve] > Oe(n[me], n[ge]) ? ve : n[ye] < 0 || 24 < n[ye] || 24 === n[ye] && (0 !== n[be] || 0 !== n[_e] || 0 !== n[we]) ? ye : n[be] < 0 || 59 < n[be] ? be : n[_e] < 0 || 59 < n[_e] ? _e : n[we] < 0 || 999 < n[we] ? we : -1, y(e)._overflowDayOfYear && (t < me || ve < t) && (t = ve), y(e)._overflowWeeks && -1 === t && (t = Ae), y(e)._overflowWeekday && -1 === t && (t = xe), y(e).overflow = t), e;
      }

      function pt(e, t, n) {
        return null != e ? e : null != t ? t : n;
      }

      function mt(e) {
        var t,
            n,
            r,
            a,
            i,
            o,
            s,
            c = [];

        if (!e._d) {
          for (o = e, s = void 0, s = new Date(g.now()), r = o._useUTC ? [s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()] : [s.getFullYear(), s.getMonth(), s.getDate()], e._w && null == e._a[ve] && null == e._a[ge] && function (e) {
            var t, n, r, a, i, o, s, c;
            if (null != (t = e._w).GG || null != t.W || null != t.E) i = 1, o = 4, n = pt(t.GG, e._a[me], Be(Dt(), 1, 4).year), r = pt(t.W, 1), ((a = pt(t.E, 1)) < 1 || 7 < a) && (c = !0);else {
              i = e._locale._week.dow, o = e._locale._week.doy;
              var l = Be(Dt(), i, o);
              n = pt(t.gg, e._a[me], l.year), r = pt(t.w, l.week), null != t.d ? ((a = t.d) < 0 || 6 < a) && (c = !0) : null != t.e ? (a = t.e + i, (t.e < 0 || 6 < t.e) && (c = !0)) : a = i;
            }
            r < 1 || r > Ge(n, i, o) ? y(e)._overflowWeeks = !0 : null != c ? y(e)._overflowWeekday = !0 : (s = Fe(n, r, a, i, o), e._a[me] = s.year, e._dayOfYear = s.dayOfYear);
          }(e), null != e._dayOfYear && (i = pt(e._a[me], r[me]), (e._dayOfYear > ke(i) || 0 === e._dayOfYear) && (y(e)._overflowDayOfYear = !0), n = Ie(i, 0, e._dayOfYear), e._a[ge] = n.getUTCMonth(), e._a[ve] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
            e._a[t] = c[t] = r[t];
          }

          for (; t < 7; t++) {
            e._a[t] = c[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          }

          24 === e._a[ye] && 0 === e._a[be] && 0 === e._a[_e] && 0 === e._a[we] && (e._nextDay = !0, e._a[ye] = 0), e._d = (e._useUTC ? Ie : function (e, t, n, r, a, i, o) {
            var s = new Date(e, t, n, r, a, i, o);
            return e < 100 && 0 <= e && isFinite(s.getFullYear()) && s.setFullYear(e), s;
          }).apply(null, c), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (y(e).weekdayMismatch = !0);
        }
      }

      var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          vt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          yt = /Z|[+-]\d\d(?::?\d\d)?/,
          bt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
          _t = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
          wt = /^\/?Date\((\-?\d+)/i;

      function At(e) {
        var t,
            n,
            r,
            a,
            i,
            o,
            s = e._i,
            c = gt.exec(s) || vt.exec(s);

        if (c) {
          for (y(e).iso = !0, t = 0, n = bt.length; t < n; t++) {
            if (bt[t][1].exec(c[1])) {
              a = bt[t][0], r = !1 !== bt[t][2];
              break;
            }
          }

          if (null == a) return void (e._isValid = !1);

          if (c[3]) {
            for (t = 0, n = _t.length; t < n; t++) {
              if (_t[t][1].exec(c[3])) {
                i = (c[2] || " ") + _t[t][0];
                break;
              }
            }

            if (null == i) return void (e._isValid = !1);
          }

          if (!r && null != i) return void (e._isValid = !1);

          if (c[4]) {
            if (!yt.exec(c[4])) return void (e._isValid = !1);
            o = "Z";
          }

          e._f = a + (i || "") + (o || ""), Mt(e);
        } else e._isValid = !1;
      }

      var xt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function kt(e, t, n, r, a, i) {
        var o,
            s,
            c = [(o = e, s = parseInt(o, 10), s <= 49 ? 2e3 + s : s <= 999 ? 1900 + s : s), Pe.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(a, 10)];
        return i && c.push(parseInt(i, 10)), c;
      }

      var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
      };

      function Et(e) {
        var t = xt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));

        if (t) {
          var n = kt(t[4], t[3], t[2], t[5], t[6], t[7]);
          if (!function (e, t, n) {
            if (e) {
              var r = $e.indexOf(e),
                  a = new Date(t[0], t[1], t[2]).getDay();
              if (r !== a) return y(n).weekdayMismatch = !0, n._isValid = !1;
            }

            return !0;
          }(t[1], n, e)) return;
          e._a = n, e._tzm = function (e, t, n) {
            if (e) return St[e];
            if (t) return 0;
            var r = parseInt(n, 10),
                a = r % 100,
                i = (r - a) / 100;
            return 60 * i + a;
          }(t[8], t[9], t[10]), e._d = Ie.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0;
        } else e._isValid = !1;
      }

      function Mt(e) {
        if (e._f !== g.ISO_8601) {
          if (e._f !== g.RFC_2822) {
            e._a = [], y(e).empty = !0;
            var t,
                n,
                r,
                a,
                i,
                o = "" + e._i,
                s = o.length,
                c = 0;

            for (r = G(e._f, e._locale).match(W) || [], t = 0; t < r.length; t++) {
              a = r[t], (n = (o.match(ue(a, e)) || [])[0]) && (0 < (i = o.substr(0, o.indexOf(n))).length && y(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), c += n.length), H[a] ? (n ? y(e).empty = !1 : y(e).unusedTokens.push(a), h = a, m = e, null != (p = n) && v(de, h) && de[h](p, m._a, m, h)) : e._strict && !n && y(e).unusedTokens.push(a);
            }

            y(e).charsLeftOver = s - c, 0 < o.length && y(e).unusedInput.push(o), e._a[ye] <= 12 && !0 === y(e).bigHour && 0 < e._a[ye] && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[ye] = (l = e._locale, u = e._a[ye], null == (f = e._meridiem) ? u : null != l.meridiemHour ? l.meridiemHour(u, f) : (null != l.isPM && ((d = l.isPM(f)) && u < 12 && (u += 12), d || 12 !== u || (u = 0)), u)), mt(e), ht(e);
          } else Et(e);
        } else At(e);
        var l, u, f, d, h, p, m;
      }

      function Tt(e) {
        var t,
            n,
            r = e._i,
            a = e._f;
        return e._locale = e._locale || dt(e._l), null === r || void 0 === a && "" === r ? p({
          nullInput: !0
        }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), w(r) ? new _(ht(r)) : (o(r) ? e._d = r : s(a) ? function (e) {
          var t, n, r, a, i;
          if (0 === e._f.length) return y(e).invalidFormat = !0, e._d = new Date(NaN);

          for (a = 0; a < e._f.length; a++) {
            i = 0, t = b({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], Mt(t), h(t) && (i += y(t).charsLeftOver, i += 10 * y(t).unusedTokens.length, y(t).score = i, (null == r || i < r) && (r = i, n = t));
          }

          f(e, n || t);
        }(e) : a ? Mt(e) : i(n = (t = e)._i) ? t._d = new Date(g.now()) : o(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function (e) {
          var t = wt.exec(e._i);
          if (null !== t) return e._d = new Date(+t[1]);
          At(e), !1 === e._isValid && (delete e._isValid, Et(e), !1 === e._isValid && (delete e._isValid, g.createFromInputFallback(e)));
        }(t) : s(n) ? (t._a = l(n.slice(0), function (e) {
          return parseInt(e, 10);
        }), mt(t)) : c(n) ? function (e) {
          if (!e._d) {
            var t = P(e._i);
            e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
              return e && parseInt(e, 10);
            }), mt(e);
          }
        }(t) : u(n) ? t._d = new Date(n) : g.createFromInputFallback(t), h(e) || (e._d = null), e));
      }

      function Ct(e, t, n, r, a) {
        var i,
            o = {};
        return !0 !== n && !1 !== n || (r = n, n = void 0), (c(e) && function (e) {
          if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
          var t;

          for (t in e) {
            if (e.hasOwnProperty(t)) return !1;
          }

          return !0;
        }(e) || s(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = e, o._f = t, o._strict = r, (i = new _(ht(Tt(o))))._nextDay && (i.add(1, "d"), i._nextDay = void 0), i;
      }

      function Dt(e, t, n, r) {
        return Ct(e, t, n, r, !1);
      }

      g.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
      }), g.ISO_8601 = function () {}, g.RFC_2822 = function () {};
      var Ot = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = Dt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : p();
      }),
          Nt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = Dt.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : p();
      });

      function jt(e, t) {
        var n, r;
        if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Dt();

        for (n = t[0], r = 1; r < t.length; ++r) {
          t[r].isValid() && !t[r][e](n) || (n = t[r]);
        }

        return n;
      }

      var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

      function zt(e) {
        var t = P(e),
            n = t.year || 0,
            r = t.quarter || 0,
            a = t.month || 0,
            i = t.week || t.isoWeek || 0,
            o = t.day || 0,
            s = t.hour || 0,
            c = t.minute || 0,
            l = t.second || 0,
            u = t.millisecond || 0;
        this._isValid = function (e) {
          for (var t in e) {
            if (-1 === Ee.call(Pt, t) || null != e[t] && isNaN(e[t])) return !1;
          }

          for (var n = !1, r = 0; r < Pt.length; ++r) {
            if (e[Pt[r]]) {
              if (n) return !1;
              parseFloat(e[Pt[r]]) !== x(e[Pt[r]]) && (n = !0);
            }
          }

          return !0;
        }(t), this._milliseconds = +u + 1e3 * l + 6e4 * c + 1e3 * s * 60 * 60, this._days = +o + 7 * i, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = dt(), this._bubble();
      }

      function Lt(e) {
        return e instanceof zt;
      }

      function Rt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }

      function Yt(e, n) {
        F(e, 0, 0, function () {
          var e = this.utcOffset(),
              t = "+";
          return e < 0 && (e = -e, t = "-"), t + Y(~~(e / 60), 2) + n + Y(~~e % 60, 2);
        });
      }

      Yt("Z", ":"), Yt("ZZ", ""), le("Z", oe), le("ZZ", oe), he(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = qt(oe, e);
      });
      var Wt = /([\+\-]|\d\d)/gi;

      function qt(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var r = n[n.length - 1] || [],
            a = (r + "").match(Wt) || ["-", 0, 0],
            i = 60 * a[1] + x(a[2]);
        return 0 === i ? 0 : "+" === a[0] ? i : -i;
      }

      function It(e, t) {
        var n, r;
        return t._isUTC ? (n = t.clone(), r = (w(e) || o(e) ? e.valueOf() : Dt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), g.updateOffset(n, !1), n) : Dt(e).local();
      }

      function Ht(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
      }

      function Ft() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }

      g.updateOffset = function () {};

      var Bt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
          Gt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Ut(e, t) {
        var n,
            r,
            a,
            i,
            o,
            s,
            c = e,
            l = null;
        return Lt(e) ? c = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        } : u(e) ? (c = {}, t ? c[t] = e : c.milliseconds = e) : (l = Bt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, c = {
          y: 0,
          d: x(l[ve]) * n,
          h: x(l[ye]) * n,
          m: x(l[be]) * n,
          s: x(l[_e]) * n,
          ms: x(Rt(1e3 * l[we])) * n
        }) : (l = Gt.exec(e)) ? (n = "-" === l[1] ? -1 : 1, c = {
          y: $t(l[2], n),
          M: $t(l[3], n),
          w: $t(l[4], n),
          d: $t(l[5], n),
          h: $t(l[6], n),
          m: $t(l[7], n),
          s: $t(l[8], n)
        }) : null == c ? c = {} : "object" == _typeof(c) && ("from" in c || "to" in c) && (i = Dt(c.from), o = Dt(c.to), a = i.isValid() && o.isValid() ? (o = It(o, i), i.isBefore(o) ? s = Vt(i, o) : ((s = Vt(o, i)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
          milliseconds: 0,
          months: 0
        }, (c = {}).ms = a.milliseconds, c.M = a.months), r = new zt(c), Lt(e) && v(e, "_locale") && (r._locale = e._locale), r;
      }

      function $t(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
      }

      function Vt(e, t) {
        var n = {
          milliseconds: 0,
          months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
      }

      function Kt(r, a) {
        return function (e, t) {
          var n;
          return null === t || isNaN(+t) || (M(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Jt(this, Ut(e = "string" == typeof e ? +e : e, t), r), this;
        };
      }

      function Jt(e, t, n, r) {
        var a = t._milliseconds,
            i = Rt(t._days),
            o = Rt(t._months);
        e.isValid() && (r = null == r || r, o && Le(e, Ce(e, "Month") + o * n), i && De(e, "Date", Ce(e, "Date") + i * n), a && e._d.setTime(e._d.valueOf() + a * n), r && g.updateOffset(e, i || o));
      }

      Ut.fn = zt.prototype, Ut.invalid = function () {
        return Ut(NaN);
      };
      var Xt = Kt(1, "add"),
          Zt = Kt(-1, "subtract");

      function Qt(e, t) {
        var n,
            r,
            a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            i = e.clone().add(a, "months");
        return r = t - i < 0 ? (n = e.clone().add(a - 1, "months"), (t - i) / (i - n)) : (n = e.clone().add(a + 1, "months"), (t - i) / (n - i)), -(a + r) || 0;
      }

      function en(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this);
      }

      g.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", g.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      var tn = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e);
      });

      function nn() {
        return this._locale;
      }

      function rn(e, t) {
        F(0, [e, e.length], 0, t);
      }

      function an(e, t, n, r, a) {
        var i;
        return null == e ? Be(this, r, a).year : ((i = Ge(e, r, a)) < t && (t = i), function (e, t, n, r, a) {
          var i = Fe(e, t, n, r, a),
              o = Ie(i.year, 0, i.dayOfYear);
          return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
        }.call(this, e, t, n, r, a));
      }

      F(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
      }), F(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), rn("GGGGG", "isoWeekYear"), N("weekYear", "gg"), N("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), le("G", ae), le("g", ae), le("GG", X, $), le("gg", X, $), le("GGGG", te, K), le("gggg", te, K), le("GGGGG", ne, J), le("ggggg", ne, J), pe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
        t[r.substr(0, 2)] = x(e);
      }), pe(["gg", "GG"], function (e, t, n, r) {
        t[r] = g.parseTwoDigitYear(e);
      }), F("Q", 0, "Qo", "quarter"), N("quarter", "Q"), L("quarter", 7), le("Q", U), he("Q", function (e, t) {
        t[ge] = 3 * (x(e) - 1);
      }), F("D", ["DD", 2], "Do", "date"), N("date", "D"), L("date", 9), le("D", X), le("DD", X, $), le("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
      }), he(["D", "DD"], ve), he("Do", function (e, t) {
        t[ve] = x(e.match(X)[0]);
      });
      var on = Te("Date", !0);
      F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), N("dayOfYear", "DDD"), L("dayOfYear", 4), le("DDD", ee), le("DDDD", V), he(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = x(e);
      }), F("m", ["mm", 2], 0, "minute"), N("minute", "m"), L("minute", 14), le("m", X), le("mm", X, $), he(["m", "mm"], be);
      var sn = Te("Minutes", !1);
      F("s", ["ss", 2], 0, "second"), N("second", "s"), L("second", 15), le("s", X), le("ss", X, $), he(["s", "ss"], _e);
      var cn,
          ln = Te("Seconds", !1);

      for (F("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }), F(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }), F(0, ["SSS", 3], 0, "millisecond"), F(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }), F(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }), F(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }), F(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }), F(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }), F(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }), N("millisecond", "ms"), L("millisecond", 16), le("S", ee, U), le("SS", ee, $), le("SSS", ee, V), cn = "SSSS"; cn.length <= 9; cn += "S") {
        le(cn, re);
      }

      function un(e, t) {
        t[we] = x(1e3 * ("0." + e));
      }

      for (cn = "S"; cn.length <= 9; cn += "S") {
        he(cn, un);
      }

      var fn = Te("Milliseconds", !1);
      F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
      var dn = _.prototype;

      function hn(e) {
        return e;
      }

      dn.add = Xt, dn.calendar = function (e, t) {
        var n = e || Dt(),
            r = It(n, this).startOf("day"),
            a = g.calendarFormat(this, r) || "sameElse",
            i = t && (T(t[a]) ? t[a].call(this, n) : t[a]);
        return this.format(i || this.localeData().calendar(a, this, Dt(n)));
      }, dn.clone = function () {
        return new _(this);
      }, dn.diff = function (e, t, n) {
        var r, a, i;
        if (!this.isValid()) return NaN;
        if (!(r = It(e, this)).isValid()) return NaN;

        switch (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = j(t)) {
          case "year":
            i = Qt(this, r) / 12;
            break;

          case "month":
            i = Qt(this, r);
            break;

          case "quarter":
            i = Qt(this, r) / 3;
            break;

          case "second":
            i = (this - r) / 1e3;
            break;

          case "minute":
            i = (this - r) / 6e4;
            break;

          case "hour":
            i = (this - r) / 36e5;
            break;

          case "day":
            i = (this - r - a) / 864e5;
            break;

          case "week":
            i = (this - r - a) / 6048e5;
            break;

          default:
            i = this - r;
        }

        return n ? i : A(i);
      }, dn.endOf = function (e) {
        return void 0 === (e = j(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
      }, dn.format = function (e) {
        e || (e = this.isUtc() ? g.defaultFormatUtc : g.defaultFormat);
        var t = B(this, e);
        return this.localeData().postformat(t);
      }, dn.from = function (e, t) {
        return this.isValid() && (w(e) && e.isValid() || Dt(e).isValid()) ? Ut({
          to: this,
          from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
      }, dn.fromNow = function (e) {
        return this.from(Dt(), e);
      }, dn.to = function (e, t) {
        return this.isValid() && (w(e) && e.isValid() || Dt(e).isValid()) ? Ut({
          from: this,
          to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
      }, dn.toNow = function (e) {
        return this.to(Dt(), e);
      }, dn.get = function (e) {
        return T(this[e = j(e)]) ? this[e]() : this;
      }, dn.invalidAt = function () {
        return y(this).overflow;
      }, dn.isAfter = function (e, t) {
        var n = w(e) ? e : Dt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
      }, dn.isBefore = function (e, t) {
        var n = w(e) ? e : Dt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
      }, dn.isBetween = function (e, t, n, r) {
        var a = w(e) ? e : Dt(e),
            i = w(t) ? t : Dt(t);
        return !!(this.isValid() && a.isValid() && i.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n));
      }, dn.isSame = function (e, t) {
        var n,
            r = w(e) ? e : Dt(e);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = j(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
      }, dn.isSameOrAfter = function (e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }, dn.isSameOrBefore = function (e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }, dn.isValid = function () {
        return h(this);
      }, dn.lang = tn, dn.locale = en, dn.localeData = nn, dn.max = Nt, dn.min = Ot, dn.parsingFlags = function () {
        return f({}, y(this));
      }, dn.set = function (e, t) {
        if ("object" == _typeof(e)) for (var n = R(e = P(e)), r = 0; r < n.length; r++) {
          this[n[r].unit](e[n[r].unit]);
        } else if (T(this[e = j(e)])) return this[e](t);
        return this;
      }, dn.startOf = function (e) {
        switch (e = j(e)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }

        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this;
      }, dn.subtract = Zt, dn.toArray = function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
      }, dn.toObject = function () {
        return {
          years: this.year(),
          months: this.month(),
          date: this.date(),
          hours: this.hours(),
          minutes: this.minutes(),
          seconds: this.seconds(),
          milliseconds: this.milliseconds()
        };
      }, dn.toDate = function () {
        return new Date(this.valueOf());
      }, dn.toISOString = function (e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
            n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? B(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : T(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(n, "Z")) : B(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
      }, dn.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
            r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            a = t + '[")]';
        return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + a);
      }, dn.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, dn.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }, dn.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, dn.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }, dn.creationData = function () {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }, dn.year = Me, dn.isLeapYear = function () {
        return Se(this.year());
      }, dn.weekYear = function (e) {
        return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }, dn.isoWeekYear = function (e) {
        return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }, dn.quarter = dn.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
      }, dn.month = Re, dn.daysInMonth = function () {
        return Oe(this.year(), this.month());
      }, dn.week = dn.weeks = function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }, dn.isoWeek = dn.isoWeeks = function (e) {
        var t = Be(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }, dn.weeksInYear = function () {
        var e = this.localeData()._week;

        return Ge(this.year(), e.dow, e.doy);
      }, dn.isoWeeksInYear = function () {
        return Ge(this.year(), 1, 4);
      }, dn.date = on, dn.day = dn.days = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t,
            n,
            r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e, n = this.localeData(), e = "string" == typeof t ? isNaN(t) ? "number" != typeof (t = n.weekdaysParse(t)) ? null : t : parseInt(t, 10) : t, this.add(e - r, "d")) : r;
      }, dn.weekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
      }, dn.isoWeekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this.day() || 7;
        var t,
            n,
            r = (t = e, n = this.localeData(), "string" != typeof t ? isNaN(t) ? null : t : n.weekdaysParse(t) % 7 || 7);
        return this.day(this.day() % 7 ? r : r - 7);
      }, dn.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d");
      }, dn.hour = dn.hours = at, dn.minute = dn.minutes = sn, dn.second = dn.seconds = ln, dn.millisecond = dn.milliseconds = fn, dn.utcOffset = function (e, t, n) {
        var r,
            a = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? a : Ht(this);

        if ("string" == typeof e) {
          if (null === (e = qt(oe, e))) return this;
        } else Math.abs(e) < 16 && !n && (e *= 60);

        return !this._isUTC && t && (r = Ht(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Jt(this, Ut(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, g.updateOffset(this, !0), this._changeInProgress = null)), this;
      }, dn.utc = function (e) {
        return this.utcOffset(0, e);
      }, dn.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ht(this), "m")), this;
      }, dn.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
          var e = qt(ie, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
      }, dn.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && (e = e ? Dt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
      }, dn.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }, dn.isLocal = function () {
        return !!this.isValid() && !this._isUTC;
      }, dn.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC;
      }, dn.isUtc = Ft, dn.isUTC = Ft, dn.zoneAbbr = function () {
        return this._isUTC ? "UTC" : "";
      }, dn.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }, dn.dates = n("dates accessor is deprecated. Use date instead.", on), dn.months = n("months accessor is deprecated. Use month instead", Re), dn.years = n("years accessor is deprecated. Use year instead", Me), dn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
      }), dn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!i(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};

        if (b(e, this), (e = Tt(e))._a) {
          var t = e._isUTC ? d(e._a) : Dt(e._a);
          this._isDSTShifted = this.isValid() && 0 < k(e._a, t.toArray());
        } else this._isDSTShifted = !1;

        return this._isDSTShifted;
      });
      var pn = D.prototype;

      function mn(e, t, n, r) {
        var a = dt(),
            i = d().set(r, t);
        return a[n](i, e);
      }

      function gn(e, t, n) {
        if (u(e) && (t = e, e = void 0), e = e || "", null != t) return mn(e, t, n, "month");
        var r,
            a = [];

        for (r = 0; r < 12; r++) {
          a[r] = mn(e, r, n, "month");
        }

        return a;
      }

      function vn(e, t, n, r) {
        "boolean" == typeof e ? u(t) && (n = t, t = void 0) : (t = e, e = !1, u(n = t) && (n = t, t = void 0)), t = t || "";
        var a,
            i = dt(),
            o = e ? i._week.dow : 0;
        if (null != n) return mn(t, (n + o) % 7, r, "day");
        var s = [];

        for (a = 0; a < 7; a++) {
          s[a] = mn(t, (a + o) % 7, r, "day");
        }

        return s;
      }

      pn.calendar = function (e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return T(r) ? r.call(t, n) : r;
      }, pn.longDateFormat = function (e) {
        var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];

        return !t && n ? (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
          return e.slice(1);
        }), this._longDateFormat[e]) : t;
      }, pn.invalidDate = function () {
        return this._invalidDate;
      }, pn.ordinal = function (e) {
        return this._ordinal.replace("%d", e);
      }, pn.preparse = hn, pn.postformat = hn, pn.relativeTime = function (e, t, n, r) {
        var a = this._relativeTime[n];
        return T(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
      }, pn.pastFuture = function (e, t) {
        var n = this._relativeTime[0 < e ? "future" : "past"];
        return T(n) ? n(t) : n.replace(/%s/i, t);
      }, pn.set = function (e) {
        var t, n;

        for (n in e) {
          T(t = e[n]) ? this[n] = t : this["_" + n] = t;
        }

        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }, pn.months = function (e, t) {
        return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ne).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone;
      }, pn.monthsShort = function (e, t) {
        return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ne.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
      }, pn.monthsParse = function (e, t, n) {
        var r, a, i;
        if (this._monthsParseExact) return ze.call(this, e, t, n);

        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
          if (a = d([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r;
        }
      }, pn.monthsRegex = function (e) {
        return this._monthsParseExact ? (v(this, "_monthsRegex") || qe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (v(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
      }, pn.monthsShortRegex = function (e) {
        return this._monthsParseExact ? (v(this, "_monthsRegex") || qe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = Ye), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }, pn.week = function (e) {
        return Be(e, this._week.dow, this._week.doy).week;
      }, pn.firstDayOfYear = function () {
        return this._week.doy;
      }, pn.firstDayOfWeek = function () {
        return this._week.dow;
      }, pn.weekdays = function (e, t) {
        return e ? s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone;
      }, pn.weekdaysMin = function (e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
      }, pn.weekdaysShort = function (e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
      }, pn.weekdaysParse = function (e, t, n) {
        var r, a, i;
        if (this._weekdaysParseExact) return Ke.call(this, e, t, n);

        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
          if (a = d([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r;
        }
      }, pn.weekdaysRegex = function (e) {
        return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }, pn.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }, pn.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ze), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }, pn.isPM = function (e) {
        return "p" === (e + "").toLowerCase().charAt(0);
      }, pn.meridiem = function (e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM";
      }, ut("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(e) {
          var t = e % 10,
              n = 1 === x(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
          return e + n;
        }
      }), g.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), g.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt);
      var yn = Math.abs;

      function bn(e, t, n, r) {
        var a = Ut(t, n);
        return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
      }

      function _n(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }

      function wn(e) {
        return 4800 * e / 146097;
      }

      function An(e) {
        return 146097 * e / 4800;
      }

      function xn(e) {
        return function () {
          return this.as(e);
        };
      }

      var kn = xn("ms"),
          Sn = xn("s"),
          En = xn("m"),
          Mn = xn("h"),
          Tn = xn("d"),
          Cn = xn("w"),
          Dn = xn("M"),
          On = xn("y");

      function Nn(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN;
        };
      }

      var jn = Nn("milliseconds"),
          Pn = Nn("seconds"),
          zn = Nn("minutes"),
          Ln = Nn("hours"),
          Rn = Nn("days"),
          Yn = Nn("months"),
          Wn = Nn("years"),
          qn = Math.round,
          In = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      },
          Hn = Math.abs;

      function Fn(e) {
        return (0 < e) - (e < 0) || +e;
      }

      function Bn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
            t,
            n = Hn(this._milliseconds) / 1e3,
            r = Hn(this._days),
            a = Hn(this._months);
        e = A(n / 60), t = A(e / 60), n %= 60, e %= 60;
        var i = A(a / 12),
            o = a %= 12,
            s = r,
            c = t,
            l = e,
            u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            f = this.asSeconds();
        if (!f) return "P0D";
        var d = f < 0 ? "-" : "",
            h = Fn(this._months) !== Fn(f) ? "-" : "",
            p = Fn(this._days) !== Fn(f) ? "-" : "",
            m = Fn(this._milliseconds) !== Fn(f) ? "-" : "";
        return d + "P" + (i ? h + i + "Y" : "") + (o ? h + o + "M" : "") + (s ? p + s + "D" : "") + (c || l || u ? "T" : "") + (c ? m + c + "H" : "") + (l ? m + l + "M" : "") + (u ? m + u + "S" : "");
      }

      var Gn = zt.prototype;
      return Gn.isValid = function () {
        return this._isValid;
      }, Gn.abs = function () {
        var e = this._data;
        return this._milliseconds = yn(this._milliseconds), this._days = yn(this._days), this._months = yn(this._months), e.milliseconds = yn(e.milliseconds), e.seconds = yn(e.seconds), e.minutes = yn(e.minutes), e.hours = yn(e.hours), e.months = yn(e.months), e.years = yn(e.years), this;
      }, Gn.add = function (e, t) {
        return bn(this, e, t, 1);
      }, Gn.subtract = function (e, t) {
        return bn(this, e, t, -1);
      }, Gn.as = function (e) {
        if (!this.isValid()) return NaN;
        var t,
            n,
            r = this._milliseconds;
        if ("month" === (e = j(e)) || "year" === e) return t = this._days + r / 864e5, n = this._months + wn(t), "month" === e ? n : n / 12;

        switch (t = this._days + Math.round(An(this._months)), e) {
          case "week":
            return t / 7 + r / 6048e5;

          case "day":
            return t + r / 864e5;

          case "hour":
            return 24 * t + r / 36e5;

          case "minute":
            return 1440 * t + r / 6e4;

          case "second":
            return 86400 * t + r / 1e3;

          case "millisecond":
            return Math.floor(864e5 * t) + r;

          default:
            throw new Error("Unknown unit " + e);
        }
      }, Gn.asMilliseconds = kn, Gn.asSeconds = Sn, Gn.asMinutes = En, Gn.asHours = Mn, Gn.asDays = Tn, Gn.asWeeks = Cn, Gn.asMonths = Dn, Gn.asYears = On, Gn.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12) : NaN;
      }, Gn._bubble = function () {
        var e,
            t,
            n,
            r,
            a,
            i = this._milliseconds,
            o = this._days,
            s = this._months,
            c = this._data;
        return 0 <= i && 0 <= o && 0 <= s || i <= 0 && o <= 0 && s <= 0 || (i += 864e5 * _n(An(s) + o), s = o = 0), c.milliseconds = i % 1e3, e = A(i / 1e3), c.seconds = e % 60, t = A(e / 60), c.minutes = t % 60, n = A(t / 60), c.hours = n % 24, o += A(n / 24), a = A(wn(o)), s += a, o -= _n(An(a)), r = A(s / 12), s %= 12, c.days = o, c.months = s, c.years = r, this;
      }, Gn.clone = function () {
        return Ut(this);
      }, Gn.get = function (e) {
        return e = j(e), this.isValid() ? this[e + "s"]() : NaN;
      }, Gn.milliseconds = jn, Gn.seconds = Pn, Gn.minutes = zn, Gn.hours = Ln, Gn.days = Rn, Gn.weeks = function () {
        return A(this.days() / 7);
      }, Gn.months = Yn, Gn.years = Wn, Gn.humanize = function (e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t,
            n,
            r,
            a,
            i,
            o,
            s,
            c,
            l,
            u,
            f,
            d = this.localeData(),
            h = (n = !e, r = d, a = Ut(t = this).abs(), i = qn(a.as("s")), o = qn(a.as("m")), s = qn(a.as("h")), c = qn(a.as("d")), l = qn(a.as("M")), u = qn(a.as("y")), (f = i <= In.ss && ["s", i] || i < In.s && ["ss", i] || o <= 1 && ["m"] || o < In.m && ["mm", o] || s <= 1 && ["h"] || s < In.h && ["hh", s] || c <= 1 && ["d"] || c < In.d && ["dd", c] || l <= 1 && ["M"] || l < In.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u])[2] = n, f[3] = 0 < +t, f[4] = r, function (e, t, n, r, a) {
          return a.relativeTime(t || 1, !!n, e, r);
        }.apply(null, f));
        return e && (h = d.pastFuture(+this, h)), d.postformat(h);
      }, Gn.toISOString = Bn, Gn.toString = Bn, Gn.toJSON = Bn, Gn.locale = en, Gn.localeData = nn, Gn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Bn), Gn.lang = tn, F("X", 0, 0, "unix"), F("x", 0, 0, "valueOf"), le("x", ae), le("X", /[+-]?\d+(\.\d{1,3})?/), he("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10));
      }), he("x", function (e, t, n) {
        n._d = new Date(x(e));
      }), g.version = "2.23.0", e = Dt, g.fn = dn, g.min = function () {
        return jt("isBefore", [].slice.call(arguments, 0));
      }, g.max = function () {
        return jt("isAfter", [].slice.call(arguments, 0));
      }, g.now = function () {
        return Date.now ? Date.now() : +new Date();
      }, g.utc = d, g.unix = function (e) {
        return Dt(1e3 * e);
      }, g.months = function (e, t) {
        return gn(e, t, "months");
      }, g.isDate = o, g.locale = ut, g.invalid = p, g.duration = Ut, g.isMoment = w, g.weekdays = function (e, t, n) {
        return vn(e, t, n, "weekdays");
      }, g.parseZone = function () {
        return Dt.apply(null, arguments).parseZone();
      }, g.localeData = dt, g.isDuration = Lt, g.monthsShort = function (e, t) {
        return gn(e, t, "monthsShort");
      }, g.weekdaysMin = function (e, t, n) {
        return vn(e, t, n, "weekdaysMin");
      }, g.defineLocale = ft, g.updateLocale = function (e, t) {
        if (null != t) {
          var n,
              r,
              a = it;
          null != (r = lt(e)) && (a = r._config), t = C(a, t), (n = new D(t)).parentLocale = ot[e], ot[e] = n, ut(e);
        } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]);

        return ot[e];
      }, g.locales = function () {
        return r(ot);
      }, g.weekdaysShort = function (e, t, n) {
        return vn(e, t, n, "weekdaysShort");
      }, g.normalizeUnits = j, g.relativeTimeRounding = function (e) {
        return void 0 !== e ? "function" == typeof e && (qn = e, !0) : qn;
      }, g.relativeTimeThreshold = function (e, t) {
        return void 0 !== In[e] && (void 0 === t ? In[e] : (In[e] = t, "s" === e && (In.ss = t - 1), !0));
      }, g.calendarFormat = function (e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
      }, g.prototype = dn, g.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      }, g;
    }();
  }),
      Bs = e(function (e) {
    var t, n;
    t = this, n = function n(i) {
      var t,
          o = {},
          s = {},
          l = {},
          u = {};
      i && "string" == typeof i.version || E("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");
      var e = i.version.split("."),
          n = +e[0],
          r = +e[1];

      function c(e) {
        return 96 < e ? e - 87 : 64 < e ? e - 29 : e - 48;
      }

      function a(e) {
        var t = 0,
            n = e.split("."),
            r = n[0],
            a = n[1] || "",
            i = 1,
            o = 0,
            s = 1;

        for (45 === e.charCodeAt(0) && (s = -(t = 1)); t < r.length; t++) {
          o = 60 * o + c(r.charCodeAt(t));
        }

        for (t = 0; t < a.length; t++) {
          i /= 60, o += c(a.charCodeAt(t)) * i;
        }

        return o * s;
      }

      function f(e) {
        for (var t = 0; t < e.length; t++) {
          e[t] = a(e[t]);
        }
      }

      function d(e, t) {
        var n,
            r = [];

        for (n = 0; n < t.length; n++) {
          r[n] = e[t[n]];
        }

        return r;
      }

      function h(e) {
        var t = e.split("|"),
            n = t[2].split(" "),
            r = t[3].split(""),
            a = t[4].split(" ");
        return f(n), f(r), f(a), function (e, t) {
          for (var n = 0; n < t; n++) {
            e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
          }

          e[t - 1] = 1 / 0;
        }(a, r.length), {
          name: t[0],
          abbrs: d(t[1].split(" "), r),
          offsets: d(n, r),
          untils: a,
          population: 0 | t[5]
        };
      }

      function p(e) {
        e && this._set(h(e));
      }

      function m(e) {
        var t = e.toTimeString(),
            n = t.match(/\([a-z ]+\)/i);
        "GMT" === (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join("") : void 0 : (n = t.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) && (n = void 0), this.at = +e, this.abbr = n, this.offset = e.getTimezoneOffset();
      }

      function g(e) {
        this.zone = e, this.offsetScore = 0, this.abbrScore = 0;
      }

      function v(e, t) {
        for (var n, r; r = 6e4 * ((t.at - e.at) / 12e4 | 0);) {
          (n = new m(new Date(e.at + r))).offset === e.offset ? e = n : t = n;
        }

        return e;
      }

      function y(e, t) {
        return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : t.zone.population - e.zone.population;
      }

      function b(e, t) {
        var n, r;

        for (f(t), n = 0; n < t.length; n++) {
          r = t[n], u[r] = u[r] || {}, u[r][e] = !0;
        }
      }

      function _(e) {
        return (e || "").toLowerCase().replace(/\//g, "_");
      }

      function w(e) {
        var t, n, r, a;

        for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) {
          a = _(n = (r = e[t].split("|"))[0]), o[a] = e[t], l[a] = n, b(a, r[2].split(" "));
        }
      }

      function A(e, t) {
        e = _(e);
        var n,
            r = o[e];
        return r instanceof p ? r : "string" == typeof r ? (r = new p(r), o[e] = r) : s[e] && t !== A && (n = A(s[e], A)) ? ((r = o[e] = new p())._set(n), r.name = l[e], r) : null;
      }

      function x(e) {
        var t, n, r, a;

        for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) {
          r = _((n = e[t].split("|"))[0]), a = _(n[1]), s[r] = a, l[r] = n[0], s[a] = r, l[a] = n[1];
        }
      }

      function k(e) {
        w(e.zones), x(e.links), M.dataVersion = e.version;
      }

      function S(e) {
        var t = "X" === e._f || "x" === e._f;
        return !(!e._a || void 0 !== e._tzm || t);
      }

      function E(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
      }

      function M(e) {
        var t = Array.prototype.slice.call(arguments, 0, -1),
            n = arguments[arguments.length - 1],
            r = A(n),
            a = i.utc.apply(null, t);
        return r && !i.isMoment(e) && S(a) && a.add(r.parse(a), "minutes"), a.tz(n), a;
      }

      (n < 2 || 2 === n && r < 6) && E("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + i.version + ". See momentjs.com"), p.prototype = {
        _set: function _set(e) {
          this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population;
        },
        _index: function _index(e) {
          var t,
              n = +e,
              r = this.untils;

          for (t = 0; t < r.length; t++) {
            if (n < r[t]) return t;
          }
        },
        parse: function parse(e) {
          var t,
              n,
              r,
              a,
              i = +e,
              o = this.offsets,
              s = this.untils,
              c = s.length - 1;

          for (a = 0; a < c; a++) {
            if (t = o[a], n = o[a + 1], r = o[a ? a - 1 : a], t < n && M.moveAmbiguousForward ? t = n : r < t && M.moveInvalidForward && (t = r), i < s[a] - 6e4 * t) return o[a];
          }

          return o[c];
        },
        abbr: function abbr(e) {
          return this.abbrs[this._index(e)];
        },
        offset: function offset(e) {
          return E("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)];
        },
        utcOffset: function utcOffset(e) {
          return this.offsets[this._index(e)];
        }
      }, g.prototype.scoreOffsetAt = function (e) {
        this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++;
      }, M.version = "0.5.23", M.dataVersion = "", M._zones = o, M._links = s, M._names = l, M.add = w, M.link = x, M.load = k, M.zone = A, M.zoneExists = function e(t) {
        return e.didShowError || (e.didShowError = !0, E("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!A(t);
      }, M.guess = function (e) {
        return t && !e || (t = function () {
          try {
            var e = Intl.DateTimeFormat().resolvedOptions().timeZone;

            if (e && 3 < e.length) {
              var t = l[_(e)];

              if (t) return t;
              E("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.");
            }
          } catch (e) {}

          var n,
              r,
              a,
              i = function () {
            var e,
                t,
                n,
                r = new Date().getFullYear() - 2,
                a = new m(new Date(r, 0, 1)),
                i = [a];

            for (n = 1; n < 48; n++) {
              (t = new m(new Date(r, n, 1))).offset !== a.offset && (e = v(a, t), i.push(e), i.push(new m(new Date(e.at + 6e4)))), a = t;
            }

            for (n = 0; n < 4; n++) {
              i.push(new m(new Date(r + n, 0, 1))), i.push(new m(new Date(r + n, 6, 1)));
            }

            return i;
          }(),
              o = i.length,
              s = function (e) {
            var t,
                n,
                r,
                a = e.length,
                i = {},
                o = [];

            for (t = 0; t < a; t++) {
              for (n in r = u[e[t].offset] || {}) {
                r.hasOwnProperty(n) && (i[n] = !0);
              }
            }

            for (t in i) {
              i.hasOwnProperty(t) && o.push(l[t]);
            }

            return o;
          }(i),
              c = [];

          for (r = 0; r < s.length; r++) {
            for (n = new g(A(s[r]), o), a = 0; a < o; a++) {
              n.scoreOffsetAt(i[a]);
            }

            c.push(n);
          }

          return c.sort(y), 0 < c.length ? c[0].zone.name : void 0;
        }()), t;
      }, M.names = function () {
        var e,
            t = [];

        for (e in l) {
          l.hasOwnProperty(e) && (o[e] || o[s[e]]) && l[e] && t.push(l[e]);
        }

        return t.sort();
      }, M.Zone = p, M.unpack = h, M.unpackBase60 = a, M.needsOffset = S, M.moveInvalidForward = !0, M.moveAmbiguousForward = !1;
      var T,
          C = i.fn;

      function D(e) {
        return function () {
          return this._z ? this._z.abbr(this) : e.call(this);
        };
      }

      i.tz = M, i.defaultZone = null, i.updateOffset = function (e, t) {
        var n,
            r = i.defaultZone;
        void 0 === e._z && (r && S(e) && !e._isUTC && (e._d = i.utc(e._a)._d, e.utc().add(r.parse(e), "minutes")), e._z = r), e._z && (n = e._z.utcOffset(e), Math.abs(n) < 16 && (n /= 60), void 0 !== e.utcOffset ? e.utcOffset(-n, t) : e.zone(n, t));
      }, C.tz = function (e, t) {
        if (e) {
          if ("string" != typeof e) throw new Error("Time zone name must be a string, got " + e + " [" + _typeof(e) + "]");
          return this._z = A(e), this._z ? i.updateOffset(this, t) : E("Moment Timezone has no data for " + e + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this;
        }

        if (this._z) return this._z.name;
      }, C.zoneName = D(C.zoneName), C.zoneAbbr = D(C.zoneAbbr), C.utc = (T = C.utc, function () {
        return this._z = null, T.apply(this, arguments);
      }), i.tz.setDefault = function (e) {
        return (n < 2 || 2 === n && r < 9) && E("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + i.version + "."), i.defaultZone = e ? A(e) : null, i;
      };
      var O = i.momentProperties;
      return "[object Array]" === Object.prototype.toString.call(O) ? (O.push("_z"), O.push("_a")) : O && (O._z = null), k({
        version: "2018g",
        zones: ["Africa/Abidjan|GMT|0|0||48e5", "Africa/Nairobi|EAT|-30|0||47e5", "Africa/Algiers|CET|-10|0||26e5", "Africa/Lagos|WAT|-10|0||17e6", "Africa/Maputo|CAT|-20|0||26e5", "Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6", "Africa/Casablanca|+00 +01|0 -10|0101010101010101010101010101|1H3C0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00|32e5", "Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|11e6", "Africa/Johannesburg|SAST|-20|0||84e5", "Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5", "Africa/Sao_Tome|GMT WAT|0 -10|01|1UQN0", "Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5", "Africa/Windhoek|CAT WAT|-20 -10|0101010101010|1GQo0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|HST HDT|a0 90|01010101010101010101010|1GIc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|326", "America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1GIb0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|30e4", "America/Santo_Domingo|AST|40|0||29e5", "America/Araguaina|-03 -02|30 20|010|1IdD0 Lz0|14e4", "America/Fortaleza|-03|30|0||34e5", "America/Asuncion|-03 -04|30 40|01010101010101010101010|1GTf0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0|28e5", "America/Panama|EST|50|0||15e5", "America/Mexico_City|CST CDT|60 50|01010101010101010101010|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6", "America/Bahia|-02 -03|20 30|01|1GCq0|27e5", "America/Managua|CST|60|0||22e5", "America/La_Paz|-04|40|0||19e5", "America/Lima|-05|50|0||11e6", "America/Denver|MST MDT|70 60|01010101010101010101010|1GI90 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|26e5", "America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1GCr0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|77e4", "America/Cancun|CST CDT EST|60 50 50|01010102|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5", "America/Chicago|CST CDT|60 50|01010101010101010101010|1GI80 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|MST MDT|70 60|01010101010101010101010|1GQx0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4", "America/Phoenix|MST|70|0||42e5", "America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|15e6", "America/New_York|EST EDT|50 40|01010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|21e6", "America/Rio_Branco|-04 -05|40 50|01|1KLE0|31e4", "America/Fort_Nelson|PST PDT MST|80 70 70|01010102|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Halifax|AST ADT|40 30|01010101010101010101010|1GI60 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|39e4", "America/Godthab|-03 -02|30 20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|17e3", "America/Grand_Turk|EST EDT AST|50 40 40|0101010121010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|37e2", "America/Havana|CST CDT|50 40|01010101010101010101010|1GQt0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0|21e5", "America/Metlakatla|PST AKST AKDT|80 90 80|0121212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|14e2", "America/Miquelon|-03 -02|30 20|01010101010101010101010|1GI50 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|61e2", "America/Montevideo|-02 -03|20 30|01010101|1GI40 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Noronha|-02|20|0||30e2", "America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|23e5", "Antarctica/Palmer|-03 -04|30 40|010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "America/Santiago|-03 -04|30 40|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|62e5", "America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1GCq0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|20e6", "Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e4", "America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1GI5u 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|11e4", "Antarctica/Casey|+11 +08|-b0 -80|0101|1GAF0 blz0 3m10|10", "Antarctica/Davis|+05 +07|-50 -70|01|1GAI0|70", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Pacific/Guadalcanal|+11|-b0|0||11e4", "Asia/Tashkent|+05|-50|0||23e5", "Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5", "Asia/Baghdad|+03|-30|0||66e5", "Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|40", "Asia/Dhaka|+06|-60|0||16e6", "Asia/Amman|EET EEST|-20 -30|010101010101010101010|1GPy0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00|25e5", "Asia/Kamchatka|+12|-c0|0||18e4", "Asia/Baku|+04 +05|-40 -50|010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|+07|-70|0||15e6", "Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0", "Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1GNy0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|22e5", "Asia/Kuala_Lumpur|+08|-80|0||71e5", "Asia/Kolkata|IST|-5u|0||15e6", "Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4", "Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5", "Asia/Shanghai|CST|-80|0||23e6", "Asia/Colombo|+0530|-5u|0||22e5", "Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1GPy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5", "Asia/Dili|+09|-90|0||19e4", "Asia/Dubai|+04|-40|0||39e5", "Asia/Famagusta|EET EEST +03|-20 -30 -30|0101010101201010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1GPy0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5", "Asia/Hong_Kong|HKT|-80|0||73e5", "Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4", "Europe/Istanbul|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|WIB|-70|0||31e6", "Asia/Jayapura|WIT|-90|0||26e4", "Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1GPA0 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0|81e4", "Asia/Kabul|+0430|-4u|0||46e5", "Asia/Karachi|PKT|-50|0||24e6", "Asia/Kathmandu|+0545|-5J|0||12e5", "Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4", "Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5", "Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3", "Asia/Makassar|WITA|-80|0||15e5", "Asia/Manila|PST|-80|0||24e6", "Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|35e5", "Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5", "Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5", "Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5", "Asia/Rangoon|+0630|-6u|0||48e5", "Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4", "Asia/Seoul|KST|-90|0||23e6", "Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2", "Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1GLUu 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6", "Asia/Tokyo|JST|-90|0||38e6", "Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5", "Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4", "Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5", "Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|27e5", "Atlantic/Cape_Verde|-01|10|0||50e4", "Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1GQg0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1GQgu 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST|-a0|0||20e5", "Australia/Darwin|ACST|-9u|0||12e4", "Australia/Eucla|+0845|-8J|0||368", "Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1GQf0 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Perth|AWST|-80|0||18e5", "Pacific/Easter|-05 -06|50 60|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|30e2", "Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5", "Etc/GMT-1|+01|-10|0|", "Pacific/Fakaofo|+13|-d0|0||483", "Pacific/Kiritimati|+14|-e0|0||51e2", "Etc/GMT-2|+02|-20|0|", "Pacific/Tahiti|-10|a0|0||18e4", "Pacific/Niue|-11|b0|0||12e2", "Etc/GMT+12|-12|c0|0|", "Pacific/Galapagos|-06|60|0||25e3", "Etc/GMT+7|-07|70|0|", "Pacific/Pitcairn|-08|80|0||56", "Pacific/Gambier|-09|90|0||125", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Ulyanovsk|+04 +03|-40 -30|010|1N7y0 3rd0|13e5", "Europe/London|GMT BST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|10e6", "Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|67e4", "Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4", "Europe/Kirov|+04 +03|-40 -30|01|1N7y0|48e4", "Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6", "Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810", "Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|0101023|1GNB0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Volgograd|+04 +03|-40 -30|010|1N7y0 9Jd0|10e5", "Pacific/Honolulu|HST|a0|0||37e4", "MET|MET MEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4", "Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Goe0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1VA0 s00 1VA0|88e4", "Pacific/Guam|ChST|-a0|0||17e4", "Pacific/Marquesas|-0930|9u|0||86e2", "Pacific/Pago_Pago|SST|b0|0||37e2", "Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4", "Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3"],
        links: ["Africa/Abidjan|Africa/Accra", "Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Bissau", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Monrovia", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|America/Danmarkshavn", "Africa/Abidjan|Atlantic/Reykjavik", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Abidjan|Etc/GMT", "Africa/Abidjan|Etc/GMT+0", "Africa/Abidjan|Etc/GMT-0", "Africa/Abidjan|Etc/GMT0", "Africa/Abidjan|Etc/Greenwich", "Africa/Abidjan|GMT", "Africa/Abidjan|GMT+0", "Africa/Abidjan|GMT-0", "Africa/Abidjan|GMT0", "Africa/Abidjan|Greenwich", "Africa/Abidjan|Iceland", "Africa/Algiers|Africa/Tunis", "Africa/Cairo|Egypt", "Africa/Casablanca|Africa/El_Aaiun", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Ndjamena", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Juba", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|America/Juneau", "America/Anchorage|America/Nome", "America/Anchorage|America/Sitka", "America/Anchorage|America/Yakutat", "America/Anchorage|US/Alaska", "America/Campo_Grande|America/Cuiaba", "America/Chicago|America/Indiana/Knox", "America/Chicago|America/Indiana/Tell_City", "America/Chicago|America/Knox_IN", "America/Chicago|America/Matamoros", "America/Chicago|America/Menominee", "America/Chicago|America/North_Dakota/Beulah", "America/Chicago|America/North_Dakota/Center", "America/Chicago|America/North_Dakota/New_Salem", "America/Chicago|America/Rainy_River", "America/Chicago|America/Rankin_Inlet", "America/Chicago|America/Resolute", "America/Chicago|America/Winnipeg", "America/Chicago|CST6CDT", "America/Chicago|Canada/Central", "America/Chicago|US/Central", "America/Chicago|US/Indiana-Starke", "America/Chihuahua|America/Mazatlan", "America/Chihuahua|Mexico/BajaSur", "America/Denver|America/Boise", "America/Denver|America/Cambridge_Bay", "America/Denver|America/Edmonton", "America/Denver|America/Inuvik", "America/Denver|America/Ojinaga", "America/Denver|America/Shiprock", "America/Denver|America/Yellowknife", "America/Denver|Canada/Mountain", "America/Denver|MST7MDT", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Fortaleza|America/Argentina/Buenos_Aires", "America/Fortaleza|America/Argentina/Catamarca", "America/Fortaleza|America/Argentina/ComodRivadavia", "America/Fortaleza|America/Argentina/Cordoba", "America/Fortaleza|America/Argentina/Jujuy", "America/Fortaleza|America/Argentina/La_Rioja", "America/Fortaleza|America/Argentina/Mendoza", "America/Fortaleza|America/Argentina/Rio_Gallegos", "America/Fortaleza|America/Argentina/Salta", "America/Fortaleza|America/Argentina/San_Juan", "America/Fortaleza|America/Argentina/San_Luis", "America/Fortaleza|America/Argentina/Tucuman", "America/Fortaleza|America/Argentina/Ushuaia", "America/Fortaleza|America/Belem", "America/Fortaleza|America/Buenos_Aires", "America/Fortaleza|America/Catamarca", "America/Fortaleza|America/Cayenne", "America/Fortaleza|America/Cordoba", "America/Fortaleza|America/Jujuy", "America/Fortaleza|America/Maceio", "America/Fortaleza|America/Mendoza", "America/Fortaleza|America/Paramaribo", "America/Fortaleza|America/Recife", "America/Fortaleza|America/Rosario", "America/Fortaleza|America/Santarem", "America/Fortaleza|Antarctica/Rothera", "America/Fortaleza|Atlantic/Stanley", "America/Fortaleza|Etc/GMT+3", "America/Halifax|America/Glace_Bay", "America/Halifax|America/Goose_Bay", "America/Halifax|America/Moncton", "America/Halifax|America/Thule", "America/Halifax|Atlantic/Bermuda", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/La_Paz|America/Boa_Vista", "America/La_Paz|America/Guyana", "America/La_Paz|America/Manaus", "America/La_Paz|America/Porto_Velho", "America/La_Paz|Brazil/West", "America/La_Paz|Etc/GMT+4", "America/Lima|America/Bogota", "America/Lima|America/Guayaquil", "America/Lima|Etc/GMT+5", "America/Los_Angeles|America/Dawson", "America/Los_Angeles|America/Ensenada", "America/Los_Angeles|America/Santa_Isabel", "America/Los_Angeles|America/Tijuana", "America/Los_Angeles|America/Vancouver", "America/Los_Angeles|America/Whitehorse", "America/Los_Angeles|Canada/Pacific", "America/Los_Angeles|Canada/Yukon", "America/Los_Angeles|Mexico/BajaNorte", "America/Los_Angeles|PST8PDT", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Managua|America/Belize", "America/Managua|America/Costa_Rica", "America/Managua|America/El_Salvador", "America/Managua|America/Guatemala", "America/Managua|America/Regina", "America/Managua|America/Swift_Current", "America/Managua|America/Tegucigalpa", "America/Managua|Canada/Saskatchewan", "America/Mexico_City|America/Bahia_Banderas", "America/Mexico_City|America/Merida", "America/Mexico_City|America/Monterrey", "America/Mexico_City|Mexico/General", "America/New_York|America/Detroit", "America/New_York|America/Fort_Wayne", "America/New_York|America/Indiana/Indianapolis", "America/New_York|America/Indiana/Marengo", "America/New_York|America/Indiana/Petersburg", "America/New_York|America/Indiana/Vevay", "America/New_York|America/Indiana/Vincennes", "America/New_York|America/Indiana/Winamac", "America/New_York|America/Indianapolis", "America/New_York|America/Iqaluit", "America/New_York|America/Kentucky/Louisville", "America/New_York|America/Kentucky/Monticello", "America/New_York|America/Louisville", "America/New_York|America/Montreal", "America/New_York|America/Nassau", "America/New_York|America/Nipigon", "America/New_York|America/Pangnirtung", "America/New_York|America/Thunder_Bay", "America/New_York|America/Toronto", "America/New_York|Canada/Eastern", "America/New_York|EST5EDT", "America/New_York|US/East-Indiana", "America/New_York|US/Eastern", "America/New_York|US/Michigan", "America/Noronha|Atlantic/South_Georgia", "America/Noronha|Brazil/DeNoronha", "America/Noronha|Etc/GMT+2", "America/Panama|America/Atikokan", "America/Panama|America/Cayman", "America/Panama|America/Coral_Harbour", "America/Panama|America/Jamaica", "America/Panama|EST", "America/Panama|Jamaica", "America/Phoenix|America/Creston", "America/Phoenix|America/Dawson_Creek", "America/Phoenix|America/Hermosillo", "America/Phoenix|MST", "America/Phoenix|US/Arizona", "America/Rio_Branco|America/Eirunepe", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Santo_Domingo|America/Anguilla", "America/Santo_Domingo|America/Antigua", "America/Santo_Domingo|America/Aruba", "America/Santo_Domingo|America/Barbados", "America/Santo_Domingo|America/Blanc-Sablon", "America/Santo_Domingo|America/Curacao", "America/Santo_Domingo|America/Dominica", "America/Santo_Domingo|America/Grenada", "America/Santo_Domingo|America/Guadeloupe", "America/Santo_Domingo|America/Kralendijk", "America/Santo_Domingo|America/Lower_Princes", "America/Santo_Domingo|America/Marigot", "America/Santo_Domingo|America/Martinique", "America/Santo_Domingo|America/Montserrat", "America/Santo_Domingo|America/Port_of_Spain", "America/Santo_Domingo|America/Puerto_Rico", "America/Santo_Domingo|America/St_Barthelemy", "America/Santo_Domingo|America/St_Kitts", "America/Santo_Domingo|America/St_Lucia", "America/Santo_Domingo|America/St_Thomas", "America/Santo_Domingo|America/St_Vincent", "America/Santo_Domingo|America/Tortola", "America/Santo_Domingo|America/Virgin", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "Antarctica/Palmer|America/Punta_Arenas", "Asia/Baghdad|Antarctica/Syowa", "Asia/Baghdad|Asia/Aden", "Asia/Baghdad|Asia/Bahrain", "Asia/Baghdad|Asia/Kuwait", "Asia/Baghdad|Asia/Qatar", "Asia/Baghdad|Asia/Riyadh", "Asia/Baghdad|Etc/GMT-3", "Asia/Baghdad|Europe/Minsk", "Asia/Bangkok|Asia/Ho_Chi_Minh", "Asia/Bangkok|Asia/Novokuznetsk", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Saigon", "Asia/Bangkok|Asia/Vientiane", "Asia/Bangkok|Etc/GMT-7", "Asia/Bangkok|Indian/Christmas", "Asia/Dhaka|Antarctica/Vostok", "Asia/Dhaka|Asia/Almaty", "Asia/Dhaka|Asia/Bishkek", "Asia/Dhaka|Asia/Dacca", "Asia/Dhaka|Asia/Kashgar", "Asia/Dhaka|Asia/Qyzylorda", "Asia/Dhaka|Asia/Thimbu", "Asia/Dhaka|Asia/Thimphu", "Asia/Dhaka|Asia/Urumqi", "Asia/Dhaka|Etc/GMT-6", "Asia/Dhaka|Indian/Chagos", "Asia/Dili|Etc/GMT-9", "Asia/Dili|Pacific/Palau", "Asia/Dubai|Asia/Muscat", "Asia/Dubai|Asia/Tbilisi", "Asia/Dubai|Asia/Yerevan", "Asia/Dubai|Etc/GMT-4", "Asia/Dubai|Europe/Samara", "Asia/Dubai|Indian/Mahe", "Asia/Dubai|Indian/Mauritius", "Asia/Dubai|Indian/Reunion", "Asia/Gaza|Asia/Hebron", "Asia/Hong_Kong|Hongkong", "Asia/Jakarta|Asia/Pontianak", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kamchatka|Asia/Anadyr", "Asia/Kamchatka|Etc/GMT-12", "Asia/Kamchatka|Kwajalein", "Asia/Kamchatka|Pacific/Funafuti", "Asia/Kamchatka|Pacific/Kwajalein", "Asia/Kamchatka|Pacific/Majuro", "Asia/Kamchatka|Pacific/Nauru", "Asia/Kamchatka|Pacific/Tarawa", "Asia/Kamchatka|Pacific/Wake", "Asia/Kamchatka|Pacific/Wallis", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Kuala_Lumpur|Asia/Brunei", "Asia/Kuala_Lumpur|Asia/Kuching", "Asia/Kuala_Lumpur|Asia/Singapore", "Asia/Kuala_Lumpur|Etc/GMT-8", "Asia/Kuala_Lumpur|Singapore", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Rangoon|Asia/Yangon", "Asia/Rangoon|Indian/Cocos", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|Asia/Macao", "Asia/Shanghai|Asia/Macau", "Asia/Shanghai|Asia/Taipei", "Asia/Shanghai|PRC", "Asia/Shanghai|ROC", "Asia/Tashkent|Antarctica/Mawson", "Asia/Tashkent|Asia/Aqtau", "Asia/Tashkent|Asia/Aqtobe", "Asia/Tashkent|Asia/Ashgabat", "Asia/Tashkent|Asia/Ashkhabad", "Asia/Tashkent|Asia/Atyrau", "Asia/Tashkent|Asia/Dushanbe", "Asia/Tashkent|Asia/Oral", "Asia/Tashkent|Asia/Samarkand", "Asia/Tashkent|Etc/GMT-5", "Asia/Tashkent|Indian/Kerguelen", "Asia/Tashkent|Indian/Maldives", "Asia/Tehran|Iran", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Choibalsan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Vladivostok|Asia/Ust-Nera", "Asia/Yakutsk|Asia/Khandyga", "Atlantic/Azores|America/Scoresbysund", "Atlantic/Cape_Verde|Etc/GMT+1", "Australia/Adelaide|Australia/Broken_Hill", "Australia/Adelaide|Australia/South", "Australia/Adelaide|Australia/Yancowinna", "Australia/Brisbane|Australia/Lindeman", "Australia/Brisbane|Australia/Queensland", "Australia/Darwin|Australia/North", "Australia/Lord_Howe|Australia/LHI", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/Currie", "Australia/Sydney|Australia/Hobart", "Australia/Sydney|Australia/Melbourne", "Australia/Sydney|Australia/NSW", "Australia/Sydney|Australia/Tasmania", "Australia/Sydney|Australia/Victoria", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Athens|Asia/Nicosia", "Europe/Athens|EET", "Europe/Athens|Europe/Bucharest", "Europe/Athens|Europe/Helsinki", "Europe/Athens|Europe/Kiev", "Europe/Athens|Europe/Mariehamn", "Europe/Athens|Europe/Nicosia", "Europe/Athens|Europe/Riga", "Europe/Athens|Europe/Sofia", "Europe/Athens|Europe/Tallinn", "Europe/Athens|Europe/Uzhgorod", "Europe/Athens|Europe/Vilnius", "Europe/Athens|Europe/Zaporozhye", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Atlantic/Canary", "Europe/Lisbon|Atlantic/Faeroe", "Europe/Lisbon|Atlantic/Faroe", "Europe/Lisbon|Atlantic/Madeira", "Europe/Lisbon|Portugal", "Europe/Lisbon|WET", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Paris|Africa/Ceuta", "Europe/Paris|Arctic/Longyearbyen", "Europe/Paris|Atlantic/Jan_Mayen", "Europe/Paris|CET", "Europe/Paris|Europe/Amsterdam", "Europe/Paris|Europe/Andorra", "Europe/Paris|Europe/Belgrade", "Europe/Paris|Europe/Berlin", "Europe/Paris|Europe/Bratislava", "Europe/Paris|Europe/Brussels", "Europe/Paris|Europe/Budapest", "Europe/Paris|Europe/Busingen", "Europe/Paris|Europe/Copenhagen", "Europe/Paris|Europe/Gibraltar", "Europe/Paris|Europe/Ljubljana", "Europe/Paris|Europe/Luxembourg", "Europe/Paris|Europe/Madrid", "Europe/Paris|Europe/Malta", "Europe/Paris|Europe/Monaco", "Europe/Paris|Europe/Oslo", "Europe/Paris|Europe/Podgorica", "Europe/Paris|Europe/Prague", "Europe/Paris|Europe/Rome", "Europe/Paris|Europe/San_Marino", "Europe/Paris|Europe/Sarajevo", "Europe/Paris|Europe/Skopje", "Europe/Paris|Europe/Stockholm", "Europe/Paris|Europe/Tirane", "Europe/Paris|Europe/Vaduz", "Europe/Paris|Europe/Vatican", "Europe/Paris|Europe/Vienna", "Europe/Paris|Europe/Warsaw", "Europe/Paris|Europe/Zagreb", "Europe/Paris|Europe/Zurich", "Europe/Paris|Poland", "Europe/Ulyanovsk|Europe/Astrakhan", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Easter|Chile/EasterIsland", "Pacific/Fakaofo|Etc/GMT-13", "Pacific/Fakaofo|Pacific/Enderbury", "Pacific/Galapagos|Etc/GMT+6", "Pacific/Gambier|Etc/GMT+9", "Pacific/Guadalcanal|Antarctica/Macquarie", "Pacific/Guadalcanal|Etc/GMT-11", "Pacific/Guadalcanal|Pacific/Efate", "Pacific/Guadalcanal|Pacific/Kosrae", "Pacific/Guadalcanal|Pacific/Noumea", "Pacific/Guadalcanal|Pacific/Pohnpei", "Pacific/Guadalcanal|Pacific/Ponape", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|HST", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kiritimati|Etc/GMT-14", "Pacific/Niue|Etc/GMT+11", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pitcairn|Etc/GMT+8", "Pacific/Port_Moresby|Antarctica/DumontDUrville", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Port_Moresby|Pacific/Chuuk", "Pacific/Port_Moresby|Pacific/Truk", "Pacific/Port_Moresby|Pacific/Yap", "Pacific/Tahiti|Etc/GMT+10", "Pacific/Tahiti|Pacific/Rarotonga"]
      }), i;
    }, e.exports ? e.exports = n(Fs) : n(t.moment);
  }),
      Gs = function Gs(e, t) {
    var n = e.toString();

    function r(r) {
      return function (e, t, n) {
        return r + t + (n[0].toUpperCase() === n[0] ? "A" : "a");
      };
    }

    if ((t = t || {}).preferredOrder = t.preferredOrder || Oc, (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(Cc, "x")).replace(Dc, "X")).replace(Tc, "[$1]")).replace(Us, "dddd")).replace($s, "ddd")).replace(Vs, "dd")).replace(Xs, "Do")).replace(Ks, "MMMM")).replace(Js, "MMM")).replace(Zs, function (e, t, n, r, a, i) {
      var o,
          s = 1 === Math.min(n.length, a.length, i.length),
          c = 4 === Math.max(n.length, a.length, i.length),
          l = "string" == typeof e.preferredOrder ? e.preferredOrder : e.preferredOrder[r];
      return n = parseInt(n, 10), a = parseInt(a, 10), i = parseInt(i, 10), o = [n, a, i], l = l.toUpperCase(), 31 < n ? (o[0] = c ? "YYYY" : "YY", o[1] = s ? "M" : "MM", o[2] = s ? "D" : "DD") : 12 < a ? (o[0] = s ? "M" : "MM", o[1] = s ? "D" : "DD", o[2] = c ? "YYYY" : "YY") : 31 < i ? (o[2] = c ? "YYYY" : "YY", "M" === l[0] && n < 13 ? (o[0] = s ? "M" : "MM", o[1] = s ? "D" : "DD") : (o[0] = s ? "D" : "DD", o[1] = s ? "M" : "MM")) : (o[l.indexOf("D")] = s ? "D" : "DD", o[l.indexOf("M")] = s ? "M" : "MM", o[l.indexOf("Y")] = c ? "YYYY" : "YY"), o.join(r);
    }.bind(null, t))).replace(Qs, "Z")).replace(sc, "HH:mm:ss.SSS")).replace(cc, "HH:mm:ss.SS")).replace(lc, "HH:mm:ss.S")).replace(tc, r("hh:mm:ss"))).replace(ac, r("h:mm:ss"))).replace(nc, r("hh:mm"))).replace(ic, r("h:mm"))).replace(rc, r("hh"))).replace(oc, r("h"))).replace(uc, "HH:mm:ss")).replace(hc, "H:mm:ss.SSS")).replace(pc, "H:mm:ss.SS")).replace(mc, "H:mm:ss.S")).replace(dc, "H:mm:ss")).replace(fc, "HH:mm")).replace(gc, "H:mm")).replace(vc, "YYYY")).replace(wc, "D/M")).replace(Ac, "D/MM")).replace(xc, "DD/M")).replace(kc, "DD/MM")).replace(Sc, "M/YY")).replace(Ec, "MM/YY")).match(Mc)) {
      n = (n = n.replace(/0\d.\d{2}|\d{2}.\d{2}/, "H.mm")).replace(/\d{1}.\d{2}/, "h.mm");
    }

    (n = (n = (n = n.replace(yc, "DD")).replace(bc, "D")).replace(_c, "YY")).length < 1 && (n = void 0);
    return n;
  },
      Us = new RegExp(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].join("|"), "i"),
      $s = new RegExp(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].join("|"), "i"),
      Vs = new RegExp("\\b(" + ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].join("|") + ")\\b", "i"),
      Ks = new RegExp(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].join("|"), "i"),
      Js = new RegExp(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].join("|"), "i"),
      Xs = /(\d+)(st|nd|rd|th)\b/i,
      Zs = /(\d{1,4})([/.-])(\d{1,2})[/.-](\d{1,4})/,
      Qs = /((\+|-)\d\d:?\d\d)$/,
      ec = "(" + ["AM?", "PM?"].join("|") + ")",
      tc = new RegExp("0\\d\\:\\d{1,2}\\:\\d{1,2}(\\s*)" + ec, "i"),
      nc = new RegExp("0\\d\\:\\d{1,2}(\\s*)" + ec, "i"),
      rc = new RegExp("0\\d(\\s*)" + ec, "i"),
      ac = new RegExp("\\d{1,2}\\:\\d{1,2}\\:\\d{1,2}(\\s*)" + ec, "i"),
      ic = new RegExp("\\d{1,2}\\:\\d{1,2}(\\s*)" + ec, "i"),
      oc = new RegExp("\\d{1,2}(\\s*)" + ec, "i"),
      sc = /\d{2}:\d{2}:\d{2}\.\d{3}/,
      cc = /\d{2}:\d{2}:\d{2}\.\d{2}/,
      lc = /\d{2}:\d{2}:\d{2}\.\d{1}/,
      uc = /0\d:\d{2}:\d{2}/,
      fc = /0\d:\d{2}/,
      dc = /\d{1,2}:\d{2}:\d{2}/,
      hc = /\d{1,2}:\d{2}:\d{2}\.\d{3}/,
      pc = /\d{1,2}:\d{2}:\d{2}\.\d{2}/,
      mc = /\d{1,2}:\d{2}:\d{2}\.\d{1}/,
      gc = /\d{1,2}:\d{2}/,
      vc = /\d{4}/,
      yc = /0\d/,
      bc = /\d{1,2}/,
      _c = /\d{2}/,
      wc = /^([1-9])\/([1-9]|0[1-9])$/,
      Ac = /^([1-9])\/(1[012])$/,
      xc = /^(0[1-9]|[12][0-9]|3[01])\/([1-9])$/,
      kc = /^(0[1-9]|[12][0-9]|3[01])\/(1[012]|0[1-9])$/,
      Sc = /^([1-9])\/([1-9][0-9])$/,
      Ec = /^(0[1-9]|1[012])\/([1-9][0-9])$/,
      Mc = /([/][M]|[M][/]|[MM]|[MMMM])/,
      Tc = /\b(at)\b/i,
      Cc = /\d{13}/,
      Dc = /\d{10}/,
      Oc = {
    "/": "MDY",
    ".": "DMY",
    "-": "YMD"
  };

  var Nc = Gs;

  function jc(e, t, n) {
    if (Rs.test(e)) return Bs(new Date(e));

    if (Ps.test(e)) {
      var r = Ps.exec(e);
      return Bs().subtract(r[1], r[2]);
    }

    return Ns.test(e) ? Bs() : t ? Bs.tz(e, n || Nc(e), t) : Bs(e, n || Nc(e));
  }

  function Pc(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.timezone,
        r = t.format;
    if (Ms.test(e) || Ts.test(e)) return new Date(_a(e, 10)).toISOString();
    var a = jc(e, n, r);
    return a.isValid() || (a = jc(e = (e.match(Ls) || []).join(" ").replace(Os, "m").replace(Ds, "$1 $2 $3").replace(Cs, "$1").trim(), n, r)), a.isValid() ? a.toISOString() : null;
  }

  function zc(e, t) {
    var n,
        r,
        a,
        i,
        o,
        s,
        c = t.$,
        l = (t.cleanConditionally, t.title),
        u = void 0 === l ? "" : l,
        f = t.url,
        d = void 0 === f ? "" : f,
        h = t.defaultCleaner,
        p = void 0 === h || h;
    return n = Mi((n = Mi((n = c)("html"), n, "div"))("body"), n, "div"), p && Ti(e, c), Go(e, c, d), function (e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [];

      if (0 === r.length && (r = ui), n) {
        var a = Mr.parse(n),
            i = a.protocol,
            o = a.hostname;
        r = [].concat(Li(r), ['iframe[src^="'.concat(i, "//").concat(o, '"]')]);
      }

      t(r.join(","), e).addClass(li);
    }(e, c, d), function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
      0 === n.length && (n = fi), t(n.join(","), e).not(".".concat(li)).remove();
    }(e, c), (a = (r = c)("h1", e)).length < 3 ? a.each(function (e, t) {
      return r(t).remove();
    }) : a.each(function (e, t) {
      Mi(r(t), r, "h2");
    }), function (r, a) {
      var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
      a(pi, r).each(function (e, t) {
        var n = a(t);
        return 0 === a(n, r).prevAll("p").length ? n.remove() : ca(a(t).text()) === i ? n.remove() : $i(a(t)) < 0 ? n.remove() : n;
      });
    }(e, c, u), p && lo(e, c), i = c, e.find("p").each(function (e, t) {
      var n = i(t);
      0 === n.find("iframe, img").length && "" === n.text().trim() && n.remove();
    }), s = c, Ri((o = e).parent().length ? o.parent() : o, s), e;
  }

  function Lc(e, t) {
    var n = t.url,
        r = t.$;

    if (Ys.test(e) && (e = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
          n = e.split(Ys);
      if (1 === n.length) return e;

      var r = function (e, t) {
        if (6 <= e.length) {
          var n = e.reduce(function (e, t) {
            return e[t] = e[t] ? e[t] + 1 : 1, e;
          }, {}),
              r = si(n).reduce(function (e, t) {
            return e[1] < n[t] ? [t, n[t]] : e;
          }, [0, 0]),
              a = Na(r, 2),
              i = a[0],
              o = a[1];
          2 <= o && i.length <= 4 && (e = t.split(i));
          var s = [e[0], e.slice(-1)],
              c = s.reduce(function (e, t) {
            return e.length > t.length ? e : t;
          }, "");
          return 10 < c.length ? c : t;
        }

        return null;
      }(n, e);

      return r || (r = function (e, t) {
        var n = Mr.parse(t).host.replace(Ws, ""),
            r = e[0].toLowerCase().replace(" ", "");
        if (.4 < qc.levenshtein(r, n) && 5 < r.length) return e.slice(2).join("");
        var a = e.slice(-1)[0].toLowerCase().replace(" ", "");
        return .4 < qc.levenshtein(a, n) && 5 <= a.length ? e.slice(0, -2).join("") : null;
      }(n, t)) || e;
    }(e, n)), 150 < e.length) {
      var a = r("h1");
      1 === a.length && (e = a.text());
    }

    return ca(es(e, r).trim());
  }

  "undefined" != typeof window && window.moment && (window.moment.parseFormat = Gs);
  var Rc = e(function (l, u) {
    (function () {
      var ot,
          t = [],
          n = [],
          st = 0,
          ct = +new Date() + "",
          lt = 75,
          r = 40,
          ut = " \t\x0B\f\xA0\uFEFF\n\r\u2028\u2029\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000",
          ft = /\b__p \+= '';/g,
          dt = /\b(__p \+=) '' \+/g,
          ht = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          mt = /\w*$/,
          gt = /^\s*function[ \n\r\t]+\w/,
          vt = /<%=([\s\S]+?)%>/g,
          yt = RegExp("^[" + ut + "]*0+(?=.$)"),
          bt = /($^)/,
          _t = /\bthis\b/,
          wt = /['\n\r\t\u2028\u2029\\]/g,
          At = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
          xt = 0,
          kt = "[object Arguments]",
          St = "[object Array]",
          Et = "[object Boolean]",
          Mt = "[object Date]",
          Tt = "[object Function]",
          Ct = "[object Number]",
          Dt = "[object Object]",
          Ot = "[object RegExp]",
          Nt = "[object String]",
          jt = {};
      jt[Tt] = !1, jt[kt] = jt[St] = jt[Et] = jt[Mt] = jt[Ct] = jt[Dt] = jt[Ot] = jt[Nt] = !0;
      var Pt = {
        leading: !1,
        maxWait: 0,
        trailing: !1
      },
          zt = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
      },
          Lt = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
      },
          a = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
          Rt = Lt[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
          e = u && !u.nodeType && u,
          i = l && !l.nodeType && l,
          o = i && i.exports === e && e,
          s = Lt[_typeof(er)] && er;

      function Yt(e, t, n) {
        for (var r = (n || 0) - 1, a = e ? e.length : 0; ++r < a;) {
          if (e[r] === t) return r;
        }

        return -1;
      }

      function Wt(e, t) {
        var n = _typeof(t);

        if (e = e.cache, "boolean" == n || null == t) return e[t] ? 0 : -1;
        "number" != n && "string" != n && (n = "object");
        var r = "number" == n ? t : ct + t;
        return e = (e = e[n]) && e[r], "object" == n ? e && -1 < Yt(e, t) ? 0 : -1 : e ? 0 : -1;
      }

      function c(e) {
        var t = this.cache,
            n = _typeof(e);

        if ("boolean" == n || null == e) t[e] = !0;else {
          "number" != n && "string" != n && (n = "object");
          var r = "number" == n ? e : ct + e,
              a = t[n] || (t[n] = {});
          "object" == n ? (a[r] || (a[r] = [])).push(e) : a[r] = !0;
        }
      }

      function qt(e) {
        return e.charCodeAt(0);
      }

      function It(e, t) {
        for (var n = e.criteria, r = t.criteria, a = -1, i = n.length; ++a < i;) {
          var o = n[a],
              s = r[a];

          if (o !== s) {
            if (s < o || void 0 === o) return 1;
            if (o < s || void 0 === s) return -1;
          }
        }

        return e.index - t.index;
      }

      function Ht(e) {
        var t = -1,
            n = e.length,
            r = e[0],
            a = e[n / 2 | 0],
            i = e[n - 1];
        if (r && "object" == _typeof(r) && a && "object" == _typeof(a) && i && "object" == _typeof(i)) return !1;
        var o = Gt();
        o["false"] = o["null"] = o["true"] = o[void 0] = !1;
        var s = Gt();

        for (s.array = e, s.cache = o, s.push = c; ++t < n;) {
          s.push(e[t]);
        }

        return s;
      }

      function Ft(e) {
        return "\\" + a[e];
      }

      function Bt() {
        return t.pop() || [];
      }

      function Gt() {
        return n.pop() || {
          array: null,
          cache: null,
          criteria: null,
          "false": !1,
          index: 0,
          "null": !1,
          number: null,
          object: null,
          push: null,
          string: null,
          "true": !1,
          undefined: !1,
          value: null
        };
      }

      function Ut(e) {
        e.length = 0, t.length < r && t.push(e);
      }

      function $t(e) {
        var t = e.cache;
        t && $t(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, n.length < r && n.push(e);
      }

      function Vt(e, t, n) {
        t || (t = 0), void 0 === n && (n = e ? e.length : 0);

        for (var r = -1, a = n - t || 0, i = Array(a < 0 ? 0 : a); ++r < a;) {
          i[r] = e[t + r];
        }

        return i;
      }

      !s || s.global !== s && s.window !== s || (Rt = s);

      var Kt = function e(r) {
        var c = (r = r ? Kt.defaults(Rt.Object(), r, Kt.pick(Rt, At)) : Rt).Array,
            t = r.Boolean,
            n = r.Date,
            g = r.Function,
            a = r.Math,
            i = r.Number,
            o = r.Object,
            v = r.RegExp,
            _ = r.String,
            y = r.TypeError,
            s = [],
            l = o.prototype,
            u = r._,
            w = l.toString,
            f = v("^" + _(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            d = a.ceil,
            b = r.clearTimeout,
            h = a.floor,
            p = g.prototype.toString,
            m = ne(m = o.getPrototypeOf) && m,
            A = l.hasOwnProperty,
            x = s.push,
            k = r.setTimeout,
            S = s.splice,
            E = s.unshift,
            M = function () {
          try {
            var e = {},
                t = ne(t = o.defineProperty) && t,
                n = t(e, e, e) && t;
          } catch (e) {}

          return n;
        }(),
            T = ne(T = o.create) && T,
            C = ne(C = c.isArray) && C,
            D = r.isFinite,
            O = r.isNaN,
            N = ne(N = o.keys) && N,
            j = a.max,
            P = a.min,
            z = r.parseInt,
            L = a.random,
            R = {};

        function Y(e) {
          return e && "object" == _typeof(e) && !se(e) && A.call(e, "__wrapped__") ? e : new W(e);
        }

        function W(e, t) {
          this.__chain__ = !!t, this.__wrapped__ = e;
        }

        R[St] = c, R[Et] = t, R[Mt] = n, R[Tt] = g, R[Dt] = o, R[Ct] = i, R[Ot] = v, R[Nt] = _, W.prototype = Y.prototype;
        var q = Y.support = {};

        function I(e) {
          var r = e[0],
              a = e[2],
              i = e[4];

          function o() {
            if (a) {
              var e = Vt(a);
              x.apply(e, arguments);
            }

            if (this instanceof o) {
              var t = F(r.prototype),
                  n = r.apply(t, e || arguments);
              return we(n) ? n : t;
            }

            return r.apply(i, e || arguments);
          }

          return re(o, e), o;
        }

        function H(e, n, r, a, i) {
          if (r) {
            var o = r(e);
            if (void 0 !== o) return o;
          }

          if (!we(e)) return e;
          var t = w.call(e);
          if (!jt[t]) return e;
          var s = R[t];

          switch (t) {
            case Et:
            case Mt:
              return new s(+e);

            case Ct:
            case Nt:
              return new s(e);

            case Ot:
              return (o = s(e.source, mt.exec(e))).lastIndex = e.lastIndex, o;
          }

          var c = se(e);

          if (n) {
            var l = !a;
            a || (a = Bt()), i || (i = Bt());

            for (var u = a.length; u--;) {
              if (a[u] == e) return i[u];
            }

            o = c ? s(e.length) : {};
          } else o = c ? Vt(e) : he({}, e);

          return c && (A.call(e, "index") && (o.index = e.index), A.call(e, "input") && (o.input = e.input)), n && (a.push(e), i.push(o), (c ? Oe : ge)(e, function (e, t) {
            o[t] = H(e, n, r, a, i);
          }), l && (Ut(a), Ut(i))), o;
        }

        function F(e, t) {
          return we(e) ? T(e) : {};
        }

        function B(a, i, e) {
          if ("function" != typeof a) return Ze;
          if (void 0 === i || !("prototype" in a)) return a;
          var t = a.__bindData__;

          if (void 0 === t && (q.funcNames && (t = !a.name), !(t = t || !q.funcDecomp))) {
            var n = p.call(a);
            q.funcNames || (t = !gt.test(n)), t || (t = _t.test(n), re(a, t));
          }

          if (!1 === t || !0 !== t && 1 & t[1]) return a;

          switch (e) {
            case 1:
              return function (e) {
                return a.call(i, e);
              };

            case 2:
              return function (e, t) {
                return a.call(i, e, t);
              };

            case 3:
              return function (e, t, n) {
                return a.call(i, e, t, n);
              };

            case 4:
              return function (e, t, n, r) {
                return a.call(i, e, t, n, r);
              };
          }

          return Je(a, i);
        }

        function G(e) {
          var r = e[0],
              a = e[1],
              i = e[2],
              o = e[3],
              s = e[4],
              c = e[5],
              l = 1 & a,
              u = 2 & a,
              f = 4 & a,
              d = 8 & a,
              h = r;

          function p() {
            var e = l ? s : this;

            if (i) {
              var t = Vt(i);
              x.apply(t, arguments);
            }

            if ((o || f) && (t || (t = Vt(arguments)), o && x.apply(t, o), f && t.length < c)) return a |= 16, G([r, d ? a : -4 & a, t, null, s, c]);

            if (t || (t = arguments), u && (r = e[h]), this instanceof p) {
              e = F(r.prototype);
              var n = r.apply(e, t);
              return we(n) ? n : e;
            }

            return r.apply(e, t);
          }

          return re(p, e), p;
        }

        function U(e, t) {
          var n = -1,
              r = te(),
              a = e ? e.length : 0,
              i = lt <= a && r === Yt,
              o = [];

          if (i) {
            var s = Ht(t);
            s ? (r = Wt, t = s) : i = !1;
          }

          for (; ++n < a;) {
            var c = e[n];
            r(t, c) < 0 && o.push(c);
          }

          return i && $t(t), o;
        }

        function $(e, t, n, r) {
          for (var a = (r || 0) - 1, i = e ? e.length : 0, o = []; ++a < i;) {
            var s = e[a];

            if (s && "object" == _typeof(s) && "number" == typeof s.length && (se(s) || oe(s))) {
              t || (s = $(s, t, n));
              var c = -1,
                  l = s.length,
                  u = o.length;

              for (o.length += l; ++c < l;) {
                o[u++] = s[c];
              }
            } else n || o.push(s);
          }

          return o;
        }

        function V(r, e, a, i, o, s) {
          if (a) {
            var c = a(r, e);
            if (void 0 !== c) return !!c;
          }

          if (r === e) return 0 !== r || 1 / r == 1 / e;

          var t = _typeof(e);

          if (!(r != r || r && Lt[_typeof(r)] || e && Lt[t])) return !1;
          if (null == r || null == e) return r === e;
          var n = w.call(r),
              l = w.call(e);
          if (n == kt && (n = Dt), l == kt && (l = Dt), n != l) return !1;

          switch (n) {
            case Et:
            case Mt:
              return +r == +e;

            case Ct:
              return r != +r ? e != +e : 0 == r ? 1 / r == 1 / e : r == +e;

            case Ot:
            case Nt:
              return r == _(e);
          }

          var u = n == St;

          if (!u) {
            var f = A.call(r, "__wrapped__"),
                d = A.call(e, "__wrapped__");
            if (f || d) return V(f ? r.__wrapped__ : r, d ? e.__wrapped__ : e, a, i, o, s);
            if (n != Dt) return !1;
            var h = r.constructor,
                p = e.constructor;
            if (h != p && !(_e(h) && h instanceof h && _e(p) && p instanceof p) && "constructor" in r && "constructor" in e) return !1;
          }

          var m = !o;
          o || (o = Bt()), s || (s = Bt());

          for (var g = o.length; g--;) {
            if (o[g] == r) return s[g] == e;
          }

          var v = 0;

          if (c = !0, o.push(r), s.push(e), u) {
            if (g = r.length, v = e.length, (c = v == g) || i) for (; v--;) {
              var y = g,
                  b = e[v];
              if (i) for (; y-- && !(c = V(r[y], b, a, i, o, s));) {
                ;
              } else if (!(c = V(r[v], b, a, i, o, s))) break;
            }
          } else me(e, function (e, t, n) {
            if (A.call(n, t)) return v++, c = A.call(r, t) && V(r[t], e, a, i, o, s);
          }), c && !i && me(r, function (e, t, n) {
            if (A.call(n, t)) return c = -1 < --v;
          });

          return o.pop(), s.pop(), m && (Ut(o), Ut(s)), c;
        }

        function K(c, e, l, u, f) {
          (se(e) ? Oe : ge)(e, function (e, t) {
            var n,
                r,
                a = e,
                i = c[t];

            if (e && ((r = se(e)) || xe(e))) {
              for (var o, s = u.length; s--;) {
                if (n = u[s] == e) {
                  i = f[s];
                  break;
                }
              }

              n || (l && (o = void 0 !== (a = l(i, e))) && (i = a), o || (i = r ? se(i) ? i : [] : xe(i) ? i : {}), u.push(e), f.push(i), o || K(i, e, l, u, f));
            } else l && void 0 === (a = l(i, e)) && (a = e), void 0 !== a && (i = a);

            c[t] = i;
          });
        }

        function J(e, t) {
          return e + h(L() * (t - e + 1));
        }

        function X(e, t, n) {
          var r = -1,
              a = te(),
              i = e ? e.length : 0,
              o = [],
              s = !t && lt <= i && a === Yt,
              c = n || s ? Bt() : o;

          for (s && (a = Wt, c = Ht(c)); ++r < i;) {
            var l = e[r],
                u = n ? n(l, r, e) : l;
            (t ? !r || c[c.length - 1] !== u : a(c, u) < 0) && ((n || s) && c.push(u), o.push(l));
          }

          return s ? (Ut(c.array), $t(c)) : n && Ut(c), o;
        }

        function Z(s) {
          return function (e, r, t) {
            var a = {};
            r = Y.createCallback(r, t, 3);
            var n = -1,
                i = e ? e.length : 0;
            if ("number" == typeof i) for (; ++n < i;) {
              var o = e[n];
              s(a, o, r(o, n, e), e);
            } else ge(e, function (e, t, n) {
              s(a, e, r(e, t, n), n);
            });
            return a;
          };
        }

        function Q(e, t, n, r, a, i) {
          var o = 1 & t,
              s = 4 & t,
              c = 16 & t,
              l = 32 & t;
          if (!(2 & t || _e(e))) throw new y();
          c && !n.length && (t &= -17, c = n = !1), l && !r.length && (t &= -33, l = r = !1);
          var u = e && e.__bindData__;
          return u && !0 !== u ? ((u = Vt(u))[2] && (u[2] = Vt(u[2])), u[3] && (u[3] = Vt(u[3])), !o || 1 & u[1] || (u[4] = a), !o && 1 & u[1] && (t |= 8), !s || 4 & u[1] || (u[5] = i), c && x.apply(u[2] || (u[2] = []), n), l && E.apply(u[3] || (u[3] = []), r), u[1] |= t, Q.apply(null, u)) : (1 == t || 17 === t ? I : G)([e, t, n, r, a, i]);
        }

        function ee(e) {
          return le[e];
        }

        function te() {
          var e = (e = Y.indexOf) === Be ? Yt : e;
          return e;
        }

        function ne(e) {
          return "function" == typeof e && f.test(e);
        }

        q.funcDecomp = !ne(r.WinRTError) && _t.test(e), q.funcNames = "string" == typeof g.name, Y.templateSettings = {
          escape: /<%-([\s\S]+?)%>/g,
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: vt,
          variable: "",
          imports: {
            _: Y
          }
        }, T || (F = function () {
          function n() {}

          return function (e) {
            if (we(e)) {
              n.prototype = e;
              var t = new n();
              n.prototype = null;
            }

            return t || r.Object();
          };
        }());
        var re = M ? function (e, t) {
          zt.value = t, M(e, "__bindData__", zt), zt.value = null;
        } : et;

        function ae(e) {
          var t, n;
          return !(!e || w.call(e) != Dt || _e(t = e.constructor) && !(t instanceof t)) && (me(e, function (e, t) {
            n = t;
          }), void 0 === n || A.call(e, n));
        }

        function ie(e) {
          return ue[e];
        }

        function oe(e) {
          return e && "object" == _typeof(e) && "number" == typeof e.length && w.call(e) == kt || !1;
        }

        var se = C || function (e) {
          return e && "object" == _typeof(e) && "number" == typeof e.length && w.call(e) == St || !1;
        },
            ce = N ? function (e) {
          return we(e) ? N(e) : [];
        } : function (e) {
          var t,
              n = e,
              r = [];
          if (!n) return r;
          if (!Lt[_typeof(e)]) return r;

          for (t in n) {
            A.call(n, t) && r.push(t);
          }

          return r;
        },
            le = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        },
            ue = be(le),
            fe = v("(" + ce(ue).join("|") + ")", "g"),
            de = v("[" + ce(le).join("") + "]", "g"),
            he = function he(e, t, n) {
          var r,
              a = e,
              i = a;
          if (!a) return i;
          var o = arguments,
              s = 0,
              c = "number" == typeof n ? 2 : o.length;
          if (3 < c && "function" == typeof o[c - 2]) var l = B(o[--c - 1], o[c--], 2);else 2 < c && "function" == typeof o[c - 1] && (l = o[--c]);

          for (; ++s < c;) {
            if ((a = o[s]) && Lt[_typeof(a)]) for (var u = -1, f = Lt[_typeof(a)] && ce(a), d = f ? f.length : 0; ++u < d;) {
              i[r = f[u]] = l ? l(i[r], a[r]) : a[r];
            }
          }

          return i;
        };

        var pe = function pe(e, t, n) {
          var r,
              a = e,
              i = a;
          if (!a) return i;

          for (var o = arguments, s = 0, c = "number" == typeof n ? 2 : o.length; ++s < c;) {
            if ((a = o[s]) && Lt[_typeof(a)]) for (var l = -1, u = Lt[_typeof(a)] && ce(a), f = u ? u.length : 0; ++l < f;) {
              void 0 === i[r = u[l]] && (i[r] = a[r]);
            }
          }

          return i;
        };

        var me = function me(e, t, n) {
          var r,
              a = e,
              i = a;
          if (!a) return i;
          if (!Lt[_typeof(a)]) return i;

          for (r in t = t && void 0 === n ? t : B(t, n, 3), a) {
            if (!1 === t(a[r], r, e)) return i;
          }

          return i;
        };

        var ge = function ge(e, t, n) {
          var r,
              a = e,
              i = a;
          if (!a) return i;
          if (!Lt[_typeof(a)]) return i;
          t = t && void 0 === n ? t : B(t, n, 3);

          for (var o = -1, s = Lt[_typeof(a)] && ce(a), c = s ? s.length : 0; ++o < c;) {
            if (!1 === t(a[r = s[o]], r, e)) return i;
          }

          return i;
        };

        function ve(e, t, n) {
          var r = ce(e),
              a = r.length;

          for (t = B(t, n, 3); a--;) {
            var i = r[a];
            if (!1 === t(e[i], i, e)) break;
          }

          return e;
        }

        function ye(e) {
          var n = [];
          return me(e, function (e, t) {
            _e(e) && n.push(t);
          }), n.sort();
        }

        function be(e) {
          for (var t = -1, n = ce(e), r = n.length, a = {}; ++t < r;) {
            var i = n[t];
            a[e[i]] = i;
          }

          return a;
        }

        function _e(e) {
          return "function" == typeof e;
        }

        function we(e) {
          return !(!e || !Lt[_typeof(e)]);
        }

        function Ae(e) {
          return "number" == typeof e || e && "object" == _typeof(e) && w.call(e) == Ct || !1;
        }

        var xe = m ? function (e) {
          if (!e || w.call(e) != Dt) return !1;
          var t = e.valueOf,
              n = ne(t) && (n = m(t)) && m(n);
          return n ? e == n || m(e) == n : ae(e);
        } : ae;

        function ke(e) {
          return "string" == typeof e || e && "object" == _typeof(e) && w.call(e) == Nt || !1;
        }

        function Se(e) {
          for (var t = -1, n = ce(e), r = n.length, a = c(r); ++t < r;) {
            a[t] = e[n[t]];
          }

          return a;
        }

        function Ee(e, t, n) {
          var r = -1,
              a = te(),
              i = e ? e.length : 0,
              o = !1;
          return n = (n < 0 ? j(0, i + n) : n) || 0, se(e) ? o = -1 < a(e, t, n) : "number" == typeof i ? o = -1 < (ke(e) ? e.indexOf(t, n) : a(e, t, n)) : ge(e, function (e) {
            if (++r >= n) return !(o = e === t);
          }), o;
        }

        var Me = Z(function (e, t, n) {
          A.call(e, n) ? e[n]++ : e[n] = 1;
        });

        function Te(e, r, t) {
          var a = !0;
          r = Y.createCallback(r, t, 3);
          var n = -1,
              i = e ? e.length : 0;
          if ("number" == typeof i) for (; ++n < i && (a = !!r(e[n], n, e));) {
            ;
          } else ge(e, function (e, t, n) {
            return a = !!r(e, t, n);
          });
          return a;
        }

        function Ce(e, r, t) {
          var a = [];
          r = Y.createCallback(r, t, 3);
          var n = -1,
              i = e ? e.length : 0;
          if ("number" == typeof i) for (; ++n < i;) {
            var o = e[n];
            r(o, n, e) && a.push(o);
          } else ge(e, function (e, t, n) {
            r(e, t, n) && a.push(e);
          });
          return a;
        }

        function De(e, r, t) {
          r = Y.createCallback(r, t, 3);
          var a,
              n = -1,
              i = e ? e.length : 0;
          if ("number" != typeof i) return ge(e, function (e, t, n) {
            if (r(e, t, n)) return a = e, !1;
          }), a;

          for (; ++n < i;) {
            var o = e[n];
            if (r(o, n, e)) return o;
          }
        }

        function Oe(e, t, n) {
          var r = -1,
              a = e ? e.length : 0;
          if (t = t && void 0 === n ? t : B(t, n, 3), "number" == typeof a) for (; ++r < a && !1 !== t(e[r], r, e);) {
            ;
          } else ge(e, t);
          return e;
        }

        function Ne(e, r, t) {
          var a = e ? e.length : 0;
          if (r = r && void 0 === t ? r : B(r, t, 3), "number" == typeof a) for (; a-- && !1 !== r(e[a], a, e);) {
            ;
          } else {
            var i = ce(e);
            a = i.length, ge(e, function (e, t, n) {
              return t = i ? i[--a] : --a, r(n[t], t, n);
            });
          }
          return e;
        }

        var je = Z(function (e, t, n) {
          (A.call(e, n) ? e[n] : e[n] = []).push(t);
        }),
            Pe = Z(function (e, t, n) {
          e[n] = t;
        });

        function ze(e, r, t) {
          var a = -1,
              n = e ? e.length : 0;
          if (r = Y.createCallback(r, t, 3), "number" == typeof n) for (var i = c(n); ++a < n;) {
            i[a] = r(e[a], a, e);
          } else i = [], ge(e, function (e, t, n) {
            i[++a] = r(e, t, n);
          });
          return i;
        }

        function Le(e, a, t) {
          var i = -1 / 0,
              o = i;
          if ("function" != typeof a && t && t[a] === e && (a = null), null == a && se(e)) for (var n = -1, r = e.length; ++n < r;) {
            var s = e[n];
            o < s && (o = s);
          } else a = null == a && ke(e) ? qt : Y.createCallback(a, t, 3), Oe(e, function (e, t, n) {
            var r = a(e, t, n);
            i < r && (i = r, o = e);
          });
          return o;
        }

        var Re = ze;

        function Ye(e, r, a, t) {
          if (!e) return a;
          var i = arguments.length < 3;
          r = Y.createCallback(r, t, 4);
          var n = -1,
              o = e.length;
          if ("number" == typeof o) for (i && (a = e[++n]); ++n < o;) {
            a = r(a, e[n], n, e);
          } else ge(e, function (e, t, n) {
            a = i ? (i = !1, e) : r(a, e, t, n);
          });
          return a;
        }

        function We(e, r, a, t) {
          var i = arguments.length < 3;
          return r = Y.createCallback(r, t, 4), Ne(e, function (e, t, n) {
            a = i ? (i = !1, e) : r(a, e, t, n);
          }), a;
        }

        function qe(e) {
          var n = -1,
              t = e ? e.length : 0,
              r = c("number" == typeof t ? t : 0);
          return Oe(e, function (e) {
            var t = J(0, ++n);
            r[n] = r[t], r[t] = e;
          }), r;
        }

        function Ie(e, r, t) {
          var a;
          r = Y.createCallback(r, t, 3);
          var n = -1,
              i = e ? e.length : 0;
          if ("number" == typeof i) for (; ++n < i && !(a = r(e[n], n, e));) {
            ;
          } else ge(e, function (e, t, n) {
            return !(a = r(e, t, n));
          });
          return !!a;
        }

        var He = Ce;

        function Fe(e, t, n) {
          var r = 0,
              a = e ? e.length : 0;

          if ("number" != typeof t && null != t) {
            var i = -1;

            for (t = Y.createCallback(t, n, 3); ++i < a && t(e[i], i, e);) {
              r++;
            }
          } else if (null == (r = t) || n) return e ? e[0] : ot;

          return Vt(e, 0, P(j(0, r), a));
        }

        function Be(e, t, n) {
          if ("number" == typeof n) {
            var r = e ? e.length : 0;
            n = n < 0 ? j(0, r + n) : n || 0;
          } else if (n) {
            var a = Ue(e, t);
            return e[a] === t ? a : -1;
          }

          return Yt(e, t, n);
        }

        function Ge(e, t, n) {
          if ("number" != typeof t && null != t) {
            var r = 0,
                a = -1,
                i = e ? e.length : 0;

            for (t = Y.createCallback(t, n, 3); ++a < i && t(e[a], a, e);) {
              r++;
            }
          } else r = null == t || n ? 1 : j(0, t);

          return Vt(e, r);
        }

        function Ue(e, t, n, r) {
          var a = 0,
              i = e ? e.length : a;

          for (t = (n = n ? Y.createCallback(n, r, 1) : Ze)(t); a < i;) {
            var o = a + i >>> 1;
            n(e[o]) < t ? a = o + 1 : i = o;
          }

          return a;
        }

        function $e(e, t, n, r) {
          return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (n = Y.createCallback(n, r, 3)), X(e, t, n);
        }

        function Ve() {
          for (var e = 1 < arguments.length ? arguments : arguments[0], t = -1, n = e ? Le(Re(e, "length")) : 0, r = c(n < 0 ? 0 : n); ++t < n;) {
            r[t] = Re(e, t);
          }

          return r;
        }

        function Ke(e, t) {
          var n = -1,
              r = e ? e.length : 0,
              a = {};

          for (t || !r || se(e[0]) || (t = []); ++n < r;) {
            var i = e[n];
            t ? a[i] = t[n] : i && (a[i[0]] = i[1]);
          }

          return a;
        }

        function Je(e, t) {
          return 2 < arguments.length ? Q(e, 17, Vt(arguments, 2), null, t) : Q(e, 1, null, null, t);
        }

        function Xe(r, a, e) {
          var i,
              o,
              s,
              c,
              l,
              u,
              f,
              d = 0,
              h = !1,
              p = !0;
          if (!_e(r)) throw new y();

          if (a = j(0, a) || 0, !0 === e) {
            var m = !0;
            p = !1;
          } else we(e) && (m = e.leading, h = "maxWait" in e && (j(a, e.maxWait) || 0), p = "trailing" in e ? e.trailing : p);

          var g = function g() {
            var e = a - (nt() - c);

            if (e <= 0) {
              o && b(o);
              var t = f;
              o = u = f = ot, t && (d = nt(), s = r.apply(l, i), u || o || (i = l = null));
            } else u = k(g, e);
          },
              v = function v() {
            u && b(u), o = u = f = ot, (p || h !== a) && (d = nt(), s = r.apply(l, i), u || o || (i = l = null));
          };

          return function () {
            if (i = arguments, c = nt(), l = this, f = p && (u || !m), !1 === h) var e = m && !u;else {
              o || m || (d = c);
              var t = h - (c - d),
                  n = t <= 0;
              n ? (o && (o = b(o)), d = c, s = r.apply(l, i)) : o || (o = k(v, t));
            }
            return n && u ? u = b(u) : u || a === h || (u = k(g, a)), e && (n = !0, s = r.apply(l, i)), !n || u || o || (i = l = null), s;
          };
        }

        function Ze(e) {
          return e;
        }

        function Qe(i, t, e) {
          var o = !0,
              n = t && ye(t);
          t && (e || n.length) || (null == e && (e = t), s = W, t = i, i = Y, n = ye(t)), !1 === e ? o = !1 : we(e) && "chain" in e && (o = e.chain);

          var s = i,
              r = _e(s);

          Oe(n, function (e) {
            var a = i[e] = t[e];
            r && (s.prototype[e] = function () {
              var e = this.__chain__,
                  t = this.__wrapped__,
                  n = [t];
              x.apply(n, arguments);
              var r = a.apply(i, n);

              if (o || e) {
                if (t === r && we(r)) return this;
                (r = new s(r)).__chain__ = e;
              }

              return r;
            });
          });
        }

        function et() {}

        var tt,
            nt = ne(nt = n.now) && nt || function () {
          return new n().getTime();
        },
            rt = 8 == z(ut + "08") ? z : function (e, t) {
          return z(ke(e) ? e.replace(yt, "") : e, t || 0);
        };

        function at(t) {
          return function (e) {
            return e[t];
          };
        }

        function it() {
          return this.__wrapped__;
        }

        return Y.after = function (e, t) {
          if (!_e(t)) throw new y();
          return function () {
            if (--e < 1) return t.apply(this, arguments);
          };
        }, Y.assign = he, Y.at = function (e) {
          for (var t = arguments, n = -1, r = $(t, !0, !1, 1), a = t[2] && t[2][t[1]] === e ? 1 : r.length, i = c(a); ++n < a;) {
            i[n] = e[r[n]];
          }

          return i;
        }, Y.bind = Je, Y.bindAll = function (e) {
          for (var t = 1 < arguments.length ? $(arguments, !0, !1, 1) : ye(e), n = -1, r = t.length; ++n < r;) {
            var a = t[n];
            e[a] = Q(e[a], 1, null, null, e);
          }

          return e;
        }, Y.bindKey = function (e, t) {
          return 2 < arguments.length ? Q(t, 19, Vt(arguments, 2), null, e) : Q(t, 3, null, null, e);
        }, Y.chain = function (e) {
          return (e = new W(e)).__chain__ = !0, e;
        }, Y.compact = function (e) {
          for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
            var a = e[t];
            a && r.push(a);
          }

          return r;
        }, Y.compose = function () {
          for (var n = arguments, e = n.length; e--;) {
            if (!_e(n[e])) throw new y();
          }

          return function () {
            for (var e = arguments, t = n.length; t--;) {
              e = [n[t].apply(this, e)];
            }

            return e[0];
          };
        }, Y.constant = function (e) {
          return function () {
            return e;
          };
        }, Y.countBy = Me, Y.create = function (e, t) {
          var n = F(e);
          return t ? he(n, t) : n;
        }, Y.createCallback = function (r, e, t) {
          var n = _typeof(r);

          if (null == r || "function" == n) return B(r, e, t);
          if ("object" != n) return at(r);
          var a = ce(r),
              i = a[0],
              o = r[i];
          return 1 != a.length || o != o || we(o) ? function (e) {
            for (var t = a.length, n = !1; t-- && (n = V(e[a[t]], r[a[t]], null, !0));) {
              ;
            }

            return n;
          } : function (e) {
            var t = e[i];
            return o === t && (0 !== o || 1 / o == 1 / t);
          };
        }, Y.curry = function (e, t) {
          return Q(e, 4, null, null, null, t = "number" == typeof t ? t : +t || e.length);
        }, Y.debounce = Xe, Y.defaults = pe, Y.defer = function (e) {
          if (!_e(e)) throw new y();
          var t = Vt(arguments, 1);
          return k(function () {
            e.apply(ot, t);
          }, 1);
        }, Y.delay = function (e, t) {
          if (!_e(e)) throw new y();
          var n = Vt(arguments, 2);
          return k(function () {
            e.apply(ot, n);
          }, t);
        }, Y.difference = function (e) {
          return U(e, $(arguments, !0, !0, 1));
        }, Y.filter = Ce, Y.flatten = function (e, t, n, r) {
          return "boolean" != typeof t && null != t && (r = n, n = "function" != typeof t && r && r[t] === e ? null : t, t = !1), null != n && (e = ze(e, n, r)), $(e, t);
        }, Y.forEach = Oe, Y.forEachRight = Ne, Y.forIn = me, Y.forInRight = function (e, t, n) {
          var r = [];
          me(e, function (e, t) {
            r.push(t, e);
          });
          var a = r.length;

          for (t = B(t, n, 3); a-- && !1 !== t(r[a--], r[a], e);) {
            ;
          }

          return e;
        }, Y.forOwn = ge, Y.forOwnRight = ve, Y.functions = ye, Y.groupBy = je, Y.indexBy = Pe, Y.initial = function (e, t, n) {
          var r = 0,
              a = e ? e.length : 0;

          if ("number" != typeof t && null != t) {
            var i = a;

            for (t = Y.createCallback(t, n, 3); i-- && t(e[i], i, e);) {
              r++;
            }
          } else r = null == t || n ? 1 : t || r;

          return Vt(e, 0, P(j(0, a - r), a));
        }, Y.intersection = function () {
          for (var e = [], t = -1, n = arguments.length, r = Bt(), a = te(), i = a === Yt, o = Bt(); ++t < n;) {
            var s = arguments[t];
            (se(s) || oe(s)) && (e.push(s), r.push(i && s.length >= lt && Ht(t ? e[t] : o)));
          }

          var c = e[0],
              l = -1,
              u = c ? c.length : 0,
              f = [];

          e: for (; ++l < u;) {
            var d = r[0];

            if (s = c[l], (d ? Wt(d, s) : a(o, s)) < 0) {
              for (t = n, (d || o).push(s); --t;) {
                if (((d = r[t]) ? Wt(d, s) : a(e[t], s)) < 0) continue e;
              }

              f.push(s);
            }
          }

          for (; n--;) {
            (d = r[n]) && $t(d);
          }

          return Ut(r), Ut(o), f;
        }, Y.invert = be, Y.invoke = function (e, t) {
          var n = Vt(arguments, 2),
              r = -1,
              a = "function" == typeof t,
              i = e ? e.length : 0,
              o = c("number" == typeof i ? i : 0);
          return Oe(e, function (e) {
            o[++r] = (a ? t : e[t]).apply(e, n);
          }), o;
        }, Y.keys = ce, Y.map = ze, Y.mapValues = function (e, r, t) {
          var a = {};
          return r = Y.createCallback(r, t, 3), ge(e, function (e, t, n) {
            a[t] = r(e, t, n);
          }), a;
        }, Y.max = Le, Y.memoize = function (n, r) {
          if (!_e(n)) throw new y();

          var a = function a() {
            var e = a.cache,
                t = r ? r.apply(this, arguments) : ct + arguments[0];
            return A.call(e, t) ? e[t] : e[t] = n.apply(this, arguments);
          };

          return a.cache = {}, a;
        }, Y.merge = function (e) {
          var t = arguments,
              n = 2;
          if (!we(e)) return e;
          if ("number" != typeof t[2] && (n = t.length), 3 < n && "function" == typeof t[n - 2]) var r = B(t[--n - 1], t[n--], 2);else 2 < n && "function" == typeof t[n - 1] && (r = t[--n]);

          for (var a = Vt(arguments, 1, n), i = -1, o = Bt(), s = Bt(); ++i < n;) {
            K(e, a[i], r, o, s);
          }

          return Ut(o), Ut(s), e;
        }, Y.min = function (e, a, t) {
          var i = 1 / 0,
              o = i;
          if ("function" != typeof a && t && t[a] === e && (a = null), null == a && se(e)) for (var n = -1, r = e.length; ++n < r;) {
            var s = e[n];
            s < o && (o = s);
          } else a = null == a && ke(e) ? qt : Y.createCallback(a, t, 3), Oe(e, function (e, t, n) {
            var r = a(e, t, n);
            r < i && (i = r, o = e);
          });
          return o;
        }, Y.omit = function (e, r, t) {
          var a = {};

          if ("function" != typeof r) {
            var n = [];
            me(e, function (e, t) {
              n.push(t);
            });

            for (var i = -1, o = (n = U(n, $(arguments, !0, !1, 1))).length; ++i < o;) {
              var s = n[i];
              a[s] = e[s];
            }
          } else r = Y.createCallback(r, t, 3), me(e, function (e, t, n) {
            r(e, t, n) || (a[t] = e);
          });

          return a;
        }, Y.once = function (e) {
          var t, n;
          if (!_e(e)) throw new y();
          return function () {
            return t || (t = !0, n = e.apply(this, arguments), e = null), n;
          };
        }, Y.pairs = function (e) {
          for (var t = -1, n = ce(e), r = n.length, a = c(r); ++t < r;) {
            var i = n[t];
            a[t] = [i, e[i]];
          }

          return a;
        }, Y.partial = function (e) {
          return Q(e, 16, Vt(arguments, 1));
        }, Y.partialRight = function (e) {
          return Q(e, 32, null, Vt(arguments, 1));
        }, Y.pick = function (e, r, t) {
          var a = {};
          if ("function" != typeof r) for (var n = -1, i = $(arguments, !0, !1, 1), o = we(e) ? i.length : 0; ++n < o;) {
            var s = i[n];
            s in e && (a[s] = e[s]);
          } else r = Y.createCallback(r, t, 3), me(e, function (e, t, n) {
            r(e, t, n) && (a[t] = e);
          });
          return a;
        }, Y.pluck = Re, Y.property = at, Y.pull = function (e) {
          for (var t = arguments, n = 0, r = t.length, a = e ? e.length : 0; ++n < r;) {
            for (var i = -1, o = t[n]; ++i < a;) {
              e[i] === o && (S.call(e, i--, 1), a--);
            }
          }

          return e;
        }, Y.range = function (e, t, n) {
          e = +e || 0, null == t && (t = e, e = 0);

          for (var r = -1, a = j(0, d((t - e) / ((n = "number" == typeof n ? n : +n || 1) || 1))), i = c(a); ++r < a;) {
            i[r] = e, e += n;
          }

          return i;
        }, Y.reject = function (e, r, t) {
          return r = Y.createCallback(r, t, 3), Ce(e, function (e, t, n) {
            return !r(e, t, n);
          });
        }, Y.remove = function (e, t, n) {
          var r = -1,
              a = e ? e.length : 0,
              i = [];

          for (t = Y.createCallback(t, n, 3); ++r < a;) {
            var o = e[r];
            t(o, r, e) && (i.push(o), S.call(e, r--, 1), a--);
          }

          return i;
        }, Y.rest = Ge, Y.shuffle = qe, Y.sortBy = function (e, a, t) {
          var i = -1,
              o = se(a),
              n = e ? e.length : 0,
              s = c("number" == typeof n ? n : 0);

          for (o || (a = Y.createCallback(a, t, 3)), Oe(e, function (t, e, n) {
            var r = s[++i] = Gt();
            o ? r.criteria = ze(a, function (e) {
              return t[e];
            }) : (r.criteria = Bt())[0] = a(t, e, n), r.index = i, r.value = t;
          }), n = s.length, s.sort(It); n--;) {
            var r = s[n];
            s[n] = r.value, o || Ut(r.criteria), $t(r);
          }

          return s;
        }, Y.tap = function (e, t) {
          return t(e), e;
        }, Y.throttle = function (e, t, n) {
          var r = !0,
              a = !0;
          if (!_e(e)) throw new y();
          return !1 === n ? r = !1 : we(n) && (r = "leading" in n ? n.leading : r, a = "trailing" in n ? n.trailing : a), Pt.leading = r, Pt.maxWait = t, Pt.trailing = a, Xe(e, t, Pt);
        }, Y.times = function (e, t, n) {
          e = -1 < (e = +e) ? e : 0;
          var r = -1,
              a = c(e);

          for (t = B(t, n, 1); ++r < e;) {
            a[r] = t(r);
          }

          return a;
        }, Y.toArray = function (e) {
          return e && "number" == typeof e.length ? Vt(e) : Se(e);
        }, Y.transform = function (e, r, a, t) {
          var n = se(e);
          if (null == a) if (n) a = [];else {
            var i = e && e.constructor,
                o = i && i.prototype;
            a = F(o);
          }
          return r && (r = Y.createCallback(r, t, 4), (n ? Oe : ge)(e, function (e, t, n) {
            return r(a, e, t, n);
          })), a;
        }, Y.union = function () {
          return X($(arguments, !0, !0));
        }, Y.uniq = $e, Y.values = Se, Y.where = He, Y.without = function (e) {
          return U(e, Vt(arguments, 1));
        }, Y.wrap = function (e, t) {
          return Q(t, 16, [e]);
        }, Y.xor = function () {
          for (var e = -1, t = arguments.length; ++e < t;) {
            var n = arguments[e];
            if (se(n) || oe(n)) var r = r ? X(U(r, n).concat(U(n, r))) : n;
          }

          return r || [];
        }, Y.zip = Ve, Y.zipObject = Ke, Y.collect = ze, Y.drop = Ge, Y.each = Oe, Y.eachRight = Ne, Y.extend = he, Y.methods = ye, Y.object = Ke, Y.select = Ce, Y.tail = Ge, Y.unique = $e, Y.unzip = Ve, Qe(Y), Y.clone = function (e, t, n, r) {
          return "boolean" != typeof t && null != t && (r = n, n = t, t = !1), H(e, t, "function" == typeof n && B(n, r, 1));
        }, Y.cloneDeep = function (e, t, n) {
          return H(e, !0, "function" == typeof t && B(t, n, 1));
        }, Y.contains = Ee, Y.escape = function (e) {
          return null == e ? "" : _(e).replace(de, ee);
        }, Y.every = Te, Y.find = De, Y.findIndex = function (e, t, n) {
          var r = -1,
              a = e ? e.length : 0;

          for (t = Y.createCallback(t, n, 3); ++r < a;) {
            if (t(e[r], r, e)) return r;
          }

          return -1;
        }, Y.findKey = function (e, r, t) {
          var a;
          return r = Y.createCallback(r, t, 3), ge(e, function (e, t, n) {
            if (r(e, t, n)) return a = t, !1;
          }), a;
        }, Y.findLast = function (e, r, t) {
          var a;
          return r = Y.createCallback(r, t, 3), Ne(e, function (e, t, n) {
            if (r(e, t, n)) return a = e, !1;
          }), a;
        }, Y.findLastIndex = function (e, t, n) {
          var r = e ? e.length : 0;

          for (t = Y.createCallback(t, n, 3); r--;) {
            if (t(e[r], r, e)) return r;
          }

          return -1;
        }, Y.findLastKey = function (e, r, t) {
          var a;
          return r = Y.createCallback(r, t, 3), ve(e, function (e, t, n) {
            if (r(e, t, n)) return a = t, !1;
          }), a;
        }, Y.has = function (e, t) {
          return !!e && A.call(e, t);
        }, Y.identity = Ze, Y.indexOf = Be, Y.isArguments = oe, Y.isArray = se, Y.isBoolean = function (e) {
          return !0 === e || !1 === e || e && "object" == _typeof(e) && w.call(e) == Et || !1;
        }, Y.isDate = function (e) {
          return e && "object" == _typeof(e) && w.call(e) == Mt || !1;
        }, Y.isElement = function (e) {
          return e && 1 === e.nodeType || !1;
        }, Y.isEmpty = function (e) {
          var t = !0;
          if (!e) return t;
          var n = w.call(e),
              r = e.length;
          return n == St || n == Nt || n == kt || n == Dt && "number" == typeof r && _e(e.splice) ? !r : (ge(e, function () {
            return t = !1;
          }), t);
        }, Y.isEqual = function (e, t, n, r) {
          return V(e, t, "function" == typeof n && B(n, r, 2));
        }, Y.isFinite = function (e) {
          return D(e) && !O(parseFloat(e));
        }, Y.isFunction = _e, Y.isNaN = function (e) {
          return Ae(e) && e != +e;
        }, Y.isNull = function (e) {
          return null === e;
        }, Y.isNumber = Ae, Y.isObject = we, Y.isPlainObject = xe, Y.isRegExp = function (e) {
          return e && "object" == _typeof(e) && w.call(e) == Ot || !1;
        }, Y.isString = ke, Y.isUndefined = function (e) {
          return void 0 === e;
        }, Y.lastIndexOf = function (e, t, n) {
          var r = e ? e.length : 0;

          for ("number" == typeof n && (r = (n < 0 ? j(0, r + n) : P(n, r - 1)) + 1); r--;) {
            if (e[r] === t) return r;
          }

          return -1;
        }, Y.mixin = Qe, Y.noConflict = function () {
          return r._ = u, this;
        }, Y.noop = et, Y.now = nt, Y.parseInt = rt, Y.random = function (e, t, n) {
          var r = null == e,
              a = null == t;

          if (null == n && ("boolean" == typeof e && a ? (n = e, e = 1) : a || "boolean" != typeof t || (n = t, a = !0)), r && a && (t = 1), e = +e || 0, a ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1) {
            var i = L();
            return P(e + i * (t - e + parseFloat("1e-" + ((i + "").length - 1))), t);
          }

          return J(e, t);
        }, Y.reduce = Ye, Y.reduceRight = We, Y.result = function (e, t) {
          if (e) {
            var n = e[t];
            return _e(n) ? e[t]() : n;
          }
        }, Y.runInContext = e, Y.size = function (e) {
          var t = e ? e.length : 0;
          return "number" == typeof t ? t : ce(e).length;
        }, Y.some = Ie, Y.sortedIndex = Ue, Y.template = function (o, e, t) {
          var n = Y.templateSettings;
          o = _(o || ""), t = pe({}, t, n);
          var s,
              r = pe({}, t.imports, n.imports),
              a = ce(r),
              i = Se(r),
              c = 0,
              l = t.interpolate || bt,
              u = "__p += '",
              f = v((t.escape || bt).source + "|" + l.source + "|" + (l === vt ? pt : bt).source + "|" + (t.evaluate || bt).source + "|$", "g");
          o.replace(f, function (e, t, n, r, a, i) {
            return n || (n = r), u += o.slice(c, i).replace(wt, Ft), t && (u += "' +\n__e(" + t + ") +\n'"), a && (s = !0, u += "';\n" + a + ";\n__p += '"), n && (u += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), c = i + e.length, e;
          }), u += "';\n";
          var d = t.variable,
              h = d;
          h || (u = "with (" + (d = "obj") + ") {\n" + u + "\n}\n"), u = (s ? u.replace(ft, "") : u).replace(dt, "$1").replace(ht, "$1;"), u = "function(" + d + ") {\n" + (h ? "" : d + " || (" + d + " = {});\n") + "var __t, __p = '', __e = _.escape" + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + u + "return __p\n}";
          var p = "\n/*\n//# sourceURL=" + (t.sourceURL || "/lodash/template/source[" + xt++ + "]") + "\n*/";

          try {
            var m = g(a, "return " + u + p).apply(ot, i);
          } catch (e) {
            throw e.source = u, e;
          }

          return e ? m(e) : (m.source = u, m);
        }, Y.unescape = function (e) {
          return null == e ? "" : _(e).replace(fe, ie);
        }, Y.uniqueId = function (e) {
          var t = ++st;
          return _(null == e ? "" : e) + t;
        }, Y.all = Te, Y.any = Ie, Y.detect = De, Y.findWhere = De, Y.foldl = Ye, Y.foldr = We, Y.include = Ee, Y.inject = Ye, Qe((tt = {}, ge(Y, function (e, t) {
          Y.prototype[t] || (tt[t] = e);
        }), tt), !1), Y.first = Fe, Y.last = function (e, t, n) {
          var r = 0,
              a = e ? e.length : 0;

          if ("number" != typeof t && null != t) {
            var i = a;

            for (t = Y.createCallback(t, n, 3); i-- && t(e[i], i, e);) {
              r++;
            }
          } else if (null == (r = t) || n) return e ? e[a - 1] : ot;

          return Vt(e, j(0, a - r));
        }, Y.sample = function (e, t, n) {
          if (e && "number" != typeof e.length && (e = Se(e)), null == t || n) return e ? e[J(0, e.length - 1)] : ot;
          var r = qe(e);
          return r.length = P(j(0, t), r.length), r;
        }, Y.take = Fe, Y.head = Fe, ge(Y, function (a, e) {
          var i = "sample" !== e;
          Y.prototype[e] || (Y.prototype[e] = function (e, t) {
            var n = this.__chain__,
                r = a(this.__wrapped__, e, t);
            return n || null != e && (!t || i && "function" == typeof e) ? new W(r, n) : r;
          });
        }), Y.VERSION = "2.4.2", Y.prototype.chain = function () {
          return this.__chain__ = !0, this;
        }, Y.prototype.toString = function () {
          return _(this.__wrapped__);
        }, Y.prototype.value = it, Y.prototype.valueOf = it, Oe(["join", "pop", "shift"], function (e) {
          var n = s[e];

          Y.prototype[e] = function () {
            var e = this.__chain__,
                t = n.apply(this.__wrapped__, arguments);
            return e ? new W(t, e) : t;
          };
        }), Oe(["push", "reverse", "sort", "unshift"], function (e) {
          var t = s[e];

          Y.prototype[e] = function () {
            return t.apply(this.__wrapped__, arguments), this;
          };
        }), Oe(["concat", "slice", "splice"], function (e) {
          var t = s[e];

          Y.prototype[e] = function () {
            return new W(t.apply(this.__wrapped__, arguments), this.__chain__);
          };
        }), Y;
      }();

      e && i ? o ? (i.exports = Kt)._ = Kt : e._ = Kt : Rt._ = Kt;
    }).call(this);
  });

  function Yc(e) {
    return e.reduce(function (e, t, n, r) {
      return e + t;
    });
  }

  function Wc(e) {
    if (Rc.isArray(e)) return e;
    if ("string" == typeof e) return e.split("");
    throw Error("Parameter must be a string or array.");
  }

  var qc = {
    jarowinkler: function jarowinkler(e, t, n) {
      var r, a;
      e = Wc(e), t = Wc(t), a = e.length > t.length ? (r = e, t) : (r = t, e);
      var i,
          o,
          s,
          c,
          l = n || .7,
          u = Math.floor(Math.max(r.length / 2 - 1, 0)),
          f = [],
          d = [],
          h = 0;

      for (i = 0; i < a.length; i++) {
        for (c = a[i], o = Math.max(i - u, 0), s = Math.min(i + u + 1, r.length); o < s; o++) {
          if (!d[o] && c === r[o]) {
            d[f[i] = o] = !0, h++;
            break;
          }
        }
      }

      var p,
          m,
          g = [],
          v = [],
          y = 0,
          b = 0;

      for (m = p = 0; p < a.length; p++) {
        -1 < f[p] && (g[m] = a[p], m++);
      }

      for (m = p = 0; p < r.length; p++) {
        d[p] && (v[m] = r[p], m++);
      }

      for (i = 0; i < g.length; i++) {
        g[i] !== v[i] && y++;
      }

      for (i = 0; i < a.length && e[i] === t[i]; i++) {
        b++;
      }

      var _ = h;
      n = y / 2;

      if (_) {
        var w = (_ / e.length + _ / t.length + (_ - n) / _) / 3;
        return w < l ? w : w + Math.min(.1, 1 / r.length) * b * (1 - w);
      }

      return 0;
    },
    levenshtein: function levenshtein(e, t, n) {
      if (e = Wc(e), t = Wc(t), 0 === e.length) return t.length;
      if (0 === t.length) return e.length;
      var r,
          a,
          i,
          o,
          s = n || {
        d: 1,
        i: 1,
        s: 1
      },
          c = [],
          l = [],
          u = t.length + 1;

      for (r = 0; r < u; r++) {
        c[r] = r;
      }

      for (r = 0; r < e.length; r++) {
        for (l[0] = r + 1, a = 0; a < t.length; a++) {
          i = e[r] === t[a] ? 0 : s.s, l[a + 1] = Math.min(l[a] + s.d, c[a + 1] + s.i, c[a] + i);
        }

        for (a = 0; a < u; a++) {
          c[a] = l[a];
        }
      }

      return ((o = Math.max(e.length, t.length)) - l[t.length]) / o;
    },
    ngram: function ngram(e, t, n) {
      e = Wc(e), t = Wc(t);
      var r,
          a,
          i,
          o,
          s,
          c,
          l,
          u = e.length,
          f = t.length,
          d = n || 2,
          h = [],
          p = [],
          m = [],
          g = [],
          v = [];
      if (0 === u || 0 === f) return u === f ? 1 : 0;

      if (r = 0, u < d || f < d) {
        for (a = 0, o = Math.min(u, f); a < o; a++) {
          e[a] === t[a] && r++;
        }

        return r / Math.max(u, f);
      }

      for (a = 0; a < u + d - 1; a++) {
        h[a] = a < d - 1 ? 0 : e[a - d + 1];
      }

      for (a = 0; a <= u; a++) {
        p[a] = a;
      }

      for (i = 1; i <= f; i++) {
        if (i < d) {
          for (s = 0; s < d - i; s++) {
            v[s] = 0;
          }

          for (s = d - i; s < d; s++) {
            v[s] = t[s - (d - i)];
          }
        } else v = t.slice(i - d, i);

        for (m[0] = i, a = 1; a <= u; a++) {
          for (c = d, o = r = 0; o < d; o++) {
            h[a - 1 + o] !== v[o] ? r++ : 0 === h[a - 1 + o] && c--;
          }

          l = r / c, m[a] = Math.min(Math.min(m[a - 1] + 1, p[a] + 1), p[a - 1] + l);
        }

        g = p, p = m, m = g;
      }

      return 1 - p[u] / Math.max(u, f);
    },
    pearson: function pearson(t, n) {
      var r = [];
      Object.keys(t).forEach(function (e) {
        n[e] && r.push(e);
      });
      var e = r.length;
      if (0 === e) return 0;
      var a = Yc(r.map(function (e) {
        return t[e];
      })),
          i = Yc(r.map(function (e) {
        return n[e];
      })),
          o = Yc(r.map(function (e) {
        return Math.pow(t[e], 2);
      })),
          s = Yc(r.map(function (e) {
        return Math.pow(n[e], 2);
      })),
          c = Yc(r.map(function (e) {
        return t[e] * n[e];
      })) - a * i / e,
          l = Math.sqrt((o - Math.pow(a, 2) / e) * (s - Math.pow(i, 2) / e));
      return 0 === l ? 0 : c / l;
    },
    jaccard: function jaccard(e, t) {
      return e = Wc(e), t = Wc(t), Rc.intersection(e, t).length / Rc.union(e, t).length;
    },
    tanimoto: function tanimoto(e, t) {
      e = Wc(e), t = Wc(t);
      var n = Rc.intersection(e, t).length;
      return n / (e.length + t.length - n);
    }
  };
  var Ic = {
    author: qs,
    lead_image_url: Hs,
    dek: function dek(e, t) {
      var n = t.$,
          r = t.excerpt;
      if (1e3 < e.length || e.length < 5) return null;
      if (r && za(r, 10) === za(e, 10)) return null;
      var a = es(e, n);
      return Es.test(a) ? null : ca(a.trim());
    },
    date_published: Pc,
    content: zc,
    title: Lc
  };

  function Hc(e, t) {
    var o, a, i, s;
    return t.stripUnlikelyCandidates && ((o = e)("*").not("a").each(function (e, t) {
      var n = o(t),
          r = n.attr("class"),
          a = n.attr("id");

      if (a || r) {
        var i = "".concat(r || "", " ").concat(a || "");
        ki.test(i) || Ai.test(i) && n.remove();
      }
    }), e = o), e = function (a) {
      var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
      return Wi.forEach(function (e) {
        var t = Na(e, 2),
            n = t[0],
            r = t[1];
        a("".concat(n, " ").concat(r)).each(function (e, t) {
          ro(a(t).parent(n), a, 80);
        });
      }), so(a, e), so(a, e), a;
    }(e = Ei(e), t.weightNodes), s = 0, (a = e)("[score]").each(function (e, t) {
      if (!Yi.test(t.tagName)) {
        var n = a(t),
            r = Zi(n);
        s < r && (s = r, i = n);
      }
    }), i ? i = co(i, s, a) : a("body") || a("*").first();
  }

  var Fc = {
    defaultOpts: {
      stripUnlikelyCandidates: !0,
      weightNodes: !0,
      cleanConditionally: !0
    },
    extract: function extract(e, t) {
      var n = e.$,
          r = e.html,
          a = e.title,
          i = e.url;
      t = pt({}, this.defaultOpts, t), n = n || Cr.load(r);
      var o = this.getContentNode(n, a, i, t);
      if (ts(o)) return this.cleanAndReturnNode(o, n);
      var s = !0,
          c = !1,
          l = void 0;

      try {
        for (var u, f = Ca(si(t).filter(function (e) {
          return !0 === t[e];
        })); !(s = (u = f.next()).done); s = !0) {
          var d = u.value;
          if (t[d] = !1, n = Cr.load(r), ts(o = this.getContentNode(n, a, i, t))) break;
        }
      } catch (e) {
        c = !0, l = e;
      } finally {
        try {
          s || null == f["return"] || f["return"]();
        } finally {
          if (c) throw l;
        }
      }

      return this.cleanAndReturnNode(o, n);
    },
    getContentNode: function getContentNode(e, t, n, r) {
      return zc(Hc(e, r), {
        $: e,
        cleanConditionally: r.cleanConditionally,
        title: t,
        url: n
      });
    },
    cleanAndReturnNode: function cleanAndReturnNode(e, t) {
      return e ? ca(t.html(e)) : null;
    }
  },
      Bc = ["tweetmeme-title", "dc.title", "rbtitle", "headline", "title"],
      Gc = ["og:title"],
      Uc = [".hentry .entry-title", "h1#articleHeader", "h1.articleHeader", "h1.article", ".instapaper_title", "#meebo-title"],
      $c = ["article h1", "#entry-title", ".entry-title", "#entryTitle", "#entrytitle", ".entryTitle", ".entrytitle", "#articleTitle", ".articleTitle", "post post-title", "h1.title", "h2.article", "h1", "html head title", "title"],
      Vc = {
    extract: function extract(e) {
      var t,
          n = e.$,
          r = e.url,
          a = e.metaCache;
      return (t = Xo(n, Bc, a)) ? Lc(t, {
        url: r,
        $: n
      }) : (t = Qo(n, Uc)) ? Lc(t, {
        url: r,
        $: n
      }) : (t = Xo(n, Gc, a)) ? Lc(t, {
        url: r,
        $: n
      }) : (t = Qo(n, $c)) ? Lc(t, {
        url: r,
        $: n
      }) : "";
    }
  },
      Kc = ["byl", "clmst", "dc.author", "dcsext.author", "dc.creator", "rbauthors", "authors"],
      Jc = [".entry .entry-author", ".author.vcard .fn", ".author .vcard .fn", ".byline.vcard .fn", ".byline .vcard .fn", ".byline .by .author", ".byline .by", ".byline .author", ".post-author.vcard", ".post-author .vcard", "a[rel=author]", "#by_author", ".by_author", "#entryAuthor", ".entryAuthor", ".byline a[href*=author]", "#author .authorname", ".author .authorname", "#author", ".author", ".articleauthor", ".ArticleAuthor", ".byline"],
      Xc = /^[\n\s]*By/i,
      Zc = [["#byline", Xc], [".byline", Xc]],
      Qc = {
    extract: function extract(e) {
      var t,
          n = e.$,
          r = e.metaCache;
      if ((t = Xo(n, Kc, r)) && t.length < 300) return qs(t);
      if ((t = Qo(n, Jc, 2)) && t.length < 300) return qs(t);
      var a = !0,
          i = !1,
          o = void 0;

      try {
        for (var s, c = Ca(Zc); !(a = (s = c.next()).done); a = !0) {
          var l = Na(s.value, 2),
              u = l[0],
              f = l[1],
              d = n(u);

          if (1 === d.length) {
            var h = d.text();
            if (f.test(h)) return qs(h);
          }
        }
      } catch (e) {
        i = !0, o = e;
      } finally {
        try {
          a || null == c["return"] || c["return"]();
        } finally {
          if (i) throw o;
        }
      }

      return null;
    }
  },
      el = ["article:published_time", "displaydate", "dc.date", "dc.date.issued", "rbpubdate", "publish_date", "pub_date", "pagedate", "pubdate", "revision_date", "doc_date", "date_created", "content_create_date", "lastmodified", "created", "date"],
      tl = [".hentry .dtstamp.published", ".hentry .published", ".hentry .dtstamp.updated", ".hentry .updated", ".single .published", ".meta .published", ".meta .postDate", ".entry-date", ".byline .date", ".postmetadata .date", ".article_datetime", ".date-header", ".story-date", ".dateStamp", "#story .datetime", ".dateline", ".pubdate"],
      nl = [new RegExp("/(20\\d{2}/\\d{2}/\\d{2})/", "i"), new RegExp("(20\\d{2}-[01]\\d-[0-3]\\d)", "i"), new RegExp("/(20\\d{2}/".concat("(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)", "/[0-3]\\d)/"), "i")],
      rl = {
    extract: function extract(e) {
      var t,
          n,
          r,
          a = e.$,
          i = e.url,
          o = e.metaCache;
      return (t = Xo(a, el, o, !1)) ? Pc(t) : (t = Qo(a, tl)) ? Pc(t) : (n = i, (t = (r = nl.find(function (e) {
        return e.test(n);
      })) ? r.exec(n)[1] : null) ? Pc(t) : null);
    }
  },
      al = ["og:image", "twitter:image", "image_src"],
      il = ["link[rel=image_src]"],
      ol = new RegExp(["upload", "wp-content", "large", "photo", "wp-image"].join("|"), "i"),
      sl = new RegExp(["spacer", "sprite", "blank", "throbber", "gradient", "tile", "bg", "background", "icon", "social", "header", "hdr", "advert", "spinner", "loader", "loading", "default", "rating", "share", "facebook", "twitter", "theme", "promo", "ads", "wp-includes"].join("|"), "i"),
      cl = /\.gif(\?.*)?$/i,
      ll = /\.jpe?g(\?.*)?$/i;

  function ul(e) {
    return "".concat(e.attr("class") || "", " ").concat(e.attr("id") || "");
  }

  var fl = {
    extract: function extract(e) {
      var t,
          l = e.$,
          n = e.content,
          r = e.metaCache,
          a = e.html;
      l.browser || 0 !== l("head").length || l("*").first().prepend(a);
      var i = Xo(l, al, r, !1);
      if (i && (t = Hs(i))) return t;
      var o = l(n),
          u = l("img", o).toArray(),
          f = {};
      u.forEach(function (e, t) {
        var n = l(e),
            r = n.attr("src");

        if (r) {
          var a,
              i,
              o,
              s,
              c = function (e) {
            e = e.trim();
            var t = 0;
            return ol.test(e) && (t += 20), sl.test(e) && (t -= 20), cl.test(e) && (t -= 10), ll.test(e) && (t += 10), t;
          }(r);

          c += n.attr("alt") ? 5 : 0, c += function (e) {
            var t = 0;
            1 === e.parents("figure").first().length && (t += 25);
            var n,
                r = e.parent();
            return 1 === r.length && (n = r.parent()), [r, n].forEach(function (e) {
              qi.test(ul(e)) && (t += 15);
            }), t;
          }(n), c += (a = 0, i = n.next(), (o = i.get(0)) && "figcaption" === o.tagName.toLowerCase() && (a += 25), qi.test(ul(i)) && (a += 15), a), c += function (e) {
            var t = 0,
                n = Xi(e.attr("width")),
                r = Xi(e.attr("height")),
                a = e.attr("src");

            if (n && n <= 50 && (t -= 50), r && r <= 50 && (t -= 50), n && r && !a.includes("sprite")) {
              var i = n * r;
              i < 5e3 ? t -= 100 : t += Math.round(i / 1e3);
            }

            return t;
          }(n), c += (s = t, u.length / 2 - s), f[r] = c;
        }
      });
      var s = si(f).reduce(function (e, t) {
        return f[t] > e[1] ? [t, f[t]] : e;
      }, [null, 0]),
          c = Na(s, 2),
          d = c[0];
      if (0 < c[1] && (t = Hs(d))) return t;
      var h = !0,
          p = !1,
          m = void 0;

      try {
        for (var g, v = Ca(il); !(h = (g = v.next()).done); h = !0) {
          var y = g.value,
              b = l(y).first(),
              _ = b.attr("src");

          if (_ && (t = Hs(_))) return t;
          var w = b.attr("href");
          if (w && (t = Hs(w))) return t;
          var A = b.attr("value");
          if (A && (t = Hs(A))) return t;
        }
      } catch (e) {
        p = !0, m = e;
      } finally {
        try {
          h || null == v["return"] || v["return"]();
        } finally {
          if (p) throw m;
        }
      }

      return null;
    }
  },
      dl = e(function (t, e) {
    (function () {
      var e, d, c, h, p, n, l, r, m, g, a, i, o, u, f;
      c = Math.floor, g = Math.min, d = function d(e, t) {
        return e < t ? -1 : t < e ? 1 : 0;
      }, m = function m(e, t, n, r, a) {
        var i;
        if (null == n && (n = 0), null == a && (a = d), n < 0) throw new Error("lo must be non-negative");

        for (null == r && (r = e.length); n < r;) {
          a(t, e[i = c((n + r) / 2)]) < 0 ? r = i : n = i + 1;
        }

        return [].splice.apply(e, [n, n - n].concat(t)), t;
      }, n = function n(e, t, _n2) {
        return null == _n2 && (_n2 = d), e.push(t), u(e, 0, e.length - 1, _n2);
      }, p = function p(e, t) {
        var n, r;
        return null == t && (t = d), n = e.pop(), e.length ? (r = e[0], e[0] = n, f(e, 0, t)) : r = n, r;
      }, r = function r(e, t, n) {
        var r;
        return null == n && (n = d), r = e[0], e[0] = t, f(e, 0, n), r;
      }, l = function l(e, t, n) {
        var r;
        return null == n && (n = d), e.length && n(e[0], t) < 0 && (t = (r = [e[0], t])[0], e[0] = r[1], f(e, 0, n)), t;
      }, h = function h(n, e) {
        var t, r, a, i, o, s;

        for (null == e && (e = d), o = [], r = 0, a = (i = function () {
          s = [];

          for (var e = 0, t = c(n.length / 2); 0 <= t ? e < t : t < e; 0 <= t ? e++ : e--) {
            s.push(e);
          }

          return s;
        }.apply(this).reverse()).length; r < a; r++) {
          t = i[r], o.push(f(n, t, e));
        }

        return o;
      }, o = function o(e, t, n) {
        var r;
        if (null == n && (n = d), -1 !== (r = e.indexOf(t))) return u(e, 0, r, n), f(e, r, n);
      }, a = function a(e, t, n) {
        var r, a, i, o, s;
        if (null == n && (n = d), !(a = e.slice(0, t)).length) return a;

        for (h(a, n), i = 0, o = (s = e.slice(t)).length; i < o; i++) {
          r = s[i], l(a, r, n);
        }

        return a.sort(n).reverse();
      }, i = function i(e, t, n) {
        var r, a, i, o, s, c, l, u, f;

        if (null == n && (n = d), 10 * t <= e.length) {
          if (!(i = e.slice(0, t).sort(n)).length) return i;

          for (a = i[i.length - 1], o = 0, c = (l = e.slice(t)).length; o < c; o++) {
            n(r = l[o], a) < 0 && (m(i, r, 0, null, n), i.pop(), a = i[i.length - 1]);
          }

          return i;
        }

        for (h(e, n), f = [], s = 0, u = g(t, e.length); 0 <= u ? s < u : u < s; 0 <= u ? ++s : --s) {
          f.push(p(e, n));
        }

        return f;
      }, u = function u(e, t, n, r) {
        var a, i, o;

        for (null == r && (r = d), a = e[n]; t < n && r(a, i = e[o = n - 1 >> 1]) < 0;) {
          e[n] = i, n = o;
        }

        return e[n] = a;
      }, f = function f(e, t, n) {
        var r, a, i, o, s;

        for (null == n && (n = d), a = e.length, i = e[s = t], r = 2 * t + 1; r < a;) {
          (o = r + 1) < a && !(n(e[r], e[o]) < 0) && (r = o), e[t] = e[r], r = 2 * (t = r) + 1;
        }

        return e[t] = i, u(e, s, t, n);
      }, e = function () {
        function t(e) {
          this.cmp = null != e ? e : d, this.nodes = [];
        }

        return t.push = n, t.pop = p, t.replace = r, t.pushpop = l, t.heapify = h, t.updateItem = o, t.nlargest = a, t.nsmallest = i, t.prototype.push = function (e) {
          return n(this.nodes, e, this.cmp);
        }, t.prototype.pop = function () {
          return p(this.nodes, this.cmp);
        }, t.prototype.peek = function () {
          return this.nodes[0];
        }, t.prototype.contains = function (e) {
          return -1 !== this.nodes.indexOf(e);
        }, t.prototype.replace = function (e) {
          return r(this.nodes, e, this.cmp);
        }, t.prototype.pushpop = function (e) {
          return l(this.nodes, e, this.cmp);
        }, t.prototype.heapify = function () {
          return h(this.nodes, this.cmp);
        }, t.prototype.updateItem = function (e) {
          return o(this.nodes, e, this.cmp);
        }, t.prototype.clear = function () {
          return this.nodes = [];
        }, t.prototype.empty = function () {
          return 0 === this.nodes.length;
        }, t.prototype.size = function () {
          return this.nodes.length;
        }, t.prototype.clone = function () {
          var e;
          return (e = new t()).nodes = this.nodes.slice(0), e;
        }, t.prototype.toArray = function () {
          return this.nodes.slice(0);
        }, t.prototype.insert = t.prototype.push, t.prototype.top = t.prototype.peek, t.prototype.front = t.prototype.peek, t.prototype.has = t.prototype.contains, t.prototype.copy = t.prototype.clone, t;
      }(), t.exports = e;
    }).call(this);
  }),
      hl = e(function (e, u) {
    (function () {
      var a,
          h,
          i,
          e,
          ee,
          t,
          p,
          n,
          g,
          v,
          r,
          o,
          s,
          I,
          E,
          f,
          c,
          H,
          q,
          S,
          l = [].indexOf || function (e) {
        for (var t = 0, n = this.length; t < n; t++) {
          if (t in this && this[t] === e) return t;
        }

        return -1;
      };

      p = Math.floor, g = Math.max, v = Math.min, h = dl, f = function f(e, t) {
        return t ? 2 * e / t : 1;
      }, E = function E(e, t) {
        var n, r, a, i, o, s;

        for (o = [e.length, t.length], n = i = 0, s = v(r = o[0], a = o[1]); 0 <= s ? i < s : s < i; n = 0 <= s ? ++i : --i) {
          if (e[n] < t[n]) return -1;
          if (e[n] > t[n]) return 1;
        }

        return r - a;
      }, S = function S(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, I = function I(e) {
        var t, n;

        for (t = 0, n = e.length; t < n; t++) {
          if (e[t]) return !0;
        }

        return !1;
      }, ee = function () {
        function e(e, t, n, r) {
          this.isjunk = e, null == t && (t = ""), null == n && (n = ""), this.autojunk = null == r || r, this.a = this.b = null, this.setSeqs(t, n);
        }

        return e.prototype.setSeqs = function (e, t) {
          return this.setSeq1(e), this.setSeq2(t);
        }, e.prototype.setSeq1 = function (e) {
          if (e !== this.a) return this.a = e, this.matchingBlocks = this.opcodes = null;
        }, e.prototype.setSeq2 = function (e) {
          if (e !== this.b) return this.b = e, this.matchingBlocks = this.opcodes = null, this.fullbcount = null, this._chainB();
        }, e.prototype._chainB = function () {
          var e, t, n, r, a, i, o, s, c, l, u, f, d, h;

          for (e = this.b, this.b2j = t = {}, r = l = 0, f = e.length; l < f; r = ++l) {
            n = e[r], (S(t, n) ? t[n] : t[n] = []).push(r);
          }

          if (i = {}, a = this.isjunk) for (u = 0, d = (h = Object.keys(t)).length; u < d; u++) {
            a(n = h[u]) && (i[n] = !0, delete t[n]);
          }
          if (c = {}, o = e.length, this.autojunk && 200 <= o) for (n in s = p(o / 100) + 1, t) {
            t[n].length > s && (c[n] = !0, delete t[n]);
          }
          return this.isbjunk = function (e) {
            return S(i, e);
          }, this.isbpopular = function (e) {
            return S(c, e);
          };
        }, e.prototype.findLongestMatch = function (e, t, n, r) {
          var a, i, o, s, c, l, u, f, d, h, p, m, g, v, y, b, _, w, A, x, k;

          for (a = (b = [this.a, this.b, this.b2j, this.isbjunk])[0], i = b[1], o = b[2], f = b[3], s = (_ = [e, n, 0])[0], c = _[1], l = _[2], h = {}, u = g = e; e <= t ? g < t : t < g; u = e <= t ? ++g : --g) {
            for (m = {}, v = 0, y = (w = S(o, a[u]) ? o[a[u]] : []).length; v < y; v++) {
              if (!((d = w[v]) < n)) {
                if (r <= d) break;
                l < (p = m[d] = (h[d - 1] || 0) + 1) && (s = (A = [u - p + 1, d - p + 1, p])[0], c = A[1], l = A[2]);
              }
            }

            h = m;
          }

          for (; e < s && n < c && !f(i[c - 1]) && a[s - 1] === i[c - 1];) {
            s = (x = [s - 1, c - 1, l + 1])[0], c = x[1], l = x[2];
          }

          for (; s + l < t && c + l < r && !f(i[c + l]) && a[s + l] === i[c + l];) {
            l++;
          }

          for (; e < s && n < c && f(i[c - 1]) && a[s - 1] === i[c - 1];) {
            s = (k = [s - 1, c - 1, l + 1])[0], c = k[1], l = k[2];
          }

          for (; s + l < t && c + l < r && f(i[c + l]) && a[s + l] === i[c + l];) {
            l++;
          }

          return [s, c, l];
        }, e.prototype.getMatchingBlocks = function () {
          var e, t, n, r, a, i, o, s, c, l, u, f, d, h, p, m, g, v, y, b, _, w, A, x, k, S;

          if (this.matchingBlocks) return this.matchingBlocks;

          for (v = [[0, h = (w = [this.a.length, this.b.length])[0], 0, p = w[1]]], m = []; v.length;) {
            t = (A = v.pop())[0], e = A[1], r = A[2], n = A[3], a = (x = y = this.findLongestMatch(t, e, r, n))[0], s = x[1], (u = x[2]) && (m.push(y), t < a && r < s && v.push([t, a, r, s]), a + u < e && s + u < n && v.push([a + u, e, s + u, n]));
          }

          for (m.sort(E), i = c = f = 0, g = [], b = 0, _ = m.length; b < _; b++) {
            o = (k = m[b])[0], l = k[1], d = k[2], i + f === o && c + f === l ? f += d : (f && g.push([i, c, f]), i = (S = [o, l, d])[0], c = S[1], f = S[2]);
          }

          return f && g.push([i, c, f]), g.push([h, p, 0]), this.matchingBlocks = g;
        }, e.prototype.getOpcodes = function () {
          var e, t, n, r, a, i, o, s, c, l, u, f;
          if (this.opcodes) return this.opcodes;

          for (r = a = 0, this.opcodes = t = [], s = 0, c = (l = this.getMatchingBlocks()).length; s < c; s++) {
            e = (u = l[s])[0], n = u[1], i = u[2], o = "", r < e && a < n ? o = "replace" : r < e ? o = "delete" : a < n && (o = "insert"), o && t.push([o, r, e, a, n]), r = (f = [e + i, n + i])[0], a = f[1], i && t.push(["equal", e, r, n, a]);
          }

          return t;
        }, e.prototype.getGroupedOpcodes = function (e) {
          var t, n, r, a, i, o, s, c, l, u, f, d, h, p, m;

          for (null == e && (e = 3), (t = this.getOpcodes()).length || (t = [["equal", 0, 1, 0, 1]]), "equal" === t[0][0] && (l = (d = t[0])[0], a = d[1], i = d[2], o = d[3], s = d[4], t[0] = [l, g(a, i - e), i, g(o, s - e), s]), "equal" === t[t.length - 1][0] && (l = (h = t[t.length - 1])[0], a = h[1], i = h[2], o = h[3], s = h[4], t[t.length - 1] = [l, a, v(i, a + e), o, v(s, o + e)]), c = e + e, r = [], n = [], u = 0, f = t.length; u < f; u++) {
            l = (p = t[u])[0], a = p[1], i = p[2], o = p[3], s = p[4], "equal" === l && c < i - a && (n.push([l, a, v(i, a + e), o, v(s, o + e)]), r.push(n), n = [], a = (m = [g(a, i - e), g(o, s - e)])[0], o = m[1]), n.push([l, a, i, o, s]);
          }

          return !n.length || 1 === n.length && "equal" === n[0][0] || r.push(n), r;
        }, e.prototype.ratio = function () {
          var e, t, n, r;

          for (t = e = 0, n = (r = this.getMatchingBlocks()).length; t < n; t++) {
            e += r[t][2];
          }

          return f(e, this.a.length + this.b.length);
        }, e.prototype.quickRatio = function () {
          var e, t, n, r, a, i, o, s, c, l, u;
          if (!this.fullbcount) for (this.fullbcount = n = {}, i = 0, s = (l = this.b).length; i < s; i++) {
            n[t = l[i]] = (n[t] || 0) + 1;
          }

          for (n = this.fullbcount, e = {}, o = r = 0, c = (u = this.a).length; o < c; o++) {
            t = u[o], a = S(e, t) ? e[t] : n[t] || 0, e[t] = a - 1, 0 < a && r++;
          }

          return f(r, this.a.length + this.b.length);
        }, e.prototype.realQuickRatio = function () {
          var e, t, n;
          return n = [this.a.length, this.b.length], f(v(e = n[0], t = n[1]), e + t);
        }, e;
      }(), n = function n(e, t, _n3, r) {
        var a, i, o, s, c, l, u, f, d;
        if (null == _n3 && (_n3 = 3), null == r && (r = .6), !(0 < _n3)) throw new Error("n must be > 0: (" + _n3 + ")");
        if (!(0 <= r && r <= 1)) throw new Error("cutoff must be in [0.0, 1.0]: (" + r + ")");

        for (a = [], (i = new ee()).setSeq2(e), s = 0, l = t.length; s < l; s++) {
          o = t[s], i.setSeq1(o), i.realQuickRatio() >= r && i.quickRatio() >= r && i.ratio() >= r && a.push([i.ratio(), o]);
        }

        for (d = [], c = 0, u = (a = h.nlargest(a, _n3, E)).length; c < u; c++) {
          (f = a[c])[0], o = f[1], d.push(o);
        }

        return d;
      }, c = function c(e, t) {
        var n, r, a;

        for (n = (a = [0, e.length])[0], r = a[1]; n < r && e[n] === t;) {
          n++;
        }

        return n;
      }, a = function () {
        function e(e, t) {
          this.linejunk = e, this.charjunk = t;
        }

        return e.prototype.compare = function (e, t) {
          var n, r, a, i, o, s, c, l, u, f, d, h, p, m;

          for (c = [], u = 0, d = (p = new ee(this.linejunk, e, t).getOpcodes()).length; u < d; u++) {
            switch (l = (m = p[u])[0], r = m[1], n = m[2], i = m[3], a = m[4], l) {
              case "replace":
                o = this._fancyReplace(e, r, n, t, i, a);
                break;

              case "delete":
                o = this._dump("-", e, r, n);
                break;

              case "insert":
                o = this._dump("+", t, i, a);
                break;

              case "equal":
                o = this._dump(" ", e, r, n);
                break;

              default:
                throw new Error("unknow tag (" + l + ")");
            }

            for (f = 0, h = o.length; f < h; f++) {
              s = o[f], c.push(s);
            }
          }

          return c;
        }, e.prototype._dump = function (e, t, n, r) {
          var a, i, o;

          for (o = [], a = i = n; n <= r ? i < r : r < i; a = n <= r ? ++i : --i) {
            o.push(e + " " + t[a]);
          }

          return o;
        }, e.prototype._plainReplace = function (e, t, n, r, a, i) {
          var o, s, c, l, u, f, d, h, p, m;

          for (u = i - a < n - t ? (o = this._dump("+", r, a, i), this._dump("-", e, t, n)) : (o = this._dump("-", e, t, n), this._dump("+", r, a, i)), l = [], f = 0, h = (m = [o, u]).length; f < h; f++) {
            for (d = 0, p = (s = m[f]).length; d < p; d++) {
              c = s[d], l.push(c);
            }
          }

          return l;
        }, e.prototype._fancyReplace = function (e, t, n, r, a, i) {
          var o, s, c, l, u, f, d, h, p, m, g, v, y, b, _, w, A, x, k, S, E, M, T, C, D, O, N, j, P, z, L, R, Y, W, q, I, H, F, B, G, U, $, V, K, J, X, Z, Q;

          for (d = (I = [.74, .75])[0], b = I[1], y = new ee(this.charjunk), _ = (H = [null, null])[0], w = H[1], M = [], x = C = a; a <= i ? C < i : i < C; x = a <= i ? ++C : --C) {
            for (m = r[x], y.setSeq2(m), A = D = t; t <= n ? D < n : n < D; A = t <= n ? ++D : --D) {
              (s = e[A]) !== m ? (y.setSeq1(s), y.realQuickRatio() > d && y.quickRatio() > d && y.ratio() > d && (d = ($ = [y.ratio(), A, x])[0], h = $[1], p = $[2])) : null === _ && (_ = (U = [A, x])[0], w = U[1]);
            }
          }

          if (d < b) {
            if (null === _) {
              for (O = 0, j = (V = this._plainReplace(e, t, n, r, a, i)).length; O < j; O++) {
                E = V[O], M.push(E);
              }

              return M;
            }

            h = (K = [_, w, 1])[0], p = K[1], d = K[2];
          } else _ = null;

          for (N = 0, P = (J = this._fancyHelper(e, t, h, r, a, p)).length; N < P; N++) {
            E = J[N], M.push(E);
          }

          if (o = (X = [e[h], r[p]])[0], f = X[1], null === _) {
            for (u = v = "", y.setSeqs(o, f), Y = 0, z = (Z = y.getOpcodes()).length; Y < z; Y++) {
              switch (T = (Q = Z[Y])[0], c = Q[1], l = Q[2], g = Q[3], k = (F = [l - c, Q[4] - g])[0], S = F[1], T) {
                case "replace":
                  u += Array(k + 1).join("^"), v += Array(S + 1).join("^");
                  break;

                case "delete":
                  u += Array(k + 1).join("-");
                  break;

                case "insert":
                  v += Array(S + 1).join("+");
                  break;

                case "equal":
                  u += Array(k + 1).join(" "), v += Array(S + 1).join(" ");
                  break;

                default:
                  throw new Error("unknow tag (" + T + ")");
              }
            }

            for (W = 0, L = (B = this._qformat(o, f, u, v)).length; W < L; W++) {
              E = B[W], M.push(E);
            }
          } else M.push("  " + o);

          for (q = 0, R = (G = this._fancyHelper(e, h + 1, n, r, p + 1, i)).length; q < R; q++) {
            E = G[q], M.push(E);
          }

          return M;
        }, e.prototype._fancyHelper = function (e, t, n, r, a, i) {
          var o;
          return o = [], t < n ? o = a < i ? this._fancyReplace(e, t, n, r, a, i) : this._dump("-", e, t, n) : a < i && (o = this._dump("+", r, a, i)), o;
        }, e.prototype._qformat = function (e, t, n, r) {
          var a, i;
          return i = [], a = v(c(e, "\t"), c(t, "\t")), a = v(a, c(n.slice(0, a), " ")), a = v(a, c(r.slice(0, a), " ")), n = n.slice(a).replace(/\s+$/, ""), r = r.slice(a).replace(/\s+$/, ""), i.push("- " + e), n.length && i.push("? " + Array(a + 1).join("\t") + n + "\n"), i.push("+ " + t), r.length && i.push("? " + Array(a + 1).join("\t") + r + "\n"), i;
        }, e;
      }(), e = function e(_e3, t) {
        return null == t && (t = /^\s*#?\s*$/), t.test(_e3);
      }, i = function i(e, t) {
        return null == t && (t = " \t"), 0 <= l.call(t, e);
      }, q = function q(e, t) {
        var n, r;
        return n = e + 1, 1 === (r = t - e) ? "" + n : (r || n--, n + "," + r);
      }, s = function s(e, t, n) {
        var r, a, i, o, s, c, l, u, f, d, h, p, m, g, v, y, b, _, w, A, x, k, S, E, M, T, C, D, O, N, j, P, z, L, R, Y, W;

        for (null == (s = (j = null != n ? n : {}).fromfile) && (s = ""), null == (w = j.tofile) && (w = ""), null == (c = j.fromfiledate) && (c = ""), null == (A = j.tofiledate) && (A = ""), null == j.n && 3, null == (v = j.lineterm) && (v = "\n"), y = !(g = []), x = 0, M = (P = new ee(null, e, t).getGroupedOpcodes()).length; x < M; x++) {
          for (l = P[x], y || (y = !0, o = c ? "\t" + c : "", _ = A ? "\t" + A : "", g.push("--- " + s + o + v), g.push("+++ " + w + _ + v)), p = (z = [l[0], l[l.length - 1]])[1], r = q((i = z[0])[1], p[2]), a = q(i[3], p[4]), g.push("@@ -" + r + " +" + a + " @@" + v), k = 0, T = l.length; k < T; k++) {
            if (b = (L = l[k])[0], u = L[1], f = L[2], d = L[3], h = L[4], "equal" !== b) {
              if ("replace" === b || "delete" === b) for (E = 0, D = (Y = e.slice(u, f)).length; E < D; E++) {
                m = Y[E], g.push("-" + m);
              }
              if ("replace" === b || "insert" === b) for (N = 0, O = (W = t.slice(d, h)).length; N < O; N++) {
                m = W[N], g.push("+" + m);
              }
            } else for (S = 0, C = (R = e.slice(u, f)).length; S < C; S++) {
              m = R[S], g.push(" " + m);
            }
          }
        }

        return g;
      }, H = function H(e, t) {
        var n, r;
        return n = e + 1, (r = t - e) || n--, r <= 1 ? "" + n : n + "," + (n + r - 1);
      }, t = function t(e, _t3, n) {
        var r, a, i, o, s, c, l, u, f, d, h, p, m, g, v, y, b, _, w, A, x, k, S, E, M, T, C, D, O, N, j, P, z, L, R, Y, W, q;

        for (null == (s = (P = null != n ? n : {}).fromfile) && (s = ""), null == (A = P.tofile) && (A = ""), null == (c = P.fromfiledate) && (c = ""), null == (x = P.tofiledate) && (x = ""), null == P.n && 3, null == (v = P.lineterm) && (v = "\n"), b = !(y = {
          insert: "+ ",
          "delete": "- ",
          replace: "! ",
          equal: "  "
        }), g = [], k = 0, T = (z = new ee(null, e, _t3).getGroupedOpcodes()).length; k < T; k++) {
          if (l = z[k], !b) {
            if (b = !0, o = c ? "\t" + c : "", w = x ? "\t" + x : "", g.push("*** " + s + o + v), g.push("--- " + A + w + v), i = (L = [l[0], l[l.length - 1]])[0], p = L[1], g.push("***************" + v), r = H(i[1], p[2]), g.push("*** " + r + " ****" + v), I(function () {
              var e, t, n, r;

              for (r = [], e = 0, t = l.length; e < t; e++) {
                n = l[e], _ = n[0], n[1], n[2], n[3], n[4], r.push("replace" === _ || "delete" === _);
              }

              return r;
            }())) for (S = 0, C = l.length; S < C; S++) {
              if (R = l[S], _ = R[0], u = R[1], f = R[2], R[3], R[4], "insert" !== _) for (E = 0, D = (Y = e.slice(u, f)).length; E < D; E++) {
                m = Y[E], g.push(y[_] + m);
              }
            }
            if (a = H(i[3], p[4]), g.push("--- " + a + " ----" + v), I(function () {
              var e, t, n, r;

              for (r = [], e = 0, t = l.length; e < t; e++) {
                n = l[e], _ = n[0], n[1], n[2], n[3], n[4], r.push("replace" === _ || "insert" === _);
              }

              return r;
            }())) for (M = 0, O = l.length; M < O; M++) {
              if (W = l[M], _ = W[0], W[1], W[2], d = W[3], h = W[4], "delete" !== _) for (j = 0, N = (q = _t3.slice(d, h)).length; j < N; j++) {
                m = q[j], g.push(y[_] + m);
              }
            }
          }
        }

        return g;
      }, r = function r(e, t, n, _r3) {
        return null == _r3 && (_r3 = i), new a(n, _r3).compare(e, t);
      }, o = function o(e, t) {
        var n, r, a, i, o, s, c;
        if (!(i = {
          1: "- ",
          2: "+ "
        }[t])) throw new Error("unknow delta choice (must be 1 or 2): " + t);

        for (a = ["  ", i], r = [], o = 0, s = e.length; o < s; o++) {
          c = (n = e[o]).slice(0, 2), 0 <= l.call(a, c) && r.push(n.slice(2));
        }

        return r;
      }, u._arrayCmp = E, u.SequenceMatcher = ee, u.getCloseMatches = n, u._countLeading = c, u.Differ = a, u.IS_LINE_JUNK = e, u.IS_CHARACTER_JUNK = i, u._formatRangeUnified = q, u.unifiedDiff = s, u._formatRangeContext = H, u.contextDiff = t, u.ndiff = r, u.restore = o;
    }).call(this);
  }),
      pl = (hl._arrayCmp, hl.SequenceMatcher, hl.getCloseMatches, hl._countLeading, hl.Differ, hl.IS_LINE_JUNK, hl.IS_CHARACTER_JUNK, hl._formatRangeUnified, hl.unifiedDiff, hl._formatRangeContext, hl.contextDiff, hl.ndiff, hl.restore, hl);
  var ml = /\d/,
      gl = new RegExp(["print", "archive", "comment", "discuss", "e-mail", "email", "share", "reply", "all", "login", "sign", "single", "adx", "entry-unrelated"].join("|"), "i"),
      vl = new RegExp("(next|weiter|continue|>([^|]|$)|»([^|]|$))", "i"),
      yl = new RegExp("(first|last|end)", "i"),
      bl = new RegExp("(prev|earl|old|new|<|«)", "i");

  function _l(e) {
    var t = e.links,
        k = e.articleUrl,
        S = e.baseUrl,
        E = e.parsedUrl,
        M = e.$,
        n = e.previousUrls,
        T = void 0 === n ? [] : n;
    E = E || Mr.parse(k);
    var C = new RegExp("^".concat(S), "i"),
        D = 0 < M(yi).length,
        r = t.reduce(function (e, t) {
      var n = ns(t);
      if (!n.href) return e;
      var r = Ea(n.href),
          a = M(t),
          i = a.text();
      if (!function (t, e, n, r, a, i) {
        if (void 0 !== i.find(function (e) {
          return t === e;
        })) return !1;
        if (!t || t === e || t === n) return !1;
        var o = r.hostname;
        if (Mr.parse(t).hostname !== o) return !1;
        var s = t.replace(n, "");
        return !(!ml.test(s) || gl.test(a) || 25 < a.length);
      }(r, k, S, E, i, T)) return e;
      e[r] ? e[r].linkText = "".concat(e[r].linkText, "|").concat(i) : e[r] = {
        score: 0,
        linkText: i,
        href: r
      };

      var o,
          s,
          c,
          l,
          u,
          f,
          d,
          h,
          p,
          m,
          g,
          v,
          y,
          b,
          _ = e[r],
          w = (o = a, "".concat(i || o.text(), " ").concat(o.attr("class") || "", " ").concat(o.attr("id") || "")),
          A = function (e) {
        var t = e.match(wa);
        if (!t) return null;

        var n = _a(t[6], 10);

        return n < 100 ? n : null;
      }(r),
          x = (s = r, C.test(s) ? 0 : -25);

      return x += (c = w, vl.test(c) ? 50 : 0), x += (l = w, yl.test(l) && vl.test(l) ? -65 : 0), x += (u = w, bl.test(u) ? -200 : 0), x += (f = a.parent(), h = d = !1, Oi(ps(p = 0, 4)).forEach(function () {
        if (0 !== f.length) {
          var e,
              t = "".concat((e = f).attr("class") || "", " ").concat(e.attr("id") || "");
          !d && bi.test(t) && (d = !0, p += 25), !h && vi.test(t) && gl.test(t) && (gi.test(t) || (h = !0, p -= 25)), f = f.parent();
        }
      }), p), x += (m = r, gl.test(m) ? -25 : 0), x += (g = D, A && !g ? 50 : 0), x += function (e, t) {
        var n = 0;

        if (ka.test(e.trim())) {
          var r = _a(e, 10);

          n = r < 2 ? -30 : Math.max(0, 10 - r), t && r <= t && (n -= 50);
        }

        return n;
      }(i, A), x += (y = k, b = r, 0 < (v = x) ? v + -250 * (1 - new pl.SequenceMatcher(null, y, b).ratio() - .2) : 0), _.score = x, e;
    }, {});
    return 0 === si(r).length ? null : r;
  }

  var wl = {
    extract: function extract(e) {
      var t = e.$,
          n = e.url,
          r = e.parsedUrl,
          a = e.previousUrls,
          i = void 0 === a ? [] : a;
      r = r || Mr.parse(n);

      var o = Ea(n),
          s = ja(n, r),
          c = _l({
        links: t("a[href]").toArray(),
        articleUrl: o,
        baseUrl: s,
        parsedUrl: r,
        $: t,
        previousUrls: i
      });

      if (!c) return null;
      var l = si(c).reduce(function (e, t) {
        var n = c[t];
        return n.score > e.score ? n : e;
      }, {
        score: -100
      });
      return 50 <= l.score ? l.href : null;
    }
  },
      Al = ["og:url"];

  function xl(e) {
    return {
      url: e,
      domain: (t = e, Mr.parse(t).hostname)
    };
    var t;
  }

  var kl = {
    extract: function extract(e) {
      var t = e.$,
          n = e.url,
          r = e.metaCache,
          a = t("link[rel=canonical]");

      if (0 !== a.length) {
        var i = a.attr("href");
        if (i) return xl(i);
      }

      var o = Xo(t, Al, r);
      return xl(o || n);
    }
  },
      Sl = {
    ellipse: "…",
    chars: [" ", "-"],
    max: 140,
    truncate: !0
  };

  var El = function El(e, t, n) {
    if ("string" != typeof e || 0 === e.length) return "";
    if (0 === t) return "";

    for (var r in n = n || {}, Sl) {
      null !== n[r] && void 0 !== n[r] || (n[r] = Sl[r]);
    }

    return n.max = t || n.max, function (e, t, n, r, a) {
      if (e.length < t) return e;

      for (var i = 0, o = "", s = Math.floor(t / 2), c = "middle" === a ? s : t, l = 0, u = e.length; l < u; l++) {
        if (o = e.charAt(l), -1 !== r.indexOf(o) && "middle" !== a && (i = l), !(l < c)) return 0 === i ? a ? e.substring(0, c - 1) + n + ("middle" === a ? e.substring(e.length - s, e.length) : "") : "" : e.substring(0, i) + n;
      }

      return e;
    }(e, n.max, n.ellipse, n.chars, n.truncate);
  },
      Ml = ["og:description", "twitter:description"];

  function Tl(e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 200;
    return e = e.replace(/[\s\n]+/g, " ").trim(), El(e, n, {
      ellipse: "&hellip;"
    });
  }

  var Cl = {
    extract: function extract(e) {
      var t = e.$,
          n = e.content,
          r = e.metaCache,
          a = Xo(t, Ml, r);
      if (a) return Tl(es(a, t));
      return Tl(t(n.slice(0, 1e3)).text(), t, 200);
    }
  },
      Dl = {
    extract: function extract(e) {
      var t = e.content;
      return ca(Cr.load(t)("div").first().text()).split(/\s/).length;
    }
  },
      Ol = {
    domain: "*",
    title: Vc.extract,
    date_published: rl.extract,
    author: Qc.extract,
    content: Fc.extract.bind(Fc),
    lead_image_url: fl.extract,
    dek: function dek() {
      return null;
    },
    next_page_url: wl.extract,
    url_and_domain: kl.extract,
    excerpt: Cl.extract,
    word_count: Dl.extract,
    direction: function direction(e) {
      var t = e.title;
      return ks.getDirection(t);
    },
    extract: function extract(e) {
      var t = e.html,
          n = e.$;

      if (t && !n) {
        var r = Cr.load(t);
        e.$ = r;
      }

      var a = this.title(e),
          i = this.date_published(e),
          o = this.author(e),
          s = this.content(pt({}, e, {
        title: a
      })),
          c = this.lead_image_url(pt({}, e, {
        content: s
      })),
          l = this.dek(pt({}, e, {
        content: s
      })),
          u = this.next_page_url(e),
          f = this.excerpt(pt({}, e, {
        content: s
      })),
          d = this.word_count(pt({}, e, {
        content: s
      })),
          h = this.direction({
        title: a
      }),
          p = this.url_and_domain(e);
      return {
        title: a,
        author: o,
        date_published: i || null,
        dek: l,
        lead_image_url: c,
        content: s,
        next_page_url: u,
        url: p.url,
        domain: p.domain,
        excerpt: f,
        word_count: d,
        direction: h
      };
    }
  },
      Nl = {
    'meta[name="al:ios:app_name"][value="Medium"]': bs,
    'meta[name="generator"][value="blogger"]': gs
  };

  function jl(e, t, n) {
    var r,
        a,
        i = (t = t || Mr.parse(e)).hostname,
        o = i.split(".").slice(-2).join(".");
    return xs[i] || xs[o] || (r = n, a = si(Nl).find(function (e) {
      return 0 < r(e).length;
    }), Nl[a]) || Ol;
  }

  function Pl(s) {
    var c = s.$,
        t = s.type,
        l = s.extractionOpts,
        e = s.extractHtml,
        n = void 0 !== e && e;
    if (!l) return null;
    if ("string" == typeof l) return l;
    var a,
        i,
        o,
        r,
        u = l.selectors,
        f = l.defaultCleaner,
        d = void 0 === f || f,
        h = l.allowMultiple,
        p = (a = c, i = n, o = h, u.find(function (e) {
      if (Ma(e)) {
        if (i) return e.reduce(function (e, t) {
          return e && 0 < a(t).length;
        }, !0);
        var t = Na(e, 2),
            n = t[0],
            r = t[1];
        return (o || !o && 1 === a(n).length) && a(n).attr(r) && "" !== a(n).attr(r).trim();
      }

      return (o || !o && 1 === a(e).length) && "" !== a(e).text().trim();
    }));
    if (!p) return null;

    function m(e) {
      var t, n, r, a, i, o;
      return Go(e, c, s.url || ""), t = e, n = c, (r = l.clean) && n(r.join(","), t).remove(), a = e, i = c, (o = l.transforms) && si(o).forEach(function (n) {
        var e = i(n, a),
            r = o[n];
        "string" == typeof r ? e.each(function (e, t) {
          Mi(i(t), i, o[n]);
        }) : "function" == typeof r && e.each(function (e, t) {
          var n = r(i(t), i);
          "string" == typeof n && Mi(i(t), i, n);
        });
      }), e;
    }

    if (n) return function () {
      var e;

      if (Ma(p)) {
        e = c(p.join(","));
        var n = c("<div></div>");
        e.each(function (e, t) {
          n.append(t);
        }), e = n;
      } else e = c(p);

      return e.wrap(c("<div></div>")), e = m(e = e.parent()), Ic[t] && Ic[t](e, pt({}, s, {
        defaultCleaner: d
      })), h ? e.children().toArray().map(function (e) {
        return c.html(c(e));
      }) : c.html(e);
    }();

    if (Ma(p)) {
      var g = Na(p, 3),
          v = g[0],
          y = g[1],
          b = g[2];
      r = m(c(v)).map(function (e, t) {
        var n = c(t).attr(y).trim();
        return b ? b(n) : n;
      });
    } else r = m(c(p)).map(function (e, t) {
      return c(t).text().trim();
    });

    return r = Ma(r.toArray()) && h ? r.toArray() : r[0], d && Ic[t] ? Ic[t](r, pt({}, s, l)) : r;
  }

  function zl(t, n) {
    var r = {};
    return si(t).forEach(function (e) {
      r[e] || (r[e] = Pl(pt({}, n, {
        type: e,
        extractionOpts: t[e]
      })));
    }), r;
  }

  function Ll(e) {
    var t = e.type,
        n = e.extractor,
        r = e.fallback,
        a = void 0 === r || r,
        i = Pl(pt({}, e, {
      extractionOpts: n[t]
    }));
    return i || (a ? Ol[t](e) : null);
  }

  var Rl,
      Yl = {
    extract: function extract() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ol,
          t = 1 < arguments.length ? arguments[1] : void 0,
          n = t,
          r = n.contentOnly,
          a = n.extractedTitle;
      if ("*" === e.domain) return e.extract(t);
      if (t = pt({}, t, {
        extractor: e
      }), r) return {
        content: Ll(pt({}, t, {
          type: "content",
          extractHtml: !0,
          title: a
        }))
      };
      var i = Ll(pt({}, t, {
        type: "title"
      })),
          o = Ll(pt({}, t, {
        type: "date_published"
      })),
          s = Ll(pt({}, t, {
        type: "author"
      })),
          c = Ll(pt({}, t, {
        type: "next_page_url"
      })),
          l = Ll(pt({}, t, {
        type: "content",
        extractHtml: !0,
        title: i
      })),
          u = Ll(pt({}, t, {
        type: "lead_image_url",
        content: l
      })),
          f = Ll(pt({}, t, {
        type: "excerpt",
        content: l
      })),
          d = Ll(pt({}, t, {
        type: "dek",
        content: l,
        excerpt: f
      })),
          h = Ll(pt({}, t, {
        type: "word_count",
        content: l
      })),
          p = Ll(pt({}, t, {
        type: "direction",
        title: i
      })),
          m = Ll(pt({}, t, {
        type: "url_and_domain"
      })) || {
        url: null,
        domain: null
      },
          g = m.url,
          v = m.domain,
          y = {};
      return e.extend && (y = zl(e.extend, t)), pt({
        title: i,
        content: l,
        author: s,
        date_published: o,
        lead_image_url: u,
        dek: d,
        next_page_url: c,
        url: g,
        domain: v,
        excerpt: f,
        word_count: h,
        direction: p
      }, y);
    }
  };

  function Wl(e) {
    return ql.apply(this, arguments);
  }

  function ql() {
    return (ql = Qn(S.mark(function e(t) {
      var n, r, a, i, o, s, c, l, u, f, d, h, p;
      return S.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              n = t.next_page_url, r = t.html, a = t.$, i = t.metaCache, o = t.result, s = t.Extractor, c = t.title, l = t.url, u = 1, f = [Ea(l)];

            case 3:
              if (n && u < 26) return u += 1, e.next = 7, ds.create(n);
              e.next = 16;
              break;

            case 7:
              a = e.sent, r = a.html(), d = {
                url: n,
                html: r,
                $: a,
                metaCache: i,
                contentOnly: !0,
                extractedTitle: c,
                previousUrls: f
              }, h = Yl.extract(s, d), f.push(n), o = pt({}, o, {
                content: "".concat(o.content, "<hr><h4>Page ").concat(u, "</h4>").concat(h.content)
              }), n = h.next_page_url, e.next = 3;
              break;

            case 16:
              return p = Ol.word_count({
                content: "<div>".concat(o.content, "</div>")
              }), e.abrupt("return", pt({}, o, {
                total_pages: u,
                pages_rendered: u,
                word_count: p
              }));

            case 18:
            case "end":
              return e.stop();
          }
        }
      }, e, this);
    }))).apply(this, arguments);
  }

  return {
    parse: (Rl = Qn(S.mark(function e(t) {
      var n,
          r,
          a,
          i,
          o,
          s,
          c,
          l,
          u,
          f,
          d,
          h,
          p,
          m,
          g,
          v,
          y,
          b,
          _,
          w,
          A,
          x,
          k = arguments;

      return S.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (n = 1 < k.length && void 0 !== k[1] ? k[1] : {}, r = n.html, a = gt(n, ["html"]), i = a.fetchAllPages, o = void 0 === i || i, s = a.fallback, c = void 0 === s || s, l = a.contentType, u = void 0 === l ? "html" : l, f = a.headers, d = void 0 === f ? {} : f, h = a.extend, !t && Cr.browser && (t = window.location.href, r = r || Cr.html()), p = Mr.parse(t), p.hostname) {
                e.next = 6;
                break;
              }

              return e.abrupt("return", {
                error: !0,
                message: "The url parameter passed does not look like a valid URL. Please check your URL and try again."
              });

            case 6:
              return e.next = 8, ds.create(t, r, p, d);

            case 8:
              if ((m = e.sent).failed) return e.abrupt("return", m);
              e.next = 11;
              break;

            case 11:
              if (g = jl(t, p, m), r || (r = m.html()), v = m("meta").map(function (e, t) {
                return m(t).attr("name");
              }).toArray(), y = {}, h && (y = zl(h, {
                $: m,
                url: t,
                html: r
              })), b = Yl.extract(g, {
                url: t,
                html: r,
                $: m,
                metaCache: v,
                parsedUrl: p,
                fallback: c,
                contentType: u
              }), w = (_ = b).title, A = _.next_page_url, o && A) return e.next = 21, Wl({
                Extractor: g,
                next_page_url: A,
                html: r,
                $: m,
                metaCache: v,
                result: b,
                title: w,
                url: t
              });
              e.next = 24;
              break;

            case 21:
              b = e.sent, e.next = 25;
              break;

            case 24:
              b = pt({}, b, {
                total_pages: 1,
                rendered_pages: 1
              });

            case 25:
              return "markdown" === u ? (x = new na(), b.content = x.turndown(b.content)) : "text" === u && (b.content = m.text(m(b.content))), e.abrupt("return", pt({}, b, y));

            case 27:
            case "end":
              return e.stop();
          }
        }
      }, e, this);
    })), function (e) {
      return Rl.apply(this, arguments);
    }),
    browser: !!Cr.browser,
    fetchResource: function fetchResource(e) {
      return ds.create(e);
    }
  };
}();