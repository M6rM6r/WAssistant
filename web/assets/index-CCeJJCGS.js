var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (e && (t = e((e = 0))), t),
  s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  u = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    l(r || !n || !n.__esModule ? t(a, `default`, { value: n, enumerable: !0 }) : a, n)
  ),
  d = (e) =>
    a.call(e, `module.exports`) ? e[`module.exports`] : l(t({}, `__esModule`, { value: !0 }), e);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var f = s((e) => {
    var t = Symbol.for(`react.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.provider`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.iterator;
    function p(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (f && e[f]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var m = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      h = Object.assign,
      g = {};
    function _(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = g), (this.updater = n || m));
    }
    ((_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `setState(...): takes an object of state variables to update or a function which returns an object of state variables.`
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function v() {}
    v.prototype = _.prototype;
    function y(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = g), (this.updater = n || m));
    }
    var b = (y.prototype = new v());
    ((b.constructor = y), h(b, _.prototype), (b.isPureReactComponent = !0));
    var x = Array.isArray,
      S = Object.prototype.hasOwnProperty,
      C = { current: null },
      w = { key: !0, ref: !0, __self: !0, __source: !0 };
    function T(e, n, r) {
      var i,
        a = {},
        o = null,
        s = null;
      if (n != null)
        for (i in (n.ref !== void 0 && (s = n.ref), n.key !== void 0 && (o = `` + n.key), n))
          S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
      var c = arguments.length - 2;
      if (c === 1) a.children = r;
      else if (1 < c) {
        for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
        a.children = l;
      }
      if (e && e.defaultProps)
        for (i in ((c = e.defaultProps), c)) a[i] === void 0 && (a[i] = c[i]);
      return { $$typeof: t, type: e, key: o, ref: s, props: a, _owner: C.current };
    }
    function E(e, n) {
      return { $$typeof: t, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
    }
    function D(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function O(e) {
      var t = { '=': `=0`, ':': `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var k = /\/+/g;
    function A(e, t) {
      return typeof e == `object` && e && e.key != null ? O(`` + e.key) : t.toString(36);
    }
    function j(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
            }
        }
      if (c)
        return (
          (c = e),
          (o = o(c)),
          (e = a === `` ? `.` + A(c, 0) : a),
          x(o)
            ? ((i = ``),
              e != null && (i = e.replace(k, `$&/`) + `/`),
              j(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (D(o) &&
                (o = E(
                  o,
                  i +
                    (!o.key || (c && c.key === o.key) ? `` : (`` + o.key).replace(k, `$&/`) + `/`) +
                    e
                )),
              r.push(o)),
          1
        );
      if (((c = 0), (a = a === `` ? `.` : a + `:`), x(e)))
        for (var l = 0; l < e.length; l++) {
          s = e[l];
          var u = a + A(s, l);
          c += j(s, r, i, u, o);
        }
      else if (((u = p(e)), typeof u == `function`))
        for (e = u.call(e), l = 0; !(s = e.next()).done; )
          ((s = s.value), (u = a + A(s, l++)), (c += j(s, r, i, u, o)));
      else if (s === `object`)
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          )
        );
      return c;
    }
    function M(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        j(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ee(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var N = { current: null },
      P = { transition: null },
      te = { ReactCurrentDispatcher: N, ReactCurrentBatchConfig: P, ReactCurrentOwner: C };
    function ne() {
      throw Error(`act(...) is not supported in production builds of React.`);
    }
    ((e.Children = {
      map: M,
      forEach: function (e, t, n) {
        M(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          M(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          M(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!D(e))
          throw Error(`React.Children.only expected to receive a single React element child.`);
        return e;
      },
    }),
      (e.Component = _),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = y),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te),
      (e.act = ne),
      (e.cloneElement = function (e, n, r) {
        if (e == null)
          throw Error(
            `React.cloneElement(...): The argument must be a React element, but you passed ` +
              e +
              `.`
          );
        var i = h({}, e.props),
          a = e.key,
          o = e.ref,
          s = e._owner;
        if (n != null) {
          if (
            (n.ref !== void 0 && ((o = n.ref), (s = C.current)),
            n.key !== void 0 && (a = `` + n.key),
            e.type && e.type.defaultProps)
          )
            var c = e.type.defaultProps;
          for (l in n)
            S.call(n, l) &&
              !w.hasOwnProperty(l) &&
              (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
        }
        var l = arguments.length - 2;
        if (l === 1) i.children = r;
        else if (1 < l) {
          c = Array(l);
          for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
          i.children = c;
        }
        return { $$typeof: t, type: e.type, key: a, ref: o, props: i, _owner: s };
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (e.Provider = { $$typeof: o, _context: e }),
          (e.Consumer = e)
        );
      }),
      (e.createElement = T),
      (e.createFactory = function (e) {
        var t = T.bind(null, e);
        return ((t.type = e), t);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = D),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: ee };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = P.transition;
        P.transition = {};
        try {
          e();
        } finally {
          P.transition = t;
        }
      }),
      (e.unstable_act = ne),
      (e.useCallback = function (e, t) {
        return N.current.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return N.current.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e) {
        return N.current.useDeferredValue(e);
      }),
      (e.useEffect = function (e, t) {
        return N.current.useEffect(e, t);
      }),
      (e.useId = function () {
        return N.current.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return N.current.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return N.current.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return N.current.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return N.current.useMemo(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return N.current.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return N.current.useRef(e);
      }),
      (e.useState = function (e) {
        return N.current.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return N.current.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return N.current.useTransition();
      }),
      (e.version = `18.3.1`));
  }),
  p = s((e, t) => {
    t.exports = f();
  }),
  m = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (typeof performance == `object` && typeof performance.now == `function`) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = typeof setTimeout == `function` ? setTimeout : null,
      _ = typeof clearTimeout == `function` ? clearTimeout : null,
      v = typeof setImmediate < `u` ? setImmediate : null;
    typeof navigator < `u` &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function b(e) {
      if (((h = !1), y(e), !m))
        if (n(c) !== null) ((m = !0), M(x));
        else {
          var t = n(l);
          t !== null && ee(b, t.startTime - e);
        }
    }
    function x(t, i) {
      ((m = !1), h && ((h = !1), _(w), (w = -1)), (p = !0));
      var a = f;
      try {
        for (y(i), d = n(c); d !== null && (!(d.expirationTime > i) || (t && !D())); ) {
          var o = d.callback;
          if (typeof o == `function`) {
            ((d.callback = null), (f = d.priorityLevel));
            var s = o(d.expirationTime <= i);
            ((i = e.unstable_now()),
              typeof s == `function` ? (d.callback = s) : d === n(c) && r(c),
              y(i));
          } else r(c);
          d = n(c);
        }
        if (d !== null) var u = !0;
        else {
          var g = n(l);
          (g !== null && ee(b, g.startTime - i), (u = !1));
        }
        return u;
      } finally {
        ((d = null), (f = a), (p = !1));
      }
    }
    var S = !1,
      C = null,
      w = -1,
      T = 5,
      E = -1;
    function D() {
      return !(e.unstable_now() - E < T);
    }
    function O() {
      if (C !== null) {
        var t = e.unstable_now();
        E = t;
        var n = !0;
        try {
          n = C(!0, t);
        } finally {
          n ? k() : ((S = !1), (C = null));
        }
      } else S = !1;
    }
    var k;
    if (typeof v == `function`)
      k = function () {
        v(O);
      };
    else if (typeof MessageChannel < `u`) {
      var A = new MessageChannel(),
        j = A.port2;
      ((A.port1.onmessage = O),
        (k = function () {
          j.postMessage(null);
        }));
    } else
      k = function () {
        g(O, 0);
      };
    function M(e) {
      ((C = e), S || ((S = !0), k()));
    }
    function ee(t, n) {
      w = g(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || p || ((m = !0), M(x));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (T = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(c);
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (_(w), (w = -1)) : (h = !0), ee(b, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), M(x))),
          r
        );
      }),
      (e.unstable_shouldYield = D),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  h = s((e, t) => {
    t.exports = m();
  }),
  g = s((e) => {
    var t = p(),
      n = h();
    function r(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
        n < arguments.length;
        n++
      )
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    var i = new Set(),
      a = {};
    function o(e, t) {
      (s(e, t), s(e + `Capture`, t));
    }
    function s(e, t) {
      for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
    }
    var c = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      l = Object.prototype.hasOwnProperty,
      u =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      d = {},
      f = {};
    function m(e) {
      return l.call(f, e) ? !0 : l.call(d, e) ? !1 : u.test(e) ? (f[e] = !0) : ((d[e] = !0), !1);
    }
    function g(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case `function`:
        case `symbol`:
          return !0;
        case `boolean`:
          return r
            ? !1
            : n === null
              ? ((e = e.toLowerCase().slice(0, 5)), e !== `data-` && e !== `aria-`)
              : !n.acceptsBooleans;
        default:
          return !1;
      }
    }
    function _(e, t, n, r) {
      if (t == null || g(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function v(e, t, n, r, i, a, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
    }
    var y = {};
    (`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
      .split(` `)
      .forEach(function (e) {
        y[e] = new v(e, 0, !1, e, null, !1, !1);
      }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        y[t] = new v(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          y[e] = new v(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        y[e] = new v(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        y[e] = new v(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        y[e] = new v(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }));
    var b = /[\-:]([a-z])/g;
    function x(e) {
      return e[1].toUpperCase();
    }
    (`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
      .split(` `)
      .forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(t, 1, !1, e, null, !1, !1);
      }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(b, x);
          y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new v(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }));
    function S(e, t, n, r) {
      var i = y.hasOwnProperty(t) ? y[t] : null;
      (i === null
        ? r || !(2 < t.length) || (t[0] !== `o` && t[0] !== `O`) || (t[1] !== `n` && t[1] !== `N`)
        : i.type !== 0) &&
        (_(t, n, i, r) && (n = null),
        r || i === null
          ? m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : ``) : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && !0 === n) ? `` : `` + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      w = Symbol.for(`react.element`),
      T = Symbol.for(`react.portal`),
      E = Symbol.for(`react.fragment`),
      D = Symbol.for(`react.strict_mode`),
      O = Symbol.for(`react.profiler`),
      k = Symbol.for(`react.provider`),
      A = Symbol.for(`react.context`),
      j = Symbol.for(`react.forward_ref`),
      M = Symbol.for(`react.suspense`),
      ee = Symbol.for(`react.suspense_list`),
      N = Symbol.for(`react.memo`),
      P = Symbol.for(`react.lazy`),
      te = Symbol.for(`react.offscreen`),
      ne = Symbol.iterator;
    function re(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ne && e[ne]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var F = Object.assign,
      ie;
    function ae(e) {
      if (ie === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ie = (t && t[1]) || ``;
        }
      return (
        `
` +
        ie +
        e
      );
    }
    var oe = !1;
    function se(e, t) {
      if (!e || oe) return ``;
      oe = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, `props`, {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == `object` && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && typeof t.stack == `string`) {
          for (
            var i = t.stack.split(`
`),
              a = r.stack.split(`
`),
              o = i.length - 1,
              s = a.length - 1;
            1 <= o && 0 <= s && i[o] !== a[s];
          )
            s--;
          for (; 1 <= o && 0 <= s; o--, s--)
            if (i[o] !== a[s]) {
              if (o !== 1 || s !== 1)
                do
                  if ((o--, s--, 0 > s || i[o] !== a[s])) {
                    var c =
                      `
` + i[o].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        c.includes(`<anonymous>`) &&
                        (c = c.replace(`<anonymous>`, e.displayName)),
                      c
                    );
                  }
                while (1 <= o && 0 <= s);
              break;
            }
        }
      } finally {
        ((oe = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : ``) ? ae(e) : ``;
    }
    function ce(e) {
      switch (e.tag) {
        case 5:
          return ae(e.type);
        case 16:
          return ae(`Lazy`);
        case 13:
          return ae(`Suspense`);
        case 19:
          return ae(`SuspenseList`);
        case 0:
        case 2:
        case 15:
          return ((e = se(e.type, !1)), e);
        case 11:
          return ((e = se(e.type.render, !1)), e);
        case 1:
          return ((e = se(e.type, !0)), e);
        default:
          return ``;
      }
    }
    function le(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case E:
          return `Fragment`;
        case T:
          return `Portal`;
        case O:
          return `Profiler`;
        case D:
          return `StrictMode`;
        case M:
          return `Suspense`;
        case ee:
          return `SuspenseList`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case A:
            return (e.displayName || `Context`) + `.Consumer`;
          case k:
            return (e._context.displayName || `Context`) + `.Provider`;
          case j:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case N:
            return ((t = e.displayName || null), t === null ? le(e.type) || `Memo` : t);
          case P:
            ((t = e._payload), (e = e._init));
            try {
              return le(e(t));
            } catch {}
        }
      return null;
    }
    function ue(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return `Cache`;
        case 9:
          return (t.displayName || `Context`) + `.Consumer`;
        case 10:
          return (t._context.displayName || `Context`) + `.Provider`;
        case 18:
          return `DehydratedFragment`;
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ``),
            t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)
          );
        case 7:
          return `Fragment`;
        case 5:
          return t;
        case 4:
          return `Portal`;
        case 3:
          return `Root`;
        case 6:
          return `Text`;
        case 16:
          return le(t);
        case 8:
          return t === D ? `StrictMode` : `Mode`;
        case 22:
          return `Offscreen`;
        case 12:
          return `Profiler`;
        case 21:
          return `Scope`;
        case 13:
          return `Suspense`;
        case 19:
          return `SuspenseList`;
        case 25:
          return `TracingMarker`;
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == `function`) return t.displayName || t.name || null;
          if (typeof t == `string`) return t;
      }
      return null;
    }
    function de(e) {
      switch (typeof e) {
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function fe(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function pe(e) {
      var t = fe(e) ? `checked` : `value`,
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `` + e[t];
      if (
        !e.hasOwnProperty(t) &&
        n !== void 0 &&
        typeof n.get == `function` &&
        typeof n.set == `function`
      ) {
        var i = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((r = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function me(e) {
      e._valueTracker ||= pe(e);
    }
    function he(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = fe(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function ge(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function _e(e, t) {
      var n = t.checked;
      return F({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function ve(e, t) {
      var n = t.defaultValue == null ? `` : t.defaultValue,
        r = t.checked == null ? t.defaultChecked : t.checked;
      ((n = de(t.value == null ? n : t.value)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === `checkbox` || t.type === `radio` ? t.checked != null : t.value != null,
        }));
    }
    function ye(e, t) {
      ((t = t.checked), t != null && S(e, `checked`, t, !1));
    }
    function be(e, t) {
      ye(e, t);
      var n = de(t.value),
        r = t.type;
      if (n != null)
        r === `number`
          ? ((n === 0 && e.value === ``) || e.value != n) && (e.value = `` + n)
          : e.value !== `` + n && (e.value = `` + n);
      else if (r === `submit` || r === `reset`) {
        e.removeAttribute(`value`);
        return;
      }
      (t.hasOwnProperty(`value`)
        ? xe(e, t.type, n)
        : t.hasOwnProperty(`defaultValue`) && xe(e, t.type, de(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
    }
    function I(e, t, n) {
      if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
        var r = t.type;
        if (!((r !== `submit` && r !== `reset`) || (t.value !== void 0 && t.value !== null)))
          return;
        ((t = `` + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== `` && (e.name = ``),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== `` && (e.name = n));
    }
    function xe(e, t, n) {
      (t !== `number` || ge(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = `` + e._wrapperState.initialValue)
          : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
    }
    var Se = Array.isArray;
    function Ce(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + de(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function we(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
      return F({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `` + e._wrapperState.initialValue,
      });
    }
    function Te(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(r(92));
          if (Se(n)) {
            if (1 < n.length) throw Error(r(93));
            n = n[0];
          }
          t = n;
        }
        ((t ??= ``), (n = t));
      }
      e._wrapperState = { initialValue: de(n) };
    }
    function Ee(e, t) {
      var n = de(t.value),
        r = de(t.defaultValue);
      (n != null &&
        ((n = `` + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = `` + r));
    }
    function De(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== `` && t !== null && (e.value = t);
    }
    function Oe(e) {
      switch (e) {
        case `svg`:
          return `http://www.w3.org/2000/svg`;
        case `math`:
          return `http://www.w3.org/1998/Math/MathML`;
        default:
          return `http://www.w3.org/1999/xhtml`;
      }
    }
    function ke(e, t) {
      return e == null || e === `http://www.w3.org/1999/xhtml`
        ? Oe(t)
        : e === `http://www.w3.org/2000/svg` && t === `foreignObject`
          ? `http://www.w3.org/1999/xhtml`
          : e;
    }
    var Ae,
      je = (function (e) {
        return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e) e.innerHTML = t;
        else {
          for (
            Ae ||= document.createElement(`div`),
              Ae.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`,
              t = Ae.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Me(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Ne = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      L = [`Webkit`, `ms`, `Moz`, `O`];
    Object.keys(Ne).forEach(function (e) {
      L.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ne[t] = Ne[e]));
      });
    });
    function Pe(e, t, n) {
      return t == null || typeof t == `boolean` || t === ``
        ? ``
        : n || typeof t != `number` || t === 0 || (Ne.hasOwnProperty(e) && Ne[e])
          ? (`` + t).trim()
          : t + `px`;
    }
    function Fe(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf(`--`) === 0,
            i = Pe(n, t[n], r);
          (n === `float` && (n = `cssFloat`), r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var Ie = F(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function Le(e, t) {
      if (t) {
        if (Ie[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(r(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(r(60));
          if (
            typeof t.dangerouslySetInnerHTML != `object` ||
            !(`__html` in t.dangerouslySetInnerHTML)
          )
            throw Error(r(61));
        }
        if (t.style != null && typeof t.style != `object`) throw Error(r(62));
      }
    }
    function Re(e, t) {
      if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var ze = null;
    function Be(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Ve = null,
      He = null,
      Ue = null;
    function We(e) {
      if ((e = Bi(e))) {
        if (typeof Ve != `function`) throw Error(r(280));
        var t = e.stateNode;
        t && ((t = Hi(t)), Ve(e.stateNode, e.type, t));
      }
    }
    function Ge(e) {
      He ? (Ue ? Ue.push(e) : (Ue = [e])) : (He = e);
    }
    function Ke() {
      if (He) {
        var e = He,
          t = Ue;
        if (((Ue = He = null), We(e), t)) for (e = 0; e < t.length; e++) We(t[e]);
      }
    }
    function qe(e, t) {
      return e(t);
    }
    function Je() {}
    var Ye = !1;
    function Xe(e, t, n) {
      if (Ye) return e(t, n);
      Ye = !0;
      try {
        return qe(e, t, n);
      } finally {
        ((Ye = !1), (He !== null || Ue !== null) && (Je(), Ke()));
      }
    }
    function Ze(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var i = Hi(n);
      if (i === null) return null;
      n = i[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((i = !i.disabled) ||
            ((e = e.type),
            (i = !(e === `button` || e === `input` || e === `select` || e === `textarea`))),
            (e = !i));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(r(231, t, typeof n));
      return n;
    }
    var Qe = !1;
    if (c)
      try {
        var $e = {};
        (Object.defineProperty($e, `passive`, {
          get: function () {
            Qe = !0;
          },
        }),
          window.addEventListener(`test`, $e, $e),
          window.removeEventListener(`test`, $e, $e));
      } catch {
        Qe = !1;
      }
    function et(e, t, n, r, i, a, o, s, c) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, l);
      } catch (e) {
        this.onError(e);
      }
    }
    var tt = !1,
      nt = null,
      rt = !1,
      it = null,
      at = {
        onError: function (e) {
          ((tt = !0), (nt = e));
        },
      };
    function ot(e, t, n, r, i, a, o, s, c) {
      ((tt = !1), (nt = null), et.apply(at, arguments));
    }
    function st(e, t, n, i, a, o, s, c, l) {
      if ((ot.apply(this, arguments), tt)) {
        if (tt) {
          var u = nt;
          ((tt = !1), (nt = null));
        } else throw Error(r(198));
        rt || ((rt = !0), (it = u));
      }
    }
    function ct(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function lt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function ut(e) {
      if (ct(e) !== e) throw Error(r(188));
    }
    function dt(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = ct(e)), t === null)) throw Error(r(188));
        return t === e ? e : null;
      }
      for (var n = e, i = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((i = a.return), i !== null)) {
            n = i;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === n) return (ut(a), e);
            if (o === i) return (ut(a), t);
            o = o.sibling;
          }
          throw Error(r(188));
        }
        if (n.return !== i.return) ((n = a), (i = o));
        else {
          for (var s = !1, c = a.child; c; ) {
            if (c === n) {
              ((s = !0), (n = a), (i = o));
              break;
            }
            if (c === i) {
              ((s = !0), (i = a), (n = o));
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = o.child; c; ) {
              if (c === n) {
                ((s = !0), (n = o), (i = a));
                break;
              }
              if (c === i) {
                ((s = !0), (i = o), (n = a));
                break;
              }
              c = c.sibling;
            }
            if (!s) throw Error(r(189));
          }
        }
        if (n.alternate !== i) throw Error(r(190));
      }
      if (n.tag !== 3) throw Error(r(188));
      return n.stateNode.current === n ? e : t;
    }
    function ft(e) {
      return ((e = dt(e)), e === null ? null : pt(e));
    }
    function pt(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = pt(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var mt = n.unstable_scheduleCallback,
      ht = n.unstable_cancelCallback,
      gt = n.unstable_shouldYield,
      _t = n.unstable_requestPaint,
      vt = n.unstable_now,
      yt = n.unstable_getCurrentPriorityLevel,
      bt = n.unstable_ImmediatePriority,
      xt = n.unstable_UserBlockingPriority,
      St = n.unstable_NormalPriority,
      Ct = n.unstable_LowPriority,
      wt = n.unstable_IdlePriority,
      Tt = null,
      Et = null;
    function Dt(e) {
      if (Et && typeof Et.onCommitFiberRoot == `function`)
        try {
          Et.onCommitFiberRoot(Tt, e, void 0, (e.current.flags & 128) == 128);
        } catch {}
    }
    var Ot = Math.clz32 ? Math.clz32 : jt,
      kt = Math.log,
      At = Math.LN2;
    function jt(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((kt(e) / At) | 0)) | 0);
    }
    var Mt = 64,
      Nt = 4194304;
    function Pt(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Ft(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var s = o & ~i;
        s === 0 ? ((a &= o), a !== 0 && (r = Pt(a))) : (r = Pt(s));
      } else ((o = n & ~i), o === 0 ? a !== 0 && (r = Pt(a)) : (r = Pt(o)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        (t & i) === 0 &&
        ((i = r & -r), (a = t & -t), i >= a || (i === 16 && a & 4194240))
      )
        return t;
      if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
          ((n = 31 - Ot(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function It(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Lt(e, t) {
      for (
        var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes;
        0 < a;
      ) {
        var o = 31 - Ot(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = It(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
    }
    function Rt(e) {
      return ((e = e.pendingLanes & -1073741825), e === 0 ? (e & 1073741824 ? 1073741824 : 0) : e);
    }
    function zt() {
      var e = Mt;
      return ((Mt <<= 1), !(Mt & 4194240) && (Mt = 64), e);
    }
    function Bt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Vt(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ot(t)),
        (e[t] = n));
    }
    function Ht(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ot(n),
          a = 1 << i;
        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
      }
    }
    function Ut(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ot(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    var R = 0;
    function Wt(e) {
      return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
    }
    var Gt,
      Kt,
      qt,
      Jt,
      Yt,
      Xt = !1,
      Zt = [],
      Qt = null,
      $t = null,
      en = null,
      tn = new Map(),
      nn = new Map(),
      rn = [],
      an =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(
          ` `
        );
    function on(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Qt = null;
          break;
        case `dragenter`:
        case `dragleave`:
          $t = null;
          break;
        case `mouseover`:
        case `mouseout`:
          en = null;
          break;
        case `pointerover`:
        case `pointerout`:
          tn.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          nn.delete(t.pointerId);
      }
    }
    function sn(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Bi(t)), t !== null && Kt(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function cn(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Qt = sn(Qt, e, t, n, r, i)), !0);
        case `dragenter`:
          return (($t = sn($t, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((en = sn(en, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (tn.set(a, sn(tn.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), nn.set(a, sn(nn.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function ln(e) {
      var t = zi(e.target);
      if (t !== null) {
        var n = ct(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = lt(n)), t !== null)) {
              ((e.blockedOn = t),
                Yt(e.priority, function () {
                  qt(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function un(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = xn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((ze = r), n.target.dispatchEvent(r), (ze = null));
        } else return ((t = Bi(n)), t !== null && Kt(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function dn(e, t, n) {
      un(e) && n.delete(t);
    }
    function fn() {
      ((Xt = !1),
        Qt !== null && un(Qt) && (Qt = null),
        $t !== null && un($t) && ($t = null),
        en !== null && un(en) && (en = null),
        tn.forEach(dn),
        nn.forEach(dn));
    }
    function pn(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Xt || ((Xt = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, fn)));
    }
    function mn(e) {
      function t(t) {
        return pn(t, e);
      }
      if (0 < Zt.length) {
        pn(Zt[0], e);
        for (var n = 1; n < Zt.length; n++) {
          var r = Zt[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        Qt !== null && pn(Qt, e),
          $t !== null && pn($t, e),
          en !== null && pn(en, e),
          tn.forEach(t),
          nn.forEach(t),
          n = 0;
        n < rn.length;
        n++
      )
        ((r = rn[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < rn.length && ((n = rn[0]), n.blockedOn === null); )
        (ln(n), n.blockedOn === null && rn.shift());
    }
    var hn = C.ReactCurrentBatchConfig,
      gn = !0;
    function _n(e, t, n, r) {
      var i = R,
        a = hn.transition;
      hn.transition = null;
      try {
        ((R = 1), yn(e, t, n, r));
      } finally {
        ((R = i), (hn.transition = a));
      }
    }
    function vn(e, t, n, r) {
      var i = R,
        a = hn.transition;
      hn.transition = null;
      try {
        ((R = 4), yn(e, t, n, r));
      } finally {
        ((R = i), (hn.transition = a));
      }
    }
    function yn(e, t, n, r) {
      if (gn) {
        var i = xn(e, t, n, r);
        if (i === null) (di(e, t, r, bn, n), on(e, r));
        else if (cn(i, e, t, n, r)) r.stopPropagation();
        else if ((on(e, r), t & 4 && -1 < an.indexOf(e))) {
          for (; i !== null; ) {
            var a = Bi(i);
            if (
              (a !== null && Gt(a), (a = xn(e, t, n, r)), a === null && di(e, t, r, bn, n), a === i)
            )
              break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else di(e, t, r, null, n);
      }
    }
    var bn = null;
    function xn(e, t, n, r) {
      if (((bn = null), (e = Be(r)), (e = zi(e)), e !== null))
        if (((t = ct(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = lt(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((bn = e), null);
    }
    function Sn(e) {
      switch (e) {
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 1;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `toggle`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 4;
        case `message`:
          switch (yt()) {
            case bt:
              return 1;
            case xt:
              return 4;
            case St:
            case Ct:
              return 16;
            case wt:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Cn = null,
      wn = null,
      Tn = null;
    function En() {
      if (Tn) return Tn;
      var e,
        t = wn,
        n = t.length,
        r,
        i = `value` in Cn ? Cn.value : Cn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Tn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Dn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function On() {
      return !0;
    }
    function kn() {
      return !1;
    }
    function An(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? On
            : kn),
          (this.isPropagationStopped = kn),
          this
        );
      }
      return (
        F(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = On));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = On));
          },
          persist: function () {},
          isPersistent: On,
        }),
        t
      );
    }
    var jn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Mn = An(jn),
      Nn = F({}, jn, { view: 0, detail: 0 }),
      Pn = An(Nn),
      Fn,
      In,
      z,
      Ln = F({}, Nn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Jn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== z &&
                (z && e.type === `mousemove`
                  ? ((Fn = e.screenX - z.screenX), (In = e.screenY - z.screenY))
                  : (In = Fn = 0),
                (z = e)),
              Fn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : In;
        },
      }),
      Rn = An(Ln),
      zn = An(F({}, Ln, { dataTransfer: 0 })),
      Bn = An(F({}, Nn, { relatedTarget: 0 })),
      Vn = An(F({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Hn = An(
        F({}, jn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        })
      ),
      Un = An(F({}, jn, { data: 0 })),
      Wn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Gn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Kn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function qn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Kn[e]) ? !!t[e] : !1;
    }
    function Jn() {
      return qn;
    }
    var Yn = An(
        F({}, Nn, {
          key: function (e) {
            if (e.key) {
              var t = Wn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Dn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Gn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Jn,
          charCode: function (e) {
            return e.type === `keypress` ? Dn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Dn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        })
      ),
      Xn = An(
        F({}, Ln, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Zn = An(
        F({}, Nn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Jn,
        })
      ),
      Qn = An(F({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      $n = An(
        F({}, Ln, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      er = [9, 13, 27, 32],
      tr = c && `CompositionEvent` in window,
      nr = null;
    c && `documentMode` in document && (nr = document.documentMode);
    var rr = c && `TextEvent` in window && !nr,
      ir = c && (!tr || (nr && 8 < nr && 11 >= nr)),
      ar = ` `,
      or = !1;
    function sr(e, t) {
      switch (e) {
        case `keyup`:
          return er.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function cr(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var lr = !1;
    function ur(e, t) {
      switch (e) {
        case `compositionend`:
          return cr(t);
        case `keypress`:
          return t.which === 32 ? ((or = !0), ar) : null;
        case `textInput`:
          return ((e = t.data), e === ar && or ? null : e);
        default:
          return null;
      }
    }
    function dr(e, t) {
      if (lr)
        return e === `compositionend` || (!tr && sr(e, t))
          ? ((e = En()), (Tn = wn = Cn = null), (lr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return ir && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var fr = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!fr[e.type] : t === `textarea`;
    }
    function mr(e, t, n, r) {
      (Ge(r),
        (t = pi(t, `onChange`)),
        0 < t.length &&
          ((n = new Mn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var hr = null,
      gr = null;
    function _r(e) {
      oi(e, 0);
    }
    function vr(e) {
      if (he(Vi(e))) return e;
    }
    function yr(e, t) {
      if (e === `change`) return t;
    }
    var br = !1;
    if (c) {
      var xr;
      if (c) {
        var Sr = `oninput` in document;
        if (!Sr) {
          var Cr = document.createElement(`div`);
          (Cr.setAttribute(`oninput`, `return;`), (Sr = typeof Cr.oninput == `function`));
        }
        xr = Sr;
      } else xr = !1;
      br = xr && (!document.documentMode || 9 < document.documentMode);
    }
    function wr() {
      hr && (hr.detachEvent(`onpropertychange`, Tr), (gr = hr = null));
    }
    function Tr(e) {
      if (e.propertyName === `value` && vr(gr)) {
        var t = [];
        (mr(t, gr, e, Be(e)), Xe(_r, t));
      }
    }
    function Er(e, t, n) {
      e === `focusin`
        ? (wr(), (hr = t), (gr = n), hr.attachEvent(`onpropertychange`, Tr))
        : e === `focusout` && wr();
    }
    function Dr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return vr(gr);
    }
    function Or(e, t) {
      if (e === `click`) return vr(t);
    }
    function kr(e, t) {
      if (e === `input` || e === `change`) return vr(t);
    }
    function Ar(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var jr = typeof Object.is == `function` ? Object.is : Ar;
    function Mr(e, t) {
      if (jr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!l.call(t, i) || !jr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function B(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nr(e, t) {
      var n = B(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = B(n);
      }
    }
    function Pr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Pr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Fr() {
      for (var e = window, t = ge(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ge(e.document);
      }
      return t;
    }
    function Ir(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    function Lr(e) {
      var t = Fr(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (t !== n && n && n.ownerDocument && Pr(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ir(n)) {
          if (((t = r.start), (e = r.end), e === void 0 && (e = t), `selectionStart` in n))
            ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
          ) {
            e = e.getSelection();
            var i = n.textContent.length,
              a = Math.min(r.start, i);
            ((r = r.end === void 0 ? a : Math.min(r.end, i)),
              !e.extend && a > r && ((i = r), (r = a), (a = i)),
              (i = Nr(n, a)));
            var o = Nr(n, r);
            i &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              a > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode); )
          e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == `function` && n.focus(), n = 0; n < t.length; n++)
          ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
      }
    }
    var Rr = c && `documentMode` in document && 11 >= document.documentMode,
      zr = null,
      Br = null,
      Vr = null,
      Hr = !1;
    function Ur(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Hr ||
        zr == null ||
        zr !== ge(r) ||
        ((r = zr),
        `selectionStart` in r && Ir(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Vr && Mr(Vr, r)) ||
          ((Vr = r),
          (r = pi(Br, `onSelect`)),
          0 < r.length &&
            ((t = new Mn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = zr))));
    }
    function Wr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Gr = {
        animationend: Wr(`Animation`, `AnimationEnd`),
        animationiteration: Wr(`Animation`, `AnimationIteration`),
        animationstart: Wr(`Animation`, `AnimationStart`),
        transitionend: Wr(`Transition`, `TransitionEnd`),
      },
      Kr = {},
      V = {};
    c &&
      ((V = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Gr.animationend.animation,
        delete Gr.animationiteration.animation,
        delete Gr.animationstart.animation),
      `TransitionEvent` in window || delete Gr.transitionend.transition);
    function qr(e) {
      if (Kr[e]) return Kr[e];
      if (!Gr[e]) return e;
      var t = Gr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in V) return (Kr[e] = t[n]);
      return e;
    }
    var Jr = qr(`animationend`),
      Yr = qr(`animationiteration`),
      Xr = qr(`animationstart`),
      Zr = qr(`transitionend`),
      Qr = new Map(),
      $r =
        `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        );
    function ei(e, t) {
      (Qr.set(e, t), o(t, [e]));
    }
    for (var ti = 0; ti < $r.length; ti++) {
      var ni = $r[ti];
      ei(ni.toLowerCase(), `on` + (ni[0].toUpperCase() + ni.slice(1)));
    }
    (ei(Jr, `onAnimationEnd`),
      ei(Yr, `onAnimationIteration`),
      ei(Xr, `onAnimationStart`),
      ei(`dblclick`, `onDoubleClick`),
      ei(`focusin`, `onFocus`),
      ei(`focusout`, `onBlur`),
      ei(Zr, `onTransitionEnd`),
      s(`onMouseEnter`, [`mouseout`, `mouseover`]),
      s(`onMouseLeave`, [`mouseout`, `mouseover`]),
      s(`onPointerEnter`, [`pointerout`, `pointerover`]),
      s(`onPointerLeave`, [`pointerout`, `pointerover`]),
      o(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
      o(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      o(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      o(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      o(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      o(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      ));
    var ri =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      ii = new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ri));
    function ai(e, t, n) {
      var r = e.type || `unknown-event`;
      ((e.currentTarget = n), st(r, t, void 0, e), (e.currentTarget = null));
    }
    function oi(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              (ai(i, s, l), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (ai(i, s, l), (a = c));
            }
        }
      }
      if (rt) throw ((e = it), (rt = !1), (it = null), e);
    }
    function H(e, t) {
      var n = t[Ii];
      n === void 0 && (n = t[Ii] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (ui(t, e, 2, !1), n.add(r));
    }
    function si(e, t, n) {
      var r = 0;
      (t && (r |= 4), ui(n, e, r, t));
    }
    var ci = `_reactListening` + Math.random().toString(36).slice(2);
    function li(e) {
      if (!e[ci]) {
        ((e[ci] = !0),
          i.forEach(function (t) {
            t !== `selectionchange` && (ii.has(t) || si(t, !1, e), si(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ci] || ((t[ci] = !0), si(`selectionchange`, !1, t));
      }
    }
    function ui(e, t, n, r) {
      switch (Sn(t)) {
        case 1:
          var i = _n;
          break;
        case 4:
          i = vn;
          break;
        default:
          i = yn;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Qe || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function di(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var c = o.tag;
                if (
                  (c === 3 || c === 4) &&
                  ((c = o.stateNode.containerInfo),
                  c === i || (c.nodeType === 8 && c.parentNode === i))
                )
                  return;
                o = o.return;
              }
            for (; s !== null; ) {
              if (((o = zi(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      Xe(function () {
        var r = a,
          i = Be(n),
          o = [];
        a: {
          var s = Qr.get(e);
          if (s !== void 0) {
            var c = Mn,
              l = e;
            switch (e) {
              case `keypress`:
                if (Dn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = Yn;
                break;
              case `focusin`:
                ((l = `focus`), (c = Bn));
                break;
              case `focusout`:
                ((l = `blur`), (c = Bn));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = Bn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Rn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = zn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = Zn;
                break;
              case Jr:
              case Yr:
              case Xr:
                c = Vn;
                break;
              case Zr:
                c = Qn;
                break;
              case `scroll`:
                c = Pn;
                break;
              case `wheel`:
                c = $n;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = Hn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = Xn;
            }
            var u = (t & 4) != 0,
              d = !u && e === `scroll`,
              f = u ? (s === null ? null : s + `Capture`) : s;
            u = [];
            for (var p = r, m; p !== null; ) {
              m = p;
              var h = m.stateNode;
              if (
                (m.tag === 5 &&
                  h !== null &&
                  ((m = h), f !== null && ((h = Ze(p, f)), h != null && u.push(fi(p, h, m)))),
                d)
              )
                break;
              p = p.return;
            }
            0 < u.length && ((s = new c(s, l, null, n, i)), o.push({ event: s, listeners: u }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s && n !== ze && (l = n.relatedTarget || n.fromElement) && (zi(l) || l[Fi]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? zi(l) : null),
                  l !== null &&
                    ((d = ct(l)), l !== d || (l.tag !== 5 && l.tag !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l)
            ) {
              if (
                ((u = Rn),
                (h = `onMouseLeave`),
                (f = `onMouseEnter`),
                (p = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((u = Xn), (h = `onPointerLeave`), (f = `onPointerEnter`), (p = `pointer`)),
                (d = c == null ? s : Vi(c)),
                (m = l == null ? s : Vi(l)),
                (s = new u(h, p + `leave`, c, n, i)),
                (s.target = d),
                (s.relatedTarget = m),
                (h = null),
                zi(i) === r &&
                  ((u = new u(f, p + `enter`, l, n, i)),
                  (u.target = m),
                  (u.relatedTarget = d),
                  (h = u)),
                (d = h),
                c && l)
              )
                b: {
                  for (u = c, f = l, p = 0, m = u; m; m = mi(m)) p++;
                  for (m = 0, h = f; h; h = mi(h)) m++;
                  for (; 0 < p - m; ) ((u = mi(u)), p--);
                  for (; 0 < m - p; ) ((f = mi(f)), m--);
                  for (; p--; ) {
                    if (u === f || (f !== null && u === f.alternate)) break b;
                    ((u = mi(u)), (f = mi(f)));
                  }
                  u = null;
                }
              else u = null;
              (c !== null && hi(o, s, c, u, !1), l !== null && d !== null && hi(o, d, l, u, !0));
            }
          }
          a: {
            if (
              ((s = r ? Vi(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var g = yr;
            else if (pr(s))
              if (br) g = kr;
              else {
                g = Dr;
                var _ = Er;
              }
            else
              (c = s.nodeName) &&
                c.toLowerCase() === `input` &&
                (s.type === `checkbox` || s.type === `radio`) &&
                (g = Or);
            if ((g &&= g(e, r))) {
              mr(o, g, n, i);
              break a;
            }
            (_ && _(e, s, r),
              e === `focusout` &&
                (_ = s._wrapperState) &&
                _.controlled &&
                s.type === `number` &&
                xe(s, `number`, s.value));
          }
          switch (((_ = r ? Vi(r) : window), e)) {
            case `focusin`:
              (pr(_) || _.contentEditable === `true`) && ((zr = _), (Br = r), (Vr = null));
              break;
            case `focusout`:
              Vr = Br = zr = null;
              break;
            case `mousedown`:
              Hr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Hr = !1), Ur(o, n, i));
              break;
            case `selectionchange`:
              if (Rr) break;
            case `keydown`:
            case `keyup`:
              Ur(o, n, i);
          }
          var v;
          if (tr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var y = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  y = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  y = `onCompositionUpdate`;
                  break b;
              }
              y = void 0;
            }
          else
            lr
              ? sr(e, n) && (y = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (y = `onCompositionStart`);
          (y &&
            (ir &&
              n.locale !== `ko` &&
              (lr || y !== `onCompositionStart`
                ? y === `onCompositionEnd` && lr && (v = En())
                : ((Cn = i), (wn = `value` in Cn ? Cn.value : Cn.textContent), (lr = !0))),
            (_ = pi(r, y)),
            0 < _.length &&
              ((y = new Un(y, e, null, n, i)),
              o.push({ event: y, listeners: _ }),
              v ? (y.data = v) : ((v = cr(n)), v !== null && (y.data = v)))),
            (v = rr ? ur(e, n) : dr(e, n)) &&
              ((r = pi(r, `onBeforeInput`)),
              0 < r.length &&
                ((i = new Un(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = v))));
        }
        oi(o, t);
      });
    }
    function fi(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function pi(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        (i.tag === 5 &&
          a !== null &&
          ((i = a),
          (a = Ze(e, n)),
          a != null && r.unshift(fi(e, a, i)),
          (a = Ze(e, t)),
          a != null && r.push(fi(e, a, i))),
          (e = e.return));
      }
      return r;
    }
    function mi(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function hi(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (c !== null && c === r) break;
        (s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((c = Ze(n, a)), c != null && o.unshift(fi(n, c, s)))
            : i || ((c = Ze(n, a)), c != null && o.push(fi(n, c, s)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var gi = /\r\n?/g,
      _i = /\u0000|\uFFFD/g;
    function vi(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          gi,
          `
`
        )
        .replace(_i, ``);
    }
    function yi(e, t, n) {
      if (((t = vi(t)), vi(e) !== t && n)) throw Error(r(425));
    }
    function bi() {}
    var xi = null,
      Si = null;
    function Ci(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var wi = typeof setTimeout == `function` ? setTimeout : void 0,
      Ti = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Ei = typeof Promise == `function` ? Promise : void 0,
      Di =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Ei === void 0
            ? wi
            : function (e) {
                return Ei.resolve(null).then(e).catch(Oi);
              };
    function Oi(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function ki(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$`)) {
            if (r === 0) {
              (e.removeChild(i), mn(t));
              return;
            }
            r--;
          } else (n !== `$` && n !== `$?` && n !== `$!`) || r++;
        n = i;
      } while (n);
      mn(t);
    }
    function Ai(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === `$` || t === `$!` || t === `$?`)) break;
          if (t === `/$`) return null;
        }
      }
      return e;
    }
    function ji(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?`) {
            if (t === 0) return e;
            t--;
          } else n === `/$` && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Mi = Math.random().toString(36).slice(2),
      Ni = `__reactFiber$` + Mi,
      Pi = `__reactProps$` + Mi,
      Fi = `__reactContainer$` + Mi,
      Ii = `__reactEvents$` + Mi,
      Li = `__reactListeners$` + Mi,
      Ri = `__reactHandles$` + Mi;
    function zi(e) {
      var t = e[Ni];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Fi] || n[Ni])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = ji(e); e !== null; ) {
              if ((n = e[Ni])) return n;
              e = ji(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Bi(e) {
      return (
        (e = e[Ni] || e[Fi]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
      );
    }
    function Vi(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(r(33));
    }
    function Hi(e) {
      return e[Pi] || null;
    }
    var Ui = [],
      Wi = -1;
    function Gi(e) {
      return { current: e };
    }
    function U(e) {
      0 > Wi || ((e.current = Ui[Wi]), (Ui[Wi] = null), Wi--);
    }
    function W(e, t) {
      (Wi++, (Ui[Wi] = e.current), (e.current = t));
    }
    var Ki = {},
      qi = Gi(Ki),
      Ji = Gi(!1),
      Yi = Ki;
    function Xi(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Ki;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        a;
      for (a in n) i[a] = t[a];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function Zi(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function Qi() {
      (U(Ji), U(qi));
    }
    function $i(e, t, n) {
      if (qi.current !== Ki) throw Error(r(168));
      (W(qi, t), W(Ji, n));
    }
    function ea(e, t, n) {
      var i = e.stateNode;
      if (((t = t.childContextTypes), typeof i.getChildContext != `function`)) return n;
      for (var a in ((i = i.getChildContext()), i))
        if (!(a in t)) throw Error(r(108, ue(e) || `Unknown`, a));
      return F({}, n, i);
    }
    function ta(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ki),
        (Yi = qi.current),
        W(qi, e),
        W(Ji, Ji.current),
        !0
      );
    }
    function na(e, t, n) {
      var i = e.stateNode;
      if (!i) throw Error(r(169));
      (n
        ? ((e = ea(e, t, Yi)),
          (i.__reactInternalMemoizedMergedChildContext = e),
          U(Ji),
          U(qi),
          W(qi, e))
        : U(Ji),
        W(Ji, n));
    }
    var ra = null,
      ia = !1,
      aa = !1;
    function oa(e) {
      ra === null ? (ra = [e]) : ra.push(e);
    }
    function sa(e) {
      ((ia = !0), oa(e));
    }
    function ca() {
      if (!aa && ra !== null) {
        aa = !0;
        var e = 0,
          t = R;
        try {
          var n = ra;
          for (R = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((ra = null), (ia = !1));
        } catch (t) {
          throw (ra !== null && (ra = ra.slice(e + 1)), mt(bt, ca), t);
        } finally {
          ((R = t), (aa = !1));
        }
      }
      return null;
    }
    var la = [],
      ua = 0,
      da = null,
      fa = 0,
      pa = [],
      ma = 0,
      ha = null,
      ga = 1,
      _a = ``;
    function va(e, t) {
      ((la[ua++] = fa), (la[ua++] = da), (da = e), (fa = t));
    }
    function ya(e, t, n) {
      ((pa[ma++] = ga), (pa[ma++] = _a), (pa[ma++] = ha), (ha = e));
      var r = ga;
      e = _a;
      var i = 32 - Ot(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ot(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ga = (1 << (32 - Ot(t) + i)) | (n << i) | r),
          (_a = a + e));
      } else ((ga = (1 << a) | (n << i) | r), (_a = e));
    }
    function ba(e) {
      e.return !== null && (va(e, 1), ya(e, 1, 0));
    }
    function xa(e) {
      for (; e === da; ) ((da = la[--ua]), (la[ua] = null), (fa = la[--ua]), (la[ua] = null));
      for (; e === ha; )
        ((ha = pa[--ma]),
          (pa[ma] = null),
          (_a = pa[--ma]),
          (pa[ma] = null),
          (ga = pa[--ma]),
          (pa[ma] = null));
    }
    var Sa = null,
      Ca = null,
      G = !1,
      wa = null;
    function Ta(e, t) {
      var n = Yl(5, null, null, 0);
      ((n.elementType = `DELETED`),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function Ea(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
            t === null ? !1 : ((e.stateNode = t), (Sa = e), (Ca = Ai(t.firstChild)), !0)
          );
        case 6:
          return (
            (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
            t === null ? !1 : ((e.stateNode = t), (Sa = e), (Ca = null), !0)
          );
        case 13:
          return (
            (t = t.nodeType === 8 ? t : null),
            t === null
              ? !1
              : ((n = ha === null ? null : { id: ga, overflow: _a }),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                (n = Yl(18, null, null, 0)),
                (n.stateNode = t),
                (n.return = e),
                (e.child = n),
                (Sa = e),
                (Ca = null),
                !0)
          );
        default:
          return !1;
      }
    }
    function Da(e) {
      return (e.mode & 1) != 0 && (e.flags & 128) == 0;
    }
    function Oa(e) {
      if (G) {
        var t = Ca;
        if (t) {
          var n = t;
          if (!Ea(e, t)) {
            if (Da(e)) throw Error(r(418));
            t = Ai(n.nextSibling);
            var i = Sa;
            t && Ea(e, t) ? Ta(i, n) : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Sa = e));
          }
        } else {
          if (Da(e)) throw Error(r(418));
          ((e.flags = (e.flags & -4097) | 2), (G = !1), (Sa = e));
        }
      }
    }
    function ka(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      Sa = e;
    }
    function Aa(e) {
      if (e !== Sa) return !1;
      if (!G) return (ka(e), (G = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type), (t = t !== `head` && t !== `body` && !Ci(e.type, e.memoizedProps))),
        (t &&= Ca))
      ) {
        if (Da(e)) throw (ja(), Error(r(418)));
        for (; t; ) (Ta(e, t), (t = Ai(t.nextSibling)));
      }
      if ((ka(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(r(317));
        a: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === `/$`) {
                if (t === 0) {
                  Ca = Ai(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          Ca = null;
        }
      } else Ca = Sa ? Ai(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ja() {
      for (var e = Ca; e; ) e = Ai(e.nextSibling);
    }
    function Ma() {
      ((Ca = Sa = null), (G = !1));
    }
    function Na(e) {
      wa === null ? (wa = [e]) : wa.push(e);
    }
    var Pa = C.ReactCurrentBatchConfig;
    function Fa(e, t, n) {
      if (((e = n.ref), e !== null && typeof e != `function` && typeof e != `object`)) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(r(309));
            var i = n.stateNode;
          }
          if (!i) throw Error(r(147, e));
          var a = i,
            o = `` + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == `function` &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (e) {
                var t = a.refs;
                e === null ? delete t[o] : (t[o] = e);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != `string`) throw Error(r(284));
        if (!n._owner) throw Error(r(290, e));
      }
      return e;
    }
    function Ia(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e
          )
        )
      );
    }
    function La(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Ra(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function i(e, t) {
        for (e = new Map(); t !== null; )
          (t.key === null ? e.set(t.index, t) : e.set(t.key, t), (t = t.sibling));
        return e;
      }
      function a(e, t) {
        return ((e = Ql(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null ? ((t.flags |= 2), n) : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 2), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = nu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === E
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === P && La(i) === t.type))
            ? ((r = a(t, n.props)), (r.ref = Fa(e, t, n)), (r.return = e), r)
            : ((r = $l(n.type, n.key, n.props, null, e.mode, r)),
              (r.ref = Fa(e, t, n)),
              (r.return = e),
              r);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = ru(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = eu(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number`)
          return ((t = nu(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case w:
              return (
                (n = $l(t.type, t.key, t.props, null, e.mode, n)),
                (n.ref = Fa(e, null, t)),
                (n.return = e),
                n
              );
            case T:
              return ((t = ru(t, e.mode, n)), (t.return = e), t);
            case P:
              var r = t._init;
              return f(e, r(t._payload), n);
          }
          if (Se(t) || re(t)) return ((t = eu(t, e.mode, n, null)), (t.return = e), t);
          Ia(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case w:
              return n.key === i ? l(e, t, n, r) : null;
            case T:
              return n.key === i ? u(e, t, n, r) : null;
            case P:
              return ((i = n._init), p(e, t, i(n._payload), r));
          }
          if (Se(n) || re(n)) return i === null ? d(e, t, n, r, null) : null;
          Ia(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case w:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case T:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case P:
              var a = r._init;
              return m(e, t, n, a(r._payload), i);
          }
          if (Se(r) || re(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          Ia(t, r);
        }
        return null;
      }
      function h(r, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(r, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(r, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(r, d), G && va(r, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(r, s[h], c)),
              d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (G && va(r, h), l);
        }
        for (d = i(r, d); h < s.length; h++)
          ((g = m(d, r, h, s[h], c)),
            g !== null &&
              (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(r, e);
            }),
          G && va(r, h),
          l
        );
      }
      function g(a, s, c, l) {
        var u = re(c);
        if (typeof u != `function`) throw Error(r(150));
        if (((c = u.call(c)), c == null)) throw Error(r(151));
        for (
          var d = (u = null), h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), G && va(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (G && va(a, g), u);
        }
        for (h = i(a, h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          G && va(a, g),
          u
        );
      }
      function _(e, r, i, o) {
        if (
          (typeof i == `object` && i && i.type === E && i.key === null && (i = i.props.children),
          typeof i == `object` && i)
        ) {
          switch (i.$$typeof) {
            case w:
              a: {
                for (var c = i.key, l = r; l !== null; ) {
                  if (l.key === c) {
                    if (((c = i.type), c === E)) {
                      if (l.tag === 7) {
                        (n(e, l.sibling), (r = a(l, i.props.children)), (r.return = e), (e = r));
                        break a;
                      }
                    } else if (
                      l.elementType === c ||
                      (typeof c == `object` && c && c.$$typeof === P && La(c) === l.type)
                    ) {
                      (n(e, l.sibling),
                        (r = a(l, i.props)),
                        (r.ref = Fa(e, l, i)),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, l);
                    break;
                  } else t(e, l);
                  l = l.sibling;
                }
                i.type === E
                  ? ((r = eu(i.props.children, e.mode, o, i.key)), (r.return = e), (e = r))
                  : ((o = $l(i.type, i.key, i.props, null, e.mode, o)),
                    (o.ref = Fa(e, r, i)),
                    (o.return = e),
                    (e = o));
              }
              return s(e);
            case T:
              a: {
                for (l = i.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      (n(e, r.sibling), (r = a(r, i.children || [])), (r.return = e), (e = r));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((r = ru(i, e.mode, o)), (r.return = e), (e = r));
              }
              return s(e);
            case P:
              return ((l = i._init), _(e, r, l(i._payload), o));
          }
          if (Se(i)) return h(e, r, i, o);
          if (re(i)) return g(e, r, i, o);
          Ia(e, i);
        }
        return (typeof i == `string` && i !== ``) || typeof i == `number`
          ? ((i = `` + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (r = a(r, i)), (r.return = e), (e = r))
              : (n(e, r), (r = nu(i, e.mode, o)), (r.return = e), (e = r)),
            s(e))
          : n(e, r);
      }
      return _;
    }
    var za = Ra(!0),
      Ba = Ra(!1),
      Va = Gi(null),
      Ha = null,
      Ua = null,
      Wa = null;
    function Ga() {
      Wa = Ua = Ha = null;
    }
    function Ka(e) {
      var t = Va.current;
      (U(Va), (e._currentValue = t));
    }
    function qa(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Ja(e, t) {
      ((Ha = e),
        (Wa = Ua = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Is = !0), (e.firstContext = null)));
    }
    function Ya(e) {
      var t = e._currentValue;
      if (Wa !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Ua === null)) {
          if (Ha === null) throw Error(r(308));
          ((Ua = e), (Ha.dependencies = { lanes: 0, firstContext: e }));
        } else Ua = Ua.next = e;
      return t;
    }
    var Xa = null;
    function Za(e) {
      Xa === null ? (Xa = [e]) : Xa.push(e);
    }
    function Qa(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), Za(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        $a(e, r)
      );
    }
    function $a(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var eo = !1;
    function to(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function no(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function ro(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function io(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), Y & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          $a(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Za(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        $a(e, n)
      );
    }
    function ao(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194240))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ut(e, n));
      }
    }
    function oo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function so(e, t, n, r) {
      var i = e.updateQueue;
      eo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane,
            p = s.eventTime;
          if ((r & f) === f) {
            u !== null &&
              (u = u.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                });
            a: {
              var m = e,
                h = s;
              switch (((f = t), (p = n), h.tag)) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(p, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload), (f = typeof m == `function` ? m.call(p, d, f) : m), f == null)
                  )
                    break a;
                  d = F({}, d, f);
                  break a;
                case 2:
                  eo = !0;
              }
            }
            s.callback !== null &&
              s.lane !== 0 &&
              ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [s]) : f.push(s));
          } else
            ((p = {
              eventTime: p,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((f = s),
              (s = f.next),
              (f.next = null),
              (i.lastBaseUpdate = f),
              (i.shared.pending = null));
          }
        } while (1);
        if (
          (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          (t = i.shared.interleaved),
          t !== null)
        ) {
          i = t;
          do ((o |= i.lane), (i = i.next));
          while (i !== t);
        } else a === null && (i.shared.lanes = 0);
        ((Qc |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function co(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var i = e[t],
            a = i.callback;
          if (a !== null) {
            if (((i.callback = null), (i = n), typeof a != `function`)) throw Error(r(191, a));
            a.call(i);
          }
        }
    }
    var lo = {},
      uo = Gi(lo),
      fo = Gi(lo),
      po = Gi(lo);
    function mo(e) {
      if (e === lo) throw Error(r(174));
      return e;
    }
    function ho(e, t) {
      switch ((W(po, t), W(fo, e), W(uo, lo), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ke(null, ``);
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = ke(t, e)));
      }
      (U(uo), W(uo, t));
    }
    function go() {
      (U(uo), U(fo), U(po));
    }
    function _o(e) {
      mo(po.current);
      var t = mo(uo.current),
        n = ke(t, e.type);
      t !== n && (W(fo, e), W(uo, n));
    }
    function vo(e) {
      fo.current === e && (U(uo), U(fo));
    }
    var K = Gi(0);
    function yo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || n.data === `$?` || n.data === `$!`))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var bo = [];
    function xo() {
      for (var e = 0; e < bo.length; e++) bo[e]._workInProgressVersionPrimary = null;
      bo.length = 0;
    }
    var So = C.ReactCurrentDispatcher,
      Co = C.ReactCurrentBatchConfig,
      wo = 0,
      q = null,
      To = null,
      Eo = null,
      Do = !1,
      Oo = !1,
      ko = 0,
      Ao = 0;
    function jo() {
      throw Error(r(321));
    }
    function Mo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!jr(e[n], t[n])) return !1;
      return !0;
    }
    function No(e, t, n, i, a, o) {
      if (
        ((wo = o),
        (q = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (So.current = e === null || e.memoizedState === null ? gs : _s),
        (e = n(i, a)),
        Oo)
      ) {
        o = 0;
        do {
          if (((Oo = !1), (ko = 0), 25 <= o)) throw Error(r(301));
          ((o += 1), (Eo = To = null), (t.updateQueue = null), (So.current = vs), (e = n(i, a)));
        } while (Oo);
      }
      if (
        ((So.current = hs),
        (t = To !== null && To.next !== null),
        (wo = 0),
        (Eo = To = q = null),
        (Do = !1),
        t)
      )
        throw Error(r(300));
      return e;
    }
    function Po() {
      var e = ko !== 0;
      return ((ko = 0), e);
    }
    function Fo() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (Eo === null ? (q.memoizedState = Eo = e) : (Eo = Eo.next = e), Eo);
    }
    function Io() {
      if (To === null) {
        var e = q.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = To.next;
      var t = Eo === null ? q.memoizedState : Eo.next;
      if (t !== null) ((Eo = t), (To = e));
      else {
        if (e === null) throw Error(r(310));
        ((To = e),
          (e = {
            memoizedState: To.memoizedState,
            baseState: To.baseState,
            baseQueue: To.baseQueue,
            queue: To.queue,
            next: null,
          }),
          Eo === null ? (q.memoizedState = Eo = e) : (Eo = Eo.next = e));
      }
      return Eo;
    }
    function Lo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Ro(e) {
      var t = Io(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = To,
        a = i.baseQueue,
        o = n.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((i.baseQueue = a = o), (n.pending = null));
      }
      if (a !== null) {
        ((o = a.next), (i = i.baseState));
        var c = (s = null),
          l = null,
          u = o;
        do {
          var d = u.lane;
          if ((wo & d) === d)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (i = u.hasEagerState ? u.eagerState : e(i, u.action)));
          else {
            var f = {
              lane: d,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            (l === null ? ((c = l = f), (s = i)) : (l = l.next = f), (q.lanes |= d), (Qc |= d));
          }
          u = u.next;
        } while (u !== null && u !== o);
        (l === null ? (s = i) : (l.next = c),
          jr(i, t.memoizedState) || (Is = !0),
          (t.memoizedState = i),
          (t.baseState = s),
          (t.baseQueue = l),
          (n.lastRenderedState = i));
      }
      if (((e = n.interleaved), e !== null)) {
        a = e;
        do ((o = a.lane), (q.lanes |= o), (Qc |= o), (a = a.next));
        while (a !== e);
      } else a === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function zo(e) {
      var t = Io(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (jr(o, t.memoizedState) || (Is = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, i];
    }
    function Bo() {}
    function Vo(e, t) {
      var n = q,
        i = Io(),
        a = t(),
        o = !jr(i.memoizedState, a);
      if (
        (o && ((i.memoizedState = a), (Is = !0)),
        (i = i.queue),
        $o(Wo.bind(null, n, i, e), [e]),
        i.getSnapshot !== t || o || (Eo !== null && Eo.memoizedState.tag & 1))
      ) {
        if (((n.flags |= 2048), Jo(9, Uo.bind(null, n, i, a, t), void 0, null), Gc === null))
          throw Error(r(349));
        wo & 30 || Ho(n, t, a);
      }
      return a;
    }
    function Ho(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = q.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }), (q.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Uo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Go(t) && Ko(e));
    }
    function Wo(e, t, n) {
      return n(function () {
        Go(t) && Ko(e);
      });
    }
    function Go(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !jr(e, n);
      } catch {
        return !0;
      }
    }
    function Ko(e) {
      var t = $a(e, 1);
      t !== null && vl(t, e, 1, -1);
    }
    function qo(e) {
      var t = Fo();
      return (
        typeof e == `function` && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Lo,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = ds.bind(null, q, e)),
        [t.memoizedState, e]
      );
    }
    function Jo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = q.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (q.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function Yo() {
      return Io().memoizedState;
    }
    function Xo(e, t, n, r) {
      var i = Fo();
      ((q.flags |= e), (i.memoizedState = Jo(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function Zo(e, t, n, r) {
      var i = Io();
      r = r === void 0 ? null : r;
      var a = void 0;
      if (To !== null) {
        var o = To.memoizedState;
        if (((a = o.destroy), r !== null && Mo(r, o.deps))) {
          i.memoizedState = Jo(t, n, a, r);
          return;
        }
      }
      ((q.flags |= e), (i.memoizedState = Jo(1 | t, n, a, r)));
    }
    function Qo(e, t) {
      return Xo(8390656, 8, e, t);
    }
    function $o(e, t) {
      return Zo(2048, 8, e, t);
    }
    function es(e, t) {
      return Zo(4, 2, e, t);
    }
    function ts(e, t) {
      return Zo(4, 4, e, t);
    }
    function ns(e, t) {
      if (typeof t == `function`)
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function rs(e, t, n) {
      return ((n = n == null ? null : n.concat([e])), Zo(4, 4, ns.bind(null, t, e), n));
    }
    function is() {}
    function as(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Mo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function os(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Mo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function ss(e, t, n) {
      return wo & 21
        ? (jr(n, t) || ((n = zt()), (q.lanes |= n), (Qc |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (Is = !0)), (e.memoizedState = n));
    }
    function cs(e, t) {
      var n = R;
      ((R = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = Co.transition;
      Co.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((R = n), (Co.transition = r));
      }
    }
    function ls() {
      return Io().memoizedState;
    }
    function us(e, t, n) {
      var r = _l(e);
      if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), fs(e)))
        ps(t, n);
      else if (((n = Qa(e, t, n, r)), n !== null)) {
        var i = gl();
        (vl(n, e, r, i), ms(n, t, r));
      }
    }
    function ds(e, t, n) {
      var r = _l(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
      if (fs(e)) ps(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), jr(s, o))) {
              var c = t.interleaved;
              (c === null ? ((i.next = i), Za(t)) : ((i.next = c.next), (c.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = Qa(e, t, i, r)), n !== null && ((i = gl()), vl(n, e, r, i), ms(n, t, r)));
      }
    }
    function fs(e) {
      var t = e.alternate;
      return e === q || (t !== null && t === q);
    }
    function ps(e, t) {
      Oo = Do = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function ms(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ut(e, n));
      }
    }
    var hs = {
        readContext: Ya,
        useCallback: jo,
        useContext: jo,
        useEffect: jo,
        useImperativeHandle: jo,
        useInsertionEffect: jo,
        useLayoutEffect: jo,
        useMemo: jo,
        useReducer: jo,
        useRef: jo,
        useState: jo,
        useDebugValue: jo,
        useDeferredValue: jo,
        useTransition: jo,
        useMutableSource: jo,
        useSyncExternalStore: jo,
        useId: jo,
        unstable_isNewReconciler: !1,
      },
      gs = {
        readContext: Ya,
        useCallback: function (e, t) {
          return ((Fo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Ya,
        useEffect: Qo,
        useImperativeHandle: function (e, t, n) {
          return ((n = n == null ? null : n.concat([e])), Xo(4194308, 4, ns.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Xo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return Xo(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Fo();
          return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
          var r = Fo();
          return (
            (t = n === void 0 ? t : n(t)),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = us.bind(null, q, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Fo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: qo,
        useDebugValue: is,
        useDeferredValue: function (e) {
          return (Fo().memoizedState = e);
        },
        useTransition: function () {
          var e = qo(!1),
            t = e[0];
          return ((e = cs.bind(null, e[1])), (Fo().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var i = q,
            a = Fo();
          if (G) {
            if (n === void 0) throw Error(r(407));
            n = n();
          } else {
            if (((n = t()), Gc === null)) throw Error(r(349));
            wo & 30 || Ho(i, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Qo(Wo.bind(null, i, o, e), [e]),
            (i.flags |= 2048),
            Jo(9, Uo.bind(null, i, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Fo(),
            t = Gc.identifierPrefix;
          if (G) {
            var n = _a,
              r = ga;
            ((n = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = ko++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = Ao++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      _s = {
        readContext: Ya,
        useCallback: as,
        useContext: Ya,
        useEffect: $o,
        useImperativeHandle: rs,
        useInsertionEffect: es,
        useLayoutEffect: ts,
        useMemo: os,
        useReducer: Ro,
        useRef: Yo,
        useState: function () {
          return Ro(Lo);
        },
        useDebugValue: is,
        useDeferredValue: function (e) {
          return ss(Io(), To.memoizedState, e);
        },
        useTransition: function () {
          return [Ro(Lo)[0], Io().memoizedState];
        },
        useMutableSource: Bo,
        useSyncExternalStore: Vo,
        useId: ls,
        unstable_isNewReconciler: !1,
      },
      vs = {
        readContext: Ya,
        useCallback: as,
        useContext: Ya,
        useEffect: $o,
        useImperativeHandle: rs,
        useInsertionEffect: es,
        useLayoutEffect: ts,
        useMemo: os,
        useReducer: zo,
        useRef: Yo,
        useState: function () {
          return zo(Lo);
        },
        useDebugValue: is,
        useDeferredValue: function (e) {
          var t = Io();
          return To === null ? (t.memoizedState = e) : ss(t, To.memoizedState, e);
        },
        useTransition: function () {
          return [zo(Lo)[0], Io().memoizedState];
        },
        useMutableSource: Bo,
        useSyncExternalStore: Vo,
        useId: ls,
        unstable_isNewReconciler: !1,
      };
    function ys(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = F({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function bs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : F({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var xs = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? ct(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = gl(),
          i = _l(e),
          a = ro(r, i);
        ((a.payload = t),
          n != null && (a.callback = n),
          (t = io(e, a, i)),
          t !== null && (vl(t, e, i, r), ao(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = gl(),
          i = _l(e),
          a = ro(r, i);
        ((a.tag = 1),
          (a.payload = t),
          n != null && (a.callback = n),
          (t = io(e, a, i)),
          t !== null && (vl(t, e, i, r), ao(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = gl(),
          r = _l(e),
          i = ro(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = io(e, i, r)),
          t !== null && (vl(t, e, r, n), ao(t, e, r)));
      },
    };
    function Ss(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Mr(n, r) || !Mr(i, a)
            : !0
      );
    }
    function Cs(e, t, n) {
      var r = !1,
        i = Ki,
        a = t.contextType;
      return (
        typeof a == `object` && a
          ? (a = Ya(a))
          : ((i = Zi(t) ? Yi : qi.current),
            (r = t.contextTypes),
            (a = (r = r != null) ? Xi(e, i) : Ki)),
        (t = new t(n, a)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = xs),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function ws(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && xs.enqueueReplaceState(t, t.state, null));
    }
    function Ts(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), to(e));
      var a = t.contextType;
      (typeof a == `object` && a
        ? (i.context = Ya(a))
        : ((a = Zi(t) ? Yi : qi.current), (i.context = Xi(e, a))),
        (i.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == `function` && (bs(e, t, a, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == `function` ||
          typeof i.getSnapshotBeforeUpdate == `function` ||
          (typeof i.UNSAFE_componentWillMount != `function` &&
            typeof i.componentWillMount != `function`) ||
          ((t = i.state),
          typeof i.componentWillMount == `function` && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == `function` && i.UNSAFE_componentWillMount(),
          t !== i.state && xs.enqueueReplaceState(i, i.state, null),
          so(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == `function` && (e.flags |= 4194308));
    }
    function Es(e, t) {
      try {
        var n = ``,
          r = t;
        do ((n += ce(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (e) {
        i =
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack;
      }
      return { value: e, source: t, stack: i, digest: null };
    }
    function Ds(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Os(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var ks = typeof WeakMap == `function` ? WeakMap : Map;
    function As(e, t, n) {
      ((n = ro(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (ol || ((ol = !0), (sl = r)), Os(e, t));
        }),
        n
      );
    }
    function js(e, t, n) {
      ((n = ro(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == `function`) {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            Os(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == `function` &&
          (n.callback = function () {
            (Os(e, t),
              typeof r != `function` && (cl === null ? (cl = new Set([this])) : cl.add(this)));
            var n = t.stack;
            this.componentDidCatch(t.value, { componentStack: n === null ? `` : n });
          }),
        n
      );
    }
    function Ms(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new ks();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Hl.bind(null, e, t, n)), t.then(e, e));
    }
    function Ns(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t === null ? !0 : t.dehydrated !== null)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Ps(e, t, n, r, i) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null ? (n.tag = 17) : ((t = ro(-1, 1)), (t.tag = 2), io(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var Fs = C.ReactCurrentOwner,
      Is = !1;
    function Ls(e, t, n, r) {
      t.child = e === null ? Ba(t, null, n, r) : za(t, e.child, n, r);
    }
    function Rs(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      return (
        Ja(t, i),
        (r = No(e, t, n, r, a, i)),
        (n = Po()),
        e !== null && !Is
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ic(e, t, i))
          : (G && n && ba(t), (t.flags |= 1), Ls(e, t, r, i), t.child)
      );
    }
    function zs(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Xl(a) &&
          a.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Bs(e, t, a, r, i))
          : ((e = $l(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & i) === 0)) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Mr : n), n(o, r) && e.ref === t.ref))
          return ic(e, t, i);
      }
      return ((t.flags |= 1), (e = Ql(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function Bs(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Mr(a, r) && e.ref === t.ref)
          if (((Is = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
            e.flags & 131072 && (Is = !0);
          else return ((t.lanes = e.lanes), ic(e, t, i));
      }
      return Us(e, t, n, r, i);
    }
    function Vs(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`)
        if (!(t.mode & 1))
          ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            W(Yc, Jc),
            (Jc |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = a === null ? n : a.baseLanes | n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
              (t.updateQueue = null),
              W(Yc, Jc),
              (Jc |= e),
              null
            );
          ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = a === null ? n : a.baseLanes),
            W(Yc, Jc),
            (Jc |= r));
        }
      else
        (a === null ? (r = n) : ((r = a.baseLanes | n), (t.memoizedState = null)),
          W(Yc, Jc),
          (Jc |= r));
      return (Ls(e, t, i, n), t.child);
    }
    function Hs(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Us(e, t, n, r, i) {
      var a = Zi(n) ? Yi : qi.current;
      return (
        (a = Xi(t, a)),
        Ja(t, i),
        (n = No(e, t, n, r, a, i)),
        (r = Po()),
        e !== null && !Is
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ic(e, t, i))
          : (G && r && ba(t), (t.flags |= 1), Ls(e, t, n, i), t.child)
      );
    }
    function Ws(e, t, n, r, i) {
      if (Zi(n)) {
        var a = !0;
        ta(t);
      } else a = !1;
      if ((Ja(t, i), t.stateNode === null)) (rc(e, t), Cs(t, n, r), Ts(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          s = t.memoizedProps;
        o.props = s;
        var c = o.context,
          l = n.contextType;
        typeof l == `object` && l ? (l = Ya(l)) : ((l = Zi(n) ? Yi : qi.current), (l = Xi(t, l)));
        var u = n.getDerivedStateFromProps,
          d = typeof u == `function` || typeof o.getSnapshotBeforeUpdate == `function`;
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== r || c !== l) && ws(t, o, r, l)),
          (eo = !1));
        var f = t.memoizedState;
        ((o.state = f),
          so(t, r, o, i),
          (c = t.memoizedState),
          s !== r || f !== c || Ji.current || eo
            ? (typeof u == `function` && (bs(t, n, u, r), (c = t.memoizedState)),
              (s = eo || Ss(t, n, s, r, f, c, l))
                ? (d ||
                    (typeof o.UNSAFE_componentWillMount != `function` &&
                      typeof o.componentWillMount != `function`) ||
                    (typeof o.componentWillMount == `function` && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == `function` &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = c)),
              (o.props = r),
              (o.state = c),
              (o.context = l),
              (r = s))
            : (typeof o.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((o = t.stateNode),
          no(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : ys(t.type, s)),
          (o.props = l),
          (d = t.pendingProps),
          (f = o.context),
          (c = n.contextType),
          typeof c == `object` && c
            ? (c = Ya(c))
            : ((c = Zi(n) ? Yi : qi.current), (c = Xi(t, c))));
        var p = n.getDerivedStateFromProps;
        ((u = typeof p == `function` || typeof o.getSnapshotBeforeUpdate == `function`) ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== d || f !== c) && ws(t, o, r, c)),
          (eo = !1),
          (f = t.memoizedState),
          (o.state = f),
          so(t, r, o, i));
        var m = t.memoizedState;
        s !== d || f !== m || Ji.current || eo
          ? (typeof p == `function` && (bs(t, n, p, r), (m = t.memoizedState)),
            (l = eo || Ss(t, n, l, r, f, m, c) || !1)
              ? (u ||
                  (typeof o.UNSAFE_componentWillUpdate != `function` &&
                    typeof o.componentWillUpdate != `function`) ||
                  (typeof o.componentWillUpdate == `function` && o.componentWillUpdate(r, m, c),
                  typeof o.UNSAFE_componentWillUpdate == `function` &&
                    o.UNSAFE_componentWillUpdate(r, m, c)),
                typeof o.componentDidUpdate == `function` && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof o.componentDidUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = c),
            (r = l))
          : (typeof o.componentDidUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Gs(e, t, n, r, a, i);
    }
    function Gs(e, t, n, r, i, a) {
      Hs(e, t);
      var o = (t.flags & 128) != 0;
      if (!r && !o) return (i && na(t, n, !1), ic(e, t, a));
      ((r = t.stateNode), (Fs.current = t));
      var s = o && typeof n.getDerivedStateFromError != `function` ? null : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = za(t, e.child, null, a)), (t.child = za(t, null, s, a)))
          : Ls(e, t, s, a),
        (t.memoizedState = r.state),
        i && na(t, n, !0),
        t.child
      );
    }
    function Ks(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? $i(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && $i(e, t.context, !1),
        ho(e, t.containerInfo));
    }
    function qs(e, t, n, r, i) {
      return (Ma(), Na(i), (t.flags |= 256), Ls(e, t, n, r), t.child);
    }
    var Js = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Ys(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Xs(e, t, n) {
      var r = t.pendingProps,
        i = K.current,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0),
        s ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
        W(K, i & 1),
        e === null)
      )
        return (
          Oa(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                ? e.data === `$!`
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((o = r.children),
              (e = r.fallback),
              a
                ? ((r = t.mode),
                  (a = t.child),
                  (o = { mode: `hidden`, children: o }),
                  !(r & 1) && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = o))
                    : (a = tu(o, r, 0, null)),
                  (e = eu(e, r, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = Ys(n)),
                  (t.memoizedState = Js),
                  e)
                : Zs(t, o))
        );
      if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
        return $s(e, t, o, r, s, i, n);
      if (a) {
        ((a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling));
        var c = { mode: `hidden`, children: r.children };
        return (
          !(o & 1) && t.child !== i
            ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = c), (t.deletions = null))
            : ((r = Ql(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          s === null ? ((a = eu(a, o, n, null)), (a.flags |= 2)) : (a = Ql(s, a)),
          (a.return = t),
          (r.return = t),
          (r.sibling = a),
          (t.child = r),
          (r = a),
          (a = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? Ys(n)
              : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
          (a.memoizedState = o),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = Js),
          r
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (r = Ql(a, { mode: `visible`, children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function Zs(e, t) {
      return (
        (t = tu({ mode: `visible`, children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Qs(e, t, n, r) {
      return (
        r !== null && Na(r),
        za(t, e.child, null, n),
        (e = Zs(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function $s(e, t, n, i, a, o, s) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (i = Ds(Error(r(422)))), Qs(e, t, s, i))
          : t.memoizedState === null
            ? ((o = i.fallback),
              (a = t.mode),
              (i = tu({ mode: `visible`, children: i.children }, a, 0, null)),
              (o = eu(o, a, s, null)),
              (o.flags |= 2),
              (i.return = t),
              (o.return = t),
              (i.sibling = o),
              (t.child = i),
              t.mode & 1 && za(t, e.child, null, s),
              (t.child.memoizedState = Ys(s)),
              (t.memoizedState = Js),
              o)
            : ((t.child = e.child), (t.flags |= 128), null);
      if (!(t.mode & 1)) return Qs(e, t, s, null);
      if (a.data === `$!`) {
        if (((i = a.nextSibling && a.nextSibling.dataset), i)) var c = i.dgst;
        return ((i = c), (o = Error(r(419))), (i = Ds(o, i, void 0)), Qs(e, t, s, i));
      }
      if (((c = (s & e.childLanes) !== 0), Is || c)) {
        if (((i = Gc), i !== null)) {
          switch (s & -s) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          ((a = (a & (i.suspendedLanes | s)) === 0 ? a : 0),
            a !== 0 && a !== o.retryLane && ((o.retryLane = a), $a(e, a), vl(i, e, a, -1)));
        }
        return (Ml(), (i = Ds(Error(r(421)))), Qs(e, t, s, i));
      }
      return a.data === `$?`
        ? ((t.flags |= 128), (t.child = e.child), (t = Wl.bind(null, e)), (a._reactRetry = t), null)
        : ((e = o.treeContext),
          (Ca = Ai(a.nextSibling)),
          (Sa = t),
          (G = !0),
          (wa = null),
          e !== null &&
            ((pa[ma++] = ga),
            (pa[ma++] = _a),
            (pa[ma++] = ha),
            (ga = e.id),
            (_a = e.overflow),
            (ha = t)),
          (t = Zs(t, i.children)),
          (t.flags |= 4096),
          t);
    }
    function ec(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), qa(e.return, t, n));
    }
    function tc(e, t, n, r, i) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
    }
    function nc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((Ls(e, t, r.children, n), (r = K.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && ec(e, n, t);
            else if (e.tag === 19) ec(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((W(K, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (i) {
          case `forwards`:
            for (n = t.child, i = null; n !== null; )
              ((e = n.alternate), e !== null && yo(e) === null && (i = n), (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              tc(t, !1, i, n, a));
            break;
          case `backwards`:
            for (n = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && yo(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            tc(t, !0, n, null, a);
            break;
          case `together`:
            tc(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function rc(e, t) {
      !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function ic(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Qc |= t.lanes), (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(r(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Ql(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling), (n = n.sibling = Ql(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function ac(e, t, n) {
      switch (t.tag) {
        case 3:
          (Ks(t), Ma());
          break;
        case 5:
          _o(t);
          break;
        case 1:
          Zi(t.type) && ta(t);
          break;
        case 4:
          ho(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (W(Va, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (W(K, K.current & 1), (e = ic(e, t, n)), e === null ? null : e.sibling)
                : Xs(e, t, n)
              : (W(K, K.current & 1), (t.flags |= 128), null);
          W(K, K.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return nc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            W(K, K.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Vs(e, t, n));
      }
      return ic(e, t, n);
    }
    var oc = function (e, t) {
        for (var n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      },
      sc = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), mo(uo.current));
          var o = null;
          switch (n) {
            case `input`:
              ((i = _e(e, i)), (r = _e(e, r)), (o = []));
              break;
            case `select`:
              ((i = F({}, i, { value: void 0 })), (r = F({}, r, { value: void 0 })), (o = []));
              break;
            case `textarea`:
              ((i = we(e, i)), (r = we(e, r)), (o = []));
              break;
            default:
              typeof i.onClick != `function` && typeof r.onClick == `function` && (e.onclick = bi);
          }
          Le(n, r);
          var s;
          for (u in ((n = null), i))
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
              if (u === `style`) {
                var c = i[u];
                for (s in c) c.hasOwnProperty(s) && ((n ||= {}), (n[s] = ``));
              } else
                u !== `dangerouslySetInnerHTML` &&
                  u !== `children` &&
                  u !== `suppressContentEditableWarning` &&
                  u !== `suppressHydrationWarning` &&
                  u !== `autoFocus` &&
                  (a.hasOwnProperty(u) ? (o ||= []) : (o ||= []).push(u, null));
          for (u in r) {
            var l = r[u];
            if (((c = i?.[u]), r.hasOwnProperty(u) && l !== c && (l != null || c != null)))
              if (u === `style`)
                if (c) {
                  for (s in c)
                    !c.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || ((n ||= {}), (n[s] = ``));
                  for (s in l) l.hasOwnProperty(s) && c[s] !== l[s] && ((n ||= {}), (n[s] = l[s]));
                } else (n || ((o ||= []), o.push(u, n)), (n = l));
              else
                u === `dangerouslySetInnerHTML`
                  ? ((l = l ? l.__html : void 0),
                    (c = c ? c.__html : void 0),
                    l != null && c !== l && (o ||= []).push(u, l))
                  : u === `children`
                    ? (typeof l != `string` && typeof l != `number`) || (o ||= []).push(u, `` + l)
                    : u !== `suppressContentEditableWarning` &&
                      u !== `suppressHydrationWarning` &&
                      (a.hasOwnProperty(u)
                        ? (l != null && u === `onScroll` && H(`scroll`, e),
                          o || c === l || (o = []))
                        : (o ||= []).push(u, l));
          }
          n && (o ||= []).push(`style`, n);
          var u = o;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      },
      cc = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
    function lc(e, t) {
      if (!G)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function uc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 14680064),
            (r |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function dc(e, t, n) {
      var i = t.pendingProps;
      switch ((xa(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (uc(t), null);
        case 1:
          return (Zi(t.type) && Qi(), uc(t), null);
        case 3:
          return (
            (i = t.stateNode),
            go(),
            U(Ji),
            U(qi),
            xo(),
            i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
            (e === null || e.child === null) &&
              (Aa(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), wa !== null && (Sl(wa), (wa = null)))),
            uc(t),
            null
          );
        case 5:
          vo(t);
          var o = mo(po.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (sc(e, t, n, i, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!i) {
              if (t.stateNode === null) throw Error(r(166));
              return (uc(t), null);
            }
            if (((e = mo(uo.current)), Aa(t))) {
              ((i = t.stateNode), (n = t.type));
              var s = t.memoizedProps;
              switch (((i[Ni] = t), (i[Pi] = s), (e = (t.mode & 1) != 0), n)) {
                case `dialog`:
                  (H(`cancel`, i), H(`close`, i));
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  H(`load`, i);
                  break;
                case `video`:
                case `audio`:
                  for (o = 0; o < ri.length; o++) H(ri[o], i);
                  break;
                case `source`:
                  H(`error`, i);
                  break;
                case `img`:
                case `image`:
                case `link`:
                  (H(`error`, i), H(`load`, i));
                  break;
                case `details`:
                  H(`toggle`, i);
                  break;
                case `input`:
                  (ve(i, s), H(`invalid`, i));
                  break;
                case `select`:
                  ((i._wrapperState = { wasMultiple: !!s.multiple }), H(`invalid`, i));
                  break;
                case `textarea`:
                  (Te(i, s), H(`invalid`, i));
              }
              for (var c in (Le(n, s), (o = null), s))
                if (s.hasOwnProperty(c)) {
                  var l = s[c];
                  c === `children`
                    ? typeof l == `string`
                      ? i.textContent !== l &&
                        (!0 !== s.suppressHydrationWarning && yi(i.textContent, l, e),
                        (o = [`children`, l]))
                      : typeof l == `number` &&
                        i.textContent !== `` + l &&
                        (!0 !== s.suppressHydrationWarning && yi(i.textContent, l, e),
                        (o = [`children`, `` + l]))
                    : a.hasOwnProperty(c) && l != null && c === `onScroll` && H(`scroll`, i);
                }
              switch (n) {
                case `input`:
                  (me(i), I(i, s, !0));
                  break;
                case `textarea`:
                  (me(i), De(i));
                  break;
                case `select`:
                case `option`:
                  break;
                default:
                  typeof s.onClick == `function` && (i.onclick = bi);
              }
              ((i = o), (t.updateQueue = i), i !== null && (t.flags |= 4));
            } else {
              ((c = o.nodeType === 9 ? o : o.ownerDocument),
                e === `http://www.w3.org/1999/xhtml` && (e = Oe(n)),
                e === `http://www.w3.org/1999/xhtml`
                  ? n === `script`
                    ? ((e = c.createElement(`div`)),
                      (e.innerHTML = `<script><\/script>`),
                      (e = e.removeChild(e.firstChild)))
                    : typeof i.is == `string`
                      ? (e = c.createElement(n, { is: i.is }))
                      : ((e = c.createElement(n)),
                        n === `select` &&
                          ((c = e), i.multiple ? (c.multiple = !0) : i.size && (c.size = i.size)))
                  : (e = c.createElementNS(e, n)),
                (e[Ni] = t),
                (e[Pi] = i),
                oc(e, t, !1, !1),
                (t.stateNode = e));
              a: {
                switch (((c = Re(n, i)), n)) {
                  case `dialog`:
                    (H(`cancel`, e), H(`close`, e), (o = i));
                    break;
                  case `iframe`:
                  case `object`:
                  case `embed`:
                    (H(`load`, e), (o = i));
                    break;
                  case `video`:
                  case `audio`:
                    for (o = 0; o < ri.length; o++) H(ri[o], e);
                    o = i;
                    break;
                  case `source`:
                    (H(`error`, e), (o = i));
                    break;
                  case `img`:
                  case `image`:
                  case `link`:
                    (H(`error`, e), H(`load`, e), (o = i));
                    break;
                  case `details`:
                    (H(`toggle`, e), (o = i));
                    break;
                  case `input`:
                    (ve(e, i), (o = _e(e, i)), H(`invalid`, e));
                    break;
                  case `option`:
                    o = i;
                    break;
                  case `select`:
                    ((e._wrapperState = { wasMultiple: !!i.multiple }),
                      (o = F({}, i, { value: void 0 })),
                      H(`invalid`, e));
                    break;
                  case `textarea`:
                    (Te(e, i), (o = we(e, i)), H(`invalid`, e));
                    break;
                  default:
                    o = i;
                }
                for (s in (Le(n, o), (l = o), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    s === `style`
                      ? Fe(e, u)
                      : s === `dangerouslySetInnerHTML`
                        ? ((u = u ? u.__html : void 0), u != null && je(e, u))
                        : s === `children`
                          ? typeof u == `string`
                            ? (n !== `textarea` || u !== ``) && Me(e, u)
                            : typeof u == `number` && Me(e, `` + u)
                          : s !== `suppressContentEditableWarning` &&
                            s !== `suppressHydrationWarning` &&
                            s !== `autoFocus` &&
                            (a.hasOwnProperty(s)
                              ? u != null && s === `onScroll` && H(`scroll`, e)
                              : u != null && S(e, s, u, c));
                  }
                switch (n) {
                  case `input`:
                    (me(e), I(e, i, !1));
                    break;
                  case `textarea`:
                    (me(e), De(e));
                    break;
                  case `option`:
                    i.value != null && e.setAttribute(`value`, `` + de(i.value));
                    break;
                  case `select`:
                    ((e.multiple = !!i.multiple),
                      (s = i.value),
                      s == null
                        ? i.defaultValue != null && Ce(e, !!i.multiple, i.defaultValue, !0)
                        : Ce(e, !!i.multiple, s, !1));
                    break;
                  default:
                    typeof o.onClick == `function` && (e.onclick = bi);
                }
                switch (n) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    i = !!i.autoFocus;
                    break a;
                  case `img`:
                    i = !0;
                    break a;
                  default:
                    i = !1;
                }
              }
              i && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (uc(t), null);
        case 6:
          if (e && t.stateNode != null) cc(e, t, e.memoizedProps, i);
          else {
            if (typeof i != `string` && t.stateNode === null) throw Error(r(166));
            if (((n = mo(po.current)), mo(uo.current), Aa(t))) {
              if (
                ((i = t.stateNode),
                (n = t.memoizedProps),
                (i[Ni] = t),
                (s = i.nodeValue !== n) && ((e = Sa), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    yi(i.nodeValue, n, (e.mode & 1) != 0);
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      yi(i.nodeValue, n, (e.mode & 1) != 0);
                }
              s && (t.flags |= 4);
            } else
              ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                (i[Ni] = t),
                (t.stateNode = i));
          }
          return (uc(t), null);
        case 13:
          if (
            (U(K),
            (i = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (G && Ca !== null && t.mode & 1 && !(t.flags & 128))
              (ja(), Ma(), (t.flags |= 98560), (s = !1));
            else if (((s = Aa(t)), i !== null && i.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(r(318));
                if (((s = t.memoizedState), (s = s === null ? null : s.dehydrated), !s))
                  throw Error(r(317));
                s[Ni] = t;
              } else (Ma(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (uc(t), (s = !1));
            } else (wa !== null && (Sl(wa), (wa = null)), (s = !0));
            if (!s) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((i = i !== null),
              i !== (e !== null && e.memoizedState !== null) &&
                i &&
                ((t.child.flags |= 8192),
                t.mode & 1 && (e === null || K.current & 1 ? Xc === 0 && (Xc = 3) : Ml())),
              t.updateQueue !== null && (t.flags |= 4),
              uc(t),
              null);
        case 4:
          return (go(), e === null && li(t.stateNode.containerInfo), uc(t), null);
        case 10:
          return (Ka(t.type._context), uc(t), null);
        case 17:
          return (Zi(t.type) && Qi(), uc(t), null);
        case 19:
          if ((U(K), (s = t.memoizedState), s === null)) return (uc(t), null);
          if (((i = (t.flags & 128) != 0), (c = s.rendering), c === null))
            if (i) lc(s, !1);
            else {
              if (Xc !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((c = yo(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        lc(s, !1),
                        i = c.updateQueue,
                        i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        i = n,
                        n = t.child;
                      n !== null;
                    )
                      ((s = n),
                        (e = i),
                        (s.flags &= 14680066),
                        (c = s.alternate),
                        c === null
                          ? ((s.childLanes = 0),
                            (s.lanes = e),
                            (s.child = null),
                            (s.subtreeFlags = 0),
                            (s.memoizedProps = null),
                            (s.memoizedState = null),
                            (s.updateQueue = null),
                            (s.dependencies = null),
                            (s.stateNode = null))
                          : ((s.childLanes = c.childLanes),
                            (s.lanes = c.lanes),
                            (s.child = c.child),
                            (s.subtreeFlags = 0),
                            (s.deletions = null),
                            (s.memoizedProps = c.memoizedProps),
                            (s.memoizedState = c.memoizedState),
                            (s.updateQueue = c.updateQueue),
                            (s.type = c.type),
                            (e = c.dependencies),
                            (s.dependencies =
                              e === null
                                ? null
                                : { lanes: e.lanes, firstContext: e.firstContext })),
                        (n = n.sibling));
                    return (W(K, (K.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                vt() > il &&
                ((t.flags |= 128), (i = !0), lc(s, !1), (t.lanes = 4194304));
            }
          else {
            if (!i)
              if (((e = yo(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  lc(s, !0),
                  s.tail === null && s.tailMode === `hidden` && !c.alternate && !G)
                )
                  return (uc(t), null);
              } else
                2 * vt() - s.renderingStartTime > il &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (i = !0), lc(s, !1), (t.lanes = 4194304));
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((n = s.last), n === null ? (t.child = c) : (n.sibling = c), (s.last = c));
          }
          return s.tail === null
            ? (uc(t), null)
            : ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = vt()),
              (t.sibling = null),
              (n = K.current),
              W(K, i ? (n & 1) | 2 : n & 1),
              t);
        case 22:
        case 23:
          return (
            Ol(),
            (i = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
            i && t.mode & 1
              ? Jc & 1073741824 && (uc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : uc(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function fc(e, t) {
      switch ((xa(t), t.tag)) {
        case 1:
          return (
            Zi(t.type) && Qi(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            go(),
            U(Ji),
            U(qi),
            xo(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (vo(t), null);
        case 13:
          if ((U(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(r(340));
            Ma();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (U(K), null);
        case 4:
          return (go(), null);
        case 10:
          return (Ka(t.type._context), null);
        case 22:
        case 23:
          return (Ol(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var pc = !1,
      mc = !1,
      hc = typeof WeakSet == `function` ? WeakSet : Set,
      J = null;
    function gc(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            X(e, t, n);
          }
        else n.current = null;
    }
    function _c(e, t, n) {
      try {
        n();
      } catch (n) {
        X(e, t, n);
      }
    }
    var vc = !1;
    function yc(e, t) {
      if (((xi = gn), (e = Fr()), Ir(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
              n = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (Si = { focusedElem: e, selectionRange: n }, gn = !1, J = t; J !== null; )
        if (((t = J), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (J = e));
        else
          for (; J !== null; ) {
            t = J;
            try {
              var h = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (h !== null) {
                      var g = h.memoizedProps,
                        _ = h.memoizedState,
                        v = t.stateNode;
                      v.__reactInternalSnapshotBeforeUpdate = v.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? g : ys(t.type, g),
                        _
                      );
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = ``)
                      : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(r(163));
                }
            } catch (e) {
              X(t, t.return, e);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (J = e));
              break;
            }
            J = t.return;
          }
      return ((h = vc), (vc = !1), h);
    }
    function bc(e, t, n) {
      var r = t.updateQueue;
      if (((r = r === null ? null : r.lastEffect), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy;
            ((i.destroy = void 0), a !== void 0 && _c(t, n, a));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function xc(e, t) {
      if (((t = t.updateQueue), (t = t === null ? null : t.lastEffect), t !== null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Sc(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == `function` ? t(e) : (t.current = e);
      }
    }
    function Cc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Cc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null && (delete t[Ni], delete t[Pi], delete t[Ii], delete t[Li], delete t[Ri])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function wc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Tc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || wc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ec(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = bi)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Ec(e, t, n), e = e.sibling; e !== null; ) (Ec(e, t, n), (e = e.sibling));
    }
    function Dc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Dc(e, t, n), e = e.sibling; e !== null; ) (Dc(e, t, n), (e = e.sibling));
    }
    var Oc = null,
      kc = !1;
    function Ac(e, t, n) {
      for (n = n.child; n !== null; ) (jc(e, t, n), (n = n.sibling));
    }
    function jc(e, t, n) {
      if (Et && typeof Et.onCommitFiberUnmount == `function`)
        try {
          Et.onCommitFiberUnmount(Tt, n);
        } catch {}
      switch (n.tag) {
        case 5:
          mc || gc(n, t);
        case 6:
          var r = Oc,
            i = kc;
          ((Oc = null),
            Ac(e, t, n),
            (Oc = r),
            (kc = i),
            Oc !== null &&
              (kc
                ? ((e = Oc),
                  (n = n.stateNode),
                  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                : Oc.removeChild(n.stateNode)));
          break;
        case 18:
          Oc !== null &&
            (kc
              ? ((e = Oc),
                (n = n.stateNode),
                e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n),
                mn(e))
              : ki(Oc, n.stateNode));
          break;
        case 4:
          ((r = Oc),
            (i = kc),
            (Oc = n.stateNode.containerInfo),
            (kc = !0),
            Ac(e, t, n),
            (Oc = r),
            (kc = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!mc && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
            i = r = r.next;
            do {
              var a = i,
                o = a.destroy;
              ((a = a.tag), o !== void 0 && (a & 2 || a & 4) && _c(n, t, o), (i = i.next));
            } while (i !== r);
          }
          Ac(e, t, n);
          break;
        case 1:
          if (!mc && (gc(n, t), (r = n.stateNode), typeof r.componentWillUnmount == `function`))
            try {
              ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
            } catch (e) {
              X(n, t, e);
            }
          Ac(e, t, n);
          break;
        case 21:
          Ac(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((mc = (r = mc) || n.memoizedState !== null), Ac(e, t, n), (mc = r))
            : Ac(e, t, n);
          break;
        default:
          Ac(e, t, n);
      }
    }
    function Mc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new hc()),
          t.forEach(function (t) {
            var r = Gl.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          }));
      }
    }
    function Nc(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          try {
            var o = e,
              s = t,
              c = s;
            a: for (; c !== null; ) {
              switch (c.tag) {
                case 5:
                  ((Oc = c.stateNode), (kc = !1));
                  break a;
                case 3:
                  ((Oc = c.stateNode.containerInfo), (kc = !0));
                  break a;
                case 4:
                  ((Oc = c.stateNode.containerInfo), (kc = !0));
                  break a;
              }
              c = c.return;
            }
            if (Oc === null) throw Error(r(160));
            (jc(o, s, a), (Oc = null), (kc = !1));
            var l = a.alternate;
            (l !== null && (l.return = null), (a.return = null));
          } catch (e) {
            X(a, t, e);
          }
        }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Pc(t, e), (t = t.sibling));
    }
    function Pc(e, t) {
      var n = e.alternate,
        i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Nc(t, e), Fc(e), i & 4)) {
            try {
              (bc(3, e, e.return), xc(3, e));
            } catch (t) {
              X(e, e.return, t);
            }
            try {
              bc(5, e, e.return);
            } catch (t) {
              X(e, e.return, t);
            }
          }
          break;
        case 1:
          (Nc(t, e), Fc(e), i & 512 && n !== null && gc(n, n.return));
          break;
        case 5:
          if ((Nc(t, e), Fc(e), i & 512 && n !== null && gc(n, n.return), e.flags & 32)) {
            var a = e.stateNode;
            try {
              Me(a, ``);
            } catch (t) {
              X(e, e.return, t);
            }
          }
          if (i & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              s = n === null ? o : n.memoizedProps,
              c = e.type,
              l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
              try {
                (c === `input` && o.type === `radio` && o.name != null && ye(a, o), Re(c, s));
                var u = Re(c, o);
                for (s = 0; s < l.length; s += 2) {
                  var d = l[s],
                    f = l[s + 1];
                  d === `style`
                    ? Fe(a, f)
                    : d === `dangerouslySetInnerHTML`
                      ? je(a, f)
                      : d === `children`
                        ? Me(a, f)
                        : S(a, d, f, u);
                }
                switch (c) {
                  case `input`:
                    be(a, o);
                    break;
                  case `textarea`:
                    Ee(a, o);
                    break;
                  case `select`:
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var m = o.value;
                    m == null
                      ? p !== !!o.multiple &&
                        (o.defaultValue == null
                          ? Ce(a, !!o.multiple, o.multiple ? [] : ``, !1)
                          : Ce(a, !!o.multiple, o.defaultValue, !0))
                      : Ce(a, !!o.multiple, m, !1);
                }
                a[Pi] = o;
              } catch (t) {
                X(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Nc(t, e), Fc(e), i & 4)) {
            if (e.stateNode === null) throw Error(r(162));
            ((a = e.stateNode), (o = e.memoizedProps));
            try {
              a.nodeValue = o;
            } catch (t) {
              X(e, e.return, t);
            }
          }
          break;
        case 3:
          if ((Nc(t, e), Fc(e), i & 4 && n !== null && n.memoizedState.isDehydrated))
            try {
              mn(t.containerInfo);
            } catch (t) {
              X(e, e.return, t);
            }
          break;
        case 4:
          (Nc(t, e), Fc(e));
          break;
        case 13:
          (Nc(t, e),
            Fc(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o || (a.alternate !== null && a.alternate.memoizedState !== null) || (rl = vt())),
            i & 4 && Mc(e));
          break;
        case 22:
          if (
            ((d = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((mc = (u = mc) || d), Nc(t, e), (mc = u)) : Nc(t, e),
            Fc(e),
            i & 8192)
          ) {
            if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
              for (J = e, d = e.child; d !== null; ) {
                for (f = J = d; J !== null; ) {
                  switch (((p = J), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      bc(4, p, p.return);
                      break;
                    case 1:
                      gc(p, p.return);
                      var h = p.stateNode;
                      if (typeof h.componentWillUnmount == `function`) {
                        ((i = p), (n = p.return));
                        try {
                          ((t = i),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount());
                        } catch (e) {
                          X(i, n, e);
                        }
                      }
                      break;
                    case 5:
                      gc(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        zc(f);
                        continue;
                      }
                  }
                  m === null ? zc(f) : ((m.return = p), (J = m));
                }
                d = d.sibling;
              }
            a: for (d = null, f = e; ; ) {
              if (f.tag === 5) {
                if (d === null) {
                  d = f;
                  try {
                    ((a = f.stateNode),
                      u
                        ? ((o = a.style),
                          typeof o.setProperty == `function`
                            ? o.setProperty(`display`, `none`, `important`)
                            : (o.display = `none`))
                        : ((c = f.stateNode),
                          (l = f.memoizedProps.style),
                          (s = l != null && l.hasOwnProperty(`display`) ? l.display : null),
                          (c.style.display = Pe(`display`, s))));
                  } catch (t) {
                    X(e, e.return, t);
                  }
                }
              } else if (f.tag === 6) {
                if (d === null)
                  try {
                    f.stateNode.nodeValue = u ? `` : f.memoizedProps;
                  } catch (t) {
                    X(e, e.return, t);
                  }
              } else if (
                ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                f.child !== null
              ) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break a;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break a;
                (d === f && (d = null), (f = f.return));
              }
              (d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling));
            }
          }
          break;
        case 19:
          (Nc(t, e), Fc(e), i & 4 && Mc(e));
          break;
        case 21:
          break;
        default:
          (Nc(t, e), Fc(e));
      }
    }
    function Fc(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          a: {
            for (var n = e.return; n !== null; ) {
              if (wc(n)) {
                var i = n;
                break a;
              }
              n = n.return;
            }
            throw Error(r(160));
          }
          switch (i.tag) {
            case 5:
              var a = i.stateNode;
              (i.flags & 32 && (Me(a, ``), (i.flags &= -33)), Dc(e, Tc(e), a));
              break;
            case 3:
            case 4:
              var o = i.stateNode.containerInfo;
              Ec(e, Tc(e), o);
              break;
            default:
              throw Error(r(161));
          }
        } catch (t) {
          X(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Ic(e, t, n) {
      ((J = e), Lc(e, t, n));
    }
    function Lc(e, t, n) {
      for (var r = (e.mode & 1) != 0; J !== null; ) {
        var i = J,
          a = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || pc;
          if (!o) {
            var s = i.alternate,
              c = (s !== null && s.memoizedState !== null) || mc;
            s = pc;
            var l = mc;
            if (((pc = o), (mc = c) && !l))
              for (J = i; J !== null; )
                ((o = J),
                  (c = o.child),
                  (o.tag === 22 && o.memoizedState !== null) || c === null
                    ? Bc(i)
                    : ((c.return = o), (J = c)));
            for (; a !== null; ) ((J = a), Lc(a, t, n), (a = a.sibling));
            ((J = i), (pc = s), (mc = l));
          }
          Rc(e, t, n);
        } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (J = a)) : Rc(e, t, n);
      }
    }
    function Rc(e) {
      for (; J !== null; ) {
        var t = J;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  mc || xc(5, t);
                  break;
                case 1:
                  var i = t.stateNode;
                  if (t.flags & 4 && !mc)
                    if (n === null) i.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type ? n.memoizedProps : ys(t.type, n.memoizedProps);
                      i.componentDidUpdate(
                        a,
                        n.memoizedState,
                        i.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && co(t, o, i);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    co(t, s, n);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = c;
                    var l = t.memoizedProps;
                    switch (t.type) {
                      case `button`:
                      case `input`:
                      case `select`:
                      case `textarea`:
                        l.autoFocus && n.focus();
                        break;
                      case `img`:
                        l.src && (n.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var d = u.memoizedState;
                      if (d !== null) {
                        var f = d.dehydrated;
                        f !== null && mn(f);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(r(163));
              }
            mc || (t.flags & 512 && Sc(t));
          } catch (e) {
            X(t, t.return, e);
          }
        }
        if (t === e) {
          J = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (J = n));
          break;
        }
        J = t.return;
      }
    }
    function zc(e) {
      for (; J !== null; ) {
        var t = J;
        if (t === e) {
          J = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (J = n));
          break;
        }
        J = t.return;
      }
    }
    function Bc(e) {
      for (; J !== null; ) {
        var t = J;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                xc(4, t);
              } catch (e) {
                X(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == `function`) {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  X(t, i, e);
                }
              }
              var a = t.return;
              try {
                Sc(t);
              } catch (e) {
                X(t, a, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                Sc(t);
              } catch (e) {
                X(t, o, e);
              }
          }
        } catch (e) {
          X(t, t.return, e);
        }
        if (t === e) {
          J = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (J = s));
          break;
        }
        J = t.return;
      }
    }
    var Vc = Math.ceil,
      Hc = C.ReactCurrentDispatcher,
      Uc = C.ReactCurrentOwner,
      Wc = C.ReactCurrentBatchConfig,
      Y = 0,
      Gc = null,
      Kc = null,
      qc = 0,
      Jc = 0,
      Yc = Gi(0),
      Xc = 0,
      Zc = null,
      Qc = 0,
      $c = 0,
      el = 0,
      tl = null,
      nl = null,
      rl = 0,
      il = 1 / 0,
      al = null,
      ol = !1,
      sl = null,
      cl = null,
      ll = !1,
      ul = null,
      dl = 0,
      fl = 0,
      pl = null,
      ml = -1,
      hl = 0;
    function gl() {
      return Y & 6 ? vt() : ml === -1 ? (ml = vt()) : ml;
    }
    function _l(e) {
      return e.mode & 1
        ? Y & 2 && qc !== 0
          ? qc & -qc
          : Pa.transition === null
            ? ((e = R), e === 0 ? ((e = window.event), (e = e === void 0 ? 16 : Sn(e.type)), e) : e)
            : (hl === 0 && (hl = zt()), hl)
        : 1;
    }
    function vl(e, t, n, i) {
      if (50 < fl) throw ((fl = 0), (pl = null), Error(r(185)));
      (Vt(e, n, i),
        (!(Y & 2) || e !== Gc) &&
          (e === Gc && (!(Y & 2) && ($c |= n), Xc === 4 && wl(e, qc)),
          yl(e, i),
          n === 1 && Y === 0 && !(t.mode & 1) && ((il = vt() + 500), ia && ca())));
    }
    function yl(e, t) {
      var n = e.callbackNode;
      Lt(e, t);
      var r = Ft(e, e === Gc ? qc : 0);
      if (r === 0) (n !== null && ht(n), (e.callbackNode = null), (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && ht(n), t === 1))
          (e.tag === 0 ? sa(Tl.bind(null, e)) : oa(Tl.bind(null, e)),
            Di(function () {
              !(Y & 6) && ca();
            }),
            (n = null));
        else {
          switch (Wt(r)) {
            case 1:
              n = bt;
              break;
            case 4:
              n = xt;
              break;
            case 16:
              n = St;
              break;
            case 536870912:
              n = wt;
              break;
            default:
              n = St;
          }
          n = ql(n, bl.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function bl(e, t) {
      if (((ml = -1), (hl = 0), Y & 6)) throw Error(r(327));
      var n = e.callbackNode;
      if (Bl() && e.callbackNode !== n) return null;
      var i = Ft(e, e === Gc ? qc : 0);
      if (i === 0) return null;
      if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = Nl(e, i);
      else {
        t = i;
        var a = Y;
        Y |= 2;
        var o = jl();
        (Gc !== e || qc !== t) && ((al = null), (il = vt() + 500), kl(e, t));
        do
          try {
            Fl();
            break;
          } catch (t) {
            Al(e, t);
          }
        while (1);
        (Ga(),
          (Hc.current = o),
          (Y = a),
          Kc === null ? ((Gc = null), (qc = 0), (t = Xc)) : (t = 0));
      }
      if (t !== 0) {
        if ((t === 2 && ((a = Rt(e)), a !== 0 && ((i = a), (t = xl(e, a)))), t === 1))
          throw ((n = Zc), kl(e, 0), wl(e, i), yl(e, vt()), n);
        if (t === 6) wl(e, i);
        else {
          if (
            ((a = e.current.alternate),
            !(i & 30) &&
              !Cl(a) &&
              ((t = Nl(e, i)),
              t === 2 && ((o = Rt(e)), o !== 0 && ((i = o), (t = xl(e, o)))),
              t === 1))
          )
            throw ((n = Zc), kl(e, 0), wl(e, i), yl(e, vt()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 2:
              Rl(e, nl, al);
              break;
            case 3:
              if ((wl(e, i), (i & 130023424) === i && ((t = rl + 500 - vt()), 10 < t))) {
                if (Ft(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & i) !== i)) {
                  (gl(), (e.pingedLanes |= e.suspendedLanes & a));
                  break;
                }
                e.timeoutHandle = wi(Rl.bind(null, e, nl, al), t);
                break;
              }
              Rl(e, nl, al);
              break;
            case 4:
              if ((wl(e, i), (i & 4194240) === i)) break;
              for (t = e.eventTimes, a = -1; 0 < i; ) {
                var s = 31 - Ot(i);
                ((o = 1 << s), (s = t[s]), s > a && (a = s), (i &= ~o));
              }
              if (
                ((i = a),
                (i = vt() - i),
                (i =
                  (120 > i
                    ? 120
                    : 480 > i
                      ? 480
                      : 1080 > i
                        ? 1080
                        : 1920 > i
                          ? 1920
                          : 3e3 > i
                            ? 3e3
                            : 4320 > i
                              ? 4320
                              : 1960 * Vc(i / 1960)) - i),
                10 < i)
              ) {
                e.timeoutHandle = wi(Rl.bind(null, e, nl, al), i);
                break;
              }
              Rl(e, nl, al);
              break;
            case 5:
              Rl(e, nl, al);
              break;
            default:
              throw Error(r(329));
          }
        }
      }
      return (yl(e, vt()), e.callbackNode === n ? bl.bind(null, e) : null);
    }
    function xl(e, t) {
      var n = tl;
      return (
        e.current.memoizedState.isDehydrated && (kl(e, t).flags |= 256),
        (e = Nl(e, t)),
        e !== 2 && ((t = nl), (nl = n), t !== null && Sl(t)),
        e
      );
    }
    function Sl(e) {
      nl === null ? (nl = e) : nl.push.apply(nl, e);
    }
    function Cl(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i.getSnapshot;
              i = i.value;
              try {
                if (!jr(a(), i)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function wl(e, t) {
      for (
        t &= ~el, t &= ~$c, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Ot(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Tl(e) {
      if (Y & 6) throw Error(r(327));
      Bl();
      var t = Ft(e, 0);
      if (!(t & 1)) return (yl(e, vt()), null);
      var n = Nl(e, t);
      if (e.tag !== 0 && n === 2) {
        var i = Rt(e);
        i !== 0 && ((t = i), (n = xl(e, i)));
      }
      if (n === 1) throw ((n = Zc), kl(e, 0), wl(e, t), yl(e, vt()), n);
      if (n === 6) throw Error(r(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Rl(e, nl, al),
        yl(e, vt()),
        null
      );
    }
    function El(e, t) {
      var n = Y;
      Y |= 1;
      try {
        return e(t);
      } finally {
        ((Y = n), Y === 0 && ((il = vt() + 500), ia && ca()));
      }
    }
    function Dl(e) {
      ul !== null && ul.tag === 0 && !(Y & 6) && Bl();
      var t = Y;
      Y |= 1;
      var n = Wc.transition,
        r = R;
      try {
        if (((Wc.transition = null), (R = 1), e)) return e();
      } finally {
        ((R = r), (Wc.transition = n), (Y = t), !(Y & 6) && ca());
      }
    }
    function Ol() {
      ((Jc = Yc.current), U(Yc));
    }
    function kl(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), Ti(n)), Kc !== null))
        for (n = Kc.return; n !== null; ) {
          var r = n;
          switch ((xa(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && Qi());
              break;
            case 3:
              (go(), U(Ji), U(qi), xo());
              break;
            case 5:
              vo(r);
              break;
            case 4:
              go();
              break;
            case 13:
              U(K);
              break;
            case 19:
              U(K);
              break;
            case 10:
              Ka(r.type._context);
              break;
            case 22:
            case 23:
              Ol();
          }
          n = n.return;
        }
      if (
        ((Gc = e),
        (Kc = e = Ql(e.current, null)),
        (qc = Jc = t),
        (Xc = 0),
        (Zc = null),
        (el = $c = Qc = 0),
        (nl = tl = null),
        Xa !== null)
      ) {
        for (t = 0; t < Xa.length; t++)
          if (((n = Xa[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              a = n.pending;
            if (a !== null) {
              var o = a.next;
              ((a.next = i), (r.next = o));
            }
            n.pending = r;
          }
        Xa = null;
      }
      return e;
    }
    function Al(e, t) {
      do {
        var n = Kc;
        try {
          if ((Ga(), (So.current = hs), Do)) {
            for (var i = q.memoizedState; i !== null; ) {
              var a = i.queue;
              (a !== null && (a.pending = null), (i = i.next));
            }
            Do = !1;
          }
          if (
            ((wo = 0),
            (Eo = To = q = null),
            (Oo = !1),
            (ko = 0),
            (Uc.current = null),
            n === null || n.return === null)
          ) {
            ((Xc = 1), (Zc = t), (Kc = null));
            break;
          }
          a: {
            var o = e,
              s = n.return,
              c = n,
              l = t;
            if (
              ((t = qc),
              (c.flags |= 32768),
              typeof l == `object` && l && typeof l.then == `function`)
            ) {
              var u = l,
                d = c,
                f = d.tag;
              if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                var p = d.alternate;
                p
                  ? ((d.updateQueue = p.updateQueue),
                    (d.memoizedState = p.memoizedState),
                    (d.lanes = p.lanes))
                  : ((d.updateQueue = null), (d.memoizedState = null));
              }
              var m = Ns(s);
              if (m !== null) {
                ((m.flags &= -257), Ps(m, s, c, o, t), m.mode & 1 && Ms(o, u, t), (t = m), (l = u));
                var h = t.updateQueue;
                if (h === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else h.add(l);
                break a;
              } else {
                if (!(t & 1)) {
                  (Ms(o, u, t), Ml());
                  break a;
                }
                l = Error(r(426));
              }
            } else if (G && c.mode & 1) {
              var _ = Ns(s);
              if (_ !== null) {
                (!(_.flags & 65536) && (_.flags |= 256), Ps(_, s, c, o, t), Na(Es(l, c)));
                break a;
              }
            }
            ((o = l = Es(l, c)),
              Xc !== 4 && (Xc = 2),
              tl === null ? (tl = [o]) : tl.push(o),
              (o = s));
            do {
              switch (o.tag) {
                case 3:
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var v = As(o, l, t);
                  oo(o, v);
                  break a;
                case 1:
                  c = l;
                  var y = o.type,
                    b = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof y.getDerivedStateFromError == `function` ||
                      (b !== null &&
                        typeof b.componentDidCatch == `function` &&
                        (cl === null || !cl.has(b))))
                  ) {
                    ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                    var x = js(o, c, t);
                    oo(o, x);
                    break a;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          Ll(n);
        } catch (e) {
          ((t = e), Kc === n && n !== null && (Kc = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function jl() {
      var e = Hc.current;
      return ((Hc.current = hs), e === null ? hs : e);
    }
    function Ml() {
      ((Xc === 0 || Xc === 3 || Xc === 2) && (Xc = 4),
        Gc === null || (!(Qc & 268435455) && !($c & 268435455)) || wl(Gc, qc));
    }
    function Nl(e, t) {
      var n = Y;
      Y |= 2;
      var i = jl();
      (Gc !== e || qc !== t) && ((al = null), kl(e, t));
      do
        try {
          Pl();
          break;
        } catch (t) {
          Al(e, t);
        }
      while (1);
      if ((Ga(), (Y = n), (Hc.current = i), Kc !== null)) throw Error(r(261));
      return ((Gc = null), (qc = 0), Xc);
    }
    function Pl() {
      for (; Kc !== null; ) Il(Kc);
    }
    function Fl() {
      for (; Kc !== null && !gt(); ) Il(Kc);
    }
    function Il(e) {
      var t = Kl(e.alternate, e, Jc);
      ((e.memoizedProps = e.pendingProps), t === null ? Ll(e) : (Kc = t), (Uc.current = null));
    }
    function Ll(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = fc(n, t)), n !== null)) {
            ((n.flags &= 32767), (Kc = n));
            return;
          }
          if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((Xc = 6), (Kc = null));
            return;
          }
        } else if (((n = dc(n, t, Jc)), n !== null)) {
          Kc = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Kc = t;
          return;
        }
        Kc = t = e;
      } while (t !== null);
      Xc === 0 && (Xc = 5);
    }
    function Rl(e, t, n) {
      var r = R,
        i = Wc.transition;
      try {
        ((Wc.transition = null), (R = 1), zl(e, t, n, r));
      } finally {
        ((Wc.transition = i), (R = r));
      }
      return null;
    }
    function zl(e, t, n, i) {
      do Bl();
      while (ul !== null);
      if (Y & 6) throw Error(r(327));
      n = e.finishedWork;
      var a = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(r(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var o = n.lanes | n.childLanes;
      if (
        (Ht(e, o),
        e === Gc && ((Kc = Gc = null), (qc = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          ll ||
          ((ll = !0),
          ql(St, function () {
            return (Bl(), null);
          })),
        (o = (n.flags & 15990) != 0),
        n.subtreeFlags & 15990 || o)
      ) {
        ((o = Wc.transition), (Wc.transition = null));
        var s = R;
        R = 1;
        var c = Y;
        ((Y |= 4),
          (Uc.current = null),
          yc(e, n),
          Pc(n, e),
          Lr(Si),
          (gn = !!xi),
          (Si = xi = null),
          (e.current = n),
          Ic(n, e, a),
          _t(),
          (Y = c),
          (R = s),
          (Wc.transition = o));
      } else e.current = n;
      if (
        (ll && ((ll = !1), (ul = e), (dl = a)),
        (o = e.pendingLanes),
        o === 0 && (cl = null),
        Dt(n.stateNode, i),
        yl(e, vt()),
        t !== null)
      )
        for (i = e.onRecoverableError, n = 0; n < t.length; n++)
          ((a = t[n]), i(a.value, { componentStack: a.stack, digest: a.digest }));
      if (ol) throw ((ol = !1), (e = sl), (sl = null), e);
      return (
        dl & 1 && e.tag !== 0 && Bl(),
        (o = e.pendingLanes),
        o & 1 ? (e === pl ? fl++ : ((fl = 0), (pl = e))) : (fl = 0),
        ca(),
        null
      );
    }
    function Bl() {
      if (ul !== null) {
        var e = Wt(dl),
          t = Wc.transition,
          n = R;
        try {
          if (((Wc.transition = null), (R = 16 > e ? 16 : e), ul === null)) var i = !1;
          else {
            if (((e = ul), (ul = null), (dl = 0), Y & 6)) throw Error(r(331));
            var a = Y;
            for (Y |= 4, J = e.current; J !== null; ) {
              var o = J,
                s = o.child;
              if (J.flags & 16) {
                var c = o.deletions;
                if (c !== null) {
                  for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    for (J = u; J !== null; ) {
                      var d = J;
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          bc(8, d, o);
                      }
                      var f = d.child;
                      if (f !== null) ((f.return = d), (J = f));
                      else
                        for (; J !== null; ) {
                          d = J;
                          var p = d.sibling,
                            m = d.return;
                          if ((Cc(d), d === u)) {
                            J = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (J = p));
                            break;
                          }
                          J = m;
                        }
                    }
                  }
                  var h = o.alternate;
                  if (h !== null) {
                    var g = h.child;
                    if (g !== null) {
                      h.child = null;
                      do {
                        var _ = g.sibling;
                        ((g.sibling = null), (g = _));
                      } while (g !== null);
                    }
                  }
                  J = o;
                }
              }
              if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (J = s));
              else
                b: for (; J !== null; ) {
                  if (((o = J), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bc(9, o, o.return);
                    }
                  var v = o.sibling;
                  if (v !== null) {
                    ((v.return = o.return), (J = v));
                    break b;
                  }
                  J = o.return;
                }
            }
            var y = e.current;
            for (J = y; J !== null; ) {
              s = J;
              var b = s.child;
              if (s.subtreeFlags & 2064 && b !== null) ((b.return = s), (J = b));
              else
                b: for (s = y; J !== null; ) {
                  if (((c = J), c.flags & 2048))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xc(9, c);
                      }
                    } catch (e) {
                      X(c, c.return, e);
                    }
                  if (c === s) {
                    J = null;
                    break b;
                  }
                  var x = c.sibling;
                  if (x !== null) {
                    ((x.return = c.return), (J = x));
                    break b;
                  }
                  J = c.return;
                }
            }
            if (((Y = a), ca(), Et && typeof Et.onPostCommitFiberRoot == `function`))
              try {
                Et.onPostCommitFiberRoot(Tt, e);
              } catch {}
            i = !0;
          }
          return i;
        } finally {
          ((R = n), (Wc.transition = t));
        }
      }
      return !1;
    }
    function Vl(e, t, n) {
      ((t = Es(n, t)),
        (t = As(e, t, 1)),
        (e = io(e, t, 1)),
        (t = gl()),
        e !== null && (Vt(e, 1, t), yl(e, t)));
    }
    function X(e, t, n) {
      if (e.tag === 3) Vl(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Vl(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (cl === null || !cl.has(r)))
            ) {
              ((e = Es(n, e)),
                (e = js(t, e, 1)),
                (t = io(t, e, 1)),
                (e = gl()),
                t !== null && (Vt(t, 1, e), yl(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Hl(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = gl()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Gc === e &&
          (qc & n) === n &&
          (Xc === 4 || (Xc === 3 && (qc & 130023424) === qc && 500 > vt() - rl)
            ? kl(e, 0)
            : (el |= n)),
        yl(e, t));
    }
    function Ul(e, t) {
      t === 0 &&
        (e.mode & 1 ? ((t = Nt), (Nt <<= 1), !(Nt & 130023424) && (Nt = 4194304)) : (t = 1));
      var n = gl();
      ((e = $a(e, t)), e !== null && (Vt(e, t, n), yl(e, n)));
    }
    function Wl(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Ul(e, n));
    }
    function Gl(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        default:
          throw Error(r(314));
      }
      (i !== null && i.delete(t), Ul(e, n));
    }
    var Kl = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ji.current) Is = !0;
        else {
          if ((e.lanes & n) === 0 && !(t.flags & 128)) return ((Is = !1), ac(e, t, n));
          Is = !!(e.flags & 131072);
        }
      else ((Is = !1), G && t.flags & 1048576 && ya(t, fa, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var i = t.type;
          (rc(e, t), (e = t.pendingProps));
          var a = Xi(t, qi.current);
          (Ja(t, n), (a = No(null, t, i, e, a, n)));
          var o = Po();
          return (
            (t.flags |= 1),
            typeof a == `object` && a && typeof a.render == `function` && a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                Zi(i) ? ((o = !0), ta(t)) : (o = !1),
                (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
                to(t),
                (a.updater = xs),
                (t.stateNode = a),
                (a._reactInternals = t),
                Ts(t, i, e, n),
                (t = Gs(null, t, i, !0, o, n)))
              : ((t.tag = 0), G && o && ba(t), Ls(null, t, a, n), (t = t.child)),
            t
          );
        case 16:
          i = t.elementType;
          a: {
            switch (
              (rc(e, t),
              (e = t.pendingProps),
              (a = i._init),
              (i = a(i._payload)),
              (t.type = i),
              (a = t.tag = Zl(i)),
              (e = ys(i, e)),
              a)
            ) {
              case 0:
                t = Us(null, t, i, e, n);
                break a;
              case 1:
                t = Ws(null, t, i, e, n);
                break a;
              case 11:
                t = Rs(null, t, i, e, n);
                break a;
              case 14:
                t = zs(null, t, i, ys(i.type, e), n);
                break a;
            }
            throw Error(r(306, i, ``));
          }
          return t;
        case 0:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : ys(i, a)),
            Us(e, t, i, a, n)
          );
        case 1:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : ys(i, a)),
            Ws(e, t, i, a, n)
          );
        case 3:
          a: {
            if ((Ks(t), e === null)) throw Error(r(387));
            ((i = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              no(e, t),
              so(t, i, null, n));
            var s = t.memoizedState;
            if (((i = s.element), o.isDehydrated))
              if (
                ((o = {
                  element: i,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                ((a = Es(Error(r(423)), t)), (t = qs(e, t, i, n, a)));
                break a;
              } else if (i !== a) {
                ((a = Es(Error(r(424)), t)), (t = qs(e, t, i, n, a)));
                break a;
              } else
                for (
                  Ca = Ai(t.stateNode.containerInfo.firstChild),
                    Sa = t,
                    G = !0,
                    wa = null,
                    n = Ba(t, null, i, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            else {
              if ((Ma(), i === a)) {
                t = ic(e, t, n);
                break a;
              }
              Ls(e, t, i, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            _o(t),
            e === null && Oa(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (s = a.children),
            Ci(i, a) ? (s = null) : o !== null && Ci(i, o) && (t.flags |= 32),
            Hs(e, t),
            Ls(e, t, s, n),
            t.child
          );
        case 6:
          return (e === null && Oa(t), null);
        case 13:
          return Xs(e, t, n);
        case 4:
          return (
            ho(t, t.stateNode.containerInfo),
            (i = t.pendingProps),
            e === null ? (t.child = za(t, null, i, n)) : Ls(e, t, i, n),
            t.child
          );
        case 11:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : ys(i, a)),
            Rs(e, t, i, a, n)
          );
        case 7:
          return (Ls(e, t, t.pendingProps, n), t.child);
        case 8:
          return (Ls(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Ls(e, t, t.pendingProps.children, n), t.child);
        case 10:
          a: {
            if (
              ((i = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              W(Va, i._currentValue),
              (i._currentValue = s),
              o !== null)
            )
              if (jr(o.value, s)) {
                if (o.children === a.children && !Ji.current) {
                  t = ic(e, t, n);
                  break a;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                  var c = o.dependencies;
                  if (c !== null) {
                    s = o.child;
                    for (var l = c.firstContext; l !== null; ) {
                      if (l.context === i) {
                        if (o.tag === 1) {
                          ((l = ro(-1, n & -n)), (l.tag = 2));
                          var u = o.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var d = u.pending;
                            (d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                              (u.pending = l));
                          }
                        }
                        ((o.lanes |= n),
                          (l = o.alternate),
                          l !== null && (l.lanes |= n),
                          qa(o.return, n, t),
                          (c.lanes |= n));
                        break;
                      }
                      l = l.next;
                    }
                  } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((s = o.return), s === null)) throw Error(r(341));
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      qa(s, n, t),
                      (s = o.sibling));
                  } else s = o.child;
                  if (s !== null) s.return = o;
                  else
                    for (s = o; s !== null; ) {
                      if (s === t) {
                        s = null;
                        break;
                      }
                      if (((o = s.sibling), o !== null)) {
                        ((o.return = s.return), (s = o));
                        break;
                      }
                      s = s.return;
                    }
                  o = s;
                }
            (Ls(e, t, a.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (i = t.pendingProps.children),
            Ja(t, n),
            (a = Ya(a)),
            (i = i(a)),
            (t.flags |= 1),
            Ls(e, t, i, n),
            t.child
          );
        case 14:
          return (
            (i = t.type),
            (a = ys(i, t.pendingProps)),
            (a = ys(i.type, a)),
            zs(e, t, i, a, n)
          );
        case 15:
          return Bs(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : ys(i, a)),
            rc(e, t),
            (t.tag = 1),
            Zi(i) ? ((e = !0), ta(t)) : (e = !1),
            Ja(t, n),
            Cs(t, i, a),
            Ts(t, i, a, n),
            Gs(null, t, i, !0, e, n)
          );
        case 19:
          return nc(e, t, n);
        case 22:
          return Vs(e, t, n);
      }
      throw Error(r(156, t.tag));
    };
    function ql(e, t) {
      return mt(e, t);
    }
    function Jl(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Yl(e, t, n, r) {
      return new Jl(e, t, n, r);
    }
    function Xl(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Zl(e) {
      if (typeof e == `function`) return Xl(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === j)) return 11;
        if (e === N) return 14;
      }
      return 2;
    }
    function Ql(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Yl(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function $l(e, t, n, i, a, o) {
      var s = 2;
      if (((i = e), typeof e == `function`)) Xl(e) && (s = 1);
      else if (typeof e == `string`) s = 5;
      else
        a: switch (e) {
          case E:
            return eu(n.children, a, o, t);
          case D:
            ((s = 8), (a |= 8));
            break;
          case O:
            return ((e = Yl(12, n, t, a | 2)), (e.elementType = O), (e.lanes = o), e);
          case M:
            return ((e = Yl(13, n, t, a)), (e.elementType = M), (e.lanes = o), e);
          case ee:
            return ((e = Yl(19, n, t, a)), (e.elementType = ee), (e.lanes = o), e);
          case te:
            return tu(n, a, o, t);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case k:
                  s = 10;
                  break a;
                case A:
                  s = 9;
                  break a;
                case j:
                  s = 11;
                  break a;
                case N:
                  s = 14;
                  break a;
                case P:
                  ((s = 16), (i = null));
                  break a;
              }
            throw Error(r(130, e == null ? e : typeof e, ``));
        }
      return ((t = Yl(s, n, t, a)), (t.elementType = e), (t.type = i), (t.lanes = o), t);
    }
    function eu(e, t, n, r) {
      return ((e = Yl(7, e, r, t)), (e.lanes = n), e);
    }
    function tu(e, t, n, r) {
      return (
        (e = Yl(22, e, r, t)),
        (e.elementType = te),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function nu(e, t, n) {
      return ((e = Yl(6, e, null, t)), (e.lanes = n), e);
    }
    function ru(e, t, n) {
      return (
        (t = Yl(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function iu(e, t, n, r, i) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Bt(0)),
        (this.expirationTimes = Bt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Bt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
    }
    function au(e, t, n, r, i, a, o, s, c) {
      return (
        (e = new iu(e, t, n, s, c)),
        t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Yl(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        to(a),
        e
      );
    }
    function ou(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: T,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function su(e) {
      if (!e) return Ki;
      e = e._reactInternals;
      a: {
        if (ct(e) !== e || e.tag !== 1) throw Error(r(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break a;
            case 1:
              if (Zi(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(r(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (Zi(n)) return ea(e, n, t);
      }
      return t;
    }
    function cu(e, t, n, r, i, a, o, s, c) {
      return (
        (e = au(n, r, !0, e, i, a, o, s, c)),
        (e.context = su(null)),
        (n = e.current),
        (r = gl()),
        (i = _l(n)),
        (a = ro(r, i)),
        (a.callback = t ?? null),
        io(n, a, i),
        (e.current.lanes = i),
        Vt(e, i, r),
        yl(e, r),
        e
      );
    }
    function lu(e, t, n, r) {
      var i = t.current,
        a = gl(),
        o = _l(i);
      return (
        (n = su(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = ro(a, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = io(i, t, o)),
        e !== null && (vl(e, i, o, a), ao(e, i, o)),
        o
      );
    }
    function uu(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function du(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function fu(e, t) {
      (du(e, t), (e = e.alternate) && du(e, t));
    }
    function pu() {
      return null;
    }
    var mu =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            console.error(e);
          };
    function hu(e) {
      this._internalRoot = e;
    }
    ((gu.prototype.render = hu.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        lu(e, t, null, null);
      }),
      (gu.prototype.unmount = hu.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (Dl(function () {
              lu(null, e, null, null);
            }),
              (t[Fi] = null));
          }
        }));
    function gu(e) {
      this._internalRoot = e;
    }
    gu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Jt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++);
        (rn.splice(n, 0, e), n === 0 && ln(e));
      }
    };
    function _u(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function vu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
      );
    }
    function yu() {}
    function bu(e, t, n, r, i) {
      if (i) {
        if (typeof r == `function`) {
          var a = r;
          r = function () {
            var e = uu(o);
            a.call(e);
          };
        }
        var o = cu(t, r, e, 0, null, !1, !1, ``, yu);
        return (
          (e._reactRootContainer = o),
          (e[Fi] = o.current),
          li(e.nodeType === 8 ? e.parentNode : e),
          Dl(),
          o
        );
      }
      for (; (i = e.lastChild); ) e.removeChild(i);
      if (typeof r == `function`) {
        var s = r;
        r = function () {
          var e = uu(c);
          s.call(e);
        };
      }
      var c = au(e, 0, !1, null, null, !1, !1, ``, yu);
      return (
        (e._reactRootContainer = c),
        (e[Fi] = c.current),
        li(e.nodeType === 8 ? e.parentNode : e),
        Dl(function () {
          lu(t, c, n, r);
        }),
        c
      );
    }
    function xu(e, t, n, r, i) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if (typeof i == `function`) {
          var s = i;
          i = function () {
            var e = uu(o);
            s.call(e);
          };
        }
        lu(t, o, e, i);
      } else o = bu(n, t, e, i, r);
      return uu(o);
    }
    ((Gt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Pt(t.pendingLanes);
            n !== 0 && (Ut(t, n | 1), yl(t, vt()), !(Y & 6) && ((il = vt() + 500), ca()));
          }
          break;
        case 13:
          (Dl(function () {
            var t = $a(e, 1);
            t !== null && vl(t, e, 1, gl());
          }),
            fu(e, 1));
      }
    }),
      (Kt = function (e) {
        if (e.tag === 13) {
          var t = $a(e, 134217728);
          (t !== null && vl(t, e, 134217728, gl()), fu(e, 134217728));
        }
      }),
      (qt = function (e) {
        if (e.tag === 13) {
          var t = _l(e),
            n = $a(e, t);
          (n !== null && vl(n, e, t, gl()), fu(e, t));
        }
      }),
      (Jt = function () {
        return R;
      }),
      (Yt = function (e, t) {
        var n = R;
        try {
          return ((R = e), t());
        } finally {
          R = n;
        }
      }),
      (Ve = function (e, t, n) {
        switch (t) {
          case `input`:
            if ((be(e, n), (t = n.name), n.type === `radio` && t != null)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name=` + JSON.stringify(`` + t) + `][type="radio"]`),
                  t = 0;
                t < n.length;
                t++
              ) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                  var a = Hi(i);
                  if (!a) throw Error(r(90));
                  (he(i), be(i, a));
                }
              }
            }
            break;
          case `textarea`:
            Ee(e, n);
            break;
          case `select`:
            ((t = n.value), t != null && Ce(e, !!n.multiple, t, !1));
        }
      }),
      (qe = El),
      (Je = Dl));
    var Su = { usingClientEntryPoint: !1, Events: [Bi, Vi, Hi, Ge, Ke, El] },
      Z = {
        findFiberByHostInstance: zi,
        bundleType: 0,
        version: `18.3.1`,
        rendererPackageName: `react-dom`,
      },
      Cu = {
        bundleType: Z.bundleType,
        version: Z.version,
        rendererPackageName: Z.rendererPackageName,
        rendererConfig: Z.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: C.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = ft(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: Z.findFiberByHostInstance || pu,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.3.1-next-f1338f8080-20240426`,
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wu.isDisabled && wu.supportsFiber)
        try {
          ((Tt = wu.inject(Cu)), (Et = wu));
        } catch {}
    }
    ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Su),
      (e.createPortal = function (e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!_u(t)) throw Error(r(200));
        return ou(e, t, null, n);
      }),
      (e.createRoot = function (e, t) {
        if (!_u(e)) throw Error(r(299));
        var n = !1,
          i = ``,
          a = mu;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
          (t = au(e, 1, !1, null, null, n, !1, i, a)),
          (e[Fi] = t.current),
          li(e.nodeType === 8 ? e.parentNode : e),
          new hu(t)
        );
      }),
      (e.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(r(188))
            : ((e = Object.keys(e).join(`,`)), Error(r(268, e)));
        return ((e = ft(t)), (e = e === null ? null : e.stateNode), e);
      }),
      (e.flushSync = function (e) {
        return Dl(e);
      }),
      (e.hydrate = function (e, t, n) {
        if (!vu(t)) throw Error(r(200));
        return xu(null, e, t, !0, n);
      }),
      (e.hydrateRoot = function (e, t, n) {
        if (!_u(e)) throw Error(r(405));
        var i = (n != null && n.hydratedSources) || null,
          a = !1,
          o = ``,
          s = mu;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
          (t = cu(t, null, e, 1, n ?? null, a, !1, o, s)),
          (e[Fi] = t.current),
          li(e),
          i)
        )
          for (e = 0; e < i.length; e++)
            ((n = i[e]),
              (a = n._getVersion),
              (a = a(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a));
        return new gu(t);
      }),
      (e.render = function (e, t, n) {
        if (!vu(t)) throw Error(r(200));
        return xu(null, e, t, !1, n);
      }),
      (e.unmountComponentAtNode = function (e) {
        if (!vu(e)) throw Error(r(40));
        return e._reactRootContainer
          ? (Dl(function () {
              xu(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[Fi] = null));
              });
            }),
            !0)
          : !1;
      }),
      (e.unstable_batchedUpdates = El),
      (e.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
        if (!vu(n)) throw Error(r(200));
        if (e == null || e._reactInternals === void 0) throw Error(r(38));
        return xu(e, t, n, !1, i);
      }),
      (e.version = `18.3.1-next-f1338f8080-20240426`));
  }),
  _ = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = g()));
  }),
  v = s((e) => {
    var t = _();
    ((e.createRoot = t.createRoot), (e.hydrateRoot = t.hydrateRoot));
  })(),
  y = u(p(), 1),
  b = [`light`, `dark`],
  x = `(prefers-color-scheme: dark)`,
  S = y.createContext(void 0),
  C = { setTheme: (e) => {}, themes: [] },
  w = () => y.useContext(S) ?? C;
y.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: a,
    value: o,
    attrs: s,
    nonce: c,
  }) => {
    let l = a === `system`,
      u =
        n === `class`
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((e) => `'${e}'`).join(`,`)})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? b.includes(a) && a
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
          : `if(e==='light'||e==='dark')d.style.colorScheme=e`
        : ``,
      f = (e, t = !1, r = !0) => {
        let a = o ? o[e] : e,
          s = t ? e + `|| ''` : `'${a}'`,
          c = ``;
        return (
          i && r && !t && b.includes(e) && (c += `d.style.colorScheme = '${e}';`),
          n === `class`
            ? t || a
              ? (c += `c.add(${s})`)
              : (c += `null`)
            : a && (c += `d[s](n,${s})`),
          c
        );
      },
      p = e
        ? `!function(){${u}${f(e)}}()`
        : r
          ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${x}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(`dark`)}}else{${f(`light`)}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ``}${f(o ? `x[e]` : `e`, !0)}}${l ? `` : `else{` + f(a, !1, !1) + `}`}${d}}catch(e){}}()`
          : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ``}${f(o ? `x[e]` : `e`, !0)}}else{${f(a, !1, !1)};}${d}}catch(t){}}();`;
    return y.createElement(`script`, { nonce: c, dangerouslySetInnerHTML: { __html: p } });
  }
);
var T = u(_(), 1),
  E = (e) => {
    switch (e) {
      case `success`:
        return k;
      case `info`:
        return j;
      case `warning`:
        return A;
      case `error`:
        return M;
      default:
        return null;
    }
  },
  D = Array(12).fill(0),
  O = ({ visible: e, className: t }) =>
    y.createElement(
      `div`,
      { className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `), 'data-visible': e },
      y.createElement(
        `div`,
        { className: `sonner-spinner` },
        D.map((e, t) =>
          y.createElement(`div`, { className: `sonner-loading-bar`, key: `spinner-bar-${t}` })
        )
      )
    ),
  k = y.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    y.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
      clipRule: `evenodd`,
    })
  ),
  A = y.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    y.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
      clipRule: `evenodd`,
    })
  ),
  j = y.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    y.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
      clipRule: `evenodd`,
    })
  ),
  M = y.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      height: `20`,
      width: `20`,
    },
    y.createElement(`path`, {
      fillRule: `evenodd`,
      d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
      clipRule: `evenodd`,
    })
  ),
  ee = y.createElement(
    `svg`,
    {
      xmlns: `http://www.w3.org/2000/svg`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    y.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
    y.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` })
  ),
  N = () => {
    let [e, t] = y.useState(document.hidden);
    return (
      y.useEffect(() => {
        let e = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener(`visibilitychange`, e),
          () => window.removeEventListener(`visibilitychange`, e)
        );
      }, []),
      e
    );
  },
  P = 1,
  te = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = typeof e?.id == `number` || e.id?.length > 0 ? e.id : P++,
            i = this.toasts.find((e) => e.id === r),
            a = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            i
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: a, title: t })
                    : n
                ))
              : this.addToast({ title: t, ...n, dismissible: a, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((e) => {
              this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) => this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) => this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) => this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) => this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description: typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), y.isValidElement(e)))
                  ((i = !1), this.create({ id: n, type: `default`, message: e }));
                else if (re(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description;
                  this.create({ id: n, type: `error`, message: r, description: a });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r = typeof t.success == `function` ? await t.success(e) : t.success,
                    a = typeof t.description == `function` ? await t.description(e) : t.description;
                  this.create({ id: n, type: `success`, message: r, description: a });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r = typeof t.error == `function` ? await t.error(e) : t.error,
                    a = typeof t.description == `function` ? await t.description(e) : t.description;
                  this.create({ id: n, type: `error`, message: r, description: a });
                }
              })
              .finally(() => {
                var e;
                (i && (this.dismiss(n), (n = void 0)), (e = t.finally) == null || e.call(t));
              }),
            s = () =>
              new Promise((e, t) => o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t));
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: s }
            : Object.assign(n, { unwrap: s });
        }),
        (this.custom = (e, t) => {
          let n = t?.id || P++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  })(),
  ne = (e, t) => {
    let n = t?.id || P++;
    return (te.addToast({ title: e, ...t, id: n }), n);
  },
  re = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  F = ne;
Object.assign(
  F,
  {
    success: te.success,
    info: te.info,
    warning: te.warning,
    error: te.error,
    custom: te.custom,
    message: te.message,
    promise: te.promise,
    dismiss: te.dismiss,
    loading: te.loading,
  },
  { getHistory: () => te.toasts, getToasts: () => te.getActiveToasts() }
);
function ie(e, { insertAt: t } = {}) {
  if (!e || typeof document > `u`) return;
  let n = document.head || document.getElementsByTagName(`head`)[0],
    r = document.createElement(`style`);
  ((r.type = `text/css`),
    t === `top` && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e)));
}
ie(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ae(e) {
  return e.label !== void 0;
}
var oe = 3,
  se = `32px`,
  ce = `16px`,
  le = 4e3,
  ue = 356,
  de = 14,
  fe = 20,
  pe = 200;
function me(...e) {
  return e.filter(Boolean).join(` `);
}
function he(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var ge = (e) => {
  let {
      invert: t,
      toast: n,
      unstyled: r,
      interacting: i,
      setHeights: a,
      visibleToasts: o,
      heights: s,
      index: c,
      toasts: l,
      expanded: u,
      removeToast: d,
      defaultRichColors: f,
      closeButton: p,
      style: m,
      cancelButtonStyle: h,
      actionButtonStyle: g,
      className: _ = ``,
      descriptionClassName: v = ``,
      duration: b,
      position: x,
      gap: S,
      loadingIcon: C,
      expandByDefault: w,
      classNames: T,
      icons: D,
      closeButtonAriaLabel: k = `Close toast`,
      pauseWhenPageIsHidden: A,
    } = e,
    [j, M] = y.useState(null),
    [P, te] = y.useState(null),
    [ne, re] = y.useState(!1),
    [F, ie] = y.useState(!1),
    [oe, se] = y.useState(!1),
    [ce, ue] = y.useState(!1),
    [de, ge] = y.useState(!1),
    [_e, ve] = y.useState(0),
    [ye, be] = y.useState(0),
    I = y.useRef(n.duration || b || le),
    xe = y.useRef(null),
    Se = y.useRef(null),
    Ce = c === 0,
    we = c + 1 <= o,
    Te = n.type,
    Ee = n.dismissible !== !1,
    De = n.className || ``,
    Oe = n.descriptionClassName || ``,
    ke = y.useMemo(() => s.findIndex((e) => e.toastId === n.id) || 0, [s, n.id]),
    Ae = y.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
    je = y.useMemo(() => n.duration || b || le, [n.duration, b]),
    Me = y.useRef(0),
    Ne = y.useRef(0),
    L = y.useRef(0),
    Pe = y.useRef(null),
    [Fe, Ie] = x.split(`-`),
    Le = y.useMemo(() => s.reduce((e, t, n) => (n >= ke ? e : e + t.height), 0), [s, ke]),
    Re = N(),
    ze = n.invert || t,
    Be = Te === `loading`;
  ((Ne.current = y.useMemo(() => ke * S + Le, [ke, Le])),
    y.useEffect(() => {
      I.current = je;
    }, [je]),
    y.useEffect(() => {
      re(!0);
    }, []),
    y.useEffect(() => {
      let e = Se.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return (
          be(t),
          a((e) => [{ toastId: n.id, height: t, position: n.position }, ...e]),
          () => a((e) => e.filter((e) => e.toastId !== n.id))
        );
      }
    }, [a, n.id]),
    y.useLayoutEffect(() => {
      if (!ne) return;
      let e = Se.current,
        t = e.style.height;
      e.style.height = `auto`;
      let r = e.getBoundingClientRect().height;
      ((e.style.height = t),
        be(r),
        a((e) =>
          e.find((e) => e.toastId === n.id)
            ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
            : [{ toastId: n.id, height: r, position: n.position }, ...e]
        ));
    }, [ne, n.title, n.description, a, n.id]));
  let Ve = y.useCallback(() => {
    (ie(!0),
      ve(Ne.current),
      a((e) => e.filter((e) => e.toastId !== n.id)),
      setTimeout(() => {
        d(n);
      }, pe));
  }, [n, d, a, Ne]);
  (y.useEffect(() => {
    if ((n.promise && Te === `loading`) || n.duration === 1 / 0 || n.type === `loading`) return;
    let e;
    return (
      u || i || (A && Re)
        ? (() => {
            if (L.current < Me.current) {
              let e = new Date().getTime() - Me.current;
              I.current -= e;
            }
            L.current = new Date().getTime();
          })()
        : I.current !== 1 / 0 &&
          ((Me.current = new Date().getTime()),
          (e = setTimeout(() => {
            var e;
            ((e = n.onAutoClose) == null || e.call(n, n), Ve());
          }, I.current))),
      () => clearTimeout(e)
    );
  }, [u, i, n, Te, A, Re, Ve]),
    y.useEffect(() => {
      n.delete && Ve();
    }, [Ve, n.delete]));
  function He() {
    return D != null && D.loading
      ? y.createElement(
          `div`,
          {
            className: me(T?.loader, n?.classNames?.loader, `sonner-loader`),
            'data-visible': Te === `loading`,
          },
          D.loading
        )
      : C
        ? y.createElement(
            `div`,
            {
              className: me(T?.loader, n?.classNames?.loader, `sonner-loader`),
              'data-visible': Te === `loading`,
            },
            C
          )
        : y.createElement(O, {
            className: me(T?.loader, n?.classNames?.loader),
            visible: Te === `loading`,
          });
  }
  return y.createElement(
    `li`,
    {
      tabIndex: 0,
      ref: Se,
      className: me(
        _,
        De,
        T?.toast,
        n?.classNames?.toast,
        T?.default,
        T?.[Te],
        n?.classNames?.[Te]
      ),
      'data-sonner-toast': ``,
      'data-rich-colors': n.richColors ?? f,
      'data-styled': !(n.jsx || n.unstyled || r),
      'data-mounted': ne,
      'data-promise': !!n.promise,
      'data-swiped': de,
      'data-removed': F,
      'data-visible': we,
      'data-y-position': Fe,
      'data-x-position': Ie,
      'data-index': c,
      'data-front': Ce,
      'data-swiping': oe,
      'data-dismissible': Ee,
      'data-type': Te,
      'data-invert': ze,
      'data-swipe-out': ce,
      'data-swipe-direction': P,
      'data-expanded': !!(u || (w && ne)),
      style: {
        '--index': c,
        '--toasts-before': c,
        '--z-index': l.length - c,
        '--offset': `${F ? _e : Ne.current}px`,
        '--initial-height': w ? `auto` : `${ye}px`,
        ...m,
        ...n.style,
      },
      onDragEnd: () => {
        (se(!1), M(null), (Pe.current = null));
      },
      onPointerDown: (e) => {
        Be ||
          !Ee ||
          ((xe.current = new Date()),
          ve(Ne.current),
          e.target.setPointerCapture(e.pointerId),
          e.target.tagName !== `BUTTON` && (se(!0), (Pe.current = { x: e.clientX, y: e.clientY })));
      },
      onPointerUp: () => {
        var e;
        if (ce || !Ee) return;
        Pe.current = null;
        let t = Number(
            Se.current?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``) || 0
          ),
          r = Number(Se.current?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``) || 0),
          i = new Date().getTime() - xe.current?.getTime(),
          a = j === `x` ? t : r,
          o = Math.abs(a) / i;
        if (Math.abs(a) >= fe || o > 0.11) {
          (ve(Ne.current),
            (e = n.onDismiss) == null || e.call(n, n),
            te(j === `x` ? (t > 0 ? `right` : `left`) : r > 0 ? `down` : `up`),
            Ve(),
            ue(!0),
            ge(!1));
          return;
        }
        (se(!1), M(null));
      },
      onPointerMove: (t) => {
        var n, r;
        if (!Pe.current || !Ee || window.getSelection()?.toString().length > 0) return;
        let i = t.clientY - Pe.current.y,
          a = t.clientX - Pe.current.x,
          o = e.swipeDirections ?? he(x);
        !j && (Math.abs(a) > 1 || Math.abs(i) > 1) && M(Math.abs(a) > Math.abs(i) ? `x` : `y`);
        let s = { x: 0, y: 0 };
        (j === `y`
          ? (o.includes(`top`) || o.includes(`bottom`)) &&
            ((o.includes(`top`) && i < 0) || (o.includes(`bottom`) && i > 0)) &&
            (s.y = i)
          : j === `x` &&
            (o.includes(`left`) || o.includes(`right`)) &&
            ((o.includes(`left`) && a < 0) || (o.includes(`right`) && a > 0)) &&
            (s.x = a),
          (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && ge(!0),
          (n = Se.current) == null || n.style.setProperty(`--swipe-amount-x`, `${s.x}px`),
          (r = Se.current) == null || r.style.setProperty(`--swipe-amount-y`, `${s.y}px`));
      },
    },
    Ae && !n.jsx
      ? y.createElement(
          `button`,
          {
            'aria-label': k,
            'data-disabled': Be,
            'data-close-button': !0,
            onClick:
              Be || !Ee
                ? () => {}
                : () => {
                    var e;
                    (Ve(), (e = n.onDismiss) == null || e.call(n, n));
                  },
            className: me(T?.closeButton, n?.classNames?.closeButton),
          },
          D?.close ?? ee
        )
      : null,
    n.jsx || (0, y.isValidElement)(n.title)
      ? n.jsx
        ? n.jsx
        : typeof n.title == `function`
          ? n.title()
          : n.title
      : y.createElement(
          y.Fragment,
          null,
          Te || n.icon || n.promise
            ? y.createElement(
                `div`,
                { 'data-icon': ``, className: me(T?.icon, n?.classNames?.icon) },
                n.promise || (n.type === `loading` && !n.icon) ? n.icon || He() : null,
                n.type === `loading` ? null : n.icon || D?.[Te] || E(Te)
              )
            : null,
          y.createElement(
            `div`,
            { 'data-content': ``, className: me(T?.content, n?.classNames?.content) },
            y.createElement(
              `div`,
              { 'data-title': ``, className: me(T?.title, n?.classNames?.title) },
              typeof n.title == `function` ? n.title() : n.title
            ),
            n.description
              ? y.createElement(
                  `div`,
                  {
                    'data-description': ``,
                    className: me(v, Oe, T?.description, n?.classNames?.description),
                  },
                  typeof n.description == `function` ? n.description() : n.description
                )
              : null
          ),
          (0, y.isValidElement)(n.cancel)
            ? n.cancel
            : n.cancel && ae(n.cancel)
              ? y.createElement(
                  `button`,
                  {
                    'data-button': !0,
                    'data-cancel': !0,
                    style: n.cancelButtonStyle || h,
                    onClick: (e) => {
                      var t, r;
                      ae(n.cancel) &&
                        Ee &&
                        ((r = (t = n.cancel).onClick) == null || r.call(t, e), Ve());
                    },
                    className: me(T?.cancelButton, n?.classNames?.cancelButton),
                  },
                  n.cancel.label
                )
              : null,
          (0, y.isValidElement)(n.action)
            ? n.action
            : n.action && ae(n.action)
              ? y.createElement(
                  `button`,
                  {
                    'data-button': !0,
                    'data-action': !0,
                    style: n.actionButtonStyle || g,
                    onClick: (e) => {
                      var t, r;
                      ae(n.action) &&
                        ((r = (t = n.action).onClick) == null || r.call(t, e),
                        !e.defaultPrevented && Ve());
                    },
                    className: me(T?.actionButton, n?.classNames?.actionButton),
                  },
                  n.action.label
                )
              : null
        )
  );
};
function _e() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function ve(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? ce : se;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] = typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var ye = (0, y.forwardRef)(function (e, t) {
    let {
        invert: n,
        position: r = `bottom-right`,
        hotkey: i = [`altKey`, `KeyT`],
        expand: a,
        closeButton: o,
        className: s,
        offset: c,
        mobileOffset: l,
        theme: u = `light`,
        richColors: d,
        duration: f,
        style: p,
        visibleToasts: m = oe,
        toastOptions: h,
        dir: g = _e(),
        gap: _ = de,
        loadingIcon: v,
        icons: b,
        containerAriaLabel: x = `Notifications`,
        pauseWhenPageIsHidden: S,
      } = e,
      [C, w] = y.useState([]),
      E = y.useMemo(
        () => Array.from(new Set([r].concat(C.filter((e) => e.position).map((e) => e.position)))),
        [C, r]
      ),
      [D, O] = y.useState([]),
      [k, A] = y.useState(!1),
      [j, M] = y.useState(!1),
      [ee, N] = y.useState(
        u === `system`
          ? typeof window < `u` &&
            window.matchMedia &&
            window.matchMedia(`(prefers-color-scheme: dark)`).matches
            ? `dark`
            : `light`
          : u
      ),
      P = y.useRef(null),
      ne = i.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      re = y.useRef(null),
      F = y.useRef(!1),
      ie = y.useCallback((e) => {
        w((t) => {
          var n;
          return (
            ((n = t.find((t) => t.id === e.id)) != null && n.delete) || te.dismiss(e.id),
            t.filter(({ id: t }) => t !== e.id)
          );
        });
      }, []);
    return (
      y.useEffect(
        () =>
          te.subscribe((e) => {
            if (e.dismiss) {
              w((t) => t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)));
              return;
            }
            setTimeout(() => {
              T.flushSync(() => {
                w((t) => {
                  let n = t.findIndex((t) => t.id === e.id);
                  return n === -1
                    ? [e, ...t]
                    : [...t.slice(0, n), { ...t[n], ...e }, ...t.slice(n + 1)];
                });
              });
            });
          }),
        []
      ),
      y.useEffect(() => {
        if (u !== `system`) {
          N(u);
          return;
        }
        if (
          (u === `system` &&
            (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches
              ? N(`dark`)
              : N(`light`)),
          typeof window > `u`)
        )
          return;
        let e = window.matchMedia(`(prefers-color-scheme: dark)`);
        try {
          e.addEventListener(`change`, ({ matches: e }) => {
            N(e ? `dark` : `light`);
          });
        } catch {
          e.addListener(({ matches: e }) => {
            try {
              N(e ? `dark` : `light`);
            } catch (e) {
              console.error(e);
            }
          });
        }
      }, [u]),
      y.useEffect(() => {
        C.length <= 1 && A(!1);
      }, [C]),
      y.useEffect(() => {
        let e = (e) => {
          var t, n;
          (i.every((t) => e[t] || e.code === t) && (A(!0), (t = P.current) == null || t.focus()),
            e.code === `Escape` &&
              (document.activeElement === P.current ||
                ((n = P.current) != null && n.contains(document.activeElement))) &&
              A(!1));
        };
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [i]),
      y.useEffect(() => {
        if (P.current)
          return () => {
            re.current &&
              (re.current.focus({ preventScroll: !0 }), (re.current = null), (F.current = !1));
          };
      }, [P.current]),
      y.createElement(
        `section`,
        {
          ref: t,
          'aria-label': `${x} ${ne}`,
          tabIndex: -1,
          'aria-live': `polite`,
          'aria-relevant': `additions text`,
          'aria-atomic': `false`,
          suppressHydrationWarning: !0,
        },
        E.map((t, r) => {
          let [i, u] = t.split(`-`);
          return C.length
            ? y.createElement(
                `ol`,
                {
                  key: t,
                  dir: g === `auto` ? _e() : g,
                  tabIndex: -1,
                  ref: P,
                  className: s,
                  'data-sonner-toaster': !0,
                  'data-theme': ee,
                  'data-y-position': i,
                  'data-lifted': k && C.length > 1 && !a,
                  'data-x-position': u,
                  style: {
                    '--front-toast-height': `${D[0]?.height || 0}px`,
                    '--width': `${ue}px`,
                    '--gap': `${_}px`,
                    ...p,
                    ...ve(c, l),
                  },
                  onBlur: (e) => {
                    F.current &&
                      !e.currentTarget.contains(e.relatedTarget) &&
                      ((F.current = !1),
                      (re.current &&= (re.current.focus({ preventScroll: !0 }), null)));
                  },
                  onFocus: (e) => {
                    (e.target instanceof HTMLElement && e.target.dataset.dismissible === `false`) ||
                      F.current ||
                      ((F.current = !0), (re.current = e.relatedTarget));
                  },
                  onMouseEnter: () => A(!0),
                  onMouseMove: () => A(!0),
                  onMouseLeave: () => {
                    j || A(!1);
                  },
                  onDragEnd: () => A(!1),
                  onPointerDown: (e) => {
                    (e.target instanceof HTMLElement && e.target.dataset.dismissible === `false`) ||
                      M(!0);
                  },
                  onPointerUp: () => M(!1),
                },
                C.filter((e) => (!e.position && r === 0) || e.position === t).map((r, i) =>
                  y.createElement(ge, {
                    key: r.id,
                    icons: b,
                    index: i,
                    toast: r,
                    defaultRichColors: d,
                    duration: h?.duration ?? f,
                    className: h?.className,
                    descriptionClassName: h?.descriptionClassName,
                    invert: n,
                    visibleToasts: m,
                    closeButton: h?.closeButton ?? o,
                    interacting: j,
                    position: t,
                    style: h?.style,
                    unstyled: h?.unstyled,
                    classNames: h?.classNames,
                    cancelButtonStyle: h?.cancelButtonStyle,
                    actionButtonStyle: h?.actionButtonStyle,
                    removeToast: ie,
                    toasts: C.filter((e) => e.position == r.position),
                    heights: D.filter((e) => e.position == r.position),
                    setHeights: O,
                    expandByDefault: a,
                    gap: _,
                    loadingIcon: v,
                    expanded: k,
                    pauseWhenPageIsHidden: S,
                    swipeDirections: e.swipeDirections,
                  })
                )
              )
            : null;
        })
      )
    );
  }),
  be = s((e) => {
    var t = p(),
      n = Symbol.for(`react.element`),
      r = Symbol.for(`react.fragment`),
      i = Object.prototype.hasOwnProperty,
      a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      o = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(e, t, r) {
      var s,
        c = {},
        l = null,
        u = null;
      for (s in (r !== void 0 && (l = `` + r),
      t.key !== void 0 && (l = `` + t.key),
      t.ref !== void 0 && (u = t.ref),
      t))
        i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
      if (e && e.defaultProps)
        for (s in ((t = e.defaultProps), t)) c[s] === void 0 && (c[s] = t[s]);
      return { $$typeof: n, type: e, key: l, ref: u, props: c, _owner: a.current };
    }
    ((e.Fragment = r), (e.jsx = s), (e.jsxs = s));
  }),
  I = s((e, t) => {
    t.exports = be();
  })(),
  xe = ({ ...e }) => {
    let { theme: t = `system` } = w();
    return (0, I.jsx)(ye, {
      theme: t,
      className: `toaster group`,
      toastOptions: {
        classNames: {
          toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          description: `group-[.toast]:text-muted-foreground`,
          actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
          cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
        },
      },
      ...e,
    });
  },
  Se = 1,
  Ce = 1e6,
  we = 0;
function Te() {
  return ((we = (we + 1) % (2 ** 53 - 1)), we.toString());
}
var Ee = new Map(),
  De = (e) => {
    if (Ee.has(e)) return;
    let t = setTimeout(() => {
      (Ee.delete(e), je({ type: `REMOVE_TOAST`, toastId: e }));
    }, Ce);
    Ee.set(e, t);
  },
  Oe = (e, t) => {
    switch (t.type) {
      case `ADD_TOAST`:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Se) };
      case `UPDATE_TOAST`:
        return {
          ...e,
          toasts: e.toasts.map((e) => (e.id === t.toast.id ? { ...e, ...t.toast } : e)),
        };
      case `DISMISS_TOAST`: {
        let { toastId: n } = t;
        return (
          n
            ? De(n)
            : e.toasts.forEach((e) => {
                De(e.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((e) => (e.id === n || n === void 0 ? { ...e, open: !1 } : e)),
          }
        );
      }
      case `REMOVE_TOAST`:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
    }
  },
  ke = [],
  Ae = { toasts: [] };
function je(e) {
  ((Ae = Oe(Ae, e)),
    ke.forEach((e) => {
      e(Ae);
    }));
}
function Me({ ...e }) {
  let t = Te(),
    n = (e) => je({ type: `UPDATE_TOAST`, toast: { ...e, id: t } }),
    r = () => je({ type: `DISMISS_TOAST`, toastId: t });
  return (
    je({
      type: `ADD_TOAST`,
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (e) => {
          e || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Ne() {
  let [e, t] = y.useState(Ae);
  return (
    y.useEffect(
      () => (
        ke.push(t),
        () => {
          let e = ke.indexOf(t);
          e > -1 && ke.splice(e, 1);
        }
      ),
      [e]
    ),
    { ...e, toast: Me, dismiss: (e) => je({ type: `DISMISS_TOAST`, toastId: e }) }
  );
}
typeof window < `u` && window.document && window.document.createElement;
function L(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
  };
}
function Pe(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function Fe(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Pe(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Pe(e[t], null);
        }
      };
  };
}
function Ie(...e) {
  return y.useCallback(Fe(...e), e);
}
function Le(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = y.createContext(r),
      a = n.length;
    n = [...n, r];
    let o = (t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = y.useMemo(() => o, Object.values(o));
      return (0, I.jsx)(s.Provider, { value: c, children: r });
    };
    o.displayName = t + `Provider`;
    function s(n, o) {
      let s = o?.[e]?.[a] || i,
        c = y.useContext(s);
      if (c) return c;
      if (r !== void 0) return r;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [o, s];
  }
  let i = () => {
    let t = n.map((e) => y.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return ((i.scopeName = e), [r, Re(i, ...t)]);
}
function Re(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function ze(e) {
  let t = Be(e),
    n = y.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = y.Children.toArray(r),
        o = a.find(He);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? y.Children.count(e) > 1
                ? y.Children.only(null)
                : y.isValidElement(e)
                  ? e.props.children
                  : null
              : t
          );
        return (0, I.jsx)(t, {
          ...i,
          ref: n,
          children: y.isValidElement(e) ? y.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, I.jsx)(t, { ...i, ref: n, children: r });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function Be(e) {
  let t = y.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (y.isValidElement(n)) {
      let e = We(n),
        i = Ue(r, n.props);
      return (n.type !== y.Fragment && (i.ref = t ? Fe(t, e) : e), y.cloneElement(n, i));
    }
    return y.Children.count(n) > 1 ? y.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Ve = Symbol(`radix.slottable`);
function He(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === Ve
  );
}
function Ue(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function We(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ge(e) {
  let t = e + `CollectionProvider`,
    [n, r] = Le(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (e) => {
      let { scope: t, children: n } = e,
        r = y.useRef(null),
        a = y.useRef(new Map()).current;
      return (0, I.jsx)(i, { scope: t, itemMap: a, collectionRef: r, children: n });
    };
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = ze(s),
    l = y.forwardRef((e, t) => {
      let { scope: n, children: r } = e;
      return (0, I.jsx)(c, { ref: Ie(t, a(s, n).collectionRef), children: r });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    f = ze(u),
    p = y.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = y.useRef(null),
        s = Ie(t, o),
        c = a(u, n);
      return (
        y.useEffect(() => (c.itemMap.set(o, { ref: o, ...i }), () => void c.itemMap.delete(o))),
        (0, I.jsx)(f, { [d]: ``, ref: s, children: r })
      );
    });
  p.displayName = u;
  function m(t) {
    let n = a(e + `CollectionConsumer`, t);
    return y.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: p }, m, r];
}
function Ke(e) {
  let t = qe(e),
    n = y.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = y.Children.toArray(r),
        o = a.find(Ye);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? y.Children.count(e) > 1
                ? y.Children.only(null)
                : y.isValidElement(e)
                  ? e.props.children
                  : null
              : t
          );
        return (0, I.jsx)(t, {
          ...i,
          ref: n,
          children: y.isValidElement(e) ? y.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, I.jsx)(t, { ...i, ref: n, children: r });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function qe(e) {
  let t = y.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (y.isValidElement(n)) {
      let e = Ze(n),
        i = Xe(r, n.props);
      return (n.type !== y.Fragment && (i.ref = t ? Fe(t, e) : e), y.cloneElement(n, i));
    }
    return y.Children.count(n) > 1 ? y.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Je = Symbol(`radix.slottable`);
function Ye(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === Je
  );
}
function Xe(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function Ze(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Qe = [
  `a`,
  `button`,
  `div`,
  `form`,
  `h2`,
  `h3`,
  `img`,
  `input`,
  `label`,
  `li`,
  `nav`,
  `ol`,
  `p`,
  `select`,
  `span`,
  `svg`,
  `ul`,
].reduce((e, t) => {
  let n = Ke(`Primitive.${t}`),
    r = y.forwardRef((e, r) => {
      let { asChild: i, ...a } = e,
        o = i ? n : t;
      return (
        typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
        (0, I.jsx)(o, { ...a, ref: r })
      );
    });
  return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
}, {});
function $e(e, t) {
  e && T.flushSync(() => e.dispatchEvent(t));
}
function et(e) {
  let t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      []
    )
  );
}
function tt(e, t = globalThis?.document) {
  let n = et(e);
  y.useEffect(() => {
    let e = (e) => {
      e.key === `Escape` && n(e);
    };
    return (
      t.addEventListener(`keydown`, e, { capture: !0 }),
      () => t.removeEventListener(`keydown`, e, { capture: !0 })
    );
  }, [n, t]);
}
var nt = `DismissableLayer`,
  rt = `dismissableLayer.update`,
  it = `dismissableLayer.pointerDownOutside`,
  at = `dismissableLayer.focusOutside`,
  ot,
  st = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ct = y.forwardRef((e, t) => {
    let {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: a,
        onInteractOutside: o,
        onDismiss: s,
        ...c
      } = e,
      l = y.useContext(st),
      [u, d] = y.useState(null),
      f = u?.ownerDocument ?? globalThis?.document,
      [, p] = y.useState({}),
      m = Ie(t, (e) => d(e)),
      h = Array.from(l.layers),
      [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = h.indexOf(g),
      v = u ? h.indexOf(u) : -1,
      b = l.layersWithOutsidePointerEventsDisabled.size > 0,
      x = v >= _,
      S = dt((e) => {
        let t = e.target,
          n = [...l.branches].some((e) => e.contains(t));
        !x || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
      }, f),
      C = ft((e) => {
        let t = e.target;
        [...l.branches].some((e) => e.contains(t)) || (a?.(e), o?.(e), e.defaultPrevented || s?.());
      }, f);
    return (
      tt((e) => {
        v === l.layers.size - 1 && (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
      }, f),
      y.useEffect(() => {
        if (u)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ot = f.body.style.pointerEvents), (f.body.style.pointerEvents = `none`)),
              l.layersWithOutsidePointerEventsDisabled.add(u)),
            l.layers.add(u),
            pt(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = ot);
            }
          );
      }, [u, f, n, l]),
      y.useEffect(
        () => () => {
          u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), pt());
        },
        [u, l]
      ),
      y.useEffect(() => {
        let e = () => p({});
        return (document.addEventListener(rt, e), () => document.removeEventListener(rt, e));
      }, []),
      (0, I.jsx)(Qe.div, {
        ...c,
        ref: m,
        style: { pointerEvents: b ? (x ? `auto` : `none`) : void 0, ...e.style },
        onFocusCapture: L(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: L(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: L(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
ct.displayName = nt;
var lt = `DismissableLayerBranch`,
  ut = y.forwardRef((e, t) => {
    let n = y.useContext(st),
      r = y.useRef(null),
      i = Ie(t, r);
    return (
      y.useEffect(() => {
        let e = r.current;
        if (e)
          return (
            n.branches.add(e),
            () => {
              n.branches.delete(e);
            }
          );
      }, [n.branches]),
      (0, I.jsx)(Qe.div, { ...e, ref: i })
    );
  });
ut.displayName = lt;
function dt(e, t = globalThis?.document) {
  let n = et(e),
    r = y.useRef(!1),
    i = y.useRef(() => {});
  return (
    y.useEffect(() => {
      let e = (e) => {
          if (e.target && !r.current) {
            let r = function () {
                mt(it, n, a, { discrete: !0 });
              },
              a = { originalEvent: e };
            e.pointerType === `touch`
              ? (t.removeEventListener(`click`, i.current),
                (i.current = r),
                t.addEventListener(`click`, i.current, { once: !0 }))
              : r();
          } else t.removeEventListener(`click`, i.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener(`pointerdown`, e);
        }, 0);
      return () => {
        (window.clearTimeout(a),
          t.removeEventListener(`pointerdown`, e),
          t.removeEventListener(`click`, i.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function ft(e, t = globalThis?.document) {
  let n = et(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      let e = (e) => {
        e.target && !r.current && mt(at, n, { originalEvent: e }, { discrete: !1 });
      };
      return (t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e));
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function pt() {
  let e = new CustomEvent(rt);
  document.dispatchEvent(e);
}
function mt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }), r ? $e(i, a) : i.dispatchEvent(a));
}
var ht = ct,
  gt = ut,
  _t = globalThis?.document ? y.useLayoutEffect : () => {},
  vt = `Portal`,
  yt = y.forwardRef((e, t) => {
    let { container: n, ...r } = e,
      [i, a] = y.useState(!1);
    _t(() => a(!0), []);
    let o = n || (i && globalThis?.document?.body);
    return o ? T.createPortal((0, I.jsx)(Qe.div, { ...r, ref: t }), o) : null;
  });
yt.displayName = vt;
function bt(e, t) {
  return y.useReducer((e, n) => t[e][n] ?? e, e);
}
var xt = (e) => {
  let { present: t, children: n } = e,
    r = St(t),
    i = typeof n == `function` ? n({ present: r.isPresent }) : y.Children.only(n),
    a = Ie(r.ref, wt(i));
  return typeof n == `function` || r.isPresent ? y.cloneElement(i, { ref: a }) : null;
};
xt.displayName = `Presence`;
function St(e) {
  let [t, n] = y.useState(),
    r = y.useRef(null),
    i = y.useRef(e),
    a = y.useRef(`none`),
    [o, s] = bt(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    y.useEffect(() => {
      let e = Ct(r.current);
      a.current = o === `mounted` ? e : `none`;
    }, [o]),
    _t(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          o = Ct(t);
        (e
          ? s(`MOUNT`)
          : o === `none` || t?.display === `none`
            ? s(`UNMOUNT`)
            : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, s]),
    _t(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = (a) => {
            let o = Ct(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r);
                })));
            }
          },
          c = (e) => {
            e.target === t && (a.current = Ct(r.current));
          };
        return (
          t.addEventListener(`animationstart`, c),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, c),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      } else s(`ANIMATION_END`);
    }, [t, s]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(o),
      ref: y.useCallback((e) => {
        ((r.current = e ? getComputedStyle(e) : null), n(e));
      }, []),
    }
  );
}
function Ct(e) {
  return e?.animationName || `none`;
}
function wt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Tt = y.useInsertionEffect || _t;
function Et({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = Dt({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : i;
  {
    let t = y.useRef(e !== void 0);
    y.useEffect(() => {
      let e = t.current;
      if (e !== s) {
        let t = e ? `controlled` : `uncontrolled`,
          n = s ? `controlled` : `uncontrolled`;
        console.warn(
          `${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      t.current = s;
    }, [s, r]);
  }
  return [
    c,
    y.useCallback(
      (t) => {
        if (s) {
          let n = Ot(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o]
    ),
  ];
}
function Dt({ defaultProp: e, onChange: t }) {
  let [n, r] = y.useState(e),
    i = y.useRef(n),
    a = y.useRef(t);
  return (
    Tt(() => {
      a.current = t;
    }, [t]),
    y.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
function Ot(e) {
  return typeof e == `function`;
}
var kt = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`,
  }),
  At = `VisuallyHidden`,
  jt = y.forwardRef((e, t) => (0, I.jsx)(Qe.span, { ...e, ref: t, style: { ...kt, ...e.style } }));
jt.displayName = At;
var Mt = jt,
  Nt = `ToastProvider`,
  [Pt, Ft, It] = Ge(`Toast`),
  [Lt, Rt] = Le(`Toast`, [It]),
  [zt, Bt] = Lt(Nt),
  Vt = (e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        children: o,
      } = e,
      [s, c] = y.useState(null),
      [l, u] = y.useState(0),
      d = y.useRef(!1),
      f = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Nt}\`. Expected non-empty \`string\`.`
        ),
      (0, I.jsx)(Pt.Provider, {
        scope: t,
        children: (0, I.jsx)(zt, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: l,
          viewport: s,
          onViewportChange: c,
          onToastAdd: y.useCallback(() => u((e) => e + 1), []),
          onToastRemove: y.useCallback(() => u((e) => e - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
Vt.displayName = Nt;
var Ht = `ToastViewport`,
  Ut = [`F8`],
  R = `toast.viewportPause`,
  Wt = `toast.viewportResume`,
  Gt = y.forwardRef((e, t) => {
    let { __scopeToast: n, hotkey: r = Ut, label: i = `Notifications ({hotkey})`, ...a } = e,
      o = Bt(Ht, n),
      s = Ft(n),
      c = y.useRef(null),
      l = y.useRef(null),
      u = y.useRef(null),
      d = y.useRef(null),
      f = Ie(t, d, o.onViewportChange),
      p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
      m = o.toastCount > 0;
    (y.useEffect(() => {
      let e = (e) => {
        r.length !== 0 && r.every((t) => e[t] || e.code === t) && d.current?.focus();
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [r]),
      y.useEffect(() => {
        let e = c.current,
          t = d.current;
        if (m && e && t) {
          let n = () => {
              if (!o.isClosePausedRef.current) {
                let e = new CustomEvent(R);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
              }
            },
            r = () => {
              if (o.isClosePausedRef.current) {
                let e = new CustomEvent(Wt);
                (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
              }
            },
            i = (t) => {
              e.contains(t.relatedTarget) || r();
            },
            a = () => {
              e.contains(document.activeElement) || r();
            };
          return (
            e.addEventListener(`focusin`, n),
            e.addEventListener(`focusout`, i),
            e.addEventListener(`pointermove`, n),
            e.addEventListener(`pointerleave`, a),
            window.addEventListener(`blur`, n),
            window.addEventListener(`focus`, r),
            () => {
              (e.removeEventListener(`focusin`, n),
                e.removeEventListener(`focusout`, i),
                e.removeEventListener(`pointermove`, n),
                e.removeEventListener(`pointerleave`, a),
                window.removeEventListener(`blur`, n),
                window.removeEventListener(`focus`, r));
            }
          );
        }
      }, [m, o.isClosePausedRef]));
    let h = y.useCallback(
      ({ tabbingDirection: e }) => {
        let t = s().map((t) => {
          let n = t.ref.current,
            r = [n, ...yn(n)];
          return e === `forwards` ? r : r.reverse();
        });
        return (e === `forwards` ? t.reverse() : t).flat();
      },
      [s]
    );
    return (
      y.useEffect(() => {
        let e = d.current;
        if (e) {
          let t = (t) => {
            let n = t.altKey || t.ctrlKey || t.metaKey;
            if (t.key === `Tab` && !n) {
              let n = document.activeElement,
                r = t.shiftKey;
              if (t.target === e && r) {
                l.current?.focus();
                return;
              }
              let i = h({ tabbingDirection: r ? `backwards` : `forwards` }),
                a = i.findIndex((e) => e === n);
              bn(i.slice(a + 1)) ? t.preventDefault() : r ? l.current?.focus() : u.current?.focus();
            }
          };
          return (e.addEventListener(`keydown`, t), () => e.removeEventListener(`keydown`, t));
        }
      }, [s, h]),
      (0, I.jsxs)(gt, {
        ref: c,
        role: `region`,
        'aria-label': i.replace(`{hotkey}`, p),
        tabIndex: -1,
        style: { pointerEvents: m ? void 0 : `none` },
        children: [
          m &&
            (0, I.jsx)(qt, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                bn(h({ tabbingDirection: `forwards` }));
              },
            }),
          (0, I.jsx)(Pt.Slot, {
            scope: n,
            children: (0, I.jsx)(Qe.ol, { tabIndex: -1, ...a, ref: f }),
          }),
          m &&
            (0, I.jsx)(qt, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                bn(h({ tabbingDirection: `backwards` }));
              },
            }),
        ],
      })
    );
  });
Gt.displayName = Ht;
var Kt = `ToastFocusProxy`,
  qt = y.forwardRef((e, t) => {
    let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      a = Bt(Kt, n);
    return (0, I.jsx)(jt, {
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: `fixed` },
      onFocus: (e) => {
        let t = e.relatedTarget;
        a.viewport?.contains(t) || r();
      },
    });
  });
qt.displayName = Kt;
var Jt = `Toast`,
  Yt = `toast.swipeStart`,
  Xt = `toast.swipeMove`,
  Zt = `toast.swipeCancel`,
  Qt = `toast.swipeEnd`,
  $t = y.forwardRef((e, t) => {
    let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
      [s, c] = Et({ prop: r, defaultProp: i ?? !0, onChange: a, caller: Jt });
    return (0, I.jsx)(xt, {
      present: n || s,
      children: (0, I.jsx)(nn, {
        open: s,
        ...o,
        ref: t,
        onClose: () => c(!1),
        onPause: et(e.onPause),
        onResume: et(e.onResume),
        onSwipeStart: L(e.onSwipeStart, (e) => {
          e.currentTarget.setAttribute(`data-swipe`, `start`);
        }),
        onSwipeMove: L(e.onSwipeMove, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `move`),
            e.currentTarget.style.setProperty(`--radix-toast-swipe-move-x`, `${t}px`),
            e.currentTarget.style.setProperty(`--radix-toast-swipe-move-y`, `${n}px`));
        }),
        onSwipeCancel: L(e.onSwipeCancel, (e) => {
          (e.currentTarget.setAttribute(`data-swipe`, `cancel`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`));
        }),
        onSwipeEnd: L(e.onSwipeEnd, (e) => {
          let { x: t, y: n } = e.detail.delta;
          (e.currentTarget.setAttribute(`data-swipe`, `end`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),
            e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),
            e.currentTarget.style.setProperty(`--radix-toast-swipe-end-x`, `${t}px`),
            e.currentTarget.style.setProperty(`--radix-toast-swipe-end-y`, `${n}px`),
            c(!1));
        }),
      }),
    });
  });
$t.displayName = Jt;
var [en, tn] = Lt(Jt, { onClose() {} }),
  nn = y.forwardRef((e, t) => {
    let {
        __scopeToast: n,
        type: r = `foreground`,
        duration: i,
        open: a,
        onClose: o,
        onEscapeKeyDown: s,
        onPause: c,
        onResume: l,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: p,
        ...m
      } = e,
      h = Bt(Jt, n),
      [g, _] = y.useState(null),
      v = Ie(t, (e) => _(e)),
      b = y.useRef(null),
      x = y.useRef(null),
      S = i || h.duration,
      C = y.useRef(0),
      w = y.useRef(S),
      E = y.useRef(0),
      { onToastAdd: D, onToastRemove: O } = h,
      k = et(() => {
        (g?.contains(document.activeElement) && h.viewport?.focus(), o());
      }),
      A = y.useCallback(
        (e) => {
          !e ||
            e === 1 / 0 ||
            (window.clearTimeout(E.current),
            (C.current = new Date().getTime()),
            (E.current = window.setTimeout(k, e)));
        },
        [k]
      );
    (y.useEffect(() => {
      let e = h.viewport;
      if (e) {
        let t = () => {
            (A(w.current), l?.());
          },
          n = () => {
            let e = new Date().getTime() - C.current;
            ((w.current -= e), window.clearTimeout(E.current), c?.());
          };
        return (
          e.addEventListener(R, n),
          e.addEventListener(Wt, t),
          () => {
            (e.removeEventListener(R, n), e.removeEventListener(Wt, t));
          }
        );
      }
    }, [h.viewport, S, c, l, A]),
      y.useEffect(() => {
        a && !h.isClosePausedRef.current && A(S);
      }, [a, S, h.isClosePausedRef, A]),
      y.useEffect(() => (D(), () => O()), [D, O]));
    let j = y.useMemo(() => (g ? mn(g) : null), [g]);
    return h.viewport
      ? (0, I.jsxs)(I.Fragment, {
          children: [
            j &&
              (0, I.jsx)(rn, {
                __scopeToast: n,
                role: `status`,
                'aria-live': r === `foreground` ? `assertive` : `polite`,
                children: j,
              }),
            (0, I.jsx)(en, {
              scope: n,
              onClose: k,
              children: T.createPortal(
                (0, I.jsx)(Pt.ItemSlot, {
                  scope: n,
                  children: (0, I.jsx)(ht, {
                    asChild: !0,
                    onEscapeKeyDown: L(s, () => {
                      (h.isFocusedToastEscapeKeyDownRef.current || k(),
                        (h.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: (0, I.jsx)(Qe.li, {
                      tabIndex: 0,
                      'data-state': a ? `open` : `closed`,
                      'data-swipe-direction': h.swipeDirection,
                      ...m,
                      ref: v,
                      style: { userSelect: `none`, touchAction: `none`, ...e.style },
                      onKeyDown: L(e.onKeyDown, (e) => {
                        e.key === `Escape` &&
                          (s?.(e.nativeEvent),
                          e.nativeEvent.defaultPrevented ||
                            ((h.isFocusedToastEscapeKeyDownRef.current = !0), k()));
                      }),
                      onPointerDown: L(e.onPointerDown, (e) => {
                        e.button === 0 && (b.current = { x: e.clientX, y: e.clientY });
                      }),
                      onPointerMove: L(e.onPointerMove, (e) => {
                        if (!b.current) return;
                        let t = e.clientX - b.current.x,
                          n = e.clientY - b.current.y,
                          r = !!x.current,
                          i = [`left`, `right`].includes(h.swipeDirection),
                          a = [`left`, `up`].includes(h.swipeDirection) ? Math.min : Math.max,
                          o = i ? a(0, t) : 0,
                          s = i ? 0 : a(0, n),
                          c = e.pointerType === `touch` ? 10 : 2,
                          l = { x: o, y: s },
                          f = { originalEvent: e, delta: l };
                        r
                          ? ((x.current = l), hn(Xt, d, f, { discrete: !1 }))
                          : gn(l, h.swipeDirection, c)
                            ? ((x.current = l),
                              hn(Yt, u, f, { discrete: !1 }),
                              e.target.setPointerCapture(e.pointerId))
                            : (Math.abs(t) > c || Math.abs(n) > c) && (b.current = null);
                      }),
                      onPointerUp: L(e.onPointerUp, (e) => {
                        let t = x.current,
                          n = e.target;
                        if (
                          (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId),
                          (x.current = null),
                          (b.current = null),
                          t)
                        ) {
                          let n = e.currentTarget,
                            r = { originalEvent: e, delta: t };
                          (gn(t, h.swipeDirection, h.swipeThreshold)
                            ? hn(Qt, p, r, { discrete: !0 })
                            : hn(Zt, f, r, { discrete: !0 }),
                            n.addEventListener(`click`, (e) => e.preventDefault(), { once: !0 }));
                        }
                      }),
                    }),
                  }),
                }),
                h.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  rn = (e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = Bt(Jt, t),
      [a, o] = y.useState(!1),
      [s, c] = y.useState(!1);
    return (
      _n(() => o(!0)),
      y.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, I.jsx)(yt, {
            asChild: !0,
            children: (0, I.jsx)(jt, {
              ...r,
              children: a && (0, I.jsxs)(I.Fragment, { children: [i.label, ` `, n] }),
            }),
          })
    );
  },
  an = `ToastTitle`,
  on = y.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, I.jsx)(Qe.div, { ...r, ref: t });
  });
on.displayName = an;
var sn = `ToastDescription`,
  cn = y.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e;
    return (0, I.jsx)(Qe.div, { ...r, ref: t });
  });
cn.displayName = sn;
var ln = `ToastAction`,
  un = y.forwardRef((e, t) => {
    let { altText: n, ...r } = e;
    return n.trim()
      ? (0, I.jsx)(pn, { altText: n, asChild: !0, children: (0, I.jsx)(fn, { ...r, ref: t }) })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${ln}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
un.displayName = ln;
var dn = `ToastClose`,
  fn = y.forwardRef((e, t) => {
    let { __scopeToast: n, ...r } = e,
      i = tn(dn, n);
    return (0, I.jsx)(pn, {
      asChild: !0,
      children: (0, I.jsx)(Qe.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: L(e.onClick, i.onClose),
      }),
    });
  });
fn.displayName = dn;
var pn = y.forwardRef((e, t) => {
  let { __scopeToast: n, altText: r, ...i } = e;
  return (0, I.jsx)(Qe.div, {
    'data-radix-toast-announce-exclude': ``,
    'data-radix-toast-announce-alt': r || void 0,
    ...i,
    ref: t,
  });
});
function mn(e) {
  let t = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if ((e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), vn(e))) {
        let n = e.ariaHidden || e.hidden || e.style.display === `none`,
          r = e.dataset.radixToastAnnounceExclude === ``;
        if (!n)
          if (r) {
            let n = e.dataset.radixToastAnnounceAlt;
            n && t.push(n);
          } else t.push(...mn(e));
      }
    }),
    t
  );
}
function hn(e, t, n, { discrete: r }) {
  let i = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }), r ? $e(i, a) : i.dispatchEvent(a));
}
var gn = (e, t, n = 0) => {
  let r = Math.abs(e.x),
    i = Math.abs(e.y),
    a = r > i;
  return t === `left` || t === `right` ? a && r > n : !a && i > n;
};
function _n(e = () => {}) {
  let t = et(e);
  _t(() => {
    let e = 0,
      n = 0;
    return (
      (e = window.requestAnimationFrame(() => (n = window.requestAnimationFrame(t)))),
      () => {
        (window.cancelAnimationFrame(e), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
function vn(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function yn(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function bn(e) {
  let t = document.activeElement;
  return e.some((e) => (e === t ? !0 : (e.focus(), document.activeElement !== t)));
}
var xn = Vt,
  Sn = Gt,
  Cn = $t,
  wn = on,
  Tn = cn,
  En = un,
  Dn = fn;
function On(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = On(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function kn() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = On(e)) && (r && (r += ` `), (r += t));
  return r;
}
var An = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  jn = kn,
  Mn = (e, t) => (n) => {
    if (t?.variants == null) return jn(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = An(t) || An(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return jn(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n) ? n.includes({ ...i, ...o }[t]) : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className
    );
  },
  Nn = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Pn = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Fn = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  In = (0, y.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c
    ) =>
      (0, y.createElement)(
        `svg`,
        {
          ref: c,
          ...Fn,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Pn(`lucide`, i),
          ...s,
        },
        [...o.map(([e, t]) => (0, y.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])]
      )
  ),
  z = (e, t) => {
    let n = (0, y.forwardRef)(({ className: n, ...r }, i) =>
      (0, y.createElement)(In, { ref: i, iconNode: t, className: Pn(`lucide-${Nn(e)}`, n), ...r })
    );
    return ((n.displayName = `${e}`), n);
  },
  Ln = z(`ArrowRight`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  Rn = z(`BookOpen`, [
    [`path`, { d: `M12 7v14`, key: `1akyts` }],
    [
      `path`,
      {
        d: `M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,
        key: `ruj8y`,
      },
    ],
  ]),
  zn = z(`Briefcase`, [
    [`path`, { d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`, key: `jecpp` }],
    [`rect`, { width: `20`, height: `14`, x: `2`, y: `6`, rx: `2`, key: `i6l2r4` }],
  ]),
  Bn = z(`Calendar`, [
    [`path`, { d: `M8 2v4`, key: `1cmpym` }],
    [`path`, { d: `M16 2v4`, key: `4m81vk` }],
    [`rect`, { width: `18`, height: `18`, x: `3`, y: `4`, rx: `2`, key: `1hopcy` }],
    [`path`, { d: `M3 10h18`, key: `8toen8` }],
  ]),
  Vn = z(`ChevronDown`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  Hn = z(`CircleCheckBig`, [
    [`path`, { d: `M21.801 10A10 10 0 1 1 17 3.335`, key: `yps3ct` }],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  Un = z(`Clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`polyline`, { points: `12 6 12 12 16 14`, key: `68esgv` }],
  ]),
  Wn = z(`Globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` }],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  Gn = z(`GraduationCap`, [
    [
      `path`,
      {
        d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
        key: `j76jl0`,
      },
    ],
    [`path`, { d: `M22 10v6`, key: `1lu8f3` }],
    [`path`, { d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`, key: `1r8lef` }],
  ]),
  Kn = z(`Heart`, [
    [
      `path`,
      {
        d: `M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`,
        key: `c3ymky`,
      },
    ],
  ]),
  qn = z(`History`, [
    [`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` }],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
    [`path`, { d: `M12 7v5l4 2`, key: `1fdv2h` }],
  ]),
  Jn = z(`House`, [
    [`path`, { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` }],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `1d0kgt`,
      },
    ],
  ]),
  Yn = z(`Link2`, [
    [`path`, { d: `M9 17H7A5 5 0 0 1 7 7h2`, key: `8i5ue5` }],
    [`path`, { d: `M15 7h2a5 5 0 1 1 0 10h-2`, key: `1b9ql8` }],
    [`line`, { x1: `8`, x2: `16`, y1: `12`, y2: `12`, key: `1jonct` }],
  ]),
  Xn = z(`MessageCircle`, [[`path`, { d: `M7.9 20A9 9 0 1 0 4 16.1L2 22Z`, key: `vv11sd` }]]),
  Zn = z(`MessageSquare`, [
    [`path`, { d: `M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`, key: `1lielz` }],
  ]),
  Qn = z(`Palette`, [
    [`circle`, { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` }],
    [`circle`, { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` }],
    [`circle`, { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` }],
    [`circle`, { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` }],
    [
      `path`,
      {
        d: `M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z`,
        key: `12rzf8`,
      },
    ],
  ]),
  $n = z(`Plane`, [
    [
      `path`,
      {
        d: `M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`,
        key: `1v9wt8`,
      },
    ],
  ]),
  er = z(`QrCode`, [
    [`rect`, { width: `5`, height: `5`, x: `3`, y: `3`, rx: `1`, key: `1tu5fj` }],
    [`rect`, { width: `5`, height: `5`, x: `16`, y: `3`, rx: `1`, key: `1v8r4q` }],
    [`rect`, { width: `5`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `1x03jg` }],
    [`path`, { d: `M21 16h-3a2 2 0 0 0-2 2v3`, key: `177gqh` }],
    [`path`, { d: `M21 21v.01`, key: `ents32` }],
    [`path`, { d: `M12 7v3a2 2 0 0 1-2 2H7`, key: `8crl2c` }],
    [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
    [`path`, { d: `M12 3h.01`, key: `n36tog` }],
    [`path`, { d: `M12 16v.01`, key: `133mhm` }],
    [`path`, { d: `M16 12h1`, key: `1slzba` }],
    [`path`, { d: `M21 12v.01`, key: `1lwtk9` }],
    [`path`, { d: `M12 21v-1`, key: `1880an` }],
  ]),
  tr = z(`ScanText`, [
    [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
    [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
    [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
    [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
    [`path`, { d: `M7 8h8`, key: `1jbsf9` }],
    [`path`, { d: `M7 12h10`, key: `b7w52i` }],
    [`path`, { d: `M7 16h6`, key: `1vyc9m` }],
  ]),
  nr = z(`Share2`, [
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
    [`line`, { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` }],
    [`line`, { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` }],
  ]),
  rr = z(`Shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  ir = z(`ShoppingBag`, [
    [`path`, { d: `M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`, key: `hou9p0` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
  ]),
  ar = z(`ShoppingCart`, [
    [`circle`, { cx: `8`, cy: `21`, r: `1`, key: `jimo8o` }],
    [`circle`, { cx: `19`, cy: `21`, r: `1`, key: `13723u` }],
    [
      `path`,
      {
        d: `M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,
        key: `9zh506`,
      },
    ],
  ]),
  or = z(`Smartphone`, [
    [`rect`, { width: `14`, height: `20`, x: `5`, y: `2`, rx: `2`, ry: `2`, key: `1yt0o3` }],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
  ]),
  sr = z(`Truck`, [
    [`path`, { d: `M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`, key: `wrbu53` }],
    [`path`, { d: `M15 18H9`, key: `1lyqi6` }],
    [
      `path`,
      {
        d: `M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,
        key: `lysw3i`,
      },
    ],
    [`circle`, { cx: `17`, cy: `18`, r: `2`, key: `332jqn` }],
    [`circle`, { cx: `7`, cy: `18`, r: `2`, key: `19iecd` }],
  ]),
  cr = z(`UserPlus`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
    [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }],
  ]),
  lr = z(`User`, [
    [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
    [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
  ]),
  ur = z(`Users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`path`, { d: `M16 3.13a4 4 0 0 1 0 7.75`, key: `1da9ce` }],
  ]),
  dr = z(`X`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  fr = z(`Zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  pr = `-`,
  mr = (e) => {
    let t = vr(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        let n = e.split(pr);
        return (n[0] === `` && n.length !== 1 && n.shift(), hr(n, t) || _r(e));
      },
      getConflictingClassGroupIds: (e, t) => {
        let i = n[e] || [];
        return t && r[e] ? [...i, ...r[e]] : i;
      },
    };
  },
  hr = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    let n = e[0],
      r = t.nextPart.get(n),
      i = r ? hr(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    let a = e.join(pr);
    return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
  },
  gr = /^\[(.+)\]$/,
  _r = (e) => {
    if (gr.test(e)) {
      let t = gr.exec(e)[1],
        n = t?.substring(0, t.indexOf(`:`));
      if (n) return `arbitrary..` + n;
    }
  },
  vr = (e) => {
    let { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Sr(Object.entries(e.classGroups), n).forEach(([e, n]) => {
        yr(n, r, e, t);
      }),
      r
    );
  },
  yr = (e, t, n, r) => {
    e.forEach((e) => {
      if (typeof e == `string`) {
        let r = e === `` ? t : br(t, e);
        r.classGroupId = n;
        return;
      }
      if (typeof e == `function`) {
        if (xr(e)) {
          yr(e(r), t, n, r);
          return;
        }
        t.validators.push({ validator: e, classGroupId: n });
        return;
      }
      Object.entries(e).forEach(([e, i]) => {
        yr(i, br(t, e), n, r);
      });
    });
  },
  br = (e, t) => {
    let n = e;
    return (
      t.split(pr).forEach((e) => {
        (n.nextPart.has(e) || n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(e)));
      }),
      n
    );
  },
  xr = (e) => e.isThemeGetter,
  Sr = (e, t) =>
    t
      ? e.map(([e, n]) => [
          e,
          n.map((e) =>
            typeof e == `string`
              ? t + e
              : typeof e == `object`
                ? Object.fromEntries(Object.entries(e).map(([e, n]) => [t + e, n]))
                : e
          ),
        ])
      : e,
  Cr = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map(),
      i = (i, a) => {
        (n.set(i, a), t++, t > e && ((t = 0), (r = n), (n = new Map())));
      };
    return {
      get(e) {
        let t = n.get(e);
        if (t !== void 0) return t;
        if ((t = r.get(e)) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        n.has(e) ? n.set(e, t) : i(e, t);
      },
    };
  },
  wr = `!`,
  Tr = (e) => {
    let { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      a = t.length,
      o = (e) => {
        let n = [],
          o = 0,
          s = 0,
          c;
        for (let l = 0; l < e.length; l++) {
          let u = e[l];
          if (o === 0) {
            if (u === i && (r || e.slice(l, l + a) === t)) {
              (n.push(e.slice(s, l)), (s = l + a));
              continue;
            }
            if (u === `/`) {
              c = l;
              continue;
            }
          }
          u === `[` ? o++ : u === `]` && o--;
        }
        let l = n.length === 0 ? e : e.substring(s),
          u = l.startsWith(wr);
        return {
          modifiers: n,
          hasImportantModifier: u,
          baseClassName: u ? l.substring(1) : l,
          maybePostfixModifierPosition: c && c > s ? c - s : void 0,
        };
      };
    return n ? (e) => n({ className: e, parseClassName: o }) : o;
  },
  Er = (e) => {
    if (e.length <= 1) return e;
    let t = [],
      n = [];
    return (
      e.forEach((e) => {
        e[0] === `[` ? (t.push(...n.sort(), e), (n = [])) : n.push(e);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Dr = (e) => ({ cache: Cr(e.cacheSize), parseClassName: Tr(e), ...mr(e) }),
  Or = /\s+/,
  kr = (e, t) => {
    let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t,
      a = [],
      o = e.trim().split(Or),
      s = ``;
    for (let e = o.length - 1; e >= 0; --e) {
      let t = o[e],
        {
          modifiers: c,
          hasImportantModifier: l,
          baseClassName: u,
          maybePostfixModifierPosition: d,
        } = n(t),
        f = !!d,
        p = r(f ? u.substring(0, d) : u);
      if (!p) {
        if (!f) {
          s = t + (s.length > 0 ? ` ` + s : s);
          continue;
        }
        if (((p = r(u)), !p)) {
          s = t + (s.length > 0 ? ` ` + s : s);
          continue;
        }
        f = !1;
      }
      let m = Er(c).join(`:`),
        h = l ? m + wr : m,
        g = h + p;
      if (a.includes(g)) continue;
      a.push(g);
      let _ = i(p, f);
      for (let e = 0; e < _.length; ++e) {
        let t = _[e];
        a.push(h + t);
      }
      s = t + (s.length > 0 ? ` ` + s : s);
    }
    return s;
  };
function Ar() {
  let e = 0,
    t,
    n,
    r = ``;
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = jr(t)) && (r && (r += ` `), (r += n));
  return r;
}
var jr = (e) => {
  if (typeof e == `string`) return e;
  let t,
    n = ``;
  for (let r = 0; r < e.length; r++) e[r] && (t = jr(e[r])) && (n && (n += ` `), (n += t));
  return n;
};
function Mr(e, ...t) {
  let n,
    r,
    i,
    a = o;
  function o(o) {
    return (
      (n = Dr(t.reduce((e, t) => t(e), e()))),
      (r = n.cache.get),
      (i = n.cache.set),
      (a = s),
      s(o)
    );
  }
  function s(e) {
    let t = r(e);
    if (t) return t;
    let a = kr(e, n);
    return (i(e, a), a);
  }
  return function () {
    return a(Ar.apply(null, arguments));
  };
}
var B = (e) => {
    let t = (t) => t[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  Nr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Pr = /^\d+\/\d+$/,
  Fr = new Set([`px`, `full`, `screen`]),
  Ir = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Lr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Rr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  zr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Br =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Vr = (e) => Ur(e) || Fr.has(e) || Pr.test(e),
  Hr = (e) => ti(e, `length`, ni),
  Ur = (e) => !!e && !Number.isNaN(Number(e)),
  Wr = (e) => ti(e, `number`, Ur),
  Gr = (e) => !!e && Number.isInteger(Number(e)),
  Kr = (e) => e.endsWith(`%`) && Ur(e.slice(0, -1)),
  V = (e) => Nr.test(e),
  qr = (e) => Ir.test(e),
  Jr = new Set([`length`, `size`, `percentage`]),
  Yr = (e) => ti(e, Jr, ri),
  Xr = (e) => ti(e, `position`, ri),
  Zr = new Set([`image`, `url`]),
  Qr = (e) => ti(e, Zr, ai),
  $r = (e) => ti(e, ``, ii),
  ei = () => !0,
  ti = (e, t, n) => {
    let r = Nr.exec(e);
    return r ? (r[1] ? (typeof t == `string` ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
  },
  ni = (e) => Lr.test(e) && !Rr.test(e),
  ri = () => !1,
  ii = (e) => zr.test(e),
  ai = (e) => Br.test(e),
  oi = Mr(() => {
    let e = B(`colors`),
      t = B(`spacing`),
      n = B(`blur`),
      r = B(`brightness`),
      i = B(`borderColor`),
      a = B(`borderRadius`),
      o = B(`borderSpacing`),
      s = B(`borderWidth`),
      c = B(`contrast`),
      l = B(`grayscale`),
      u = B(`hueRotate`),
      d = B(`invert`),
      f = B(`gap`),
      p = B(`gradientColorStops`),
      m = B(`gradientColorStopPositions`),
      h = B(`inset`),
      g = B(`margin`),
      _ = B(`opacity`),
      v = B(`padding`),
      y = B(`saturate`),
      b = B(`scale`),
      x = B(`sepia`),
      S = B(`skew`),
      C = B(`space`),
      w = B(`translate`),
      T = () => [`auto`, `contain`, `none`],
      E = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      D = () => [`auto`, V, t],
      O = () => [V, t],
      k = () => [``, Vr, Hr],
      A = () => [`auto`, Ur, V],
      j = () => [
        `bottom`,
        `center`,
        `left`,
        `left-bottom`,
        `left-top`,
        `right`,
        `right-bottom`,
        `right-top`,
        `top`,
      ],
      M = () => [`solid`, `dashed`, `dotted`, `double`, `none`],
      ee = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      N = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`],
      P = () => [``, `0`, V],
      te = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
      ne = () => [Ur, V];
    return {
      cacheSize: 500,
      separator: `:`,
      theme: {
        colors: [ei],
        spacing: [Vr, Hr],
        blur: [`none`, ``, qr, V],
        brightness: ne(),
        borderColor: [e],
        borderRadius: [`none`, ``, `full`, qr, V],
        borderSpacing: O(),
        borderWidth: k(),
        contrast: ne(),
        grayscale: P(),
        hueRotate: ne(),
        invert: P(),
        gap: O(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Kr, Hr],
        inset: D(),
        margin: D(),
        opacity: ne(),
        padding: O(),
        saturate: ne(),
        scale: ne(),
        sepia: P(),
        skew: ne(),
        space: O(),
        translate: O(),
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, `video`, V] }],
        container: [`container`],
        columns: [{ columns: [qr] }],
        'break-after': [{ 'break-after': te() }],
        'break-before': [{ 'break-before': te() }],
        'break-inside': [{ 'break-inside': [`auto`, `avoid`, `avoid-page`, `avoid-column`] }],
        'box-decoration': [{ 'box-decoration': [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        'object-fit': [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }],
        'object-position': [{ object: [...j(), V] }],
        overflow: [{ overflow: E() }],
        'overflow-x': [{ 'overflow-x': E() }],
        'overflow-y': [{ 'overflow-y': E() }],
        overscroll: [{ overscroll: T() }],
        'overscroll-x': [{ 'overscroll-x': T() }],
        'overscroll-y': [{ 'overscroll-y': T() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: [h] }],
        'inset-x': [{ 'inset-x': [h] }],
        'inset-y': [{ 'inset-y': [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [`auto`, Gr, V] }],
        basis: [{ basis: D() }],
        'flex-direction': [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }],
        'flex-wrap': [{ flex: [`wrap`, `wrap-reverse`, `nowrap`] }],
        flex: [{ flex: [`1`, `auto`, `initial`, `none`, V] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: [`first`, `last`, `none`, Gr, V] }],
        'grid-cols': [{ 'grid-cols': [ei] }],
        'col-start-end': [{ col: [`auto`, { span: [`full`, Gr, V] }, V] }],
        'col-start': [{ 'col-start': A() }],
        'col-end': [{ 'col-end': A() }],
        'grid-rows': [{ 'grid-rows': [ei] }],
        'row-start-end': [{ row: [`auto`, { span: [Gr, V] }, V] }],
        'row-start': [{ 'row-start': A() }],
        'row-end': [{ 'row-end': A() }],
        'grid-flow': [{ 'grid-flow': [`row`, `col`, `dense`, `row-dense`, `col-dense`] }],
        'auto-cols': [{ 'auto-cols': [`auto`, `min`, `max`, `fr`, V] }],
        'auto-rows': [{ 'auto-rows': [`auto`, `min`, `max`, `fr`, V] }],
        gap: [{ gap: [f] }],
        'gap-x': [{ 'gap-x': [f] }],
        'gap-y': [{ 'gap-y': [f] }],
        'justify-content': [{ justify: [`normal`, ...N()] }],
        'justify-items': [{ 'justify-items': [`start`, `end`, `center`, `stretch`] }],
        'justify-self': [{ 'justify-self': [`auto`, `start`, `end`, `center`, `stretch`] }],
        'align-content': [{ content: [`normal`, ...N(), `baseline`] }],
        'align-items': [{ items: [`start`, `end`, `center`, `baseline`, `stretch`] }],
        'align-self': [{ self: [`auto`, `start`, `end`, `center`, `stretch`, `baseline`] }],
        'place-content': [{ 'place-content': [...N(), `baseline`] }],
        'place-items': [{ 'place-items': [`start`, `end`, `center`, `baseline`, `stretch`] }],
        'place-self': [{ 'place-self': [`auto`, `start`, `end`, `center`, `stretch`] }],
        p: [{ p: [v] }],
        px: [{ px: [v] }],
        py: [{ py: [v] }],
        ps: [{ ps: [v] }],
        pe: [{ pe: [v] }],
        pt: [{ pt: [v] }],
        pr: [{ pr: [v] }],
        pb: [{ pb: [v] }],
        pl: [{ pl: [v] }],
        m: [{ m: [g] }],
        mx: [{ mx: [g] }],
        my: [{ my: [g] }],
        ms: [{ ms: [g] }],
        me: [{ me: [g] }],
        mt: [{ mt: [g] }],
        mr: [{ mr: [g] }],
        mb: [{ mb: [g] }],
        ml: [{ ml: [g] }],
        'space-x': [{ 'space-x': [C] }],
        'space-x-reverse': [`space-x-reverse`],
        'space-y': [{ 'space-y': [C] }],
        'space-y-reverse': [`space-y-reverse`],
        w: [{ w: [`auto`, `min`, `max`, `fit`, `svw`, `lvw`, `dvw`, V, t] }],
        'min-w': [{ 'min-w': [V, t, `min`, `max`, `fit`] }],
        'max-w': [
          { 'max-w': [V, t, `none`, `full`, `min`, `max`, `fit`, `prose`, { screen: [qr] }, qr] },
        ],
        h: [{ h: [V, t, `auto`, `min`, `max`, `fit`, `svh`, `lvh`, `dvh`] }],
        'min-h': [{ 'min-h': [V, t, `min`, `max`, `fit`, `svh`, `lvh`, `dvh`] }],
        'max-h': [{ 'max-h': [V, t, `min`, `max`, `fit`, `svh`, `lvh`, `dvh`] }],
        size: [{ size: [V, t, `auto`, `min`, `max`, `fit`] }],
        'font-size': [{ text: [`base`, qr, Hr] }],
        'font-smoothing': [`antialiased`, `subpixel-antialiased`],
        'font-style': [`italic`, `not-italic`],
        'font-weight': [
          {
            font: [
              `thin`,
              `extralight`,
              `light`,
              `normal`,
              `medium`,
              `semibold`,
              `bold`,
              `extrabold`,
              `black`,
              Wr,
            ],
          },
        ],
        'font-family': [{ font: [ei] }],
        'fvn-normal': [`normal-nums`],
        'fvn-ordinal': [`ordinal`],
        'fvn-slashed-zero': [`slashed-zero`],
        'fvn-figure': [`lining-nums`, `oldstyle-nums`],
        'fvn-spacing': [`proportional-nums`, `tabular-nums`],
        'fvn-fraction': [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`, V] }],
        'line-clamp': [{ 'line-clamp': [`none`, Ur, Wr] }],
        leading: [{ leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`, Vr, V] }],
        'list-image': [{ 'list-image': [`none`, V] }],
        'list-style-type': [{ list: [`none`, `disc`, `decimal`, V] }],
        'list-style-position': [{ list: [`inside`, `outside`] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [_] }],
        'text-alignment': [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [_] }],
        'text-decoration': [`underline`, `overline`, `line-through`, `no-underline`],
        'text-decoration-style': [{ decoration: [...M(), `wavy`] }],
        'text-decoration-thickness': [{ decoration: [`auto`, `from-font`, Vr, Hr] }],
        'underline-offset': [{ 'underline-offset': [`auto`, Vr, V] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
        'text-overflow': [`truncate`, `text-ellipsis`, `text-clip`],
        'text-wrap': [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: O() }],
        'vertical-align': [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              V,
            ],
          },
        ],
        whitespace: [
          { whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, V] }],
        'bg-attachment': [{ bg: [`fixed`, `local`, `scroll`] }],
        'bg-clip': [{ 'bg-clip': [`border`, `padding`, `content`, `text`] }],
        'bg-opacity': [{ 'bg-opacity': [_] }],
        'bg-origin': [{ 'bg-origin': [`border`, `padding`, `content`] }],
        'bg-position': [{ bg: [...j(), Xr] }],
        'bg-repeat': [{ bg: [`no-repeat`, { repeat: [``, `x`, `y`, `round`, `space`] }] }],
        'bg-size': [{ bg: [`auto`, `cover`, `contain`, Yr] }],
        'bg-image': [
          { bg: [`none`, { 'gradient-to': [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, Qr] },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [m] }],
        'gradient-via-pos': [{ via: [m] }],
        'gradient-to-pos': [{ to: [m] }],
        'gradient-from': [{ from: [p] }],
        'gradient-via': [{ via: [p] }],
        'gradient-to': [{ to: [p] }],
        rounded: [{ rounded: [a] }],
        'rounded-s': [{ 'rounded-s': [a] }],
        'rounded-e': [{ 'rounded-e': [a] }],
        'rounded-t': [{ 'rounded-t': [a] }],
        'rounded-r': [{ 'rounded-r': [a] }],
        'rounded-b': [{ 'rounded-b': [a] }],
        'rounded-l': [{ 'rounded-l': [a] }],
        'rounded-ss': [{ 'rounded-ss': [a] }],
        'rounded-se': [{ 'rounded-se': [a] }],
        'rounded-ee': [{ 'rounded-ee': [a] }],
        'rounded-es': [{ 'rounded-es': [a] }],
        'rounded-tl': [{ 'rounded-tl': [a] }],
        'rounded-tr': [{ 'rounded-tr': [a] }],
        'rounded-br': [{ 'rounded-br': [a] }],
        'rounded-bl': [{ 'rounded-bl': [a] }],
        'border-w': [{ border: [s] }],
        'border-w-x': [{ 'border-x': [s] }],
        'border-w-y': [{ 'border-y': [s] }],
        'border-w-s': [{ 'border-s': [s] }],
        'border-w-e': [{ 'border-e': [s] }],
        'border-w-t': [{ 'border-t': [s] }],
        'border-w-r': [{ 'border-r': [s] }],
        'border-w-b': [{ 'border-b': [s] }],
        'border-w-l': [{ 'border-l': [s] }],
        'border-opacity': [{ 'border-opacity': [_] }],
        'border-style': [{ border: [...M(), `hidden`] }],
        'divide-x': [{ 'divide-x': [s] }],
        'divide-x-reverse': [`divide-x-reverse`],
        'divide-y': [{ 'divide-y': [s] }],
        'divide-y-reverse': [`divide-y-reverse`],
        'divide-opacity': [{ 'divide-opacity': [_] }],
        'divide-style': [{ divide: M() }],
        'border-color': [{ border: [i] }],
        'border-color-x': [{ 'border-x': [i] }],
        'border-color-y': [{ 'border-y': [i] }],
        'border-color-s': [{ 'border-s': [i] }],
        'border-color-e': [{ 'border-e': [i] }],
        'border-color-t': [{ 'border-t': [i] }],
        'border-color-r': [{ 'border-r': [i] }],
        'border-color-b': [{ 'border-b': [i] }],
        'border-color-l': [{ 'border-l': [i] }],
        'divide-color': [{ divide: [i] }],
        'outline-style': [{ outline: [``, ...M()] }],
        'outline-offset': [{ 'outline-offset': [Vr, V] }],
        'outline-w': [{ outline: [Vr, Hr] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: k() }],
        'ring-w-inset': [`ring-inset`],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [_] }],
        'ring-offset-w': [{ 'ring-offset': [Vr, Hr] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: [``, `inner`, `none`, qr, $r] }],
        'shadow-color': [{ shadow: [ei] }],
        opacity: [{ opacity: [_] }],
        'mix-blend': [{ 'mix-blend': [...ee(), `plus-lighter`, `plus-darker`] }],
        'bg-blend': [{ 'bg-blend': ee() }],
        filter: [{ filter: [``, `none`] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        'drop-shadow': [{ 'drop-shadow': [``, `none`, qr, V] }],
        grayscale: [{ grayscale: [l] }],
        'hue-rotate': [{ 'hue-rotate': [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [x] }],
        'backdrop-filter': [{ 'backdrop-filter': [``, `none`] }],
        'backdrop-blur': [{ 'backdrop-blur': [n] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [l] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [u] }],
        'backdrop-invert': [{ 'backdrop-invert': [d] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [_] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [y] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [x] }],
        'border-collapse': [{ border: [`collapse`, `separate`] }],
        'border-spacing': [{ 'border-spacing': [o] }],
        'border-spacing-x': [{ 'border-spacing-x': [o] }],
        'border-spacing-y': [{ 'border-spacing-y': [o] }],
        'table-layout': [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          { transition: [`none`, `all`, ``, `colors`, `opacity`, `shadow`, `transform`, V] },
        ],
        duration: [{ duration: ne() }],
        ease: [{ ease: [`linear`, `in`, `out`, `in-out`, V] }],
        delay: [{ delay: ne() }],
        animate: [{ animate: [`none`, `spin`, `ping`, `pulse`, `bounce`, V] }],
        transform: [{ transform: [``, `gpu`, `none`] }],
        scale: [{ scale: [b] }],
        'scale-x': [{ 'scale-x': [b] }],
        'scale-y': [{ 'scale-y': [b] }],
        rotate: [{ rotate: [Gr, V] }],
        'translate-x': [{ 'translate-x': [w] }],
        'translate-y': [{ 'translate-y': [w] }],
        'skew-x': [{ 'skew-x': [S] }],
        'skew-y': [{ 'skew-y': [S] }],
        'transform-origin': [
          {
            origin: [
              `center`,
              `top`,
              `top-right`,
              `right`,
              `bottom-right`,
              `bottom`,
              `bottom-left`,
              `left`,
              `top-left`,
              V,
            ],
          },
        ],
        accent: [{ accent: [`auto`, e] }],
        appearance: [{ appearance: [`none`, `auto`] }],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              V,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': [`none`, `auto`] }],
        resize: [{ resize: [`none`, `y`, `x`, ``] }],
        'scroll-behavior': [{ scroll: [`auto`, `smooth`] }],
        'scroll-m': [{ 'scroll-m': O() }],
        'scroll-mx': [{ 'scroll-mx': O() }],
        'scroll-my': [{ 'scroll-my': O() }],
        'scroll-ms': [{ 'scroll-ms': O() }],
        'scroll-me': [{ 'scroll-me': O() }],
        'scroll-mt': [{ 'scroll-mt': O() }],
        'scroll-mr': [{ 'scroll-mr': O() }],
        'scroll-mb': [{ 'scroll-mb': O() }],
        'scroll-ml': [{ 'scroll-ml': O() }],
        'scroll-p': [{ 'scroll-p': O() }],
        'scroll-px': [{ 'scroll-px': O() }],
        'scroll-py': [{ 'scroll-py': O() }],
        'scroll-ps': [{ 'scroll-ps': O() }],
        'scroll-pe': [{ 'scroll-pe': O() }],
        'scroll-pt': [{ 'scroll-pt': O() }],
        'scroll-pr': [{ 'scroll-pr': O() }],
        'scroll-pb': [{ 'scroll-pb': O() }],
        'scroll-pl': [{ 'scroll-pl': O() }],
        'snap-align': [{ snap: [`start`, `end`, `center`, `align-none`] }],
        'snap-stop': [{ snap: [`normal`, `always`] }],
        'snap-type': [{ snap: [`none`, `x`, `y`, `both`] }],
        'snap-strictness': [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        'touch-x': [{ 'touch-pan': [`x`, `left`, `right`] }],
        'touch-y': [{ 'touch-pan': [`y`, `up`, `down`] }],
        'touch-pz': [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        'will-change': [{ 'will-change': [`auto`, `scroll`, `contents`, `transform`, V] }],
        fill: [{ fill: [e, `none`] }],
        'stroke-w': [{ stroke: [Vr, Hr, Wr] }],
        stroke: [{ stroke: [e, `none`] }],
        sr: [`sr-only`, `not-sr-only`],
        'forced-color-adjust': [{ 'forced-color-adjust': [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [`inset-x`, `inset-y`, `start`, `end`, `top`, `right`, `bottom`, `left`],
        'inset-x': [`right`, `left`],
        'inset-y': [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        'font-size': [`leading`],
        'fvn-normal': [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        'fvn-ordinal': [`fvn-normal`],
        'fvn-slashed-zero': [`fvn-normal`],
        'fvn-figure': [`fvn-normal`],
        'fvn-spacing': [`fvn-normal`],
        'fvn-fraction': [`fvn-normal`],
        'line-clamp': [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        'rounded-s': [`rounded-ss`, `rounded-es`],
        'rounded-e': [`rounded-se`, `rounded-ee`],
        'rounded-t': [`rounded-tl`, `rounded-tr`],
        'rounded-r': [`rounded-tr`, `rounded-br`],
        'rounded-b': [`rounded-br`, `rounded-bl`],
        'rounded-l': [`rounded-tl`, `rounded-bl`],
        'border-spacing': [`border-spacing-x`, `border-spacing-y`],
        'border-w': [
          `border-w-s`,
          `border-w-e`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        'border-w-x': [`border-w-r`, `border-w-l`],
        'border-w-y': [`border-w-t`, `border-w-b`],
        'border-color': [
          `border-color-s`,
          `border-color-e`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        'border-color-x': [`border-color-r`, `border-color-l`],
        'border-color-y': [`border-color-t`, `border-color-b`],
        'scroll-m': [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        'scroll-mx': [`scroll-mr`, `scroll-ml`],
        'scroll-my': [`scroll-mt`, `scroll-mb`],
        'scroll-p': [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        'scroll-px': [`scroll-pr`, `scroll-pl`],
        'scroll-py': [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        'touch-x': [`touch`],
        'touch-y': [`touch`],
        'touch-pz': [`touch`],
      },
      conflictingClassGroupModifiers: { 'font-size': [`leading`] },
    };
  });
function H(...e) {
  return oi(kn(e));
}
var si = xn,
  ci = y.forwardRef(({ className: e, ...t }, n) =>
    (0, I.jsx)(Sn, {
      ref: n,
      className: H(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e
      ),
      ...t,
    })
  );
ci.displayName = Sn.displayName;
var li = Mn(
    `group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
    {
      variants: {
        variant: {
          default: `border bg-background text-foreground`,
          destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    }
  ),
  ui = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, I.jsx)(Cn, { ref: r, className: H(li({ variant: t }), e), ...n })
  );
ui.displayName = Cn.displayName;
var di = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(En, {
    ref: n,
    className: H(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50`,
      e
    ),
    ...t,
  })
);
di.displayName = En.displayName;
var fi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(Dn, {
    ref: n,
    className: H(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e
    ),
    'toast-close': ``,
    ...t,
    children: (0, I.jsx)(dr, { className: `h-4 w-4` }),
  })
);
fi.displayName = Dn.displayName;
var pi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(wn, { ref: n, className: H(`text-sm font-semibold`, e), ...t })
);
pi.displayName = wn.displayName;
var mi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(Tn, { ref: n, className: H(`text-sm opacity-90`, e), ...t })
);
mi.displayName = Tn.displayName;
function hi() {
  let { toasts: e } = Ne();
  return (0, I.jsxs)(si, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, I.jsxs)(
          ui,
          {
            ...i,
            children: [
              (0, I.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t && (0, I.jsx)(pi, { children: t }),
                  n && (0, I.jsx)(mi, { children: n }),
                ],
              }),
              r,
              (0, I.jsx)(fi, {}),
            ],
          },
          e
        );
      }),
      (0, I.jsx)(ci, {}),
    ],
  });
}
var gi = y.useId || (() => void 0),
  _i = 0;
function vi(e) {
  let [t, n] = y.useState(gi());
  return (
    _t(() => {
      e || n((e) => e ?? String(_i++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
var yi = [`top`, `right`, `bottom`, `left`],
  bi = Math.min,
  xi = Math.max,
  Si = Math.round,
  Ci = Math.floor,
  wi = (e) => ({ x: e, y: e }),
  Ti = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Ei(e, t, n) {
  return xi(e, bi(t, n));
}
function Di(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Oi(e) {
  return e.split(`-`)[0];
}
function ki(e) {
  return e.split(`-`)[1];
}
function Ai(e) {
  return e === `x` ? `y` : `x`;
}
function ji(e) {
  return e === `y` ? `height` : `width`;
}
function Mi(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function Ni(e) {
  return Ai(Mi(e));
}
function Pi(e, t, n) {
  n === void 0 && (n = !1);
  let r = ki(e),
    i = Ni(e),
    a = ji(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = Ui(o)), [o, Ui(o)]);
}
function Fi(e) {
  let t = Ui(e);
  return [Ii(e), t, Ii(t)];
}
function Ii(e) {
  return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`);
}
var Li = [`left`, `right`],
  Ri = [`right`, `left`],
  zi = [`top`, `bottom`],
  Bi = [`bottom`, `top`];
function Vi(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? Ri : Li) : t ? Li : Ri;
    case `left`:
    case `right`:
      return t ? zi : Bi;
    default:
      return [];
  }
}
function Hi(e, t, n, r) {
  let i = ki(e),
    a = Vi(Oi(e), n === `start`, r);
  return (i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Ii)))), a);
}
function Ui(e) {
  let t = Oi(e);
  return Ti[t] + e.slice(t.length);
}
function Wi(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Gi(e) {
  return typeof e == `number` ? { top: e, right: e, bottom: e, left: e } : Wi(e);
}
function U(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
function W(e, t, n) {
  let { reference: r, floating: i } = e,
    a = Mi(t),
    o = Ni(t),
    s = ji(o),
    c = Oi(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p;
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height };
      break;
    case `bottom`:
      p = { x: u, y: r.y + r.height };
      break;
    case `right`:
      p = { x: r.x + r.width, y: d };
      break;
    case `left`:
      p = { x: r.x - i.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (ki(t)) {
    case `start`:
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case `end`:
      p[o] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function Ki(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = Di(t, e),
    p = Gi(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = U(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      })
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = U(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g
    );
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  };
}
var qi = 50,
  Ji = async (e, t, n) => {
    let { placement: r = `bottom`, strategy: i = `absolute`, middleware: a = [], platform: o } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: Ki },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = W(l, r, c),
      f = r,
      p = 0,
      m = {};
    for (let n = 0; n < a.length; n++) {
      let h = a[n];
      if (!h) continue;
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        });
      ((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < qi &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({ reference: e, floating: t, strategy: i })
                  : x.rects),
            ({ x: u, y: d } = W(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  Yi = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t,
        { element: l, padding: u = 0 } = Di(e, t) || {};
      if (l == null) return {};
      let d = Gi(u),
        f = { x: n, y: r },
        p = Ni(i),
        m = ji(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (C = s.floating[y] || a.floating[m]);
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = bi(d[_], T),
        D = bi(d[v], T),
        O = E,
        k = C - h[m] - D,
        A = C / 2 - h[m] / 2 + w,
        j = Ei(O, A, k),
        M =
          !c.arrow &&
          ki(i) != null &&
          A !== j &&
          a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0,
        ee = M ? (A < O ? A - O : A - k) : 0;
      return {
        [p]: f[p] + ee,
        data: { [p]: j, centerOffset: A - j - ee, ...(M && { alignmentOffset: ee }) },
        reset: M,
      };
    },
  }),
  Xi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n;
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = Di(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = Oi(r),
            _ = Mi(o),
            v = Oi(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [Ui(o)] : Fi(o)),
            x = p !== `none`;
          !d && x && b.push(...Hi(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = Pi(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (((T = [...T, { placement: r, overflows: w }]), !w.every((e) => e <= 0))) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== Mi(t)) ||
                T.every((e) => (Mi(e.placement) === _ ? e.overflows[0] > 0 : !0)))
            )
              return { data: { index: e, overflows: T }, reset: { placement: t } };
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1]
            )[0]?.placement;
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = Mi(e.placement);
                      return t === _ || t === `y`;
                    }
                    return !0;
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0];
                  e && (n = e);
                  break;
                }
                case `initialPlacement`:
                  n = o;
                  break;
              }
            if (r !== n) return { reset: { placement: n } };
          }
          return {};
        },
      }
    );
  };
function Zi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Qi(e) {
  return yi.some((t) => e[t] >= 0);
}
var $i = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = Di(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = Zi(
                await r.detectOverflow(t, { ...a, elementContext: `reference` }),
                n.reference
              );
              return { data: { referenceHiddenOffsets: e, referenceHidden: Qi(e) } };
            }
            case `escaped`: {
              let e = Zi(await r.detectOverflow(t, { ...a, altBoundary: !0 }), n.floating);
              return { data: { escapedOffsets: e, escaped: Qi(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  ea = new Set([`left`, `top`]);
async function ta(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Oi(n),
    s = ki(n),
    c = Mi(n) === `y`,
    l = ea.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = Di(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  );
}
var na = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await ta(t, e);
          return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  ra = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e;
                  return { x: t, y: n };
                },
              },
              ...l
            } = Di(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = Mi(Oi(i)),
            p = Ai(f),
            m = u[p],
            h = u[f];
          if (o) {
            let e = p === `y` ? `top` : `left`,
              t = p === `y` ? `bottom` : `right`,
              n = m + d[e],
              r = m - d[t];
            m = Ei(n, m, r);
          }
          if (s) {
            let e = f === `y` ? `top` : `left`,
              t = f === `y` ? `bottom` : `right`,
              n = h + d[e],
              r = h - d[t];
            h = Ei(n, h, r);
          }
          let g = c.fn({ ...t, [p]: m, [f]: h });
          return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [p]: o, [f]: s } } };
        },
      }
    );
  },
  ia = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Di(e, t),
            u = { x: n, y: r },
            d = Mi(i),
            f = Ai(d),
            p = u[f],
            m = u[d],
            h = Di(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...h };
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis;
            p < t ? (p = t) : p > n && (p = n);
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = ea.has(Oi(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0);
            m < n ? (m = n) : m > r && (m = r);
          }
          return { [f]: p, [d]: m };
        },
      }
    );
  },
  aa = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          var n, r;
          let { placement: i, rects: a, platform: o, elements: s } = t,
            { apply: c = () => {}, ...l } = Di(e, t),
            u = await o.detectOverflow(t, l),
            d = Oi(i),
            f = ki(i),
            p = Mi(i) === `y`,
            { width: m, height: h } = a.floating,
            g,
            _;
          d === `top` || d === `bottom`
            ? ((g = d),
              (_ =
                f === ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating))) ? `start` : `end`)
                  ? `left`
                  : `right`))
            : ((_ = d), (g = f === `end` ? `top` : `bottom`));
          let v = h - u.top - u.bottom,
            y = m - u.left - u.right,
            b = bi(h - u[g], v),
            x = bi(m - u[_], y),
            S = !t.middlewareData.shift,
            C = b,
            w = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = v),
            S && !f)
          ) {
            let e = xi(u.left, 0),
              t = xi(u.right, 0),
              n = xi(u.top, 0),
              r = xi(u.bottom, 0);
            p
              ? (w = m - 2 * (e !== 0 || t !== 0 ? e + t : xi(u.left, u.right)))
              : (C = h - 2 * (n !== 0 || r !== 0 ? n + r : xi(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: w, availableHeight: C });
          let T = await o.getDimensions(s.floating);
          return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function oa() {
  return typeof window < `u`;
}
function sa(e) {
  return ua(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function ca(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function la(e) {
  return ((ua(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function ua(e) {
  return oa() ? e instanceof Node || e instanceof ca(e).Node : !1;
}
function da(e) {
  return oa() ? e instanceof Element || e instanceof ca(e).Element : !1;
}
function fa(e) {
  return oa() ? e instanceof HTMLElement || e instanceof ca(e).HTMLElement : !1;
}
function pa(e) {
  return !oa() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof ca(e).ShadowRoot;
}
function ma(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = wa(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`;
}
function ha(e) {
  return /^(table|td|th)$/.test(sa(e));
}
function ga(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var _a = /transform|translate|scale|rotate|perspective|filter/,
  va = /paint|layout|strict|content/,
  ya = (e) => !!e && e !== `none`,
  ba;
function xa(e) {
  let t = da(e) ? wa(e) : e;
  return (
    ya(t.transform) ||
    ya(t.translate) ||
    ya(t.scale) ||
    ya(t.rotate) ||
    ya(t.perspective) ||
    (!Ca() && (ya(t.backdropFilter) || ya(t.filter))) ||
    _a.test(t.willChange || ``) ||
    va.test(t.contain || ``)
  );
}
function Sa(e) {
  let t = Ea(e);
  for (; fa(t) && !G(t); ) {
    if (xa(t)) return t;
    if (ga(t)) return null;
    t = Ea(t);
  }
  return null;
}
function Ca() {
  return (
    (ba ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`)),
    ba
  );
}
function G(e) {
  return /^(html|body|#document)$/.test(sa(e));
}
function wa(e) {
  return ca(e).getComputedStyle(e);
}
function Ta(e) {
  return da(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ea(e) {
  if (sa(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (pa(e) && e.host) || la(e);
  return pa(t) ? t.host : t;
}
function Da(e) {
  let t = Ea(e);
  return G(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : fa(t) && ma(t) ? t : Da(t);
}
function Oa(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = Da(e),
    i = r === e.ownerDocument?.body,
    a = ca(r);
  if (i) {
    let e = ka(a);
    return t.concat(a, a.visualViewport || [], ma(r) ? r : [], e && n ? Oa(e) : []);
  } else return t.concat(r, Oa(r, [], n));
}
function ka(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Aa(e) {
  let t = wa(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = fa(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = Si(n) !== a || Si(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function ja(e) {
  return da(e) ? e : e.contextElement;
}
function Ma(e) {
  let t = ja(e);
  if (!fa(t)) return wi(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Aa(t),
    o = (a ? Si(n.width) : n.width) / r,
    s = (a ? Si(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var Na = wi(0);
function Pa(e) {
  let t = ca(e);
  return !Ca() || !t.visualViewport
    ? Na
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Fa(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ca(e)) ? !1 : t);
}
function Ia(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = ja(e),
    o = wi(1);
  t && (r ? da(r) && (o = Ma(r)) : (o = Ma(e)));
  let s = Fa(a, n, r) ? Pa(a) : wi(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a) {
    let e = ca(a),
      t = r && da(r) ? ca(r) : r,
      n = e,
      i = ka(n);
    for (; i && r && t !== n; ) {
      let e = Ma(i),
        t = i.getBoundingClientRect(),
        r = wa(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = ca(i)),
        (i = ka(n)));
    }
  }
  return U({ width: u, height: d, x: c, y: l });
}
function La(e, t) {
  let n = Ta(e).scrollLeft;
  return t ? t.left + n : Ia(la(e)).left + n;
}
function Ra(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - La(e, n), y: n.top + t.scrollTop };
}
function za(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = la(r),
    s = t ? ga(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = wi(1),
    u = wi(0),
    d = fa(r);
  if ((d || (!d && !a)) && ((sa(r) !== `body` || ma(o)) && (c = Ta(r)), d)) {
    let e = Ia(r);
    ((l = Ma(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? Ra(o, c) : wi(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function Ba(e) {
  return Array.from(e.getClientRects());
}
function Va(e) {
  let t = la(e),
    n = Ta(e),
    r = e.ownerDocument.body,
    i = xi(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = xi(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    o = -n.scrollLeft + La(e),
    s = -n.scrollTop;
  return (
    wa(r).direction === `rtl` && (o += xi(t.clientWidth, r.clientWidth) - i),
    { width: i, height: a, x: o, y: s }
  );
}
var Ha = 25;
function Ua(e, t) {
  let n = ca(e),
    r = la(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    let e = Ca();
    (!e || (e && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  let l = La(r);
  if (l <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i =
        (e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= Ha && (a -= o);
  } else l <= Ha && (a += l);
  return { width: a, height: o, x: s, y: c };
}
function Wa(e, t) {
  let n = Ia(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = fa(e) ? Ma(e) : wi(1);
  return { width: e.clientWidth * a.x, height: e.clientHeight * a.y, x: i * a.x, y: r * a.y };
}
function Ga(e, t, n) {
  let r;
  if (t === `viewport`) r = Ua(e, n);
  else if (t === `document`) r = Va(la(e));
  else if (da(t)) r = Wa(t, n);
  else {
    let n = Pa(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return U(r);
}
function Ka(e, t) {
  let n = Ea(e);
  return n === t || !da(n) || G(n) ? !1 : wa(n).position === `fixed` || Ka(n, t);
}
function qa(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = Oa(e, [], !1).filter((e) => da(e) && sa(e) !== `body`),
    i = null,
    a = wa(e).position === `fixed`,
    o = a ? Ea(e) : e;
  for (; da(o) && !G(o); ) {
    let t = wa(o),
      n = xa(o);
    (!n && t.position === `fixed` && (i = null),
      (
        a
          ? !n && !i
          : (!n &&
              t.position === `static` &&
              i &&
              (i.position === `absolute` || i.position === `fixed`)) ||
            (ma(o) && !n && Ka(e, o))
      )
        ? (r = r.filter((e) => e !== o))
        : (i = t),
      (o = Ea(o)));
  }
  return (t.set(e, r), r);
}
function Ja(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [...(n === `clippingAncestors` ? (ga(t) ? [] : qa(t, this._c)) : [].concat(n)), r],
    o = Ga(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = Ga(t, a[e], i);
    ((s = xi(n.top, s)), (c = bi(n.right, c)), (l = bi(n.bottom, l)), (u = xi(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function Ya(e) {
  let { width: t, height: n } = Aa(e);
  return { width: t, height: n };
}
function Xa(e, t, n) {
  let r = fa(t),
    i = la(t),
    a = n === `fixed`,
    o = Ia(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = wi(0);
  function l() {
    c.x = La(i);
  }
  if (r || (!r && !a))
    if (((sa(t) !== `body` || ma(i)) && (s = Ta(t)), r)) {
      let e = Ia(t, !0, a, t);
      ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    } else i && l();
  a && !r && i && l();
  let u = i && !r && !a ? Ra(i, s) : wi(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height,
  };
}
function Za(e) {
  return wa(e).position === `static`;
}
function Qa(e, t) {
  if (!fa(e) || wa(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (la(e) === n && (n = n.ownerDocument.body), n);
}
function $a(e, t) {
  let n = ca(e);
  if (ga(e)) return n;
  if (!fa(e)) {
    let t = Ea(e);
    for (; t && !G(t); ) {
      if (da(t) && !Za(t)) return t;
      t = Ea(t);
    }
    return n;
  }
  let r = Qa(e, t);
  for (; r && ha(r) && Za(r); ) r = Qa(r, t);
  return r && G(r) && Za(r) && !xa(r) ? n : r || Sa(e) || n;
}
var eo = async function (e) {
  let t = this.getOffsetParent || $a,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Xa(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function to(e) {
  return wa(e).direction === `rtl`;
}
var no = {
  convertOffsetParentRelativeRectToViewportRelativeRect: za,
  getDocumentElement: la,
  getClippingRect: Ja,
  getOffsetParent: $a,
  getElementRects: eo,
  getClientRects: Ba,
  getDimensions: Ya,
  getScale: Ma,
  isElement: da,
  isRTL: to,
};
function ro(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function io(e, t) {
  let n = null,
    r,
    i = la(e);
  function a() {
    var e;
    (clearTimeout(r), (e = n) == null || e.disconnect(), (n = null));
  }
  function o(s, c) {
    (s === void 0 && (s = !1), c === void 0 && (c = 1), a());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((s || t(), !f || !p)) return;
    let m = Ci(d),
      h = Ci(i.clientWidth - (u + f)),
      g = Ci(i.clientHeight - (d + p)),
      _ = Ci(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: xi(0, bi(1, c)) || 1,
      },
      y = !0;
    function b(t) {
      let n = t[0].intersectionRatio;
      if (n !== c) {
        if (!y) return o();
        n
          ? o(!1, n)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (n === 1 && !ro(l, e.getBoundingClientRect()) && o(), (y = !1));
    }
    try {
      n = new IntersectionObserver(b, { ...v, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(e);
  }
  return (o(!0), a);
}
function ao(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = ja(e),
    u = i || a ? [...(l ? Oa(l) : []), ...(t ? Oa(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n, { passive: !0 }), a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? io(l, n) : null,
    f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e;
      (r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e;
          (e = p) == null || e.observe(t);
        }))),
        n());
    })),
    l && !c && p.observe(l),
    t && p.observe(t));
  let m,
    h = c ? Ia(e) : null;
  c && g();
  function g() {
    let t = Ia(e);
    (h && !ro(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
  }
  return (
    n(),
    () => {
      var e;
      (u.forEach((e) => {
        (i && e.removeEventListener(`scroll`, n), a && e.removeEventListener(`resize`, n));
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m));
    }
  );
}
var oo = na,
  so = ra,
  co = Xi,
  lo = aa,
  uo = $i,
  fo = Yi,
  po = ia,
  mo = (e, t, n) => {
    let r = new Map(),
      i = { platform: no, ...n },
      a = { ...i.platform, _c: r };
    return Ji(e, t, { ...i, platform: a });
  },
  ho = typeof document < `u` ? y.useLayoutEffect : function () {};
function go(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!go(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !go(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _o(e) {
  return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vo(e, t) {
  let n = _o(e);
  return Math.round(t * n) / n;
}
function K(e) {
  let t = y.useRef(e);
  return (
    ho(() => {
      t.current = e;
    }),
    t
  );
}
function yo(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = y.useState(r);
  go(f, r) || p(r);
  let [m, h] = y.useState(null),
    [g, _] = y.useState(null),
    v = y.useCallback((e) => {
      e !== C.current && ((C.current = e), h(e));
    }, []),
    b = y.useCallback((e) => {
      e !== w.current && ((w.current = e), _(e));
    }, []),
    x = a || m,
    S = o || g,
    C = y.useRef(null),
    w = y.useRef(null),
    E = y.useRef(u),
    D = c != null,
    O = K(c),
    k = K(i),
    A = K(l),
    j = y.useCallback(() => {
      if (!C.current || !w.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (k.current && (e.platform = k.current),
        mo(C.current, w.current, e).then((e) => {
          let t = { ...e, isPositioned: A.current !== !1 };
          M.current &&
            !go(E.current, t) &&
            ((E.current = t),
            T.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, k, A]);
  ho(() => {
    l === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let M = y.useRef(!1);
  (ho(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    ho(() => {
      if ((x && (C.current = x), S && (w.current = S), x && S)) {
        if (O.current) return O.current(x, S, j);
        j();
      }
    }, [x, S, j, O, D]));
  let ee = y.useMemo(
      () => ({ reference: C, floating: w, setReference: v, setFloating: b }),
      [v, b]
    ),
    N = y.useMemo(() => ({ reference: x, floating: S }), [x, S]),
    P = y.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!N.floating) return e;
      let t = vo(N.floating, u.x),
        r = vo(N.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(_o(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, N.floating, u.x, u.y]);
  return y.useMemo(
    () => ({ ...u, update: j, refs: ee, elements: N, floatingStyles: P }),
    [u, j, ee, N, P]
  );
}
var bo = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`);
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e;
        return r && t(r)
          ? r.current == null
            ? {}
            : fo({ element: r.current, padding: i }).fn(n)
          : r
            ? fo({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  xo = (e, t) => {
    let n = oo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  So = (e, t) => {
    let n = so(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Co = (e, t) => ({ fn: po(e).fn, options: [e, t] }),
  wo = (e, t) => {
    let n = co(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  q = (e, t) => {
    let n = lo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  To = (e, t) => {
    let n = uo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Eo = (e, t) => {
    let n = bo(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Do = `Arrow`,
  Oo = y.forwardRef((e, t) => {
    let { children: n, width: r = 10, height: i = 5, ...a } = e;
    return (0, I.jsx)(Qe.svg, {
      ...a,
      ref: t,
      width: r,
      height: i,
      viewBox: `0 0 30 10`,
      preserveAspectRatio: `none`,
      children: e.asChild ? n : (0, I.jsx)(`polygon`, { points: `0,0 30,0 15,10` }),
    });
  });
Oo.displayName = Do;
var ko = Oo;
function Ao(e) {
  let [t, n] = y.useState(void 0);
  return (
    _t(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var jo = `Popper`,
  [Mo, No] = Le(jo),
  [Po, Fo] = Mo(jo),
  Io = (e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = y.useState(null);
    return (0, I.jsx)(Po, { scope: t, anchor: r, onAnchorChange: i, children: n });
  };
Io.displayName = jo;
var Lo = `PopperAnchor`,
  Ro = y.forwardRef((e, t) => {
    let { __scopePopper: n, virtualRef: r, ...i } = e,
      a = Fo(Lo, n),
      o = y.useRef(null),
      s = Ie(t, o),
      c = y.useRef(null);
    return (
      y.useEffect(() => {
        let e = c.current;
        ((c.current = r?.current || o.current), e !== c.current && a.onAnchorChange(c.current));
      }),
      r ? null : (0, I.jsx)(Qe.div, { ...i, ref: s })
    );
  });
Ro.displayName = Lo;
var zo = `PopperContent`,
  [Bo, Vo] = Mo(zo),
  Ho = y.forwardRef((e, t) => {
    let {
        __scopePopper: n,
        side: r = `bottom`,
        sideOffset: i = 0,
        align: a = `center`,
        alignOffset: o = 0,
        arrowPadding: s = 0,
        avoidCollisions: c = !0,
        collisionBoundary: l = [],
        collisionPadding: u = 0,
        sticky: d = `partial`,
        hideWhenDetached: f = !1,
        updatePositionStrategy: p = `optimized`,
        onPlaced: m,
        ...h
      } = e,
      g = Fo(zo, n),
      [_, v] = y.useState(null),
      b = Ie(t, (e) => v(e)),
      [x, S] = y.useState(null),
      C = Ao(x),
      w = C?.width ?? 0,
      T = C?.height ?? 0,
      E = r + (a === `center` ? `` : `-` + a),
      D = typeof u == `number` ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      O = Array.isArray(l) ? l : [l],
      k = O.length > 0,
      A = { padding: D, boundary: O.filter(Ko), altBoundary: k },
      {
        refs: j,
        floatingStyles: M,
        placement: ee,
        isPositioned: N,
        middlewareData: P,
      } = yo({
        strategy: `fixed`,
        placement: E,
        whileElementsMounted: (...e) => ao(...e, { animationFrame: p === `always` }),
        elements: { reference: g.anchor },
        middleware: [
          xo({ mainAxis: i + T, alignmentAxis: o }),
          c && So({ mainAxis: !0, crossAxis: !1, limiter: d === `partial` ? Co() : void 0, ...A }),
          c && wo({ ...A }),
          q({
            ...A,
            apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
              let { width: i, height: a } = t.reference,
                o = e.floating.style;
              (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                o.setProperty(`--radix-popper-available-height`, `${r}px`),
                o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
            },
          }),
          x && Eo({ element: x, padding: s }),
          qo({ arrowWidth: w, arrowHeight: T }),
          f && To({ strategy: `referenceHidden`, ...A }),
        ],
      }),
      [te, ne] = Jo(ee),
      re = et(m);
    _t(() => {
      N && re?.();
    }, [N, re]);
    let F = P.arrow?.x,
      ie = P.arrow?.y,
      ae = P.arrow?.centerOffset !== 0,
      [oe, se] = y.useState();
    return (
      _t(() => {
        _ && se(window.getComputedStyle(_).zIndex);
      }, [_]),
      (0, I.jsx)(`div`, {
        ref: j.setFloating,
        'data-radix-popper-content-wrapper': ``,
        style: {
          ...M,
          transform: N ? M.transform : `translate(0, -200%)`,
          minWidth: `max-content`,
          zIndex: oe,
          '--radix-popper-transform-origin': [P.transformOrigin?.x, P.transformOrigin?.y].join(` `),
          ...(P.hide?.referenceHidden && { visibility: `hidden`, pointerEvents: `none` }),
        },
        dir: e.dir,
        children: (0, I.jsx)(Bo, {
          scope: n,
          placedSide: te,
          onArrowChange: S,
          arrowX: F,
          arrowY: ie,
          shouldHideArrow: ae,
          children: (0, I.jsx)(Qe.div, {
            'data-side': te,
            'data-align': ne,
            ...h,
            ref: b,
            style: { ...h.style, animation: N ? void 0 : `none` },
          }),
        }),
      })
    );
  });
Ho.displayName = zo;
var Uo = `PopperArrow`,
  Wo = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
  Go = y.forwardRef(function (e, t) {
    let { __scopePopper: n, ...r } = e,
      i = Vo(Uo, n),
      a = Wo[i.placedSide];
    return (0, I.jsx)(`span`, {
      ref: i.onArrowChange,
      style: {
        position: `absolute`,
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: { top: ``, right: `0 0`, bottom: `center 0`, left: `100% 0` }[
          i.placedSide
        ],
        transform: {
          top: `translateY(100%)`,
          right: `translateY(50%) rotate(90deg) translateX(-50%)`,
          bottom: `rotate(180deg)`,
          left: `translateY(50%) rotate(-90deg) translateX(50%)`,
        }[i.placedSide],
        visibility: i.shouldHideArrow ? `hidden` : void 0,
      },
      children: (0, I.jsx)(ko, { ...r, ref: t, style: { ...r.style, display: `block` } }),
    });
  });
Go.displayName = Uo;
function Ko(e) {
  return e !== null;
}
var qo = (e) => ({
  name: `transformOrigin`,
  options: e,
  fn(t) {
    let { placement: n, rects: r, middlewareData: i } = t,
      a = i.arrow?.centerOffset !== 0,
      o = a ? 0 : e.arrowWidth,
      s = a ? 0 : e.arrowHeight,
      [c, l] = Jo(n),
      u = { start: `0%`, center: `50%`, end: `100%` }[l],
      d = (i.arrow?.x ?? 0) + o / 2,
      f = (i.arrow?.y ?? 0) + s / 2,
      p = ``,
      m = ``;
    return (
      c === `bottom`
        ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
        : c === `top`
          ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
          : c === `right`
            ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
            : c === `left` && ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
      { data: { x: p, y: m } }
    );
  },
});
function Jo(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
var Yo = Io,
  Xo = Ro,
  Zo = Ho,
  Qo = Go,
  $o = Symbol(`radix.slottable`);
function es(e) {
  let t = ({ children: e }) => (0, I.jsx)(I.Fragment, { children: e });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = $o), t);
}
var [ts, ns] = Le(`Tooltip`, [No]),
  rs = No(),
  is = `TooltipProvider`,
  as = 700,
  os = `tooltip.open`,
  [ss, cs] = ts(is),
  ls = (e) => {
    let {
        __scopeTooltip: t,
        delayDuration: n = as,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: a,
      } = e,
      o = y.useRef(!0),
      s = y.useRef(!1),
      c = y.useRef(0);
    return (
      y.useEffect(() => {
        let e = c.current;
        return () => window.clearTimeout(e);
      }, []),
      (0, I.jsx)(ss, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: y.useCallback(() => {
          (window.clearTimeout(c.current), (o.current = !1));
        }, []),
        onClose: y.useCallback(() => {
          (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: y.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: i,
        children: a,
      })
    );
  };
ls.displayName = is;
var us = `Tooltip`,
  [ds, fs] = ts(us),
  ps = (e) => {
    let {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: s,
      } = e,
      c = cs(us, e.__scopeTooltip),
      l = rs(t),
      [u, d] = y.useState(null),
      f = vi(),
      p = y.useRef(0),
      m = o ?? c.disableHoverableContent,
      h = s ?? c.delayDuration,
      g = y.useRef(!1),
      [_, v] = Et({
        prop: r,
        defaultProp: i ?? !1,
        onChange: (e) => {
          (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(os))) : c.onClose(), a?.(e));
        },
        caller: us,
      }),
      b = y.useMemo(() => (_ ? (g.current ? `delayed-open` : `instant-open`) : `closed`), [_]),
      x = y.useCallback(() => {
        (window.clearTimeout(p.current), (p.current = 0), (g.current = !1), v(!0));
      }, [v]),
      S = y.useCallback(() => {
        (window.clearTimeout(p.current), (p.current = 0), v(!1));
      }, [v]),
      C = y.useCallback(() => {
        (window.clearTimeout(p.current),
          (p.current = window.setTimeout(() => {
            ((g.current = !0), v(!0), (p.current = 0));
          }, h)));
      }, [h, v]);
    return (
      y.useEffect(
        () => () => {
          p.current &&= (window.clearTimeout(p.current), 0);
        },
        []
      ),
      (0, I.jsx)(Yo, {
        ...l,
        children: (0, I.jsx)(ds, {
          scope: t,
          contentId: f,
          open: _,
          stateAttribute: b,
          trigger: u,
          onTriggerChange: d,
          onTriggerEnter: y.useCallback(() => {
            c.isOpenDelayedRef.current ? C() : x();
          }, [c.isOpenDelayedRef, C, x]),
          onTriggerLeave: y.useCallback(() => {
            m ? S() : (window.clearTimeout(p.current), (p.current = 0));
          }, [S, m]),
          onOpen: x,
          onClose: S,
          disableHoverableContent: m,
          children: n,
        }),
      })
    );
  };
ps.displayName = us;
var ms = `TooltipTrigger`,
  hs = y.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = fs(ms, n),
      a = cs(ms, n),
      o = rs(n),
      s = Ie(t, y.useRef(null), i.onTriggerChange),
      c = y.useRef(!1),
      l = y.useRef(!1),
      u = y.useCallback(() => (c.current = !1), []);
    return (
      y.useEffect(() => () => document.removeEventListener(`pointerup`, u), [u]),
      (0, I.jsx)(Xo, {
        asChild: !0,
        ...o,
        children: (0, I.jsx)(Qe.button, {
          'aria-describedby': i.open ? i.contentId : void 0,
          'data-state': i.stateAttribute,
          ...r,
          ref: s,
          onPointerMove: L(e.onPointerMove, (e) => {
            e.pointerType !== `touch` &&
              !l.current &&
              !a.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (l.current = !0));
          }),
          onPointerLeave: L(e.onPointerLeave, () => {
            (i.onTriggerLeave(), (l.current = !1));
          }),
          onPointerDown: L(e.onPointerDown, () => {
            (i.open && i.onClose(),
              (c.current = !0),
              document.addEventListener(`pointerup`, u, { once: !0 }));
          }),
          onFocus: L(e.onFocus, () => {
            c.current || i.onOpen();
          }),
          onBlur: L(e.onBlur, i.onClose),
          onClick: L(e.onClick, i.onClose),
        }),
      })
    );
  });
hs.displayName = ms;
var gs = `TooltipPortal`,
  [_s, vs] = ts(gs, { forceMount: void 0 }),
  ys = (e) => {
    let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
      a = fs(gs, t);
    return (0, I.jsx)(_s, {
      scope: t,
      forceMount: n,
      children: (0, I.jsx)(xt, {
        present: n || a.open,
        children: (0, I.jsx)(yt, { asChild: !0, container: i, children: r }),
      }),
    });
  };
ys.displayName = gs;
var bs = `TooltipContent`,
  xs = y.forwardRef((e, t) => {
    let n = vs(bs, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
      o = fs(bs, e.__scopeTooltip);
    return (0, I.jsx)(xt, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? (0, I.jsx)(Es, { side: i, ...a, ref: t })
        : (0, I.jsx)(Ss, { side: i, ...a, ref: t }),
    });
  }),
  Ss = y.forwardRef((e, t) => {
    let n = fs(bs, e.__scopeTooltip),
      r = cs(bs, e.__scopeTooltip),
      i = y.useRef(null),
      a = Ie(t, i),
      [o, s] = y.useState(null),
      { trigger: c, onClose: l } = n,
      u = i.current,
      { onPointerInTransitChange: d } = r,
      f = y.useCallback(() => {
        (s(null), d(!1));
      }, [d]),
      p = y.useCallback(
        (e, t) => {
          let n = e.currentTarget,
            r = { x: e.clientX, y: e.clientY },
            i = As(r, ks(r, n.getBoundingClientRect())),
            a = js(t.getBoundingClientRect());
          (s(Ns([...i, ...a])), d(!0));
        },
        [d]
      );
    return (
      y.useEffect(() => () => f(), [f]),
      y.useEffect(() => {
        if (c && u) {
          let e = (e) => p(e, u),
            t = (e) => p(e, c);
          return (
            c.addEventListener(`pointerleave`, e),
            u.addEventListener(`pointerleave`, t),
            () => {
              (c.removeEventListener(`pointerleave`, e), u.removeEventListener(`pointerleave`, t));
            }
          );
        }
      }, [c, u, p, f]),
      y.useEffect(() => {
        if (o) {
          let e = (e) => {
            let t = e.target,
              n = { x: e.clientX, y: e.clientY },
              r = c?.contains(t) || u?.contains(t),
              i = !Ms(n, o);
            r ? f() : i && (f(), l());
          };
          return (
            document.addEventListener(`pointermove`, e),
            () => document.removeEventListener(`pointermove`, e)
          );
        }
      }, [c, u, o, l, f]),
      (0, I.jsx)(Es, { ...e, ref: a })
    );
  }),
  [Cs, ws] = ts(us, { isInside: !1 }),
  Ts = es(`TooltipContent`),
  Es = y.forwardRef((e, t) => {
    let {
        __scopeTooltip: n,
        children: r,
        'aria-label': i,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        ...s
      } = e,
      c = fs(bs, n),
      l = rs(n),
      { onClose: u } = c;
    return (
      y.useEffect(
        () => (document.addEventListener(os, u), () => document.removeEventListener(os, u)),
        [u]
      ),
      y.useEffect(() => {
        if (c.trigger) {
          let e = (e) => {
            e.target?.contains(c.trigger) && u();
          };
          return (
            window.addEventListener(`scroll`, e, { capture: !0 }),
            () => window.removeEventListener(`scroll`, e, { capture: !0 })
          );
        }
      }, [c.trigger, u]),
      (0, I.jsx)(ct, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        onFocusOutside: (e) => e.preventDefault(),
        onDismiss: u,
        children: (0, I.jsxs)(Zo, {
          'data-state': c.stateAttribute,
          ...l,
          ...s,
          ref: t,
          style: {
            ...s.style,
            '--radix-tooltip-content-transform-origin': `var(--radix-popper-transform-origin)`,
            '--radix-tooltip-content-available-width': `var(--radix-popper-available-width)`,
            '--radix-tooltip-content-available-height': `var(--radix-popper-available-height)`,
            '--radix-tooltip-trigger-width': `var(--radix-popper-anchor-width)`,
            '--radix-tooltip-trigger-height': `var(--radix-popper-anchor-height)`,
          },
          children: [
            (0, I.jsx)(Ts, { children: r }),
            (0, I.jsx)(Cs, {
              scope: n,
              isInside: !0,
              children: (0, I.jsx)(Mt, { id: c.contentId, role: `tooltip`, children: i || r }),
            }),
          ],
        }),
      })
    );
  });
xs.displayName = bs;
var Ds = `TooltipArrow`,
  Os = y.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = rs(n);
    return ws(Ds, n).isInside ? null : (0, I.jsx)(Qo, { ...i, ...r, ref: t });
  });
Os.displayName = Ds;
function ks(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function As(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function js(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Ms(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function Ns(e) {
  let t = e.slice();
  return (
    t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
    Ps(t)
  );
}
function Ps(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (; t.length >= 2; ) {
      let e = t[t.length - 1],
        n = t[t.length - 2];
      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  let n = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    for (; n.length >= 2; ) {
      let e = n[n.length - 1],
        t = n[n.length - 2];
      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
  );
}
var Fs = ls,
  Is = xs,
  Ls = Fs,
  Rs = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    (0, I.jsx)(Is, {
      ref: r,
      sideOffset: t,
      className: H(
        `z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e
      ),
      ...n,
    })
  );
Rs.displayName = Is.displayName;
var zs = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Bs = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Vs = new (class {
    #e = Bs;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Hs(e) {
  setTimeout(e, 0);
}
var Us = typeof window > `u` || `Deno` in globalThis;
function Ws() {}
function Gs(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ks(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function qs(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Js(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ys(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Xs(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Qs(o, t.options)) return !1;
    } else if (!ec(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Zs(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if ($s(t.options.mutationKey) !== $s(a)) return !1;
    } else if (!ec(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Qs(e, t) {
  return (t?.queryKeyHashFn || $s)(e);
}
function $s(e) {
  return JSON.stringify(e, (e, t) =>
    ic(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t
  );
}
function ec(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object`
      ? Object.keys(t).every((n) => ec(e[n], t[n]))
      : !1;
}
var tc = Object.prototype.hasOwnProperty;
function nc(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = rc(e) && rc(t);
  if (!r && !(ic(e) && ic(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : tc.call(e, o)) && c++);
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    let f = nc(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function rc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ic(e) {
  if (!ac(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !ac(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function ac(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function oc(e) {
  return new Promise((t) => {
    Vs.setTimeout(t, e);
  });
}
function sc(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : nc(e, t);
}
function cc(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function lc(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var uc = Symbol();
function dc(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === uc
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function fc(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, `signal`, {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r ? i : ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
      ),
    }),
    e
  );
}
var pc = new (class extends zs {
  #e;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (!Us && window.addEventListener) {
          let t = () => e();
          return (
            window.addEventListener(`visibilitychange`, t, !1),
            () => {
              window.removeEventListener(`visibilitychange`, t);
            }
          );
        }
      }));
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#n);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), (this.#t = void 0));
  }
  setEventListener(e) {
    ((this.#n = e),
      this.#t?.(),
      (this.#t = e((e) => {
        typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
      })));
  }
  setFocused(e) {
    this.#e !== e && ((this.#e = e), this.onFocus());
  }
  onFocus() {
    let e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    return typeof this.#e == `boolean`
      ? this.#e
      : globalThis.document?.visibilityState !== `hidden`;
  }
})();
function mc() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var hc = Hs;
function J() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = hc,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var gc = J(),
  _c = new (class extends zs {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!Us && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function vc(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function yc(e) {
  return (e ?? `online`) === `online` ? _c.isOnline() : !0;
}
var bc = class extends Error {
  constructor(e) {
    (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function xc(e) {
  let t = !1,
    n = 0,
    r,
    i = mc(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new bc(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => pc.isFocused() && (e.networkMode === `always` || _c.isOnline()) && e.canRun(),
    u = () => yc(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Us ? 0 : 3),
            o = e.retryDelay ?? vc,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            oc(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var Sc = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        Ks(this.gcTime) &&
          (this.#e = Vs.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Us ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e &&= (Vs.clearTimeout(this.#e), void 0);
    }
  },
  Cc = class extends Sc {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(e) {
      (super(),
        (this.#o = !1),
        (this.#a = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#r = e.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#e = Ec(this.options)),
        (this.state = e.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#a, ...e }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        let e = Ec(this.options);
        e.data !== void 0 && (this.setState(Tc(e.data, e.dataUpdatedAt)), (this.#e = e));
      }
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === `idle` && this.#n.remove(this);
    }
    setData(e, t) {
      let n = sc(this.state.data, e, this.options);
      return (
        this.#s({ data: n, type: `success`, dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
        n
      );
    }
    setState(e, t) {
      this.#s({ type: `setState`, state: e, setStateOptions: t });
    }
    cancel(e) {
      let t = this.#i?.promise;
      return (this.#i?.cancel(e), t ? t.then(Ws).catch(Ws) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((e) => Ys(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === uc ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => Js(e.options.staleTime, this) === `static`)
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === `static`
          ? !1
          : this.state.isInvalidated
            ? !0
            : !qs(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      (this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    onOnline() {
      (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({ type: `observerAdded`, query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#i && (this.#o ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: `observerRemoved`, query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: `invalidate` });
    }
    async fetch(e, t) {
      if (this.state.fetchStatus !== `idle` && this.#i?.status() !== `rejected`) {
        if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
        else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        let e = this.observers.find((e) => e.options.queryFn);
        e && this.setOptions(e.options);
      }
      let n = new AbortController(),
        r = (e) => {
          Object.defineProperty(e, `signal`, {
            enumerable: !0,
            get: () => ((this.#o = !0), n.signal),
          });
        },
        i = () => {
          let e = dc(this.options, t),
            n = (() => {
              let e = { client: this.#r, queryKey: this.queryKey, meta: this.meta };
              return (r(e), e);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(e, n, this) : e(n)
          );
        },
        a = (() => {
          let e = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: i,
          };
          return (r(e), e);
        })();
      (this.options.behavior?.onFetch(a, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) &&
          this.#s({ type: `fetch`, meta: a.fetchOptions?.meta }),
        (this.#i = xc({
          initialPromise: t?.initialPromise,
          fn: a.fetchFn,
          onCancel: (e) => {
            (e instanceof bc && e.revert && this.setState({ ...this.#t, fetchStatus: `idle` }),
              n.abort());
          },
          onFail: (e, t) => {
            this.#s({ type: `failed`, failureCount: e, error: t });
          },
          onPause: () => {
            this.#s({ type: `pause` });
          },
          onContinue: () => {
            this.#s({ type: `continue` });
          },
          retry: a.options.retry,
          retryDelay: a.options.retryDelay,
          networkMode: a.options.networkMode,
          canRun: () => !0,
        })));
      try {
        let e = await this.#i.start();
        if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(e),
          this.#n.config.onSuccess?.(e, this),
          this.#n.config.onSettled?.(e, this.state.error, this),
          e
        );
      } catch (e) {
        if (e instanceof bc) {
          if (e.silent) return this.#i.promise;
          if (e.revert) {
            if (this.state.data === void 0) throw e;
            return this.state.data;
          }
        }
        throw (
          this.#s({ type: `error`, error: e }),
          this.#n.config.onError?.(e, this),
          this.#n.config.onSettled?.(this.state.data, e, this),
          e
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(e) {
      ((this.state = ((t) => {
        switch (e.type) {
          case `failed`:
            return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
          case `pause`:
            return { ...t, fetchStatus: `paused` };
          case `continue`:
            return { ...t, fetchStatus: `fetching` };
          case `fetch`:
            return { ...t, ...wc(t.data, this.options), fetchMeta: e.meta ?? null };
          case `success`:
            let n = {
              ...t,
              ...Tc(e.data, e.dataUpdatedAt),
              dataUpdateCount: t.dataUpdateCount + 1,
              ...(!e.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = e.manual ? n : void 0), n);
          case `error`:
            let r = e.error;
            return {
              ...t,
              error: r,
              errorUpdateCount: t.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: t.fetchFailureCount + 1,
              fetchFailureReason: r,
              fetchStatus: `idle`,
              status: `error`,
              isInvalidated: !0,
            };
          case `invalidate`:
            return { ...t, isInvalidated: !0 };
          case `setState`:
            return { ...t, ...e.state };
        }
      })(this.state)),
        gc.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: `updated`, action: e }));
        }));
    }
  };
function wc(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yc(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Tc(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Ec(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
function Dc(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              fc(
                e,
                () => t.signal,
                () => (n = !0)
              );
            },
            u = dc(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = await u(
                  (() => {
                    let e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? `backward` : `forward`,
                      meta: t.options.meta,
                    };
                    return (l(e), e);
                  })()
                ),
                { maxPages: o } = t.options,
                s = i ? lc : cc;
              return { pages: s(e.pages, a, o), pageParams: s(e.pageParams, r, o) };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? kc : Oc,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Oc(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n
            ))
        : (t.fetchFn = l);
    },
  };
}
function Oc(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function kc(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Ac = class extends Sc {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || jc()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#r = xc({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate && (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    ((this.state = ((t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    })(this.state)),
      gc.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function jc() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Mc = class extends zs {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Ac({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = Nc(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Nc(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = Nc(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = Nc(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    gc.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Zs(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Zs(e, t));
  }
  notify(e) {
    gc.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return gc.batch(() => Promise.all(e.map((e) => e.continue().catch(Ws))));
  }
};
function Nc(e) {
  return e.options.scope?.id;
}
var Pc = class extends zs {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Qs(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Cc({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      gc.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Xs(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Xs(e, t)) : t;
    }
    notify(e) {
      gc.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      gc.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      gc.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Fc = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Pc()),
        (this.#t = e.mutationCache || new Mc()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = pc.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = _c.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 && (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && n.isStaleByTime(Js(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Gs(t, i);
      if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return gc.batch(() =>
        this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      gc.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return gc.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        )
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = gc.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Ws).catch(Ws);
    }
    invalidateQueries(e, t = {}) {
      return gc.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? `active` }, t)
        )
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = gc.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Ws)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            })
        );
      return Promise.all(r).then(Ws);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Js(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Ws).catch(Ws);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = Dc(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Ws).catch(Ws);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = Dc(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return _c.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set($s(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          ec(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set($s(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          ec(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        (t.queryHash ||= Qs(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === uc && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Ic = y.createContext(void 0),
  Lc = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    (0, I.jsx)(Ic.Provider, { value: e, children: t })
  );
function Rc() {
  return (
    (Rc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rc.apply(this, arguments)
  );
}
var zc;
(function (e) {
  ((e.Pop = `POP`), (e.Push = `PUSH`), (e.Replace = `REPLACE`));
})((zc ||= {}));
var Bc = `popstate`;
function Vc(e) {
  e === void 0 && (e = {});
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return Gc(
      ``,
      { pathname: n, search: r, hash: i },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : Kc(t);
  }
  return Jc(t, n, null, e);
}
function Hc(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function Uc(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function Wc() {
  return Math.random().toString(36).substr(2, 8);
}
function Y(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Rc(
      { pathname: typeof e == `string` ? e : e.pathname, search: ``, hash: `` },
      typeof t == `string` ? qc(t) : t,
      { state: n, key: (t && t.key) || r || Wc() }
    )
  );
}
function Kc(e) {
  let { pathname: t = `/`, search: n = ``, hash: r = `` } = e;
  return (
    n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r),
    t
  );
}
function qc(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e));
  }
  return t;
}
function Jc(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = zc.Pop,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState(Rc({}, o.state, { idx: l }), ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = zc.Pop;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = zc.Push;
    let r = Gc(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = Y(r, l),
      f = h.createHref(r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = zc.Replace;
    let r = Gc(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = Y(r, l),
      d = h.createHref(r);
    (o.replaceState(i, ``, d), a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    let t = i.location.origin === `null` ? i.location.href : i.location.origin,
      n = typeof e == `string` ? e : Kc(e);
    return (
      (n = n.replace(/ $/, `%20`)),
      Hc(t, `No window.location.(origin|href) available to create URL for href: ` + n),
      new URL(n, t)
    );
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(Bc, d),
        (c = e),
        () => {
          (i.removeEventListener(Bc, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
var Yc;
(function (e) {
  ((e.data = `data`), (e.deferred = `deferred`), (e.redirect = `redirect`), (e.error = `error`));
})((Yc ||= {}));
function Xc(e, t, n) {
  return (n === void 0 && (n = `/`), Zc(e, t, n, !1));
}
function Zc(e, t, n, r) {
  let i = ml((typeof t == `string` ? qc(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = Qc(e);
  el(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = pl(i);
    o = ul(a[e], t, r);
  }
  return o;
}
function Qc(e, t, n, r) {
  (t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ``));
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (Hc(
        o.relativePath.startsWith(r),
        `Absolute route path "` +
          o.relativePath +
          `" nested under path ` +
          (`"` + r + `" is not valid. An absolute child route path `) +
          `must start with the combined path of all its parent routes.`
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = hl([r, o.relativePath]),
      c = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (Hc(
        e.index !== !0,
        `Index routes must not have child routes. Please remove ` +
          (`all child routes from route path "` + s + `".`)
      ),
      Qc(e.children, t, c, s)),
      !(e.path == null && !e.index) && t.push({ path: s, score: cl(s, e.index), routesMeta: c }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
      else for (let n of $c(e.path)) i(e, t, n);
    }),
    t
  );
}
function $c(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = $c(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function el(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? ll(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex)
        )
      : t.score - e.score
  );
}
var tl = /^:[\w-]+$/,
  nl = 3,
  rl = 2,
  il = 1,
  al = 10,
  ol = -2,
  sl = (e) => e === `*`;
function cl(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(sl) && (r += ol),
    t && (r += rl),
    n.filter((e) => !sl(e)).reduce((e, t) => e + (tl.test(t) ? nl : t === `` ? il : al), r)
  );
}
function ll(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ul(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = dl({ path: s.relativePath, caseSensitive: s.caseSensitive, end: c }, l),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = dl({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, l)),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: hl([a, u.pathname]),
        pathnameBase: gl(hl([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = hl([a, u.pathnameBase])));
  }
  return o;
}
function dl(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fl(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, t, n) => {
      let { paramName: r, isOptional: i } = t;
      if (r === `*`) {
        let e = s[n] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let c = s[n];
      return (i && !c ? (e[r] = void 0) : (e[r] = (c || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function fl(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Uc(
      e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
      `Route path "` +
        e +
        `" will be treated as if it were ` +
        (`"` + e.replace(/\*$/, `/*`) + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        (`please change the route path to "` + e.replace(/\*$/, `/*`) + `".`)
    ));
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (e, t, n) => (
            r.push({ paramName: t, isOptional: n != null }),
            n ? `/?([^\\/]+)?` : `/([^\\/]+)`
          )
        );
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }), (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function pl(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      Uc(
        !1,
        `The URL path "` +
          e +
          `" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ` +
          (`encoding (` + t + `).`)
      ),
      e
    );
  }
}
function ml(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var hl = (e) => e.join(`/`).replace(/\/\/+/g, `/`),
  gl = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`);
function _l(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
var yl = y.createContext(null),
  bl = y.createContext(null),
  xl = y.createContext(null),
  Sl = y.createContext(null),
  Cl = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  wl = y.createContext(null);
function Tl() {
  return y.useContext(Sl) != null;
}
function El() {
  return (!Tl() && Hc(!1), y.useContext(Sl).location);
}
function Dl(e, t) {
  return Ol(e, t);
}
function Ol(e, t, n, r) {
  !Tl() && Hc(!1);
  let { navigator: i } = y.useContext(xl),
    { matches: a } = y.useContext(Cl),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : `/`;
  o && o.route;
  let l = El(),
    u;
  if (t) {
    let e = typeof t == `string` ? qc(t) : t;
    (!(c === `/` || e.pathname?.startsWith(c)) && Hc(!1), (u = e));
  } else u = l;
  let d = u.pathname || `/`,
    f = d;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    f = `/` + d.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let p = Xc(e, { pathname: f }),
    m = Nl(
      p &&
        p.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: hl([
              c,
              i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname,
            ]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : hl([
                    c,
                    i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      r
    );
  return t && m
    ? y.createElement(
        Sl.Provider,
        {
          value: {
            location: vl({ pathname: `/`, search: ``, hash: ``, state: null, key: `default` }, u),
            navigationType: zc.Pop,
          },
        },
        m
      )
    : m;
}
function kl() {
  let e = Rl(),
    t = _l(e) ? e.status + ` ` + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null;
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(`h2`, null, `Unexpected Application Error!`),
    y.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
    n
      ? y.createElement(
          `pre`,
          { style: { padding: `0.5rem`, backgroundColor: `rgba(200,200,200, 0.5)` } },
          n
        )
      : null,
    null
  );
}
var Al = y.createElement(kl, null),
  jl = class extends y.Component {
    constructor(e) {
      (super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(`React Router caught the following error during render`, e, t);
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : y.createElement(
            Cl.Provider,
            { value: this.props.routeContext },
            y.createElement(wl.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          );
    }
  };
function Ml(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = y.useContext(yl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Cl.Provider, { value: t }, r)
  );
}
function Nl(e, t, n, r) {
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = n?.errors;
  if (o != null) {
    let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
    (!(e >= 0) && Hc(!1), (a = a.slice(0, Math.min(a.length, e + 1))));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)) {
        let { loaderData: e, errors: r } = n,
          i = t.route.loader && e[t.route.id] === void 0 && (!r || r[t.route.id] === void 0);
        if (t.route.lazy || i) {
          ((s = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((e, r, i) => {
    let l,
      u = !1,
      d = null,
      f = null;
    n &&
      ((l = o && r.route.id ? o[r.route.id] : void 0),
      (d = r.route.errorElement || Al),
      s &&
        (c < 0 && i === 0
          ? (Bl(
              `route-fallback`,
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (u = !0),
            (f = null))
          : c === i && ((u = !0), (f = r.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, i + 1)),
      m = () => {
        let t;
        return (
          (t = l
            ? d
            : u
              ? f
              : r.route.Component
                ? y.createElement(r.route.Component, null)
                : r.route.element
                  ? r.route.element
                  : e),
          y.createElement(Ml, {
            match: r,
            routeContext: { outlet: e, matches: p, isDataRoute: n != null },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)
      ? y.createElement(jl, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: l,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Pl = (function (e) {
  return (
    (e.UseBlocker = `useBlocker`),
    (e.UseLoaderData = `useLoaderData`),
    (e.UseActionData = `useActionData`),
    (e.UseRouteError = `useRouteError`),
    (e.UseNavigation = `useNavigation`),
    (e.UseRouteLoaderData = `useRouteLoaderData`),
    (e.UseMatches = `useMatches`),
    (e.UseRevalidator = `useRevalidator`),
    (e.UseNavigateStable = `useNavigate`),
    (e.UseRouteId = `useRouteId`),
    e
  );
})(Pl || {});
function Fl(e) {
  let t = y.useContext(bl);
  return (!t && Hc(!1), t);
}
function Il(e) {
  let t = y.useContext(Cl);
  return (!t && Hc(!1), t);
}
function Ll(e) {
  let t = Il(e),
    n = t.matches[t.matches.length - 1];
  return (!n.route.id && Hc(!1), n.route.id);
}
function Rl() {
  let e = y.useContext(wl),
    t = Fl(Pl.UseRouteError),
    n = Ll(Pl.UseRouteError);
  return e === void 0 ? t.errors?.[n] : e;
}
var zl = {};
function Bl(e, t, n) {
  !t && !zl[e] && (zl[e] = !0);
}
var Vl = (e, t, n) => (
  `` +
    t +
    ('You can use the `' + e + '` future flag to opt-in early. ') +
    (`For more information, see ` + n + `.`),
  void 0
);
function X(e, t) {
  (e?.v7_startTransition === void 0 &&
    Vl(
      `v7_startTransition`,
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      `https://reactrouter.com/v6/upgrading/future#v7_starttransition`
    ),
    e?.v7_relativeSplatPath === void 0 &&
      (!t || t.v7_relativeSplatPath === void 0) &&
      Vl(
        `v7_relativeSplatPath`,
        `Relative route resolution within Splat routes is changing in v7`,
        `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        Vl(
          `v7_fetcherPersist`,
          `The persistence behavior of fetchers is changing in v7`,
          `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`
        ),
      t.v7_normalizeFormMethod === void 0 &&
        Vl(
          `v7_normalizeFormMethod`,
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`
        ),
      t.v7_partialHydration === void 0 &&
        Vl(
          `v7_partialHydration`,
          '`RouterProvider` hydration behavior is changing in v7',
          `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        Vl(
          `v7_skipActionErrorRevalidation`,
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`
        )));
}
y.startTransition;
function Hl(e) {
  Hc(!1);
}
function Ul(e) {
  let {
    basename: t = `/`,
    children: n = null,
    location: r,
    navigationType: i = zc.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  Tl() && Hc(!1);
  let c = t.replace(/^\/*/, `/`),
    l = y.useMemo(
      () => ({ basename: c, navigator: a, static: o, future: vl({ v7_relativeSplatPath: !1 }, s) }),
      [c, s, a, o]
    );
  typeof r == `string` && (r = qc(r));
  let { pathname: u = `/`, search: d = ``, hash: f = ``, state: p = null, key: m = `default` } = r,
    h = y.useMemo(() => {
      let e = ml(u, c);
      return e == null
        ? null
        : { location: { pathname: e, search: d, hash: f, state: p, key: m }, navigationType: i };
    }, [c, u, d, f, p, m, i]);
  return h == null
    ? null
    : y.createElement(
        xl.Provider,
        { value: l },
        y.createElement(Sl.Provider, { children: n, value: h })
      );
}
function Wl(e) {
  let { children: t, location: n } = e;
  return Dl(Gl(t), n);
}
new Promise(() => {});
function Gl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (e, r) => {
      if (!y.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === y.Fragment) {
        n.push.apply(n, Gl(e.props.children, i));
        return;
      }
      (e.type !== Hl && Hc(!1), !(!e.props.index || !e.props.children) && Hc(!1));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        loader: e.props.loader,
        action: e.props.action,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary: e.props.ErrorBoundary != null || e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Gl(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var Kl = `6`;
try {
  window.__reactRouterVersion = Kl;
} catch {}
var ql = y.startTransition;
(T.flushSync, y.useId);
function Jl(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = y.useRef();
  a.current ??= Vc({ window: i, v5Compat: !0 });
  let o = a.current,
    [s, c] = y.useState({ action: o.action, location: o.location }),
    { v7_startTransition: l } = r || {},
    u = y.useCallback(
      (e) => {
        l && ql ? ql(() => c(e)) : c(e);
      },
      [c, l]
    );
  return (
    y.useLayoutEffect(() => o.listen(u), [o, u]),
    y.useEffect(() => X(r), [r]),
    y.createElement(Ul, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
typeof window < `u` && window.document !== void 0 && window.document.createElement;
var Yl;
(function (e) {
  ((e.UseScrollRestoration = `useScrollRestoration`),
    (e.UseSubmit = `useSubmit`),
    (e.UseSubmitFetcher = `useSubmitFetcher`),
    (e.UseFetcher = `useFetcher`),
    (e.useViewTransitionState = `useViewTransitionState`));
})((Yl ||= {}));
var Xl;
(function (e) {
  ((e.UseFetcher = `useFetcher`),
    (e.UseFetchers = `useFetchers`),
    (e.UseScrollRestoration = `useScrollRestoration`));
})((Xl ||= {}));
var Zl = (0, y.createContext)({});
function Ql(e) {
  let t = (0, y.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var $l = (0, y.createContext)(null),
  eu = (0, y.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` }),
  tu = class extends y.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current;
        ((e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function nu({ children: e, isPresent: t }) {
  let n = (0, y.useId)(),
    r = (0, y.useRef)(null),
    i = (0, y.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: a } = (0, y.useContext)(eu);
  return (
    (0, y.useInsertionEffect)(() => {
      let { width: e, height: o, top: s, left: c } = i.current;
      if (t || !r.current || !e || !o) return;
      r.current.dataset.motionPopId = n;
      let l = document.createElement(`style`);
      return (
        a && (l.nonce = a),
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l);
        }
      );
    }, [t]),
    (0, I.jsx)(tu, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: y.cloneElement(e, { ref: r }),
    })
  );
}
var ru = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = Ql(iu),
    c = (0, y.useId)(),
    l = (0, y.useCallback)(
      (e) => {
        s.set(e, !0);
        for (let e of s.values()) if (!e) return;
        r && r();
      },
      [s, r]
    ),
    u = (0, y.useMemo)(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: l,
        register: (e) => (s.set(e, !1), () => s.delete(e)),
      }),
      a ? [Math.random(), l] : [n, l]
    );
  return (
    (0, y.useMemo)(() => {
      s.forEach((e, t) => s.set(t, !1));
    }, [n]),
    y.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    o === `popLayout` && (e = (0, I.jsx)(nu, { isPresent: n, children: e })),
    (0, I.jsx)($l.Provider, { value: u, children: e })
  );
};
function iu() {
  return new Map();
}
function au(e = !0) {
  let t = (0, y.useContext)($l);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, y.useId)();
  (0, y.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, y.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var ou = (e) => e.key || ``;
function su(e) {
  let t = [];
  return (
    y.Children.forEach(e, (e) => {
      (0, y.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var cu = typeof window < `u`,
  lu = cu ? y.useLayoutEffect : y.useEffect,
  uu = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
  }) => {
    let [s, c] = au(o),
      l = (0, y.useMemo)(() => su(e), [e]),
      u = o && !s ? [] : l.map(ou),
      d = (0, y.useRef)(!0),
      f = (0, y.useRef)(l),
      p = Ql(() => new Map()),
      [m, h] = (0, y.useState)(l),
      [g, _] = (0, y.useState)(l);
    lu(() => {
      ((d.current = !1), (f.current = l));
      for (let e = 0; e < g.length; e++) {
        let t = ou(g[e]);
        u.includes(t) ? p.delete(t) : p.get(t) !== !0 && p.set(t, !1);
      }
    }, [g, u.length, u.join(`-`)]);
    let v = [];
    if (l !== m) {
      let e = [...l];
      for (let t = 0; t < g.length; t++) {
        let n = g[t],
          r = ou(n);
        u.includes(r) || (e.splice(t, 0, n), v.push(n));
      }
      (a === `wait` && v.length && (e = v), _(su(e)), h(l));
      return;
    }
    let { forceRender: b } = (0, y.useContext)(Zl);
    return (0, I.jsx)(I.Fragment, {
      children: g.map((e) => {
        let m = ou(e),
          h = o && !s ? !1 : l === g || u.includes(m);
        return (0, I.jsx)(
          ru,
          {
            isPresent: h,
            initial: !d.current || n ? void 0 : !1,
            custom: h ? void 0 : t,
            presenceAffectsLayout: i,
            mode: a,
            onExitComplete: h
              ? void 0
              : () => {
                  if (p.has(m)) p.set(m, !0);
                  else return;
                  let e = !0;
                  (p.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (b?.(), _(f.current), o && c?.(), r && r()));
                },
            children: e,
          },
          m
        );
      }),
    });
  },
  du = (e) => e,
  fu = du,
  pu = du;
function mu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var hu = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  gu = (e) => e * 1e3,
  _u = (e) => e / 1e3,
  vu = { skipAnimations: !1, useManualTiming: !1 };
function yu(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.has(e) || s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var bu = [`read`, `resolveKeyframes`, `update`, `preRender`, `render`, `postRender`],
  xu = 40;
function Su(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = bu.reduce((e, t) => ((e[t] = yu(a)), e), {}),
    { read: s, resolveKeyframes: c, update: l, preRender: u, render: d, postRender: f } = o,
    p = () => {
      let a = vu.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, xu), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    m = () => {
      ((n = !0), (r = !0), i.isProcessing || e(p));
    };
  return {
    schedule: bu.reduce((e, t) => {
      let r = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < bu.length; t++) o[bu[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: Z,
    cancel: Cu,
    state: wu,
    steps: Tu,
  } = Su(typeof requestAnimationFrame < `u` ? requestAnimationFrame : du, !0),
  Eu = (0, y.createContext)({ strict: !1 }),
  Du = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Ou = {};
for (let e in Du) Ou[e] = { isEnabled: (t) => Du[e].some((e) => !!t[e]) };
function ku(e) {
  for (let t in e) Ou[t] = { ...Ou[t], ...e[t] };
}
var Au = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`
  )
);
function ju(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    Au.has(e)
  );
}
var Mu = c({ default: () => Nu }),
  Nu,
  Pu = o(() => {
    throw (
      (Nu = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`
      )
    );
  }),
  Fu = (e) => !ju(e);
function Iu(e) {
  e && (Fu = (t) => (t.startsWith(`on`) ? !ju(t) : e(t)));
}
try {
  Iu((Pu(), d(Mu)).default);
} catch {}
function Lu(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      ((Fu(i) ||
        (n === !0 && ju(i)) ||
        (!t && !ju(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function Ru(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) => (r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r))),
  });
}
var zu = (0, y.createContext)({});
function Bu(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Vu(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var Hu = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
  Uu = [`initial`, ...Hu];
function Wu(e) {
  return Vu(e.animate) || Uu.some((t) => Bu(e[t]));
}
function Gu(e) {
  return !!(Wu(e) || e.variants);
}
function Ku(e, t) {
  if (Wu(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || Bu(t) ? t : void 0, animate: Bu(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function qu(e) {
  let { initial: t, animate: n } = Ku(e, (0, y.useContext)(zu));
  return (0, y.useMemo)(() => ({ initial: t, animate: n }), [Ju(t), Ju(n)]);
}
function Ju(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Yu = Symbol.for(`motionComponentSymbol`);
function Xu(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function Zu(e, t, n) {
  return (0, y.useCallback)(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : Xu(n) && (n.current = r)));
    },
    [t]
  );
}
var Qu = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  $u = `data-` + Qu(`framerAppearId`),
  { schedule: ed, cancel: td } = Su(queueMicrotask, !1),
  nd = (0, y.createContext)({});
function rd(e, t, n, r, i) {
  let { visualElement: a } = (0, y.useContext)(zu),
    o = (0, y.useContext)(Eu),
    s = (0, y.useContext)($l),
    c = (0, y.useContext)(eu).reducedMotion,
    l = (0, y.useRef)(null);
  ((r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  let u = l.current,
    d = (0, y.useContext)(nd);
  u && !u.projection && i && (u.type === `html` || u.type === `svg`) && id(l.current, n, i, d);
  let f = (0, y.useRef)(!1);
  (0, y.useInsertionEffect)(() => {
    u && f.current && u.update(n, s);
  });
  let p = n[$u],
    m = (0, y.useRef)(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p)
    );
  return (
    lu(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        ed.render(u.render),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    (0, y.useEffect)(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        (m.current &&=
          (queueMicrotask(() => {
            var e;
            (e = window.MotionHandoffMarkAsComplete) == null || e.call(window, p);
          }),
          !1)));
    }),
    u
  );
}
function id(e, t, n, r) {
  let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : ad(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Xu(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function ad(e) {
  if (e) return e.options.allowProjection === !1 ? ad(e.parent) : e.projection;
}
function od({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && ku(e);
  function a(a, o) {
    let s,
      c = { ...(0, y.useContext)(eu), ...a, layoutId: sd(a) },
      { isStatic: l } = c,
      u = qu(a),
      d = r(a, l);
    if (!l && cu) {
      cd(c, e);
      let n = ld(c);
      ((s = n.MeasureLayout), (u.visualElement = rd(i, d, c, t, n.ProjectionNode)));
    }
    return (0, I.jsxs)(zu.Provider, {
      value: u,
      children: [
        s && u.visualElement ? (0, I.jsx)(s, { visualElement: u.visualElement, ...c }) : null,
        n(i, a, Zu(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`}`;
  let o = (0, y.forwardRef)(a);
  return ((o[Yu] = i), o);
}
function sd({ layoutId: e }) {
  let t = (0, y.useContext)(Zl).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function cd(e, t) {
  (0, y.useContext)(Eu).strict;
}
function ld(e) {
  let { drag: t, layout: n } = Ou;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var ud = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function dd(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(ud.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function fd(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function pd(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = fd(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if ((typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`)) {
    let [i, a] = fd(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var md = (e) => Array.isArray(e),
  hd = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  gd = (e) => (md(e) ? e[e.length - 1] || 0 : e),
  _d = (e) => !!(e && e.getVelocity);
function vd(e) {
  let t = _d(e) ? e.get() : e;
  return hd(t) ? t.toValue() : t;
}
function yd({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, a) {
  let o = { latestValues: xd(r, i, a, e), renderState: t() };
  return (
    n && ((o.onMount = (e) => n({ props: r, current: e, ...o })), (o.onUpdate = (e) => n(e))),
    o
  );
}
var bd = (e) => (t, n) => {
  let r = (0, y.useContext)(zu),
    i = (0, y.useContext)($l),
    a = () => yd(e, t, r, i);
  return n ? a() : Ql(a);
};
function xd(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = vd(a[e]);
  let { initial: o, animate: s } = e,
    c = Wu(e),
    l = Gu(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Vu(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = pd(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var Sd = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Cd = new Set(Sd),
  wd = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Td = wd(`--`),
  Ed = wd(`var(--`),
  Dd = (e) => (Ed(e) ? Od.test(e.split(`/*`)[0].trim()) : !1),
  Od = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  kd = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  Ad = (e, t, n) => (n > t ? t : n < e ? e : n),
  jd = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e },
  Md = { ...jd, transform: (e) => Ad(0, 1, e) },
  Nd = { ...jd, default: 1 },
  Pd = (e) => ({
    test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Fd = Pd(`deg`),
  Id = Pd(`%`),
  Q = Pd(`px`),
  Ld = Pd(`vh`),
  Rd = Pd(`vw`),
  zd = { ...Id, parse: (e) => Id.parse(e) / 100, transform: (e) => Id.transform(e * 100) },
  Bd = {
    borderWidth: Q,
    borderTopWidth: Q,
    borderRightWidth: Q,
    borderBottomWidth: Q,
    borderLeftWidth: Q,
    borderRadius: Q,
    radius: Q,
    borderTopLeftRadius: Q,
    borderTopRightRadius: Q,
    borderBottomRightRadius: Q,
    borderBottomLeftRadius: Q,
    width: Q,
    maxWidth: Q,
    height: Q,
    maxHeight: Q,
    top: Q,
    right: Q,
    bottom: Q,
    left: Q,
    padding: Q,
    paddingTop: Q,
    paddingRight: Q,
    paddingBottom: Q,
    paddingLeft: Q,
    margin: Q,
    marginTop: Q,
    marginRight: Q,
    marginBottom: Q,
    marginLeft: Q,
    backgroundPositionX: Q,
    backgroundPositionY: Q,
  },
  Vd = {
    rotate: Fd,
    rotateX: Fd,
    rotateY: Fd,
    rotateZ: Fd,
    scale: Nd,
    scaleX: Nd,
    scaleY: Nd,
    scaleZ: Nd,
    skew: Fd,
    skewX: Fd,
    skewY: Fd,
    distance: Q,
    translateX: Q,
    translateY: Q,
    translateZ: Q,
    x: Q,
    y: Q,
    z: Q,
    perspective: Q,
    transformPerspective: Q,
    opacity: Md,
    originX: zd,
    originY: zd,
    originZ: Q,
  },
  Hd = { ...jd, transform: Math.round },
  Ud = { ...Bd, ...Vd, zIndex: Hd, size: Q, fillOpacity: Md, strokeOpacity: Md, numOctaves: Hd },
  Wd = { x: `translateX`, y: `translateY`, z: `translateZ`, transformPerspective: `perspective` },
  Gd = Sd.length;
function Kd(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Gd; a++) {
    let o = Sd[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c = typeof s == `number` ? s === (o.startsWith(`scale`) ? 1 : 0) : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = kd(s, Ud[o]);
      if (!c) {
        i = !1;
        let t = Wd[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function qd(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Cd.has(e)) {
      o = !0;
      continue;
    } else if (Td(e)) {
      i[e] = n;
      continue;
    } else {
      let t = kd(n, Ud[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = Kd(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var Jd = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  Yd = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Xd(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Jd : Yd;
  e[a.offset] = Q.transform(-r);
  let o = Q.transform(t),
    s = Q.transform(n);
  e[a.array] = `${o} ${s}`;
}
function Zd(e, t, n) {
  return typeof e == `string` ? e : Q.transform(t + n * e);
}
function Qd(e, t, n) {
  return `${Zd(t, e.x, e.width)} ${Zd(n, e.y, e.height)}`;
}
function $d(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d
) {
  if ((qd(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = Qd(m, i === void 0 ? 0.5 : i, a === void 0 ? 0.5 : a)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && Xd(f, o, s, c, !1));
}
var ef = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  tf = () => ({ ...ef(), attrs: {} }),
  nf = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function rf(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var af = new Set([
  `baseFrequency`,
  `diffuseConstant`,
  `kernelMatrix`,
  `kernelUnitLength`,
  `keySplines`,
  `keyTimes`,
  `limitingConeAngle`,
  `markerHeight`,
  `markerWidth`,
  `numOctaves`,
  `targetX`,
  `targetY`,
  `surfaceScale`,
  `specularConstant`,
  `specularExponent`,
  `stdDeviation`,
  `tableValues`,
  `viewBox`,
  `gradientTransform`,
  `pathLength`,
  `startOffset`,
  `textLength`,
  `lengthAdjust`,
]);
function of(e, t, n, r) {
  rf(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(af.has(n) ? n : Qu(n), t.attrs[n]);
}
var sf = {};
function cf(e) {
  Object.assign(sf, e);
}
function lf(e, { layout: t, layoutId: n }) {
  return (
    Cd.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!sf[e] || e === `opacity`))
  );
}
function uf(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (_d(r[a]) || (t.style && _d(t.style[a])) || lf(a, e) || n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function df(e, t, n) {
  let r = uf(e, t, n);
  for (let n in e)
    if (_d(e[n]) || _d(t[n])) {
      let t = Sd.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function ff(e, t) {
  try {
    t.dimensions = typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var pf = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  mf = {
    useVisualState: bd({
      scrapeMotionValuesFromProps: df,
      createRenderState: tf,
      onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (Cd.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < pf.length; n++) {
            let r = pf[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          Z.read(() => {
            (ff(n, r),
              Z.render(() => {
                ($d(r, i, nf(n.tagName), e.transformTemplate), of(n, r));
              }));
          });
      },
    }),
  },
  hf = { useVisualState: bd({ scrapeMotionValuesFromProps: uf, createRenderState: ef }) };
function gf(e, t, n) {
  for (let r in t) !_d(t[r]) && !lf(r, n) && (e[r] = t[r]);
}
function _f({ transformTemplate: e }, t) {
  return (0, y.useMemo)(() => {
    let n = ef();
    return (qd(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function vf(e, t) {
  let n = e.style || {},
    r = {};
  return (gf(r, n, e), Object.assign(r, _f(e, t)), r);
}
function yf(e, t) {
  let n = {},
    r = vf(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function bf(e, t, n, r) {
  let i = (0, y.useMemo)(() => {
    let n = tf();
    return ($d(n, t, nf(r), e.transformTemplate), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (gf(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function xf(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (dd(t) ? bf : yf)(n, i, a, t),
      s = Lu(n, typeof t == `string`, e),
      c = t === y.Fragment ? {} : { ...s, ...o, ref: r },
      { children: l } = n,
      u = (0, y.useMemo)(() => (_d(l) ? l.get() : l), [l]);
    return (0, y.createElement)(t, { ...c, children: u });
  };
}
function Sf(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return od({
      ...(dd(n) ? mf : hf),
      preloadedFeatures: e,
      useRender: xf(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function Cf(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function wf(e, t, n) {
  let r = e.getProps();
  return pd(r, t, n === void 0 ? r.custom : n, e);
}
var Tf = mu(() => window.ScrollTimeline !== void 0),
  Ef = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)), (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(this.animations.map((e) => (`finished` in e ? e.finished : e)));
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((n) => {
        if (Tf() && n.attachTimeline) return n.attachTimeline(e);
        if (typeof t == `function`) return t(n);
      });
      return () => {
        n.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll(`flatten`);
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  },
  Df = class extends Ef {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function Of(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var kf = 2e4;
function Af(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function jf(e) {
  return typeof e == `function`;
}
function Mf(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var Nf = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Pf = { linearEasing: void 0 };
function Ff(e, t) {
  let n = mu(e);
  return () => Pf[t] ?? n();
}
var If = Ff(() => {
    try {
      document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Lf = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e(hu(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Rf(e) {
  return !!(
    (typeof e == `function` && If()) ||
    !e ||
    (typeof e == `string` && (e in Bf || If())) ||
    Nf(e) ||
    (Array.isArray(e) && e.every(Rf))
  );
}
var zf = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Bf = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: zf([0, 0.65, 0.55, 1]),
    circOut: zf([0.55, 0, 1, 0.45]),
    backIn: zf([0.31, 0.01, 0.66, -0.59]),
    backOut: zf([0.33, 1.53, 0.69, 0.99]),
  };
function Vf(e, t) {
  if (e)
    return typeof e == `function` && If()
      ? Lf(e, t)
      : Nf(e)
        ? zf(e)
        : Array.isArray(e)
          ? e.map((e) => Vf(e, t) || Bf.easeOut)
          : Bf[e];
}
var Hf = { x: !1, y: !1 };
function Uf() {
  return Hf.x || Hf.y;
}
function Wf(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Gf(e, t) {
  let n = Wf(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Kf(e) {
  return (t) => {
    t.pointerType === `touch` || Uf() || e(t);
  };
}
function qf(e, t, n = {}) {
  let [r, i, a] = Gf(e, n),
    o = Kf((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = Kf((e) => {
        (r(e), n.removeEventListener(`pointerleave`, a));
      });
      n.addEventListener(`pointerleave`, a, i);
    });
  return (
    r.forEach((e) => {
      e.addEventListener(`pointerenter`, o, i);
    }),
    a
  );
}
var Jf = (e, t) => (t ? (e === t ? !0 : Jf(e, t.parentElement)) : !1),
  Yf = (e) =>
    e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
  Xf = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Zf(e) {
  return Xf.has(e.tagName) || e.tabIndex !== -1;
}
var Qf = new WeakSet();
function $f(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function ep(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
var tp = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = $f(() => {
    if (Qf.has(n)) return;
    ep(n, `down`);
    let e = $f(() => {
      ep(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => ep(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function np(e) {
  return Yf(e) && !Uf();
}
function rp(e, t, n = {}) {
  let [r, i, a] = Gf(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!np(e) || Qf.has(r)) return;
      Qf.add(r);
      let a = t(e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            !(!np(e) || !Qf.has(r)) &&
              (Qf.delete(r), typeof a == `function` && a(e, { success: t })));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || Jf(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i), window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      (!Zf(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => tp(e, i), i));
    }),
    a
  );
}
function ip(e) {
  return e === `x` || e === `y`
    ? Hf[e]
      ? null
      : ((Hf[e] = !0),
        () => {
          Hf[e] = !1;
        })
    : Hf.x || Hf.y
      ? null
      : ((Hf.x = Hf.y = !0),
        () => {
          Hf.x = Hf.y = !1;
        });
}
var ap = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...Sd]),
  op;
function sp() {
  op = void 0;
}
var cp = {
  now: () => (
    op === void 0 &&
      cp.set(wu.isProcessing || vu.useManualTiming ? wu.timestamp : performance.now()),
    op
  ),
  set: (e) => {
    ((op = e), queueMicrotask(sp));
  },
};
function lp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function up(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var dp = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (lp(this.subscriptions, e), () => up(this.subscriptions, e));
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function fp(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var pp = 30,
  mp = (e) => !isNaN(parseFloat(e)),
  hp = { current: void 0 },
  gp = class {
    constructor(e, t = {}) {
      ((this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = cp.now();
          (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t && this.events.renderRequest && this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = cp.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = mp(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new dp());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              Z.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (hp.current && hp.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = cp.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > pp)
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, pp);
      return fp(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function _p(e, t) {
  return new gp(e, t);
}
function vp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _p(n));
}
function yp(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = wf(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) vp(e, t, gd(i[t]));
}
function bp(e) {
  return !!(_d(e) && e.add);
}
function xp(e, t) {
  let n = e.getValue(`willChange`);
  if (bp(n)) return n.add(t);
}
function Sp(e) {
  return e.props[$u];
}
var Cp = { current: !1 },
  wp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Tp = 1e-7,
  Ep = 12;
function Dp(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = wp(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > Tp && ++s < Ep);
  return o;
}
function Op(e, t, n, r) {
  if (e === t && n === r) return du;
  let i = (t) => Dp(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : wp(i(e), t, r));
}
var kp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Ap = (e) => (t) => 1 - e(1 - t),
  jp = Op(0.33, 1.53, 0.69, 0.99),
  Mp = Ap(jp),
  Np = kp(Mp),
  Pp = (e) => ((e *= 2) < 1 ? 0.5 * Mp(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  Fp = (e) => 1 - Math.sin(Math.acos(e)),
  Ip = Ap(Fp),
  Lp = kp(Fp),
  Rp = (e) => /^0[^.\s]+$/u.test(e);
function zp(e) {
  return typeof e == `number` ? e === 0 : e === null ? !0 : e === `none` || e === `0` || Rp(e);
}
var Bp = (e) => Math.round(e * 1e5) / 1e5,
  Vp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Hp(e) {
  return e == null;
}
var Up =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Wp = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Up.test(n) && n.startsWith(e)) ||
      (t && !Hp(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Gp = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Vp);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Kp = (e) => Ad(0, 255, e),
  qp = { ...jd, transform: (e) => Math.round(Kp(e)) },
  Jp = {
    test: Wp(`rgb`, `red`),
    parse: Gp(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      qp.transform(e) +
      `, ` +
      qp.transform(t) +
      `, ` +
      qp.transform(n) +
      `, ` +
      Bp(Md.transform(r)) +
      `)`,
  };
function Yp(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Xp = { test: Wp(`#`), parse: Yp, transform: Jp.transform },
  Zp = {
    test: Wp(`hsl`, `hue`),
    parse: Gp(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      Id.transform(Bp(t)) +
      `, ` +
      Id.transform(Bp(n)) +
      `, ` +
      Bp(Md.transform(r)) +
      `)`,
  },
  Qp = {
    test: (e) => Jp.test(e) || Xp.test(e) || Zp.test(e),
    parse: (e) => (Jp.test(e) ? Jp.parse(e) : Zp.test(e) ? Zp.parse(e) : Xp.parse(e)),
    transform: (e) =>
      typeof e == `string` ? e : e.hasOwnProperty(`red`) ? Jp.transform(e) : Zp.transform(e),
  },
  $p =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function em(e) {
  return (
    isNaN(e) && typeof e == `string` && (e.match(Vp)?.length || 0) + (e.match($p)?.length || 0) > 0
  );
}
var tm = `number`,
  nm = `color`,
  rm = `var`,
  im = `var(`,
  am = '${}',
  om =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function sm(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        om,
        (e) => (
          Qp.test(e)
            ? (r.color.push(a), i.push(nm), n.push(Qp.parse(e)))
            : e.startsWith(im)
              ? (r.var.push(a), i.push(rm), n.push(e))
              : (r.number.push(a), i.push(tm), n.push(parseFloat(e))),
          ++a,
          am
        )
      )
      .split(am),
    indexes: r,
    types: i,
  };
}
function cm(e) {
  return sm(e).values;
}
function lm(e) {
  let { split: t, types: n } = sm(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        t === tm ? (i += Bp(e[a])) : t === nm ? (i += Qp.transform(e[a])) : (i += e[a]);
      }
    return i;
  };
}
var um = (e) => (typeof e == `number` ? 0 : e);
function dm(e) {
  let t = cm(e);
  return lm(e)(t.map(um));
}
var fm = { test: em, parse: cm, createTransformer: lm, getAnimatableNone: dm },
  pm = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function mm(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Vp) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = pm.has(t) ? 1 : 0;
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var hm = /\b([a-z-]*)\(.*?\)/gu,
  gm = {
    ...fm,
    getAnimatableNone: (e) => {
      let t = e.match(hm);
      return t ? t.map(mm).join(` `) : e;
    },
  },
  _m = {
    ...Ud,
    color: Qp,
    backgroundColor: Qp,
    outlineColor: Qp,
    fill: Qp,
    stroke: Qp,
    borderColor: Qp,
    borderTopColor: Qp,
    borderRightColor: Qp,
    borderBottomColor: Qp,
    borderLeftColor: Qp,
    filter: gm,
    WebkitFilter: gm,
  },
  vm = (e) => _m[e];
function ym(e, t) {
  let n = vm(e);
  return (n !== gm && (n = fm), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
var bm = new Set([`auto`, `none`, `0`]);
function xm(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !bm.has(t) && sm(t).values.length && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] = ym(n, i);
}
var Sm = (e) => e === jd || e === Q,
  Cm = (e, t) => parseFloat(e.split(`, `)[t]),
  wm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Cm(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? Cm(t[1], e) : 0;
      }
    },
  Tm = new Set([`x`, `y`, `z`]),
  Em = Sd.filter((e) => !Tm.has(e));
function Dm(e) {
  let t = [];
  return (
    Em.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith(`scale`) ? 1 : 0));
    }),
    t
  );
}
var Om = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: wm(4, 13),
  y: wm(5, 14),
};
((Om.translateX = Om.x), (Om.translateY = Om.y));
var km = new Set(),
  Am = !1,
  jm = !1;
function Mm() {
  if (jm) {
    let e = Array.from(km).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Dm(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((jm = !1), (Am = !1), km.forEach((e) => e.complete()), km.clear());
}
function Nm() {
  km.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (jm = !0));
  });
}
function Pm() {
  (Nm(), Mm());
}
var Fm = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.isScheduled = !0),
        this.isAsync
          ? (km.add(this), Am || ((Am = !0), Z.read(Nm), Z.resolveKeyframes(Mm)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ((this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        km.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), km.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  Im = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Lm = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Rm(e) {
  let t = Lm.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var zm = 4;
function Bm(e, t, n = 1) {
  pu(
    n <= zm,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = Rm(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Im(e) ? parseFloat(e) : e;
  }
  return Dd(i) ? Bm(i, t, n + 1) : i;
}
var Vm = (e) => (t) => t.test(e),
  Hm = [jd, Q, Id, Fd, Rd, Ld, { test: (e) => e === `auto`, parse: (e) => e }],
  Um = (e) => Hm.find(Vm(e)),
  Wm = class extends Fm {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Dd(r))) {
          let i = Bm(r, t.current);
          (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !ap.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = Um(r),
        o = Um(i);
      if (a !== o)
        if (Sm(a) && Sm(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) zp(e[t]) && n.push(t);
      n.length && xm(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = Om[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = Om[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Gm = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (fm.test(e) || e === `0`) && !e.startsWith(`url(`))
        );
function Km(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function qm(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Gm(i, t),
    s = Gm(a, t);
  return (
    fu(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`
    ),
    !o || !s ? !1 : Km(e) || ((n === `spring` || jf(n)) && r)
  );
}
var Jm = (e) => e !== null;
function Ym(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(Jm),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var Xm = 40,
  Zm = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      ...o
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = cp.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > Xm
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (!this._resolved && !this.hasAttemptedResolve && Pm(), this._resolved);
    }
    onKeyframesResolved(e, t) {
      ((this.resolvedAt = cp.now()), (this.hasAttemptedResolve = !0));
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !qm(e, n, r, i))
        if (Cp.current || !a) {
          (s && s(Ym(e, this.options, t)), o && o(), this.resolveFinishedPromise());
          return;
        } else this.options.duration = 0;
      let l = this.initPlayback(e, t);
      l !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...l }), this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      ((this.options.type = `keyframes`), (this.options.ease = `linear`));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Qm = (e, t, n) => e + (t - e) * n;
function $m(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function eh({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = $m(s, r, e + 1 / 3)), (a = $m(s, r, e)), (o = $m(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function th(e, t) {
  return (n) => (n > 0 ? t : e);
}
var nh = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  rh = [Xp, Jp, Zp],
  ih = (e) => rh.find((t) => t.test(e));
function ah(e) {
  let t = ih(e);
  if ((fu(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t))
    return !1;
  let n = t.parse(e);
  return (t === Zp && (n = eh(n)), n);
}
var oh = (e, t) => {
    let n = ah(e),
      r = ah(t);
    if (!n || !r) return th(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = nh(n.red, r.red, e)),
      (i.green = nh(n.green, r.green, e)),
      (i.blue = nh(n.blue, r.blue, e)),
      (i.alpha = Qm(n.alpha, r.alpha, e)),
      Jp.transform(i)
    );
  },
  sh = (e, t) => (n) => t(e(n)),
  ch = (...e) => e.reduce(sh),
  lh = new Set([`none`, `hidden`]);
function uh(e, t) {
  return lh.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function dh(e, t) {
  return (n) => Qm(e, t, n);
}
function fh(e) {
  return typeof e == `number`
    ? dh
    : typeof e == `string`
      ? Dd(e)
        ? th
        : Qp.test(e)
          ? oh
          : gh
      : Array.isArray(e)
        ? ph
        : typeof e == `object`
          ? Qp.test(e)
            ? oh
            : mh
          : th;
}
function ph(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => fh(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function mh(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = fh(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function hh(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
var gh = (e, t) => {
  let n = fm.createTransformer(t),
    r = sm(e),
    i = sm(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (lh.has(e) && !i.values.length) || (lh.has(t) && !r.values.length)
      ? uh(e, t)
      : ch(ph(hh(r, i), i.values), n)
    : (fu(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      th(e, t));
};
function _h(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? Qm(e, t, n)
    : fh(e)(e, t);
}
var vh = 5;
function yh(e, t, n) {
  let r = Math.max(t - vh, 0);
  return fp(n - e(r), t - r);
}
var bh = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  xh = 0.001;
function Sh({
  duration: e = bh.duration,
  bounce: t = bh.bounce,
  velocity: n = bh.velocity,
  mass: r = bh.mass,
}) {
  let i, a;
  fu(e <= gu(bh.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  ((o = Ad(bh.minDamping, bh.maxDamping, o)),
    (e = Ad(bh.minDuration, bh.maxDuration, _u(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Th(t, o),
            c = Math.exp(-i);
          return xh - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Th(t ** 2, o);
          return ((-i(t) + xh > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -xh + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = wh(i, a, s);
  if (((e = gu(e)), isNaN(c))) return { stiffness: bh.stiffness, damping: bh.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var Ch = 12;
function wh(e, t, n) {
  let r = n;
  for (let n = 1; n < Ch; n++) r -= e(r) / t(r);
  return r;
}
function Th(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Eh = [`duration`, `bounce`],
  Dh = [`stiffness`, `damping`, `mass`];
function Oh(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function kh(e) {
  let t = {
    velocity: bh.velocity,
    stiffness: bh.stiffness,
    damping: bh.damping,
    mass: bh.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Oh(e, Dh) && Oh(e, Eh))
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * Ad(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: bh.mass, stiffness: i, damping: a };
    } else {
      let n = Sh(e);
      ((t = { ...t, ...n, mass: bh.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Ah(e = bh.visualDuration, t = bh.bounce) {
  let n = typeof e == `object` ? e : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = kh({ ...n, velocity: -_u(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = _u(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? bh.restSpeed.granular : bh.restSpeed.default),
    (i ||= v ? bh.restDelta.granular : bh.restDelta.default));
  let y;
  if (h < 1) {
    let e = Th(_, h);
    y = (t) =>
      o - Math.exp(-h * _ * t) * (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t));
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e;
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = 0;
        h < 1 && (n = e === 0 ? gu(m) : yh(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(Af(b), kf),
        t = Lf((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function jh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) => (s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c),
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Ah({
          keyframes: [f.value, m(f.value)],
          velocity: yh(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
var Mh = Op(0.42, 0, 1, 1),
  Nh = Op(0, 0, 0.58, 1),
  Ph = Op(0.42, 0, 0.58, 1),
  Fh = (e) => Array.isArray(e) && typeof e[0] != `number`,
  Ih = {
    linear: du,
    easeIn: Mh,
    easeInOut: Ph,
    easeOut: Nh,
    circIn: Fp,
    circInOut: Lp,
    circOut: Ip,
    backIn: Mp,
    backInOut: Np,
    backOut: jp,
    anticipate: Pp,
  },
  Lh = (e) => {
    if (Nf(e)) {
      pu(e.length === 4, `Cubic bezier arrays must contain four numerical values.`);
      let [t, n, r, i] = e;
      return Op(t, n, r, i);
    } else if (typeof e == `string`)
      return (pu(Ih[e] !== void 0, `Invalid easing type '${e}'`), Ih[e]);
    return e;
  };
function Rh(e, t, n) {
  let r = [],
    i = n || _h,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = ch(Array.isArray(t) ? t[n] || du : t, a)), r.push(a));
  }
  return r;
}
function zh(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((pu(a === t.length, `Both input and output ranges must be the same length`), a === 1))
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Rh(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = hu(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(Ad(e[0], e[a - 1], t)) : l;
}
function Bh(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = hu(0, t, r);
    e.push(Qm(n, 1, i));
  }
}
function Vh(e) {
  let t = [0];
  return (Bh(t, e.length - 1), t);
}
function Hh(e, t) {
  return e.map((e) => e * t);
}
function Uh(e, t) {
  return e.map(() => t || Ph).splice(0, e.length - 1);
}
function Wh({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = Fh(r) ? r.map(Lh) : Lh(r),
    a = { done: !1, value: t[0] },
    o = zh(Hh(n && n.length === t.length ? n : Vh(t), e), t, {
      ease: Array.isArray(i) ? i : Uh(t, i),
    });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
var Gh = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => Z.update(t, !0),
      stop: () => Cu(t),
      now: () => (wu.isProcessing ? wu.timestamp : cp.now()),
    };
  },
  Kh = { decay: jh, inertia: jh, tween: Wh, keyframes: Wh, spring: Ah },
  qh = (e) => e / 100,
  Jh = class extends Zm {
    constructor(e) {
      (super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = `running`),
        (this.startTime = null),
        (this.state = `idle`),
        (this.stop = () => {
          if ((this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)) return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        }));
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new (r?.KeyframeResolver || Fm)(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes)));
    }
    initPlayback(e) {
      let {
          type: t = `keyframes`,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = jf(t) ? t : Kh[t] || Wh,
        s,
        c;
      o !== Wh && typeof e[0] != `number` && ((s = ch(qh, _h(e[0], e[1]))), (e = [0, 100]));
      let l = o({ ...this.options, keyframes: e });
      (i === `mirror` && (c = o({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
        l.calculatedDuration === null && (l.calculatedDuration = Af(l)));
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r;
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === `paused` || !e
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let { delay: d, repeat: f, repeatType: p, repeatDelay: m, onUpdate: h } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 && (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime === null
            ? (this.currentTime = Math.round(e - this.startTime) * this.speed)
            : (this.currentTime = this.holdTime));
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` && this.holdTime === null && (this.currentTime = l));
      let v = this.currentTime,
        y = i;
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 && (p === `reverse` ? ((n = 1 - n), m && (n -= m / u)) : p === `mirror` && (y = a)),
          (v = Ad(0, 1, n) * u));
      }
      let b = _ ? { done: !1, value: s[0] } : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ && c !== null && (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null && (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = Ym(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? _u(e.calculatedDuration) : 0;
    }
    get time() {
      return _u(this.currentTime);
    }
    set time(e) {
      ((e = gu(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver && (this.startTime = this.driver.now() - e / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      ((this.playbackSpeed = e), t && (this.time = _u(this.currentTime)));
    }
    play() {
      if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = Gh, onPlay: t, startTime: n } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), t && t());
      let r = this.driver.now();
      (this.holdTime === null
        ? this.startTime
          ? this.state === `finished` && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === `finished` && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = `paused`;
        return;
      }
      ((this.state = `paused`), (this.holdTime = this.currentTime ?? 0));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.pendingPlayState = this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = `finished`));
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
  },
  Yh = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function Xh(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeInOut`,
    times: c,
  } = {}
) {
  let l = { [t]: n };
  c && (l.offset = c);
  let u = Vf(s, i);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? `linear` : u,
      fill: `both`,
      iterations: a + 1,
      direction: o === `reverse` ? `alternate` : `normal`,
    })
  );
}
var Zh = mu(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  Qh = 10,
  $h = 2e4;
function eg(e) {
  return jf(e.type) || e.type === `spring` || !Rf(e.ease);
}
function tg(e, t) {
  let n = new Jh({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    a = 0;
  for (; !r.done && a < $h; ) ((r = n.sample(a)), i.push(r.value), (a += Qh));
  return { times: void 0, keyframes: i, duration: a - Qh, ease: `linear` };
}
var ng = { anticipate: Pp, backInOut: Np, circInOut: Lp };
function rg(e) {
  return e in ng;
}
var ig = class extends Zm {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new Wm(i, (e, t) => this.onKeyframesResolved(e, t), t, n, r)),
        this.resolver.scheduleResolve());
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if ((typeof i == `string` && If() && rg(i) && (i = ng[i]), eg(this.options))) {
        let { onComplete: t, onUpdate: o, motionValue: s, element: c, ...l } = this.options,
          u = tg(e, l);
        ((e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`));
      }
      let l = Xh(o.owner.current, s, e, { ...this.options, duration: n, times: r, ease: i });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (Mf(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              (o.set(Ym(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        { animation: l, duration: n, times: r, type: a, ease: i, keyframes: e }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return _u(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return _u(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = gu(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return `idle`;
      let { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      let { resolved: e } = this;
      if (!e) return null;
      let { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return du;
        let { animation: n } = t;
        Mf(n, e);
      }
      return du;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      (t.playState === `finished` && this.updateFinishedPromise(), t.play());
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if ((this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)) return;
      (this.resolveFinishedPromise(), this.updateFinishedPromise());
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t, keyframes: n, duration: r, type: i, ease: a, times: o } = e;
      if (t.playState === `idle` || t.playState === `finished`) return;
      if (this.time) {
        let { motionValue: e, onUpdate: t, onComplete: s, element: c, ...l } = this.options,
          u = new Jh({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = gu(this.time);
        e.setWithVelocity(u.sample(d - Qh).value, u.sample(d).value, Qh);
      }
      let { onStop: s } = this.options;
      (s && s(), this.cancel());
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement)) return !1;
      let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
      return (
        Zh() && n && Yh.has(n) && !s && !c && !r && i !== `mirror` && a !== 0 && o !== `inertia`
      );
    }
  },
  ag = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  og = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  sg = { type: `keyframes`, duration: 0.8 },
  cg = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  lg = (e, { keyframes: t }) =>
    t.length > 2 ? sg : Cd.has(e) ? (e.startsWith(`scale`) ? og(t[1]) : ag) : cg;
function ug({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
var dg =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = Of(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= gu(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        (t.set(e), s.onUpdate && s.onUpdate(e));
      },
      onComplete: () => {
        (o(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    (ug(s) || (u = { ...u, ...lg(e, u) }),
      (u.duration &&= gu(u.duration)),
      (u.repeatDelay &&= gu(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (Cp.current || vu.skipAnimations) && ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = Ym(u.keyframes, s);
      if (e !== void 0)
        return (
          Z.update(() => {
            (u.onUpdate(e), u.onComplete());
          }),
          new Df([])
        );
    }
    return !a && ig.supports(u) ? new ig(u) : new Jh(u);
  };
function fg({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function pg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && fg(l, t))) continue;
    let o = { delay: n, ...Of(a || {}, t) },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = Sp(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, Z);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    (xp(e, t), r.start(dg(t, r, i, e.shouldReduceMotion && ap.has(t) ? { type: !1 } : o, e, u)));
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        Z.update(() => {
          o && yp(e, o);
        });
      }),
    c
  );
}
function mg(e, t, n = {}) {
  let r = wf(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(pg(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
            return hg(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function hg(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(gg)
      .forEach((e, r) => {
        (e.notify(`AnimationStart`, t),
          o.push(mg(e, t, { ...a, delay: n + c(r) }).then(() => e.notify(`AnimationComplete`, t))));
      }),
    Promise.all(o)
  );
}
function gg(e, t) {
  return e.sortNodePosition(t);
}
function _g(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => mg(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = mg(e, t, n);
  else {
    let i = typeof t == `function` ? wf(e, t, n.custom) : t;
    r = Promise.all(pg(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var vg = Uu.length;
function yg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && yg(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < vg; n++) {
    let r = Uu[n],
      i = e.props[r];
    (Bu(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var bg = [...Hu].reverse(),
  xg = Hu.length;
function Sg(e) {
  return (t) => Promise.all(t.map(({ animation: t, options: n }) => _g(e, t, n)));
}
function Cg(e) {
  let t = Sg(e),
    n = Eg(),
    r = !0,
    i = (t) => (n, r) => {
      let i = wf(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = yg(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < xg; t++) {
      let f = bg[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = Bu(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) || (!m && !p.prevProp) || Vu(m) || typeof m == `boolean`)
      )
        continue;
      let v = wg(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        w = { ...C, ...S },
        T = (t) => {
          ((y = !0), l.has(t) && ((b = !0), l.delete(t)), (p.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = md(t) && md(n) ? !Cf(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : T(e)
            : t !== void 0 && l.has(e)
              ? T(e)
              : (p.protectedKeys[e] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive && (u = { ...u, ...S }),
        r && e.blockInitialAnimation && (y = !1),
        y && (!(_ && v) || b) && c.push(...x.map((e) => ({ animation: e, options: { type: f } }))));
    }
    if (l.size) {
      let t = {};
      (l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        c.push({ animation: t }));
    }
    let f = !!c.length;
    return (
      r && (o.initial === !1 || o.initial === o.animate) && !e.manuallyAnimateOnMount && (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    ((i = e.variantChildren) == null || i.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let a = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      ((n = Eg()), (r = !0));
    },
  };
}
function wg(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Cf(t, e) : !1;
}
function Tg(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Eg() {
  return {
    animate: Tg(!0),
    whileInView: Tg(),
    whileHover: Tg(),
    whileTap: Tg(),
    whileDrag: Tg(),
    whileFocus: Tg(),
    exit: Tg(),
  };
}
var Dg = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  Og = class extends Dg {
    constructor(e) {
      (super(e), (e.animationState ||= Cg(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Vu(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this));
    }
  },
  kg = 0,
  Ag = {
    animation: { Feature: Og },
    exit: {
      Feature: class extends Dg {
        constructor() {
          (super(...arguments), (this.id = kg++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
function jg(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Mg(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var Ng = (e) => (t) => Yf(t) && e(t, Mg(t));
function Pg(e, t, n, r) {
  return jg(e, t, Ng(n), r);
}
var Fg = (e, t) => Math.abs(e - t);
function Ig(e, t) {
  let n = Fg(e.x, t.x),
    r = Fg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Lg = class {
  constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = Bg(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = Ig(e.offset, { x: 0, y: 0 }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = wu;
        this.history.push({ ...r, timestamp: i });
        let { onStart: a, onMove: o } = this.handlers;
        (t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e));
      }),
      (this.handlePointerMove = (e, t) => {
        ((this.lastMoveEvent = e),
          (this.lastMoveEventInfo = Rg(t, this.transformPagePoint)),
          Z.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if ((this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        let a = Bg(
          e.type === `pointercancel` ? this.lastMoveEventInfo : Rg(t, this.transformPagePoint),
          this.history
        );
        (this.startEvent && n && n(e, a), r && r(e, a));
      }),
      !Yf(e))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window));
    let a = Rg(Mg(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = wu;
    this.history = [{ ...o, timestamp: s }];
    let { onSessionStart: c } = t;
    (c && c(e, Bg(a, this.history)),
      (this.removeListeners = ch(
        Pg(this.contextWindow, `pointermove`, this.handlePointerMove),
        Pg(this.contextWindow, `pointerup`, this.handlePointerUp),
        Pg(this.contextWindow, `pointercancel`, this.handlePointerUp)
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Cu(this.updatePoint));
  }
};
function Rg(e, t) {
  return t ? { point: t(e.point) } : e;
}
function zg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bg({ point: e }, t) {
  return { point: e, delta: zg(e, Hg(t)), offset: zg(e, Vg(t)), velocity: Ug(t, 0.1) };
}
function Vg(e) {
  return e[0];
}
function Hg(e) {
  return e[e.length - 1];
}
function Ug(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Hg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > gu(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let a = _u(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var Wg = 1e-4,
  Gg = 1 - Wg,
  Kg = 1 + Wg,
  qg = 0.01,
  Jg = 0 - qg,
  Yg = 0 + qg;
function Xg(e) {
  return e.max - e.min;
}
function Zg(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Qg(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Qm(t.min, t.max, e.origin)),
    (e.scale = Xg(n) / Xg(t)),
    (e.translate = Qm(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Gg && e.scale <= Kg) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Jg && e.translate <= Yg) || isNaN(e.translate)) && (e.translate = 0));
}
function $g(e, t, n, r) {
  (Qg(e.x, t.x, n.x, r ? r.originX : void 0), Qg(e.y, t.y, n.y, r ? r.originY : void 0));
}
function e_(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Xg(t)));
}
function t_(e, t, n) {
  (e_(e.x, t.x, n.x), e_(e.y, t.y, n.y));
}
function n_(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Xg(t)));
}
function r_(e, t, n) {
  (n_(e.x, t.x, n.x), n_(e.y, t.y, n.y));
}
function i_(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Qm(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Qm(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function a_(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function o_(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: a_(e.x, n, i), y: a_(e.y, t, r) };
}
function s_(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function c_(e, t) {
  return { x: s_(e.x, t.x), y: s_(e.y, t.y) };
}
function l_(e, t) {
  let n = 0.5,
    r = Xg(e),
    i = Xg(t);
  return (
    i > r ? (n = hu(t.min, t.max - r, e.min)) : r > i && (n = hu(e.min, e.max - i, t.min)),
    Ad(0, 1, n)
  );
}
function u_(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var d_ = 0.35;
function f_(e = d_) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = d_),
    { x: p_(e, `left`, `right`), y: p_(e, `top`, `bottom`) }
  );
}
function p_(e, t, n) {
  return { min: m_(e, t), max: m_(e, n) };
}
function m_(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var h_ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  g_ = () => ({ x: h_(), y: h_() }),
  __ = () => ({ min: 0, max: 0 }),
  v_ = () => ({ x: __(), y: __() });
function y_(e) {
  return [e(`x`), e(`y`)];
}
function b_({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function x_({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function S_(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function C_(e) {
  return e === void 0 || e === 1;
}
function w_({ scale: e, scaleX: t, scaleY: n }) {
  return !C_(e) || !C_(t) || !C_(n);
}
function T_(e) {
  return w_(e) || E_(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function E_(e) {
  return D_(e.x) || D_(e.y);
}
function D_(e) {
  return e && e !== `0%`;
}
function O_(e, t, n) {
  return n + t * (e - n);
}
function k_(e, t, n, r, i) {
  return (i !== void 0 && (e = O_(e, i, r)), O_(e, n, r) + t);
}
function A_(e, t = 0, n = 1, r, i) {
  ((e.min = k_(e.min, t, n, r, i)), (e.max = k_(e.max, t, n, r, i)));
}
function j_(e, { x: t, y: n }) {
  (A_(e.x, t.translate, t.scale, t.originPoint), A_(e.y, n.translate, n.scale, n.originPoint));
}
var M_ = 0.999999999999,
  N_ = 1.0000000000001;
function P_(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        L_(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), j_(e, o)),
      r && T_(a.latestValues) && L_(e, a.latestValues));
  }
  (t.x < N_ && t.x > M_ && (t.x = 1), t.y < N_ && t.y > M_ && (t.y = 1));
}
function F_(e, t) {
  ((e.min += t), (e.max += t));
}
function I_(e, t, n, r, i = 0.5) {
  A_(e, t, n, Qm(e.min, e.max, i), r);
}
function L_(e, t) {
  (I_(e.x, t.x, t.scaleX, t.scale, t.originX), I_(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function R_(e, t) {
  return b_(S_(e.getBoundingClientRect(), t));
}
function z_(e, t, n) {
  let r = R_(e, n),
    { scroll: i } = t;
  return (i && (F_(r.x, i.offset.x), F_(r.y, i.offset.y)), r);
}
var B_ = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  V_ = new WeakMap(),
  H_ = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = v_()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          (n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(Mg(e).point));
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = ip(n)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            y_((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (Id.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Xg(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && Z.postRender(() => i(e, t)),
            xp(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = W_(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && a(e, t));
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          y_(
            (e) =>
              this.getAnimationState(e) === `paused` && this.getAxisMotionValue(e).animation?.play()
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new Lg(
        e,
        { onSessionStart: r, onStart: i, onMove: a, onSessionEnd: o, resumeAnimation: s },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: B_(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && Z.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: n } = this.getProps();
      (!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !U_(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints && this.constraints[e] && (a = i_(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && Xu(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
          ? (this.constraints = o_(n.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = f_(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          y_((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = u_(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Xu(e)) return !1;
      let n = e.current;
      pu(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = z_(n, r.root, this.visualElement.getTransformPagePoint()),
        a = c_(r.layout.layoutBox, i);
      if (t) {
        let e = t(x_(a));
        ((this.hasMutatedConstraints = !!e), e && (a = b_(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = y_((o) => {
          if (!U_(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          a && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (xp(this.visualElement, e), n.start(dg(e, n, 0, t, this.visualElement, !1)));
    }
    stopAnimation() {
      y_((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      y_((e) => this.getAxisMotionValue(e).animation?.pause());
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
    }
    snapToCursor(e) {
      y_((t) => {
        let { drag: n } = this.getProps();
        if (!U_(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - Qm(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Xu(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      y_((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = l_({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        y_((t) => {
          if (!U_(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(Qm(i, a, r[t]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      V_.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Pg(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          Xu(e) && e.current && (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), Z.read(n));
      let a = jg(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
          this.isDragging &&
            t &&
            (y_((t) => {
              let n = this.getAxisMotionValue(t);
              n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        (a(), t(), i(), o && o());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = d_,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function U_(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function W_(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var G_ = class extends Dg {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = du),
        (this.removeListeners = du),
        (this.controls = new H_(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || du));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  K_ = (e) => (t, n) => {
    e && Z.postRender(() => e(t, n));
  },
  q_ = class extends Dg {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = du));
    }
    onPointerDown(e) {
      this.session = new Lg(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: B_(this.node),
      });
    }
    createPanHandlers() {
      let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
      return {
        onSessionStart: K_(e),
        onStart: K_(t),
        onMove: n,
        onEnd: (e, t) => {
          (delete this.session, r && Z.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Pg(this.node.current, `pointerdown`, (e) =>
        this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  J_ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Y_(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var X_ = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (Q.test(e)) e = parseFloat(e);
        else return e;
      return `${Y_(e, t.target.x)}% ${Y_(e, t.target.y)}%`;
    },
  },
  Z_ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = fm.parse(e);
      if (i.length > 5) return r;
      let a = fm.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = Qm(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  Q_ = class extends y.Component {
    componentDidMount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
        { projection: i } = e;
      (cf(ev),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
        (J_.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0 ? a.willUpdate() : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                Z.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        ed.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function $_(e) {
  let [t, n] = au(),
    r = (0, y.useContext)(Zl);
  return (0, I.jsx)(Q_, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, y.useContext)(nd),
    isPresent: t,
    safeToRemove: n,
  });
}
var ev = {
  borderRadius: {
    ...X_,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: X_,
  borderTopRightRadius: X_,
  borderBottomLeftRadius: X_,
  borderBottomRightRadius: X_,
  boxShadow: Z_,
};
function tv(e, t, n) {
  let r = _d(e) ? e : _p(e);
  return (r.start(dg(``, r, t, n)), r.animation);
}
function nv(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var rv = (e, t) => e.depth - t.depth,
  iv = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (lp(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (up(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(rv), (this.isDirty = !1), this.children.forEach(e));
    }
  };
function av(e, t) {
  let n = cp.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (Cu(r), e(a - t));
    };
  return (Z.read(r, !0), () => Cu(r));
}
var ov = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  sv = ov.length,
  cv = (e) => (typeof e == `string` ? parseFloat(e) : e),
  lv = (e) => typeof e == `number` || Q.test(e);
function uv(e, t, n, r, i, a) {
  i
    ? ((e.opacity = Qm(0, n.opacity === void 0 ? 1 : n.opacity, fv(r))),
      (e.opacityExit = Qm(t.opacity === void 0 ? 1 : t.opacity, 0, pv(r))))
    : a &&
      (e.opacity = Qm(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r
      ));
  for (let i = 0; i < sv; i++) {
    let a = `border${ov[i]}Radius`,
      o = dv(t, a),
      s = dv(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || lv(o) === lv(s)
        ? ((e[a] = Math.max(Qm(cv(o), cv(s), r), 0)), (Id.test(s) || Id.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = Qm(t.rotate || 0, n.rotate || 0, r));
}
function dv(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var fv = mv(0, 0.5, Ip),
  pv = mv(0.5, 0.95, du);
function mv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(hu(e, t, r)));
}
function hv(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function gv(e, t) {
  (hv(e.x, t.x), hv(e.y, t.y));
}
function _v(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function vv(e, t, n, r, i) {
  return ((e -= t), (e = O_(e, 1 / n, r)), i !== void 0 && (e = O_(e, 1 / i, r)), e);
}
function yv(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (Id.test(t) && ((t = parseFloat(t)), (t = Qm(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = Qm(a.min, a.max, r);
  (e === a && (s -= t), (e.min = vv(e.min, t, n, s, i)), (e.max = vv(e.max, t, n, s, i)));
}
function bv(e, t, [n, r, i], a, o) {
  yv(e, t[n], t[r], t[i], t.scale, a, o);
}
var xv = [`x`, `scaleX`, `originX`],
  Sv = [`y`, `scaleY`, `originY`];
function Cv(e, t, n, r) {
  (bv(e.x, t, xv, n ? n.x : void 0, r ? r.x : void 0),
    bv(e.y, t, Sv, n ? n.y : void 0, r ? r.y : void 0));
}
function wv(e) {
  return e.translate === 0 && e.scale === 1;
}
function Tv(e) {
  return wv(e.x) && wv(e.y);
}
function Ev(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Dv(e, t) {
  return Ev(e.x, t.x) && Ev(e.y, t.y);
}
function Ov(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function kv(e, t) {
  return Ov(e.x, t.x) && Ov(e.y, t.y);
}
function Av(e) {
  return Xg(e.x) / Xg(e.y);
}
function jv(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
var Mv = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (lp(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if ((up(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((t) => e === t);
    if (t === 0) return !1;
    let n;
    for (let e = t; e >= 0; e--) {
      let t = this.members[e];
      if (t.isPresent !== !1) {
        n = t;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      (t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Nv(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var Pv = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Fv = typeof window < `u` && window.MotionDebug !== void 0,
  Iv = [``, `X`, `Y`, `Z`],
  Lv = { visibility: `hidden` },
  Rv = 1e3,
  zv = 0;
function Bv(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Vv(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Sp(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, Z, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Vv(r);
}
function Hv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = zv++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Fv && (Pv.totalNodes = Pv.resolvedTargetDeltas = Pv.recalculatedProjection = 0),
            this.nodes.forEach(Gv),
            this.nodes.forEach(Qv),
            this.nodes.forEach($v),
            this.nodes.forEach(Kv),
            Fv && window.MotionDebug.record(Pv));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new iv());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new dp()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = nv(t)), (this.instance = t));
      let { layoutId: r, layout: i, visualElement: a } = this.options;
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1);
        e(t, () => {
          ((this.root.updateBlockedByResize = !0),
            n && n(),
            (n = av(r, 250)),
            J_.hasAnimatedSinceResize &&
              ((J_.hasAnimatedSinceResize = !1), this.nodes.forEach(Zv)));
        });
      }
      (r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            `didUpdate`,
            ({ delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let i = this.options.transition || a.getDefaultTransition() || oy,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = a.getProps(),
                c = !this.targetLayout || !kv(this.targetLayout, r) || n,
                l = !t && n;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l));
                let t = { ...Of(i, `layout`), onPlay: o, onComplete: s };
                ((a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t));
              } else
                (t || Zv(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = r;
            }
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Cu(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(ey), this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vv(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jv));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Yv),
        (this.isUpdating = !1),
        this.nodes.forEach(Xv),
        this.nodes.forEach(Uv),
        this.nodes.forEach(Wv),
        this.clearAllSnapshots());
      let e = cp.now();
      ((wu.delta = Ad(0, 1e3 / 60, e - wu.timestamp)),
        (wu.timestamp = e),
        (wu.isProcessing = !0),
        Tu.update.process(wu),
        Tu.preRender.process(wu),
        Tu.render.process(wu),
        (wu.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), ed.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(qv), this.sharedNodes.forEach(ty));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), Z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Z.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = v_()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t && t.notify(`LayoutMeasure`, this.layout.layoutBox, e ? e.layoutBox : void 0);
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Tv(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || T_(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        uy(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return v_();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(fy))) {
        let { scroll: e } = this.root;
        e && (F_(t.x, e.offset.x), F_(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = v_();
      if ((gv(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && gv(t, e), F_(t.x, i.offset.x), F_(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = v_();
      gv(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          L_(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          T_(r.latestValues) && L_(n, r.latestValues));
      }
      return (T_(this.latestValues) && L_(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = v_();
      gv(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !T_(n.latestValues)) continue;
        w_(n.latestValues) && n.updateSnapshot();
        let r = v_();
        (gv(r, n.measurePageBox()),
          Cv(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (T_(this.latestValues) && Cv(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 ? !0 : e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== wu.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (!(!this.layout || !(r || i))) {
        if (
          ((this.resolvedRelativeTargetAt = wu.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = v_()),
              (this.relativeTargetOrigin = v_()),
              r_(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
              gv(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = v_()), (this.targetWithTransforms = v_())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                t_(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : gv(this.target, this.layout.layoutBox),
                  j_(this.target, this.targetDelta))
                : gv(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let e = this.getClosestProjectingParent();
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = v_()),
                (this.relativeTargetOrigin = v_()),
                r_(this.relativeTargetOrigin, this.target, e.target),
                gv(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Fv && Pv.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || w_(this.parent.latestValues) || E_(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
        this.resolvedRelativeTargetAt === wu.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      gv(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (P_(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = v_())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (_v(this.prevProjectionDelta.x, this.projectionDelta.x),
          _v(this.prevProjectionDelta.y, this.projectionDelta.y)),
        $g(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !jv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !jv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        Fv && Pv.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = g_()),
        (this.projectionDelta = g_()),
        (this.projectionDeltaWithTransform = g_()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = g_();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = v_(),
        s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(ay));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (ny(a.x, e.x, n),
          ny(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (r_(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            iy(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && Dv(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= v_()),
            gv(d, this.relativeTarget)),
          s && ((this.animationValues = i), uv(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (Cu(this.pendingAnimation), void 0)),
        (this.pendingAnimation = Z.update(() => {
          ((J_.hasAnimatedSinceResize = !0),
            (this.currentAnimation = tv(0, Rv, {
              ...e,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Rv), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          dy(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || v_();
          let t = Xg(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = Xg(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (gv(t, n), L_(t, i), $g(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Mv()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return e ? e.lead === this : !0;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && Bv(`z`, e, r, this.animationValues);
      for (let t = 0; t < Iv.length; t++)
        (Bv(`rotate${Iv[t]}`, e, r, this.animationValues),
          Bv(`skew${Iv[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Lv;
      let t = { visibility: `` },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = vd(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
            (t.pointerEvents = vd(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !T_(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      (this.applyTransformsToTarget(),
        (t.transform = Nv(this.projectionDeltaWithTransform, this.treeScale, i)),
        n && (t.transform = n(i, t.transform)));
      let { x: a, y: o } = this.projectionDelta;
      ((t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        r.animationValues
          ? (t.opacity =
              r === this
                ? (i.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : i.opacityExit)
          : (t.opacity =
              r === this
                ? i.opacity === void 0
                  ? ``
                  : i.opacity
                : i.opacityExit === void 0
                  ? 0
                  : i.opacityExit));
      for (let e in sf) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = sf[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? vd(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Jv),
        this.root.sharedNodes.clear());
    }
  };
}
function Uv(e) {
  e.updateLayout();
}
function Wv(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? y_((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = Xg(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : dy(i, t.layoutBox, n) &&
        y_((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Xg(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = g_();
    $g(o, n, t.layoutBox);
    let s = g_();
    a ? $g(s, e.applyTransform(r, !0), t.measuredBox) : $g(s, n, t.layoutBox);
    let c = !Tv(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = v_();
          r_(o, t.layoutBox, i.layoutBox);
          let s = v_();
          (r_(s, n, a.layoutBox),
            kv(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s), (e.relativeTargetOrigin = o), (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Gv(e) {
  (Fv && Pv.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Kv(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function qv(e) {
  e.clearSnapshot();
}
function Jv(e) {
  e.clearMeasurements();
}
function Yv(e) {
  e.isLayoutDirty = !1;
}
function Xv(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function Zv(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Qv(e) {
  e.resolveTargetDelta();
}
function $v(e) {
  e.calcProjection();
}
function ey(e) {
  e.resetSkewAndRotation();
}
function ty(e) {
  e.removeLeadSnapshot();
}
function ny(e, t, n) {
  ((e.translate = Qm(t.translate, 0, n)),
    (e.scale = Qm(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function ry(e, t, n, r) {
  ((e.min = Qm(t.min, n.min, r)), (e.max = Qm(t.max, n.max, r)));
}
function iy(e, t, n, r) {
  (ry(e.x, t.x, n.x, r), ry(e.y, t.y, n.y, r));
}
function ay(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var oy = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  sy = (e) =>
    typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  cy = sy(`applewebkit/`) && !sy(`chrome/`) ? Math.round : du;
function ly(e) {
  ((e.min = cy(e.min)), (e.max = cy(e.max)));
}
function uy(e) {
  (ly(e.x), ly(e.y));
}
function dy(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !Zg(Av(t), Av(n), 0.2));
}
function fy(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var py = Hv({
    attachResizeListener: (e, t) => jg(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  my = { current: void 0 },
  hy = Hv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!my.current) {
        let e = new py({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (my.current = e));
      }
      return my.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  gy = { pan: { Feature: q_ }, drag: { Feature: G_, ProjectionNode: hy, MeasureLayout: $_ } };
function _y(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && Z.postRender(() => i(t, Mg(t)));
}
var vy = class extends Dg {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = qf(e, (e) => (_y(this.node, e, `Start`), (e) => _y(this.node, e, `End`))));
    }
    unmount() {}
  },
  yy = class extends Dg {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
    }
    mount() {
      this.unmount = ch(
        jg(this.node.current, `focus`, () => this.onFocus()),
        jg(this.node.current, `blur`, () => this.onBlur())
      );
    }
    unmount() {}
  };
function by(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && Z.postRender(() => i(t, Mg(t)));
}
var xy = class extends Dg {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = rp(
          e,
          (e) => (
            by(this.node, e, `Start`),
            (e, { success: t }) => by(this.node, e, t ? `End` : `Cancel`)
          ),
          { useGlobalTarget: this.node.props.globalTapTarget }
        ));
    }
    unmount() {}
  },
  Sy = new WeakMap(),
  Cy = new WeakMap(),
  wy = (e) => {
    let t = Sy.get(e.target);
    t && t(e);
  },
  Ty = (e) => {
    e.forEach(wy);
  };
function Ey({ root: e, ...t }) {
  let n = e || document;
  Cy.has(n) || Cy.set(n, {});
  let r = Cy.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(Ty, { root: e, ...t })), r[i]);
}
function Dy(e, t, n) {
  let r = Ey(t);
  return (
    Sy.set(e, n),
    r.observe(e),
    () => {
      (Sy.delete(e), r.unobserve(e));
    }
  );
}
var Oy = { some: 0, all: 1 },
  ky = class extends Dg {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : Oy[r],
        };
      return Dy(this.node.current, a, (e) => {
        let { isIntersecting: t } = e;
        if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView)) return;
        (t && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive(`whileInView`, t));
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r;
        a && a(e);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(Ay(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function Ay({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var jy = {
    inView: { Feature: ky },
    tap: { Feature: xy },
    focus: { Feature: yy },
    hover: { Feature: vy },
  },
  My = { layout: { ProjectionNode: hy, MeasureLayout: $_ } },
  Ny = { current: null },
  Py = { current: !1 };
function Fy() {
  if (((Py.current = !0), cu))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Ny.current = e.matches);
      (e.addListener(t), t());
    } else Ny.current = !1;
}
var Iy = [...Hm, Qp, fm],
  Ly = (e) => Iy.find(Vm(e)),
  Ry = new WeakMap();
function zy(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (_d(i)) e.addValue(r, i);
    else if (_d(a)) e.addValue(r, _p(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, _p(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var By = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Vy = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {}
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Fm),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = cp.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), Z.render(this.render, !1, !0));
        }));
      let { latestValues: s, renderState: c, onUpdate: l } = a;
      ((this.onUpdate = l),
        (this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = Wu(t)),
        (this.isVariantNode = Gu(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && _d(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        Ry.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        Py.current || Fy(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always`
              ? !0
              : Ny.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (Ry.delete(this.current),
        this.projection && this.projection.unmount(),
        Cu(this.notifyUpdate),
        Cu(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = Cd.has(e),
        r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && Z.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = t.on(`renderRequest`, this.scheduleRender),
        a;
      (window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i(), a && a(), t.owner && t.stop());
        }));
    }
    sortNodePosition(e) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in Ou) {
        let t = Ou[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : v_();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < By.length; t++) {
        let n = By[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = zy(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e));
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = _p(t === null ? void 0 : t, { owner: this })), this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (Im(n) || Rp(n))
            ? (n = parseFloat(n))
            : !Ly(n) && fm.test(t) && (n = ym(e, t)),
          this.setBaseTarget(e, _d(n) ? n.get() : n)),
        _d(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = pd(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !_d(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (this.events[e] || (this.events[e] = new dp()), this.events[e].add(t));
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  Hy = class extends Vy {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Wm));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      _d(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function Uy(e) {
  return window.getComputedStyle(e);
}
var Wy = class extends Hy {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = rf));
    }
    readValueFromInstance(e, t) {
      if (Cd.has(t)) {
        let e = vm(t);
        return (e && e.default) || 0;
      } else {
        let n = Uy(e),
          r = (Td(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return R_(e, t);
    }
    build(e, t, n) {
      qd(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return uf(e, t, n);
    }
  },
  Gy = class extends Hy {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = v_));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Cd.has(t)) {
        let e = vm(t);
        return (e && e.default) || 0;
      }
      return ((t = af.has(t) ? t : Qu(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return df(e, t, n);
    }
    build(e, t, n) {
      $d(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      of(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = nf(e.tagName)), super.mount(e));
    }
  },
  Ky = (e, t) => (dd(e) ? new Gy(t) : new Wy(t, { allowProjection: e !== y.Fragment })),
  $ = Ru(Sf({ ...Ag, ...jy, ...gy, ...My }, Ky)),
  qy = [
    {
      id: 1,
      title: `How to Message on WhatsApp Without Saving Contacts`,
      icon: Xn,
      content: `WhatsApp is one of the most popular messaging apps worldwide, but it has a limitation - you typically need to save someone's phone number to send them a message. This can clutter your contacts list, especially for one-time conversations.

WAssistant solves this problem by using WhatsApp's official "wa.me" API links. Here's how it works:

1. Enter the phone number with country code
2. Add an optional pre-filled message
3. Click "Chat" to open WhatsApp directly
4. Start messaging without saving the contact

This is perfect for:
- Contacting delivery drivers
- Reaching customer service
- Connecting with temporary business contacts
- Avoiding contact list clutter

The service is completely free and works on both mobile and desktop devices.`,
      date: `December 2024`,
      readTime: `3 min read`,
    },
    {
      id: 2,
      title: `Understanding WhatsApp Privacy & Security`,
      icon: rr,
      content: `Privacy is a top concern for messaging apps. WhatsApp uses end-to-end encryption, which means only you and the person you're messaging can read your conversations.

Key privacy features:
- End-to-end encryption on all messages
- No message storage on WhatsApp servers
- Two-factor authentication support
- Disappearing messages option
- Privacy settings for profile photo, status, and last seen

When using WAssistant, your privacy is protected because:
- We don't store any phone numbers you enter
- Messages go directly through WhatsApp
- No data is collected or shared
- All processing happens client-side

Learn how to maximize your WhatsApp privacy settings and use the app securely for both personal and business communication.`,
      date: `December 2024`,
      readTime: `5 min read`,
    },
    {
      id: 3,
      title: `QR Codes for Business: Complete Guide`,
      icon: fr,
      content: `QR codes have become essential for modern business communication. They allow instant connections without typing phone numbers or searching for contacts.

Benefits of WhatsApp QR codes:
- Instant customer connection
- No typing errors
- Professional appearance
- Easy to share on marketing materials
- Trackable engagement

How businesses use QR codes:
- Customer support lines
- Order inquiries
- Appointment bookings
- Feedback collection
- Product information requests

WAssistant generates customizable QR codes that you can brand with your logo and colors. Place them on business cards, flyers, websites, and product packaging to make it easy for customers to reach you.

Best practices for QR code placement and design to maximize scan rates and customer engagement.`,
      date: `December 2024`,
      readTime: `4 min read`,
    },
    {
      id: 4,
      title: `WhatsApp Business vs Personal: Which to Use?`,
      icon: ur,
      content: `WhatsApp offers two main versions: WhatsApp Messenger (personal) and WhatsApp Business. Choosing the right one depends on your needs.

WhatsApp Business features:
- Business profile with hours and website
- Automated greeting and away messages
- Quick replies for common questions
- Labels for organizing chats
- Catalog showcase
- Statistics and analytics

When to use Business:
- You have a business or side hustle
- You need professional presence
- You want automation features
- You need to organize customer chats

When personal is fine:
- Occasional selling to friends
- Small-scale informal selling
- No need for automation
- Prefer simpler interface

Learn the differences and choose the best option for your communication needs.`,
      date: `December 2024`,
      readTime: `6 min read`,
    },
    {
      id: 5,
      title: `Cross-Platform WhatsApp: Web, Desktop & Mobile`,
      icon: or,
      content: `WhatsApp works seamlessly across multiple platforms, allowing you to stay connected wherever you are.

WhatsApp Web/Desktop:
- Access from any browser
- Full keyboard for faster typing
- Easy file sharing from computer
- Syncs with mobile app
- QR code login for security

Mobile app features:
- Voice and video calls
- Location sharing
- Camera integration
- Push notifications
- Contact integration

Using WAssistant across platforms:
- Generate links on desktop, open on mobile
- Create QR codes on any device
- Consistent experience everywhere
- No app installation required for web version

Tips for managing WhatsApp across multiple devices and maintaining sync between platforms.`,
      date: `December 2024`,
      readTime: `4 min read`,
    },
    {
      id: 6,
      title: `International Messaging: Country Codes & Tips`,
      icon: Wn,
      content: `Messaging internationally requires understanding country codes and format requirements. Here's everything you need to know.

Country code format:
- Always include the + symbol or country code prefix
- Remove leading zeros from local numbers
- Examples: +1 for USA, +44 for UK, +91 for India

Common mistakes to avoid:
- Forgetting the country code
- Including spaces or special characters
- Adding the leading zero after country code
- Wrong country code selection

International messaging tips:
- Save country codes in your contacts
- Use international format for business
- Consider time zones when messaging
- Check data rates when roaming

WAssistant handles country code selection automatically with our country picker, ensuring your messages reach the right destination every time.`,
      date: `December 2024`,
      readTime: `3 min read`,
    },
  ];
function Jy() {
  return (0, I.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, I.jsx)(`section`, {
        className: `py-20 relative overflow-hidden`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: `text-center max-w-3xl mx-auto`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6`,
                children: [(0, I.jsx)(Rn, { className: `w-4 h-4` }), `WhatsApp Tips & Guides`],
              }),
              (0, I.jsx)(`h1`, {
                className: `text-4xl md:text-5xl font-bold text-foreground mb-6`,
                children: `Master WhatsApp Communication`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-lg text-muted-foreground leading-relaxed`,
                children: `Comprehensive guides, tips, and best practices for getting the most out of WhatsApp for personal and business use.`,
              }),
            ],
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-16`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(`div`, {
            className: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`,
            children: qy.map((e, t) =>
              (0, I.jsx)(
                $.article,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: t * 0.1 },
                  className: `bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group`,
                  children: (0, I.jsxs)(`div`, {
                    className: `p-6`,
                    children: [
                      (0, I.jsxs)(`div`, {
                        className: `flex items-center gap-3 mb-4`,
                        children: [
                          (0, I.jsx)(`div`, {
                            className: `w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors`,
                            children: (0, I.jsx)(e.icon, { className: `w-6 h-6 text-primary` }),
                          }),
                          (0, I.jsxs)(`div`, {
                            className: `text-xs text-muted-foreground`,
                            children: [
                              (0, I.jsx)(`span`, { children: e.date }),
                              (0, I.jsx)(`span`, { className: `mx-2`, children: `•` }),
                              (0, I.jsx)(`span`, { children: e.readTime }),
                            ],
                          }),
                        ],
                      }),
                      (0, I.jsx)(`h2`, {
                        className: `text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors`,
                        children: e.title,
                      }),
                      (0, I.jsxs)(`div`, {
                        className: `text-muted-foreground text-sm leading-relaxed whitespace-pre-line`,
                        children: [e.content.slice(0, 200), `...`],
                      }),
                      (0, I.jsx)(`button`, {
                        className: `mt-4 text-primary font-medium text-sm hover:underline`,
                        children: `Read full article →`,
                      }),
                    ],
                  }),
                },
                e.id
              )
            ),
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-16 border-t border-border`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsxs)(`div`, {
            className: `glass-surface rounded-2xl p-8 md:p-12 text-center`,
            children: [
              (0, I.jsx)(`h2`, {
                className: `text-2xl md:text-3xl font-bold text-foreground mb-4`,
                children: `Ready to simplify your WhatsApp messaging?`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-muted-foreground mb-6 max-w-2xl mx-auto`,
                children: `Try WAssistant free - no signup required. Message anyone on WhatsApp without saving contacts.`,
              }),
              (0, I.jsxs)(`a`, {
                href: `/`,
                className: `inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-all`,
                children: [(0, I.jsx)(Xn, { className: `w-5 h-5` }), `Start Messaging`],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var Yy = [
  {
    icon: Xn,
    title: `Direct WhatsApp Messaging`,
    description: `Message any phone number on WhatsApp without saving it to your contacts. Perfect for one-time conversations and keeping your contact list organized.`,
    benefits: [
      `No contact saving required`,
      `Works with international numbers`,
      `Pre-fill custom messages`,
      `Instant WhatsApp Web/Mobile opening`,
    ],
  },
  {
    icon: er,
    title: `Custom QR Code Generator`,
    description: `Create branded QR codes for your business or personal use. Customers can scan and instantly start a WhatsApp conversation with you.`,
    benefits: [
      `Customizable colors and design`,
      `Add your logo`,
      `High-resolution download`,
      `Print-ready formats`,
    ],
  },
  {
    icon: Yn,
    title: `Shareable Chat Links`,
    description: `Generate short, shareable links that open WhatsApp conversations. Use them in emails, social media, or marketing materials.`,
    benefits: [
      `Short URL format`,
      `Custom message templates`,
      `Track click engagement`,
      `Easy social sharing`,
    ],
  },
  {
    icon: cr,
    title: `vCard Generator`,
    description: `Create digital contact cards that can be easily shared and saved. Include all your contact information in a standardized format.`,
    benefits: [
      `Professional contact cards`,
      `QR code integration`,
      `Standard vCard format`,
      `Instant contact saving`,
    ],
  },
  {
    icon: qn,
    title: `Message History`,
    description: `Keep track of your recent conversations and frequently contacted numbers. Quick access to your messaging history.`,
    benefits: [
      `Recent numbers list`,
      `Quick re-messaging`,
      `Local storage only`,
      `Privacy-focused`,
    ],
  },
  {
    icon: Wn,
    title: `International Support`,
    description: `Full support for international phone numbers with automatic country code detection and formatting.`,
    benefits: [
      `200+ country codes`,
      `Automatic formatting`,
      `Country flags`,
      `Local number validation`,
    ],
  },
  {
    icon: or,
    title: `Cross-Platform`,
    description: `Use WAssistant on any device - mobile, tablet, or desktop. Seamless experience across all platforms.`,
    benefits: [
      `Web app - no install needed`,
      `Mobile apps available`,
      `Syncs across devices`,
      `Responsive design`,
    ],
  },
  {
    icon: rr,
    title: `Privacy First`,
    description: `Your privacy is our priority. No data collection, no tracking, no account required. All processing happens client-side.`,
    benefits: [`No account required`, `No data storage`, `End-to-end encryption`, `GDPR compliant`],
  },
  {
    icon: fr,
    title: `Lightning Fast`,
    description: `Optimized for speed. Generate links and QR codes instantly with our high-performance infrastructure.`,
    benefits: [`Sub-second generation`, `Optimized images`, `CDN delivery`, `99.9% uptime`],
  },
  {
    icon: Un,
    title: `Always Available`,
    description: `WAssistant is available 24/7 with no downtime. Our reliable infrastructure ensures you can always connect.`,
    benefits: [`24/7 availability`, `No maintenance windows`, `Global CDN`, `Auto-scaling`],
  },
  {
    icon: Qn,
    title: `Customizable Themes`,
    description: `Personalize your experience with multiple theme options and dark mode support for comfortable viewing.`,
    benefits: [
      `Dark mode`,
      `Multiple color schemes`,
      `Accessibility support`,
      `System theme detection`,
    ],
  },
  {
    icon: nr,
    title: `Easy Sharing`,
    description: `Share your WhatsApp links and QR codes across all platforms with one-click sharing options.`,
    benefits: [`Social media sharing`, `Email integration`, `Embed codes`, `Download options`],
  },
];
function Xy() {
  return (0, I.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, I.jsx)(`section`, {
        className: `py-20 relative overflow-hidden`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: `text-center max-w-3xl mx-auto`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6`,
                children: [(0, I.jsx)(fr, { className: `w-4 h-4` }), `Powerful Features`],
              }),
              (0, I.jsx)(`h1`, {
                className: `text-4xl md:text-5xl font-bold text-foreground mb-6`,
                children: `Everything You Need for WhatsApp Messaging`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-lg text-muted-foreground leading-relaxed`,
                children: `WAssistant provides a complete suite of tools to enhance your WhatsApp communication experience. From QR codes to chat links, we've got you covered.`,
              }),
            ],
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-16`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(`div`, {
            className: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`,
            children: Yy.map((e, t) =>
              (0, I.jsxs)(
                $.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: t * 0.05 },
                  className: `bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors`,
                      children: (0, I.jsx)(e.icon, { className: `w-7 h-7 text-primary` }),
                    }),
                    (0, I.jsx)(`h3`, {
                      className: `text-xl font-bold text-foreground mb-3`,
                      children: e.title,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-muted-foreground text-sm leading-relaxed mb-4`,
                      children: e.description,
                    }),
                    (0, I.jsx)(`ul`, {
                      className: `space-y-2`,
                      children: e.benefits.map((e, t) =>
                        (0, I.jsxs)(
                          `li`,
                          {
                            className: `flex items-center gap-2 text-sm text-muted-foreground`,
                            children: [
                              (0, I.jsx)(`span`, {
                                className: `w-1.5 h-1.5 bg-primary rounded-full`,
                              }),
                              e,
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                },
                e.title
              )
            ),
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-16 border-t border-border`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: `max-w-4xl mx-auto`,
            children: [
              (0, I.jsx)(`h2`, {
                className: `text-3xl font-bold text-foreground text-center mb-12`,
                children: `Why Choose WAssistant?`,
              }),
              (0, I.jsxs)(`div`, {
                className: `glass-surface rounded-2xl overflow-hidden`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `grid grid-cols-3 gap-4 p-6 bg-primary/5 border-b border-border font-semibold text-foreground`,
                    children: [
                      (0, I.jsx)(`div`, { children: `Feature` }),
                      (0, I.jsx)(`div`, { className: `text-center`, children: `WAssistant` }),
                      (0, I.jsx)(`div`, { className: `text-center`, children: `Others` }),
                    ],
                  }),
                  [
                    [`No registration required`, `✓`, `✗`],
                    [`Free to use`, `✓`, `Limited`],
                    [`Custom QR codes`, `✓`, `✗`],
                    [`Message templates`, `✓`, `✗`],
                    [`vCard generator`, `✓`, `✗`],
                    [`Privacy focused`, `✓`, `✗`],
                    [`Cross-platform`, `✓`, `Limited`],
                    [`Open source`, `✓`, `✗`],
                  ].map(([e, t, n], r) =>
                    (0, I.jsxs)(
                      `div`,
                      {
                        className: `grid grid-cols-3 gap-4 p-4 ${r % 2 == 0 ? `bg-card/50` : ``}`,
                        children: [
                          (0, I.jsx)(`div`, { className: `text-foreground`, children: e }),
                          (0, I.jsx)(`div`, {
                            className: `text-center text-primary font-bold`,
                            children: t,
                          }),
                          (0, I.jsx)(`div`, {
                            className: `text-center text-muted-foreground`,
                            children: n,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var Zy = () =>
    (0, I.jsx)(`section`, {
      id: `about`,
      className: `py-24 relative`,
      children: (0, I.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, I.jsxs)($.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          className: `max-w-3xl mx-auto`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `text-center mb-12`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-xs font-mono uppercase tracking-widest text-primary mb-4 block`,
                  children: `About WAssistant`,
                }),
                (0, I.jsx)(`h2`, {
                  className: `text-3xl md:text-4xl font-bold text-foreground`,
                  children: `Built for everyday WhatsApp users`,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `glass-surface rounded-2xl p-8 md:p-12 space-y-6`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-3 mb-4`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`,
                      children: (0, I.jsx)(fr, { className: `h-5 w-5 text-primary` }),
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xl font-bold text-foreground`,
                      children: `WAssistant`,
                    }),
                  ],
                }),
                (0, I.jsx)(`p`, {
                  className: `text-muted-foreground leading-relaxed`,
                  children: `WAssistant is a free utility app designed to make WhatsApp easier to use. Whether you need to quickly message someone without saving their number, generate a QR code for your business's WhatsApp, or create shareable chat links — WAssistant handles it all in a clean, privacy-focused interface.`,
                }),
                (0, I.jsx)(`p`, {
                  className: `text-muted-foreground leading-relaxed`,
                  children: `The app was born out of a simple frustration: to message someone on WhatsApp, you first have to save their contact. That's inconvenient when you just want to send a quick message to a delivery driver, a shop, or someone you met briefly. WAssistant solves this by letting you open a WhatsApp chat with any phone number — instantly.`,
                }),
                (0, I.jsx)(`p`, {
                  className: `text-muted-foreground leading-relaxed`,
                  children: `Beyond the core phone-to-chat feature, WAssistant includes tools that businesses and professionals find valuable: QR code generation for storefronts and business cards, shareable chat links with pre-filled messages, vCard creation for sharing contact details, and OCR-powered phone number extraction from images and screenshots.`,
                }),
                (0, I.jsx)(`p`, {
                  className: `text-muted-foreground leading-relaxed`,
                  children: `Privacy is at the heart of WAssistant. All phone numbers and data are processed locally on your device. Nothing is sent to external servers. The app uses Firebase Analytics only for understanding which features are most popular, helping us improve the experience.`,
                }),
                (0, I.jsx)(`div`, {
                  className: `border-t border-border pt-6 mt-6`,
                  children: (0, I.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground`,
                    children: [
                      (0, I.jsx)(`strong`, {
                        className: `text-foreground`,
                        children: `Disclaimer:`,
                      }),
                      ` WAssistant is an independent third-party utility tool. It is not affiliated with, endorsed by, or officially connected to WhatsApp Inc. or Meta Platforms, Inc. WhatsApp is a registered trademark of WhatsApp LLC.`,
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Qy = ({ slot: e, format: t = `auto`, responsive: n = !0, className: r = `` }) => {
    let i = (0, y.useRef)(null),
      a = (0, y.useRef)(!1);
    return (
      (0, y.useEffect)(() => {
        if (!a.current)
          try {
            ((window.adsbygoogle = window.adsbygoogle || []).push({}), (a.current = !0));
          } catch {}
      }, []),
      (0, I.jsx)(`div`, {
        ref: i,
        className: r,
        children: (0, I.jsx)(`ins`, {
          className: `adsbygoogle`,
          style: { display: `block` },
          'data-ad-client': `ca-pub-7083858358486869`,
          'data-ad-slot': e,
          'data-ad-format': t,
          'data-full-width-responsive': n ? `true` : `false`,
        }),
      })
    );
  },
  $y = () =>
    (0, I.jsx)(`section`, {
      id: `cta`,
      className: `py-24 relative`,
      children: (0, I.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, I.jsxs)($.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
          className: `glass-surface rounded-2xl p-12 md:p-16 text-center relative overflow-hidden`,
          children: [
            (0, I.jsx)(`div`, { className: `absolute inset-0 grid-bg opacity-30` }),
            (0, I.jsxs)(`div`, {
              className: `relative z-10`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `inline-flex items-center gap-2 glass-surface rounded-full px-4 py-1.5 mb-6`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `h-2 w-2 rounded-full bg-primary animate-pulse`,
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs font-mono uppercase tracking-widest text-muted-foreground`,
                      children: `Free to Use`,
                    }),
                  ],
                }),
                (0, I.jsx)(`h2`, {
                  className: `text-3xl md:text-5xl font-bold text-wa-text mb-4`,
                  children: `Start chatting smarter today`,
                }),
                (0, I.jsx)(`p`, {
                  className: `text-lg text-wa-muted max-w-lg mx-auto mb-10`,
                  children: `Download WAssistant on Android or use the web version right here — no sign-up required. Just enter a number and chat.`,
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row items-center justify-center gap-4`,
                  children: [
                    (0, I.jsxs)(`a`, {
                      href: `https://play.google.com/store/apps/details?id=com.itlab.wassistant`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center gap-2 bg-wa-green text-black font-semibold px-8 py-3.5 rounded-xl btn-press hover:brightness-110 signal-glow text-base`,
                      children: [
                        (0, I.jsx)(or, { className: `h-5 w-5` }),
                        `Get on Google Play`,
                        (0, I.jsx)(Ln, { className: `h-4 w-4` }),
                      ],
                    }),
                    (0, I.jsxs)(`a`, {
                      href: `https://wassistant-707.web.app`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center gap-2 bg-wa-surface border border-white/10 rounded-xl px-8 py-3.5 text-wa-text font-medium btn-press hover:bg-wa-card text-base`,
                      children: [
                        (0, I.jsx)(Wn, { className: `h-5 w-5 text-wa-green` }),
                        `Use Web Version`,
                      ],
                    }),
                  ],
                }),
                (0, I.jsx)(`p`, {
                  className: `text-xs text-muted-foreground mt-6`,
                  children: `Free forever · No account needed · Privacy focused`,
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  eb = [
    {
      icon: Zn,
      title: `Chat Without Saving`,
      description: `Start a WhatsApp conversation with any phone number instantly — no need to add them to your contacts first. Perfect for one-time chats with delivery drivers, businesses, or new acquaintances.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: er,
      title: `QR Code Generator`,
      description: `Generate scannable QR codes linked to your WhatsApp number. Ideal for business cards, storefronts, flyers, and websites so customers can reach you with a single scan.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: nr,
      title: `Chat Link Creator`,
      description: `Create shareable wa.me links with pre-filled messages. Add them to your social media bios, email signatures, or websites to let people message you directly on WhatsApp.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: tr,
      title: `OCR Text Recognition`,
      description: `Extract phone numbers from images, screenshots, or business cards using your camera. The built-in OCR engine processes everything locally on your device for complete privacy.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: rr,
      title: `Privacy First`,
      description: `All processing happens on your device. No phone numbers, messages, or contacts are ever uploaded to external servers. Your data stays yours — always.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: or,
      title: `Works Everywhere`,
      description: `Available as an Android app on Google Play and as a web app at wassistant.site. Use it on your phone, tablet, or desktop browser — no installation required for the web version.`,
      link: `https://wassistant-707.web.app`,
    },
  ],
  tb = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } },
  nb = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
  },
  rb = () =>
    (0, I.jsx)(`section`, {
      id: `features`,
      className: `py-32 relative`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            className: `text-center mb-16`,
            children: [
              (0, I.jsx)(`span`, {
                className: `text-xs font-mono uppercase tracking-widest text-wa-green mb-4 block`,
                children: `Features`,
              }),
              (0, I.jsx)(`h2`, {
                className: `text-3xl md:text-4xl font-bold text-wa-text`,
                children: `Powerful WhatsApp tools, all in one place`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-wa-muted mt-4 max-w-2xl mx-auto`,
                children: `WAssistant gives you everything you need to communicate on WhatsApp more efficiently — whether you're a business owner, freelancer, or everyday user.`,
              }),
            ],
          }),
          (0, I.jsx)($.div, {
            variants: tb,
            initial: `hidden`,
            whileInView: `show`,
            viewport: { once: !0 },
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
            children: eb.map((e) =>
              (0, I.jsxs)(
                $.a,
                {
                  href: e.link,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  variants: nb,
                  className: `glass-surface rounded-xl p-8 group hover:border-wa-green/30 transition-colors cursor-pointer block`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `flex items-center gap-3 mb-5`,
                      children: (0, I.jsx)(`div`, {
                        className: `h-10 w-10 rounded-lg bg-wa-green/10 border border-wa-green/20 flex items-center justify-center group-hover:bg-wa-green/20 transition-colors`,
                        children: (0, I.jsx)(e.icon, { className: `h-5 w-5 text-wa-green` }),
                      }),
                    }),
                    (0, I.jsx)(`h3`, {
                      className: `text-lg font-semibold text-wa-text mb-2`,
                      children: e.title,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-sm text-wa-muted leading-relaxed`,
                      children: e.description,
                    }),
                  ],
                },
                e.title
              )
            ),
          }),
        ],
      }),
    }),
  ib = () =>
    (0, I.jsx)(`footer`, {
      className: `border-t border-border py-12`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-3 gap-8 mb-8`,
            children: [
              (0, I.jsxs)(`div`, {
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center gap-2 mb-3`,
                    children: [
                      (0, I.jsx)(fr, { className: `h-4 w-4 text-primary` }),
                      (0, I.jsx)(`span`, {
                        className: `text-sm font-semibold text-foreground`,
                        children: `WAssistant`,
                      }),
                    ],
                  }),
                  (0, I.jsx)(`p`, {
                    className: `text-xs text-muted-foreground leading-relaxed`,
                    children: `Free WhatsApp utility tools. Chat without saving contacts, generate QR codes, create chat links, and extract phone numbers from images.`,
                  }),
                ],
              }),
              (0, I.jsxs)(`div`, {
                children: [
                  (0, I.jsx)(`h4`, {
                    className: `text-sm font-semibold text-foreground mb-3`,
                    children: `Resources`,
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex flex-col gap-2 text-xs text-muted-foreground`,
                    children: [
                      (0, I.jsx)(`a`, {
                        href: `/guide.html`,
                        className: `hover:text-foreground transition-colors`,
                        children: `How-To Guide`,
                      }),
                      (0, I.jsx)(`a`, {
                        href: `/faq.html`,
                        className: `hover:text-foreground transition-colors`,
                        children: `FAQ`,
                      }),
                      (0, I.jsx)(`a`, {
                        href: `https://play.google.com/store/apps/details?id=com.itlab.wassistant`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `hover:text-foreground transition-colors`,
                        children: `Google Play Store`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, I.jsxs)(`div`, {
                children: [
                  (0, I.jsx)(`h4`, {
                    className: `text-sm font-semibold text-foreground mb-3`,
                    children: `Legal`,
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex flex-col gap-2 text-xs text-muted-foreground`,
                    children: [
                      (0, I.jsx)(`a`, {
                        href: `/privacy_policy.html`,
                        className: `hover:text-foreground transition-colors`,
                        children: `Privacy Policy`,
                      }),
                      (0, I.jsx)(`a`, {
                        href: `/terms.html`,
                        className: `hover:text-foreground transition-colors`,
                        children: `Terms & Conditions`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, I.jsx)(`div`, {
            className: `border-t border-border pt-6 text-center`,
            children: (0, I.jsxs)(`p`, {
              className: `text-xs text-muted-foreground`,
              children: [
                `© `,
                new Date().getFullYear(),
                ` WAssistant. All rights reserved. WAssistant is not affiliated with WhatsApp Inc.`,
              ],
            }),
          }),
        ],
      }),
    }),
  ab = [
    {
      number: `01`,
      title: `Enter a Phone Number`,
      description: `Type or paste any international phone number with country code. No need to save it to your contacts — just enter it directly into the input field.`,
    },
    {
      number: `02`,
      title: `Tap to Chat`,
      description: `Press the chat button and WAssistant opens WhatsApp directly to a conversation with that number. Works with WhatsApp on your phone or WhatsApp Web on desktop.`,
    },
    {
      number: `03`,
      title: `Start Messaging`,
      description: `You're now chatting on WhatsApp without ever saving the contact. When you're done, close the chat — no leftover contacts cluttering your phone.`,
    },
  ],
  ob = () =>
    (0, I.jsx)(`section`, {
      id: `how-it-works`,
      className: `py-24 relative`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            className: `text-center mb-16`,
            children: [
              (0, I.jsx)(`span`, {
                className: `text-xs font-mono uppercase tracking-widest text-primary mb-4 block`,
                children: `How It Works`,
              }),
              (0, I.jsx)(`h2`, {
                className: `text-3xl md:text-4xl font-bold text-foreground`,
                children: `Three simple steps to start chatting`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-muted-foreground mt-4 max-w-2xl mx-auto`,
                children: `WAssistant removes the friction from WhatsApp. No more asking "Can you save my number first?" — just type and chat.`,
              }),
            ],
          }),
          (0, I.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto`,
            children: ab.map((e, t) =>
              (0, I.jsxs)(
                $.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: t * 0.15, duration: 0.5 },
                  className: `text-center`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6`,
                      children: (0, I.jsx)(`span`, {
                        className: `text-2xl font-bold font-mono text-primary`,
                        children: e.number,
                      }),
                    }),
                    (0, I.jsx)(`h3`, {
                      className: `text-lg font-semibold text-foreground mb-3`,
                      children: e.title,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-sm text-muted-foreground leading-relaxed`,
                      children: e.description,
                    }),
                  ],
                },
                e.number
              )
            ),
          }),
        ],
      }),
    }),
  sb = () =>
    (0, I.jsx)($.nav, {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
      className: `fixed top-0 left-0 right-0 z-50 glass-surface border-b border-border/50`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto flex items-center justify-between h-16 px-6`,
        children: [
          (0, I.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [
              (0, I.jsx)(`div`, {
                className: `h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center`,
                children: (0, I.jsx)(fr, { className: `h-4 w-4 text-primary` }),
              }),
              (0, I.jsx)(`span`, {
                className: `text-lg font-bold tracking-tight text-foreground`,
                children: `WAssistant`,
              }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `hidden md:flex items-center gap-8`,
            children: [
              (0, I.jsx)(`a`, {
                href: `#features`,
                className: `text-sm text-muted-foreground hover:text-foreground transition-colors`,
                children: `Features`,
              }),
              (0, I.jsx)(`a`, {
                href: `#how-it-works`,
                className: `text-sm text-muted-foreground hover:text-foreground transition-colors`,
                children: `How It Works`,
              }),
              (0, I.jsx)(`a`, {
                href: `#about`,
                className: `text-sm text-muted-foreground hover:text-foreground transition-colors`,
                children: `About`,
              }),
              (0, I.jsx)(`a`, {
                href: `/faq.html`,
                className: `text-sm text-muted-foreground hover:text-foreground transition-colors`,
                children: `FAQ`,
              }),
              (0, I.jsx)(`a`, {
                href: `/guide.html`,
                className: `text-sm text-muted-foreground hover:text-foreground transition-colors`,
                children: `Guide`,
              }),
            ],
          }),
          (0, I.jsx)(`a`, {
            href: `https://play.google.com/store/apps/details?id=com.itlab.wassistant`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg btn-press hover:brightness-110 signal-glow`,
            children: `Get the App`,
          }),
        ],
      }),
    }),
  cb = () => {
    let [e, t] = (0, y.useState)(`+966 `),
      [n, r] = (0, y.useState)(``);
    return (0, I.jsx)($.form, {
      onSubmit: (t) => {
        t.preventDefault();
        let n = e.replace(/[\s\-\(\)]/g, ``);
        if (!/^\+?\d{7,15}$/.test(n)) {
          r(`Enter a valid phone number (e.g. +1234567890)`);
          return;
        }
        r(``);
        let i = n.startsWith(`+`) ? n.slice(1) : n;
        window.open(`https://wa.me/${encodeURIComponent(i)}`, `_blank`, `noopener,noreferrer`);
      },
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.3, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
      className: `w-full max-w-md mx-auto`,
      children: (0, I.jsxs)(`div`, {
        className: `glass-surface rounded-2xl p-6 space-y-4`,
        children: [
          (0, I.jsx)(`label`, {
            htmlFor: `phone`,
            className: `block text-xs font-mono uppercase tracking-widest text-muted-foreground`,
            children: `Phone Number`,
          }),
          (0, I.jsxs)(`div`, {
            className: `flex gap-3`,
            children: [
              (0, I.jsx)(`input`, {
                id: `phone`,
                type: `tel`,
                inputMode: `tel`,
                autoComplete: `tel`,
                placeholder: `+1 234 567 8900`,
                value: e,
                onChange: (e) => {
                  (t(e.target.value), n && r(``));
                },
                maxLength: 20,
                className: `flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all`,
              }),
              (0, I.jsxs)(`button`, {
                type: `submit`,
                title: `Start WhatsApp Chat`,
                'aria-label': `Start WhatsApp Chat`,
                className: `bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-lg btn-press hover:brightness-110 signal-glow flex items-center gap-2 shrink-0`,
                children: [
                  (0, I.jsx)(Zn, { className: `h-5 w-5` }),
                  (0, I.jsx)(Ln, { className: `h-4 w-4` }),
                ],
              }),
            ],
          }),
          n && (0, I.jsx)(`p`, { className: `text-xs text-destructive font-mono`, children: n }),
        ],
      }),
    });
  },
  lb = () => {
    let [e, t] = (0, y.useState)([]);
    return (
      (0, y.useEffect)(() => {
        let e = 0,
          n = setInterval(() => {
            let n = Math.floor(window.innerWidth / 32),
              r = Math.floor(window.innerHeight / 32),
              i = Math.floor(Math.random() * n) * 32,
              a = Math.floor(Math.random() * r) * 32,
              o = { id: e++, x: i, y: a };
            t((e) => [...e.slice(-8), o]);
          }, 600);
        return () => clearInterval(n);
      }, []),
      (0, I.jsxs)(`div`, {
        className: `absolute inset-0 grid-bg overflow-hidden`,
        children: [
          (0, I.jsx)(uu, {
            children: e.map((e) =>
              (0, I.jsx)(
                $.div,
                {
                  initial: { opacity: 0, scale: 0 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0 },
                  transition: { duration: 1.2, ease: `easeOut` },
                  className: `absolute h-2 w-2 rounded-full bg-primary`,
                  style: {
                    left: e.x - 4,
                    top: e.y - 4,
                    boxShadow: `0 0 12px hsl(145 50% 55% / 0.6)`,
                  },
                },
                e.id
              )
            ),
          }),
          (0, I.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background`,
          }),
        ],
      })
    );
  },
  ub = `Collapsible`,
  [db, fb] = Le(ub),
  [pb, mb] = db(ub),
  hb = y.forwardRef((e, t) => {
    let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e,
      [c, l] = Et({ prop: r, defaultProp: i ?? !1, onChange: o, caller: ub });
    return (0, I.jsx)(pb, {
      scope: n,
      disabled: a,
      contentId: vi(),
      open: c,
      onOpenToggle: y.useCallback(() => l((e) => !e), [l]),
      children: (0, I.jsx)(Qe.div, {
        'data-state': xb(c),
        'data-disabled': a ? `` : void 0,
        ...s,
        ref: t,
      }),
    });
  });
hb.displayName = ub;
var gb = `CollapsibleTrigger`,
  _b = y.forwardRef((e, t) => {
    let { __scopeCollapsible: n, ...r } = e,
      i = mb(gb, n);
    return (0, I.jsx)(Qe.button, {
      type: `button`,
      'aria-controls': i.contentId,
      'aria-expanded': i.open || !1,
      'data-state': xb(i.open),
      'data-disabled': i.disabled ? `` : void 0,
      disabled: i.disabled,
      ...r,
      ref: t,
      onClick: L(e.onClick, i.onOpenToggle),
    });
  });
_b.displayName = gb;
var vb = `CollapsibleContent`,
  yb = y.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = mb(vb, e.__scopeCollapsible);
    return (0, I.jsx)(xt, {
      present: n || i.open,
      children: ({ present: e }) => (0, I.jsx)(bb, { ...r, ref: t, present: e }),
    });
  });
yb.displayName = vb;
var bb = y.forwardRef((e, t) => {
  let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
    o = mb(vb, n),
    [s, c] = y.useState(r),
    l = y.useRef(null),
    u = Ie(t, l),
    d = y.useRef(0),
    f = d.current,
    p = y.useRef(0),
    m = p.current,
    h = o.open || s,
    g = y.useRef(h),
    _ = y.useRef(void 0);
  return (
    y.useEffect(() => {
      let e = requestAnimationFrame(() => (g.current = !1));
      return () => cancelAnimationFrame(e);
    }, []),
    _t(() => {
      let e = l.current;
      if (e) {
        ((_.current = _.current || {
          transitionDuration: e.style.transitionDuration,
          animationName: e.style.animationName,
        }),
          (e.style.transitionDuration = `0s`),
          (e.style.animationName = `none`));
        let t = e.getBoundingClientRect();
        ((d.current = t.height),
          (p.current = t.width),
          g.current ||
            ((e.style.transitionDuration = _.current.transitionDuration),
            (e.style.animationName = _.current.animationName)),
          c(r));
      }
    }, [o.open, r]),
    (0, I.jsx)(Qe.div, {
      'data-state': xb(o.open),
      'data-disabled': o.disabled ? `` : void 0,
      id: o.contentId,
      hidden: !h,
      ...a,
      ref: u,
      style: {
        '--radix-collapsible-content-height': f ? `${f}px` : void 0,
        '--radix-collapsible-content-width': m ? `${m}px` : void 0,
        ...e.style,
      },
      children: h && i,
    })
  );
});
function xb(e) {
  return e ? `open` : `closed`;
}
var Sb = hb,
  Cb = _b,
  wb = yb,
  Tb = y.createContext(void 0);
function Eb(e) {
  let t = y.useContext(Tb);
  return e || t || `ltr`;
}
var Db = `Accordion`,
  Ob = [`Home`, `End`, `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`],
  [kb, Ab, jb] = Ge(Db),
  [Mb, Nb] = Le(Db, [jb, fb]),
  Pb = fb(),
  Fb = y.forwardRef((e, t) => {
    let { type: n, ...r } = e,
      i = r,
      a = r;
    return (0, I.jsx)(kb.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === `multiple` ? (0, I.jsx)(Vb, { ...a, ref: t }) : (0, I.jsx)(Bb, { ...i, ref: t }),
    });
  });
Fb.displayName = Db;
var [Ib, Lb] = Mb(Db),
  [Rb, zb] = Mb(Db, { collapsible: !1 }),
  Bb = y.forwardRef((e, t) => {
    let { value: n, defaultValue: r, onValueChange: i = () => {}, collapsible: a = !1, ...o } = e,
      [s, c] = Et({ prop: n, defaultProp: r ?? ``, onChange: i, caller: Db });
    return (0, I.jsx)(Ib, {
      scope: e.__scopeAccordion,
      value: y.useMemo(() => (s ? [s] : []), [s]),
      onItemOpen: c,
      onItemClose: y.useCallback(() => a && c(``), [a, c]),
      children: (0, I.jsx)(Rb, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: (0, I.jsx)(Wb, { ...o, ref: t }),
      }),
    });
  }),
  Vb = y.forwardRef((e, t) => {
    let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e,
      [o, s] = Et({ prop: n, defaultProp: r ?? [], onChange: i, caller: Db }),
      c = y.useCallback((e) => s((t = []) => [...t, e]), [s]),
      l = y.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
    return (0, I.jsx)(Ib, {
      scope: e.__scopeAccordion,
      value: o,
      onItemOpen: c,
      onItemClose: l,
      children: (0, I.jsx)(Rb, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: (0, I.jsx)(Wb, { ...a, ref: t }),
      }),
    });
  }),
  [Hb, Ub] = Mb(Db),
  Wb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, disabled: r, dir: i, orientation: a = `vertical`, ...o } = e,
      s = Ie(y.useRef(null), t),
      c = Ab(n),
      l = Eb(i) === `ltr`,
      u = L(e.onKeyDown, (e) => {
        if (!Ob.includes(e.key)) return;
        let t = e.target,
          n = c().filter((e) => !e.ref.current?.disabled),
          r = n.findIndex((e) => e.ref.current === t),
          i = n.length;
        if (r === -1) return;
        e.preventDefault();
        let o = r,
          s = i - 1,
          u = () => {
            ((o = r + 1), o > s && (o = 0));
          },
          d = () => {
            ((o = r - 1), o < 0 && (o = s));
          };
        switch (e.key) {
          case `Home`:
            o = 0;
            break;
          case `End`:
            o = s;
            break;
          case `ArrowRight`:
            a === `horizontal` && (l ? u() : d());
            break;
          case `ArrowDown`:
            a === `vertical` && u();
            break;
          case `ArrowLeft`:
            a === `horizontal` && (l ? d() : u());
            break;
          case `ArrowUp`:
            a === `vertical` && d();
            break;
        }
        n[o % i].ref.current?.focus();
      });
    return (0, I.jsx)(Hb, {
      scope: n,
      disabled: r,
      direction: i,
      orientation: a,
      children: (0, I.jsx)(kb.Slot, {
        scope: n,
        children: (0, I.jsx)(Qe.div, {
          ...o,
          'data-orientation': a,
          ref: s,
          onKeyDown: r ? void 0 : u,
        }),
      }),
    });
  }),
  Gb = `AccordionItem`,
  [Kb, qb] = Mb(Gb),
  Jb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, value: r, ...i } = e,
      a = Ub(Gb, n),
      o = Lb(Gb, n),
      s = Pb(n),
      c = vi(),
      l = (r && o.value.includes(r)) || !1,
      u = a.disabled || e.disabled;
    return (0, I.jsx)(Kb, {
      scope: n,
      open: l,
      disabled: u,
      triggerId: c,
      children: (0, I.jsx)(Sb, {
        'data-orientation': a.orientation,
        'data-state': tx(l),
        ...s,
        ...i,
        ref: t,
        disabled: u,
        open: l,
        onOpenChange: (e) => {
          e ? o.onItemOpen(r) : o.onItemClose(r);
        },
      }),
    });
  });
Jb.displayName = Gb;
var Yb = `AccordionHeader`,
  Xb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = Ub(Db, n),
      a = qb(Yb, n);
    return (0, I.jsx)(Qe.h3, {
      'data-orientation': i.orientation,
      'data-state': tx(a.open),
      'data-disabled': a.disabled ? `` : void 0,
      ...r,
      ref: t,
    });
  });
Xb.displayName = Yb;
var Zb = `AccordionTrigger`,
  Qb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = Ub(Db, n),
      a = qb(Zb, n),
      o = zb(Zb, n),
      s = Pb(n);
    return (0, I.jsx)(kb.ItemSlot, {
      scope: n,
      children: (0, I.jsx)(Cb, {
        'aria-disabled': (a.open && !o.collapsible) || void 0,
        'data-orientation': i.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t,
      }),
    });
  });
Qb.displayName = Zb;
var $b = `AccordionContent`,
  ex = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = Ub(Db, n),
      a = qb($b, n),
      o = Pb(n);
    return (0, I.jsx)(wb, {
      role: `region`,
      'aria-labelledby': a.triggerId,
      'data-orientation': i.orientation,
      ...o,
      ...r,
      ref: t,
      style: {
        '--radix-accordion-content-height': `var(--radix-collapsible-content-height)`,
        '--radix-accordion-content-width': `var(--radix-collapsible-content-width)`,
        ...e.style,
      },
    });
  });
ex.displayName = $b;
function tx(e) {
  return e ? `open` : `closed`;
}
var nx = Fb,
  rx = Jb,
  ix = Xb,
  ax = Qb,
  ox = ex,
  sx = nx,
  cx = y.forwardRef(({ className: e, ...t }, n) =>
    (0, I.jsx)(rx, { ref: n, className: H(`border-b`, e), ...t })
  );
cx.displayName = `AccordionItem`;
var lx = y.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, I.jsx)(ix, {
    className: `flex`,
    children: (0, I.jsxs)(ax, {
      ref: r,
      className: H(
        `flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180`,
        e
      ),
      ...n,
      children: [
        t,
        (0, I.jsx)(Vn, { className: `h-4 w-4 shrink-0 transition-transform duration-200` }),
      ],
    }),
  })
);
lx.displayName = ax.displayName;
var ux = y.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, I.jsx)(ox, {
    ref: r,
    className: `overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,
    ...n,
    children: (0, I.jsx)(`div`, { className: H(`pb-4 pt-0`, e), children: t }),
  })
);
ux.displayName = ox.displayName;
var dx = [
    {
      question: `How does WAssistant allow me to text on WhatsApp without saving a contact?`,
      answer: `WAssistant leverages the official WhatsApp API ('wa.me' links). When you enter a phone number and tap 'Chat', WAssistant generates an instant secure link that opens your WhatsApp or WhatsApp Web directly to a chat window with that specific number. No contacts need to be saved in your phonebook, saving you time and keeping your contacts list clean.`,
    },
    {
      question: `Is this service really free to use?`,
      answer: `Yes, WAssistant is a completely free utility tool. We provide this service to help users, businesses, and professionals communicate more efficiently on WhatsApp. Our web platform does include minimal advertising to support hosting costs, but the core features will always remain free.`,
    },
    {
      question: `Are my chat messages or phone numbers stored anywhere?`,
      answer: `Absolutely not. Privacy is our top priority. WAssistant operates entirely client-side, meaning phone numbers are processed locally on your device or browser. We do not store, intercept, or track any conversations or phone numbers you communicate with. Your text goes directly to WhatsApp.`,
    },
    {
      question: `Can I use WAssistant for my business?`,
      answer: `Yes, many businesses rely on WAssistant. If you frequently interact with delivery drivers, prospective clients, or one-time customers, using our tool keeps your business phonebook organized. Additionally, our QR code and Chat Link generator features allow you to create custom links for your customers to reach you easily from your website or social media.`,
    },
    {
      question: `Does this work on mobile and desktop?`,
      answer: `WAssistant is fully responsive and works beautifully on any device. On a mobile device, tapping the chat button will open the native WhatsApp application. On a desktop or laptop computer, it will open WhatsApp Web or the WhatsApp Desktop app, creating a seamless experience across all your devices.`,
    },
    {
      question: `Is WAssistant affiliated with WhatsApp or Meta?`,
      answer: `No, WAssistant is an independent utility application created to enhance your messaging experience. It is not affiliated with, officially endorsed by, or connected to WhatsApp Inc. or Meta Platforms, Inc. We simply utilize the public API tools provided by WhatsApp for developers.`,
    },
  ],
  fx = () =>
    (0, I.jsx)(`section`, {
      id: `faq`,
      className: `py-24 relative bg-background`,
      children: (0, I.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, I.jsxs)($.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5 },
          className: `max-w-3xl mx-auto`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `text-center mb-12`,
              children: [
                (0, I.jsx)(`span`, {
                  className: `text-xs font-mono uppercase tracking-widest text-primary mb-4 block`,
                  children: `Frequently Asked Questions`,
                }),
                (0, I.jsx)(`h2`, {
                  className: `text-3xl md:text-4xl font-bold text-foreground`,
                  children: `Learn more about using WAssistant`,
                }),
                (0, I.jsx)(`p`, {
                  className: `text-muted-foreground mt-4`,
                  children: `Here are detailed answers to the most common questions our users have about privacy, functionality, and using our utility tool.`,
                }),
              ],
            }),
            (0, I.jsx)(`div`, {
              className: `glass-surface rounded-2xl p-6 md:p-8`,
              children: (0, I.jsx)(sx, {
                type: `single`,
                collapsible: !0,
                className: `w-full space-y-4`,
                children: dx.map((e, t) =>
                  (0, I.jsxs)(
                    cx,
                    {
                      value: `item-${t}`,
                      className: `border-border`,
                      children: [
                        (0, I.jsx)(lx, {
                          className: `text-left font-semibold text-[15px] md:text-base hover:text-primary transition-colors`,
                          children: e.question,
                        }),
                        (0, I.jsx)(ux, {
                          className: `text-muted-foreground leading-relaxed`,
                          children: e.answer,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            }),
          ],
        }),
      }),
    }),
  px = [
    {
      icon: sr,
      title: `Delivery Drivers & Logistics`,
      description: `When waiting for a package or coordinating a drop-off, sending a quick WhatsApp message to a delivery driver is the fastest way to communicate. WAssistant allows you to enter the driver's number provided in your delivery app and text them instantly without permanently adding them to your phone's contact list. This protects your privacy while ensuring successful deliveries.`,
    },
    {
      icon: ar,
      title: `Sales & E-Commerce`,
      description: `Small business owners answering inquiries from social media or local classifieds deal with dozens of temporary phone numbers daily. Using WAssistant, sellers can quickly reply to leads and coordinate sales on WhatsApp. Additionally, using our QR generator on product pages allows buyers to initiate chats perfectly formatted for instant inquiries.`,
    },
    {
      icon: zn,
      title: `Freelancers & Consultants`,
      description: `Freelancers often network and exchange phone numbers during events, webinars, or brief meetings. Instead of bloating your personal contact book with hundreds of one-time connections, WAssistant offers a streamlined approach. Follow up instantly on WhatsApp using their number for a quick introduction, saving the contact only if a professional relationship develops.`,
    },
    {
      icon: lr,
      title: `Everyday Personal Use`,
      description: `Whether you are inquiring about a rental listing, talking to customer support of a local retail store, or coordinating a meetup with someone you found online, keeping your address book completely clean is a massive advantage. WAssistant ensures your core contacts remain people you actually know, while still letting you utilize WhatsApp's secure platform for all one-off communications.`,
    },
  ],
  mx = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } },
  hx = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
  },
  gx = () =>
    (0, I.jsx)(`section`, {
      id: `use-cases`,
      className: `py-24 relative bg-primary/5`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            className: `text-center mb-16`,
            children: [
              (0, I.jsx)(`span`, {
                className: `text-xs font-mono uppercase tracking-widest text-primary mb-4 block`,
                children: `Practical Use Cases`,
              }),
              (0, I.jsx)(`h2`, {
                className: `text-3xl md:text-4xl font-bold text-foreground`,
                children: `How WAssistant simplifies communication`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed`,
                children: `Sending a WhatsApp message without saving the number isn't just about saving a few taps. For many professionals and individuals, it changes how they manage their digital privacy and daily communications. Explore the common ways people utilize our platform.`,
              }),
            ],
          }),
          (0, I.jsx)($.div, {
            variants: mx,
            initial: `hidden`,
            whileInView: `show`,
            viewport: { once: !0 },
            className: `grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto`,
            children: px.map((e) =>
              (0, I.jsxs)(
                $.div,
                {
                  variants: hx,
                  className: `glass-surface rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center gap-4 mb-4`,
                      children: [
                        (0, I.jsx)(`div`, {
                          className: `h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex flex-shrink-0 items-center justify-center`,
                          children: (0, I.jsx)(e.icon, { className: `h-6 w-6 text-primary` }),
                        }),
                        (0, I.jsx)(`h3`, {
                          className: `text-xl font-semibold text-foreground`,
                          children: e.title,
                        }),
                      ],
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-muted-foreground leading-relaxed`,
                      children: e.description,
                    }),
                  ],
                },
                e.title
              )
            ),
          }),
        ],
      }),
    }),
  _x = () =>
    (0, I.jsxs)(`div`, {
      className: `min-h-screen bg-background`,
      children: [
        (0, I.jsx)(sb, {}),
        (0, I.jsxs)(`section`, {
          id: `top`,
          className: `relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16`,
          children: [
            (0, I.jsx)(lb, {}),
            (0, I.jsxs)(`div`, {
              className: `relative z-10 w-full max-w-lg text-center space-y-8`,
              children: [
                (0, I.jsxs)($.div, {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
                  className: `flex items-center justify-center gap-2.5`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`,
                      children: (0, I.jsx)(fr, { className: `h-5 w-5 text-primary` }),
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-2xl font-bold tracking-tight text-foreground`,
                      children: `WAssistant`,
                    }),
                  ],
                }),
                (0, I.jsxs)($.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.1, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
                  children: [
                    (0, I.jsxs)(`h1`, {
                      className: `text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-3`,
                      children: [
                        `Chat on `,
                        (0, I.jsx)(`span`, { className: `text-primary`, children: `WhatsApp` }),
                        (0, I.jsx)(`br`, {}),
                        `without saving contacts`,
                      ],
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-muted-foreground mt-4 max-w-md mx-auto`,
                      children: `Enter any phone number and start a WhatsApp conversation instantly. No contact saving needed — free, private, and fast.`,
                    }),
                  ],
                }),
                (0, I.jsx)(cb, {}),
              ],
            }),
          ],
        }),
        (0, I.jsx)(rb, {}),
        (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(Qy, {
            slot: `7135284713`,
            className: `w-full max-w-3xl mx-auto my-8`,
          }),
        }),
        (0, I.jsx)(ob, {}),
        (0, I.jsx)(gx, {}),
        (0, I.jsx)(Zy, {}),
        (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(Qy, {
            slot: `7135284713`,
            className: `w-full max-w-3xl mx-auto my-8`,
          }),
        }),
        (0, I.jsx)(fx, {}),
        (0, I.jsx)($y, {}),
        (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(Qy, {
            slot: `7135284713`,
            className: `w-full max-w-3xl mx-auto my-8`,
          }),
        }),
        (0, I.jsx)(ib, {}),
      ],
    }),
  vx = () => {
    let e = El();
    return (
      (0, y.useEffect)(() => {
        console.error(`404 Error: User attempted to access non-existent route:`, e.pathname);
      }, [e.pathname]),
      (0, I.jsx)(`div`, {
        className: `flex min-h-screen items-center justify-center bg-muted`,
        children: (0, I.jsxs)(`div`, {
          className: `text-center`,
          children: [
            (0, I.jsx)(`h1`, { className: `mb-4 text-4xl font-bold`, children: `404` }),
            (0, I.jsx)(`p`, {
              className: `mb-4 text-xl text-muted-foreground`,
              children: `Oops! Page not found`,
            }),
            (0, I.jsx)(`a`, {
              href: `/`,
              className: `text-primary underline hover:text-primary/90`,
              children: `Return to Home`,
            }),
          ],
        }),
      })
    );
  },
  yx = [
    {
      icon: zn,
      title: `Business & Sales`,
      description: `Streamline customer communication without cluttering your phone contacts. Perfect for sales teams, customer support, and business networking.`,
      scenarios: [
        `Quick client follow-ups without saving numbers`,
        `One-time vendor communications`,
        `Event coordination with temporary contacts`,
        `Customer support ticket handling`,
        `Sales inquiry responses`,
      ],
      testimonial: {
        quote: `WAssistant helped us reduce contact list clutter by 80% while improving response times.`,
        author: `Sales Manager, Tech Startup`,
      },
    },
    {
      icon: ir,
      title: `E-commerce & Delivery`,
      description: `Coordinate deliveries and customer pickups efficiently. Contact drivers and customers without adding them to your personal contacts.`,
      scenarios: [
        `Contact delivery drivers for instructions`,
        `Notify customers about arrivals`,
        `Coordinate pickup times`,
        `Handle delivery issues instantly`,
        `Update customers on delays`,
      ],
      testimonial: {
        quote: `Essential tool for our delivery coordination. Saves time and keeps personal contacts clean.`,
        author: `Operations Manager, Delivery Service`,
      },
    },
    {
      icon: sr,
      title: `Service Providers`,
      description: `Plumbers, electricians, cleaners, and other service professionals can communicate with clients without mixing personal and business contacts.`,
      scenarios: [
        `Schedule appointments with new clients`,
        `Send arrival notifications`,
        `Share service completion updates`,
        `Request access instructions`,
        `Handle billing inquiries`,
      ],
      testimonial: {
        quote: `Finally, a clean way to message clients without my phone being full of one-time numbers.`,
        author: `Independent Contractor`,
      },
    },
    {
      icon: Bn,
      title: `Events & Conferences`,
      description: `Network at events without adding every contact to your phone. Follow up with connections professionally and efficiently.`,
      scenarios: [
        `Quick networking follow-ups`,
        `Speaker coordination`,
        `Attendee communication`,
        `Last-minute event changes`,
        `Post-event thank you messages`,
      ],
      testimonial: {
        quote: `Perfect for conference networking. I can follow up immediately without adding 50+ contacts.`,
        author: `Event Coordinator`,
      },
    },
    {
      icon: Jn,
      title: `Real Estate`,
      description: `Real estate agents can manage multiple property inquiries and coordinate viewings without overwhelming their contact list.`,
      scenarios: [
        `Schedule property viewings`,
        `Send location details`,
        `Coordinate with sellers`,
        `Update on offers and bids`,
        `Share property documents`,
      ],
      testimonial: {
        quote: `Manages 20+ daily inquiries without contact chaos. Game changer for real estate.`,
        author: `Real Estate Agent`,
      },
    },
    {
      icon: Gn,
      title: `Education`,
      description: `Teachers and students can communicate for projects, assignments, and coordination without sharing personal contact details.`,
      scenarios: [
        `Group project coordination`,
        `Assignment clarifications`,
        `Parent-teacher quick updates`,
        `Study group organization`,
        `Event planning`,
      ],
      testimonial: {
        quote: `Great for student communication while maintaining professional boundaries.`,
        author: `University Professor`,
      },
    },
    {
      icon: Kn,
      title: `Healthcare`,
      description: `Medical professionals can coordinate with patients for appointments, follow-ups, and test results while maintaining privacy.`,
      scenarios: [
        `Appointment reminders`,
        `Test result notifications`,
        `Prescription refill requests`,
        `Follow-up scheduling`,
        `General health inquiries`,
      ],
      testimonial: {
        quote: `Maintains patient privacy while enabling efficient communication.`,
        author: `Healthcare Administrator`,
      },
    },
    {
      icon: $n,
      title: `Travel & Hospitality`,
      description: `Hotels, tour guides, and travel services can communicate with guests and coordinate logistics without permanent contact sharing.`,
      scenarios: [
        `Guest arrival coordination`,
        `Tour guide communication`,
        `Local recommendation sharing`,
        `Emergency contact updates`,
        `Booking confirmations`,
      ],
      testimonial: {
        quote: `Seamless guest communication without language barriers or contact sharing.`,
        author: `Hotel Manager`,
      },
    },
  ],
  bx = [
    { number: `50K+`, label: `Daily Users` },
    { number: `2M+`, label: `Messages Sent` },
    { number: `150+`, label: `Countries` },
    { number: `99.9%`, label: `Uptime` },
  ];
function xx() {
  return (0, I.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, I.jsx)(`section`, {
        className: `py-20 relative overflow-hidden`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsxs)($.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: `text-center max-w-3xl mx-auto`,
            children: [
              (0, I.jsxs)(`div`, {
                className: `inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6`,
                children: [(0, I.jsx)(ur, { className: `w-4 h-4` }), `Real-World Applications`],
              }),
              (0, I.jsx)(`h1`, {
                className: `text-4xl md:text-5xl font-bold text-foreground mb-6`,
                children: `How People Use WAssistant`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-lg text-muted-foreground leading-relaxed`,
                children: `Discover how professionals across industries use WAssistant to streamline communication and boost productivity.`,
              }),
            ],
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-12 border-y border-border`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(`div`, {
            className: `grid grid-cols-2 md:grid-cols-4 gap-8`,
            children: bx.map((e, t) =>
              (0, I.jsxs)(
                $.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.4, delay: t * 0.1 },
                  className: `text-center`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `text-3xl md:text-4xl font-bold text-primary mb-2`,
                      children: e.number,
                    }),
                    (0, I.jsx)(`div`, {
                      className: `text-sm text-muted-foreground`,
                      children: e.label,
                    }),
                  ],
                },
                e.label
              )
            ),
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-16`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(`div`, {
            className: `grid lg:grid-cols-2 gap-8`,
            children: yx.map((e, t) =>
              (0, I.jsxs)(
                $.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: t * 0.1 },
                  className: `bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-start gap-4 mb-6`,
                      children: [
                        (0, I.jsx)(`div`, {
                          className: `w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0`,
                          children: (0, I.jsx)(e.icon, { className: `w-7 h-7 text-primary` }),
                        }),
                        (0, I.jsxs)(`div`, {
                          children: [
                            (0, I.jsx)(`h3`, {
                              className: `text-xl font-bold text-foreground mb-2`,
                              children: e.title,
                            }),
                            (0, I.jsx)(`p`, {
                              className: `text-muted-foreground text-sm leading-relaxed`,
                              children: e.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `space-y-3 mb-6`,
                      children: [
                        (0, I.jsx)(`h4`, {
                          className: `text-sm font-semibold text-foreground uppercase tracking-wide`,
                          children: `Common Scenarios`,
                        }),
                        (0, I.jsx)(`ul`, {
                          className: `space-y-2`,
                          children: e.scenarios.map((e, t) =>
                            (0, I.jsxs)(
                              `li`,
                              {
                                className: `flex items-start gap-2 text-sm text-muted-foreground`,
                                children: [
                                  (0, I.jsx)(Hn, {
                                    className: `w-4 h-4 text-primary mt-0.5 flex-shrink-0`,
                                  }),
                                  e,
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `bg-primary/5 border border-primary/20 rounded-xl p-4`,
                      children: [
                        (0, I.jsxs)(`p`, {
                          className: `text-sm text-foreground italic mb-2`,
                          children: [`"`, e.testimonial.quote, `"`],
                        }),
                        (0, I.jsxs)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: [`— `, e.testimonial.author],
                        }),
                      ],
                    }),
                  ],
                },
                e.title
              )
            ),
          }),
        }),
      }),
      (0, I.jsx)(`section`, {
        className: `py-16 border-t border-border`,
        children: (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsxs)(`div`, {
            className: `glass-surface rounded-2xl p-8 md:p-12 text-center`,
            children: [
              (0, I.jsx)(Xn, { className: `w-12 h-12 text-primary mx-auto mb-6` }),
              (0, I.jsx)(`h2`, {
                className: `text-2xl md:text-3xl font-bold text-foreground mb-4`,
                children: `Ready to streamline your communication?`,
              }),
              (0, I.jsx)(`p`, {
                className: `text-muted-foreground mb-6 max-w-2xl mx-auto`,
                children: `Join thousands of professionals who use WAssistant daily to simplify their WhatsApp messaging.`,
              }),
              (0, I.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all`,
                children: `Get Started Free`,
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var Sx = new Fc();
(0, v.createRoot)(document.getElementById(`root`)).render(
  (0, I.jsx)(
    () =>
      (0, I.jsx)(Lc, {
        client: Sx,
        children: (0, I.jsxs)(Ls, {
          children: [
            (0, I.jsx)(hi, {}),
            (0, I.jsx)(xe, {}),
            (0, I.jsx)(Jl, {
              children: (0, I.jsxs)(Wl, {
                children: [
                  (0, I.jsx)(Hl, { path: `/`, element: (0, I.jsx)(_x, {}) }),
                  (0, I.jsx)(Hl, {
                    path: `/analytics`,
                    element: (0, I.jsx)(AnalyticsDashboard, {}),
                  }),
                  (0, I.jsx)(Hl, { path: `/blog`, element: (0, I.jsx)(Jy, {}) }),
                  (0, I.jsx)(Hl, { path: `/features`, element: (0, I.jsx)(Xy, {}) }),
                  (0, I.jsx)(Hl, { path: `/use-cases`, element: (0, I.jsx)(xx, {}) }),
                  (0, I.jsx)(Hl, { path: `*`, element: (0, I.jsx)(vx, {}) }),
                ],
              }),
            }),
          ],
        }),
      }),
    {}
  )
);
