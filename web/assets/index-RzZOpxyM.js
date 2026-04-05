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
      if ((e = Vi(e))) {
        if (typeof Ve != `function`) throw Error(r(280));
        var t = e.stateNode;
        t && ((t = Ui(t)), Ve(e.stateNode, e.type, t));
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
      var i = Ui(n);
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
          t !== null && ((t = Vi(t)), t !== null && Kt(t)),
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
      var t = Bi(e.target);
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
        } else return ((t = Vi(n)), t !== null && Kt(t), (e.blockedOn = n), !1);
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
        if (i === null) (fi(e, t, r, bn, n), on(e, r));
        else if (cn(i, e, t, n, r)) r.stopPropagation();
        else if ((on(e, r), t & 4 && -1 < an.indexOf(e))) {
          for (; i !== null; ) {
            var a = Vi(i);
            if (
              (a !== null && Gt(a), (a = xn(e, t, n, r)), a === null && fi(e, t, r, bn, n), a === i)
            )
              break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else fi(e, t, r, null, n);
      }
    }
    var bn = null;
    function xn(e, t, n, r) {
      if (((bn = null), (e = Be(r)), (e = Bi(e)), e !== null))
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
      Ln,
      Rn = F({}, Nn, {
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
        getModifierState: Yn,
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
            : (e !== Ln &&
                (Ln && e.type === `mousemove`
                  ? ((Fn = e.screenX - Ln.screenX), (In = e.screenY - Ln.screenY))
                  : (In = Fn = 0),
                (Ln = e)),
              Fn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : In;
        },
      }),
      zn = An(Rn),
      Bn = An(F({}, Rn, { dataTransfer: 0 })),
      Vn = An(F({}, Nn, { relatedTarget: 0 })),
      Hn = An(F({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Un = An(
        F({}, jn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        })
      ),
      Wn = An(F({}, jn, { data: 0 })),
      Gn = {
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
      Kn = {
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
      qn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Jn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = qn[e]) ? !!t[e] : !1;
    }
    function Yn() {
      return Jn;
    }
    var Xn = An(
        F({}, Nn, {
          key: function (e) {
            if (e.key) {
              var t = Gn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Dn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Kn[e.keyCode] || `Unidentified`
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
          getModifierState: Yn,
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
      Zn = An(
        F({}, Rn, {
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
      Qn = An(
        F({}, Nn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Yn,
        })
      ),
      $n = An(F({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      er = An(
        F({}, Rn, {
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
      tr = [9, 13, 27, 32],
      nr = c && `CompositionEvent` in window,
      rr = null;
    c && `documentMode` in document && (rr = document.documentMode);
    var ir = c && `TextEvent` in window && !rr,
      ar = c && (!nr || (rr && 8 < rr && 11 >= rr)),
      or = ` `,
      sr = !1;
    function cr(e, t) {
      switch (e) {
        case `keyup`:
          return tr.indexOf(t.keyCode) !== -1;
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
    function lr(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var ur = !1;
    function dr(e, t) {
      switch (e) {
        case `compositionend`:
          return lr(t);
        case `keypress`:
          return t.which === 32 ? ((sr = !0), or) : null;
        case `textInput`:
          return ((e = t.data), e === or && sr ? null : e);
        default:
          return null;
      }
    }
    function fr(e, t) {
      if (ur)
        return e === `compositionend` || (!nr && cr(e, t))
          ? ((e = En()), (Tn = wn = Cn = null), (ur = !1), e)
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
          return ar && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var pr = {
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
    function mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!pr[e.type] : t === `textarea`;
    }
    function hr(e, t, n, r) {
      (Ge(r),
        (t = mi(t, `onChange`)),
        0 < t.length &&
          ((n = new Mn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var gr = null,
      _r = null;
    function vr(e) {
      si(e, 0);
    }
    function z(e) {
      if (he(Hi(e))) return e;
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
      gr && (gr.detachEvent(`onpropertychange`, Tr), (_r = gr = null));
    }
    function Tr(e) {
      if (e.propertyName === `value` && z(_r)) {
        var t = [];
        (hr(t, _r, e, Be(e)), Xe(vr, t));
      }
    }
    function Er(e, t, n) {
      e === `focusin`
        ? (wr(), (gr = t), (_r = n), gr.attachEvent(`onpropertychange`, Tr))
        : e === `focusout` && wr();
    }
    function Dr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return z(_r);
    }
    function Or(e, t) {
      if (e === `click`) return z(t);
    }
    function kr(e, t) {
      if (e === `input` || e === `change`) return z(t);
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
          (r = mi(Br, `onSelect`)),
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
      qr = {};
    c &&
      ((qr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Gr.animationend.animation,
        delete Gr.animationiteration.animation,
        delete Gr.animationstart.animation),
      `TransitionEvent` in window || delete Gr.transitionend.transition);
    function Jr(e) {
      if (Kr[e]) return Kr[e];
      if (!Gr[e]) return e;
      var t = Gr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in qr) return (Kr[e] = t[n]);
      return e;
    }
    var Yr = Jr(`animationend`),
      Xr = Jr(`animationiteration`),
      Zr = Jr(`animationstart`),
      Qr = Jr(`transitionend`),
      $r = new Map(),
      ei =
        `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        );
    function ti(e, t) {
      ($r.set(e, t), o(t, [e]));
    }
    for (var ni = 0; ni < ei.length; ni++) {
      var ri = ei[ni];
      ti(ri.toLowerCase(), `on` + (ri[0].toUpperCase() + ri.slice(1)));
    }
    (ti(Yr, `onAnimationEnd`),
      ti(Xr, `onAnimationIteration`),
      ti(Zr, `onAnimationStart`),
      ti(`dblclick`, `onDoubleClick`),
      ti(`focusin`, `onFocus`),
      ti(`focusout`, `onBlur`),
      ti(Qr, `onTransitionEnd`),
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
    var ii =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      ai = new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ii));
    function oi(e, t, n) {
      var r = e.type || `unknown-event`;
      ((e.currentTarget = n), st(r, t, void 0, e), (e.currentTarget = null));
    }
    function si(e, t) {
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
              (oi(i, s, l), (a = c));
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
              (oi(i, s, l), (a = c));
            }
        }
      }
      if (rt) throw ((e = it), (rt = !1), (it = null), e);
    }
    function V(e, t) {
      var n = t[Li];
      n === void 0 && (n = t[Li] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (di(t, e, 2, !1), n.add(r));
    }
    function ci(e, t, n) {
      var r = 0;
      (t && (r |= 4), di(n, e, r, t));
    }
    var li = `_reactListening` + Math.random().toString(36).slice(2);
    function ui(e) {
      if (!e[li]) {
        ((e[li] = !0),
          i.forEach(function (t) {
            t !== `selectionchange` && (ai.has(t) || ci(t, !1, e), ci(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[li] || ((t[li] = !0), ci(`selectionchange`, !1, t));
      }
    }
    function di(e, t, n, r) {
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
    function fi(e, t, n, r, i) {
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
              if (((o = Bi(s)), o === null)) return;
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
          var s = $r.get(e);
          if (s !== void 0) {
            var c = Mn,
              l = e;
            switch (e) {
              case `keypress`:
                if (Dn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = Xn;
                break;
              case `focusin`:
                ((l = `focus`), (c = Vn));
                break;
              case `focusout`:
                ((l = `blur`), (c = Vn));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = Vn;
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
                c = zn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = Bn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = Qn;
                break;
              case Yr:
              case Xr:
              case Zr:
                c = Hn;
                break;
              case Qr:
                c = $n;
                break;
              case `scroll`:
                c = Pn;
                break;
              case `wheel`:
                c = er;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = Un;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = Zn;
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
                  ((m = h), f !== null && ((h = Ze(p, f)), h != null && u.push(pi(p, h, m)))),
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
              s && n !== ze && (l = n.relatedTarget || n.fromElement) && (Bi(l) || l[Ii]))
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
                  (l = l ? Bi(l) : null),
                  l !== null &&
                    ((d = ct(l)), l !== d || (l.tag !== 5 && l.tag !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l)
            ) {
              if (
                ((u = zn),
                (h = `onMouseLeave`),
                (f = `onMouseEnter`),
                (p = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((u = Zn), (h = `onPointerLeave`), (f = `onPointerEnter`), (p = `pointer`)),
                (d = c == null ? s : Hi(c)),
                (m = l == null ? s : Hi(l)),
                (s = new u(h, p + `leave`, c, n, i)),
                (s.target = d),
                (s.relatedTarget = m),
                (h = null),
                Bi(i) === r &&
                  ((u = new u(f, p + `enter`, l, n, i)),
                  (u.target = m),
                  (u.relatedTarget = d),
                  (h = u)),
                (d = h),
                c && l)
              )
                b: {
                  for (u = c, f = l, p = 0, m = u; m; m = hi(m)) p++;
                  for (m = 0, h = f; h; h = hi(h)) m++;
                  for (; 0 < p - m; ) ((u = hi(u)), p--);
                  for (; 0 < m - p; ) ((f = hi(f)), m--);
                  for (; p--; ) {
                    if (u === f || (f !== null && u === f.alternate)) break b;
                    ((u = hi(u)), (f = hi(f)));
                  }
                  u = null;
                }
              else u = null;
              (c !== null && gi(o, s, c, u, !1), l !== null && d !== null && gi(o, d, l, u, !0));
            }
          }
          a: {
            if (
              ((s = r ? Hi(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var g = yr;
            else if (mr(s))
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
              hr(o, g, n, i);
              break a;
            }
            (_ && _(e, s, r),
              e === `focusout` &&
                (_ = s._wrapperState) &&
                _.controlled &&
                s.type === `number` &&
                xe(s, `number`, s.value));
          }
          switch (((_ = r ? Hi(r) : window), e)) {
            case `focusin`:
              (mr(_) || _.contentEditable === `true`) && ((zr = _), (Br = r), (Vr = null));
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
          if (nr)
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
            ur
              ? cr(e, n) && (y = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (y = `onCompositionStart`);
          (y &&
            (ar &&
              n.locale !== `ko` &&
              (ur || y !== `onCompositionStart`
                ? y === `onCompositionEnd` && ur && (v = En())
                : ((Cn = i), (wn = `value` in Cn ? Cn.value : Cn.textContent), (ur = !0))),
            (_ = mi(r, y)),
            0 < _.length &&
              ((y = new Wn(y, e, null, n, i)),
              o.push({ event: y, listeners: _ }),
              v ? (y.data = v) : ((v = lr(n)), v !== null && (y.data = v)))),
            (v = ir ? dr(e, n) : fr(e, n)) &&
              ((r = mi(r, `onBeforeInput`)),
              0 < r.length &&
                ((i = new Wn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = v))));
        }
        si(o, t);
      });
    }
    function pi(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function mi(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        (i.tag === 5 &&
          a !== null &&
          ((i = a),
          (a = Ze(e, n)),
          a != null && r.unshift(pi(e, a, i)),
          (a = Ze(e, t)),
          a != null && r.push(pi(e, a, i))),
          (e = e.return));
      }
      return r;
    }
    function hi(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function gi(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (c !== null && c === r) break;
        (s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((c = Ze(n, a)), c != null && o.unshift(pi(n, c, s)))
            : i || ((c = Ze(n, a)), c != null && o.push(pi(n, c, s)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var _i = /\r\n?/g,
      vi = /\u0000|\uFFFD/g;
    function yi(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          _i,
          `
`
        )
        .replace(vi, ``);
    }
    function bi(e, t, n) {
      if (((t = yi(t)), yi(e) !== t && n)) throw Error(r(425));
    }
    function xi() {}
    var Si = null,
      Ci = null;
    function wi(e, t) {
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
    var Ti = typeof setTimeout == `function` ? setTimeout : void 0,
      Ei = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Di = typeof Promise == `function` ? Promise : void 0,
      Oi =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Di === void 0
            ? Ti
            : function (e) {
                return Di.resolve(null).then(e).catch(ki);
              };
    function ki(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Ai(e, t) {
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
    function ji(e) {
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
    function Mi(e) {
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
    var Ni = Math.random().toString(36).slice(2),
      Pi = `__reactFiber$` + Ni,
      Fi = `__reactProps$` + Ni,
      Ii = `__reactContainer$` + Ni,
      Li = `__reactEvents$` + Ni,
      Ri = `__reactListeners$` + Ni,
      zi = `__reactHandles$` + Ni;
    function Bi(e) {
      var t = e[Pi];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Ii] || n[Pi])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = Mi(e); e !== null; ) {
              if ((n = e[Pi])) return n;
              e = Mi(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Vi(e) {
      return (
        (e = e[Pi] || e[Ii]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
      );
    }
    function Hi(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(r(33));
    }
    function Ui(e) {
      return e[Fi] || null;
    }
    var Wi = [],
      Gi = -1;
    function Ki(e) {
      return { current: e };
    }
    function H(e) {
      0 > Gi || ((e.current = Wi[Gi]), (Wi[Gi] = null), Gi--);
    }
    function U(e, t) {
      (Gi++, (Wi[Gi] = e.current), (e.current = t));
    }
    var qi = {},
      W = Ki(qi),
      G = Ki(!1),
      Ji = qi;
    function Yi(e, t) {
      var n = e.type.contextTypes;
      if (!n) return qi;
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
    function K(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function Xi() {
      (H(G), H(W));
    }
    function Zi(e, t, n) {
      if (W.current !== qi) throw Error(r(168));
      (U(W, t), U(G, n));
    }
    function Qi(e, t, n) {
      var i = e.stateNode;
      if (((t = t.childContextTypes), typeof i.getChildContext != `function`)) return n;
      for (var a in ((i = i.getChildContext()), i))
        if (!(a in t)) throw Error(r(108, ue(e) || `Unknown`, a));
      return F({}, n, i);
    }
    function $i(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || qi),
        (Ji = W.current),
        U(W, e),
        U(G, G.current),
        !0
      );
    }
    function ea(e, t, n) {
      var i = e.stateNode;
      if (!i) throw Error(r(169));
      (n
        ? ((e = Qi(e, t, Ji)),
          (i.__reactInternalMemoizedMergedChildContext = e),
          H(G),
          H(W),
          U(W, e))
        : H(G),
        U(G, n));
    }
    var ta = null,
      na = !1,
      ra = !1;
    function ia(e) {
      ta === null ? (ta = [e]) : ta.push(e);
    }
    function aa(e) {
      ((na = !0), ia(e));
    }
    function oa() {
      if (!ra && ta !== null) {
        ra = !0;
        var e = 0,
          t = R;
        try {
          var n = ta;
          for (R = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((ta = null), (na = !1));
        } catch (t) {
          throw (ta !== null && (ta = ta.slice(e + 1)), mt(bt, oa), t);
        } finally {
          ((R = t), (ra = !1));
        }
      }
      return null;
    }
    var sa = [],
      ca = 0,
      la = null,
      ua = 0,
      da = [],
      fa = 0,
      pa = null,
      ma = 1,
      ha = ``;
    function ga(e, t) {
      ((sa[ca++] = ua), (sa[ca++] = la), (la = e), (ua = t));
    }
    function _a(e, t, n) {
      ((da[fa++] = ma), (da[fa++] = ha), (da[fa++] = pa), (pa = e));
      var r = ma;
      e = ha;
      var i = 32 - Ot(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ot(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ma = (1 << (32 - Ot(t) + i)) | (n << i) | r),
          (ha = a + e));
      } else ((ma = (1 << a) | (n << i) | r), (ha = e));
    }
    function va(e) {
      e.return !== null && (ga(e, 1), _a(e, 1, 0));
    }
    function ya(e) {
      for (; e === la; ) ((la = sa[--ca]), (sa[ca] = null), (ua = sa[--ca]), (sa[ca] = null));
      for (; e === pa; )
        ((pa = da[--fa]),
          (da[fa] = null),
          (ha = da[--fa]),
          (da[fa] = null),
          (ma = da[--fa]),
          (da[fa] = null));
    }
    var ba = null,
      xa = null,
      q = !1,
      Sa = null;
    function Ca(e, t) {
      var n = Jl(5, null, null, 0);
      ((n.elementType = `DELETED`),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function wa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
            t === null ? !1 : ((e.stateNode = t), (ba = e), (xa = ji(t.firstChild)), !0)
          );
        case 6:
          return (
            (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
            t === null ? !1 : ((e.stateNode = t), (ba = e), (xa = null), !0)
          );
        case 13:
          return (
            (t = t.nodeType === 8 ? t : null),
            t === null
              ? !1
              : ((n = pa === null ? null : { id: ma, overflow: ha }),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                (n = Jl(18, null, null, 0)),
                (n.stateNode = t),
                (n.return = e),
                (e.child = n),
                (ba = e),
                (xa = null),
                !0)
          );
        default:
          return !1;
      }
    }
    function Ta(e) {
      return (e.mode & 1) != 0 && (e.flags & 128) == 0;
    }
    function Ea(e) {
      if (q) {
        var t = xa;
        if (t) {
          var n = t;
          if (!wa(e, t)) {
            if (Ta(e)) throw Error(r(418));
            t = ji(n.nextSibling);
            var i = ba;
            t && wa(e, t) ? Ca(i, n) : ((e.flags = (e.flags & -4097) | 2), (q = !1), (ba = e));
          }
        } else {
          if (Ta(e)) throw Error(r(418));
          ((e.flags = (e.flags & -4097) | 2), (q = !1), (ba = e));
        }
      }
    }
    function Da(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      ba = e;
    }
    function Oa(e) {
      if (e !== ba) return !1;
      if (!q) return (Da(e), (q = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type), (t = t !== `head` && t !== `body` && !wi(e.type, e.memoizedProps))),
        (t &&= xa))
      ) {
        if (Ta(e)) throw (ka(), Error(r(418)));
        for (; t; ) (Ca(e, t), (t = ji(t.nextSibling)));
      }
      if ((Da(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(r(317));
        a: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === `/$`) {
                if (t === 0) {
                  xa = ji(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          xa = null;
        }
      } else xa = ba ? ji(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ka() {
      for (var e = xa; e; ) e = ji(e.nextSibling);
    }
    function Aa() {
      ((xa = ba = null), (q = !1));
    }
    function ja(e) {
      Sa === null ? (Sa = [e]) : Sa.push(e);
    }
    var Ma = C.ReactCurrentBatchConfig;
    function Na(e, t, n) {
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
    function Pa(e, t) {
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
    function Fa(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Ia(e) {
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
        return ((e = Zl(e, t)), (e.index = 0), (e.sibling = null), e);
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
          ? ((t = tu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === E
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === P && Fa(i) === t.type))
            ? ((r = a(t, n.props)), (r.ref = Na(e, t, n)), (r.return = e), r)
            : ((r = Ql(n.type, n.key, n.props, null, e.mode, r)),
              (r.ref = Na(e, t, n)),
              (r.return = e),
              r);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = nu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = $l(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number`)
          return ((t = tu(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case w:
              return (
                (n = Ql(t.type, t.key, t.props, null, e.mode, n)),
                (n.ref = Na(e, null, t)),
                (n.return = e),
                n
              );
            case T:
              return ((t = nu(t, e.mode, n)), (t.return = e), t);
            case P:
              var r = t._init;
              return f(e, r(t._payload), n);
          }
          if (Se(t) || re(t)) return ((t = $l(t, e.mode, n, null)), (t.return = e), t);
          Pa(e, t);
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
          Pa(e, n);
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
          Pa(t, r);
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
        if (h === s.length) return (n(r, d), q && ga(r, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(r, s[h], c)),
              d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (q && ga(r, h), l);
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
          q && ga(r, h),
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
        if (v.done) return (n(a, h), q && ga(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (q && ga(a, g), u);
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
          q && ga(a, g),
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
                      (typeof c == `object` && c && c.$$typeof === P && Fa(c) === l.type)
                    ) {
                      (n(e, l.sibling),
                        (r = a(l, i.props)),
                        (r.ref = Na(e, l, i)),
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
                  ? ((r = $l(i.props.children, e.mode, o, i.key)), (r.return = e), (e = r))
                  : ((o = Ql(i.type, i.key, i.props, null, e.mode, o)),
                    (o.ref = Na(e, r, i)),
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
                ((r = nu(i, e.mode, o)), (r.return = e), (e = r));
              }
              return s(e);
            case P:
              return ((l = i._init), _(e, r, l(i._payload), o));
          }
          if (Se(i)) return h(e, r, i, o);
          if (re(i)) return g(e, r, i, o);
          Pa(e, i);
        }
        return (typeof i == `string` && i !== ``) || typeof i == `number`
          ? ((i = `` + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (r = a(r, i)), (r.return = e), (e = r))
              : (n(e, r), (r = tu(i, e.mode, o)), (r.return = e), (e = r)),
            s(e))
          : n(e, r);
      }
      return _;
    }
    var La = Ia(!0),
      Ra = Ia(!1),
      za = Ki(null),
      Ba = null,
      Va = null,
      Ha = null;
    function Ua() {
      Ha = Va = Ba = null;
    }
    function Wa(e) {
      var t = za.current;
      (H(za), (e._currentValue = t));
    }
    function Ga(e, t, n) {
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
    function Ka(e, t) {
      ((Ba = e),
        (Ha = Va = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Ps = !0), (e.firstContext = null)));
    }
    function qa(e) {
      var t = e._currentValue;
      if (Ha !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Va === null)) {
          if (Ba === null) throw Error(r(308));
          ((Va = e), (Ba.dependencies = { lanes: 0, firstContext: e }));
        } else Va = Va.next = e;
      return t;
    }
    var Ja = null;
    function Ya(e) {
      Ja === null ? (Ja = [e]) : Ja.push(e);
    }
    function Xa(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), Ya(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        Za(e, r)
      );
    }
    function Za(e, t) {
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
    var Qa = !1;
    function $a(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function eo(e, t) {
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
    function to(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function no(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), Z & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          Za(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Ya(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        Za(e, n)
      );
    }
    function ro(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194240))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ut(e, n));
      }
    }
    function io(e, t) {
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
    function ao(e, t, n, r) {
      var i = e.updateQueue;
      Qa = !1;
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
                  Qa = !0;
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
        ((Xc |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function oo(e, t, n) {
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
    var so = {},
      co = Ki(so),
      lo = Ki(so),
      uo = Ki(so);
    function fo(e) {
      if (e === so) throw Error(r(174));
      return e;
    }
    function po(e, t) {
      switch ((U(uo, t), U(lo, e), U(co, so), (e = t.nodeType), e)) {
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
      (H(co), U(co, t));
    }
    function mo() {
      (H(co), H(lo), H(uo));
    }
    function ho(e) {
      fo(uo.current);
      var t = fo(co.current),
        n = ke(t, e.type);
      t !== n && (U(lo, e), U(co, n));
    }
    function go(e) {
      lo.current === e && (H(co), H(lo));
    }
    var J = Ki(0);
    function _o(e) {
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
    var vo = [];
    function yo() {
      for (var e = 0; e < vo.length; e++) vo[e]._workInProgressVersionPrimary = null;
      vo.length = 0;
    }
    var bo = C.ReactCurrentDispatcher,
      xo = C.ReactCurrentBatchConfig,
      So = 0,
      Y = null,
      Co = null,
      wo = null,
      To = !1,
      Eo = !1,
      Do = 0,
      Oo = 0;
    function ko() {
      throw Error(r(321));
    }
    function Ao(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!jr(e[n], t[n])) return !1;
      return !0;
    }
    function jo(e, t, n, i, a, o) {
      if (
        ((So = o),
        (Y = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (bo.current = e === null || e.memoizedState === null ? ms : hs),
        (e = n(i, a)),
        Eo)
      ) {
        o = 0;
        do {
          if (((Eo = !1), (Do = 0), 25 <= o)) throw Error(r(301));
          ((o += 1), (wo = Co = null), (t.updateQueue = null), (bo.current = gs), (e = n(i, a)));
        } while (Eo);
      }
      if (
        ((bo.current = ps),
        (t = Co !== null && Co.next !== null),
        (So = 0),
        (wo = Co = Y = null),
        (To = !1),
        t)
      )
        throw Error(r(300));
      return e;
    }
    function Mo() {
      var e = Do !== 0;
      return ((Do = 0), e);
    }
    function No() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (wo === null ? (Y.memoizedState = wo = e) : (wo = wo.next = e), wo);
    }
    function Po() {
      if (Co === null) {
        var e = Y.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = Co.next;
      var t = wo === null ? Y.memoizedState : wo.next;
      if (t !== null) ((wo = t), (Co = e));
      else {
        if (e === null) throw Error(r(310));
        ((Co = e),
          (e = {
            memoizedState: Co.memoizedState,
            baseState: Co.baseState,
            baseQueue: Co.baseQueue,
            queue: Co.queue,
            next: null,
          }),
          wo === null ? (Y.memoizedState = wo = e) : (wo = wo.next = e));
      }
      return wo;
    }
    function Fo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Io(e) {
      var t = Po(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = Co,
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
          if ((So & d) === d)
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
            (l === null ? ((c = l = f), (s = i)) : (l = l.next = f), (Y.lanes |= d), (Xc |= d));
          }
          u = u.next;
        } while (u !== null && u !== o);
        (l === null ? (s = i) : (l.next = c),
          jr(i, t.memoizedState) || (Ps = !0),
          (t.memoizedState = i),
          (t.baseState = s),
          (t.baseQueue = l),
          (n.lastRenderedState = i));
      }
      if (((e = n.interleaved), e !== null)) {
        a = e;
        do ((o = a.lane), (Y.lanes |= o), (Xc |= o), (a = a.next));
        while (a !== e);
      } else a === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Lo(e) {
      var t = Po(),
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
        (jr(o, t.memoizedState) || (Ps = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, i];
    }
    function Ro() {}
    function zo(e, t) {
      var n = Y,
        i = Po(),
        a = t(),
        o = !jr(i.memoizedState, a);
      if (
        (o && ((i.memoizedState = a), (Ps = !0)),
        (i = i.queue),
        Zo(Ho.bind(null, n, i, e), [e]),
        i.getSnapshot !== t || o || (wo !== null && wo.memoizedState.tag & 1))
      ) {
        if (((n.flags |= 2048), Ko(9, Vo.bind(null, n, i, a, t), void 0, null), Uc === null))
          throw Error(r(349));
        So & 30 || Bo(n, t, a);
      }
      return a;
    }
    function Bo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Y.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Vo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Uo(t) && Wo(e));
    }
    function Ho(e, t, n) {
      return n(function () {
        Uo(t) && Wo(e);
      });
    }
    function Uo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !jr(e, n);
      } catch {
        return !0;
      }
    }
    function Wo(e) {
      var t = Za(e, 1);
      t !== null && gl(t, e, 1, -1);
    }
    function Go(e) {
      var t = No();
      return (
        typeof e == `function` && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fo,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = ls.bind(null, Y, e)),
        [t.memoizedState, e]
      );
    }
    function Ko(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = Y.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (Y.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function qo() {
      return Po().memoizedState;
    }
    function Jo(e, t, n, r) {
      var i = No();
      ((Y.flags |= e), (i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function Yo(e, t, n, r) {
      var i = Po();
      r = r === void 0 ? null : r;
      var a = void 0;
      if (Co !== null) {
        var o = Co.memoizedState;
        if (((a = o.destroy), r !== null && Ao(r, o.deps))) {
          i.memoizedState = Ko(t, n, a, r);
          return;
        }
      }
      ((Y.flags |= e), (i.memoizedState = Ko(1 | t, n, a, r)));
    }
    function Xo(e, t) {
      return Jo(8390656, 8, e, t);
    }
    function Zo(e, t) {
      return Yo(2048, 8, e, t);
    }
    function Qo(e, t) {
      return Yo(4, 2, e, t);
    }
    function $o(e, t) {
      return Yo(4, 4, e, t);
    }
    function es(e, t) {
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
    function ts(e, t, n) {
      return ((n = n == null ? null : n.concat([e])), Yo(4, 4, es.bind(null, t, e), n));
    }
    function ns() {}
    function rs(e, t) {
      var n = Po();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Ao(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function is(e, t) {
      var n = Po();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Ao(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function as(e, t, n) {
      return So & 21
        ? (jr(n, t) || ((n = zt()), (Y.lanes |= n), (Xc |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (Ps = !0)), (e.memoizedState = n));
    }
    function os(e, t) {
      var n = R;
      ((R = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = xo.transition;
      xo.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((R = n), (xo.transition = r));
      }
    }
    function ss() {
      return Po().memoizedState;
    }
    function cs(e, t, n) {
      var r = hl(e);
      if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), us(e)))
        ds(t, n);
      else if (((n = Xa(e, t, n, r)), n !== null)) {
        var i = ml();
        (gl(n, e, r, i), fs(n, t, r));
      }
    }
    function ls(e, t, n) {
      var r = hl(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
      if (us(e)) ds(t, i);
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
              (c === null ? ((i.next = i), Ya(t)) : ((i.next = c.next), (c.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = Xa(e, t, i, r)), n !== null && ((i = ml()), gl(n, e, r, i), fs(n, t, r)));
      }
    }
    function us(e) {
      var t = e.alternate;
      return e === Y || (t !== null && t === Y);
    }
    function ds(e, t) {
      Eo = To = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function fs(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ut(e, n));
      }
    }
    var ps = {
        readContext: qa,
        useCallback: ko,
        useContext: ko,
        useEffect: ko,
        useImperativeHandle: ko,
        useInsertionEffect: ko,
        useLayoutEffect: ko,
        useMemo: ko,
        useReducer: ko,
        useRef: ko,
        useState: ko,
        useDebugValue: ko,
        useDeferredValue: ko,
        useTransition: ko,
        useMutableSource: ko,
        useSyncExternalStore: ko,
        useId: ko,
        unstable_isNewReconciler: !1,
      },
      ms = {
        readContext: qa,
        useCallback: function (e, t) {
          return ((No().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: qa,
        useEffect: Xo,
        useImperativeHandle: function (e, t, n) {
          return ((n = n == null ? null : n.concat([e])), Jo(4194308, 4, es.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Jo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return Jo(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = No();
          return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: function (e, t, n) {
          var r = No();
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
            (e = e.dispatch = cs.bind(null, Y, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = No();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: Go,
        useDebugValue: ns,
        useDeferredValue: function (e) {
          return (No().memoizedState = e);
        },
        useTransition: function () {
          var e = Go(!1),
            t = e[0];
          return ((e = os.bind(null, e[1])), (No().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var i = Y,
            a = No();
          if (q) {
            if (n === void 0) throw Error(r(407));
            n = n();
          } else {
            if (((n = t()), Uc === null)) throw Error(r(349));
            So & 30 || Bo(i, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Xo(Ho.bind(null, i, o, e), [e]),
            (i.flags |= 2048),
            Ko(9, Vo.bind(null, i, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = No(),
            t = Uc.identifierPrefix;
          if (q) {
            var n = ha,
              r = ma;
            ((n = (r & ~(1 << (32 - Ot(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = Do++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = Oo++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      hs = {
        readContext: qa,
        useCallback: rs,
        useContext: qa,
        useEffect: Zo,
        useImperativeHandle: ts,
        useInsertionEffect: Qo,
        useLayoutEffect: $o,
        useMemo: is,
        useReducer: Io,
        useRef: qo,
        useState: function () {
          return Io(Fo);
        },
        useDebugValue: ns,
        useDeferredValue: function (e) {
          return as(Po(), Co.memoizedState, e);
        },
        useTransition: function () {
          return [Io(Fo)[0], Po().memoizedState];
        },
        useMutableSource: Ro,
        useSyncExternalStore: zo,
        useId: ss,
        unstable_isNewReconciler: !1,
      },
      gs = {
        readContext: qa,
        useCallback: rs,
        useContext: qa,
        useEffect: Zo,
        useImperativeHandle: ts,
        useInsertionEffect: Qo,
        useLayoutEffect: $o,
        useMemo: is,
        useReducer: Lo,
        useRef: qo,
        useState: function () {
          return Lo(Fo);
        },
        useDebugValue: ns,
        useDeferredValue: function (e) {
          var t = Po();
          return Co === null ? (t.memoizedState = e) : as(t, Co.memoizedState, e);
        },
        useTransition: function () {
          return [Lo(Fo)[0], Po().memoizedState];
        },
        useMutableSource: Ro,
        useSyncExternalStore: zo,
        useId: ss,
        unstable_isNewReconciler: !1,
      };
    function _s(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = F({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function vs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : F({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var ys = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? ct(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ml(),
          i = hl(e),
          a = to(r, i);
        ((a.payload = t),
          n != null && (a.callback = n),
          (t = no(e, a, i)),
          t !== null && (gl(t, e, i, r), ro(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ml(),
          i = hl(e),
          a = to(r, i);
        ((a.tag = 1),
          (a.payload = t),
          n != null && (a.callback = n),
          (t = no(e, a, i)),
          t !== null && (gl(t, e, i, r), ro(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ml(),
          r = hl(e),
          i = to(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = no(e, i, r)),
          t !== null && (gl(t, e, r, n), ro(t, e, r)));
      },
    };
    function bs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Mr(n, r) || !Mr(i, a)
            : !0
      );
    }
    function xs(e, t, n) {
      var r = !1,
        i = qi,
        a = t.contextType;
      return (
        typeof a == `object` && a
          ? (a = qa(a))
          : ((i = K(t) ? Ji : W.current),
            (r = t.contextTypes),
            (a = (r = r != null) ? Yi(e, i) : qi)),
        (t = new t(n, a)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ys),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function Ss(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ys.enqueueReplaceState(t, t.state, null));
    }
    function Cs(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), $a(e));
      var a = t.contextType;
      (typeof a == `object` && a
        ? (i.context = qa(a))
        : ((a = K(t) ? Ji : W.current), (i.context = Yi(e, a))),
        (i.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == `function` && (vs(e, t, a, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == `function` ||
          typeof i.getSnapshotBeforeUpdate == `function` ||
          (typeof i.UNSAFE_componentWillMount != `function` &&
            typeof i.componentWillMount != `function`) ||
          ((t = i.state),
          typeof i.componentWillMount == `function` && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == `function` && i.UNSAFE_componentWillMount(),
          t !== i.state && ys.enqueueReplaceState(i, i.state, null),
          ao(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == `function` && (e.flags |= 4194308));
    }
    function ws(e, t) {
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
    function Ts(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Es(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var Ds = typeof WeakMap == `function` ? WeakMap : Map;
    function Os(e, t, n) {
      ((n = to(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (il || ((il = !0), (al = r)), Es(e, t));
        }),
        n
      );
    }
    function ks(e, t, n) {
      ((n = to(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == `function`) {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            Es(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == `function` &&
          (n.callback = function () {
            (Es(e, t),
              typeof r != `function` && (ol === null ? (ol = new Set([this])) : ol.add(this)));
            var n = t.stack;
            this.componentDidCatch(t.value, { componentStack: n === null ? `` : n });
          }),
        n
      );
    }
    function As(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Ds();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Vl.bind(null, e, t, n)), t.then(e, e));
    }
    function js(e) {
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
    function Ms(e, t, n, r, i) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null ? (n.tag = 17) : ((t = to(-1, 1)), (t.tag = 2), no(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var Ns = C.ReactCurrentOwner,
      Ps = !1;
    function Fs(e, t, n, r) {
      t.child = e === null ? Ra(t, null, n, r) : La(t, e.child, n, r);
    }
    function Is(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      return (
        Ka(t, i),
        (r = jo(e, t, n, r, a, i)),
        (n = Mo()),
        e !== null && !Ps
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), nc(e, t, i))
          : (q && n && va(t), (t.flags |= 1), Fs(e, t, r, i), t.child)
      );
    }
    function Ls(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Yl(a) &&
          a.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Rs(e, t, a, r, i))
          : ((e = Ql(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & i) === 0)) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Mr : n), n(o, r) && e.ref === t.ref))
          return nc(e, t, i);
      }
      return ((t.flags |= 1), (e = Zl(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function Rs(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Mr(a, r) && e.ref === t.ref)
          if (((Ps = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
            e.flags & 131072 && (Ps = !0);
          else return ((t.lanes = e.lanes), nc(e, t, i));
      }
      return Vs(e, t, n, r, i);
    }
    function zs(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`)
        if (!(t.mode & 1))
          ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            U(qc, Kc),
            (Kc |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = a === null ? n : a.baseLanes | n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
              (t.updateQueue = null),
              U(qc, Kc),
              (Kc |= e),
              null
            );
          ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = a === null ? n : a.baseLanes),
            U(qc, Kc),
            (Kc |= r));
        }
      else
        (a === null ? (r = n) : ((r = a.baseLanes | n), (t.memoizedState = null)),
          U(qc, Kc),
          (Kc |= r));
      return (Fs(e, t, i, n), t.child);
    }
    function Bs(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Vs(e, t, n, r, i) {
      var a = K(n) ? Ji : W.current;
      return (
        (a = Yi(t, a)),
        Ka(t, i),
        (n = jo(e, t, n, r, a, i)),
        (r = Mo()),
        e !== null && !Ps
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), nc(e, t, i))
          : (q && r && va(t), (t.flags |= 1), Fs(e, t, n, i), t.child)
      );
    }
    function Hs(e, t, n, r, i) {
      if (K(n)) {
        var a = !0;
        $i(t);
      } else a = !1;
      if ((Ka(t, i), t.stateNode === null)) (tc(e, t), xs(t, n, r), Cs(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          s = t.memoizedProps;
        o.props = s;
        var c = o.context,
          l = n.contextType;
        typeof l == `object` && l ? (l = qa(l)) : ((l = K(n) ? Ji : W.current), (l = Yi(t, l)));
        var u = n.getDerivedStateFromProps,
          d = typeof u == `function` || typeof o.getSnapshotBeforeUpdate == `function`;
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== r || c !== l) && Ss(t, o, r, l)),
          (Qa = !1));
        var f = t.memoizedState;
        ((o.state = f),
          ao(t, r, o, i),
          (c = t.memoizedState),
          s !== r || f !== c || G.current || Qa
            ? (typeof u == `function` && (vs(t, n, u, r), (c = t.memoizedState)),
              (s = Qa || bs(t, n, s, r, f, c, l))
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
          eo(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : _s(t.type, s)),
          (o.props = l),
          (d = t.pendingProps),
          (f = o.context),
          (c = n.contextType),
          typeof c == `object` && c ? (c = qa(c)) : ((c = K(n) ? Ji : W.current), (c = Yi(t, c))));
        var p = n.getDerivedStateFromProps;
        ((u = typeof p == `function` || typeof o.getSnapshotBeforeUpdate == `function`) ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== d || f !== c) && Ss(t, o, r, c)),
          (Qa = !1),
          (f = t.memoizedState),
          (o.state = f),
          ao(t, r, o, i));
        var m = t.memoizedState;
        s !== d || f !== m || G.current || Qa
          ? (typeof p == `function` && (vs(t, n, p, r), (m = t.memoizedState)),
            (l = Qa || bs(t, n, l, r, f, m, c) || !1)
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
      return Us(e, t, n, r, a, i);
    }
    function Us(e, t, n, r, i, a) {
      Bs(e, t);
      var o = (t.flags & 128) != 0;
      if (!r && !o) return (i && ea(t, n, !1), nc(e, t, a));
      ((r = t.stateNode), (Ns.current = t));
      var s = o && typeof n.getDerivedStateFromError != `function` ? null : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = La(t, e.child, null, a)), (t.child = La(t, null, s, a)))
          : Fs(e, t, s, a),
        (t.memoizedState = r.state),
        i && ea(t, n, !0),
        t.child
      );
    }
    function Ws(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? Zi(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Zi(e, t.context, !1),
        po(e, t.containerInfo));
    }
    function Gs(e, t, n, r, i) {
      return (Aa(), ja(i), (t.flags |= 256), Fs(e, t, n, r), t.child);
    }
    var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
    function qs(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Js(e, t, n) {
      var r = t.pendingProps,
        i = J.current,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0),
        s ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
        U(J, i & 1),
        e === null)
      )
        return (
          Ea(t),
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
                    : (a = eu(o, r, 0, null)),
                  (e = $l(e, r, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = qs(n)),
                  (t.memoizedState = Ks),
                  e)
                : Ys(t, o))
        );
      if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
        return Zs(e, t, o, r, s, i, n);
      if (a) {
        ((a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling));
        var c = { mode: `hidden`, children: r.children };
        return (
          !(o & 1) && t.child !== i
            ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = c), (t.deletions = null))
            : ((r = Zl(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          s === null ? ((a = $l(a, o, n, null)), (a.flags |= 2)) : (a = Zl(s, a)),
          (a.return = t),
          (r.return = t),
          (r.sibling = a),
          (t.child = r),
          (r = a),
          (a = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? qs(n)
              : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
          (a.memoizedState = o),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = Ks),
          r
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (r = Zl(a, { mode: `visible`, children: r.children })),
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
    function Ys(e, t) {
      return (
        (t = eu({ mode: `visible`, children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Xs(e, t, n, r) {
      return (
        r !== null && ja(r),
        La(t, e.child, null, n),
        (e = Ys(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Zs(e, t, n, i, a, o, s) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (i = Ts(Error(r(422)))), Xs(e, t, s, i))
          : t.memoizedState === null
            ? ((o = i.fallback),
              (a = t.mode),
              (i = eu({ mode: `visible`, children: i.children }, a, 0, null)),
              (o = $l(o, a, s, null)),
              (o.flags |= 2),
              (i.return = t),
              (o.return = t),
              (i.sibling = o),
              (t.child = i),
              t.mode & 1 && La(t, e.child, null, s),
              (t.child.memoizedState = qs(s)),
              (t.memoizedState = Ks),
              o)
            : ((t.child = e.child), (t.flags |= 128), null);
      if (!(t.mode & 1)) return Xs(e, t, s, null);
      if (a.data === `$!`) {
        if (((i = a.nextSibling && a.nextSibling.dataset), i)) var c = i.dgst;
        return ((i = c), (o = Error(r(419))), (i = Ts(o, i, void 0)), Xs(e, t, s, i));
      }
      if (((c = (s & e.childLanes) !== 0), Ps || c)) {
        if (((i = Uc), i !== null)) {
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
            a !== 0 && a !== o.retryLane && ((o.retryLane = a), Za(e, a), gl(i, e, a, -1)));
        }
        return (Al(), (i = Ts(Error(r(421)))), Xs(e, t, s, i));
      }
      return a.data === `$?`
        ? ((t.flags |= 128), (t.child = e.child), (t = Ul.bind(null, e)), (a._reactRetry = t), null)
        : ((e = o.treeContext),
          (xa = ji(a.nextSibling)),
          (ba = t),
          (q = !0),
          (Sa = null),
          e !== null &&
            ((da[fa++] = ma),
            (da[fa++] = ha),
            (da[fa++] = pa),
            (ma = e.id),
            (ha = e.overflow),
            (pa = t)),
          (t = Ys(t, i.children)),
          (t.flags |= 4096),
          t);
    }
    function Qs(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Ga(e.return, t, n));
    }
    function $s(e, t, n, r, i) {
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
    function ec(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((Fs(e, t, r.children, n), (r = J.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && Qs(e, n, t);
            else if (e.tag === 19) Qs(e, n, t);
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
      if ((U(J, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (i) {
          case `forwards`:
            for (n = t.child, i = null; n !== null; )
              ((e = n.alternate), e !== null && _o(e) === null && (i = n), (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              $s(t, !1, i, n, a));
            break;
          case `backwards`:
            for (n = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && _o(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            $s(t, !0, n, null, a);
            break;
          case `together`:
            $s(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function tc(e, t) {
      !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function nc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Xc |= t.lanes), (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(r(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Zl(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling), (n = n.sibling = Zl(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function rc(e, t, n) {
      switch (t.tag) {
        case 3:
          (Ws(t), Aa());
          break;
        case 5:
          ho(t);
          break;
        case 1:
          K(t.type) && $i(t);
          break;
        case 4:
          po(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (U(za, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (U(J, J.current & 1), (e = nc(e, t, n)), e === null ? null : e.sibling)
                : Js(e, t, n)
              : (U(J, J.current & 1), (t.flags |= 128), null);
          U(J, J.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return ec(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            U(J, J.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), zs(e, t, n));
      }
      return nc(e, t, n);
    }
    var ic = function (e, t) {
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
      ac = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), fo(co.current));
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
              typeof i.onClick != `function` && typeof r.onClick == `function` && (e.onclick = xi);
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
                        ? (l != null && u === `onScroll` && V(`scroll`, e),
                          o || c === l || (o = []))
                        : (o ||= []).push(u, l));
          }
          n && (o ||= []).push(`style`, n);
          var u = o;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      },
      oc = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
    function sc(e, t) {
      if (!q)
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
    function cc(e) {
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
    function lc(e, t, n) {
      var i = t.pendingProps;
      switch ((ya(t), t.tag)) {
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
          return (cc(t), null);
        case 1:
          return (K(t.type) && Xi(), cc(t), null);
        case 3:
          return (
            (i = t.stateNode),
            mo(),
            H(G),
            H(W),
            yo(),
            i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
            (e === null || e.child === null) &&
              (Oa(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Sa !== null && (bl(Sa), (Sa = null)))),
            cc(t),
            null
          );
        case 5:
          go(t);
          var o = fo(uo.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (ac(e, t, n, i, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!i) {
              if (t.stateNode === null) throw Error(r(166));
              return (cc(t), null);
            }
            if (((e = fo(co.current)), Oa(t))) {
              ((i = t.stateNode), (n = t.type));
              var s = t.memoizedProps;
              switch (((i[Pi] = t), (i[Fi] = s), (e = (t.mode & 1) != 0), n)) {
                case `dialog`:
                  (V(`cancel`, i), V(`close`, i));
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  V(`load`, i);
                  break;
                case `video`:
                case `audio`:
                  for (o = 0; o < ii.length; o++) V(ii[o], i);
                  break;
                case `source`:
                  V(`error`, i);
                  break;
                case `img`:
                case `image`:
                case `link`:
                  (V(`error`, i), V(`load`, i));
                  break;
                case `details`:
                  V(`toggle`, i);
                  break;
                case `input`:
                  (ve(i, s), V(`invalid`, i));
                  break;
                case `select`:
                  ((i._wrapperState = { wasMultiple: !!s.multiple }), V(`invalid`, i));
                  break;
                case `textarea`:
                  (Te(i, s), V(`invalid`, i));
              }
              for (var c in (Le(n, s), (o = null), s))
                if (s.hasOwnProperty(c)) {
                  var l = s[c];
                  c === `children`
                    ? typeof l == `string`
                      ? i.textContent !== l &&
                        (!0 !== s.suppressHydrationWarning && bi(i.textContent, l, e),
                        (o = [`children`, l]))
                      : typeof l == `number` &&
                        i.textContent !== `` + l &&
                        (!0 !== s.suppressHydrationWarning && bi(i.textContent, l, e),
                        (o = [`children`, `` + l]))
                    : a.hasOwnProperty(c) && l != null && c === `onScroll` && V(`scroll`, i);
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
                  typeof s.onClick == `function` && (i.onclick = xi);
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
                (e[Pi] = t),
                (e[Fi] = i),
                ic(e, t, !1, !1),
                (t.stateNode = e));
              a: {
                switch (((c = Re(n, i)), n)) {
                  case `dialog`:
                    (V(`cancel`, e), V(`close`, e), (o = i));
                    break;
                  case `iframe`:
                  case `object`:
                  case `embed`:
                    (V(`load`, e), (o = i));
                    break;
                  case `video`:
                  case `audio`:
                    for (o = 0; o < ii.length; o++) V(ii[o], e);
                    o = i;
                    break;
                  case `source`:
                    (V(`error`, e), (o = i));
                    break;
                  case `img`:
                  case `image`:
                  case `link`:
                    (V(`error`, e), V(`load`, e), (o = i));
                    break;
                  case `details`:
                    (V(`toggle`, e), (o = i));
                    break;
                  case `input`:
                    (ve(e, i), (o = _e(e, i)), V(`invalid`, e));
                    break;
                  case `option`:
                    o = i;
                    break;
                  case `select`:
                    ((e._wrapperState = { wasMultiple: !!i.multiple }),
                      (o = F({}, i, { value: void 0 })),
                      V(`invalid`, e));
                    break;
                  case `textarea`:
                    (Te(e, i), (o = we(e, i)), V(`invalid`, e));
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
                              ? u != null && s === `onScroll` && V(`scroll`, e)
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
                    typeof o.onClick == `function` && (e.onclick = xi);
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
          return (cc(t), null);
        case 6:
          if (e && t.stateNode != null) oc(e, t, e.memoizedProps, i);
          else {
            if (typeof i != `string` && t.stateNode === null) throw Error(r(166));
            if (((n = fo(uo.current)), fo(co.current), Oa(t))) {
              if (
                ((i = t.stateNode),
                (n = t.memoizedProps),
                (i[Pi] = t),
                (s = i.nodeValue !== n) && ((e = ba), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    bi(i.nodeValue, n, (e.mode & 1) != 0);
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      bi(i.nodeValue, n, (e.mode & 1) != 0);
                }
              s && (t.flags |= 4);
            } else
              ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                (i[Pi] = t),
                (t.stateNode = i));
          }
          return (cc(t), null);
        case 13:
          if (
            (H(J),
            (i = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (q && xa !== null && t.mode & 1 && !(t.flags & 128))
              (ka(), Aa(), (t.flags |= 98560), (s = !1));
            else if (((s = Oa(t)), i !== null && i.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(r(318));
                if (((s = t.memoizedState), (s = s === null ? null : s.dehydrated), !s))
                  throw Error(r(317));
                s[Pi] = t;
              } else (Aa(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (cc(t), (s = !1));
            } else (Sa !== null && (bl(Sa), (Sa = null)), (s = !0));
            if (!s) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((i = i !== null),
              i !== (e !== null && e.memoizedState !== null) &&
                i &&
                ((t.child.flags |= 8192),
                t.mode & 1 && (e === null || J.current & 1 ? Jc === 0 && (Jc = 3) : Al())),
              t.updateQueue !== null && (t.flags |= 4),
              cc(t),
              null);
        case 4:
          return (mo(), e === null && ui(t.stateNode.containerInfo), cc(t), null);
        case 10:
          return (Wa(t.type._context), cc(t), null);
        case 17:
          return (K(t.type) && Xi(), cc(t), null);
        case 19:
          if ((H(J), (s = t.memoizedState), s === null)) return (cc(t), null);
          if (((i = (t.flags & 128) != 0), (c = s.rendering), c === null))
            if (i) sc(s, !1);
            else {
              if (Jc !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((c = _o(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        sc(s, !1),
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
                    return (U(J, (J.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                vt() > nl &&
                ((t.flags |= 128), (i = !0), sc(s, !1), (t.lanes = 4194304));
            }
          else {
            if (!i)
              if (((e = _o(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  sc(s, !0),
                  s.tail === null && s.tailMode === `hidden` && !c.alternate && !q)
                )
                  return (cc(t), null);
              } else
                2 * vt() - s.renderingStartTime > nl &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (i = !0), sc(s, !1), (t.lanes = 4194304));
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((n = s.last), n === null ? (t.child = c) : (n.sibling = c), (s.last = c));
          }
          return s.tail === null
            ? (cc(t), null)
            : ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = vt()),
              (t.sibling = null),
              (n = J.current),
              U(J, i ? (n & 1) | 2 : n & 1),
              t);
        case 22:
        case 23:
          return (
            El(),
            (i = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
            i && t.mode & 1
              ? Kc & 1073741824 && (cc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : cc(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function uc(e, t) {
      switch ((ya(t), t.tag)) {
        case 1:
          return (
            K(t.type) && Xi(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            mo(),
            H(G),
            H(W),
            yo(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (go(t), null);
        case 13:
          if ((H(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(r(340));
            Aa();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (H(J), null);
        case 4:
          return (mo(), null);
        case 10:
          return (Wa(t.type._context), null);
        case 22:
        case 23:
          return (El(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var dc = !1,
      fc = !1,
      pc = typeof WeakSet == `function` ? WeakSet : Set,
      X = null;
    function mc(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Bl(e, t, n);
          }
        else n.current = null;
    }
    function hc(e, t, n) {
      try {
        n();
      } catch (n) {
        Bl(e, t, n);
      }
    }
    var gc = !1;
    function _c(e, t) {
      if (((Si = gn), (e = Fr()), Ir(e))) {
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
      for (Ci = { focusedElem: e, selectionRange: n }, gn = !1, X = t; X !== null; )
        if (((t = X), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (X = e));
        else
          for (; X !== null; ) {
            t = X;
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
                        t.elementType === t.type ? g : _s(t.type, g),
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
              Bl(t, t.return, e);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (X = e));
              break;
            }
            X = t.return;
          }
      return ((h = gc), (gc = !1), h);
    }
    function vc(e, t, n) {
      var r = t.updateQueue;
      if (((r = r === null ? null : r.lastEffect), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy;
            ((i.destroy = void 0), a !== void 0 && hc(t, n, a));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function yc(e, t) {
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
    function bc(e) {
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
    function xc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), xc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null && (delete t[Pi], delete t[Fi], delete t[Li], delete t[Ri], delete t[zi])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function Sc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Cc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Sc(e.return)) return null;
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
    function wc(e, t, n) {
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
              n != null || t.onclick !== null || (t.onclick = xi)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (wc(e, t, n), e = e.sibling; e !== null; ) (wc(e, t, n), (e = e.sibling));
    }
    function Tc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Tc(e, t, n), e = e.sibling; e !== null; ) (Tc(e, t, n), (e = e.sibling));
    }
    var Ec = null,
      Dc = !1;
    function Oc(e, t, n) {
      for (n = n.child; n !== null; ) (kc(e, t, n), (n = n.sibling));
    }
    function kc(e, t, n) {
      if (Et && typeof Et.onCommitFiberUnmount == `function`)
        try {
          Et.onCommitFiberUnmount(Tt, n);
        } catch {}
      switch (n.tag) {
        case 5:
          fc || mc(n, t);
        case 6:
          var r = Ec,
            i = Dc;
          ((Ec = null),
            Oc(e, t, n),
            (Ec = r),
            (Dc = i),
            Ec !== null &&
              (Dc
                ? ((e = Ec),
                  (n = n.stateNode),
                  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                : Ec.removeChild(n.stateNode)));
          break;
        case 18:
          Ec !== null &&
            (Dc
              ? ((e = Ec),
                (n = n.stateNode),
                e.nodeType === 8 ? Ai(e.parentNode, n) : e.nodeType === 1 && Ai(e, n),
                mn(e))
              : Ai(Ec, n.stateNode));
          break;
        case 4:
          ((r = Ec),
            (i = Dc),
            (Ec = n.stateNode.containerInfo),
            (Dc = !0),
            Oc(e, t, n),
            (Ec = r),
            (Dc = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!fc && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
            i = r = r.next;
            do {
              var a = i,
                o = a.destroy;
              ((a = a.tag), o !== void 0 && (a & 2 || a & 4) && hc(n, t, o), (i = i.next));
            } while (i !== r);
          }
          Oc(e, t, n);
          break;
        case 1:
          if (!fc && (mc(n, t), (r = n.stateNode), typeof r.componentWillUnmount == `function`))
            try {
              ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
            } catch (e) {
              Bl(n, t, e);
            }
          Oc(e, t, n);
          break;
        case 21:
          Oc(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((fc = (r = fc) || n.memoizedState !== null), Oc(e, t, n), (fc = r))
            : Oc(e, t, n);
          break;
        default:
          Oc(e, t, n);
      }
    }
    function Ac(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new pc()),
          t.forEach(function (t) {
            var r = Wl.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          }));
      }
    }
    function jc(e, t) {
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
                  ((Ec = c.stateNode), (Dc = !1));
                  break a;
                case 3:
                  ((Ec = c.stateNode.containerInfo), (Dc = !0));
                  break a;
                case 4:
                  ((Ec = c.stateNode.containerInfo), (Dc = !0));
                  break a;
              }
              c = c.return;
            }
            if (Ec === null) throw Error(r(160));
            (kc(o, s, a), (Ec = null), (Dc = !1));
            var l = a.alternate;
            (l !== null && (l.return = null), (a.return = null));
          } catch (e) {
            Bl(a, t, e);
          }
        }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Mc(t, e), (t = t.sibling));
    }
    function Mc(e, t) {
      var n = e.alternate,
        i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((jc(t, e), Nc(e), i & 4)) {
            try {
              (vc(3, e, e.return), yc(3, e));
            } catch (t) {
              Bl(e, e.return, t);
            }
            try {
              vc(5, e, e.return);
            } catch (t) {
              Bl(e, e.return, t);
            }
          }
          break;
        case 1:
          (jc(t, e), Nc(e), i & 512 && n !== null && mc(n, n.return));
          break;
        case 5:
          if ((jc(t, e), Nc(e), i & 512 && n !== null && mc(n, n.return), e.flags & 32)) {
            var a = e.stateNode;
            try {
              Me(a, ``);
            } catch (t) {
              Bl(e, e.return, t);
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
                a[Fi] = o;
              } catch (t) {
                Bl(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((jc(t, e), Nc(e), i & 4)) {
            if (e.stateNode === null) throw Error(r(162));
            ((a = e.stateNode), (o = e.memoizedProps));
            try {
              a.nodeValue = o;
            } catch (t) {
              Bl(e, e.return, t);
            }
          }
          break;
        case 3:
          if ((jc(t, e), Nc(e), i & 4 && n !== null && n.memoizedState.isDehydrated))
            try {
              mn(t.containerInfo);
            } catch (t) {
              Bl(e, e.return, t);
            }
          break;
        case 4:
          (jc(t, e), Nc(e));
          break;
        case 13:
          (jc(t, e),
            Nc(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o || (a.alternate !== null && a.alternate.memoizedState !== null) || (tl = vt())),
            i & 4 && Ac(e));
          break;
        case 22:
          if (
            ((d = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((fc = (u = fc) || d), jc(t, e), (fc = u)) : jc(t, e),
            Nc(e),
            i & 8192)
          ) {
            if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
              for (X = e, d = e.child; d !== null; ) {
                for (f = X = d; X !== null; ) {
                  switch (((p = X), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      vc(4, p, p.return);
                      break;
                    case 1:
                      mc(p, p.return);
                      var h = p.stateNode;
                      if (typeof h.componentWillUnmount == `function`) {
                        ((i = p), (n = p.return));
                        try {
                          ((t = i),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount());
                        } catch (e) {
                          Bl(i, n, e);
                        }
                      }
                      break;
                    case 5:
                      mc(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        Lc(f);
                        continue;
                      }
                  }
                  m === null ? Lc(f) : ((m.return = p), (X = m));
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
                    Bl(e, e.return, t);
                  }
                }
              } else if (f.tag === 6) {
                if (d === null)
                  try {
                    f.stateNode.nodeValue = u ? `` : f.memoizedProps;
                  } catch (t) {
                    Bl(e, e.return, t);
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
          (jc(t, e), Nc(e), i & 4 && Ac(e));
          break;
        case 21:
          break;
        default:
          (jc(t, e), Nc(e));
      }
    }
    function Nc(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          a: {
            for (var n = e.return; n !== null; ) {
              if (Sc(n)) {
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
              (i.flags & 32 && (Me(a, ``), (i.flags &= -33)), Tc(e, Cc(e), a));
              break;
            case 3:
            case 4:
              var o = i.stateNode.containerInfo;
              wc(e, Cc(e), o);
              break;
            default:
              throw Error(r(161));
          }
        } catch (t) {
          Bl(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Pc(e, t, n) {
      ((X = e), Fc(e, t, n));
    }
    function Fc(e, t, n) {
      for (var r = (e.mode & 1) != 0; X !== null; ) {
        var i = X,
          a = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || dc;
          if (!o) {
            var s = i.alternate,
              c = (s !== null && s.memoizedState !== null) || fc;
            s = dc;
            var l = fc;
            if (((dc = o), (fc = c) && !l))
              for (X = i; X !== null; )
                ((o = X),
                  (c = o.child),
                  (o.tag === 22 && o.memoizedState !== null) || c === null
                    ? Rc(i)
                    : ((c.return = o), (X = c)));
            for (; a !== null; ) ((X = a), Fc(a, t, n), (a = a.sibling));
            ((X = i), (dc = s), (fc = l));
          }
          Ic(e, t, n);
        } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (X = a)) : Ic(e, t, n);
      }
    }
    function Ic(e) {
      for (; X !== null; ) {
        var t = X;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  fc || yc(5, t);
                  break;
                case 1:
                  var i = t.stateNode;
                  if (t.flags & 4 && !fc)
                    if (n === null) i.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type ? n.memoizedProps : _s(t.type, n.memoizedProps);
                      i.componentDidUpdate(
                        a,
                        n.memoizedState,
                        i.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && oo(t, o, i);
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
                    oo(t, s, n);
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
            fc || (t.flags & 512 && bc(t));
          } catch (e) {
            Bl(t, t.return, e);
          }
        }
        if (t === e) {
          X = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (X = n));
          break;
        }
        X = t.return;
      }
    }
    function Lc(e) {
      for (; X !== null; ) {
        var t = X;
        if (t === e) {
          X = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (X = n));
          break;
        }
        X = t.return;
      }
    }
    function Rc(e) {
      for (; X !== null; ) {
        var t = X;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                yc(4, t);
              } catch (e) {
                Bl(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == `function`) {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  Bl(t, i, e);
                }
              }
              var a = t.return;
              try {
                bc(t);
              } catch (e) {
                Bl(t, a, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                bc(t);
              } catch (e) {
                Bl(t, o, e);
              }
          }
        } catch (e) {
          Bl(t, t.return, e);
        }
        if (t === e) {
          X = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (X = s));
          break;
        }
        X = t.return;
      }
    }
    var zc = Math.ceil,
      Bc = C.ReactCurrentDispatcher,
      Vc = C.ReactCurrentOwner,
      Hc = C.ReactCurrentBatchConfig,
      Z = 0,
      Uc = null,
      Wc = null,
      Gc = 0,
      Kc = 0,
      qc = Ki(0),
      Jc = 0,
      Yc = null,
      Xc = 0,
      Zc = 0,
      Qc = 0,
      $c = null,
      el = null,
      tl = 0,
      nl = 1 / 0,
      rl = null,
      il = !1,
      al = null,
      ol = null,
      sl = !1,
      cl = null,
      ll = 0,
      ul = 0,
      dl = null,
      fl = -1,
      pl = 0;
    function ml() {
      return Z & 6 ? vt() : fl === -1 ? (fl = vt()) : fl;
    }
    function hl(e) {
      return e.mode & 1
        ? Z & 2 && Gc !== 0
          ? Gc & -Gc
          : Ma.transition === null
            ? ((e = R), e === 0 ? ((e = window.event), (e = e === void 0 ? 16 : Sn(e.type)), e) : e)
            : (pl === 0 && (pl = zt()), pl)
        : 1;
    }
    function gl(e, t, n, i) {
      if (50 < ul) throw ((ul = 0), (dl = null), Error(r(185)));
      (Vt(e, n, i),
        (!(Z & 2) || e !== Uc) &&
          (e === Uc && (!(Z & 2) && (Zc |= n), Jc === 4 && Sl(e, Gc)),
          _l(e, i),
          n === 1 && Z === 0 && !(t.mode & 1) && ((nl = vt() + 500), na && oa())));
    }
    function _l(e, t) {
      var n = e.callbackNode;
      Lt(e, t);
      var r = Ft(e, e === Uc ? Gc : 0);
      if (r === 0) (n !== null && ht(n), (e.callbackNode = null), (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && ht(n), t === 1))
          (e.tag === 0 ? aa(Cl.bind(null, e)) : ia(Cl.bind(null, e)),
            Oi(function () {
              !(Z & 6) && oa();
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
          n = Kl(n, vl.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function vl(e, t) {
      if (((fl = -1), (pl = 0), Z & 6)) throw Error(r(327));
      var n = e.callbackNode;
      if (Rl() && e.callbackNode !== n) return null;
      var i = Ft(e, e === Uc ? Gc : 0);
      if (i === 0) return null;
      if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = jl(e, i);
      else {
        t = i;
        var a = Z;
        Z |= 2;
        var o = kl();
        (Uc !== e || Gc !== t) && ((rl = null), (nl = vt() + 500), Dl(e, t));
        do
          try {
            Nl();
            break;
          } catch (t) {
            Ol(e, t);
          }
        while (1);
        (Ua(),
          (Bc.current = o),
          (Z = a),
          Wc === null ? ((Uc = null), (Gc = 0), (t = Jc)) : (t = 0));
      }
      if (t !== 0) {
        if ((t === 2 && ((a = Rt(e)), a !== 0 && ((i = a), (t = yl(e, a)))), t === 1))
          throw ((n = Yc), Dl(e, 0), Sl(e, i), _l(e, vt()), n);
        if (t === 6) Sl(e, i);
        else {
          if (
            ((a = e.current.alternate),
            !(i & 30) &&
              !xl(a) &&
              ((t = jl(e, i)),
              t === 2 && ((o = Rt(e)), o !== 0 && ((i = o), (t = yl(e, o)))),
              t === 1))
          )
            throw ((n = Yc), Dl(e, 0), Sl(e, i), _l(e, vt()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 2:
              Il(e, el, rl);
              break;
            case 3:
              if ((Sl(e, i), (i & 130023424) === i && ((t = tl + 500 - vt()), 10 < t))) {
                if (Ft(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & i) !== i)) {
                  (ml(), (e.pingedLanes |= e.suspendedLanes & a));
                  break;
                }
                e.timeoutHandle = Ti(Il.bind(null, e, el, rl), t);
                break;
              }
              Il(e, el, rl);
              break;
            case 4:
              if ((Sl(e, i), (i & 4194240) === i)) break;
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
                              : 1960 * zc(i / 1960)) - i),
                10 < i)
              ) {
                e.timeoutHandle = Ti(Il.bind(null, e, el, rl), i);
                break;
              }
              Il(e, el, rl);
              break;
            case 5:
              Il(e, el, rl);
              break;
            default:
              throw Error(r(329));
          }
        }
      }
      return (_l(e, vt()), e.callbackNode === n ? vl.bind(null, e) : null);
    }
    function yl(e, t) {
      var n = $c;
      return (
        e.current.memoizedState.isDehydrated && (Dl(e, t).flags |= 256),
        (e = jl(e, t)),
        e !== 2 && ((t = el), (el = n), t !== null && bl(t)),
        e
      );
    }
    function bl(e) {
      el === null ? (el = e) : el.push.apply(el, e);
    }
    function xl(e) {
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
    function Sl(e, t) {
      for (
        t &= ~Qc, t &= ~Zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Ot(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Cl(e) {
      if (Z & 6) throw Error(r(327));
      Rl();
      var t = Ft(e, 0);
      if (!(t & 1)) return (_l(e, vt()), null);
      var n = jl(e, t);
      if (e.tag !== 0 && n === 2) {
        var i = Rt(e);
        i !== 0 && ((t = i), (n = yl(e, i)));
      }
      if (n === 1) throw ((n = Yc), Dl(e, 0), Sl(e, t), _l(e, vt()), n);
      if (n === 6) throw Error(r(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Il(e, el, rl),
        _l(e, vt()),
        null
      );
    }
    function wl(e, t) {
      var n = Z;
      Z |= 1;
      try {
        return e(t);
      } finally {
        ((Z = n), Z === 0 && ((nl = vt() + 500), na && oa()));
      }
    }
    function Tl(e) {
      cl !== null && cl.tag === 0 && !(Z & 6) && Rl();
      var t = Z;
      Z |= 1;
      var n = Hc.transition,
        r = R;
      try {
        if (((Hc.transition = null), (R = 1), e)) return e();
      } finally {
        ((R = r), (Hc.transition = n), (Z = t), !(Z & 6) && oa());
      }
    }
    function El() {
      ((Kc = qc.current), H(qc));
    }
    function Dl(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), Ei(n)), Wc !== null))
        for (n = Wc.return; n !== null; ) {
          var r = n;
          switch ((ya(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && Xi());
              break;
            case 3:
              (mo(), H(G), H(W), yo());
              break;
            case 5:
              go(r);
              break;
            case 4:
              mo();
              break;
            case 13:
              H(J);
              break;
            case 19:
              H(J);
              break;
            case 10:
              Wa(r.type._context);
              break;
            case 22:
            case 23:
              El();
          }
          n = n.return;
        }
      if (
        ((Uc = e),
        (Wc = e = Zl(e.current, null)),
        (Gc = Kc = t),
        (Jc = 0),
        (Yc = null),
        (Qc = Zc = Xc = 0),
        (el = $c = null),
        Ja !== null)
      ) {
        for (t = 0; t < Ja.length; t++)
          if (((n = Ja[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              a = n.pending;
            if (a !== null) {
              var o = a.next;
              ((a.next = i), (r.next = o));
            }
            n.pending = r;
          }
        Ja = null;
      }
      return e;
    }
    function Ol(e, t) {
      do {
        var n = Wc;
        try {
          if ((Ua(), (bo.current = ps), To)) {
            for (var i = Y.memoizedState; i !== null; ) {
              var a = i.queue;
              (a !== null && (a.pending = null), (i = i.next));
            }
            To = !1;
          }
          if (
            ((So = 0),
            (wo = Co = Y = null),
            (Eo = !1),
            (Do = 0),
            (Vc.current = null),
            n === null || n.return === null)
          ) {
            ((Jc = 1), (Yc = t), (Wc = null));
            break;
          }
          a: {
            var o = e,
              s = n.return,
              c = n,
              l = t;
            if (
              ((t = Gc),
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
              var m = js(s);
              if (m !== null) {
                ((m.flags &= -257), Ms(m, s, c, o, t), m.mode & 1 && As(o, u, t), (t = m), (l = u));
                var h = t.updateQueue;
                if (h === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else h.add(l);
                break a;
              } else {
                if (!(t & 1)) {
                  (As(o, u, t), Al());
                  break a;
                }
                l = Error(r(426));
              }
            } else if (q && c.mode & 1) {
              var _ = js(s);
              if (_ !== null) {
                (!(_.flags & 65536) && (_.flags |= 256), Ms(_, s, c, o, t), ja(ws(l, c)));
                break a;
              }
            }
            ((o = l = ws(l, c)),
              Jc !== 4 && (Jc = 2),
              $c === null ? ($c = [o]) : $c.push(o),
              (o = s));
            do {
              switch (o.tag) {
                case 3:
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var v = Os(o, l, t);
                  io(o, v);
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
                        (ol === null || !ol.has(b))))
                  ) {
                    ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                    var x = ks(o, c, t);
                    io(o, x);
                    break a;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          Fl(n);
        } catch (e) {
          ((t = e), Wc === n && n !== null && (Wc = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function kl() {
      var e = Bc.current;
      return ((Bc.current = ps), e === null ? ps : e);
    }
    function Al() {
      ((Jc === 0 || Jc === 3 || Jc === 2) && (Jc = 4),
        Uc === null || (!(Xc & 268435455) && !(Zc & 268435455)) || Sl(Uc, Gc));
    }
    function jl(e, t) {
      var n = Z;
      Z |= 2;
      var i = kl();
      (Uc !== e || Gc !== t) && ((rl = null), Dl(e, t));
      do
        try {
          Ml();
          break;
        } catch (t) {
          Ol(e, t);
        }
      while (1);
      if ((Ua(), (Z = n), (Bc.current = i), Wc !== null)) throw Error(r(261));
      return ((Uc = null), (Gc = 0), Jc);
    }
    function Ml() {
      for (; Wc !== null; ) Pl(Wc);
    }
    function Nl() {
      for (; Wc !== null && !gt(); ) Pl(Wc);
    }
    function Pl(e) {
      var t = Gl(e.alternate, e, Kc);
      ((e.memoizedProps = e.pendingProps), t === null ? Fl(e) : (Wc = t), (Vc.current = null));
    }
    function Fl(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = uc(n, t)), n !== null)) {
            ((n.flags &= 32767), (Wc = n));
            return;
          }
          if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((Jc = 6), (Wc = null));
            return;
          }
        } else if (((n = lc(n, t, Kc)), n !== null)) {
          Wc = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Wc = t;
          return;
        }
        Wc = t = e;
      } while (t !== null);
      Jc === 0 && (Jc = 5);
    }
    function Il(e, t, n) {
      var r = R,
        i = Hc.transition;
      try {
        ((Hc.transition = null), (R = 1), Ll(e, t, n, r));
      } finally {
        ((Hc.transition = i), (R = r));
      }
      return null;
    }
    function Ll(e, t, n, i) {
      do Rl();
      while (cl !== null);
      if (Z & 6) throw Error(r(327));
      n = e.finishedWork;
      var a = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(r(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var o = n.lanes | n.childLanes;
      if (
        (Ht(e, o),
        e === Uc && ((Wc = Uc = null), (Gc = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          sl ||
          ((sl = !0),
          Kl(St, function () {
            return (Rl(), null);
          })),
        (o = (n.flags & 15990) != 0),
        n.subtreeFlags & 15990 || o)
      ) {
        ((o = Hc.transition), (Hc.transition = null));
        var s = R;
        R = 1;
        var c = Z;
        ((Z |= 4),
          (Vc.current = null),
          _c(e, n),
          Mc(n, e),
          Lr(Ci),
          (gn = !!Si),
          (Ci = Si = null),
          (e.current = n),
          Pc(n, e, a),
          _t(),
          (Z = c),
          (R = s),
          (Hc.transition = o));
      } else e.current = n;
      if (
        (sl && ((sl = !1), (cl = e), (ll = a)),
        (o = e.pendingLanes),
        o === 0 && (ol = null),
        Dt(n.stateNode, i),
        _l(e, vt()),
        t !== null)
      )
        for (i = e.onRecoverableError, n = 0; n < t.length; n++)
          ((a = t[n]), i(a.value, { componentStack: a.stack, digest: a.digest }));
      if (il) throw ((il = !1), (e = al), (al = null), e);
      return (
        ll & 1 && e.tag !== 0 && Rl(),
        (o = e.pendingLanes),
        o & 1 ? (e === dl ? ul++ : ((ul = 0), (dl = e))) : (ul = 0),
        oa(),
        null
      );
    }
    function Rl() {
      if (cl !== null) {
        var e = Wt(ll),
          t = Hc.transition,
          n = R;
        try {
          if (((Hc.transition = null), (R = 16 > e ? 16 : e), cl === null)) var i = !1;
          else {
            if (((e = cl), (cl = null), (ll = 0), Z & 6)) throw Error(r(331));
            var a = Z;
            for (Z |= 4, X = e.current; X !== null; ) {
              var o = X,
                s = o.child;
              if (X.flags & 16) {
                var c = o.deletions;
                if (c !== null) {
                  for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    for (X = u; X !== null; ) {
                      var d = X;
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          vc(8, d, o);
                      }
                      var f = d.child;
                      if (f !== null) ((f.return = d), (X = f));
                      else
                        for (; X !== null; ) {
                          d = X;
                          var p = d.sibling,
                            m = d.return;
                          if ((xc(d), d === u)) {
                            X = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (X = p));
                            break;
                          }
                          X = m;
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
                  X = o;
                }
              }
              if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (X = s));
              else
                b: for (; X !== null; ) {
                  if (((o = X), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vc(9, o, o.return);
                    }
                  var v = o.sibling;
                  if (v !== null) {
                    ((v.return = o.return), (X = v));
                    break b;
                  }
                  X = o.return;
                }
            }
            var y = e.current;
            for (X = y; X !== null; ) {
              s = X;
              var b = s.child;
              if (s.subtreeFlags & 2064 && b !== null) ((b.return = s), (X = b));
              else
                b: for (s = y; X !== null; ) {
                  if (((c = X), c.flags & 2048))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          yc(9, c);
                      }
                    } catch (e) {
                      Bl(c, c.return, e);
                    }
                  if (c === s) {
                    X = null;
                    break b;
                  }
                  var x = c.sibling;
                  if (x !== null) {
                    ((x.return = c.return), (X = x));
                    break b;
                  }
                  X = c.return;
                }
            }
            if (((Z = a), oa(), Et && typeof Et.onPostCommitFiberRoot == `function`))
              try {
                Et.onPostCommitFiberRoot(Tt, e);
              } catch {}
            i = !0;
          }
          return i;
        } finally {
          ((R = n), (Hc.transition = t));
        }
      }
      return !1;
    }
    function zl(e, t, n) {
      ((t = ws(n, t)),
        (t = Os(e, t, 1)),
        (e = no(e, t, 1)),
        (t = ml()),
        e !== null && (Vt(e, 1, t), _l(e, t)));
    }
    function Bl(e, t, n) {
      if (e.tag === 3) zl(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            zl(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (ol === null || !ol.has(r)))
            ) {
              ((e = ws(n, e)),
                (e = ks(t, e, 1)),
                (t = no(t, e, 1)),
                (e = ml()),
                t !== null && (Vt(t, 1, e), _l(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Vl(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = ml()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Uc === e &&
          (Gc & n) === n &&
          (Jc === 4 || (Jc === 3 && (Gc & 130023424) === Gc && 500 > vt() - tl)
            ? Dl(e, 0)
            : (Qc |= n)),
        _l(e, t));
    }
    function Hl(e, t) {
      t === 0 &&
        (e.mode & 1 ? ((t = Nt), (Nt <<= 1), !(Nt & 130023424) && (Nt = 4194304)) : (t = 1));
      var n = ml();
      ((e = Za(e, t)), e !== null && (Vt(e, t, n), _l(e, n)));
    }
    function Ul(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Hl(e, n));
    }
    function Wl(e, t) {
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
      (i !== null && i.delete(t), Hl(e, n));
    }
    var Gl = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || G.current) Ps = !0;
        else {
          if ((e.lanes & n) === 0 && !(t.flags & 128)) return ((Ps = !1), rc(e, t, n));
          Ps = !!(e.flags & 131072);
        }
      else ((Ps = !1), q && t.flags & 1048576 && _a(t, ua, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var i = t.type;
          (tc(e, t), (e = t.pendingProps));
          var a = Yi(t, W.current);
          (Ka(t, n), (a = jo(null, t, i, e, a, n)));
          var o = Mo();
          return (
            (t.flags |= 1),
            typeof a == `object` && a && typeof a.render == `function` && a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                K(i) ? ((o = !0), $i(t)) : (o = !1),
                (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
                $a(t),
                (a.updater = ys),
                (t.stateNode = a),
                (a._reactInternals = t),
                Cs(t, i, e, n),
                (t = Us(null, t, i, !0, o, n)))
              : ((t.tag = 0), q && o && va(t), Fs(null, t, a, n), (t = t.child)),
            t
          );
        case 16:
          i = t.elementType;
          a: {
            switch (
              (tc(e, t),
              (e = t.pendingProps),
              (a = i._init),
              (i = a(i._payload)),
              (t.type = i),
              (a = t.tag = Xl(i)),
              (e = _s(i, e)),
              a)
            ) {
              case 0:
                t = Vs(null, t, i, e, n);
                break a;
              case 1:
                t = Hs(null, t, i, e, n);
                break a;
              case 11:
                t = Is(null, t, i, e, n);
                break a;
              case 14:
                t = Ls(null, t, i, _s(i.type, e), n);
                break a;
            }
            throw Error(r(306, i, ``));
          }
          return t;
        case 0:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : _s(i, a)),
            Vs(e, t, i, a, n)
          );
        case 1:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : _s(i, a)),
            Hs(e, t, i, a, n)
          );
        case 3:
          a: {
            if ((Ws(t), e === null)) throw Error(r(387));
            ((i = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              eo(e, t),
              ao(t, i, null, n));
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
                ((a = ws(Error(r(423)), t)), (t = Gs(e, t, i, n, a)));
                break a;
              } else if (i !== a) {
                ((a = ws(Error(r(424)), t)), (t = Gs(e, t, i, n, a)));
                break a;
              } else
                for (
                  xa = ji(t.stateNode.containerInfo.firstChild),
                    ba = t,
                    q = !0,
                    Sa = null,
                    n = Ra(t, null, i, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            else {
              if ((Aa(), i === a)) {
                t = nc(e, t, n);
                break a;
              }
              Fs(e, t, i, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            ho(t),
            e === null && Ea(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (s = a.children),
            wi(i, a) ? (s = null) : o !== null && wi(i, o) && (t.flags |= 32),
            Bs(e, t),
            Fs(e, t, s, n),
            t.child
          );
        case 6:
          return (e === null && Ea(t), null);
        case 13:
          return Js(e, t, n);
        case 4:
          return (
            po(t, t.stateNode.containerInfo),
            (i = t.pendingProps),
            e === null ? (t.child = La(t, null, i, n)) : Fs(e, t, i, n),
            t.child
          );
        case 11:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : _s(i, a)),
            Is(e, t, i, a, n)
          );
        case 7:
          return (Fs(e, t, t.pendingProps, n), t.child);
        case 8:
          return (Fs(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Fs(e, t, t.pendingProps.children, n), t.child);
        case 10:
          a: {
            if (
              ((i = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              U(za, i._currentValue),
              (i._currentValue = s),
              o !== null)
            )
              if (jr(o.value, s)) {
                if (o.children === a.children && !G.current) {
                  t = nc(e, t, n);
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
                          ((l = to(-1, n & -n)), (l.tag = 2));
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
                          Ga(o.return, n, t),
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
                      Ga(s, n, t),
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
            (Fs(e, t, a.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (i = t.pendingProps.children),
            Ka(t, n),
            (a = qa(a)),
            (i = i(a)),
            (t.flags |= 1),
            Fs(e, t, i, n),
            t.child
          );
        case 14:
          return (
            (i = t.type),
            (a = _s(i, t.pendingProps)),
            (a = _s(i.type, a)),
            Ls(e, t, i, a, n)
          );
        case 15:
          return Rs(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : _s(i, a)),
            tc(e, t),
            (t.tag = 1),
            K(i) ? ((e = !0), $i(t)) : (e = !1),
            Ka(t, n),
            xs(t, i, a),
            Cs(t, i, a, n),
            Us(null, t, i, !0, e, n)
          );
        case 19:
          return ec(e, t, n);
        case 22:
          return zs(e, t, n);
      }
      throw Error(r(156, t.tag));
    };
    function Kl(e, t) {
      return mt(e, t);
    }
    function ql(e, t, n, r) {
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
    function Jl(e, t, n, r) {
      return new ql(e, t, n, r);
    }
    function Yl(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Xl(e) {
      if (typeof e == `function`) return Yl(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === j)) return 11;
        if (e === N) return 14;
      }
      return 2;
    }
    function Zl(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Jl(e.tag, t, e.key, e.mode)),
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
    function Ql(e, t, n, i, a, o) {
      var s = 2;
      if (((i = e), typeof e == `function`)) Yl(e) && (s = 1);
      else if (typeof e == `string`) s = 5;
      else
        a: switch (e) {
          case E:
            return $l(n.children, a, o, t);
          case D:
            ((s = 8), (a |= 8));
            break;
          case O:
            return ((e = Jl(12, n, t, a | 2)), (e.elementType = O), (e.lanes = o), e);
          case M:
            return ((e = Jl(13, n, t, a)), (e.elementType = M), (e.lanes = o), e);
          case ee:
            return ((e = Jl(19, n, t, a)), (e.elementType = ee), (e.lanes = o), e);
          case te:
            return eu(n, a, o, t);
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
      return ((t = Jl(s, n, t, a)), (t.elementType = e), (t.type = i), (t.lanes = o), t);
    }
    function $l(e, t, n, r) {
      return ((e = Jl(7, e, r, t)), (e.lanes = n), e);
    }
    function eu(e, t, n, r) {
      return (
        (e = Jl(22, e, r, t)),
        (e.elementType = te),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function tu(e, t, n) {
      return ((e = Jl(6, e, null, t)), (e.lanes = n), e);
    }
    function nu(e, t, n) {
      return (
        (t = Jl(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ru(e, t, n, r, i) {
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
    function iu(e, t, n, r, i, a, o, s, c) {
      return (
        (e = new ru(e, t, n, s, c)),
        t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Jl(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        $a(a),
        e
      );
    }
    function au(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: T,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function ou(e) {
      if (!e) return qi;
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
              if (K(t.type)) {
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
        if (K(n)) return Qi(e, n, t);
      }
      return t;
    }
    function Q(e, t, n, r, i, a, o, s, c) {
      return (
        (e = iu(n, r, !0, e, i, a, o, s, c)),
        (e.context = ou(null)),
        (n = e.current),
        (r = ml()),
        (i = hl(n)),
        (a = to(r, i)),
        (a.callback = t ?? null),
        no(n, a, i),
        (e.current.lanes = i),
        Vt(e, i, r),
        _l(e, r),
        e
      );
    }
    function su(e, t, n, r) {
      var i = t.current,
        a = ml(),
        o = hl(i);
      return (
        (n = ou(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = to(a, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = no(i, t, o)),
        e !== null && (gl(e, i, o, a), ro(e, i, o)),
        o
      );
    }
    function cu(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function lu(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function uu(e, t) {
      (lu(e, t), (e = e.alternate) && lu(e, t));
    }
    function du() {
      return null;
    }
    var fu =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            console.error(e);
          };
    function pu(e) {
      this._internalRoot = e;
    }
    ((mu.prototype.render = pu.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        su(e, t, null, null);
      }),
      (mu.prototype.unmount = pu.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (Tl(function () {
              su(null, e, null, null);
            }),
              (t[Ii] = null));
          }
        }));
    function mu(e) {
      this._internalRoot = e;
    }
    mu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Jt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++);
        (rn.splice(n, 0, e), n === 0 && ln(e));
      }
    };
    function hu(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function gu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
      );
    }
    function _u() {}
    function vu(e, t, n, r, i) {
      if (i) {
        if (typeof r == `function`) {
          var a = r;
          r = function () {
            var e = cu(o);
            a.call(e);
          };
        }
        var o = Q(t, r, e, 0, null, !1, !1, ``, _u);
        return (
          (e._reactRootContainer = o),
          (e[Ii] = o.current),
          ui(e.nodeType === 8 ? e.parentNode : e),
          Tl(),
          o
        );
      }
      for (; (i = e.lastChild); ) e.removeChild(i);
      if (typeof r == `function`) {
        var s = r;
        r = function () {
          var e = cu(c);
          s.call(e);
        };
      }
      var c = iu(e, 0, !1, null, null, !1, !1, ``, _u);
      return (
        (e._reactRootContainer = c),
        (e[Ii] = c.current),
        ui(e.nodeType === 8 ? e.parentNode : e),
        Tl(function () {
          su(t, c, n, r);
        }),
        c
      );
    }
    function yu(e, t, n, r, i) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if (typeof i == `function`) {
          var s = i;
          i = function () {
            var e = cu(o);
            s.call(e);
          };
        }
        su(t, o, e, i);
      } else o = vu(n, t, e, i, r);
      return cu(o);
    }
    ((Gt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Pt(t.pendingLanes);
            n !== 0 && (Ut(t, n | 1), _l(t, vt()), !(Z & 6) && ((nl = vt() + 500), oa()));
          }
          break;
        case 13:
          (Tl(function () {
            var t = Za(e, 1);
            t !== null && gl(t, e, 1, ml());
          }),
            uu(e, 1));
      }
    }),
      (Kt = function (e) {
        if (e.tag === 13) {
          var t = Za(e, 134217728);
          (t !== null && gl(t, e, 134217728, ml()), uu(e, 134217728));
        }
      }),
      (qt = function (e) {
        if (e.tag === 13) {
          var t = hl(e),
            n = Za(e, t);
          (n !== null && gl(n, e, t, ml()), uu(e, t));
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
                  var a = Ui(i);
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
      (qe = wl),
      (Je = Tl));
    var bu = { usingClientEntryPoint: !1, Events: [Vi, Hi, Ui, Ge, Ke, wl] },
      xu = {
        findFiberByHostInstance: Bi,
        bundleType: 0,
        version: `18.3.1`,
        rendererPackageName: `react-dom`,
      },
      Su = {
        bundleType: xu.bundleType,
        version: xu.version,
        rendererPackageName: xu.rendererPackageName,
        rendererConfig: xu.rendererConfig,
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
        findFiberByHostInstance: xu.findFiberByHostInstance || du,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.3.1-next-f1338f8080-20240426`,
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Cu.isDisabled && Cu.supportsFiber)
        try {
          ((Tt = Cu.inject(Su)), (Et = Cu));
        } catch {}
    }
    ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu),
      (e.createPortal = function (e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!hu(t)) throw Error(r(200));
        return au(e, t, null, n);
      }),
      (e.createRoot = function (e, t) {
        if (!hu(e)) throw Error(r(299));
        var n = !1,
          i = ``,
          a = fu;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
          (t = iu(e, 1, !1, null, null, n, !1, i, a)),
          (e[Ii] = t.current),
          ui(e.nodeType === 8 ? e.parentNode : e),
          new pu(t)
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
        return Tl(e);
      }),
      (e.hydrate = function (e, t, n) {
        if (!gu(t)) throw Error(r(200));
        return yu(null, e, t, !0, n);
      }),
      (e.hydrateRoot = function (e, t, n) {
        if (!hu(e)) throw Error(r(405));
        var i = (n != null && n.hydratedSources) || null,
          a = !1,
          o = ``,
          s = fu;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
          (t = Q(t, null, e, 1, n ?? null, a, !1, o, s)),
          (e[Ii] = t.current),
          ui(e),
          i)
        )
          for (e = 0; e < i.length; e++)
            ((n = i[e]),
              (a = n._getVersion),
              (a = a(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a));
        return new mu(t);
      }),
      (e.render = function (e, t, n) {
        if (!gu(t)) throw Error(r(200));
        return yu(null, e, t, !1, n);
      }),
      (e.unmountComponentAtNode = function (e) {
        if (!gu(e)) throw Error(r(40));
        return e._reactRootContainer
          ? (Tl(function () {
              yu(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[Ii] = null));
              });
            }),
            !0)
          : !1;
      }),
      (e.unstable_batchedUpdates = wl),
      (e.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
        if (!gu(n)) throw Error(r(200));
        if (e == null || e._reactInternals === void 0) throw Error(r(38));
        return yu(e, t, n, !1, i);
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
  Ln = (e, t) => {
    let n = (0, y.forwardRef)(({ className: n, ...r }, i) =>
      (0, y.createElement)(In, { ref: i, iconNode: t, className: Pn(`lucide-${Nn(e)}`, n), ...r })
    );
    return ((n.displayName = `${e}`), n);
  },
  Rn = Ln(`ArrowRight`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  zn = Ln(`Briefcase`, [
    [`path`, { d: `M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`, key: `jecpp` }],
    [`rect`, { width: `20`, height: `14`, x: `2`, y: `6`, rx: `2`, key: `i6l2r4` }],
  ]),
  Bn = Ln(`ChevronDown`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  Vn = Ln(`Globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` }],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  Hn = Ln(`MessageSquare`, [
    [`path`, { d: `M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`, key: `1lielz` }],
  ]),
  Un = Ln(`QrCode`, [
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
  Wn = Ln(`ScanText`, [
    [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
    [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
    [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
    [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
    [`path`, { d: `M7 8h8`, key: `1jbsf9` }],
    [`path`, { d: `M7 12h10`, key: `b7w52i` }],
    [`path`, { d: `M7 16h6`, key: `1vyc9m` }],
  ]),
  Gn = Ln(`Share2`, [
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
    [`line`, { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` }],
    [`line`, { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` }],
  ]),
  Kn = Ln(`Shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  qn = Ln(`ShoppingCart`, [
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
  Jn = Ln(`Smartphone`, [
    [`rect`, { width: `14`, height: `20`, x: `5`, y: `2`, rx: `2`, ry: `2`, key: `1yt0o3` }],
    [`path`, { d: `M12 18h.01`, key: `mhygvu` }],
  ]),
  Yn = Ln(`Truck`, [
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
  Xn = Ln(`User`, [
    [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
    [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
  ]),
  Zn = Ln(`X`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  Qn = Ln(`Zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  $n = `-`,
  er = (e) => {
    let t = ir(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        let n = e.split($n);
        return (n[0] === `` && n.length !== 1 && n.shift(), tr(n, t) || rr(e));
      },
      getConflictingClassGroupIds: (e, t) => {
        let i = n[e] || [];
        return t && r[e] ? [...i, ...r[e]] : i;
      },
    };
  },
  tr = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    let n = e[0],
      r = t.nextPart.get(n),
      i = r ? tr(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    let a = e.join($n);
    return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
  },
  nr = /^\[(.+)\]$/,
  rr = (e) => {
    if (nr.test(e)) {
      let t = nr.exec(e)[1],
        n = t?.substring(0, t.indexOf(`:`));
      if (n) return `arbitrary..` + n;
    }
  },
  ir = (e) => {
    let { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      cr(Object.entries(e.classGroups), n).forEach(([e, n]) => {
        ar(n, r, e, t);
      }),
      r
    );
  },
  ar = (e, t, n, r) => {
    e.forEach((e) => {
      if (typeof e == `string`) {
        let r = e === `` ? t : or(t, e);
        r.classGroupId = n;
        return;
      }
      if (typeof e == `function`) {
        if (sr(e)) {
          ar(e(r), t, n, r);
          return;
        }
        t.validators.push({ validator: e, classGroupId: n });
        return;
      }
      Object.entries(e).forEach(([e, i]) => {
        ar(i, or(t, e), n, r);
      });
    });
  },
  or = (e, t) => {
    let n = e;
    return (
      t.split($n).forEach((e) => {
        (n.nextPart.has(e) || n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(e)));
      }),
      n
    );
  },
  sr = (e) => e.isThemeGetter,
  cr = (e, t) =>
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
  lr = (e) => {
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
  ur = `!`,
  dr = (e) => {
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
          u = l.startsWith(ur);
        return {
          modifiers: n,
          hasImportantModifier: u,
          baseClassName: u ? l.substring(1) : l,
          maybePostfixModifierPosition: c && c > s ? c - s : void 0,
        };
      };
    return n ? (e) => n({ className: e, parseClassName: o }) : o;
  },
  fr = (e) => {
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
  pr = (e) => ({ cache: lr(e.cacheSize), parseClassName: dr(e), ...er(e) }),
  mr = /\s+/,
  hr = (e, t) => {
    let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t,
      a = [],
      o = e.trim().split(mr),
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
      let m = fr(c).join(`:`),
        h = l ? m + ur : m,
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
function gr() {
  let e = 0,
    t,
    n,
    r = ``;
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = _r(t)) && (r && (r += ` `), (r += n));
  return r;
}
var _r = (e) => {
  if (typeof e == `string`) return e;
  let t,
    n = ``;
  for (let r = 0; r < e.length; r++) e[r] && (t = _r(e[r])) && (n && (n += ` `), (n += t));
  return n;
};
function vr(e, ...t) {
  let n,
    r,
    i,
    a = o;
  function o(o) {
    return (
      (n = pr(t.reduce((e, t) => t(e), e()))),
      (r = n.cache.get),
      (i = n.cache.set),
      (a = s),
      s(o)
    );
  }
  function s(e) {
    let t = r(e);
    if (t) return t;
    let a = hr(e, n);
    return (i(e, a), a);
  }
  return function () {
    return a(gr.apply(null, arguments));
  };
}
var z = (e) => {
    let t = (t) => t[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  yr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  br = /^\d+\/\d+$/,
  xr = new Set([`px`, `full`, `screen`]),
  Sr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Cr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Tr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Er =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Dr = (e) => kr(e) || xr.has(e) || br.test(e),
  Or = (e) => Vr(e, `length`, Hr),
  kr = (e) => !!e && !Number.isNaN(Number(e)),
  Ar = (e) => Vr(e, `number`, kr),
  jr = (e) => !!e && Number.isInteger(Number(e)),
  Mr = (e) => e.endsWith(`%`) && kr(e.slice(0, -1)),
  B = (e) => yr.test(e),
  Nr = (e) => Sr.test(e),
  Pr = new Set([`length`, `size`, `percentage`]),
  Fr = (e) => Vr(e, Pr, Ur),
  Ir = (e) => Vr(e, `position`, Ur),
  Lr = new Set([`image`, `url`]),
  Rr = (e) => Vr(e, Lr, Gr),
  zr = (e) => Vr(e, ``, Wr),
  Br = () => !0,
  Vr = (e, t, n) => {
    let r = yr.exec(e);
    return r ? (r[1] ? (typeof t == `string` ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
  },
  Hr = (e) => Cr.test(e) && !wr.test(e),
  Ur = () => !1,
  Wr = (e) => Tr.test(e),
  Gr = (e) => Er.test(e),
  Kr = vr(() => {
    let e = z(`colors`),
      t = z(`spacing`),
      n = z(`blur`),
      r = z(`brightness`),
      i = z(`borderColor`),
      a = z(`borderRadius`),
      o = z(`borderSpacing`),
      s = z(`borderWidth`),
      c = z(`contrast`),
      l = z(`grayscale`),
      u = z(`hueRotate`),
      d = z(`invert`),
      f = z(`gap`),
      p = z(`gradientColorStops`),
      m = z(`gradientColorStopPositions`),
      h = z(`inset`),
      g = z(`margin`),
      _ = z(`opacity`),
      v = z(`padding`),
      y = z(`saturate`),
      b = z(`scale`),
      x = z(`sepia`),
      S = z(`skew`),
      C = z(`space`),
      w = z(`translate`),
      T = () => [`auto`, `contain`, `none`],
      E = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      D = () => [`auto`, B, t],
      O = () => [B, t],
      k = () => [``, Dr, Or],
      A = () => [`auto`, kr, B],
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
      P = () => [``, `0`, B],
      te = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
      ne = () => [kr, B];
    return {
      cacheSize: 500,
      separator: `:`,
      theme: {
        colors: [Br],
        spacing: [Dr, Or],
        blur: [`none`, ``, Nr, B],
        brightness: ne(),
        borderColor: [e],
        borderRadius: [`none`, ``, `full`, Nr, B],
        borderSpacing: O(),
        borderWidth: k(),
        contrast: ne(),
        grayscale: P(),
        hueRotate: ne(),
        invert: P(),
        gap: O(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Mr, Or],
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
        aspect: [{ aspect: [`auto`, `square`, `video`, B] }],
        container: [`container`],
        columns: [{ columns: [Nr] }],
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
        'object-position': [{ object: [...j(), B] }],
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
        z: [{ z: [`auto`, jr, B] }],
        basis: [{ basis: D() }],
        'flex-direction': [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }],
        'flex-wrap': [{ flex: [`wrap`, `wrap-reverse`, `nowrap`] }],
        flex: [{ flex: [`1`, `auto`, `initial`, `none`, B] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: [`first`, `last`, `none`, jr, B] }],
        'grid-cols': [{ 'grid-cols': [Br] }],
        'col-start-end': [{ col: [`auto`, { span: [`full`, jr, B] }, B] }],
        'col-start': [{ 'col-start': A() }],
        'col-end': [{ 'col-end': A() }],
        'grid-rows': [{ 'grid-rows': [Br] }],
        'row-start-end': [{ row: [`auto`, { span: [jr, B] }, B] }],
        'row-start': [{ 'row-start': A() }],
        'row-end': [{ 'row-end': A() }],
        'grid-flow': [{ 'grid-flow': [`row`, `col`, `dense`, `row-dense`, `col-dense`] }],
        'auto-cols': [{ 'auto-cols': [`auto`, `min`, `max`, `fr`, B] }],
        'auto-rows': [{ 'auto-rows': [`auto`, `min`, `max`, `fr`, B] }],
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
        w: [{ w: [`auto`, `min`, `max`, `fit`, `svw`, `lvw`, `dvw`, B, t] }],
        'min-w': [{ 'min-w': [B, t, `min`, `max`, `fit`] }],
        'max-w': [
          { 'max-w': [B, t, `none`, `full`, `min`, `max`, `fit`, `prose`, { screen: [Nr] }, Nr] },
        ],
        h: [{ h: [B, t, `auto`, `min`, `max`, `fit`, `svh`, `lvh`, `dvh`] }],
        'min-h': [{ 'min-h': [B, t, `min`, `max`, `fit`, `svh`, `lvh`, `dvh`] }],
        'max-h': [{ 'max-h': [B, t, `min`, `max`, `fit`, `svh`, `lvh`, `dvh`] }],
        size: [{ size: [B, t, `auto`, `min`, `max`, `fit`] }],
        'font-size': [{ text: [`base`, Nr, Or] }],
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
              Ar,
            ],
          },
        ],
        'font-family': [{ font: [Br] }],
        'fvn-normal': [`normal-nums`],
        'fvn-ordinal': [`ordinal`],
        'fvn-slashed-zero': [`slashed-zero`],
        'fvn-figure': [`lining-nums`, `oldstyle-nums`],
        'fvn-spacing': [`proportional-nums`, `tabular-nums`],
        'fvn-fraction': [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`, B] }],
        'line-clamp': [{ 'line-clamp': [`none`, kr, Ar] }],
        leading: [{ leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`, Dr, B] }],
        'list-image': [{ 'list-image': [`none`, B] }],
        'list-style-type': [{ list: [`none`, `disc`, `decimal`, B] }],
        'list-style-position': [{ list: [`inside`, `outside`] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [_] }],
        'text-alignment': [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [_] }],
        'text-decoration': [`underline`, `overline`, `line-through`, `no-underline`],
        'text-decoration-style': [{ decoration: [...M(), `wavy`] }],
        'text-decoration-thickness': [{ decoration: [`auto`, `from-font`, Dr, Or] }],
        'underline-offset': [{ 'underline-offset': [`auto`, Dr, B] }],
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
              B,
            ],
          },
        ],
        whitespace: [
          { whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, B] }],
        'bg-attachment': [{ bg: [`fixed`, `local`, `scroll`] }],
        'bg-clip': [{ 'bg-clip': [`border`, `padding`, `content`, `text`] }],
        'bg-opacity': [{ 'bg-opacity': [_] }],
        'bg-origin': [{ 'bg-origin': [`border`, `padding`, `content`] }],
        'bg-position': [{ bg: [...j(), Ir] }],
        'bg-repeat': [{ bg: [`no-repeat`, { repeat: [``, `x`, `y`, `round`, `space`] }] }],
        'bg-size': [{ bg: [`auto`, `cover`, `contain`, Fr] }],
        'bg-image': [
          { bg: [`none`, { 'gradient-to': [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, Rr] },
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
        'outline-offset': [{ 'outline-offset': [Dr, B] }],
        'outline-w': [{ outline: [Dr, Or] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: k() }],
        'ring-w-inset': [`ring-inset`],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [_] }],
        'ring-offset-w': [{ 'ring-offset': [Dr, Or] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: [``, `inner`, `none`, Nr, zr] }],
        'shadow-color': [{ shadow: [Br] }],
        opacity: [{ opacity: [_] }],
        'mix-blend': [{ 'mix-blend': [...ee(), `plus-lighter`, `plus-darker`] }],
        'bg-blend': [{ 'bg-blend': ee() }],
        filter: [{ filter: [``, `none`] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        'drop-shadow': [{ 'drop-shadow': [``, `none`, Nr, B] }],
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
          { transition: [`none`, `all`, ``, `colors`, `opacity`, `shadow`, `transform`, B] },
        ],
        duration: [{ duration: ne() }],
        ease: [{ ease: [`linear`, `in`, `out`, `in-out`, B] }],
        delay: [{ delay: ne() }],
        animate: [{ animate: [`none`, `spin`, `ping`, `pulse`, `bounce`, B] }],
        transform: [{ transform: [``, `gpu`, `none`] }],
        scale: [{ scale: [b] }],
        'scale-x': [{ 'scale-x': [b] }],
        'scale-y': [{ 'scale-y': [b] }],
        rotate: [{ rotate: [jr, B] }],
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
              B,
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
              B,
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
        'will-change': [{ 'will-change': [`auto`, `scroll`, `contents`, `transform`, B] }],
        fill: [{ fill: [e, `none`] }],
        'stroke-w': [{ stroke: [Dr, Or, Ar] }],
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
function qr(...e) {
  return Kr(kn(e));
}
var Jr = xn,
  Yr = y.forwardRef(({ className: e, ...t }, n) =>
    (0, I.jsx)(Sn, {
      ref: n,
      className: qr(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e
      ),
      ...t,
    })
  );
Yr.displayName = Sn.displayName;
var Xr = Mn(
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
  Zr = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, I.jsx)(Cn, { ref: r, className: qr(Xr({ variant: t }), e), ...n })
  );
Zr.displayName = Cn.displayName;
var Qr = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(En, {
    ref: n,
    className: qr(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50`,
      e
    ),
    ...t,
  })
);
Qr.displayName = En.displayName;
var $r = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(Dn, {
    ref: n,
    className: qr(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e
    ),
    'toast-close': ``,
    ...t,
    children: (0, I.jsx)(Zn, { className: `h-4 w-4` }),
  })
);
$r.displayName = Dn.displayName;
var ei = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(wn, { ref: n, className: qr(`text-sm font-semibold`, e), ...t })
);
ei.displayName = wn.displayName;
var ti = y.forwardRef(({ className: e, ...t }, n) =>
  (0, I.jsx)(Tn, { ref: n, className: qr(`text-sm opacity-90`, e), ...t })
);
ti.displayName = Tn.displayName;
function ni() {
  let { toasts: e } = Ne();
  return (0, I.jsxs)(Jr, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, I.jsxs)(
          Zr,
          {
            ...i,
            children: [
              (0, I.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t && (0, I.jsx)(ei, { children: t }),
                  n && (0, I.jsx)(ti, { children: n }),
                ],
              }),
              r,
              (0, I.jsx)($r, {}),
            ],
          },
          e
        );
      }),
      (0, I.jsx)(Yr, {}),
    ],
  });
}
var ri = y.useId || (() => void 0),
  ii = 0;
function ai(e) {
  let [t, n] = y.useState(ri());
  return (
    _t(() => {
      e || n((e) => e ?? String(ii++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
var oi = [`top`, `right`, `bottom`, `left`],
  si = Math.min,
  V = Math.max,
  ci = Math.round,
  li = Math.floor,
  ui = (e) => ({ x: e, y: e }),
  di = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function fi(e, t, n) {
  return V(e, si(t, n));
}
function pi(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function mi(e) {
  return e.split(`-`)[0];
}
function hi(e) {
  return e.split(`-`)[1];
}
function gi(e) {
  return e === `x` ? `y` : `x`;
}
function _i(e) {
  return e === `y` ? `height` : `width`;
}
function vi(e) {
  let t = e[0];
  return t === `t` || t === `b` ? `y` : `x`;
}
function yi(e) {
  return gi(vi(e));
}
function bi(e, t, n) {
  n === void 0 && (n = !1);
  let r = hi(e),
    i = yi(e),
    a = _i(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`;
  return (t.reference[a] > t.floating[a] && (o = ki(o)), [o, ki(o)]);
}
function xi(e) {
  let t = ki(e);
  return [Si(e), t, Si(t)];
}
function Si(e) {
  return e.includes(`start`) ? e.replace(`start`, `end`) : e.replace(`end`, `start`);
}
var Ci = [`left`, `right`],
  wi = [`right`, `left`],
  Ti = [`top`, `bottom`],
  Ei = [`bottom`, `top`];
function Di(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? wi : Ci) : t ? Ci : wi;
    case `left`:
    case `right`:
      return t ? Ti : Ei;
    default:
      return [];
  }
}
function Oi(e, t, n, r) {
  let i = hi(e),
    a = Di(mi(e), n === `start`, r);
  return (i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Si)))), a);
}
function ki(e) {
  let t = mi(e);
  return di[t] + e.slice(t.length);
}
function Ai(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function ji(e) {
  return typeof e == `number` ? { top: e, right: e, bottom: e, left: e } : Ai(e);
}
function Mi(e) {
  let { x: t, y: n, width: r, height: i } = e;
  return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
}
function Ni(e, t, n) {
  let { reference: r, floating: i } = e,
    a = vi(t),
    o = yi(t),
    s = _i(o),
    c = mi(t),
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
  switch (hi(t)) {
    case `start`:
      p[o] -= f * (n && l ? -1 : 1);
      break;
    case `end`:
      p[o] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function Pi(e, t) {
  t === void 0 && (t = {});
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = pi(t, e),
    p = ji(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = Mi(
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
    y = Mi(
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
var Fi = 50,
  Ii = async (e, t, n) => {
    let { placement: r = `bottom`, strategy: i = `absolute`, middleware: a = [], platform: o } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: Pi },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = Ni(l, r, c),
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
          p < Fi &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({ reference: e, floating: t, strategy: i })
                  : x.rects),
            ({ x: u, y: d } = Ni(l, f, c))),
          (n = -1)));
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m };
  },
  Li = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t,
        { element: l, padding: u = 0 } = pi(e, t) || {};
      if (l == null) return {};
      let d = ji(u),
        f = { x: n, y: r },
        p = yi(i),
        m = _i(p),
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
        E = si(d[_], T),
        D = si(d[v], T),
        O = E,
        k = C - h[m] - D,
        A = C / 2 - h[m] / 2 + w,
        j = fi(O, A, k),
        M =
          !c.arrow &&
          hi(i) != null &&
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
  Ri = function (e) {
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
            } = pi(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          let g = mi(r),
            _ = vi(o),
            v = mi(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [ki(o)] : xi(o)),
            x = p !== `none`;
          !d && x && b.push(...Oi(o, m, p, y));
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || [];
          if ((l && w.push(C[g]), u)) {
            let e = bi(r, a, y);
            w.push(C[e[0]], C[e[1]]);
          }
          if (((T = [...T, { placement: r, overflows: w }]), !w.every((e) => e <= 0))) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e];
            if (
              t &&
              (!(u === `alignment` && _ !== vi(t)) ||
                T.every((e) => (vi(e.placement) === _ ? e.overflows[0] > 0 : !0)))
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
                      let t = vi(e.placement);
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
function zi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Bi(e) {
  return oi.some((t) => e[t] >= 0);
}
var Vi = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = pi(e, t);
          switch (i) {
            case `referenceHidden`: {
              let e = zi(
                await r.detectOverflow(t, { ...a, elementContext: `reference` }),
                n.reference
              );
              return { data: { referenceHiddenOffsets: e, referenceHidden: Bi(e) } };
            }
            case `escaped`: {
              let e = zi(await r.detectOverflow(t, { ...a, altBoundary: !0 }), n.floating);
              return { data: { escapedOffsets: e, escaped: Bi(e) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Hi = new Set([`left`, `top`]);
async function Ui(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = mi(n),
    s = hi(n),
    c = vi(n) === `y`,
    l = Hi.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = pi(t, e),
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
var Wi = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n;
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await Ui(t, e);
          return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  Gi = function (e) {
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
            } = pi(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = vi(mi(i)),
            p = gi(f),
            m = u[p],
            h = u[f];
          if (o) {
            let e = p === `y` ? `top` : `left`,
              t = p === `y` ? `bottom` : `right`,
              n = m + d[e],
              r = m - d[t];
            m = fi(n, m, r);
          }
          if (s) {
            let e = f === `y` ? `top` : `left`,
              t = f === `y` ? `bottom` : `right`,
              n = h + d[e],
              r = h - d[t];
            h = fi(n, h, r);
          }
          let g = c.fn({ ...t, [p]: m, [f]: h });
          return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [p]: o, [f]: s } } };
        },
      }
    );
  },
  Ki = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = pi(e, t),
            u = { x: n, y: r },
            d = vi(i),
            f = gi(d),
            p = u[f],
            m = u[d],
            h = pi(s, t),
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
              t = Hi.has(mi(i)),
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
  H = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          var n, r;
          let { placement: i, rects: a, platform: o, elements: s } = t,
            { apply: c = () => {}, ...l } = pi(e, t),
            u = await o.detectOverflow(t, l),
            d = mi(i),
            f = hi(i),
            p = vi(i) === `y`,
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
            b = si(h - u[g], v),
            x = si(m - u[_], y),
            S = !t.middlewareData.shift,
            C = b,
            w = x;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (C = v),
            S && !f)
          ) {
            let e = V(u.left, 0),
              t = V(u.right, 0),
              n = V(u.top, 0),
              r = V(u.bottom, 0);
            p
              ? (w = m - 2 * (e !== 0 || t !== 0 ? e + t : V(u.left, u.right)))
              : (C = h - 2 * (n !== 0 || r !== 0 ? n + r : V(u.top, u.bottom)));
          }
          await c({ ...t, availableWidth: w, availableHeight: C });
          let T = await o.getDimensions(s.floating);
          return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function U() {
  return typeof window < `u`;
}
function qi(e) {
  return Ji(e) ? (e.nodeName || ``).toLowerCase() : `#document`;
}
function W(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function G(e) {
  return ((Ji(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Ji(e) {
  return U() ? e instanceof Node || e instanceof W(e).Node : !1;
}
function Yi(e) {
  return U() ? e instanceof Element || e instanceof W(e).Element : !1;
}
function K(e) {
  return U() ? e instanceof HTMLElement || e instanceof W(e).HTMLElement : !1;
}
function Xi(e) {
  return !U() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof W(e).ShadowRoot;
}
function Zi(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = ca(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== `inline` && i !== `contents`;
}
function Qi(e) {
  return /^(table|td|th)$/.test(qi(e));
}
function $i(e) {
  try {
    if (e.matches(`:popover-open`)) return !0;
  } catch {}
  try {
    return e.matches(`:modal`);
  } catch {
    return !1;
  }
}
var ea = /transform|translate|scale|rotate|perspective|filter/,
  ta = /paint|layout|strict|content/,
  na = (e) => !!e && e !== `none`,
  ra;
function ia(e) {
  let t = Yi(e) ? ca(e) : e;
  return (
    na(t.transform) ||
    na(t.translate) ||
    na(t.scale) ||
    na(t.rotate) ||
    na(t.perspective) ||
    (!oa() && (na(t.backdropFilter) || na(t.filter))) ||
    ea.test(t.willChange || ``) ||
    ta.test(t.contain || ``)
  );
}
function aa(e) {
  let t = ua(e);
  for (; K(t) && !sa(t); ) {
    if (ia(t)) return t;
    if ($i(t)) return null;
    t = ua(t);
  }
  return null;
}
function oa() {
  return (
    (ra ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`)),
    ra
  );
}
function sa(e) {
  return /^(html|body|#document)$/.test(qi(e));
}
function ca(e) {
  return W(e).getComputedStyle(e);
}
function la(e) {
  return Yi(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ua(e) {
  if (qi(e) === `html`) return e;
  let t = e.assignedSlot || e.parentNode || (Xi(e) && e.host) || G(e);
  return Xi(t) ? t.host : t;
}
function da(e) {
  let t = ua(e);
  return sa(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : K(t) && Zi(t) ? t : da(t);
}
function fa(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let r = da(e),
    i = r === e.ownerDocument?.body,
    a = W(r);
  if (i) {
    let e = pa(a);
    return t.concat(a, a.visualViewport || [], Zi(r) ? r : [], e && n ? fa(e) : []);
  } else return t.concat(r, fa(r, [], n));
}
function pa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ma(e) {
  let t = ca(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = K(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = ci(n) !== a || ci(r) !== o;
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s });
}
function ha(e) {
  return Yi(e) ? e : e.contextElement;
}
function ga(e) {
  let t = ha(e);
  if (!K(t)) return ui(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = ma(t),
    o = (a ? ci(n.width) : n.width) / r,
    s = (a ? ci(n.height) : n.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
var _a = ui(0);
function va(e) {
  let t = W(e);
  return !oa() || !t.visualViewport
    ? _a
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ya(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== W(e)) ? !1 : t);
}
function ba(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let i = e.getBoundingClientRect(),
    a = ha(e),
    o = ui(1);
  t && (r ? Yi(r) && (o = ga(r)) : (o = ga(e)));
  let s = ya(a, n, r) ? va(a) : ui(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y;
  if (a) {
    let e = W(a),
      t = r && Yi(r) ? W(r) : r,
      n = e,
      i = pa(n);
    for (; i && r && t !== n; ) {
      let e = ga(i),
        t = i.getBoundingClientRect(),
        r = ca(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
      ((c *= e.x), (l *= e.y), (u *= e.x), (d *= e.y), (c += a), (l += o), (n = W(i)), (i = pa(n)));
    }
  }
  return Mi({ width: u, height: d, x: c, y: l });
}
function xa(e, t) {
  let n = la(e).scrollLeft;
  return t ? t.left + n : ba(G(e)).left + n;
}
function q(e, t) {
  let n = e.getBoundingClientRect();
  return { x: n.left + t.scrollLeft - xa(e, n), y: n.top + t.scrollTop };
}
function Sa(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = G(r),
    s = t ? $i(t.floating) : !1;
  if (r === o || (s && a)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = ui(1),
    u = ui(0),
    d = K(r);
  if ((d || (!d && !a)) && ((qi(r) !== `body` || Zi(o)) && (c = la(r)), d)) {
    let e = ba(r);
    ((l = ga(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop));
  }
  let f = o && !d && !a ? q(o, c) : ui(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  };
}
function Ca(e) {
  return Array.from(e.getClientRects());
}
function wa(e) {
  let t = G(e),
    n = la(e),
    r = e.ownerDocument.body,
    i = V(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = V(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    o = -n.scrollLeft + xa(e),
    s = -n.scrollTop;
  return (
    ca(r).direction === `rtl` && (o += V(t.clientWidth, r.clientWidth) - i),
    { width: i, height: a, x: o, y: s }
  );
}
var Ta = 25;
function Ea(e, t) {
  let n = W(e),
    r = G(e),
    i = n.visualViewport,
    a = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    c = 0;
  if (i) {
    ((a = i.width), (o = i.height));
    let e = oa();
    (!e || (e && t === `fixed`)) && ((s = i.offsetLeft), (c = i.offsetTop));
  }
  let l = xa(r);
  if (l <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i =
        (e.compatMode === `CSS1Compat` && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= Ta && (a -= o);
  } else l <= Ta && (a += l);
  return { width: a, height: o, x: s, y: c };
}
function Da(e, t) {
  let n = ba(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = K(e) ? ga(e) : ui(1);
  return { width: e.clientWidth * a.x, height: e.clientHeight * a.y, x: i * a.x, y: r * a.y };
}
function Oa(e, t, n) {
  let r;
  if (t === `viewport`) r = Ea(e, n);
  else if (t === `document`) r = wa(G(e));
  else if (Yi(t)) r = Da(t, n);
  else {
    let n = va(e);
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
  }
  return Mi(r);
}
function ka(e, t) {
  let n = ua(e);
  return n === t || !Yi(n) || sa(n) ? !1 : ca(n).position === `fixed` || ka(n, t);
}
function Aa(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = fa(e, [], !1).filter((e) => Yi(e) && qi(e) !== `body`),
    i = null,
    a = ca(e).position === `fixed`,
    o = a ? ua(e) : e;
  for (; Yi(o) && !sa(o); ) {
    let t = ca(o),
      n = ia(o);
    (!n && t.position === `fixed` && (i = null),
      (
        a
          ? !n && !i
          : (!n &&
              t.position === `static` &&
              i &&
              (i.position === `absolute` || i.position === `fixed`)) ||
            (Zi(o) && !n && ka(e, o))
      )
        ? (r = r.filter((e) => e !== o))
        : (i = t),
      (o = ua(o)));
  }
  return (t.set(e, r), r);
}
function ja(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [...(n === `clippingAncestors` ? ($i(t) ? [] : Aa(t, this._c)) : [].concat(n)), r],
    o = Oa(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left;
  for (let e = 1; e < a.length; e++) {
    let n = Oa(t, a[e], i);
    ((s = V(n.top, s)), (c = si(n.right, c)), (l = si(n.bottom, l)), (u = V(n.left, u)));
  }
  return { width: c - u, height: l - s, x: u, y: s };
}
function Ma(e) {
  let { width: t, height: n } = ma(e);
  return { width: t, height: n };
}
function Na(e, t, n) {
  let r = K(t),
    i = G(t),
    a = n === `fixed`,
    o = ba(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = ui(0);
  function l() {
    c.x = xa(i);
  }
  if (r || (!r && !a))
    if (((qi(t) !== `body` || Zi(i)) && (s = la(t)), r)) {
      let e = ba(t, !0, a, t);
      ((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop));
    } else i && l();
  a && !r && i && l();
  let u = i && !r && !a ? q(i, s) : ui(0);
  return {
    x: o.left + s.scrollLeft - c.x - u.x,
    y: o.top + s.scrollTop - c.y - u.y,
    width: o.width,
    height: o.height,
  };
}
function Pa(e) {
  return ca(e).position === `static`;
}
function Fa(e, t) {
  if (!K(e) || ca(e).position === `fixed`) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (G(e) === n && (n = n.ownerDocument.body), n);
}
function Ia(e, t) {
  let n = W(e);
  if ($i(e)) return n;
  if (!K(e)) {
    let t = ua(e);
    for (; t && !sa(t); ) {
      if (Yi(t) && !Pa(t)) return t;
      t = ua(t);
    }
    return n;
  }
  let r = Fa(e, t);
  for (; r && Qi(r) && Pa(r); ) r = Fa(r, t);
  return r && sa(r) && Pa(r) && !ia(r) ? n : r || aa(e) || n;
}
var La = async function (e) {
  let t = this.getOffsetParent || Ia,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Na(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Ra(e) {
  return ca(e).direction === `rtl`;
}
var za = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Sa,
  getDocumentElement: G,
  getClippingRect: ja,
  getOffsetParent: Ia,
  getElementRects: La,
  getClientRects: Ca,
  getDimensions: Ma,
  getScale: ga,
  isElement: Yi,
  isRTL: Ra,
};
function Ba(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Va(e, t) {
  let n = null,
    r,
    i = G(e);
  function a() {
    var e;
    (clearTimeout(r), (e = n) == null || e.disconnect(), (n = null));
  }
  function o(s, c) {
    (s === void 0 && (s = !1), c === void 0 && (c = 1), a());
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l;
    if ((s || t(), !f || !p)) return;
    let m = li(d),
      h = li(i.clientWidth - (u + f)),
      g = li(i.clientHeight - (d + p)),
      _ = li(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: V(0, si(1, c)) || 1,
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
      (n === 1 && !Ba(l, e.getBoundingClientRect()) && o(), (y = !1));
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
function Ha(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = ha(e),
    u = i || a ? [...(l ? fa(l) : []), ...(t ? fa(t) : [])] : [];
  u.forEach((e) => {
    (i && e.addEventListener(`scroll`, n, { passive: !0 }), a && e.addEventListener(`resize`, n));
  });
  let d = l && s ? Va(l, n) : null,
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
    h = c ? ba(e) : null;
  c && g();
  function g() {
    let t = ba(e);
    (h && !Ba(h, t) && n(), (h = t), (m = requestAnimationFrame(g)));
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
var Ua = Wi,
  Wa = Gi,
  Ga = Ri,
  Ka = H,
  qa = Vi,
  Ja = Li,
  Ya = Ki,
  Xa = (e, t, n) => {
    let r = new Map(),
      i = { platform: za, ...n },
      a = { ...i.platform, _c: r };
    return Ii(e, t, { ...i, platform: a });
  },
  Za = typeof document < `u` ? y.useLayoutEffect : function () {};
function Qa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Qa(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !Qa(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $a(e) {
  return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function eo(e, t) {
  let n = $a(e);
  return Math.round(t * n) / n;
}
function to(e) {
  let t = y.useRef(e);
  return (
    Za(() => {
      t.current = e;
    }),
    t
  );
}
function no(e) {
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
  Qa(f, r) || p(r);
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
    O = to(c),
    k = to(i),
    A = to(l),
    j = y.useCallback(() => {
      if (!C.current || !w.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (k.current && (e.platform = k.current),
        Xa(C.current, w.current, e).then((e) => {
          let t = { ...e, isPositioned: A.current !== !1 };
          M.current &&
            !Qa(E.current, t) &&
            ((E.current = t),
            T.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, k, A]);
  Za(() => {
    l === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let M = y.useRef(!1);
  (Za(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    Za(() => {
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
      let t = eo(N.floating, u.x),
        r = eo(N.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...($a(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, N.floating, u.x, u.y]);
  return y.useMemo(
    () => ({ ...u, update: j, refs: ee, elements: N, floatingStyles: P }),
    [u, j, ee, N, P]
  );
}
var ro = (e) => {
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
            : Ja({ element: r.current, padding: i }).fn(n)
          : r
            ? Ja({ element: r, padding: i }).fn(n)
            : {};
      },
    };
  },
  io = (e, t) => {
    let n = Ua(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  ao = (e, t) => {
    let n = Wa(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  oo = (e, t) => ({ fn: Ya(e).fn, options: [e, t] }),
  so = (e, t) => {
    let n = Ga(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  co = (e, t) => {
    let n = Ka(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  lo = (e, t) => {
    let n = qa(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  uo = (e, t) => {
    let n = ro(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  fo = `Arrow`,
  po = y.forwardRef((e, t) => {
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
po.displayName = fo;
var mo = po;
function ho(e) {
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
var go = `Popper`,
  [J, _o] = Le(go),
  [vo, yo] = J(go),
  bo = (e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = y.useState(null);
    return (0, I.jsx)(vo, { scope: t, anchor: r, onAnchorChange: i, children: n });
  };
bo.displayName = go;
var xo = `PopperAnchor`,
  So = y.forwardRef((e, t) => {
    let { __scopePopper: n, virtualRef: r, ...i } = e,
      a = yo(xo, n),
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
So.displayName = xo;
var Y = `PopperContent`,
  [Co, wo] = J(Y),
  To = y.forwardRef((e, t) => {
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
      g = yo(Y, n),
      [_, v] = y.useState(null),
      b = Ie(t, (e) => v(e)),
      [x, S] = y.useState(null),
      C = ho(x),
      w = C?.width ?? 0,
      T = C?.height ?? 0,
      E = r + (a === `center` ? `` : `-` + a),
      D = typeof u == `number` ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      O = Array.isArray(l) ? l : [l],
      k = O.length > 0,
      A = { padding: D, boundary: O.filter(ko), altBoundary: k },
      {
        refs: j,
        floatingStyles: M,
        placement: ee,
        isPositioned: N,
        middlewareData: P,
      } = no({
        strategy: `fixed`,
        placement: E,
        whileElementsMounted: (...e) => Ha(...e, { animationFrame: p === `always` }),
        elements: { reference: g.anchor },
        middleware: [
          io({ mainAxis: i + T, alignmentAxis: o }),
          c && ao({ mainAxis: !0, crossAxis: !1, limiter: d === `partial` ? oo() : void 0, ...A }),
          c && so({ ...A }),
          co({
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
          x && uo({ element: x, padding: s }),
          Ao({ arrowWidth: w, arrowHeight: T }),
          f && lo({ strategy: `referenceHidden`, ...A }),
        ],
      }),
      [te, ne] = jo(ee),
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
        children: (0, I.jsx)(Co, {
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
To.displayName = Y;
var Eo = `PopperArrow`,
  Do = { top: `bottom`, right: `left`, bottom: `top`, left: `right` },
  Oo = y.forwardRef(function (e, t) {
    let { __scopePopper: n, ...r } = e,
      i = wo(Eo, n),
      a = Do[i.placedSide];
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
      children: (0, I.jsx)(mo, { ...r, ref: t, style: { ...r.style, display: `block` } }),
    });
  });
Oo.displayName = Eo;
function ko(e) {
  return e !== null;
}
var Ao = (e) => ({
  name: `transformOrigin`,
  options: e,
  fn(t) {
    let { placement: n, rects: r, middlewareData: i } = t,
      a = i.arrow?.centerOffset !== 0,
      o = a ? 0 : e.arrowWidth,
      s = a ? 0 : e.arrowHeight,
      [c, l] = jo(n),
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
function jo(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
var Mo = bo,
  No = So,
  Po = To,
  Fo = Oo,
  Io = Symbol(`radix.slottable`);
function Lo(e) {
  let t = ({ children: e }) => (0, I.jsx)(I.Fragment, { children: e });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Io), t);
}
var [Ro, zo] = Le(`Tooltip`, [_o]),
  Bo = _o(),
  Vo = `TooltipProvider`,
  Ho = 700,
  Uo = `tooltip.open`,
  [Wo, Go] = Ro(Vo),
  Ko = (e) => {
    let {
        __scopeTooltip: t,
        delayDuration: n = Ho,
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
      (0, I.jsx)(Wo, {
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
Ko.displayName = Vo;
var qo = `Tooltip`,
  [Jo, Yo] = Ro(qo),
  Xo = (e) => {
    let {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: s,
      } = e,
      c = Go(qo, e.__scopeTooltip),
      l = Bo(t),
      [u, d] = y.useState(null),
      f = ai(),
      p = y.useRef(0),
      m = o ?? c.disableHoverableContent,
      h = s ?? c.delayDuration,
      g = y.useRef(!1),
      [_, v] = Et({
        prop: r,
        defaultProp: i ?? !1,
        onChange: (e) => {
          (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Uo))) : c.onClose(), a?.(e));
        },
        caller: qo,
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
      (0, I.jsx)(Mo, {
        ...l,
        children: (0, I.jsx)(Jo, {
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
Xo.displayName = qo;
var Zo = `TooltipTrigger`,
  Qo = y.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = Yo(Zo, n),
      a = Go(Zo, n),
      o = Bo(n),
      s = Ie(t, y.useRef(null), i.onTriggerChange),
      c = y.useRef(!1),
      l = y.useRef(!1),
      u = y.useCallback(() => (c.current = !1), []);
    return (
      y.useEffect(() => () => document.removeEventListener(`pointerup`, u), [u]),
      (0, I.jsx)(No, {
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
Qo.displayName = Zo;
var $o = `TooltipPortal`,
  [es, ts] = Ro($o, { forceMount: void 0 }),
  ns = (e) => {
    let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
      a = Yo($o, t);
    return (0, I.jsx)(es, {
      scope: t,
      forceMount: n,
      children: (0, I.jsx)(xt, {
        present: n || a.open,
        children: (0, I.jsx)(yt, { asChild: !0, container: i, children: r }),
      }),
    });
  };
ns.displayName = $o;
var rs = `TooltipContent`,
  is = y.forwardRef((e, t) => {
    let n = ts(rs, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
      o = Yo(rs, e.__scopeTooltip);
    return (0, I.jsx)(xt, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? (0, I.jsx)(ls, { side: i, ...a, ref: t })
        : (0, I.jsx)(as, { side: i, ...a, ref: t }),
    });
  }),
  as = y.forwardRef((e, t) => {
    let n = Yo(rs, e.__scopeTooltip),
      r = Go(rs, e.__scopeTooltip),
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
            i = ps(r, fs(r, n.getBoundingClientRect())),
            a = ms(t.getBoundingClientRect());
          (s(gs([...i, ...a])), d(!0));
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
              i = !hs(n, o);
            r ? f() : i && (f(), l());
          };
          return (
            document.addEventListener(`pointermove`, e),
            () => document.removeEventListener(`pointermove`, e)
          );
        }
      }, [c, u, o, l, f]),
      (0, I.jsx)(ls, { ...e, ref: a })
    );
  }),
  [os, ss] = Ro(qo, { isInside: !1 }),
  cs = Lo(`TooltipContent`),
  ls = y.forwardRef((e, t) => {
    let {
        __scopeTooltip: n,
        children: r,
        'aria-label': i,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        ...s
      } = e,
      c = Yo(rs, n),
      l = Bo(n),
      { onClose: u } = c;
    return (
      y.useEffect(
        () => (document.addEventListener(Uo, u), () => document.removeEventListener(Uo, u)),
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
        children: (0, I.jsxs)(Po, {
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
            (0, I.jsx)(cs, { children: r }),
            (0, I.jsx)(os, {
              scope: n,
              isInside: !0,
              children: (0, I.jsx)(Mt, { id: c.contentId, role: `tooltip`, children: i || r }),
            }),
          ],
        }),
      })
    );
  });
is.displayName = rs;
var us = `TooltipArrow`,
  ds = y.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = Bo(n);
    return ss(us, n).isInside ? null : (0, I.jsx)(Fo, { ...i, ...r, ref: t });
  });
ds.displayName = us;
function fs(e, t) {
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
function ps(e, t, n = 5) {
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
function ms(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function hs(e, t) {
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
function gs(e) {
  let t = e.slice();
  return (
    t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
    _s(t)
  );
}
function _s(e) {
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
var vs = Ko,
  ys = is,
  bs = vs,
  xs = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    (0, I.jsx)(ys, {
      ref: r,
      sideOffset: t,
      className: qr(
        `z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
        e
      ),
      ...n,
    })
  );
xs.displayName = ys.displayName;
var Ss = class {
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
  Cs = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  ws = new (class {
    #e = Cs;
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
function Ts(e) {
  setTimeout(e, 0);
}
var Es = typeof window > `u` || `Deno` in globalThis;
function Ds() {}
function Os(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ks(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function As(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function js(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ms(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ns(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Fs(o, t.options)) return !1;
    } else if (!Ls(t.queryKey, o)) return !1;
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
function Ps(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Is(t.options.mutationKey) !== Is(a)) return !1;
    } else if (!Ls(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Fs(e, t) {
  return (t?.queryKeyHashFn || Is)(e);
}
function Is(e) {
  return JSON.stringify(e, (e, t) =>
    Vs(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t
  );
}
function Ls(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object`
      ? Object.keys(t).every((n) => Ls(e[n], t[n]))
      : !1;
}
var Rs = Object.prototype.hasOwnProperty;
function zs(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Bs(e) && Bs(t);
  if (!r && !(Vs(e) && Vs(t))) return t;
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
      ((s[o] = u), (r ? l < i : Rs.call(e, o)) && c++);
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    let f = zs(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Bs(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Vs(e) {
  if (!Hs(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Hs(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Hs(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Us(e) {
  return new Promise((t) => {
    ws.setTimeout(t, e);
  });
}
function Ws(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : zs(e, t);
}
function Gs(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Ks(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var qs = Symbol();
function Js(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === qs
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Ys(e, t, n) {
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
var Xs = new (class extends Ss {
  #e;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (!Es && window.addEventListener) {
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
function Zs() {
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
var Qs = Ts;
function $s() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Qs,
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
var ec = $s(),
  tc = new (class extends Ss {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!Es && window.addEventListener) {
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
function nc(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function rc(e) {
  return (e ?? `online`) === `online` ? tc.isOnline() : !0;
}
var ic = class extends Error {
  constructor(e) {
    (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function ac(e) {
  let t = !1,
    n = 0,
    r,
    i = Zs(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new ic(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => Xs.isFocused() && (e.networkMode === `always` || tc.isOnline()) && e.canRun(),
    u = () => rc(e.networkMode) && e.canRun(),
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
          let i = e.retry ?? (Es ? 0 : 3),
            o = e.retryDelay ?? nc,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            Us(s)
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
var oc = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        ks(this.gcTime) &&
          (this.#e = ws.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (Es ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e &&= (ws.clearTimeout(this.#e), void 0);
    }
  },
  sc = class extends oc {
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
        (this.#e = uc(this.options)),
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
        let e = uc(this.options);
        e.data !== void 0 && (this.setState(lc(e.data, e.dataUpdatedAt)), (this.#e = e));
      }
    }
    optionalRemove() {
      !this.observers.length && this.state.fetchStatus === `idle` && this.#n.remove(this);
    }
    setData(e, t) {
      let n = Ws(this.state.data, e, this.options);
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
      return (this.#i?.cancel(e), t ? t.then(Ds).catch(Ds) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((e) => Ms(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === qs ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => js(e.options.staleTime, this) === `static`)
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
            : !As(this.state.dataUpdatedAt, e);
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
          let e = Js(this.options, t),
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
        (this.#i = ac({
          initialPromise: t?.initialPromise,
          fn: a.fetchFn,
          onCancel: (e) => {
            (e instanceof ic && e.revert && this.setState({ ...this.#t, fetchStatus: `idle` }),
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
        if (e instanceof ic) {
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
            return { ...t, ...cc(t.data, this.options), fetchMeta: e.meta ?? null };
          case `success`:
            let n = {
              ...t,
              ...lc(e.data, e.dataUpdatedAt),
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
        ec.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: `updated`, action: e }));
        }));
    }
  };
function cc(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: rc(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function lc(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function uc(e) {
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
function dc(e) {
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
              Ys(
                e,
                () => t.signal,
                () => (n = !0)
              );
            },
            u = Js(t.options, t.fetchOptions),
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
                s = i ? Ks : Gs;
              return { pages: s(e.pages, a, o), pageParams: s(e.pageParams, r, o) };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? pc : fc,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : fc(r, s);
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
function fc(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function pc(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var X = class extends oc {
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
      (this.state = e.state || mc()),
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
    this.#r = ac({
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
      ec.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function mc() {
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
var hc = class extends Ss {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new X({
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
    let t = gc(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = gc(e);
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
    let t = gc(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = gc(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    ec.batch(() => {
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
    return this.getAll().find((e) => Ps(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Ps(e, t));
  }
  notify(e) {
    ec.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return ec.batch(() => Promise.all(e.map((e) => e.continue().catch(Ds))));
  }
};
function gc(e) {
  return e.options.scope?.id;
}
var _c = class extends Ss {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Fs(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new sc({
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
      ec.batch(() => {
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
      return this.getAll().find((e) => Ns(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Ns(e, t)) : t;
    }
    notify(e) {
      ec.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      ec.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      ec.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  vc = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new _c()),
        (this.#t = e.mutationCache || new hc()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = Xs.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = tc.subscribe(async (e) => {
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
        : (e.revalidateIfStale && n.isStaleByTime(js(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Os(t, i);
      if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return ec.batch(() =>
        this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      ec.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return ec.batch(
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
        r = ec.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Ds).catch(Ds);
    }
    invalidateQueries(e, t = {}) {
      return ec.batch(
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
        r = ec.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Ds)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            })
        );
      return Promise.all(r).then(Ds);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(js(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Ds).catch(Ds);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = dc(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Ds).catch(Ds);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = dc(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return tc.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
      this.#r.set(Is(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Ls(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Is(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Ls(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        (t.queryHash ||= Fs(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === qs && (t.enabled = !1),
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
  yc = y.createContext(void 0),
  bc = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    (0, I.jsx)(yc.Provider, { value: e, children: t })
  );
function xc() {
  return (
    (xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xc.apply(this, arguments)
  );
}
var Sc;
(function (e) {
  ((e.Pop = `POP`), (e.Push = `PUSH`), (e.Replace = `REPLACE`));
})((Sc ||= {}));
var Cc = `popstate`;
function wc(e) {
  e === void 0 && (e = {});
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return kc(
      ``,
      { pathname: n, search: r, hash: i },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : Ac(t);
  }
  return Mc(t, n, null, e);
}
function Tc(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function Ec(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function Dc() {
  return Math.random().toString(36).substr(2, 8);
}
function Oc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function kc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    xc(
      { pathname: typeof e == `string` ? e : e.pathname, search: ``, hash: `` },
      typeof t == `string` ? jc(t) : t,
      { state: n, key: (t && t.key) || r || Dc() }
    )
  );
}
function Ac(e) {
  let { pathname: t = `/`, search: n = ``, hash: r = `` } = e;
  return (
    n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r),
    t
  );
}
function jc(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e));
  }
  return t;
}
function Mc(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = Sc.Pop,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState(xc({}, o.state, { idx: l }), ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = Sc.Pop;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = Sc.Push;
    let r = kc(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = Oc(r, l),
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
    s = Sc.Replace;
    let r = kc(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = Oc(r, l),
      d = h.createHref(r);
    (o.replaceState(i, ``, d), a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    let t = i.location.origin === `null` ? i.location.href : i.location.origin,
      n = typeof e == `string` ? e : Ac(e);
    return (
      (n = n.replace(/ $/, `%20`)),
      Tc(t, `No window.location.(origin|href) available to create URL for href: ` + n),
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
        i.addEventListener(Cc, d),
        (c = e),
        () => {
          (i.removeEventListener(Cc, d), (c = null));
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
var Nc;
(function (e) {
  ((e.data = `data`), (e.deferred = `deferred`), (e.redirect = `redirect`), (e.error = `error`));
})((Nc ||= {}));
function Pc(e, t, n) {
  return (n === void 0 && (n = `/`), Fc(e, t, n, !1));
}
function Fc(e, t, n, r) {
  let i = Zc((typeof t == `string` ? jc(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = Ic(e);
  Rc(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = Xc(i);
    o = qc(a[e], t, r);
  }
  return o;
}
function Ic(e, t, n, r) {
  (t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ``));
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (Tc(
        o.relativePath.startsWith(r),
        `Absolute route path "` +
          o.relativePath +
          `" nested under path ` +
          (`"` + r + `" is not valid. An absolute child route path `) +
          `must start with the combined path of all its parent routes.`
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = Qc([r, o.relativePath]),
      c = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (Tc(
        e.index !== !0,
        `Index routes must not have child routes. Please remove ` +
          (`all child routes from route path "` + s + `".`)
      ),
      Ic(e.children, t, c, s)),
      !(e.path == null && !e.index) && t.push({ path: s, score: Gc(s, e.index), routesMeta: c }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
      else for (let n of Lc(e.path)) i(e, t, n);
    }),
    t
  );
}
function Lc(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = Lc(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function Rc(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? Kc(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex)
        )
      : t.score - e.score
  );
}
var zc = /^:[\w-]+$/,
  Bc = 3,
  Vc = 2,
  Hc = 1,
  Z = 10,
  Uc = -2,
  Wc = (e) => e === `*`;
function Gc(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(Wc) && (r += Uc),
    t && (r += Vc),
    n.filter((e) => !Wc(e)).reduce((e, t) => e + (zc.test(t) ? Bc : t === `` ? Hc : Z), r)
  );
}
function Kc(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function qc(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = Jc({ path: s.relativePath, caseSensitive: s.caseSensitive, end: c }, l),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = Jc({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, l)),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: Qc([a, u.pathname]),
        pathnameBase: $c(Qc([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = Qc([a, u.pathnameBase])));
  }
  return o;
}
function Jc(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Yc(e.path, e.caseSensitive, e.end),
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
function Yc(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ec(
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
function Xc(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      Ec(
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
function Zc(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var Qc = (e) => e.join(`/`).replace(/\/\/+/g, `/`),
  $c = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`);
function el(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
var nl = y.createContext(null),
  rl = y.createContext(null),
  il = y.createContext(null),
  al = y.createContext(null),
  ol = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  sl = y.createContext(null);
function cl() {
  return y.useContext(al) != null;
}
function ll() {
  return (!cl() && Tc(!1), y.useContext(al).location);
}
function ul(e, t) {
  return dl(e, t);
}
function dl(e, t, n, r) {
  !cl() && Tc(!1);
  let { navigator: i } = y.useContext(il),
    { matches: a } = y.useContext(ol),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : `/`;
  o && o.route;
  let l = ll(),
    u;
  if (t) {
    let e = typeof t == `string` ? jc(t) : t;
    (!(c === `/` || e.pathname?.startsWith(c)) && Tc(!1), (u = e));
  } else u = l;
  let d = u.pathname || `/`,
    f = d;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    f = `/` + d.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let p = Pc(e, { pathname: f }),
    m = gl(
      p &&
        p.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: Qc([
              c,
              i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname,
            ]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : Qc([
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
        al.Provider,
        {
          value: {
            location: tl({ pathname: `/`, search: ``, hash: ``, state: null, key: `default` }, u),
            navigationType: Sc.Pop,
          },
        },
        m
      )
    : m;
}
function fl() {
  let e = xl(),
    t = el(e) ? e.status + ` ` + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
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
var pl = y.createElement(fl, null),
  ml = class extends y.Component {
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
            ol.Provider,
            { value: this.props.routeContext },
            y.createElement(sl.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          );
    }
  };
function hl(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = y.useContext(nl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(ol.Provider, { value: t }, r)
  );
}
function gl(e, t, n, r) {
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
    (!(e >= 0) && Tc(!1), (a = a.slice(0, Math.min(a.length, e + 1))));
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
      (d = r.route.errorElement || pl),
      s &&
        (c < 0 && i === 0
          ? (Cl(
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
          y.createElement(hl, {
            match: r,
            routeContext: { outlet: e, matches: p, isDataRoute: n != null },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)
      ? y.createElement(ml, {
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
var _l = (function (e) {
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
})(_l || {});
function vl(e) {
  let t = y.useContext(rl);
  return (!t && Tc(!1), t);
}
function yl(e) {
  let t = y.useContext(ol);
  return (!t && Tc(!1), t);
}
function bl(e) {
  let t = yl(e),
    n = t.matches[t.matches.length - 1];
  return (!n.route.id && Tc(!1), n.route.id);
}
function xl() {
  let e = y.useContext(sl),
    t = vl(_l.UseRouteError),
    n = bl(_l.UseRouteError);
  return e === void 0 ? t.errors?.[n] : e;
}
var Sl = {};
function Cl(e, t, n) {
  !t && !Sl[e] && (Sl[e] = !0);
}
var wl = (e, t, n) => (
  `` +
    t +
    ('You can use the `' + e + '` future flag to opt-in early. ') +
    (`For more information, see ` + n + `.`),
  void 0
);
function Tl(e, t) {
  (e?.v7_startTransition === void 0 &&
    wl(
      `v7_startTransition`,
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      `https://reactrouter.com/v6/upgrading/future#v7_starttransition`
    ),
    e?.v7_relativeSplatPath === void 0 &&
      (!t || t.v7_relativeSplatPath === void 0) &&
      wl(
        `v7_relativeSplatPath`,
        `Relative route resolution within Splat routes is changing in v7`,
        `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        wl(
          `v7_fetcherPersist`,
          `The persistence behavior of fetchers is changing in v7`,
          `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`
        ),
      t.v7_normalizeFormMethod === void 0 &&
        wl(
          `v7_normalizeFormMethod`,
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`
        ),
      t.v7_partialHydration === void 0 &&
        wl(
          `v7_partialHydration`,
          '`RouterProvider` hydration behavior is changing in v7',
          `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        wl(
          `v7_skipActionErrorRevalidation`,
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`
        )));
}
y.startTransition;
function El(e) {
  Tc(!1);
}
function Dl(e) {
  let {
    basename: t = `/`,
    children: n = null,
    location: r,
    navigationType: i = Sc.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  cl() && Tc(!1);
  let c = t.replace(/^\/*/, `/`),
    l = y.useMemo(
      () => ({ basename: c, navigator: a, static: o, future: tl({ v7_relativeSplatPath: !1 }, s) }),
      [c, s, a, o]
    );
  typeof r == `string` && (r = jc(r));
  let { pathname: u = `/`, search: d = ``, hash: f = ``, state: p = null, key: m = `default` } = r,
    h = y.useMemo(() => {
      let e = Zc(u, c);
      return e == null
        ? null
        : { location: { pathname: e, search: d, hash: f, state: p, key: m }, navigationType: i };
    }, [c, u, d, f, p, m, i]);
  return h == null
    ? null
    : y.createElement(
        il.Provider,
        { value: l },
        y.createElement(al.Provider, { children: n, value: h })
      );
}
function Ol(e) {
  let { children: t, location: n } = e;
  return ul(kl(t), n);
}
new Promise(() => {});
function kl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (e, r) => {
      if (!y.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === y.Fragment) {
        n.push.apply(n, kl(e.props.children, i));
        return;
      }
      (e.type !== El && Tc(!1), !(!e.props.index || !e.props.children) && Tc(!1));
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
      (e.props.children && (a.children = kl(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var Al = `6`;
try {
  window.__reactRouterVersion = Al;
} catch {}
var jl = y.startTransition;
(T.flushSync, y.useId);
function Ml(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = y.useRef();
  a.current ??= wc({ window: i, v5Compat: !0 });
  let o = a.current,
    [s, c] = y.useState({ action: o.action, location: o.location }),
    { v7_startTransition: l } = r || {},
    u = y.useCallback(
      (e) => {
        l && jl ? jl(() => c(e)) : c(e);
      },
      [c, l]
    );
  return (
    y.useLayoutEffect(() => o.listen(u), [o, u]),
    y.useEffect(() => Tl(r), [r]),
    y.createElement(Dl, {
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
var Nl;
(function (e) {
  ((e.UseScrollRestoration = `useScrollRestoration`),
    (e.UseSubmit = `useSubmit`),
    (e.UseSubmitFetcher = `useSubmitFetcher`),
    (e.UseFetcher = `useFetcher`),
    (e.useViewTransitionState = `useViewTransitionState`));
})((Nl ||= {}));
var Pl;
(function (e) {
  ((e.UseFetcher = `useFetcher`),
    (e.UseFetchers = `useFetchers`),
    (e.UseScrollRestoration = `useScrollRestoration`));
})((Pl ||= {}));
var Fl = (0, y.createContext)({});
function Il(e) {
  let t = (0, y.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var Ll = (0, y.createContext)(null),
  Rl = (0, y.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` }),
  zl = class extends y.Component {
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
function Bl({ children: e, isPresent: t }) {
  let n = (0, y.useId)(),
    r = (0, y.useRef)(null),
    i = (0, y.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: a } = (0, y.useContext)(Rl);
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
    (0, I.jsx)(zl, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: y.cloneElement(e, { ref: r }),
    })
  );
}
var Vl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = Il(Hl),
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
    o === `popLayout` && (e = (0, I.jsx)(Bl, { isPresent: n, children: e })),
    (0, I.jsx)(Ll.Provider, { value: u, children: e })
  );
};
function Hl() {
  return new Map();
}
function Ul(e = !0) {
  let t = (0, y.useContext)(Ll);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, y.useId)();
  (0, y.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, y.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var Wl = (e) => e.key || ``;
function Gl(e) {
  let t = [];
  return (
    y.Children.forEach(e, (e) => {
      (0, y.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var Kl = typeof window < `u`,
  ql = Kl ? y.useLayoutEffect : y.useEffect,
  Jl = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
  }) => {
    let [s, c] = Ul(o),
      l = (0, y.useMemo)(() => Gl(e), [e]),
      u = o && !s ? [] : l.map(Wl),
      d = (0, y.useRef)(!0),
      f = (0, y.useRef)(l),
      p = Il(() => new Map()),
      [m, h] = (0, y.useState)(l),
      [g, _] = (0, y.useState)(l);
    ql(() => {
      ((d.current = !1), (f.current = l));
      for (let e = 0; e < g.length; e++) {
        let t = Wl(g[e]);
        u.includes(t) ? p.delete(t) : p.get(t) !== !0 && p.set(t, !1);
      }
    }, [g, u.length, u.join(`-`)]);
    let v = [];
    if (l !== m) {
      let e = [...l];
      for (let t = 0; t < g.length; t++) {
        let n = g[t],
          r = Wl(n);
        u.includes(r) || (e.splice(t, 0, n), v.push(n));
      }
      (a === `wait` && v.length && (e = v), _(Gl(e)), h(l));
      return;
    }
    let { forceRender: b } = (0, y.useContext)(Fl);
    return (0, I.jsx)(I.Fragment, {
      children: g.map((e) => {
        let m = Wl(e),
          h = o && !s ? !1 : l === g || u.includes(m);
        return (0, I.jsx)(
          Vl,
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
  Yl = (e) => e,
  Xl = Yl,
  Zl = Yl;
function Ql(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var $l = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  eu = (e) => e * 1e3,
  tu = (e) => e / 1e3,
  nu = { skipAnimations: !1, useManualTiming: !1 };
function ru(e) {
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
var iu = [`read`, `resolveKeyframes`, `update`, `preRender`, `render`, `postRender`],
  au = 40;
function ou(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = iu.reduce((e, t) => ((e[t] = ru(a)), e), {}),
    { read: s, resolveKeyframes: c, update: l, preRender: u, render: d, postRender: f } = o,
    p = () => {
      let a = nu.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, au), 1)),
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
    schedule: iu.reduce((e, t) => {
      let r = o[t];
      return ((e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))), e);
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < iu.length; t++) o[iu[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: Q,
    cancel: su,
    state: cu,
    steps: lu,
  } = ou(typeof requestAnimationFrame < `u` ? requestAnimationFrame : Yl, !0),
  uu = (0, y.createContext)({ strict: !1 }),
  du = {
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
  fu = {};
for (let e in du) fu[e] = { isEnabled: (t) => du[e].some((e) => !!t[e]) };
function pu(e) {
  for (let t in e) fu[t] = { ...fu[t], ...e[t] };
}
var mu = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`
  )
);
function hu(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    mu.has(e)
  );
}
var gu = c({ default: () => _u }),
  _u,
  vu = o(() => {
    throw (
      (_u = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`
      )
    );
  }),
  yu = (e) => !hu(e);
function bu(e) {
  e && (yu = (t) => (t.startsWith(`on`) ? !hu(t) : e(t)));
}
try {
  bu((vu(), d(gu)).default);
} catch {}
function xu(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      ((yu(i) ||
        (n === !0 && hu(i)) ||
        (!t && !hu(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
function Su(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) => (r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r))),
  });
}
var Cu = (0, y.createContext)({});
function wu(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Tu(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var Eu = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `exit`],
  Du = [`initial`, ...Eu];
function Ou(e) {
  return Tu(e.animate) || Du.some((t) => wu(e[t]));
}
function ku(e) {
  return !!(Ou(e) || e.variants);
}
function Au(e, t) {
  if (Ou(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || wu(t) ? t : void 0, animate: wu(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function ju(e) {
  let { initial: t, animate: n } = Au(e, (0, y.useContext)(Cu));
  return (0, y.useMemo)(() => ({ initial: t, animate: n }), [Mu(t), Mu(n)]);
}
function Mu(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Nu = Symbol.for(`motionComponentSymbol`);
function Pu(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function Fu(e, t, n) {
  return (0, y.useCallback)(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : Pu(n) && (n.current = r)));
    },
    [t]
  );
}
var Iu = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  Lu = `data-` + Iu(`framerAppearId`),
  { schedule: Ru, cancel: zu } = ou(queueMicrotask, !1),
  Bu = (0, y.createContext)({});
function Vu(e, t, n, r, i) {
  let { visualElement: a } = (0, y.useContext)(Cu),
    o = (0, y.useContext)(uu),
    s = (0, y.useContext)(Ll),
    c = (0, y.useContext)(Rl).reducedMotion,
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
    d = (0, y.useContext)(Bu);
  u && !u.projection && i && (u.type === `html` || u.type === `svg`) && Hu(l.current, n, i, d);
  let f = (0, y.useRef)(!1);
  (0, y.useInsertionEffect)(() => {
    u && f.current && u.update(n, s);
  });
  let p = n[Lu],
    m = (0, y.useRef)(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p)
    );
  return (
    ql(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        Ru.render(u.render),
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
function Hu(e, t, n, r) {
  let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : Uu(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Pu(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function Uu(e) {
  if (e) return e.options.allowProjection === !1 ? Uu(e.parent) : e.projection;
}
function Wu({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && pu(e);
  function a(a, o) {
    let s,
      c = { ...(0, y.useContext)(Rl), ...a, layoutId: Gu(a) },
      { isStatic: l } = c,
      u = ju(a),
      d = r(a, l);
    if (!l && Kl) {
      Ku(c, e);
      let n = qu(c);
      ((s = n.MeasureLayout), (u.visualElement = Vu(i, d, c, t, n.ProjectionNode)));
    }
    return (0, I.jsxs)(Cu.Provider, {
      value: u,
      children: [
        s && u.visualElement ? (0, I.jsx)(s, { visualElement: u.visualElement, ...c }) : null,
        n(i, a, Fu(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`}`;
  let o = (0, y.forwardRef)(a);
  return ((o[Nu] = i), o);
}
function Gu({ layoutId: e }) {
  let t = (0, y.useContext)(Fl).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Ku(e, t) {
  (0, y.useContext)(uu).strict;
}
function qu(e) {
  let { drag: t, layout: n } = fu;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var Ju = [
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
function Yu(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(Ju.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Xu(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Zu(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = Xu(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if ((typeof t == `string` && (t = e.variants && e.variants[t]), typeof t == `function`)) {
    let [i, a] = Xu(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var Qu = (e) => Array.isArray(e),
  $u = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  ed = (e) => (Qu(e) ? e[e.length - 1] || 0 : e),
  td = (e) => !!(e && e.getVelocity);
function nd(e) {
  let t = td(e) ? e.get() : e;
  return $u(t) ? t.toValue() : t;
}
function rd({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, a) {
  let o = { latestValues: ad(r, i, a, e), renderState: t() };
  return (
    n && ((o.onMount = (e) => n({ props: r, current: e, ...o })), (o.onUpdate = (e) => n(e))),
    o
  );
}
var id = (e) => (t, n) => {
  let r = (0, y.useContext)(Cu),
    i = (0, y.useContext)(Ll),
    a = () => rd(e, t, r, i);
  return n ? a() : Il(a);
};
function ad(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = nd(a[e]);
  let { initial: o, animate: s } = e,
    c = Ou(e),
    l = ku(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Tu(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Zu(e, t[n]);
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
var od = [
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
  sd = new Set(od),
  cd = (e) => (t) => typeof t == `string` && t.startsWith(e),
  ld = cd(`--`),
  ud = cd(`var(--`),
  dd = (e) => (ud(e) ? fd.test(e.split(`/*`)[0].trim()) : !1),
  fd = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  pd = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  md = (e, t, n) => (n > t ? t : n < e ? e : n),
  hd = { test: (e) => typeof e == `number`, parse: parseFloat, transform: (e) => e },
  gd = { ...hd, transform: (e) => md(0, 1, e) },
  _d = { ...hd, default: 1 },
  vd = (e) => ({
    test: (t) => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  yd = vd(`deg`),
  bd = vd(`%`),
  $ = vd(`px`),
  xd = vd(`vh`),
  Sd = vd(`vw`),
  Cd = { ...bd, parse: (e) => bd.parse(e) / 100, transform: (e) => bd.transform(e * 100) },
  wd = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    backgroundPositionX: $,
    backgroundPositionY: $,
  },
  Td = {
    rotate: yd,
    rotateX: yd,
    rotateY: yd,
    rotateZ: yd,
    scale: _d,
    scaleX: _d,
    scaleY: _d,
    scaleZ: _d,
    skew: yd,
    skewX: yd,
    skewY: yd,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: gd,
    originX: Cd,
    originY: Cd,
    originZ: $,
  },
  Ed = { ...hd, transform: Math.round },
  Dd = { ...wd, ...Td, zIndex: Ed, size: $, fillOpacity: gd, strokeOpacity: gd, numOctaves: Ed },
  Od = { x: `translateX`, y: `translateY`, z: `translateZ`, transformPerspective: `perspective` },
  kd = od.length;
function Ad(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < kd; a++) {
    let o = od[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c = typeof s == `number` ? s === (o.startsWith(`scale`) ? 1 : 0) : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = pd(s, Dd[o]);
      if (!c) {
        i = !1;
        let t = Od[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function jd(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (sd.has(e)) {
      o = !0;
      continue;
    } else if (ld(e)) {
      i[e] = n;
      continue;
    } else {
      let t = pd(n, Dd[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform || (o || n ? (r.transform = Ad(t, e.transform, n)) : (r.transform &&= `none`)), s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var Md = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  Nd = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Pd(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Md : Nd;
  e[a.offset] = $.transform(-r);
  let o = $.transform(t),
    s = $.transform(n);
  e[a.array] = `${o} ${s}`;
}
function Fd(e, t, n) {
  return typeof e == `string` ? e : $.transform(t + n * e);
}
function Id(e, t, n) {
  return `${Fd(t, e.x, e.width)} ${Fd(n, e.y, e.height)}`;
}
function Ld(
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
  if ((jd(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = Id(m, i === void 0 ? 0.5 : i, a === void 0 ? 0.5 : a)),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && Pd(f, o, s, c, !1));
}
var Rd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  zd = () => ({ ...Rd(), attrs: {} }),
  Bd = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function Vd(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var Hd = new Set([
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
function Ud(e, t, n, r) {
  Vd(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(Hd.has(n) ? n : Iu(n), t.attrs[n]);
}
var Wd = {};
function Gd(e) {
  Object.assign(Wd, e);
}
function Kd(e, { layout: t, layoutId: n }) {
  return (
    sd.has(e) || e.startsWith(`origin`) || ((t || n !== void 0) && (!!Wd[e] || e === `opacity`))
  );
}
function qd(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (td(r[a]) || (t.style && td(t.style[a])) || Kd(a, e) || n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function Jd(e, t, n) {
  let r = qd(e, t, n);
  for (let n in e)
    if (td(e[n]) || td(t[n])) {
      let t = od.indexOf(n) === -1 ? n : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function Yd(e, t) {
  try {
    t.dimensions = typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var Xd = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  Zd = {
    useVisualState: id({
      scrapeMotionValuesFromProps: Jd,
      createRenderState: zd,
      onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (sd.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < Xd.length; n++) {
            let r = Xd[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          Q.read(() => {
            (Yd(n, r),
              Q.render(() => {
                (Ld(r, i, Bd(n.tagName), e.transformTemplate), Ud(n, r));
              }));
          });
      },
    }),
  },
  Qd = { useVisualState: id({ scrapeMotionValuesFromProps: qd, createRenderState: Rd }) };
function $d(e, t, n) {
  for (let r in t) !td(t[r]) && !Kd(r, n) && (e[r] = t[r]);
}
function ef({ transformTemplate: e }, t) {
  return (0, y.useMemo)(() => {
    let n = Rd();
    return (jd(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function tf(e, t) {
  let n = e.style || {},
    r = {};
  return ($d(r, n, e), Object.assign(r, ef(e, t)), r);
}
function nf(e, t) {
  let n = {},
    r = tf(e, t);
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
function rf(e, t, n, r) {
  let i = (0, y.useMemo)(() => {
    let n = zd();
    return (Ld(n, t, Bd(r), e.transformTemplate), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    ($d(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function af(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (Yu(t) ? rf : nf)(n, i, a, t),
      s = xu(n, typeof t == `string`, e),
      c = t === y.Fragment ? {} : { ...s, ...o, ref: r },
      { children: l } = n,
      u = (0, y.useMemo)(() => (td(l) ? l.get() : l), [l]);
    return (0, y.createElement)(t, { ...c, children: u });
  };
}
function of(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return Wu({
      ...(Yu(n) ? Zd : Qd),
      preloadedFeatures: e,
      useRender: af(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function sf(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function cf(e, t, n) {
  let r = e.getProps();
  return Zu(r, t, n === void 0 ? r.custom : n, e);
}
var lf = Ql(() => window.ScrollTimeline !== void 0),
  uf = class {
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
        if (lf() && n.attachTimeline) return n.attachTimeline(e);
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
  df = class extends uf {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function ff(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var pf = 2e4;
function mf(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function hf(e) {
  return typeof e == `function`;
}
function gf(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var _f = (e) => Array.isArray(e) && typeof e[0] == `number`,
  vf = { linearEasing: void 0 };
function yf(e, t) {
  let n = Ql(e);
  return () => vf[t] ?? n();
}
var bf = yf(() => {
    try {
      document.createElement(`div`).animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  xf = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e($l(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Sf(e) {
  return !!(
    (typeof e == `function` && bf()) ||
    !e ||
    (typeof e == `string` && (e in wf || bf())) ||
    _f(e) ||
    (Array.isArray(e) && e.every(Sf))
  );
}
var Cf = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  wf = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Cf([0, 0.65, 0.55, 1]),
    circOut: Cf([0.55, 0, 1, 0.45]),
    backIn: Cf([0.31, 0.01, 0.66, -0.59]),
    backOut: Cf([0.33, 1.53, 0.69, 0.99]),
  };
function Tf(e, t) {
  if (e)
    return typeof e == `function` && bf()
      ? xf(e, t)
      : _f(e)
        ? Cf(e)
        : Array.isArray(e)
          ? e.map((e) => Tf(e, t) || wf.easeOut)
          : wf[e];
}
var Ef = { x: !1, y: !1 };
function Df() {
  return Ef.x || Ef.y;
}
function Of(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function kf(e, t) {
  let n = Of(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Af(e) {
  return (t) => {
    t.pointerType === `touch` || Df() || e(t);
  };
}
function jf(e, t, n = {}) {
  let [r, i, a] = kf(e, n),
    o = Af((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = Af((e) => {
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
var Mf = (e, t) => (t ? (e === t ? !0 : Mf(e, t.parentElement)) : !1),
  Nf = (e) =>
    e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== !1,
  Pf = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Ff(e) {
  return Pf.has(e.tagName) || e.tabIndex !== -1;
}
var If = new WeakSet();
function Lf(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function Rf(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }));
}
var zf = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Lf(() => {
    if (If.has(n)) return;
    Rf(n, `down`);
    let e = Lf(() => {
      Rf(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t), n.addEventListener(`blur`, () => Rf(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function Bf(e) {
  return Nf(e) && !Df();
}
function Vf(e, t, n = {}) {
  let [r, i, a] = kf(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Bf(e) || If.has(r)) return;
      If.add(r);
      let a = t(e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            !(!Bf(e) || !If.has(r)) &&
              (If.delete(r), typeof a == `function` && a(e, { success: t })));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || Mf(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i), window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      (!Ff(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => zf(e, i), i));
    }),
    a
  );
}
function Hf(e) {
  return e === `x` || e === `y`
    ? Ef[e]
      ? null
      : ((Ef[e] = !0),
        () => {
          Ef[e] = !1;
        })
    : Ef.x || Ef.y
      ? null
      : ((Ef.x = Ef.y = !0),
        () => {
          Ef.x = Ef.y = !1;
        });
}
var Uf = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...od]),
  Wf;
function Gf() {
  Wf = void 0;
}
var Kf = {
  now: () => (
    Wf === void 0 &&
      Kf.set(cu.isProcessing || nu.useManualTiming ? cu.timestamp : performance.now()),
    Wf
  ),
  set: (e) => {
    ((Wf = e), queueMicrotask(Gf));
  },
};
function qf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Jf(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var Yf = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (qf(this.subscriptions, e), () => Jf(this.subscriptions, e));
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
function Xf(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var Zf = 30,
  Qf = (e) => !isNaN(parseFloat(e)),
  $f = { current: void 0 },
  ep = class {
    constructor(e, t = {}) {
      ((this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = Kf.now();
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
        (this.updatedAt = Kf.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = Qf(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Yf());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              Q.read(() => {
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
      return ($f.current && $f.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Kf.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Zf)
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Zf);
      return Xf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
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
function tp(e, t) {
  return new ep(e, t);
}
function np(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tp(n));
}
function rp(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = cf(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) np(e, t, ed(i[t]));
}
function ip(e) {
  return !!(td(e) && e.add);
}
function ap(e, t) {
  let n = e.getValue(`willChange`);
  if (ip(n)) return n.add(t);
}
function op(e) {
  return e.props[Lu];
}
var sp = { current: !1 },
  cp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  lp = 1e-7,
  up = 12;
function dp(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = cp(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > lp && ++s < up);
  return o;
}
function fp(e, t, n, r) {
  if (e === t && n === r) return Yl;
  let i = (t) => dp(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : cp(i(e), t, r));
}
var pp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  mp = (e) => (t) => 1 - e(1 - t),
  hp = fp(0.33, 1.53, 0.69, 0.99),
  gp = mp(hp),
  _p = pp(gp),
  vp = (e) => ((e *= 2) < 1 ? 0.5 * gp(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  yp = (e) => 1 - Math.sin(Math.acos(e)),
  bp = mp(yp),
  xp = pp(yp),
  Sp = (e) => /^0[^.\s]+$/u.test(e);
function Cp(e) {
  return typeof e == `number` ? e === 0 : e === null ? !0 : e === `none` || e === `0` || Sp(e);
}
var wp = (e) => Math.round(e * 1e5) / 1e5,
  Tp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ep(e) {
  return e == null;
}
var Dp =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Op = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Dp.test(n) && n.startsWith(e)) ||
      (t && !Ep(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  kp = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Tp);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Ap = (e) => md(0, 255, e),
  jp = { ...hd, transform: (e) => Math.round(Ap(e)) },
  Mp = {
    test: Op(`rgb`, `red`),
    parse: kp(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      jp.transform(e) +
      `, ` +
      jp.transform(t) +
      `, ` +
      jp.transform(n) +
      `, ` +
      wp(gd.transform(r)) +
      `)`,
  };
function Np(e) {
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
var Pp = { test: Op(`#`), parse: Np, transform: Mp.transform },
  Fp = {
    test: Op(`hsl`, `hue`),
    parse: kp(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      bd.transform(wp(t)) +
      `, ` +
      bd.transform(wp(n)) +
      `, ` +
      wp(gd.transform(r)) +
      `)`,
  },
  Ip = {
    test: (e) => Mp.test(e) || Pp.test(e) || Fp.test(e),
    parse: (e) => (Mp.test(e) ? Mp.parse(e) : Fp.test(e) ? Fp.parse(e) : Pp.parse(e)),
    transform: (e) =>
      typeof e == `string` ? e : e.hasOwnProperty(`red`) ? Mp.transform(e) : Fp.transform(e),
  },
  Lp =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Rp(e) {
  return (
    isNaN(e) && typeof e == `string` && (e.match(Tp)?.length || 0) + (e.match(Lp)?.length || 0) > 0
  );
}
var zp = `number`,
  Bp = `color`,
  Vp = `var`,
  Hp = `var(`,
  Up = '${}',
  Wp =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Gp(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Wp,
        (e) => (
          Ip.test(e)
            ? (r.color.push(a), i.push(Bp), n.push(Ip.parse(e)))
            : e.startsWith(Hp)
              ? (r.var.push(a), i.push(Vp), n.push(e))
              : (r.number.push(a), i.push(zp), n.push(parseFloat(e))),
          ++a,
          Up
        )
      )
      .split(Up),
    indexes: r,
    types: i,
  };
}
function Kp(e) {
  return Gp(e).values;
}
function qp(e) {
  let { split: t, types: n } = Gp(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        t === zp ? (i += wp(e[a])) : t === Bp ? (i += Ip.transform(e[a])) : (i += e[a]);
      }
    return i;
  };
}
var Jp = (e) => (typeof e == `number` ? 0 : e);
function Yp(e) {
  let t = Kp(e);
  return qp(e)(t.map(Jp));
}
var Xp = { test: Rp, parse: Kp, createTransformer: qp, getAnimatableNone: Yp },
  Zp = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Qp(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Tp) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = Zp.has(t) ? 1 : 0;
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var $p = /\b([a-z-]*)\(.*?\)/gu,
  em = {
    ...Xp,
    getAnimatableNone: (e) => {
      let t = e.match($p);
      return t ? t.map(Qp).join(` `) : e;
    },
  },
  tm = {
    ...Dd,
    color: Ip,
    backgroundColor: Ip,
    outlineColor: Ip,
    fill: Ip,
    stroke: Ip,
    borderColor: Ip,
    borderTopColor: Ip,
    borderRightColor: Ip,
    borderBottomColor: Ip,
    borderLeftColor: Ip,
    filter: em,
    WebkitFilter: em,
  },
  nm = (e) => tm[e];
function rm(e, t) {
  let n = nm(e);
  return (n !== em && (n = Xp), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0);
}
var im = new Set([`auto`, `none`, `0`]);
function am(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !im.has(t) && Gp(t).values.length && (i = e[r]), r++);
  }
  if (i && n) for (let r of t) e[r] = rm(n, i);
}
var om = (e) => e === hd || e === $,
  sm = (e, t) => parseFloat(e.split(`, `)[t]),
  cm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return sm(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? sm(t[1], e) : 0;
      }
    },
  lm = new Set([`x`, `y`, `z`]),
  um = od.filter((e) => !lm.has(e));
function dm(e) {
  let t = [];
  return (
    um.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith(`scale`) ? 1 : 0));
    }),
    t
  );
}
var fm = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: cm(4, 13),
  y: cm(5, 14),
};
((fm.translateX = fm.x), (fm.translateY = fm.y));
var pm = new Set(),
  mm = !1,
  hm = !1;
function gm() {
  if (hm) {
    let e = Array.from(pm).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = dm(e);
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
  ((hm = !1), (mm = !1), pm.forEach((e) => e.complete()), pm.clear());
}
function _m() {
  pm.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (hm = !0));
  });
}
function vm() {
  (_m(), gm());
}
var ym = class {
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
          ? (pm.add(this), mm || ((mm = !0), Q.read(_m), Q.resolveKeyframes(gm)))
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
        pm.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), pm.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  bm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  xm = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Sm(e) {
  let t = xm.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var Cm = 4;
function wm(e, t, n = 1) {
  Zl(
    n <= Cm,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = Sm(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return bm(e) ? parseFloat(e) : e;
  }
  return dd(i) ? wm(i, t, n + 1) : i;
}
var Tm = (e) => (t) => t.test(e),
  Em = [hd, $, bd, yd, Sd, xd, { test: (e) => e === `auto`, parse: (e) => e }],
  Dm = (e) => Em.find(Tm(e)),
  Om = class extends ym {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), dd(r))) {
          let i = wm(r, t.current);
          (i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !Uf.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = Dm(r),
        o = Dm(i);
      if (a !== o)
        if (om(a) && om(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) Cp(e[t]) && n.push(t);
      n.length && am(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = fm[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
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
      ((n[i] = fm[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  km = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` && (Xp.test(e) || e === `0`) && !e.startsWith(`url(`))
        );
function Am(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function jm(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = km(i, t),
    s = km(a, t);
  return (
    Xl(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`
    ),
    !o || !s ? !1 : Am(e) || ((n === `spring` || hf(n)) && r)
  );
}
var Mm = (e) => e !== null;
function Nm(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(Mm),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var Pm = 40,
  Fm = class {
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
        (this.createdAt = Kf.now()),
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
      return this.resolvedAt && this.resolvedAt - this.createdAt > Pm
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (!this._resolved && !this.hasAttemptedResolve && vm(), this._resolved);
    }
    onKeyframesResolved(e, t) {
      ((this.resolvedAt = Kf.now()), (this.hasAttemptedResolve = !0));
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !jm(e, n, r, i))
        if (sp.current || !a) {
          (s && s(Nm(e, this.options, t)), o && o(), this.resolveFinishedPromise());
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
  Im = (e, t, n) => e + (t - e) * n;
function Lm(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Rm({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Lm(s, r, e + 1 / 3)), (a = Lm(s, r, e)), (o = Lm(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function zm(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Bm = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Vm = [Pp, Mp, Fp],
  Hm = (e) => Vm.find((t) => t.test(e));
function Um(e) {
  let t = Hm(e);
  if ((Xl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t))
    return !1;
  let n = t.parse(e);
  return (t === Fp && (n = Rm(n)), n);
}
var Wm = (e, t) => {
    let n = Um(e),
      r = Um(t);
    if (!n || !r) return zm(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = Bm(n.red, r.red, e)),
      (i.green = Bm(n.green, r.green, e)),
      (i.blue = Bm(n.blue, r.blue, e)),
      (i.alpha = Im(n.alpha, r.alpha, e)),
      Mp.transform(i)
    );
  },
  Gm = (e, t) => (n) => t(e(n)),
  Km = (...e) => e.reduce(Gm),
  qm = new Set([`none`, `hidden`]);
function Jm(e, t) {
  return qm.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Ym(e, t) {
  return (n) => Im(e, t, n);
}
function Xm(e) {
  return typeof e == `number`
    ? Ym
    : typeof e == `string`
      ? dd(e)
        ? zm
        : Ip.test(e)
          ? Wm
          : eh
      : Array.isArray(e)
        ? Zm
        : typeof e == `object`
          ? Ip.test(e)
            ? Wm
            : Qm
          : zm;
}
function Zm(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Xm(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function Qm(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Xm(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function $m(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]];
    ((n[i] = e.values[o] ?? 0), r[a]++);
  }
  return n;
}
var eh = (e, t) => {
  let n = Xp.createTransformer(t),
    r = Gp(e),
    i = Gp(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (qm.has(e) && !i.values.length) || (qm.has(t) && !r.values.length)
      ? Jm(e, t)
      : Km(Zm($m(r, i), i.values), n)
    : (Xl(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      zm(e, t));
};
function th(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? Im(e, t, n)
    : Xm(e)(e, t);
}
var nh = 5;
function rh(e, t, n) {
  let r = Math.max(t - nh, 0);
  return Xf(n - e(r), t - r);
}
var ih = {
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
  ah = 0.001;
function oh({
  duration: e = ih.duration,
  bounce: t = ih.bounce,
  velocity: n = ih.velocity,
  mass: r = ih.mass,
}) {
  let i, a;
  Xl(e <= eu(ih.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  ((o = md(ih.minDamping, ih.maxDamping, o)),
    (e = md(ih.minDuration, ih.maxDuration, tu(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = lh(t, o),
            c = Math.exp(-i);
          return ah - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = lh(t ** 2, o);
          return ((-i(t) + ah > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -ah + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = ch(i, a, s);
  if (((e = eu(e)), isNaN(c))) return { stiffness: ih.stiffness, damping: ih.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var sh = 12;
function ch(e, t, n) {
  let r = n;
  for (let n = 1; n < sh; n++) r -= e(r) / t(r);
  return r;
}
function lh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var uh = [`duration`, `bounce`],
  dh = [`stiffness`, `damping`, `mass`];
function fh(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function ph(e) {
  let t = {
    velocity: ih.velocity,
    stiffness: ih.stiffness,
    damping: ih.damping,
    mass: ih.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!fh(e, dh) && fh(e, uh))
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * md(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ih.mass, stiffness: i, damping: a };
    } else {
      let n = oh(e);
      ((t = { ...t, ...n, mass: ih.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function mh(e = ih.visualDuration, t = ih.bounce) {
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
    } = ph({ ...n, velocity: -tu(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = tu(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? ih.restSpeed.granular : ih.restSpeed.default),
    (i ||= v ? ih.restDelta.granular : ih.restDelta.default));
  let y;
  if (h < 1) {
    let e = lh(_, h);
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
        h < 1 && (n = e === 0 ? eu(m) : rh(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(mf(b), pf),
        t = xf((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function hh({
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
        (S = mh({
          keyframes: [f.value, m(f.value)],
          velocity: rh(y, e, f.value),
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
var gh = fp(0.42, 0, 1, 1),
  _h = fp(0, 0, 0.58, 1),
  vh = fp(0.42, 0, 0.58, 1),
  yh = (e) => Array.isArray(e) && typeof e[0] != `number`,
  bh = {
    linear: Yl,
    easeIn: gh,
    easeInOut: vh,
    easeOut: _h,
    circIn: yp,
    circInOut: xp,
    circOut: bp,
    backIn: gp,
    backInOut: _p,
    backOut: hp,
    anticipate: vp,
  },
  xh = (e) => {
    if (_f(e)) {
      Zl(e.length === 4, `Cubic bezier arrays must contain four numerical values.`);
      let [t, n, r, i] = e;
      return fp(t, n, r, i);
    } else if (typeof e == `string`)
      return (Zl(bh[e] !== void 0, `Invalid easing type '${e}'`), bh[e]);
    return e;
  };
function Sh(e, t, n) {
  let r = [],
    i = n || th,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = Km(Array.isArray(t) ? t[n] || Yl : t, a)), r.push(a));
  }
  return r;
}
function Ch(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((Zl(a === t.length, `Both input and output ranges must be the same length`), a === 1))
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Sh(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = $l(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(md(e[0], e[a - 1], t)) : l;
}
function wh(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = $l(0, t, r);
    e.push(Im(n, 1, i));
  }
}
function Th(e) {
  let t = [0];
  return (wh(t, e.length - 1), t);
}
function Eh(e, t) {
  return e.map((e) => e * t);
}
function Dh(e, t) {
  return e.map(() => t || vh).splice(0, e.length - 1);
}
function Oh({ duration: e = 300, keyframes: t, times: n, ease: r = `easeInOut` }) {
  let i = yh(r) ? r.map(xh) : xh(r),
    a = { done: !1, value: t[0] },
    o = Ch(Eh(n && n.length === t.length ? n : Th(t), e), t, {
      ease: Array.isArray(i) ? i : Dh(t, i),
    });
  return { calculatedDuration: e, next: (t) => ((a.value = o(t)), (a.done = t >= e), a) };
}
var kh = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => Q.update(t, !0),
      stop: () => su(t),
      now: () => (cu.isProcessing ? cu.timestamp : Kf.now()),
    };
  },
  Ah = { decay: hh, inertia: hh, tween: Oh, keyframes: Oh, spring: mh },
  jh = (e) => e / 100,
  Mh = class extends Fm {
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
      ((this.resolver = new (r?.KeyframeResolver || ym)(
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
        o = hf(t) ? t : Ah[t] || Oh,
        s,
        c;
      o !== Oh && typeof e[0] != `number` && ((s = Km(jh, th(e[0], e[1]))), (e = [0, 100]));
      let l = o({ ...this.options, keyframes: e });
      (i === `mirror` && (c = o({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
        l.calculatedDuration === null && (l.calculatedDuration = mf(l)));
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
          (v = md(0, 1, n) * u));
      }
      let b = _ ? { done: !1, value: s[0] } : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ && c !== null && (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null && (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = Nm(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? tu(e.calculatedDuration) : 0;
    }
    get time() {
      return tu(this.currentTime);
    }
    set time(e) {
      ((e = eu(e)),
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
      ((this.playbackSpeed = e), t && (this.time = tu(this.currentTime)));
    }
    play() {
      if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = kh, onPlay: t, startTime: n } = this.options;
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
  Nh = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function Ph(
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
  let u = Tf(s, i);
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
var Fh = Ql(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  Ih = 10,
  Lh = 2e4;
function Rh(e) {
  return hf(e.type) || e.type === `spring` || !Sf(e.ease);
}
function zh(e, t) {
  let n = new Mh({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    a = 0;
  for (; !r.done && a < Lh; ) ((r = n.sample(a)), i.push(r.value), (a += Ih));
  return { times: void 0, keyframes: i, duration: a - Ih, ease: `linear` };
}
var Bh = { anticipate: vp, backInOut: _p, circInOut: xp };
function Vh(e) {
  return e in Bh;
}
var Hh = class extends Fm {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new Om(i, (e, t) => this.onKeyframesResolved(e, t), t, n, r)),
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
      if ((typeof i == `string` && bf() && Vh(i) && (i = Bh[i]), Rh(this.options))) {
        let { onComplete: t, onUpdate: o, motionValue: s, element: c, ...l } = this.options,
          u = zh(e, l);
        ((e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`));
      }
      let l = Ph(o.owner.current, s, e, { ...this.options, duration: n, times: r, ease: i });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (gf(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              (o.set(Nm(e, this.options, t)),
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
      return tu(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return tu(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = eu(e);
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
        if (!t) return Yl;
        let { animation: n } = t;
        gf(n, e);
      }
      return Yl;
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
          u = new Mh({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = eu(this.time);
        e.setWithVelocity(u.sample(d - Ih).value, u.sample(d).value, Ih);
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
        Fh() && n && Nh.has(n) && !s && !c && !r && i !== `mirror` && a !== 0 && o !== `inertia`
      );
    }
  },
  Uh = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  Wh = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Gh = { type: `keyframes`, duration: 0.8 },
  Kh = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qh = (e, { keyframes: t }) =>
    t.length > 2 ? Gh : sd.has(e) ? (e.startsWith(`scale`) ? Wh(t[1]) : Uh) : Kh;
function Jh({
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
var Yh =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = ff(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= eu(c);
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
    (Jh(s) || (u = { ...u, ...qh(e, u) }),
      (u.duration &&= eu(u.duration)),
      (u.repeatDelay &&= eu(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (sp.current || nu.skipAnimations) && ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = Nm(u.keyframes, s);
      if (e !== void 0)
        return (
          Q.update(() => {
            (u.onUpdate(e), u.onComplete());
          }),
          new df([])
        );
    }
    return !a && Hh.supports(u) ? new Hh(u) : new Mh(u);
  };
function Xh({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Zh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && Xh(l, t))) continue;
    let o = { delay: n, ...ff(a || {}, t) },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = op(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, Q);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    (ap(e, t), r.start(Yh(t, r, i, e.shouldReduceMotion && Uf.has(t) ? { type: !1 } : o, e, u)));
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        Q.update(() => {
          o && rp(e, o);
        });
      }),
    c
  );
}
function Qh(e, t, n = {}) {
  let r = cf(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(Zh(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
            return $h(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  } else return Promise.all([a(), o(n.delay)]);
}
function $h(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(eg)
      .forEach((e, r) => {
        (e.notify(`AnimationStart`, t),
          o.push(Qh(e, t, { ...a, delay: n + c(r) }).then(() => e.notify(`AnimationComplete`, t))));
      }),
    Promise.all(o)
  );
}
function eg(e, t) {
  return e.sortNodePosition(t);
}
function tg(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => Qh(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = Qh(e, t, n);
  else {
    let i = typeof t == `function` ? cf(e, t, n.custom) : t;
    r = Promise.all(Zh(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var ng = Du.length;
function rg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && rg(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < ng; n++) {
    let r = Du[n],
      i = e.props[r];
    (wu(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var ig = [...Eu].reverse(),
  ag = Eu.length;
function og(e) {
  return (t) => Promise.all(t.map(({ animation: t, options: n }) => tg(e, t, n)));
}
function sg(e) {
  let t = og(e),
    n = ug(),
    r = !0,
    i = (t) => (n, r) => {
      let i = cf(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
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
      s = rg(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < ag; t++) {
      let f = ig[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = wu(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) || (!m && !p.prevProp) || Tu(m) || typeof m == `boolean`)
      )
        continue;
      let v = cg(p.prevProp, m),
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
        ((r = Qu(t) && Qu(n) ? !sf(t, n) : t !== n),
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
      ((n = ug()), (r = !0));
    },
  };
}
function cg(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !sf(t, e) : !1;
}
function lg(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function ug() {
  return {
    animate: lg(!0),
    whileInView: lg(),
    whileHover: lg(),
    whileTap: lg(),
    whileDrag: lg(),
    whileFocus: lg(),
    exit: lg(),
  };
}
var dg = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  fg = class extends dg {
    constructor(e) {
      (super(e), (e.animationState ||= sg(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Tu(e) && (this.unmountControls = e.subscribe(this.node));
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
  pg = 0,
  mg = {
    animation: { Feature: fg },
    exit: {
      Feature: class extends dg {
        constructor() {
          (super(...arguments), (this.id = pg++));
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
function hg(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function gg(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var _g = (e) => (t) => Nf(t) && e(t, gg(t));
function vg(e, t, n, r) {
  return hg(e, t, _g(n), r);
}
var yg = (e, t) => Math.abs(e - t);
function bg(e, t) {
  let n = yg(e.x, t.x),
    r = yg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var xg = class {
  constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = wg(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = bg(e.offset, { x: 0, y: 0 }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = cu;
        this.history.push({ ...r, timestamp: i });
        let { onStart: a, onMove: o } = this.handlers;
        (t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e));
      }),
      (this.handlePointerMove = (e, t) => {
        ((this.lastMoveEvent = e),
          (this.lastMoveEventInfo = Sg(t, this.transformPagePoint)),
          Q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if ((this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        let a = wg(
          e.type === `pointercancel` ? this.lastMoveEventInfo : Sg(t, this.transformPagePoint),
          this.history
        );
        (this.startEvent && n && n(e, a), r && r(e, a));
      }),
      !Nf(e))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window));
    let a = Sg(gg(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = cu;
    this.history = [{ ...o, timestamp: s }];
    let { onSessionStart: c } = t;
    (c && c(e, wg(a, this.history)),
      (this.removeListeners = Km(
        vg(this.contextWindow, `pointermove`, this.handlePointerMove),
        vg(this.contextWindow, `pointerup`, this.handlePointerUp),
        vg(this.contextWindow, `pointercancel`, this.handlePointerUp)
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), su(this.updatePoint));
  }
};
function Sg(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Cg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wg({ point: e }, t) {
  return { point: e, delta: Cg(e, Eg(t)), offset: Cg(e, Tg(t)), velocity: Dg(t, 0.1) };
}
function Tg(e) {
  return e[0];
}
function Eg(e) {
  return e[e.length - 1];
}
function Dg(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Eg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > eu(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let a = tu(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var Og = 1e-4,
  kg = 1 - Og,
  Ag = 1 + Og,
  jg = 0.01,
  Mg = 0 - jg,
  Ng = 0 + jg;
function Pg(e) {
  return e.max - e.min;
}
function Fg(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ig(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Im(t.min, t.max, e.origin)),
    (e.scale = Pg(n) / Pg(t)),
    (e.translate = Im(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= kg && e.scale <= Ag) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Mg && e.translate <= Ng) || isNaN(e.translate)) && (e.translate = 0));
}
function Lg(e, t, n, r) {
  (Ig(e.x, t.x, n.x, r ? r.originX : void 0), Ig(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Rg(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Pg(t)));
}
function zg(e, t, n) {
  (Rg(e.x, t.x, n.x), Rg(e.y, t.y, n.y));
}
function Bg(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Pg(t)));
}
function Vg(e, t, n) {
  (Bg(e.x, t.x, n.x), Bg(e.y, t.y, n.y));
}
function Hg(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Im(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Im(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ug(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Wg(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Ug(e.x, n, i), y: Ug(e.y, t, r) };
}
function Gg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function Kg(e, t) {
  return { x: Gg(e.x, t.x), y: Gg(e.y, t.y) };
}
function qg(e, t) {
  let n = 0.5,
    r = Pg(e),
    i = Pg(t);
  return (
    i > r ? (n = $l(t.min, t.max - r, e.min)) : r > i && (n = $l(e.min, e.max - i, t.min)),
    md(0, 1, n)
  );
}
function Jg(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Yg = 0.35;
function Xg(e = Yg) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Yg),
    { x: Zg(e, `left`, `right`), y: Zg(e, `top`, `bottom`) }
  );
}
function Zg(e, t, n) {
  return { min: Qg(e, t), max: Qg(e, n) };
}
function Qg(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var $g = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  e_ = () => ({ x: $g(), y: $g() }),
  t_ = () => ({ min: 0, max: 0 }),
  n_ = () => ({ x: t_(), y: t_() });
function r_(e) {
  return [e(`x`), e(`y`)];
}
function i_({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function a_({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function o_(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function s_(e) {
  return e === void 0 || e === 1;
}
function c_({ scale: e, scaleX: t, scaleY: n }) {
  return !s_(e) || !s_(t) || !s_(n);
}
function l_(e) {
  return c_(e) || u_(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function u_(e) {
  return d_(e.x) || d_(e.y);
}
function d_(e) {
  return e && e !== `0%`;
}
function f_(e, t, n) {
  return n + t * (e - n);
}
function p_(e, t, n, r, i) {
  return (i !== void 0 && (e = f_(e, i, r)), f_(e, n, r) + t);
}
function m_(e, t = 0, n = 1, r, i) {
  ((e.min = p_(e.min, t, n, r, i)), (e.max = p_(e.max, t, n, r, i)));
}
function h_(e, { x: t, y: n }) {
  (m_(e.x, t.translate, t.scale, t.originPoint), m_(e.y, n.translate, n.scale, n.originPoint));
}
var g_ = 0.999999999999,
  __ = 1.0000000000001;
function v_(e, t, n, r = !1) {
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
        x_(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), h_(e, o)),
      r && l_(a.latestValues) && x_(e, a.latestValues));
  }
  (t.x < __ && t.x > g_ && (t.x = 1), t.y < __ && t.y > g_ && (t.y = 1));
}
function y_(e, t) {
  ((e.min += t), (e.max += t));
}
function b_(e, t, n, r, i = 0.5) {
  m_(e, t, n, Im(e.min, e.max, i), r);
}
function x_(e, t) {
  (b_(e.x, t.x, t.scaleX, t.scale, t.originX), b_(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function S_(e, t) {
  return i_(o_(e.getBoundingClientRect(), t));
}
function C_(e, t, n) {
  let r = S_(e, n),
    { scroll: i } = t;
  return (i && (y_(r.x, i.offset.x), y_(r.y, i.offset.y)), r);
}
var w_ = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  T_ = new WeakMap(),
  E_ = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = n_()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          (n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(gg(e).point));
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Hf(n)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            r_((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (bd.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Pg(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && Q.postRender(() => i(e, t)),
            ap(this.visualElement, `transform`));
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
            ((this.currentDirection = O_(o)),
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
          r_(
            (e) =>
              this.getAnimationState(e) === `paused` && this.getAxisMotionValue(e).animation?.play()
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new xg(
        e,
        { onSessionStart: r, onStart: i, onMove: a, onSessionEnd: o, resumeAnimation: s },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: w_(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && Q.postRender(() => i(e, t));
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
      if (!n || !D_(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints && this.constraints[e] && (a = Hg(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && Pu(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
          ? (this.constraints = Wg(n.layoutBox, e))
          : (this.constraints = !1),
        (this.elastic = Xg(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          r_((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Jg(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Pu(e)) return !1;
      let n = e.current;
      Zl(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = C_(n, r.root, this.visualElement.getTransformPagePoint()),
        a = Kg(r.layout.layoutBox, i);
      if (t) {
        let e = t(a_(a));
        ((this.hasMutatedConstraints = !!e), e && (a = i_(e)));
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
        c = r_((o) => {
          if (!D_(o, t, this.currentDirection)) return;
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
      return (ap(this.visualElement, e), n.start(Yh(e, n, 0, t, this.visualElement, !1)));
    }
    stopAnimation() {
      r_((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      r_((e) => this.getAxisMotionValue(e).animation?.pause());
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
      r_((t) => {
        let { drag: n } = this.getProps();
        if (!D_(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - Im(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Pu(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      r_((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = qg({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        r_((t) => {
          if (!D_(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(Im(i, a, r[t]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      T_.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = vg(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          Pu(e) && e.current && (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), Q.read(n));
      let a = hg(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
          this.isDragging &&
            t &&
            (r_((t) => {
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
          dragElastic: a = Yg,
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
function D_(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function O_(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var k_ = class extends dg {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = Yl),
        (this.removeListeners = Yl),
        (this.controls = new E_(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Yl));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  A_ = (e) => (t, n) => {
    e && Q.postRender(() => e(t, n));
  },
  j_ = class extends dg {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = Yl));
    }
    onPointerDown(e) {
      this.session = new xg(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: w_(this.node),
      });
    }
    createPanHandlers() {
      let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
      return {
        onSessionStart: A_(e),
        onStart: A_(t),
        onMove: n,
        onEnd: (e, t) => {
          (delete this.session, r && Q.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = vg(this.node.current, `pointerdown`, (e) =>
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
  M_ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function N_(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var P_ = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if ($.test(e)) e = parseFloat(e);
        else return e;
      return `${N_(e, t.target.x)}% ${N_(e, t.target.y)}%`;
    },
  },
  F_ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = Xp.parse(e);
      if (i.length > 5) return r;
      let a = Xp.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = Im(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  I_ = class extends y.Component {
    componentDidMount() {
      let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
        { projection: i } = e;
      (Gd(R_),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
        (M_.hasEverUpdated = !0));
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
                Q.postRender(() => {
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
        Ru.postRender(() => {
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
function L_(e) {
  let [t, n] = Ul(),
    r = (0, y.useContext)(Fl);
  return (0, I.jsx)(I_, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, y.useContext)(Bu),
    isPresent: t,
    safeToRemove: n,
  });
}
var R_ = {
  borderRadius: {
    ...P_,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: P_,
  borderTopRightRadius: P_,
  borderBottomLeftRadius: P_,
  borderBottomRightRadius: P_,
  boxShadow: F_,
};
function z_(e, t, n) {
  let r = td(e) ? e : tp(e);
  return (r.start(Yh(``, r, t, n)), r.animation);
}
function B_(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var V_ = (e, t) => e.depth - t.depth,
  H_ = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (qf(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (Jf(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(V_), (this.isDirty = !1), this.children.forEach(e));
    }
  };
function U_(e, t) {
  let n = Kf.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (su(r), e(a - t));
    };
  return (Q.read(r, !0), () => su(r));
}
var W_ = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  G_ = W_.length,
  K_ = (e) => (typeof e == `string` ? parseFloat(e) : e),
  q_ = (e) => typeof e == `number` || $.test(e);
function J_(e, t, n, r, i, a) {
  i
    ? ((e.opacity = Im(0, n.opacity === void 0 ? 1 : n.opacity, X_(r))),
      (e.opacityExit = Im(t.opacity === void 0 ? 1 : t.opacity, 0, Z_(r))))
    : a &&
      (e.opacity = Im(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r
      ));
  for (let i = 0; i < G_; i++) {
    let a = `border${W_[i]}Radius`,
      o = Y_(t, a),
      s = Y_(n, a);
    (o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || q_(o) === q_(s)
        ? ((e[a] = Math.max(Im(K_(o), K_(s), r), 0)), (bd.test(s) || bd.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = Im(t.rotate || 0, n.rotate || 0, r));
}
function Y_(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var X_ = Q_(0, 0.5, bp),
  Z_ = Q_(0.5, 0.95, Yl);
function Q_(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n($l(e, t, r)));
}
function $_(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function ev(e, t) {
  ($_(e.x, t.x), $_(e.y, t.y));
}
function tv(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function nv(e, t, n, r, i) {
  return ((e -= t), (e = f_(e, 1 / n, r)), i !== void 0 && (e = f_(e, 1 / i, r)), e);
}
function rv(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (bd.test(t) && ((t = parseFloat(t)), (t = Im(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = Im(a.min, a.max, r);
  (e === a && (s -= t), (e.min = nv(e.min, t, n, s, i)), (e.max = nv(e.max, t, n, s, i)));
}
function iv(e, t, [n, r, i], a, o) {
  rv(e, t[n], t[r], t[i], t.scale, a, o);
}
var av = [`x`, `scaleX`, `originX`],
  ov = [`y`, `scaleY`, `originY`];
function sv(e, t, n, r) {
  (iv(e.x, t, av, n ? n.x : void 0, r ? r.x : void 0),
    iv(e.y, t, ov, n ? n.y : void 0, r ? r.y : void 0));
}
function cv(e) {
  return e.translate === 0 && e.scale === 1;
}
function lv(e) {
  return cv(e.x) && cv(e.y);
}
function uv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function dv(e, t) {
  return uv(e.x, t.x) && uv(e.y, t.y);
}
function fv(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function pv(e, t) {
  return fv(e.x, t.x) && fv(e.y, t.y);
}
function mv(e) {
  return Pg(e.x) / Pg(e.y);
}
function hv(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
var gv = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (qf(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if ((Jf(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
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
function _v(e, t, n) {
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
var vv = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  yv = typeof window < `u` && window.MotionDebug !== void 0,
  bv = [``, `X`, `Y`, `Z`],
  xv = { visibility: `hidden` },
  Sv = 1e3,
  Cv = 0;
function wv(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Tv(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = op(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, Q, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Tv(r);
}
function Ev({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = Cv++),
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
            yv && (vv.totalNodes = vv.resolvedTargetDeltas = vv.recalculatedProjection = 0),
            this.nodes.forEach(kv),
            this.nodes.forEach(Iv),
            this.nodes.forEach(Lv),
            this.nodes.forEach(Av),
            yv && window.MotionDebug.record(vv));
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
      this.root === this && (this.nodes = new H_());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new Yf()),
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
      ((this.isSVG = B_(t)), (this.instance = t));
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
            (n = U_(r, 250)),
            M_.hasAnimatedSinceResize &&
              ((M_.hasAnimatedSinceResize = !1), this.nodes.forEach(Fv)));
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
              let i = this.options.transition || a.getDefaultTransition() || Wv,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = a.getProps(),
                c = !this.targetLayout || !pv(this.targetLayout, r) || n,
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
                let t = { ...ff(i, `layout`), onPlay: o, onComplete: s };
                ((a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t));
              } else
                (t || Fv(this),
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
        su(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Rv), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tv(this),
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
        (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mv));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Nv),
        (this.isUpdating = !1),
        this.nodes.forEach(Pv),
        this.nodes.forEach(Dv),
        this.nodes.forEach(Ov),
        this.clearAllSnapshots());
      let e = Kf.now();
      ((cu.delta = md(0, 1e3 / 60, e - cu.timestamp)),
        (cu.timestamp = e),
        (cu.isProcessing = !0),
        lu.update.process(cu),
        lu.preRender.process(cu),
        lu.render.process(cu),
        (cu.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Ru.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(jv), this.sharedNodes.forEach(zv));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), Q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Q.postRender(() => {
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
        (this.layoutCorrected = n_()),
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
        t = this.projectionDelta && !lv(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || l_(this.latestValues) || a) &&
        (i(this.instance, r), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Jv(n),
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
      if (!e) return n_();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Xv))) {
        let { scroll: e } = this.root;
        e && (y_(t.x, e.offset.x), y_(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = n_();
      if ((ev(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && ev(t, e), y_(t.x, i.offset.x), y_(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = n_();
      ev(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          x_(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          l_(r.latestValues) && x_(n, r.latestValues));
      }
      return (l_(this.latestValues) && x_(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = n_();
      ev(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !l_(n.latestValues)) continue;
        c_(n.latestValues) && n.updateSnapshot();
        let r = n_();
        (ev(r, n.measurePageBox()),
          sv(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (l_(this.latestValues) && sv(t, this.latestValues), t);
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
        this.relativeParent.resolvedRelativeTargetAt !== cu.timestamp &&
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
          ((this.resolvedRelativeTargetAt = cu.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = n_()),
              (this.relativeTargetOrigin = n_()),
              Vg(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
              ev(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = n_()), (this.targetWithTransforms = n_())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                zg(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ev(this.target, this.layout.layoutBox),
                  h_(this.target, this.targetDelta))
                : ev(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = n_()),
                (this.relativeTargetOrigin = n_()),
                Vg(this.relativeTargetOrigin, this.target, e.target),
                ev(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          yv && vv.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || c_(this.parent.latestValues) || u_(this.parent.latestValues)))
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
        this.resolvedRelativeTargetAt === cu.timestamp && (n = !1),
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
      ev(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (v_(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = n_())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (tv(this.prevProjectionDelta.x, this.projectionDelta.x),
          tv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Lg(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !hv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        yv && vv.recalculatedProjection++);
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
      ((this.prevProjectionDelta = e_()),
        (this.projectionDelta = e_()),
        (this.projectionDeltaWithTransform = e_()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = e_();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = n_(),
        s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Uv));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (Bv(a.x, e.x, n),
          Bv(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Vg(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Hv(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && dv(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= n_()),
            ev(d, this.relativeTarget)),
          s && ((this.animationValues = i), J_(i, r, this.latestValues, n, u, l)),
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
        (this.pendingAnimation &&= (su(this.pendingAnimation), void 0)),
        (this.pendingAnimation = Q.update(() => {
          ((M_.hasAnimatedSinceResize = !0),
            (this.currentAnimation = z_(0, Sv, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Sv), this.currentAnimation.stop()),
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
          Yv(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || n_();
          let t = Pg(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = Pg(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (ev(t, n), x_(t, i), Lg(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new gv()),
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
      n.z && wv(`z`, e, r, this.animationValues);
      for (let t = 0; t < bv.length; t++)
        (wv(`rotate${bv[t]}`, e, r, this.animationValues),
          wv(`skew${bv[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return xv;
      let t = { visibility: `` },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = nd(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity),
            (t.pointerEvents = nd(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !l_(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      (this.applyTransformsToTarget(),
        (t.transform = _v(this.projectionDeltaWithTransform, this.treeScale, i)),
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
      for (let e in Wd) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = Wd[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? nd(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Mv),
        this.root.sharedNodes.clear());
    }
  };
}
function Dv(e) {
  e.updateLayout();
}
function Ov(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? r_((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = Pg(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : Yv(i, t.layoutBox, n) &&
        r_((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Pg(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = e_();
    Lg(o, n, t.layoutBox);
    let s = e_();
    a ? Lg(s, e.applyTransform(r, !0), t.measuredBox) : Lg(s, n, t.layoutBox);
    let c = !lv(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = n_();
          Vg(o, t.layoutBox, i.layoutBox);
          let s = n_();
          (Vg(s, n, a.layoutBox),
            pv(o, s) || (l = !0),
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
function kv(e) {
  (yv && vv.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Av(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function jv(e) {
  e.clearSnapshot();
}
function Mv(e) {
  e.clearMeasurements();
}
function Nv(e) {
  e.isLayoutDirty = !1;
}
function Pv(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`), e.resetTransform());
}
function Fv(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Iv(e) {
  e.resolveTargetDelta();
}
function Lv(e) {
  e.calcProjection();
}
function Rv(e) {
  e.resetSkewAndRotation();
}
function zv(e) {
  e.removeLeadSnapshot();
}
function Bv(e, t, n) {
  ((e.translate = Im(t.translate, 0, n)),
    (e.scale = Im(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Vv(e, t, n, r) {
  ((e.min = Im(t.min, n.min, r)), (e.max = Im(t.max, n.max, r)));
}
function Hv(e, t, n, r) {
  (Vv(e.x, t.x, n.x, r), Vv(e.y, t.y, n.y, r));
}
function Uv(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Wv = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Gv = (e) =>
    typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
  Kv = Gv(`applewebkit/`) && !Gv(`chrome/`) ? Math.round : Yl;
function qv(e) {
  ((e.min = Kv(e.min)), (e.max = Kv(e.max)));
}
function Jv(e) {
  (qv(e.x), qv(e.y));
}
function Yv(e, t, n) {
  return e === `position` || (e === `preserve-aspect` && !Fg(mv(t), mv(n), 0.2));
}
function Xv(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var Zv = Ev({
    attachResizeListener: (e, t) => hg(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Qv = { current: void 0 },
  $v = Ev({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Qv.current) {
        let e = new Zv({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Qv.current = e));
      }
      return Qv.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  ey = { pan: { Feature: j_ }, drag: { Feature: k_, ProjectionNode: $v, MeasureLayout: L_ } };
function ty(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && Q.postRender(() => i(t, gg(t)));
}
var ny = class extends dg {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = jf(e, (e) => (ty(this.node, e, `Start`), (e) => ty(this.node, e, `End`))));
    }
    unmount() {}
  },
  ry = class extends dg {
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
      this.unmount = Km(
        hg(this.node.current, `focus`, () => this.onFocus()),
        hg(this.node.current, `blur`, () => this.onBlur())
      );
    }
    unmount() {}
  };
function iy(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && Q.postRender(() => i(t, gg(t)));
}
var ay = class extends dg {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Vf(
          e,
          (e) => (
            iy(this.node, e, `Start`),
            (e, { success: t }) => iy(this.node, e, t ? `End` : `Cancel`)
          ),
          { useGlobalTarget: this.node.props.globalTapTarget }
        ));
    }
    unmount() {}
  },
  oy = new WeakMap(),
  sy = new WeakMap(),
  cy = (e) => {
    let t = oy.get(e.target);
    t && t(e);
  },
  ly = (e) => {
    e.forEach(cy);
  };
function uy({ root: e, ...t }) {
  let n = e || document;
  sy.has(n) || sy.set(n, {});
  let r = sy.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(ly, { root: e, ...t })), r[i]);
}
function dy(e, t, n) {
  let r = uy(t);
  return (
    oy.set(e, n),
    r.observe(e),
    () => {
      (oy.delete(e), r.unobserve(e));
    }
  );
}
var fy = { some: 0, all: 1 },
  py = class extends dg {
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
          threshold: typeof r == `number` ? r : fy[r],
        };
      return dy(this.node.current, a, (e) => {
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
      [`amount`, `margin`, `root`].some(my(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function my({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var hy = {
    inView: { Feature: py },
    tap: { Feature: ay },
    focus: { Feature: ry },
    hover: { Feature: ny },
  },
  gy = { layout: { ProjectionNode: $v, MeasureLayout: L_ } },
  _y = { current: null },
  vy = { current: !1 };
function yy() {
  if (((vy.current = !0), Kl))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (_y.current = e.matches);
      (e.addListener(t), t());
    } else _y.current = !1;
}
var by = [...Em, Ip, Xp],
  xy = (e) => by.find(Tm(e)),
  Sy = new WeakMap();
function Cy(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (td(i)) e.addValue(r, i);
    else if (td(a)) e.addValue(r, tp(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, tp(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var wy = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Ty = class {
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
        (this.KeyframeResolver = ym),
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
          let e = Kf.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), Q.render(this.render, !1, !0));
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
        (this.isControllingVariants = Ou(t)),
        (this.isVariantNode = ku(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && td(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        Sy.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        vy.current || yy(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always`
              ? !0
              : _y.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (Sy.delete(this.current),
        this.projection && this.projection.unmount(),
        su(this.notifyUpdate),
        su(this.render),
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
      let n = sd.has(e),
        r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && Q.preRender(this.notifyUpdate),
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
      for (e in fu) {
        let t = fu[e];
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
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : n_();
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
      for (let t = 0; t < wy.length; t++) {
        let n = wy[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = Cy(
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
          ((n = tp(t === null ? void 0 : t, { owner: this })), this.addValue(e, n)),
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
          (typeof n == `string` && (bm(n) || Sp(n))
            ? (n = parseFloat(n))
            : !xy(n) && Xp.test(t) && (n = rm(e, t)),
          this.setBaseTarget(e, td(n) ? n.get() : n)),
        td(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Zu(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !td(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (this.events[e] || (this.events[e] = new Yf()), this.events[e].add(t));
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  Ey = class extends Ty {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Om));
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
      td(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function Dy(e) {
  return window.getComputedStyle(e);
}
var Oy = class extends Ey {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = Vd));
    }
    readValueFromInstance(e, t) {
      if (sd.has(t)) {
        let e = nm(t);
        return (e && e.default) || 0;
      } else {
        let n = Dy(e),
          r = (ld(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return S_(e, t);
    }
    build(e, t, n) {
      jd(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return qd(e, t, n);
    }
  },
  ky = class extends Ey {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = n_));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (sd.has(t)) {
        let e = nm(t);
        return (e && e.default) || 0;
      }
      return ((t = Hd.has(t) ? t : Iu(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Jd(e, t, n);
    }
    build(e, t, n) {
      Ld(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Ud(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = Bd(e.tagName)), super.mount(e));
    }
  },
  Ay = (e, t) => (Yu(e) ? new ky(t) : new Oy(t, { allowProjection: e !== y.Fragment })),
  jy = Su(of({ ...mg, ...hy, ...ey, ...gy }, Ay)),
  My = () =>
    (0, I.jsx)(`section`, {
      id: `about`,
      className: `py-24 relative`,
      children: (0, I.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, I.jsxs)(jy.div, {
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
                      children: (0, I.jsx)(Qn, { className: `h-5 w-5 text-primary` }),
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
  Ny = ({ slot: e, format: t = `auto`, responsive: n = !0, className: r = `` }) => {
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
  Py = () =>
    (0, I.jsx)(`section`, {
      id: `cta`,
      className: `py-24 relative`,
      children: (0, I.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, I.jsxs)(jy.div, {
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
                        (0, I.jsx)(Jn, { className: `h-5 w-5` }),
                        `Get on Google Play`,
                        (0, I.jsx)(Rn, { className: `h-4 w-4` }),
                      ],
                    }),
                    (0, I.jsxs)(`a`, {
                      href: `https://wassistant-707.web.app`,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center gap-2 bg-wa-surface border border-white/10 rounded-xl px-8 py-3.5 text-wa-text font-medium btn-press hover:bg-wa-card text-base`,
                      children: [
                        (0, I.jsx)(Vn, { className: `h-5 w-5 text-wa-green` }),
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
  Fy = [
    {
      icon: Hn,
      title: `Chat Without Saving`,
      description: `Start a WhatsApp conversation with any phone number instantly — no need to add them to your contacts first. Perfect for one-time chats with delivery drivers, businesses, or new acquaintances.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: Un,
      title: `QR Code Generator`,
      description: `Generate scannable QR codes linked to your WhatsApp number. Ideal for business cards, storefronts, flyers, and websites so customers can reach you with a single scan.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: Gn,
      title: `Chat Link Creator`,
      description: `Create shareable wa.me links with pre-filled messages. Add them to your social media bios, email signatures, or websites to let people message you directly on WhatsApp.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: Wn,
      title: `OCR Text Recognition`,
      description: `Extract phone numbers from images, screenshots, or business cards using your camera. The built-in OCR engine processes everything locally on your device for complete privacy.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: Kn,
      title: `Privacy First`,
      description: `All processing happens on your device. No phone numbers, messages, or contacts are ever uploaded to external servers. Your data stays yours — always.`,
      link: `https://wassistant-707.web.app`,
    },
    {
      icon: Jn,
      title: `Works Everywhere`,
      description: `Available as an Android app on Google Play and as a web app at wassistant.site. Use it on your phone, tablet, or desktop browser — no installation required for the web version.`,
      link: `https://wassistant-707.web.app`,
    },
  ],
  Iy = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } },
  Ly = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
  },
  Ry = () =>
    (0, I.jsx)(`section`, {
      id: `features`,
      className: `py-32 relative`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)(jy.div, {
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
          (0, I.jsx)(jy.div, {
            variants: Iy,
            initial: `hidden`,
            whileInView: `show`,
            viewport: { once: !0 },
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
            children: Fy.map((e) =>
              (0, I.jsxs)(
                jy.a,
                {
                  href: e.link,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  variants: Ly,
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
  zy = () =>
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
                      (0, I.jsx)(Qn, { className: `h-4 w-4 text-primary` }),
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
  By = [
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
  Vy = () =>
    (0, I.jsx)(`section`, {
      id: `how-it-works`,
      className: `py-24 relative`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)(jy.div, {
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
            children: By.map((e, t) =>
              (0, I.jsxs)(
                jy.div,
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
  Hy = () =>
    (0, I.jsx)(jy.nav, {
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
                children: (0, I.jsx)(Qn, { className: `h-4 w-4 text-primary` }),
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
  Uy = () => {
    let [e, t] = (0, y.useState)(`+966 `),
      [n, r] = (0, y.useState)(``);
    return (0, I.jsx)(jy.form, {
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
                  (0, I.jsx)(Hn, { className: `h-5 w-5` }),
                  (0, I.jsx)(Rn, { className: `h-4 w-4` }),
                ],
              }),
            ],
          }),
          n && (0, I.jsx)(`p`, { className: `text-xs text-destructive font-mono`, children: n }),
        ],
      }),
    });
  },
  Wy = () => {
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
          (0, I.jsx)(Jl, {
            children: e.map((e) =>
              (0, I.jsx)(
                jy.div,
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
  Gy = `Collapsible`,
  [Ky, qy] = Le(Gy),
  [Jy, Yy] = Ky(Gy),
  Xy = y.forwardRef((e, t) => {
    let { __scopeCollapsible: n, open: r, defaultOpen: i, disabled: a, onOpenChange: o, ...s } = e,
      [c, l] = Et({ prop: r, defaultProp: i ?? !1, onChange: o, caller: Gy });
    return (0, I.jsx)(Jy, {
      scope: n,
      disabled: a,
      contentId: ai(),
      open: c,
      onOpenToggle: y.useCallback(() => l((e) => !e), [l]),
      children: (0, I.jsx)(Qe.div, {
        'data-state': nb(c),
        'data-disabled': a ? `` : void 0,
        ...s,
        ref: t,
      }),
    });
  });
Xy.displayName = Gy;
var Zy = `CollapsibleTrigger`,
  Qy = y.forwardRef((e, t) => {
    let { __scopeCollapsible: n, ...r } = e,
      i = Yy(Zy, n);
    return (0, I.jsx)(Qe.button, {
      type: `button`,
      'aria-controls': i.contentId,
      'aria-expanded': i.open || !1,
      'data-state': nb(i.open),
      'data-disabled': i.disabled ? `` : void 0,
      disabled: i.disabled,
      ...r,
      ref: t,
      onClick: L(e.onClick, i.onOpenToggle),
    });
  });
Qy.displayName = Zy;
var $y = `CollapsibleContent`,
  eb = y.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = Yy($y, e.__scopeCollapsible);
    return (0, I.jsx)(xt, {
      present: n || i.open,
      children: ({ present: e }) => (0, I.jsx)(tb, { ...r, ref: t, present: e }),
    });
  });
eb.displayName = $y;
var tb = y.forwardRef((e, t) => {
  let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
    o = Yy($y, n),
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
      'data-state': nb(o.open),
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
function nb(e) {
  return e ? `open` : `closed`;
}
var rb = Xy,
  ib = Qy,
  ab = eb,
  ob = y.createContext(void 0);
function sb(e) {
  let t = y.useContext(ob);
  return e || t || `ltr`;
}
var cb = `Accordion`,
  lb = [`Home`, `End`, `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`],
  [ub, db, fb] = Ge(cb),
  [pb, mb] = Le(cb, [fb, qy]),
  hb = qy(),
  gb = y.forwardRef((e, t) => {
    let { type: n, ...r } = e,
      i = r,
      a = r;
    return (0, I.jsx)(ub.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === `multiple` ? (0, I.jsx)(Sb, { ...a, ref: t }) : (0, I.jsx)(xb, { ...i, ref: t }),
    });
  });
gb.displayName = cb;
var [_b, vb] = pb(cb),
  [yb, bb] = pb(cb, { collapsible: !1 }),
  xb = y.forwardRef((e, t) => {
    let { value: n, defaultValue: r, onValueChange: i = () => {}, collapsible: a = !1, ...o } = e,
      [s, c] = Et({ prop: n, defaultProp: r ?? ``, onChange: i, caller: cb });
    return (0, I.jsx)(_b, {
      scope: e.__scopeAccordion,
      value: y.useMemo(() => (s ? [s] : []), [s]),
      onItemOpen: c,
      onItemClose: y.useCallback(() => a && c(``), [a, c]),
      children: (0, I.jsx)(yb, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: (0, I.jsx)(Tb, { ...o, ref: t }),
      }),
    });
  }),
  Sb = y.forwardRef((e, t) => {
    let { value: n, defaultValue: r, onValueChange: i = () => {}, ...a } = e,
      [o, s] = Et({ prop: n, defaultProp: r ?? [], onChange: i, caller: cb }),
      c = y.useCallback((e) => s((t = []) => [...t, e]), [s]),
      l = y.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s]);
    return (0, I.jsx)(_b, {
      scope: e.__scopeAccordion,
      value: o,
      onItemOpen: c,
      onItemClose: l,
      children: (0, I.jsx)(yb, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: (0, I.jsx)(Tb, { ...a, ref: t }),
      }),
    });
  }),
  [Cb, wb] = pb(cb),
  Tb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, disabled: r, dir: i, orientation: a = `vertical`, ...o } = e,
      s = Ie(y.useRef(null), t),
      c = db(n),
      l = sb(i) === `ltr`,
      u = L(e.onKeyDown, (e) => {
        if (!lb.includes(e.key)) return;
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
    return (0, I.jsx)(Cb, {
      scope: n,
      disabled: r,
      direction: i,
      orientation: a,
      children: (0, I.jsx)(ub.Slot, {
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
  Eb = `AccordionItem`,
  [Db, Ob] = pb(Eb),
  kb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, value: r, ...i } = e,
      a = wb(Eb, n),
      o = vb(Eb, n),
      s = hb(n),
      c = ai(),
      l = (r && o.value.includes(r)) || !1,
      u = a.disabled || e.disabled;
    return (0, I.jsx)(Db, {
      scope: n,
      open: l,
      disabled: u,
      triggerId: c,
      children: (0, I.jsx)(rb, {
        'data-orientation': a.orientation,
        'data-state': Ib(l),
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
kb.displayName = Eb;
var Ab = `AccordionHeader`,
  jb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = wb(cb, n),
      a = Ob(Ab, n);
    return (0, I.jsx)(Qe.h3, {
      'data-orientation': i.orientation,
      'data-state': Ib(a.open),
      'data-disabled': a.disabled ? `` : void 0,
      ...r,
      ref: t,
    });
  });
jb.displayName = Ab;
var Mb = `AccordionTrigger`,
  Nb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = wb(cb, n),
      a = Ob(Mb, n),
      o = bb(Mb, n),
      s = hb(n);
    return (0, I.jsx)(ub.ItemSlot, {
      scope: n,
      children: (0, I.jsx)(ib, {
        'aria-disabled': (a.open && !o.collapsible) || void 0,
        'data-orientation': i.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t,
      }),
    });
  });
Nb.displayName = Mb;
var Pb = `AccordionContent`,
  Fb = y.forwardRef((e, t) => {
    let { __scopeAccordion: n, ...r } = e,
      i = wb(cb, n),
      a = Ob(Pb, n),
      o = hb(n);
    return (0, I.jsx)(ab, {
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
Fb.displayName = Pb;
function Ib(e) {
  return e ? `open` : `closed`;
}
var Lb = gb,
  Rb = kb,
  zb = jb,
  Bb = Nb,
  Vb = Fb,
  Hb = Lb,
  Ub = y.forwardRef(({ className: e, ...t }, n) =>
    (0, I.jsx)(Rb, { ref: n, className: qr(`border-b`, e), ...t })
  );
Ub.displayName = `AccordionItem`;
var Wb = y.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, I.jsx)(zb, {
    className: `flex`,
    children: (0, I.jsxs)(Bb, {
      ref: r,
      className: qr(
        `flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180`,
        e
      ),
      ...n,
      children: [
        t,
        (0, I.jsx)(Bn, { className: `h-4 w-4 shrink-0 transition-transform duration-200` }),
      ],
    }),
  })
);
Wb.displayName = Bb.displayName;
var Gb = y.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, I.jsx)(Vb, {
    ref: r,
    className: `overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,
    ...n,
    children: (0, I.jsx)(`div`, { className: qr(`pb-4 pt-0`, e), children: t }),
  })
);
Gb.displayName = Vb.displayName;
var Kb = [
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
  qb = () =>
    (0, I.jsx)(`section`, {
      id: `faq`,
      className: `py-24 relative bg-background`,
      children: (0, I.jsx)(`div`, {
        className: `container mx-auto px-6`,
        children: (0, I.jsxs)(jy.div, {
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
              children: (0, I.jsx)(Hb, {
                type: `single`,
                collapsible: !0,
                className: `w-full space-y-4`,
                children: Kb.map((e, t) =>
                  (0, I.jsxs)(
                    Ub,
                    {
                      value: `item-${t}`,
                      className: `border-border`,
                      children: [
                        (0, I.jsx)(Wb, {
                          className: `text-left font-semibold text-[15px] md:text-base hover:text-primary transition-colors`,
                          children: e.question,
                        }),
                        (0, I.jsx)(Gb, {
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
  Jb = [
    {
      icon: Yn,
      title: `Delivery Drivers & Logistics`,
      description: `When waiting for a package or coordinating a drop-off, sending a quick WhatsApp message to a delivery driver is the fastest way to communicate. WAssistant allows you to enter the driver's number provided in your delivery app and text them instantly without permanently adding them to your phone's contact list. This protects your privacy while ensuring successful deliveries.`,
    },
    {
      icon: qn,
      title: `Sales & E-Commerce`,
      description: `Small business owners answering inquiries from social media or local classifieds deal with dozens of temporary phone numbers daily. Using WAssistant, sellers can quickly reply to leads and coordinate sales on WhatsApp. Additionally, using our QR generator on product pages allows buyers to initiate chats perfectly formatted for instant inquiries.`,
    },
    {
      icon: zn,
      title: `Freelancers & Consultants`,
      description: `Freelancers often network and exchange phone numbers during events, webinars, or brief meetings. Instead of bloating your personal contact book with hundreds of one-time connections, WAssistant offers a streamlined approach. Follow up instantly on WhatsApp using their number for a quick introduction, saving the contact only if a professional relationship develops.`,
    },
    {
      icon: Xn,
      title: `Everyday Personal Use`,
      description: `Whether you are inquiring about a rental listing, talking to customer support of a local retail store, or coordinating a meetup with someone you found online, keeping your address book completely clean is a massive advantage. WAssistant ensures your core contacts remain people you actually know, while still letting you utilize WhatsApp's secure platform for all one-off communications.`,
    },
  ],
  Yb = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } },
  Xb = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
  },
  Zb = () =>
    (0, I.jsx)(`section`, {
      id: `use-cases`,
      className: `py-24 relative bg-primary/5`,
      children: (0, I.jsxs)(`div`, {
        className: `container mx-auto px-6`,
        children: [
          (0, I.jsxs)(jy.div, {
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
          (0, I.jsx)(jy.div, {
            variants: Yb,
            initial: `hidden`,
            whileInView: `show`,
            viewport: { once: !0 },
            className: `grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto`,
            children: Jb.map((e) =>
              (0, I.jsxs)(
                jy.div,
                {
                  variants: Xb,
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
  Qb = () =>
    (0, I.jsxs)(`div`, {
      className: `min-h-screen bg-background`,
      children: [
        (0, I.jsx)(Hy, {}),
        (0, I.jsxs)(`section`, {
          id: `top`,
          className: `relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16`,
          children: [
            (0, I.jsx)(Wy, {}),
            (0, I.jsxs)(`div`, {
              className: `relative z-10 w-full max-w-lg text-center space-y-8`,
              children: [
                (0, I.jsxs)(jy.div, {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
                  className: `flex items-center justify-center gap-2.5`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center`,
                      children: (0, I.jsx)(Qn, { className: `h-5 w-5 text-primary` }),
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-2xl font-bold tracking-tight text-foreground`,
                      children: `WAssistant`,
                    }),
                  ],
                }),
                (0, I.jsxs)(jy.div, {
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
                (0, I.jsx)(Uy, {}),
              ],
            }),
          ],
        }),
        (0, I.jsx)(Ry, {}),
        (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(Ny, {
            slot: `7135284713`,
            className: `w-full max-w-3xl mx-auto my-8`,
          }),
        }),
        (0, I.jsx)(Vy, {}),
        (0, I.jsx)(Zb, {}),
        (0, I.jsx)(My, {}),
        (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(Ny, {
            slot: `7135284713`,
            className: `w-full max-w-3xl mx-auto my-8`,
          }),
        }),
        (0, I.jsx)(qb, {}),
        (0, I.jsx)(Py, {}),
        (0, I.jsx)(`div`, {
          className: `container mx-auto px-6`,
          children: (0, I.jsx)(Ny, {
            slot: `7135284713`,
            className: `w-full max-w-3xl mx-auto my-8`,
          }),
        }),
        (0, I.jsx)(zy, {}),
      ],
    }),
  $b = () => {
    let e = ll();
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
  ex = new vc();
(0, v.createRoot)(document.getElementById(`root`)).render(
  (0, I.jsx)(
    () =>
      (0, I.jsx)(bc, {
        client: ex,
        children: (0, I.jsxs)(bs, {
          children: [
            (0, I.jsx)(ni, {}),
            (0, I.jsx)(xe, {}),
            (0, I.jsx)(Ml, {
              children: (0, I.jsxs)(Ol, {
                children: [
                  (0, I.jsx)(El, { path: `/`, element: (0, I.jsx)(Qb, {}) }),
                  (0, I.jsx)(El, { path: `/games`, element: (0, I.jsx)(Games, {}) }),
                  (0, I.jsx)(El, { path: `*`, element: (0, I.jsx)($b, {}) }),
                ],
              }),
            }),
          ],
        }),
      }),
    {}
  )
);
