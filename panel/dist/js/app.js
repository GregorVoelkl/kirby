(function(t) {
  function e(e) {
    for (
      var i, a, r = e[0], l = e[1], u = e[2], p = 0, d = [];
      p < r.length;
      p++
    )
      (a = r[p]), s[a] && d.push(s[a][0]), (s[a] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    c && c(e);
    while (d.length) d.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], i = !0, r = 1; r < n.length; r++) {
        var l = n[r];
        0 !== s[l] && (i = !1);
      }
      i && (o.splice(e--, 1), (t = a((a.s = n[0]))));
    }
    return t;
  }
  var i = {},
    s = { app: 0 },
    o = [];
  function a(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = t),
    (a.c = i),
    (a.d = function(t, e, n) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (a.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            n,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var u = 0; u < r.length; u++) e(r[u]);
  var c = l;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "0301": function(t, e, n) {},
  "0812": function(t, e, n) {},
  "08b6": function(t, e, n) {},
  "08ec": function(t, e, n) {},
  "0a66": function(t, e, n) {},
  "0cdc": function(t, e, n) {},
  "0dac": function(t, e, n) {
    "use strict";
    var i = n("1100"),
      s = n.n(i);
    s.a;
  },
  "0eae": function(t, e, n) {
    "use strict";
    var i = n("d6f2"),
      s = n.n(i);
    s.a;
  },
  1100: function(t, e, n) {},
  1182: function(t, e, n) {
    "use strict";
    var i = n("9ee7"),
      s = n.n(i);
    s.a;
  },
  "12fb": function(t, e, n) {
    "use strict";
    var i = n("ec72"),
      s = n.n(i);
    s.a;
  },
  "146c": function(t, e, n) {
    "use strict";
    var i = n("f5e3"),
      s = n.n(i);
    s.a;
  },
  "14d6": function(t, e, n) {},
  "18dd": function(t, e, n) {
    "use strict";
    var i = n("34a7"),
      s = n.n(i);
    s.a;
  },
  "196d": function(t, e, n) {
    "use strict";
    var i = n("891e"),
      s = n.n(i);
    s.a;
  },
  "1c0c": function(t, e, n) {},
  "1e3b": function(t, e, n) {
    "use strict";
    var i = n("8ae6"),
      s = n.n(i);
    s.a;
  },
  "200b": function(t, e, n) {},
  "202d": function(t, e, n) {
    "use strict";
    var i = n("ca3a"),
      s = n.n(i);
    s.a;
  },
  2114: function(t, e, n) {},
  "24c1": function(t, e, n) {
    "use strict";
    var i = n("7075"),
      s = n.n(i);
    s.a;
  },
  2607: function(t, e, n) {
    "use strict";
    var i = n("3c99"),
      s = n.n(i);
    s.a;
  },
  2666: function(t, e, n) {
    "use strict";
    var i = n("75ae"),
      s = n.n(i);
    s.a;
  },
  "28f4": function(t, e, n) {},
  "2c67": function(t, e, n) {
    "use strict";
    var i = n("14d6"),
      s = n.n(i);
    s.a;
  },
  3218: function(t, e, n) {},
  3460: function(t, e, n) {
    "use strict";
    var i = n("3eee"),
      s = n.n(i);
    s.a;
  },
  "34a7": function(t, e, n) {},
  "35ad": function(t, e, n) {
    "use strict";
    var i = n("fff9"),
      s = n.n(i);
    s.a;
  },
  3610: function(t, e, n) {},
  3755: function(t, e, n) {},
  "38ee": function(t, e, n) {
    "use strict";
    var i = n("08b6"),
      s = n.n(i);
    s.a;
  },
  "3a66": function(t, e, n) {
    "use strict";
    var i = n("9ae6"),
      s = n.n(i);
    s.a;
  },
  "3acb": function(t, e, n) {
    "use strict";
    var i = n("6b96"),
      s = n.n(i);
    s.a;
  },
  "3b9a": function(t, e, n) {},
  "3c0c": function(t, e, n) {
    "use strict";
    var i = n("8b1d"),
      s = n.n(i);
    s.a;
  },
  "3c80": function(t, e, n) {},
  "3c99": function(t, e, n) {},
  "3c9d": function(t, e, n) {},
  "3e93": function(t, e, n) {
    "use strict";
    var i = n("7428"),
      s = n.n(i);
    s.a;
  },
  "3eee": function(t, e, n) {},
  "3f08": function(t, e, n) {
    "use strict";
    var i = n("bbbf"),
      s = n.n(i);
    s.a;
  },
  "414d": function(t, e, n) {
    "use strict";
    var i = n("5714"),
      s = n.n(i);
    s.a;
  },
  4150: function(t, e, n) {},
  4333: function(t, e, n) {
    "use strict";
    var i = n("58e5"),
      s = n.n(i);
    s.a;
  },
  4496: function(t, e, n) {
    "use strict";
    var i = n("3b9a"),
      s = n.n(i);
    s.a;
  },
  4752: function(t, e, n) {
    "use strict";
    var i = n("1c0c"),
      s = n.n(i);
    s.a;
  },
  "4a37": function(t, e, n) {
    "use strict";
    var i = n("0a66"),
      s = n.n(i);
    s.a;
  },
  "4b75": function(t, e, n) {
    "use strict";
    var i = n("dccd"),
      s = n.n(i);
    s.a;
  },
  "4c3f": function(t, e, n) {
    "use strict";
    var i = n("b8aa"),
      s = n.n(i);
    s.a;
  },
  "4cb2": function(t, e, n) {
    "use strict";
    var i = n("e697"),
      s = n.n(i);
    s.a;
  },
  "4cc7": function(t, e, n) {
    "use strict";
    var i = n("6af3"),
      s = n.n(i);
    s.a;
  },
  "4e2b": function(t, e, n) {
    "use strict";
    var i = n("5f4f"),
      s = n.n(i);
    s.a;
  },
  5369: function(t, e, n) {
    "use strict";
    var i = n("0301"),
      s = n.n(i);
    s.a;
  },
  5439: function(t, e, n) {},
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("097d");
    var i = n("a026"),
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.$store.state.system.info.isBroken
          ? n("div", { staticClass: "k-panel" }, [
              n(
                "main",
                { staticClass: "k-panel-view" },
                [
                  n("k-error-view", [
                    t.debug
                      ? n("p", [
                          t._v(t._s(t.$store.state.system.info.error) + " 😭")
                        ])
                      : n("p", [t._v("The panel cannot connect to the API 😭")])
                  ])
                ],
                1
              )
            ])
          : n(
              "div",
              {
                staticClass: "k-panel",
                attrs: {
                  "data-dragging": t.$store.state.drag,
                  "data-loading": t.$store.state.isLoading,
                  "data-topbar": t.inside,
                  "data-dialog": t.$store.state.dialog
                }
              },
              [
                t.inside
                  ? n(
                      "header",
                      { staticClass: "k-panel-header" },
                      [
                        n("k-topbar", {
                          on: {
                            register: function(e) {
                              t.$refs.registration.open();
                            }
                          }
                        }),
                        t.$store.state.search
                          ? n(
                              "k-search",
                              t._b({}, "k-search", t.$store.state.search, !1)
                            )
                          : t._e()
                      ],
                      1
                    )
                  : t._e(),
                n(
                  "main",
                  { staticClass: "k-panel-view" },
                  [n("router-view")],
                  1
                ),
                t.inside ? n("k-form-buttons") : t._e(),
                n("k-error-dialog"),
                t.offline
                  ? n("div", { staticClass: "k-offline-warning" }, [
                      n("p", [t._v("The panel is currently offline")])
                    ])
                  : t._e(),
                t.inside ? n("k-registration", { ref: "registration" }) : t._e()
              ],
              1
            );
      },
      o = [],
      a = (n("386d"),
      function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "k-search",
            attrs: { role: "search" },
            on: { click: t.close }
          },
          [
            n(
              "div",
              {
                staticClass: "k-search-box",
                on: {
                  click: function(t) {
                    t.stopPropagation();
                  }
                }
              },
              [
                n(
                  "div",
                  { staticClass: "k-search-input" },
                  [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.q,
                          expression: "q"
                        }
                      ],
                      ref: "input",
                      attrs: {
                        placeholder: t.$t("search") + " …",
                        "aria-label": "$t('search')",
                        type: "text"
                      },
                      domProps: { value: t.q },
                      on: {
                        keydown: [
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "down", 40, e.key, [
                                "Down",
                                "ArrowDown"
                              ])
                              ? (e.preventDefault(), t.down(e))
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "up", 38, e.key, [
                                "Up",
                                "ArrowUp"
                              ])
                              ? (e.preventDefault(), t.up(e))
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "tab", 9, e.key, "Tab")
                              ? (e.preventDefault(), t.tab(e))
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "enter", 13, e.key, "Enter")
                              ? t.enter(e)
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "esc", 27, e.key, [
                                "Esc",
                                "Escape"
                              ])
                              ? t.close(e)
                              : null;
                          }
                        ],
                        input: function(e) {
                          e.target.composing || (t.q = e.target.value);
                        }
                      }
                    }),
                    n("k-button", {
                      attrs: { tooltip: t.$t("close"), icon: "cancel" },
                      on: { click: t.close }
                    })
                  ],
                  1
                ),
                n(
                  "ul",
                  t._l(t.pages, function(e, i) {
                    return n(
                      "li",
                      {
                        key: e.id,
                        attrs: { "data-selected": t.selected === i },
                        on: {
                          mouseover: function(e) {
                            t.selected = i;
                          }
                        }
                      },
                      [
                        n(
                          "k-link",
                          {
                            attrs: { to: t.$api.pages.link(e.id) },
                            on: {
                              click: function(e) {
                                t.click(i);
                              }
                            }
                          },
                          [
                            n("strong", [t._v(t._s(e.title))]),
                            n("small", [t._v(t._s(e.id))])
                          ]
                        )
                      ],
                      1
                    );
                  }),
                  0
                )
              ]
            )
          ]
        );
      }),
      r = [],
      l = (n("b54a"),
      function(t, e) {
        var n = null;
        return function() {
          var i = this,
            s = arguments;
          clearTimeout(n),
            (n = setTimeout(function() {
              t.apply(i, s);
            }, e));
        };
      }),
      u = n("be94"),
      c = window.panel || {},
      p = {
        assets: "@/assets",
        api: "/api",
        site: "http://sandbox.test",
        url: "/",
        debug: !0,
        translation: "en",
        search: { limit: 10 }
      },
      d = Object(u["a"])({}, p, c),
      f = {
        data: function() {
          return { pages: [], q: null, selected: -1 };
        },
        watch: {
          q: l(function(t) {
            this.search(t);
          }, 200)
        },
        mounted: function() {
          var t = this;
          this.$nextTick(function() {
            t.$refs.input.focus();
          });
        },
        methods: {
          open: function(t) {
            t.preventDefault(), this.$store.dispatch("search", !0);
          },
          click: function(t) {
            (this.selected = t), this.tab();
          },
          close: function() {
            this.$store.dispatch("search", !1);
          },
          down: function() {
            this.selected < this.pages.length - 1 && this.selected++;
          },
          enter: function() {
            var t = this.pages[this.selected] || this.pages[0];
            t && this.navigate(t);
          },
          navigate: function(t) {
            this.$router.push(this.$api.pages.link(t.id)), this.close();
          },
          search: function(t) {
            var e = this;
            this.$api
              .get("site/search", { q: t, limit: d.search.limit })
              .then(function(t) {
                (e.pages = t.data), (e.selected = -1);
              })
              .catch(function() {
                (e.pages = []), (e.selected = -1);
              });
          },
          tab: function() {
            var t = this.pages[this.selected];
            t && this.navigate(t);
          },
          up: function() {
            this.selected >= 0 && this.selected--;
          }
        }
      },
      h = f,
      m = (n("4cb2"), n("2877")),
      g = Object(m["a"])(h, a, r, !1, null, null, null);
    g.options.__file = "Search.vue";
    var v = g.exports,
      b = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("license.register"), size: "medium" },
            on: { submit: t.submit }
          },
          [
            n("k-form", {
              attrs: { fields: t.fields, novalidate: !0 },
              on: { submit: t.submit },
              model: {
                value: t.registration,
                callback: function(e) {
                  t.registration = e;
                },
                expression: "registration"
              }
            })
          ],
          1
        );
      },
      k = [],
      _ = {
        methods: {
          open: function() {
            this.$refs.dialog.open(), this.$emit("open");
          },
          close: function() {
            this.$refs.dialog.close(), this.$emit("close");
          },
          success: function(t) {
            this.$refs.dialog.close(),
              t.route && this.$router.push(t.route),
              t.message &&
                this.$store.dispatch("notification/success", t.message),
              t.event && this.$events.$emit(t.event),
              this.$emit("success");
          }
        }
      },
      $ = {
        mixins: [_],
        data: function() {
          return { registration: { license: null, email: null } };
        },
        computed: {
          fields: function() {
            return {
              license: {
                label: this.$t("license.register.label"),
                type: "text",
                required: !0,
                counter: !1,
                placeholder: "K3-",
                help: this.$t("license.register.help")
              },
              email: {
                label: this.$t("email"),
                type: "email",
                required: !0,
                counter: !1
              }
            };
          }
        },
        methods: {
          submit: function() {
            var t = this;
            this.$api.system
              .register(this.registration)
              .then(function() {
                t.$store.dispatch("system/register", t.registration.license),
                  t.success({ message: t.$t("license.register.success") });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      y = $,
      x = Object(m["a"])(y, b, k, !1, null, null, null);
    x.options.__file = "RegistrationDialog.vue";
    var w = x.exports,
      S = {
        name: "App",
        components: { "k-registration": w, "k-search": v },
        data: function() {
          return { offline: !1, dragging: !1, debug: d.debug };
        },
        computed: {
          inside: function() {
            return !(
              this.$route.meta.outside || !this.$store.state.user.current
            );
          }
        },
        created: function() {
          this.$events.$on("offline", this.isOffline),
            this.$events.$on("online", this.isOnline),
            this.$events.$on("keydown.cmd.shift.f", this.search),
            this.$events.$on("drop", this.drop);
        },
        destroyed: function() {
          this.$events.$off("offline", this.isOffline),
            this.$events.$off("online", this.isOnline),
            this.$events.$off("keydown.cmd.shift.f", this.search),
            this.$events.$off("drop", this.drop);
        },
        methods: {
          drop: function() {
            this.$store.dispatch("drag", null);
          },
          isOnline: function() {
            this.offline = !1;
          },
          isOffline: function() {
            !1 === this.$store.state.system.info.isLocal && (this.offline = !0);
          },
          search: function(t) {
            t.preventDefault(), this.$store.dispatch("search", !0);
          }
        }
      },
      O = S,
      C = (n("5c0b"), Object(m["a"])(O, s, o, !1, null, null, null));
    C.options.__file = "App.vue";
    var E = C.exports,
      j = n("1dce"),
      T = n.n(j);
    n("6762"), n("2fdb");
    function I(t) {
      var e = String(t);
      return e.charAt(0).toLowerCase() + e.substr(1);
    }
    var L = {
        install: function(t) {
          t.prototype.$events = new t({
            data: function() {
              return { entered: null };
            },
            created: function() {
              window.addEventListener("online", this.online),
                window.addEventListener("offline", this.offline),
                window.addEventListener("dragenter", this.dragenter, !1),
                window.addEventListener("dragover", this.prevent, !1),
                window.addEventListener("dragexit", this.prevent, !1),
                window.addEventListener("dragleave", this.dragleave, !1),
                window.addEventListener("drop", this.drop, !1),
                window.addEventListener("keydown", this.keydown, !1),
                window.addEventListener("keyup", this.keyup, !1),
                document.addEventListener("click", this.click, !1);
            },
            destroyed: function() {
              window.removeEventListener("online", this.online),
                window.removeEventListener("offline", this.offline),
                window.removeEventListener("dragenter", this.dragenter, !1),
                window.removeEventListener("dragover", this.prevent, !1),
                window.removeEventListener("dragexit", this.prevent, !1),
                window.removeEventListener("dragleave", this.dragleave, !1),
                window.removeEventListener("drop", this.drop, !1),
                window.removeEventListener("keydown", this.keydown, !1),
                window.removeEventListener("keyup", this.keyup, !1),
                document.removeEventListener("click", this.click, !1);
            },
            methods: {
              click: function(t) {
                this.$emit("click", t);
              },
              drop: function(t) {
                this.prevent(t), this.$emit("drop", t);
              },
              dragenter: function(t) {
                (this.entered = t.target),
                  this.prevent(t),
                  this.$emit("dragenter", t);
              },
              dragleave: function(t) {
                this.prevent(t),
                  this.entered === t.target && this.$emit("dragleave", t);
              },
              keydown: function(t) {
                var e = ["keydown"];
                (t.metaKey || t.ctrlKey) && e.push("cmd"),
                  !0 === t.altKey && e.push("alt"),
                  !0 === t.shiftKey && e.push("shift");
                var n = I(t.key),
                  i = {
                    escape: "esc",
                    arrowUp: "up",
                    arrowDown: "down",
                    arrowLeft: "left",
                    arrowRight: "right"
                  };
                i[n] && (n = i[n]),
                  !1 === ["alt", "control", "shift", "meta"].includes(n) &&
                    e.push(n),
                  this.$emit(e.join("."), t),
                  this.$emit("keydown", t);
              },
              keyup: function(t) {
                this.$emit("keyup", t);
              },
              online: function(t) {
                this.$emit("online", t);
              },
              offline: function(t) {
                this.$emit("offline", t);
              },
              prevent: function(t) {
                t.stopPropagation(), t.preventDefault();
              }
            }
          });
        }
      },
      A = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "k-bar" }, [
          t.$slots.left
            ? n(
                "div",
                {
                  staticClass: "k-bar-slot",
                  attrs: { "data-position": "left" }
                },
                [t._t("left")],
                2
              )
            : t._e(),
          t.$slots.center
            ? n(
                "div",
                {
                  staticClass: "k-bar-slot",
                  attrs: { "data-position": "center" }
                },
                [t._t("center")],
                2
              )
            : t._e(),
          t.$slots.right
            ? n(
                "div",
                {
                  staticClass: "k-bar-slot",
                  attrs: { "data-position": "right" }
                },
                [t._t("right")],
                2
              )
            : t._e()
        ]);
      },
      q = [],
      N = (n("0dac"), {}),
      P = Object(m["a"])(N, A, q, !1, null, null, null);
    P.options.__file = "Bar.vue";
    var D = P.exports,
      B = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          t._g(
            { staticClass: "k-box", attrs: { "data-theme": t.theme } },
            t.$listeners
          ),
          [
            t._t("default", [
              n("k-text", { domProps: { innerHTML: t._s(t.text) } })
            ])
          ],
          2
        );
      },
      R = [],
      F = { props: { theme: String, text: String } },
      M = F,
      z = (n("3460"), Object(m["a"])(M, B, R, !1, null, null, null));
    z.options.__file = "Box.vue";
    var U = z.exports,
      H = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          t.component,
          t._g(
            {
              directives: [{ name: "tab", rawName: "v-tab" }],
              ref: "button",
              tag: "component",
              staticClass: "k-button",
              attrs: {
                "aria-current": t.current,
                autofocus: t.autofocus,
                id: t.id,
                disabled: t.disabled,
                "data-tabbed": t.tabbed,
                "data-theme": t.theme,
                "data-responsive": t.responsive,
                role: t.role,
                tabindex: t.tabindex,
                target: t.target,
                title: t.tooltip,
                to: t.link,
                type: t.link ? null : t.type
              }
            },
            t.$listeners
          ),
          [
            t.image || t.icon
              ? n(
                  "figure",
                  { staticClass: "k-button-figure" },
                  [
                    t.image
                      ? n("img", {
                          attrs: { src: t.imageUrl, alt: t.tooltip || "" }
                        })
                      : n("k-icon", { attrs: { type: t.icon, alt: t.tooltip } })
                  ],
                  1
                )
              : t._e(),
            t.$slots.default
              ? n(
                  "span",
                  { staticClass: "k-button-text" },
                  [t._t("default")],
                  2
                )
              : t._e()
          ]
        );
      },
      V = [],
      K = n("53ca"),
      G = (n("c5f6"),
      {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          current: [String, Boolean],
          disabled: Boolean,
          icon: String,
          id: [String, Number],
          image: [String, Object],
          link: String,
          responsive: Boolean,
          role: String,
          target: String,
          tabindex: String,
          theme: String,
          tooltip: String,
          type: { type: String, default: "button" }
        },
        data: function() {
          return { tabbed: !1 };
        },
        computed: {
          component: function() {
            return this.link ? "k-link" : "button";
          },
          imageUrl: function() {
            return this.image
              ? "object" === Object(K["a"])(this.image)
                ? this.image.url
                : this.image
              : null;
          }
        },
        methods: {
          focus: function() {
            this.$refs.button.focus();
          },
          tab: function() {
            this.focus(), (this.tabbed = !0);
          },
          untab: function() {
            this.tabbed = !1;
          }
        }
      }),
      Y = G,
      W = (n("bd6e"), Object(m["a"])(Y, H, V, !1, null, null, null));
    W.options.__file = "Button.vue";
    var J = W.exports,
      X = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-button-group" },
          [t._t("default")],
          2
        );
      },
      Q = [],
      Z = (n("2c67"), {}),
      tt = Object(m["a"])(Z, X, Q, !1, null, null, null);
    tt.options.__file = "ButtonGroup.vue";
    var et = tt.exports,
      nt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "k-calendar-input" }, [
          n(
            "nav",
            [
              n("k-button", {
                attrs: { icon: "angle-left" },
                on: { click: t.prev }
              }),
              n(
                "span",
                { staticClass: "k-calendar-selects" },
                [
                  n("k-select-input", {
                    attrs: {
                      options: t.months,
                      disabled: t.disabled,
                      empty: !1,
                      required: !0
                    },
                    model: {
                      value: t.month,
                      callback: function(e) {
                        t.month = t._n(e);
                      },
                      expression: "month"
                    }
                  }),
                  n("k-select-input", {
                    attrs: {
                      options: t.years,
                      disabled: t.disabled,
                      empty: !1,
                      required: !0
                    },
                    model: {
                      value: t.year,
                      callback: function(e) {
                        t.year = t._n(e);
                      },
                      expression: "year"
                    }
                  })
                ],
                1
              ),
              n("k-button", {
                attrs: { icon: "angle-right" },
                on: { click: t.next }
              })
            ],
            1
          ),
          n("table", { staticClass: "k-calendar-table" }, [
            n("thead", [
              n(
                "tr",
                t._l(t.weekdays, function(e) {
                  return n("th", { key: "weekday_" + e }, [t._v(t._s(e))]);
                }),
                0
              )
            ]),
            n(
              "tbody",
              t._l(t.numberOfWeeks, function(e) {
                return n(
                  "tr",
                  { key: "week_" + e },
                  t._l(t.days(e), function(e, i) {
                    return n(
                      "td",
                      {
                        key: "day_" + i,
                        staticClass: "k-calendar-day",
                        attrs: {
                          "aria-current": !!t.isToday(e) && "date",
                          "aria-selected": !!t.isCurrent(e) && "date"
                        }
                      },
                      [
                        e
                          ? n(
                              "k-button",
                              {
                                on: {
                                  click: function(n) {
                                    t.select(e);
                                  }
                                }
                              },
                              [t._v(t._s(e))]
                            )
                          : t._e()
                      ],
                      1
                    );
                  }),
                  0
                );
              }),
              0
            ),
            n("tfoot", [
              n("tr", [
                n(
                  "td",
                  { staticClass: "k-calendar-today", attrs: { colspan: "7" } },
                  [
                    n(
                      "k-button",
                      {
                        on: {
                          click: function(e) {
                            t.go("today");
                          }
                        }
                      },
                      [t._v(t._s(t.$t("today")))]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ]);
      },
      it = [],
      st = (n("ac6a"), n("5a0c")),
      ot = n.n(st),
      at = function(t, e) {
        t = String(t);
        var n = "";
        e = (e || 2) - t.length;
        while (n.length < e) n += "0";
        return n + t;
      },
      rt = {
        props: { value: String, disabled: Boolean },
        data: function() {
          var t = this.value ? ot()(this.value) : ot()();
          return {
            day: t.date(),
            month: t.month(),
            year: t.year(),
            today: ot()(),
            current: t
          };
        },
        computed: {
          date: function() {
            return ot()(
              ""
                .concat(this.year, "-")
                .concat(this.month + 1, "-")
                .concat(this.day)
            );
          },
          numberOfDays: function() {
            return this.date.daysInMonth();
          },
          numberOfWeeks: function() {
            return Math.ceil((this.numberOfDays + this.firstWeekday - 1) / 7);
          },
          firstWeekday: function() {
            var t = this.date
              .clone()
              .startOf("month")
              .day();
            return t > 0 ? t : 7;
          },
          weekdays: function() {
            return [
              this.$t("days.mon"),
              this.$t("days.tue"),
              this.$t("days.wed"),
              this.$t("days.thu"),
              this.$t("days.fri"),
              this.$t("days.sat"),
              this.$t("days.sun")
            ];
          },
          monthnames: function() {
            return [
              this.$t("months.january"),
              this.$t("months.february"),
              this.$t("months.march"),
              this.$t("months.april"),
              this.$t("months.may"),
              this.$t("months.june"),
              this.$t("months.july"),
              this.$t("months.august"),
              this.$t("months.september"),
              this.$t("months.october"),
              this.$t("months.november"),
              this.$t("months.december")
            ];
          },
          months: function() {
            var t = [];
            return (
              this.monthnames.forEach(function(e, n) {
                t.push({ value: n, text: e });
              }),
              t
            );
          },
          years: function() {
            for (var t = [], e = this.year - 10; e <= this.year + 10; e++)
              t.push({ value: e, text: at(e) });
            return t;
          }
        },
        watch: {
          value: function(t) {
            var e = ot()(t);
            (this.day = e.date()),
              (this.month = e.month()),
              (this.year = e.year()),
              (this.current = e);
          }
        },
        methods: {
          days: function(t) {
            for (var e = [], n = 7 * (t - 1) + 1, i = n; i < n + 7; i++) {
              var s = i - (this.firstWeekday - 1);
              s <= 0 || s > this.numberOfDays ? e.push("") : e.push(s);
            }
            return e;
          },
          next: function() {
            var t = this.date.clone().add(1, "month");
            this.set(t);
          },
          isToday: function(t) {
            return (
              this.month === this.today.month() &&
              this.year === this.today.year() &&
              t === this.today.date()
            );
          },
          isCurrent: function(t) {
            return (
              this.month === this.current.month() &&
              this.year === this.current.year() &&
              t === this.current.date()
            );
          },
          prev: function() {
            var t = this.date.clone().subtract(1, "month");
            this.set(t);
          },
          go: function(t, e) {
            "today" === t &&
              ((t = this.today.year()), (e = this.today.month())),
              (this.year = t),
              (this.month = e);
          },
          set: function(t) {
            (this.day = t.date()),
              (this.month = t.month()),
              (this.year = t.year());
          },
          select: function(t) {
            t && (this.day = t);
            var e = ot()(
              new Date(
                this.year,
                this.month,
                this.day,
                this.current.hour(),
                this.current.minute()
              )
            );
            this.$emit("input", e.toISOString());
          }
        }
      },
      lt = rt,
      ut = (n("4c3f"), Object(m["a"])(lt, nt, it, !1, null, null, null));
    ut.options.__file = "Calendar.vue";
    var ct = ut.exports,
      pt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "figure",
          t._g({ staticClass: "k-card" }, t.$listeners),
          [
            t.sortable ? n("k-sort-handle") : t._e(),
            n(
              t.wrapper,
              { tag: "component", attrs: { to: t.link, target: t.target } },
              [
                t.image && t.image.url
                  ? n("k-image", {
                      staticClass: "k-card-image",
                      attrs: {
                        src: t.image.url,
                        ratio: t.image.ratio || "3/2",
                        back: t.image.back || "black",
                        cover: t.image.cover
                      }
                    })
                  : n(
                      "span",
                      {
                        staticClass: "k-card-icon",
                        style: "padding-bottom:" + t.ratioPadding
                      },
                      [n("k-icon", t._b({}, "k-icon", t.icon, !1))],
                      1
                    ),
                n("figcaption", { staticClass: "k-card-content" }, [
                  n(
                    "span",
                    {
                      staticClass: "k-card-text",
                      attrs: { "data-noinfo": !t.info }
                    },
                    [t._v(t._s(t.text))]
                  ),
                  t.info
                    ? n("span", {
                        staticClass: "k-card-info",
                        domProps: { innerHTML: t._s(t.info) }
                      })
                    : t._e()
                ])
              ],
              1
            ),
            n(
              "nav",
              { staticClass: "k-card-options" },
              [
                t.flag
                  ? n(
                      "k-button",
                      t._b(
                        {
                          staticClass: "k-card-options-button",
                          on: { click: t.flag.click }
                        },
                        "k-button",
                        t.flag,
                        !1
                      )
                    )
                  : t._e(),
                t._t("options", [
                  t.options
                    ? n("k-button", {
                        staticClass: "k-card-options-button",
                        attrs: { tooltip: t.$t("options"), icon: "dots" },
                        on: {
                          click: function(e) {
                            e.stopPropagation(), t.$refs.dropdown.toggle();
                          }
                        }
                      })
                    : t._e(),
                  n("k-dropdown-content", {
                    ref: "dropdown",
                    staticClass: "k-card-options-dropdown",
                    attrs: { options: t.options, align: "right" },
                    on: {
                      action: function(e) {
                        t.$emit("action", e);
                      }
                    }
                  })
                ])
              ],
              2
            )
          ],
          1
        );
      },
      dt = [],
      ft = (n("28a5"),
      function(t) {
        t = t || "3/2";
        var e = t.split("/");
        if (2 !== e.length) return "100%";
        var n = Number(e[0]),
          i = Number(e[1]),
          s = 100 / n * i;
        return s + "%";
      }),
      ht = {
        inheritAttrs: !1,
        props: {
          flag: Object,
          icon: {
            type: Object,
            default: function() {
              return { type: "file", back: "black" };
            }
          },
          image: Object,
          info: String,
          link: String,
          options: [Array, Function],
          sortable: Boolean,
          target: String,
          text: String
        },
        computed: {
          wrapper: function() {
            return this.link ? "k-link" : "div";
          },
          ratioPadding: function() {
            return this.icon && this.icon.ratio
              ? ft(this.icon.ratio)
              : ft("3/2");
          }
        }
      },
      mt = ht,
      gt = (n("5369"), Object(m["a"])(mt, pt, dt, !1, null, null, null));
    gt.options.__file = "Card.vue";
    var vt = gt.exports,
      bt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-cards" },
          [
            t._t(
              "default",
              t._l(t.cards, function(e, i) {
                return n(
                  "k-card",
                  t._g(t._b({ key: i }, "k-card", e, !1), t.$listeners)
                );
              })
            )
          ],
          2
        );
      },
      kt = [],
      _t = { props: { cards: Array } },
      $t = _t,
      yt = (n("2666"), Object(m["a"])($t, bt, kt, !1, null, null, null));
    yt.options.__file = "Cards.vue";
    var xt = yt.exports,
      wt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-collection", attrs: { "data-layout": t.layout } },
          [
            n(
              "k-draggable",
              {
                attrs: {
                  list: t.items,
                  options: t.dragOptions,
                  element: t.elements.list,
                  "data-size": t.size,
                  handle: !0
                },
                on: {
                  change: function(e) {
                    t.$emit("change", e);
                  },
                  end: t.onEnd
                }
              },
              t._l(t.items, function(e, i) {
                return n(
                  t.elements.item,
                  t._b(
                    {
                      key: i,
                      tag: "component",
                      class: { "k-draggable-item": e.sortable },
                      on: {
                        action: function(n) {
                          t.$emit("action", e, n);
                        },
                        dragstart: function(n) {
                          t.onDragStart(n, e.dragText);
                        }
                      }
                    },
                    "component",
                    e,
                    !1
                  )
                );
              }),
              1
            ),
            !1 !== t.pagination && !0 !== t.paginationOptions.hide
              ? n(
                  "k-pagination",
                  t._b(
                    {
                      on: {
                        paginate: function(e) {
                          t.$emit("paginate", e);
                        }
                      }
                    },
                    "k-pagination",
                    t.paginationOptions,
                    !1
                  )
                )
              : t._e()
          ],
          1
        );
      },
      St = [],
      Ot = {
        props: {
          items: {
            type: [Array, Object],
            default: function() {
              return [];
            }
          },
          layout: { type: String, default: "list" },
          size: String,
          sortable: Boolean,
          pagination: {
            type: [Boolean, Object],
            default: function() {
              return !1;
            }
          }
        },
        data: function() {
          return { list: this.items };
        },
        computed: {
          dragOptions: function() {
            return {
              sort: this.sortable,
              disabled: !1 === this.sortable,
              draggable: ".k-draggable-item"
            };
          },
          elements: function() {
            var t = {
              cards: { list: "k-cards", item: "k-card" },
              list: { list: "k-list", item: "k-list-item" }
            };
            return t[this.layout] ? t[this.layout] : t["list"];
          },
          paginationOptions: function() {
            var t =
              "object" !== Object(K["a"])(this.pagination)
                ? {}
                : this.pagination;
            return Object(u["a"])(
              {
                limit: 10,
                align: "center",
                details: !0,
                keys: !1,
                total: 0,
                hide: !1
              },
              t
            );
          }
        },
        watch: {
          items: function() {
            this.list = this.items;
          },
          $props: function() {
            this.$forceUpdate();
          }
        },
        over: null,
        methods: {
          onEnd: function() {
            this.over && this.over.removeAttribute("data-over"),
              this.$emit("sort", this.items);
          },
          onDragStart: function(t, e) {
            this.$store.dispatch("drag", { type: "text", data: e });
          }
        }
      },
      Ct = Ot,
      Et = Object(m["a"])(Ct, wt, St, !1, null, null, null);
    Et.options.__file = "Collection.vue";
    var jt = Et.exports,
      Tt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-column", attrs: { "data-width": t.width } },
          [t._t("default")],
          2
        );
      },
      It = [],
      Lt = { name: "KirbyColumn", props: { width: String } },
      At = Lt,
      qt = (n("5e3a"), Object(m["a"])(At, Tt, It, !1, null, null, null));
    qt.options.__file = "Column.vue";
    var Nt = qt.exports,
      Pt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          { staticClass: "k-counter", attrs: { "data-invalid": !t.valid } },
          [
            n("span", [t._v(t._s(t.count))]),
            t.min && t.max
              ? n("span", { staticClass: "k-counter-rules" }, [
                  t._v("(" + t._s(t.min) + "–" + t._s(t.max) + ")")
                ])
              : t.min
                ? n("span", { staticClass: "k-counter-rules" }, [
                    t._v("≥ " + t._s(t.min))
                  ])
                : t.max
                  ? n("span", { staticClass: "k-counter-rules" }, [
                      t._v("≤ " + t._s(t.max))
                    ])
                  : t._e()
          ]
        );
      },
      Dt = [],
      Bt = {
        props: {
          count: Number,
          min: Number,
          max: Number,
          required: { type: Boolean, default: !1 }
        },
        computed: {
          valid: function() {
            return (
              (!1 === this.required && 0 === this.count) ||
              ((!0 !== this.required || 0 !== this.count) &&
                (!(this.min && this.count < this.min) &&
                  !(this.max && this.count > this.max)))
            );
          }
        }
      },
      Rt = Bt,
      Ft = (n("5f5b"), Object(m["a"])(Rt, Pt, Dt, !1, null, null, null));
    Ft.options.__file = "Counter.vue";
    var Mt = Ft.exports,
      zt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isOpen
          ? n("div", { staticClass: "k-dialog", on: { click: t.cancel } }, [
              n(
                "div",
                {
                  staticClass: "k-dialog-box",
                  attrs: { "data-size": t.size },
                  on: {
                    click: function(t) {
                      t.stopPropagation();
                    }
                  }
                },
                [
                  t.notification
                    ? n(
                        "div",
                        {
                          staticClass: "k-dialog-notification",
                          attrs: { "data-theme": t.notification.type }
                        },
                        [
                          n("p", [t._v(t._s(t.notification.message))]),
                          n("k-button", {
                            attrs: { icon: "cancel" },
                            on: {
                              click: function(e) {
                                t.notification = null;
                              }
                            }
                          })
                        ],
                        1
                      )
                    : t._e(),
                  n(
                    "div",
                    { staticClass: "k-dialog-body" },
                    [t._t("default")],
                    2
                  ),
                  n(
                    "footer",
                    { staticClass: "k-dialog-footer" },
                    [
                      t._t("footer", [
                        n(
                          "k-button-group",
                          [
                            n(
                              "k-button",
                              {
                                staticClass: "k-dialog-button-cancel",
                                attrs: { icon: "cancel" },
                                on: { click: t.cancel }
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.$t("cancel")) +
                                    "\n          "
                                )
                              ]
                            ),
                            n(
                              "k-button",
                              {
                                staticClass: "k-dialog-button-submit",
                                attrs: { icon: t.icon, theme: t.theme },
                                on: { click: t.submit }
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.button || t.$t("confirm")) +
                                    "\n          "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    2
                  )
                ]
              )
            ])
          : t._e();
      },
      Ut = [],
      Ht = {
        props: {
          button: { type: String, default: "Ok" },
          icon: { type: String, default: "check" },
          size: String,
          theme: String,
          visible: Boolean
        },
        data: function() {
          return { notification: null, isOpen: this.visible, scrollTop: 0 };
        },
        mounted: function() {
          !0 === this.isOpen && this.$emit("open");
        },
        methods: {
          storeScrollPosition: function() {
            var t = document.querySelector(".k-panel-view");
            t && t.scrollTop
              ? (this.scrollTop = t.scrollTop)
              : (this.scrollTop = 0);
          },
          restoreScrollPosition: function() {
            var t = document.querySelector(".k-panel-view");
            t && t.scrollTop && (t.scrollTop = this.scrollTop);
          },
          open: function() {
            var t = this;
            this.storeScrollPosition(),
              this.$store.dispatch("dialog", !0),
              (this.notification = null),
              (this.isOpen = !0),
              this.$emit("open"),
              this.$events.$on("keydown.esc", this.close),
              this.$nextTick(function() {
                t.$el &&
                  (t.focus(),
                  document.body.addEventListener(
                    "focus",
                    function(e) {
                      !1 === t.$el.contains(e.target) && t.focus();
                    },
                    !0
                  ));
              });
          },
          close: function() {
            (this.notification = null),
              (this.isOpen = !1),
              this.$emit("close"),
              this.$events.$off("keydown.esc", this.close),
              this.$store.dispatch("dialog", null),
              this.restoreScrollPosition();
          },
          cancel: function() {
            this.$emit("cancel"), this.close();
          },
          focus: function() {
            if (this.$el && this.$el.querySelector) {
              var t = this.$el.querySelector(
                "[autofocus], [data-autofocus], input, textarea, select, .k-dialog-button-submit"
              );
              if (
                (t || (t = this.$el.querySelector(".k-dialog-button-cancel")),
                t)
              )
                return void t.focus();
            }
          },
          error: function(t) {
            this.notification = { message: t, type: "error" };
          },
          submit: function() {
            this.$emit("submit");
          },
          success: function(t) {
            this.notification = { message: t, type: "success" };
          }
        }
      },
      Vt = Ht,
      Kt = (n("4752"), Object(m["a"])(Vt, zt, Ut, !1, null, null, null));
    Kt.options.__file = "Dialog.vue";
    var Gt = Kt.exports,
      Yt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "draggable",
          t._g(
            {
              staticClass: "k-draggable",
              attrs: {
                element: t.element,
                list: t.list,
                options: t.dragOptions
              }
            },
            t.listeners
          ),
          [t._t("default"), t._t("footer", null, { slot: "footer" })],
          2
        );
      },
      Wt = [],
      Jt = n("1516"),
      Xt = n.n(Jt),
      Qt = {
        components: { draggable: Xt.a },
        props: {
          element: String,
          handle: [String, Boolean],
          list: [Array, Object],
          options: Object
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              start: function() {
                t.$store.dispatch("drag", {}),
                  t.$listeners.start && t.$listeners.start();
              },
              end: function() {
                t.$store.dispatch("drag", null),
                  t.$listeners.end && t.$listeners.end();
              }
            })
          };
        },
        computed: {
          dragOptions: function() {
            var t = !1;
            return (
              (t = !0 === this.handle ? ".k-sort-handle" : this.handle),
              Object(u["a"])(
                {
                  fallbackClass: "k-sortable-fallback",
                  fallbackOnBody: !0,
                  forceFallback: !0,
                  ghostClass: "k-sortable-ghost",
                  handle: t,
                  scroll: document.querySelector(".k-panel-view")
                },
                this.options
              )
            );
          }
        }
      },
      Zt = Qt,
      te = Object(m["a"])(Zt, Yt, Wt, !1, null, null, null);
    te.options.__file = "Draggable.vue";
    var ee = te.exports,
      ne = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          {
            staticClass: "k-dropdown",
            on: {
              click: function(t) {
                t.stopPropagation();
              }
            }
          },
          [t._t("default")],
          2
        );
      },
      ie = [],
      se = (n("df30"), {}),
      oe = Object(m["a"])(se, ne, ie, !1, null, null, null);
    oe.options.__file = "Dropdown.vue";
    var ae = oe.exports,
      re = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isOpen
          ? n(
              "div",
              {
                staticClass: "k-dropdown-content",
                attrs: { "data-align": t.align }
              },
              [
                t._t(
                  "default",
                  t._l(t.items, function(e, i) {
                    return n(
                      "k-dropdown-item",
                      t._b(
                        {
                          key: t._uid + "-item-" + i,
                          ref: t._uid + "-item-" + i,
                          refInFor: !0,
                          on: {
                            click: function(n) {
                              t.$emit("action", e.click);
                            }
                          }
                        },
                        "k-dropdown-item",
                        e,
                        !1
                      ),
                      [t._v("\n      " + t._s(e.text) + "\n    ")]
                    );
                  })
                )
              ],
              2
            )
          : t._e();
      },
      le = [],
      ue = null,
      ce = {
        props: { options: [Array, Function], align: String },
        data: function() {
          return { items: [], current: -1, isOpen: !1 };
        },
        methods: {
          fetchOptions: function(t) {
            if (!this.options) return t(this.items);
            "string" === typeof this.options
              ? fetch(this.options)
                  .then(function(t) {
                    return t.json();
                  })
                  .then(function(e) {
                    return t(e);
                  })
              : "function" === typeof this.options
                ? this.options(t)
                : Array.isArray(this.options) && t(this.options);
          },
          open: function() {
            var t = this;
            this.reset(),
              ue && ue !== this && ue.close(),
              this.fetchOptions(function(e) {
                t.$events.$on("keydown", t.navigate),
                  t.$events.$on("click", t.close),
                  (t.items = e),
                  (t.isOpen = !0),
                  t.$emit("open"),
                  (ue = t);
              });
          },
          reset: function() {
            (this.current = -1),
              this.$events.$off("keydown", this.navigate),
              this.$events.$off("click", this.close);
          },
          close: function() {
            this.reset(), (this.isOpen = ue = !1), this.$emit("close");
          },
          toggle: function() {
            this.isOpen ? this.close() : this.open();
          },
          focus: function(t) {
            (t = t || 0),
              this.$children[t] &&
                this.$children[t].focus &&
                ((this.current = t), this.$children[t].focus());
          },
          navigate: function(t) {
            switch (t.code) {
              case "Escape":
              case "ArrowLeft":
                this.close(), this.$emit("leave", t.code);
                break;
              case "ArrowUp":
                t.preventDefault(),
                  this.current > 0
                    ? (this.current--, this.focus(this.current))
                    : (this.close(), this.$emit("leave", t.code));
                break;
              case "ArrowDown":
                t.preventDefault(),
                  this.current < this.$children.length - 1 &&
                    (this.current++, this.focus(this.current));
                break;
            }
          }
        }
      },
      pe = ce,
      de = (n("f32d"), Object(m["a"])(pe, re, le, !1, null, null, null));
    de.options.__file = "DropdownContent.vue";
    var fe = de.exports,
      he = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-button",
          t._g(
            t._b(
              { ref: "button", staticClass: "k-dropdown-item" },
              "k-button",
              t.$props,
              !1
            ),
            t.listeners
          ),
          [t._t("default")],
          2
        );
      },
      me = [],
      ge = {
        inheritAttrs: !1,
        props: {
          disabled: Boolean,
          icon: String,
          image: [String, Object],
          link: String,
          target: String,
          theme: String,
          upload: String,
          current: [String, Boolean]
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              click: function(e) {
                t.$parent.close(), t.$emit("click", e);
              }
            })
          };
        },
        methods: {
          focus: function() {
            this.$refs.button.focus();
          },
          tab: function() {
            this.$refs.button.tab();
          }
        }
      },
      ve = ge,
      be = (n("b8aa9"), Object(m["a"])(ve, he, me, !1, null, null, null));
    be.options.__file = "DropdownItem.vue";
    var ke = be.exports,
      _e = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          t._g(
            { staticClass: "k-empty", attrs: { "data-layout": t.layout } },
            t.$listeners
          ),
          [
            n("k-icon", { attrs: { type: t.icon } }),
            n("p", [t._t("default")], 2)
          ],
          1
        );
      },
      $e = [],
      ye = {
        props: {
          text: String,
          icon: String,
          layout: { type: String, default: "list" }
        }
      },
      xe = ye,
      we = (n("fa25"), Object(m["a"])(xe, _e, $e, !1, null, null, null));
    we.options.__file = "Empty.vue";
    var Se,
      Oe,
      Ce = we.exports,
      Ee = {
        data: function() {
          return { error: null };
        },
        errorCaptured: function(t) {
          return (this.error = t), !1;
        },
        render: function(t) {
          return this.error
            ? this.$slots.error
              ? this.$slots.error[0]
              : this.$scopedSlots.error
                ? this.$scopedSlots.error({ error: this.error })
                : t(
                    "k-box",
                    { attrs: { theme: "negative" } },
                    this.error.message || this.error
                  )
            : this.$slots.default[0];
        }
      },
      je = Ee,
      Te = Object(m["a"])(je, Se, Oe, !1, null, null, null);
    Te.options.__file = "ErrorBoundary.vue";
    var Ie = Te.exports,
      Le = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-grid", attrs: { "data-gutter": t.gutter } },
          [t._t("default")],
          2
        );
      },
      Ae = [],
      qe = { props: { gutter: String } },
      Ne = qe,
      Pe = (n("fbb8"), Object(m["a"])(Ne, Le, Ae, !1, null, null, null));
    Pe.options.__file = "Grid.vue";
    var De = Pe.exports,
      Be = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "header",
          { staticClass: "k-header", attrs: { "data-editable": t.editable } },
          [
            n(
              "k-headline",
              { attrs: { tag: "h1", size: "huge" } },
              [
                t.editable && t.$listeners.edit
                  ? n(
                      "span",
                      {
                        staticClass: "k-headline-editable",
                        on: {
                          click: function(e) {
                            t.$emit("edit");
                          }
                        }
                      },
                      [
                        t._t("default"),
                        n("k-icon", { attrs: { type: "edit" } })
                      ],
                      2
                    )
                  : t._t("default")
              ],
              2
            ),
            t.$slots.left || t.$slots.right
              ? n(
                  "k-bar",
                  [
                    t._t("left", null, { slot: "left" }),
                    t._t("right", null, { slot: "right" })
                  ],
                  2
                )
              : t._e(),
            t.tabs && t.tabs.length > 1
              ? n(
                  "div",
                  { staticClass: "k-header-tabs" },
                  [
                    n(
                      "nav",
                      [
                        t._l(t.visibleTabs, function(e, i) {
                          return n(
                            "k-button",
                            {
                              key: t.$route.fullPath + "-tab-" + i,
                              staticClass: "k-tab-button",
                              attrs: {
                                link: "#" + e.name,
                                current:
                                  t.currentTab && t.currentTab.name === e.name,
                                icon: e.icon,
                                tooltip: e.label
                              }
                            },
                            [t._v("\n        " + t._s(e.label) + "\n      ")]
                          );
                        }),
                        t.invisibleTabs.length
                          ? n(
                              "k-button",
                              {
                                staticClass:
                                  "k-tab-button k-tabs-dropdown-button",
                                attrs: { icon: "dots" },
                                on: {
                                  click: function(e) {
                                    e.stopPropagation(), t.$refs.more.toggle();
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n        " + t._s(t.$t("more")) + "\n      "
                                )
                              ]
                            )
                          : t._e()
                      ],
                      2
                    ),
                    t.invisibleTabs.length
                      ? n(
                          "k-dropdown-content",
                          {
                            ref: "more",
                            staticClass: "k-tabs-dropdown",
                            attrs: { align: "right" }
                          },
                          t._l(t.invisibleTabs, function(e, i) {
                            return n(
                              "k-dropdown-item",
                              {
                                key: "more-" + i,
                                attrs: {
                                  link: "#" + e.name,
                                  current:
                                    t.currentTab &&
                                    t.currentTab.name === e.name,
                                  icon: e.icon,
                                  tooltip: e.label
                                }
                              },
                              [t._v("\n        " + t._s(e.label) + "\n      ")]
                            );
                          }),
                          1
                        )
                      : t._e()
                  ],
                  1
                )
              : t._e()
          ],
          1
        );
      },
      Re = [],
      Fe = {
        props: { editable: Boolean, tabs: Array, tab: Object },
        data: function() {
          return {
            size: null,
            currentTab: this.tab,
            visibleTabs: this.tabs,
            invisibleTabs: []
          };
        },
        watch: {
          tab: function() {
            this.currentTab = this.tab;
          },
          tabs: function(t) {
            (this.visibleTabs = t), (this.invisibleTabs = []), this.resize(!0);
          }
        },
        created: function() {
          window.addEventListener("resize", this.resize);
        },
        destroyed: function() {
          window.removeEventListener("resize", this.resize);
        },
        methods: {
          resize: function(t) {
            if (this.tabs && !(this.tabs.length <= 1)) {
              if (this.tabs.length <= 3)
                return (
                  (this.visibleTabs = this.tabs), void (this.invisibleTabs = [])
                );
              if (window.innerWidth >= 700) {
                if ("large" === this.size && !t) return;
                (this.visibleTabs = this.tabs),
                  (this.invisibleTabs = []),
                  (this.size = "large");
              } else {
                if ("small" === this.size && !t) return;
                (this.visibleTabs = this.tabs.slice(0, 2)),
                  (this.invisibleTabs = this.tabs.slice(2)),
                  (this.size = "small");
              }
            }
          }
        }
      },
      Me = Fe,
      ze = (n("b42a"), Object(m["a"])(Me, Be, Re, !1, null, null, null));
    ze.options.__file = "Header.vue";
    var Ue = ze.exports,
      He = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          t.tag,
          t._g(
            {
              tag: "component",
              staticClass: "k-headline",
              attrs: { "data-theme": t.theme, "data-size": t.size }
            },
            t.$listeners
          ),
          [
            t.link
              ? n("k-link", { attrs: { to: t.link } }, [t._t("default")], 2)
              : t._t("default")
          ],
          2
        );
      },
      Ve = [],
      Ke = {
        props: {
          link: String,
          size: { type: String },
          tag: { type: String, default: "h2" },
          theme: { type: String }
        }
      },
      Ge = Ke,
      Ye = (n("b83b"), Object(m["a"])(Ge, He, Ve, !1, null, null, null));
    Ye.options.__file = "Headline.vue";
    var We = Ye.exports,
      Je = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          {
            staticClass: "k-icon",
            attrs: {
              "aria-label": t.alt,
              role: t.alt ? "img" : null,
              "aria-hidden": !t.alt,
              "data-back": t.back,
              "data-size": t.size
            }
          },
          [
            t.emoji
              ? n("span", { staticClass: "k-icon-emoji" }, [t._v(t._s(t.type))])
              : n(
                  "svg",
                  {
                    style: { color: t.color },
                    attrs: { viewBox: "0 0 16 16" }
                  },
                  [n("use", { attrs: { "xlink:href": "#icon-" + t.type } })]
                )
          ]
        );
      },
      Xe = [],
      Qe = {
        props: {
          alt: String,
          color: String,
          back: String,
          emoji: Boolean,
          size: String,
          type: String
        }
      },
      Ze = Qe,
      tn = (n("4496"), Object(m["a"])(Ze, Je, Xe, !1, null, null, null));
    tn.options.__file = "Icon.vue";
    var en = tn.exports,
      nn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "figure",
          t._g(
            {
              staticClass: "k-image",
              attrs: {
                "data-ratio": t.ratio,
                "data-back": t.back,
                "data-cover": t.cover
              }
            },
            t.$listeners
          ),
          [
            n(
              "span",
              { style: "padding-bottom:" + t.ratioPadding },
              [
                t.loaded
                  ? n("img", {
                      key: t.src,
                      attrs: { alt: t.alt || "", src: t.src },
                      on: {
                        dragstart: function(t) {
                          t.preventDefault();
                        }
                      }
                    })
                  : t._e(),
                t.loaded || t.error
                  ? t._e()
                  : n("k-loader", {
                      attrs: { position: "center", theme: "light" }
                    }),
                !t.loaded && t.error
                  ? n("k-icon", {
                      staticClass: "k-image-error",
                      attrs: { type: "cancel" }
                    })
                  : t._e()
              ],
              1
            ),
            t.caption
              ? n("figcaption", { domProps: { innerHTML: t._s(t.caption) } })
              : t._e()
          ]
        );
      },
      sn = [],
      on = {
        props: {
          src: String,
          alt: String,
          ratio: String,
          back: String,
          caption: String,
          cover: Boolean
        },
        data: function() {
          return {
            loaded: { type: Boolean, default: !1 },
            error: { type: Boolean, default: !1 }
          };
        },
        computed: {
          ratioPadding: function() {
            return ft(this.ratio || "1/1");
          }
        },
        created: function() {
          var t = this,
            e = new Image();
          (e.onload = function() {
            (t.loaded = !0), t.$emit("load");
          }),
            (e.onerror = function() {
              (t.error = !0), t.$emit("error");
            }),
            (e.src = this.src);
        }
      },
      an = on,
      rn = (n("791b"), Object(m["a"])(an, nn, sn, !1, null, null, null));
    rn.options.__file = "Image.vue";
    var ln = rn.exports,
      un = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.to && !t.disabled
          ? n(
              "a",
              t._g(
                {
                  ref: "link",
                  staticClass: "k-link",
                  attrs: {
                    disabled: t.disabled,
                    href: t.href,
                    rel: t.relAttr,
                    tabindex: t.tabindex,
                    target: t.target,
                    title: t.title
                  }
                },
                t.listeners
              ),
              [t._t("default")],
              2
            )
          : n(
              "span",
              {
                staticClass: "k-link",
                attrs: { title: t.title, "data-disabled": "" }
              },
              [t._t("default")],
              2
            );
      },
      cn = [],
      pn = {
        props: {
          disabled: Boolean,
          rel: String,
          tabindex: String,
          target: String,
          title: String,
          to: String
        },
        data: function() {
          return {
            relAttr:
              "_blank" === this.target ? "noreferrer noopener" : this.rel,
            listeners: Object(u["a"])({}, this.$listeners, {
              click: this.onClick
            })
          };
        },
        computed: {
          href: function() {
            return void 0 !== this.$route && "/" === this.to[0]
              ? (this.$router.options.url || "") + this.to
              : this.to;
          }
        },
        methods: {
          isRoutable: function(t) {
            return (
              void 0 !== this.$route &&
              (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
                (!t.defaultPrevented &&
                  ((void 0 === t.button || 0 === t.button) && !this.target)))
            );
          },
          onClick: function(t) {
            if (!0 === this.disabled) return t.preventDefault(), !1;
            this.isRoutable(t) &&
              (t.preventDefault(), this.$router.push(this.to)),
              this.$emit("click", t);
          },
          focus: function() {
            this.$refs.link.focus();
          }
        }
      },
      dn = pn,
      fn = Object(m["a"])(dn, un, cn, !1, null, null, null);
    fn.options.__file = "Link.vue";
    var hn = fn.exports,
      mn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "ul",
          { staticClass: "k-list" },
          [
            t._t(
              "default",
              t._l(t.items, function(e, i) {
                return n(
                  "k-list-item",
                  t._g(t._b({ key: i }, "k-list-item", e, !1), t.$listeners)
                );
              })
            )
          ],
          2
        );
      },
      gn = [],
      vn = { props: { items: Array } },
      bn = vn,
      kn = (n("8e2d"), Object(m["a"])(bn, mn, gn, !1, null, null, null));
    kn.options.__file = "List.vue";
    var _n = kn.exports,
      $n = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          t.element,
          t._g({ tag: "component", staticClass: "k-list-item" }, t.$listeners),
          [
            t.sortable ? n("k-sort-handle") : t._e(),
            n(
              "k-link",
              {
                directives: [{ name: "tab", rawName: "v-tab" }],
                staticClass: "k-list-item-content",
                attrs: { to: t.link, target: t.target }
              },
              [
                n(
                  "figure",
                  { staticClass: "k-list-item-image" },
                  [
                    t.image && t.image.url
                      ? n("k-image", {
                          attrs: {
                            src: t.image.url,
                            back: t.image.back || "pattern",
                            cover: t.image.cover
                          }
                        })
                      : n("k-icon", t._b({}, "k-icon", t.icon, !1))
                  ],
                  1
                ),
                n("figcaption", { staticClass: "k-list-item-text" }, [
                  n("em", [t._v(t._s(t.text))]),
                  t.info
                    ? n("small", { domProps: { innerHTML: t._s(t.info) } })
                    : t._e()
                ])
              ]
            ),
            n(
              "div",
              { staticClass: "k-list-item-options" },
              [
                t._t("options", [
                  t.flag
                    ? n(
                        "k-button",
                        t._b(
                          { on: { click: t.flag.click } },
                          "k-button",
                          t.flag,
                          !1
                        )
                      )
                    : t._e(),
                  t.options
                    ? n("k-button", {
                        staticClass: "k-list-item-toggle",
                        attrs: {
                          tooltip: t.$t("options"),
                          icon: "dots",
                          alt: "Options"
                        },
                        on: {
                          click: function(e) {
                            e.stopPropagation(), t.$refs.options.toggle();
                          }
                        }
                      })
                    : t._e(),
                  n("k-dropdown-content", {
                    ref: "options",
                    attrs: { options: t.options, align: "right" },
                    on: {
                      action: function(e) {
                        t.$emit("action", e);
                      }
                    }
                  })
                ])
              ],
              2
            )
          ],
          1
        );
      },
      yn = [],
      xn = {
        inheritAttrs: !1,
        props: {
          element: { type: String, default: "li" },
          image: Object,
          icon: {
            type: Object,
            default: function() {
              return { type: "file", back: "black" };
            }
          },
          sortable: Boolean,
          text: String,
          target: String,
          info: String,
          link: String,
          flag: Object,
          options: [Array, Function]
        }
      },
      wn = xn,
      Sn = (n("6022"), Object(m["a"])(wn, $n, yn, !1, null, null, null));
    Sn.options.__file = "ListItem.vue";
    var On = Sn.exports,
      Cn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.show
          ? n(
              "k-button-group",
              { staticClass: "k-pagination", attrs: { "data-align": t.align } },
              [
                n("k-button", {
                  attrs: {
                    disabled: !t.hasPrev,
                    tooltip: t.prevLabel,
                    icon: "angle-left"
                  },
                  on: { click: t.prev }
                }),
                t.details
                  ? [
                      t.dropdown
                        ? [
                            n(
                              "k-dropdown",
                              [
                                n(
                                  "k-button",
                                  {
                                    attrs: { disabled: !t.hasPages },
                                    on: {
                                      click: function(e) {
                                        t.$refs.dropdown.toggle();
                                      }
                                    }
                                  },
                                  [
                                    t.total > 1
                                      ? [t._v(t._s(t.detailsText))]
                                      : t._e(),
                                    t._v(t._s(t.total) + "\n        ")
                                  ],
                                  2
                                ),
                                n(
                                  "k-dropdown-content",
                                  {
                                    ref: "dropdown",
                                    staticClass: "k-pagination-selector",
                                    on: {
                                      open: function(e) {
                                        t.$nextTick(function() {
                                          return t.$refs.page.focus();
                                        });
                                      }
                                    }
                                  },
                                  [
                                    n("div", [
                                      n(
                                        "label",
                                        {
                                          attrs: { for: "k-pagination-input" }
                                        },
                                        [t._v(t._s(t.pageLabel))]
                                      ),
                                      n("input", {
                                        ref: "page",
                                        attrs: {
                                          id: "k-pagination-input",
                                          min: 1,
                                          max: t.pages,
                                          type: "number"
                                        },
                                        domProps: { value: t.currentPage },
                                        on: {
                                          focus: function(t) {
                                            t.target.select();
                                          },
                                          input: function(e) {
                                            t.goTo(e.target.value);
                                          }
                                        }
                                      })
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        : [
                            n(
                              "span",
                              [
                                t.total > 1
                                  ? [t._v(t._s(t.detailsText))]
                                  : t._e(),
                                t._v(t._s(t.total))
                              ],
                              2
                            )
                          ]
                    ]
                  : t._e(),
                n("k-button", {
                  attrs: {
                    disabled: !t.hasNext,
                    tooltip: t.nextLabel,
                    icon: "angle-right"
                  },
                  on: { click: t.next }
                })
              ],
              2
            )
          : t._e();
      },
      En = [],
      jn = {
        props: {
          align: { type: String, default: "left" },
          details: { type: Boolean, default: !1 },
          dropdown: { type: Boolean, default: !0 },
          validate: {
            type: Function,
            default: function() {
              return Promise.resolve();
            }
          },
          page: { type: Number, default: 1 },
          total: { type: Number, default: 0 },
          limit: { type: Number, default: 10 },
          keys: { type: Boolean, default: !1 },
          pageLabel: { type: String, default: "Page" },
          prevLabel: {
            type: String,
            default: function() {
              return this.$t("prev");
            }
          },
          nextLabel: {
            type: String,
            default: function() {
              return this.$t("next");
            }
          }
        },
        data: function() {
          return { currentPage: this.page };
        },
        computed: {
          show: function() {
            return this.pages > 1;
          },
          start: function() {
            return (this.currentPage - 1) * this.limit + 1;
          },
          end: function() {
            var t = this.start - 1 + this.limit;
            return t > this.total ? this.total : t;
          },
          detailsText: function() {
            return 1 === this.limit
              ? this.start + " / "
              : this.start + "-" + this.end + " / ";
          },
          pages: function() {
            return Math.ceil(this.total / this.limit);
          },
          hasPrev: function() {
            return this.start > 1;
          },
          hasNext: function() {
            return this.end < this.total;
          },
          hasPages: function() {
            return this.total > this.limit;
          },
          offset: function() {
            return this.start - 1;
          }
        },
        watch: {
          page: function(t) {
            this.currentPage = t;
          }
        },
        created: function() {
          !0 === this.keys &&
            window.addEventListener("keydown", this.navigate, !1);
        },
        destroyed: function() {
          window.removeEventListener("keydown", this.navigate, !1);
        },
        methods: {
          goTo: function(t) {
            var e = this;
            this.validate(t)
              .then(function() {
                t < 1 && (t = 1),
                  t > e.pages && (t = e.pages),
                  (e.currentPage = t),
                  e.$emit("paginate", {
                    page: parseInt(e.currentPage),
                    start: e.start,
                    end: e.end,
                    limit: e.limit,
                    offset: e.offset
                  });
              })
              .catch(function() {});
          },
          prev: function() {
            this.goTo(this.currentPage - 1);
          },
          next: function() {
            this.goTo(this.currentPage + 1);
          },
          navigate: function(t) {
            switch (t.code) {
              case "ArrowLeft":
                this.prev();
                break;
              case "ArrowRight":
                this.next();
                break;
            }
          }
        }
      },
      Tn = jn,
      In = (n("3acb"), Object(m["a"])(Tn, Cn, En, !1, null, null, null));
    In.options.__file = "Pagination.vue";
    var Ln = In.exports,
      An = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-button-group",
          { staticClass: "k-prev-next" },
          [
            n(
              "k-button",
              t._b({ attrs: { icon: "angle-left" } }, "k-button", t.prev, !1)
            ),
            n(
              "k-button",
              t._b({ attrs: { icon: "angle-right" } }, "k-button", t.next, !1)
            )
          ],
          1
        );
      },
      qn = [],
      Nn = {
        props: {
          prev: {
            type: Object,
            default: function() {
              return { disabled: !0, link: "#" };
            }
          },
          next: {
            type: Object,
            default: function() {
              return { disabled: !0, link: "#" };
            }
          }
        }
      },
      Pn = Nn,
      Dn = (n("2607"), Object(m["a"])(Pn, An, qn, !1, null, null, null));
    Dn.options.__file = "PrevNext.vue";
    var Bn = Dn.exports,
      Rn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "progress",
          {
            staticClass: "k-progress",
            attrs: { max: "100" },
            domProps: { value: t.state }
          },
          [t._v("\n  " + t._s(t.state) + "%\n")]
        );
      },
      Fn = [],
      Mn = {
        props: { value: { type: Number, default: 0 } },
        data: function() {
          return { state: this.value };
        },
        methods: {
          set: function(t) {
            this.state = t;
          }
        }
      },
      zn = Mn,
      Un = (n("8be2"), Object(m["a"])(zn, Rn, Fn, !1, null, null, null));
    Un.options.__file = "Progress.vue";
    var Hn = Un.exports,
      Vn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          { staticClass: "k-sort-handle" },
          [n("k-icon", { attrs: { type: "sort" } })],
          1
        );
      },
      Kn = [],
      Gn = (n("aa8b"), {}),
      Yn = Object(m["a"])(Gn, Vn, Kn, !1, null, null, null);
    Yn.options.__file = "SortHandle.vue";
    var Wn = Yn.exports,
      Jn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          {
            ref: "button",
            staticClass: "k-tag",
            attrs: { "data-size": t.size, tabindex: "0" },
            on: {
              keydown: function(e) {
                return "button" in e ||
                  !t._k(e.keyCode, "delete", [8, 46], e.key, [
                    "Backspace",
                    "Delete",
                    "Del"
                  ])
                  ? (e.preventDefault(), t.remove(e))
                  : null;
              }
            }
          },
          [
            n("span", { staticClass: "k-tag-text" }, [t._t("default")], 2),
            t.removable
              ? n(
                  "span",
                  { staticClass: "k-tag-toggle", on: { click: t.remove } },
                  [t._v("×")]
                )
              : t._e()
          ]
        );
      },
      Xn = [],
      Qn = {
        props: { removable: Boolean, size: String },
        methods: {
          remove: function() {
            this.removable && this.$emit("remove");
          },
          focus: function() {
            this.$refs.button.focus();
          }
        }
      },
      Zn = Qn,
      ti = (n("a361"), Object(m["a"])(Zn, Jn, Xn, !1, null, null, null));
    ti.options.__file = "Tag.vue";
    var ei = ti.exports,
      ni = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "k-text",
            attrs: {
              "data-align": t.align,
              "data-size": t.size,
              "data-theme": t.theme
            }
          },
          [t._t("default")],
          2
        );
      },
      ii = [],
      si = { props: { align: String, size: String, theme: String } },
      oi = si,
      ai = (n("dea4"), Object(m["a"])(oi, ni, ii, !1, null, null, null));
    ai.options.__file = "Text.vue";
    var ri = ai.exports,
      li = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-view", attrs: { "data-align": t.align } },
          [t._t("default")],
          2
        );
      },
      ui = [],
      ci = { props: { align: String } },
      pi = ci,
      di = (n("4cc7"), Object(m["a"])(pi, li, ui, !1, null, null, null));
    di.options.__file = "View.vue";
    var fi = di.exports,
      hi = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dropdown",
          { staticClass: "k-autocomplete" },
          [
            t._t("default"),
            n(
              "k-dropdown-content",
              t._g({ ref: "dropdown", attrs: { autofocus: !0 } }, t.$listeners),
              t._l(t.matches, function(e, i) {
                return n(
                  "k-dropdown-item",
                  t._b(
                    {
                      key: i,
                      on: {
                        click: function(n) {
                          t.onSelect(e);
                        },
                        keydown: [
                          function(n) {
                            if (
                              !("button" in n) &&
                              t._k(n.keyCode, "tab", 9, n.key, "Tab")
                            )
                              return null;
                            n.preventDefault(), t.onSelect(e);
                          },
                          function(n) {
                            if (
                              !("button" in n) &&
                              t._k(n.keyCode, "enter", 13, n.key, "Enter")
                            )
                              return null;
                            n.preventDefault(), t.onSelect(e);
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "left", 37, e.key, [
                                "Left",
                                "ArrowLeft"
                              ])
                              ? "button" in e && 0 !== e.button
                                ? null
                                : (e.preventDefault(), t.close(e))
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(
                                e.keyCode,
                                "backspace",
                                void 0,
                                e.key,
                                void 0
                              )
                              ? (e.preventDefault(), t.close(e))
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "delete", [8, 46], e.key, [
                                "Backspace",
                                "Delete",
                                "Del"
                              ])
                              ? (e.preventDefault(), t.close(e))
                              : null;
                          }
                        ]
                      }
                    },
                    "k-dropdown-item",
                    e,
                    !1
                  ),
                  [t._v("\n      " + t._s(e.text) + "\n    ")]
                );
              }),
              1
            ),
            t._v("\n  " + t._s(t.query) + "\n")
          ],
          2
        );
      },
      mi = [],
      gi = (n("4917"),
      n("3b2b"),
      {
        props: {
          limit: 10,
          skip: {
            type: Array,
            default: function() {
              return [];
            }
          },
          options: Array,
          query: String
        },
        data: function() {
          return { matches: [], selected: { text: null } };
        },
        methods: {
          close: function() {
            this.$refs.dropdown.close();
          },
          onSelect: function(t) {
            this.$refs.dropdown.close(), this.$emit("select", t);
          },
          search: function(t) {
            var e = this;
            if (!(t.length < 1) && -1 === this.skip.indexOf(t)) {
              var n = new RegExp(t, "ig");
              (this.matches = this.options
                .filter(function(t) {
                  return (
                    !!t.text &&
                    (-1 === e.skip.indexOf(t.text) && null !== t.text.match(n))
                  );
                })
                .slice(0, this.limit)),
                this.$emit("search", t, this.matches),
                this.$refs.dropdown.open();
            }
          }
        }
      }),
      vi = gi,
      bi = (n("3f08"), Object(m["a"])(vi, hi, mi, !1, null, null, null));
    bi.options.__file = "Autocomplete.vue";
    var ki = bi.exports,
      _i = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "form",
          {
            ref: "form",
            staticClass: "k-form",
            attrs: { method: "POST", autocomplete: "off", novalidate: "" },
            on: {
              submit: function(e) {
                return e.preventDefault(), t.onSubmit(e);
              }
            }
          },
          [
            t._t("header"),
            t._t("default", [
              n(
                "k-fieldset",
                t._g(
                  {
                    ref: "fields",
                    attrs: {
                      disabled: t.disabled,
                      fields: t.fields,
                      novalidate: t.novalidate
                    },
                    model: {
                      value: t.value,
                      callback: function(e) {
                        t.value = e;
                      },
                      expression: "value"
                    }
                  },
                  t.listeners
                )
              )
            ]),
            t._t("footer"),
            n("input", {
              ref: "submitter",
              staticClass: "k-form-submitter",
              attrs: { type: "submit" }
            })
          ],
          2
        );
      },
      $i = [],
      yi = {
        props: {
          disabled: Boolean,
          config: Object,
          fields: {
            type: [Array, Object],
            default: function() {
              return {};
            }
          },
          novalidate: { type: Boolean, default: !1 },
          value: {
            type: Object,
            default: function() {
              return {};
            }
          }
        },
        data: function() {
          return {
            errors: {},
            listeners: Object(u["a"])({}, this.$listeners, {
              submit: this.onSubmit
            })
          };
        },
        methods: {
          focus: function(t) {
            this.$refs.fields &&
              this.$refs.fields.focus &&
              this.$refs.fields.focus(t);
          },
          onSubmit: function() {
            this.$emit("submit", this.value);
          },
          submit: function() {
            this.$refs.submitter.click();
          }
        }
      },
      xi = yi,
      wi = (n("8633"), Object(m["a"])(xi, _i, $i, !1, null, null, null));
    wi.options.__file = "Form.vue";
    var Si = wi.exports,
      Oi = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            class: "k-field k-field-name-" + t.name,
            attrs: { "data-disabled": t.disabled },
            on: {
              focusin: function(e) {
                t.$emit("focus", e);
              },
              focusout: function(e) {
                t.$emit("blur", e);
              }
            }
          },
          [
            t._t("header", [
              n(
                "header",
                { staticClass: "k-field-header" },
                [
                  t._t("label", [
                    n(
                      "label",
                      { staticClass: "k-field-label", attrs: { for: t.input } },
                      [
                        t._v(t._s(t.labelText) + " "),
                        t.required
                          ? n(
                              "abbr",
                              { attrs: { title: "This field is required" } },
                              [t._v("*")]
                            )
                          : t._e()
                      ]
                    )
                  ]),
                  t._t("options"),
                  t._t("counter", [
                    t.counter
                      ? n(
                          "k-counter",
                          t._b(
                            {
                              staticClass: "k-field-counter",
                              attrs: { required: t.required }
                            },
                            "k-counter",
                            t.counter,
                            !1
                          )
                        )
                      : t._e()
                  ])
                ],
                2
              )
            ]),
            t._t("default"),
            t._t("footer", [
              t.help || t.$slots.help
                ? n(
                    "footer",
                    { staticClass: "k-field-footer" },
                    [
                      t._t("help", [
                        t.help
                          ? n("k-text", {
                              staticClass: "k-field-help",
                              attrs: { theme: "help" },
                              domProps: { innerHTML: t._s(t.help) }
                            })
                          : t._e()
                      ])
                    ],
                    2
                  )
                : t._e()
            ])
          ],
          2
        );
      },
      Ci = [],
      Ei = {
        inheritAttrs: !1,
        props: {
          counter: [Boolean, Object],
          disabled: Boolean,
          endpoints: Object,
          help: String,
          input: [String, Number],
          label: String,
          name: [String, Number],
          required: Boolean,
          type: String
        },
        computed: {
          labelText: function() {
            return this.label || " ";
          }
        }
      },
      ji = Ei,
      Ti = (n("fa44"), Object(m["a"])(ji, Oi, Ci, !1, null, null, null));
    Ti.options.__file = "Field.vue";
    var Ii = Ti.exports,
      Li = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "fieldset",
          { staticClass: "k-fieldset" },
          [
            n(
              "k-grid",
              t._l(t.fields, function(e, i) {
                return "hidden" !== e.type
                  ? n(
                      "k-column",
                      { key: e.signature, attrs: { width: e.width } },
                      [
                        n(
                          "k-error-boundary",
                          [
                            t.hasFieldType(e.type)
                              ? n(
                                  "k-" + e.type + "-field",
                                  t._b(
                                    {
                                      ref: i,
                                      refInFor: !0,
                                      tag: "component",
                                      attrs: {
                                        name: i,
                                        novalidate: t.novalidate,
                                        disabled: t.disabled || e.disabled
                                      },
                                      on: {
                                        input: function(n) {
                                          t.$emit("input", t.value, e, i);
                                        },
                                        focus: function(n) {
                                          t.$emit("focus", n, e, i);
                                        },
                                        invalid: function(n, s) {
                                          return t.onInvalid(n, s, e, i);
                                        },
                                        submit: function(n) {
                                          t.$emit("submit", n, e, i);
                                        }
                                      },
                                      model: {
                                        value: t.value[i],
                                        callback: function(e) {
                                          t.$set(t.value, i, e);
                                        },
                                        expression: "value[fieldName]"
                                      }
                                    },
                                    "component",
                                    e,
                                    !1
                                  )
                                )
                              : n(
                                  "k-box",
                                  { attrs: { theme: "negative" } },
                                  [
                                    n("k-text", { attrs: { size: "small" } }, [
                                      t._v("\n            The field type "),
                                      n("strong", [t._v('"' + t._s(i) + '"')]),
                                      t._v(" does not exist\n          ")
                                    ])
                                  ],
                                  1
                                )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : t._e();
              }),
              1
            )
          ],
          1
        );
      },
      Ai = [],
      qi = (n("456d"),
      n("7f7f"),
      {
        props: {
          config: Object,
          disabled: Boolean,
          fields: {
            type: [Array, Object],
            default: function() {
              return [];
            }
          },
          novalidate: { type: Boolean, default: !1 },
          value: {
            type: Object,
            default: function() {
              return {};
            }
          }
        },
        data: function() {
          return { errors: {} };
        },
        methods: {
          focus: function(t) {
            if (t)
              this.hasField(t) &&
                "function" === typeof this.$refs[t][0].focus &&
                this.$refs[t][0].focus();
            else {
              var e = Object.keys(this.$refs)[0];
              this.focus(e);
            }
          },
          hasFieldType: function(t) {
            return i["a"].options.components["k-" + t + "-field"];
          },
          hasField: function(t) {
            return this.$refs[t] && this.$refs[t][0];
          },
          onInvalid: function(t, e, n, i) {
            (this.errors[i] = e), this.$emit("invalid", this.errors);
          },
          hasErrors: function() {
            return Object.keys(this.errors).length;
          }
        }
      }),
      Ni = qi,
      Pi = (n("f986"), Object(m["a"])(Ni, Li, Ai, !1, null, null, null));
    Pi.options.__file = "Fieldset.vue";
    var Di = Pi.exports,
      Bi = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "k-input",
            attrs: {
              "data-disabled": t.disabled,
              "data-invalid": !t.novalidate && t.isInvalid,
              "data-theme": t.theme,
              "data-type": t.type
            }
          },
          [
            t.$slots.before || t.before
              ? n(
                  "span",
                  { staticClass: "k-input-before", on: { click: t.focus } },
                  [t._t("before", [t._v(t._s(t.before))])],
                  2
                )
              : t._e(),
            n(
              "span",
              {
                staticClass: "k-input-element",
                on: {
                  click: function(e) {
                    return e.stopPropagation(), t.focus(e);
                  }
                }
              },
              [
                t._t("default", [
                  n(
                    "k-" + t.type + "-input",
                    t._g(
                      t._b(
                        {
                          ref: "input",
                          tag: "component",
                          attrs: { value: t.value }
                        },
                        "component",
                        t.inputProps,
                        !1
                      ),
                      t.listeners
                    )
                  )
                ])
              ],
              2
            ),
            t.$slots.after || t.after
              ? n(
                  "span",
                  { staticClass: "k-input-after", on: { click: t.focus } },
                  [t._t("after", [t._v(t._s(t.after))])],
                  2
                )
              : t._e(),
            t.$slots.icon || t.icon
              ? n(
                  "span",
                  { staticClass: "k-input-icon", on: { click: t.focus } },
                  [t._t("icon", [n("k-icon", { attrs: { type: t.icon } })])],
                  2
                )
              : t._e()
          ]
        );
      },
      Ri = [],
      Fi = {
        inheritAttrs: !1,
        props: {
          after: String,
          before: String,
          disabled: Boolean,
          type: String,
          icon: [String, Boolean],
          invalid: Boolean,
          theme: String,
          novalidate: { type: Boolean, default: !1 },
          value: { type: [String, Boolean, Number, Object, Array] }
        },
        data: function() {
          var t = this;
          return {
            isInvalid: this.invalid,
            listeners: Object(u["a"])({}, this.$listeners, {
              invalid: function(e, n) {
                (t.isInvalid = e), t.$emit("invalid", e, n);
              }
            }),
            inputProps: Object(u["a"])({}, this.$props, this.$attrs)
          };
        },
        methods: {
          blur: function(t) {
            t.relatedTarget &&
              !1 === this.$el.contains(t.relatedTarget) &&
              this.$refs.input.blur &&
              this.$refs.input.blur();
          },
          focus: function(t) {
            if (t && t.target && "INPUT" === t.target.tagName) t.target.focus();
            else if (this.$refs.input.focus) this.$refs.input.focus();
            else {
              var e = this.$el.querySelector("input, select, textarea");
              e && e.focus();
            }
          }
        }
      },
      Mi = Fi,
      zi = (n("a2a8"), Object(m["a"])(Mi, Bi, Ri, !1, null, null, null));
    zi.options.__file = "Input.vue";
    var Ui = zi.exports,
      Hi = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-upload" },
          [
            n("input", {
              ref: "input",
              attrs: {
                accept: t.options.accept,
                multiple: t.options.multiple,
                "aria-hidden": "true",
                type: "file",
                tabindex: "-1"
              },
              on: { change: t.select }
            }),
            n(
              "k-dialog",
              { ref: "dialog", attrs: { size: "medium" } },
              [
                t.errors.length > 0
                  ? [
                      n("k-headline", [t._v(t._s(t.$t("upload.errors")))]),
                      n(
                        "ul",
                        { staticClass: "k-upload-error-list" },
                        t._l(t.errors, function(e, i) {
                          return n("li", { key: "error-" + i }, [
                            n("p", { staticClass: "k-upload-error-filename" }, [
                              t._v(t._s(e.file.name))
                            ]),
                            n("p", { staticClass: "k-upload-error-message" }, [
                              t._v(t._s(e.message))
                            ])
                          ]);
                        }),
                        0
                      )
                    ]
                  : [
                      n("k-headline", [t._v(t._s(t.$t("upload.progress")))]),
                      n(
                        "ul",
                        { staticClass: "k-upload-list" },
                        t._l(t.files, function(e, i) {
                          return n(
                            "li",
                            { key: "file-" + i },
                            [
                              n("k-progress", { ref: e.name, refInFor: !0 }),
                              n(
                                "p",
                                { staticClass: "k-upload-list-filename" },
                                [t._v(t._s(e.name))]
                              ),
                              n("p", [t._v(t._s(t.errors[e.name]))])
                            ],
                            1
                          );
                        }),
                        0
                      )
                    ],
                n(
                  "template",
                  { slot: "footer" },
                  [
                    t.errors.length > 0
                      ? [
                          n(
                            "k-button-group",
                            [
                              n(
                                "k-button",
                                {
                                  attrs: { icon: "check" },
                                  on: {
                                    click: function(e) {
                                      t.$refs.dialog.close();
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("confirm")) +
                                      "\n          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      : t._e()
                  ],
                  2
                )
              ],
              2
            )
          ],
          1
        );
      },
      Vi = [],
      Ki = n("2909"),
      Gi = (n("f751"),
      function(t, e) {
        var n = {
            url: "/",
            field: "file",
            method: "POST",
            accept: "text",
            attributes: {},
            complete: function() {},
            error: function() {},
            success: function() {},
            progress: function() {}
          },
          i = Object.assign(n, e),
          s = new FormData();
        s.append(i.field, t),
          i.attributes &&
            Object.keys(i.attributes).forEach(function(t) {
              s.append(t, i.attributes[t]);
            });
        var o = new XMLHttpRequest(),
          a = function(e) {
            if (e.lengthComputable && i.progress) {
              var n = Math.max(0, Math.min(100, e.loaded / e.total * 100));
              i.progress(o, t, Math.ceil(n));
            }
          };
        o.addEventListener("loadstart", a),
          o.addEventListener("progress", a),
          o.addEventListener("load", function(e) {
            var n = null;
            try {
              n = JSON.parse(e.target.response);
            } catch (s) {
              n = {
                status: "error",
                message: "The file could not be uploaded"
              };
            }
            n.status && "error" === n.status
              ? i.error(o, t, n)
              : (i.success(o, t, n), i.progress(o, t, 100));
          }),
          o.addEventListener("error", function(e) {
            var n = JSON.parse(e.target.response);
            i.error(o, t, n), i.progress(o, t, 100);
          }),
          o.open("POST", i.url, !0),
          i.headers &&
            Object.keys(i.headers).forEach(function(t) {
              var e = i.headers[t];
              o.setRequestHeader(t, e);
            }),
          o.send(s);
      }),
      Yi = {
        props: {
          url: { type: String },
          accept: { type: String, default: "*" },
          attributes: { type: Object },
          multiple: { type: Boolean, default: !0 },
          max: { type: Number }
        },
        data: function() {
          return {
            options: this.$props,
            completed: {},
            errors: [],
            files: [],
            total: 0
          };
        },
        methods: {
          open: function(t) {
            var e = this;
            this.params(t),
              setTimeout(function() {
                e.$refs.input.click();
              }, 1);
          },
          params: function(t) {
            this.options = Object.assign({}, this.$props, t);
          },
          select: function(t) {
            this.upload(t.target.files);
          },
          drop: function(t, e) {
            this.params(e), this.upload(t);
          },
          upload: function(t) {
            var e = this;
            this.$refs.dialog.open(),
              (this.files = Object(Ki["a"])(t)),
              (this.completed = {}),
              (this.errors = []),
              (this.hasErrors = !1),
              this.options.max &&
                (this.files = this.files.slice(0, this.options.max)),
              (this.total = this.files.length),
              this.files.forEach(function(t) {
                Gi(t, {
                  url: e.options.url,
                  attributes: e.options.attributes,
                  headers: { "X-CSRF": window.panel.csrf },
                  progress: function(t, n, i) {
                    e.$refs[n.name] &&
                      e.$refs[n.name][0] &&
                      e.$refs[n.name][0].set(i);
                  },
                  success: function(t, n) {
                    e.complete(n);
                  },
                  error: function(t, n, i) {
                    e.errors.push({ file: n, message: i.message }),
                      e.complete(n, i.message);
                  }
                });
              });
          },
          complete: function(t) {
            var e = this;
            if (
              ((this.completed[t.name] = !0),
              Object.keys(this.completed).length == this.total)
            ) {
              if (((this.$refs.input.value = ""), this.errors.length > 0))
                return (
                  this.$forceUpdate(), void this.$emit("error", this.files)
                );
              setTimeout(function() {
                e.$refs.dialog.close(), e.$emit("success", e.files);
              }, 250);
            }
          }
        }
      },
      Wi = Yi,
      Ji = (n("4a37"), Object(m["a"])(Wi, Hi, Vi, !1, null, null, null));
    Ji.options.__file = "Upload.vue";
    var Xi = Ji.exports,
      Qi = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("label", { staticClass: "k-checkbox-input" }, [
          n(
            "input",
            t._g(
              {
                ref: "input",
                staticClass: "k-checkbox-input-native",
                attrs: { disabled: t.disabled, id: t.id, type: "checkbox" },
                domProps: { checked: t.value }
              },
              t.listeners
            )
          ),
          n(
            "span",
            {
              staticClass: "k-checkbox-input-icon",
              attrs: { "aria-hidden": "true" }
            },
            [
              n(
                "svg",
                {
                  attrs: {
                    width: "12",
                    height: "10",
                    viewBox: "0 0 12 10",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  n("path", {
                    attrs: {
                      d: "M1 5l3.3 3L11 1",
                      "stroke-width": "2",
                      fill: "none",
                      "fill-rule": "evenodd"
                    }
                  })
                ]
              )
            ]
          ),
          n("span", {
            staticClass: "k-checkbox-input-label",
            domProps: { innerHTML: t._s(t.label) }
          })
        ]);
      },
      Zi = [],
      ts = n("b5ae"),
      es = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          label: String,
          required: Boolean,
          value: Boolean
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              change: function(e) {
                return t.onChange(e.target.checked);
              }
            })
          };
        },
        watch: {
          value: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          onChange: function(t) {
            this.$emit("input", t);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select: function() {
            this.$refs.input.focus();
          }
        },
        validations: function() {
          return { value: { required: !this.required || ts["required"] } };
        }
      },
      ns = es,
      is = (n("38ee"), Object(m["a"])(ns, Qi, Zi, !1, null, null, null));
    is.options.__file = "CheckboxInput.vue";
    var ss = is.exports,
      os = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "ul",
          {
            staticClass: "k-checkboxes-input",
            style: "--columns:" + t.columns
          },
          t._l(t.options, function(e, i) {
            return n(
              "li",
              { key: i },
              [
                n("k-checkbox-input", {
                  attrs: {
                    id: t.id + "-" + i,
                    label: e.text,
                    value: -1 !== t.selected.indexOf(e.value)
                  },
                  on: {
                    input: function(n) {
                      t.onInput(e.value, n);
                    }
                  }
                })
              ],
              1
            );
          }),
          0
        );
      },
      as = [],
      rs = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          columns: Number,
          disabled: Boolean,
          id: {
            type: [Number, String],
            default: function() {
              return this._uid;
            }
          },
          max: Number,
          min: Number,
          options: Array,
          required: Boolean,
          value: {
            type: Array,
            default: function() {
              return [];
            }
          }
        },
        data: function() {
          return { selected: this.valueToArray(this.value) };
        },
        watch: {
          value: function(t) {
            this.selected = this.valueToArray(t);
          },
          selected: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus: function() {
            this.$el.querySelector("input").focus();
          },
          onInput: function(t, e) {
            if (!0 === e) this.selected.push(t);
            else {
              var n = this.selected.indexOf(t);
              -1 !== n && this.selected.splice(n, 1);
            }
            this.$emit("input", this.selected);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select: function() {
            this.focus();
          },
          valueToArray: function(t) {
            return Array.isArray(t) ? t : String(t).split(",");
          }
        },
        validations: function() {
          return {
            selected: {
              required: !this.required || ts["required"],
              min: !this.min || Object(ts["minLength"])(this.min),
              max: !this.max || Object(ts["maxLength"])(this.max)
            }
          };
        }
      },
      ls = rs,
      us = Object(m["a"])(ls, os, as, !1, null, null, null);
    us.options.__file = "CheckboxesInput.vue";
    var cs = us.exports,
      ps = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-date-input" },
          [
            n("k-select-input", {
              ref: "years",
              attrs: {
                "aria-label": t.$t("year"),
                options: t.years,
                disabled: t.disabled,
                required: t.required,
                value: t.year,
                placeholder: "––––",
                empty: "––––"
              },
              on: { input: t.setYear, invalid: t.onInvalid }
            }),
            n("span", { staticClass: "k-date-input-separator" }, [t._v("-")]),
            n("k-select-input", {
              ref: "months",
              attrs: {
                "aria-label": t.$t("month"),
                options: t.months,
                disabled: t.disabled,
                required: t.required,
                value: t.month,
                empty: "––",
                placeholder: "––"
              },
              on: { input: t.setMonth, invalid: t.onInvalid }
            }),
            n("span", { staticClass: "k-date-input-separator" }, [t._v("-")]),
            n("k-select-input", {
              ref: "days",
              attrs: {
                "aria-label": t.$t("day"),
                autofocus: t.autofocus,
                id: t.id,
                options: t.days,
                disabled: t.disabled,
                required: t.required,
                value: t.day,
                placeholder: "––",
                empty: "––"
              },
              on: { input: t.setDay, invalid: t.onInvalid }
            })
          ],
          1
        );
      },
      ds = [],
      fs = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [String, Number],
          max: String,
          min: String,
          required: Boolean,
          value: String
        },
        data: function() {
          return {
            date: ot()(this.value),
            minDate: this.calculate(this.min, "min"),
            maxDate: this.calculate(this.max, "max")
          };
        },
        computed: {
          day: function() {
            return isNaN(this.date.date()) ? "" : this.date.date();
          },
          days: function() {
            return this.options(1, this.date.daysInMonth() || 31, "days");
          },
          month: function() {
            return isNaN(this.date.date()) ? "" : this.date.month() + 1;
          },
          months: function() {
            return this.options(1, 12, "months");
          },
          year: function() {
            return isNaN(this.date.year()) ? "" : this.date.year();
          },
          years: function() {
            var t = this.date.isBefore(this.minDate)
                ? this.date.year()
                : this.minDate.year(),
              e = this.date.isAfter(this.maxDate)
                ? this.date.year()
                : this.maxDate.year();
            return this.options(t, e);
          }
        },
        watch: {
          value: function(t) {
            this.date = ot()(t);
          }
        },
        methods: {
          calculate: function(t, e) {
            var n = {
                min: { run: "subtract", take: "startOf" },
                max: { run: "add", take: "endOf" }
              }[e],
              i = t ? ot()(t) : null;
            return (
              (i && !1 !== i.isValid()) ||
                (i = ot()()
                  [n.run](10, "year")
                  [n.take]("year")),
              i
            );
          },
          focus: function() {
            this.$refs.years.focus();
          },
          onInput: function() {
            !1 !== this.date.isValid()
              ? this.$emit("input", this.date.toISOString())
              : this.$emit("input", "");
          },
          onInvalid: function(t, e) {
            this.$emit("invalid", t, e);
          },
          options: function(t, e) {
            for (var n = [], i = t; i <= e; i++)
              n.push({ value: i, text: at(i) });
            return n;
          },
          set: function(t, e) {
            if ("" === e || null === e || !1 === e || -1 === e)
              return this.setInvalid(), void this.onInput();
            if (!1 === this.date.isValid())
              return this.setInitialDate(t, e), void this.onInput();
            var n = this.date,
              i = this.date.date();
            (this.date = this.date.set(t, parseInt(e))),
              "month" === t &&
                this.date.date() !== i &&
                (this.date = n
                  .set("date", 1)
                  .set("month", e)
                  .endOf("month")),
              this.onInput();
          },
          setInvalid: function() {
            this.date = ot()("invalid");
          },
          setInitialDate: function(t, e) {
            var n = ot()();
            return (
              (this.date = ot()().set(t, parseInt(e))),
              "date" === t &&
                n.month() !== this.date.month() &&
                (this.date = n.endOf("month")),
              this.date
            );
          },
          setDay: function(t) {
            this.set("date", t);
          },
          setMonth: function(t) {
            this.set("month", t - 1);
          },
          setYear: function(t) {
            this.set("year", t);
          }
        }
      },
      hs = fs,
      ms = (n("196d"), Object(m["a"])(hs, ps, ds, !1, null, null, null));
    ms.options.__file = "DateInput.vue";
    var gs = ms.exports,
      vs = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-datetime-input" },
          [
            n("k-date-input", {
              ref: "dateInput",
              attrs: {
                autofocus: t.autofocus,
                required: t.required,
                id: t.id,
                disabled: t.disabled,
                value: t.dateValue
              },
              on: { input: t.setDate }
            }),
            n(
              "k-time-input",
              t._b(
                {
                  ref: "timeInput",
                  attrs: {
                    required: t.required,
                    disabled: t.disabled,
                    value: t.timeValue
                  },
                  on: { input: t.setTime }
                },
                "k-time-input",
                t.timeOptions,
                !1
              )
            )
          ],
          1
        );
      },
      bs = [],
      ks = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, gs.props, {
          time: {
            type: [Boolean, Object],
            default: function() {
              return {};
            }
          },
          value: String
        }),
        data: function() {
          return {
            dateValue: this.parseDate(this.value),
            timeValue: this.parseTime(this.value),
            timeOptions: this.setTimeOptions()
          };
        },
        watch: {
          value: function(t) {
            (this.dateValue = this.parseDate(t)),
              (this.timeValue = this.parseTime(t)),
              this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid();
        },
        methods: {
          focus: function() {
            this.$refs.dateInput.focus();
          },
          onInput: function() {
            if (this.timeValue && this.dateValue) {
              var t = this.dateValue + "T" + this.timeValue + ":00";
              this.$emit("input", t);
            } else this.$emit("input", "");
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          parseDate: function(t) {
            var e = ot()(t);
            return e.isValid() ? e.format("YYYY-MM-DD") : null;
          },
          parseTime: function(t) {
            var e = ot()(t);
            return e.isValid() ? e.format("HH:mm") : null;
          },
          setDate: function(t) {
            t && !this.timeValue && (this.timeValue = ot()().format("HH:mm")),
              t
                ? (this.dateValue = this.parseDate(t))
                : ((this.dateValue = null), (this.timeValue = null)),
              this.onInput();
          },
          setTime: function(t) {
            t &&
              !this.dateValue &&
              (this.dateValue = ot()().format("YYYY-MM-DD")),
              t
                ? (this.timeValue = t)
                : ((this.dateValue = null), (this.timeValue = null)),
              this.onInput();
          },
          setTimeOptions: function() {
            return !0 === this.time ? {} : this.time;
          }
        },
        validations: function() {
          return { value: { required: !this.required || ts["required"] } };
        }
      },
      _s = ks,
      $s = (n("988f"), Object(m["a"])(_s, vs, bs, !1, null, null, null));
    $s.options.__file = "DateTimeInput.vue";
    var ys = $s.exports,
      xs = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "input",
          t._g(
            t._b(
              { ref: "input", staticClass: "k-text-input" },
              "input",
              {
                autocomplete: t.autocomplete,
                autofocus: t.autofocus,
                disabled: t.disabled,
                id: t.id,
                minlength: t.minlength,
                name: t.name,
                pattern: t.pattern,
                placeholder: t.placeholder,
                required: t.required,
                spellcheck: t.spellcheck,
                type: t.type,
                value: t.value
              },
              !1
            ),
            t.listeners
          )
        );
      },
      ws = [],
      Ss = {
        inheritAttrs: !1,
        class: "k-text-input",
        props: {
          autocomplete: { type: [Boolean, String], default: "off" },
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          maxlength: Number,
          minlength: Number,
          name: [Number, String],
          pattern: String,
          placeholder: String,
          preselect: Boolean,
          required: Boolean,
          spellcheck: { type: [Boolean, String], default: "off" },
          type: { type: String, default: "text" },
          value: String
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              input: function(e) {
                return t.onInput(e.target.value);
              }
            })
          };
        },
        watch: {
          value: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(),
            this.$props.autofocus && this.focus(),
            this.$props.preselect && this.select();
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          onInput: function(t) {
            this.$emit("input", t);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select: function() {
            this.$refs.input.select();
          }
        },
        validations: function() {
          return {
            value: {
              required: !this.required || ts["required"],
              minLength:
                !this.minlength || Object(ts["minLength"])(this.minlength),
              maxLength:
                !this.maxlength || Object(ts["maxLength"])(this.maxlength),
              email: "email" !== this.type || ts["email"],
              url: "url" !== this.type || ts["url"]
            }
          };
        }
      },
      Os = Ss,
      Cs = (n("1182"), Object(m["a"])(Os, xs, ws, !1, null, null, null));
    Cs.options.__file = "TextInput.vue";
    var Es,
      js,
      Ts = Cs.exports,
      Is = {
        extends: Ts,
        props: Object(u["a"])({}, Ts.props, {
          autocomplete: { type: String, default: "email" },
          placeholder: {
            type: String,
            default: function() {
              return this.$t("email.placeholder");
            }
          },
          type: { type: String, default: "email" }
        })
      },
      Ls = Is,
      As = Object(m["a"])(Ls, Es, js, !1, null, null, null);
    As.options.__file = "EmailInput.vue";
    var qs = As.exports,
      Ns = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-draggable",
          {
            staticClass: "k-multiselect-input",
            attrs: {
              list: t.state,
              options: t.dragOptions,
              "data-layout": t.layout,
              element: "k-dropdown"
            },
            on: { end: t.onInput },
            nativeOn: {
              click: function(e) {
                return t.$refs.dropdown.toggle(e);
              }
            }
          },
          [
            t._l(t.sorted, function(e) {
              return n(
                "k-tag",
                {
                  key: e.value,
                  ref: e.value,
                  refInFor: !0,
                  attrs: { removable: !0 },
                  on: {
                    remove: function(n) {
                      t.remove(e);
                    }
                  },
                  nativeOn: {
                    click: function(t) {
                      t.stopPropagation();
                    },
                    keydown: [
                      function(e) {
                        return "button" in e ||
                          !t._k(e.keyCode, "left", 37, e.key, [
                            "Left",
                            "ArrowLeft"
                          ])
                          ? "button" in e && 0 !== e.button
                            ? null
                            : void t.navigate("prev")
                          : null;
                      },
                      function(e) {
                        return "button" in e ||
                          !t._k(e.keyCode, "right", 39, e.key, [
                            "Right",
                            "ArrowRight"
                          ])
                          ? "button" in e && 2 !== e.button
                            ? null
                            : void t.navigate("next")
                          : null;
                      },
                      function(e) {
                        return "button" in e ||
                          !t._k(e.keyCode, "down", 40, e.key, [
                            "Down",
                            "ArrowDown"
                          ])
                          ? t.$refs.dropdown.open(e)
                          : null;
                      }
                    ]
                  }
                },
                [t._v("\n    " + t._s(e.text) + "\n  ")]
              );
            }),
            n(
              "k-dropdown-content",
              {
                ref: "dropdown",
                attrs: { slot: "footer" },
                on: {
                  open: function(e) {
                    t.$nextTick(function() {
                      t.$refs.search.focus();
                    });
                  },
                  close: function(e) {
                    t.q = null;
                  }
                },
                slot: "footer"
              },
              [
                t.search
                  ? n(
                      "k-dropdown-item",
                      {
                        staticClass: "k-multiselect-search",
                        attrs: { icon: "search" }
                      },
                      [
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.q,
                              expression: "q"
                            }
                          ],
                          ref: "search",
                          domProps: { value: t.q },
                          on: {
                            input: function(e) {
                              e.target.composing || (t.q = e.target.value);
                            }
                          }
                        })
                      ]
                    )
                  : t._e(),
                n(
                  "div",
                  { staticClass: "k-multiselect-options" },
                  t._l(t.filtered, function(e) {
                    return n(
                      "k-dropdown-item",
                      {
                        key: e.value,
                        class: {
                          "k-multiselect-option": !0,
                          selected: t.isSelected(e),
                          disabled: !t.addable
                        },
                        attrs: {
                          icon: t.isSelected(e) ? "check" : "circle-outline"
                        },
                        on: {
                          click: function(n) {
                            t.select(e);
                          }
                        },
                        nativeOn: {
                          keydown: [
                            function(n) {
                              if (
                                !("button" in n) &&
                                t._k(n.keyCode, "enter", 13, n.key, "Enter")
                              )
                                return null;
                              n.preventDefault(), t.select(e);
                            },
                            function(n) {
                              if (
                                !("button" in n) &&
                                t._k(n.keyCode, "space", 32, n.key, [
                                  " ",
                                  "Spacebar"
                                ])
                              )
                                return null;
                              n.preventDefault(), t.select(e);
                            }
                          ]
                        }
                      },
                      [
                        n("span", { domProps: { innerHTML: t._s(e.display) } }),
                        n("span", {
                          staticClass: "k-multiselect-value",
                          domProps: { innerHTML: t._s(e.info) }
                        })
                      ]
                    );
                  }),
                  1
                )
              ],
              1
            )
          ],
          2
        );
      },
      Ps = [],
      Ds = (n("20d6"),
      n("a481"),
      n("55dd"),
      {
        inheritAttrs: !1,
        props: {
          disabled: Boolean,
          id: [Number, String],
          max: Number,
          min: Number,
          layout: String,
          options: {
            type: Array,
            default: function() {
              return [];
            }
          },
          required: Boolean,
          search: Boolean,
          separator: { type: String, default: "," },
          sort: Boolean,
          value: {
            type: Array,
            required: !0,
            default: function() {
              return [];
            }
          }
        },
        data: function() {
          return { state: this.value, q: null };
        },
        computed: {
          addable: function() {
            return !this.max || this.state.length < this.max;
          },
          draggable: function() {
            return this.state.length > 1 && !this.sort;
          },
          dragOptions: function() {
            return { disabled: !this.draggable, draggable: ".k-tag", delay: 1 };
          },
          filtered: function() {
            if (null === this.q)
              return this.options.map(function(t) {
                return Object(
                  u["a"]
                )({}, t, { display: t.text, info: t.value });
              });
            var t = new RegExp("(".concat(this.q, ")"), "ig");
            return this.options
              .filter(function(e) {
                return e.text.match(t) || e.value.match(t);
              })
              .map(function(e) {
                return Object(
                  u["a"]
                )({}, e, { display: e.text.replace(t, "<b>$1</b>"), info: e.value.replace(t, "<b>$1</b>") });
              });
          },
          sorted: function() {
            var t = this;
            if (!1 === this.sort) return this.state;
            var e = this.state,
              n = function(e) {
                return t.options.findIndex(function(t) {
                  return t.value === e.value;
                });
              };
            return e.sort(function(t, e) {
              return n(t) - n(e);
            });
          }
        },
        watch: {
          value: function(t) {
            (this.state = t), this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(),
            this.$events.$on("click", this.close),
            this.$events.$on("keydown.cmd.s", this.close),
            this.$events.$on("keydown.esc", this.escape);
        },
        destroyed: function() {
          this.$events.$off("click", this.close),
            this.$events.$off("keydown.cmd.s", this.close),
            this.$events.$off("keydown.esc", this.escape);
        },
        methods: {
          add: function(t) {
            this.addable && (this.state.push(t), this.onInput());
          },
          blur: function() {
            this.close();
          },
          close: function() {
            this.$refs.dropdown.close(), (this.q = null), this.$el.focus();
          },
          escape: function() {
            this.q ? (this.q = null) : this.close();
          },
          focus: function() {
            this.$refs.dropdown.open();
          },
          index: function(t) {
            return this.state.findIndex(function(e) {
              return e.value === t.value;
            });
          },
          isSelected: function(t) {
            return -1 !== this.index(t);
          },
          navigate: function(t) {
            var e = document.activeElement;
            switch (t) {
              case "prev":
                e && e.previousSibling && e.previousSibling.focus();
                break;
              case "next":
                e && e.nextSibling && e.nextSibling.focus();
                break;
            }
          },
          onInput: function() {
            this.$emit("input", this.sorted);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          remove: function(t) {
            this.state.splice(this.index(t), 1), this.onInput();
          },
          select: function(t) {
            (t = { text: t.text, value: t.value }),
              this.isSelected(t) ? this.remove(t) : this.add(t);
          }
        },
        validations: function() {
          return {
            state: {
              required: !this.required || ts["required"],
              minLength: !this.min || Object(ts["minLength"])(this.min),
              maxLength: !this.max || Object(ts["maxLength"])(this.max)
            }
          };
        }
      }),
      Bs = Ds,
      Rs = (n("6a0a"), Object(m["a"])(Bs, Ns, Ps, !1, null, null, null));
    Rs.options.__file = "MultiselectInput.vue";
    var Fs = Rs.exports,
      Ms = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "input",
          t._g(
            t._b(
              {
                ref: "input",
                staticClass: "k-number-input",
                attrs: { type: "number" }
              },
              "input",
              {
                autofocus: t.autofocus,
                disabled: t.disabled,
                id: t.id,
                max: t.max,
                min: t.min,
                name: t.name,
                placeholder: t.placeholder,
                required: t.required,
                step: t.step,
                value: t.value
              },
              !1
            ),
            t.listeners
          )
        );
      },
      zs = [],
      Us = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          max: Number,
          min: Number,
          name: [Number, String],
          placeholder: String,
          preselect: Boolean,
          required: Boolean,
          step: Number,
          value: { type: [Number, String], default: null }
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              input: function(e) {
                return t.onInput(e.target.value);
              }
            })
          };
        },
        watch: {
          value: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(),
            this.$props.autofocus && this.focus(),
            this.$props.preselect && this.select();
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onInput: function(t) {
            this.$emit("input", Number(t));
          },
          select: function() {
            this.$refs.input.select();
          }
        },
        validations: function() {
          return {
            value: {
              required: !this.required || ts["required"],
              min: !this.min || Object(ts["minValue"])(this.min),
              max: !this.max || Object(ts["maxValue"])(this.max)
            }
          };
        }
      },
      Hs = Us,
      Vs = (n("4b75"), Object(m["a"])(Hs, Ms, zs, !1, null, null, null));
    Vs.options.__file = "NumberInput.vue";
    var Ks,
      Gs,
      Ys = Vs.exports,
      Ws = {
        extends: Ts,
        props: Object(u["a"])({}, Ts.props, {
          autocomplete: { type: String, default: "new-password" },
          type: { type: String, default: "password" }
        })
      },
      Js = Ws,
      Xs = Object(m["a"])(Js, Ks, Gs, !1, null, null, null);
    Xs.options.__file = "PasswordInput.vue";
    var Qs = Xs.exports,
      Zs = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "ul",
          { staticClass: "k-radio-input", style: "--columns:" + t.columns },
          t._l(t.options, function(e, i) {
            return n(
              "li",
              { key: i },
              [
                n("input", {
                  staticClass: "k-radio-input-native",
                  attrs: { id: t.id + "-" + i, name: t.id, type: "radio" },
                  domProps: { value: e.value, checked: t.value === e.value },
                  on: {
                    change: function(n) {
                      t.onInput(e.value);
                    }
                  }
                }),
                n(
                  "label",
                  { attrs: { for: t.id + "-" + i } },
                  [
                    e.info
                      ? [
                          n("span", { staticClass: "k-radio-input-text" }, [
                            t._v(t._s(e.text))
                          ]),
                          n("span", { staticClass: "k-radio-input-info" }, [
                            t._v(t._s(e.info))
                          ])
                        ]
                      : [t._v("\n        " + t._s(e.text) + "\n      ")]
                  ],
                  2
                ),
                e.icon ? n("k-icon", { attrs: { type: e.icon } }) : t._e()
              ],
              1
            );
          }),
          0
        );
      },
      to = [],
      eo = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          columns: Number,
          disabled: Boolean,
          id: {
            type: [Number, String],
            default: function() {
              return this._uid;
            }
          },
          options: Array,
          required: Boolean,
          value: [String, Number, Boolean]
        },
        watch: {
          value: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus: function() {
            this.$el.querySelector("input").focus();
          },
          onInput: function(t) {
            this.$emit("input", t);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select: function() {
            this.focus();
          }
        },
        validations: function() {
          return { value: { required: !this.required || ts["required"] } };
        }
      },
      no = eo,
      io = (n("d11d"), Object(m["a"])(no, Zs, to, !1, null, null, null));
    io.options.__file = "RadioInput.vue";
    var so = io.exports,
      oo = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("label", { staticClass: "k-range-input" }, [
          n(
            "input",
            t._g(
              t._b(
                {
                  ref: "input",
                  staticClass: "k-range-input-native",
                  style:
                    "--min: " +
                    t.min +
                    "; --max: " +
                    t.max +
                    "; --value: " +
                    t.position,
                  attrs: { type: "range" }
                },
                "input",
                {
                  autofocus: t.autofocus,
                  disabled: t.disabled,
                  id: t.id,
                  max: t.max,
                  min: t.min,
                  name: t.name,
                  required: t.required,
                  step: t.step,
                  value: t.value
                },
                !1
              ),
              t.listeners
            )
          ),
          t.tooltip
            ? n("span", { staticClass: "k-range-input-tooltip" }, [
                t.tooltip.before
                  ? n("span", { staticClass: "k-range-input-tooltip-before" }, [
                      t._v(t._s(t.tooltip.before))
                    ])
                  : t._e(),
                n("span", { staticClass: "k-range-input-tooltip-text" }, [
                  t._v(t._s(t.label))
                ]),
                t.tooltip.after
                  ? n("span", { staticClass: "k-range-input-tooltip-after" }, [
                      t._v(t._s(t.tooltip.after))
                    ])
                  : t._e()
              ])
            : t._e()
        ]);
      },
      ao = [],
      ro = (n("6b54"),
      {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [String, Number],
          max: { type: Number, default: 100 },
          min: { type: Number, default: 0 },
          name: [String, Number],
          required: Boolean,
          step: { type: Number, default: 1 },
          tooltip: {
            type: [Boolean, Object],
            default: function() {
              return { before: null, after: null };
            }
          },
          value: [Number, String]
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              input: function(e) {
                return t.onInput(e.target.value);
              }
            })
          };
        },
        computed: {
          label: function() {
            return null !== this.value ? this.format(this.value) : "–";
          },
          center: function() {
            var t = (this.max - this.min) / 2 + this.min;
            return Math.ceil(t / this.step) * this.step;
          },
          position: function() {
            return null !== this.value ? this.value : this.center;
          }
        },
        watch: {
          value: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          format: function(t) {
            var e = document.lang ? document.lang.replace("_", "-") : "en",
              n = this.step.toString().split("."),
              i = n.length > 1 ? n[1].length : 0;
            return new Intl.NumberFormat(e, {
              minimumFractionDigits: i
            }).format(t);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onInput: function(t) {
            this.$emit("input", t);
          }
        },
        validations: function() {
          return {
            value: {
              required: !this.required || ts["required"],
              min: !this.min || Object(ts["minValue"])(this.min),
              max: !this.max || Object(ts["maxValue"])(this.max)
            }
          };
        }
      }),
      lo = ro,
      uo = (n("3c0c"), Object(m["a"])(lo, oo, ao, !1, null, null, null));
    uo.options.__file = "RangeInput.vue";
    var co = uo.exports,
      po = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "span",
          {
            staticClass: "k-select-input",
            attrs: {
              "data-disabled": t.disabled,
              "data-empty": "" === t.selected
            }
          },
          [
            n(
              "select",
              t._g(
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.selected,
                      expression: "selected"
                    }
                  ],
                  ref: "input",
                  staticClass: "k-select-input-native",
                  attrs: {
                    autofocus: t.autofocus,
                    "aria-label": t.ariaLabel,
                    disabled: t.disabled,
                    id: t.id,
                    name: t.name,
                    required: t.required
                  },
                  on: {
                    change: function(e) {
                      var n = Array.prototype.filter
                        .call(e.target.options, function(t) {
                          return t.selected;
                        })
                        .map(function(t) {
                          var e = "_value" in t ? t._value : t.value;
                          return e;
                        });
                      t.selected = e.target.multiple ? n : n[0];
                    }
                  }
                },
                t.listeners
              ),
              [
                !1 !== t.empty
                  ? n("option", { attrs: { value: "" } }, [t._v(t._s(t.empty))])
                  : t._e(),
                t._l(t.options, function(e) {
                  return n(
                    "option",
                    {
                      key: e.value,
                      attrs: { disabled: e.disabled },
                      domProps: { value: e.value }
                    },
                    [t._v("\n      " + t._s(e.text) + "\n    ")]
                  );
                })
              ],
              2
            ),
            t._v("\n  " + t._s(t.label) + "\n")
          ]
        );
      },
      fo = [],
      ho = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          ariaLabel: String,
          disabled: Boolean,
          id: [Number, String],
          name: [Number, String],
          placeholder: String,
          empty: { type: [String, Boolean], default: "—" },
          options: {
            type: Array,
            default: function() {
              return [];
            }
          },
          required: Boolean,
          value: { type: [String, Number, Boolean], default: "" }
        },
        data: function() {
          var t = this;
          return {
            selected: this.value,
            listeners: Object(u["a"])({}, this.$listeners, {
              click: function(e) {
                return t.onClick(e);
              },
              input: function(e) {
                return t.onInput(e.target.value);
              }
            })
          };
        },
        computed: {
          label: function() {
            var t = this.text(this.selected);
            return "" === this.selected || null === this.selected || null === t
              ? this.placeholder || "—"
              : t;
          }
        },
        watch: {
          value: function(t) {
            (this.selected = t), this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          onClick: function(t) {
            t.stopPropagation(), this.$emit("click", t);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onInput: function(t) {
            (this.selected = t), this.$emit("input", this.selected);
          },
          select: function() {
            this.focus();
          },
          text: function(t) {
            var e = null;
            return (
              this.options.forEach(function(n) {
                n.value == t && (e = n.text);
              }),
              e
            );
          }
        },
        validations: function() {
          return { selected: { required: !this.required || ts["required"] } };
        }
      },
      mo = ho,
      go = (n("bd46"), Object(m["a"])(mo, po, fo, !1, null, null, null));
    go.options.__file = "SelectInput.vue";
    var vo = go.exports,
      bo = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-draggable",
          {
            ref: "box",
            staticClass: "k-tags-input",
            attrs: {
              list: t.tags,
              "data-layout": t.layout,
              options: t.dragOptions
            },
            on: { end: t.onInput }
          },
          [
            t._l(t.tags, function(e, i) {
              return n(
                "k-tag",
                {
                  key: i,
                  ref: e.value,
                  refInFor: !0,
                  attrs: { removable: !0, name: "tag" },
                  on: {
                    remove: function(n) {
                      t.remove(e);
                    }
                  },
                  nativeOn: {
                    click: function(t) {
                      t.stopPropagation();
                    },
                    blur: function(e) {
                      t.selectTag(null);
                    },
                    focus: function(n) {
                      t.selectTag(e);
                    },
                    keydown: [
                      function(e) {
                        return "button" in e ||
                          !t._k(e.keyCode, "left", 37, e.key, [
                            "Left",
                            "ArrowLeft"
                          ])
                          ? "button" in e && 0 !== e.button
                            ? null
                            : void t.navigate("prev")
                          : null;
                      },
                      function(e) {
                        return "button" in e ||
                          !t._k(e.keyCode, "right", 39, e.key, [
                            "Right",
                            "ArrowRight"
                          ])
                          ? "button" in e && 2 !== e.button
                            ? null
                            : void t.navigate("next")
                          : null;
                      }
                    ],
                    dblclick: function(n) {
                      t.edit(e);
                    }
                  }
                },
                [t._v("\n    " + t._s(e.text) + "\n  ")]
              );
            }),
            n(
              "span",
              {
                staticClass: "k-tags-input-element",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                n(
                  "k-autocomplete",
                  {
                    ref: "autocomplete",
                    attrs: { options: t.options, skip: t.skip },
                    on: {
                      select: t.addTag,
                      leave: function(e) {
                        t.$refs.input.focus();
                      }
                    }
                  },
                  [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: t.newTag,
                          expression: "newTag",
                          modifiers: { trim: !0 }
                        }
                      ],
                      ref: "input",
                      attrs: {
                        autofocus: t.autofocus,
                        disabled:
                          t.disabled || (t.max && t.tags.length >= t.max),
                        id: t.id,
                        name: t.name,
                        autocomplete: "off",
                        type: "text"
                      },
                      domProps: { value: t.newTag },
                      on: {
                        input: [
                          function(e) {
                            e.target.composing ||
                              (t.newTag = e.target.value.trim());
                          },
                          function(e) {
                            t.type(e.target.value);
                          }
                        ],
                        blur: [
                          t.blurInput,
                          function(e) {
                            t.$forceUpdate();
                          }
                        ],
                        keydown: [
                          function(e) {
                            return ("button" in e ||
                              !t._k(e.keyCode, "s", void 0, e.key, void 0)) &&
                              e.metaKey
                              ? t.blurInput(e)
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "left", 37, e.key, [
                                "Left",
                                "ArrowLeft"
                              ])
                              ? "button" in e && 0 !== e.button
                                ? null
                                : t.leaveInput(e)
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "enter", 13, e.key, "Enter")
                              ? t.enter(e)
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(e.keyCode, "tab", 9, e.key, "Tab")
                              ? t.tab(e)
                              : null;
                          },
                          function(e) {
                            return "button" in e ||
                              !t._k(
                                e.keyCode,
                                "backspace",
                                void 0,
                                e.key,
                                void 0
                              )
                              ? t.leaveInput(e)
                              : null;
                          }
                        ]
                      }
                    })
                  ]
                )
              ],
              1
            )
          ],
          2
        );
      },
      ko = [],
      _o = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          accept: { type: String, default: "all" },
          disabled: Boolean,
          icon: { type: [String, Boolean], default: "tag" },
          id: [Number, String],
          layout: String,
          max: Number,
          min: Number,
          name: [Number, String],
          options: {
            type: Array,
            default: function() {
              return [];
            }
          },
          required: Boolean,
          separator: { type: String, default: "," },
          value: {
            type: Array,
            default: function() {
              return [];
            }
          }
        },
        data: function() {
          return {
            tags: this.prepareTags(this.value),
            selected: null,
            newTag: null,
            tagOptions: this.options.map(function(t) {
              return (t.icon = "tag"), t;
            })
          };
        },
        computed: {
          dragOptions: function() {
            return { delay: 1, disabled: !this.draggable, draggable: ".k-tag" };
          },
          draggable: function() {
            return this.tags.length > 1;
          },
          skip: function() {
            return this.tags.map(function(t) {
              return t.text;
            });
          }
        },
        watch: {
          value: function(t) {
            (this.tags = this.prepareTags(t)), this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          addString: function(t) {
            t &&
              ((t = t.trim()),
              0 !== t.length && this.addTag({ text: t, value: t }));
          },
          addTag: function(t) {
            this.addTagToIndex(t),
              this.$refs.autocomplete.close(),
              this.$refs.input.focus();
          },
          addTagToIndex: function(t) {
            if ("options" === this.accept) {
              var e = this.options.filter(function(e) {
                return e.value === t.value;
              })[0];
              if (!e) return;
            }
            -1 === this.index(t) &&
              (!this.max || this.tags.length < this.max) &&
              (this.tags.push(t), this.onInput()),
              (this.newTag = null);
          },
          blurInput: function(t) {
            var e = t.relatedTarget || t.explicitOriginalTarget;
            (this.$refs.autocomplete.$el &&
              this.$refs.autocomplete.$el.contains(e)) ||
              (this.$refs.input.value.length &&
                (this.addTagToIndex(this.$refs.input.value),
                this.$refs.autocomplete.close()));
          },
          edit: function(t) {
            (this.newTag = t.text), this.$refs.input.select(), this.remove(t);
          },
          enter: function(t) {
            if (!this.newTag || 0 === this.newTag.length) return !0;
            t.preventDefault(), this.addString(this.newTag);
          },
          focus: function() {
            this.$refs.input.focus();
          },
          get: function(t) {
            var e = null,
              n = null;
            switch (t) {
              case "prev":
              case "next":
                if (!this.selected) return;
                (n = this.index(this.selected)),
                  (e = "prev" === t ? n - 1 : n + 1);
                break;
              case "first":
                e = 0;
                break;
              case "last":
                e = this.tags.length - 1;
                break;
              default:
                e = t;
                break;
            }
            var i = this.tags[e];
            if (i) {
              var s = this.$refs[i.value];
              if (s && s[0]) return { ref: s[0], tag: i, index: e };
            }
            return !1;
          },
          index: function(t) {
            return this.tags.findIndex(function(e) {
              return e.value === t.value;
            });
          },
          onInput: function() {
            this.$emit("input", this.tags);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          leaveInput: function(t) {
            0 === t.target.selectionStart &&
              t.target.selectionStart === t.target.selectionEnd &&
              (this.navigate("last"),
              this.$refs.autocomplete.close(),
              t.preventDefault(),
              t.target.blur());
          },
          navigate: function(t) {
            var e = this.get(t);
            e
              ? (e.ref.focus(), (this.selected = e.tag))
              : "next" === t &&
                (this.$refs.input.focus(), (this.selected = null));
          },
          prepareTags: function(t) {
            return !1 === Array.isArray(t)
              ? []
              : t.map(function(t) {
                  return "string" === typeof t ? { text: t, value: t } : t;
                });
          },
          remove: function(t) {
            var e = this.get("prev"),
              n = this.get("next");
            this.tags.splice(this.index(t), 1),
              this.onInput(),
              e ? e.ref.focus() : n ? n.ref.focus() : this.$refs.input.focus();
          },
          select: function() {
            this.focus();
          },
          selectTag: function(t) {
            this.selected = t;
          },
          tab: function(t) {
            this.newTag &&
              this.newTag.length > 0 &&
              (t.preventDefault(), this.addString(this.newTag));
          },
          type: function(t) {
            (this.newTag = t), this.$refs.autocomplete.search(t);
          }
        },
        validations: function() {
          return {
            tags: {
              required: !this.required || ts["required"],
              minLength: !this.min || Object(ts["minLength"])(this.min),
              maxLength: !this.max || Object(ts["maxLength"])(this.max)
            }
          };
        }
      },
      $o = _o,
      yo = (n("eabd"), Object(m["a"])($o, bo, ko, !1, null, null, null));
    yo.options.__file = "TagsInput.vue";
    var xo,
      wo,
      So = yo.exports,
      Oo = {
        extends: Ts,
        props: Object(u["a"])({}, Ts.props, {
          autocomplete: { type: String, default: "tel" },
          type: { type: String, default: "tel" }
        })
      },
      Co = Oo,
      Eo = Object(m["a"])(Co, xo, wo, !1, null, null, null);
    Eo.options.__file = "TelInput.vue";
    var jo = Eo.exports,
      To = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "k-textarea-input",
            attrs: { "data-theme": t.theme, "data-over": t.over }
          },
          [
            n(
              "div",
              { staticClass: "k-textarea-input-wrapper" },
              [
                t.buttons
                  ? n("k-toolbar", {
                      ref: "toolbar",
                      attrs: { buttons: t.buttons },
                      on: { command: t.onCommand }
                    })
                  : t._e(),
                n(
                  "textarea",
                  t._b(
                    {
                      ref: "input",
                      staticClass: "k-textarea-input-native",
                      attrs: { "data-size": t.size },
                      on: {
                        focus: t.onFocus,
                        input: t.onInput,
                        keydown: [
                          function(e) {
                            return ("button" in e ||
                              !t._k(e.keyCode, "enter", 13, e.key, "Enter")) &&
                              e.metaKey
                              ? t.onSubmit(e)
                              : null;
                          },
                          function(e) {
                            return e.metaKey ? t.onShortcut(e) : null;
                          }
                        ],
                        dragover: t.onOver,
                        dragleave: t.onOut,
                        drop: t.onDrop
                      }
                    },
                    "textarea",
                    {
                      autofocus: t.autofocus,
                      disabled: t.disabled,
                      id: t.id,
                      minlength: t.minlength,
                      name: t.name,
                      placeholder: t.placeholder,
                      required: t.required,
                      spellcheck: t.spellcheck,
                      value: t.value
                    },
                    !1
                  )
                )
              ],
              1
            ),
            n("k-email-dialog", {
              ref: "emailDialog",
              on: {
                cancel: t.cancel,
                submit: function(e) {
                  t.insert(e);
                }
              }
            }),
            n("k-link-dialog", {
              ref: "linkDialog",
              on: {
                cancel: t.cancel,
                submit: function(e) {
                  t.insert(e);
                }
              }
            })
          ],
          1
        );
      },
      Io = [],
      Lo = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("nav", { staticClass: "k-toolbar" }, [
          n(
            "div",
            { staticClass: "k-toolbar-buttons" },
            [
              t._l(t.layout, function(e, i) {
                return [
                  e.divider
                    ? [n("span", { key: i, staticClass: "k-toolbar-divider" })]
                    : e.dropdown
                      ? [
                          n(
                            "k-dropdown",
                            { key: i },
                            [
                              n("k-button", {
                                key: i,
                                staticClass: "k-toolbar-button",
                                attrs: {
                                  icon: e.icon,
                                  tooltip: e.label,
                                  tabindex: "-1"
                                },
                                on: {
                                  click: function(e) {
                                    t.$refs[i + "-dropdown"][0].toggle();
                                  }
                                }
                              }),
                              n(
                                "k-dropdown-content",
                                { ref: i + "-dropdown", refInFor: !0 },
                                t._l(e.dropdown, function(e, i) {
                                  return n(
                                    "k-dropdown-item",
                                    {
                                      key: i,
                                      attrs: { icon: e.icon },
                                      on: {
                                        click: function(n) {
                                          t.command(e.command, e.args);
                                        }
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(e.label) +
                                          "\n            "
                                      )
                                    ]
                                  );
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ]
                      : [
                          n("k-button", {
                            key: i,
                            staticClass: "k-toolbar-button",
                            attrs: {
                              icon: e.icon,
                              tooltip: e.label,
                              tabindex: "-1"
                            },
                            on: {
                              click: function(n) {
                                t.command(e.command, e.args);
                              }
                            }
                          })
                        ]
                ];
              })
            ],
            2
          )
        ]);
      },
      Ao = [],
      qo = function(t) {
        this.command("insert", function(e, n) {
          var i = [];
          return (
            n.split("\n").forEach(function(e, n) {
              var s = "ol" === t ? n + 1 + "." : "-";
              i.push(s + " " + e);
            }),
            i.join("\n")
          );
        });
      },
      No = {
        layout: [
          "headlines",
          "bold",
          "italic",
          "|",
          "link",
          "email",
          "code",
          "|",
          "ul",
          "ol"
        ],
        props: { buttons: { type: [Boolean, Array], default: !0 } },
        data: function() {
          var t = {},
            e = {},
            n = [],
            i = this.commands();
          return !1 === this.buttons
            ? t
            : (Array.isArray(this.buttons) && (n = this.buttons),
              !0 !== Array.isArray(this.buttons) && (n = this.$options.layout),
              n.forEach(function(n, s) {
                if ("|" === n) t["divider-" + s] = { divider: !0 };
                else if (i[n]) {
                  var o = i[n];
                  (t[n] = o), o.shortcut && (e[o.shortcut] = n);
                }
              }),
              { layout: t, shortcuts: e });
        },
        methods: {
          command: function(t, e) {
            "function" === typeof t
              ? t.apply(this)
              : this.$emit("command", t, e);
          },
          commands: function() {
            return {
              headlines: {
                label: this.$t("toolbar.button.headings"),
                icon: "title",
                dropdown: {
                  h1: {
                    label: this.$t("toolbar.button.heading.1"),
                    icon: "title",
                    command: "prepend",
                    args: "#"
                  },
                  h2: {
                    label: this.$t("toolbar.button.heading.2"),
                    icon: "title",
                    command: "prepend",
                    args: "##"
                  },
                  h3: {
                    label: this.$t("toolbar.button.heading.3"),
                    icon: "title",
                    command: "prepend",
                    args: "###"
                  }
                }
              },
              bold: {
                label: this.$t("toolbar.button.bold"),
                icon: "bold",
                command: "wrap",
                args: "**",
                shortcut: "b"
              },
              italic: {
                label: this.$t("toolbar.button.italic"),
                icon: "italic",
                command: "wrap",
                args: "*",
                shortcut: "i"
              },
              link: {
                label: this.$t("toolbar.button.link"),
                icon: "url",
                shortcut: "l",
                command: "dialog",
                args: "link"
              },
              email: {
                label: this.$t("toolbar.button.email"),
                icon: "email",
                shortcut: "e",
                command: "dialog",
                args: "email"
              },
              code: {
                label: this.$t("toolbar.button.code"),
                icon: "code",
                command: "wrap",
                args: "`"
              },
              ul: {
                label: this.$t("toolbar.button.ul"),
                icon: "list-bullet",
                command: function() {
                  return qo.apply(this, ["ul"]);
                }
              },
              ol: {
                label: this.$t("toolbar.button.ol"),
                icon: "list-numbers",
                command: function() {
                  return qo.apply(this, ["ol"]);
                }
              }
            };
          },
          shortcut: function(t, e) {
            if (this.shortcuts[t]) {
              var n = this.layout[this.shortcuts[t]];
              if (!n) return !1;
              e.preventDefault(), this.command(n.command, n.args);
            }
          }
        }
      },
      Po = No,
      Do = (n("813c"), Object(m["a"])(Po, Lo, Ao, !1, null, null, null));
    Do.options.__file = "Toolbar.vue";
    var Bo = Do.exports,
      Ro = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("insert") },
            on: {
              close: t.cancel,
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.value,
                callback: function(e) {
                  t.value = e;
                },
                expression: "value"
              }
            })
          ],
          1
        );
      },
      Fo = [],
      Mo = {
        data: function() {
          return {
            value: { email: null, text: null },
            fields: {
              email: { label: this.$t("email"), type: "email" },
              text: { label: this.$t("link.text"), type: "text" }
            }
          };
        },
        computed: {
          kirbytext: function() {
            return this.$store.state.system.info.kirbytext;
          }
        },
        methods: {
          open: function(t, e) {
            (this.value.text = e), this.$refs.dialog.open();
          },
          cancel: function() {
            this.$emit("cancel");
          },
          createKirbytext: function() {
            return this.value.text.length > 0
              ? "(email: "
                  .concat(this.value.email, " text: ")
                  .concat(this.value.text, ")")
              : "(email: ".concat(this.value.email, ")");
          },
          createMarkdown: function() {
            return this.value.text.length > 0
              ? "["
                  .concat(this.value.text, "](mailto:")
                  .concat(this.value.email, ")")
              : "<".concat(this.value.email, ">");
          },
          submit: function() {
            this.$emit(
              "submit",
              this.kirbytext ? this.createKirbytext() : this.createMarkdown()
            ),
              (this.value = { email: null, text: null }),
              this.$refs.dialog.close();
          }
        }
      },
      zo = Mo,
      Uo = Object(m["a"])(zo, Ro, Fo, !1, null, null, null);
    Uo.options.__file = "EmailDialog.vue";
    var Ho = Uo.exports,
      Vo = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("insert") },
            on: {
              close: t.cancel,
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.value,
                callback: function(e) {
                  t.value = e;
                },
                expression: "value"
              }
            })
          ],
          1
        );
      },
      Ko = [],
      Go = {
        data: function() {
          return {
            value: { url: null, text: null },
            fields: {
              url: {
                label: this.$t("link"),
                type: "text",
                placeholder: this.$t("url.placeholder"),
                icon: "url"
              },
              text: { label: this.$t("link.text"), type: "text" }
            }
          };
        },
        computed: {
          kirbytext: function() {
            return this.$store.state.system.info.kirbytext;
          }
        },
        methods: {
          open: function(t, e) {
            (this.value.text = e), this.$refs.dialog.open();
          },
          cancel: function() {
            this.$emit("cancel");
          },
          createKirbytext: function() {
            return this.value.text.length > 0
              ? "(link: "
                  .concat(this.value.url, " text: ")
                  .concat(this.value.text, ")")
              : "(link: ".concat(this.value.url, ")");
          },
          createMarkdown: function() {
            return this.value.text.length > 0
              ? "[".concat(this.value.text, "](").concat(this.value.url, ")")
              : "<".concat(this.value.url, ">");
          },
          submit: function() {
            this.$emit(
              "submit",
              this.kirbytext ? this.createKirbytext() : this.createMarkdown()
            ),
              (this.value = { url: null, text: null }),
              this.$refs.dialog.close();
          }
        }
      },
      Yo = Go,
      Wo = Object(m["a"])(Yo, Vo, Ko, !1, null, null, null);
    Wo.options.__file = "LinkDialog.vue";
    var Jo = Wo.exports,
      Xo = n("19e9"),
      Qo = n.n(Xo),
      Zo = {
        components: {
          "k-toolbar": Bo,
          "k-email-dialog": Ho,
          "k-link-dialog": Jo
        },
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          buttons: { type: [Boolean, Array], default: !0 },
          disabled: Boolean,
          id: [Number, String],
          name: [Number, String],
          maxlength: Number,
          minlength: Number,
          placeholder: String,
          preselect: Boolean,
          required: Boolean,
          size: String,
          spellcheck: { type: [Boolean, String], default: "off" },
          theme: String,
          value: String
        },
        data: function() {
          return { over: !1 };
        },
        watch: {
          value: function() {
            var t = this;
            this.onInvalid(),
              this.$nextTick(function() {
                t.resize();
              });
          }
        },
        mounted: function() {
          var t = this;
          this.$nextTick(function() {
            Qo()(t.$refs.input);
          }),
            this.onInvalid(),
            this.$props.autofocus && this.focus(),
            this.$props.preselect && this.select();
        },
        methods: {
          cancel: function() {
            this.$refs.input.focus();
          },
          dialog: function(t) {
            if (!this.$refs[t + "Dialog"]) throw "Invalid toolbar dialog";
            this.$refs[t + "Dialog"].open(this.$refs.input, this.selection());
          },
          focus: function() {
            this.$refs.input.focus();
          },
          insert: function(t) {
            var e = this,
              n = this.$refs.input,
              i = n.value;
            setTimeout(function() {
              if (
                (n.focus(),
                document.execCommand("insertText", !1, t),
                n.value === i)
              ) {
                var s =
                  n.value.slice(0, n.selectionStart) +
                  t +
                  n.value.slice(n.selectionEnd);
                (n.value = s), e.$emit("input", s);
              }
            }),
              this.resize();
          },
          prepend: function(t) {
            this.insert(t + " " + this.selection());
          },
          resize: function() {
            Qo.a.update(this.$refs.input);
          },
          onCommand: function(t, e) {
            "function" === typeof this[t]
              ? "function" === typeof e
                ? this[t](e(this.$refs.input, this.selection()))
                : this[t](e)
              : window.console.warn(t + " is not a valid command");
          },
          onDrop: function() {
            var t = this.$store.state.drag;
            t && "text" === t.type && (this.focus(), this.insert(t.data));
          },
          onFocus: function(t) {
            this.$emit("focus", t);
          },
          onInput: function(t) {
            this.$emit("input", t.target.value);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          onOut: function() {
            this.$refs.input.blur(), (this.over = !1);
          },
          onOver: function(t) {
            var e = this.$store.state.drag;
            e &&
              "text" === e.type &&
              ((t.dataTransfer.dropEffect = "copy"),
              this.focus(),
              (this.over = !0));
          },
          onShortcut: function(t) {
            !1 !== this.buttons &&
              "Meta" !== t.key &&
              this.$refs.toolbar &&
              this.$refs.toolbar.shortcut(t.key, t);
          },
          onSubmit: function(t) {
            return this.$emit("submit", t);
          },
          select: function() {
            this.$refs.select();
          },
          selection: function() {
            var t = this.$refs.input,
              e = t.selectionStart,
              n = t.selectionEnd;
            return t.value.substring(e, n);
          },
          wrap: function(t) {
            this.insert(t + this.selection() + t);
          }
        },
        validations: function() {
          return {
            value: {
              required: !this.required || ts["required"],
              minLength:
                !this.minlength || Object(ts["minLength"])(this.minlength),
              maxLength:
                !this.maxlength || Object(ts["maxLength"])(this.maxlength)
            }
          };
        }
      },
      ta = Zo,
      ea = (n("f093"), Object(m["a"])(ta, To, Io, !1, null, null, null));
    ea.options.__file = "TextareaInput.vue";
    var na = ea.exports,
      ia = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-time-input" },
          [
            n("k-select-input", {
              ref: "hour",
              attrs: {
                id: t.id,
                "aria-label": t.$t("hour"),
                autofocus: t.autofocus,
                options: t.hours,
                required: t.required,
                disabled: t.disabled,
                placeholder: "––",
                empty: "––"
              },
              on: { input: t.setHour, invalid: t.onInvalid },
              model: {
                value: t.hour,
                callback: function(e) {
                  t.hour = e;
                },
                expression: "hour"
              }
            }),
            n("span", { staticClass: "k-time-input-separator" }, [t._v(":")]),
            n("k-select-input", {
              ref: "minute",
              attrs: {
                "aria-label": t.$t("minutes"),
                options: t.minutes,
                required: t.required,
                disabled: t.disabled,
                placeholder: "––",
                empty: "––"
              },
              on: { input: t.setMinute, invalid: t.onInvalid },
              model: {
                value: t.minute,
                callback: function(e) {
                  t.minute = e;
                },
                expression: "minute"
              }
            }),
            12 === t.notation
              ? n("k-select-input", {
                  ref: "meridiem",
                  staticClass: "k-time-input-meridiem",
                  attrs: {
                    "aria-label": t.$t("meridiem"),
                    empty: !1,
                    options: [
                      { value: "AM", text: "AM" },
                      { value: "PM", text: "PM" }
                    ],
                    required: t.required,
                    disabled: t.disabled
                  },
                  on: { input: t.onInput },
                  model: {
                    value: t.meridiem,
                    callback: function(e) {
                      t.meridiem = e;
                    },
                    expression: "meridiem"
                  }
                })
              : t._e()
          ],
          1
        );
      },
      sa = [],
      oa = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [String, Number],
          notation: { type: Number, default: 24 },
          required: Boolean,
          step: { type: Number, default: 5 },
          value: { type: String }
        },
        data: function() {
          var t = this.toObject(this.value);
          return {
            time: this.value,
            hour: t.hour,
            minute: t.minute,
            meridiem: t.meridiem
          };
        },
        computed: {
          hours: function() {
            return this.options(
              24 === this.notation ? 0 : 1,
              24 === this.notation ? 23 : 12
            );
          },
          minutes: function() {
            return this.options(0, 59, this.step);
          }
        },
        watch: {
          value: function(t) {
            this.time = t;
          },
          time: function(t) {
            var e = this.toObject(t);
            (this.hour = e.hour),
              (this.minute = e.minute),
              (this.meridiem = e.meridiem);
          }
        },
        methods: {
          focus: function() {
            this.$refs.hour.focus();
          },
          setHour: function(t) {
            t && !this.minute && (this.minute = 0),
              t || (this.minute = null),
              this.onInput();
          },
          setMinute: function(t) {
            t && !this.hour && (this.hour = 0),
              t || (this.hour = null),
              this.onInput();
          },
          onInput: function() {
            if (null !== this.hour && null !== this.minute) {
              var t = at(this.hour || 0),
                e = at(this.minute || 0),
                n = this.meridiem || "AM",
                i =
                  24 === this.notation
                    ? "".concat(t, ":").concat(e, ":00")
                    : ""
                        .concat(t, ":")
                        .concat(e, ":00 ")
                        .concat(n),
                s = ot()("2000-01-01 " + i);
              this.$emit("input", s.format("HH:mm"));
            } else this.$emit("input", "");
          },
          onInvalid: function(t, e) {
            this.$emit("invalid", t, e);
          },
          options: function(t, e) {
            for (
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                i = [],
                s = t;
              s <= e;
              s += n
            )
              i.push({ value: s, text: at(s) });
            return i;
          },
          reset: function() {
            (this.hour = null), (this.minute = null), (this.meridiem = null);
          },
          round: function(t) {
            return Math.floor(t / this.step) * this.step;
          },
          toObject: function(t) {
            var e = ot()("2001-01-01 " + t + ":00");
            return !1 === e.isValid()
              ? { hour: null, minute: null, meridiem: null }
              : {
                  hour: e.format(24 === this.notation ? "H" : "h"),
                  minute: this.round(e.format("m")),
                  meridiem: e.format("A")
                };
          }
        }
      },
      aa = oa,
      ra = (n("35ad"), Object(m["a"])(aa, ia, sa, !1, null, null, null));
    ra.options.__file = "TimeInput.vue";
    var la = ra.exports,
      ua = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("label", { staticClass: "k-toggle-input" }, [
          n(
            "input",
            t._g(
              {
                ref: "input",
                staticClass: "k-toggle-input-native",
                attrs: { disabled: t.disabled, id: t.id, type: "checkbox" },
                domProps: { checked: t.value }
              },
              t.listeners
            )
          ),
          n("span", {
            staticClass: "k-toggle-input-label",
            domProps: { innerHTML: t._s(t.label) }
          })
        ]);
      },
      ca = [],
      pa = {
        inheritAttrs: !1,
        props: {
          autofocus: Boolean,
          disabled: Boolean,
          id: [Number, String],
          text: {
            type: [Array, String],
            default: function() {
              return ["off", "on"];
            }
          },
          required: Boolean,
          value: Boolean
        },
        data: function() {
          var t = this;
          return {
            listeners: Object(u["a"])({}, this.$listeners, {
              change: function(e) {
                return t.onInput(e.target.checked);
              },
              keydown: this.onEnter
            })
          };
        },
        computed: {
          label: function() {
            return Array.isArray(this.text)
              ? this.value
                ? this.text[1]
                : this.text[0]
              : this.text;
          }
        },
        watch: {
          value: function() {
            this.onInvalid();
          }
        },
        mounted: function() {
          this.onInvalid(), this.$props.autofocus && this.focus();
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          onEnter: function(t) {
            "Enter" === t.key && this.$refs.input.click();
          },
          onInput: function(t) {
            this.$emit("input", t);
          },
          onInvalid: function() {
            this.$emit("invalid", this.$v.$invalid, this.$v);
          },
          select: function() {
            this.$refs.input.focus();
          }
        },
        validations: function() {
          return { value: { required: !this.required || ts["required"] } };
        }
      },
      da = pa,
      fa = (n("3a66"), Object(m["a"])(da, ua, ca, !1, null, null, null));
    fa.options.__file = "ToggleInput.vue";
    var ha,
      ma,
      ga = fa.exports,
      va = {
        extends: Ts,
        props: Object(u["a"])({}, Ts.props, {
          autocomplete: { type: String, default: "url" },
          type: { type: String, default: "url" }
        })
      },
      ba = va,
      ka = Object(m["a"])(ba, ha, ma, !1, null, null, null);
    ka.options.__file = "UrlInput.vue";
    var _a = ka.exports,
      $a = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-checkboxes-field",
              attrs: { counter: t.counterOptions }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      ya = [],
      xa = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, cs.props, {
          counter: { type: Boolean, default: !0 }
        }),
        computed: {
          counterOptions: function() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count:
                  this.value && Array.isArray(this.value)
                    ? this.value.length
                    : 0,
                min: this.min,
                max: this.max
              }
            );
          }
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      wa = xa,
      Sa = Object(m["a"])(wa, $a, ya, !1, null, null, null);
    Sa.options.__file = "CheckboxesField.vue";
    var Oa = Sa.exports,
      Ca = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-date-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: {
                      id: t._uid,
                      type: t.inputType,
                      value: t.date,
                      theme: "field"
                    }
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.listeners
              ),
              [
                n(
                  "template",
                  { slot: "icon" },
                  [
                    n(
                      "k-dropdown",
                      [
                        n("k-button", {
                          staticClass: "k-input-icon-button",
                          attrs: {
                            icon: t.icon,
                            tooltip: t.$t("date.select"),
                            tabindex: "-1"
                          },
                          on: {
                            click: function(e) {
                              t.$refs.dropdown.toggle();
                            }
                          }
                        }),
                        n(
                          "k-dropdown-content",
                          { ref: "dropdown", attrs: { align: "right" } },
                          [
                            n("k-calendar", {
                              attrs: { value: t.date },
                              on: {
                                input: function(e) {
                                  t.onInput(e), t.$refs.dropdown.close();
                                }
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        );
      },
      Ea = [],
      ja = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, ys.props, {
          icon: { type: String, default: "calendar" }
        }),
        data: function() {
          return {
            date: this.value,
            listeners: Object(u["a"])({}, this.$listeners, {
              input: this.onInput
            })
          };
        },
        computed: {
          inputType: function() {
            return !1 === this.time ? "date" : "datetime";
          }
        },
        watch: {
          value: function(t) {
            this.date = t;
          }
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          },
          onInput: function(t) {
            (this.date = t), this.$emit("input", t);
          }
        }
      },
      Ta = ja,
      Ia = Object(m["a"])(Ta, Ca, Ea, !1, null, null, null);
    Ia.options.__file = "DateField.vue";
    var La = Ia.exports,
      Aa = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-email-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              ),
              [
                t.link
                  ? n("k-button", {
                      staticClass: "k-input-icon-button",
                      attrs: {
                        slot: "icon",
                        icon: t.icon,
                        link: "mailto:" + t.value,
                        tooltip: t.$t("open"),
                        tabindex: "-1",
                        target: "_blank"
                      },
                      slot: "icon"
                    })
                  : t._e()
              ],
              1
            )
          ],
          1
        );
      },
      qa = [],
      Na = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, qs.props, {
          link: { type: Boolean, default: !0 },
          icon: { type: String, default: "email" }
        }),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Pa = Na,
      Da = Object(m["a"])(Pa, Aa, qa, !1, null, null, null);
    Da.options.__file = "EmailField.vue";
    var Ba = Da.exports,
      Ra = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b({ staticClass: "k-files-field" }, "k-field", t.$props, !1),
          [
            t.more
              ? n(
                  "k-button",
                  {
                    attrs: { slot: "options", icon: "add" },
                    on: { click: t.open },
                    slot: "options"
                  },
                  [t._v("\n    " + t._s(t.$t("select")) + "\n  ")]
                )
              : t._e(),
            t.selected.length
              ? [
                  n(
                    "k-draggable",
                    {
                      attrs: {
                        element: t.elements.list,
                        list: t.selected,
                        "data-size": t.size,
                        handle: !0
                      },
                      on: { end: t.onInput }
                    },
                    t._l(t.selected, function(e, i) {
                      return n(
                        t.elements.item,
                        {
                          key: e.filename,
                          tag: "component",
                          attrs: {
                            sortable: t.selected.length > 1,
                            text: e.text,
                            link: e.link,
                            info: e.info,
                            image: e.image,
                            icon: e.icon
                          }
                        },
                        [
                          n("k-button", {
                            attrs: {
                              slot: "options",
                              tooltip: t.$t("remove"),
                              icon: "remove"
                            },
                            on: {
                              click: function(e) {
                                t.remove(i);
                              }
                            },
                            slot: "options"
                          })
                        ],
                        1
                      );
                    }),
                    1
                  )
                ]
              : n(
                  "k-empty",
                  {
                    attrs: { layout: t.layout, icon: "image" },
                    on: { click: t.open }
                  },
                  [
                    t._v(
                      "\n    " +
                        t._s(t.empty || t.$t("field.files.empty")) +
                        "\n  "
                    )
                  ]
                ),
            n("k-files-dialog", { ref: "selector", on: { submit: t.select } })
          ],
          2
        );
      },
      Fa = [],
      Ma = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, {
          empty: String,
          layout: String,
          max: Number,
          multiple: Boolean,
          parent: String,
          size: String,
          value: {
            type: Array,
            default: function() {
              return [];
            }
          }
        }),
        data: function() {
          return { selected: this.value };
        },
        computed: {
          elements: function() {
            var t = {
              cards: { list: "k-cards", item: "k-card" },
              list: { list: "k-list", item: "k-list-item" }
            };
            return t[this.layout] ? t[this.layout] : t["list"];
          },
          more: function() {
            return !this.max || this.max > this.selected.length;
          }
        },
        watch: {
          value: function(t) {
            this.selected = t;
          }
        },
        methods: {
          open: function() {
            var t = this;
            return this.$api
              .get(this.endpoints.field)
              .then(function(e) {
                var n = t.selected.map(function(t) {
                  return t.id;
                });
                (e = e.map(function(e) {
                  return (
                    (e.selected = -1 !== n.indexOf(e.id)),
                    (e.thumb = t.image || {}),
                    (e.thumb.url = !1),
                    e.thumbs &&
                      e.thumbs.tiny &&
                      (e.thumb.url = e.thumbs.medium),
                    e
                  );
                })),
                  t.$refs.selector.open(e, {
                    max: t.max,
                    multiple: t.multiple
                  });
              })
              .catch(function() {
                t.$store.dispatch(
                  "notification/error",
                  "The files query does not seem to be correct"
                );
              });
          },
          remove: function(t) {
            this.selected.splice(t, 1), this.onInput();
          },
          focus: function() {},
          onInput: function() {
            this.$emit("input", this.selected);
          },
          select: function(t) {
            (this.selected = t), this.onInput();
          }
        }
      },
      za = Ma,
      Ua = Object(m["a"])(za, Ra, Fa, !1, null, null, null);
    Ua.options.__file = "FilesField.vue";
    var Ha = Ua.exports,
      Va = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-headline",
          {
            staticClass: "k-headline-field",
            attrs: { "data-numbered": t.numbered, size: "large" }
          },
          [t._v("\n  " + t._s(t.label) + "\n")]
        );
      },
      Ka = [],
      Ga = { props: { label: String, numbered: Boolean } },
      Ya = Ga,
      Wa = (n("7027"), Object(m["a"])(Ya, Va, Ka, !1, null, null, null));
    Wa.options.__file = "HeadlineField.vue";
    var Ja = Wa.exports,
      Xa = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-field k-info-field" },
          [
            n("k-headline", [t._v(t._s(t.label))]),
            n(
              "k-box",
              { attrs: { theme: t.theme } },
              [n("k-text", { domProps: { innerHTML: t._s(t.text) } })],
              1
            )
          ],
          1
        );
      },
      Qa = [],
      Za = {
        props: {
          label: String,
          text: String,
          theme: { type: String, default: "info" }
        }
      },
      tr = Za,
      er = (n("e104"), Object(m["a"])(tr, Xa, Qa, !1, null, null, null));
    er.options.__file = "InfoField.vue";
    var nr = er.exports,
      ir = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("hr", { staticClass: "k-line-field" });
      },
      sr = [],
      or = (n("4e2b"), {}),
      ar = Object(m["a"])(or, ir, sr, !1, null, null, null);
    ar.options.__file = "LineField.vue";
    var rr = ar.exports,
      lr = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-multiselect-field",
              attrs: { input: t._uid, counter: t.counterOptions },
              on: { blur: t.blur }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      ur = [],
      cr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, Fs.props, {
          counter: { type: Boolean, default: !0 },
          icon: { type: String, default: "angle-down" }
        }),
        computed: {
          counterOptions: function() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count:
                  this.value && Array.isArray(this.value)
                    ? this.value.length
                    : 0,
                min: this.min,
                max: this.max
              }
            );
          }
        },
        methods: {
          blur: function(t) {
            this.$refs.input.blur(t);
          },
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      pr = cr,
      dr = Object(m["a"])(pr, lr, ur, !1, null, null, null);
    dr.options.__file = "MultiselectField.vue";
    var fr = dr.exports,
      hr = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-number-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      mr = [],
      gr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, Ys.props),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      vr = gr,
      br = Object(m["a"])(vr, hr, mr, !1, null, null, null);
    br.options.__file = "NumberField.vue";
    var kr = br.exports,
      _r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b({ staticClass: "k-pages-field" }, "k-field", t.$props, !1),
          [
            t.more
              ? n(
                  "k-button",
                  {
                    attrs: { slot: "options", icon: "add" },
                    on: { click: t.open },
                    slot: "options"
                  },
                  [t._v("\n    " + t._s(t.$t("select")) + "\n  ")]
                )
              : t._e(),
            t.selected.length
              ? [
                  n(
                    "k-draggable",
                    {
                      attrs: {
                        element: t.elements.list,
                        handle: !0,
                        list: t.selected,
                        "data-size": t.size
                      },
                      on: { end: t.onInput }
                    },
                    t._l(t.selected, function(e, i) {
                      return n(
                        t.elements.item,
                        {
                          key: e.id,
                          tag: "component",
                          attrs: {
                            sortable: t.selected.length > 1,
                            text: e.text,
                            info: e.info,
                            link: e.link,
                            icon: e.icon,
                            image: e.image
                          }
                        },
                        [
                          n("k-button", {
                            attrs: { slot: "options", icon: "remove" },
                            on: {
                              click: function(e) {
                                t.remove(i);
                              }
                            },
                            slot: "options"
                          })
                        ],
                        1
                      );
                    }),
                    1
                  )
                ]
              : n(
                  "k-empty",
                  {
                    attrs: { layout: t.layout, icon: "page" },
                    on: { click: t.open }
                  },
                  [
                    t._v(
                      "\n    " +
                        t._s(t.empty || t.$t("field.pages.empty")) +
                        "\n  "
                    )
                  ]
                ),
            n("k-pages-dialog", { ref: "selector", on: { submit: t.select } })
          ],
          2
        );
      },
      $r = [],
      yr = function(t) {
        if (void 0 !== t) return JSON.parse(JSON.stringify(t));
      },
      xr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, {
          empty: String,
          layout: String,
          max: Number,
          multiple: Boolean,
          size: String,
          value: {
            type: Array,
            default: function() {
              return [];
            }
          }
        }),
        data: function() {
          return { selected: this.value };
        },
        computed: {
          elements: function() {
            var t = {
              cards: { list: "k-cards", item: "k-card" },
              list: { list: "k-list", item: "k-list-item" }
            };
            return t[this.layout] ? t[this.layout] : t["list"];
          },
          more: function() {
            return !this.max || this.max > this.selected.length;
          }
        },
        watch: {
          value: function(t) {
            this.selected = t;
          }
        },
        methods: {
          open: function() {
            this.$refs.selector.open({
              endpoint: this.endpoints.field,
              max: this.max,
              multiple: this.multiple,
              selected: yr(this.selected)
            });
          },
          remove: function(t) {
            this.selected.splice(t, 1), this.onInput();
          },
          focus: function() {},
          onInput: function() {
            this.$emit("input", this.selected);
          },
          select: function(t) {
            (this.selected = t), this.onInput();
          }
        }
      },
      wr = xr,
      Sr = Object(m["a"])(wr, _r, $r, !1, null, null, null);
    Sr.options.__file = "PagesField.vue";
    var Or = Sr.exports,
      Cr = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-password-field",
              attrs: { input: t._uid, counter: t.counterOptions }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      Er = [],
      jr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, Qs.props, {
          counter: { type: Boolean, default: !0 },
          minlength: { type: Number, default: 8 },
          icon: { type: String, default: "key" }
        }),
        computed: {
          counterOptions: function() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count: this.value ? String(this.value).length : 0,
                min: this.minlength,
                max: this.maxlength
              }
            );
          }
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Tr = jr,
      Ir = Object(m["a"])(Tr, Cr, Er, !1, null, null, null);
    Ir.options.__file = "PasswordField.vue";
    var Lr = Ir.exports,
      Ar = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b({ staticClass: "k-radio-field" }, "k-field", t.$props, !1),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      qr = [],
      Nr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, so.props),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Pr = Nr,
      Dr = Object(m["a"])(Pr, Ar, qr, !1, null, null, null);
    Dr.options.__file = "RadioField.vue";
    var Br = Dr.exports,
      Rr = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-range-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      Fr = [],
      Mr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, co.props),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      zr = Mr,
      Ur = Object(m["a"])(zr, Rr, Fr, !1, null, null, null);
    Ur.options.__file = "RangeField.vue";
    var Hr = Ur.exports,
      Vr = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-select-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      Kr = [],
      Gr = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, vo.props, {
          icon: { type: String, default: "angle-down" }
        }),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Yr = Gr,
      Wr = Object(m["a"])(Yr, Vr, Kr, !1, null, null, null);
    Wr.options.__file = "SelectField.vue";
    var Jr = Wr.exports,
      Xr = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-structure-field",
              nativeOn: {
                click: function(t) {
                  t.stopPropagation();
                }
              }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "template",
              { slot: "options" },
              [
                t.more && null === t.currentIndex
                  ? n(
                      "k-button",
                      {
                        ref: "add",
                        attrs: { id: t._uid, icon: "add" },
                        on: { click: t.add }
                      },
                      [t._v("\n      " + t._s(t.$t("add")) + "\n    ")]
                    )
                  : t._e()
              ],
              1
            ),
            null !== t.currentIndex
              ? [
                  n("div", {
                    staticClass: "k-structure-backdrop",
                    on: { click: t.escape }
                  }),
                  n(
                    "section",
                    { staticClass: "k-structure-form" },
                    [
                      n("k-form", {
                        ref: "form",
                        staticClass: "k-structure-form-fields",
                        attrs: { fields: t.formFields },
                        on: { input: t.onInput, submit: t.submit },
                        model: {
                          value: t.currentModel,
                          callback: function(e) {
                            t.currentModel = e;
                          },
                          expression: "currentModel"
                        }
                      }),
                      n(
                        "footer",
                        { staticClass: "k-structure-form-buttons" },
                        [
                          n(
                            "k-button",
                            {
                              staticClass: "k-structure-form-cancel-button",
                              attrs: { icon: "cancel" },
                              on: { click: t.close }
                            },
                            [t._v(t._s(t.$t("cancel")))]
                          ),
                          "new" !== t.currentIndex
                            ? n("k-pagination", {
                                attrs: {
                                  dropdown: !1,
                                  total: t.items.length,
                                  limit: 1,
                                  page: t.currentIndex + 1,
                                  details: !0,
                                  validate: t.beforePaginate
                                },
                                on: { paginate: t.paginate }
                              })
                            : t._e(),
                          n(
                            "k-button",
                            {
                              staticClass: "k-structure-form-submit-button",
                              attrs: { icon: "check" },
                              on: { click: t.submit }
                            },
                            [
                              t._v(
                                t._s(
                                  t.$t(
                                    "new" !== t.currentIndex ? "confirm" : "add"
                                  )
                                )
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              : 0 === t.items.length
                ? n(
                    "k-empty",
                    { attrs: { icon: "list-bullet" }, on: { click: t.add } },
                    [
                      t._v(
                        "\n    " + t._s(t.$t("field.structure.empty")) + "\n  "
                      )
                    ]
                  )
                : [
                    n(
                      "table",
                      {
                        staticClass: "k-structure-table",
                        attrs: { "data-sortable": t.isSortable }
                      },
                      [
                        n("thead", [
                          n(
                            "tr",
                            [
                              n(
                                "th",
                                { staticClass: "k-structure-table-index" },
                                [t._v("#")]
                              ),
                              t._l(t.columns, function(e, i) {
                                return n(
                                  "th",
                                  {
                                    key: i + "-header",
                                    staticClass: "k-structure-table-column",
                                    attrs: {
                                      "data-width": e.width,
                                      "data-align": e.align
                                    }
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(e.label) +
                                        "\n          "
                                    )
                                  ]
                                );
                              }),
                              n("th")
                            ],
                            2
                          )
                        ]),
                        n(
                          "k-draggable",
                          {
                            attrs: {
                              list: t.items,
                              "data-disabled": t.disabled,
                              options: t.dragOptions,
                              handle: !0,
                              element: "tbody"
                            },
                            on: { end: t.onInput }
                          },
                          t._l(t.paginatedItems, function(e, i) {
                            return n(
                              "tr",
                              {
                                key: i,
                                on: {
                                  click: function(t) {
                                    t.stopPropagation();
                                  }
                                }
                              },
                              [
                                n(
                                  "td",
                                  { staticClass: "k-structure-table-index" },
                                  [
                                    t.isSortable ? n("k-sort-handle") : t._e(),
                                    n(
                                      "span",
                                      {
                                        staticClass:
                                          "k-structure-table-index-number"
                                      },
                                      [t._v(t._s(t.indexOf(i)))]
                                    )
                                  ],
                                  1
                                ),
                                t._l(t.columns, function(s, o) {
                                  return n(
                                    "td",
                                    {
                                      key: o,
                                      staticClass: "k-structure-table-column",
                                      attrs: {
                                        title: s.label,
                                        "data-width": s.width,
                                        "data-align": s.align
                                      },
                                      on: {
                                        click: function(e) {
                                          t.jump(i, o);
                                        }
                                      }
                                    },
                                    [
                                      !1 === t.columnIsEmpty(e[o])
                                        ? [
                                            t.previewExists(s.type)
                                              ? n(
                                                  "k-" +
                                                    s.type +
                                                    "-field-preview",
                                                  {
                                                    tag: "component",
                                                    attrs: {
                                                      value: e[o],
                                                      column: s,
                                                      field: t.fields[o]
                                                    }
                                                  }
                                                )
                                              : [
                                                  n(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "k-structure-table-text"
                                                    },
                                                    [
                                                      t._v(
                                                        "\n                  " +
                                                          t._s(s.before) +
                                                          " " +
                                                          t._s(
                                                            t.displayText(
                                                              t.fields[o],
                                                              e[o]
                                                            ) || "–"
                                                          ) +
                                                          " " +
                                                          t._s(s.after) +
                                                          "\n                "
                                                      )
                                                    ]
                                                  )
                                                ]
                                          ]
                                        : t._e()
                                    ],
                                    2
                                  );
                                }),
                                n(
                                  "td",
                                  { staticClass: "k-structure-table-option" },
                                  [
                                    n("k-button", {
                                      attrs: {
                                        tooltip: t.$t("remove"),
                                        icon: "remove"
                                      },
                                      on: {
                                        click: function(e) {
                                          t.confirmRemove(i);
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              2
                            );
                          }),
                          0
                        )
                      ],
                      1
                    ),
                    t.limit
                      ? n(
                          "k-pagination",
                          t._b(
                            { on: { paginate: t.paginateItems } },
                            "k-pagination",
                            t.pagination,
                            !1
                          )
                        )
                      : t._e(),
                    t.disabled
                      ? t._e()
                      : n(
                          "k-dialog",
                          {
                            ref: "remove",
                            attrs: {
                              button: t.$t("delete"),
                              theme: "negative"
                            },
                            on: { submit: t.remove }
                          },
                          [
                            n("k-text", [
                              t._v(t._s(t.$t("field.structure.delete.confirm")))
                            ])
                          ],
                          1
                        )
                  ]
          ],
          2
        );
      },
      Qr = [],
      Zr = (n("8615"),
      function(t) {
        t = t || {};
        var e = t.desc ? -1 : 1,
          n = -e,
          i = /^0/,
          s = /\s+/g,
          o = /^\s+|\s+$/g,
          a = /[^\x00-\x80]/,
          r = /^0x[0-9a-f]+$/i,
          l = /(0x[\da-fA-F]+|(^[\+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|\d+)/g,
          u = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
          c = t.insensitive
            ? function(t) {
                return p("" + t).replace(o, "");
              }
            : function(t) {
                return ("" + t).replace(o, "");
              };
        function p(t) {
          return t.toLocaleLowerCase ? t.toLocaleLowerCase() : t.toLowerCase();
        }
        function d(t) {
          return t
            .replace(l, "\0$1\0")
            .replace(/\0$/, "")
            .replace(/^\0/, "")
            .split("\0");
        }
        function f(t, e) {
          return (
            ((!t.match(i) || 1 === e) && parseFloat(t)) ||
            t.replace(s, " ").replace(o, "") ||
            0
          );
        }
        return function(t, i) {
          var s = c(t),
            o = c(i);
          if (!s && !o) return 0;
          if (!s && o) return n;
          if (s && !o) return e;
          var l = d(s),
            p = d(o),
            h = parseInt(s.match(r), 16) || (1 !== l.length && Date.parse(s)),
            m =
              parseInt(o.match(r), 16) ||
              (h && o.match(u) && Date.parse(o)) ||
              null;
          if (m) {
            if (h < m) return n;
            if (h > m) return e;
          }
          for (
            var g = l.length, v = p.length, b = 0, k = Math.max(g, v);
            b < k;
            b++
          ) {
            var _ = f(l[b] || "", g),
              $ = f(p[b] || "", v);
            if (isNaN(_) !== isNaN($)) return isNaN(_) ? e : n;
            if (a.test(_ + $) && _.localeCompare) {
              var y = _.localeCompare($);
              if (y > 0) return e;
              if (y < 0) return n;
              if (b === k - 1) return 0;
            } else {
              if (_ < $) return n;
              if (_ > $) return e;
            }
          }
          return 0;
        };
      });
    Array.prototype.sortBy = function(t) {
      var e = Zr(),
        n = t.split(" "),
        i = n[0],
        s = n[1] || "asc";
      return this.sort(function(t, n) {
        var o = String(t[i]).toLowerCase(),
          a = String(n[i]).toLowerCase();
        return "desc" === s ? e(a, o) : e(o, a);
      });
    };
    var tl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, {
          columns: Object,
          fields: Object,
          limit: Number,
          max: Number,
          min: Number,
          sortable: { type: Boolean, default: !0 },
          sortBy: String,
          value: {
            type: Array,
            default: function() {
              return [];
            }
          }
        }),
        data: function() {
          return {
            items: this.makeItems(this.value),
            currentIndex: null,
            currentModel: null,
            trash: null,
            page: 1
          };
        },
        computed: {
          dragOptions: function() {
            return {
              disabled: !this.isSortable,
              fallbackClass: "k-sortable-row-fallback"
            };
          },
          formFields: function() {
            var t = this,
              e = {};
            return (
              Object.keys(this.fields).forEach(function(n) {
                var i = t.fields[n];
                (i.section = t.name),
                  (i.endpoints = {
                    field: t.endpoints.field + "+" + n,
                    section: t.endpoints.section,
                    model: t.endpoints.model
                  }),
                  (e[n] = i);
              }),
              e
            );
          },
          more: function() {
            return (
              !0 !== this.disabled &&
              !(this.max && this.items.length >= this.max)
            );
          },
          isSortable: function() {
            return (
              !this.sortBy &&
              (!this.limit &&
                (!0 !== this.disabled &&
                  (!(this.items.length <= 1) && !1 !== this.sortable)))
            );
          },
          pagination: function() {
            return {
              page: this.page,
              limit: this.limit,
              total: this.items.length,
              align: "center",
              details: !0
            };
          },
          paginatedItems: function() {
            if (!this.limit) return this.items;
            var t = this.page - 1,
              e = t * this.limit;
            return this.items.slice(e, e + this.limit);
          }
        },
        watch: {
          value: function(t) {
            t != this.items && (this.items = this.makeItems(t));
          }
        },
        methods: {
          add: function() {
            var t = this;
            if (!0 === this.disabled) return !1;
            if (null !== this.currentIndex) return this.escape(), !1;
            var e = {};
            Object.keys(this.fields).forEach(function(n) {
              var i = t.fields[n];
              i.default && (e[n] = i.default);
            }),
              (this.currentIndex = "new"),
              (this.currentModel = e),
              this.createForm();
          },
          close: function() {
            (this.currentIndex = null),
              (this.currentModel = null),
              this.$events.$off("keydown.esc", this.escape),
              this.$events.$off("keydown.cmd.s", this.submit),
              this.$store.dispatch("form/unlock");
          },
          columnIsEmpty: function(t) {
            return (
              void 0 === t ||
              null === t ||
              "" === t ||
              (("object" === Object(K["a"])(t) &&
                0 === Object.keys(t).length &&
                t.constructor === Object) ||
                (void 0 !== t.length && 0 === t.length))
            );
          },
          confirmRemove: function(t) {
            this.close(), (this.trash = t), this.$refs.remove.open();
          },
          createForm: function(t) {
            var e = this;
            this.$events.$on("keydown.esc", this.escape),
              this.$events.$on("keydown.cmd.s", this.submit),
              this.$store.dispatch("form/lock"),
              this.$nextTick(function() {
                e.$refs.form && e.$refs.form.focus(t);
              });
          },
          displayText: function(t, e) {
            switch (t.type) {
              case "user":
                return e.email;
              case "date":
                var n = ot()(e);
                return n.isValid() ? n.format("YYYY-MM-DD") : "";
              case "tags":
                return e
                  .map(function(t) {
                    return t.text;
                  })
                  .join(", ");
              case "checkboxes":
                return e
                  .map(function(e) {
                    var n = e;
                    return (
                      t.options.forEach(function(t) {
                        t.value === e && (n = t.text);
                      }),
                      n
                    );
                  })
                  .join(", ");
              case "select":
                var i = t.options.filter(function(t) {
                  return t.value === e;
                })[0];
                return i ? i.text : null;
            }
            return "object" === Object(K["a"])(e) && null !== e ? "…" : e;
          },
          escape: function() {
            var t = this;
            if ("new" === this.currentIndex) {
              var e = Object.values(this.currentModel),
                n = !0;
              if (
                (e.forEach(function(e) {
                  !1 === t.columnIsEmpty(e) && (n = !1);
                }),
                !0 === n)
              )
                return void this.close();
            }
            this.submit();
          },
          focus: function() {
            this.$refs.add.focus();
          },
          indexOf: function(t) {
            return this.limit ? (this.page - 1) * this.limit + t + 1 : t + 1;
          },
          isActive: function(t) {
            return this.currentIndex === t;
          },
          jump: function(t, e) {
            this.open(t, e);
          },
          makeItems: function(t) {
            return !1 === Array.isArray(t) ? [] : this.sort(t);
          },
          onInput: function() {
            this.$emit("input", this.items);
          },
          open: function(t, e) {
            (this.currentIndex = t),
              (this.currentModel = yr(this.items[t])),
              this.createForm(e);
          },
          beforePaginate: function() {
            return this.save(this.currentModel);
          },
          paginate: function(t) {
            this.open(t.offset);
          },
          paginateItems: function(t) {
            this.page = t.page;
          },
          previewExists: function(t) {
            return (
              void 0 !==
                i["a"].options.components["k-" + t + "-field-preview"] ||
              void 0 !== this.$options.components["k-" + t + "-field-preview"]
            );
          },
          remove: function() {
            if (null === this.trash) return !1;
            this.items.splice(this.trash, 1),
              (this.trash = null),
              this.$refs.remove.close(),
              this.onInput(),
              0 === this.paginatedItems.length && this.page > 1 && this.page--,
              (this.items = this.sort(this.items));
          },
          sort: function(t) {
            return this.sortBy ? t.sortBy(this.sortBy) : t;
          },
          save: function() {
            var t = this;
            return null !== this.currentIndex && void 0 !== this.currentIndex
              ? this.validate(this.currentModel)
                  .then(function() {
                    return (
                      "new" === t.currentIndex
                        ? t.items.push(t.currentModel)
                        : (t.items[t.currentIndex] = t.currentModel),
                      (t.items = t.sort(t.items)),
                      t.onInput(),
                      !0
                    );
                  })
                  .catch(function(e) {
                    throw (t.$store.dispatch("notification/error", {
                      message: t.$t("error.form.incomplete"),
                      details: e
                    }),
                    e);
                  })
              : Promise.resolve();
          },
          submit: function() {
            this.save()
              .then(this.close)
              .catch(function() {});
          },
          validate: function(t) {
            return this.$api
              .post(this.endpoints.field + "/validate", t)
              .then(function(t) {
                if (t.length > 0) throw t;
                return !0;
              });
          }
        }
      },
      el = tl,
      nl = (n("68b5"), Object(m["a"])(el, Xr, Qr, !1, null, null, null));
    nl.options.__file = "StructureField.vue";
    var il = nl.exports,
      sl = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-tags-field",
              attrs: { input: t._uid, counter: t.counterOptions }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      ol = [],
      al = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, So.props, {
          counter: { type: Boolean, default: !0 }
        }),
        computed: {
          counterOptions: function() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count:
                  this.value && Array.isArray(this.value)
                    ? this.value.length
                    : 0,
                min: this.min,
                max: this.max
              }
            );
          }
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      rl = al,
      ll = Object(m["a"])(rl, sl, ol, !1, null, null, null);
    ll.options.__file = "TagsField.vue";
    var ul = ll.exports,
      cl = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-tel-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      pl = [],
      dl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, jo.props, {
          icon: { type: String, default: "phone" }
        }),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      fl = dl,
      hl = Object(m["a"])(fl, cl, pl, !1, null, null, null);
    hl.options.__file = "TelField.vue";
    var ml = hl.exports,
      gl = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-text-field",
              attrs: { input: t._uid, counter: t.counterOptions }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      vl = [],
      bl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, Ts.props, {
          counter: { type: Boolean, default: !0 }
        }),
        computed: {
          counterOptions: function() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count: this.value ? String(this.value).length : 0,
                min: this.minlength,
                max: this.maxlength
              }
            );
          }
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      kl = bl,
      _l = (n("a89c"), Object(m["a"])(kl, gl, vl, !1, null, null, null));
    _l.options.__file = "TextField.vue";
    var $l = _l.exports,
      yl = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            {
              staticClass: "k-textarea-field",
              attrs: { input: t._uid, counter: t.counterOptions }
            },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  {
                    ref: "input",
                    attrs: { id: t._uid, type: "textarea", theme: "field" }
                  },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      xl = [],
      wl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, na.props, {
          counter: { type: Boolean, default: !0 }
        }),
        computed: {
          counterOptions: function() {
            return (
              null !== this.value &&
              !this.disabled &&
              !1 !== this.counter && {
                count: this.value ? this.value.length : 0,
                min: this.minlength,
                max: this.maxlength
              }
            );
          }
        },
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Sl = wl,
      Ol = Object(m["a"])(Sl, yl, xl, !1, null, null, null);
    Ol.options.__file = "TextareaField.vue";
    var Cl = Ol.exports,
      El = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-time-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      jl = [],
      Tl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, la.props, {
          icon: { type: String, default: "clock" }
        }),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Il = Tl,
      Ll = Object(m["a"])(Il, El, jl, !1, null, null, null);
    Ll.options.__file = "TimeField.vue";
    var Al = Ll.exports,
      ql = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-toggle-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              )
            )
          ],
          1
        );
      },
      Nl = [],
      Pl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, ga.props),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Dl = Pl,
      Bl = Object(m["a"])(Dl, ql, Nl, !1, null, null, null);
    Bl.options.__file = "ToggleField.vue";
    var Rl = Bl.exports,
      Fl = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b(
            { staticClass: "k-url-field", attrs: { input: t._uid } },
            "k-field",
            t.$props,
            !1
          ),
          [
            n(
              "k-input",
              t._g(
                t._b(
                  { ref: "input", attrs: { id: t._uid, theme: "field" } },
                  "k-input",
                  t.$props,
                  !1
                ),
                t.$listeners
              ),
              [
                t.link
                  ? n("k-button", {
                      staticClass: "k-input-icon-button",
                      attrs: {
                        slot: "icon",
                        icon: t.icon,
                        link: t.value,
                        tooltip: t.$t("open"),
                        tabindex: "-1",
                        target: "_blank"
                      },
                      slot: "icon"
                    })
                  : t._e()
              ],
              1
            )
          ],
          1
        );
      },
      Ml = [],
      zl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, Ui.props, _a.props, {
          link: { type: Boolean, default: !0 },
          icon: { type: String, default: "url" }
        }),
        methods: {
          focus: function() {
            this.$refs.input.focus();
          }
        }
      },
      Ul = zl,
      Hl = Object(m["a"])(Ul, Fl, Ml, !1, null, null, null);
    Hl.options.__file = "UrlField.vue";
    var Vl = Hl.exports,
      Kl = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-field",
          t._b({ staticClass: "k-users-field" }, "k-field", t.$props, !1),
          [
            t.more
              ? n(
                  "k-button",
                  {
                    attrs: { slot: "options", icon: "add" },
                    on: { click: t.open },
                    slot: "options"
                  },
                  [t._v("\n    " + t._s(t.$t("select")) + "\n  ")]
                )
              : t._e(),
            t.selected.length
              ? [
                  n(
                    "k-draggable",
                    {
                      attrs: {
                        element: t.elements.list,
                        list: t.selected,
                        handle: !0
                      },
                      on: { end: t.onInput }
                    },
                    t._l(t.selected, function(e, i) {
                      return n(
                        t.elements.item,
                        {
                          key: e.email,
                          tag: "component",
                          attrs: {
                            sortable: !0,
                            text: e.username,
                            link: t.$api.users.link(e.id),
                            image: e.avatar
                              ? {
                                  url: e.avatar.url,
                                  back: "pattern",
                                  cover: !0
                                }
                              : null,
                            icon: { type: "user", back: "black" }
                          }
                        },
                        [
                          n("k-button", {
                            attrs: { slot: "options", icon: "remove" },
                            on: {
                              click: function(e) {
                                t.remove(i);
                              }
                            },
                            slot: "options"
                          })
                        ],
                        1
                      );
                    }),
                    1
                  )
                ]
              : n(
                  "k-empty",
                  { attrs: { icon: "users" }, on: { click: t.open } },
                  [t._v("\n    " + t._s(t.$t("field.users.empty")) + "\n  ")]
                ),
            n("k-users-dialog", { ref: "selector", on: { submit: t.select } })
          ],
          2
        );
      },
      Gl = [],
      Yl = {
        inheritAttrs: !1,
        props: Object(u["a"])({}, Ii.props, {
          max: Number,
          multiple: Boolean,
          value: {
            type: Array,
            default: function() {
              return [];
            }
          }
        }),
        data: function() {
          return { layout: "list", selected: this.value };
        },
        computed: {
          elements: function() {
            return { list: "k-list", item: "k-list-item" };
          },
          more: function() {
            return !this.max || this.max > this.selected.length;
          }
        },
        watch: {
          value: function(t) {
            this.selected = t;
          }
        },
        methods: {
          open: function() {
            this.$refs.selector.open({
              max: this.max,
              multiple: this.multiple,
              selected: this.selected.map(function(t) {
                return t.email;
              })
            });
          },
          remove: function(t) {
            this.selected.splice(t, 1), this.onInput();
          },
          focus: function() {},
          onInput: function() {
            this.$emit("input", this.selected);
          },
          select: function(t) {
            (this.selected = t), this.onInput();
          }
        }
      },
      Wl = Yl,
      Jl = Object(m["a"])(Wl, Kl, Gl, !1, null, null, null);
    Jl.options.__file = "UsersField.vue";
    var Xl = Jl.exports,
      Ql = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.value
          ? n(
              "ul",
              { staticClass: "k-files-field-preview" },
              t._l(t.value, function(t) {
                return n(
                  "li",
                  { key: t.url },
                  [
                    n(
                      "k-link",
                      {
                        attrs: { title: t.filename, to: t.link },
                        nativeOn: {
                          click: function(t) {
                            t.stopPropagation();
                          }
                        }
                      },
                      [
                        n("k-image", { attrs: { src: t.url, back: "pattern" } })
                      ],
                      1
                    )
                  ],
                  1
                );
              }),
              0
            )
          : t._e();
      },
      Zl = [],
      tu = { props: { value: Array } },
      eu = tu,
      nu = (n("3e93"), Object(m["a"])(eu, Ql, Zl, !1, null, null, null));
    nu.options.__file = "FilesFieldPreview.vue";
    var iu = nu.exports,
      su = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "p",
          { staticClass: "k-url-field-preview" },
          [
            n(
              "k-link",
              {
                attrs: { to: t.link, target: "_blank" },
                nativeOn: {
                  click: function(t) {
                    t.stopPropagation();
                  }
                }
              },
              [t._v(t._s(t.value))]
            )
          ],
          1
        );
      },
      ou = [],
      au = {
        props: { column: Object, value: String },
        computed: {
          link: function() {
            return this.value;
          }
        }
      },
      ru = au,
      lu = (n("b61e"), Object(m["a"])(ru, su, ou, !1, null, null, null));
    lu.options.__file = "UrlFieldPreview.vue";
    var uu,
      cu,
      pu = lu.exports,
      du = {
        extends: pu,
        computed: {
          link: function() {
            return "mailto:" + this.value;
          }
        }
      },
      fu = du,
      hu = Object(m["a"])(fu, uu, cu, !1, null, null, null);
    hu.options.__file = "EmailFieldPreview.vue";
    var mu = hu.exports,
      gu = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.value
          ? n(
              "ul",
              { staticClass: "k-pages-field-preview" },
              t._l(t.value, function(e) {
                return n("li", { key: e.id }, [
                  n(
                    "figure",
                    [
                      n(
                        "k-link",
                        {
                          attrs: { title: e.id, to: t.$api.pages.link(e.id) },
                          nativeOn: {
                            click: function(t) {
                              t.stopPropagation();
                            }
                          }
                        },
                        [
                          n("k-icon", {
                            staticClass: "k-pages-field-preview-image",
                            attrs: { type: "page", back: "pattern" }
                          }),
                          n("figcaption", [
                            t._v("\n          " + t._s(e.title) + "\n        ")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]);
              }),
              0
            )
          : t._e();
      },
      vu = [],
      bu = { props: { value: Array } },
      ku = bu,
      _u = (n("0eae"), Object(m["a"])(ku, gu, vu, !1, null, null, null));
    _u.options.__file = "PagesFieldPreview.vue";
    var $u = _u.exports,
      yu = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.value
          ? n(
              "ul",
              { staticClass: "k-users-field-preview" },
              t._l(t.value, function(e) {
                return n("li", { key: e.email }, [
                  n(
                    "figure",
                    [
                      n(
                        "k-link",
                        {
                          attrs: {
                            title: e.email,
                            to: t.$api.users.link(e.id)
                          },
                          nativeOn: {
                            click: function(t) {
                              t.stopPropagation();
                            }
                          }
                        },
                        [
                          e.avatar
                            ? n("k-image", {
                                staticClass: "k-users-field-preview-avatar",
                                attrs: { src: e.avatar.url, back: "pattern" }
                              })
                            : n("k-icon", {
                                staticClass: "k-users-field-preview-avatar",
                                attrs: { type: "user", back: "pattern" }
                              }),
                          n("figcaption", [
                            t._v(
                              "\n          " + t._s(e.username) + "\n        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]);
              }),
              0
            )
          : t._e();
      },
      xu = [],
      wu = { props: { value: Array } },
      Su = wu,
      Ou = (n("77f7"), Object(m["a"])(Su, yu, xu, !1, null, null, null));
    Ou.options.__file = "UsersFieldPreview.vue";
    var Cu = Ou.exports;
    i["a"].use(T.a), i["a"].use(L);
    var Eu = {
      install: function(t) {
        t.filter("t", function(t) {
          return t;
        }),
          t.directive("tab", {
            inserted: function(t) {
              t.addEventListener("keyup", function(e) {
                9 === e.keyCode && (t.dataset.tabbed = !0);
              }),
                t.addEventListener("blur", function() {
                  delete t.dataset.tabbed;
                });
            }
          }),
          t.component("k-bar", D),
          t.component("k-box", U),
          t.component("k-button", J),
          t.component("k-button-group", et),
          t.component("k-calendar", ct),
          t.component("k-card", vt),
          t.component("k-cards", xt),
          t.component("k-collection", jt),
          t.component("k-column", Nt),
          t.component("k-counter", Mt),
          t.component("k-dialog", Gt),
          t.component("k-draggable", ee),
          t.component("k-dropdown", ae),
          t.component("k-dropdown-content", fe),
          t.component("k-dropdown-item", ke),
          t.component("k-empty", Ce),
          t.component("k-error-boundary", Ie),
          t.component("k-grid", De),
          t.component("k-header", Ue),
          t.component("k-headline", We),
          t.component("k-icon", en),
          t.component("k-image", ln),
          t.component("k-link", hn),
          t.component("k-list", _n),
          t.component("k-list-item", On),
          t.component("k-pagination", Ln),
          t.component("k-prev-next", Bn),
          t.component("k-progress", Hn),
          t.component("k-sort-handle", Wn),
          t.component("k-tag", ei),
          t.component("k-text", ri),
          t.component("k-view", fi),
          t.component("k-autocomplete", ki),
          t.component("k-form", Si),
          t.component("k-field", Ii),
          t.component("k-fieldset", Di),
          t.component("k-input", Ui),
          t.component("k-upload", Xi),
          t.component("k-checkbox-input", ss),
          t.component("k-checkboxes-input", cs),
          t.component("k-date-input", gs),
          t.component("k-datetime-input", ys),
          t.component("k-email-input", qs),
          t.component("k-multiselect-input", Fs),
          t.component("k-number-input", Ys),
          t.component("k-password-input", Qs),
          t.component("k-radio-input", so),
          t.component("k-range-input", co),
          t.component("k-select-input", vo),
          t.component("k-tags-input", So),
          t.component("k-tel-input", jo),
          t.component("k-text-input", Ts),
          t.component("k-textarea-input", na),
          t.component("k-time-input", la),
          t.component("k-toggle-input", ga),
          t.component("k-url-input", _a),
          t.component("k-checkboxes-field", Oa),
          t.component("k-date-field", La),
          t.component("k-email-field", Ba),
          t.component("k-files-field", Ha),
          t.component("k-headline-field", Ja),
          t.component("k-info-field", nr),
          t.component("k-line-field", rr),
          t.component("k-multiselect-field", fr),
          t.component("k-number-field", kr),
          t.component("k-pages-field", Or),
          t.component("k-password-field", Lr),
          t.component("k-radio-field", Br),
          t.component("k-range-field", Hr),
          t.component("k-select-field", Jr),
          t.component("k-structure-field", il),
          t.component("k-tags-field", ul),
          t.component("k-text-field", $l),
          t.component("k-textarea-field", Cl),
          t.component("k-tel-field", ml),
          t.component("k-time-field", Al),
          t.component("k-toggle-field", Rl),
          t.component("k-url-field", Vl),
          t.component("k-users-field", Xl),
          t.component("k-email-field-preview", mu),
          t.component("k-files-field-preview", iu),
          t.component("k-pages-field-preview", $u),
          t.component("k-url-field-preview", pu),
          t.component("k-users-field-preview", Cu);
      }
    };
    i["a"].use(Eu);
    var ju,
      Tu,
      Iu = {
        extends: Gt,
        created: function() {
          this.$events.$on("keydown.esc", this.close, !1);
        },
        destroyed: function() {
          this.$events.$off("keydown.esc", this.close, !1);
        }
      },
      Lu = Iu,
      Au = Object(m["a"])(Lu, ju, Tu, !1, null, null, null);
    Au.options.__file = "Dialog.vue";
    var qu = Au.exports,
      Nu = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.error
          ? n(
              "k-dialog",
              {
                ref: "dialog",
                staticClass: "k-error-dialog",
                attrs: { visible: !0 },
                on: { close: t.exit, open: t.enter }
              },
              [
                n("k-text", [t._v(t._s(t.error.message))]),
                t.error.details && Object.keys(t.error.details).length
                  ? n(
                      "dl",
                      { staticClass: "k-error-details" },
                      [
                        t._l(t.error.details, function(e, i) {
                          return [
                            n("dt", { key: "detail-label-" + i }, [
                              t._v(t._s(e.label))
                            ]),
                            n(
                              "dd",
                              { key: "detail-message-" + i },
                              [
                                "object" === typeof e.message
                                  ? [
                                      n(
                                        "ul",
                                        t._l(e.message, function(e, i) {
                                          return n("li", { key: i }, [
                                            t._v(
                                              "\n              " +
                                                t._s(e) +
                                                "\n            "
                                            )
                                          ]);
                                        }),
                                        0
                                      )
                                    ]
                                  : [
                                      t._v(
                                        "\n          " +
                                          t._s(e.message) +
                                          "\n        "
                                      )
                                    ]
                              ],
                              2
                            )
                          ];
                        })
                      ],
                      2
                    )
                  : t._e(),
                n(
                  "k-button-group",
                  { attrs: { slot: "footer" }, slot: "footer" },
                  [
                    n(
                      "k-button",
                      { attrs: { icon: "check" }, on: { click: t.close } },
                      [t._v("\n      " + t._s(t.$t("confirm")) + "\n    ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          : t._e();
      },
      Pu = [],
      Du = {
        mixins: [_],
        computed: {
          error: function() {
            var t = this.$store.state.notification;
            return "error" === t.type ? t : null;
          }
        },
        methods: {
          enter: function() {
            var t = this;
            this.$nextTick(function() {
              t.$el.querySelector(".k-dialog-footer .k-button").focus();
            });
          },
          exit: function() {
            this.$store.dispatch("notification/close");
          }
        }
      },
      Bu = Du,
      Ru = (n("7737"), Object(m["a"])(Bu, Nu, Pu, !1, null, null, null));
    Ru.options.__file = "ErrorDialog.vue";
    var Fu = Ru.exports,
      Mu = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("delete"), theme: "negative", icon: "trash" },
            on: { submit: t.submit }
          },
          [
            n("k-text", {
              domProps: {
                innerHTML: t._s(
                  t.$t("file.delete.confirm", { filename: t.filename })
                )
              }
            })
          ],
          1
        );
      },
      zu = [],
      Uu = {
        mixins: [_],
        data: function() {
          return { id: null, parent: null, filename: null };
        },
        methods: {
          open: function(t, e) {
            var n = this;
            this.$api.files
              .get(t, e)
              .then(function(e) {
                (n.id = e.id),
                  (n.filename = e.filename),
                  (n.parent = t),
                  n.$refs.dialog.open();
              })
              .catch(function(t) {
                n.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api.files
              .delete(this.parent, this.filename)
              .then(function() {
                t.$store.dispatch("form/remove", "files/" + t.id),
                  t.$store.dispatch("notification/success", ":)"),
                  t.$events.$emit("file.delete"),
                  t.$emit("success"),
                  t.$refs.dialog.close();
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      Hu = Uu,
      Vu = Object(m["a"])(Hu, Mu, zu, !1, null, null, null);
    Vu.options.__file = "FileRemoveDialog.vue";
    var Ku = Vu.exports,
      Gu = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("rename"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: {
                submit: t.submit,
                input: function(e) {
                  t.file.name = t.sluggify(t.file.name);
                }
              },
              model: {
                value: t.file,
                callback: function(e) {
                  t.file = e;
                },
                expression: "file"
              }
            })
          ],
          1
        );
      },
      Yu = [],
      Wu = n("b747"),
      Ju = n.n(Wu),
      Xu = function(t) {
        return Ju()(t, { remove: /[$*_+~.,;:()'"`!?§$%\/=#@]/g }).toLowerCase();
      },
      Qu = {
        mixins: [_],
        data: function() {
          return {
            parent: null,
            file: { id: null, name: null, filename: null, extension: null }
          };
        },
        computed: {
          fields: function() {
            return {
              name: {
                label: this.$t("name"),
                type: "text",
                required: !0,
                icon: "title",
                after: "." + this.file.extension,
                preselect: !0
              }
            };
          }
        },
        methods: {
          open: function(t, e) {
            var n = this;
            this.$api.files
              .get(t, e, { select: ["id", "filename", "name", "extension"] })
              .then(function(e) {
                (n.file = e), (n.parent = t), n.$refs.dialog.open();
              })
              .catch(function(t) {
                n.$store.dispatch("notification/error", t);
              });
          },
          sluggify: function(t) {
            return Xu(t);
          },
          submit: function() {
            var t = this;
            this.$api.files
              .rename(this.parent, this.file.filename, this.file.name)
              .then(function(e) {
                t.$store.dispatch("form/revert", "files/" + t.file.id),
                  t.$store.dispatch("notification/success", ":)"),
                  t.$emit("success", e),
                  t.$events.$emit("file.changeName", e),
                  t.$refs.dialog.close();
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      Zu = Qu,
      tc = Object(m["a"])(Zu, Gu, Yu, !1, null, null, null);
    tc.options.__file = "FileRenameDialog.vue";
    var ec = tc.exports,
      nc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-files-dialog",
            attrs: { size: "medium" },
            on: {
              cancel: function(e) {
                t.$emit("cancel");
              },
              submit: t.submit
            }
          },
          [
            t.issue
              ? [n("k-box", { attrs: { text: t.issue, theme: "negative" } })]
              : [
                  t.files.length
                    ? n(
                        "k-list",
                        t._l(t.files, function(e, i) {
                          return n(
                            "k-list-item",
                            {
                              key: e.filename,
                              attrs: {
                                text: e.filename,
                                image: e.image,
                                icon: e.icon
                              },
                              on: {
                                click: function(e) {
                                  t.toggle(i);
                                }
                              }
                            },
                            [
                              e.selected
                                ? n("k-button", {
                                    attrs: {
                                      slot: "options",
                                      autofocus: !0,
                                      icon: t.checkedIcon,
                                      tooltip: t.$t("remove"),
                                      theme: "positive"
                                    },
                                    slot: "options"
                                  })
                                : n("k-button", {
                                    attrs: {
                                      slot: "options",
                                      autofocus: !0,
                                      tooltip: t.$t("select"),
                                      icon: "circle-outline"
                                    },
                                    slot: "options"
                                  })
                            ],
                            1
                          );
                        }),
                        1
                      )
                    : n("k-empty", { attrs: { icon: "image" } }, [
                        t._v("\n      No files to select\n    ")
                      ])
                ]
          ],
          2
        );
      },
      ic = [],
      sc = {
        data: function() {
          return {
            files: [],
            issue: null,
            options: { max: null, multiple: !0, api: null, selected: [] }
          };
        },
        computed: {
          multiple: function() {
            return !0 === this.options.multiple && 1 !== this.options.max;
          },
          checkedIcon: function() {
            return !0 === this.multiple ? "check" : "circle-filled";
          }
        },
        methods: {
          selected: function() {
            return this.files.filter(function(t) {
              return t.selected;
            });
          },
          submit: function() {
            this.$emit("submit", this.selected()), this.$refs.dialog.close();
          },
          toggle: function(t) {
            if (!1 === this.multiple)
              (this.files = this.files.map(function(t) {
                return (t.selected = !1), t;
              })),
                (this.files[t].selected = !0);
            else if (this.files[t].selected) this.files[t].selected = !1;
            else {
              if (
                this.options.max &&
                this.options.max <= this.selected().length
              )
                return;
              this.files[t].selected = !0;
            }
          },
          open: function(t, e) {
            (this.files = t), (this.options = e), this.$refs.dialog.open();
          }
        }
      },
      oc = sc,
      ac = (n("bf53"), Object(m["a"])(oc, nc, ic, !1, null, null, null));
    ac.options.__file = "FilesDialog.vue";
    var rc = ac.exports,
      lc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("language.create"),
              notification: t.notification,
              theme: "positive",
              size: "medium"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields, novalidate: !0 },
              on: { submit: t.submit },
              model: {
                value: t.language,
                callback: function(e) {
                  t.language = e;
                },
                expression: "language"
              }
            })
          ],
          1
        );
      },
      uc = [],
      cc = {
        mixins: [_],
        data: function() {
          return {
            notification: null,
            language: { name: "", code: "", direction: "ltr" }
          };
        },
        computed: {
          fields: function() {
            return {
              name: {
                label: this.$t("language.name"),
                type: "text",
                required: !0,
                icon: "title"
              },
              code: {
                label: this.$t("language.code"),
                type: "text",
                required: !0,
                counter: !1,
                icon: "globe",
                width: "1/2"
              },
              direction: {
                label: this.$t("language.direction"),
                type: "select",
                required: !0,
                empty: !1,
                options: [
                  { value: "ltr", text: this.$t("language.direction.ltr") },
                  { value: "rtl", text: this.$t("language.direction.rtl") }
                ],
                width: "1/2"
              },
              locale: {
                label: this.$t("language.locale"),
                type: "text",
                placeholder: "en_US"
              }
            };
          }
        },
        watch: {
          "language.name": function(t) {
            this.language.code = Xu(t).substr(0, 2);
          },
          "language.code": function(t) {
            this.language.code = Xu(t);
          }
        },
        methods: {
          open: function() {
            (this.language = { name: "", code: "", direction: "ltr" }),
              this.$refs.dialog.open();
          },
          submit: function() {
            var t = this;
            this.$api
              .post("languages", this.language)
              .then(function() {
                t.$store.dispatch("languages/load"),
                  t.success({
                    message: t.$t("language.created"),
                    event: "language.create"
                  });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      pc = cc,
      dc = Object(m["a"])(pc, lc, uc, !1, null, null, null);
    dc.options.__file = "LanguageCreateDialog.vue";
    var fc = dc.exports,
      hc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("delete"), theme: "negative", icon: "trash" },
            on: { submit: t.submit }
          },
          [
            n("k-text", {
              domProps: {
                innerHTML: t._s(
                  t.$t("language.delete.confirm", { name: t.language.name })
                )
              }
            })
          ],
          1
        );
      },
      mc = [],
      gc = {
        mixins: [_],
        data: function() {
          return { language: { name: null } };
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api
              .get("languages/" + t)
              .then(function(t) {
                (e.language = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api
              .delete("languages/" + this.language.code)
              .then(function() {
                t.$store.dispatch("languages/load"),
                  t.success({
                    message: t.$t("language.deleted"),
                    event: "language.delete"
                  });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      vc = gc,
      bc = Object(m["a"])(vc, hc, mc, !1, null, null, null);
    bc.options.__file = "LanguageRemoveDialog.vue";
    var kc = bc.exports,
      _c = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("save"),
              notification: t.notification,
              size: "medium"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.language,
                callback: function(e) {
                  t.language = e;
                },
                expression: "language"
              }
            })
          ],
          1
        );
      },
      $c = [],
      yc = {
        mixins: [fc],
        computed: {
          fields: function() {
            var t = fc.computed.fields.apply(this);
            return (t.code.disabled = !0), t;
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api
              .get("languages/" + t)
              .then(function(t) {
                (e.language = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api
              .patch("languages/" + this.language.code, this.language)
              .then(function() {
                t.$store.dispatch("languages/load"),
                  t.success({
                    message: t.$t("language.updated"),
                    event: "language.update"
                  });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      xc = yc,
      wc = Object(m["a"])(xc, _c, $c, !1, null, null, null);
    wc.options.__file = "LanguageUpdateDialog.vue";
    var Sc = wc.exports,
      Oc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("page.draft.create"),
              notification: t.notification,
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields, novalidate: !0 },
              on: { submit: t.submit },
              model: {
                value: t.page,
                callback: function(e) {
                  t.page = e;
                },
                expression: "page"
              }
            })
          ],
          1
        );
      },
      Cc = [],
      Ec = {
        mixins: [_],
        data: function() {
          return {
            notification: null,
            parent: null,
            section: null,
            templates: [],
            page: { title: "", slug: "", template: null }
          };
        },
        computed: {
          fields: function() {
            return {
              title: {
                label: this.$t("title"),
                type: "text",
                required: !0,
                icon: "title"
              },
              slug: {
                label: this.$t("slug"),
                type: "text",
                required: !0,
                counter: !1,
                icon: "url"
              },
              template: {
                name: "template",
                label: this.$t("template"),
                type: "select",
                disabled: 1 === this.templates.length,
                required: !0,
                icon: "code",
                empty: !1,
                options: this.templates
              }
            };
          }
        },
        watch: {
          "page.title": function(t) {
            this.page.slug = Xu(t);
          }
        },
        methods: {
          open: function(t, e, n) {
            var i = this;
            (this.parent = t),
              (this.section = n),
              this.$api
                .get(e, { section: n })
                .then(function(t) {
                  (i.templates = t.map(function(t) {
                    return { value: t.name, text: t.title };
                  })),
                    i.templates[0] && (i.page.template = i.templates[0].value),
                    i.$refs.dialog.open();
                })
                .catch(function(t) {
                  i.$store.dispatch("notification/error", t);
                });
          },
          submit: function() {
            var t = this;
            if (0 === this.page.title.length)
              return this.$refs.dialog.error("Please enter a title"), !1;
            var e = {
              template: this.page.template,
              slug: this.page.slug,
              content: { title: this.page.title }
            };
            this.$api
              .post(this.parent + "/children", e)
              .then(function(e) {
                t.success({
                  route: t.$api.pages.link(e.id),
                  message: ":)",
                  event: "page.create"
                });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      jc = Ec,
      Tc = Object(m["a"])(jc, Oc, Cc, !1, null, null, null);
    Tc.options.__file = "PageCreateDialog.vue";
    var Ic = Tc.exports,
      Lc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("delete"),
              size: t.hasSubpages ? "medium" : "small",
              theme: "negative",
              icon: "trash"
            },
            on: { submit: t.submit }
          },
          [
            t.page.hasChildren || t.page.hasDrafts
              ? [
                  n("k-text", {
                    domProps: {
                      innerHTML: t._s(
                        t.$t("page.delete.confirm", { title: t.page.title })
                      )
                    }
                  }),
                  n(
                    "div",
                    { staticClass: "k-page-remove-warning" },
                    [
                      n("k-box", {
                        attrs: { theme: "negative" },
                        domProps: {
                          innerHTML: t._s(t.$t("page.delete.confirm.subpages"))
                        }
                      })
                    ],
                    1
                  ),
                  t.hasSubpages
                    ? n("k-form", {
                        attrs: { fields: t.fields },
                        on: { submit: t.submit },
                        model: {
                          value: t.model,
                          callback: function(e) {
                            t.model = e;
                          },
                          expression: "model"
                        }
                      })
                    : t._e()
                ]
              : [
                  n("k-text", {
                    domProps: {
                      innerHTML: t._s(
                        t.$t("page.delete.confirm", { title: t.page.title })
                      )
                    },
                    on: {
                      keydown: function(e) {
                        return "button" in e ||
                          !t._k(e.keyCode, "enter", 13, e.key, "Enter")
                          ? t.submit(e)
                          : null;
                      }
                    }
                  })
                ]
          ],
          2
        );
      },
      Ac = [],
      qc = {
        mixins: [_],
        data: function() {
          return {
            page: { title: null, hasChildren: !1, hasDrafts: !1 },
            model: { check: null }
          };
        },
        computed: {
          hasSubpages: function() {
            return this.page.hasChildren || this.page.hasDrafts;
          },
          fields: function() {
            return {
              check: {
                label: this.$t("page.delete.confirm.title"),
                type: "text",
                counter: !1
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.pages
              .get(t, { select: "id, title, hasChildren, hasDrafts, parent" })
              .then(function(t) {
                (e.page = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.hasSubpages && this.model.check !== this.page.title
              ? this.$refs.dialog.error(this.$t("error.page.delete.confirm"))
              : this.$api.pages
                  .delete(this.page.id, { force: !0 })
                  .then(function() {
                    t.$store.dispatch("form/remove", "pages/" + t.page.id);
                    var e = { message: ":)", event: "page.delete" };
                    t.$route.params.path &&
                      t.page.id === t.$route.params.path.replace(/\+/g, "/") &&
                      (t.page.parent
                        ? (e.route = "/pages/" + t.page.parent.id)
                        : (e.route = "/pages")),
                      t.success(e);
                  })
                  .catch(function(e) {
                    t.$refs.dialog.error(e.message);
                  });
          }
        }
      },
      Nc = qc,
      Pc = (n("12fb"), Object(m["a"])(Nc, Lc, Ac, !1, null, null, null));
    Pc.options.__file = "PageRemoveDialog.vue";
    var Dc = Pc.exports,
      Bc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("rename"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.page,
                callback: function(e) {
                  t.page = e;
                },
                expression: "page"
              }
            })
          ],
          1
        );
      },
      Rc = [],
      Fc = {
        mixins: [_],
        data: function() {
          return { page: { id: null, title: null } };
        },
        computed: {
          fields: function() {
            return {
              title: {
                label: this.$t("title"),
                type: "text",
                required: !0,
                icon: "title",
                preselect: !0
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.pages
              .get(t, { select: ["id", "title"] })
              .then(function(t) {
                (e.page = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            0 !== this.page.title.length
              ? this.$api.pages
                  .title(this.page.id, this.page.title)
                  .then(function() {
                    t.success({ message: ":)", event: "page.changeTitle" });
                  })
                  .catch(function(e) {
                    t.$refs.dialog.error(e.message);
                  })
              : this.$refs.dialog.error(
                  this.$t("error.page.changeTitle.empty")
                );
          }
        }
      },
      Mc = Fc,
      zc = Object(m["a"])(Mc, Bc, Rc, !1, null, null, null);
    zc.options.__file = "PageRenameDialog.vue";
    var Uc = zc.exports,
      Hc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("change"),
              size: "medium",
              theme: "positive"
            },
            on: { submit: t.submit }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.changeStatus },
              model: {
                value: t.form,
                callback: function(e) {
                  t.form = e;
                },
                expression: "form"
              }
            })
          ],
          1
        );
      },
      Vc = [],
      Kc = {
        mixins: [_],
        data: function() {
          return {
            page: { id: null },
            isBlocked: !1,
            isIncomplete: !1,
            form: { status: null, position: null },
            states: {}
          };
        },
        computed: {
          fields: function() {
            var t = this,
              e = {
                status: {
                  name: "status",
                  label: this.$t("page.changeStatus.select"),
                  type: "radio",
                  required: !0,
                  options: Object.keys(this.states).map(function(e) {
                    return {
                      value: e,
                      text: t.states[e].label,
                      info: t.states[e].text
                    };
                  })
                }
              };
            return (
              "listed" === this.form.status &&
                "default" === this.page.blueprint.num &&
                (e.position = {
                  name: "position",
                  label: this.$t("page.changeStatus.position"),
                  type: "select",
                  empty: !1,
                  options: this.sortingOptions()
                }),
              e
            );
          }
        },
        methods: {
          sortingOptions: function() {
            var t = this,
              e = [],
              n = 0;
            return (
              this.page.siblings.forEach(function(i) {
                if (i.id === t.page.id || i.num < 1) return !1;
                n++,
                  e.push({ value: n, text: n }),
                  e.push({ value: i.id, text: i.title, disabled: !0 });
              }),
              e.push({ value: n + 1, text: n + 1 }),
              e
            );
          },
          open: function(t) {
            var e = this;
            this.$api.pages
              .get(t, {
                select: [
                  "id",
                  "status",
                  "num",
                  "errors",
                  "siblings",
                  "blueprint"
                ]
              })
              .then(function(t) {
                return !1 === t.blueprint.options.changeStatus
                  ? e.$store.dispatch("notification/error", {
                      message: e.$t("error.page.changeStatus.permission")
                    })
                  : "draft" === t.status && Object.keys(t.errors).length > 0
                    ? e.$store.dispatch("notification/error", {
                        message: e.$t("error.page.changeStatus.incomplete"),
                        details: t.errors
                      })
                    : ((e.states = t.blueprint.status),
                      (e.page = t),
                      (e.form.status = t.status),
                      (e.form.position = t.num),
                      void e.$refs.dialog.open());
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            this.$refs.form.submit();
          },
          changeStatus: function() {
            var t = this;
            this.$api.pages
              .status(this.page.id, this.form.status, this.form.position || 1)
              .then(function() {
                t.success({ message: ":)", event: "page.changeStatus" });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      Gc = Kc,
      Yc = Object(m["a"])(Gc, Hc, Vc, !1, null, null, null);
    Yc.options.__file = "PageStatusDialog.vue";
    var Wc = Yc.exports,
      Jc = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("change"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.page,
                callback: function(e) {
                  t.page = e;
                },
                expression: "page"
              }
            })
          ],
          1
        );
      },
      Xc = [],
      Qc = {
        mixins: [_],
        data: function() {
          return { blueprints: [], page: { id: null, template: null } };
        },
        computed: {
          fields: function() {
            return {
              template: {
                label: this.$t("template"),
                type: "select",
                required: !0,
                empty: !1,
                options: this.page.blueprints,
                icon: "template"
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.pages
              .get(t, { select: ["id", "template", "blueprints"] })
              .then(function(t) {
                if (t.blueprints.length <= 1)
                  return e.$store.dispatch("notification/error", {
                    message: e.$t("error.page.changeTemplate.invalid", {
                      slug: t.id
                    })
                  });
                (e.page = t),
                  (e.page.blueprints = e.page.blueprints.map(function(t) {
                    return { text: t.title, value: t.name };
                  })),
                  e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$events.$emit("keydown.cmd.s"),
              this.$api.pages
                .template(this.page.id, this.page.template)
                .then(function() {
                  t.success({ message: ":)", event: "page.changeTemplate" });
                })
                .catch(function(e) {
                  t.$refs.dialog.error(e.message);
                });
          }
        }
      },
      Zc = Qc,
      tp = Object(m["a"])(Zc, Jc, Xc, !1, null, null, null);
    tp.options.__file = "PageTemplateDialog.vue";
    var ep = tp.exports,
      np = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("change"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n(
              "k-form",
              { ref: "form", on: { submit: t.submit } },
              [
                n(
                  "k-text-field",
                  t._b(
                    {
                      attrs: { value: t.slug },
                      on: {
                        input: function(e) {
                          t.sluggify(e);
                        }
                      }
                    },
                    "k-text-field",
                    t.field,
                    !1
                  ),
                  [
                    n(
                      "k-button",
                      {
                        attrs: {
                          slot: "options",
                          icon: "wand",
                          "data-options": ""
                        },
                        on: {
                          click: function(e) {
                            t.sluggify(t.page.title);
                          }
                        },
                        slot: "options"
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.$t("page.changeSlug.fromTitle")) +
                            "\n      "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      ip = [],
      sp = {
        mixins: [_],
        data: function() {
          return {
            slug: null,
            url: null,
            page: { id: null, parent: null, title: null }
          };
        },
        computed: {
          field: function() {
            return {
              name: "slug",
              label: this.$t("slug"),
              type: "text",
              required: !0,
              icon: "url",
              help: "/" + this.url,
              preselect: !0
            };
          }
        },
        methods: {
          sluggify: function(t) {
            (this.slug = Xu(t)),
              this.page.parents
                ? (this.url = this.page.parents
                    .map(function(t) {
                      return t.slug;
                    })
                    .concat([this.slug])
                    .join("/"))
                : (this.url = this.slug);
          },
          open: function(t) {
            var e = this;
            this.$api.pages
              .get(t, { view: "panel" })
              .then(function(t) {
                (e.page = t), e.sluggify(e.page.slug), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            if (this.slug === this.page.slug)
              return (
                this.$refs.dialog.close(),
                void this.$store.dispatch("notification/success", ":)")
              );
            0 !== this.slug.length
              ? this.$api.pages
                  .slug(this.page.id, this.slug)
                  .then(function(e) {
                    t.$store.dispatch("form/revert", "pages/" + t.page.id);
                    var n = { message: ":)", event: "page.changeSlug" };
                    t.$route.params.path &&
                      t.page.id === t.$route.params.path.replace(/\+/g, "/") &&
                      (n.route = t.$api.pages.link(e.id)),
                      t.success(n);
                  })
                  .catch(function(e) {
                    t.$refs.dialog.error(e.message);
                  })
              : this.$refs.dialog.error(this.$t("error.page.slug.invalid"));
          }
        }
      },
      op = sp,
      ap = Object(m["a"])(op, np, ip, !1, null, null, null);
    ap.options.__file = "PageUrlDialog.vue";
    var rp = ap.exports,
      lp = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-pages-dialog",
            attrs: { size: "medium" },
            on: {
              cancel: function(e) {
                t.$emit("cancel");
              },
              submit: t.submit
            }
          },
          [
            t.issue
              ? [n("k-box", { attrs: { text: t.issue, theme: "negative" } })]
              : [
                  t.model
                    ? n(
                        "header",
                        { staticClass: "k-pages-dialog-navbar" },
                        [
                          n("k-button", {
                            attrs: {
                              disabled: !t.model.id,
                              tooltip: t.$t("back"),
                              icon: "angle-left"
                            },
                            on: { click: t.back }
                          }),
                          n("k-headline", [t._v(t._s(t.model.title))])
                        ],
                        1
                      )
                    : t._e(),
                  t.pages.length
                    ? n(
                        "k-list",
                        t._l(t.pages, function(e) {
                          return n(
                            "k-list-item",
                            {
                              key: e.id,
                              attrs: {
                                text: e.text,
                                info: e.info,
                                image: e.image,
                                icon: e.icon
                              },
                              on: {
                                click: function(n) {
                                  t.toggle(e);
                                }
                              }
                            },
                            [
                              n(
                                "template",
                                { slot: "options" },
                                [
                                  t.isSelected(e)
                                    ? n("k-button", {
                                        attrs: {
                                          slot: "options",
                                          autofocus: !0,
                                          icon: t.checkedIcon,
                                          tooltip: t.$t("remove"),
                                          theme: "positive"
                                        },
                                        slot: "options"
                                      })
                                    : n("k-button", {
                                        attrs: {
                                          slot: "options",
                                          autofocus: !0,
                                          tooltip: t.$t("select"),
                                          icon: "circle-outline"
                                        },
                                        slot: "options"
                                      }),
                                  t.model
                                    ? n("k-button", {
                                        attrs: {
                                          disabled: !e.hasChildren,
                                          tooltip: t.$t("open"),
                                          icon: "angle-right"
                                        },
                                        on: {
                                          click: function(n) {
                                            n.stopPropagation(), t.go(e);
                                          }
                                        }
                                      })
                                    : t._e()
                                ],
                                1
                              )
                            ],
                            2
                          );
                        }),
                        1
                      )
                    : n("k-empty", { attrs: { icon: "page" } }, [
                        t._v("\n      No pages to select\n    ")
                      ])
                ]
          ],
          2
        );
      },
      up = [],
      cp = {
        data: function() {
          return {
            model: { title: null, parent: null },
            pages: [],
            issue: null,
            options: {
              endpoint: null,
              max: null,
              multiple: !0,
              parent: null,
              selected: []
            }
          };
        },
        computed: {
          multiple: function() {
            return !0 === this.options.multiple && 1 !== this.options.max;
          },
          checkedIcon: function() {
            return !0 === this.multiple ? "check" : "circle-filled";
          }
        },
        methods: {
          fetch: function() {
            var t = this;
            return this.$api
              .get(this.options.endpoint, { parent: this.options.parent })
              .then(function(e) {
                (t.model = e.model), (t.pages = e.pages);
              })
              .catch(function(e) {
                (t.pages = []), (t.issue = e.message);
              });
          },
          back: function() {
            (this.options.parent = this.model.parent
              ? this.model.parent.id
              : null),
              this.fetch();
          },
          submit: function() {
            this.$emit("submit", this.options.selected),
              this.$refs.dialog.close();
          },
          isSelected: function(t) {
            return this.options.selected
              .map(function(t) {
                return t.id;
              })
              .includes(t.id);
          },
          toggle: function(t) {
            if (
              (!1 === this.options.multiple && (this.options.selected = []),
              !1 === this.isSelected(t))
            ) {
              if (
                this.options.max &&
                this.options.max <= this.options.selected.length
              )
                return;
              this.options.selected.push(t);
            } else
              this.options.selected = this.options.selected.filter(function(e) {
                return e.id !== t.id;
              });
          },
          open: function(t) {
            var e = this;
            (this.options = t),
              this.fetch().then(function() {
                e.$refs.dialog.open();
              });
          },
          go: function(t) {
            (this.options.parent = t.id), this.fetch();
          }
        }
      },
      pp = cp,
      dp = (n("ac27"), Object(m["a"])(pp, lp, up, !1, null, null, null));
    dp.options.__file = "PagesDialog.vue";
    var fp,
      hp,
      mp = dp.exports,
      gp = {
        extends: Uc,
        methods: {
          open: function() {
            var t = this;
            this.$api.site
              .get({ select: ["title"] })
              .then(function(e) {
                (t.page = e), t.$refs.dialog.open();
              })
              .catch(function(e) {
                t.$store.dispatch("notification/error", e);
              });
          },
          submit: function() {
            var t = this;
            this.$api.site
              .title(this.page.title)
              .then(function() {
                t.$store.dispatch("system/title", t.page.title),
                  t.success({ message: ":)", event: "site.changeTitle" });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      vp = gp,
      bp = Object(m["a"])(vp, fp, hp, !1, null, null, null);
    bp.options.__file = "SiteRenameDialog.vue";
    var kp = bp.exports,
      _p = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("create"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              },
              close: t.reset
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields, novalidate: !0 },
              on: { submit: t.create },
              model: {
                value: t.user,
                callback: function(e) {
                  t.user = e;
                },
                expression: "user"
              }
            })
          ],
          1
        );
      },
      $p = [],
      yp = {
        mixins: [_],
        data: function() {
          return { user: this.emptyUser(), languages: [], roles: [] };
        },
        computed: {
          fields: function() {
            return {
              name: { label: this.$t("name"), type: "text", icon: "user" },
              email: {
                label: this.$t("email"),
                type: "email",
                icon: "email",
                link: !1,
                required: !0
              },
              password: {
                label: this.$t("password"),
                type: "password",
                icon: "key"
              },
              language: {
                label: this.$t("language"),
                type: "select",
                icon: "globe",
                options: this.languages,
                required: !0,
                empty: !1
              },
              role: {
                label: this.$t("role"),
                type: 1 === this.roles.length ? "hidden" : "radio",
                required: !0,
                options: this.roles
              }
            };
          }
        },
        methods: {
          create: function() {
            var t = this;
            this.$api.users
              .create(this.user)
              .then(function() {
                t.success({ message: ":)", event: "user.create" });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          },
          emptyUser: function() {
            return {
              name: "",
              email: "",
              password: "",
              language: "en",
              role: "admin"
            };
          },
          open: function() {
            var t = this;
            this.$api.roles
              .options()
              .then(function(e) {
                (t.roles = e),
                  t.$api.translations
                    .options()
                    .then(function(e) {
                      (t.languages = e), t.$refs.dialog.open();
                    })
                    .catch(function(e) {
                      t.$store.dispatch("notification/error", e);
                    });
              })
              .catch(function(e) {
                t.$store.dispatch("notification/error", e);
              });
          },
          reset: function() {
            this.user = this.emptyUser();
          }
        }
      },
      xp = yp,
      wp = Object(m["a"])(xp, _p, $p, !1, null, null, null);
    wp.options.__file = "UserCreateDialog.vue";
    var Sp = wp.exports,
      Op = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("change"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.user,
                callback: function(e) {
                  t.user = e;
                },
                expression: "user"
              }
            })
          ],
          1
        );
      },
      Cp = [],
      Ep = {
        mixins: [_],
        data: function() {
          return { user: { id: null, email: null } };
        },
        computed: {
          fields: function() {
            return {
              email: {
                label: this.$t("email"),
                preselect: !0,
                required: !0,
                type: "email"
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.users
              .get(t, { select: ["id", "email"] })
              .then(function(t) {
                (e.user = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api.users
              .changeEmail(this.user.id, this.user.email)
              .then(function(e) {
                t.$store.dispatch("form/revert", "users/" + t.user.id);
                var n = { message: ":)", event: "user.changeEmail" };
                "User" === t.$route.name && (n.route = t.$api.users.link(e.id)),
                  t.success(n);
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      jp = Ep,
      Tp = Object(m["a"])(jp, Op, Cp, !1, null, null, null);
    Tp.options.__file = "UserEmailDialog.vue";
    var Ip = Tp.exports,
      Lp = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("change"), theme: "positive", icon: "check" },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.user,
                callback: function(e) {
                  t.user = e;
                },
                expression: "user"
              }
            })
          ],
          1
        );
      },
      Ap = [],
      qp = {
        mixins: [_],
        data: function() {
          return { user: { language: "en" }, languages: [] };
        },
        computed: {
          fields: function() {
            return {
              language: {
                label: this.$t("language"),
                type: "select",
                icon: "globe",
                options: this.languages,
                required: !0,
                empty: !1
              }
            };
          }
        },
        created: function() {
          var t = this;
          this.$api.translations.options().then(function(e) {
            t.languages = e;
          });
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.users
              .get(t, { view: "compact" })
              .then(function(t) {
                (e.user = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api.users
              .changeLanguage(this.user.id, this.user.language)
              .then(function(e) {
                (t.user = e),
                  t.$store.state.user.current.id === t.user.id &&
                    t.$store.dispatch("user/language", t.user.language),
                  t.success({ message: ":)", event: "user.changeLanguage" });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      Np = qp,
      Pp = Object(m["a"])(Np, Lp, Ap, !1, null, null, null);
    Pp.options.__file = "UserLanguageDialog.vue";
    var Dp = Pp.exports,
      Bp = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("change"), theme: "positive", icon: "check" },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.values,
                callback: function(e) {
                  t.values = e;
                },
                expression: "values"
              }
            })
          ],
          1
        );
      },
      Rp = [],
      Fp = {
        mixins: [_],
        data: function() {
          return {
            user: null,
            values: { password: null, passwordConfirmation: null }
          };
        },
        computed: {
          fields: function() {
            return {
              password: {
                label: this.$t("user.changePassword.new"),
                type: "password",
                icon: "key"
              },
              passwordConfirmation: {
                label: this.$t("user.changePassword.new.confirm"),
                icon: "key",
                type: "password"
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.users
              .get(t)
              .then(function(t) {
                (e.user = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            return this.values.password.length < 8
              ? (this.$refs.dialog.error(
                  this.$t("error.user.password.invalid")
                ),
                !1)
              : this.values.password !== this.values.passwordConfirmation
                ? (this.$refs.dialog.error(
                    this.$t("error.user.password.notSame")
                  ),
                  !1)
                : void this.$api.users
                    .changePassword(this.user.id, this.values.password)
                    .then(function() {
                      t.success({
                        message: ":)",
                        event: "user.changePassword"
                      });
                    })
                    .catch(function(e) {
                      t.$refs.dialog.error(e.message);
                    });
          }
        }
      },
      Mp = Fp,
      zp = Object(m["a"])(Mp, Bp, Rp, !1, null, null, null);
    zp.options.__file = "UserPasswordDialog.vue";
    var Up = zp.exports,
      Hp = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: { button: t.$t("delete"), theme: "negative", icon: "trash" },
            on: { submit: t.submit }
          },
          [
            n("k-text", {
              domProps: {
                innerHTML: t._s(
                  t.$t("user.delete.confirm", { email: t.user.email })
                )
              }
            })
          ],
          1
        );
      },
      Vp = [],
      Kp = {
        mixins: [_],
        data: function() {
          return { user: { email: null } };
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.users
              .get(t)
              .then(function(t) {
                (e.user = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api.users
              .delete(this.user.id)
              .then(function() {
                t.$store.dispatch("form/remove", "users/" + t.user.id),
                  t.success({ message: ":)", event: "user.delete" }),
                  "User" === t.$route.name && t.$router.push("/users");
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      Gp = Kp,
      Yp = Object(m["a"])(Gp, Hp, Vp, !1, null, null, null);
    Yp.options.__file = "UserRemoveDialog.vue";
    var Wp = Yp.exports,
      Jp = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("rename"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.user,
                callback: function(e) {
                  t.user = e;
                },
                expression: "user"
              }
            })
          ],
          1
        );
      },
      Xp = [],
      Qp = {
        mixins: [_],
        data: function() {
          return { user: { id: null, name: null } };
        },
        computed: {
          fields: function() {
            return {
              name: {
                label: this.$t("name"),
                type: "text",
                icon: "user",
                preselect: !0
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            this.$api.users
              .get(t, { select: ["id", "name"] })
              .then(function(t) {
                (e.user = t), e.$refs.dialog.open();
              })
              .catch(function(t) {
                e.$store.dispatch("notification/error", t);
              });
          },
          submit: function() {
            var t = this;
            this.$api.users
              .changeName(this.user.id, this.user.name)
              .then(function() {
                t.success({ message: ":)", event: "user.changeName" });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      Zp = Qp,
      td = Object(m["a"])(Zp, Jp, Xp, !1, null, null, null);
    td.options.__file = "UserRenameDialog.vue";
    var ed = td.exports,
      nd = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            attrs: {
              button: t.$t("user.changeRole"),
              size: "medium",
              theme: "positive"
            },
            on: {
              submit: function(e) {
                t.$refs.form.submit();
              }
            }
          },
          [
            n("k-form", {
              ref: "form",
              attrs: { fields: t.fields },
              on: { submit: t.submit },
              model: {
                value: t.user,
                callback: function(e) {
                  t.user = e;
                },
                expression: "user"
              }
            })
          ],
          1
        );
      },
      id = [],
      sd = {
        mixins: [_],
        data: function() {
          return { roles: [], user: { id: null, role: "visitor" } };
        },
        computed: {
          fields: function() {
            return {
              role: {
                label: this.$t("user.changeRole.select"),
                type: "radio",
                required: !0,
                options: this.roles
              }
            };
          }
        },
        methods: {
          open: function(t) {
            var e = this;
            (this.id = t),
              this.$api.users
                .get(t)
                .then(function(t) {
                  e.$api.roles.options().then(function(n) {
                    (e.roles = n),
                      (e.user = t),
                      (e.user.role = e.user.role.name),
                      e.$refs.dialog.open();
                  });
                })
                .catch(function(t) {
                  e.$store.dispatch("notification/error", t);
                });
          },
          submit: function() {
            var t = this;
            this.$api.users
              .changeRole(this.user.id, this.user.role)
              .then(function() {
                t.success({ message: ":)", event: "user.changeRole" });
              })
              .catch(function(e) {
                t.$refs.dialog.error(e.message);
              });
          }
        }
      },
      od = sd,
      ad = Object(m["a"])(od, nd, id, !1, null, null, null);
    ad.options.__file = "UserRoleDialog.vue";
    var rd = ad.exports,
      ld = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-dialog",
          {
            ref: "dialog",
            staticClass: "k-users-dialog",
            attrs: { size: "medium" },
            on: {
              cancel: function(e) {
                t.$emit("cancel");
              },
              submit: t.submit
            }
          },
          [
            t.issue
              ? [n("k-box", { attrs: { text: t.issue, theme: "negative" } })]
              : [
                  t.users.length
                    ? n(
                        "k-list",
                        t._l(t.users, function(e, i) {
                          return n(
                            "k-list-item",
                            {
                              key: e.email,
                              attrs: {
                                text: e.username,
                                image: e.avatar
                                  ? {
                                      url: e.avatar.url,
                                      back: "pattern",
                                      cover: !0
                                    }
                                  : null,
                                icon: { type: "user", back: "black" }
                              },
                              on: {
                                click: function(e) {
                                  t.toggle(i);
                                }
                              }
                            },
                            [
                              e.selected
                                ? n("k-button", {
                                    attrs: {
                                      slot: "options",
                                      autofocus: !0,
                                      icon: t.checkedIcon,
                                      tooltip: t.$t("remove"),
                                      theme: "positive"
                                    },
                                    slot: "options"
                                  })
                                : n("k-button", {
                                    attrs: {
                                      slot: "options",
                                      autofocus: !0,
                                      tooltip: t.$t("select"),
                                      icon: "circle-outline"
                                    },
                                    slot: "options"
                                  })
                            ],
                            1
                          );
                        }),
                        1
                      )
                    : n("k-empty", { attrs: { icon: "users" } }, [
                        t._v("\n      No users to select\n    ")
                      ])
                ]
          ],
          2
        );
      },
      ud = [],
      cd = {
        data: function() {
          return {
            users: [],
            issue: null,
            options: { max: null, multiple: !0, selected: [] }
          };
        },
        computed: {
          multiple: function() {
            return !0 === this.options.multiple && 1 !== this.options.max;
          },
          checkedIcon: function() {
            return !0 === this.multiple ? "check" : "circle-filled";
          }
        },
        methods: {
          fetch: function() {
            var t = this;
            return (
              (this.users = []),
              this.$api
                .get("users")
                .then(function(e) {
                  var n = t.options.selected || [];
                  t.users = e.data.map(function(t) {
                    return (t.selected = -1 !== n.indexOf(t.email)), t;
                  });
                })
                .catch(function(e) {
                  (t.users = []), (t.issue = e.message);
                })
            );
          },
          selected: function() {
            return this.users.filter(function(t) {
              return t.selected;
            });
          },
          submit: function() {
            this.$emit("submit", this.selected()), this.$refs.dialog.close();
          },
          toggle: function(t) {
            if (
              (!1 === this.options.multiple &&
                (this.users = this.users.map(function(t) {
                  return (t.selected = !1), t;
                })),
              this.users[t].selected)
            )
              this.users[t].selected = !1;
            else {
              if (
                this.options.max &&
                this.options.max <= this.selected().length
              )
                return;
              this.users[t].selected = !0;
            }
          },
          open: function(t) {
            var e = this;
            (this.options = t),
              this.fetch().then(function() {
                e.$refs.dialog.open();
              });
          }
        }
      },
      pd = cd,
      dd = (n("7568"), Object(m["a"])(pd, ld, ud, !1, null, null, null));
    dd.options.__file = "UsersDialog.vue";
    var fd = dd.exports,
      hd = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.hasChanges
          ? n(
              "nav",
              { staticClass: "k-form-buttons" },
              [
                n(
                  "k-view",
                  [
                    n(
                      "k-button",
                      {
                        staticClass: "k-form-button",
                        attrs: { icon: "undo" },
                        on: { click: t.reset }
                      },
                      [t._v("\n      " + t._s(t.$t("revert")) + "\n    ")]
                    ),
                    n(
                      "k-button",
                      {
                        staticClass: "k-form-button",
                        attrs: { icon: "check" },
                        on: { click: t.save }
                      },
                      [t._v("\n      " + t._s(t.$t("save")) + "\n    ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          : t._e();
      },
      md = [],
      gd = {
        computed: {
          hasChanges: function() {
            return this.$store.getters["form/hasChanges"](this.id);
          },
          id: function() {
            return this.$store.state.form.current;
          }
        },
        created: function() {
          this.$events.$on("keydown.cmd.s", this.save);
        },
        destroyed: function() {
          this.$events.$off("keydown.cmd.s", this.save);
        },
        methods: {
          reset: function() {
            this.$store.dispatch("form/revert", this.id);
          },
          save: function(t) {
            var e = this;
            return (
              !!t &&
              (t.preventDefault && t.preventDefault(),
              !1 === this.hasChanges ||
                void this.$store
                  .dispatch("form/save", this.id)
                  .then(function() {
                    e.$events.$emit("model.update"),
                      e.$store.dispatch("notification/success", ":)");
                  })
                  .catch(function(t) {
                    403 !== t.code &&
                      (t.details
                        ? e.$store.dispatch("notification/error", {
                            message: e.$t("error.form.incomplete"),
                            details: t.details
                          })
                        : e.$store.dispatch("notification/error", {
                            message: e.$t("error.form.notSaved"),
                            details: [
                              {
                                label: "Exception: " + t.exception,
                                message: t.message
                              }
                            ]
                          }));
                  }))
            );
          }
        }
      },
      vd = gd,
      bd = (n("18dd"), Object(m["a"])(vd, hd, md, !1, null, null, null));
    bd.options.__file = "FormButtons.vue";
    var kd = bd.exports,
      _d = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "k-dropzone",
            attrs: { "data-dragging": t.dragging, "data-over": t.over },
            on: {
              dragenter: t.onEnter,
              dragleave: t.onLeave,
              dragover: t.onOver,
              drop: t.onDrop
            }
          },
          [t._t("default")],
          2
        );
      },
      $d = [],
      yd = {
        props: {
          label: { type: String, default: "Drop to upload" },
          disabled: { type: Boolean, default: !1 }
        },
        data: function() {
          return { files: [], dragging: !1, over: !1 };
        },
        methods: {
          cancel: function() {
            this.reset();
          },
          reset: function() {
            (this.dragging = !1), (this.over = !1);
          },
          onDrop: function(t) {
            return !0 === this.disabled
              ? this.reset()
              : t.dataTransfer.types
                ? !1 === t.dataTransfer.types.includes("Files")
                  ? this.reset()
                  : (this.$events.$emit("dropzone.drop"),
                    (this.files = t.dataTransfer.files),
                    this.$emit("drop", this.files),
                    void this.reset())
                : this.reset();
          },
          onEnter: function(t) {
            !1 === this.disabled &&
              t.dataTransfer.types &&
              t.dataTransfer.types.includes("Files") &&
              (this.dragging = !0);
          },
          onLeave: function() {
            this.reset();
          },
          onOver: function(t) {
            !1 === this.disabled &&
              t.dataTransfer.types &&
              t.dataTransfer.types.includes("Files") &&
              ((t.dataTransfer.dropEffect = "copy"), (this.over = !0));
          }
        }
      },
      xd = yd,
      wd = (n("414d"), Object(m["a"])(xd, _d, $d, !1, null, null, null));
    wd.options.__file = "Dropzone.vue";
    var Sd = wd.exports,
      Od = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "k-file-preview" },
          [
            n("k-view", { staticClass: "k-file-preview-layout" }, [
              n("div", { staticClass: "k-file-preview-image" }, [
                n(
                  "a",
                  {
                    directives: [{ name: "tab", rawName: "v-tab" }],
                    staticClass: "k-file-preview-image-link",
                    attrs: {
                      href: t.file.url,
                      title: t.$t("open"),
                      target: "_blank"
                    }
                  },
                  [
                    t.file.panelImage && t.file.panelImage.url
                      ? n("k-image", {
                          attrs: { src: t.file.panelImage.url, back: "none" }
                        })
                      : t.file.panelIcon
                        ? n("k-icon", {
                            staticClass: "k-file-preview-icon",
                            style: { color: t.file.panelIcon.color },
                            attrs: { type: t.file.panelIcon.type }
                          })
                        : t._e()
                  ],
                  1
                )
              ]),
              n("div", { staticClass: "k-file-preview-details" }, [
                n("ul", [
                  n("li", [
                    n("h3", [t._v(t._s(t.$t("template")))]),
                    n("p", [t._v(t._s(t.file.template || "—"))])
                  ]),
                  n("li", [
                    n("h3", [t._v(t._s(t.$t("mime")))]),
                    n("p", [t._v(t._s(t.file.mime))])
                  ]),
                  n("li", [
                    n("h3", [t._v(t._s(t.$t("url")))]),
                    n(
                      "p",
                      [
                        n(
                          "k-link",
                          {
                            attrs: {
                              to: t.file.url,
                              tabindex: "-1",
                              target: "_blank"
                            }
                          },
                          [t._v("/" + t._s(t.file.id))]
                        )
                      ],
                      1
                    )
                  ]),
                  n("li", [
                    n("h3", [t._v(t._s(t.$t("size")))]),
                    n("p", [t._v(t._s(t.file.niceSize))])
                  ]),
                  n("li", [
                    n("h3", [t._v(t._s(t.$t("dimensions")))]),
                    t.file.dimensions
                      ? n("p", [
                          t._v(
                            t._s(t.file.dimensions.width) +
                              "×" +
                              t._s(t.file.dimensions.height) +
                              " " +
                              t._s(t.$t("pixel"))
                          )
                        ])
                      : n("p", [t._v("—")])
                  ]),
                  n("li", [
                    n("h3", [t._v(t._s(t.$t("orientation")))]),
                    t.file.dimensions
                      ? n("p", [
                          t._v(
                            t._s(
                              t.$t(
                                "orientation." + t.file.dimensions.orientation
                              )
                            )
                          )
                        ])
                      : n("p", [t._v("—")])
                  ])
                ])
              ])
            ])
          ],
          1
        );
      },
      Cd = [],
      Ed = { props: { file: Object } },
      jd = Ed,
      Td = (n("696b"), Object(m["a"])(jd, Od, Cd, !1, null, null, null));
    Td.options.__file = "FilePreview.vue";
    var Id = Td.exports,
      Ld = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return 0 === t.tabs.length
          ? n("k-box", {
              attrs: {
                text: "This page has no blueprint setup yet",
                theme: "info"
              }
            })
          : t.tab
            ? n("k-sections", {
                attrs: {
                  parent: t.parent,
                  blueprint: t.blueprint,
                  columns: t.tab.columns
                },
                on: {
                  submit: function(e) {
                    t.$emit("submit", e);
                  }
                }
              })
            : t._e();
      },
      Ad = [],
      qd = {
        props: { parent: String, blueprint: String, tabs: Array },
        data: function() {
          return { tab: null };
        },
        watch: {
          $route: function() {
            this.open();
          },
          blueprint: function() {
            this.open();
          }
        },
        mounted: function() {
          this.open();
        },
        methods: {
          open: function(t) {
            if (0 !== this.tabs.length) {
              t || (t = this.$route.hash.replace("#", "")),
                t || (t = this.tabs[0].name);
              var e = null;
              this.tabs.forEach(function(n) {
                n.name === t && (e = n);
              }),
                e || (e = this.tabs[0]),
                (this.tab = e),
                this.$emit("tab", this.tab);
            }
          }
        }
      },
      Nd = qd,
      Pd = Object(m["a"])(Nd, Ld, Ad, !1, null, null, null);
    Pd.options.__file = "Tabs.vue";
    var Dd = Pd.exports,
      Bd = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.languages.length
          ? n(
              "k-dropdown",
              [
                n(
                  "k-button",
                  {
                    attrs: { responsive: !0, icon: "globe" },
                    on: {
                      click: function(e) {
                        t.$refs.languages.toggle();
                      }
                    }
                  },
                  [t._v("\n    " + t._s(t.language.name) + "\n  ")]
                ),
                t.languages
                  ? n(
                      "k-dropdown-content",
                      { ref: "languages" },
                      [
                        n(
                          "k-dropdown-item",
                          {
                            on: {
                              click: function(e) {
                                t.change(t.defaultLanguage);
                              }
                            }
                          },
                          [t._v(t._s(t.defaultLanguage.name))]
                        ),
                        n("hr"),
                        t._l(t.languages, function(e) {
                          return n(
                            "k-dropdown-item",
                            {
                              key: e.code,
                              on: {
                                click: function(n) {
                                  t.change(e);
                                }
                              }
                            },
                            [t._v("\n      " + t._s(e.name) + "\n    ")]
                          );
                        })
                      ],
                      2
                    )
                  : t._e()
              ],
              1
            )
          : t._e();
      },
      Rd = [],
      Fd = {
        computed: {
          defaultLanguage: function() {
            return this.$store.state.languages.default;
          },
          language: function() {
            return this.$store.state.languages.current;
          },
          languages: function() {
            return this.$store.state.languages.all.filter(function(t) {
              return !1 === t.default;
            });
          }
        },
        methods: {
          change: function(t) {
            this.$store.dispatch("languages/current", t),
              this.$emit("change", t);
          }
        }
      },
      Md = Fd,
      zd = Object(m["a"])(Md, Bd, Rd, !1, null, null, null);
    zd.options.__file = "Languages.vue";
    var Ud = zd.exports,
      Hd = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.user && t.view
          ? n(
              "div",
              { staticClass: "k-topbar" },
              [
                n("k-view", [
                  n(
                    "div",
                    { staticClass: "k-topbar-wrapper" },
                    [
                      n(
                        "k-dropdown",
                        { staticClass: "k-topbar-menu" },
                        [
                          n(
                            "k-button",
                            {
                              staticClass:
                                "k-topbar-button k-topbar-menu-button",
                              attrs: { tooltip: t.$t("menu"), icon: "bars" },
                              on: {
                                click: function(e) {
                                  t.$refs.menu.toggle();
                                }
                              }
                            },
                            [n("k-icon", { attrs: { type: "angle-down" } })],
                            1
                          ),
                          n(
                            "k-dropdown-content",
                            { ref: "menu", staticClass: "k-topbar-menu" },
                            [
                              n(
                                "ul",
                                [
                                  t._l(t.views, function(e, i) {
                                    return e.menu
                                      ? n(
                                          "li",
                                          {
                                            key: "menu-item-" + i,
                                            attrs: {
                                              "aria-current":
                                                t.$store.state.view === i
                                            }
                                          },
                                          [
                                            n(
                                              "k-dropdown-item",
                                              {
                                                attrs: {
                                                  disabled:
                                                    !1 ===
                                                    t.$permissions.access[i],
                                                  icon: e.icon,
                                                  link: e.link
                                                }
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(t.viewTitle(i, e)) +
                                                    "\n              "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      : t._e();
                                  }),
                                  n("li", [n("hr")]),
                                  n(
                                    "li",
                                    {
                                      attrs: {
                                        "aria-current":
                                          "account" === t.$route.meta.view
                                      }
                                    },
                                    [
                                      n(
                                        "k-dropdown-item",
                                        {
                                          attrs: {
                                            icon: "account",
                                            link: "/account"
                                          }
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("view.account")) +
                                              "\n              "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  n("li", [n("hr")]),
                                  n(
                                    "li",
                                    [
                                      n(
                                        "k-dropdown-item",
                                        {
                                          attrs: {
                                            icon: "logout",
                                            link: "/logout"
                                          }
                                        },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("logout")) +
                                              "\n              "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                2
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      t.view
                        ? n(
                            "k-link",
                            {
                              directives: [{ name: "tab", rawName: "v-tab" }],
                              staticClass:
                                "k-topbar-button k-topbar-view-button",
                              attrs: { to: t.view.link }
                            },
                            [
                              n("k-icon", { attrs: { type: t.view.icon } }),
                              t._v(" " + t._s(t.breadcrumbTitle) + "\n      ")
                            ],
                            1
                          )
                        : t._e(),
                      t.$store.state.breadcrumb.length > 1
                        ? n(
                            "k-dropdown",
                            { staticClass: "k-topbar-breadcrumb-menu" },
                            [
                              n(
                                "k-button",
                                {
                                  staticClass: "k-topbar-button",
                                  on: {
                                    click: function(e) {
                                      t.$refs.crumb.toggle();
                                    }
                                  }
                                },
                                [
                                  t._v("\n          …\n          "),
                                  n("k-icon", { attrs: { type: "angle-down" } })
                                ],
                                1
                              ),
                              n(
                                "k-dropdown-content",
                                { ref: "crumb" },
                                [
                                  n(
                                    "k-dropdown-item",
                                    {
                                      attrs: {
                                        icon: t.view.icon,
                                        link: t.view.link
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(
                                            t.$t(
                                              "view." + t.$store.state.view,
                                              t.view.label
                                            )
                                          ) +
                                          "\n          "
                                      )
                                    ]
                                  ),
                                  t._l(t.$store.state.breadcrumb, function(
                                    e,
                                    i
                                  ) {
                                    return n(
                                      "k-dropdown-item",
                                      {
                                        key: "crumb-" + i + "-dropdown",
                                        attrs: {
                                          icon: t.view.icon,
                                          link: e.link
                                        }
                                      },
                                      [
                                        t._v(
                                          "\n            " +
                                            t._s(e.label) +
                                            "\n          "
                                        )
                                      ]
                                    );
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          )
                        : t._e(),
                      n(
                        "nav",
                        { staticClass: "k-topbar-crumbs" },
                        t._l(t.$store.state.breadcrumb, function(e, i) {
                          return n(
                            "k-link",
                            {
                              directives: [{ name: "tab", rawName: "v-tab" }],
                              key: "crumb-" + i,
                              attrs: { to: e.link }
                            },
                            [
                              t._v(
                                "\n          " + t._s(e.label) + "\n        "
                              )
                            ]
                          );
                        }),
                        1
                      ),
                      n(
                        "div",
                        { staticClass: "k-topbar-signals" },
                        [
                          t.notification
                            ? n(
                                "k-button",
                                {
                                  staticClass: "k-topbar-notification",
                                  attrs: { theme: "positive" },
                                  on: {
                                    click: function(e) {
                                      t.$store.dispatch("notification/close");
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(t.notification.message) +
                                      "\n        "
                                  )
                                ]
                              )
                            : t._e(),
                          n("k-button", {
                            attrs: { tooltip: t.$t("search"), icon: "search" },
                            on: {
                              click: function(e) {
                                t.$store.dispatch("search", !0);
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          : t._e();
      },
      Vd = [],
      Kd = Object(u["a"])(
        {
          site: { link: "/site", icon: "page", menu: !0 },
          users: { link: "/users", icon: "users", menu: !0 },
          settings: { link: "/settings", icon: "settings", menu: !0 },
          account: { link: "/account", icon: "users", menu: !1 }
        },
        window.panel.plugins.views
      ),
      Gd = {
        computed: {
          breadcrumbTitle: function() {
            var t = this.$t(
              "view.".concat(this.$store.state.view),
              this.view.label
            );
            return (
              ("site" === this.$store.state.view &&
                this.$store.state.system.info.title) ||
              t
            );
          },
          view: function() {
            return Kd[this.$store.state.view];
          },
          views: function() {
            return Kd;
          },
          user: function() {
            return this.$store.state.user.current;
          },
          notification: function() {
            return this.$store.state.notification.type &&
              "error" !== this.$store.state.notification.type
              ? this.$store.state.notification
              : null;
          },
          unregistered: function() {
            return !this.$store.state.system.info.license;
          }
        },
        methods: {
          viewTitle: function(t, e) {
            var n = this.$t("view.".concat(t), e.label);
            return (
              ("site" === t && this.$store.state.system.info.breadcrumbTitle) ||
              n
            );
          }
        }
      },
      Yd = Gd,
      Wd = (n("1e3b"), Object(m["a"])(Yd, Hd, Vd, !1, null, null, null));
    Wd.options.__file = "Topbar.vue";
    var Jd = Wd.exports,
      Xd = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-grid",
          { staticClass: "k-sections", attrs: { gutter: "large" } },
          t._l(t.columns, function(e, i) {
            return n(
              "k-column",
              { key: t.parent + "-column-" + i, attrs: { width: e.width } },
              [
                t._l(e.sections, function(e, s) {
                  return [
                    t.exists(e.type)
                      ? n(
                          "k-" + e.type + "-section",
                          t._b(
                            {
                              key:
                                t.parent +
                                "-column-" +
                                i +
                                "-section-" +
                                s +
                                "-" +
                                t.blueprint,
                              tag: "component",
                              class: "k-section k-section-name-" + e.name,
                              attrs: {
                                name: e.name,
                                parent: t.parent,
                                blueprint: t.blueprint
                              },
                              on: {
                                submit: function(e) {
                                  t.$emit("submit", e);
                                }
                              }
                            },
                            "component",
                            e,
                            !1
                          )
                        )
                      : [
                          n("k-box", {
                            key: t.parent + "-column-" + i + "-section-" + s,
                            attrs: {
                              text: t.$t("error.section.type.invalid", {
                                type: e.type
                              }),
                              theme: "negative"
                            }
                          })
                        ]
                  ];
                })
              ],
              2
            );
          }),
          1
        );
      },
      Qd = [],
      Zd = {
        props: { parent: String, blueprint: String, columns: Array },
        methods: {
          exists: function(t) {
            return i["a"].options.components["k-" + t + "-section"];
          }
        }
      },
      tf = Zd,
      ef = (n("6bcd"), Object(m["a"])(tf, Xd, Qd, !1, null, null, null));
    ef.options.__file = "Sections.vue";
    var nf = ef.exports,
      sf = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "section",
          { staticClass: "k-info-section" },
          [
            n("k-headline", { staticClass: "k-info-section-headline" }, [
              t._v(t._s(t.headline))
            ]),
            n(
              "k-box",
              { attrs: { theme: t.theme } },
              [n("k-text", { domProps: { innerHTML: t._s(t.text) } })],
              1
            )
          ],
          1
        );
      },
      of = [],
      af = {
        props: { parent: String, blueprint: String, name: String },
        methods: {
          load: function() {
            return this.$api.get(this.parent + "/sections/" + this.name);
          }
        }
      },
      rf = {
        mixins: [af],
        data: function() {
          return { headline: null, issue: null, text: null, theme: null };
        },
        created: function() {
          var t = this;
          this.load()
            .then(function(e) {
              (t.headline = e.options.headline),
                (t.text = e.options.text),
                (t.theme = e.options.theme || "info");
            })
            .catch(function(e) {
              t.issue = e;
            });
        }
      },
      lf = rf,
      uf = (n("4333"), Object(m["a"])(lf, sf, of, !1, null, null, null));
    uf.options.__file = "InfoSection.vue";
    var cf = uf.exports,
      pf = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return !1 === t.isLoading
          ? n(
              "section",
              { staticClass: "k-pages-section" },
              [
                n(
                  "header",
                  { staticClass: "k-section-header" },
                  [
                    n("k-headline", { attrs: { link: t.options.link } }, [
                      t._v("\n      " + t._s(t.headline) + " "),
                      t.options.min
                        ? n(
                            "abbr",
                            { attrs: { title: "This section is required" } },
                            [t._v("*")]
                          )
                        : t._e()
                    ]),
                    t.add
                      ? n(
                          "k-button-group",
                          [
                            n(
                              "k-button",
                              {
                                attrs: { icon: "add" },
                                on: {
                                  click: function(e) {
                                    t.action(null, "create");
                                  }
                                }
                              },
                              [t._v(t._s(t.$t("add")))]
                            )
                          ],
                          1
                        )
                      : t._e()
                  ],
                  1
                ),
                t.error
                  ? [
                      n(
                        "k-box",
                        { attrs: { theme: "negative" } },
                        [
                          n("k-text", { attrs: { size: "small" } }, [
                            n("strong", [
                              t._v(
                                t._s(
                                  t.$t("error.section.notLoaded", {
                                    name: t.name
                                  })
                                ) + ":"
                              )
                            ]),
                            t._v("\n        " + t._s(t.error) + "\n      ")
                          ])
                        ],
                        1
                      )
                    ]
                  : [
                      t.data.length
                        ? n("k-collection", {
                            attrs: {
                              layout: t.options.layout,
                              items: t.data,
                              pagination: t.pagination,
                              sortable: t.options.sortable,
                              size: t.options.size
                            },
                            on: {
                              change: t.sort,
                              paginate: t.paginate,
                              action: t.action
                            }
                          })
                        : n(
                            "k-empty",
                            {
                              attrs: { layout: t.options.layout, icon: "page" },
                              on: {
                                click: function(e) {
                                  t.add && t.action(null, "create");
                                }
                              }
                            },
                            [
                              t._v(
                                "\n      " +
                                  t._s(t.options.empty || t.$t("pages.empty")) +
                                  "\n    "
                              )
                            ]
                          ),
                      n("k-page-create-dialog", { ref: "create" }),
                      n("k-page-rename-dialog", {
                        ref: "rename",
                        on: { success: t.update }
                      }),
                      n("k-page-url-dialog", {
                        ref: "url",
                        on: { success: t.update }
                      }),
                      n("k-page-status-dialog", {
                        ref: "status",
                        on: { success: t.update }
                      }),
                      n("k-page-template-dialog", {
                        ref: "template",
                        on: { success: t.update }
                      }),
                      n("k-page-remove-dialog", {
                        ref: "remove",
                        on: { success: t.update }
                      })
                    ]
              ],
              2
            )
          : t._e();
      },
      df = [],
      ff = {
        props: { parent: String, blueprint: String, name: String },
        data: function() {
          return {
            data: [],
            error: null,
            isLoading: !1,
            options: {
              empty: null,
              headline: null,
              layout: "list",
              link: null,
              max: null,
              min: null,
              size: null,
              sortable: null
            },
            pagination: { page: null }
          };
        },
        computed: {
          headline: function() {
            return this.options.headline || " ";
          },
          language: function() {
            return this.$store.state.languages.current;
          },
          paginationId: function() {
            return "kirby$pagination$" + this.parent + "/" + this.name;
          }
        },
        watch: {
          language: function() {
            this.reload();
          }
        },
        methods: {
          items: function(t) {
            return t;
          },
          load: function(t) {
            var e = this;
            t || (this.isLoading = !0),
              null === this.pagination.page &&
                (this.pagination.page =
                  localStorage.getItem(this.paginationId) || 1),
              this.$api
                .get(this.parent + "/sections/" + this.name, {
                  page: this.pagination.page
                })
                .then(function(t) {
                  (e.isLoading = !1),
                    (e.options = t.options),
                    (e.pagination = t.pagination),
                    (e.data = e.items(t.data));
                })
                .catch(function(t) {
                  (e.isLoading = !1), (e.error = t.message);
                });
          },
          paginate: function(t) {
            localStorage.setItem(this.paginationId, t.page),
              (this.pagination = t),
              this.reload();
          },
          reload: function() {
            this.load(!0);
          }
        }
      },
      hf = {
        mixins: [ff],
        computed: {
          add: function() {
            return this.options.add && this.$permissions.pages.create;
          }
        },
        created: function() {
          this.load(), this.$events.$on("page.changeStatus", this.reload);
        },
        destroyed: function() {
          this.$events.$off("page.changeStatus", this.reload);
        },
        methods: {
          action: function(t, e) {
            var n = this;
            switch (e) {
              case "create":
                this.$refs.create.open(
                  this.options.link || this.parent,
                  this.parent + "/children/blueprints",
                  this.name
                );
                break;
              case "preview":
                var i = window.open("", "_blank");
                (i.document.write = "..."),
                  this.$api.pages
                    .preview(t.id)
                    .then(function(t) {
                      i.location.href = t;
                    })
                    .catch(function(t) {
                      n.$store.dispatch("notification/error", t);
                    });
                break;
              case "rename":
                this.$refs.rename.open(t.id);
                break;
              case "url":
                this.$refs.url.open(t.id);
                break;
              case "status":
                this.$refs.status.open(t.id);
                break;
              case "template":
                this.$refs.template.open(t.id);
                break;
              case "remove":
                this.$refs.remove.open(t.id);
                break;
              default:
                throw new Error("Invalid action");
            }
          },
          items: function(t) {
            var e = this;
            return t.map(function(t) {
              return (
                (t.flag = {
                  class: "k-status-flag k-status-flag-" + t.status,
                  tooltip: e.$t("page.status"),
                  icon:
                    !1 === t.permissions.changeStatus ? "protected" : "circle",
                  disabled: !1 === t.permissions.changeStatus,
                  click: function() {
                    e.action(t, "status");
                  }
                }),
                (t.options = function(n) {
                  e.$api.pages
                    .options(t.id, "list")
                    .then(function(t) {
                      return n(t);
                    })
                    .catch(function(t) {
                      e.$store.dispatch("notification/error", t);
                    });
                }),
                (t.sortable = t.permissions.sort && e.options.sortable),
                t
              );
            });
          },
          sort: function(t) {
            var e = this,
              n = null;
            if ((t.added && (n = "added"), t.moved && (n = "moved"), n)) {
              var i = t[n].element,
                s = t[n].newIndex + 1 + this.pagination.offset;
              this.$api.pages
                .status(i.id, "listed", s)
                .then(function() {
                  e.$store.dispatch("notification/success", ":)");
                })
                .catch(function(t) {
                  e.$store.dispatch("notification/error", {
                    message: t.message,
                    details: t.details
                  }),
                    e.reload();
                });
            }
          },
          update: function() {
            this.reload(), this.$events.$emit("model.update");
          }
        }
      },
      mf = hf,
      gf = Object(m["a"])(mf, pf, df, !1, null, null, null);
    gf.options.__file = "PagesSection.vue";
    var vf = gf.exports,
      bf = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return !1 === t.isLoading
          ? n(
              "section",
              { staticClass: "k-files-section" },
              [
                n(
                  "header",
                  { staticClass: "k-section-header" },
                  [
                    n("k-headline", [
                      t._v("\n      " + t._s(t.headline) + " "),
                      t.options.min
                        ? n(
                            "abbr",
                            { attrs: { title: "This section is required" } },
                            [t._v("*")]
                          )
                        : t._e()
                    ]),
                    t.add
                      ? n(
                          "k-button-group",
                          [
                            n(
                              "k-button",
                              {
                                attrs: { icon: "upload" },
                                on: { click: t.upload }
                              },
                              [t._v(t._s(t.$t("add")))]
                            )
                          ],
                          1
                        )
                      : t._e()
                  ],
                  1
                ),
                t.error
                  ? [
                      n(
                        "k-box",
                        { attrs: { theme: "negative" } },
                        [
                          n("k-text", { attrs: { size: "small" } }, [
                            n("strong", [
                              t._v(
                                t._s(
                                  t.$t("error.section.notLoaded", {
                                    name: t.name
                                  })
                                ) + ":"
                              )
                            ]),
                            t._v("\n        " + t._s(t.error) + "\n      ")
                          ])
                        ],
                        1
                      )
                    ]
                  : [
                      n(
                        "k-dropzone",
                        {
                          attrs: { disabled: !1 === t.add },
                          on: { drop: t.drop }
                        },
                        [
                          t.data.length
                            ? n("k-collection", {
                                attrs: {
                                  items: t.data,
                                  layout: t.options.layout,
                                  pagination: t.pagination,
                                  sortable: t.options.sortable,
                                  size: t.options.size
                                },
                                on: {
                                  sort: t.sort,
                                  paginate: t.paginate,
                                  action: t.action
                                }
                              })
                            : n(
                                "k-empty",
                                {
                                  attrs: {
                                    layout: t.options.layout,
                                    icon: "image"
                                  },
                                  on: {
                                    click: function(e) {
                                      t.add && t.upload();
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    "\n        " +
                                      t._s(
                                        t.options.empty || t.$t("files.empty")
                                      ) +
                                      "\n      "
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      n("k-file-rename-dialog", {
                        ref: "rename",
                        on: { success: t.update }
                      }),
                      n("k-file-remove-dialog", {
                        ref: "remove",
                        on: { success: t.update }
                      }),
                      n("k-upload", {
                        ref: "upload",
                        on: { success: t.uploaded, error: t.reload }
                      })
                    ]
              ],
              2
            )
          : t._e();
      },
      kf = [],
      _f = {
        mixins: [ff],
        computed: {
          add: function() {
            return (
              !(
                !this.$permissions.files.create || !1 === this.options.upload
              ) && this.options.upload
            );
          }
        },
        created: function() {
          this.load(), this.$events.$on("model.update", this.reload);
        },
        destroyed: function() {
          this.$events.$off("model.update", this.reload);
        },
        methods: {
          action: function(t, e) {
            switch (e) {
              case "edit":
                this.$router.push(t.link);
                break;
              case "download":
                window.open(t.url);
                break;
              case "rename":
                this.$refs.rename.open(t.parent, t.filename);
                break;
              case "replace":
                this.replace(t);
                break;
              case "remove":
                this.$refs.remove.open(t.parent, t.filename);
                break;
            }
          },
          drop: function(t) {
            if (!1 === this.add) return !1;
            this.$refs.upload.drop(
              t,
              Object(u["a"])({}, this.add, { url: d.api + "/" + this.add.api })
            );
          },
          items: function(t) {
            var e = this;
            return t.map(function(t) {
              return (
                (t.options = function(n) {
                  e.$api.files
                    .options(t.parent, t.filename, "list")
                    .then(function(t) {
                      return n(t);
                    })
                    .catch(function(t) {
                      e.$store.dispatch("notification/error", t);
                    });
                }),
                (t.sortable = e.options.sortable),
                t
              );
            });
          },
          replace: function(t) {
            this.$refs.upload.open({
              url: d.api + "/" + this.$api.files.url(t.parent, t.filename),
              accept: t.mime,
              multiple: !1
            });
          },
          sort: function(t) {
            var e = this;
            if (!1 === this.options.sortable) return !1;
            (t = t.map(function(t) {
              return t.id;
            })),
              this.$api
                .patch(this.parent + "/files/sort", { files: t })
                .then(function() {
                  e.$store.dispatch("notification/success", ":)");
                })
                .catch(function(t) {
                  e.reload(),
                    e.$store.dispatch("notification/error", t.message);
                });
          },
          update: function() {
            this.$events.$emit("model.update");
          },
          upload: function() {
            if (!1 === this.add) return !1;
            this.$refs.upload.open(
              Object(u["a"])({}, this.add, { url: d.api + "/" + this.add.api })
            );
          },
          uploaded: function() {
            this.$events.$emit("file.create"),
              this.$events.$emit("model.update"),
              this.$store.dispatch("notification/success", ":)");
          }
        }
      },
      $f = _f,
      yf = Object(m["a"])($f, bf, kf, !1, null, null, null);
    yf.options.__file = "FilesSection.vue";
    var xf = yf.exports,
      wf = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isLoading
          ? t._e()
          : n(
              "section",
              { staticClass: "k-fields-section" },
              [
                t.issue
                  ? [
                      n(
                        "k-headline",
                        { staticClass: "k-fields-issue-headline" },
                        [t._v("Error")]
                      ),
                      n("k-box", {
                        attrs: { text: t.issue.message, theme: "negative" }
                      })
                    ]
                  : t._e(),
                n("k-form", {
                  attrs: { fields: t.fields, validate: !0, value: t.values },
                  on: { input: t.input, submit: t.onSubmit }
                })
              ],
              2
            );
      },
      Sf = [],
      Of = {
        mixins: [af],
        data: function() {
          return { fields: {}, isLoading: !0, issue: null };
        },
        computed: {
          id: function() {
            return this.$store.state.form.current;
          },
          language: function() {
            return this.$store.state.languages.current;
          },
          values: function() {
            return this.$store.getters["form/values"](this.id);
          }
        },
        watch: {
          $route: function() {
            (this.fields = {}), (this.isLoading = !0), (this.issue = null);
          },
          language: function() {
            this.fetch();
          }
        },
        created: function() {
          this.fetch();
        },
        methods: {
          input: function(t, e, n) {
            this.$store.dispatch("form/update", [this.id, n, t[n]]);
          },
          fetch: function() {
            var t = this;
            this.$api
              .get(this.parent + "/sections/" + this.name)
              .then(function(e) {
                (t.fields = e.fields),
                  Object.keys(t.fields).forEach(function(e) {
                    (t.fields[e].section = t.name),
                      (t.fields[e].endpoints = {
                        field: t.parent + "/fields/" + e,
                        section: t.parent + "/sections/" + t.name,
                        model: t.parent
                      });
                  }),
                  (t.isLoading = !1);
              })
              .catch(function(e) {
                (t.issue = e), (t.isLoading = !1);
              });
          },
          onSubmit: function(t) {
            this.$events.$emit("keydown.cmd.s", t);
          }
        }
      },
      Cf = Of,
      Ef = (n("7d5d"), Object(m["a"])(Cf, wf, Sf, !1, null, null, null));
    Ef.options.__file = "FieldsSection.vue";
    var jf = Ef.exports,
      Tf = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("k-view", { staticClass: "k-error-view" }, [
          n(
            "div",
            { staticClass: "k-error-view-content" },
            [
              n("k-text", [
                n(
                  "p",
                  [
                    n("k-icon", {
                      staticClass: "k-error-view-icon",
                      attrs: { type: "alert" }
                    })
                  ],
                  1
                ),
                n("p", [t._t("default")], 2)
              ])
            ],
            1
          )
        ]);
      },
      If = [],
      Lf = (n("d221"), {}),
      Af = Object(m["a"])(Lf, Tf, If, !1, null, null, null);
    Af.options.__file = "ErrorView.vue";
    var qf = Af.exports;
    i["a"].component("k-dialog", qu),
      i["a"].component("k-error-dialog", Fu),
      i["a"].component("k-file-rename-dialog", ec),
      i["a"].component("k-file-remove-dialog", Ku),
      i["a"].component("k-files-dialog", rc),
      i["a"].component("k-language-create-dialog", fc),
      i["a"].component("k-language-remove-dialog", kc),
      i["a"].component("k-language-update-dialog", Sc),
      i["a"].component("k-page-create-dialog", Ic),
      i["a"].component("k-page-rename-dialog", Uc),
      i["a"].component("k-page-remove-dialog", Dc),
      i["a"].component("k-page-status-dialog", Wc),
      i["a"].component("k-page-template-dialog", ep),
      i["a"].component("k-page-url-dialog", rp),
      i["a"].component("k-pages-dialog", mp),
      i["a"].component("k-site-rename-dialog", kp),
      i["a"].component("k-user-create-dialog", Sp),
      i["a"].component("k-user-email-dialog", Ip),
      i["a"].component("k-user-language-dialog", Dp),
      i["a"].component("k-user-password-dialog", Up),
      i["a"].component("k-user-remove-dialog", Wp),
      i["a"].component("k-user-rename-dialog", ed),
      i["a"].component("k-user-role-dialog", rd),
      i["a"].component("k-users-dialog", fd),
      i["a"].component("k-form-buttons", kd),
      i["a"].component("k-dropzone", Sd),
      i["a"].component("k-file-preview", Id),
      i["a"].component("k-tabs", Dd),
      i["a"].component("k-languages-dropdown", Ud),
      i["a"].component("k-topbar", Jd),
      i["a"].component("k-sections", nf),
      i["a"].component("k-info-section", cf),
      i["a"].component("k-pages-section", vf),
      i["a"].component("k-files-section", xf),
      i["a"].component("k-fields-section", jf),
      i["a"].component("k-error-view", qf);
    var Nf = {
        user: function() {
          return dm.get("auth");
        },
        login: function(t) {
          var e = {
            long: t.remember || !1,
            email: t.email,
            password: t.password
          };
          return dm.post("auth/login", e).then(function(t) {
            return t.user;
          });
        },
        logout: function() {
          return dm.post("auth/logout");
        }
      },
      Pf = {
        get: function(t, e, n) {
          return dm.get(this.url(t, e), n).then(function(t) {
            return !0 === Array.isArray(t.content) && (t.content = {}), t;
          });
        },
        update: function(t, e, n) {
          return dm.patch(this.url(t, e), n);
        },
        rename: function(t, e, n) {
          return dm.patch(this.url(t, e, "name"), { name: n });
        },
        url: function(t, e, n) {
          var i = t + "/files/" + e;
          return n && (i += "/" + n), i;
        },
        link: function(t, e, n) {
          return "/" + this.url(t, e, n);
        },
        delete: function(t, e) {
          return dm.delete(this.url(t, e));
        },
        options: function(t, e, n) {
          return dm
            .get(this.url(t, e), { select: "options" })
            .then(function(t) {
              var e = t.options,
                s = [];
              return (
                "list" === n &&
                  s.push({
                    icon: "open",
                    text: i["a"].i18n.translate("open"),
                    click: "download"
                  }),
                s.push({
                  icon: "title",
                  text: i["a"].i18n.translate("rename"),
                  click: "rename",
                  disabled: !e.changeName
                }),
                s.push({
                  icon: "upload",
                  text: i["a"].i18n.translate("replace"),
                  click: "replace",
                  disabled: !e.replace
                }),
                s.push({
                  icon: "trash",
                  text: i["a"].i18n.translate("delete"),
                  click: "remove",
                  disabled: !e.delete
                }),
                s
              );
            });
        },
        breadcrumb: function(t, e) {
          var n = null,
            i = [];
          switch (e) {
            case "UserFile":
              i.push({
                label: t.parent.username,
                link: dm.users.link(t.parent.id)
              }),
                (n = "users/" + t.parent.id);
              break;
            case "SiteFile":
              n = "site";
              break;
            case "PageFile":
              (i = t.parents.map(function(t) {
                return { label: t.title, link: dm.pages.link(t.id) };
              })),
                (n = "pages/" + t.parent.id);
              break;
          }
          return (
            i.push({ label: t.filename, link: this.link(n, t.filename) }), i
          );
        }
      },
      Df = {
        create: function(t, e) {
          return null === t || "/" === t
            ? dm.post("site/children", e)
            : dm.post(this.url(t, "children"), e);
        },
        url: function(t, e) {
          var n = null === t ? "pages" : "pages/" + t.replace(/\//g, "+");
          return e && (n += "/" + e), n;
        },
        link: function(t) {
          return "/" + this.url(t);
        },
        get: function(t, e) {
          return dm.get(this.url(t), e).then(function(t) {
            return !0 === Array.isArray(t.content) && (t.content = {}), t;
          });
        },
        options: function(t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "view";
          return dm.get(this.url(t), { select: "options" }).then(function(t) {
            var n = t.options,
              s = [];
            return (
              "list" === e &&
                s.push({
                  click: "preview",
                  icon: "open",
                  text: i["a"].i18n.translate("open"),
                  disabled: !1 === n.preview
                }),
              s.push({
                click: "rename",
                icon: "title",
                text: i["a"].i18n.translate("rename"),
                disabled: !n.changeTitle
              }),
              s.push({
                click: "url",
                icon: "url",
                text: i["a"].i18n.translate("page.changeSlug"),
                disabled: !n.changeSlug
              }),
              s.push({
                click: "status",
                icon: "preview",
                text: i["a"].i18n.translate("page.changeStatus"),
                disabled: !n.changeStatus
              }),
              s.push({
                click: "template",
                icon: "template",
                text: i["a"].i18n.translate("page.changeTemplate"),
                disabled: !n.changeTemplate
              }),
              s.push({
                click: "remove",
                icon: "trash",
                text: i["a"].i18n.translate("delete"),
                disabled: !n.delete
              }),
              s
            );
          });
        },
        preview: function(t) {
          return this.get(t, { select: "previewUrl" }).then(function(t) {
            return t.previewUrl;
          });
        },
        update: function(t, e) {
          return dm.patch(this.url(t), e);
        },
        children: function(t, e) {
          return dm.post(this.url(t, "children/search"), e);
        },
        files: function(t, e) {
          return dm.post(this.url(t, "files/search"), e);
        },
        delete: function(t, e) {
          return dm.delete(this.url(t), e);
        },
        slug: function(t, e) {
          return dm.patch(this.url(t, "slug"), { slug: e });
        },
        title: function(t, e) {
          return dm.patch(this.url(t, "title"), { title: e });
        },
        template: function(t, e) {
          return dm.patch(this.url(t, "template"), { template: e });
        },
        search: function(t, e) {
          return t
            ? dm.post(
                "pages/" +
                  t.replace("/", "+") +
                  "/children/search?select=id,title,hasChildren",
                e
              )
            : dm.post("site/children/search?select=id,title,hasChildren", e);
        },
        status: function(t, e, n) {
          return dm.patch(this.url(t, "status"), { status: e, position: n });
        },
        breadcrumb: function(t) {
          var e = this,
            n =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = t.parents.map(function(t) {
              return { label: t.title, link: e.link(t.id) };
            });
          return (
            !0 === n && i.push({ label: t.title, link: this.link(t.id) }), i
          );
        }
      },
      Bf = n("2f62"),
      Rf = n("3835"),
      Ff = {
        namespaced: !0,
        state: { models: {}, current: null, isLocked: !1 },
        getters: {
          current: function(t) {
            return t.current;
          },
          exists: function(t) {
            return function(e) {
              return t.models.hasOwnProperty(e);
            };
          },
          hasChanges: function(t, e) {
            return function(t) {
              return Object.keys(e.model(t).changes).length > 0;
            };
          },
          id: function(t, e, n) {
            return function(t) {
              return n.languages.current
                ? t + "/" + n.languages.current.code
                : t;
            };
          },
          isCurrent: function(t) {
            return function(e) {
              return (t.current = e);
            };
          },
          model: function(t, e) {
            return function(n) {
              return e.exists(n)
                ? t.models[n]
                : { originals: {}, values: {}, changes: {}, api: null };
            };
          },
          originals: function(t, e) {
            return function(t) {
              return yr(e.model(t).originals);
            };
          },
          values: function(t, e) {
            return function(t) {
              return yr(e.model(t).values);
            };
          }
        },
        mutations: {
          CREATE: function(t, e) {
            i["a"].set(t.models, e.id, {
              api: e.api,
              originals: yr(e.content),
              values: yr(e.content),
              changes: {}
            });
          },
          CURRENT: function(t, e) {
            t.current = e;
          },
          IS_LOCKED: function(t, e) {
            t.isLocked = e;
          },
          REMOVE: function(t, e) {
            i["a"].delete(t.models, e),
              localStorage.removeItem("kirby$form$" + e);
          },
          DELETE_CHANGES: function(t, e) {
            i["a"].set(t.models[e], "changes", {}),
              localStorage.removeItem("kirby$form$" + e);
          },
          SET_ORIGINALS: function(t, e) {
            var n = Object(Rf["a"])(e, 2),
              i = n[0],
              s = n[1];
            t.models[i].originals = yr(s);
          },
          SET_VALUES: function(t, e) {
            var n = Object(Rf["a"])(e, 2),
              i = n[0],
              s = n[1];
            t.models[i].values = yr(s);
          },
          UPDATE: function(t, e) {
            var n = Object(Rf["a"])(e, 3),
              s = n[0],
              o = n[1],
              a = n[2];
            (a = yr(a)), i["a"].set(t.models[s].values, o, a);
            var r = JSON.stringify(t.models[s].originals[o]),
              l = JSON.stringify(a);
            r === l
              ? i["a"].delete(t.models[s].changes, o)
              : i["a"].set(t.models[s].changes, o, !0),
              localStorage.setItem(
                "kirby$form$" + s,
                JSON.stringify(t.models[s].values)
              );
          }
        },
        actions: {
          create: function(t, e) {
            t.rootState.languages.current &&
              t.rootState.languages.current.code &&
              (e.id = t.getters.id(e.id)),
              t.commit("CREATE", e),
              t.commit("CURRENT", e.id);
            var n = localStorage.getItem("kirby$form$" + e.id);
            if (n) {
              var i = JSON.parse(n);
              Object.keys(i).forEach(function(n) {
                var s = i[n];
                t.commit("UPDATE", [e.id, n, s]);
              });
            }
          },
          remove: function(t, e) {
            t.commit("REMOVE", e);
          },
          revert: function(t, e) {
            var n = t.getters.model(e);
            return dm.get(n.api, { select: "content" }).then(function(n) {
              t.commit("SET_ORIGINALS", [e, n.content]),
                t.commit("SET_VALUES", [e, n.content]),
                t.commit("DELETE_CHANGES", e);
            });
          },
          save: function(t, e) {
            e = e || t.state.current;
            var n = t.getters.model(e);
            return (
              (!t.getters.isCurrent(e) || !t.state.isLocked) &&
              dm.patch(n.api, n.values).then(function() {
                t.dispatch("revert", e);
              })
            );
          },
          lock: function(t) {
            t.commit("IS_LOCKED", !0);
          },
          unlock: function(t) {
            t.commit("IS_LOCKED", !1);
          },
          update: function(t, e) {
            var n = Object(Rf["a"])(e, 3),
              i = n[0],
              s = n[1],
              o = n[2];
            t.commit("UPDATE", [i, s, o]);
          }
        }
      },
      Mf = {
        namespaced: !0,
        state: { all: [], current: null, default: null },
        mutations: {
          SET_ALL: function(t, e) {
            t.all = e.map(function(t) {
              return {
                code: t.code,
                name: t.name,
                default: t.default,
                direction: t.direction
              };
            });
          },
          SET_CURRENT: function(t, e) {
            (t.current = e),
              e && e.code && localStorage.setItem("kirby$language", e.code);
          },
          SET_DEFAULT: function(t, e) {
            t.default = e;
          }
        },
        actions: {
          current: function(t, e) {
            t.commit("SET_CURRENT", e);
          },
          install: function(t, e) {
            var n = e.filter(function(t) {
              return t.default;
            })[0];
            t.commit("SET_ALL", e), t.commit("SET_DEFAULT", n);
            var i = localStorage.getItem("kirby$language");
            if (i) {
              var s = e.filter(function(t) {
                return t.code === i;
              })[0];
              if (s) return void t.commit("SET_CURRENT", s);
            }
            t.commit("SET_CURRENT", n || e[0]);
          },
          load: function(t) {
            return dm.get("languages").then(function(e) {
              t.dispatch("install", e.data);
            });
          }
        }
      },
      zf = {
        timer: null,
        namespaced: !0,
        state: { type: null, message: null, details: null, timeout: null },
        mutations: {
          SET: function(t, e) {
            (t.type = e.type),
              (t.message = e.message),
              (t.details = e.details),
              (t.timeout = e.timeout);
          },
          UNSET: function(t) {
            (t.type = null),
              (t.message = null),
              (t.details = null),
              (t.timeout = null);
          }
        },
        actions: {
          close: function(t) {
            clearTimeout(this.timer), t.commit("UNSET");
          },
          open: function(t, e) {
            t.dispatch("close"),
              t.commit("SET", e),
              e.timeout &&
                (this.timer = setTimeout(function() {
                  t.dispatch("close");
                }, e.timeout));
          },
          success: function(t, e) {
            "string" === typeof e && (e = { message: e }),
              t.dispatch(
                "open",
                Object(u["a"])({ type: "success", timeout: 4e3 }, e)
              );
          },
          error: function(t, e) {
            "string" === typeof e && (e = { message: e }),
              t.dispatch("open", Object(u["a"])({ type: "error" }, e));
          }
        }
      },
      Uf = {
        namespaced: !0,
        state: { info: { title: null } },
        mutations: {
          SET_INFO: function(t, e) {
            t.info = e;
          },
          SET_LICENSE: function(t, e) {
            t.info.license = e;
          },
          SET_TITLE: function(t, e) {
            t.info.title = e;
          }
        },
        actions: {
          title: function(t, e) {
            t.commit("SET_TITLE", e);
          },
          register: function(t, e) {
            t.commit("SET_LICENSE", e);
          },
          load: function(t, e) {
            return !e && t.state.info.isReady && t.rootState.user.current
              ? new Promise(function(e) {
                  e(t.state.info);
                })
              : dm.system
                  .info({ view: "panel" })
                  .then(function(e) {
                    return (
                      t.commit(
                        "SET_INFO",
                        Object(u["a"])({ isReady: e.isInstalled && e.isOk }, e)
                      ),
                      e.languages &&
                        t.dispatch("languages/install", e.languages, {
                          root: !0
                        }),
                      t.dispatch("translation/install", e.translation, {
                        root: !0
                      }),
                      t.dispatch("translation/activate", e.translation.id, {
                        root: !0
                      }),
                      e.user &&
                        t.dispatch("user/current", e.user, { root: !0 }),
                      t.state.info
                    );
                  })
                  .catch(function(e) {
                    t.commit("SET_INFO", { isBroken: !0, error: e.message });
                  });
          }
        }
      },
      Hf = {
        namespaced: !0,
        state: { current: null, installed: [] },
        mutations: {
          SET_CURRENT: function(t, e) {
            t.current = e;
          },
          INSTALL: function(t, e) {
            t.installed[e.id] = e;
          }
        },
        actions: {
          load: function(t, e) {
            return dm.translations.get(e);
          },
          install: function(t, e) {
            t.commit("INSTALL", e), i["a"].i18n.add(e.id, e.data);
          },
          activate: function(t, e) {
            var n = t.state.installed[e];
            n
              ? (i["a"].i18n.set(e),
                t.commit("SET_CURRENT", e),
                (document.dir = n.direction),
                (document.documentElement.lang = e))
              : t.dispatch("load", e).then(function(n) {
                  t.dispatch("install", n), t.dispatch("activate", e);
                });
          }
        }
      },
      Vf = n("8c4f"),
      Kf = function(t, e, n) {
        om.dispatch("system/load").then(function() {
          var e = om.state.user.current;
          if (!e)
            return (
              om.dispatch("user/visit", t.path), om.dispatch("user/logout"), !1
            );
          var s = e.permissions.access;
          return !1 === s.panel
            ? ((window.location.href = d.site), !1)
            : !1 === s[t.meta.view]
              ? (om.dispatch("notification/error", {
                  message: i["a"].i18n.translate("error.access.view")
                }),
                n("/"))
              : void n();
        });
      },
      Gf = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-error-view",
          { staticClass: "k-browser-view" },
          [
            n("p", [
              t._v(
                "\n    We are really sorry, but your browser does not support\n    all features required for the Kirby Panel.\n  "
              )
            ]),
            !1 === t.hasFetchSupport
              ? [
                  n("p", [
                    n("strong", [t._v("Fetch")]),
                    n("br"),
                    t._v(
                      "\n      We use Javascript's new Fetch API. You can find a list of supported browsers for this feature on\n      "
                    ),
                    n("strong", [
                      n(
                        "a",
                        { attrs: { href: "https://caniuse.com/#feat=fetch" } },
                        [t._v("caniuse.com")]
                      )
                    ])
                  ])
                ]
              : t._e(),
            !1 === t.hasGridSupport
              ? [
                  n("p", [
                    n("strong", [t._v("CSS Grid")]),
                    n("br"),
                    t._v(
                      "\n      We use CSS Grids for all our layouts. You can find a list of supported browsers for this feature on\n      "
                    ),
                    n("strong", [
                      n(
                        "a",
                        {
                          attrs: { href: "https://caniuse.com/#feat=css-grid" }
                        },
                        [t._v("caniuse.com")]
                      )
                    ])
                  ])
                ]
              : t._e()
          ],
          2
        );
      },
      Yf = [],
      Wf = {
        grid: function() {
          return !(!window.CSS || !window.CSS.supports("display", "grid"));
        },
        fetch: function() {
          return void 0 !== window.fetch;
        },
        all: function() {
          return this.fetch() && this.grid();
        }
      },
      Jf = {
        computed: {
          hasFetchSupport: function() {
            return Wf.fetch();
          },
          hasGridSupport: function() {
            return Wf.grid();
          }
        },
        created: function() {
          Wf.all() && this.$router.push("/");
        }
      },
      Xf = Jf,
      Qf = (n("d6fc"), Object(m["a"])(Xf, Gf, Yf, !1, null, null, null));
    Qf.options.__file = "BrowserView.vue";
    var Zf = Qf.exports,
      th = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-error-boundary",
          {
            key: t.plugin,
            scopedSlots: t._u([
              {
                key: "error",
                fn: function(e) {
                  var i = e.error;
                  return n("k-error-view", {}, [
                    t._v("\n    " + t._s(i) + "\n  ")
                  ]);
                }
              }
            ])
          },
          [n("k-" + t.plugin + "-plugin-view", { tag: "component" })],
          1
        );
      },
      eh = [],
      nh = {
        props: { plugin: String },
        watch: {
          plugin: function() {
            this.$store.dispatch("view", this.plugin);
          }
        },
        created: function() {
          this.$store.dispatch("view", this.plugin);
        }
      },
      ih = nh,
      sh = Object(m["a"])(ih, th, eh, !1, null, null, null);
    sh.options.__file = "CustomView.vue";
    var oh = sh.exports,
      ah = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.issue
          ? n("k-error-view", [t._v("\n  " + t._s(t.issue.message) + "\n")])
          : n(
              "div",
              { staticClass: "k-file-view" },
              [
                n("k-file-preview", { attrs: { file: t.file } }),
                n(
                  "k-view",
                  { staticClass: "k-file-content" },
                  [
                    n(
                      "k-header",
                      {
                        attrs: {
                          editable: t.permissions.changeName,
                          tabs: t.tabs,
                          tab: t.tab
                        },
                        on: {
                          edit: function(e) {
                            t.action("rename");
                          }
                        }
                      },
                      [
                        t._v(
                          "\n\n      " + t._s(t.file.filename) + "\n\n      "
                        ),
                        n(
                          "k-button-group",
                          { attrs: { slot: "left" }, slot: "left" },
                          [
                            n(
                              "k-button",
                              {
                                attrs: { responsive: !0, icon: "open" },
                                on: {
                                  click: function(e) {
                                    t.action("download");
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("open")) +
                                    "\n        "
                                )
                              ]
                            ),
                            n(
                              "k-dropdown",
                              [
                                n(
                                  "k-button",
                                  {
                                    attrs: { responsive: !0, icon: "cog" },
                                    on: {
                                      click: function(e) {
                                        t.$refs.settings.toggle();
                                      }
                                    }
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(t.$t("settings")) +
                                        "\n          "
                                    )
                                  ]
                                ),
                                n("k-dropdown-content", {
                                  ref: "settings",
                                  attrs: { options: t.options },
                                  on: { action: t.action }
                                })
                              ],
                              1
                            ),
                            n("k-languages-dropdown")
                          ],
                          1
                        ),
                        t.file.id
                          ? n("k-prev-next", {
                              attrs: {
                                slot: "right",
                                prev: t.prev,
                                next: t.next
                              },
                              slot: "right"
                            })
                          : t._e()
                      ],
                      1
                    ),
                    t.file.id
                      ? n("k-tabs", {
                          key: "file-" + t.file.id + "-tabs",
                          ref: "tabs",
                          attrs: {
                            parent: t.$api.files.url(t.path, t.file.filename),
                            tabs: t.tabs,
                            blueprint: t.file.blueprint.name
                          },
                          on: {
                            tab: function(e) {
                              t.tab = e;
                            }
                          }
                        })
                      : t._e(),
                    n("k-file-rename-dialog", {
                      ref: "rename",
                      on: { success: t.renamed }
                    }),
                    n("k-file-remove-dialog", {
                      ref: "remove",
                      on: { success: t.deleted }
                    }),
                    n("k-upload", {
                      ref: "upload",
                      attrs: {
                        url: t.uploadApi,
                        accept: t.file.mime,
                        multiple: !1
                      },
                      on: { success: t.uploaded }
                    })
                  ],
                  1
                )
              ],
              1
            );
      },
      rh = [],
      lh = {
        created: function() {
          this.fetch(),
            this.$events.$on("keydown.left", this.toPrev),
            this.$events.$on("keydown.right", this.toNext);
        },
        destroyed: function() {
          this.$events.$off("keydown.left", this.toPrev),
            this.$events.$off("keydown.right", this.toNext);
        },
        watch: {
          $route: function() {
            this.fetch();
          }
        },
        methods: {
          toPrev: function(t) {
            this.prev &&
              "body" === t.target.localName &&
              this.$router.push(this.prev.link);
          },
          toNext: function(t) {
            this.next &&
              "body" === t.target.localName &&
              this.$router.push(this.next.link);
          }
        }
      },
      uh = {
        mixins: [lh],
        props: {
          path: { type: String },
          filename: { type: String, required: !0 }
        },
        data: function() {
          return {
            name: "",
            file: {
              id: null,
              parent: null,
              filename: "",
              url: "",
              prev: null,
              next: null,
              panelIcon: null,
              panelImage: null,
              mime: null,
              content: {}
            },
            permissions: { changeName: !1, delete: !1 },
            issue: null,
            tabs: [],
            tab: null,
            options: null
          };
        },
        computed: {
          uploadApi: function() {
            return d.api + "/" + this.path + "/files/" + this.filename;
          },
          prev: function() {
            if (this.file.prev)
              return {
                link: this.$api.files.link(this.path, this.file.prev.filename),
                tooltip: this.file.prev.filename
              };
          },
          language: function() {
            return this.$store.state.languages.current;
          },
          next: function() {
            if (this.file.next)
              return {
                link: this.$api.files.link(this.path, this.file.next.filename),
                tooltip: this.file.next.filename
              };
          }
        },
        watch: {
          language: function() {
            this.fetch();
          },
          path: function() {
            this.fetch();
          }
        },
        methods: {
          fetch: function() {
            var t = this;
            this.$api.files
              .get(this.path, this.filename, { view: "panel" })
              .then(function(e) {
                (t.file = e),
                  (t.file.next = e.nextWithTemplate),
                  (t.file.prev = e.prevWithTemplate),
                  (t.file.url = e.url),
                  (t.name = e.name),
                  (t.tabs = e.blueprint.tabs),
                  (t.permissions = e.options),
                  (t.options = function(e) {
                    t.$api.files
                      .options(t.path, t.file.filename)
                      .then(function(t) {
                        e(t);
                      });
                  }),
                  t.$store.dispatch(
                    "breadcrumb",
                    t.$api.files.breadcrumb(t.file, t.$route.name)
                  ),
                  t.$store.dispatch("title", t.filename),
                  t.$store.dispatch("form/create", {
                    id: "files/" + e.id,
                    api: t.$api.files.link(t.path, t.filename),
                    content: e.content
                  });
              })
              .catch(function(e) {
                window.console.error(e), (t.issue = e);
              });
          },
          action: function(t) {
            switch (t) {
              case "download":
                window.open(this.file.url);
                break;
              case "rename":
                this.$refs.rename.open(this.path, this.file.filename);
                break;
              case "replace":
                this.$refs.upload.open({
                  url:
                    d.api +
                    "/" +
                    this.$api.files.url(this.path, this.file.filename),
                  accept: this.file.mime
                });
                break;
              case "remove":
                this.$refs.remove.open(this.path, this.file.filename);
                break;
            }
          },
          deleted: function() {
            this.path
              ? this.$router.push("/" + this.path)
              : this.$router.push("/site");
          },
          renamed: function(t) {
            this.$router.push(this.$api.files.link(this.path, t.filename));
          },
          uploaded: function() {
            this.fetch(), this.$store.dispatch("notification/success", ":)");
          }
        }
      },
      ch = uh,
      ph = Object(m["a"])(ch, ah, rh, !1, null, null, null);
    ph.options.__file = "FileView.vue";
    var dh = ph.exports,
      fh = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.system
          ? n(
              "k-view",
              {
                staticClass: "k-installation-view",
                attrs: { align: "center" }
              },
              [
                t.system.isOk && !t.system.isInstalled
                  ? n(
                      "form",
                      {
                        on: {
                          submit: function(e) {
                            return e.preventDefault(), t.install(e);
                          }
                        }
                      },
                      [
                        n("h1", { staticClass: "k-offscreen" }, [
                          t._v(t._s(t.$t("installation")))
                        ]),
                        n("k-fieldset", {
                          attrs: { fields: t.fields, novalidate: !0 },
                          model: {
                            value: t.user,
                            callback: function(e) {
                              t.user = e;
                            },
                            expression: "user"
                          }
                        }),
                        n(
                          "k-button",
                          { attrs: { type: "submit", icon: "check" } },
                          [t._v(t._s(t.$t("install")))]
                        )
                      ],
                      1
                    )
                  : t.system.isOk && t.system.isInstalled
                    ? n(
                        "k-text",
                        [
                          n("k-headline", [
                            t._v(t._s(t.$t("installation.completed")))
                          ]),
                          n("k-link", { attrs: { to: "/login" } }, [
                            t._v(t._s(t.$t("login")))
                          ])
                        ],
                        1
                      )
                    : n(
                        "div",
                        [
                          t.system.isInstalled
                            ? t._e()
                            : n("k-headline", [
                                t._v(t._s(t.$t("installation.issues.headline")))
                              ]),
                          n("ul", { staticClass: "k-installation-issues" }, [
                            !1 === t.requirements.php
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.php")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e(),
                            !1 === t.requirements.server
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.server")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e(),
                            !1 === t.requirements.mbstring
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.mbstring")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e(),
                            !1 === t.requirements.curl
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.curl")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e(),
                            !1 === t.requirements.accounts
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.accounts")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e(),
                            !1 === t.requirements.content
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.content")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e(),
                            !1 === t.requirements.media
                              ? n(
                                  "li",
                                  [
                                    n("k-icon", { attrs: { type: "alert" } }),
                                    n("span", {
                                      domProps: {
                                        innerHTML: t._s(
                                          t.$t("installation.issues.media")
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              : t._e()
                          ]),
                          n(
                            "k-button",
                            {
                              attrs: { icon: "refresh" },
                              on: { click: t.check }
                            },
                            [
                              n("span", {
                                domProps: { innerHTML: t._s(t.$t("retry")) }
                              })
                            ]
                          )
                        ],
                        1
                      )
              ],
              1
            )
          : t._e();
      },
      hh = [],
      mh = {
        data: function() {
          return {
            user: {
              name: "",
              email: "",
              language: "en",
              password: "",
              role: "admin"
            },
            languages: [],
            system: null
          };
        },
        computed: {
          translation: function() {
            return this.$store.state.translation.current;
          },
          requirements: function() {
            return this.system ? this.system.requirements : {};
          },
          fields: function() {
            return {
              name: {
                label: this.$t("name"),
                type: "text",
                icon: "user",
                autofocus: !0
              },
              email: {
                label: this.$t("email"),
                type: "email",
                link: !1,
                required: !0
              },
              password: {
                label: this.$t("password"),
                type: "password",
                placeholder: this.$t("password") + " …",
                required: !0
              },
              language: {
                label: this.$t("language"),
                type: "select",
                options: this.languages,
                icon: "globe",
                empty: !1,
                required: !0
              }
            };
          }
        },
        watch: {
          translation: function(t) {
            this.user.language = t;
          },
          "user.language": function(t) {
            this.$store.dispatch("translation/activate", t);
          }
        },
        created: function() {
          this.check();
        },
        methods: {
          install: function() {
            var t = this;
            this.$api.system
              .install(this.user)
              .then(function(e) {
                t.$store.dispatch("user/current", e),
                  t.$store.dispatch(
                    "notification/success",
                    t.$t("welcome") + "!"
                  ),
                  t.$router.push("/");
              })
              .catch(function(e) {
                t.$store.dispatch("notification/error", e);
              });
          },
          check: function() {
            var t = this;
            this.$store.dispatch("system/load", !0).then(function(e) {
              !0 === e.isInstalled && e.isReady
                ? t.$router.push("/login")
                : t.$api.translations.options().then(function(n) {
                    (t.languages = n),
                      (t.system = e),
                      t.$store.dispatch("title", t.$t("view.installation"));
                  });
            });
          }
        }
      },
      gh = mh,
      vh = (n("146c"), Object(m["a"])(gh, fh, hh, !1, null, null, null));
    vh.options.__file = "InstallationView.vue";
    var bh = vh.exports,
      kh = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "k-view",
          { staticClass: "k-settings-view" },
          [
            n("k-header", [
              t._v("\n    " + t._s(t.$t("view.settings")) + "\n  ")
            ]),
            n("section", { staticClass: "k-system-info" }, [
              n("header", [n("k-headline", [t._v("Kirby")])], 1),
              n("ul", { staticClass: "k-system-info-box" }, [
                n("li", [
                  n("dl", [
                    n("dt", [t._v(t._s(t.$t("license")))]),
                    n(
                      "dd",
                      [
                        t.license
                          ? [
                              t._v(
                                "\n              " +
                                  t._s(t.license) +
                                  "\n            "
                              )
                            ]
                          : n("p", [
                              n(
                                "strong",
                                { staticClass: "k-system-unregistered" },
                                [t._v(t._s(t.$t("license.unregistered")))]
                              )
                            ])
                      ],
                      2
                    )
                  ])
                ]),
                n("li", [
                  n("dl", [
                    n("dt", [t._v(t._s(t.$t("version")))]),
                    n("dd", [t._v(t._s(t.$store.state.system.info.version))])
                  ])
                ])
              ])
            ]),
            t.multilang
              ? n(
                  "section",
                  { staticClass: "k-languages" },
                  [
                    t.languages.length > 0
                      ? [
                          n(
                            "section",
                            { staticClass: "k-languages-section" },
                            [
                              n(
                                "header",
                                [
                                  n("k-headline", [
                                    t._v(t._s(t.$t("languages.default")))
                                  ])
                                ],
                                1
                              ),
                              n("k-collection", {
                                attrs: { items: t.defaultLanguage },
                                on: { action: t.action }
                              })
                            ],
                            1
                          ),
                          n(
                            "section",
                            { staticClass: "k-languages-section" },
                            [
                              n(
                                "header",
                                [
                                  n("k-headline", [
                                    t._v(t._s(t.$t("languages.secondary")))
                                  ]),
                                  n(
                                    "k-button",
                                    {
                                      attrs: { icon: "add" },
                                      on: {
                                        click: function(e) {
                                          t.$refs.create.open();
                                        }
                                      }
                                    },
                                    [t._v(t._s(t.$t("language.create")))]
                                  )
                                ],
                                1
                              ),
                              t.translations.length
                                ? n("k-collection", {
                                    attrs: { items: t.translations },
                                    on: { action: t.action }
                                  })
                                : n(
                                    "k-empty",
                                    {
                                      attrs: { icon: "globe" },
                                      on: {
                                        click: function(e) {
                                          t.$refs.create.open();
                                        }
                                      }
                                    },
                                    [
                                      t._v(
                                        t._s(t.$t("languages.secondary.empty"))
                                      )
                                    ]
                                  )
                            ],
                            1
                          )
                        ]
                      : 0 === t.languages.length
                        ? [
                            n(
                              "header",
                              [
                                n("k-headline", [
                                  t._v(t._s(t.$t("languages")))
                                ]),
                                n(
                                  "k-button",
                                  {
                                    attrs: { icon: "add" },
                                    on: {
                                      click: function(e) {
                                        t.$refs.create.open();
                                      }
                                    }
                                  },
                                  [t._v(t._s(t.$t("language.create")))]
                                )
                              ],
                              1
                            ),
                            n(
                              "k-empty",
                              {
                                attrs: { icon: "globe" },
                                on: {
                                  click: function(e) {
                                    t.$refs.create.open();
                                  }
                                }
                              },
                              [t._v(t._s(t.$t("languages.empty")))]
                            )
                          ]
                        : t._e(),
                    n("k-language-create-dialog", {
                      ref: "create",
                      on: { success: t.fetch }
                    }),
                    n("k-language-update-dialog", {
                      ref: "update",
                      on: { success: t.fetch }
                    }),
                    n("k-language-remove-dialog", {
                      ref: "remove",
                      on: { success: t.fetch }
                    })
                  ],
                  2
                )
              : t._e()
          ],
          1
        );
      },
      _h = [],
      $h = {
        data: function() {
          return { languages: [] };
        },
        computed: {
          defaultLanguage: function() {
            return this.languages.filter(function(t) {
              return t.default;
            });
          },
          multilang: function() {
            return this.$store.state.system.info.multilang;
          },
          license: function() {
            return this.$store.state.system.info.license;
          },
          translations: function() {
            return this.languages.filter(function(t) {
              return !1 === t.default;
            });
          }
        },
        created: function() {
          this.fetch(),
            this.$store.dispatch("title", this.$t("view.settings")),
            this.$store.dispatch("breadcrumb", []);
        },
        methods: {
          fetch: function() {
            var t = this;
            !1 !== this.multilang
              ? this.$api.get("languages").then(function(e) {
                  t.languages = e.data.map(function(n) {
                    return {
                      id: n.code,
                      default: n.default,
                      icon: { type: "globe", back: "black" },
                      text: n.name,
                      info: n.code,
                      options: [
                        { icon: "edit", text: t.$t("edit"), click: "update" },
                        {
                          icon: "trash",
                          text: t.$t("delete"),
                          disabled: n.default && 1 !== e.data.length,
                          click: "remove"
                        }
                      ]
                    };
                  });
                })
              : (this.languages = []);
          },
          action: function(t, e) {
            switch (e) {
              case "update":
                this.$refs.update.open(t.id);
                break;
              case "remove":
                this.$refs.remove.open(t.id);
                break;
            }
          }
        }
      },
      yh = $h,
      xh = (n("9bd5"), Object(m["a"])(yh, kh, _h, !1, null, null, null));
    xh.options.__file = "SettingsView.vue";
    var wh = xh.exports,
      Sh = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.issue
          ? n("k-error-view", [t._v("\n  " + t._s(t.issue.message) + "\n")])
          : t.ready
            ? n(
                "k-view",
                { staticClass: "k-login-view", attrs: { align: "center" } },
                [
                  n(
                    "form",
                    {
                      staticClass: "k-login-form",
                      attrs: { "data-invalid": t.invalid },
                      on: {
                        submit: function(e) {
                          return e.preventDefault(), t.login(e);
                        }
                      }
                    },
                    [
                      n("h1", { staticClass: "k-offscreen" }, [
                        t._v(t._s(t.$t("login")))
                      ]),
                      n("k-fieldset", {
                        attrs: { novalidate: !0, fields: t.fields },
                        model: {
                          value: t.user,
                          callback: function(e) {
                            t.user = e;
                          },
                          expression: "user"
                        }
                      }),
                      n(
                        "div",
                        { staticClass: "k-login-buttons" },
                        [
                          n(
                            "span",
                            { staticClass: "k-login-checkbox" },
                            [
                              n("k-checkbox-input", {
                                attrs: {
                                  value: t.user.remember,
                                  label: t.$t("login.remember")
                                },
                                on: {
                                  input: function(e) {
                                    t.user.remember = e;
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          n(
                            "k-button",
                            {
                              staticClass: "k-login-button",
                              attrs: { icon: "check", type: "submit" }
                            },
                            [
                              t._v("\n        " + t._s(t.$t("login")) + " "),
                              t.isLoading ? [t._v("…")] : t._e()
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : t._e();
      },
      Oh = [],
      Ch = {
        data: function() {
          return {
            ready: !1,
            issue: null,
            invalid: !1,
            isLoading: !1,
            user: { email: "", password: "", remember: !1 }
          };
        },
        computed: {
          fields: function() {
            return {
              email: {
                autofocus: !0,
                label: this.$t("email"),
                type: "email",
                link: !1
              },
              password: {
                label: this.$t("password"),
                type: "password",
                minLength: 8,
                autocomplete: "current-password",
                counter: !1
              }
            };
          }
        },
        created: function() {
          var t = this;
          this.$store
            .dispatch("system/load")
            .then(function(e) {
              e.isReady || t.$router.push("/installation"),
                e.user && e.user.id && t.$router.push("/"),
                (t.ready = !0),
                t.$store.dispatch("title", t.$t("login"));
            })
            .catch(function(e) {
              t.issue = e;
            });
        },
        methods: {
          login: function() {
            var t = this;
            (this.invalid = !1),
              (this.isLoading = !0),
              this.$store
                .dispatch("user/login", this.user)
                .then(function() {
                  t.$store.dispatch("system/load", !0).then(function() {
                    t.$store.dispatch("notification/success", t.$t("welcome")),
                      (t.isLoading = !1);
                  });
                })
                .catch(function() {
                  (t.invalid = !0), (t.isLoading = !1);
                });
          }
        }
      },
      Eh = Ch,
      jh = (n("24c1"), Object(m["a"])(Eh, Sh, Oh, !1, null, null, null));
    jh.options.__file = "LoginView.vue";
    var Th = jh.exports,
      Ih = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.issue
          ? n("k-error-view", [t._v("\n  " + t._s(t.issue.message) + "\n")])
          : n(
              "k-view",
              { staticClass: "k-page-view" },
              [
                n(
                  "k-header",
                  {
                    attrs: {
                      tabs: t.tabs,
                      tab: t.tab,
                      editable: t.permissions.changeTitle
                    },
                    on: {
                      edit: function(e) {
                        t.action("rename");
                      }
                    }
                  },
                  [
                    t._v("\n    " + t._s(t.page.title) + "\n    "),
                    n(
                      "k-button-group",
                      { attrs: { slot: "left" }, slot: "left" },
                      [
                        t.permissions.preview && t.page.previewUrl
                          ? n(
                              "k-button",
                              {
                                attrs: {
                                  responsive: !0,
                                  link: t.page.previewUrl,
                                  target: "_blank",
                                  icon: "open"
                                }
                              },
                              [
                                t._v(
                                  "\n        " + t._s(t.$t("open")) + "\n      "
                                )
                              ]
                            )
                          : t._e(),
                        t.status
                          ? n(
                              "k-button",
                              {
                                class: [
                                  "k-status-flag",
                                  "k-status-flag-" + t.page.status
                                ],
                                attrs: {
                                  disabled: !1 === t.permissions.changeStatus,
                                  icon:
                                    !1 === t.permissions.changeStatus
                                      ? "protected"
                                      : "circle",
                                  responsive: !0
                                },
                                on: {
                                  click: function(e) {
                                    t.action("status");
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.status.label) +
                                    "\n      "
                                )
                              ]
                            )
                          : t._e(),
                        n(
                          "k-dropdown",
                          [
                            n(
                              "k-button",
                              {
                                attrs: { responsive: !0, icon: "cog" },
                                on: {
                                  click: function(e) {
                                    t.$refs.settings.toggle();
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("settings")) +
                                    "\n        "
                                )
                              ]
                            ),
                            n("k-dropdown-content", {
                              ref: "settings",
                              attrs: { options: t.options },
                              on: { action: t.action }
                            })
                          ],
                          1
                        ),
                        n("k-languages-dropdown")
                      ],
                      1
                    ),
                    t.page.id
                      ? n("k-prev-next", {
                          attrs: { slot: "right", prev: t.prev, next: t.next },
                          slot: "right"
                        })
                      : t._e()
                  ],
                  1
                ),
                t.page.id
                  ? n("k-tabs", {
                      key: t.tabsKey,
                      ref: "tabs",
                      attrs: {
                        parent: t.$api.pages.url(t.page.id),
                        blueprint: t.blueprint,
                        tabs: t.tabs
                      },
                      on: {
                        tab: function(e) {
                          t.tab = e;
                        }
                      }
                    })
                  : t._e(),
                n("k-page-rename-dialog", {
                  ref: "rename",
                  on: { success: t.update }
                }),
                n("k-page-url-dialog", {
                  ref: "url",
                  on: {
                    success: function(e) {
                      t.$emit("model.update");
                    }
                  }
                }),
                n("k-page-status-dialog", {
                  ref: "status",
                  on: { success: t.update }
                }),
                n("k-page-template-dialog", {
                  ref: "template",
                  on: { success: t.update }
                }),
                n("k-page-remove-dialog", { ref: "remove" })
              ],
              1
            );
      },
      Lh = [],
      Ah = {
        mixins: [lh],
        props: { path: { type: String, required: !0 } },
        data: function() {
          return {
            page: { title: "", id: null, prev: null, next: null, status: null },
            blueprint: null,
            preview: !0,
            permissions: { changeTitle: !1, changeStatus: !1 },
            icon: "page",
            issue: null,
            tab: null,
            tabs: [],
            options: null
          };
        },
        computed: {
          prev: function() {
            if (this.page.prev)
              return {
                link: this.$api.pages.link(this.page.prev.id),
                tooltip: this.page.prev.title
              };
          },
          language: function() {
            return this.$store.state.languages.current;
          },
          next: function() {
            if (this.page.next)
              return {
                link: this.$api.pages.link(this.page.next.id),
                tooltip: this.page.next.title
              };
          },
          status: function() {
            return null !== this.page.status
              ? this.page.blueprint.status[this.page.status]
              : null;
          },
          tabsKey: function() {
            return "page-" + this.page.id + "-tabs";
          }
        },
        watch: {
          language: function() {
            this.fetch();
          },
          path: function() {
            this.fetch();
          }
        },
        methods: {
          action: function(t) {
            var e = this;
            switch (t) {
              case "preview":
                this.$api.pages
                  .preview(this.page.id)
                  .then(function(t) {
                    window.open(t);
                  })
                  .catch(function(t) {
                    e.$store.dispatch("notification/error", t);
                  });
                break;
              case "rename":
                this.$refs.rename.open(this.page.id);
                break;
              case "url":
                this.$refs.url.open(this.page.id);
                break;
              case "status":
                this.$refs.status.open(this.page.id);
                break;
              case "template":
                this.$refs.template.open(this.page.id);
                break;
              case "remove":
                this.$refs.remove.open(this.page.id);
                break;
              default:
                this.$store.dispatch(
                  "notification/error",
                  this.$t("notification.notImplemented")
                );
                break;
            }
          },
          changeLanguage: function(t) {
            this.$store.dispatch("languages/current", t), this.fetch();
          },
          fetch: function() {
            var t = this;
            this.$api.pages
              .get(this.path, { view: "panel" })
              .then(function(e) {
                (t.page = e),
                  (t.blueprint = e.blueprint.name),
                  (t.permissions = e.options),
                  (t.tabs = e.blueprint.tabs),
                  (t.options = function(e) {
                    t.$api.pages.options(t.page.id).then(function(t) {
                      e(t);
                    });
                  }),
                  t.$store.dispatch("breadcrumb", t.$api.pages.breadcrumb(e)),
                  t.$store.dispatch("title", t.page.title),
                  t.$store.dispatch("form/create", {
                    id: "pages/" + e.id,
                    api: t.$api.pages.link(e.id),
                    content: e.content
                  });
              })
              .catch(function(e) {
                t.issue = e;
              });
          },
          update: function() {
            this.fetch(), this.$emit("model.update");
          }
        }
      },
      qh = Ah,
      Nh = (n("202d"), Object(m["a"])(qh, Ih, Lh, !1, null, null, null));
    Nh.options.__file = "PageView.vue";
    var Ph = Nh.exports,
      Dh = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.issue
          ? n("k-error-view", [t._v("\n  " + t._s(t.issue.message) + "\n")])
          : n(
              "k-view",
              { key: "site-view", staticClass: "k-site-view" },
              [
                n(
                  "k-header",
                  {
                    attrs: {
                      tabs: t.tabs,
                      tab: t.tab,
                      editable: t.permissions.changeTitle
                    },
                    on: {
                      edit: function(e) {
                        t.action("rename");
                      }
                    }
                  },
                  [
                    t._v("\n    " + t._s(t.site.title) + "\n    "),
                    n(
                      "k-button-group",
                      { attrs: { slot: "left" }, slot: "left" },
                      [
                        n(
                          "k-button",
                          {
                            attrs: { icon: "open" },
                            on: {
                              click: function(e) {
                                t.action("preview");
                              }
                            }
                          },
                          [t._v("\n        " + t._s(t.$t("open")) + "\n      ")]
                        ),
                        n("k-languages-dropdown")
                      ],
                      1
                    )
                  ],
                  1
                ),
                t.site.url
                  ? n("k-tabs", {
                      ref: "tabs",
                      attrs: {
                        tabs: t.tabs,
                        blueprint: t.site.blueprint.name,
                        parent: "site"
                      },
                      on: {
                        tab: function(e) {
                          t.tab = e;
                        }
                      }
                    })
                  : t._e(),
                n("k-site-rename-dialog", {
                  ref: "rename",
                  on: { success: t.fetch }
                })
              ],
              1
            );
      },
      Bh = [],
      Rh = {
        data: function() {
          return {
            site: { title: null, url: null },
            issue: null,
            tab: null,
            tabs: [],
            options: null,
            permissions: { changeTitle: !0 }
          };
        },
        computed: {
          language: function() {
            return this.$store.state.languages.current;
          }
        },
        watch: {
          language: function() {
            this.fetch();
          }
        },
        created: function() {
          this.fetch();
        },
        methods: {
          fetch: function() {
            var t = this;
            this.$api.site
              .get({ view: "panel" })
              .then(function(e) {
                (t.site = e),
                  (t.tabs = e.blueprint.tabs),
                  (t.permissions = e.options),
                  (t.options = function(e) {
                    t.$api.site.options().then(function(t) {
                      e(t);
                    });
                  }),
                  t.$store.dispatch("breadcrumb", []),
                  t.$store.dispatch("title", null),
                  t.$store.dispatch("form/create", {
                    id: "site",
                    api: "site",
                    content: e.content
                  });
              })
              .catch(function(e) {
                t.issue = e;
              });
          },
          action: function(t) {
            switch (t) {
              case "languages":
                this.$refs.languages.open();
                break;
              case "preview":
                window.open(this.site.url);
                break;
              case "rename":
                this.$refs.rename.open();
                break;
              default:
                this.$store.dispatch(
                  "notification/error",
                  this.$t("notification.notImplemented")
                );
                break;
            }
          }
        }
      },
      Fh = Rh,
      Mh = Object(m["a"])(Fh, Dh, Bh, !1, null, null, null);
    Mh.options.__file = "SiteView.vue";
    var zh = Mh.exports,
      Uh = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.issue
          ? n("k-error-view", [t._v("\n  " + t._s(t.issue.message) + "\n")])
          : n(
              "k-view",
              { staticClass: "k-users-view" },
              [
                n(
                  "k-header",
                  [
                    t._v("\n    " + t._s(t.$t("view.users")) + "\n    "),
                    n(
                      "k-button-group",
                      { attrs: { slot: "left" }, slot: "left" },
                      [
                        n(
                          "k-button",
                          {
                            attrs: {
                              disabled: !1 === t.$permissions.users.create,
                              icon: "add"
                            },
                            on: {
                              click: function(e) {
                                t.$refs.create.open();
                              }
                            }
                          },
                          [t._v(t._s(t.$t("user.create")))]
                        )
                      ],
                      1
                    ),
                    n(
                      "k-button-group",
                      { attrs: { slot: "right" }, slot: "right" },
                      [
                        n(
                          "k-dropdown",
                          [
                            n(
                              "k-button",
                              {
                                attrs: { responsive: !0, icon: "funnel" },
                                on: {
                                  click: function(e) {
                                    t.$refs.roles.toggle();
                                  }
                                }
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("role")) +
                                    ": " +
                                    t._s(
                                      t.role ? t.role.text : t.$t("role.all")
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            n(
                              "k-dropdown-content",
                              { ref: "roles", attrs: { align: "right" } },
                              [
                                n(
                                  "k-dropdown-item",
                                  {
                                    attrs: { icon: "bolt" },
                                    on: {
                                      click: function(e) {
                                        t.filter(!1);
                                      }
                                    }
                                  },
                                  [
                                    t._v(
                                      "\n            " +
                                        t._s(t.$t("role.all")) +
                                        "\n          "
                                    )
                                  ]
                                ),
                                n("hr"),
                                t._l(t.roles, function(e) {
                                  return n(
                                    "k-dropdown-item",
                                    {
                                      key: e.value,
                                      attrs: { icon: "bolt" },
                                      on: {
                                        click: function(n) {
                                          t.filter(e);
                                        }
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(e.text) +
                                          "\n          "
                                      )
                                    ]
                                  );
                                })
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                t.users.length > 0
                  ? [
                      n("k-collection", {
                        attrs: { items: t.users, pagination: t.pagination },
                        on: { paginate: t.paginate, action: t.action }
                      })
                    ]
                  : 0 === t.total
                    ? [
                        n("k-empty", { attrs: { icon: "users" } }, [
                          t._v(t._s(t.$t("role.empty")))
                        ])
                      ]
                    : t._e(),
                n("k-user-create-dialog", {
                  ref: "create",
                  on: { success: t.fetch }
                }),
                n("k-user-email-dialog", {
                  ref: "email",
                  on: { success: t.fetch }
                }),
                n("k-user-language-dialog", {
                  ref: "language",
                  on: { success: t.fetch }
                }),
                n("k-user-password-dialog", { ref: "password" }),
                n("k-user-remove-dialog", {
                  ref: "remove",
                  on: { success: t.fetch }
                }),
                n("k-user-rename-dialog", {
                  ref: "rename",
                  on: { success: t.fetch }
                }),
                n("k-user-role-dialog", {
                  ref: "role",
                  on: { success: t.fetch }
                })
              ],
              2
            );
      },
      Hh = [],
      Vh = {
        data: function() {
          return {
            page: 1,
            limit: 20,
            total: null,
            users: [],
            roles: [],
            issue: null
          };
        },
        computed: {
          pagination: function() {
            return { page: this.page, limit: this.limit, total: this.total };
          },
          role: function() {
            var t = this,
              e = null;
            return (
              this.$route.params.role &&
                this.roles.forEach(function(n) {
                  n.value === t.$route.params.role && (e = n);
                }),
              e
            );
          }
        },
        watch: {
          $route: function() {
            this.fetch();
          }
        },
        created: function() {
          var t = this;
          this.$api.roles.options().then(function(e) {
            (t.roles = e), t.fetch();
          });
        },
        methods: {
          fetch: function() {
            var t = this;
            this.$store.dispatch("title", this.$t("view.users"));
            var e = { paginate: { page: this.page, limit: this.limit } };
            this.role &&
              (e.filterBy = [
                { field: "role", operator: "==", value: this.role.value }
              ]),
              this.$api.users
                .list(e)
                .then(function(e) {
                  (t.users = e.data.map(function(e) {
                    var n = {
                      id: e.id,
                      icon: { type: "user", back: "black" },
                      text: e.name || e.email,
                      info: e.role.title,
                      link: "/users/" + e.id,
                      options: function(n) {
                        t.$api.users
                          .options(e.id, "list")
                          .then(function(t) {
                            return n(t);
                          })
                          .catch(function(e) {
                            t.$store.dispatch("notification/error", e);
                          });
                      },
                      image: null
                    };
                    return (
                      e.avatar && (n.image = { url: e.avatar.url, cover: !0 }),
                      n
                    );
                  })),
                    t.role
                      ? t.$store.dispatch("breadcrumb", [
                          {
                            link: "/users/role/" + t.role.value,
                            label: t.$t("role") + ": " + t.role.text
                          }
                        ])
                      : t.$store.dispatch("breadcrumb", []),
                    (t.total = e.pagination.total);
                })
                .catch(function(e) {
                  t.issue = e;
                });
          },
          paginate: function(t) {
            (this.page = t.page), (this.limit = t.limit), this.fetch();
          },
          action: function(t, e) {
            switch (e) {
              case "edit":
                this.$router.push("/users/" + t.id);
                break;
              case "email":
                this.$refs.email.open(t.id);
                break;
              case "role":
                this.$refs.role.open(t.id);
                break;
              case "rename":
                this.$refs.rename.open(t.id);
                break;
              case "password":
                this.$refs.password.open(t.id);
                break;
              case "language":
                this.$refs.language.open(t.id);
                break;
              case "remove":
                this.$refs.remove.open(t.id);
                break;
            }
          },
          filter: function(t) {
            !1 === t
              ? this.$router.push("/users")
              : this.$router.push("/users/role/" + t.value),
              this.$refs.roles.close();
          }
        }
      },
      Kh = Vh,
      Gh = Object(m["a"])(Kh, Uh, Hh, !1, null, null, null);
    Gh.options.__file = "UsersView.vue";
    var Yh = Gh.exports,
      Wh = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.issue
          ? n("k-error-view", [t._v("\n  " + t._s(t.issue.message) + "\n")])
          : t.ready
            ? n(
                "div",
                { staticClass: "k-user-view" },
                [
                  n(
                    "div",
                    { staticClass: "k-user-profile" },
                    [
                      n(
                        "k-view",
                        [
                          t.avatar
                            ? [
                                n(
                                  "k-dropdown",
                                  [
                                    n(
                                      "k-button",
                                      {
                                        staticClass: "k-user-view-image",
                                        attrs: { tooltip: t.$t("avatar") },
                                        on: {
                                          click: function(e) {
                                            t.$refs.picture.toggle();
                                          }
                                        }
                                      },
                                      [
                                        t.avatar
                                          ? n("k-image", {
                                              attrs: {
                                                cover: !0,
                                                src: t.avatar,
                                                ratio: "1/1"
                                              }
                                            })
                                          : t._e()
                                      ],
                                      1
                                    ),
                                    n(
                                      "k-dropdown-content",
                                      { ref: "picture" },
                                      [
                                        n(
                                          "k-dropdown-item",
                                          {
                                            attrs: { icon: "upload" },
                                            on: {
                                              click: function(e) {
                                                t.$refs.upload.open();
                                              }
                                            }
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(t.$t("change")) +
                                                "\n            "
                                            )
                                          ]
                                        ),
                                        n(
                                          "k-dropdown-item",
                                          {
                                            attrs: { icon: "trash" },
                                            on: {
                                              click: function(e) {
                                                t.action("picture.delete");
                                              }
                                            }
                                          },
                                          [
                                            t._v(
                                              "\n              " +
                                                t._s(t.$t("delete")) +
                                                "\n            "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            : [
                                n(
                                  "k-button",
                                  {
                                    staticClass: "k-user-view-image",
                                    attrs: { tooltip: t.$t("avatar") },
                                    on: {
                                      click: function(e) {
                                        t.$refs.upload.open();
                                      }
                                    }
                                  },
                                  [n("k-icon", { attrs: { type: "user" } })],
                                  1
                                )
                              ],
                          n(
                            "k-button-group",
                            [
                              n(
                                "k-button",
                                {
                                  attrs: {
                                    disabled: !t.permissions.changeEmail,
                                    icon: "email"
                                  },
                                  on: {
                                    click: function(e) {
                                      t.action("email");
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    t._s(t.$t("email")) +
                                      ": " +
                                      t._s(t.user.email)
                                  )
                                ]
                              ),
                              n(
                                "k-button",
                                {
                                  attrs: {
                                    disabled: !t.permissions.changeRole,
                                    icon: "bolt"
                                  },
                                  on: {
                                    click: function(e) {
                                      t.action("role");
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    t._s(t.$t("role")) +
                                      ": " +
                                      t._s(t.user.role.title)
                                  )
                                ]
                              ),
                              n(
                                "k-button",
                                {
                                  attrs: {
                                    disabled: !t.permissions.changeLanguage,
                                    icon: "globe"
                                  },
                                  on: {
                                    click: function(e) {
                                      t.action("language");
                                    }
                                  }
                                },
                                [
                                  t._v(
                                    t._s(t.$t("language")) +
                                      ": " +
                                      t._s(t.user.language)
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  ),
                  n(
                    "k-view",
                    [
                      n(
                        "k-header",
                        {
                          attrs: {
                            editable: t.permissions.changeName,
                            tabs: t.tabs,
                            tab: t.tab
                          },
                          on: {
                            edit: function(e) {
                              t.action("rename");
                            }
                          }
                        },
                        [
                          t.user.name && 0 !== t.user.name.length
                            ? [t._v(t._s(t.user.name))]
                            : n(
                                "span",
                                { staticClass: "k-user-name-placeholder" },
                                [t._v(t._s(t.$t("name")) + " …")]
                              ),
                          n(
                            "k-button-group",
                            { attrs: { slot: "left" }, slot: "left" },
                            [
                              n(
                                "k-dropdown",
                                [
                                  n(
                                    "k-button",
                                    {
                                      attrs: { icon: "cog" },
                                      on: {
                                        click: function(e) {
                                          t.$refs.settings.toggle();
                                        }
                                      }
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.$t("settings")) +
                                          "\n          "
                                      )
                                    ]
                                  ),
                                  n("k-dropdown-content", {
                                    ref: "settings",
                                    attrs: { options: t.options },
                                    on: { action: t.action }
                                  })
                                ],
                                1
                              ),
                              n("k-languages-dropdown")
                            ],
                            1
                          ),
                          t.user.id && "User" === t.$route.name
                            ? n("k-prev-next", {
                                attrs: {
                                  slot: "right",
                                  prev: t.prev,
                                  next: t.next
                                },
                                slot: "right"
                              })
                            : t._e()
                        ],
                        2
                      ),
                      t.user && t.tabs.length
                        ? n("k-tabs", {
                            key:
                              "user-" +
                              t.user.id +
                              "-tabs-" +
                              new Date().getTime(),
                            ref: "tabs",
                            attrs: {
                              parent: "users/" + t.user.id,
                              blueprint: t.user.blueprint.name,
                              tabs: t.tabs
                            },
                            on: {
                              tab: function(e) {
                                t.tab = e;
                              }
                            }
                          })
                        : t.ready
                          ? n("k-box", {
                              attrs: {
                                text: t.$t("user.blueprint", {
                                  role: t.user.role.name
                                }),
                                theme: "info"
                              }
                            })
                          : t._e(),
                      n("k-user-email-dialog", {
                        ref: "email",
                        on: { success: t.fetch }
                      }),
                      n("k-user-language-dialog", {
                        ref: "language",
                        on: { success: t.fetch }
                      }),
                      n("k-user-password-dialog", { ref: "password" }),
                      n("k-user-remove-dialog", { ref: "remove" }),
                      n("k-user-rename-dialog", {
                        ref: "rename",
                        on: { success: t.fetch }
                      }),
                      n("k-user-role-dialog", {
                        ref: "role",
                        on: { success: t.fetch }
                      }),
                      n("k-upload", {
                        ref: "upload",
                        attrs: {
                          url: t.uploadApi,
                          multiple: !1,
                          accept: "image/*"
                        },
                        on: { success: t.uploadedAvatar }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            : t._e();
      },
      Jh = [],
      Xh = {
        mixins: [lh],
        props: { id: { type: String, required: !0 } },
        data: function() {
          return {
            tab: null,
            tabs: [],
            ready: !1,
            user: {
              role: { name: null },
              name: null,
              language: null,
              prev: null,
              next: null
            },
            permissions: {
              changeEmail: !0,
              changeName: !0,
              changeLanguage: !0,
              changeRole: !0
            },
            issue: null,
            avatar: null,
            options: null
          };
        },
        computed: {
          language: function() {
            return this.$store.state.languages.current;
          },
          next: function() {
            if (this.user.next)
              return {
                link: this.$api.users.link(this.user.next.id),
                tooltip: this.user.next.name
              };
          },
          prev: function() {
            if (this.user.prev)
              return {
                link: this.$api.users.link(this.user.prev.id),
                tooltip: this.user.prev.name
              };
          },
          uploadApi: function() {
            return d.api + "/users/" + this.user.id + "/avatar";
          }
        },
        watch: {
          language: function() {
            this.fetch();
          }
        },
        methods: {
          action: function(t) {
            var e = this;
            switch (t) {
              case "email":
                this.$refs.email.open(this.user.id);
                break;
              case "language":
                this.$refs.language.open(this.user.id);
                break;
              case "password":
                this.$refs.password.open(this.user.id);
                break;
              case "picture.delete":
                this.$api.users.deleteAvatar(this.id).then(function() {
                  e.$store.dispatch("notification/success", ":)"),
                    (e.avatar = null);
                });
                break;
              case "remove":
                this.$refs.remove.open(this.user.id);
                break;
              case "rename":
                this.$refs.rename.open(this.user.id);
                break;
              case "role":
                this.$refs.role.open(this.user.id);
                break;
              default:
                this.$store.dispatch(
                  "notification/error",
                  "Not yet implemented"
                );
            }
          },
          fetch: function() {
            var t = this;
            this.$api.users
              .get(this.id, { view: "panel" })
              .then(function(e) {
                (t.user = e),
                  (t.tabs = e.blueprint.tabs),
                  (t.ready = !0),
                  (t.permissions = e.options),
                  (t.options = function(e) {
                    t.$api.users.options(t.user.id).then(function(t) {
                      e(t);
                    });
                  }),
                  e.avatar ? (t.avatar = e.avatar.url) : (t.avatar = null),
                  "User" === t.$route.name
                    ? t.$store.dispatch(
                        "breadcrumb",
                        t.$api.users.breadcrumb(e)
                      )
                    : t.$store.dispatch("breadcrumb", []),
                  t.$store.dispatch("title", t.user.name || t.user.email),
                  t.$store.dispatch("form/create", {
                    id: "users/" + e.id,
                    api: t.$api.users.link(e.id),
                    content: e.content
                  });
              })
              .catch(function(e) {
                t.issue = e;
              });
          },
          uploadedAvatar: function() {
            this.$store.dispatch("notification/success", ":)"), this.fetch();
          }
        }
      },
      Qh = Xh,
      Zh = (n("bd96"), Object(m["a"])(Qh, Wh, Jh, !1, null, null, null));
    Zh.options.__file = "UserView.vue";
    var tm = Zh.exports,
      em = [
        { path: "/", name: "Home", redirect: "/site" },
        {
          path: "/browser",
          name: "Browser",
          component: Zf,
          meta: { outside: !0 }
        },
        { path: "/login", component: Th, meta: { outside: !0 } },
        {
          path: "/logout",
          beforeEnter: function() {
            om.dispatch("user/logout");
          },
          meta: { outside: !0 }
        },
        { path: "/installation", component: bh, meta: { outside: !0 } },
        {
          path: "/site",
          name: "Site",
          meta: { view: "site" },
          component: zh,
          beforeEnter: Kf
        },
        {
          path: "/site/files/:filename",
          name: "SiteFile",
          meta: { view: "site" },
          component: dh,
          beforeEnter: Kf,
          props: function(t) {
            return { path: "site", filename: t.params.filename };
          }
        },
        {
          path: "/pages/:path/files/:filename",
          name: "PageFile",
          meta: { view: "site" },
          component: dh,
          beforeEnter: Kf,
          props: function(t) {
            return {
              path: "pages/" + t.params.path,
              filename: t.params.filename
            };
          }
        },
        {
          path: "/users/:path/files/:filename",
          name: "UserFile",
          meta: { view: "users" },
          component: dh,
          beforeEnter: Kf,
          props: function(t) {
            return {
              path: "users/" + t.params.path,
              filename: t.params.filename
            };
          }
        },
        {
          path: "/pages/:path",
          name: "Page",
          meta: { view: "site" },
          component: Ph,
          beforeEnter: Kf,
          props: function(t) {
            return { path: t.params.path };
          }
        },
        {
          path: "/settings",
          name: "Settings",
          meta: { view: "settings" },
          component: wh,
          beforeEnter: Kf
        },
        {
          path: "/users/role/:role",
          name: "UsersByRole",
          meta: { view: "users" },
          component: Yh,
          beforeEnter: Kf,
          props: function(t) {
            return { role: t.params.role };
          }
        },
        {
          path: "/users",
          name: "Users",
          meta: { view: "users" },
          beforeEnter: Kf,
          component: Yh
        },
        {
          path: "/users/:id",
          name: "User",
          meta: { view: "users" },
          component: tm,
          beforeEnter: Kf,
          props: function(t) {
            return { id: t.params.id };
          }
        },
        {
          path: "/account",
          name: "Account",
          meta: { view: "account" },
          component: tm,
          beforeEnter: Kf,
          props: function() {
            return { id: om.state.user.current.id };
          }
        },
        {
          path: "/plugins/:id",
          name: "Plugin",
          meta: { view: "plugin" },
          props: function(t) {
            return { plugin: t.params.id };
          },
          beforeEnter: Kf,
          component: oh
        },
        {
          path: "*",
          name: "NotFound",
          beforeEnter: function(t, e, n) {
            n("/");
          }
        }
      ];
    i["a"].use(Vf["a"]);
    var nm = new Vf["a"]({
      mode: "history",
      routes: em,
      url: "/" === d.url ? "" : d.url
    });
    nm.beforeEach(function(t, e, n) {
      "Browser" !== t.name && !1 === Wf.all() && n("/browser"),
        om.dispatch("view", t.meta.view),
        t.meta.outside || om.dispatch("user/visit", t.path),
        n();
    });
    var im = nm,
      sm = {
        namespaced: !0,
        state: { current: null, path: null },
        mutations: {
          SET_CURRENT: function(t, e) {
            (t.current = e),
              e && e.permissions
                ? ((i["a"].prototype.$user = e),
                  (i["a"].prototype.$permissions = e.permissions))
                : ((i["a"].prototype.$user = null),
                  (i["a"].prototype.$permissions = null));
          },
          SET_PATH: function(t, e) {
            t.path = e;
          }
        },
        actions: {
          current: function(t, e) {
            t.commit("SET_CURRENT", e);
          },
          language: function(t, e) {
            t.dispatch("translation/activate", e, { root: !0 }),
              t.commit(
                "SET_CURRENT",
                Object(u["a"])({ language: e }, t.state.current)
              );
          },
          load: function(t) {
            return dm.auth.user().then(function(e) {
              return t.commit("SET_CURRENT", e), e;
            });
          },
          login: function(t, e) {
            return dm.auth.login(e).then(function(e) {
              return (
                t.commit("SET_CURRENT", e),
                t.dispatch("translation/activate", e.language, { root: !0 }),
                im.push(t.state.path || "/"),
                e
              );
            });
          },
          logout: function(t) {
            dm.auth
              .logout()
              .then(function() {
                t.commit("SET_CURRENT", null), im.push("/login");
              })
              .catch(function() {
                t.commit("SET_CURRENT", null), im.push("/login");
              });
          },
          visit: function(t, e) {
            t.commit("SET_PATH", e);
          }
        }
      };
    i["a"].use(Bf["a"]);
    var om = new Bf["a"].Store({
        strict: !1,
        state: {
          breadcrumb: [],
          dialog: null,
          drag: null,
          isLoading: !1,
          search: !1,
          title: null,
          view: null
        },
        mutations: {
          SET_BREADCRUMB: function(t, e) {
            t.breadcrumb = e;
          },
          SET_DIALOG: function(t, e) {
            t.dialog = e;
          },
          SET_DRAG: function(t, e) {
            t.drag = e;
          },
          SET_SEARCH: function(t, e) {
            !0 === e && (e = {}), (t.search = e);
          },
          SET_TITLE: function(t, e) {
            t.title = e;
          },
          SET_VIEW: function(t, e) {
            t.view = e;
          },
          START_LOADING: function(t) {
            t.isLoading = !0;
          },
          STOP_LOADING: function(t) {
            t.isLoading = !1;
          }
        },
        actions: {
          breadcrumb: function(t, e) {
            t.commit("SET_BREADCRUMB", e);
          },
          dialog: function(t, e) {
            t.commit("SET_DIALOG", e);
          },
          drag: function(t, e) {
            t.commit("SET_DRAG", e);
          },
          isLoading: function(t, e) {
            t.commit(!0 === e ? "START_LOADING" : "STOP_LOADING");
          },
          search: function(t, e) {
            t.commit("SET_SEARCH", e);
          },
          title: function(t, e) {
            t.commit("SET_TITLE", e),
              (document.title = e || ""),
              t.state.system.info.title &&
                (document.title +=
                  null !== e
                    ? " | " + t.state.system.info.title
                    : t.state.system.info.title);
          },
          view: function(t, e) {
            t.commit("SET_VIEW", e);
          }
        },
        modules: {
          form: Ff,
          languages: Mf,
          notification: zf,
          system: Uf,
          translation: Hf,
          user: sm
        }
      }),
      am = {
        running: 0,
        request: function(t, e) {
          var n = this;
          return (
            (e = Object.assign(e || {}, {
              credentials: "same-origin",
              headers: Object(u["a"])(
                {
                  "x-requested-with": "xmlhttprequest",
                  "content-type": "application/json"
                },
                e.headers
              )
            })),
            om.state.languages.current &&
              (e.headers["x-language"] = om.state.languages.current.code),
            (e.headers["x-csrf"] = window.panel.csrf),
            dm.config.onStart(),
            this.running++,
            fetch(dm.config.endpoint + "/" + t, e)
              .then(function(t) {
                return t.json();
              })
              .then(function(t) {
                if (t.status && "error" === t.status) throw t;
                var e = t;
                return (
                  t.data && t.type && "model" === t.type && (e = t.data),
                  n.running--,
                  dm.config.onComplete(),
                  dm.config.onSuccess(t),
                  e
                );
              })
              .catch(function(t) {
                throw (n.running--,
                dm.config.onComplete(),
                dm.config.onError(t),
                t);
              })
          );
        },
        get: function(t, e, n) {
          return (
            e &&
              (t +=
                "?" +
                Object.keys(e)
                  .map(function(t) {
                    return t + "=" + e[t];
                  })
                  .join("&")),
            this.request(t, Object.assign(n || {}, { method: "GET" }))
          );
        },
        post: function(t, e, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "POST";
          return this.request(
            t,
            Object.assign(n || {}, { method: i, body: JSON.stringify(e) })
          );
        },
        patch: function(t, e, n) {
          return this.post(t, e, n, "PATCH");
        },
        delete: function(t, e, n) {
          return this.post(t, e, n, "DELETE");
        }
      },
      rm = {
        list: function() {
          return dm.get("roles");
        },
        get: function(t) {
          return dm.get("roles/" + t);
        },
        options: function() {
          return this.list().then(function(t) {
            return t.data.map(function(t) {
              return {
                info:
                  t.description ||
                  "(".concat(
                    i["a"].i18n.translate("role.description.placeholder"),
                    ")"
                  ),
                text: t.title,
                value: t.name
              };
            });
          });
        }
      },
      lm = {
        info: function(t) {
          return dm.get("system", t);
        },
        install: function(t) {
          return dm.post("system/install", t).then(function(t) {
            return t.user;
          });
        },
        register: function(t) {
          return dm.post("system/register", t);
        }
      },
      um = {
        get: function(t) {
          return dm.get("site", t);
        },
        update: function(t) {
          return dm.post("site", t);
        },
        title: function(t) {
          return dm.patch("site/title", { title: t });
        },
        options: function() {
          return dm.get("site", { select: "options" }).then(function(t) {
            var e = t.options,
              n = [];
            return (
              n.push({
                click: "rename",
                icon: "title",
                text: i["a"].i18n.translate("rename"),
                disabled: !e.changeTitle
              }),
              n
            );
          });
        },
        children: function(t) {
          return dm.post("site/children/search", t);
        },
        blueprint: function() {
          return dm.get("site/blueprint");
        },
        blueprints: function() {
          return dm.get("site/blueprints");
        }
      },
      cm = {
        list: function() {
          return dm.get("translations");
        },
        get: function(t) {
          return dm.get("translations/" + t);
        },
        options: function() {
          var t = [];
          return this.list().then(function(e) {
            return (
              (t = e.data.map(function(t) {
                return { value: t.id, text: t.name };
              })),
              t
            );
          });
        }
      },
      pm = {
        create: function(t) {
          return dm.post(this.url(), t);
        },
        list: function(t) {
          return dm.post(this.url(null, "search"), t);
        },
        get: function(t, e) {
          return dm.get(this.url(t), e);
        },
        update: function(t, e) {
          return dm.patch(this.url(t), e);
        },
        delete: function(t) {
          return dm.delete(this.url(t));
        },
        changeEmail: function(t, e) {
          return dm.patch(this.url(t, "email"), { email: e });
        },
        changeLanguage: function(t, e) {
          return dm.patch(this.url(t, "language"), { language: e });
        },
        changeName: function(t, e) {
          return dm.patch(this.url(t, "name"), { name: e });
        },
        changePassword: function(t, e) {
          return dm.patch(this.url(t, "password"), { password: e });
        },
        changeRole: function(t, e) {
          return dm.patch(this.url(t, "role"), { role: e });
        },
        deleteAvatar: function(t) {
          return dm.delete(this.url(t, "avatar"));
        },
        blueprint: function(t) {
          return dm.get(this.url(t, "blueprint"));
        },
        breadcrumb: function(t) {
          return [{ link: "/users/" + t.id, label: t.username }];
        },
        options: function(t) {
          return dm.get(this.url(t), { select: "options" }).then(function(t) {
            var e = t.options,
              n = [];
            return (
              n.push({
                click: "rename",
                icon: "title",
                text: i["a"].i18n.translate("user.changeName"),
                disabled: !e.changeName
              }),
              n.push({
                click: "email",
                icon: "email",
                text: i["a"].i18n.translate("user.changeEmail"),
                disabled: !e.changeEmail
              }),
              n.push({
                click: "role",
                icon: "bolt",
                text: i["a"].i18n.translate("user.changeRole"),
                disabled: !e.changeRole
              }),
              n.push({
                click: "password",
                icon: "key",
                text: i["a"].i18n.translate("user.changePassword"),
                disabled: !e.changePassword
              }),
              n.push({
                click: "language",
                icon: "globe",
                text: i["a"].i18n.translate("user.changeLanguage"),
                disabled: !e.changeLanguage
              }),
              n.push({
                click: "remove",
                icon: "trash",
                text: i["a"].i18n.translate("user.delete"),
                disabled: !e.delete
              }),
              n
            );
          });
        },
        url: function(t, e) {
          var n = t ? "users/" + t : "users";
          return e && (n += "/" + e), n;
        },
        link: function(t, e) {
          return "/" + this.url(t, e);
        }
      },
      dm = Object(u["a"])(
        {
          config: {
            onStart: function() {},
            onComplete: function() {},
            onSuccess: function() {},
            onError: function(t) {
              throw (window.console.log(t.message), t);
            }
          },
          auth: Nf,
          files: Pf,
          pages: Df,
          roles: rm,
          system: lm,
          site: um,
          translations: cm,
          users: pm
        },
        am
      );
    (dm.config.endpoint = d.api),
      (dm.config.onStart = function() {
        om.dispatch("isLoading", !0);
      }),
      (dm.config.onComplete = function() {
        om.dispatch("isLoading", !1);
      }),
      (dm.config.onError = function(t) {
        d.debug && window.console.error(t),
          "Unauthenticated" === t.message && om.dispatch("user/logout");
      });
    var fm = setInterval(dm.auth.user, 3e5);
    (dm.config.onSuccess = function() {
      clearInterval(fm), (fm = setInterval(dm.auth.user, 3e5));
    }),
      (i["a"].prototype.$api = dm),
      (i["a"].config.errorHandler = function(t) {
        d.debug && window.console.error(t),
          om.dispatch("notification/error", {
            message: t.message || "An error occurred. Please reload the panel"
          });
      }),
      (window.panel = window.panel || {}),
      (window.panel.error = function(t, e) {
        d.debug && window.console.error(t + ": " + e),
          om.dispatch("error", t + ". See the console for more information.");
      });
    var hm = n("f2f3");
    i["a"].use(hm["a"].plugin, om);
    n("ffc1");
    var mm = {};
    for (var gm in i["a"].options.components)
      mm[gm] = i["a"].options.components[gm];
    var vm = function(t, e) {
      e.template || e.render || e.extends
        ? (e.extends &&
            "string" === typeof e.extends &&
            ((e.extends = mm[e.extends]), e.template && (e.render = null)),
          e.mixins &&
            (e.mixins = e.mixins.map(function(t) {
              return "string" === typeof t ? mm[t] : t;
            })),
          mm[t] && window.console.warn('Plugin is replacing "'.concat(t, '"')),
          i["a"].component(t, e))
        : om.dispatch(
            "notification/error",
            'Neither template or render method provided nor extending a component when loading plugin component "'.concat(
              t,
              '". The component has not been registered.'
            )
          );
    };
    Object.entries(window.panel.plugins.components).forEach(function(t) {
      var e = Object(Rf["a"])(t, 2),
        n = e[0],
        i = e[1];
      vm(n, i);
    }),
      Object.entries(window.panel.plugins.fields).forEach(function(t) {
        var e = Object(Rf["a"])(t, 2),
          n = e[0],
          i = e[1];
        vm(n, i);
      }),
      Object.entries(window.panel.plugins.sections).forEach(function(t) {
        var e = Object(Rf["a"])(t, 2),
          n = e[0],
          i = e[1];
        vm(n, Object(u["a"])({}, i, { mixins: [af].concat(i.mixins || []) }));
      }),
      Object.entries(window.panel.plugins.views).forEach(function(t) {
        var e = Object(Rf["a"])(t, 2),
          n = e[0],
          s = e[1];
        if (!s.component)
          return (
            om.dispatch(
              "notification/error",
              'No view component provided when loading view "'.concat(
                n,
                '". The view has not been registered.'
              )
            ),
            void delete window.panel.plugins.views[n]
          );
        (s.link = "/plugins/" + n),
          void 0 === s.icon && (s.icon = "page"),
          void 0 === s.menu && (s.menu = !0),
          (window.panel.plugins.views[n] = {
            link: s.link,
            icon: s.icon,
            menu: s.menu
          }),
          i["a"].component("k-" + n + "-plugin-view", s.component);
      }),
      window.panel.plugins.use.forEach(function(t) {
        i["a"].use(t);
      }),
      (i["a"].config.productionTip = !1),
      (i["a"].config.devtools = !0),
      (window.panel.app = new i["a"]({
        router: im,
        store: om,
        render: function(t) {
          return t(E);
        }
      }).$mount("#app"));
  },
  5714: function(t, e, n) {},
  "58e5": function(t, e, n) {},
  "5c0b": function(t, e, n) {
    "use strict";
    var i = n("5e27"),
      s = n.n(i);
    s.a;
  },
  "5e27": function(t, e, n) {},
  "5e3a": function(t, e, n) {
    "use strict";
    var i = n("7bb1"),
      s = n.n(i);
    s.a;
  },
  "5f4f": function(t, e, n) {},
  "5f5b": function(t, e, n) {
    "use strict";
    var i = n("8915"),
      s = n.n(i);
    s.a;
  },
  6022: function(t, e, n) {
    "use strict";
    var i = n("b31f"),
      s = n.n(i);
    s.a;
  },
  "622c": function(t, e, n) {},
  "64e6": function(t, e, n) {},
  "68b5": function(t, e, n) {
    "use strict";
    var i = n("d2f5"),
      s = n.n(i);
    s.a;
  },
  6937: function(t, e, n) {},
  "696b": function(t, e, n) {
    "use strict";
    var i = n("0cdc"),
      s = n.n(i);
    s.a;
  },
  "6a0a": function(t, e, n) {
    "use strict";
    var i = n("5439"),
      s = n.n(i);
    s.a;
  },
  "6ab9": function(t, e, n) {},
  "6af3": function(t, e, n) {},
  "6b18": function(t, e, n) {},
  "6b7f": function(t, e, n) {},
  "6b96": function(t, e, n) {},
  "6bcd": function(t, e, n) {
    "use strict";
    var i = n("9e0a"),
      s = n.n(i);
    s.a;
  },
  "6d8c": function(t, e, n) {},
  7027: function(t, e, n) {
    "use strict";
    var i = n("cd7a"),
      s = n.n(i);
    s.a;
  },
  7075: function(t, e, n) {},
  7428: function(t, e, n) {},
  7568: function(t, e, n) {
    "use strict";
    var i = n("4150"),
      s = n.n(i);
    s.a;
  },
  "75ae": function(t, e, n) {},
  7737: function(t, e, n) {
    "use strict";
    var i = n("ca19"),
      s = n.n(i);
    s.a;
  },
  "77f7": function(t, e, n) {
    "use strict";
    var i = n("200b"),
      s = n.n(i);
    s.a;
  },
  "791b": function(t, e, n) {
    "use strict";
    var i = n("ea0f"),
      s = n.n(i);
    s.a;
  },
  "7bb1": function(t, e, n) {},
  "7d5d": function(t, e, n) {
    "use strict";
    var i = n("6ab9"),
      s = n.n(i);
    s.a;
  },
  "813c": function(t, e, n) {
    "use strict";
    var i = n("c664"),
      s = n.n(i);
    s.a;
  },
  8633: function(t, e, n) {
    "use strict";
    var i = n("3755"),
      s = n.n(i);
    s.a;
  },
  8915: function(t, e, n) {},
  "891e": function(t, e, n) {},
  "8ae6": function(t, e, n) {},
  "8b1d": function(t, e, n) {},
  "8be2": function(t, e, n) {
    "use strict";
    var i = n("e0b0"),
      s = n.n(i);
    s.a;
  },
  "8e2d": function(t, e, n) {
    "use strict";
    var i = n("6d8c"),
      s = n.n(i);
    s.a;
  },
  "988f": function(t, e, n) {
    "use strict";
    var i = n("ea9f"),
      s = n.n(i);
    s.a;
  },
  "9adb": function(t, e, n) {},
  "9ae6": function(t, e, n) {},
  "9bd5": function(t, e, n) {
    "use strict";
    var i = n("64e6"),
      s = n.n(i);
    s.a;
  },
  "9df9": function(t, e, n) {},
  "9e0a": function(t, e, n) {},
  "9ee7": function(t, e, n) {},
  a2a8: function(t, e, n) {
    "use strict";
    var i = n("6937"),
      s = n.n(i);
    s.a;
  },
  a319: function(t, e, n) {},
  a361: function(t, e, n) {
    "use strict";
    var i = n("9adb"),
      s = n.n(i);
    s.a;
  },
  a89c: function(t, e, n) {
    "use strict";
    var i = n("acc9"),
      s = n.n(i);
    s.a;
  },
  aa8b: function(t, e, n) {
    "use strict";
    var i = n("b5db"),
      s = n.n(i);
    s.a;
  },
  ac27: function(t, e, n) {
    "use strict";
    var i = n("3c9d"),
      s = n.n(i);
    s.a;
  },
  acc9: function(t, e, n) {},
  b2d3: function(t, e, n) {},
  b31f: function(t, e, n) {},
  b42a: function(t, e, n) {
    "use strict";
    var i = n("a319"),
      s = n.n(i);
    s.a;
  },
  b5db: function(t, e, n) {},
  b61e: function(t, e, n) {
    "use strict";
    var i = n("d268"),
      s = n.n(i);
    s.a;
  },
  b83b: function(t, e, n) {
    "use strict";
    var i = n("9df9"),
      s = n.n(i);
    s.a;
  },
  b8aa: function(t, e, n) {},
  b8aa9: function(t, e, n) {
    "use strict";
    var i = n("c9df"),
      s = n.n(i);
    s.a;
  },
  bbbf: function(t, e, n) {},
  bd46: function(t, e, n) {
    "use strict";
    var i = n("f01a"),
      s = n.n(i);
    s.a;
  },
  bd6e: function(t, e, n) {
    "use strict";
    var i = n("3218"),
      s = n.n(i);
    s.a;
  },
  bd96: function(t, e, n) {
    "use strict";
    var i = n("d6a4"),
      s = n.n(i);
    s.a;
  },
  bf53: function(t, e, n) {
    "use strict";
    var i = n("3c80"),
      s = n.n(i);
    s.a;
  },
  c245: function(t, e, n) {},
  c664: function(t, e, n) {},
  c9df: function(t, e, n) {},
  ca19: function(t, e, n) {},
  ca3a: function(t, e, n) {},
  cd7a: function(t, e, n) {},
  d11d: function(t, e, n) {
    "use strict";
    var i = n("0812"),
      s = n.n(i);
    s.a;
  },
  d221: function(t, e, n) {
    "use strict";
    var i = n("6b7f"),
      s = n.n(i);
    s.a;
  },
  d268: function(t, e, n) {},
  d2f5: function(t, e, n) {},
  d4da: function(t, e, n) {},
  d6a4: function(t, e, n) {},
  d6f2: function(t, e, n) {},
  d6fc: function(t, e, n) {
    "use strict";
    var i = n("08ec"),
      s = n.n(i);
    s.a;
  },
  dccd: function(t, e, n) {},
  dd48: function(t, e, n) {},
  dea4: function(t, e, n) {
    "use strict";
    var i = n("dd48"),
      s = n.n(i);
    s.a;
  },
  df30: function(t, e, n) {
    "use strict";
    var i = n("28f4"),
      s = n.n(i);
    s.a;
  },
  e0b0: function(t, e, n) {},
  e104: function(t, e, n) {
    "use strict";
    var i = n("6b18"),
      s = n.n(i);
    s.a;
  },
  e697: function(t, e, n) {},
  ea0f: function(t, e, n) {},
  ea9f: function(t, e, n) {},
  eabd: function(t, e, n) {
    "use strict";
    var i = n("b2d3"),
      s = n.n(i);
    s.a;
  },
  ec72: function(t, e, n) {},
  f01a: function(t, e, n) {},
  f093: function(t, e, n) {
    "use strict";
    var i = n("2114"),
      s = n.n(i);
    s.a;
  },
  f09b: function(t, e, n) {},
  f32d: function(t, e, n) {
    "use strict";
    var i = n("d4da"),
      s = n.n(i);
    s.a;
  },
  f5e3: function(t, e, n) {},
  f986: function(t, e, n) {
    "use strict";
    var i = n("3610"),
      s = n.n(i);
    s.a;
  },
  fa25: function(t, e, n) {
    "use strict";
    var i = n("c245"),
      s = n.n(i);
    s.a;
  },
  fa44: function(t, e, n) {
    "use strict";
    var i = n("622c"),
      s = n.n(i);
    s.a;
  },
  fbb8: function(t, e, n) {
    "use strict";
    var i = n("f09b"),
      s = n.n(i);
    s.a;
  },
  fff9: function(t, e, n) {}
});
