(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver((i) => {
        for (const o of i)
            if (o.type === "childList")
                for (const l of o.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : i.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
function gf(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Vu = { exports: {} },
    xi = {},
    $u = { exports: {} },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
    wf = Symbol.for("react.portal"),
    kf = Symbol.for("react.fragment"),
    Sf = Symbol.for("react.strict_mode"),
    Ef = Symbol.for("react.profiler"),
    _f = Symbol.for("react.provider"),
    Cf = Symbol.for("react.context"),
    xf = Symbol.for("react.forward_ref"),
    Nf = Symbol.for("react.suspense"),
    Tf = Symbol.for("react.memo"),
    Pf = Symbol.for("react.lazy"),
    Ss = Symbol.iterator;
function Rf(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Ss && e[Ss]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Hu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Wu = Object.assign,
    Qu = {};
function vn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Qu),
        (this.updater = n || Hu);
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ku() {}
Ku.prototype = vn.prototype;
function kl(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Qu),
        (this.updater = n || Hu);
}
var Sl = (kl.prototype = new Ku());
Sl.constructor = kl;
Wu(Sl, vn.prototype);
Sl.isPureReactComponent = !0;
var Es = Array.isArray,
    Yu = Object.prototype.hasOwnProperty,
    El = { current: null },
    qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xu(e, t, n) {
    var r,
        i = {},
        o = null,
        l = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            Yu.call(t, r) && !qu.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        i.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: cr,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: El.current,
    };
}
function Lf(e, t) {
    return {
        $$typeof: cr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function _l(e) {
    return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function Of(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var _s = /\/+/g;
function Qi(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Of("" + e.key)
        : t.toString(36);
}
function jr(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else
        switch (o) {
            case "string":
            case "number":
                l = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case cr:
                    case wf:
                        l = !0;
                }
        }
    if (l)
        return (
            (l = e),
            (i = i(l)),
            (e = r === "" ? "." + Qi(l, 0) : r),
            Es(i)
                ? ((n = ""),
                  e != null && (n = e.replace(_s, "$&/") + "/"),
                  jr(i, t, n, "", function (c) {
                      return c;
                  }))
                : i != null &&
                  (_l(i) &&
                      (i = Lf(
                          i,
                          n +
                              (!i.key || (l && l.key === i.key)
                                  ? ""
                                  : ("" + i.key).replace(_s, "$&/") + "/") +
                              e
                      )),
                  t.push(i)),
            1
        );
    if (((l = 0), (r = r === "" ? "." : r + ":"), Es(e)))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var u = r + Qi(o, s);
            l += jr(o, t, n, u, i);
        }
    else if (((u = Rf(e)), typeof u == "function"))
        for (e = u.call(e), s = 0; !(o = e.next()).done; )
            (o = o.value), (u = r + Qi(o, s++)), (l += jr(o, t, n, u, i));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return l;
}
function vr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        jr(e, r, "", "", function (o) {
            return t.call(n, o, i++);
        }),
        r
    );
}
function zf(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var fe = { current: null },
    Ur = { transition: null },
    Af = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Ur,
        ReactCurrentOwner: El,
    };
R.Children = {
    map: vr,
    forEach: function (e, t, n) {
        vr(
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
            vr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            vr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!_l(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
R.Component = vn;
R.Fragment = kf;
R.Profiler = Ef;
R.PureComponent = kl;
R.StrictMode = Sf;
R.Suspense = Nf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
R.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Wu({}, e.props),
        i = e.key,
        o = e.ref,
        l = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (l = El.current)),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps;
        for (u in t)
            Yu.call(t, u) &&
                !qu.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        r.children = s;
    }
    return { $$typeof: cr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
R.createContext = function (e) {
    return (
        (e = {
            $$typeof: Cf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: _f, _context: e }),
        (e.Consumer = e)
    );
};
R.createElement = Xu;
R.createFactory = function (e) {
    var t = Xu.bind(null, e);
    return (t.type = e), t;
};
R.createRef = function () {
    return { current: null };
};
R.forwardRef = function (e) {
    return { $$typeof: xf, render: e };
};
R.isValidElement = _l;
R.lazy = function (e) {
    return { $$typeof: Pf, _payload: { _status: -1, _result: e }, _init: zf };
};
R.memo = function (e, t) {
    return { $$typeof: Tf, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
    var t = Ur.transition;
    Ur.transition = {};
    try {
        e();
    } finally {
        Ur.transition = t;
    }
};
R.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
    return fe.current.useCallback(e, t);
};
R.useContext = function (e) {
    return fe.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
    return fe.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
    return fe.current.useEffect(e, t);
};
R.useId = function () {
    return fe.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
    return fe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
    return fe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
    return fe.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
    return fe.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
    return fe.current.useReducer(e, t, n);
};
R.useRef = function (e) {
    return fe.current.useRef(e);
};
R.useState = function (e) {
    return fe.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
    return fe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
    return fe.current.useTransition();
};
R.version = "18.2.0";
$u.exports = R;
var Xe = $u.exports;
const Df = gf(Xe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = Xe,
    If = Symbol.for("react.element"),
    Bf = Symbol.for("react.fragment"),
    Ff = Object.prototype.hasOwnProperty,
    jf =
        Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gu(e, t, n) {
    var r,
        i = {},
        o = null,
        l = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (l = t.ref);
    for (r in t) Ff.call(t, r) && !Uf.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: If,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: jf.current,
    };
}
xi.Fragment = Bf;
xi.jsx = Gu;
xi.jsxs = Gu;
Vu.exports = xi;
var I = Vu.exports,
    So = {},
    Ju = { exports: {} },
    Ee = {},
    Zu = { exports: {} },
    bu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(_, T) {
        var P = _.length;
        _.push(T);
        e: for (; 0 < P; ) {
            var K = (P - 1) >>> 1,
                Z = _[K];
            if (0 < i(Z, T)) (_[K] = T), (_[P] = Z), (P = K);
            else break e;
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0];
    }
    function r(_) {
        if (_.length === 0) return null;
        var T = _[0],
            P = _.pop();
        if (P !== T) {
            _[0] = P;
            e: for (var K = 0, Z = _.length, mr = Z >>> 1; K < mr; ) {
                var Nt = 2 * (K + 1) - 1,
                    Wi = _[Nt],
                    Tt = Nt + 1,
                    yr = _[Tt];
                if (0 > i(Wi, P))
                    Tt < Z && 0 > i(yr, Wi)
                        ? ((_[K] = yr), (_[Tt] = P), (K = Tt))
                        : ((_[K] = Wi), (_[Nt] = P), (K = Nt));
                else if (Tt < Z && 0 > i(yr, P))
                    (_[K] = yr), (_[Tt] = P), (K = Tt);
                else break e;
            }
        }
        return T;
    }
    function i(_, T) {
        var P = _.sortIndex - T.sortIndex;
        return P !== 0 ? P : _.id - T.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var l = Date,
            s = l.now();
        e.unstable_now = function () {
            return l.now() - s;
        };
    }
    var u = [],
        c = [],
        m = 1,
        h = null,
        p = 3,
        g = !1,
        w = !1,
        k = !1,
        F = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(_) {
        for (var T = n(c); T !== null; ) {
            if (T.callback === null) r(c);
            else if (T.startTime <= _)
                r(c), (T.sortIndex = T.expirationTime), t(u, T);
            else break;
            T = n(c);
        }
    }
    function y(_) {
        if (((k = !1), d(_), !w))
            if (n(u) !== null) (w = !0), $i(E);
            else {
                var T = n(c);
                T !== null && Hi(y, T.startTime - _);
            }
    }
    function E(_, T) {
        (w = !1), k && ((k = !1), f(N), (N = -1)), (g = !0);
        var P = p;
        try {
            for (
                d(T), h = n(u);
                h !== null && (!(h.expirationTime > T) || (_ && !Oe()));

            ) {
                var K = h.callback;
                if (typeof K == "function") {
                    (h.callback = null), (p = h.priorityLevel);
                    var Z = K(h.expirationTime <= T);
                    (T = e.unstable_now()),
                        typeof Z == "function"
                            ? (h.callback = Z)
                            : h === n(u) && r(u),
                        d(T);
                } else r(u);
                h = n(u);
            }
            if (h !== null) var mr = !0;
            else {
                var Nt = n(c);
                Nt !== null && Hi(y, Nt.startTime - T), (mr = !1);
            }
            return mr;
        } finally {
            (h = null), (p = P), (g = !1);
        }
    }
    var C = !1,
        x = null,
        N = -1,
        Q = 5,
        L = -1;
    function Oe() {
        return !(e.unstable_now() - L < Q);
    }
    function Sn() {
        if (x !== null) {
            var _ = e.unstable_now();
            L = _;
            var T = !0;
            try {
                T = x(!0, _);
            } finally {
                T ? En() : ((C = !1), (x = null));
            }
        } else C = !1;
    }
    var En;
    if (typeof a == "function")
        En = function () {
            a(Sn);
        };
    else if (typeof MessageChannel < "u") {
        var ks = new MessageChannel(),
            vf = ks.port2;
        (ks.port1.onmessage = Sn),
            (En = function () {
                vf.postMessage(null);
            });
    } else
        En = function () {
            F(Sn, 0);
        };
    function $i(_) {
        (x = _), C || ((C = !0), En());
    }
    function Hi(_, T) {
        N = F(function () {
            _(e.unstable_now());
        }, T);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (_) {
            _.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || g || ((w = !0), $i(E));
        }),
        (e.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (Q = 0 < _ ? Math.floor(1e3 / _) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (_) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var T = 3;
                    break;
                default:
                    T = p;
            }
            var P = p;
            p = T;
            try {
                return _();
            } finally {
                p = P;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (_, T) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    _ = 3;
            }
            var P = p;
            p = _;
            try {
                return T();
            } finally {
                p = P;
            }
        }),
        (e.unstable_scheduleCallback = function (_, T, P) {
            var K = e.unstable_now();
            switch (
                (typeof P == "object" && P !== null
                    ? ((P = P.delay),
                      (P = typeof P == "number" && 0 < P ? K + P : K))
                    : (P = K),
                _)
            ) {
                case 1:
                    var Z = -1;
                    break;
                case 2:
                    Z = 250;
                    break;
                case 5:
                    Z = 1073741823;
                    break;
                case 4:
                    Z = 1e4;
                    break;
                default:
                    Z = 5e3;
            }
            return (
                (Z = P + Z),
                (_ = {
                    id: m++,
                    callback: T,
                    priorityLevel: _,
                    startTime: P,
                    expirationTime: Z,
                    sortIndex: -1,
                }),
                P > K
                    ? ((_.sortIndex = P),
                      t(c, _),
                      n(u) === null &&
                          _ === n(c) &&
                          (k ? (f(N), (N = -1)) : (k = !0), Hi(y, P - K)))
                    : ((_.sortIndex = Z), t(u, _), w || g || ((w = !0), $i(E))),
                _
            );
        }),
        (e.unstable_shouldYield = Oe),
        (e.unstable_wrapCallback = function (_) {
            var T = p;
            return function () {
                var P = p;
                p = T;
                try {
                    return _.apply(this, arguments);
                } finally {
                    p = P;
                }
            };
        });
})(bu);
Zu.exports = bu;
var Vf = Zu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = Xe,
    Se = Vf;
function v(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var ta = new Set(),
    Yn = {};
function Ut(e, t) {
    cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
    for (Yn[e] = t, e = 0; e < t.length; e++) ta.add(t[e]);
}
var tt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Eo = Object.prototype.hasOwnProperty,
    $f =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Cs = {},
    xs = {};
function Hf(e) {
    return Eo.call(xs, e)
        ? !0
        : Eo.call(Cs, e)
        ? !1
        : $f.test(e)
        ? (xs[e] = !0)
        : ((Cs[e] = !0), !1);
}
function Wf(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Qf(e, t, n, r) {
    if (t === null || typeof t > "u" || Wf(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function de(e, t, n, r, i, o, l) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ie[e] = new de(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ie[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ie[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ie[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ie[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ie[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ie[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ie[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ie[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cl = /[\-:]([a-z])/g;
function xl(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Cl, xl);
        ie[t] = new de(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Cl, xl);
        ie[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Cl, xl);
    ie[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ie[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new de(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ie[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Nl(e, t, n, r) {
    var i = ie.hasOwnProperty(t) ? ie[t] : null;
    (i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Qf(t, n, i, r) && (n = null),
        r || i === null
            ? Hf(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    gr = Symbol.for("react.element"),
    Wt = Symbol.for("react.portal"),
    Qt = Symbol.for("react.fragment"),
    Tl = Symbol.for("react.strict_mode"),
    _o = Symbol.for("react.profiler"),
    na = Symbol.for("react.provider"),
    ra = Symbol.for("react.context"),
    Pl = Symbol.for("react.forward_ref"),
    Co = Symbol.for("react.suspense"),
    xo = Symbol.for("react.suspense_list"),
    Rl = Symbol.for("react.memo"),
    st = Symbol.for("react.lazy"),
    ia = Symbol.for("react.offscreen"),
    Ns = Symbol.iterator;
function _n(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Ns && e[Ns]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var H = Object.assign,
    Ki;
function zn(e) {
    if (Ki === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ki = (t && t[1]) || "";
        }
    return (
        `
` +
        Ki +
        e
    );
}
var Yi = !1;
function qi(e, t) {
    if (!e || Yi) return "";
    Yi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var i = c.stack.split(`
`),
                    o = r.stack.split(`
`),
                    l = i.length - 1,
                    s = o.length - 1;
                1 <= l && 0 <= s && i[l] !== o[s];

            )
                s--;
            for (; 1 <= l && 0 <= s; l--, s--)
                if (i[l] !== o[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if ((l--, s--, 0 > s || i[l] !== o[s])) {
                                var u =
                                    `
` + i[l].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    u
                                );
                            }
                        while (1 <= l && 0 <= s);
                    break;
                }
        }
    } finally {
        (Yi = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function Kf(e) {
    switch (e.tag) {
        case 5:
            return zn(e.type);
        case 16:
            return zn("Lazy");
        case 13:
            return zn("Suspense");
        case 19:
            return zn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = qi(e.type, !1)), e;
        case 11:
            return (e = qi(e.type.render, !1)), e;
        case 1:
            return (e = qi(e.type, !0)), e;
        default:
            return "";
    }
}
function No(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Qt:
            return "Fragment";
        case Wt:
            return "Portal";
        case _o:
            return "Profiler";
        case Tl:
            return "StrictMode";
        case Co:
            return "Suspense";
        case xo:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case ra:
                return (e.displayName || "Context") + ".Consumer";
            case na:
                return (e._context.displayName || "Context") + ".Provider";
            case Pl:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Rl:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : No(e.type) || "Memo"
                );
            case st:
                (t = e._payload), (e = e._init);
                try {
                    return No(e(t));
                } catch {}
        }
    return null;
}
function Yf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return No(t);
        case 8:
            return t === Tl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function St(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function oa(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function qf(e) {
    var t = oa(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (l) {
                    (r = "" + l), o.call(this, l);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (l) {
                    r = "" + l;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function wr(e) {
    e._valueTracker || (e._valueTracker = qf(e));
}
function la(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = oa(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function ei(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function To(e, t) {
    var n = t.checked;
    return H({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Ts(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = St(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function sa(e, t) {
    (t = t.checked), t != null && Nl(e, "checked", t, !1);
}
function Po(e, t) {
    sa(e, t);
    var n = St(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Ro(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ro(e, t.type, St(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Ps(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Ro(e, t, n) {
    (t !== "number" || ei(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var An = Array.isArray;
function nn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + St(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Lo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
    return H({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Rs(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(v(92));
            if (An(n)) {
                if (1 < n.length) throw Error(v(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: St(n) };
}
function ua(e, t) {
    var n = St(t.value),
        r = St(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Ls(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function aa(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Oo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? aa(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var kr,
    ca = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                kr = kr || document.createElement("div"),
                    kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = kr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function qn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Bn = {
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
    Xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function (e) {
    Xf.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
    });
});
function fa(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (Bn.hasOwnProperty(e) && Bn[e])
        ? ("" + t).trim()
        : t + "px";
}
function da(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = fa(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var Gf = H(
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
function zo(e, t) {
    if (t) {
        if (Gf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(v(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(v(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(v(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(v(62));
    }
}
function Ao(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Do = null;
function Ll(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Mo = null,
    rn = null,
    on = null;
function Os(e) {
    if ((e = pr(e))) {
        if (typeof Mo != "function") throw Error(v(280));
        var t = e.stateNode;
        t && ((t = Li(t)), Mo(e.stateNode, e.type, t));
    }
}
function pa(e) {
    rn ? (on ? on.push(e) : (on = [e])) : (rn = e);
}
function ha() {
    if (rn) {
        var e = rn,
            t = on;
        if (((on = rn = null), Os(e), t))
            for (e = 0; e < t.length; e++) Os(t[e]);
    }
}
function ma(e, t) {
    return e(t);
}
function ya() {}
var Xi = !1;
function va(e, t, n) {
    if (Xi) return e(t, n);
    Xi = !0;
    try {
        return ma(e, t, n);
    } finally {
        (Xi = !1), (rn !== null || on !== null) && (ya(), ha());
    }
}
function Xn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Li(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(v(231, t, typeof n));
    return n;
}
var Io = !1;
if (tt)
    try {
        var Cn = {};
        Object.defineProperty(Cn, "passive", {
            get: function () {
                Io = !0;
            },
        }),
            window.addEventListener("test", Cn, Cn),
            window.removeEventListener("test", Cn, Cn);
    } catch {
        Io = !1;
    }
function Jf(e, t, n, r, i, o, l, s, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (m) {
        this.onError(m);
    }
}
var Fn = !1,
    ti = null,
    ni = !1,
    Bo = null,
    Zf = {
        onError: function (e) {
            (Fn = !0), (ti = e);
        },
    };
function bf(e, t, n, r, i, o, l, s, u) {
    (Fn = !1), (ti = null), Jf.apply(Zf, arguments);
}
function ed(e, t, n, r, i, o, l, s, u) {
    if ((bf.apply(this, arguments), Fn)) {
        if (Fn) {
            var c = ti;
            (Fn = !1), (ti = null);
        } else throw Error(v(198));
        ni || ((ni = !0), (Bo = c));
    }
}
function Vt(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function ga(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function zs(e) {
    if (Vt(e) !== e) throw Error(v(188));
}
function td(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Vt(e)), t === null)) throw Error(v(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return zs(i), e;
                if (o === r) return zs(i), t;
                o = o.sibling;
            }
            throw Error(v(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var l = !1, s = i.child; s; ) {
                if (s === n) {
                    (l = !0), (n = i), (r = o);
                    break;
                }
                if (s === r) {
                    (l = !0), (r = i), (n = o);
                    break;
                }
                s = s.sibling;
            }
            if (!l) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        (l = !0), (n = o), (r = i);
                        break;
                    }
                    if (s === r) {
                        (l = !0), (r = o), (n = i);
                        break;
                    }
                    s = s.sibling;
                }
                if (!l) throw Error(v(189));
            }
        }
        if (n.alternate !== r) throw Error(v(190));
    }
    if (n.tag !== 3) throw Error(v(188));
    return n.stateNode.current === n ? e : t;
}
function wa(e) {
    return (e = td(e)), e !== null ? ka(e) : null;
}
function ka(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = ka(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Sa = Se.unstable_scheduleCallback,
    As = Se.unstable_cancelCallback,
    nd = Se.unstable_shouldYield,
    rd = Se.unstable_requestPaint,
    Y = Se.unstable_now,
    id = Se.unstable_getCurrentPriorityLevel,
    Ol = Se.unstable_ImmediatePriority,
    Ea = Se.unstable_UserBlockingPriority,
    ri = Se.unstable_NormalPriority,
    od = Se.unstable_LowPriority,
    _a = Se.unstable_IdlePriority,
    Ni = null,
    He = null;
function ld(e) {
    if (He && typeof He.onCommitFiberRoot == "function")
        try {
            He.onCommitFiberRoot(
                Ni,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Be = Math.clz32 ? Math.clz32 : ad,
    sd = Math.log,
    ud = Math.LN2;
function ad(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((sd(e) / ud) | 0)) | 0;
}
var Sr = 64,
    Er = 4194304;
function Dn(e) {
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
function ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var s = l & ~i;
        s !== 0 ? (r = Dn(s)) : ((o &= l), o !== 0 && (r = Dn(o)));
    } else (l = n & ~i), l !== 0 ? (r = Dn(l)) : o !== 0 && (r = Dn(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & i) &&
        ((i = r & -r),
        (o = t & -t),
        i >= o || (i === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Be(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function cd(e, t) {
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
function fd(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var l = 31 - Be(o),
            s = 1 << l,
            u = i[l];
        u === -1
            ? (!(s & n) || s & r) && (i[l] = cd(s, t))
            : u <= t && (e.expiredLanes |= s),
            (o &= ~s);
    }
}
function Fo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ca() {
    var e = Sr;
    return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Gi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function fr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Be(t)),
        (e[t] = n);
}
function dd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Be(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function zl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Be(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var A = 0;
function xa(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Na,
    Al,
    Ta,
    Pa,
    Ra,
    jo = !1,
    _r = [],
    pt = null,
    ht = null,
    mt = null,
    Gn = new Map(),
    Jn = new Map(),
    at = [],
    pd =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Ds(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            pt = null;
            break;
        case "dragenter":
        case "dragleave":
            ht = null;
            break;
        case "mouseover":
        case "mouseout":
            mt = null;
            break;
        case "pointerover":
        case "pointerout":
            Gn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Jn.delete(t.pointerId);
    }
}
function xn(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [i],
          }),
          t !== null && ((t = pr(t)), t !== null && Al(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
}
function hd(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (pt = xn(pt, e, t, n, r, i)), !0;
        case "dragenter":
            return (ht = xn(ht, e, t, n, r, i)), !0;
        case "mouseover":
            return (mt = xn(mt, e, t, n, r, i)), !0;
        case "pointerover":
            var o = i.pointerId;
            return Gn.set(o, xn(Gn.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (
                (o = i.pointerId),
                Jn.set(o, xn(Jn.get(o) || null, e, t, n, r, i)),
                !0
            );
    }
    return !1;
}
function La(e) {
    var t = Lt(e.target);
    if (t !== null) {
        var n = Vt(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = ga(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ra(e.priority, function () {
                            Ta(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Do = r), n.target.dispatchEvent(r), (Do = null);
        } else return (t = pr(n)), t !== null && Al(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Ms(e, t, n) {
    Vr(e) && n.delete(t);
}
function md() {
    (jo = !1),
        pt !== null && Vr(pt) && (pt = null),
        ht !== null && Vr(ht) && (ht = null),
        mt !== null && Vr(mt) && (mt = null),
        Gn.forEach(Ms),
        Jn.forEach(Ms);
}
function Nn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        jo ||
            ((jo = !0),
            Se.unstable_scheduleCallback(Se.unstable_NormalPriority, md)));
}
function Zn(e) {
    function t(i) {
        return Nn(i, e);
    }
    if (0 < _r.length) {
        Nn(_r[0], e);
        for (var n = 1; n < _r.length; n++) {
            var r = _r[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        pt !== null && Nn(pt, e),
            ht !== null && Nn(ht, e),
            mt !== null && Nn(mt, e),
            Gn.forEach(t),
            Jn.forEach(t),
            n = 0;
        n < at.length;
        n++
    )
        (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
        La(n), n.blockedOn === null && at.shift();
}
var ln = ot.ReactCurrentBatchConfig,
    oi = !0;
function yd(e, t, n, r) {
    var i = A,
        o = ln.transition;
    ln.transition = null;
    try {
        (A = 1), Dl(e, t, n, r);
    } finally {
        (A = i), (ln.transition = o);
    }
}
function vd(e, t, n, r) {
    var i = A,
        o = ln.transition;
    ln.transition = null;
    try {
        (A = 4), Dl(e, t, n, r);
    } finally {
        (A = i), (ln.transition = o);
    }
}
function Dl(e, t, n, r) {
    if (oi) {
        var i = Uo(e, t, n, r);
        if (i === null) lo(e, t, r, li, n), Ds(e, r);
        else if (hd(i, e, t, n, r)) r.stopPropagation();
        else if ((Ds(e, r), t & 4 && -1 < pd.indexOf(e))) {
            for (; i !== null; ) {
                var o = pr(i);
                if (
                    (o !== null && Na(o),
                    (o = Uo(e, t, n, r)),
                    o === null && lo(e, t, r, li, n),
                    o === i)
                )
                    break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else lo(e, t, r, null, n);
    }
}
var li = null;
function Uo(e, t, n, r) {
    if (((li = null), (e = Ll(r)), (e = Lt(e)), e !== null))
        if (((t = Vt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = ga(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (li = e), null;
}
function Oa(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (id()) {
                case Ol:
                    return 1;
                case Ea:
                    return 4;
                case ri:
                case od:
                    return 16;
                case _a:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var ft = null,
    Ml = null,
    $r = null;
function za() {
    if ($r) return $r;
    var e,
        t = Ml,
        n = t.length,
        r,
        i = "value" in ft ? ft.value : ft.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
    return ($r = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Hr(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Cr() {
    return !0;
}
function Is() {
    return !1;
}
function _e(e) {
    function t(n, r, i, o, l) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = l),
            (this.currentTarget = null);
        for (var s in e)
            e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? Cr
                : Is),
            (this.isPropagationStopped = Is),
            this
        );
    }
    return (
        H(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Cr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Cr));
            },
            persist: function () {},
            isPersistent: Cr,
        }),
        t
    );
}
var gn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Il = _e(gn),
    dr = H({}, gn, { view: 0, detail: 0 }),
    gd = _e(dr),
    Ji,
    Zi,
    Tn,
    Ti = H({}, dr, {
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
        getModifierState: Bl,
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
            return "movementX" in e
                ? e.movementX
                : (e !== Tn &&
                      (Tn && e.type === "mousemove"
                          ? ((Ji = e.screenX - Tn.screenX),
                            (Zi = e.screenY - Tn.screenY))
                          : (Zi = Ji = 0),
                      (Tn = e)),
                  Ji);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Zi;
        },
    }),
    Bs = _e(Ti),
    wd = H({}, Ti, { dataTransfer: 0 }),
    kd = _e(wd),
    Sd = H({}, dr, { relatedTarget: 0 }),
    bi = _e(Sd),
    Ed = H({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _d = _e(Ed),
    Cd = H({}, gn, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    xd = _e(Cd),
    Nd = H({}, gn, { data: 0 }),
    Fs = _e(Nd),
    Td = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Pd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Rd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Ld(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Rd[e])
        ? !!t[e]
        : !1;
}
function Bl() {
    return Ld;
}
var Od = H({}, dr, {
        key: function (e) {
            if (e.key) {
                var t = Td[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Hr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Pd[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bl,
        charCode: function (e) {
            return e.type === "keypress" ? Hr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Hr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    zd = _e(Od),
    Ad = H({}, Ti, {
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
    }),
    js = _e(Ad),
    Dd = H({}, dr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Bl,
    }),
    Md = _e(Dd),
    Id = H({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bd = _e(Id),
    Fd = H({}, Ti, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    jd = _e(Fd),
    Ud = [9, 13, 27, 32],
    Fl = tt && "CompositionEvent" in window,
    jn = null;
tt && "documentMode" in document && (jn = document.documentMode);
var Vd = tt && "TextEvent" in window && !jn,
    Aa = tt && (!Fl || (jn && 8 < jn && 11 >= jn)),
    Us = " ",
    Vs = !1;
function Da(e, t) {
    switch (e) {
        case "keyup":
            return Ud.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Ma(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function $d(e, t) {
    switch (e) {
        case "compositionend":
            return Ma(t);
        case "keypress":
            return t.which !== 32 ? null : ((Vs = !0), Us);
        case "textInput":
            return (e = t.data), e === Us && Vs ? null : e;
        default:
            return null;
    }
}
function Hd(e, t) {
    if (Kt)
        return e === "compositionend" || (!Fl && Da(e, t))
            ? ((e = za()), ($r = Ml = ft = null), (Kt = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Aa && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Wd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
function $s(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wd[e.type] : t === "textarea";
}
function Ia(e, t, n, r) {
    pa(r),
        (t = si(t, "onChange")),
        0 < t.length &&
            ((n = new Il("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Un = null,
    bn = null;
function Qd(e) {
    Ya(e, 0);
}
function Pi(e) {
    var t = Xt(e);
    if (la(t)) return e;
}
function Kd(e, t) {
    if (e === "change") return t;
}
var Ba = !1;
if (tt) {
    var eo;
    if (tt) {
        var to = "oninput" in document;
        if (!to) {
            var Hs = document.createElement("div");
            Hs.setAttribute("oninput", "return;"),
                (to = typeof Hs.oninput == "function");
        }
        eo = to;
    } else eo = !1;
    Ba = eo && (!document.documentMode || 9 < document.documentMode);
}
function Ws() {
    Un && (Un.detachEvent("onpropertychange", Fa), (bn = Un = null));
}
function Fa(e) {
    if (e.propertyName === "value" && Pi(bn)) {
        var t = [];
        Ia(t, bn, e, Ll(e)), va(Qd, t);
    }
}
function Yd(e, t, n) {
    e === "focusin"
        ? (Ws(), (Un = t), (bn = n), Un.attachEvent("onpropertychange", Fa))
        : e === "focusout" && Ws();
}
function qd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Pi(bn);
}
function Xd(e, t) {
    if (e === "click") return Pi(t);
}
function Gd(e, t) {
    if (e === "input" || e === "change") return Pi(t);
}
function Jd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var je = typeof Object.is == "function" ? Object.is : Jd;
function er(e, t) {
    if (je(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Eo.call(t, i) || !je(e[i], t[i])) return !1;
    }
    return !0;
}
function Qs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ks(e, t) {
    var n = Qs(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Qs(n);
    }
}
function ja(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? ja(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Ua() {
    for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ei(e.document);
    }
    return t;
}
function jl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function Zd(e) {
    var t = Ua(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        ja(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && jl(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = Ks(n, o));
                var l = Ks(n, r);
                i &&
                    l &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== l.node ||
                        e.focusOffset !== l.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(l.node, l.offset))
                        : (t.setEnd(l.node, l.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var bd = tt && "documentMode" in document && 11 >= document.documentMode,
    Yt = null,
    Vo = null,
    Vn = null,
    $o = !1;
function Ys(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $o ||
        Yt == null ||
        Yt !== ei(r) ||
        ((r = Yt),
        "selectionStart" in r && jl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Vn && er(Vn, r)) ||
            ((Vn = r),
            (r = si(Vo, "onSelect")),
            0 < r.length &&
                ((t = new Il("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Yt))));
}
function xr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var qt = {
        animationend: xr("Animation", "AnimationEnd"),
        animationiteration: xr("Animation", "AnimationIteration"),
        animationstart: xr("Animation", "AnimationStart"),
        transitionend: xr("Transition", "TransitionEnd"),
    },
    no = {},
    Va = {};
tt &&
    ((Va = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete qt.animationend.animation,
        delete qt.animationiteration.animation,
        delete qt.animationstart.animation),
    "TransitionEvent" in window || delete qt.transitionend.transition);
function Ri(e) {
    if (no[e]) return no[e];
    if (!qt[e]) return e;
    var t = qt[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Va) return (no[e] = t[n]);
    return e;
}
var $a = Ri("animationend"),
    Ha = Ri("animationiteration"),
    Wa = Ri("animationstart"),
    Qa = Ri("transitionend"),
    Ka = new Map(),
    qs =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function _t(e, t) {
    Ka.set(e, t), Ut(t, [e]);
}
for (var ro = 0; ro < qs.length; ro++) {
    var io = qs[ro],
        ep = io.toLowerCase(),
        tp = io[0].toUpperCase() + io.slice(1);
    _t(ep, "on" + tp);
}
_t($a, "onAnimationEnd");
_t(Ha, "onAnimationIteration");
_t(Wa, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(Qa, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
Ut(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    np = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Mn)
    );
function Xs(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), ed(r, t, void 0, e), (e.currentTarget = null);
}
function Ya(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l],
                        u = s.instance,
                        c = s.currentTarget;
                    if (((s = s.listener), u !== o && i.isPropagationStopped()))
                        break e;
                    Xs(i, s, c), (o = u);
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (
                        ((s = r[l]),
                        (u = s.instance),
                        (c = s.currentTarget),
                        (s = s.listener),
                        u !== o && i.isPropagationStopped())
                    )
                        break e;
                    Xs(i, s, c), (o = u);
                }
        }
    }
    if (ni) throw ((e = Bo), (ni = !1), (Bo = null), e);
}
function M(e, t) {
    var n = t[Yo];
    n === void 0 && (n = t[Yo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (qa(t, e, 2, !1), n.add(r));
}
function oo(e, t, n) {
    var r = 0;
    t && (r |= 4), qa(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
    if (!e[Nr]) {
        (e[Nr] = !0),
            ta.forEach(function (n) {
                n !== "selectionchange" &&
                    (np.has(n) || oo(n, !1, e), oo(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Nr] || ((t[Nr] = !0), oo("selectionchange", !1, t));
    }
}
function qa(e, t, n, r) {
    switch (Oa(t)) {
        case 1:
            var i = yd;
            break;
        case 4:
            i = vd;
            break;
        default:
            i = Dl;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Io ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function lo(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var u = l.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = l.stateNode.containerInfo),
                            u === i || (u.nodeType === 8 && u.parentNode === i))
                        )
                            return;
                        l = l.return;
                    }
                for (; s !== null; ) {
                    if (((l = Lt(s)), l === null)) return;
                    if (((u = l.tag), u === 5 || u === 6)) {
                        r = o = l;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    va(function () {
        var c = o,
            m = Ll(n),
            h = [];
        e: {
            var p = Ka.get(e);
            if (p !== void 0) {
                var g = Il,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Hr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = zd;
                        break;
                    case "focusin":
                        (w = "focus"), (g = bi);
                        break;
                    case "focusout":
                        (w = "blur"), (g = bi);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = bi;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Bs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = kd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Md;
                        break;
                    case $a:
                    case Ha:
                    case Wa:
                        g = _d;
                        break;
                    case Qa:
                        g = Bd;
                        break;
                    case "scroll":
                        g = gd;
                        break;
                    case "wheel":
                        g = jd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = xd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = js;
                }
                var k = (t & 4) !== 0,
                    F = !k && e === "scroll",
                    f = k ? (p !== null ? p + "Capture" : null) : p;
                k = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var y = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            y !== null &&
                            ((d = y),
                            f !== null &&
                                ((y = Xn(a, f)),
                                y != null && k.push(nr(a, y, d)))),
                        F)
                    )
                        break;
                    a = a.return;
                }
                0 < k.length &&
                    ((p = new g(p, w, null, n, m)),
                    h.push({ event: p, listeners: k }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (g = e === "mouseout" || e === "pointerout"),
                    p &&
                        n !== Do &&
                        (w = n.relatedTarget || n.fromElement) &&
                        (Lt(w) || w[nt]))
                )
                    break e;
                if (
                    (g || p) &&
                    ((p =
                        m.window === m
                            ? m
                            : (p = m.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    g
                        ? ((w = n.relatedTarget || n.toElement),
                          (g = c),
                          (w = w ? Lt(w) : null),
                          w !== null &&
                              ((F = Vt(w)),
                              w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                              (w = null))
                        : ((g = null), (w = c)),
                    g !== w)
                ) {
                    if (
                        ((k = Bs),
                        (y = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (a = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((k = js),
                            (y = "onPointerLeave"),
                            (f = "onPointerEnter"),
                            (a = "pointer")),
                        (F = g == null ? p : Xt(g)),
                        (d = w == null ? p : Xt(w)),
                        (p = new k(y, a + "leave", g, n, m)),
                        (p.target = F),
                        (p.relatedTarget = d),
                        (y = null),
                        Lt(m) === c &&
                            ((k = new k(f, a + "enter", w, n, m)),
                            (k.target = d),
                            (k.relatedTarget = F),
                            (y = k)),
                        (F = y),
                        g && w)
                    )
                        t: {
                            for (k = g, f = w, a = 0, d = k; d; d = $t(d)) a++;
                            for (d = 0, y = f; y; y = $t(y)) d++;
                            for (; 0 < a - d; ) (k = $t(k)), a--;
                            for (; 0 < d - a; ) (f = $t(f)), d--;
                            for (; a--; ) {
                                if (
                                    k === f ||
                                    (f !== null && k === f.alternate)
                                )
                                    break t;
                                (k = $t(k)), (f = $t(f));
                            }
                            k = null;
                        }
                    else k = null;
                    g !== null && Gs(h, p, g, k, !1),
                        w !== null && F !== null && Gs(h, F, w, k, !0);
                }
            }
            e: {
                if (
                    ((p = c ? Xt(c) : window),
                    (g = p.nodeName && p.nodeName.toLowerCase()),
                    g === "select" || (g === "input" && p.type === "file"))
                )
                    var E = Kd;
                else if ($s(p))
                    if (Ba) E = Gd;
                    else {
                        E = qd;
                        var C = Yd;
                    }
                else
                    (g = p.nodeName) &&
                        g.toLowerCase() === "input" &&
                        (p.type === "checkbox" || p.type === "radio") &&
                        (E = Xd);
                if (E && (E = E(e, c))) {
                    Ia(h, E, n, m);
                    break e;
                }
                C && C(e, p, c),
                    e === "focusout" &&
                        (C = p._wrapperState) &&
                        C.controlled &&
                        p.type === "number" &&
                        Ro(p, "number", p.value);
            }
            switch (((C = c ? Xt(c) : window), e)) {
                case "focusin":
                    ($s(C) || C.contentEditable === "true") &&
                        ((Yt = C), (Vo = c), (Vn = null));
                    break;
                case "focusout":
                    Vn = Vo = Yt = null;
                    break;
                case "mousedown":
                    $o = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ($o = !1), Ys(h, n, m);
                    break;
                case "selectionchange":
                    if (bd) break;
                case "keydown":
                case "keyup":
                    Ys(h, n, m);
            }
            var x;
            if (Fl)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                Kt
                    ? Da(e, n) && (N = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (N = "onCompositionStart");
            N &&
                (Aa &&
                    n.locale !== "ko" &&
                    (Kt || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && Kt && (x = za())
                        : ((ft = m),
                          (Ml = "value" in ft ? ft.value : ft.textContent),
                          (Kt = !0))),
                (C = si(c, N)),
                0 < C.length &&
                    ((N = new Fs(N, e, null, n, m)),
                    h.push({ event: N, listeners: C }),
                    x
                        ? (N.data = x)
                        : ((x = Ma(n)), x !== null && (N.data = x)))),
                (x = Vd ? $d(e, n) : Hd(e, n)) &&
                    ((c = si(c, "onBeforeInput")),
                    0 < c.length &&
                        ((m = new Fs(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            m
                        )),
                        h.push({ event: m, listeners: c }),
                        (m.data = x)));
        }
        Ya(h, t);
    });
}
function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 &&
            o !== null &&
            ((i = o),
            (o = Xn(e, n)),
            o != null && r.unshift(nr(e, o, i)),
            (o = Xn(e, t)),
            o != null && r.push(nr(e, o, i))),
            (e = e.return);
    }
    return r;
}
function $t(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Gs(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n,
            u = s.alternate,
            c = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 &&
            c !== null &&
            ((s = c),
            i
                ? ((u = Xn(n, o)), u != null && l.unshift(nr(n, u, s)))
                : i || ((u = Xn(n, o)), u != null && l.push(nr(n, u, s)))),
            (n = n.return);
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
}
var rp = /\r\n?/g,
    ip = /\u0000|\uFFFD/g;
function Js(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            rp,
            `
`
        )
        .replace(ip, "");
}
function Tr(e, t, n) {
    if (((t = Js(t)), Js(e) !== t && n)) throw Error(v(425));
}
function ui() {}
var Ho = null,
    Wo = null;
function Qo(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Ko = typeof setTimeout == "function" ? setTimeout : void 0,
    op = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zs = typeof Promise == "function" ? Promise : void 0,
    lp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Zs < "u"
            ? function (e) {
                  return Zs.resolve(null).then(e).catch(sp);
              }
            : Ko;
function sp(e) {
    setTimeout(function () {
        throw e;
    });
}
function so(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), Zn(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    Zn(t);
}
function yt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function bs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var wn = Math.random().toString(36).slice(2),
    $e = "__reactFiber$" + wn,
    rr = "__reactProps$" + wn,
    nt = "__reactContainer$" + wn,
    Yo = "__reactEvents$" + wn,
    up = "__reactListeners$" + wn,
    ap = "__reactHandles$" + wn;
function Lt(e) {
    var t = e[$e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[nt] || n[$e])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = bs(e); e !== null; ) {
                    if ((n = e[$e])) return n;
                    e = bs(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function pr(e) {
    return (
        (e = e[$e] || e[nt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Xt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(v(33));
}
function Li(e) {
    return e[rr] || null;
}
var qo = [],
    Gt = -1;
function Ct(e) {
    return { current: e };
}
function B(e) {
    0 > Gt || ((e.current = qo[Gt]), (qo[Gt] = null), Gt--);
}
function D(e, t) {
    Gt++, (qo[Gt] = e.current), (e.current = t);
}
var Et = {},
    ue = Ct(Et),
    me = Ct(!1),
    Mt = Et;
function fn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Et;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function ye(e) {
    return (e = e.childContextTypes), e != null;
}
function ai() {
    B(me), B(ue);
}
function eu(e, t, n) {
    if (ue.current !== Et) throw Error(v(168));
    D(ue, t), D(me, n);
}
function Xa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(v(108, Yf(e) || "Unknown", i));
    return H({}, n, r);
}
function ci(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            Et),
        (Mt = ue.current),
        D(ue, e),
        D(me, me.current),
        !0
    );
}
function tu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(v(169));
    n
        ? ((e = Xa(e, t, Mt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          B(me),
          B(ue),
          D(ue, e))
        : B(me),
        D(me, n);
}
var Ge = null,
    Oi = !1,
    uo = !1;
function Ga(e) {
    Ge === null ? (Ge = [e]) : Ge.push(e);
}
function cp(e) {
    (Oi = !0), Ga(e);
}
function xt() {
    if (!uo && Ge !== null) {
        uo = !0;
        var e = 0,
            t = A;
        try {
            var n = Ge;
            for (A = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Ge = null), (Oi = !1);
        } catch (i) {
            throw (Ge !== null && (Ge = Ge.slice(e + 1)), Sa(Ol, xt), i);
        } finally {
            (A = t), (uo = !1);
        }
    }
    return null;
}
var Jt = [],
    Zt = 0,
    fi = null,
    di = 0,
    Ce = [],
    xe = 0,
    It = null,
    Je = 1,
    Ze = "";
function Pt(e, t) {
    (Jt[Zt++] = di), (Jt[Zt++] = fi), (fi = e), (di = t);
}
function Ja(e, t, n) {
    (Ce[xe++] = Je), (Ce[xe++] = Ze), (Ce[xe++] = It), (It = e);
    var r = Je;
    e = Ze;
    var i = 32 - Be(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - Be(t) + i;
    if (30 < o) {
        var l = i - (i % 5);
        (o = (r & ((1 << l) - 1)).toString(32)),
            (r >>= l),
            (i -= l),
            (Je = (1 << (32 - Be(t) + i)) | (n << i) | r),
            (Ze = o + e);
    } else (Je = (1 << o) | (n << i) | r), (Ze = e);
}
function Ul(e) {
    e.return !== null && (Pt(e, 1), Ja(e, 1, 0));
}
function Vl(e) {
    for (; e === fi; )
        (fi = Jt[--Zt]), (Jt[Zt] = null), (di = Jt[--Zt]), (Jt[Zt] = null);
    for (; e === It; )
        (It = Ce[--xe]),
            (Ce[xe] = null),
            (Ze = Ce[--xe]),
            (Ce[xe] = null),
            (Je = Ce[--xe]),
            (Ce[xe] = null);
}
var ke = null,
    we = null,
    j = !1,
    Ie = null;
function Za(e, t) {
    var n = Te(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (ke = e), (we = yt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ke = e), (we = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = It !== null ? { id: Je, overflow: Ze } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Te(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ke = e),
                      (we = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Xo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Go(e) {
    if (j) {
        var t = we;
        if (t) {
            var n = t;
            if (!nu(e, t)) {
                if (Xo(e)) throw Error(v(418));
                t = yt(n.nextSibling);
                var r = ke;
                t && nu(e, t)
                    ? Za(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ke = e));
            }
        } else {
            if (Xo(e)) throw Error(v(418));
            (e.flags = (e.flags & -4097) | 2), (j = !1), (ke = e);
        }
    }
}
function ru(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ke = e;
}
function Pr(e) {
    if (e !== ke) return !1;
    if (!j) return ru(e), (j = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Qo(e.type, e.memoizedProps))),
        t && (t = we))
    ) {
        if (Xo(e)) throw (ba(), Error(v(418)));
        for (; t; ) Za(e, t), (t = yt(t.nextSibling));
    }
    if ((ru(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(v(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            we = yt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            we = null;
        }
    } else we = ke ? yt(e.stateNode.nextSibling) : null;
    return !0;
}
function ba() {
    for (var e = we; e; ) e = yt(e.nextSibling);
}
function dn() {
    (we = ke = null), (j = !1);
}
function $l(e) {
    Ie === null ? (Ie = [e]) : Ie.push(e);
}
var fp = ot.ReactCurrentBatchConfig;
function Ae(e, t) {
    if (e && e.defaultProps) {
        (t = H({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var pi = Ct(null),
    hi = null,
    bt = null,
    Hl = null;
function Wl() {
    Hl = bt = hi = null;
}
function Ql(e) {
    var t = pi.current;
    B(pi), (e._currentValue = t);
}
function Jo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function sn(e, t) {
    (hi = e),
        (Hl = bt = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Re(e) {
    var t = e._currentValue;
    if (Hl !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), bt === null)) {
            if (hi === null) throw Error(v(308));
            (bt = e), (hi.dependencies = { lanes: 0, firstContext: e });
        } else bt = bt.next = e;
    return t;
}
var Ot = null;
function Kl(e) {
    Ot === null ? (Ot = [e]) : Ot.push(e);
}
function ec(e, t, n, r) {
    var i = t.interleaved;
    return (
        i === null ? ((n.next = n), Kl(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        rt(e, r)
    );
}
function rt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Yl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function tc(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function et(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function vt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), z & 2)) {
        var i = r.pending;
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            rt(e, n)
        );
    }
    return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Kl(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        rt(e, n)
    );
}
function Wr(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), zl(e, n);
    }
}
function iu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function mi(e, t, n, r) {
    var i = e.updateQueue;
    ut = !1;
    var o = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var u = s,
            c = u.next;
        (u.next = null), l === null ? (o = c) : (l.next = c), (l = u);
        var m = e.alternate;
        m !== null &&
            ((m = m.updateQueue),
            (s = m.lastBaseUpdate),
            s !== l &&
                (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
                (m.lastBaseUpdate = u)));
    }
    if (o !== null) {
        var h = i.baseState;
        (l = 0), (m = c = u = null), (s = o);
        do {
            var p = s.lane,
                g = s.eventTime;
            if ((r & p) === p) {
                m !== null &&
                    (m = m.next =
                        {
                            eventTime: g,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null,
                        });
                e: {
                    var w = e,
                        k = s;
                    switch (((p = t), (g = n), k.tag)) {
                        case 1:
                            if (((w = k.payload), typeof w == "function")) {
                                h = w.call(g, h, p);
                                break e;
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (
                                ((w = k.payload),
                                (p =
                                    typeof w == "function"
                                        ? w.call(g, h, p)
                                        : w),
                                p == null)
                            )
                                break e;
                            h = H({}, h, p);
                            break e;
                        case 2:
                            ut = !0;
                    }
                }
                s.callback !== null &&
                    s.lane !== 0 &&
                    ((e.flags |= 64),
                    (p = i.effects),
                    p === null ? (i.effects = [s]) : p.push(s));
            } else
                (g = {
                    eventTime: g,
                    lane: p,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                }),
                    m === null ? ((c = m = g), (u = h)) : (m = m.next = g),
                    (l |= p);
            if (((s = s.next), s === null)) {
                if (((s = i.shared.pending), s === null)) break;
                (p = s),
                    (s = p.next),
                    (p.next = null),
                    (i.lastBaseUpdate = p),
                    (i.shared.pending = null);
            }
        } while (!0);
        if (
            (m === null && (u = h),
            (i.baseState = u),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = m),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (l |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (Ft |= l), (e.lanes = l), (e.memoizedState = h);
    }
}
function ou(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function"))
                    throw Error(v(191, i));
                i.call(r);
            }
        }
}
var nc = new ea.Component().refs;
function Zo(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : H({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Vt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            i = wt(e),
            o = et(r, i);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = vt(e, o, i)),
            t !== null && (Fe(t, e, i, r), Wr(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            i = wt(e),
            o = et(r, i);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = vt(e, o, i)),
            t !== null && (Fe(t, e, i, r), Wr(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ce(),
            r = wt(e),
            i = et(n, r);
        (i.tag = 2),
            t != null && (i.callback = t),
            (t = vt(e, i, r)),
            t !== null && (Fe(t, e, r, n), Wr(t, e, r));
    },
};
function lu(e, t, n, r, i, o, l) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, l)
            : t.prototype && t.prototype.isPureReactComponent
            ? !er(n, r) || !er(i, o)
            : !0
    );
}
function rc(e, t, n) {
    var r = !1,
        i = Et,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = Re(o))
            : ((i = ye(t) ? Mt : ue.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? fn(e, i) : Et)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = zi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function su(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && zi.enqueueReplaceState(t, t.state, null);
}
function bo(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = nc), Yl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (i.context = Re(o))
        : ((o = ye(t) ? Mt : ue.current), (i.context = fn(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (Zo(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && zi.enqueueReplaceState(i, i.state, null),
            mi(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(v(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(v(147, e));
            var i = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (l) {
                      var s = i.refs;
                      s === nc && (s = i.refs = {}),
                          l === null ? delete s[o] : (s[o] = l);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(v(284));
        if (!n._owner) throw Error(v(290, e));
    }
    return e;
}
function Rr(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            v(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function uu(e) {
    var t = e._init;
    return t(e._payload);
}
function ic(e) {
    function t(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
        }
    }
    function n(f, a) {
        if (!e) return null;
        for (; a !== null; ) t(f, a), (a = a.sibling);
        return null;
    }
    function r(f, a) {
        for (f = new Map(); a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
                (a = a.sibling);
        return f;
    }
    function i(f, a) {
        return (f = kt(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, a, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
                      : ((f.flags |= 2), a))
                : ((f.flags |= 1048576), a)
        );
    }
    function l(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function s(f, a, d, y) {
        return a === null || a.tag !== 6
            ? ((a = yo(d, f.mode, y)), (a.return = f), a)
            : ((a = i(a, d)), (a.return = f), a);
    }
    function u(f, a, d, y) {
        var E = d.type;
        return E === Qt
            ? m(f, a, d.props.children, y, d.key)
            : a !== null &&
              (a.elementType === E ||
                  (typeof E == "object" &&
                      E !== null &&
                      E.$$typeof === st &&
                      uu(E) === a.type))
            ? ((y = i(a, d.props)), (y.ref = Pn(f, a, d)), (y.return = f), y)
            : ((y = Gr(d.type, d.key, d.props, null, f.mode, y)),
              (y.ref = Pn(f, a, d)),
              (y.return = f),
              y);
    }
    function c(f, a, d, y) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== d.containerInfo ||
            a.stateNode.implementation !== d.implementation
            ? ((a = vo(d, f.mode, y)), (a.return = f), a)
            : ((a = i(a, d.children || [])), (a.return = f), a);
    }
    function m(f, a, d, y, E) {
        return a === null || a.tag !== 7
            ? ((a = Dt(d, f.mode, y, E)), (a.return = f), a)
            : ((a = i(a, d)), (a.return = f), a);
    }
    function h(f, a, d) {
        if ((typeof a == "string" && a !== "") || typeof a == "number")
            return (a = yo("" + a, f.mode, d)), (a.return = f), a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case gr:
                    return (
                        (d = Gr(a.type, a.key, a.props, null, f.mode, d)),
                        (d.ref = Pn(f, null, a)),
                        (d.return = f),
                        d
                    );
                case Wt:
                    return (a = vo(a, f.mode, d)), (a.return = f), a;
                case st:
                    var y = a._init;
                    return h(f, y(a._payload), d);
            }
            if (An(a) || _n(a))
                return (a = Dt(a, f.mode, d, null)), (a.return = f), a;
            Rr(f, a);
        }
        return null;
    }
    function p(f, a, d, y) {
        var E = a !== null ? a.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number")
            return E !== null ? null : s(f, a, "" + d, y);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case gr:
                    return d.key === E ? u(f, a, d, y) : null;
                case Wt:
                    return d.key === E ? c(f, a, d, y) : null;
                case st:
                    return (E = d._init), p(f, a, E(d._payload), y);
            }
            if (An(d) || _n(d)) return E !== null ? null : m(f, a, d, y, null);
            Rr(f, d);
        }
        return null;
    }
    function g(f, a, d, y, E) {
        if ((typeof y == "string" && y !== "") || typeof y == "number")
            return (f = f.get(d) || null), s(a, f, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case gr:
                    return (
                        (f = f.get(y.key === null ? d : y.key) || null),
                        u(a, f, y, E)
                    );
                case Wt:
                    return (
                        (f = f.get(y.key === null ? d : y.key) || null),
                        c(a, f, y, E)
                    );
                case st:
                    var C = y._init;
                    return g(f, a, d, C(y._payload), E);
            }
            if (An(y) || _n(y))
                return (f = f.get(d) || null), m(a, f, y, E, null);
            Rr(a, y);
        }
        return null;
    }
    function w(f, a, d, y) {
        for (
            var E = null, C = null, x = a, N = (a = 0), Q = null;
            x !== null && N < d.length;
            N++
        ) {
            x.index > N ? ((Q = x), (x = null)) : (Q = x.sibling);
            var L = p(f, x, d[N], y);
            if (L === null) {
                x === null && (x = Q);
                break;
            }
            e && x && L.alternate === null && t(f, x),
                (a = o(L, a, N)),
                C === null ? (E = L) : (C.sibling = L),
                (C = L),
                (x = Q);
        }
        if (N === d.length) return n(f, x), j && Pt(f, N), E;
        if (x === null) {
            for (; N < d.length; N++)
                (x = h(f, d[N], y)),
                    x !== null &&
                        ((a = o(x, a, N)),
                        C === null ? (E = x) : (C.sibling = x),
                        (C = x));
            return j && Pt(f, N), E;
        }
        for (x = r(f, x); N < d.length; N++)
            (Q = g(x, f, N, d[N], y)),
                Q !== null &&
                    (e &&
                        Q.alternate !== null &&
                        x.delete(Q.key === null ? N : Q.key),
                    (a = o(Q, a, N)),
                    C === null ? (E = Q) : (C.sibling = Q),
                    (C = Q));
        return (
            e &&
                x.forEach(function (Oe) {
                    return t(f, Oe);
                }),
            j && Pt(f, N),
            E
        );
    }
    function k(f, a, d, y) {
        var E = _n(d);
        if (typeof E != "function") throw Error(v(150));
        if (((d = E.call(d)), d == null)) throw Error(v(151));
        for (
            var C = (E = null), x = a, N = (a = 0), Q = null, L = d.next();
            x !== null && !L.done;
            N++, L = d.next()
        ) {
            x.index > N ? ((Q = x), (x = null)) : (Q = x.sibling);
            var Oe = p(f, x, L.value, y);
            if (Oe === null) {
                x === null && (x = Q);
                break;
            }
            e && x && Oe.alternate === null && t(f, x),
                (a = o(Oe, a, N)),
                C === null ? (E = Oe) : (C.sibling = Oe),
                (C = Oe),
                (x = Q);
        }
        if (L.done) return n(f, x), j && Pt(f, N), E;
        if (x === null) {
            for (; !L.done; N++, L = d.next())
                (L = h(f, L.value, y)),
                    L !== null &&
                        ((a = o(L, a, N)),
                        C === null ? (E = L) : (C.sibling = L),
                        (C = L));
            return j && Pt(f, N), E;
        }
        for (x = r(f, x); !L.done; N++, L = d.next())
            (L = g(x, f, N, L.value, y)),
                L !== null &&
                    (e &&
                        L.alternate !== null &&
                        x.delete(L.key === null ? N : L.key),
                    (a = o(L, a, N)),
                    C === null ? (E = L) : (C.sibling = L),
                    (C = L));
        return (
            e &&
                x.forEach(function (Sn) {
                    return t(f, Sn);
                }),
            j && Pt(f, N),
            E
        );
    }
    function F(f, a, d, y) {
        if (
            (typeof d == "object" &&
                d !== null &&
                d.type === Qt &&
                d.key === null &&
                (d = d.props.children),
            typeof d == "object" && d !== null)
        ) {
            switch (d.$$typeof) {
                case gr:
                    e: {
                        for (var E = d.key, C = a; C !== null; ) {
                            if (C.key === E) {
                                if (((E = d.type), E === Qt)) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling),
                                            (a = i(C, d.props.children)),
                                            (a.return = f),
                                            (f = a);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === E ||
                                    (typeof E == "object" &&
                                        E !== null &&
                                        E.$$typeof === st &&
                                        uu(E) === C.type)
                                ) {
                                    n(f, C.sibling),
                                        (a = i(C, d.props)),
                                        (a.ref = Pn(f, C, d)),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                }
                                n(f, C);
                                break;
                            } else t(f, C);
                            C = C.sibling;
                        }
                        d.type === Qt
                            ? ((a = Dt(d.props.children, f.mode, y, d.key)),
                              (a.return = f),
                              (f = a))
                            : ((y = Gr(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  y
                              )),
                              (y.ref = Pn(f, a, d)),
                              (y.return = f),
                              (f = y));
                    }
                    return l(f);
                case Wt:
                    e: {
                        for (C = d.key; a !== null; ) {
                            if (a.key === C)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    a.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, a.sibling),
                                        (a = i(a, d.children || [])),
                                        (a.return = f),
                                        (f = a);
                                    break e;
                                } else {
                                    n(f, a);
                                    break;
                                }
                            else t(f, a);
                            a = a.sibling;
                        }
                        (a = vo(d, f.mode, y)), (a.return = f), (f = a);
                    }
                    return l(f);
                case st:
                    return (C = d._init), F(f, a, C(d._payload), y);
            }
            if (An(d)) return w(f, a, d, y);
            if (_n(d)) return k(f, a, d, y);
            Rr(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d),
              a !== null && a.tag === 6
                  ? (n(f, a.sibling), (a = i(a, d)), (a.return = f), (f = a))
                  : (n(f, a), (a = yo(d, f.mode, y)), (a.return = f), (f = a)),
              l(f))
            : n(f, a);
    }
    return F;
}
var pn = ic(!0),
    oc = ic(!1),
    hr = {},
    We = Ct(hr),
    ir = Ct(hr),
    or = Ct(hr);
function zt(e) {
    if (e === hr) throw Error(v(174));
    return e;
}
function ql(e, t) {
    switch ((D(or, t), D(ir, e), D(We, hr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Oo(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Oo(t, e));
    }
    B(We), D(We, t);
}
function hn() {
    B(We), B(ir), B(or);
}
function lc(e) {
    zt(or.current);
    var t = zt(We.current),
        n = Oo(t, e.type);
    t !== n && (D(ir, e), D(We, n));
}
function Xl(e) {
    ir.current === e && (B(We), B(ir));
}
var V = Ct(0);
function yi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var ao = [];
function Gl() {
    for (var e = 0; e < ao.length; e++)
        ao[e]._workInProgressVersionPrimary = null;
    ao.length = 0;
}
var Qr = ot.ReactCurrentDispatcher,
    co = ot.ReactCurrentBatchConfig,
    Bt = 0,
    $ = null,
    G = null,
    b = null,
    vi = !1,
    $n = !1,
    lr = 0,
    dp = 0;
function oe() {
    throw Error(v(321));
}
function Jl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!je(e[n], t[n])) return !1;
    return !0;
}
function Zl(e, t, n, r, i, o) {
    if (
        ((Bt = o),
        ($ = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Qr.current = e === null || e.memoizedState === null ? yp : vp),
        (e = n(r, i)),
        $n)
    ) {
        o = 0;
        do {
            if ((($n = !1), (lr = 0), 25 <= o)) throw Error(v(301));
            (o += 1),
                (b = G = null),
                (t.updateQueue = null),
                (Qr.current = gp),
                (e = n(r, i));
        } while ($n);
    }
    if (
        ((Qr.current = gi),
        (t = G !== null && G.next !== null),
        (Bt = 0),
        (b = G = $ = null),
        (vi = !1),
        t)
    )
        throw Error(v(300));
    return e;
}
function bl() {
    var e = lr !== 0;
    return (lr = 0), e;
}
function Ve() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return b === null ? ($.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
    if (G === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = G.next;
    var t = b === null ? $.memoizedState : b.next;
    if (t !== null) (b = t), (G = e);
    else {
        if (e === null) throw Error(v(310));
        (G = e),
            (e = {
                memoizedState: G.memoizedState,
                baseState: G.baseState,
                baseQueue: G.baseQueue,
                queue: G.queue,
                next: null,
            }),
            b === null ? ($.memoizedState = b = e) : (b = b.next = e);
    }
    return b;
}
function sr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function fo(e) {
    var t = Le(),
        n = t.queue;
    if (n === null) throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = G,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            (i.next = o.next), (o.next = l);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var s = (l = null),
            u = null,
            c = o;
        do {
            var m = c.lane;
            if ((Bt & m) === m)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var h = {
                    lane: m,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                u === null ? ((s = u = h), (l = r)) : (u = u.next = h),
                    ($.lanes |= m),
                    (Ft |= m);
            }
            c = c.next;
        } while (c !== null && c !== o);
        u === null ? (l = r) : (u.next = s),
            je(r, t.memoizedState) || (he = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), ($.lanes |= o), (Ft |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function po(e) {
    var t = Le(),
        n = t.queue;
    if (n === null) throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = (i = i.next);
        do (o = e(o, l.action)), (l = l.next);
        while (l !== i);
        je(o, t.memoizedState) || (he = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function sc() {}
function uc(e, t) {
    var n = $,
        r = Le(),
        i = t(),
        o = !je(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (he = !0)),
        (r = r.queue),
        es(fc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            ur(9, cc.bind(null, n, r, i, t), void 0, null),
            ee === null)
        )
            throw Error(v(349));
        Bt & 30 || ac(n, t, i);
    }
    return i;
}
function ac(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = $.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              ($.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function cc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), dc(t) && pc(e);
}
function fc(e, t, n) {
    return n(function () {
        dc(t) && pc(e);
    });
}
function dc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !je(e, n);
    } catch {
        return !0;
    }
}
function pc(e) {
    var t = rt(e, 1);
    t !== null && Fe(t, e, 1, -1);
}
function au(e) {
    var t = Ve();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: sr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = mp.bind(null, $, e)),
        [t.memoizedState, e]
    );
}
function ur(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = $.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              ($.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function hc() {
    return Le().memoizedState;
}
function Kr(e, t, n, r) {
    var i = Ve();
    ($.flags |= e),
        (i.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ai(e, t, n, r) {
    var i = Le();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (G !== null) {
        var l = G.memoizedState;
        if (((o = l.destroy), r !== null && Jl(r, l.deps))) {
            i.memoizedState = ur(t, n, o, r);
            return;
        }
    }
    ($.flags |= e), (i.memoizedState = ur(1 | t, n, o, r));
}
function cu(e, t) {
    return Kr(8390656, 8, e, t);
}
function es(e, t) {
    return Ai(2048, 8, e, t);
}
function mc(e, t) {
    return Ai(4, 2, e, t);
}
function yc(e, t) {
    return Ai(4, 4, e, t);
}
function vc(e, t) {
    if (typeof t == "function")
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
function gc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ai(4, 4, vc.bind(null, t, e), n)
    );
}
function ts() {}
function wc(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jl(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function kc(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jl(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sc(e, t, n) {
    return Bt & 21
        ? (je(n, t) ||
              ((n = Ca()), ($.lanes |= n), (Ft |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (he = !0)),
          (e.memoizedState = n));
}
function pp(e, t) {
    var n = A;
    (A = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = co.transition;
    co.transition = {};
    try {
        e(!1), t();
    } finally {
        (A = n), (co.transition = r);
    }
}
function Ec() {
    return Le().memoizedState;
}
function hp(e, t, n) {
    var r = wt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        _c(e))
    )
        Cc(t, n);
    else if (((n = ec(e, t, n, r)), n !== null)) {
        var i = ce();
        Fe(n, e, r, i), xc(n, t, r);
    }
}
function mp(e, t, n) {
    var r = wt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (_c(e)) Cc(t, i);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var l = t.lastRenderedState,
                    s = o(l, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), je(s, l))) {
                    var u = t.interleaved;
                    u === null
                        ? ((i.next = i), Kl(t))
                        : ((i.next = u.next), (u.next = i)),
                        (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = ec(e, t, i, r)),
            n !== null && ((i = ce()), Fe(n, e, r, i), xc(n, t, r));
    }
}
function _c(e) {
    var t = e.alternate;
    return e === $ || (t !== null && t === $);
}
function Cc(e, t) {
    $n = vi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function xc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), zl(e, n);
    }
}
var gi = {
        readContext: Re,
        useCallback: oe,
        useContext: oe,
        useEffect: oe,
        useImperativeHandle: oe,
        useInsertionEffect: oe,
        useLayoutEffect: oe,
        useMemo: oe,
        useReducer: oe,
        useRef: oe,
        useState: oe,
        useDebugValue: oe,
        useDeferredValue: oe,
        useTransition: oe,
        useMutableSource: oe,
        useSyncExternalStore: oe,
        useId: oe,
        unstable_isNewReconciler: !1,
    },
    yp = {
        readContext: Re,
        useCallback: function (e, t) {
            return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Re,
        useEffect: cu,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Kr(4194308, 4, vc.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Kr(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Kr(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ve();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Ve();
            return (
                (t = n !== void 0 ? n(t) : t),
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
                (e = e.dispatch = hp.bind(null, $, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Ve();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: au,
        useDebugValue: ts,
        useDeferredValue: function (e) {
            return (Ve().memoizedState = e);
        },
        useTransition: function () {
            var e = au(!1),
                t = e[0];
            return (e = pp.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = $,
                i = Ve();
            if (j) {
                if (n === void 0) throw Error(v(407));
                n = n();
            } else {
                if (((n = t()), ee === null)) throw Error(v(349));
                Bt & 30 || ac(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                cu(fc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                ur(9, cc.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Ve(),
                t = ee.identifierPrefix;
            if (j) {
                var n = Ze,
                    r = Je;
                (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = lr++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = dp++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    vp = {
        readContext: Re,
        useCallback: wc,
        useContext: Re,
        useEffect: es,
        useImperativeHandle: gc,
        useInsertionEffect: mc,
        useLayoutEffect: yc,
        useMemo: kc,
        useReducer: fo,
        useRef: hc,
        useState: function () {
            return fo(sr);
        },
        useDebugValue: ts,
        useDeferredValue: function (e) {
            var t = Le();
            return Sc(t, G.memoizedState, e);
        },
        useTransition: function () {
            var e = fo(sr)[0],
                t = Le().memoizedState;
            return [e, t];
        },
        useMutableSource: sc,
        useSyncExternalStore: uc,
        useId: Ec,
        unstable_isNewReconciler: !1,
    },
    gp = {
        readContext: Re,
        useCallback: wc,
        useContext: Re,
        useEffect: es,
        useImperativeHandle: gc,
        useInsertionEffect: mc,
        useLayoutEffect: yc,
        useMemo: kc,
        useReducer: po,
        useRef: hc,
        useState: function () {
            return po(sr);
        },
        useDebugValue: ts,
        useDeferredValue: function (e) {
            var t = Le();
            return G === null
                ? (t.memoizedState = e)
                : Sc(t, G.memoizedState, e);
        },
        useTransition: function () {
            var e = po(sr)[0],
                t = Le().memoizedState;
            return [e, t];
        },
        useMutableSource: sc,
        useSyncExternalStore: uc,
        useId: Ec,
        unstable_isNewReconciler: !1,
    };
function mn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Kf(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function ho(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function el(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var wp = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
    (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            ki || ((ki = !0), (cl = r)), el(e, t);
        }),
        n
    );
}
function Tc(e, t, n) {
    (n = et(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                el(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                el(e, t),
                    typeof r != "function" &&
                        (gt === null ? (gt = new Set([this])) : gt.add(this));
                var l = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: l !== null ? l : "",
                });
            }),
        n
    );
}
function fu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new wp();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Ap.bind(null, e, t, n)), t.then(e, e));
}
function du(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function pu(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = et(-1, 1)), (t.tag = 2), vt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var kp = ot.ReactCurrentOwner,
    he = !1;
function ae(e, t, n, r) {
    t.child = e === null ? oc(t, null, n, r) : pn(t, e.child, n, r);
}
function hu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        sn(t, i),
        (r = Zl(e, t, n, r, o, i)),
        (n = bl()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              it(e, t, i))
            : (j && n && Ul(t), (t.flags |= 1), ae(e, t, r, i), t.child)
    );
}
function mu(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !as(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Pc(e, t, o, r, i))
            : ((e = Gr(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var l = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : er),
            n(l, r) && e.ref === t.ref)
        )
            return it(e, t, i);
    }
    return (
        (t.flags |= 1),
        (e = kt(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Pc(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (er(o, r) && e.ref === t.ref)
            if (((he = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
                e.flags & 131072 && (he = !0);
            else return (t.lanes = e.lanes), it(e, t, i);
    }
    return tl(e, t, n, r, i);
}
function Rc(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                D(tn, ge),
                (ge |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    D(tn, ge),
                    (ge |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                D(tn, ge),
                (ge |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            D(tn, ge),
            (ge |= r);
    return ae(e, t, i, n), t.child;
}
function Lc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function tl(e, t, n, r, i) {
    var o = ye(n) ? Mt : ue.current;
    return (
        (o = fn(t, o)),
        sn(t, i),
        (n = Zl(e, t, n, r, o, i)),
        (r = bl()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              it(e, t, i))
            : (j && r && Ul(t), (t.flags |= 1), ae(e, t, n, i), t.child)
    );
}
function yu(e, t, n, r, i) {
    if (ye(n)) {
        var o = !0;
        ci(t);
    } else o = !1;
    if ((sn(t, i), t.stateNode === null))
        Yr(e, t), rc(t, n, r), bo(t, n, r, i), (r = !0);
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s;
        var u = l.context,
            c = n.contextType;
        typeof c == "object" && c !== null
            ? (c = Re(c))
            : ((c = ye(n) ? Mt : ue.current), (c = fn(t, c)));
        var m = n.getDerivedStateFromProps,
            h =
                typeof m == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function";
        h ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== r || u !== c) && su(t, l, r, c)),
            (ut = !1);
        var p = t.memoizedState;
        (l.state = p),
            mi(t, r, l, i),
            (u = t.memoizedState),
            s !== r || p !== u || me.current || ut
                ? (typeof m == "function" &&
                      (Zo(t, n, m, r), (u = t.memoizedState)),
                  (s = ut || lu(t, n, s, r, p, u, c))
                      ? (h ||
                            (typeof l.UNSAFE_componentWillMount != "function" &&
                                typeof l.componentWillMount != "function") ||
                            (typeof l.componentWillMount == "function" &&
                                l.componentWillMount(),
                            typeof l.UNSAFE_componentWillMount == "function" &&
                                l.UNSAFE_componentWillMount()),
                        typeof l.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof l.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = c),
                  (r = s))
                : (typeof l.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (l = t.stateNode),
            tc(e, t),
            (s = t.memoizedProps),
            (c = t.type === t.elementType ? s : Ae(t.type, s)),
            (l.props = c),
            (h = t.pendingProps),
            (p = l.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = Re(u))
                : ((u = ye(n) ? Mt : ue.current), (u = fn(t, u)));
        var g = n.getDerivedStateFromProps;
        (m =
            typeof g == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function") ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== h || p !== u) && su(t, l, r, u)),
            (ut = !1),
            (p = t.memoizedState),
            (l.state = p),
            mi(t, r, l, i);
        var w = t.memoizedState;
        s !== h || p !== w || me.current || ut
            ? (typeof g == "function" &&
                  (Zo(t, n, g, r), (w = t.memoizedState)),
              (c = ut || lu(t, n, c, r, p, w, u) || !1)
                  ? (m ||
                        (typeof l.UNSAFE_componentWillUpdate != "function" &&
                            typeof l.componentWillUpdate != "function") ||
                        (typeof l.componentWillUpdate == "function" &&
                            l.componentWillUpdate(r, w, u),
                        typeof l.UNSAFE_componentWillUpdate == "function" &&
                            l.UNSAFE_componentWillUpdate(r, w, u)),
                    typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof l.componentDidUpdate != "function" ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate != "function" ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (l.props = r),
              (l.state = w),
              (l.context = u),
              (r = c))
            : (typeof l.componentDidUpdate != "function" ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return nl(e, t, n, r, o, i);
}
function nl(e, t, n, r, i, o) {
    Lc(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && tu(t, n, !1), it(e, t, o);
    (r = t.stateNode), (kp.current = t);
    var s =
        l && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && l
            ? ((t.child = pn(t, e.child, null, o)),
              (t.child = pn(t, null, s, o)))
            : ae(e, t, s, o),
        (t.memoizedState = r.state),
        i && tu(t, n, !0),
        t.child
    );
}
function Oc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? eu(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && eu(e, t.context, !1),
        ql(e, t.containerInfo);
}
function vu(e, t, n, r, i) {
    return dn(), $l(i), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var rl = { dehydrated: null, treeContext: null, retryLane: 0 };
function il(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function zc(e, t, n) {
    var r = t.pendingProps,
        i = V.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        s;
    if (
        ((s = l) ||
            (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        s
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        D(V, i & 1),
        e === null)
    )
        return (
            Go(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((l = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (l = { mode: "hidden", children: l }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = l))
                            : (o = Ii(l, r, 0, null)),
                        (e = Dt(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = il(n)),
                        (t.memoizedState = rl),
                        e)
                      : ns(t, l))
        );
    if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
        return Sp(e, t, l, r, s, i, n);
    if (o) {
        (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(l & 1) && t.child !== i
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = kt(i, u)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            s !== null
                ? (o = kt(s, o))
                : ((o = Dt(o, l, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (l = e.child.memoizedState),
            (l =
                l === null
                    ? il(n)
                    : {
                          baseLanes: l.baseLanes | n,
                          cachePool: null,
                          transitions: l.transitions,
                      }),
            (o.memoizedState = l),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = rl),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = kt(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ns(e, t) {
    return (
        (t = Ii({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Lr(e, t, n, r) {
    return (
        r !== null && $l(r),
        pn(t, e.child, null, n),
        (e = ns(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Sp(e, t, n, r, i, o, l) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = ho(Error(v(422)))), Lr(e, t, l, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = Ii({ mode: "visible", children: r.children }, i, 0, null)),
              (o = Dt(o, i, l, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && pn(t, e.child, null, l),
              (t.child.memoizedState = il(l)),
              (t.memoizedState = rl),
              o);
    if (!(t.mode & 1)) return Lr(e, t, l, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
        return (
            (r = s), (o = Error(v(419))), (r = ho(o, r, void 0)), Lr(e, t, l, r)
        );
    }
    if (((s = (l & e.childLanes) !== 0), he || s)) {
        if (((r = ee), r !== null)) {
            switch (l & -l) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
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
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | l) ? 0 : i),
                i !== 0 &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), rt(e, i), Fe(r, e, i, -1));
        }
        return us(), (r = ho(Error(v(421)))), Lr(e, t, l, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Dp.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (we = yt(i.nextSibling)),
          (ke = t),
          (j = !0),
          (Ie = null),
          e !== null &&
              ((Ce[xe++] = Je),
              (Ce[xe++] = Ze),
              (Ce[xe++] = It),
              (Je = e.id),
              (Ze = e.overflow),
              (It = t)),
          (t = ns(t, r.children)),
          (t.flags |= 4096),
          t);
}
function gu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Jo(e.return, t, n);
}
function mo(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i));
}
function Ac(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((ae(e, t, r.children, n), (r = V.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && gu(e, n, t);
                else if (e.tag === 19) gu(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((D(V, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && yi(e) === null && (i = n),
                        (n = n.sibling);
                (n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    mo(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && yi(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                mo(t, !0, n, null, o);
                break;
            case "together":
                mo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Yr(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ft |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(v(153));
    if (t.child !== null) {
        for (
            e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = kt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Ep(e, t, n) {
    switch (t.tag) {
        case 3:
            Oc(t), dn();
            break;
        case 5:
            lc(t);
            break;
        case 1:
            ye(t.type) && ci(t);
            break;
        case 4:
            ql(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            D(pi, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (D(V, V.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? zc(e, t, n)
                    : (D(V, V.current & 1),
                      (e = it(e, t, n)),
                      e !== null ? e.sibling : null);
            D(V, V.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Ac(e, t, n);
                t.flags |= 128;
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                D(V, V.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Rc(e, t, n);
    }
    return it(e, t, n);
}
var Dc, ol, Mc, Ic;
Dc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ol = function () {};
Mc = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), zt(We.current);
        var o = null;
        switch (n) {
            case "input":
                (i = To(e, i)), (r = To(e, r)), (o = []);
                break;
            case "select":
                (i = H({}, i, { value: void 0 })),
                    (r = H({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (i = Lo(e, i)), (r = Lo(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = ui);
        }
        zo(n, r);
        var l;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var s = i[c];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (Yn.hasOwnProperty(c)
                            ? o || (o = [])
                            : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (
                ((s = i != null ? i[c] : void 0),
                r.hasOwnProperty(c) && u !== s && (u != null || s != null))
            )
                if (c === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) ||
                                (u && u.hasOwnProperty(l)) ||
                                (n || (n = {}), (n[l] = ""));
                        for (l in u)
                            u.hasOwnProperty(l) &&
                                s[l] !== u[l] &&
                                (n || (n = {}), (n[l] = u[l]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (s = s ? s.__html : void 0),
                          u != null && s !== u && (o = o || []).push(c, u))
                        : c === "children"
                        ? (typeof u != "string" && typeof u != "number") ||
                          (o = o || []).push(c, "" + u)
                        : c !== "suppressContentEditableWarning" &&
                          c !== "suppressHydrationWarning" &&
                          (Yn.hasOwnProperty(c)
                              ? (u != null &&
                                    c === "onScroll" &&
                                    M("scroll", e),
                                o || s === u || (o = []))
                              : (o = o || []).push(c, u));
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
Ic = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Rn(e, t) {
    if (!j)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _p(e, t, n) {
    var r = t.pendingProps;
    switch ((Vl(t), t.tag)) {
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
            return le(t), null;
        case 1:
            return ye(t.type) && ai(), le(t), null;
        case 3:
            return (
                (r = t.stateNode),
                hn(),
                B(me),
                B(ue),
                Gl(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Pr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ie !== null && (pl(Ie), (Ie = null)))),
                ol(e, t),
                le(t),
                null
            );
        case 5:
            Xl(t);
            var i = zt(or.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Mc(e, t, n, r, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(v(166));
                    return le(t), null;
                }
                if (((e = zt(We.current)), Pr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[$e] = t), (r[rr] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            M("cancel", r), M("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            M("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Mn.length; i++) M(Mn[i], r);
                            break;
                        case "source":
                            M("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            M("error", r), M("load", r);
                            break;
                        case "details":
                            M("toggle", r);
                            break;
                        case "input":
                            Ts(r, o), M("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                M("invalid", r);
                            break;
                        case "textarea":
                            Rs(r, o), M("invalid", r);
                    }
                    zo(n, o), (i = null);
                    for (var l in o)
                        if (o.hasOwnProperty(l)) {
                            var s = o[l];
                            l === "children"
                                ? typeof s == "string"
                                    ? r.textContent !== s &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Tr(r.textContent, s, e),
                                      (i = ["children", s]))
                                    : typeof s == "number" &&
                                      r.textContent !== "" + s &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Tr(r.textContent, s, e),
                                      (i = ["children", "" + s]))
                                : Yn.hasOwnProperty(l) &&
                                  s != null &&
                                  l === "onScroll" &&
                                  M("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            wr(r), Ps(r, o, !0);
                            break;
                        case "textarea":
                            wr(r), Ls(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = ui);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (l = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = aa(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = l.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = l.createElement(n, { is: r.is }))
                                : ((e = l.createElement(n)),
                                  n === "select" &&
                                      ((l = e),
                                      r.multiple
                                          ? (l.multiple = !0)
                                          : r.size && (l.size = r.size)))
                            : (e = l.createElementNS(e, n)),
                        (e[$e] = t),
                        (e[rr] = r),
                        Dc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((l = Ao(n, r)), n)) {
                            case "dialog":
                                M("cancel", e), M("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                M("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Mn.length; i++) M(Mn[i], e);
                                i = r;
                                break;
                            case "source":
                                M("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                M("error", e), M("load", e), (i = r);
                                break;
                            case "details":
                                M("toggle", e), (i = r);
                                break;
                            case "input":
                                Ts(e, r), (i = To(e, r)), M("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = H({}, r, { value: void 0 })),
                                    M("invalid", e);
                                break;
                            case "textarea":
                                Rs(e, r), (i = Lo(e, r)), M("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        zo(n, i), (s = i);
                        for (o in s)
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                o === "style"
                                    ? da(e, u)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && ca(e, u))
                                    : o === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          qn(e, u)
                                        : typeof u == "number" && qn(e, "" + u)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (Yn.hasOwnProperty(o)
                                          ? u != null &&
                                            o === "onScroll" &&
                                            M("scroll", e)
                                          : u != null && Nl(e, o, u, l));
                            }
                        switch (n) {
                            case "input":
                                wr(e), Ps(e, r, !1);
                                break;
                            case "textarea":
                                wr(e), Ls(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + St(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? nn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          nn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof i.onClick == "function" &&
                                    (e.onclick = ui);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(v(166));
                if (((n = zt(or.current)), zt(We.current), Pr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[$e] = t),
                        (o = r.nodeValue !== n) && ((e = ke), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[$e] = t),
                        (t.stateNode = r);
            }
            return le(t), null;
        case 13:
            if (
                (B(V),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (j && we !== null && t.mode & 1 && !(t.flags & 128))
                    ba(), dn(), (t.flags |= 98560), (o = !1);
                else if (((o = Pr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(v(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(v(317));
                        o[$e] = t;
                    } else
                        dn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    le(t), (o = !1);
                } else Ie !== null && (pl(Ie), (Ie = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || V.current & 1
                              ? J === 0 && (J = 3)
                              : us())),
                  t.updateQueue !== null && (t.flags |= 4),
                  le(t),
                  null);
        case 4:
            return (
                hn(),
                ol(e, t),
                e === null && tr(t.stateNode.containerInfo),
                le(t),
                null
            );
        case 10:
            return Ql(t.type._context), le(t), null;
        case 17:
            return ye(t.type) && ai(), le(t), null;
        case 19:
            if ((B(V), (o = t.memoizedState), o === null)) return le(t), null;
            if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
                if (r) Rn(o, !1);
                else {
                    if (J !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((l = yi(e)), l !== null)) {
                                for (
                                    t.flags |= 128,
                                        Rn(o, !1),
                                        r = l.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (l = o.alternate),
                                        l === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = l.childLanes),
                                              (o.lanes = l.lanes),
                                              (o.child = l.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  l.memoizedProps),
                                              (o.memoizedState =
                                                  l.memoizedState),
                                              (o.updateQueue = l.updateQueue),
                                              (o.type = l.type),
                                              (e = l.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return D(V, (V.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        Y() > yn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Rn(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = yi(l)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Rn(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !l.alternate &&
                                !j)
                        )
                            return le(t), null;
                    } else
                        2 * Y() - o.renderingStartTime > yn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Rn(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((l.sibling = t.child), (t.child = l))
                    : ((n = o.last),
                      n !== null ? (n.sibling = l) : (t.child = l),
                      (o.last = l));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Y()),
                  (t.sibling = null),
                  (n = V.current),
                  D(V, r ? (n & 1) | 2 : n & 1),
                  t)
                : (le(t), null);
        case 22:
        case 23:
            return (
                ss(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? ge & 1073741824 &&
                      (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : le(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(v(156, t.tag));
}
function Cp(e, t) {
    switch ((Vl(t), t.tag)) {
        case 1:
            return (
                ye(t.type) && ai(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                hn(),
                B(me),
                B(ue),
                Gl(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Xl(t), null;
        case 13:
            if (
                (B(V),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(v(340));
                dn();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return B(V), null;
        case 4:
            return hn(), null;
        case 10:
            return Ql(t.type._context), null;
        case 22:
        case 23:
            return ss(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Or = !1,
    se = !1,
    xp = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;
function en(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                W(e, t, r);
            }
        else n.current = null;
}
function ll(e, t, n) {
    try {
        n();
    } catch (r) {
        W(e, t, r);
    }
}
var wu = !1;
function Np(e, t) {
    if (((Ho = oi), (e = Ua()), jl(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var l = 0,
                        s = -1,
                        u = -1,
                        c = 0,
                        m = 0,
                        h = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var g;
                            h !== n ||
                                (i !== 0 && h.nodeType !== 3) ||
                                (s = l + i),
                                h !== o ||
                                    (r !== 0 && h.nodeType !== 3) ||
                                    (u = l + r),
                                h.nodeType === 3 && (l += h.nodeValue.length),
                                (g = h.firstChild) !== null;

                        )
                            (p = h), (h = g);
                        for (;;) {
                            if (h === e) break t;
                            if (
                                (p === n && ++c === i && (s = l),
                                p === o && ++m === r && (u = l),
                                (g = h.nextSibling) !== null)
                            )
                                break;
                            (h = p), (p = h.parentNode);
                        }
                        h = g;
                    }
                    n = s === -1 || u === -1 ? null : { start: s, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Wo = { focusedElem: e, selectionRange: n }, oi = !1, S = t;
        S !== null;

    )
        if (
            ((t = S),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (S = e);
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var k = w.memoizedProps,
                                        F = w.memoizedState,
                                        f = t.stateNode,
                                        a = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? k
                                                : Ae(t.type, k),
                                            F
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = "")
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(v(163));
                        }
                } catch (y) {
                    W(t, t.return, y);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (S = e);
                    break;
                }
                S = t.return;
            }
    return (w = wu), (wu = !1), w;
}
function Hn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && ll(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Di(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
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
function sl(e) {
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
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Bc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Bc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[$e],
                delete t[rr],
                delete t[Yo],
                delete t[up],
                delete t[ap])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Fc(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ul(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = ui));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ul(e, t, n), e = e.sibling; e !== null; )
            ul(e, t, n), (e = e.sibling);
}
function al(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (al(e, t, n), e = e.sibling; e !== null; )
            al(e, t, n), (e = e.sibling);
}
var te = null,
    De = !1;
function lt(e, t, n) {
    for (n = n.child; n !== null; ) jc(e, t, n), (n = n.sibling);
}
function jc(e, t, n) {
    if (He && typeof He.onCommitFiberUnmount == "function")
        try {
            He.onCommitFiberUnmount(Ni, n);
        } catch {}
    switch (n.tag) {
        case 5:
            se || en(n, t);
        case 6:
            var r = te,
                i = De;
            (te = null),
                lt(e, t, n),
                (te = r),
                (De = i),
                te !== null &&
                    (De
                        ? ((e = te),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : te.removeChild(n.stateNode));
            break;
        case 18:
            te !== null &&
                (De
                    ? ((e = te),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? so(e.parentNode, n)
                          : e.nodeType === 1 && so(e, n),
                      Zn(e))
                    : so(te, n.stateNode));
            break;
        case 4:
            (r = te),
                (i = De),
                (te = n.stateNode.containerInfo),
                (De = !0),
                lt(e, t, n),
                (te = r),
                (De = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !se &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next;
                do {
                    var o = i,
                        l = o.destroy;
                    (o = o.tag),
                        l !== void 0 && (o & 2 || o & 4) && ll(n, t, l),
                        (i = i.next);
                } while (i !== r);
            }
            lt(e, t, n);
            break;
        case 1:
            if (
                !se &&
                (en(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (s) {
                    W(n, t, s);
                }
            lt(e, t, n);
            break;
        case 21:
            lt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((se = (r = se) || n.memoizedState !== null),
                  lt(e, t, n),
                  (se = r))
                : lt(e, t, n);
            break;
        default:
            lt(e, t, n);
    }
}
function Su(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new xp()),
            t.forEach(function (r) {
                var i = Mp.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    l = t,
                    s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 5:
                            (te = s.stateNode), (De = !1);
                            break e;
                        case 3:
                            (te = s.stateNode.containerInfo), (De = !0);
                            break e;
                        case 4:
                            (te = s.stateNode.containerInfo), (De = !0);
                            break e;
                    }
                    s = s.return;
                }
                if (te === null) throw Error(v(160));
                jc(o, l, i), (te = null), (De = !1);
                var u = i.alternate;
                u !== null && (u.return = null), (i.return = null);
            } catch (c) {
                W(i, t, c);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Uc(t, e), (t = t.sibling);
}
function Uc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(t, e), Ue(e), r & 4)) {
                try {
                    Hn(3, e, e.return), Di(3, e);
                } catch (k) {
                    W(e, e.return, k);
                }
                try {
                    Hn(5, e, e.return);
                } catch (k) {
                    W(e, e.return, k);
                }
            }
            break;
        case 1:
            ze(t, e), Ue(e), r & 512 && n !== null && en(n, n.return);
            break;
        case 5:
            if (
                (ze(t, e),
                Ue(e),
                r & 512 && n !== null && en(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode;
                try {
                    qn(i, "");
                } catch (k) {
                    W(e, e.return, k);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    s = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        s === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            sa(i, o),
                            Ao(s, l);
                        var c = Ao(s, o);
                        for (l = 0; l < u.length; l += 2) {
                            var m = u[l],
                                h = u[l + 1];
                            m === "style"
                                ? da(i, h)
                                : m === "dangerouslySetInnerHTML"
                                ? ca(i, h)
                                : m === "children"
                                ? qn(i, h)
                                : Nl(i, m, h, c);
                        }
                        switch (s) {
                            case "input":
                                Po(i, o);
                                break;
                            case "textarea":
                                ua(i, o);
                                break;
                            case "select":
                                var p = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null
                                    ? nn(i, !!o.multiple, g, !1)
                                    : p !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? nn(
                                                i,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : nn(
                                                i,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        i[rr] = o;
                    } catch (k) {
                        W(e, e.return, k);
                    }
            }
            break;
        case 6:
            if ((ze(t, e), Ue(e), r & 4)) {
                if (e.stateNode === null) throw Error(v(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (k) {
                    W(e, e.return, k);
                }
            }
            break;
        case 3:
            if (
                (ze(t, e),
                Ue(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Zn(t.containerInfo);
                } catch (k) {
                    W(e, e.return, k);
                }
            break;
        case 4:
            ze(t, e), Ue(e);
            break;
        case 13:
            ze(t, e),
                Ue(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((o = i.memoizedState !== null),
                    (i.stateNode.isHidden = o),
                    !o ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (os = Y())),
                r & 4 && Su(e);
            break;
        case 22:
            if (
                ((m = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((se = (c = se) || m), ze(t, e), (se = c))
                    : ze(t, e),
                Ue(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !m && e.mode & 1)
                )
                    for (S = e, m = e.child; m !== null; ) {
                        for (h = S = m; S !== null; ) {
                            switch (((p = S), (g = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hn(4, p, p.return);
                                    break;
                                case 1:
                                    en(p, p.return);
                                    var w = p.stateNode;
                                    if (
                                        typeof w.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r),
                                                (w.props = t.memoizedProps),
                                                (w.state = t.memoizedState),
                                                w.componentWillUnmount();
                                        } catch (k) {
                                            W(r, n, k);
                                        }
                                    }
                                    break;
                                case 5:
                                    en(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        _u(h);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = p), (S = g)) : _u(h);
                        }
                        m = m.sibling;
                    }
                e: for (m = null, h = e; ; ) {
                    if (h.tag === 5) {
                        if (m === null) {
                            m = h;
                            try {
                                (i = h.stateNode),
                                    c
                                        ? ((o = i.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((s = h.stateNode),
                                          (u = h.memoizedProps.style),
                                          (l =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (s.style.display = fa("display", l)));
                            } catch (k) {
                                W(e, e.return, k);
                            }
                        }
                    } else if (h.tag === 6) {
                        if (m === null)
                            try {
                                h.stateNode.nodeValue = c
                                    ? ""
                                    : h.memoizedProps;
                            } catch (k) {
                                W(e, e.return, k);
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) ||
                            h.memoizedState === null ||
                            h === e) &&
                        h.child !== null
                    ) {
                        (h.child.return = h), (h = h.child);
                        continue;
                    }
                    if (h === e) break e;
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === e) break e;
                        m === h && (m = null), (h = h.return);
                    }
                    m === h && (m = null),
                        (h.sibling.return = h.return),
                        (h = h.sibling);
                }
            }
            break;
        case 19:
            ze(t, e), Ue(e), r & 4 && Su(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Ue(e);
    }
}
function Ue(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Fc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(v(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (qn(i, ""), (r.flags &= -33));
                    var o = ku(e);
                    al(e, o, i);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = ku(e);
                    ul(e, s, l);
                    break;
                default:
                    throw Error(v(161));
            }
        } catch (u) {
            W(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Tp(e, t, n) {
    (S = e), Vc(e);
}
function Vc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var i = S,
            o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Or;
            if (!l) {
                var s = i.alternate,
                    u = (s !== null && s.memoizedState !== null) || se;
                s = Or;
                var c = se;
                if (((Or = l), (se = u) && !c))
                    for (S = i; S !== null; )
                        (l = S),
                            (u = l.child),
                            l.tag === 22 && l.memoizedState !== null
                                ? Cu(i)
                                : u !== null
                                ? ((u.return = l), (S = u))
                                : Cu(i);
                for (; o !== null; ) (S = o), Vc(o), (o = o.sibling);
                (S = i), (Or = s), (se = c);
            }
            Eu(e);
        } else
            i.subtreeFlags & 8772 && o !== null
                ? ((o.return = i), (S = o))
                : Eu(e);
    }
}
function Eu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            se || Di(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !se)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Ae(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && ou(t, o, r);
                            break;
                        case 3:
                            var l = t.updateQueue;
                            if (l !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                ou(t, l, n);
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = s;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
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
                                var c = t.alternate;
                                if (c !== null) {
                                    var m = c.memoizedState;
                                    if (m !== null) {
                                        var h = m.dehydrated;
                                        h !== null && Zn(h);
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
                            throw Error(v(163));
                    }
                se || (t.flags & 512 && sl(t));
            } catch (p) {
                W(t, t.return, p);
            }
        }
        if (t === e) {
            S = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (S = n);
            break;
        }
        S = t.return;
    }
}
function _u(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (S = n);
            break;
        }
        S = t.return;
    }
}
function Cu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Di(4, t);
                    } catch (u) {
                        W(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            W(t, i, u);
                        }
                    }
                    var o = t.return;
                    try {
                        sl(t);
                    } catch (u) {
                        W(t, o, u);
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        sl(t);
                    } catch (u) {
                        W(t, l, u);
                    }
            }
        } catch (u) {
            W(t, t.return, u);
        }
        if (t === e) {
            S = null;
            break;
        }
        var s = t.sibling;
        if (s !== null) {
            (s.return = t.return), (S = s);
            break;
        }
        S = t.return;
    }
}
var Pp = Math.ceil,
    wi = ot.ReactCurrentDispatcher,
    rs = ot.ReactCurrentOwner,
    Pe = ot.ReactCurrentBatchConfig,
    z = 0,
    ee = null,
    q = null,
    re = 0,
    ge = 0,
    tn = Ct(0),
    J = 0,
    ar = null,
    Ft = 0,
    Mi = 0,
    is = 0,
    Wn = null,
    pe = null,
    os = 0,
    yn = 1 / 0,
    qe = null,
    ki = !1,
    cl = null,
    gt = null,
    zr = !1,
    dt = null,
    Si = 0,
    Qn = 0,
    fl = null,
    qr = -1,
    Xr = 0;
function ce() {
    return z & 6 ? Y() : qr !== -1 ? qr : (qr = Y());
}
function wt(e) {
    return e.mode & 1
        ? z & 2 && re !== 0
            ? re & -re
            : fp.transition !== null
            ? (Xr === 0 && (Xr = Ca()), Xr)
            : ((e = A),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Oa(e.type))),
              e)
        : 1;
}
function Fe(e, t, n, r) {
    if (50 < Qn) throw ((Qn = 0), (fl = null), Error(v(185)));
    fr(e, n, r),
        (!(z & 2) || e !== ee) &&
            (e === ee && (!(z & 2) && (Mi |= n), J === 4 && ct(e, re)),
            ve(e, r),
            n === 1 &&
                z === 0 &&
                !(t.mode & 1) &&
                ((yn = Y() + 500), Oi && xt()));
}
function ve(e, t) {
    var n = e.callbackNode;
    fd(e, t);
    var r = ii(e, e === ee ? re : 0);
    if (r === 0)
        n !== null && As(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && As(n), t === 1))
            e.tag === 0 ? cp(xu.bind(null, e)) : Ga(xu.bind(null, e)),
                lp(function () {
                    !(z & 6) && xt();
                }),
                (n = null);
        else {
            switch (xa(r)) {
                case 1:
                    n = Ol;
                    break;
                case 4:
                    n = Ea;
                    break;
                case 16:
                    n = ri;
                    break;
                case 536870912:
                    n = _a;
                    break;
                default:
                    n = ri;
            }
            n = Xc(n, $c.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function $c(e, t) {
    if (((qr = -1), (Xr = 0), z & 6)) throw Error(v(327));
    var n = e.callbackNode;
    if (un() && e.callbackNode !== n) return null;
    var r = ii(e, e === ee ? re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ei(e, r);
    else {
        t = r;
        var i = z;
        z |= 2;
        var o = Wc();
        (ee !== e || re !== t) && ((qe = null), (yn = Y() + 500), At(e, t));
        do
            try {
                Op();
                break;
            } catch (s) {
                Hc(e, s);
            }
        while (!0);
        Wl(),
            (wi.current = o),
            (z = i),
            q !== null ? (t = 0) : ((ee = null), (re = 0), (t = J));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = Fo(e)), i !== 0 && ((r = i), (t = dl(e, i)))),
            t === 1)
        )
            throw ((n = ar), At(e, 0), ct(e, r), ve(e, Y()), n);
        if (t === 6) ct(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !Rp(i) &&
                    ((t = Ei(e, r)),
                    t === 2 &&
                        ((o = Fo(e)), o !== 0 && ((r = o), (t = dl(e, o)))),
                    t === 1))
            )
                throw ((n = ar), At(e, 0), ct(e, r), ve(e, Y()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(v(345));
                case 2:
                    Rt(e, pe, qe);
                    break;
                case 3:
                    if (
                        (ct(e, r),
                        (r & 130023424) === r && ((t = os + 500 - Y()), 10 < t))
                    ) {
                        if (ii(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            ce(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = Ko(Rt.bind(null, e, pe, qe), t);
                        break;
                    }
                    Rt(e, pe, qe);
                    break;
                case 4:
                    if ((ct(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var l = 31 - Be(r);
                        (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
                    }
                    if (
                        ((r = i),
                        (r = Y() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Pp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Ko(Rt.bind(null, e, pe, qe), r);
                        break;
                    }
                    Rt(e, pe, qe);
                    break;
                case 5:
                    Rt(e, pe, qe);
                    break;
                default:
                    throw Error(v(329));
            }
        }
    }
    return ve(e, Y()), e.callbackNode === n ? $c.bind(null, e) : null;
}
function dl(e, t) {
    var n = Wn;
    return (
        e.current.memoizedState.isDehydrated && (At(e, t).flags |= 256),
        (e = Ei(e, t)),
        e !== 2 && ((t = pe), (pe = n), t !== null && pl(t)),
        e
    );
}
function pl(e) {
    pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function Rp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!je(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function ct(e, t) {
    for (
        t &= ~is,
            t &= ~Mi,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Be(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function xu(e) {
    if (z & 6) throw Error(v(327));
    un();
    var t = ii(e, 0);
    if (!(t & 1)) return ve(e, Y()), null;
    var n = Ei(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Fo(e);
        r !== 0 && ((t = r), (n = dl(e, r)));
    }
    if (n === 1) throw ((n = ar), At(e, 0), ct(e, t), ve(e, Y()), n);
    if (n === 6) throw Error(v(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Rt(e, pe, qe),
        ve(e, Y()),
        null
    );
}
function ls(e, t) {
    var n = z;
    z |= 1;
    try {
        return e(t);
    } finally {
        (z = n), z === 0 && ((yn = Y() + 500), Oi && xt());
    }
}
function jt(e) {
    dt !== null && dt.tag === 0 && !(z & 6) && un();
    var t = z;
    z |= 1;
    var n = Pe.transition,
        r = A;
    try {
        if (((Pe.transition = null), (A = 1), e)) return e();
    } finally {
        (A = r), (Pe.transition = n), (z = t), !(z & 6) && xt();
    }
}
function ss() {
    (ge = tn.current), B(tn);
}
function At(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), op(n)), q !== null))
        for (n = q.return; n !== null; ) {
            var r = n;
            switch ((Vl(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && ai();
                    break;
                case 3:
                    hn(), B(me), B(ue), Gl();
                    break;
                case 5:
                    Xl(r);
                    break;
                case 4:
                    hn();
                    break;
                case 13:
                    B(V);
                    break;
                case 19:
                    B(V);
                    break;
                case 10:
                    Ql(r.type._context);
                    break;
                case 22:
                case 23:
                    ss();
            }
            n = n.return;
        }
    if (
        ((ee = e),
        (q = e = kt(e.current, null)),
        (re = ge = t),
        (J = 0),
        (ar = null),
        (is = Mi = Ft = 0),
        (pe = Wn = null),
        Ot !== null)
    ) {
        for (t = 0; t < Ot.length; t++)
            if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    (o.next = i), (r.next = l);
                }
                n.pending = r;
            }
        Ot = null;
    }
    return e;
}
function Hc(e, t) {
    do {
        var n = q;
        try {
            if ((Wl(), (Qr.current = gi), vi)) {
                for (var r = $.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                vi = !1;
            }
            if (
                ((Bt = 0),
                (b = G = $ = null),
                ($n = !1),
                (lr = 0),
                (rs.current = null),
                n === null || n.return === null)
            ) {
                (J = 1), (ar = t), (q = null);
                break;
            }
            e: {
                var o = e,
                    l = n.return,
                    s = n,
                    u = t;
                if (
                    ((t = re),
                    (s.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var c = u,
                        m = s,
                        h = m.tag;
                    if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var p = m.alternate;
                        p
                            ? ((m.updateQueue = p.updateQueue),
                              (m.memoizedState = p.memoizedState),
                              (m.lanes = p.lanes))
                            : ((m.updateQueue = null),
                              (m.memoizedState = null));
                    }
                    var g = du(l);
                    if (g !== null) {
                        (g.flags &= -257),
                            pu(g, l, s, o, t),
                            g.mode & 1 && fu(o, c, t),
                            (t = g),
                            (u = c);
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set();
                            k.add(u), (t.updateQueue = k);
                        } else w.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            fu(o, c, t), us();
                            break e;
                        }
                        u = Error(v(426));
                    }
                } else if (j && s.mode & 1) {
                    var F = du(l);
                    if (F !== null) {
                        !(F.flags & 65536) && (F.flags |= 256),
                            pu(F, l, s, o, t),
                            $l(mn(u, s));
                        break e;
                    }
                }
                (o = u = mn(u, s)),
                    J !== 4 && (J = 2),
                    Wn === null ? (Wn = [o]) : Wn.push(o),
                    (o = l);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var f = Nc(o, u, t);
                            iu(o, f);
                            break e;
                        case 1:
                            s = u;
                            var a = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof a.getDerivedStateFromError ==
                                    "function" ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            "function" &&
                                        (gt === null || !gt.has(d))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var y = Tc(o, s, t);
                                iu(o, y);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Kc(n);
        } catch (E) {
            (t = E), q === n && n !== null && (q = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Wc() {
    var e = wi.current;
    return (wi.current = gi), e === null ? gi : e;
}
function us() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
        ee === null || (!(Ft & 268435455) && !(Mi & 268435455)) || ct(ee, re);
}
function Ei(e, t) {
    var n = z;
    z |= 2;
    var r = Wc();
    (ee !== e || re !== t) && ((qe = null), At(e, t));
    do
        try {
            Lp();
            break;
        } catch (i) {
            Hc(e, i);
        }
    while (!0);
    if ((Wl(), (z = n), (wi.current = r), q !== null)) throw Error(v(261));
    return (ee = null), (re = 0), J;
}
function Lp() {
    for (; q !== null; ) Qc(q);
}
function Op() {
    for (; q !== null && !nd(); ) Qc(q);
}
function Qc(e) {
    var t = qc(e.alternate, e, ge);
    (e.memoizedProps = e.pendingProps),
        t === null ? Kc(e) : (q = t),
        (rs.current = null);
}
function Kc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Cp(n, t)), n !== null)) {
                (n.flags &= 32767), (q = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (J = 6), (q = null);
                return;
            }
        } else if (((n = _p(n, t, ge)), n !== null)) {
            q = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            q = t;
            return;
        }
        q = t = e;
    } while (t !== null);
    J === 0 && (J = 5);
}
function Rt(e, t, n) {
    var r = A,
        i = Pe.transition;
    try {
        (Pe.transition = null), (A = 1), zp(e, t, n, r);
    } finally {
        (Pe.transition = i), (A = r);
    }
    return null;
}
function zp(e, t, n, r) {
    do un();
    while (dt !== null);
    if (z & 6) throw Error(v(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(v(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (dd(e, o),
        e === ee && ((q = ee = null), (re = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            zr ||
            ((zr = !0),
            Xc(ri, function () {
                return un(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Pe.transition), (Pe.transition = null);
        var l = A;
        A = 1;
        var s = z;
        (z |= 4),
            (rs.current = null),
            Np(e, n),
            Uc(n, e),
            Zd(Wo),
            (oi = !!Ho),
            (Wo = Ho = null),
            (e.current = n),
            Tp(n),
            rd(),
            (z = s),
            (A = l),
            (Pe.transition = o);
    } else e.current = n;
    if (
        (zr && ((zr = !1), (dt = e), (Si = i)),
        (o = e.pendingLanes),
        o === 0 && (gt = null),
        ld(n.stateNode),
        ve(e, Y()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ki) throw ((ki = !1), (e = cl), (cl = null), e);
    return (
        Si & 1 && e.tag !== 0 && un(),
        (o = e.pendingLanes),
        o & 1 ? (e === fl ? Qn++ : ((Qn = 0), (fl = e))) : (Qn = 0),
        xt(),
        null
    );
}
function un() {
    if (dt !== null) {
        var e = xa(Si),
            t = Pe.transition,
            n = A;
        try {
            if (((Pe.transition = null), (A = 16 > e ? 16 : e), dt === null))
                var r = !1;
            else {
                if (((e = dt), (dt = null), (Si = 0), z & 6))
                    throw Error(v(331));
                var i = z;
                for (z |= 4, S = e.current; S !== null; ) {
                    var o = S,
                        l = o.child;
                    if (S.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var c = s[u];
                                for (S = c; S !== null; ) {
                                    var m = S;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hn(8, m, o);
                                    }
                                    var h = m.child;
                                    if (h !== null) (h.return = m), (S = h);
                                    else
                                        for (; S !== null; ) {
                                            m = S;
                                            var p = m.sibling,
                                                g = m.return;
                                            if ((Bc(m), m === c)) {
                                                S = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = g), (S = p);
                                                break;
                                            }
                                            S = g;
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var F = k.sibling;
                                        (k.sibling = null), (k = F);
                                    } while (k !== null);
                                }
                            }
                            S = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null)
                        (l.return = o), (S = l);
                    else
                        e: for (; S !== null; ) {
                            if (((o = S), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hn(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (S = f);
                                break e;
                            }
                            S = o.return;
                        }
                }
                var a = e.current;
                for (S = a; S !== null; ) {
                    l = S;
                    var d = l.child;
                    if (l.subtreeFlags & 2064 && d !== null)
                        (d.return = l), (S = d);
                    else
                        e: for (l = a; S !== null; ) {
                            if (((s = S), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Di(9, s);
                                    }
                                } catch (E) {
                                    W(s, s.return, E);
                                }
                            if (s === l) {
                                S = null;
                                break e;
                            }
                            var y = s.sibling;
                            if (y !== null) {
                                (y.return = s.return), (S = y);
                                break e;
                            }
                            S = s.return;
                        }
                }
                if (
                    ((z = i),
                    xt(),
                    He && typeof He.onPostCommitFiberRoot == "function")
                )
                    try {
                        He.onPostCommitFiberRoot(Ni, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (A = n), (Pe.transition = t);
        }
    }
    return !1;
}
function Nu(e, t, n) {
    (t = mn(n, t)),
        (t = Nc(e, t, 1)),
        (e = vt(e, t, 1)),
        (t = ce()),
        e !== null && (fr(e, 1, t), ve(e, t));
}
function W(e, t, n) {
    if (e.tag === 3) Nu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Nu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (gt === null || !gt.has(r)))
                ) {
                    (e = mn(n, e)),
                        (e = Tc(t, e, 1)),
                        (t = vt(t, e, 1)),
                        (e = ce()),
                        t !== null && (fr(t, 1, e), ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Ap(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ce()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ee === e &&
            (re & n) === n &&
            (J === 4 || (J === 3 && (re & 130023424) === re && 500 > Y() - os)
                ? At(e, 0)
                : (is |= n)),
        ve(e, t);
}
function Yc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Er), (Er <<= 1), !(Er & 130023424) && (Er = 4194304))
            : (t = 1));
    var n = ce();
    (e = rt(e, t)), e !== null && (fr(e, t, n), ve(e, n));
}
function Dp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Yc(e, n);
}
function Mp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(v(314));
    }
    r !== null && r.delete(t), Yc(e, n);
}
var qc;
qc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (he = !1), Ep(e, t, n);
            he = !!(e.flags & 131072);
        }
    else (he = !1), j && t.flags & 1048576 && Ja(t, di, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Yr(e, t), (e = t.pendingProps);
            var i = fn(t, ue.current);
            sn(t, n), (i = Zl(null, t, r, e, i, n));
            var o = bl();
            return (
                (t.flags |= 1),
                typeof i == "object" &&
                i !== null &&
                typeof i.render == "function" &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ye(r) ? ((o = !0), ci(t)) : (o = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      Yl(t),
                      (i.updater = zi),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      bo(t, r, e, n),
                      (t = nl(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      j && o && Ul(t),
                      ae(null, t, i, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Yr(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = Bp(r)),
                    (e = Ae(r, e)),
                    i)
                ) {
                    case 0:
                        t = tl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = yu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = hu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = mu(null, t, r, Ae(r.type, e), n);
                        break e;
                }
                throw Error(v(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ae(r, i)),
                tl(e, t, r, i, n)
            );
        case 1:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ae(r, i)),
                yu(e, t, r, i, n)
            );
        case 3:
            e: {
                if ((Oc(t), e === null)) throw Error(v(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (i = o.element),
                    tc(e, t),
                    mi(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries:
                                l.pendingSuspenseBoundaries,
                            transitions: l.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (i = mn(Error(v(423)), t)), (t = vu(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = mn(Error(v(424)), t)), (t = vu(e, t, r, n, i));
                        break e;
                    } else
                        for (
                            we = yt(t.stateNode.containerInfo.firstChild),
                                ke = t,
                                j = !0,
                                Ie = null,
                                n = oc(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((dn(), r === i)) {
                        t = it(e, t, n);
                        break e;
                    }
                    ae(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                lc(t),
                e === null && Go(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (l = i.children),
                Qo(r, i)
                    ? (l = null)
                    : o !== null && Qo(r, o) && (t.flags |= 32),
                Lc(e, t),
                ae(e, t, l, n),
                t.child
            );
        case 6:
            return e === null && Go(t), null;
        case 13:
            return zc(e, t, n);
        case 4:
            return (
                ql(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = pn(t, null, r, n)) : ae(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ae(r, i)),
                hu(e, t, r, i, n)
            );
        case 7:
            return ae(e, t, t.pendingProps, n), t.child;
        case 8:
            return ae(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ae(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (l = i.value),
                    D(pi, r._currentValue),
                    (r._currentValue = l),
                    o !== null)
                )
                    if (je(o.value, l)) {
                        if (o.children === i.children && !me.current) {
                            t = it(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var s = o.dependencies;
                            if (s !== null) {
                                l = o.child;
                                for (var u = s.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            (u = et(-1, n & -n)), (u.tag = 2);
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var m = c.pending;
                                                m === null
                                                    ? (u.next = u)
                                                    : ((u.next = m.next),
                                                      (m.next = u)),
                                                    (c.pending = u);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (u = o.alternate),
                                            u !== null && (u.lanes |= n),
                                            Jo(o.return, n, t),
                                            (s.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (o.tag === 10)
                                l = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((l = o.return), l === null))
                                    throw Error(v(341));
                                (l.lanes |= n),
                                    (s = l.alternate),
                                    s !== null && (s.lanes |= n),
                                    Jo(l, n, t),
                                    (l = o.sibling);
                            } else l = o.child;
                            if (l !== null) l.return = o;
                            else
                                for (l = o; l !== null; ) {
                                    if (l === t) {
                                        l = null;
                                        break;
                                    }
                                    if (((o = l.sibling), o !== null)) {
                                        (o.return = l.return), (l = o);
                                        break;
                                    }
                                    l = l.return;
                                }
                            o = l;
                        }
                ae(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                sn(t, n),
                (i = Re(i)),
                (r = r(i)),
                (t.flags |= 1),
                ae(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (i = Ae(r, t.pendingProps)),
                (i = Ae(r.type, i)),
                mu(e, t, r, i, n)
            );
        case 15:
            return Pc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ae(r, i)),
                Yr(e, t),
                (t.tag = 1),
                ye(r) ? ((e = !0), ci(t)) : (e = !1),
                sn(t, n),
                rc(t, r, i),
                bo(t, r, i, n),
                nl(null, t, r, !0, e, n)
            );
        case 19:
            return Ac(e, t, n);
        case 22:
            return Rc(e, t, n);
    }
    throw Error(v(156, t.tag));
};
function Xc(e, t) {
    return Sa(e, t);
}
function Ip(e, t, n, r) {
    (this.tag = e),
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
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Te(e, t, n, r) {
    return new Ip(e, t, n, r);
}
function as(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bp(e) {
    if (typeof e == "function") return as(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Pl)) return 11;
        if (e === Rl) return 14;
    }
    return 2;
}
function kt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Te(e.tag, t, e.key, e.mode)),
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
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Gr(e, t, n, r, i, o) {
    var l = 2;
    if (((r = e), typeof e == "function")) as(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else
        e: switch (e) {
            case Qt:
                return Dt(n.children, i, o, t);
            case Tl:
                (l = 8), (i |= 8);
                break;
            case _o:
                return (
                    (e = Te(12, n, t, i | 2)),
                    (e.elementType = _o),
                    (e.lanes = o),
                    e
                );
            case Co:
                return (
                    (e = Te(13, n, t, i)),
                    (e.elementType = Co),
                    (e.lanes = o),
                    e
                );
            case xo:
                return (
                    (e = Te(19, n, t, i)),
                    (e.elementType = xo),
                    (e.lanes = o),
                    e
                );
            case ia:
                return Ii(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case na:
                            l = 10;
                            break e;
                        case ra:
                            l = 9;
                            break e;
                        case Pl:
                            l = 11;
                            break e;
                        case Rl:
                            l = 14;
                            break e;
                        case st:
                            (l = 16), (r = null);
                            break e;
                    }
                throw Error(v(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Te(l, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function Dt(e, t, n, r) {
    return (e = Te(7, e, r, t)), (e.lanes = n), e;
}
function Ii(e, t, n, r) {
    return (
        (e = Te(22, e, r, t)),
        (e.elementType = ia),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function yo(e, t, n) {
    return (e = Te(6, e, null, t)), (e.lanes = n), e;
}
function vo(e, t, n) {
    return (
        (t = Te(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Fp(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Gi(0)),
        (this.expirationTimes = Gi(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Gi(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function cs(e, t, n, r, i, o, l, s, u) {
    return (
        (e = new Fp(e, t, n, s, u)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Te(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Yl(o),
        e
    );
}
function jp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Wt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Gc(e) {
    if (!e) return Et;
    e = e._reactInternals;
    e: {
        if (Vt(e) !== e || e.tag !== 1) throw Error(v(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ye(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(v(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ye(n)) return Xa(e, n, t);
    }
    return t;
}
function Jc(e, t, n, r, i, o, l, s, u) {
    return (
        (e = cs(n, r, !0, e, i, o, l, s, u)),
        (e.context = Gc(null)),
        (n = e.current),
        (r = ce()),
        (i = wt(n)),
        (o = et(r, i)),
        (o.callback = t ?? null),
        vt(n, o, i),
        (e.current.lanes = i),
        fr(e, i, r),
        ve(e, r),
        e
    );
}
function Bi(e, t, n, r) {
    var i = t.current,
        o = ce(),
        l = wt(i);
    return (
        (n = Gc(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = et(o, l)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = vt(i, t, l)),
        e !== null && (Fe(e, i, l, o), Wr(e, i, l)),
        l
    );
}
function _i(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Tu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function fs(e, t) {
    Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function Up() {
    return null;
}
var Zc =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function ds(e) {
    this._internalRoot = e;
}
Fi.prototype.render = ds.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    Bi(e, t, null, null);
};
Fi.prototype.unmount = ds.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        jt(function () {
            Bi(null, e, null, null);
        }),
            (t[nt] = null);
    }
};
function Fi(e) {
    this._internalRoot = e;
}
Fi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Pa();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
        at.splice(n, 0, e), n === 0 && La(e);
    }
};
function ps(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ji(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Pu() {}
function Vp(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = _i(l);
                o.call(c);
            };
        }
        var l = Jc(t, r, e, 0, null, !1, !1, "", Pu);
        return (
            (e._reactRootContainer = l),
            (e[nt] = l.current),
            tr(e.nodeType === 8 ? e.parentNode : e),
            jt(),
            l
        );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var c = _i(u);
            s.call(c);
        };
    }
    var u = cs(e, 0, !1, null, null, !1, !1, "", Pu);
    return (
        (e._reactRootContainer = u),
        (e[nt] = u.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        jt(function () {
            Bi(t, u, n, r);
        }),
        u
    );
}
function Ui(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var s = i;
            i = function () {
                var u = _i(l);
                s.call(u);
            };
        }
        Bi(t, l, e, i);
    } else l = Vp(n, t, e, i, r);
    return _i(l);
}
Na = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Dn(t.pendingLanes);
                n !== 0 &&
                    (zl(t, n | 1),
                    ve(t, Y()),
                    !(z & 6) && ((yn = Y() + 500), xt()));
            }
            break;
        case 13:
            jt(function () {
                var r = rt(e, 1);
                if (r !== null) {
                    var i = ce();
                    Fe(r, e, 1, i);
                }
            }),
                fs(e, 1);
    }
};
Al = function (e) {
    if (e.tag === 13) {
        var t = rt(e, 134217728);
        if (t !== null) {
            var n = ce();
            Fe(t, e, 134217728, n);
        }
        fs(e, 134217728);
    }
};
Ta = function (e) {
    if (e.tag === 13) {
        var t = wt(e),
            n = rt(e, t);
        if (n !== null) {
            var r = ce();
            Fe(n, e, t, r);
        }
        fs(e, t);
    }
};
Pa = function () {
    return A;
};
Ra = function (e, t) {
    var n = A;
    try {
        return (A = e), t();
    } finally {
        A = n;
    }
};
Mo = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Li(r);
                        if (!i) throw Error(v(90));
                        la(r), Po(r, i);
                    }
                }
            }
            break;
        case "textarea":
            ua(e, n);
            break;
        case "select":
            (t = n.value), t != null && nn(e, !!n.multiple, t, !1);
    }
};
ma = ls;
ya = jt;
var $p = { usingClientEntryPoint: !1, Events: [pr, Xt, Li, pa, ha, ls] },
    Ln = {
        findFiberByHostInstance: Lt,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Hp = {
        bundleType: Ln.bundleType,
        version: Ln.version,
        rendererPackageName: Ln.rendererPackageName,
        rendererConfig: Ln.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ot.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = wa(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ln.findFiberByHostInstance || Up,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ar.isDisabled && Ar.supportsFiber)
        try {
            (Ni = Ar.inject(Hp)), (He = Ar);
        } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $p;
Ee.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ps(t)) throw Error(v(200));
    return jp(e, t, null, n);
};
Ee.createRoot = function (e, t) {
    if (!ps(e)) throw Error(v(299));
    var n = !1,
        r = "",
        i = Zc;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = cs(e, 1, !1, null, null, n, !1, r, i)),
        (e[nt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new ds(t)
    );
};
Ee.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(v(188))
            : ((e = Object.keys(e).join(",")), Error(v(268, e)));
    return (e = wa(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
    return jt(e);
};
Ee.hydrate = function (e, t, n) {
    if (!ji(t)) throw Error(v(200));
    return Ui(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
    if (!ps(e)) throw Error(v(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        l = Zc;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (t = Jc(t, null, e, 1, n ?? null, i, !1, o, l)),
        (e[nt] = t.current),
        tr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new Fi(t);
};
Ee.render = function (e, t, n) {
    if (!ji(t)) throw Error(v(200));
    return Ui(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
    if (!ji(e)) throw Error(v(40));
    return e._reactRootContainer
        ? (jt(function () {
              Ui(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[nt] = null);
              });
          }),
          !0)
        : !1;
};
Ee.unstable_batchedUpdates = ls;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ji(n)) throw Error(v(200));
    if (e == null || e._reactInternals === void 0) throw Error(v(38));
    return Ui(e, t, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
function bc() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bc);
        } catch (e) {
            console.error(e);
        }
}
bc(), (Ju.exports = Ee);
var Wp = Ju.exports,
    Ru = Wp;
(So.createRoot = Ru.createRoot), (So.hydrateRoot = Ru.hydrateRoot);
const Ye = Object.create(null);
Ye.open = "0";
Ye.close = "1";
Ye.ping = "2";
Ye.pong = "3";
Ye.message = "4";
Ye.upgrade = "5";
Ye.noop = "6";
const Jr = Object.create(null);
Object.keys(Ye).forEach((e) => {
    Jr[Ye[e]] = e;
});
const hl = { type: "error", data: "parser error" },
    ef =
        typeof Blob == "function" ||
        (typeof Blob < "u" &&
            Object.prototype.toString.call(Blob) ===
                "[object BlobConstructor]"),
    tf = typeof ArrayBuffer == "function",
    nf = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
    hs = ({ type: e, data: t }, n, r) =>
        ef && t instanceof Blob
            ? n
                ? r(t)
                : Lu(t, r)
            : tf && (t instanceof ArrayBuffer || nf(t))
            ? n
                ? r(t)
                : Lu(new Blob([t]), r)
            : r(Ye[e] + (t || "")),
    Lu = (e, t) => {
        const n = new FileReader();
        return (
            (n.onload = function () {
                const r = n.result.split(",")[1];
                t("b" + (r || ""));
            }),
            n.readAsDataURL(e)
        );
    };
function Ou(e) {
    return e instanceof Uint8Array
        ? e
        : e instanceof ArrayBuffer
        ? new Uint8Array(e)
        : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let go;
function Qp(e, t) {
    if (ef && e.data instanceof Blob)
        return e.data.arrayBuffer().then(Ou).then(t);
    if (tf && (e.data instanceof ArrayBuffer || nf(e.data)))
        return t(Ou(e.data));
    hs(e, !1, (n) => {
        go || (go = new TextEncoder()), t(go.encode(n));
    });
}
const zu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    In = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < zu.length; e++) In[zu.charCodeAt(e)] = e;
const Kp = (e) => {
        let t = e.length * 0.75,
            n = e.length,
            r,
            i = 0,
            o,
            l,
            s,
            u;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const c = new ArrayBuffer(t),
            m = new Uint8Array(c);
        for (r = 0; r < n; r += 4)
            (o = In[e.charCodeAt(r)]),
                (l = In[e.charCodeAt(r + 1)]),
                (s = In[e.charCodeAt(r + 2)]),
                (u = In[e.charCodeAt(r + 3)]),
                (m[i++] = (o << 2) | (l >> 4)),
                (m[i++] = ((l & 15) << 4) | (s >> 2)),
                (m[i++] = ((s & 3) << 6) | (u & 63));
        return c;
    },
    Yp = typeof ArrayBuffer == "function",
    ms = (e, t) => {
        if (typeof e != "string") return { type: "message", data: rf(e, t) };
        const n = e.charAt(0);
        return n === "b"
            ? { type: "message", data: qp(e.substring(1), t) }
            : Jr[n]
            ? e.length > 1
                ? { type: Jr[n], data: e.substring(1) }
                : { type: Jr[n] }
            : hl;
    },
    qp = (e, t) => {
        if (Yp) {
            const n = Kp(e);
            return rf(n, t);
        } else return { base64: !0, data: e };
    },
    rf = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof Blob ? e : new Blob([e]);
            case "arraybuffer":
            default:
                return e instanceof ArrayBuffer ? e : e.buffer;
        }
    },
    of = "",
    Xp = (e, t) => {
        const n = e.length,
            r = new Array(n);
        let i = 0;
        e.forEach((o, l) => {
            hs(o, !1, (s) => {
                (r[l] = s), ++i === n && t(r.join(of));
            });
        });
    },
    Gp = (e, t) => {
        const n = e.split(of),
            r = [];
        for (let i = 0; i < n.length; i++) {
            const o = ms(n[i], t);
            if ((r.push(o), o.type === "error")) break;
        }
        return r;
    };
function Jp() {
    return new TransformStream({
        transform(e, t) {
            Qp(e, (n) => {
                const r = n.length;
                let i;
                if (r < 126)
                    (i = new Uint8Array(1)),
                        new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    const o = new DataView(i.buffer);
                    o.setUint8(0, 126), o.setUint16(1, r);
                } else {
                    i = new Uint8Array(9);
                    const o = new DataView(i.buffer);
                    o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
                }
                e.data && typeof e.data != "string" && (i[0] |= 128),
                    t.enqueue(i),
                    t.enqueue(n);
            });
        },
    });
}
let wo;
function Dr(e) {
    return e.reduce((t, n) => t + n.length, 0);
}
function Mr(e, t) {
    if (e[0].length === t) return e.shift();
    const n = new Uint8Array(t);
    let r = 0;
    for (let i = 0; i < t; i++)
        (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function Zp(e, t) {
    wo || (wo = new TextDecoder());
    const n = [];
    let r = 0,
        i = -1,
        o = !1;
    return new TransformStream({
        transform(l, s) {
            for (n.push(l); ; ) {
                if (r === 0) {
                    if (Dr(n) < 1) break;
                    const u = Mr(n, 1);
                    (o = (u[0] & 128) === 128),
                        (i = u[0] & 127),
                        i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
                } else if (r === 1) {
                    if (Dr(n) < 2) break;
                    const u = Mr(n, 2);
                    (i = new DataView(
                        u.buffer,
                        u.byteOffset,
                        u.length
                    ).getUint16(0)),
                        (r = 3);
                } else if (r === 2) {
                    if (Dr(n) < 8) break;
                    const u = Mr(n, 8),
                        c = new DataView(u.buffer, u.byteOffset, u.length),
                        m = c.getUint32(0);
                    if (m > Math.pow(2, 21) - 1) {
                        s.enqueue(hl);
                        break;
                    }
                    (i = m * Math.pow(2, 32) + c.getUint32(4)), (r = 3);
                } else {
                    if (Dr(n) < i) break;
                    const u = Mr(n, i);
                    s.enqueue(ms(o ? u : wo.decode(u), t)), (r = 0);
                }
                if (i === 0 || i > e) {
                    s.enqueue(hl);
                    break;
                }
            }
        },
    });
}
const lf = 4;
function X(e) {
    if (e) return bp(e);
}
function bp(e) {
    for (var t in X.prototype) e[t] = X.prototype[t];
    return e;
}
X.prototype.on = X.prototype.addEventListener = function (e, t) {
    return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    );
};
X.prototype.once = function (e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments);
    }
    return (n.fn = t), this.on(e, n), this;
};
X.prototype.off =
    X.prototype.removeListener =
    X.prototype.removeAllListeners =
    X.prototype.removeEventListener =
        function (e, t) {
            if (
                ((this._callbacks = this._callbacks || {}),
                arguments.length == 0)
            )
                return (this._callbacks = {}), this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (arguments.length == 1)
                return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++)
                if (((r = n[i]), r === t || r.fn === t)) {
                    n.splice(i, 1);
                    break;
                }
            return n.length === 0 && delete this._callbacks["$" + e], this;
        };
X.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
        var t = new Array(arguments.length - 1),
            n = this._callbacks["$" + e],
            r = 1;
        r < arguments.length;
        r++
    )
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
    }
    return this;
};
X.prototype.emitReserved = X.prototype.emit;
X.prototype.listeners = function (e) {
    return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
    );
};
X.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
};
const Ne =
    typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : Function("return this")();
function sf(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const eh = Ne.setTimeout,
    th = Ne.clearTimeout;
function Vi(e, t) {
    t.useNativeTimers
        ? ((e.setTimeoutFn = eh.bind(Ne)), (e.clearTimeoutFn = th.bind(Ne)))
        : ((e.setTimeoutFn = Ne.setTimeout.bind(Ne)),
          (e.clearTimeoutFn = Ne.clearTimeout.bind(Ne)));
}
const nh = 1.33;
function rh(e) {
    return typeof e == "string"
        ? ih(e)
        : Math.ceil((e.byteLength || e.size) * nh);
}
function ih(e) {
    let t = 0,
        n = 0;
    for (let r = 0, i = e.length; r < i; r++)
        (t = e.charCodeAt(r)),
            t < 128
                ? (n += 1)
                : t < 2048
                ? (n += 2)
                : t < 55296 || t >= 57344
                ? (n += 3)
                : (r++, (n += 4));
    return n;
}
function oh(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
    return t;
}
function lh(e) {
    let t = {},
        n = e.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let o = n[r].split("=");
        t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
    }
    return t;
}
class sh extends Error {
    constructor(t, n, r) {
        super(t),
            (this.description = n),
            (this.context = r),
            (this.type = "TransportError");
    }
}
class ys extends X {
    constructor(t) {
        super(),
            (this.writable = !1),
            Vi(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.socket = t.socket);
    }
    onError(t, n, r) {
        return super.emitReserved("error", new sh(t, n, r)), this;
    }
    open() {
        return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                (this.doClose(), this.onClose()),
            this
        );
    }
    send(t) {
        this.readyState === "open" && this.write(t);
    }
    onOpen() {
        (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
    }
    onData(t) {
        const n = ms(t, this.socket.binaryType);
        this.onPacket(n);
    }
    onPacket(t) {
        super.emitReserved("packet", t);
    }
    onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
    }
    pause(t) {}
    createUri(t, n = {}) {
        return (
            t +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(n)
        );
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]";
    }
    _port() {
        return this.opts.port &&
            ((this.opts.secure && +(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))
            ? ":" + this.opts.port
            : "";
    }
    _query(t) {
        const n = oh(t);
        return n.length ? "?" + n : "";
    }
}
const uf =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
        ),
    ml = 64,
    uh = {};
let Au = 0,
    Ir = 0,
    Du;
function Mu(e) {
    let t = "";
    do (t = uf[e % ml] + t), (e = Math.floor(e / ml));
    while (e > 0);
    return t;
}
function af() {
    const e = Mu(+new Date());
    return e !== Du ? ((Au = 0), (Du = e)) : e + "." + Mu(Au++);
}
for (; Ir < ml; Ir++) uh[uf[Ir]] = Ir;
let cf = !1;
try {
    cf =
        typeof XMLHttpRequest < "u" &&
        "withCredentials" in new XMLHttpRequest();
} catch {}
const ah = cf;
function ff(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || ah))
            return new XMLHttpRequest();
    } catch {}
    if (!t)
        try {
            return new Ne[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
            );
        } catch {}
}
function ch() {}
const fh = (function () {
    return new ff({ xdomain: !1 }).responseType != null;
})();
class dh extends ys {
    constructor(t) {
        if ((super(t), (this.polling = !1), typeof location < "u")) {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
                (this.xd =
                    (typeof location < "u" &&
                        t.hostname !== location.hostname) ||
                    i !== t.port);
        }
        const n = t && t.forceBase64;
        (this.supportsBinary = fh && !n),
            this.opts.withCredentials && (this.cookieJar = void 0);
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this.poll();
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            (this.readyState = "paused"), t();
        };
        if (this.polling || !this.writable) {
            let r = 0;
            this.polling &&
                (r++,
                this.once("pollComplete", function () {
                    --r || n();
                })),
                this.writable ||
                    (r++,
                    this.once("drain", function () {
                        --r || n();
                    }));
        } else n();
    }
    poll() {
        (this.polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(t) {
        const n = (r) => {
            if (
                (this.readyState === "opening" &&
                    r.type === "open" &&
                    this.onOpen(),
                r.type === "close")
            )
                return (
                    this.onClose({
                        description: "transport closed by the server",
                    }),
                    !1
                );
            this.onPacket(r);
        };
        Gp(t, this.socket.binaryType).forEach(n),
            this.readyState !== "closed" &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                this.readyState === "open" && this.poll());
    }
    doClose() {
        const t = () => {
            this.write([{ type: "close" }]);
        };
        this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
        (this.writable = !1),
            Xp(t, (n) => {
                this.doWrite(n, () => {
                    (this.writable = !0), this.emitReserved("drain");
                });
            });
    }
    uri() {
        const t = this.opts.secure ? "https" : "http",
            n = this.query || {};
        return (
            this.opts.timestampRequests !== !1 &&
                (n[this.opts.timestampParam] = af()),
            !this.supportsBinary && !n.sid && (n.b64 = 1),
            this.createUri(t, n)
        );
    }
    request(t = {}) {
        return (
            Object.assign(
                t,
                { xd: this.xd, cookieJar: this.cookieJar },
                this.opts
            ),
            new Qe(this.uri(), t)
        );
    }
    doWrite(t, n) {
        const r = this.request({ method: "POST", data: t });
        r.on("success", n),
            r.on("error", (i, o) => {
                this.onError("xhr post error", i, o);
            });
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
            t.on("error", (n, r) => {
                this.onError("xhr poll error", n, r);
            }),
            (this.pollXhr = t);
    }
}
class Qe extends X {
    constructor(t, n) {
        super(),
            Vi(this, n),
            (this.opts = n),
            (this.method = n.method || "GET"),
            (this.uri = t),
            (this.data = n.data !== void 0 ? n.data : null),
            this.create();
    }
    create() {
        var t;
        const n = sf(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
        );
        n.xdomain = !!this.opts.xd;
        const r = (this.xhr = new ff(n));
        try {
            r.open(this.method, this.uri, !0);
            try {
                if (this.opts.extraHeaders) {
                    r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                    for (let i in this.opts.extraHeaders)
                        this.opts.extraHeaders.hasOwnProperty(i) &&
                            r.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch {}
            if (this.method === "POST")
                try {
                    r.setRequestHeader(
                        "Content-type",
                        "text/plain;charset=UTF-8"
                    );
                } catch {}
            try {
                r.setRequestHeader("Accept", "*/*");
            } catch {}
            (t = this.opts.cookieJar) === null ||
                t === void 0 ||
                t.addCookies(r),
                "withCredentials" in r &&
                    (r.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                    (r.timeout = this.opts.requestTimeout),
                (r.onreadystatechange = () => {
                    var i;
                    r.readyState === 3 &&
                        ((i = this.opts.cookieJar) === null ||
                            i === void 0 ||
                            i.parseCookies(r)),
                        r.readyState === 4 &&
                            (r.status === 200 || r.status === 1223
                                ? this.onLoad()
                                : this.setTimeoutFn(() => {
                                      this.onError(
                                          typeof r.status == "number"
                                              ? r.status
                                              : 0
                                      );
                                  }, 0));
                }),
                r.send(this.data);
        } catch (i) {
            this.setTimeoutFn(() => {
                this.onError(i);
            }, 0);
            return;
        }
        typeof document < "u" &&
            ((this.index = Qe.requestsCount++),
            (Qe.requests[this.index] = this));
    }
    onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
    }
    cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (((this.xhr.onreadystatechange = ch), t))
                try {
                    this.xhr.abort();
                } catch {}
            typeof document < "u" && delete Qe.requests[this.index],
                (this.xhr = null);
        }
    }
    onLoad() {
        const t = this.xhr.responseText;
        t !== null &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this.cleanup());
    }
    abort() {
        this.cleanup();
    }
}
Qe.requestsCount = 0;
Qe.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Iu);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in Ne ? "pagehide" : "unload";
        addEventListener(e, Iu, !1);
    }
}
function Iu() {
    for (let e in Qe.requests)
        Qe.requests.hasOwnProperty(e) && Qe.requests[e].abort();
}
const vs =
        typeof Promise == "function" && typeof Promise.resolve == "function"
            ? (t) => Promise.resolve().then(t)
            : (t, n) => n(t, 0),
    Br = Ne.WebSocket || Ne.MozWebSocket,
    Bu = !0,
    ph = "arraybuffer",
    Fu =
        typeof navigator < "u" &&
        typeof navigator.product == "string" &&
        navigator.product.toLowerCase() === "reactnative";
class hh extends ys {
    constructor(t) {
        super(t), (this.supportsBinary = !t.forceBase64);
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) return;
        const t = this.uri(),
            n = this.opts.protocols,
            r = Fu
                ? {}
                : sf(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                  );
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws =
                Bu && !Fu ? (n ? new Br(t, n) : new Br(t)) : new Br(t, n, r);
        } catch (i) {
            return this.emitReserved("error", i);
        }
        (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
    }
    addEventListeners() {
        (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
            (this.ws.onclose = (t) =>
                this.onClose({
                    description: "websocket connection closed",
                    context: t,
                })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            hs(r, this.supportsBinary, (o) => {
                const l = {};
                try {
                    Bu && this.ws.send(o);
                } catch {}
                i &&
                    vs(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws",
            n = this.query || {};
        return (
            this.opts.timestampRequests && (n[this.opts.timestampParam] = af()),
            this.supportsBinary || (n.b64 = 1),
            this.createUri(t, n)
        );
    }
    check() {
        return !!Br;
    }
}
class mh extends ys {
    get name() {
        return "webtransport";
    }
    doOpen() {
        typeof WebTransport == "function" &&
            ((this.transport = new WebTransport(
                this.createUri("https"),
                this.opts.transportOptions[this.name]
            )),
            this.transport.closed
                .then(() => {
                    this.onClose();
                })
                .catch((t) => {
                    this.onError("webtransport error", t);
                }),
            this.transport.ready.then(() => {
                this.transport.createBidirectionalStream().then((t) => {
                    const n = Zp(
                            Number.MAX_SAFE_INTEGER,
                            this.socket.binaryType
                        ),
                        r = t.readable.pipeThrough(n).getReader(),
                        i = Jp();
                    i.readable.pipeTo(t.writable),
                        (this.writer = i.writable.getWriter());
                    const o = () => {
                        r.read()
                            .then(({ done: s, value: u }) => {
                                s || (this.onPacket(u), o());
                            })
                            .catch((s) => {});
                    };
                    o();
                    const l = { type: "open" };
                    this.query.sid && (l.data = `{"sid":"${this.query.sid}"}`),
                        this.writer.write(l).then(() => this.onOpen());
                });
            }));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            this.writer.write(r).then(() => {
                i &&
                    vs(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var t;
        (t = this.transport) === null || t === void 0 || t.close();
    }
}
const yh = { websocket: hh, webtransport: mh, polling: dh },
    vh =
        /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    gh = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
    ];
function yl(e) {
    if (e.length > 2e3) throw "URI too long";
    const t = e,
        n = e.indexOf("["),
        r = e.indexOf("]");
    n != -1 &&
        r != -1 &&
        (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
    let i = vh.exec(e || ""),
        o = {},
        l = 14;
    for (; l--; ) o[gh[l]] = i[l] || "";
    return (
        n != -1 &&
            r != -1 &&
            ((o.source = t),
            (o.host = o.host
                .substring(1, o.host.length - 1)
                .replace(/;/g, ":")),
            (o.authority = o.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
            (o.ipv6uri = !0)),
        (o.pathNames = wh(o, o.path)),
        (o.queryKey = kh(o, o.query)),
        o
    );
}
function wh(e, t) {
    const n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (
        (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
        t.slice(-1) == "/" && r.splice(r.length - 1, 1),
        r
    );
}
function kh(e, t) {
    const n = {};
    return (
        t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
            i && (n[i] = o);
        }),
        n
    );
}
let df = class Ht extends X {
    constructor(t, n = {}) {
        super(),
            (this.binaryType = ph),
            (this.writeBuffer = []),
            t && typeof t == "object" && ((n = t), (t = null)),
            t
                ? ((t = yl(t)),
                  (n.hostname = t.host),
                  (n.secure = t.protocol === "https" || t.protocol === "wss"),
                  (n.port = t.port),
                  t.query && (n.query = t.query))
                : n.host && (n.hostname = yl(n.host).host),
            Vi(this, n),
            (this.secure =
                n.secure != null
                    ? n.secure
                    : typeof location < "u" && location.protocol === "https:"),
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            (this.hostname =
                n.hostname ||
                (typeof location < "u" ? location.hostname : "localhost")),
            (this.port =
                n.port ||
                (typeof location < "u" && location.port
                    ? location.port
                    : this.secure
                    ? "443"
                    : "80")),
            (this.transports = n.transports || [
                "polling",
                "websocket",
                "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
                {
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    addTrailingSlash: !0,
                    rejectUnauthorized: !0,
                    perMessageDeflate: { threshold: 1024 },
                    transportOptions: {},
                    closeOnBeforeunload: !1,
                },
                n
            )),
            (this.opts.path =
                this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "")),
            typeof this.opts.query == "string" &&
                (this.opts.query = lh(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            typeof addEventListener == "function" &&
                (this.opts.closeOnBeforeunload &&
                    ((this.beforeunloadEventListener = () => {
                        this.transport &&
                            (this.transport.removeAllListeners(),
                            this.transport.close());
                    }),
                    addEventListener(
                        "beforeunload",
                        this.beforeunloadEventListener,
                        !1
                    )),
                this.hostname !== "localhost" &&
                    ((this.offlineEventListener = () => {
                        this.onClose("transport close", {
                            description: "network connection lost",
                        });
                    }),
                    addEventListener(
                        "offline",
                        this.offlineEventListener,
                        !1
                    ))),
            this.open();
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        (n.EIO = lf), (n.transport = t), this.id && (n.sid = this.id);
        const r = Object.assign(
            {},
            this.opts,
            {
                query: n,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
            },
            this.opts.transportOptions[t]
        );
        return new yh[t](r);
    }
    open() {
        let t;
        if (
            this.opts.rememberUpgrade &&
            Ht.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
        )
            t = "websocket";
        else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t);
        } catch {
            this.transports.shift(), this.open();
            return;
        }
        t.open(), this.setTransport(t);
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (n) => this.onClose("transport close", n));
    }
    probe(t) {
        let n = this.createTransport(t),
            r = !1;
        Ht.priorWebsocketSuccess = !1;
        const i = () => {
            r ||
                (n.send([{ type: "ping", data: "probe" }]),
                n.once("packet", (h) => {
                    if (!r)
                        if (h.type === "pong" && h.data === "probe") {
                            if (
                                ((this.upgrading = !0),
                                this.emitReserved("upgrading", n),
                                !n)
                            )
                                return;
                            (Ht.priorWebsocketSuccess = n.name === "websocket"),
                                this.transport.pause(() => {
                                    r ||
                                        (this.readyState !== "closed" &&
                                            (m(),
                                            this.setTransport(n),
                                            n.send([{ type: "upgrade" }]),
                                            this.emitReserved("upgrade", n),
                                            (n = null),
                                            (this.upgrading = !1),
                                            this.flush()));
                                });
                        } else {
                            const p = new Error("probe error");
                            (p.transport = n.name),
                                this.emitReserved("upgradeError", p);
                        }
                }));
        };
        function o() {
            r || ((r = !0), m(), n.close(), (n = null));
        }
        const l = (h) => {
            const p = new Error("probe error: " + h);
            (p.transport = n.name), o(), this.emitReserved("upgradeError", p);
        };
        function s() {
            l("transport closed");
        }
        function u() {
            l("socket closed");
        }
        function c(h) {
            n && h.name !== n.name && o();
        }
        const m = () => {
            n.removeListener("open", i),
                n.removeListener("error", l),
                n.removeListener("close", s),
                this.off("close", u),
                this.off("upgrading", c);
        };
        n.once("open", i),
            n.once("error", l),
            n.once("close", s),
            this.once("close", u),
            this.once("upgrading", c),
            this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
                ? this.setTimeoutFn(() => {
                      r || n.open();
                  }, 200)
                : n.open();
    }
    onOpen() {
        if (
            ((this.readyState = "open"),
            (Ht.priorWebsocketSuccess = this.transport.name === "websocket"),
            this.emitReserved("open"),
            this.flush(),
            this.readyState === "open" && this.opts.upgrade)
        ) {
            let t = 0;
            const n = this.upgrades.length;
            for (; t < n; t++) this.probe(this.upgrades[t]);
        }
    }
    onPacket(t) {
        if (
            this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing"
        )
            switch (
                (this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                this.resetPingTimeout(),
                t.type)
            ) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "ping":
                    this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                    break;
                case "error":
                    const n = new Error("server error");
                    (n.code = t.data), this.onError(n);
                    break;
                case "message":
                    this.emitReserved("data", t.data),
                        this.emitReserved("message", t.data);
                    break;
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            this.writeBuffer.length === 0
                ? this.emitReserved("drain")
                : this.flush();
    }
    flush() {
        if (
            this.readyState !== "closed" &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
        ) {
            const t = this.getWritablePackets();
            this.transport.send(t),
                (this.prevBufferLen = t.length),
                this.emitReserved("flush");
        }
    }
    getWritablePackets() {
        if (
            !(
                this.maxPayload &&
                this.transport.name === "polling" &&
                this.writeBuffer.length > 1
            )
        )
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const i = this.writeBuffer[r].data;
            if ((i && (n += rh(i)), r > 0 && n > this.maxPayload))
                return this.writeBuffer.slice(0, r);
            n += 2;
        }
        return this.writeBuffer;
    }
    write(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    send(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    sendPacket(t, n, r, i) {
        if (
            (typeof n == "function" && ((i = n), (n = void 0)),
            typeof r == "function" && ((i = r), (r = null)),
            this.readyState === "closing" || this.readyState === "closed")
        )
            return;
        (r = r || {}), (r.compress = r.compress !== !1);
        const o = { type: t, data: n, options: r };
        this.emitReserved("packetCreate", o),
            this.writeBuffer.push(o),
            i && this.once("flush", i),
            this.flush();
    }
    close() {
        const t = () => {
                this.onClose("forced close"), this.transport.close();
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t();
            },
            r = () => {
                this.once("upgrade", n), this.once("upgradeError", n);
            };
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                ((this.readyState = "closing"),
                this.writeBuffer.length
                    ? this.once("drain", () => {
                          this.upgrading ? r() : t();
                      })
                    : this.upgrading
                    ? r()
                    : t()),
            this
        );
    }
    onError(t) {
        (Ht.priorWebsocketSuccess = !1),
            this.emitReserved("error", t),
            this.onClose("transport error", t);
    }
    onClose(t, n) {
        (this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing") &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            typeof removeEventListener == "function" &&
                (removeEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, n),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
    }
    filterUpgrades(t) {
        const n = [];
        let r = 0;
        const i = t.length;
        for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n;
    }
};
df.protocol = lf;
function Sh(e, t = "", n) {
    let r = e;
    (n = n || (typeof location < "u" && location)),
        e == null && (e = n.protocol + "//" + n.host),
        typeof e == "string" &&
            (e.charAt(0) === "/" &&
                (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
            /^(https?|wss?):\/\//.test(e) ||
                (typeof n < "u"
                    ? (e = n.protocol + "//" + e)
                    : (e = "https://" + e)),
            (r = yl(e))),
        r.port ||
            (/^(http|ws)$/.test(r.protocol)
                ? (r.port = "80")
                : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
        (r.path = r.path || "/");
    const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return (
        (r.id = r.protocol + "://" + o + ":" + r.port + t),
        (r.href =
            r.protocol +
            "://" +
            o +
            (n && n.port === r.port ? "" : ":" + r.port)),
        r
    );
}
const Eh = typeof ArrayBuffer == "function",
    _h = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
    pf = Object.prototype.toString,
    Ch =
        typeof Blob == "function" ||
        (typeof Blob < "u" && pf.call(Blob) === "[object BlobConstructor]"),
    xh =
        typeof File == "function" ||
        (typeof File < "u" && pf.call(File) === "[object FileConstructor]");
function gs(e) {
    return (
        (Eh && (e instanceof ArrayBuffer || _h(e))) ||
        (Ch && e instanceof Blob) ||
        (xh && e instanceof File)
    );
}
function Zr(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++) if (Zr(e[n])) return !0;
        return !1;
    }
    if (gs(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Zr(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Zr(e[n])) return !0;
    return !1;
}
function Nh(e) {
    const t = [],
        n = e.data,
        r = e;
    return (
        (r.data = vl(n, t)),
        (r.attachments = t.length),
        { packet: r, buffers: t }
    );
}
function vl(e, t) {
    if (!e) return e;
    if (gs(e)) {
        const n = { _placeholder: !0, num: t.length };
        return t.push(e), n;
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = vl(e[r], t);
        return n;
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = vl(e[r], t));
        return n;
    }
    return e;
}
function Th(e, t) {
    return (e.data = gl(e.data, t)), delete e.attachments, e;
}
function gl(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = gl(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = gl(e[n], t));
    return e;
}
const Ph = [
        "connect",
        "connect_error",
        "disconnect",
        "disconnecting",
        "newListener",
        "removeListener",
    ],
    Rh = 5;
var O;
(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
        (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
        (e[(e.EVENT = 2)] = "EVENT"),
        (e[(e.ACK = 3)] = "ACK"),
        (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(O || (O = {}));
class Lh {
    constructor(t) {
        this.replacer = t;
    }
    encode(t) {
        return (t.type === O.EVENT || t.type === O.ACK) && Zr(t)
            ? this.encodeAsBinary({
                  type: t.type === O.EVENT ? O.BINARY_EVENT : O.BINARY_ACK,
                  nsp: t.nsp,
                  data: t.data,
                  id: t.id,
              })
            : [this.encodeAsString(t)];
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (
            (t.type === O.BINARY_EVENT || t.type === O.BINARY_ACK) &&
                (n += t.attachments + "-"),
            t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
            t.id != null && (n += t.id),
            t.data != null && (n += JSON.stringify(t.data, this.replacer)),
            n
        );
    }
    encodeAsBinary(t) {
        const n = Nh(t),
            r = this.encodeAsString(n.packet),
            i = n.buffers;
        return i.unshift(r), i;
    }
}
function ju(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
class ws extends X {
    constructor(t) {
        super(), (this.reviver = t);
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error(
                    "got plaintext data when reconstructing a packet"
                );
            n = this.decodeString(t);
            const r = n.type === O.BINARY_EVENT;
            r || n.type === O.BINARY_ACK
                ? ((n.type = r ? O.EVENT : O.ACK),
                  (this.reconstructor = new Oh(n)),
                  n.attachments === 0 && super.emitReserved("decoded", n))
                : super.emitReserved("decoded", n);
        } else if (gs(t) || t.base64)
            if (this.reconstructor)
                (n = this.reconstructor.takeBinaryData(t)),
                    n &&
                        ((this.reconstructor = null),
                        super.emitReserved("decoded", n));
            else
                throw new Error(
                    "got binary data when not reconstructing a packet"
                );
        else throw new Error("Unknown type: " + t);
    }
    decodeString(t) {
        let n = 0;
        const r = { type: Number(t.charAt(0)) };
        if (O[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === O.BINARY_EVENT || r.type === O.BINARY_ACK) {
            const o = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; );
            const l = t.substring(o, n);
            if (l != Number(l) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(l);
        }
        if (t.charAt(n + 1) === "/") {
            const o = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); );
            r.nsp = t.substring(o, n);
        } else r.nsp = "/";
        const i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const o = n + 1;
            for (; ++n; ) {
                const l = t.charAt(n);
                if (l == null || Number(l) != l) {
                    --n;
                    break;
                }
                if (n === t.length) break;
            }
            r.id = Number(t.substring(o, n + 1));
        }
        if (t.charAt(++n)) {
            const o = this.tryParse(t.substr(n));
            if (ws.isPayloadValid(r.type, o)) r.data = o;
            else throw new Error("invalid payload");
        }
        return r;
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver);
        } catch {
            return !1;
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case O.CONNECT:
                return ju(n);
            case O.DISCONNECT:
                return n === void 0;
            case O.CONNECT_ERROR:
                return typeof n == "string" || ju(n);
            case O.EVENT:
            case O.BINARY_EVENT:
                return (
                    Array.isArray(n) &&
                    (typeof n[0] == "number" ||
                        (typeof n[0] == "string" && Ph.indexOf(n[0]) === -1))
                );
            case O.ACK:
            case O.BINARY_ACK:
                return Array.isArray(n);
        }
    }
    destroy() {
        this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
    }
}
class Oh {
    constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
        if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
        ) {
            const n = Th(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n;
        }
        return null;
    }
    finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
    }
}
const zh = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            Decoder: ws,
            Encoder: Lh,
            get PacketType() {
                return O;
            },
            protocol: Rh,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
function Me(e, t, n) {
    return (
        e.on(t, n),
        function () {
            e.off(t, n);
        }
    );
}
const Ah = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
});
class hf extends X {
    constructor(t, n, r) {
        super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = n),
            r && r.auth && (this.auth = r.auth),
            (this._opts = Object.assign({}, r)),
            this.io._autoConnect && this.open();
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
            Me(t, "open", this.onopen.bind(this)),
            Me(t, "packet", this.onpacket.bind(this)),
            Me(t, "error", this.onerror.bind(this)),
            Me(t, "close", this.onclose.bind(this)),
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        return this.connected
            ? this
            : (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              this.io._readyState === "open" && this.onopen(),
              this);
    }
    open() {
        return this.connect();
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(t, ...n) {
        if (Ah.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (
            (n.unshift(t),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        )
            return this._addToQueue(n), this;
        const r = { type: O.EVENT, data: n };
        if (
            ((r.options = {}),
            (r.options.compress = this.flags.compress !== !1),
            typeof n[n.length - 1] == "function")
        ) {
            const l = this.ids++,
                s = n.pop();
            this._registerAckCallback(l, s), (r.id = l);
        }
        const i =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        return (
            (this.flags.volatile && (!i || !this.connected)) ||
                (this.connected
                    ? (this.notifyOutgoingListeners(r), this.packet(r))
                    : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
        );
    }
    _registerAckCallback(t, n) {
        var r;
        const i =
            (r = this.flags.timeout) !== null && r !== void 0
                ? r
                : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return;
        }
        const o = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let l = 0; l < this.sendBuffer.length; l++)
                this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
            n.call(this, new Error("operation has timed out"));
        }, i);
        this.acks[t] = (...l) => {
            this.io.clearTimeoutFn(o), n.apply(this, [null, ...l]);
        };
    }
    emitWithAck(t, ...n) {
        const r =
            this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
        return new Promise((i, o) => {
            n.push((l, s) => (r ? (l ? o(l) : i(s)) : i(l))),
                this.emit(t, ...n);
        });
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
        };
        t.push((i, ...o) =>
            r !== this._queue[0]
                ? void 0
                : (i !== null
                      ? r.tryCount > this._opts.retries &&
                        (this._queue.shift(), n && n(i))
                      : (this._queue.shift(), n && n(null, ...o)),
                  (r.pending = !1),
                  this._drainQueue())
        ),
            this._queue.push(r),
            this._drainQueue();
    }
    _drainQueue(t = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const n = this._queue[0];
        (n.pending && !t) ||
            ((n.pending = !0),
            n.tryCount++,
            (this.flags = n.flags),
            this.emit.apply(this, n.args));
    }
    packet(t) {
        (t.nsp = this.nsp), this.io._packet(t);
    }
    onopen() {
        typeof this.auth == "function"
            ? this.auth((t) => {
                  this._sendConnectPacket(t);
              })
            : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(t) {
        this.packet({
            type: O.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
                : t,
        });
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
    }
    onclose(t, n) {
        (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, n);
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
                case O.CONNECT:
                    t.data && t.data.sid
                        ? this.onconnect(t.data.sid, t.data.pid)
                        : this.emitReserved(
                              "connect_error",
                              new Error(
                                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                              )
                          );
                    break;
                case O.EVENT:
                case O.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case O.ACK:
                case O.BINARY_ACK:
                    this.onack(t);
                    break;
                case O.DISCONNECT:
                    this.ondisconnect();
                    break;
                case O.CONNECT_ERROR:
                    this.destroy();
                    const r = new Error(t.data.message);
                    (r.data = t.data.data),
                        this.emitReserved("connect_error", r);
                    break;
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
            this.connected
                ? this.emitEvent(n)
                : this.receiveBuffer.push(Object.freeze(n));
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t);
        }
        super.emit.apply(this, t),
            this._pid &&
                t.length &&
                typeof t[t.length - 1] == "string" &&
                (this._lastOffset = t[t.length - 1]);
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function (...i) {
            r || ((r = !0), n.packet({ type: O.ACK, id: t, data: i }));
        };
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" &&
            (n.apply(this, t.data), delete this.acks[t.id]);
    }
    onconnect(t, n) {
        (this.id = t),
            (this.recovered = n && this._pid === n),
            (this._pid = n),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
    }
    emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
                this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
    }
    disconnect() {
        return (
            this.connected && this.packet({ type: O.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        );
    }
    close() {
        return this.disconnect();
    }
    compress(t) {
        return (this.flags.compress = t), this;
    }
    get volatile() {
        return (this.flags.volatile = !0), this;
    }
    timeout(t) {
        return (this.flags.timeout = t), this;
    }
    onAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
        );
    }
    prependAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
        );
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyListeners = [];
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
        );
    }
    prependAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
        );
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyOutgoingListeners = [];
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data);
        }
    }
}
function kn(e) {
    (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
}
kn.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n;
    }
    return Math.min(e, this.max) | 0;
};
kn.prototype.reset = function () {
    this.attempts = 0;
};
kn.prototype.setMin = function (e) {
    this.ms = e;
};
kn.prototype.setMax = function (e) {
    this.max = e;
};
kn.prototype.setJitter = function (e) {
    this.jitter = e;
};
class wl extends X {
    constructor(t, n) {
        var r;
        super(),
            (this.nsps = {}),
            (this.subs = []),
            t && typeof t == "object" && ((n = t), (t = void 0)),
            (n = n || {}),
            (n.path = n.path || "/socket.io"),
            (this.opts = n),
            Vi(this, n),
            this.reconnection(n.reconnection !== !1),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
                (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
            ),
            (this.backoff = new kn({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
            })),
            this.timeout(n.timeout == null ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
        const i = n.parser || zh;
        (this.encoder = new i.Encoder()),
            (this.decoder = new i.Decoder()),
            (this._autoConnect = n.autoConnect !== !1),
            this._autoConnect && this.open();
    }
    reconnection(t) {
        return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
    }
    reconnectionAttempts(t) {
        return t === void 0
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              (n = this.backoff) === null || n === void 0 || n.setMin(t),
              this);
    }
    randomizationFactor(t) {
        var n;
        return t === void 0
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              (n = this.backoff) === null || n === void 0 || n.setJitter(t),
              this);
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              (n = this.backoff) === null || n === void 0 || n.setMax(t),
              this);
    }
    timeout(t) {
        return arguments.length ? ((this._timeout = t), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
        !this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0 &&
            this.reconnect();
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new df(this.uri, this.opts);
        const n = this.engine,
            r = this;
        (this._readyState = "opening"), (this.skipReconnect = !1);
        const i = Me(n, "open", function () {
                r.onopen(), t && t();
            }),
            o = (s) => {
                this.cleanup(),
                    (this._readyState = "closed"),
                    this.emitReserved("error", s),
                    t ? t(s) : this.maybeReconnectOnOpen();
            },
            l = Me(n, "error", o);
        if (this._timeout !== !1) {
            const s = this._timeout,
                u = this.setTimeoutFn(() => {
                    i(), o(new Error("timeout")), n.close();
                }, s);
            this.opts.autoUnref && u.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(u);
                });
        }
        return this.subs.push(i), this.subs.push(l), this;
    }
    connect(t) {
        return this.open(t);
    }
    onopen() {
        this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
            Me(t, "ping", this.onping.bind(this)),
            Me(t, "data", this.ondata.bind(this)),
            Me(t, "error", this.onerror.bind(this)),
            Me(t, "close", this.onclose.bind(this)),
            Me(this.decoder, "decoded", this.ondecoded.bind(this))
        );
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(t) {
        try {
            this.decoder.add(t);
        } catch (n) {
            this.onclose("parse error", n);
        }
    }
    ondecoded(t) {
        vs(() => {
            this.emitReserved("packet", t);
        }, this.setTimeoutFn);
    }
    onerror(t) {
        this.emitReserved("error", t);
    }
    socket(t, n) {
        let r = this.nsps[t];
        return (
            r
                ? this._autoConnect && !r.active && r.connect()
                : ((r = new hf(this, t, n)), (this.nsps[t] = r)),
            r
        );
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n) if (this.nsps[r].active) return;
        this._close();
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
    }
    cleanup() {
        this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
    }
    _close() {
        (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
    }
    disconnect() {
        return this._close();
    }
    onclose(t, n) {
        this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, n),
            this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect ||
                    (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                    !t.skipReconnect &&
                        t.open((i) => {
                            i
                                ? ((t._reconnecting = !1),
                                  t.reconnect(),
                                  this.emitReserved("reconnect_error", i))
                                : t.onreconnect();
                        }));
            }, n);
            this.opts.autoUnref && r.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(r);
                });
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
    }
}
const On = {};
function br(e, t) {
    typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
    const n = Sh(e, t.path || "/socket.io"),
        r = n.source,
        i = n.id,
        o = n.path,
        l = On[i] && o in On[i].nsps,
        s = t.forceNew || t["force new connection"] || t.multiplex === !1 || l;
    let u;
    return (
        s ? (u = new wl(r, t)) : (On[i] || (On[i] = new wl(r, t)), (u = On[i])),
        n.query && !t.query && (t.query = n.queryKey),
        u.socket(n.path, t)
    );
}
Object.assign(br, { Manager: wl, Socket: hf, io: br, connect: br });
let U, Kn, be, an, Fr, ne, ko, Ke, Uu, Ci;
const Dh = {
    iceServers: [
        {
            urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
            ],
        },
    ],
};
async function mf() {
    (an = await navigator.mediaDevices.getUserMedia({ video: !0, audio: !1 })),
        "srcObject" in Kn.current
            ? (Kn.current.srcObject = an)
            : (Kn.current.src = window.URL.createObjectURL(an));
}
async function yf() {
    (ne = new RTCPeerConnection(Dh)),
        an || (await mf()),
        an.getTracks().forEach((e) => {
            ne.addTrack(e, an);
        }),
        (Fr = new MediaStream()),
        "srcObject" in be.current
            ? (be.current.srcObject = Fr)
            : (be.current.src = window.URL.createObjectURL(Fr)),
        (ne.ontrack = (e) => {
            (be.current.style.display = "block"),
                e.streams[0].getTracks().forEach((t) => {
                    Fr.addTrack(t);
                });
        }),
        (ne.onicecandidate = (e) => {
            Ke && e.candidate && U.emit("candidate", e.candidate, Ke);
        });
}
async function Mh() {
    await yf(),
        (ko = await ne.createOffer()),
        await ne.setLocalDescription(ko),
        U.emit("offer", ko, Ke);
}
async function Ih(e) {
    await yf(), await ne.setRemoteDescription(e);
    let t = await ne.createAnswer();
    await ne.setLocalDescription(t), U.emit("answer", t, Ke);
}
function Bh() {
    (U = br("https://videochat.iusecookies64.xyz")),
        U.on("connect", () => {
            console.log("connected to socket"), mf(), U.emit("joinLobby");
        }),
        U.on("joiningRoom", (e) => {
            console.log("joining room with room id", e), Ci([]), (Ke = e);
        }),
        U.on("createOffer", () => {
            Mh();
        }),
        U.on("offer", (e) => {
            console.log("got offer", e), Ih(e);
        }),
        U.on("candidate", (e) => {
            ne && ne.addIceCandidate(e);
        }),
        U.on("answer", (e) => {
            ne.currentRemoteDescription || ne.setRemoteDescription(e);
        }),
        window.addEventListener("beforeunload", () => {
            U && U.emit("leaveLobby", Ke);
        }),
        U.on("peerLeaving", () => {
            (be.current.style.display = "none"),
                ne.close(),
                (Ke = null),
                U.emit("joinLobby");
        }),
        U.on("strangerMessage", (e) => {
            Ci((t) => [
                ...t,
                {
                    content: e,
                    userMessage: !1,
                    id: Math.floor(Math.random() * 1e5),
                },
            ]);
        });
}
function Fh() {
    const [e, t] = Xe.useState(!1),
        [n, r] = Xe.useState(window.innerWidth);
    ([Uu, Ci] = Xe.useState([])), (Kn = Xe.useRef()), (be = Xe.useRef());
    const i = Xe.useRef();
    window.addEventListener("resize", () => r(window.innerWidth));
    function o() {
        const u = i.current.value;
        (i.current.value = ""),
            u &&
                (U.emit("message", Ke, u),
                Ci((c) => [
                    ...c,
                    {
                        content: u,
                        userMessage: !0,
                        id: Math.floor(Math.random() * 1e5),
                    },
                ]));
    }
    function l() {
        e
            ? (U.emit("leaveLobby", Ke),
              U.disconnect(),
              ne.close(),
              (be.current.style.display = "none"),
              (U = null),
              (ne = null),
              t(!1))
            : (Bh(), t(!0));
    }
    function s() {
        e &&
            U &&
            (U.emit("nextRoom", Ke),
            ne.close(),
            (be.current.style.display = "none"),
            U.emit("joinLobby"));
    }
    return I.jsxs("div", {
        className: "app",
        children: [
            I.jsx("div", {
                className: "header card",
                children: "Omegle Clone",
            }),
            I.jsxs("div", {
                className: "main-section",
                children: [
                    I.jsxs("div", {
                        className: "video-chat",
                        children: [
                            I.jsx("div", {
                                className: "video-container",
                                children: I.jsx("video", {
                                    ref: be,
                                    className: "video-player",
                                    id: "user-2",
                                    autoPlay: !0,
                                    playsInline: !0,
                                    style: { display: "none" },
                                }),
                            }),
                            I.jsx("div", {
                                className: "video-container",
                                children: I.jsx("video", {
                                    ref: Kn,
                                    className: "video-player",
                                    id: "user-1",
                                    autoPlay: !0,
                                    playsInline: !0,
                                }),
                            }),
                        ],
                    }),
                    n < 750
                        ? null
                        : I.jsxs("div", {
                              className: "text-chat card",
                              children: [
                                  I.jsxs("div", {
                                      className: "messages",
                                      children: [
                                          I.jsx("div", {
                                              children:
                                                  "You are now talking to strangers.",
                                          }),
                                          Uu.map((u) =>
                                              u.userMessage
                                                  ? I.jsxs(
                                                        "div",
                                                        {
                                                            children: [
                                                                I.jsxs("span", {
                                                                    className:
                                                                        "your-text",
                                                                    children: [
                                                                        "You:",
                                                                        " ",
                                                                    ],
                                                                }),
                                                                u.content,
                                                            ],
                                                        },
                                                        u.id
                                                    )
                                                  : I.jsxs(
                                                        "div",
                                                        {
                                                            children: [
                                                                I.jsxs("span", {
                                                                    className:
                                                                        "stranger-text",
                                                                    children: [
                                                                        "Stranger:",
                                                                        " ",
                                                                    ],
                                                                }),
                                                                u.content,
                                                            ],
                                                        },
                                                        u.id
                                                    )
                                          ),
                                      ],
                                  }),
                                  I.jsxs("div", {
                                      className: "text-input",
                                      children: [
                                          I.jsx("div", {
                                              className: "button",
                                              style: { marginRight: "0.5rem" },
                                              onClick: l,
                                              children: e ? "Stop" : "Start",
                                          }),
                                          I.jsx("div", {
                                              className: "button",
                                              style: {
                                                  marginRight: "0.5rem",
                                                  backgroundColor: "#90EE90",
                                              },
                                              onClick: s,
                                              children: "Next",
                                          }),
                                          I.jsx("textarea", {
                                              ref: i,
                                              type: "text",
                                              placeholder: "Type Something",
                                              onKeyDown: (u) => {
                                                  u.key === "Enter" && o();
                                              },
                                          }),
                                          I.jsx("div", {
                                              className: "button",
                                              onClick: o,
                                              children: "Send",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    n >= 750
                        ? null
                        : I.jsxs("div", {
                              className: "hovering-panel",
                              children: [
                                  I.jsx("div", {
                                      className: "button",
                                      style: { marginRight: "0.5rem" },
                                      onClick: l,
                                      children: e ? "Stop" : "Start",
                                  }),
                                  I.jsx("div", {
                                      className: "button",
                                      style: { backgroundColor: "#90EE90" },
                                      onClick: s,
                                      children: "Next",
                                  }),
                              ],
                          }),
                ],
            }),
        ],
    });
}
So.createRoot(document.getElementById("root")).render(
    I.jsx(Df.StrictMode, { children: I.jsx(Fh, {}) })
);
