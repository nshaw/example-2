(window['webpackJsonpconference-details-widget'] =
  window['webpackJsonpconference-details-widget'] || []).push([
  [0],
  {
    62: function(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"conference":{"id":"ID","name":"entities.conference.name","location":"entities.conference.location"}}}'
      );
    },
    71: function(e, t, n) {
      e.exports = n(91);
    },
    72: function(e, t, n) {},
    91: function(e, t, n) {
      'use strict';
      n.r(t);
      n(72);
      var a = n(27),
        r = n(28),
        c = n(35),
        o = n(20),
        i = n(29),
        l = n(64),
        s = n(24),
        u = n(0),
        f = n.n(u),
        d = n(12),
        p = n.n(d),
        m = f.a.createContext(null),
        b = n(16),
        h = n.n(b),
        O = n(31),
        y = n(37),
        v = n(23),
        k = n(123),
        w = n(63),
        j = n(3),
        E = n.n(j),
        g = (E.a.shape({ initialized: E.a.bool, authenticated: E.a.bool }), n(65));
      E.a.oneOfType([E.a.func, E.a.shape({ current: E.a.elementType }), E.a.shape(null)]);
      var P = function(e) {
          var t = e.children,
            n = e.keycloak;
          return n.initialized && n.authenticated ? t : null;
        },
        D = function(e) {
          var t = e.children,
            n = e.keycloak;
          return n.initialized && n.authenticated ? null : t;
        },
        C = n(125),
        N = (E.a.shape({ id: E.a.number, name: E.a.string, location: E.a.string }), n(117)),
        S = n(121),
        x = n(120),
        z = n(118),
        R = n(119),
        A = function(e) {
          var t = e.t,
            n = e.conference;
          return f.a.createElement(
            N.a,
            null,
            f.a.createElement(
              z.a,
              null,
              f.a.createElement(
                R.a,
                null,
                f.a.createElement(x.a, null, t('common.name')),
                f.a.createElement(x.a, null, t('common.value'))
              )
            ),
            f.a.createElement(
              S.a,
              null,
              f.a.createElement(
                R.a,
                null,
                f.a.createElement(
                  x.a,
                  null,
                  f.a.createElement('span', null, t('entities.conference.id'))
                ),
                f.a.createElement(x.a, null, f.a.createElement('span', null, n.id))
              ),
              f.a.createElement(
                R.a,
                null,
                f.a.createElement(
                  x.a,
                  null,
                  f.a.createElement('span', null, t('entities.conference.name'))
                ),
                f.a.createElement(x.a, null, f.a.createElement('span', null, n.name))
              ),
              f.a.createElement(
                R.a,
                null,
                f.a.createElement(
                  x.a,
                  null,
                  f.a.createElement('span', null, t('entities.conference.location'))
                ),
                f.a.createElement(x.a, null, f.a.createElement('span', null, n.location))
              )
            )
          );
        };
      A.defaultProps = { conference: [] };
      var F = Object(v.b)()(A),
        T = function(e) {
          var t = e.t,
            n = e.conference;
          return f.a.createElement(
            C.a,
            null,
            f.a.createElement(
              'h3',
              null,
              t('common.widgetName', { widgetNamePlaceholder: 'Conference' })
            ),
            f.a.createElement(F, { conference: n })
          );
        };
      T.defaultProps = { conference: {} };
      var U = Object(v.b)()(T),
        M = n(4),
        L = n(126),
        I = n(128),
        K = n(122),
        H = n(5),
        J = n(127),
        V = n(59),
        W = n.n(V),
        B = n(60),
        G = n.n(B),
        q = n(58),
        Q = n.n(q),
        X = n(61),
        Y = n.n(X),
        Z = { success: Q.a, error: W.a, info: G.a },
        $ = { success: 3e3, error: null, info: 5e3 },
        _ = function e(t) {
          var n = t.className,
            a = t.classes,
            r = t.status,
            c = t.message,
            o = t.onClose,
            i = !!c,
            l = r || e.INFO,
            s = Z[l],
            u = $[l],
            d = f.a.createElement(
              'span',
              { className: a.message },
              f.a.createElement(s, { className: Object(M.a)(a.icon, a.iconStatus) }),
              c
            );
          return f.a.createElement(
            L.a,
            { open: i, onClose: o, autoHideDuration: u },
            f.a.createElement(I.a, {
              className: Object(M.a)(a[l], n),
              message: d,
              action: [
                f.a.createElement(
                  J.a,
                  { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: o },
                  f.a.createElement(Y.a, { className: a.icon })
                ),
              ],
            })
          );
        };
      (_.SUCCESS = 'success'),
        (_.ERROR = 'error'),
        (_.defaultProps = {
          message: null,
          className: '',
          status: (_.INFO = 'info'),
          onClose: function() {},
        });
      var ee = Object(H.a)(
          function(e) {
            return {
              message: { display: 'flex', alignItems: 'center' },
              icon: { fontSize: 20 },
              iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
              success: { backgroundColor: K.a[600] },
              error: { backgroundColor: e.palette.error.dark },
              info: { backgroundColor: e.palette.primary.main },
            };
          },
          { withTheme: !0 }
        )(_),
        te = (function() {
          var e = Object(O.a)(
            h.a.mark(function e(t, n) {
              var a;
              return h.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch(t, n);
                    case 2:
                      if (204 !== (a = e.sent).status) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt('return', {});
                    case 5:
                      return e.abrupt(
                        'return',
                        a.status >= 200 && a.status < 300
                          ? a.json()
                          : Promise.reject(new Error(a.statusText || a.status))
                      );
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })();
      function ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ne(n, !0).forEach(function(t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var re = (function() {
          var e = Object(O.a)(
            h.a.mark(function e(t, n) {
              var a, r;
              return h.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = ''
                          .concat(t, '/')
                          .concat('conferences', '/')
                          .concat(n)),
                        (r = ae(
                          {},
                          {
                            headers: new Headers({
                              Authorization: 'Bearer '.concat(
                                window &&
                                  window.entando &&
                                  window.entando.keycloak &&
                                  window.entando.keycloak.authenticated
                                  ? window.entando.keycloak.token
                                  : ''
                              ),
                              'Content-Type': 'application/json',
                            }),
                          },
                          { method: 'GET' }
                        )),
                        e.abrupt('return', te(a, r))
                      );
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })(),
        ce = (function(e) {
          function t(e) {
            var n;
            return (
              Object(a.a)(this, t),
              ((n = Object(c.a)(this, Object(o.a)(t).call(this, e))).state = {
                loading: !0,
                conference: {},
                notificationStatus: null,
                notificationMessage: null,
              }),
              (n.theme = Object(w.a)()),
              (n.closeNotification = n.closeNotification.bind(Object(y.a)(n))),
              (n.fetchData = n.fetchData.bind(Object(y.a)(n))),
              n
            );
          }
          return (
            Object(i.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.keycloak;
                  e.initialized && e.authenticated && this.fetchData();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props.keycloak,
                    n = t.initialized && t.authenticated,
                    a = e.keycloak.authenticated !== n;
                  n && a && this.fetchData();
                },
              },
              {
                key: 'fetchData',
                value: (function() {
                  var e = Object(O.a)(
                    h.a.mark(function e() {
                      var t, n, a, r, c;
                      return h.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.props),
                                  (n = t.keycloak),
                                  (a = t.id),
                                  (r = t.serviceUrl),
                                  !(n.initialized && n.authenticated) || !a)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                return (e.prev = 3), (e.next = 6), re(r, a);
                              case 6:
                                (c = e.sent),
                                  this.setState(function() {
                                    return { conference: c, loading: !1 };
                                  }),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10), (e.t0 = e.catch(3)), this.handleError(e.t0);
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 10]]
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'handleError',
                value: function(e) {
                  var t = this.props,
                    n = t.t;
                  (0, t.onError)(e),
                    this.setState(function() {
                      return {
                        notificationMessage: n('common.couldNotFetchData'),
                        notificationStatus: ee.ERROR,
                        loading: !1,
                      };
                    });
                },
              },
              {
                key: 'closeNotification',
                value: function() {
                  this.setState({ notificationMessage: null });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.conference,
                    n = e.notificationStatus,
                    a = e.notificationMessage,
                    r = e.loading,
                    c = this.props,
                    o = c.t,
                    i = c.keycloak;
                  return f.a.createElement(
                    k.a,
                    { theme: this.theme },
                    f.a.createElement(D, { keycloak: i }, o('common.notAuthenticated')),
                    f.a.createElement(
                      P,
                      { keycloak: i },
                      r && o('common.loading'),
                      !r && f.a.createElement(U, { conference: t })
                    ),
                    f.a.createElement(ee, {
                      status: n,
                      message: a,
                      onClose: this.closeNotification,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(f.a.Component);
      ce.defaultProps = { onError: function() {}, serviceUrl: '' };
      var oe = (function(e) {
          var t = (function(t) {
            function n() {
              var t, r;
              Object(a.a)(this, n);
              for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
                l[s] = arguments[s];
              return (
                ((r = Object(c.a)(
                  this,
                  (t = Object(o.a)(n)).call.apply(t, [this].concat(l))
                )).renderWrappedComponent = function(t) {
                  var n = r.props,
                    a = n.forwardedRef,
                    c = Object(g.a)(n, ['forwardedRef']);
                  return f.a.createElement(e, Object.assign({}, c, { ref: a, keycloak: t }));
                }),
                r
              );
            }
            return (
              Object(i.a)(n, t),
              Object(r.a)(n, [
                {
                  key: 'render',
                  value: function() {
                    return f.a.createElement(m.Consumer, null, this.renderWrappedComponent);
                  },
                },
              ]),
              n
            );
          })(u.Component);
          return (
            (t.defaultProps = { forwardedRef: function() {} }),
            Object(u.forwardRef)(function(e, n) {
              return f.a.createElement(t, Object.assign({}, e, { forwardedRef: n }));
            })
          );
        })(Object(v.b)()(ce)),
        ie = n(49),
        le = { en: n(62) };
      function se(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      var ue = Object.keys(le).reduce(function(e, t) {
          return (function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? se(n, !0).forEach(function(t) {
                    Object(s.a)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : se(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
            }
            return e;
          })({}, e, Object(s.a)({}, t, Object(s.a)({}, 'translation', le[t])));
        }, {}),
        fe =
          (ie.a.t,
          function(e) {
            !(function(e, t) {
              ie.a
                .use(v.a)
                .init({
                  defaultNs: 'translation',
                  interpolation: { escapeValue: !1 },
                  resources: ue,
                  lng: e || t,
                  fallbackLng: t,
                  react: { useSuspense: !1 },
                });
            })(e, 'en');
          });
      function de(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? de(n, !0).forEach(function(t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : de(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var me = function() {
          return (
            (window &&
              window.entando &&
              window.entando.keycloak &&
              pe({}, window.entando.keycloak, { initialized: !0 })) || { initialized: !1 }
          );
        },
        be = 'service-url',
        he = 'locale',
        Oe = (function(e) {
          function t() {
            var e, n;
            Object(a.a)(this, t);
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
            return (
              ((n = Object(c.a)(
                this,
                (e = Object(o.a)(t)).call.apply(e, [this].concat(i))
              )).mountPoint = null),
              (n.unsubscribeFromKeycloakEvent = null),
              (n.keycloak = me()),
              n
            );
          }
          return (
            Object(i.a)(t, e),
            Object(r.a)(t, [
              {
                key: 'connectedCallback',
                value: function() {
                  var e,
                    t,
                    n = this;
                  (this.mountPoint = document.createElement('div')),
                    this.appendChild(this.mountPoint),
                    (this.keycloak = pe({}, me(), { initialized: !0 })),
                    (this.unsubscribeFromKeycloakEvent =
                      ((e = 'keycloak'),
                      (t = function() {
                        (n.keycloak = pe({}, me(), { initialized: !0 })), n.render();
                      }),
                      window.addEventListener(e, t),
                      function() {
                        window.removeEventListener(e, t);
                      })),
                    this.render();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.getAttribute(be) || '',
                    n = this.getAttribute(he);
                  fe(n);
                  var a = this.getAttribute('id'),
                    r = f.a.createElement(oe, {
                      id: a,
                      onError: function(t) {
                        var n = new CustomEvent(''.concat('conference.details.', 'error'), {
                          details: { error: t },
                        });
                        e.dispatchEvent(n);
                      },
                      serviceUrl: t,
                    });
                  p.a.render(
                    f.a.createElement(m.Provider, { value: this.keycloak }, r),
                    this.mountPoint
                  );
                },
              },
              {
                key: 'disconnectedCallback',
                value: function() {
                  this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
                },
              },
            ]),
            t
          );
        })(Object(l.a)(HTMLElement));
      customElements.define('conference-details', Oe);
    },
  },
  [[71, 1, 2]],
]);
//# sourceMappingURL=main.008553d8.chunk.js.map