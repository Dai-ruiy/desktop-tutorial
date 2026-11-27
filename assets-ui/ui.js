// \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function O(e, t) {
		return D(e.type, t, e.props);
	}
	function k(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function A(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var j = /\/+/g;
	function M(e, t) {
		return typeof e == "object" && e && e.key != null ? A("" + e.key) : t.toString(36);
	}
	function N(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function P(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, P(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + M(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(j, "$&/") + "/"), P(o, r, i, "", function(e) {
			return e;
		})) : o != null && (k(o) && (o = O(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + M(a, u), c += P(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + M(a, u++), c += P(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return P(N(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function F(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return P(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function I(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var L = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function ee(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, L);
		} catch (e) {
			L(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function R(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else ee(R.bind(null, e));
	}
	var te = {
		map: F,
		forEach: function(e, t, n) {
			F(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return F(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return F(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = te, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = R, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !E.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return D(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) E.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return D(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = k, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: I
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = ee, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.1";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, O());
			else {
				var t = n(l);
				t !== null && j(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && j(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var k = new MessageChannel(), A = k.port2;
		k.port1.onmessage = D, O = function() {
			A.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function j(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
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
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, j(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.1";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function E(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var D = Object.assign, O = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), F = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), ne = Symbol.for("react.legacy_hidden"), B = Symbol.for("react.memo_cache_sentinel"), re = Symbol.for("react.view_transition"), ie = Symbol.for("react.recoverable"), V = Symbol.iterator;
	function ae(e) {
		return typeof e != "object" || !e ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var oe = Symbol.for("react.client.reference");
	function se(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === oe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case j: return "Fragment";
			case N: return "Profiler";
			case M: return "StrictMode";
			case L: return "Suspense";
			case ee: return "SuspenseList";
			case z: return "Activity";
			case re: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case A: return "Portal";
			case F: return e.displayName || "Context";
			case P: return (e._context.displayName || "Context") + ".Consumer";
			case I:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case R: return t = e.displayName || null, t === null ? se(e.type) || "Memo" : t;
			case te:
				t = e._payload, e = e._init;
				try {
					return se(e(t));
				} catch {}
		}
		return null;
	}
	var ce = Array.isArray, H = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, de = [], U = -1;
	function fe(e) {
		return { current: e };
	}
	function pe(e) {
		0 > U || (e.current = de[U], de[U] = null, U--);
	}
	function W(e, t) {
		U++, de[U] = e.current, e.current = t;
	}
	var me = fe(null), he = fe(null), G = fe(null), ge = fe(null);
	function _e(e, t) {
		switch (W(G, t), W(he, e), W(me, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		pe(me), W(me, e);
	}
	function ve() {
		pe(me), pe(he), pe(G);
	}
	function ye(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, W(ge, e)), t = me.current;
		var n = dp(t, e.type);
		t !== n && (W(he, e), W(me, n));
	}
	function be(e) {
		he.current === e && (pe(me), pe(he)), ge.current === e && (pe(ge), sh._currentValue = ue);
	}
	var xe, Se;
	function Ce(e) {
		if (xe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			xe = t && t[1] || "", Se = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + xe + e + Se;
	}
	var we = !1;
	function Te(e, t) {
		if (!e || we) return "";
		we = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			we = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ce(n) : "";
	}
	function Ee(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ce(e.type);
			case 16: return Ce("Lazy");
			case 13: return e.child !== t && t !== null ? Ce("Suspense Fallback") : Ce("Suspense");
			case 19: return Ce("SuspenseList");
			case 0:
			case 15: return Te(e.type, !1);
			case 11: return Te(e.type.render, !1);
			case 1: return Te(e.type, !0);
			case 31: return Ce("Activity");
			case 30: return Ce("ViewTransition");
			default: return "";
		}
	}
	function De(e) {
		try {
			var t = "", n = null;
			do
				t += Ee(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Oe = Object.prototype.hasOwnProperty, ke = t.unstable_scheduleCallback, Ae = t.unstable_cancelCallback, je = t.unstable_shouldYield, Me = t.unstable_requestPaint, Ne = t.unstable_now, Pe = t.unstable_getCurrentPriorityLevel, Fe = t.unstable_ImmediatePriority, Ie = t.unstable_UserBlockingPriority, Le = t.unstable_NormalPriority, Re = t.unstable_LowPriority, ze = t.unstable_IdlePriority, Be = t.log, Ve = t.unstable_setDisableYieldValue, He = null, Ue = null;
	function We(e) {
		if (typeof Be == "function" && Ve(e), Ue && typeof Ue.setStrictMode == "function") try {
			Ue.setStrictMode(He, e);
		} catch {}
	}
	var Ge = Math.clz32 ? Math.clz32 : Je, Ke = Math.log, qe = Math.LN2;
	function Je(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ke(e) / qe | 0) | 0;
	}
	var Ye = 256, Xe = 262144, Ze = 4194304;
	function Qe(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function $e(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o) : i = Qe(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o)) : i = Qe(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function et(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function tt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - Ge(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function nt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
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
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function rt() {
		var e = Ze;
		return Ze <<= 1, !(Ze & 62914560) && (Ze = 4194304), e;
	}
	function K(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function it(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function at(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Ge(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ot(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ot(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Ge(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function st(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ge(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function ct(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : lt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function lt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
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
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function ut(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function dt() {
		var e = le.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function ft(e, t) {
		var n = le.p;
		try {
			return le.p = e, t();
		} finally {
			le.p = n;
		}
	}
	var pt = Math.random().toString(36).slice(2), mt = "__reactFiber$" + pt, ht = "__reactProps$" + pt, gt = "__reactContainer$" + pt, _t = "__reactEvents$" + pt, vt = "__reactListeners$" + pt, yt = "__reactHandles$" + pt, bt = "__reactResources$" + pt, xt = "__reactMarker$" + pt, St = "__reactLoad$" + pt;
	function Ct(e) {
		delete e[mt], delete e[ht], delete e[vt], delete e[yt];
	}
	function wt(e) {
		var t;
		if (t = e[mt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[gt] || n[mt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[mt]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Tt(e) {
		if (e = e[mt] || e[gt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Et(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Dt(e) {
		var t = e[bt];
		return t ||= e[bt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Ot(e) {
		e[xt] = !0;
	}
	function kt(e) {
		e[St] = void 0;
	}
	var At = /* @__PURE__ */ new Set(), jt = {};
	function Mt(e, t) {
		Nt(e, t), Nt(e + "Capture", t);
	}
	function Nt(e, t) {
		for (jt[e] = t, e = 0; e < t.length; e++) At.add(t[e]);
	}
	var Pt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ft = {}, It = {};
	function Lt(e) {
		return Oe.call(It, e) ? !0 : Oe.call(Ft, e) ? !1 : Pt.test(e) ? It[e] = !0 : (Ft[e] = !0, !1);
	}
	var Rt = !1;
	function zt() {
		var e = Rt;
		return Rt = !1, e;
	}
	function Bt(e, t, n) {
		if (Lt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Vt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Ht(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Ut(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Wt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Gt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Kt(e) {
		if (!e._valueTracker) {
			var t = Wt(e) ? "checked" : "value";
			e._valueTracker = Gt(e, t, "" + e[t]);
		}
	}
	function qt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Wt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var Jt = /[\n"\\]/g;
	function Yt(e) {
		return e.replace(Jt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Xt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Qt(e, Ut(n)) : o === "number" && e.value == t ? Qt(e, Ut(e.value)) : Qt(e, Ut(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Ut(s) : e.removeAttribute("name");
	}
	function Zt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Kt(e);
				return;
			}
			n = n == null ? "" : "" + Ut(n), t = t == null ? n : "" + Ut(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Kt(e);
	}
	function Qt(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function $t(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function en(e, t, n) {
		t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + Ut(n);
	}
	function tn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ce(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Ut(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Kt(e);
	}
	function nn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var rn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function an(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || rn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function on(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Rt = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (an(e, a, r), Rt = !0);
		} else for (var o in t) t.hasOwnProperty(o) && an(e, o, t[o]);
	}
	function sn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var cn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), ln = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function un(e) {
		return ln.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function dn() {}
	var fn = null;
	function pn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var mn = null, hn = null;
	function gn(e) {
		var t = Tt(e);
		if (t && (e = t.stateNode)) {
			var n = e[ht] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Xt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Yt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[ht] || null;
								if (!a) throw Error(i(90));
								Xt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && qt(r);
					}
					break a;
				case "textarea":
					en(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && $t(e, !!n.multiple, t, !1);
			}
		}
	}
	var _n = !1;
	function vn(e, t, n) {
		if (_n) return e(t, n);
		_n = !0;
		try {
			return e(t);
		} finally {
			if (_n = !1, (mn !== null || hn !== null) && (Ld(), mn && (t = mn, e = hn, hn = mn = null, gn(t), e))) for (t = 0; t < e.length; t++) gn(e[t]);
		}
	}
	function yn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[ht] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
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
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var bn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, xn = !1;
	if (bn) try {
		var Sn = {};
		Object.defineProperty(Sn, "passive", { get: function() {
			xn = !0;
		} }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
	} catch {
		xn = !1;
	}
	var Cn = null, wn = null, Tn = null;
	function En() {
		if (Tn) return Tn;
		var e, t = wn, n = t.length, r, i = "value" in Cn ? Cn.value : Cn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Tn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Dn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function On() {
		return !0;
	}
	function kn() {
		return !1;
	}
	function An(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? On : kn, this.isPropagationStopped = kn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = On);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = On);
			},
			persist: function() {},
			isPersistent: On
		}), t;
	}
	var jn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Mn = An(jn), Nn = D({}, jn, {
		view: 0,
		detail: 0
	}), Pn = An(Nn), Fn, In, Ln, Rn = D({}, Nn, {
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
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Fn = e.screenX - Ln.screenX, In = e.screenY - Ln.screenY) : In = Fn = 0, Ln = e), Fn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : In;
		}
	}), zn = An(Rn), Bn = An(D({}, Rn, { dataTransfer: 0 })), Vn = An(D({}, Nn, { relatedTarget: 0 })), Hn = An(D({}, jn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Un = An(D({}, jn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Wn = An(D({}, jn, { data: 0 })), Gn = {
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
		MozPrintableKey: "Unidentified"
	}, Kn = {
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
		224: "Meta"
	}, qn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Jn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = qn[e]) ? !!t[e] : !1;
	}
	function Yn() {
		return Jn;
	}
	var Xn = An(D({}, Nn, {
		key: function(e) {
			if (e.key) {
				var t = Gn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kn[e.keyCode] || "Unidentified" : "";
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
		charCode: function(e) {
			return e.type === "keypress" ? Dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Zn = An(D({}, Rn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Qn = An(D({}, jn, { submitter: 0 })), $n = An(D({}, Nn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Yn
	})), er = An(D({}, jn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), tr = An(D({}, Rn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), nr = An(D({}, jn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), rr = [
		9,
		13,
		27,
		32
	], ir = bn && "CompositionEvent" in window, ar = null;
	bn && "documentMode" in document && (ar = document.documentMode);
	var or = bn && "TextEvent" in window && !ar, sr = bn && (!ir || ar && 8 < ar && 11 >= ar), cr = " ", lr = !1;
	function ur(e, t) {
		switch (e) {
			case "keyup": return rr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function dr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var fr = !1;
	function pr(e, t) {
		switch (e) {
			case "compositionend": return dr(t);
			case "keypress": return t.which === 32 ? (lr = !0, cr) : null;
			case "textInput": return e = t.data, e === cr && lr ? null : e;
			default: return null;
		}
	}
	function mr(e, t) {
		if (fr) return e === "compositionend" || !ir && ur(e, t) ? (e = En(), Tn = wn = Cn = null, fr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return sr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var hr = {
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
		week: !0
	};
	function gr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!hr[e.type] : t === "textarea";
	}
	function _r(e, t, n, r) {
		mn ? hn ? hn.push(r) : hn = [r] : mn = r, t = qf(t, "onChange"), 0 < t.length && (n = new Mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var vr = null, yr = null;
	function br(e) {
		zf(e, 0);
	}
	function xr(e) {
		if (qt(Et(e))) return e;
	}
	function Sr(e, t) {
		if (e === "change") return t;
	}
	var Cr = !1;
	if (bn) {
		var wr;
		if (bn) {
			var Tr = "oninput" in document;
			if (!Tr) {
				var Er = document.createElement("div");
				Er.setAttribute("oninput", "return;"), Tr = typeof Er.oninput == "function";
			}
			wr = Tr;
		} else wr = !1;
		Cr = wr && (!document.documentMode || 9 < document.documentMode);
	}
	function Dr() {
		vr && (vr.detachEvent("onpropertychange", Or), yr = vr = null);
	}
	function Or(e) {
		if (e.propertyName === "value" && xr(yr)) {
			var t = [];
			_r(t, yr, e, pn(e)), vn(br, t);
		}
	}
	function kr(e, t, n) {
		e === "focusin" ? (Dr(), vr = t, yr = n, vr.attachEvent("onpropertychange", Or)) : e === "focusout" && Dr();
	}
	function Ar(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return xr(yr);
	}
	function jr(e, t) {
		if (e === "click") return xr(t);
	}
	function Mr(e, t) {
		if (e === "input" || e === "change") return xr(t);
	}
	function Nr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Pr = typeof Object.is == "function" ? Object.is : Nr;
	function Fr(e, t) {
		if (Pr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Oe.call(t, i) || !Pr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Ir(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Lr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Rr(e, t) {
		var n = Lr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Lr(n);
		}
	}
	function zr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Br(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Ir(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Ir(e.document);
		}
		return t;
	}
	function Vr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Hr = bn && "documentMode" in document && 11 >= document.documentMode, Ur = null, Wr = null, Gr = null, Kr = !1;
	function qr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Kr || Ur == null || Ur !== Ir(r) || (r = Ur, "selectionStart" in r && Vr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Gr && Fr(Gr, r) || (Gr = r, r = qf(Wr, "onSelect"), 0 < r.length && (t = new Mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Ur)));
	}
	function Jr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Yr = {
		animationend: Jr("Animation", "AnimationEnd"),
		animationiteration: Jr("Animation", "AnimationIteration"),
		animationstart: Jr("Animation", "AnimationStart"),
		transitionrun: Jr("Transition", "TransitionRun"),
		transitionstart: Jr("Transition", "TransitionStart"),
		transitioncancel: Jr("Transition", "TransitionCancel"),
		transitionend: Jr("Transition", "TransitionEnd")
	}, Xr = {}, Zr = {};
	bn && (Zr = document.createElement("div").style, "AnimationEvent" in window || (delete Yr.animationend.animation, delete Yr.animationiteration.animation, delete Yr.animationstart.animation), "TransitionEvent" in window || delete Yr.transitionend.transition);
	function Qr(e) {
		if (Xr[e]) return Xr[e];
		if (!Yr[e]) return e;
		var t = Yr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Zr) return Xr[e] = t[n];
		return e;
	}
	var $r = Qr("animationend"), ei = Qr("animationiteration"), ti = Qr("animationstart"), ni = Qr("transitionrun"), ri = Qr("transitionstart"), ii = Qr("transitioncancel"), ai = Qr("transitionend"), oi = /* @__PURE__ */ new Map(), si = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	si.push("scrollEnd");
	function ci(e, t) {
		oi.set(e, t), Mt(t, [e]);
	}
	var li = 0;
	function ui(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = vd.identifierPrefix;
		var n = li++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function di(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Ed;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function fi(e, t) {
		return e = di(e), t = di(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var pi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, mi = [], hi = 0, gi = 0;
	function _i() {
		for (var e = hi, t = gi = hi = 0; t < e;) {
			var n = mi[t];
			mi[t++] = null;
			var r = mi[t];
			mi[t++] = null;
			var i = mi[t];
			mi[t++] = null;
			var a = mi[t];
			if (mi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && xi(n, i, a);
		}
	}
	function vi(e, t, n, r) {
		mi[hi++] = e, mi[hi++] = t, mi[hi++] = n, mi[hi++] = r, gi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function yi(e, t, n, r) {
		return vi(e, t, n, r), Si(e);
	}
	function bi(e, t) {
		return vi(e, null, null, t), Si(e);
	}
	function xi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ge(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Si(e) {
		if (50 < Dd) throw Dd = 0, Od = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ci = {};
	function wi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Ti(e, t, n, r) {
		return new wi(e, t, n, r);
	}
	function Ei(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Di(e, t) {
		var n = e.alternate;
		return n === null ? (n = Ti(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Oi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ki(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ei(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, me.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case z: return e = Ti(31, n, t, a), e.elementType = z, e.lanes = o, e;
			case j: return Ai(n.children, a, o, t);
			case M:
				s = 8, a |= 24;
				break;
			case N: return e = Ti(12, n, t, a | 2), e.elementType = N, e.lanes = o, e;
			case L: return e = Ti(13, n, t, a), e.elementType = L, e.lanes = o, e;
			case ee: return e = Ti(19, n, t, a), e.elementType = ee, e.lanes = o, e;
			case ne:
			case re: return e = a | 32, e = Ti(30, n, t, e), e.elementType = re, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case F:
						s = 10;
						break a;
					case P:
						s = 9;
						break a;
					case I:
						s = 11;
						break a;
					case R:
						s = 14;
						break a;
					case te:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Ti(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Ai(e, t, n, r) {
		return e = Ti(7, e, r, t), e.lanes = n, e;
	}
	function ji(e, t, n) {
		return e = Ti(6, e, null, t), e.lanes = n, e;
	}
	function Mi(e) {
		var t = Ti(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ni(e, t, n) {
		return t = Ti(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Pi = /* @__PURE__ */ new WeakMap();
	function Fi(e, t) {
		if (typeof e == "object" && e) {
			var n = Pi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: De(t)
			}, Pi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: De(t)
		};
	}
	var Ii = [], Li = 0, Ri = null, zi = 0, Bi = [], Vi = 0, Hi = null, Ui = 1, Wi = "";
	function Gi(e, t) {
		Ii[Li++] = zi, Ii[Li++] = Ri, Ri = e, zi = t;
	}
	function Ki(e, t, n) {
		Bi[Vi++] = Ui, Bi[Vi++] = Wi, Bi[Vi++] = Hi, Hi = e;
		var r = Ui;
		e = Wi;
		var i = 32 - Ge(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ge(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Ui = 1 << 32 - Ge(t) + i | n << i | r, Wi = a + e;
		} else Ui = 1 << a | n << i | r, Wi = e;
	}
	function qi(e) {
		e.return !== null && (Gi(e, 1), Ki(e, 1, 0));
	}
	function Ji(e) {
		for (; e === Ri;) Ri = Ii[--Li], Ii[Li] = null, zi = Ii[--Li], Ii[Li] = null;
		for (; e === Hi;) Hi = Bi[--Vi], Bi[Vi] = null, Wi = Bi[--Vi], Bi[Vi] = null, Ui = Bi[--Vi], Bi[Vi] = null;
	}
	function Yi(e, t) {
		Bi[Vi++] = Ui, Bi[Vi++] = Wi, Bi[Vi++] = Hi, Ui = t.id, Wi = t.overflow, Hi = e;
	}
	var Xi = null, Zi = null, q = !1, Qi = null, $i = !1, ea = Error(i(519));
	function ta(e) {
		throw sa(Fi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ea;
	}
	function na(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[mt] = e, t[ht] = r, n) {
			case "dialog":
				Bf("cancel", t), Bf("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Bf("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Lf.length; n++) Bf(Lf[n], t);
				break;
			case "source":
				Bf("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Bf("error", t), Bf("load", t);
				break;
			case "details":
				Bf("toggle", t);
				break;
			case "input":
				Bf("invalid", t), Zt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Bf("invalid", t);
				break;
			case "textarea": Bf("invalid", t), tn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || $f(t.textContent, n) ? (r.popover != null && (Bf("beforetoggle", t), Bf("toggle", t)), r.onScroll != null && Bf("scroll", t), r.onScrollEnd != null && Bf("scrollend", t), r.onClick != null && (t.onclick = dn), t = !0) : t = !1, t || ta(e, !0);
	}
	function ra(e) {
		for (Xi = e.return; Xi;) switch (Xi.tag) {
			case 5:
			case 31:
			case 13:
				$i = !1;
				return;
			case 27:
			case 3:
				$i = !0;
				return;
			default: Xi = Xi.return;
		}
	}
	function ia(e) {
		if (e !== Xi) return !1;
		if (!q) return ra(e), q = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && Zi && ta(e), ra(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			Zi = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			Zi = dm(e);
		} else t === 27 ? (t = Zi, Sp(e.type) ? (e = um, um = null, Zi = e) : Zi = t) : Zi = Xi ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function aa() {
		Zi = Xi = null, q = !1;
	}
	function oa() {
		var e = Qi;
		return e !== null && (ud === null ? ud = e : ud.push.apply(ud, e), Qi = null), e;
	}
	function sa(e) {
		Qi === null ? Qi = [e] : Qi.push(e);
	}
	var ca = fe(null), la = null, ua = null;
	function da(e, t, n) {
		W(ca, t._currentValue), t._currentValue = n;
	}
	function fa(e) {
		e._currentValue = ca.current, pe(ca);
	}
	function pa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ma(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), pa(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), pa(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), pa(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ha(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Pr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ge.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && ma(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ga(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Pr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function _a(e) {
		la = e, ua = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function va(e) {
		return ba(la, e);
	}
	function ya(e, t) {
		return la === null && _a(e), ba(e, t);
	}
	function ba(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ua === null) {
			if (e === null) throw Error(i(308));
			ua = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ua = ua.next = t;
		return n;
	}
	var xa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Sa = t.unstable_scheduleCallback, Ca = t.unstable_NormalPriority, wa = {
		$$typeof: F,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Ta() {
		return {
			controller: new xa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Ea(e) {
		e.refCount--, e.refCount === 0 && Sa(Ca, function() {
			e.controller.abort();
		});
	}
	function Da(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Oa = null;
	function ka(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Aa = null, ja = 0, Ma = 0, Na = null;
	function Pa(e, t) {
		if (Aa === null) {
			var n = Aa = [];
			ja = 0, Ma = Mf(), Na = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ja++, t.then(Fa, Fa), t;
	}
	function Fa() {
		if (--ja === 0 && (Oa = null, Aa !== null)) {
			Na !== null && (Na.status = "fulfilled");
			var e = Aa;
			Aa = null, Ma = 0, Na = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ia(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var La = H.S;
	H.S = function(e, t) {
		if (pd = Ne(), typeof t == "object" && t && typeof t.then == "function" && Pa(e, t), Oa !== null) for (var n = yf; n !== null;) Da(n, Oa), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = yf; r !== null;) Da(r, n), r = r.next;
			if (Ma !== 0) {
				r = Oa, r === null && (r = Oa = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		La !== null && La(e, t);
	};
	var Ra = fe(null);
	function za() {
		var e = Ra.current;
		return e === null ? Yu.pooledCache : e;
	}
	function Ba(e, t) {
		t === null ? W(Ra, Ra.current) : W(Ra, t.pool);
	}
	function Va() {
		var e = za();
		return e === null ? null : {
			parent: wa._currentValue,
			pool: e
		};
	}
	var Ha = Error(i(460)), Ua = Error(i(474)), Wa = Error(i(542)), Ga = { then: function() {} };
	function Ka(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function qa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(dn, dn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Za(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(dn, dn);
				else {
					if (e = Yu, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Za(e), e;
				}
				throw Ya = t, Ha;
		}
	}
	function Ja(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Ya = e, Ha) : e;
		}
	}
	var Ya = null;
	function Xa() {
		if (Ya === null) throw Error(i(459));
		var e = Ya;
		return Ya = null, e;
	}
	function Za(e) {
		if (e === Ha || e === Wa) throw Error(i(483));
	}
	var Qa = null, $a = 0;
	function eo(e) {
		var t = $a;
		return $a += 1, Qa === null && (Qa = []), qa(Qa, e, t);
	}
	function to(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function no(e, t) {
		throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function ro(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Di(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = ji(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === j ? (e = d(e, t, n.props.children, r, n.key), to(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === te && Ja(i) === t.type) ? (t = a(t, n.props), to(t, n), t.return = e, t) : (t = ki(n.type, n.key, n.props, null, e.mode, r), to(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ni(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ai(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = ji("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case k: return n = ki(t.type, t.key, t.props, null, e.mode, n), to(n, t), n.return = e, n;
					case A: return t = Ni(t, e.mode, n), t.return = e, t;
					case te: return t = Ja(t), f(e, t, n);
				}
				if (ce(t) || ae(t)) return t = Ai(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, eo(t), n);
				if (t.$$typeof === F) return f(e, ya(e, t), n);
				no(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case k: return n.key === i ? l(e, t, n, r) : null;
					case A: return n.key === i ? u(e, t, n, r) : null;
					case te: return n = Ja(n), p(e, t, n, r);
				}
				if (ce(n) || ae(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, eo(n), r);
				if (n.$$typeof === F) return p(e, t, ya(e, n), r);
				no(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case k: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case A: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case te: return r = Ja(r), m(e, t, n, r, i);
				}
				if (ce(r) || ae(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, eo(r), i);
				if (r.$$typeof === F) return m(e, t, n, ya(t, r), i);
				no(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), q && Gi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return q && Gi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), q && Gi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), q && Gi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return q && Gi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), q && Gi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === j && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case k:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === j) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), to(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === te && Ja(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), to(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === j ? (c = Ai(o.props.children, e.mode, c, o.key), to(c, o), c.return = e, e = c) : (c = ki(o.type, o.key, o.props, null, e.mode, c), to(c, o), c.return = e, e = c);
						}
						return s(e);
					case A:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Ni(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case te: return o = Ja(o), _(e, r, o, c);
				}
				if (ce(o)) return h(e, r, o, c);
				if (ae(o)) {
					if (l = ae(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, eo(o), c);
				if (o.$$typeof === F) return _(e, r, ya(e, o), c);
				no(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = ji(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				$a = 0;
				var i = _(e, t, n, r);
				return Qa = null, i;
			} catch (t) {
				if (t === Ha || t === Wa) throw t;
				var a = Ti(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var io = ro(!0), ao = ro(!1), oo = !1;
	function J(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function so(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function co(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function lo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Ju & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Si(e), xi(e, null, n), t;
		}
		return vi(e, r, t, n), Si(e);
	}
	function uo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, st(e, n);
		}
	}
	function fo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var po = !1;
	function mo() {
		if (po) {
			var e = Na;
			if (e !== null) throw e;
		}
	}
	function ho(e, t, n, r) {
		po = !1;
		var i = e.updateQueue;
		oo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Xu & f) === f : (r & f) === f) {
					f !== 0 && f === Ma && (po = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = D({}, d, f);
								break a;
							case 2: oo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), id |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function go(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function _o(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) go(n[e], t);
	}
	var vo = fe(null), Y = fe(0);
	function yo(e, t) {
		e = nd, W(Y, e), W(vo, t), nd = e | t.baseLanes;
	}
	function bo() {
		W(Y, nd), W(vo, vo.current);
	}
	function xo() {
		nd = Y.current, pe(vo), pe(Y);
	}
	var So = fe(null), Co = null;
	function wo(e) {
		var t = e.alternate;
		W(Oo, Oo.current & 1), W(So, e), Co === null && (t === null || vo.current !== null || t.memoizedState !== null) && (Co = e);
	}
	function To(e) {
		W(Oo, Oo.current), W(So, e), Co === null && (Co = e);
	}
	function X(e) {
		e.tag === 22 ? (W(Oo, Oo.current), W(So, e), Co === null && (Co = e)) : Eo();
	}
	function Eo() {
		W(Oo, Oo.current), W(So, So.current);
	}
	function Do(e) {
		pe(So), Co === e && (Co = null), pe(Oo);
	}
	var Oo = fe(0);
	function ko(e, t) {
		W(So, So.current), W(Oo, t);
	}
	function Ao(e) {
		pe(Oo), pe(So), Co === e && (Co = null);
	}
	function jo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Mo = 0, Z = null, No = null, Po = null, Fo = !1, Io = !1, Lo = !1, Ro = 0, zo = 0, Bo = null, Vo = 0;
	function Ho() {
		throw Error(i(321));
	}
	function Uo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Pr(e[n], t[n])) return !1;
		return !0;
	}
	function Wo(e, t, n, r, i, a) {
		return Mo = a, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? sc : cc, Lo = !1, a = n(r, i), Lo = !1, Io && (a = Ko(t, n, r, i)), Go(e), a;
	}
	function Go(e) {
		H.H = oc;
		var t = No !== null && No.next !== null;
		if (Mo = 0, Po = No = Z = null, Fo = !1, zo = 0, Bo = null, t) throw Error(i(300));
		e === null || Tc || (e = e.dependencies, e !== null && ga(e) && (Tc = !0));
	}
	function Ko(e, t, n, r) {
		Z = e;
		var a = 0;
		do {
			if (Io && (Bo = null), zo = 0, Io = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Po = No = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			H.H = lc, o = t(n, r);
		} while (Io);
		return o;
	}
	function qo() {
		var e = H.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? es(t) : t, e = e.useState()[0], (No === null ? null : No.memoizedState) !== e && (Z.flags |= 1024), t;
	}
	function Jo() {
		var e = Ro !== 0;
		return Ro = 0, e;
	}
	function Yo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Xo(e) {
		if (Fo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Fo = !1;
		}
		Mo = 0, Po = No = Z = null, Io = !1, zo = Ro = 0, Bo = null;
	}
	function Zo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Po === null ? Z.memoizedState = Po = e : Po = Po.next = e, Po;
	}
	function Qo() {
		if (No === null) {
			var e = Z.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = No.next;
		var t = Po === null ? Z.memoizedState : Po.next;
		if (t !== null) Po = t, No = e;
		else {
			if (e === null) throw Z.alternate === null ? Error(i(467)) : Error(i(310));
			No = e, e = {
				memoizedState: No.memoizedState,
				baseState: No.baseState,
				baseQueue: No.baseQueue,
				queue: No.queue,
				next: null
			}, Po === null ? Z.memoizedState = Po = e : Po = Po.next = e;
		}
		return Po;
	}
	function $o() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function es(e) {
		var t = zo;
		return zo += 1, Bo === null && (Bo = []), e = qa(Bo, e, t), t = Z, (Po === null ? t.memoizedState : Po.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? sc : cc), e;
	}
	function ts(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return es(e);
			if (e.$$typeof === ie) return;
			if (e.$$typeof === F) return va(e);
		}
		throw Error(i(438, String(e)));
	}
	function ns(e) {
		var t = null, n = Z.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = Z.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = $o(), Z.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = B;
		return t.index++, n;
	}
	function rs(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function is(e) {
		return as(Qo(), No, e);
	}
	function as(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Mo & f) === f : (Xu & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Ma && (d = !0);
					else if ((Mo & p) === p) {
						u = u.next, p === Ma && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, Z.lanes |= p, id |= p;
					f = u.action, Lo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, Z.lanes |= f, id |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Pr(o, e.memoizedState) && (Tc = !0, d && (n = Na, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function os(e) {
		var t = Qo(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Pr(o, t.memoizedState) || (Tc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function ss(e, t, n) {
		var r = Z, a = Qo(), o = q;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Pr((No || a).memoizedState, n);
		if (s && (a.memoizedState = n, Tc = !0), a = a.queue, Ms(us.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Po !== null && !!(Po.memoizedState.tag & 1), Ds(e ? 9 : 8, { destroy: void 0 }, ls.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, Yu === null) throw Error(i(349));
			o || Mo & 127 || cs(r, t, n);
		}
		return n;
	}
	function cs(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = Z.updateQueue, t === null ? (t = $o(), Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function ls(e, t, n, r) {
		t.value = n, t.getSnapshot = r, ds(t) && fs(e);
	}
	function us(e, t, n) {
		return n(function() {
			ds(t) && fs(e);
		});
	}
	function ds(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Pr(e, n);
		} catch {
			return !0;
		}
	}
	function fs(e) {
		var t = bi(e, 2);
		t !== null && Md(t, e, 2);
	}
	function ps(e) {
		var t = Zo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Lo) {
				We(!0);
				try {
					n();
				} finally {
					We(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: rs,
			lastRenderedState: e
		}, t;
	}
	function ms(e, t, n, r) {
		return e.baseState = n, as(e, No, typeof r == "function" ? r : rs);
	}
	function hs(e, t, n, r, a) {
		if (rc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			H.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, gs(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function gs(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = H.T, o = {};
			o.types = a === null ? null : a.types, H.T = o;
			try {
				var s = n(i, r), c = H.S;
				c !== null && c(o, s), _s(e, t, s);
			} catch (n) {
				ys(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), H.T = a;
			}
		} else try {
			a = n(i, r), _s(e, t, a);
		} catch (n) {
			ys(e, t, n);
		}
	}
	function _s(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			vs(e, t, n);
		}, function(n) {
			return ys(e, t, n);
		}) : vs(e, t, n);
	}
	function vs(e, t, n) {
		t.status = "fulfilled", t.value = n, bs(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, gs(e, n)));
	}
	function ys(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, bs(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function bs(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function xs(e, t) {
		return t;
	}
	function Ss(e, t) {
		if (q) {
			var n = Yu.formState;
			if (n !== null) {
				a: {
					var r = Z;
					if (q) {
						if (Zi) {
							b: {
								for (var i = Zi, a = $i; i.nodeType !== 8;) if (!a || (i = lm(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								Zi = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ta(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Zo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: xs,
			lastRenderedState: t
		}, n.queue = r, n = ec.bind(null, Z, r), r.dispatch = n, r = ps(!1), a = nc.bind(null, Z, !1, r.queue), r = Zo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = hs.bind(null, Z, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Cs(e) {
		return ws(Qo(), No, e);
	}
	function ws(e, t, n) {
		if (t = as(e, t, xs)[0], e = is(rs)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = es(t);
		} catch (e) {
			throw e === Ha ? Wa : e;
		}
		else r = t;
		t = Qo();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (Z.flags |= 2048, Ds(9, { destroy: void 0 }, Ts.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Ts(e, t) {
		e.action = t;
	}
	function Es(e) {
		var t = Qo(), n = No;
		if (n !== null) return ws(t, n, e);
		Qo(), t = t.memoizedState, n = Qo();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Ds(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = Z.updateQueue, t === null && (t = $o(), Z.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Os() {
		return Qo().memoizedState;
	}
	function ks(e, t, n, r) {
		var i = Zo();
		Z.flags |= e, i.memoizedState = Ds(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function As(e, t, n, r) {
		var i = Qo();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		No !== null && r !== null && Uo(r, No.memoizedState.deps) ? i.memoizedState = Ds(t, a, n, r) : (Z.flags |= e, i.memoizedState = Ds(1 | t, a, n, r));
	}
	function js(e, t) {
		ks(8390656, 8, e, t);
	}
	function Ms(e, t) {
		As(2048, 8, e, t);
	}
	function Ns(e) {
		Z.flags |= 4;
		var t = Z.updateQueue;
		if (t === null) t = $o(), Z.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Ps(e) {
		var t = Qo().memoizedState;
		return Ns({
			ref: t,
			nextImpl: e
		}), function() {
			if (Ju & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Fs(e, t) {
		return As(4, 2, e, t);
	}
	function Is(e, t) {
		return As(4, 4, e, t);
	}
	function Ls(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Rs(e, t, n) {
		n = n == null ? null : n.concat([e]), As(4, 4, Ls.bind(null, t, e), n);
	}
	function zs() {}
	function Bs(e, t) {
		var n = Qo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Uo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Vs(e, t) {
		var n = Qo();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Uo(t, r[1])) return r[0];
		if (r = e(), Lo) {
			We(!0);
			try {
				e();
			} finally {
				We(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Hs(e, t, n) {
		return n === void 0 || Mo & 1073741824 && !(Xu & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Ad(), Z.lanes |= e, id |= e, n);
	}
	function Us(e, t, n, r) {
		return Pr(n, t) ? n : vo.current === null ? !(Mo & 106) || Mo & 1073741824 && !(Xu & 261930) ? (Tc = !0, e.memoizedState = n) : (e = Ad(), Z.lanes |= e, id |= e, t) : (e = Hs(e, n, r), Pr(e, t) || (Tc = !0), e);
	}
	function Ws(e, t, n, r, i) {
		var a = le.p;
		le.p = a !== 0 && 8 > a ? a : 8;
		var o = H.T, s = {};
		s.types = o === null ? null : o.types, H.T = s, nc(e, !1, t, n);
		try {
			var c = i(), l = H.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? tc(e, t, Ia(c, r), kd(e)) : tc(e, t, r, kd(e));
		} catch (n) {
			tc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, kd());
		} finally {
			le.p = a, o !== null && s.types !== null && (o.types = s.types), H.T = o;
		}
	}
	function Gs() {}
	function Ks(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = qs(e).queue;
		Ws(e, a, t, ue, n === null ? Gs : function() {
			return Js(e), n(r);
		});
	}
	function qs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ue,
			baseState: ue,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: rs,
				lastRenderedState: ue
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: rs,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Js(e) {
		var t = qs(e);
		t.next === null && (t = e.alternate.memoizedState), tc(e, t.next.queue, {}, kd());
	}
	function Ys() {
		return va(sh);
	}
	function Xs() {
		return Qo().memoizedState;
	}
	function Zs() {
		return Qo().memoizedState;
	}
	function Qs(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = kd();
					e = co(n);
					var r = lo(t, e, n);
					r !== null && (Md(r, t, n), uo(r, t, n)), t = { cache: Ta() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function $s(e, t, n) {
		var r = kd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, rc(e) ? ic(t, n) : (n = yi(e, t, n, r), n !== null && (Md(n, e, r), ac(n, t, r)));
	}
	function ec(e, t, n) {
		tc(e, t, n, kd());
	}
	function tc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (rc(e)) ic(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Pr(s, o)) return vi(e, t, i, 0), Yu === null && _i(), !1;
			} catch {}
			if (n = yi(e, t, i, r), n !== null) return Md(n, e, r), ac(n, t, r), !0;
		}
		return !1;
	}
	function nc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Mf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, rc(e)) {
			if (t) throw Error(i(479));
		} else t = yi(e, n, r, 2), t !== null && Md(t, e, 2);
	}
	function rc(e) {
		var t = e.alternate;
		return e === Z || t !== null && t === Z;
	}
	function ic(e, t) {
		Io = Fo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function ac(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, st(e, n);
		}
	}
	var oc = {
		readContext: va,
		use: ts,
		useCallback: Ho,
		useContext: Ho,
		useEffect: Ho,
		useImperativeHandle: Ho,
		useLayoutEffect: Ho,
		useInsertionEffect: Ho,
		useMemo: Ho,
		useReducer: Ho,
		useRef: Ho,
		useState: Ho,
		useDebugValue: Ho,
		useDeferredValue: Ho,
		useTransition: Ho,
		useSyncExternalStore: Ho,
		useId: Ho,
		useHostTransitionStatus: Ho,
		useFormState: Ho,
		useActionState: Ho,
		useOptimistic: Ho,
		useMemoCache: Ho,
		useCacheRefresh: Ho,
		useEffectEvent: Ho
	}, sc = {
		readContext: va,
		use: ts,
		useCallback: function(e, t) {
			return Zo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: va,
		useEffect: js,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), ks(4194308, 4, Ls.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return ks(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			ks(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Zo();
			t = t === void 0 ? null : t;
			var r = e();
			if (Lo) {
				We(!0);
				try {
					e();
				} finally {
					We(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Zo();
			if (n !== void 0) {
				var i = n(t);
				if (Lo) {
					We(!0);
					try {
						n(t);
					} finally {
						We(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = $s.bind(null, Z, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Zo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = ps(e);
			var t = e.queue, n = ec.bind(null, Z, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: zs,
		useDeferredValue: function(e, t) {
			return Hs(Zo(), e, t);
		},
		useTransition: function() {
			var e = ps(!1);
			return e = Ws.bind(null, Z, e.queue, !0, !1), Zo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = Z, a = Zo();
			if (q) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Yu === null) throw Error(i(349));
				Xu & 127 || cs(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, js(us.bind(null, r, o, e), [e]), r.flags |= 2048, Ds(9, { destroy: void 0 }, ls.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = Zo(), t = Yu.identifierPrefix;
			if (q) {
				var n = Wi, r = Ui;
				n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ro++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Vo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Ys,
		useFormState: Ss,
		useActionState: Ss,
		useOptimistic: function(e) {
			var t = Zo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = nc.bind(null, Z, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: ns,
		useCacheRefresh: function() {
			return Zo().memoizedState = Qs.bind(null, Z);
		},
		useEffectEvent: function(e) {
			var t = Zo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Ju & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, cc = {
		readContext: va,
		use: ts,
		useCallback: Bs,
		useContext: va,
		useEffect: Ms,
		useImperativeHandle: Rs,
		useInsertionEffect: Fs,
		useLayoutEffect: Is,
		useMemo: Vs,
		useReducer: is,
		useRef: Os,
		useState: function() {
			return is(rs);
		},
		useDebugValue: zs,
		useDeferredValue: function(e, t) {
			return Us(Qo(), No.memoizedState, e, t);
		},
		useTransition: function() {
			var e = is(rs)[0], t = Qo().memoizedState;
			return [typeof e == "boolean" ? e : es(e), t];
		},
		useSyncExternalStore: ss,
		useId: Xs,
		useHostTransitionStatus: Ys,
		useFormState: Cs,
		useActionState: Cs,
		useOptimistic: function(e, t) {
			return ms(Qo(), No, e, t);
		},
		useMemoCache: ns,
		useCacheRefresh: Zs,
		useEffectEvent: Ps
	}, lc = {
		readContext: va,
		use: ts,
		useCallback: Bs,
		useContext: va,
		useEffect: Ms,
		useImperativeHandle: Rs,
		useInsertionEffect: Fs,
		useLayoutEffect: Is,
		useMemo: Vs,
		useReducer: os,
		useRef: Os,
		useState: function() {
			return os(rs);
		},
		useDebugValue: zs,
		useDeferredValue: function(e, t) {
			var n = Qo();
			return No === null ? Hs(n, e, t) : Us(n, No.memoizedState, e, t);
		},
		useTransition: function() {
			var e = os(rs)[0], t = Qo().memoizedState;
			return [typeof e == "boolean" ? e : es(e), t];
		},
		useSyncExternalStore: ss,
		useId: Xs,
		useHostTransitionStatus: Ys,
		useFormState: Es,
		useActionState: Es,
		useOptimistic: function(e, t) {
			var n = Qo();
			return No === null ? (n.baseState = e, [e, n.queue.dispatch]) : ms(n, No, e, t);
		},
		useMemoCache: ns,
		useCacheRefresh: Zs,
		useEffectEvent: Ps
	};
	function uc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var dc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = co(r);
			i.payload = t, n != null && (i.callback = n), t = lo(e, i, r), t !== null && (Md(t, e, r), uo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = co(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = lo(e, i, r), t !== null && (Md(t, e, r), uo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = kd(), r = co(n);
			r.tag = 2, t != null && (r.callback = t), t = lo(e, r, n), t !== null && (Md(t, e, n), uo(t, e, n));
		}
	};
	function fc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, a) : !0;
	}
	function pc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dc.enqueueReplaceState(t, t.state, null);
	}
	function mc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = D({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function hc(e) {
		pi(e);
	}
	function gc(e) {
		console.error(e);
	}
	function _c(e) {
		pi(e);
	}
	function vc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function yc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function bc(e, t, n) {
		return n = co(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			vc(e, t);
		}, n;
	}
	function xc(e) {
		return e = co(e), e.tag = 3, e;
	}
	function Sc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				yc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			yc(t, n, r), typeof i != "function" && (gd === null ? gd = /* @__PURE__ */ new Set([this]) : gd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Cc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ha(t, n, a, !0), n = So.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Co === null ? Wd() : n.alternate === null && rd === 0 && (rd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), pf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), pf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return pf(e, r, a), Wd(), !1;
		}
		if (q) return t = So.current, t === null ? (r !== ea && (t = Error(i(423), { cause: r }), sa(Fi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Fi(r, n), a = bc(e.stateNode, r, a), fo(e, a), rd !== 4 && (rd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ea && (e = Error(i(422), { cause: r }), sa(Fi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Fi(o, n), ld === null ? ld = [o] : ld.push(o), rd !== 4 && (rd = 2), t === null) return !0;
		r = Fi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = bc(n.stateNode, r, e), fo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (gd === null || !gd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = xc(a), Sc(a, e, n, r), fo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var wc = Error(i(461)), Tc = !1;
	function Ec(e, t, n, r) {
		t.child = e === null ? ao(t, null, n, r) : io(t, e.child, n, r);
	}
	function Dc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return _a(t), r = Wo(e, t, n, o, a, i), s = Jo(), e !== null && !Tc ? (Yo(e, t, i), tl(e, t, i)) : (q && s && qi(t), t.flags |= 1, Ec(e, t, r, i), t.child);
	}
	function Oc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ei(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, kc(e, t, a, r, i)) : (e = ki(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !nl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Fr : n, n(o, r) && e.ref === t.ref) return tl(e, t, i);
		}
		return t.flags |= 1, e = Di(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function kc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Fr(a, r) && e.ref === t.ref) {
				if (Tc = !1, t.pendingProps = r = a, nl(e, i)) e.flags & 131072 && (Tc = !0);
				else return t.lanes = e.lanes, tl(e, t, i);
			}
		}
		return Lc(e, t, n, r, i);
	}
	function Ac(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Mc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ba(t, a === null ? null : a.cachePool), a === null ? bo() : yo(t, a), X(t);
			else return r = t.lanes = 536870912, Mc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ba(t, null), bo(), Eo()) : (Ba(t, a.cachePool), yo(t, a), Eo(), t.memoizedState = null);
		return Ec(e, t, i, n), t.child;
	}
	function jc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Mc(e, t, n, r, i) {
		var a = za();
		return a = a === null ? null : {
			parent: wa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ba(t, null), bo(), X(t), e !== null && ha(e, t, r, !0), t.childLanes = i, null;
	}
	function Nc(e, t) {
		return t = Kc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Pc(e, t, n) {
		return io(t, e.child, null, n), e = Nc(t, t.pendingProps), e.flags |= 2, Do(t), t.memoizedState = null, e;
	}
	function Fc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (q) {
				if (r.mode === "hidden") return e = Nc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, jc(null, e);
				if (To(t), (e = Zi) ? (e = am(e, $i), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Hi === null ? null : {
						id: Ui,
						overflow: Wi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Mi(e), n.return = t, t.child = n, Xi = t, Zi = null)) : e = null, e === null) throw ta(t);
				return t.lanes = 536870912, null;
			}
			return Nc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (To(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Pc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Tc || ha(e, t, n, !1), a = (n & e.childLanes) !== 0, Tc || a) {
				if (vo.current === null) {
					if (r = Yu, r !== null && (s = ct(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, bi(e, s), Md(r, e, s), wc;
					Wd();
				}
				t = Pc(e, t, n);
			} else e = o.treeContext, Zi = lm(s.nextSibling), Xi = t, q = !0, Qi = null, $i = !1, e !== null && Yi(t, e), t = Nc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Di(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Ic(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Lc(e, t, n, r, i) {
		return _a(t), n = Wo(e, t, n, r, void 0, i), r = Jo(), e !== null && !Tc ? (Yo(e, t, i), tl(e, t, i)) : (q && r && qi(t), t.flags |= 1, Ec(e, t, n, i), t.child);
	}
	function Rc(e, t, n, r, i, a) {
		return _a(t), t.updateQueue = null, n = Ko(t, r, n, i), Go(e), r = Jo(), e !== null && !Tc ? (Yo(e, t, a), tl(e, t, a)) : (q && r && qi(t), t.flags |= 1, Ec(e, t, n, a), t.child);
	}
	function zc(e, t, n, r, i) {
		if (_a(t), t.stateNode === null) {
			var a = Ci, o = n.contextType;
			typeof o == "object" && o && (a = va(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = dc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, J(t), o = n.contextType, a.context = typeof o == "object" && o ? va(o) : Ci, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (uc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && dc.enqueueReplaceState(a, a.state, null), ho(t, r, a, i), mo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = mc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ci, typeof u == "object" && u && (o = va(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && pc(t, a, r, o), oo = !1;
			var f = t.memoizedState;
			a.state = f, ho(t, r, a, i), mo(), l = t.memoizedState, s || f !== l || oo ? (typeof d == "function" && (uc(t, n, d, r), l = t.memoizedState), (c = oo || fc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, so(e, t), o = t.memoizedProps, u = mc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ci, typeof l == "object" && l && (c = va(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && pc(t, a, r, c), oo = !1, f = t.memoizedState, a.state = f, ho(t, r, a, i), mo();
			var p = t.memoizedState;
			o !== d || f !== p || oo || e !== null && e.dependencies !== null && ga(e.dependencies) ? (typeof s == "function" && (uc(t, n, s, r), p = t.memoizedState), (u = oo || fc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ga(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Ic(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = io(t, e.child, null, i), t.child = io(t, null, n, i)) : Ec(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = tl(e, t, i), e;
	}
	function Bc(e, t, n, r) {
		return aa(), t.flags |= 256, Ec(e, t, n, r), t.child;
	}
	var Vc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Hc(e) {
		return {
			baseLanes: e,
			cachePool: Va()
		};
	}
	function Uc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= sd), e;
	}
	function Wc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Oo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (q) {
				if (i ? wo(t) : Eo(), (e = Zi) ? (e = am(e, $i), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Hi === null ? null : {
						id: Ui,
						overflow: Wi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Mi(e), n.return = t, t.child = n, Xi = t, Zi = null)) : e = null, e === null) throw ta(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Eo(), i = t.mode, a = Kc({
				mode: "hidden",
				children: a
			}, i), r = Ai(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Hc(n), r.childLanes = Uc(e, o, n), t.memoizedState = Vc, jc(null, r)) : (wo(t), Gc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return Jc(e, t, a, o, r, c, s, n);
		}
		return i ? (Eo(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Di(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ai(i, a, n, null), i.flags |= 2) : i = Di(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, jc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Hc(n) : (a = i.cachePool, a === null ? a = Va() : (s = wa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Uc(e, o, n), t.memoizedState = Vc, jc(e.child, r)) : (wo(t), n = e.child, e = n.sibling, n = Di(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Gc(e, t) {
		return t = Kc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Kc(e, t) {
		return e = Ti(22, e, null, t), e.lanes = 0, e;
	}
	function qc(e, t, n) {
		return io(t, e.child, null, n), e = Gc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Jc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (wo(t), t.flags &= -257, qc(e, t, c)) : t.memoizedState === null ? (Eo(), o = a.fallback, s = t.mode, a = Kc({
			mode: "visible",
			children: a.children
		}, s), o = Ai(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, io(t, e.child, null, c), a = t.child, a.memoizedState = Hc(c), a.childLanes = Uc(e, r, c), t.memoizedState = Vc, jc(null, a)) : (Eo(), t.child = e.child, t.flags |= 128, null);
		if (wo(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, sa({
				value: a,
				source: null,
				stack: null
			})), qc(e, t, c);
		}
		if (Tc || ha(e, t, c, !1), r = (c & e.childLanes) !== 0, Tc || r) {
			if (vo.current !== null) return qc(e, t, c);
			if (r = Yu, r !== null && (a = ct(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, bi(e, a), Md(r, e, a), wc;
			return om(o) || Wd(), qc(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Zi = lm(o.nextSibling), Xi = t, q = !0, Qi = null, $i = !1, e !== null && Yi(t, e), t = Gc(t, a.children), t.flags |= 134221824, t);
	}
	function Yc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), pa(e.return, t, n);
	}
	function Xc(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && jo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function Zc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Qc(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function $c(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Oo.current;
		if (t.flags & 128) return ko(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, ko(t, o), i === "backwards" && e !== null ? (Qc(e), Ec(e, t, r, n), Qc(e)) : Ec(e, t, r, n), r = q ? zi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Yc(e, n, t);
			else if (e.tag === 19) Yc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = Xc(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, Qc(t)), Zc(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && jo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Zc(t, !0, n, null, a, r);
				break;
			case "together":
				Zc(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = Xc(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Zc(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function el(e, t, n) {
		var r = t.pendingProps;
		return da(t, t.type, r.value), Ec(e, t, r.children, n), t.child;
	}
	function tl(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), id |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ha(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Di(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Di(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function nl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ga(e)));
	}
	function rl(e, t, n) {
		switch (t.tag) {
			case 3:
				_e(t, t.stateNode.containerInfo), da(t, wa, e.memoizedState.cache), aa();
				break;
			case 27:
			case 5:
				ye(t);
				break;
			case 4:
				_e(t, t.stateNode.containerInfo);
				break;
			case 10:
				da(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, To(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return wo(t), t.flags |= 128, null;
					r = ha(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Wc(e, t, n) : (wo(t), e = tl(e, t, n), e === null ? null : e.sibling);
				}
				wo(t);
				break;
			case 19:
				if (t.flags & 128) return $c(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ha(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return $c(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ko(t, Oo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Ac(e, t, n, t.pendingProps);
			case 24: da(t, wa, e.memoizedState.cache);
		}
		return tl(e, t, n);
	}
	function il(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Tc = !0;
			else {
				if (!nl(e, n) && !(t.flags & 128)) return Tc = !1, rl(e, t, n);
				Tc = !!(e.flags & 131072);
			}
		} else Tc = !1, q && t.flags & 1048576 && Ki(t, zi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ja(t.elementType), t.type = e, typeof e == "function") Ei(e) ? (r = mc(e, r), t.tag = 1, t = zc(null, t, e, r, n)) : (t.tag = 0, t = Lc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === I) {
								t.tag = 11, t = Dc(null, t, e, r, n);
								break a;
							}
							if (a === R) {
								t.tag = 14, t = Oc(null, t, e, r, n);
								break a;
							}
							if (a === F) {
								t.tag = 10, t.type = e, t = el(null, t, n);
								break a;
							}
						}
						throw t = se(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Lc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = mc(r, t.pendingProps), zc(e, t, r, a, n);
			case 3:
				a: {
					if (_e(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, so(e, t), ho(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, da(t, wa, r), r !== o.cache && ma(t, [wa], n, !0), mo(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Bc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Fi(Error(i(424)), t), sa(a), t = Bc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (Zi = lm(e.firstChild), Xi = t, q = !0, Qi = null, $i = !0, n = ao(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (aa(), r === a) {
							t = tl(e, t, n);
							break a;
						}
						Ec(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Ic(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : q || (t.stateNode = fp(t.type, t.pendingProps, G.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return ye(t), e === null && q && (r = t.stateNode = hm(t.type, t.pendingProps, G.current), Xi = t, $i = !0, a = Zi, Sp(t.type) ? (um = a, Zi = lm(r.firstChild)) : Zi = a), Ec(e, t, t.pendingProps.children, n), Ic(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && q && ((a = r = Zi) && (r = rm(r, t.type, t.pendingProps, $i), r === null ? a = !1 : (t.stateNode = r, Xi = t, Zi = lm(r.firstChild), $i = !1, a = !0)), a || ta(t)), ye(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Wo(e, t, qo, null, null, n), sh._currentValue = a), Ic(e, t), Ec(e, t, r, n), t.child;
			case 6: return e === null && q && ((e = n = Zi) && (n = im(n, t.pendingProps, $i), n === null ? e = !1 : (t.stateNode = n, Xi = t, Zi = null, e = !0)), e || ta(t)), null;
			case 13: return Wc(e, t, n);
			case 4: return _e(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = io(t, null, r, n) : Ec(e, t, r, n), t.child;
			case 11: return Dc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Ic(e, t), Ec(e, t, r, n), t.child;
			case 8: return Ec(e, t, t.pendingProps.children, n), t.child;
			case 12: return Ec(e, t, t.pendingProps.children, n), t.child;
			case 10: return el(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, _a(t), a = va(a), r = r(a), t.flags |= 1, Ec(e, t, r, n), t.child;
			case 14: return Oc(e, t, t.type, t.pendingProps, n);
			case 15: return kc(e, t, t.type, t.pendingProps, n);
			case 19: return $c(e, t, n);
			case 31: return Fc(e, t, n);
			case 22: return Ac(e, t, n, t.pendingProps);
			case 24: return _a(t), r = va(wa), e === null ? (a = za(), a === null && (a = Yu, o = Ta(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, J(t), da(t, wa, a)) : ((e.lanes & n) !== 0 && (so(e, t), ho(t, null, null, n), mo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, da(t, wa, r), r !== a.cache && ma(t, [wa], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), da(t, wa, r))), Ec(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : q && qi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Ic(e, t), Ec(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function al(e) {
		e.flags |= 4;
	}
	function ol(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Vd()) e.flags |= 8192;
				else throw Ya = Ga, Ua;
			}
		} else e.flags &= -16777217;
	}
	function sl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Vd()) e.flags |= 8192;
			else throw Ya = Ga, Ua;
		}
	}
	function cl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : rt(), e.lanes |= t, cd |= t);
	}
	function ll(e, t) {
		if (!q) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function ul(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function dl(e, t, n) {
		var r = t.pendingProps;
		switch (Ji(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return ul(t), null;
			case 1: return ul(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), fa(wa), ve(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ia(t) ? al(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, oa())), ul(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (al(t), o === null ? (ul(t), ol(t, a, null, r, n)) : (ul(t), sl(t, o))) : o ? o === e.memoizedState ? (ul(t), t.flags &= -16777217) : (al(t), ul(t), sl(t, o)) : (e = e.memoizedProps, e !== r && al(t), ul(t), ol(t, a, e, r, n)), null;
			case 27:
				if (be(t), n = G.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && al(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return ul(t), t.subtreeFlags &= -33554433, null;
					}
					e = me.current, ia(t) ? na(t, e) : (e = hm(a, r, n), t.stateNode = e, al(t));
				}
				return ul(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (be(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && al(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return ul(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = me.current, ia(t)) na(t, o);
					else {
						var s = lp(G.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[mt] = t, o[ht] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && al(t);
					}
				}
				return ul(t), t.subtreeFlags &= -33554433, ol(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && al(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = G.current, ia(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Xi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[mt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || $f(e.nodeValue, n)), e || ta(t, !0);
					} else e = lp(e).createTextNode(r), e[mt] = t, t.stateNode = e;
				}
				return ul(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ia(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[mt] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						ul(t), e = !1;
					} else n = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Do(t), t) : (Do(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return ul(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = ia(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[mt] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						ul(t), a = !1;
					} else a = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Do(t), t) : (Do(t), null);
				}
				return Do(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), cl(t, t.updateQueue), ul(t), null);
			case 4: return ve(), e === null && Uf(t.stateNode.containerInfo), t.flags |= 67108864, ul(t), null;
			case 10: return fa(t.type), ul(t), null;
			case 19:
				if (Ao(t), r = t.memoizedState, r === null) return ul(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) ll(r, !1);
					else {
						if (rd !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = jo(e), o !== null) {
								for (t.flags |= 128, ll(r, !1), e = o.updateQueue, t.updateQueue = e, cl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Oi(n, e), n = n.sibling;
								return ko(t, Oo.current & 1 | 2), q && Gi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ne() > md && (t.flags |= 128, a = !0, ll(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = jo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, cl(t, e), ll(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !q) return ul(t), null;
						} else 2 * Ne() - r.renderingStartTime > md && n !== 536870912 && (t.flags |= 128, a = !0, ll(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ne(), e.sibling = null, o = Oo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || q ? ko(t, o) : (n = o, W(So, t), W(Oo, n), Co === null && (Co = t)), q && Gi(t, r.treeForkCount), e;
				}
				return ul(t), null;
			case 22:
			case 23: return Do(t), xo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (ul(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ul(t), n = t.updateQueue, n !== null && cl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && pe(Ra), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), fa(wa), ul(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, ul(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function fl(e, t) {
		switch (Ji(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return fa(wa), ve(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return be(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Do(t), t.alternate === null) throw Error(i(340));
					aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Do(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Ao(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return ve(), null;
			case 10: return fa(t.type), null;
			case 22:
			case 23: return Do(t), xo(), e !== null && pe(Ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return fa(wa), null;
			case 25: return null;
			default: return null;
		}
	}
	function pl(e, t) {
		switch (Ji(t), t.tag) {
			case 3:
				fa(wa), ve();
				break;
			case 26:
			case 27:
			case 5:
				be(t);
				break;
			case 4:
				ve();
				break;
			case 31:
				t.memoizedState !== null && Do(t);
				break;
			case 13:
				Do(t);
				break;
			case 19:
				Ao(t);
				break;
			case 10:
				fa(t.type);
				break;
			case 22:
			case 23:
				Do(t), xo(), e !== null && pe(Ra);
				break;
			case 24: fa(wa);
		}
	}
	function ml(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function hl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								ff(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function gl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				_o(t, n);
			} catch (t) {
				ff(e, e.return, t);
			}
		}
	}
	function _l(e, t, n) {
		n.props = mc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			ff(e, t, n);
		}
	}
	function vl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = ui(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							h(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			ff(e, t, n);
		}
	}
	function yl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				ff(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				ff(e, t, n);
			}
			else n.current = null;
		}
	}
	function bl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function xl(e) {
		for (var t = e.return; t !== null && (wl(t) && em(e.stateNode, t.stateNode), !Cl(t));) t = t.return;
	}
	function Sl(e) {
		for (var t = e.return; t !== null && (wl(t) && tm(e.stateNode, t.stateNode), !Cl(t));) t = t.return;
	}
	function Cl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function wl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Tl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	function El(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[ht] = t;
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	function Dl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Ol(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Dl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function kl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = dn)), bl(e, r), Rt = !0;
		else if (i !== 4 && (i === 27 && (bl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (kl(e, t, n, r), e = e.sibling; e !== null;) kl(e, t, n, r), e = e.sibling;
	}
	function Al(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), bl(e, r), Rt = !0;
		else if (i !== 4 && (i === 27 && (bl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Al(e, t, n, r), e = e.sibling; e !== null;) Al(e, t, n, r), e = e.sibling;
	}
	function jl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[mt] = e, t[ht] = n;
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	var Ml = !1, Nl = null;
	function Pl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Ml = !0);
	}
	var Fl = null;
	function Il() {
		var e = Fl;
		return Fl = null, e;
	}
	var Ll = 0;
	function Rl(e, t, n, r, i) {
		return Ll = 0, zl(e.child, t, n, r, i);
	}
	function zl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				Ml = !0, Tp(o, Ll === 0 ? t : t + "_" + Ll, n), Ll++;
			} else e.tag === 22 && e.memoizedState !== null || e.tag === 30 && i || zl(e.child, t, n, r, i) && (a = !0);
			e = e.sibling;
		}
		return a;
	}
	function Bl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : e.tag === 22 && e.memoizedState !== null || e.tag === 30 && t || Bl(e.child, t), e = e.sibling;
	}
	function Vl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Vl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = fi(t.default, t.share), t !== "none" && (Rl(e, n, t, null, !1) || Bl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Hl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = ui(r, n), a = fi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Vl(e) : Rl(e, i, a, null, !1) ? (Vl(e), n.paired || t || jd(e, r.onEnter)) : Bl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Hl(e, t), e = e.sibling;
		else Vl(e);
	}
	function Ul(e) {
		if (Nl !== null && Nl.size !== 0) {
			var t = Nl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = fi(n.default, n.share);
								if (a !== "none" && (Rl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, jd(e, n.onShare)) : Bl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Ul(e);
				}
				e = e.sibling;
			}
		}
	}
	function Wl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = ui(t, e.stateNode), r = Nl === null ? void 0 : Nl.get(n), i = fi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Rl(e, n, i, null, !1) ? r === void 0 ? jd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Nl.delete(n), jd(e, t.onShare)) : Bl(e.child, !1)), Nl !== null && Ul(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Wl(e), e = e.sibling;
		else Nl !== null && Ul(e);
	}
	function Gl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = ui(t, e.stateNode);
				t = fi(t.default, t.update), e.flags &= -5, t !== "none" && Rl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Gl(e);
			e = e.sibling;
		}
	}
	function Kl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Bl(e.child, !1));
				}
				Kl(e);
			}
			e = e.sibling;
		}
	}
	function ql(e) {
		if (e.tag === 30) e.stateNode.paired = null, Bl(e.child, !1), Kl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ql(e), e = e.sibling;
		else Kl(e);
	}
	function Jl(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Bl(e.child, !1) : e.subtreeFlags & 33554432 && Jl(e), e = e.sibling;
	}
	function Yl(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Ll < a.length) {
					var l = a[Ll], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Ll === 0 ? n : n + "_" + Ll, i), s && e.flags & 4 || (Fl === null && (Fl = []), Fl.push(c, Ll === 0 ? r : r + "_" + Ll, t.memoizedProps)), Ll++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : Yl(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function Xl(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = ui(n, r), a = fi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Ll = 0, i = Yl(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || jd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && Xl(e, t);
			e = e.sibling;
		}
	}
	var Zl = !1, Ql = !1, $l = !1, eu = !1, tu = typeof WeakSet == "function" ? WeakSet : Set, nu = null, ru = !1, iu = !1, au = !1, ou = !1;
	function su(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Br(e), Vr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, nu = t, t = n ? 9270 : 1024; nu !== null;) {
			if (e = nu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Wl(r[a]);
			if (e.alternate === null && e.flags & 2) n && Pl(e), cu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Wl(r), cu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Pl(e), cu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, nu = r) : (n && Gl(e), cu(n));
			}
		}
		Nl = null;
	}
	function cu(e) {
		for (; nu !== null;) {
			var t = nu, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = mc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							ff(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = ui(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = fi(a.default, a.update), a !== "none" && Rl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, nu = r;
				break;
			}
			nu = t.return;
		}
	}
	function lu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				ku(e, n), r & 4 && ml(5, n);
				break;
			case 1:
				if (ku(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						ff(n, n.return, e);
					}
					else {
						var i = mc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							ff(n, n.return, e);
						}
					}
				}
				r & 64 && gl(n), r & 512 && vl(n, n.return);
				break;
			case 3:
				if (ku(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						_o(e, t);
					} catch (e) {
						ff(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && jl(n);
			case 26:
			case 5:
				ku(e, n), t === null && r & 4 && Tl(n), r & 512 && vl(n, n.return);
				break;
			case 12:
				ku(e, n);
				break;
			case 31:
				ku(e, n), r & 4 && vu(e, n);
				break;
			case 13:
				ku(e, n), r & 4 && yu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = gf.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || Zl, !r) {
					var a = t !== null && t.memoizedState !== null || Ql;
					t = Zl, i = Ql, Zl = r, (Ql = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), ju(e, n, r)) : ku(e, n), Zl = t, Ql = i;
				}
				break;
			case 30:
				ku(e, n), r & 512 && vl(n, n.return);
				break;
			case 7: r & 512 && vl(n, n.return);
			default: ku(e, n);
		}
	}
	function uu(e, t) {
		for (e = e.child; e !== null;) du(e, t), e = e.sibling;
	}
	function du(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					ff(e, e.return, t);
				}
				fu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, Rt = !0;
				} catch (t) {
					ff(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					ff(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && uu(e, t);
				break;
			default: uu(e, t);
		}
	}
	function fu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						du(n, r);
						break a;
					case 22:
						n.memoizedState === null && fu(n, r);
						break a;
					default: fu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function pu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, pu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ct(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var mu = null, hu = !1;
	function gu(e, t, n) {
		for (n = n.child; n !== null;) _u(e, t, n), n = n.sibling;
	}
	function _u(e, t, n) {
		if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
			Ue.onCommitFiberUnmount(He, n);
		} catch {}
		switch (n.tag) {
			case 26:
				Ql || yl(n, t), gu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Ql && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Ql || yl(n, t), Sl(n);
				var r = mu, i = hu;
				Sp(n.type) && (mu = n.stateNode, hu = !1), gu(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), mu = r, hu = i;
				break;
			case 5: Ql || yl(n, t), Sl(n);
			case 6:
				if (n.tag === 6 && Sl(n), r = mu, i = hu, mu = null, gu(e, t, n), mu = r, hu = i, mu !== null) {
					if (hu) try {
						(mu.nodeType === 9 ? mu.body : mu.nodeName === "HTML" ? mu.ownerDocument.body : mu).removeChild(n.stateNode), Rt = !0;
					} catch (e) {
						ff(n, t, e);
					}
					else try {
						mu.removeChild(n.stateNode), Rt = !0;
					} catch (e) {
						ff(n, t, e);
					}
				}
				break;
			case 18:
				mu !== null && (hu ? (e = mu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(mu, n.stateNode));
				break;
			case 4:
				r = mu, i = hu, mu = n.stateNode.containerInfo, hu = !0, gu(e, t, n), mu = r, hu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				hl(2, n, t), Ql || hl(4, n, t), gu(e, t, n);
				break;
			case 1:
				Ql || (yl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && _l(n, t, r)), gu(e, t, n);
				break;
			case 21:
				gu(e, t, n);
				break;
			case 22:
				Ql = (r = Ql) || n.memoizedState !== null, gu(e, t, n), Ql = r;
				break;
			case 30:
				yl(n, t), gu(e, t, n);
				break;
			case 7:
				Ql || yl(n, t), gu(e, t, n);
				break;
			default: gu(e, t, n);
		}
	}
	function vu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				ff(t, t.return, e);
			}
		}
	}
	function yu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function bu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new tu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new tu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function xu(e, t) {
		var n = bu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = _f.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Su(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							mu = l.stateNode, hu = !1;
							break a;
						}
						break;
					case 5:
						mu = l.stateNode, hu = !1;
						break a;
					case 3:
					case 4:
						mu = l.stateNode.containerInfo, hu = !0;
						break a;
				}
				l = l.return;
			}
			if (mu === null) throw Error(i(160));
			_u(s, c, o), mu = null, hu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) wu(t, e, n), t = t.sibling;
	}
	var Cu = null;
	function wu(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Su(t, e, n), Tu(e), a & 4 && (hl(3, e, e.return), ml(3, e), hl(5, e, e.return));
				break;
			case 1:
				Su(t, e, n), Tu(e), a & 512 && (Ql || r === null || yl(r, r.return)), a & 64 && Zl && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Cu, Su(t, e, n), Tu(e), a & 512 && (Ql || r === null || yl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (Zl) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[xt] || r[mt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[mt] = e, Ot(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[mt] = e, Ot(r), t = r;
									}
									e.stateNode = t;
								}
							} else Zl || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && El(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || Ql || t.parentNode.removeChild(t)) : a.count--, n === null ? Zl || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Su(t, e, n), Tu(e), a & 512 && (Ql || r === null || yl(r, r.return)), r !== null && a & 4 && El(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = $l, $l = !1, Su(t, e, n), $l = o, Tu(e), a & 512 && (Ql || r === null || yl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						nn(t, ""), Rt = !0;
					} catch (t) {
						ff(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, El(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (eu = !0);
				break;
			case 6:
				if (Su(t, e, n), Tu(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, Rt = !0;
					} catch (t) {
						ff(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Rt = !1, Wm = null, o = Cu, Cu = bm(t.containerInfo), Su(t, e, n), Cu = o, Tu(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					ff(e, e.return, t);
				}
				eu && (eu = !1, Eu(e)), Rt = !1;
				break;
			case 4:
				a = $l, $l = Zl, r = zt(), o = Cu, Cu = bm(e.stateNode.containerInfo), Su(t, e, n), Tu(e), Cu = o, Rt && iu && (au = !0), Rt = r, $l = a;
				break;
			case 12:
				Su(t, e, n), Tu(e);
				break;
			case 31:
				Su(t, e, n), Tu(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, xu(e, t)));
				break;
			case 13:
				Su(t, e, n), Tu(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (fd = Ne()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, xu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = Zl, l = Ql, u = $l;
				Zl = c || o, $l = u || o, Ql = l || s, Su(t, e, n), Ql = l, $l = u, Zl = c, Tu(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || Zl || Ql || (t = s || Ql, n = Zl, r = Ql, Zl = o || Zl, Ql = t, Au(e, 2), Zl = n, Ql = r), !o && $l || uu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, xu(e, n))));
				break;
			case 19:
				Su(t, e, n), Tu(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, xu(e, t)));
				break;
			case 30:
				a & 512 && (Ql || r === null || yl(r, r.return)), a = zt(), o = iu, s = (n & 335544064) === n, c = e.memoizedProps, iu = s && fi(c.default, c.update) !== "none", Su(t, e, n), Tu(e), s && r !== null && Rt && (e.flags |= 4), iu = o, Rt = a;
				break;
			case 21: break;
			case 7: a & 512 && (Ql || r === null || yl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Su(t, e, n), Tu(e);
		}
	}
	function Tu(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Dl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (wl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Cl(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Al(e, Ol(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (nn(l, ""), n.flags &= -33), Al(e, Ol(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						kl(e, Ol(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				ff(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Eu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Eu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Du(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Ou(t, e), t = t.sibling;
		else Xl(t, !1);
	}
	function Ou(e, t) {
		var n = e.alternate;
		if (n === null) Hl(e, !1);
		else switch (e.tag) {
			case 3:
				if (ou = ru = !1, Il(), Du(t, e), !ru && !au) {
					if (e = Fl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), ou = !0;
				}
				Fl = null;
				break;
			case 5:
				Du(t, e);
				break;
			case 4:
				r = ru, ru = !1, Du(t, e), ru && (au = !0), ru = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Du(t, e) : Hl(e, !1));
				break;
			case 30:
				r = ru, i = Il(), ru = !1, Du(t, e), ru && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = ui(a, o), o = ui(n.memoizedProps, o);
				var s = fi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Ll = 0, t = Yl(e, n, t, o, s, a, !0), Ll !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (jd(e, e.memoizedProps.onUpdate), Fl = i) : i !== null && (i.push.apply(i, Fl), Fl = i), ru = e.flags & 32 ? !0 : r;
				break;
			default: Du(t, e);
		}
	}
	function ku(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) lu(e, t.alternate, t), t = t.sibling;
	}
	function Au(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					hl(4, n, n.return), Au(n, r);
					break;
				case 1:
					yl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && _l(n, n.return, i), Au(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					yl(n, n.return), n.tag !== 5 && n.tag !== 27 || Sl(n), Au(n, r);
					break;
				case 6:
					Sl(n);
					break;
				case 26:
					yl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || Ql || i.parentNode.removeChild(i), Au(n, r);
					break;
				case 22:
					n.memoizedState === null && Au(n, r);
					break;
				case 30:
					yl(n, n.return), Au(n, r);
					break;
				case 7: yl(n, n.return);
				default: Au(n, r);
			}
			e = e.sibling;
		}
	}
	function ju(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					ju(i, a, n), ml(4, a);
					break;
				case 1:
					if (ju(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						ff(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) go(l[i], c);
						} catch (e) {
							ff(r, r.return, e);
						}
					}
					s && o & 64 && gl(a), vl(a, a.return);
					break;
				case 27: n & 2 && jl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || xl(a), ju(i, a, n), s && r === null && o & 4 && Tl(a), vl(a, a.return);
					break;
				case 6:
					xl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || Zl || Km(bm(c.ownerDocument), a.type, c), ju(i, a, n), s && r === null && o & 4 && Tl(a), vl(a, a.return);
					break;
				case 12:
					ju(i, a, n);
					break;
				case 31:
					ju(i, a, n), s && o & 4 && vu(i, a);
					break;
				case 13:
					ju(i, a, n), s && o & 4 && yu(i, a);
					break;
				case 22:
					a.memoizedState === null && ju(i, a, n), vl(a, a.return);
					break;
				case 30:
					ju(i, a, n), vl(a, a.return);
					break;
				case 7: vl(a, a.return);
				default: ju(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Mu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ea(n));
	}
	function Nu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ea(e));
	}
	function Pu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Fu(e, t, n, r), t = t.sibling;
		else i && Jl(t);
	}
	function Fu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && ql(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Pu(e, t, n, r), a & 2048 && ml(9, t);
				break;
			case 1:
				Pu(e, t, n, r);
				break;
			case 3:
				Pu(e, t, n, r), i && ou && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Ea(a)));
				break;
			case 12:
				if (a & 2048) {
					Pu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						ff(t, t.return, e);
					}
				} else Pu(e, t, n, r);
				break;
			case 31:
				Pu(e, t, n, r);
				break;
			case 13:
				Pu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && ql(t), o._visibility & 2 ? Pu(e, t, n, r) : (o._visibility |= 2, Iu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && ql(s), o._visibility & 2 ? Pu(e, t, n, r) : Lu(e, t)), a & 2048 && Mu(s, t);
				break;
			case 24:
				Pu(e, t, n, r), a & 2048 && Nu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Bl(a.child, !0), Bl(t.child, !0))), Pu(e, t, n, r);
				break;
			default: Pu(e, t, n, r);
		}
	}
	function Iu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Iu(a, o, s, c, i), ml(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Iu(a, o, s, c, i)) : u._visibility & 2 ? Iu(a, o, s, c, i) : Lu(a, o), i && l & 2048 && Mu(o.alternate, o);
					break;
				case 24:
					Iu(a, o, s, c, i), i && l & 2048 && Nu(o.alternate, o);
					break;
				default: Iu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Lu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Lu(n, r), i & 2048 && Mu(r.alternate, r);
					break;
				case 24:
					Lu(n, r), i & 2048 && Nu(r.alternate, r);
					break;
				default: Lu(n, r);
			}
			t = t.sibling;
		}
	}
	var Ru = 8192;
	function zu(e, t, n) {
		if (e.subtreeFlags & Ru) for (e = e.child; e !== null;) Bu(e, t, n), e = e.sibling;
	}
	function Bu(e, t, n) {
		switch (e.tag) {
			case 26:
				zu(e, t, n), e.flags & Ru && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Cu, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				zu(e, t, n), e.flags & Ru && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Cu;
				Cu = bm(e.stateNode.containerInfo), zu(e, t, n), Cu = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Ru, Ru = 16777216, zu(e, t, n), Ru = r) : zu(e, t, n));
				break;
			case 30:
				if ((e.flags & Ru) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Nl === null && (Nl = /* @__PURE__ */ new Map()), Nl.set(r, i);
				}
				zu(e, t, n);
				break;
			default: zu(e, t, n);
		}
	}
	function Vu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Hu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				nu = r, Gu(r, e);
			}
			Vu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Uu(e), e = e.sibling;
	}
	function Uu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Hu(e), e.flags & 2048 && hl(9, e, e.return);
				break;
			case 3:
				Hu(e);
				break;
			case 12:
				Hu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Wu(e)) : Hu(e);
				break;
			default: Hu(e);
		}
	}
	function Wu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				nu = r, Gu(r, e);
			}
			Vu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					hl(8, t, t.return), Wu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Wu(t));
					break;
				default: Wu(t);
			}
			e = e.sibling;
		}
	}
	function Gu(e, t) {
		for (; nu !== null;) {
			var n = nu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					hl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Ea(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, nu = r;
			else a: for (n = e; nu !== null;) {
				r = nu;
				var i = r.sibling, a = r.return;
				if (pu(r), r === n) {
					nu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, nu = i;
					break a;
				}
				nu = a;
			}
		}
	}
	var Ku = {
		getCacheForType: function(e) {
			var t = va(wa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return va(wa).controller.signal;
		}
	}, qu = typeof WeakMap == "function" ? WeakMap : Map, Ju = 0, Yu = null, Q = null, Xu = 0, Zu = 0, Qu = null, $u = !1, ed = !1, td = !1, nd = 0, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = null, ud = null, dd = !1, fd = 0, pd = 0, md = Infinity, hd = null, gd = null, _d = 0, vd = null, yd = null, bd = 0, xd = 0, Sd = null, Cd = null, wd = null, Td = null, Ed = null, Dd = 0, Od = null;
	function kd() {
		return Ju & 2 && Xu !== 0 ? Xu & -Xu : H.T === null ? dt() : Mf();
	}
	function Ad() {
		if (sd === 0) {
			if (!(Xu & 536870912) || q) {
				var e = Xe;
				Xe <<= 1, !(Xe & 3932160) && (Xe = 262144), sd = e;
			} else sd = 536870912;
		}
		return e = So.current, e !== null && (e.flags |= 32), sd;
	}
	function jd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(ui(e.memoizedProps, n))), Td === null && (Td = []), Td.push(t.bind(null, r));
		}
	}
	function Md(e, t, n) {
		(e === Yu && (Zu === 2 || Zu === 9) || e.cancelPendingCommit !== null) && (zd(e, 0), Id(e, Xu, sd, !1)), it(e, n), Ju & 2 && e === Yu || (e === Yu && (!(Ju & 2) && (ad |= n), rd === 4 && Id(e, Xu, sd, !1)), Tf(e));
	}
	function Nd(e, t, n) {
		if (Ju & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || et(e, t), a = r ? qd(e, t) : Gd(e, t, !0), o = r;
		do {
			if (a === 0) {
				ed && !r && Id(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Fd(n)) a = Gd(e, t, !1), o = !1;
			else {
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = ld;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (zd(c, s).flags |= 256), s = Gd(c, s, !1), s !== 2 && s !== 6) {
								if (td && !l) {
									c.errorRecoveryDisabledLanes |= o, ad |= o, a = 4;
									break a;
								}
								o = ud, ud = a, o !== null && (ud === null ? ud = o : ud.push.apply(ud, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					zd(e, 0), Id(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Id(r, t, sd, !$u);
							break a;
						case 2:
							ud = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = fd + 300 - Ne(), 10 < a)) {
						if (Id(r, t, sd, !$u), $e(r, 0, !0) !== 0) break a;
						bd = t, r.timeoutHandle = gp(Pd.bind(null, r, n, ud, hd, dd, t, sd, ad, cd, $u, o, "Throttled", -0, 0), a);
						break a;
					}
					Pd(r, n, ud, hd, dd, t, sd, ad, cd, $u, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		Tf(e);
	}
	function Pd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: dn
		}, Nl = null, Bu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? fd - Ne() : (a & 4194048) === a ? pd - Ne() : 0, m = eh(d, m), m !== null) ? (bd = a, e.cancelPendingCommit = m(ef.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Id(e, a, o, !l)) : ef(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Fd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Pr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Id(e, t, n, r) {
		t = tt(e, t), t &= ~od, t &= ~ad, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Ge(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ot(e, n, t);
	}
	function Ld() {
		return Ju & 6 ? !0 : ($(0, !1), !1);
	}
	function Rd() {
		if (Q !== null) {
			if (Zu === 0) var e = Q.return;
			else e = Q, ua = la = null, Xo(e), Qa = null, $a = 0, e = Q;
			for (; e !== null;) pl(e.alternate, e), e = e.return;
			Q = null;
		}
	}
	function zd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bd = 0, Rd(), Yu = e, Q = n = Di(e.current, null), Xu = t, Zu = 0, Qu = null, $u = !1, ed = et(e, t), td = !1, cd = sd = od = ad = id = rd = 0, ud = ld = null, dd = !1, nd = tt(e, t), _i(), n;
	}
	function Bd(e, t) {
		Z = null, H.H = oc, t === Ha || t === Wa ? (t = Xa(), Zu = 3) : t === Ua ? (t = Xa(), Zu = 4) : Zu = t === wc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Qu = t, Q === null && (rd = 1, vc(e, Fi(t, e.current)));
	}
	function Vd() {
		var e = So.current;
		return e === null ? !0 : (Xu & 4194048) === Xu ? Co === null : (Xu & 62914560) === Xu || Xu & 536870912 ? e === Co : !1;
	}
	function Hd() {
		var e = H.H;
		return H.H = oc, e === null ? oc : e;
	}
	function Ud() {
		var e = H.A;
		return H.A = Ku, e;
	}
	function Wd() {
		rd = 4, $u || (Xu & 4194048) !== Xu && So.current !== null || (ed = !0), !(id & 134217727) && !(ad & 134217727) || Yu === null || Id(Yu, Xu, sd, !1);
	}
	function Gd(e, t, n) {
		var r = Ju;
		Ju |= 2;
		var i = Hd(), a = Ud();
		(Yu !== e || Xu !== t) && (hd = null, zd(e, t)), t = !1;
		var o = rd;
		a: do
			try {
				if (Zu !== 0 && Q !== null) {
					var s = Q, c = Qu;
					switch (Zu) {
						case 8:
							Rd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							So.current === null && (t = !0);
							var l = Zu;
							if (Zu = 0, Qu = null, Zd(e, s, c, l), n && ed) {
								o = 0;
								break a;
							}
							break;
						default: l = Zu, Zu = 0, Qu = null, Zd(e, s, c, l);
					}
				}
				Kd(), o = rd;
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ua = la = null, Ju = r, H.H = i, H.A = a, Q === null && (Yu = null, Xu = 0, _i()), o;
	}
	function Kd() {
		for (; Q !== null;) Yd(Q);
	}
	function qd(e, t) {
		var n = Ju;
		Ju |= 2;
		var r = Hd(), a = Ud();
		Yu !== e || Xu !== t ? (hd = null, md = Ne() + 500, zd(e, t)) : ed = et(e, t);
		a: do
			try {
				if (Zu !== 0 && Q !== null) {
					t = Q;
					var o = Qu;
					b: switch (Zu) {
						case 1:
							Zu = 0, Qu = null, Zd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ka(o)) {
								Zu = 0, Qu = null, Xd(t);
								break;
							}
							t = function() {
								Zu !== 2 && Zu !== 9 || Yu !== e || (Zu = 7), Tf(e);
							}, o.then(t, t);
							break a;
						case 3:
							Zu = 7;
							break a;
						case 4:
							Zu = 5;
							break a;
						case 7:
							Ka(o) ? (Zu = 0, Qu = null, Xd(t)) : (Zu = 0, Qu = null, Zd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (Q.tag) {
								case 26: s = Q.memoizedState;
								case 5:
								case 27:
									var c = Q;
									if (s ? Ym(s) : c.stateNode.complete) {
										Zu = 0, Qu = null;
										var l = c.sibling;
										if (l !== null) Q = l;
										else {
											var u = c.return;
											u === null ? Q = null : (Q = u, Qd(u));
										}
										break b;
									}
							}
							Zu = 0, Qu = null, Zd(e, t, o, 5);
							break;
						case 6:
							Zu = 0, Qu = null, Zd(e, t, o, 6);
							break;
						case 8:
							Rd(), rd = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Jd();
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return ua = la = null, H.H = r, H.A = a, Ju = n, Q === null ? (Yu = null, Xu = 0, _i(), rd) : 0;
	}
	function Jd() {
		for (; Q !== null && !je();) Yd(Q);
	}
	function Yd(e) {
		var t = il(e.alternate, e, nd);
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : Q = t;
	}
	function Xd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Rc(n, t, t.pendingProps, t.type, void 0, Xu);
				break;
			case 11:
				t = Rc(n, t, t.pendingProps, t.type.render, t.ref, Xu);
				break;
			case 5:
				Xo(t);
				var r = t;
				r === Xi && (q ? (ra(r), r.tag === 5 && r.stateNode != null && (Zi = r.stateNode)) : (ra(r), q = !0));
			default: pl(n, t), t = Q = Oi(t, nd), t = il(n, t, nd);
		}
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : Q = t;
	}
	function Zd(e, t, n, r) {
		ua = la = null, Xo(t), Qa = null, $a = 0;
		var i = t.return;
		try {
			if (Cc(e, i, t, n, Xu)) {
				rd = 1, vc(e, Fi(n, e.current)), Q = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw Q = i, t;
			rd = 1, vc(e, Fi(n, e.current)), Q = null;
			return;
		}
		t.flags & 32768 ? (q || r === 1 ? e = !0 : ed || Xu & 536870912 ? e = !1 : ($u = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = So.current, r !== null && r.tag === 13 && (r.flags |= 16384))), $d(t, e)) : Qd(t);
	}
	function Qd(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				$d(t, $u);
				return;
			}
			e = t.return;
			var n = dl(t.alternate, t, nd);
			if (n !== null) {
				Q = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				Q = t;
				return;
			}
			Q = t = e;
		} while (t !== null);
		rd === 0 && (rd = 5);
	}
	function $d(e, t) {
		do {
			var n = fl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Q = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Q = e;
				return;
			}
			Q = e = n;
		} while (e !== null);
		rd = 6, Q = null;
	}
	function ef(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			lf();
		while (_d !== 0);
		if (Ju & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Yu && (Q = Yu = null, Xu = 0), yd = t, vd = e, bd = n, Sd = a, Cd = r, tf(e, t, n, s, c, l, f);
		}
	}
	function tf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (xd = s, s |= gi, at(e, n, s, r, i, a), Td = null, (n & 335544064) === n ? (Ed = ka(e), r = 10262) : (Ed = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vf(Le, function() {
			return uf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Ml = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = H.T, H.T = null, i = le.p, le.p = 2, a = Ju, Ju |= 4;
			try {
				su(e, t, n);
			} finally {
				Ju = a, le.p = i, H.T = r;
			}
		}
		_d = 1, Ml ? wd = Mp(o, e.containerInfo, Ed, af, of, rf, sf, uf, nf, null, null) : (af(), of(), sf());
	}
	function nf(e) {
		if (_d !== 0) {
			var t = vd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function rf() {
		_d === 3 && (_d = 0, Ou(yd, vd), _d = 4);
	}
	function af() {
		if (_d === 1) {
			_d = 0;
			var e = vd, t = yd, n = bd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = H.T, H.T = null;
				var i = le.p;
				le.p = 2;
				var a = Ju;
				Ju |= 4;
				try {
					iu = au = !1, wu(t, e, n), n = cp;
					var o = Br(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && zr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Vr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Rr(s, h), v = Rr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					Ju = a, le.p = i, H.T = r;
				}
			}
			e.current = t, _d = 2;
		}
	}
	function of() {
		if (_d === 2) {
			_d = 0;
			var e = vd, t = yd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = H.T, H.T = null;
				var r = le.p;
				le.p = 2;
				var i = Ju;
				Ju |= 4;
				try {
					lu(e, t.alternate, t);
				} finally {
					Ju = i, le.p = r, H.T = n;
				}
			}
			_d = 3;
		}
	}
	function sf() {
		if (_d === 4 || _d === 3) {
			_d = 0;
			var e = wd;
			wd = null, Me();
			var t = vd, n = yd, r = bd, i = Cd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? _d = 5 : (_d = 0, yd = vd = null, cf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (gd = null), ut(r), n = n.stateNode, Ue && typeof Ue.onCommitFiberRoot == "function") try {
				Ue.onCommitFiberRoot(He, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = H.T, a = le.p, le.p = 2, H.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					H.T = n, le.p = a;
				}
			}
			if (i = Td, o = Ed, Ed = null, i !== null && (Td = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			bd & 3 && lf(), Tf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Od ? Dd++ : (Dd = 0, Od = t) : (Dd = 0, Od = null), $(0, !1);
		}
	}
	function cf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ea(t)));
	}
	function lf() {
		return wd !== null && (wd.skipTransition(), wd = null), af(), of(), sf(), uf();
	}
	function uf() {
		if (_d !== 5) return !1;
		var e = vd, t = xd;
		xd = 0;
		var n = ut(bd), r = H.T, a = le.p;
		try {
			le.p = 32 > n ? 32 : n, H.T = null, n = Sd, Sd = null;
			var o = vd, s = bd;
			if (_d = 0, yd = vd = null, bd = 0, Ju & 6) throw Error(i(331));
			var c = Ju;
			if (Ju |= 4, Uu(o.current), Fu(o, o.current, s, n), Ju = c, $(0, !1), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
				Ue.onPostCommitFiberRoot(He, o);
			} catch {}
			return !0;
		} finally {
			le.p = a, H.T = r, cf(e, t);
		}
	}
	function df(e, t, n) {
		t = Fi(n, t), t = bc(e.stateNode, t, 2), e = lo(e, t, 2), e !== null && (it(e, 2), Tf(e));
	}
	function ff(e, t, n) {
		if (e.tag === 3) df(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				df(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gd === null || !gd.has(r))) {
					e = Fi(n, e), n = xc(2), r = lo(t, n, 2), r !== null && (Sc(n, r, t, e), it(r, 2), Tf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function pf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new qu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (td = !0, i.add(n), e = mf.bind(null, e, t, n), t.then(e, e));
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Yu === e && (Xu & n) === n && (rd === 4 || rd === 3 && (Xu & 62914560) === Xu && 300 > Ne() - fd ? Ju & 2 ? od |= n : zd(e, 0) : od |= n, cd === Xu && (cd = 0)), Tf(e);
	}
	function hf(e, t) {
		t === 0 && (t = rt()), e = bi(e, t), e !== null && (it(e, t), Tf(e));
	}
	function gf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), hf(e, n);
	}
	function _f(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), hf(e, n);
	}
	function vf(e, t) {
		return ke(e, t);
	}
	var yf = null, bf = null, xf = !1, Sf = !1, Cf = !1, wf = 0;
	function Tf(e) {
		e !== bf && e.next === null && (bf === null ? yf = bf = e : bf = bf.next = e), Sf = !0, xf || (xf = !0, jf());
	}
	function $(e, t) {
		if (!Cf && Sf) {
			Cf = !0;
			do
				for (var n = !1, r = yf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Ge(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Af(r, a));
						} else a = Xu, a = $e(r, r === Yu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || et(r, a) || (n = !0, Af(r, a));
					}
					r = r.next;
				}
			while (n);
			Cf = !1;
		}
	}
	function Ef() {
		Df();
	}
	function Df() {
		Sf = xf = !1;
		var e = 0;
		wf !== 0 && hp() && (e = wf);
		for (var t = Ne(), n = null, r = yf; r !== null;) {
			var i = r.next, a = Of(r, t);
			a === 0 ? (r.next = null, n === null ? yf = i : n.next = i, i === null && (bf = n)) : (n = r, (e !== 0 || a & 3) && (Sf = !0)), r = i;
		}
		_d !== 0 && _d !== 5 || $(e, !1), wf !== 0 && (wf = 0);
	}
	function Of(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Ge(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Yu, n = Xu, n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Zu === 2 || Zu === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ae(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || et(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ae(r), ut(n)) {
				case 2:
				case 8:
					n = Ie;
					break;
				case 32:
					n = Le;
					break;
				case 268435456:
					n = ze;
					break;
				default: n = Le;
			}
			return r = kf.bind(null, e), n = ke(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ae(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function kf(e, t) {
		if (_d !== 0 && _d !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (lf() && e.callbackNode !== n) return null;
		var r = Xu;
		return r = $e(e, e === Yu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Nd(e, r, t), Of(e, Ne()), e.callbackNode != null && e.callbackNode === n ? kf.bind(null, e) : null);
	}
	function Af(e, t) {
		if (lf()) return null;
		Nd(e, t, !0);
	}
	function jf() {
		bp(function() {
			Ju & 6 ? ke(Fe, Ef) : Df();
		});
	}
	function Mf() {
		if (wf === 0) {
			var e = Ma;
			e === 0 && (e = Ye, Ye <<= 1, !(Ye & 261888) && (Ye = 256)), wf = e;
		}
		return wf;
	}
	function Nf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : un(e);
	}
	function Pf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Nf((i[ht] || null).action), o = r.submitter;
			o && (t = (t = o[ht] || null) ? Nf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Mn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (wf !== 0) {
								var e = new FormData(i, o);
								Ks(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Ks(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Ff = 0; Ff < si.length; Ff++) {
		var If = si[Ff];
		ci(If.toLowerCase(), "on" + (If[0].toUpperCase() + If.slice(1)));
	}
	ci($r, "onAnimationEnd"), ci(ei, "onAnimationIteration"), ci(ti, "onAnimationStart"), ci("dblclick", "onDoubleClick"), ci("focusin", "onFocus"), ci("focusout", "onBlur"), ci(ni, "onTransitionRun"), ci(ri, "onTransitionStart"), ci(ii, "onTransitionCancel"), ci(ai, "onTransitionEnd"), Nt("onMouseEnter", ["mouseout", "mouseover"]), Nt("onMouseLeave", ["mouseout", "mouseover"]), Nt("onPointerEnter", ["pointerout", "pointerover"]), Nt("onPointerLeave", ["pointerout", "pointerover"]), Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Mt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lf));
	function zf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						pi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						pi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Bf(e, t) {
		var n = t[_t];
		n === void 0 && (n = t[_t] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Wf(t, e, 2, !1), n.add(r));
	}
	function Vf(e, t, n) {
		var r = 0;
		t && (r |= 4), Wf(n, e, r, t);
	}
	var Hf = "_reactListening" + Math.random().toString(36).slice(2);
	function Uf(e) {
		if (!e[Hf]) {
			e[Hf] = !0, At.forEach(function(t) {
				t !== "selectionchange" && (Rf.has(t) || Vf(t, !1, e), Vf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Hf] || (t[Hf] = !0, Vf("selectionchange", !1, t));
		}
	}
	function Wf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !xn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Gf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = wt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		vn(function() {
			var r = a, i = pn(n), s = [];
			a: {
				var c = oi.get(e);
				if (c !== void 0) {
					var l = Mn, u = e;
					switch (e) {
						case "keypress": if (Dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Xn;
							break;
						case "focusin":
							u = "focus", l = Vn;
							break;
						case "focusout":
							u = "blur", l = Vn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Vn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = zn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Bn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = $n;
							break;
						case $r:
						case ei:
						case ti:
							l = Hn;
							break;
						case ai:
							l = er;
							break;
						case "scroll":
						case "scrollend":
							l = Pn;
							break;
						case "wheel":
							l = tr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Un;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Zn;
							break;
						case "submit":
							l = Qn;
							break;
						case "toggle":
						case "beforetoggle": l = nr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = yn(m, p), g != null && d.push(Kf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== fn && (u = n.relatedTarget || n.fromElement) && (wt(u) || u[gt])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? wt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = zn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Zn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : Et(c), h = l == null ? u : Et(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, wt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Jf) : null, c !== null && Yf(s, u, c, d, !1), l !== null && f !== null && Yf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? Et(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Sr;
					else if (gr(c)) {
						if (Cr) _ = Mr;
						else {
							_ = Ar;
							var v = kr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && sn(r.elementType) && (_ = Sr) : _ = jr;
					if (_ &&= _(e, r)) {
						_r(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? Et(r) : window, e) {
					case "focusin":
						(gr(v) || v.contentEditable === "true") && (Ur = v, Wr = r, Gr = null);
						break;
					case "focusout":
						Gr = Wr = Ur = null;
						break;
					case "mousedown":
						Kr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Kr = !1, qr(s, n, i);
						break;
					case "selectionchange": if (Hr) break;
					case "keydown":
					case "keyup": qr(s, n, i);
				}
				var y;
				if (ir) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else fr ? ur(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (sr && n.locale !== "ko" && (fr || b !== "onCompositionStart" ? b === "onCompositionEnd" && fr && (y = En()) : (Cn = i, wn = "value" in Cn ? Cn.value : Cn.textContent, fr = !0)), v = qf(r, b), 0 < v.length && (b = new Wn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = dr(n), y !== null && (b.data = y)))), (y = or ? pr(e, n) : mr(e, n)) && (b = qf(r, "onBeforeInput"), 0 < b.length && (v = new Wn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Pf(s, e, r, n, i);
			}
			zf(s, t);
		});
	}
	function Kf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function qf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = yn(e, n), i != null && r.unshift(Kf(e, i, a)), i = yn(e, t), i != null && r.push(Kf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Jf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Yf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = yn(n, a), l != null && o.unshift(Kf(n, l, c))) : i || (l = yn(n, a), l != null && o.push(Kf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Xf = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
	function Qf(e) {
		return (typeof e == "string" ? e : "" + e).replace(Xf, "\n").replace(Zf, "");
	}
	function $f(e, t) {
		return t = Qf(t), Qf(e) === t;
	}
	function ep(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || nn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && nn(e, "" + r);
				else return;
				break;
			case "className":
				Vt(e, "class", r);
				break;
			case "tabIndex":
				Vt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Vt(e, n, r);
				break;
			case "style":
				on(e, r, o);
				return;
			case "data": if (t !== "object") {
				Vt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = un(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && ep(e, t, "name", a.name, a, null), ep(e, t, "formEncType", a.formEncType, a, null), ep(e, t, "formMethod", a.formMethod, a, null), ep(e, t, "formTarget", a.formTarget, a, null)) : (ep(e, t, "encType", a.encType, a, null), ep(e, t, "method", a.method, a, null), ep(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = un(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = dn);
				return;
			case "onScroll":
				r != null && Bf("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Bf("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = un(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Bf("beforetoggle", e), Bf("toggle", e), Bt(e, "popover", r);
				break;
			case "xlinkActuate":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Bt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = cn.get(n) || n, Bt(e, n, r);
			else return;
		}
		Rt = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				on(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") nn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") nn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Bf("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Bf("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = dn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!jt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[ht] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					Rt = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Bt(e, n, r);
				}
				return;
		}
		Rt = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Bf("error", e), Bf("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: ep(e, t, o, s, n, null);
					}
				}
				a && ep(e, t, "srcSet", n.srcSet, n, null), r && ep(e, t, "src", n.src, n, null);
				return;
			case "input":
				Bf("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: ep(e, t, r, d, n, null);
					}
				}
				Zt(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Bf("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: ep(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && $t(e, !!r, n, !0) : $t(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Bf("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: ep(e, t, s, c, n, null);
				}
				tn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: ep(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Bf("beforetoggle", e), Bf("toggle", e), Bf("cancel", e), Bf("close", e);
				break;
			case "iframe":
			case "object":
				Bf("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Lf.length; r++) Bf(Lf[r], e);
				break;
			case "image":
				Bf("error", e), Bf("load", e);
				break;
			case "details":
				Bf("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Bf("error", e), Bf("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: ep(e, t, u, r, n, null);
				}
				return;
			default: if (sn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && ep(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || ep(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (Rt = !0), o = m;
							break;
						case "name":
							m !== f && (Rt = !0), a = m;
							break;
						case "checked":
							m !== f && (Rt = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (Rt = !0), d = m;
							break;
						case "value":
							m !== f && (Rt = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (Rt = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && ep(e, t, p, m, r, f);
					}
				}
				Xt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || ep(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (Rt = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (Rt = !0), c = o;
						break;
					case "multiple": o !== l && (Rt = !0), s = o;
					default: o !== l && ep(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? $t(e, !!n, n ? [] : "", !1) : $t(e, !!n, t, !0)) : $t(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: ep(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (Rt = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (Rt = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && ep(e, t, s, a, r, o);
				}
				en(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: ep(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (Rt = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: ep(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && ep(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: ep(e, t, u, p, r, m);
				}
				return;
			default: if (sn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && ep(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || ep(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[mt] = r, n[ht] = t, np(n, e, t), Ot(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[xt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : D({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = b(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = lp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag === 6 || (e = b(e), t.observe(e)), !1;
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag === 6 || (e = b(e), t.unobserve(e)), !1;
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = wt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = E(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = E(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Zp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), Zp(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = b(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), Ct(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[xt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && ep(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === dn && (e.onclick = null), Ct(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Ct(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = le.d;
	le.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = Ld();
		return e || t;
	}
	function Cm(e) {
		var t = Tt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Js(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = Yt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Ot(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Yt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Yt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Yt(n.imageSizes) + "\"]")) : i += "[href=\"" + Yt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = D({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[St] = !0, o.onload = o.onerror = function() {
					kt(o);
				}), Ot(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Yt(r) + "\"][href=\"" + Yt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = D({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), Ot(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Dt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = D({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					Ot(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Dt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Ot(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Dt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Ot(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = G.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Dt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Dt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Dt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + Yt(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return D({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[St]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[St] = !0, t.onload = t.onerror = kt.bind(null, t), np(t, "link", n), Ot(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + Yt(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Yt(n.href) + "\"]");
				if (r) return t.instance = r, Ot(r), r;
				var a = D({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Ot(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Ot(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Ot(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Ot(a), a) : (r = n, (a = vm.get(o)) && (r = D({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ot(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[xt] || a[mt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Ot(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Ot(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: F,
		Provider: null,
		Consumer: null,
		_currentValue: ue,
		_currentValue2: ue,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = K(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = K(0), this.hiddenUpdates = K(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Ti(3, null, null, t), e.current = a, a.stateNode = e, t = Ta(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, J(a), e;
	}
	function uh(e) {
		return e ? (e = Ci, e) : Ci;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = co(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = lo(e, r, t), n !== null && (Md(n, e, t), uo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = bi(e, 67108864);
			t !== null && Md(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = kd();
			t = lt(t);
			var n = bi(e, t);
			n !== null && Md(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = H.T;
		H.T = null;
		var a = le.p;
		try {
			le.p = 2, yh(e, t, n, r);
		} finally {
			le.p = a, H.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = H.T;
		H.T = null;
		var a = le.p;
		try {
			le.p = 8, yh(e, t, n, r);
		} finally {
			le.p = a, H.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Gf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Tt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Qe(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Ge(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Tf(a), !(Ju & 6) && (md = Ne() + 500, $(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = bi(a, 2), s !== null && Md(s, a, 2), Ld(), ph(a, 2);
					}
					if (a = bh(r), a === null && Gf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Gf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = pn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = wt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
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
			case "seeked":
			case "submit":
			case "toggle":
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
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
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
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Pe()) {
				case Fe: return 2;
				case Ie: return 8;
				case Le:
				case Re: return 32;
				case ze: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Tt(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = wt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, ft(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, ft(e.priority, function() {
							hh(n);
						});
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
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				fn = r, n.target.dispatchEvent(r), fn = null;
			} else return t = Tt(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Tt(n);
				a !== null && (e.splice(t, 3), t -= 3, Ks(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[ht] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[ht] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, kd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Ld(), t[gt] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = dt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.1") throw Error(i(527, Kh, "19.3.1"));
	le.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: H,
		reconcilerVersion: "19.3.1"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			He = Jh.inject(qh), Ue = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = hc, s = gc, c = _c;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[gt] = t.current, Uf(e), new Wh(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function v(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: _(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var y = (e) => {
	let t = "", n = !1;
	for (let r of e) r === "-" || r === "_" || r <= " " ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
	return t;
}, b = (e) => {
	let t = y(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, x = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), S = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function C(e) {
	return e != null;
}
function w(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? S.width, a = e.size ?? e.height ?? S.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], c = t.className?.split(" ").filter(Boolean) ?? [], l = t.includeDefaultClasses === !1 ? x(...c) : x("lucide", ...s, ...c), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? S["stroke-width"]) * Number(e.size ?? e.width ?? S.width) / Number(t.size ?? t.width ?? S.width) : t.strokeWidth ?? S["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(S).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && C(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && C(t.width) && { [r("width")]: t.width },
			..."height" in t && C(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: u,
			...l && { [r("class")]: l },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function T(e, t = {}) {
	return w(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var E = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, D = /* @__PURE__ */ c(u(), 1), O = (0, D.createContext)({}), k = () => (0, D.useContext)(O), A = (0, D.forwardRef)(({ color: e, size: t, width: n, height: r, strokeWidth: i, absoluteStrokeWidth: a, nonScalingStroke: o, className: s = "", children: c, iconNode: l = [], icon: u = {
	node: l,
	aliases: [],
	size: 24
}, ...d }, f) => {
	let { size: p = 24, strokeWidth: m = 2, absoluteStrokeWidth: h = !1, nonScalingStroke: g = !1, color: _ = "currentColor", className: v = "" } = k() ?? {}, y = !!c || E(d), [b, S, C = []] = T(u, {
		color: e ?? _,
		width: n ?? t ?? p,
		height: r ?? t ?? p,
		strokeWidth: i ?? m,
		absoluteStrokeWidth: a ?? h,
		nonScalingStroke: o ?? g,
		className: x(v, s),
		hasA11yProp: y,
		attributes: d
	});
	return (0, D.createElement)(b, {
		ref: f,
		...S
	}, [...C.map(([e, t]) => (0, D.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]);
});
// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function j(e, t = [], n = []) {
	let r = typeof e == "string" ? v(e, t, n) : e, i = (0, D.forwardRef)(({ className: e, ...t }, n) => (0, D.createElement)(A, {
		ref: n,
		icon: r,
		className: e,
		...t
	}));
	return r.name && (i.displayName = b(r.name)), i;
}
// node_modules/lucide-react/dist/esm/icons/arrow-down-right.mjs
var M = {
	name: "arrow-down-right",
	size: 24,
	node: [["path", {
		d: "m7 7 10 10",
		key: "1fmybs"
	}], ["path", {
		d: "M17 7v10H7",
		key: "6fjiku"
	}]]
};
M.node;
var N = j(M), P = {
	name: "arrow-up-right",
	size: 24,
	node: [["path", {
		d: "M7 7h10v10",
		key: "1tivn9"
	}], ["path", {
		d: "M7 17 17 7",
		key: "1vkiza"
	}]]
};
P.node;
var F = j(P), I = {
	name: "chart-column",
	size: 24,
	node: [
		["path", {
			d: "M3 3v16a2 2 0 0 0 2 2h16",
			key: "c24i48"
		}],
		["path", {
			d: "M18 17V9",
			key: "2bz60n"
		}],
		["path", {
			d: "M13 17V5",
			key: "1frdt8"
		}],
		["path", {
			d: "M8 17v-3",
			key: "17ska0"
		}]
	],
	aliases: ["bar-chart-3"]
};
I.node;
var L = j(I), ee = {
	name: "check",
	size: 24,
	node: [["path", {
		d: "M20 6 9 17l-5-5",
		key: "1gmf2c"
	}]]
};
ee.node;
var R = j(ee), te = {
	name: "chevron-down",
	size: 24,
	node: [["path", {
		d: "m6 9 6 6 6-6",
		key: "qrunsl"
	}]]
};
te.node;
var z = j(te), ne = {
	name: "chevron-up",
	size: 24,
	node: [["path", {
		d: "m18 15-6-6-6 6",
		key: "153udz"
	}]]
};
ne.node;
var B = j(ne), re = {
	name: "circle-question-mark",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "12",
			r: "10",
			key: "1mglay"
		}],
		["path", {
			d: "M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5",
			key: "1awbb0"
		}],
		["path", {
			d: "M12 17h.01",
			key: "p32p05"
		}]
	],
	aliases: ["help-circle", "circle-help"]
};
re.node;
var ie = j(re), V = {
	name: "external-link",
	size: 24,
	node: [
		["path", {
			d: "M15 3h6v6",
			key: "1q9fwt"
		}],
		["path", {
			d: "M10 14 21 3",
			key: "gplh6r"
		}],
		["path", {
			d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
			key: "a6xqqp"
		}]
	]
};
V.node;
var ae = j(V), oe = {
	name: "layers",
	size: 24,
	node: [
		["path", {
			d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
			key: "zw3jo"
		}],
		["path", {
			d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
			key: "1wduqc"
		}],
		["path", {
			d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
			key: "kqbvx6"
		}]
	],
	aliases: ["layers-3"]
};
oe.node;
var se = j(oe), ce = {
	name: "lock-keyhole",
	size: 24,
	node: [
		["circle", {
			cx: "12",
			cy: "16",
			r: "1",
			key: "1au0dj"
		}],
		["rect", {
			x: "3",
			y: "10",
			width: "18",
			height: "12",
			rx: "2",
			key: "6s8ecr"
		}],
		["path", {
			d: "M7 10V7a5 5 0 0 1 10 0v3",
			key: "1pqi11"
		}]
	]
};
ce.node;
var H = j(ce), le = {
	name: "shield-check",
	size: 24,
	node: [["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}], ["path", {
		d: "m9 12 2 2 4-4",
		key: "dzmm74"
	}]]
};
le.node;
var ue = j(le);
// node_modules/@base-ui/utils/useControlled.mjs
function de({ controlled: e, default: t, name: n, state: r = "value" }) {
	let { current: i } = D.useRef(e !== void 0), [a, o] = D.useState(() => t);
	return [i && e !== void 0 ? e : a, D.useCallback((e) => {
		i || o(e);
	}, [])];
}
var U = typeof document < "u" ? D.useLayoutEffect : () => {}, fe = { ...D }, pe = {};
function W(e, t) {
	let n = D.useRef(pe);
	return n.current === pe && (n.current = e(t)), n;
}
// node_modules/@base-ui/utils/useStableCallback.mjs
var me = fe.useInsertionEffect, he = me && me !== fe.useLayoutEffect ? me : (e) => e();
function G(e) {
	let t = W(ge).current;
	return t.next = e, he(t.effect), t.trampoline;
}
function ge() {
	let e = {
		next: void 0,
		callback: _e,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		}
	};
	return e;
}
function _e() {}
// node_modules/@base-ui/utils/useMergedRefs.mjs
function ve(e, t, n, r) {
	let i = W(be).current;
	return xe(i, e, t, n, r) && Ce(i, [
		e,
		t,
		n,
		r
	]), i.callback;
}
function ye(e) {
	let t = W(be).current;
	return Se(t, e) && Ce(t, e), t.callback;
}
function be() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function xe(e, t, n, r, i) {
	return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function Se(e, t) {
	return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function Ce(e, t) {
	e.refs = t, e.callback = t.every((e) => e == null) ? null : (n) => {
		if (e.cleanup &&= (e.cleanup(), null), n != null) {
			let r = Array(t.length).fill(null);
			for (let e = 0; e < t.length; e += 1) {
				let i = t[e];
				if (i != null) switch (typeof i) {
					case "function": {
						let t = i(n);
						typeof t == "function" && (r[e] = t);
						break;
					}
					case "object": i.current = n;
				}
			}
			e.cleanup = () => {
				for (let e = 0; e < t.length; e += 1) {
					let n = t[e];
					if (n != null) switch (typeof n) {
						case "function": {
							let t = r[e];
							typeof t == "function" ? t() : n(null);
							break;
						}
						case "object": n.current = null;
					}
				}
			};
		}
	};
}
// node_modules/@base-ui/utils/reactVersion.mjs
var we = 19;
function Te(e) {
	return we >= e;
}
// node_modules/@base-ui/utils/getReactElementRef.mjs
function Ee(e) {
	if (!/*#__PURE__*/ D.isValidElement(e)) return null;
	let t = e, n = t.props;
	return (Te(19) ? n?.ref : t.ref) ?? null;
}
// node_modules/@base-ui/utils/mergeObjects.mjs
function De(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return {
		...e,
		...t
	};
}
// node_modules/@base-ui/utils/empty.mjs
function Oe() {}
var ke = Object.freeze([]), Ae = Object.freeze({});
// node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function je(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		if (t?.hasOwnProperty(r)) {
			let e = t[r](i);
			e != null && Object.assign(n, e);
		} else i === !0 ? n[`data-${r.toLowerCase()}`] = "" : i && (n[`data-${r.toLowerCase()}`] = i.toString());
	}
	return n;
}
// node_modules/@base-ui/react/utils/resolveClassName.mjs
function Me(e, t) {
	return typeof e == "function" ? e(t) : e;
}
// node_modules/@base-ui/react/utils/resolveStyle.mjs
function Ne(e, t) {
	return typeof e == "function" ? e(t) : e;
}
// node_modules/@base-ui/react/merge-props/mergeProps.mjs
var Pe = {};
function Fe(e, t, n, r, i) {
	if (!n && !r && !i && !e) return Le(t);
	let a = Le(e);
	return t && (a = Re(a, t)), n && (a = Re(a, n)), r && (a = Re(a, r)), i && (a = Re(a, i)), a;
}
function Ie(e) {
	if (e.length === 0) return Pe;
	if (e.length === 1) return Le(e[0]);
	let t = Le(e[0]);
	for (let n = 1; n < e.length; n += 1) t = Re(t, e[n]);
	return t;
}
function Le(e) {
	return He(e) ? { ...e(Pe) } : ze(e);
}
function Re(e, t) {
	return He(t) ? t(e) : Be(e, t);
}
function ze(e) {
	let t = { ...e };
	for (let e in t) {
		let n = t[e];
		Ve(e, n) && (t[e] = We(n));
	}
	return t;
}
function Be(e, t) {
	if (!t) return e;
	for (let n in t) {
		let r = t[n];
		switch (n) {
			case "style":
				e[n] = De(e.style, r);
				break;
			case "className":
				e[n] = Ke(e.className, r);
				break;
			default: e[n] = Ve(n, r) ? Ue(e[n], r) : r;
		}
	}
	return e;
}
function Ve(e, t) {
	let n = e.charCodeAt(0), r = e.charCodeAt(1), i = e.charCodeAt(2);
	return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == "function" || t === void 0);
}
function He(e) {
	return typeof e == "function";
}
function Ue(e, t) {
	return t ? e ? (...n) => {
		let r = n[0];
		if (qe(r)) {
			let i = r;
			Ge(i);
			let a = t(...n);
			return i.baseUIHandlerPrevented || e?.(...n), a;
		}
		let i = t(...n);
		return e?.(...n), i;
	} : We(t) : e;
}
function We(e) {
	return e && ((...t) => {
		let n = t[0];
		return qe(n) && Ge(n), e(...t);
	});
}
function Ge(e) {
	return e.preventBaseUIHandler = () => {
		e.baseUIHandlerPrevented = !0;
	}, e;
}
function Ke(e, t) {
	return t ? e ? t + " " + e : t : e;
}
function qe(e) {
	return typeof e == "object" && !!e && "nativeEvent" in e;
}
// node_modules/@base-ui/react/internals/useRenderElement.mjs
function Je(e, t, n = {}) {
	let r = t.render;
	n.enabled !== !1 && (r = Qe(r));
	let i = Ye(t, n, r);
	if (n.enabled === !1) return null;
	let a = n.state ?? Ae;
	return $e(e, r, i, a);
}
function Ye(e, t, n) {
	let { className: r, style: i } = e, { state: a = Ae, ref: o, props: s, stateAttributesMapping: c, enabled: l = !0 } = t, u = l ? Me(r, a) : void 0, d = l ? Ne(i, a) : void 0, f = l ? je(a, c) : Ae, p = l && s ? Xe(s) : void 0, m = l ? De(f, p) ?? {} : Ae;
	return typeof document < "u" && (l ? m.ref = Array.isArray(o) ? ye([
		m.ref,
		Ee(n),
		...o
	]) : ve(m.ref, Ee(n), o) : ve(null, null)), l ? (u !== void 0 && (m.className = Ke(m.className, u)), d !== void 0 && (m.style = De(m.style, d)), m) : Ae;
}
function Xe(e) {
	return Array.isArray(e) ? Ie(e) : Fe(void 0, e);
}
var Ze = Symbol.for("react.lazy");
function Qe(e) {
	if (e?.$$typeof !== Ze) return e;
	let t = D.Children.toArray(e)[0];
	return /*#__PURE__*/ D.isValidElement(t) ? t : e;
}
function $e(e, t, n, r) {
	if (t) {
		if (typeof t == "function") return t(n, r);
		let e = Fe(n, t.props);
		return e.ref = n.ref, /*#__PURE__*/ D.cloneElement(t, e);
	}
	return et(e, n);
}
function et(e, t) {
	return e === "button" ? /*#__PURE__*/ (0, D.createElement)("button", {
		type: "button",
		...t,
		key: t.key
	}) : e === "img" ? /*#__PURE__*/ (0, D.createElement)("img", {
		alt: "",
		...t,
		key: t.key
	}) : /*#__PURE__*/ D.createElement(e, t);
}
// node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var tt = /*#__PURE__*/ D.createContext({
	register: () => {},
	unregister: () => {},
	subscribeMapChange: () => () => {},
	nextIndexRef: { current: 0 }
});
function nt() {
	return D.useContext(tt);
}
// node_modules/react/cjs/react-jsx-runtime.production.js
var rt = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), K = (/* @__PURE__ */ o(((e, t) => {
	t.exports = rt();
})))();
function it(e) {
	let { children: t, elementsRef: n, labelsRef: r, onMapChange: i } = e, a = G(i), [, o] = D.useState(0), s = W(ot).current, c = W(at).current, l = D.useRef(0), u = D.useRef(!0), d = D.useRef(null), f = D.useRef(null), p = G(() => {
		u.current || (u.current = !0, o((e) => e + 1));
	}), m = G((e, t) => {
		c.set(e, t), p();
	}), h = G((e) => {
		c.delete(e), p();
	}), g = G((e) => {
		let t = /* @__PURE__ */ new Map();
		return n.current.length = 0, r && (r.current.length = 0), e.forEach((e) => {
			t.set(e.element, {
				...e.registration.metadata ?? {},
				index: e.index
			}), n.current[e.index] = e.element, r && (r.current[e.index] = e.registration.label === void 0 ? e.registration.textRef?.current?.textContent ?? e.element.textContent : e.registration.label);
		}), l.current = n.current.length, t;
	});
	function _(e) {
		if (f.current?.disconnect(), f.current = null, typeof MutationObserver != "function" || e.length < 2) return;
		let t = new MutationObserver((n) => {
			if (!lt(n)) return;
			let r = null;
			for (let n of e) if (n.isConnected) {
				if (r && ut(r, n) > 0) {
					t.disconnect(), p();
					return;
				}
				r = n;
			}
		});
		f.current = t;
		let n = /* @__PURE__ */ new Set();
		for (let t = 1; t < e.length; t += 1) {
			let r = ct(e[t - 1], e[t]);
			r && n.add(r);
		}
		n.forEach((e) => t.observe(e, { childList: !0 }));
	}
	let v = G(() => {
		let [e, t] = st(c), n = g(e), r = d.current, i = !r || r.length !== e.length || e.some((e, t) => {
			let n = r[t];
			return e.index !== n.index || e.element !== n.element || e.registration.index !== n.registration.index || e.registration.metadata !== n.registration.metadata;
		});
		_(t), d.current = e, u.current = !1, i && (s.forEach((e) => e(n)), a(n));
	});
	U(() => (!u.current && d.current && g(d.current), () => {
		n.current = [], r && (r.current = []);
	}), [
		n,
		r,
		g
	]), U(() => {
		u.current && v();
	}), U(() => () => {
		f.current?.disconnect(), u.current = !0;
	}, []);
	let y = G((e) => (s.add(e), () => {
		s.delete(e);
	})), b = D.useMemo(() => ({
		register: m,
		unregister: h,
		subscribeMapChange: y,
		nextIndexRef: l
	}), [
		m,
		h,
		y,
		l
	]);
	return /*#__PURE__*/ (0, K.jsx)(tt.Provider, {
		value: b,
		children: t
	});
}
function at() {
	return /* @__PURE__ */ new Map();
}
function ot() {
	return /* @__PURE__ */ new Set();
}
function st(e) {
	let t = /* @__PURE__ */ new Set(), n = [], r = [];
	e.forEach((e, i) => {
		if (!i.isConnected) return;
		let a = e.index, o = {
			index: a ?? -1,
			element: i,
			registration: e
		};
		a === null ? r.push(o) : a >= 0 && (t.add(a), n.push(o));
	});
	let i = 0;
	return r.sort((e, t) => ut(e.element, t.element)), r.forEach((e) => {
		for (; t.has(i);) i += 1;
		e.index = i, n.push(e), i += 1;
	}), t.size > 0 && n.sort((e, t) => e.index - t.index), [n, r.map((e) => e.element)];
}
function ct(e, t) {
	let n = e.parentElement;
	for (; n && !n.contains(t);) n = n.parentElement;
	return n;
}
function lt(e) {
	for (let t of e) for (let e = 0; e < t.removedNodes.length; e += 1) if (t.removedNodes[e].isConnected) return !0;
	return !1;
}
function ut(e, t) {
	return e.nextElementSibling === t ? -1 : t.nextElementSibling === e ? 1 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
// node_modules/@base-ui/utils/formatErrorMessage.mjs
function dt(e, t) {
	return function(n, ...r) {
		let i = new URL(e);
		return i.searchParams.set("code", n.toString()), r.forEach((e) => i.searchParams.append("args[]", e)), `${t} error #${n}; visit ${i} for the full message.`;
	};
}
var ft = dt("https://base-ui.com/production-error", "Base UI"), pt = /*#__PURE__*/ D.createContext(void 0);
function mt() {
	let e = D.useContext(pt);
	if (e === void 0) throw Error(ft(64));
	return e;
}
// node_modules/@base-ui/react/tabs/root/TabsRootDataAttributes.mjs
var ht = "data-activation-direction", gt = { tabActivationDirection: (e) => ({ [ht]: e }) };
// node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
function _t(e, t, n, r) {
	let i = !1, a = !1, o = r ?? Ae;
	return {
		reason: e,
		event: t ?? new Event("base-ui"),
		cancel() {
			i = !0;
		},
		allowPropagation() {
			a = !0;
		},
		get isCanceled() {
			return i;
		},
		get isPropagationAllowed() {
			return a;
		},
		trigger: n,
		...o
	};
}
// node_modules/@base-ui/react/internals/reason-parts.mjs
var vt = "none", yt = "trigger-press", bt = "outside-press", xt = "item-press", St = "focus-out", Ct = "escape-key", wt = "list-navigation", Tt = "cancel-open", Et = "disabled", Dt = "missing", Ot = "initial", kt = "imperative-action", At = "window-resize", jt = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { className: n, defaultValue: r = 0, onValueChange: i, orientation: a = "horizontal", render: o, value: s, style: c, ...l } = e, u = e.defaultValue !== void 0, d = D.useRef([]), [f, p] = D.useState(() => /* @__PURE__ */ new Map()), [m, h] = de({
		controlled: s,
		default: r,
		name: "Tabs",
		state: "value"
	}), g = s !== void 0, [_, v] = D.useState(() => /* @__PURE__ */ new Map()), y = D.useRef(void 0), b = D.useCallback((e) => Mt(_, e), [_]), [x, S] = D.useState(() => ({
		previousValue: m,
		tabActivationDirection: "none"
	})), { previousValue: C, tabActivationDirection: w } = x, T = w, E = !1;
	C !== m && (T = Nt(C, m, a, _), E = C != null && m != null && b(m) == null);
	let O = E ? C : m, k = C !== O || w !== T;
	U(() => {
		k && S({
			previousValue: O,
			tabActivationDirection: T
		});
	}, [
		O,
		k,
		T
	]);
	let A = G((e, t) => {
		t.activationDirection = Nt(m, e, a, _), i?.(e, t), t.isCanceled || h(() => e);
	}), j = G((e, t) => {
		i?.(e, _t(t, void 0, void 0, { activationDirection: "none" }));
	}), M = G((e, t) => (p((n) => {
		let r = new Map(n);
		return r.set(e, t), r;
	}), () => {
		p((n) => {
			if (n.get(e) !== t) return n;
			let r = new Map(n);
			return r.delete(e), r;
		});
	})), N = D.useCallback((e) => f.get(e), [f]), P = D.useCallback((e) => {
		for (let t of _.values()) if (e === t.value) return t.id;
	}, [_]), F = D.useMemo(() => ({
		getTabElementBySelectedValue: b,
		getTabIdByPanelValue: P,
		getTabPanelIdByValue: N,
		onValueChange: A,
		orientation: a,
		registerMountedTabPanel: M,
		setTabMap: v,
		tabActivationDirection: T,
		value: m
	}), [
		b,
		P,
		N,
		A,
		a,
		M,
		v,
		T,
		m
	]), I = D.useMemo(() => {
		for (let e of _.values()) if (e.value === m) return e;
	}, [_, m]), L = D.useMemo(() => {
		for (let e of _.values()) if (!e.disabled) return e.value;
	}, [_]), ee = D.useRef(!u), R = D.useRef(r), te = D.useRef(u), z = D.useRef(!1);
	U(() => {
		if (g) return;
		function e(e, t) {
			h(() => e), S({
				previousValue: e,
				tabActivationDirection: "none"
			}), j(e, t), ee.current = !1;
		}
		if (_.size === 0) {
			z.current && m !== null && !y.current?.isConnected && e(null, Dt);
			return;
		}
		z.current = !0, y.current = _.keys().next().value;
		let t = I?.disabled, n = I == null && m !== null;
		if (!t && m === R.current && (te.current = !1), te.current && t && m === R.current) return;
		let r = ee.current;
		if (t || n) {
			let n = L ?? null;
			if (m === n) {
				ee.current = !1;
				return;
			}
			let i = Dt;
			r ? i = Ot : t && (i = Et), e(n, i);
		} else r && I != null && (j(m, Ot), ee.current = !1);
	}, [
		L,
		g,
		j,
		I,
		h,
		_,
		m
	]);
	let ne = Je("div", e, {
		state: {
			orientation: a,
			tabActivationDirection: T
		},
		ref: t,
		props: l,
		stateAttributesMapping: gt
	});
	return /*#__PURE__*/ (0, K.jsx)(pt.Provider, {
		value: F,
		children: /*#__PURE__*/ (0, K.jsx)(it, {
			elementsRef: d,
			children: ne
		})
	});
});
function Mt(e, t) {
	for (let [n, r] of e.entries()) if (t === r.value) return n;
	return null;
}
function Nt(e, t, n, r) {
	if (e == null || t == null) return "none";
	let [i, a, o] = n === "horizontal" ? [
		"left",
		"left",
		"right"
	] : [
		"top",
		"up",
		"down"
	], s = Mt(r, e), c = Mt(r, t);
	if (s == null || c == null) return s !== c && (typeof e == "number" || typeof e == "string") && typeof e == typeof t ? t > e ? o : a : "none";
	let l = s.getBoundingClientRect()[i], u = c.getBoundingClientRect()[i];
	return u < l ? a : u > l ? o : "none";
}
// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Pt() {
	return typeof window < "u";
}
function Ft(e) {
	return Rt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function It(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Lt(e) {
	return ((Rt(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Rt(e) {
	return Pt() ? e instanceof Node || e instanceof It(e).Node : !1;
}
function zt(e) {
	return Pt() ? e instanceof Element || e instanceof It(e).Element : !1;
}
function Bt(e) {
	return Pt() ? e instanceof HTMLElement || e instanceof It(e).HTMLElement : !1;
}
function Vt(e) {
	return !Pt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof It(e).ShadowRoot;
}
function Ht(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = $t(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Ut(e) {
	return /^(table|td|th)$/.test(Ft(e));
}
function Wt(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Gt = /transform|translate|scale|rotate|perspective|filter/, Kt = /paint|layout|strict|content/, qt = (e) => !!e && e !== "none", Jt;
function Yt(e) {
	let t = zt(e) ? $t(e) : e;
	return qt(t.transform) || qt(t.translate) || qt(t.scale) || qt(t.rotate) || qt(t.perspective) || !Zt() && (qt(t.backdropFilter) || qt(t.filter)) || Gt.test(t.willChange || "") || Kt.test(t.contain || "");
}
function Xt(e) {
	let t = tn(e);
	for (; Bt(t) && !Qt(t);) {
		if (Yt(t)) return t;
		if (Wt(t)) return null;
		t = tn(t);
	}
	return null;
}
function Zt() {
	return Jt ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Jt;
}
function Qt(e) {
	return /^(html|body|#document)$/.test(Ft(e));
}
function $t(e) {
	return It(e).getComputedStyle(e);
}
function en(e) {
	return zt(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function tn(e) {
	if (Ft(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Vt(e) && e.host || Lt(e);
	return Vt(t) ? t.host : t;
}
function nn(e) {
	let t = tn(e);
	return Qt(t) ? (e.ownerDocument || e).body : Bt(t) && Ht(t) ? t : nn(t);
}
function rn(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = nn(e), i = r === e.ownerDocument?.body, a = It(r);
	if (i) {
		let e = an(a);
		return t.concat(a, a.visualViewport || [], Ht(r) ? r : [], e && n ? rn(e) : []);
	}
	return t.concat(r, rn(r, [], n));
}
function an(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
// node_modules/@base-ui/utils/owner.mjs
function on(e) {
	return e?.ownerDocument || document;
}
// node_modules/@base-ui/utils/useForcedRerendering.mjs
function sn() {
	let [, e] = D.useState({});
	return D.useCallback(() => {
		e({});
	}, []);
}
// node_modules/@base-ui/utils/useId.mjs
var cn = 0;
function ln(e, t = "mui") {
	let n = D.useRef(void 0), r = sn(), i = e ?? n.current;
	return D.useEffect(() => {
		n.current ?? (cn += 1, n.current = `${t}-${cn}`, e ?? r());
	}, [
		e,
		t,
		r
	]), i;
}
var un = fe.useId;
function dn(e, t) {
	if (un !== void 0) {
		let n = un();
		return e ?? (t ? `${t}-${n}` : n);
	}
	return ln(e, t);
}
// node_modules/@base-ui/react/internals/useBaseUiId.mjs
function fn(e) {
	return dn(e, "base-ui");
}
// node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
var pn = /*#__PURE__*/ D.createContext(void 0);
function mn(e = !1) {
	let t = D.useContext(pn);
	if (t === void 0 && !e) throw Error(ft(16));
	return t;
}
// node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
function hn(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: r = !1, tabIndex: i = 0, isNativeButton: a } = e, o = r && t !== !1, s = r && t === !1;
	return { props: D.useMemo(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return r || (e.tabIndex = i, !a && n && (e.tabIndex = t ? i : -1)), (a && (t || o) || !a && n) && (e["aria-disabled"] = n), a && (!t || s) && (e.disabled = n), e;
	}, [
		r,
		n,
		t,
		o,
		s,
		a,
		i
	]) };
}
// node_modules/@base-ui/react/utils/dispatchClickWithModifiers.mjs
function gn(e, t, { detail: n = 0, pointerType: r = "" } = {}) {
	e.dispatchEvent(new (It(e)).PointerEvent("click", {
		bubbles: !0,
		cancelable: !0,
		composed: !0,
		detail: n,
		pointerType: r,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		altKey: t.altKey,
		metaKey: t.metaKey
	}));
}
// node_modules/@base-ui/react/internals/use-button/useButton.mjs
function _n(e = {}) {
	let { disabled: t = !1, focusableWhenDisabled: n, tabIndex: r = 0, native: i = !0, composite: a } = e, o = D.useRef(null), s = mn(!0), c = a ?? s !== void 0, { props: l } = hn({
		focusableWhenDisabled: n,
		disabled: t,
		composite: c,
		tabIndex: r,
		isNativeButton: i
	}), u = D.useCallback(() => {
		let e = o.current;
		vn(e) && c && t && l.disabled === void 0 && e.disabled && (e.disabled = !1);
	}, [
		t,
		l.disabled,
		c
	]);
	return U(u, [u]), {
		getButtonProps: D.useCallback((e = {}) => {
			let { onClick: n, onMouseDown: r, onKeyUp: a, onKeyDown: o, onPointerDown: s, ...u } = e;
			return Fe({
				onClick(e) {
					t ? e.preventDefault() : n?.(e);
				},
				onMouseDown(e) {
					t || r?.(e);
				},
				onKeyDown(e) {
					if (t || (Ge(e), o?.(e), e.baseUIHandlerPrevented)) return;
					let n = e.target === e.currentTarget, r = e.currentTarget, a = vn(r), s = !i && yn(r), l = n && (i ? a : !s), u = e.key === "Enter", d = e.key === " ", f = r.getAttribute("role"), p = f?.startsWith("menuitem") || f === "option" || f === "gridcell";
					if (n && c && d) {
						if (e.defaultPrevented && p) return;
						e.preventDefault(), (!i || a) && (e.preventBaseUIHandler(), gn(r, e));
					} else !l || i || !d && !u ? n && s && d && e.preventDefault() : e.defaultPrevented || (e.preventDefault(), u && (e.preventBaseUIHandler(), gn(r, e)));
				},
				onKeyUp(e) {
					t || (Ge(e), a?.(e), e.target === e.currentTarget && i && c && vn(e.currentTarget) && e.key === " " ? e.preventDefault() : e.baseUIHandlerPrevented || e.target !== e.currentTarget || i || c || e.defaultPrevented || e.key !== " " || (e.preventBaseUIHandler(), gn(e.currentTarget, e)));
				},
				onPointerDown(e) {
					t ? e.preventDefault() : s?.(e);
				}
			}, i ? { type: "button" } : { role: "button" }, l, u);
		}, [
			t,
			l,
			c,
			i
		]),
		buttonRef: G((e) => {
			o.current = e, u();
		})
	};
}
function vn(e) {
	return Bt(e) && e.tagName === "BUTTON";
}
function yn(e) {
	return Bt(e) && e.tagName === "A" && !!e.href;
}
// node_modules/@base-ui/react/internals/composite/constants.mjs
var bn = "data-composite-item-active";
// node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
function xn(e = {}) {
	let { guess: t, label: n, metadata: r, textRef: i, index: a } = e, { register: o, unregister: s, subscribeMapChange: c, nextIndexRef: l } = nt(), u = D.useRef(-1), [d, f] = D.useState(a == null && t ? () => {
		if (u.current === -1) {
			let e = l.current;
			l.current += 1, u.current = e;
		}
		return u.current;
	} : -1), p = a ?? d, m = D.useRef(null), h = D.useCallback((e) => {
		let t = m.current;
		t && s(t), m.current = e, e && o(e, {
			metadata: r ?? null,
			index: a ?? null,
			label: n,
			textRef: i
		});
	}, [
		a,
		o,
		s,
		r,
		n,
		i
	]);
	return U(() => {
		if (a == null) return c((e) => {
			let t = m.current ? e.get(m.current)?.index : null;
			t != null && f(t);
		});
	}, [a, c]), {
		ref: h,
		index: p
	};
}
// node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
function Sn(e = {}) {
	let { highlightItemOnHover: t, highlightedIndex: n, onHighlightedIndexChange: r } = mn(), { ref: i, index: a } = xn(e), o = n === a, s = D.useRef(null), c = ve(i, s);
	return {
		compositeProps: {
			tabIndex: o ? 0 : -1,
			onFocus() {
				r(a);
			},
			onMouseMove() {
				let e = s.current;
				if (!t || !e) return;
				let n = e.hasAttribute("disabled") || e.ariaDisabled === "true";
				!o && !n && e.focus();
			}
		},
		compositeRef: c,
		index: a
	};
}
// node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
var Cn = /*#__PURE__*/ D.createContext(void 0);
function wn() {
	let e = D.useContext(Cn);
	if (e === void 0) throw Error(ft(65));
	return e;
}
// node_modules/@base-ui/utils/platform/shared.mjs
function Tn() {
	return typeof navigator > "u" ? {
		userAgent: "",
		platform: "",
		maxTouchPoints: 0
	} : {
		userAgent: navigator.userAgent,
		platform: navigator.platform ?? "",
		maxTouchPoints: navigator.maxTouchPoints ?? 0
	};
}
var { userAgent: En, platform: Dn, maxTouchPoints: On } = Tn(), kn = En.toLowerCase(), An = Dn.toLowerCase(), jn = /^i(os$|p)/.test(An) || An === "macintel" && On > 1, Mn = "android", Nn = An === Mn || kn.includes(Mn), Pn = !jn && An.startsWith("mac");
An.startsWith("win"), !Nn && /^(linux|chrome os)/.test(An);
var Fn = Pn || jn, In = typeof CSS < "u" && !!CSS.supports?.("-webkit-backdrop-filter:none");
!In && kn.includes("firefox"), !In && kn.includes("chrom");
// node_modules/@base-ui/utils/platform/screen-reader.mjs
var Ln = Fn, Rn = /jsdom|happydom/.test(kn);
// node_modules/@base-ui/utils/shadowDom.mjs
function zn(e) {
	let t = e.activeElement;
	for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
	return t;
}
function Bn(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode?.();
	if (e.contains(t)) return !0;
	if (n && Vt(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Vn(e, t) {
	let n = e;
	for (; n;) {
		if (zt(n) && n.matches(t)) return n;
		n = n.assignedSlot ?? n.parentNode ?? (Vt(n) ? n.host : null);
	}
	return null;
}
function Hn(e) {
	return "composedPath" in e ? e.composedPath()[0] ?? e.target : e.target;
}
// node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
var Un = "data-base-ui-focusable", Wn = "ArrowLeft", Gn = "ArrowRight", Kn = "ArrowUp", qn = "ArrowDown", Jn = "data-starting-style", Yn = "data-ending-style", Xn = { [Jn]: "" }, Zn = { [Yn]: "" }, Qn = { transitionStatus(e) {
	return e === "starting" ? Xn : e === "ending" ? Zn : null;
} }, $n = "data-open", er = "data-closed", tr = "data-anchor-hidden", nr = "data-popup-open", rr = "data-pressed", ir = { [nr]: "" }, ar = {
	[nr]: "",
	[rr]: ""
}, or = { [$n]: "" }, sr = { [er]: "" }, cr = { [tr]: "" }, lr = { open(e) {
	return e ? ir : null;
} }, ur = { open(e) {
	return e ? ar : null;
} }, dr = {
	open(e) {
		return e ? or : sr;
	},
	anchorHidden(e) {
		return e ? cr : null;
	}
};
({
	...dr,
	...Qn
});
// node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function fr(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function pr(e) {
	return e.matches("html,body");
}
function mr(e) {
	return Bt(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function hr(e) {
	return e ? e.getAttribute("role") === "combobox" && mr(e) : !1;
}
function gr(e) {
	return e ? e.hasAttribute("data-base-ui-focusable") ? e : e.querySelector("[data-base-ui-focusable]") || e : null;
}
// node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function _r(e, t, n = !0) {
	return e.filter((e) => e.parentId === t).flatMap((t) => [...!n || t.context?.open ? [t] : [], ..._r(e, t.id, n)]);
}
function vr(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
// node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function yr(e) {
	e.preventDefault(), e.stopPropagation();
}
function br(e) {
	return "nativeEvent" in e;
}
function xr(e) {
	return e.pointerType === "" && e.isTrusted ? !0 : Nn && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Sr(e) {
	return Rn ? !1 : !Nn && e.width === 0 && e.height === 0 || e.type === "pointerdown" && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" && (Nn || e.buttons === 0) || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function Cr(e, t) {
	let n = ["mouse", "pen"];
	return t || n.push("", void 0), n.includes(e);
}
function wr(e) {
	let t = e.type;
	return t === "click" || t === "mousedown" || t === "keydown" || t === "keyup";
}
// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Tr = Math.min, Er = Math.max, Dr = Math.round, Or = Math.floor, kr = (e) => ({
	x: e,
	y: e
}), Ar = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function jr(e, t, n) {
	return Er(e, Tr(t, n));
}
function Mr(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Nr(e) {
	return e.split("-")[0];
}
function Pr(e) {
	return e.split("-")[1];
}
function Fr(e) {
	return e === "x" ? "y" : "x";
}
function Ir(e) {
	return e === "y" ? "height" : "width";
}
function Lr(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Rr(e) {
	return Fr(Lr(e));
}
function zr(e, t, n) {
	n === void 0 && (n = !1);
	let r = Pr(e), i = Rr(e), a = Ir(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Jr(o)), [o, Jr(o)];
}
function Br(e) {
	let t = Jr(e);
	return [
		Vr(e),
		t,
		Vr(t)
	];
}
function Vr(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Hr = ["left", "right"], Ur = ["right", "left"], Wr = ["top", "bottom"], Gr = ["bottom", "top"];
function Kr(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Ur : Hr : t ? Hr : Ur;
		case "left":
		case "right": return t ? Wr : Gr;
		default: return [];
	}
}
function qr(e, t, n, r) {
	let i = Pr(e), a = Kr(Nr(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Vr)))), a;
}
function Jr(e) {
	let t = Nr(e);
	return Ar[t] + e.slice(t.length);
}
function Yr(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Xr(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Yr(e);
}
function Zr(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
// node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
function Qr(e, t) {
	return t < 0 || t >= e.length;
}
function $r(e, t) {
	return ni(e.current, { disabledIndices: t });
}
function ei(e, t) {
	return ni(e.current, {
		decrement: !0,
		startingIndex: e.current.length,
		disabledIndices: t
	});
}
function ti(e, t, n) {
	let { decrement: r, loopFocus: i, allowEscape: a, disabledIndices: o, minIndex: s, maxIndex: c } = n, l = () => ni(e, {
		startingIndex: t,
		decrement: r,
		disabledIndices: o
	}), u, d = !1;
	if (!i) u = r ? Math.max(s, l()) : Math.min(c, l());
	else if (r ? t <= s : t >= c) {
		let n = r ? -1 : e.length;
		a && t !== n ? u = -1 : (u = r ? c : s, d = !0);
	} else u = l();
	return {
		index: Qr(e, u) ? -1 : u,
		wrapped: d
	};
}
function ni(e, { startingIndex: t = -1, decrement: n = !1, disabledIndices: r, amount: i = 1 } = {}) {
	let a = t;
	do
		a += n ? -i : i;
	while (a >= 0 && a <= e.length - 1 && ri(e, a, r));
	return a;
}
function ri(e, t, n) {
	if (typeof n == "function" ? n(t) : n?.includes(t) ?? !1) return !0;
	let r = e[t];
	return r ? !ai(r) || r.matches(":disabled") ? !0 : !n && (r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true") : !1;
}
function ii(e) {
	return e.visibility === "hidden" || e.visibility === "collapse";
}
function ai(e, t = e ? $t(e) : null) {
	return !e || !e.isConnected || !t || ii(t) ? !1 : typeof e.checkVisibility == "function" ? e.checkVisibility() : t.display !== "none" && t.display !== "contents";
}
// node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var oi = "a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable=\"false\"]),audio[controls],video[controls]";
function si(e) {
	let t = e.assignedSlot;
	if (t) return t;
	if (e.parentElement) return e.parentElement;
	let n = e.getRootNode();
	return Vt(n) ? n.host : null;
}
function ci(e) {
	for (let t of Array.from(e.children)) if (Ft(t) === "summary") return t;
	return null;
}
function li(e, t) {
	let n = ci(t);
	return !!n && (e === n || Bn(n, e));
}
function ui(e) {
	let t = e ? Ft(e) : "";
	return e != null && e.matches(oi) && (t !== "summary" || e.parentElement != null && Ft(e.parentElement) === "details" && ci(e.parentElement) === e) && (t !== "details" || ci(e) == null) && (t !== "input" || e.type !== "hidden");
}
function di(e) {
	if (!ui(e) || !e.isConnected || e.matches(":disabled")) return !1;
	for (let t = e; t; t = si(t)) {
		let n = t !== e, r = Ft(t) === "slot";
		if (t.hasAttribute("inert") || n && Ft(t) === "details" && !t.open && !li(e, t) || t.hasAttribute("hidden") || !r && !fi(t, n)) return !1;
	}
	return !0;
}
function fi(e, t) {
	let n = $t(e);
	return t ? n.display !== "none" : ai(e, n);
}
function pi(e) {
	let t = e.tabIndex;
	if (t < 0) {
		let t = Ft(e);
		if (t === "details" || t === "audio" || t === "video" || Bt(e) && e.isContentEditable) return 0;
	}
	return t;
}
function mi(e) {
	if (Ft(e) !== "input") return null;
	let t = e;
	return t.type === "radio" && t.name !== "" ? t : null;
}
function hi(e, t) {
	let n = mi(e);
	if (!n) return !0;
	let r = t.find((e) => {
		let t = mi(e);
		return t?.name === n.name && t.form === n.form && t.checked;
	});
	return r ? r === n : t.find((e) => {
		let t = mi(e);
		return t?.name === n.name && t.form === n.form;
	}) === n;
}
function gi(e) {
	if (Bt(e) && Ft(e) === "slot") {
		let t = e.assignedElements({ flatten: !0 });
		if (t.length > 0) return t;
	}
	return Bt(e) && e.shadowRoot ? Array.from(e.shadowRoot.children) : Array.from(e.children);
}
function _i(e, t) {
	gi(e).forEach((e) => {
		ui(e) && t.push(e), _i(e, t);
	});
}
function vi(e, t, n) {
	gi(e).forEach((e) => {
		Bt(e) && e.matches(t) && n.push(e), vi(e, t, n);
	});
}
function yi(e) {
	return di(e) && pi(e) >= 0;
}
function bi(e) {
	let t = [];
	return _i(e, t), t.filter(di);
}
function xi(e) {
	let t = bi(e);
	return t.filter((e) => pi(e) >= 0 && hi(e, t));
}
function Si(e, t) {
	let n = xi(e), r = n.length;
	if (r === 0) return;
	let i = zn(on(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function Ci(e) {
	return Si(on(e).body, 1) || e;
}
function wi(e) {
	return Si(on(e).body, -1) || e;
}
function Ti(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !Bn(n, r);
}
function Ei(e) {
	xi(e).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function Di(e) {
	let t = [];
	vi(e, "[data-tabindex]", t), t.forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
// node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
var Oi = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { className: n, disabled: r = !1, render: i, value: a, id: o, nativeButton: s = !0, style: c, ...l } = e, { value: u, getTabPanelIdByValue: d, onValueChange: f, orientation: p, tabActivationDirection: m } = mt(), { activateOnFocus: h, registerTabResizeObserverElement: g, tabsListElement: _ } = wn(), { highlightedIndex: v, onHighlightedIndexChange: y } = mn(), b = fn(o), { compositeProps: x, compositeRef: S, index: C } = Sn({ metadata: D.useMemo(() => ({
		disabled: r,
		id: b,
		value: a
	}), [
		r,
		b,
		a
	]) }), w = a === u, T = D.useRef(!1), E = D.useRef(null), O = G((e) => {
		E.current?.(), E.current = e ? g(e) : null;
	});
	U(() => {
		if (T.current) {
			T.current = !1;
			return;
		}
		if (!(w && C > -1 && v !== C)) return;
		let e = _;
		if (e != null) {
			let t = zn(on(e));
			if (t && Bn(e, t)) return;
		}
		r || y(C);
	}, [
		w,
		C,
		v,
		y,
		r,
		_
	]);
	let { getButtonProps: k, buttonRef: A } = _n({
		disabled: r,
		native: s,
		focusableWhenDisabled: !0
	}), j = d(a), M = D.useRef(!1), N = D.useRef(!1);
	function P(e) {
		f(a, _t(vt, e.nativeEvent, void 0, { activationDirection: "none" }));
	}
	function F(e) {
		w || r || P(e);
	}
	function I(e) {
		w || r || h && (!M.current || N.current) && P(e);
	}
	function L(e) {
		if (w || r) return;
		M.current = !0, N.current = e.button === 0;
		let t = on(e.currentTarget);
		function n() {
			M.current = !1, N.current = !1, t.removeEventListener("pointerup", n), t.removeEventListener("pointercancel", n);
		}
		t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n);
	}
	return Je("button", e, {
		state: {
			disabled: r,
			active: w,
			orientation: p,
			tabActivationDirection: m
		},
		ref: [
			t,
			A,
			S,
			O
		],
		props: [
			x,
			{
				role: "tab",
				"aria-controls": j,
				"aria-selected": w,
				id: b,
				onClick: F,
				onFocus: I,
				onPointerDown: L,
				[bn]: w ? "" : void 0,
				onKeyDownCapture() {
					T.current = !0;
				}
			},
			l,
			k
		],
		stateAttributesMapping: gt
	});
}), ki = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
})), Ai = /* @__PURE__ */ o(((e, t) => {
	t.exports = ki();
})), ji = /*#__PURE__*/ D.createContext(void 0), Mi = { disableStyleElements: !1 };
function Ni() {
	return D.useContext(ji) ?? Mi;
}
// node_modules/@base-ui/utils/inertValue.mjs
function Pi(e) {
	return Te(19) ? e : e ? "true" : void 0;
}
// node_modules/@base-ui/utils/useOnMount.mjs
function Fi(e) {
	D.useEffect(e, ke);
}
// node_modules/@base-ui/utils/useAnimationFrame.mjs
var Ii = null;
globalThis.requestAnimationFrame;
var Li = new class {
	callbacks = [];
	callbacksCount = 0;
	nextId = 1;
	startId = 1;
	isScheduled = !1;
	tick = (e) => {
		this.isScheduled = !1;
		let t = this.callbacks, n = this.callbacksCount;
		if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for (let n = 0; n < t.length; n += 1) t[n]?.(e);
	};
	request(e) {
		let t = this.nextId;
		return this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1, this.isScheduled ||= (requestAnimationFrame(this.tick), !0), t;
	}
	cancel(e) {
		let t = e - this.startId;
		t < 0 || t >= this.callbacks.length || this.callbacks[t] !== null && (this.callbacks[t] = null, --this.callbacksCount);
	}
}(), Ri = class e {
	static create() {
		return new e();
	}
	static request(e) {
		return Li.request(e);
	}
	static cancel(e) {
		return Li.cancel(e);
	}
	currentId = Ii;
	request(e) {
		this.cancel(), this.currentId = Li.request(() => {
			this.currentId = Ii, e();
		});
	}
	cancel = () => {
		this.currentId !== Ii && (Li.cancel(this.currentId), this.currentId = Ii);
	};
	disposeEffect = () => this.cancel;
};
function zi() {
	let e = W(Ri.create).current;
	return Fi(e.disposeEffect), e;
}
// node_modules/@base-ui/react/utils/resolveRef.mjs
function Bi(e) {
	return e == null ? e : "current" in e ? e.current : e;
}
// node_modules/@base-ui/react/utils/getFiniteAnimations.mjs
function Vi(e, t) {
	return e.getAnimations(t).filter((e) => {
		let t = e.effect?.getTiming();
		return t?.duration !== Infinity && t?.iterations !== Infinity;
	});
}
// node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
var Hi = /* @__PURE__ */ c(m(), 1), Ui = null;
function Wi(e) {
	if (!Ui) {
		let e = [];
		Ui = e, queueMicrotask(() => {
			Ui = null, Hi.flushSync(() => {
				for (let t of e) t();
			});
		});
	}
	Ui.push(e);
}
function Gi(e, t = !1, n = !1) {
	let r = zi();
	return G((i, a = null) => {
		r.cancel();
		let o = Bi(e);
		if (o == null) return;
		let s = o, c = () => {
			n ? Wi(() => {
				a?.aborted || i();
			}) : Hi.flushSync(i);
		};
		if (typeof s.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
			i();
			return;
		}
		function l() {
			Promise.all(Vi(s).map((e) => e.finished.then(Oe))).then(() => {
				a?.aborted || c();
			}, () => {
				a?.aborted || (Vi(s).some((e) => e.pending || e.playState !== "finished") ? l() : c());
			});
		}
		if (t) {
			let e = Jn;
			if (!s.hasAttribute(e)) {
				r.request(l);
				return;
			}
			let t = new MutationObserver(() => {
				s.hasAttribute(e) || (t.disconnect(), l());
			});
			t.observe(s, {
				attributes: !0,
				attributeFilter: [e]
			}), a?.addEventListener("abort", () => t.disconnect(), { once: !0 });
		} else r.request(l);
	});
}
// node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
function Ki(e) {
	let { enabled: t = !0, open: n, ref: r, batch: i = !1, onComplete: a } = e, o = G(a), s = Gi(r, n, i);
	D.useEffect(() => {
		if (!t) return;
		let e = new AbortController();
		return s(o, e.signal), () => {
			e.abort();
		};
	}, [
		t,
		n,
		o,
		s
	]);
}
// node_modules/@base-ui/react/internals/useTransitionStatus.mjs
function qi(e, t = !1, n = !1, r = !1) {
	let [i, a] = D.useState(e && t ? "idle" : void 0), [o, s] = D.useState(e && !r);
	return e && !o && (s(!0), a("starting")), !e && o && i !== "ending" && !n && a("ending"), !e && !o && i === "ending" && a(void 0), U(() => {
		if (!e && o && i !== "ending" && n) {
			let e = Ri.request(() => {
				a("ending");
			});
			return () => {
				Ri.cancel(e);
			};
		}
	}, [
		e,
		o,
		i,
		n
	]), U(() => {
		if (!e || t || i === void 0) return;
		let n = Ri.request(() => {
			a(void 0);
		});
		return () => {
			Ri.cancel(n);
		};
	}, [
		t,
		e,
		i
	]), U(() => {
		if (!e || !t) return;
		e && o && i !== "idle" && a("starting");
		let n = Ri.request(() => {
			a("idle");
		});
		return () => {
			Ri.cancel(n);
		};
	}, [
		t,
		e,
		o,
		i
	]), {
		mounted: o,
		setMounted: s,
		transitionStatus: i
	};
}
// node_modules/@base-ui/utils/isElementDisabled.mjs
function Ji(e) {
	return e == null || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true";
}
// node_modules/@base-ui/react/internals/composite/composite.mjs
var Yi = "ArrowUp", Xi = "ArrowDown", Zi = "ArrowLeft", q = "ArrowRight", Qi = /* @__PURE__ */ new Set([
	Yi,
	Xi,
	Zi,
	q,
	"Home",
	"End"
]), $i = [
	"Shift",
	"Control",
	"Alt",
	"Meta"
];
function ea(e) {
	return Bt(e) && e.tagName === "INPUT";
}
function ta(e) {
	return !!(ea(e) && e.selectionStart != null || Bt(e) && e.tagName === "TEXTAREA");
}
function na(e, t, n, r) {
	if (!e || !t || !t.scrollTo) return;
	let i = e.scrollLeft, a = e.scrollTop, o = e.clientWidth < e.scrollWidth, s = e.clientHeight < e.scrollHeight;
	if (o && r !== "vertical") {
		let r = ra(e, t, "left"), a = ia(e), o = ia(t);
		n === "ltr" && (r + t.offsetWidth + o.scrollMarginRight > e.scrollLeft + e.clientWidth - a.scrollPaddingRight ? i = r + t.offsetWidth + o.scrollMarginRight - e.clientWidth + a.scrollPaddingRight : r - o.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft && (i = r - o.scrollMarginLeft - a.scrollPaddingLeft)), n === "rtl" && (r - o.scrollMarginLeft < e.scrollLeft + a.scrollPaddingLeft ? i = r - o.scrollMarginLeft - a.scrollPaddingLeft : r + t.offsetWidth + o.scrollMarginRight > e.scrollLeft + e.clientWidth - a.scrollPaddingRight && (i = r + t.offsetWidth + o.scrollMarginRight - e.clientWidth + a.scrollPaddingRight));
	}
	if (s && r !== "horizontal") {
		let n = ra(e, t, "top"), r = ia(e), i = ia(t);
		n - i.scrollMarginTop < e.scrollTop + r.scrollPaddingTop ? a = n - i.scrollMarginTop - r.scrollPaddingTop : n + t.offsetHeight + i.scrollMarginBottom > e.scrollTop + e.clientHeight - r.scrollPaddingBottom && (a = n + t.offsetHeight + i.scrollMarginBottom - e.clientHeight + r.scrollPaddingBottom);
	}
	e.scrollTo({
		left: i,
		top: a,
		behavior: "auto"
	});
}
function ra(e, t, n) {
	let r = n === "left" ? "offsetLeft" : "offsetTop", i = 0;
	for (; t.offsetParent && (i += t[r], t.offsetParent !== e);) t = t.offsetParent;
	return i;
}
function ia(e) {
	let t = getComputedStyle(e);
	return {
		scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
		scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
		scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
		scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
		scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
		scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
		scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
		scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0
	};
}
// node_modules/@base-ui/react/internals/composite/root/useCompositeRoot.mjs
function aa(e) {
	let { loopFocus: t = !0, orientation: n = "both", grid: r, onLoop: i, direction: a, highlightedIndex: o, onHighlightedIndexChange: s, rootRef: c, enableHomeAndEndKeys: l = !1, stopEventPropagation: u, disabledIndices: d, modifierKeys: f = ke } = e, [p, m] = D.useState(0), h = r != null, g = D.useRef(null), _ = ve(g, c), v = D.useRef([]), y = D.useRef(!1), b = D.useRef(null), x = o ?? p, S = G((e, t = !1) => {
		if (b.current = v.current[e] ?? null, (s ?? m)(e), t) {
			let t = v.current[e];
			na(g.current, t, a, n);
		}
	}), C = G((e) => {
		if (e.size === 0) return;
		if (y.current) {
			let e = v.current, t = e.indexOf(b.current);
			if (t === -1) {
				let t = e[x];
				!t || ri(e, x, d) ? S(oa(e, d)) : b.current = t;
			} else t !== x && S(t);
			return;
		}
		y.current = !0;
		let t = Array.from(e.keys()), r = t.find((e) => e?.hasAttribute("data-composite-item-active")) ?? null, i = r ? e.get(r)?.index ?? -1 : -1;
		if (i !== -1) S(i);
		else if (ri(t, x, d)) {
			let e = ni(t, { disabledIndices: d });
			Qr(t, e) || S(e);
		}
		na(g.current, r, a, n);
	});
	U(() => {
		if (d == null || o != null || !y.current) return;
		let e = v.current;
		if (ri(e, x, d)) {
			let t = ni(e, { disabledIndices: d });
			Qr(e, t) || S(t);
		}
	}, [
		d,
		o,
		x,
		v,
		S
	]);
	let w = G((e, t, n) => i ? i(e, t, n, v) : n), T = G((e) => {
		let o = e.key === "Home" || e.key === "End";
		if (!Qi.has(e.key) || !l && o || sa(e, f) || !g.current) return;
		let s = a === "rtl", c = s ? Zi : q, p = s ? q : Zi, m = n === "vertical" ? Xi : c, _ = n === "vertical" ? Yi : p, y = Hn(e.nativeEvent);
		if (y != null && ta(y) && !Ji(y)) {
			let t = y.selectionStart, n = y.selectionEnd, r = y.value;
			if (t == null || e.shiftKey || t !== n || e.key !== _ && t < r.length || e.key !== m && t > 0) return;
		}
		let b = x, C = $r(v, d), T = ei(v, d);
		r != null && (b = r({
			disabledIndices: d,
			elementsRef: v,
			event: e,
			highlightedIndex: x,
			loopFocus: t,
			maxIndex: T,
			minIndex: C,
			onLoop: w,
			orientation: n,
			rtl: s
		}));
		let E = n !== "vertical" && e.key === c || n !== "horizontal" && e.key === "ArrowDown", D = n !== "vertical" && e.key === p || n !== "horizontal" && e.key === "ArrowUp";
		l && (e.key === "Home" ? b = C : e.key === "End" && (b = T)), b === x && (E || D) && (t && b === T && E ? (b = C, i && (b = i(e, x, b, v))) : t && b === C && D ? (b = T, i && (b = i(e, x, b, v))) : b = ni(v.current, {
			startingIndex: b,
			decrement: D,
			disabledIndices: d
		})), b !== x && !Qr(v.current, b) && (u && e.stopPropagation(), (h || o || E || D) && e.preventDefault(), S(b, !0), queueMicrotask(() => {
			v.current[b]?.focus();
		}));
	});
	return {
		props: {
			ref: _,
			onFocus(e) {
				let t = g.current, n = Hn(e.nativeEvent);
				t && n != null && ta(n) && n.setSelectionRange(0, n.value.length);
			},
			onKeyDown: T
		},
		highlightedIndex: x,
		onHighlightedIndexChange: S,
		elementsRef: v,
		onMapChange: C,
		relayKeyboardEvent: T
	};
}
function oa(e, t) {
	let n = -1;
	for (let r = 0; r < e.length; r += 1) {
		let i = e[r];
		if (i && !ri(e, r, t)) {
			if (i.hasAttribute("data-composite-item-active")) return r;
			n === -1 && (n = r);
		}
	}
	return Math.max(n, 0);
}
function sa(e, t) {
	for (let n of $i) if (!t.includes(n) && e.getModifierState(n)) return !0;
	return !1;
}
// node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
var ca = /*#__PURE__*/ D.createContext(void 0);
function la() {
	return D.useContext(ca)?.direction ?? "ltr";
}
// node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
function ua(e) {
	let { render: t, className: n, style: r, refs: i = ke, props: a = ke, state: o = Ae, stateAttributesMapping: s, highlightedIndex: c, onHighlightedIndexChange: l, orientation: u, grid: d, loopFocus: f, onLoop: p, enableHomeAndEndKeys: m, onMapChange: h, stopEventPropagation: g = !0, rootRef: _, disabledIndices: v, modifierKeys: y, highlightItemOnHover: b = !1, tag: x = "div", ...S } = e, { props: C, highlightedIndex: w, onHighlightedIndexChange: T, elementsRef: E, onMapChange: O, relayKeyboardEvent: k } = aa({
		grid: d,
		loopFocus: f,
		onLoop: p,
		orientation: u,
		highlightedIndex: c,
		onHighlightedIndexChange: l,
		rootRef: _,
		stopEventPropagation: g,
		enableHomeAndEndKeys: m,
		direction: la(),
		disabledIndices: v,
		modifierKeys: y
	}), A = Je(x, e, {
		state: o,
		ref: i,
		props: [
			C,
			...a,
			S
		],
		stateAttributesMapping: s
	}), j = D.useMemo(() => ({
		highlightedIndex: w,
		onHighlightedIndexChange: T,
		highlightItemOnHover: b,
		relayKeyboardEvent: k
	}), [
		w,
		T,
		b,
		k
	]);
	return /*#__PURE__*/ (0, K.jsx)(pn.Provider, {
		value: j,
		children: /*#__PURE__*/ (0, K.jsx)(it, {
			elementsRef: E,
			onMapChange: (e) => {
				h?.(e), O(e);
			},
			children: A
		})
	});
}
// node_modules/@base-ui/react/tabs/list/TabsList.mjs
var da = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { activateOnFocus: n = !1, className: r, loopFocus: i = !0, render: a, style: o, ...s } = e, { orientation: c, setTabMap: l, tabActivationDirection: u } = mt(), [d, f] = D.useState(0), [p, m] = D.useState(null), h = D.useRef(/* @__PURE__ */ new Set()), g = D.useRef(/* @__PURE__ */ new Set()), _ = D.useRef(null);
	U(() => {
		if (typeof ResizeObserver > "u") return;
		let e = new ResizeObserver(() => {
			h.current.forEach((e) => {
				e();
			});
		});
		return _.current = e, p && e.observe(p), g.current.forEach((t) => {
			e.observe(t);
		}), () => {
			e.disconnect(), _.current = null;
		};
	}, [p]);
	let v = G((e) => (h.current.add(e), () => {
		h.current.delete(e);
	})), y = G((e) => (g.current.add(e), _.current?.observe(e), () => {
		g.current.delete(e), _.current?.unobserve(e);
	})), b = {
		orientation: c,
		tabActivationDirection: u
	}, x = {
		"aria-orientation": c === "vertical" ? "vertical" : void 0,
		role: "tablist"
	}, S = D.useMemo(() => ({
		activateOnFocus: n,
		registerIndicatorUpdateListener: v,
		registerTabResizeObserverElement: y,
		tabsListElement: p
	}), [
		n,
		v,
		y,
		p
	]);
	return /*#__PURE__*/ (0, K.jsx)(Cn.Provider, {
		value: S,
		children: /*#__PURE__*/ (0, K.jsx)(ua, {
			render: a,
			className: r,
			style: o,
			state: b,
			refs: [t, m],
			props: [x, s],
			stateAttributesMapping: gt,
			highlightedIndex: d,
			enableHomeAndEndKeys: !0,
			loopFocus: i,
			orientation: c,
			onHighlightedIndexChange: f,
			onMapChange: l,
			disabledIndices: ke
		})
	});
}), fa = g();
function pa(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = pa(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function ma() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = pa(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/class-variance-authority/dist/index.mjs
var ha = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ga = ma, _a = (e, t) => (n) => {
	if (t?.variants == null) return ga(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = ha(t) || ha(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return ga(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, va = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, ya = (e, t) => ({
	classGroupId: e,
	validator: t
}), ba = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), xa = "-", Sa = [], Ca = "arbitrary..", wa = (e) => {
	let t = Da(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Ea(e);
			let n = e.split(xa);
			return Ta(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? va(i, t) : t : i || Sa;
			}
			return n[e] || Sa;
		}
	};
}, Ta = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Ta(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(xa) : e.slice(t).join(xa), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Ea = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Ca + r : void 0;
})(), Da = (e) => {
	let { theme: t, classGroups: n } = e;
	return Oa(n, t);
}, Oa = (e, t) => {
	let n = ba();
	for (let r in e) {
		let i = e[r];
		ka(i, n, r, t);
	}
	return n;
}, ka = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Aa(i, t, n, r);
	}
}, Aa = (e, t, n, r) => {
	typeof e == "string" ? ja(e, t, n) : typeof e == "function" ? Ma(e, t, n, r) : Na(e, t, n, r);
}, ja = (e, t, n) => {
	let r = e === "" ? t : Pa(t, e);
	r.classGroupId = n;
}, Ma = (e, t, n, r) => {
	Fa(e) ? ka(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(ya(n, e)));
}, Na = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		ka(o, Pa(t, a), n, r);
	}
}, Pa = (e, t) => {
	let n = e, r = t.split(xa), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = ba(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Fa = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ia = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, La = "!", Ra = ":", za = [], Ba = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Va = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Ra) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(La) ? (c = s.slice(0, -1), l = !0) : s.startsWith(La) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Ba(t, l, c, u);
	};
	if (t) {
		let e = t + Ra, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Ba(za, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Ha = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, Ua = (e) => ({
	cache: Ia(e.cacheSize),
	parseClassName: Va(e),
	sortModifiers: Ha(e),
	postfixLookupClassGroupIds: Wa(e),
	...wa(e)
}), Wa = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, Ga = /\s+/, Ka = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(Ga), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h || (g = r(p), !g)) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + La : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, qa = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Ja(n)) && (i && (i += " "), i += r);
	return i;
}, Ja = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Ja(e[r])) && (n && (n += " "), n += t);
	return n;
}, Ya = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Ua(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Ka(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(qa(...e));
}, Xa = [], Za = (e) => {
	let t = (t) => t[e] || Xa;
	return t.isThemeGetter = !0, t.themeKey = e, t;
}, Qa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $a = /^\((?:(\w[\w-]*):)?(.+)\)$/i, eo = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, to = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, no = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ro = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, io = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ao = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, oo = (e) => eo.test(e), J = (e) => !!e && !Number.isNaN(Number(e)), so = (e) => !!e && Number.isInteger(Number(e)), co = (e) => e.endsWith("%") && J(e.slice(0, -1)), lo = (e) => to.test(e), uo = () => !0, fo = (e) => no.test(e) && !ro.test(e), po = () => !1, mo = (e) => io.test(e), ho = (e) => ao.test(e), go = (e) => !Y(e) && !X(e), _o = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), vo = (e) => Z(e, Io, po), Y = (e) => Qa.test(e), yo = (e) => Z(e, Lo, fo), bo = (e) => Z(e, Ro, J), xo = (e) => Z(e, Bo, uo), So = (e) => Z(e, zo, po), Co = (e) => Z(e, Po, po), wo = (e) => Z(e, Fo, ho), To = (e) => Z(e, Vo, mo), X = (e) => $a.test(e), Eo = (e) => No(e, Lo), Do = (e) => No(e, zo), Oo = (e) => No(e, Po), ko = (e) => No(e, Io), Ao = (e) => No(e, Fo), jo = (e) => No(e, Vo, !0), Mo = (e) => No(e, Bo, !0), Z = (e, t, n) => {
	let r = Qa.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, No = (e, t, n = !1) => {
	let r = $a.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Po = (e) => e === "position" || e === "percentage", Fo = (e) => e === "image" || e === "url", Io = (e) => e === "length" || e === "size" || e === "bg-size", Lo = (e) => e === "length", Ro = (e) => e === "number", zo = (e) => e === "family-name", Bo = (e) => e === "number" || e === "weight", Vo = (e) => e === "shadow", Ho = /*#__PURE__*/ Ya(() => {
	let e = Za("color"), t = Za("font"), n = Za("text"), r = Za("font-weight"), i = Za("tracking"), a = Za("leading"), o = Za("breakpoint"), s = Za("container"), c = Za("spacing"), l = Za("radius"), u = Za("shadow"), d = Za("inset-shadow"), f = Za("text-shadow"), p = Za("drop-shadow"), m = Za("blur"), h = Za("perspective"), g = Za("aspect"), _ = Za("ease"), v = Za("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		X,
		Y
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		X,
		Y,
		c
	], T = () => [
		oo,
		"full",
		"auto",
		...w()
	], E = () => [
		so,
		"none",
		"subgrid",
		X,
		Y
	], D = () => [
		"auto",
		{ span: [
			"full",
			so,
			X,
			Y
		] },
		so,
		X,
		Y
	], O = () => [
		so,
		"auto",
		X,
		Y
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		X,
		Y
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		oo,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		s,
		oo,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		oo,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], I = () => [
		e,
		X,
		Y
	], L = () => [
		...b(),
		Oo,
		Co,
		{ position: [X, Y] }
	], ee = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], R = () => [
		"auto",
		"cover",
		"contain",
		ko,
		vo,
		{ size: [X, Y] }
	], te = () => [
		co,
		Eo,
		yo
	], z = () => [
		"",
		"none",
		"full",
		l,
		X,
		Y
	], ne = () => [
		"",
		J,
		Eo,
		yo
	], B = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], re = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], ie = () => [
		J,
		co,
		Oo,
		Co
	], V = () => [
		"",
		"none",
		m,
		X,
		Y
	], ae = () => [
		"none",
		J,
		X,
		Y
	], oe = () => [
		"none",
		J,
		X,
		Y
	], se = () => [
		J,
		X,
		Y
	], ce = () => [
		oo,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [lo],
			breakpoint: [lo],
			color: [uo],
			container: [lo],
			"drop-shadow": [lo],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [go],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [lo],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [lo],
			shadow: [lo],
			spacing: ["px", J],
			text: [lo],
			"text-shadow": [lo],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				oo,
				Y,
				X,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				X,
				Y
			] }],
			"container-named": [_o],
			columns: [{ columns: [
				J,
				"auto",
				Y,
				X,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				so,
				"auto",
				X,
				Y
			] }],
			basis: [{ basis: [
				oo,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				J,
				oo,
				"auto",
				"initial",
				"none",
				Y
			] }],
			grow: [{ grow: [
				"",
				J,
				X,
				Y
			] }],
			shrink: [{ shrink: [
				"",
				J,
				X,
				Y
			] }],
			order: [{ order: [
				so,
				"first",
				"last",
				"none",
				X,
				Y
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Eo,
				yo
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Mo,
				xo
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				co,
				Y
			] }],
			"font-family": [{ font: [
				Do,
				So,
				t
			] }],
			"font-features": [{ "font-features": [Y] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				X,
				Y
			] }],
			"line-clamp": [{ "line-clamp": [
				J,
				"none",
				X,
				bo
			] }],
			leading: [{ leading: [
				"none",
				a,
				...w()
			] }],
			"list-image": [{ "list-image": [
				"none",
				X,
				Y
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				X,
				Y
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...B(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				J,
				"from-font",
				"auto",
				X,
				yo
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				J,
				"auto",
				X,
				Y
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				so,
				X,
				Y
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				X,
				Y
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				X,
				Y
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: L() }],
			"bg-repeat": [{ bg: ee() }],
			"bg-size": [{ bg: R() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						so,
						X,
						Y
					],
					radial: [
						"",
						X,
						Y
					],
					conic: [
						"",
						so,
						X,
						Y
					]
				},
				Ao,
				wo
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: te() }],
			"gradient-via-pos": [{ via: te() }],
			"gradient-to-pos": [{ to: te() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: z() }],
			"rounded-s": [{ "rounded-s": z() }],
			"rounded-e": [{ "rounded-e": z() }],
			"rounded-t": [{ "rounded-t": z() }],
			"rounded-r": [{ "rounded-r": z() }],
			"rounded-b": [{ "rounded-b": z() }],
			"rounded-l": [{ "rounded-l": z() }],
			"rounded-ss": [{ "rounded-ss": z() }],
			"rounded-se": [{ "rounded-se": z() }],
			"rounded-ee": [{ "rounded-ee": z() }],
			"rounded-es": [{ "rounded-es": z() }],
			"rounded-tl": [{ "rounded-tl": z() }],
			"rounded-tr": [{ "rounded-tr": z() }],
			"rounded-br": [{ "rounded-br": z() }],
			"rounded-bl": [{ "rounded-bl": z() }],
			"border-w": [{ border: ne() }],
			"border-w-x": [{ "border-x": ne() }],
			"border-w-y": [{ "border-y": ne() }],
			"border-w-s": [{ "border-s": ne() }],
			"border-w-e": [{ "border-e": ne() }],
			"border-w-bs": [{ "border-bs": ne() }],
			"border-w-be": [{ "border-be": ne() }],
			"border-w-t": [{ "border-t": ne() }],
			"border-w-r": [{ "border-r": ne() }],
			"border-w-b": [{ "border-b": ne() }],
			"border-w-l": [{ "border-l": ne() }],
			"divide-x": [{ "divide-x": ne() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": ne() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...B(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...B(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...B(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				J,
				X,
				Y
			] }],
			"outline-w": [{ outline: [
				"",
				J,
				Eo,
				yo
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				u,
				jo,
				To
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				jo,
				To
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: ne() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [J, yo] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": ne() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				jo,
				To
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				J,
				X,
				Y
			] }],
			"mix-blend": [{ "mix-blend": [
				...re(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": re() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [J] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": ie() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": ie() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": ie() }],
			"mask-image-t-to-pos": [{ "mask-t-to": ie() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": ie() }],
			"mask-image-r-to-pos": [{ "mask-r-to": ie() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": ie() }],
			"mask-image-b-to-pos": [{ "mask-b-to": ie() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": ie() }],
			"mask-image-l-to-pos": [{ "mask-l-to": ie() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": ie() }],
			"mask-image-x-to-pos": [{ "mask-x-to": ie() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": ie() }],
			"mask-image-y-to-pos": [{ "mask-y-to": ie() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [X, Y] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": ie() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": ie() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [J] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": ie() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": ie() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: L() }],
			"mask-repeat": [{ mask: ee() }],
			"mask-size": [{ mask: R() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				X,
				Y
			] }],
			filter: [{ filter: [
				"",
				"none",
				X,
				Y
			] }],
			blur: [{ blur: V() }],
			brightness: [{ brightness: [
				J,
				X,
				Y
			] }],
			contrast: [{ contrast: [
				J,
				X,
				Y
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				jo,
				To
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				J,
				X,
				Y
			] }],
			"hue-rotate": [{ "hue-rotate": [
				J,
				X,
				Y
			] }],
			invert: [{ invert: [
				"",
				J,
				X,
				Y
			] }],
			saturate: [{ saturate: [
				J,
				X,
				Y
			] }],
			sepia: [{ sepia: [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				X,
				Y
			] }],
			"backdrop-blur": [{ "backdrop-blur": V() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				J,
				X,
				Y
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				J,
				X,
				Y
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				J,
				X,
				Y
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				J,
				X,
				Y
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				J,
				X,
				Y
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				J,
				X,
				Y
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				X,
				Y
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				J,
				"initial",
				X,
				Y
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				X,
				Y
			] }],
			delay: [{ delay: [
				J,
				X,
				Y
			] }],
			animate: [{ animate: [
				"none",
				v,
				X,
				Y
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				X,
				Y
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: ae() }],
			"rotate-x": [{ "rotate-x": ae() }],
			"rotate-y": [{ "rotate-y": ae() }],
			"rotate-z": [{ "rotate-z": ae() }],
			scale: [{ scale: oe() }],
			"scale-x": [{ "scale-x": oe() }],
			"scale-y": [{ "scale-y": oe() }],
			"scale-z": [{ "scale-z": oe() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: se() }],
			"skew-x": [{ "skew-x": se() }],
			"skew-y": [{ "skew-y": se() }],
			transform: [{ transform: [
				X,
				Y,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ce() }],
			"translate-x": [{ "translate-x": ce() }],
			"translate-y": [{ "translate-y": ce() }],
			"translate-z": [{ "translate-z": ce() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				so,
				X,
				Y
			] }],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				X,
				Y
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": I() }],
			"scrollbar-track-color": [{ "scrollbar-track": I() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				X,
				Y
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				J,
				Eo,
				yo,
				bo
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": [
				"start",
				"end",
				"right",
				"left"
			],
			"inset-y": [
				"inset-bs",
				"inset-be",
				"top",
				"bottom"
			],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: [
				"ps",
				"pe",
				"pr",
				"pl"
			],
			py: [
				"pbs",
				"pbe",
				"pt",
				"pb"
			],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: [
				"ms",
				"me",
				"mr",
				"ml"
			],
			my: [
				"mbs",
				"mbe",
				"mt",
				"mb"
			],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": [
				"border-w-s",
				"border-w-e",
				"border-w-r",
				"border-w-l"
			],
			"border-w-y": [
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-b"
			],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": [
				"border-color-s",
				"border-color-e",
				"border-color-r",
				"border-color-l"
			],
			"border-color-y": [
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-b"
			],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": [
				"scroll-ms",
				"scroll-me",
				"scroll-mr",
				"scroll-ml"
			],
			"scroll-my": [
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mb"
			],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": [
				"scroll-ps",
				"scroll-pe",
				"scroll-pr",
				"scroll-pl"
			],
			"scroll-py": [
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pb"
			],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
// src/lib/utils.ts
function Uo(...e) {
	return Ho(ma(e));
}
// src/components/ui/tabs.tsx
function Wo({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ (0, K.jsx)(jt, {
		"data-slot": "tabs",
		"data-orientation": t,
		className: Uo("group/tabs flex gap-2 data-horizontal:flex-col", e),
		...n
	});
}
var Go = _a("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Ko({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ (0, K.jsx)(da, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: Uo(Go({ variant: t }), e),
		...n
	});
}
function qo({ className: e, ...t }) {
	return /* @__PURE__ */ (0, K.jsx)(Oi, {
		"data-slot": "tabs-trigger",
		className: Uo("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", e),
		...t
	});
}
// node_modules/@base-ui/react/use-render/useRender.mjs
function Jo(e) {
	return Je(e.defaultTagName ?? "div", e, e);
}
// src/components/ui/badge.tsx
var Yo = _a("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Xo({ className: e, variant: t = "default", render: n, ...r }) {
	return Jo({
		defaultTagName: "span",
		props: Fe({ className: Uo(Yo({ variant: t }), e) }, r),
		render: n,
		state: {
			slot: "badge",
			variant: t
		}
	});
}
// node_modules/@base-ui/utils/visuallyHidden.mjs
var Zo = {
	clipPath: "inset(50%)",
	overflow: "hidden",
	whiteSpace: "nowrap",
	border: 0,
	padding: 0,
	width: 1,
	height: 1,
	margin: -1
}, Qo = {
	...Zo,
	position: "fixed",
	margin: 0,
	top: 0,
	left: 0
}, $o = {
	...Zo,
	position: "absolute"
};
// node_modules/@base-ui/utils/useOnFirstRender.mjs
function es(e) {
	let t = D.useRef(!0);
	t.current && (t.current = !1, e());
}
// node_modules/@base-ui/utils/usePreviousValue.mjs
function ts(e) {
	let [t, n] = D.useState({
		current: e,
		previous: null
	});
	return Object.is(e, t.current) || n({
		current: e,
		previous: t.current
	}), t.previous;
}
// node_modules/@base-ui/utils/useValueAsRef.mjs
function ns(e) {
	let t = W(rs, e).current;
	return t.next = e, U(t.effect), t;
}
function rs(e) {
	let t = {
		current: e,
		next: e,
		effect: () => {
			t.current = t.next;
		}
	};
	return t;
}
// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
var is = /* @__PURE__ */ o(((e) => {
	var t = u(), n = Ai();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), as = /* @__PURE__ */ o(((e, t) => {
	t.exports = is();
})), os = [], ss = void 0;
function cs() {
	return ss;
}
function ls(e) {
	os.push(e);
}
// node_modules/@base-ui/utils/store/useStore.mjs
var us = Ai(), ds = as(), fs = Te(19) ? hs : gs;
function ps(e, t, n, r, i) {
	return fs(e, t, n, r, i);
}
function ms(e, t, n, r, i) {
	let a = D.useCallback(() => t(e.getSnapshot(), n, r, i), [
		e,
		t,
		n,
		r,
		i
	]);
	return (0, us.useSyncExternalStore)(e.subscribe, a, a);
}
ls({
	before(e) {
		e.syncIndex = 0, e.didInitialize || (e.syncTick = 1, e.syncHooks = [], e.didChangeStore = !0, e.getSnapshot = () => {
			let t = !1;
			for (let n = 0; n < e.syncHooks.length; n += 1) {
				let r = e.syncHooks[n], i = r.selector(r.store.state, r.a1, r.a2, r.a3);
				Object.is(r.value, i) || (t = !0, r.value = i);
			}
			return t && (e.syncTick += 1), e.syncTick;
		});
	},
	after(e) {
		e.syncHooks.length > 0 && (e.didChangeStore && (e.didChangeStore = !1, e.subscribe = (t) => {
			let n = /* @__PURE__ */ new Set();
			for (let t of e.syncHooks) n.add(t.store);
			let r = [];
			for (let e of n) r.push(e.subscribe(t));
			return () => {
				for (let e of r) e();
			};
		}), (0, us.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
	}
});
function hs(e, t, n, r, i) {
	let a = cs();
	if (!a) return ms(e, t, n, r, i);
	let o = a.syncIndex;
	a.syncIndex += 1;
	let s;
	return a.didInitialize ? (s = a.syncHooks[o], s.store === e && s.selector === t && Object.is(s.a1, n) && Object.is(s.a2, r) && Object.is(s.a3, i) || (s.store !== e && (a.didChangeStore = !0), s.store = e, s.selector = t, s.a1 = n, s.a2 = r, s.a3 = i, s.value = t(e.getSnapshot(), n, r, i))) : (s = {
		store: e,
		selector: t,
		a1: n,
		a2: r,
		a3: i,
		value: t(e.getSnapshot(), n, r, i)
	}, a.syncHooks.push(s)), s.value;
}
function gs(e, t, n, r, i) {
	return (0, ds.useSyncExternalStoreWithSelector)(e.subscribe, e.getSnapshot, e.getSnapshot, (e) => t(e, n, r, i));
}
// node_modules/@base-ui/utils/store/Store.mjs
var _s = class {
	static create(e) {
		return new this(e);
	}
	constructor(e) {
		this.state = e, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
	}
	subscribe = (e) => (this.listeners.add(e), () => {
		this.listeners.delete(e);
	});
	getSnapshot = () => this.state;
	setState(e) {
		if (this.state === e) return;
		this.state = e, this.updateTick += 1;
		let t = this.updateTick;
		for (let n of this.listeners) {
			if (t !== this.updateTick) return;
			n(e);
		}
	}
	update(e) {
		for (let t in e) if (!Object.is(this.state[t], e[t])) {
			this.setState({
				...this.state,
				...e
			});
			return;
		}
	}
	set(e, t) {
		Object.is(this.state[e], t) || this.setState({
			...this.state,
			[e]: t
		});
	}
	notifyAll() {
		let e = { ...this.state };
		this.setState(e);
	}
	use(e, t, n, r) {
		return ps(this, e, t, n, r);
	}
}, vs = class extends _s {
	constructor(e, t = {}, n) {
		super(e), this.context = t, this.selectors = n;
	}
	useSyncedValue(e, t) {
		D.useDebugValue(e);
		let n = this;
		U(() => {
			n.state[e] !== t && n.set(e, t);
		}, [
			n,
			e,
			t
		]);
	}
	useSyncedValueWithCleanup(e, t) {
		let n = this;
		U(() => (n.state[e] !== t && n.set(e, t), () => {
			n.set(e, void 0);
		}), [
			n,
			e,
			t
		]);
	}
	useSyncedValues(e) {
		let t = this;
		U(() => {
			t.update(e);
		}, [t, ...Object.values(e)]);
	}
	useControlledProp(e, t) {
		D.useDebugValue(e);
		let n = this, r = t !== void 0;
		U(() => {
			r && !Object.is(n.state[e], t) && n.setState({
				...n.state,
				[e]: t
			});
		}, [
			n,
			e,
			t,
			r
		]);
	}
	select(e, t, n, r) {
		let i = this.selectors[e];
		return i(this.state, t, n, r);
	}
	useState(e, t, n, r) {
		return D.useDebugValue(e), ps(this, this.selectors[e], t, n, r);
	}
	useContextCallback(e, t) {
		D.useDebugValue(e);
		let n = G(t ?? Oe);
		this.context[e] = n;
	}
	useStateSetter(e) {
		let t = D.useRef(void 0);
		return t.current === void 0 && (t.current = (t) => {
			this.set(e, t);
		}), t.current;
	}
	observe(e, t) {
		let n;
		n = typeof e == "function" ? e : this.selectors[e];
		let r = n(this.state);
		return t(r, r, this), this.subscribe((e) => {
			let i = n(e);
			if (!Object.is(r, i)) {
				let e = r;
				r = i, t(i, e, this);
			}
		});
	}
};
// node_modules/@base-ui/utils/mergeCleanups.mjs
function ys(...e) {
	return () => {
		for (let t = 0; t < e.length; t += 1) {
			let n = e[t];
			n && n();
		}
	};
}
// node_modules/@base-ui/utils/addEventListener.mjs
function bs(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
// node_modules/@base-ui/utils/useTimeout.mjs
var xs = 0, Ss = class e {
	static create() {
		return new e();
	}
	currentId = xs;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = xs, t();
		}, e);
	}
	isStarted() {
		return this.currentId !== xs;
	}
	clear = () => {
		this.currentId !== xs && (clearTimeout(this.currentId), this.currentId = xs);
	};
	disposeEffect = () => this.clear;
};
function Cs() {
	let e = W(Ss.create).current;
	return Fi(e.disposeEffect), e;
}
// node_modules/@base-ui/react/utils/FocusGuard.mjs
var ws = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let [n, r] = D.useState();
	U(() => {
		Ln && In && r("button");
	}, []);
	let i = {
		tabIndex: 0,
		role: n
	};
	return /*#__PURE__*/ (0, K.jsx)("span", {
		...e,
		ref: t,
		style: Qo,
		"aria-hidden": !n || void 0,
		...i,
		"data-base-ui-focus-guard": ""
	});
});
// node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function Ts(e) {
	return `data-base-ui-${e}`;
}
// node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var Es = 0;
function Ds(e, t = {}) {
	let { preventScroll: n = !1, sync: r = !1, shouldFocus: i } = t;
	cancelAnimationFrame(Es);
	function a() {
		(!i || i()) && e?.focus({ preventScroll: n });
	}
	if (r) return a(), Oe;
	let o = requestAnimationFrame(a);
	return Es = o, () => {
		Es === o && (cancelAnimationFrame(o), Es = 0);
	};
}
// node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var Os = "data-base-ui-inert", ks = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakSet(), js = /* @__PURE__ */ new WeakMap(), Ms = 0;
function Ns(e) {
	return e ? Vt(e) ? e.host : Ns(e.parentNode) : null;
}
var Ps = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = Ns(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null), Fs = (e) => {
	let t = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		let n = e;
		for (; n && !t.has(n);) t.add(n), n = n.parentNode;
	}), t;
}, Is = (e, t, n) => {
	let r = [], i = (e) => {
		e && !n.has(e) && Array.from(e.children).forEach((e) => {
			Ft(e) !== "script" && (t.has(e) ? i(e) : r.push(e));
		});
	};
	return i(e), r;
};
function Ls(e, t, n, { mark: r = !0 }) {
	let i = Ps(t, e), a = r ? Is(t, Fs(i), new Set(i)) : [], o = [], s = [];
	if (n) {
		let e = Ps(t, Array.from(t.querySelectorAll("[aria-live]"))), n = i.concat(e);
		Is(t, Fs(n), new Set(n)).forEach((e) => {
			let t = e.getAttribute("aria-hidden"), n = t !== null && t !== "false", r = (ks.get(e) || 0) + 1;
			ks.set(e, r), o.push(e), r === 1 && n && As.add(e), n || e.setAttribute("aria-hidden", "true");
		});
	}
	return r && a.forEach((e) => {
		let t = (js.get(e) || 0) + 1;
		js.set(e, t), s.push(e), t === 1 && e.setAttribute(Os, "");
	}), Ms += 1, () => {
		o.forEach((e) => {
			let t = (ks.get(e) || 0) - 1;
			ks.set(e, t), t || (As.has(e) || e.removeAttribute("aria-hidden"), As.delete(e));
		}), r && s.forEach((e) => {
			let t = (js.get(e) || 0) - 1;
			js.set(e, t), t || e.removeAttribute(Os);
		}), --Ms, Ms || (ks = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakSet(), js = /* @__PURE__ */ new WeakMap());
	};
}
function Rs(e, t = {}) {
	let { ariaHidden: n = !1, mark: r = !0 } = t, i = on(e[0]).body;
	return Ls(e, i, n, { mark: r });
}
// node_modules/@base-ui/react/internals/constants.mjs
var zs = { style: { transition: "none" } }, Bs = { fallbackAxisSide: "none" }, Vs = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
}, Hs = /*#__PURE__*/ D.createContext(null), Us = () => D.useContext(Hs), Ws = Ts("portal");
function Gs(e = {}) {
	let { ref: t, container: n, componentProps: r = Ae, elementProps: i } = e, a = dn(), o = Us()?.portalNode, [s, c] = D.useState(null), [l, u] = D.useState(null), d = G((e) => {
		e !== null && u(e);
	}), f = D.useRef(null);
	U(() => {
		if (n === null) {
			f.current && (f.current = null, u(null), c(null));
			return;
		}
		let e = (n && (Rt(n) ? n : n.current)) ?? o ?? document.body;
		e == null ? f.current && (f.current = null, u(null), c(null)) : f.current !== e && (f.current = e, u(null), c(e));
	}, [n, o]);
	let p = Je("div", r, {
		ref: [t, d],
		props: [{
			id: a,
			[Ws]: ""
		}, i]
	}), m = s && p ? /*#__PURE__*/ Hi.createPortal(p, s) : null;
	return {
		node: l,
		nodeId: /*#__PURE__*/ D.isValidElement(p) ? p.props.id : void 0,
		subtree: m
	};
}
var Ks = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, children: a, container: o, portalOwnerRole: s, ...c } = e, { node: l, nodeId: u, subtree: d } = Gs({
		container: o,
		ref: t,
		componentProps: e,
		elementProps: c
	}), f = D.useRef(null), p = D.useRef(null), m = D.useRef(null), h = D.useRef(null), [g, _] = D.useState(null), v = D.useRef(!1), y = g?.modal, b = g?.open, x = !!g && !g.modal && g.open && !!l;
	D.useEffect(() => {
		if (!l || y) return;
		function e(e) {
			l && e.relatedTarget && Ti(e) && (e.type === "focusin" ? v.current &&= (Di(l), !1) : (Ei(l), v.current = !0));
		}
		return ys(bs(l, "focusin", e, !0), bs(l, "focusout", e, !0));
	}, [l, y]), U(() => {
		l && b === !0 && v.current && (Di(l), v.current = !1);
	}, [b, l]);
	let S = D.useMemo(() => ({
		beforeOutsideRef: f,
		afterOutsideRef: p,
		beforeInsideRef: m,
		afterInsideRef: h,
		portalNode: l,
		setFocusManagerState: _
	}), [l]);
	return /*#__PURE__*/ (0, K.jsxs)(D.Fragment, { children: [d, /*#__PURE__*/ (0, K.jsxs)(Hs.Provider, {
		value: S,
		children: [
			x && l && /*#__PURE__*/ (0, K.jsx)(ws, {
				"data-type": "outside",
				ref: f,
				onFocus: (e) => {
					Ti(e, l) ? m.current?.focus() : wi(g ? g.domReference : null)?.focus();
				}
			}),
			x && l && /*#__PURE__*/ (0, K.jsx)("span", {
				role: s,
				"aria-owns": u,
				style: Vs
			}),
			l && /*#__PURE__*/ Hi.createPortal(a, l),
			x && l && /*#__PURE__*/ (0, K.jsx)(ws, {
				"data-type": "outside",
				ref: p,
				onFocus: (e) => {
					Ti(e, l) ? h.current?.focus() : (Ci(g ? g.domReference : null)?.focus(), g?.closeOnFocusOut && g?.onOpenChange(!1, _t("focus-out", e.nativeEvent)));
				}
			})
		]
	})] });
});
// node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function qs() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			e.get(t)?.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			e.get(t)?.delete(n);
		}
	};
}
// node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var Js = /*#__PURE__*/ D.createContext(null), Ys = /*#__PURE__*/ D.createContext(null), Xs = () => D.useContext(Js)?.id || null, Zs = (e) => {
	let t = D.useContext(Ys);
	return e ?? t;
};
// node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
function Qs(e, t) {
	let n = It(Hn(e));
	return e instanceof n.KeyboardEvent ? "keyboard" : e instanceof n.FocusEvent ? t || "keyboard" : "pointerType" in e ? e.pointerType || (xr(e) ? "keyboard" : t || "mouse") : "touches" in e ? "touch" : e instanceof n.MouseEvent ? t || (e.detail === 0 ? "keyboard" : "mouse") : "";
}
var $s = 20, ec = [];
function tc() {
	ec = ec.filter((e) => e.deref()?.isConnected);
}
function nc(e) {
	tc(), e && Ft(e) !== "body" && (ec.push(new WeakRef(e)), ec.length > $s && (ec = ec.slice(-20)));
}
function rc() {
	return tc(), ec[ec.length - 1]?.deref();
}
function ic(e) {
	return e ? yi(e) ? e : xi(e)[0] || e : null;
}
function ac(e) {
	if (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex") || !e.getAttribute("role")?.includes("dialog")) return;
	let t = bi(e).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return yi(e) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), n = e.getAttribute("tabindex");
	t.length === 0 ? n !== "0" && (e.setAttribute("tabindex", "0"), e.setAttribute("data-tabindex", "0")) : (n !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
function oc(e) {
	let { context: t, children: n, disabled: r = !1, initialFocus: i = !0, returnFocus: a = !0, explicitReturnFocus: o, restoreFocus: s = !1, modal: c = !0, closeOnFocusOut: l = !0, openInteractionType: u = "", nextFocusableElement: d, previousFocusableElement: f, beforeContentFocusGuardRef: p, externalTree: m, getInsideElements: h } = e, g = t.useState("open"), _ = t.useState("domReferenceElement"), v = t.useState("floatingElement"), { events: y, dataRef: b } = t.context, x = G(() => b.current.floatingContext?.nodeId), S = i === !1, C = hr(_) && S, w = ns(i), T = ns(a), E = ns(o), O = ns(u), k = ns(g), A = Zs(m), j = Us(), M = D.useRef(!1), N = D.useRef(!1), P = D.useRef(!1), F = D.useRef(null), I = D.useRef(""), L = D.useRef(""), ee = D.useRef(null), R = D.useRef(null), te = ve(ee, p, j?.beforeInsideRef), z = ve(R, j?.afterInsideRef), ne = Cs(), B = Cs(), re = zi(), ie = j != null, V = gr(v), ae = G((e = V) => e ? xi(e) : []), oe = G(() => h?.().filter((e) => e != null) ?? []);
	D.useEffect(() => {
		if (r || !c) return;
		function e(e) {
			e.key === "Tab" && Bn(V, zn(on(V))) && ae().length === 0 && !C && yr(e);
		}
		return bs(on(V), "keydown", e);
	}, [
		r,
		V,
		c,
		C,
		ae
	]), D.useEffect(() => {
		if (r || !g) return;
		let e = on(V);
		function t() {
			P.current = !1;
		}
		function n(e) {
			let t = Hn(e), n = oe(), r = Bn(v, t) || Bn(_, t) || Bn(j?.portalNode, t) || n.some((e) => e === t || Bn(e, t));
			P.current = !r, L.current = e.pointerType || "keyboard", Vn(t, "[data-base-ui-click-trigger]") && (N.current = !0, B.start(0, () => {
				N.current = !1;
			}));
		}
		function i() {
			L.current = "keyboard";
		}
		return ys(bs(e, "pointerdown", n, !0), bs(e, "pointerup", t, !0), bs(e, "pointercancel", t, !0), bs(e, "keydown", i, !0), t);
	}, [
		r,
		v,
		_,
		V,
		g,
		j,
		B,
		oe
	]), D.useEffect(() => {
		if (r || !l) return;
		let e = on(V);
		function n() {
			N.current = !0, B.start(0, () => {
				N.current = !1;
			});
		}
		function i(e) {
			let t = Hn(e);
			yi(t) && (F.current = t);
		}
		function a(n) {
			let r = n.relatedTarget, i = n.currentTarget, a = Hn(n);
			c && r == null && a != null && Bn(v, a) && nc(a), queueMicrotask(() => {
				let o = x(), l = t.context.triggerElements, u = oe(), p = r?.hasAttribute(Ts("focus-guard")) && [
					ee.current,
					R.current,
					j?.beforeInsideRef.current,
					j?.afterInsideRef.current,
					j?.beforeOutsideRef.current,
					j?.afterOutsideRef.current,
					Bi(f),
					Bi(d)
				].includes(r), m = !(Bn(_, r) || Bn(v, r) || Bn(r, v) || Bn(j?.portalNode, r) || u.some((e) => e === r || Bn(e, r)) || l.hasMatchingElement((e) => Bn(e, r)) || p || A && (_r(A.nodesRef.current, o).find((e) => Bn(e.context?.elements.floating, r) || Bn(e.context?.elements.domReference, r)) || vr(A.nodesRef.current, o).find((e) => [e.context?.elements.floating, gr(e.context?.elements.floating)].includes(r) || e.context?.elements.domReference === r)));
				if (i === _ && V && ac(V), s && i !== _ && !ai(a) && zn(e) === e.body) {
					if (Bt(V) && (V.focus(), s === "popup")) {
						re.request(() => {
							V.focus();
						});
						return;
					}
					let e = ae(), t = F.current, n = (t && e.includes(t) ? t : null) || e[e.length - 1] || V;
					Bt(n) && n.focus();
				}
				b.current.insideReactTree ? b.current.insideReactTree = !1 : (C || !c) && r && m && !N.current && (C || r !== rc()) && (M.current = !0, t.setOpen(!1, _t(St, n)));
			});
		}
		function o() {
			P.current || (b.current.insideReactTree = !0, ne.start(0, () => {
				b.current.insideReactTree = !1;
			}));
		}
		let u = Bt(_) ? _ : null;
		if (v || u) return ys(u && bs(u, "focusout", a), u && bs(u, "pointerdown", n), v && bs(v, "focusin", i), v && bs(v, "focusout", a), v && j && bs(v, "focusout", o, !0));
	}, [
		r,
		_,
		v,
		V,
		c,
		A,
		j,
		t,
		l,
		s,
		ae,
		C,
		x,
		b,
		ne,
		B,
		re,
		d,
		f,
		oe
	]), D.useEffect(() => {
		if (r || !v || !g) return;
		let e = Array.from(j?.portalNode?.querySelectorAll(`[${Ts("portal")}]`) || []), t = (A ? vr(A.nodesRef.current, x()) : []).find((e) => hr(e.context?.elements.domReference || null))?.context?.elements.domReference, n = Rs([
			v,
			...e,
			ee.current,
			R.current,
			j?.beforeOutsideRef.current,
			j?.afterOutsideRef.current,
			...oe(),
			t,
			Bi(f),
			Bi(d),
			C ? _ : null
		].filter((e) => e != null), {
			ariaHidden: c || C,
			mark: !1
		}), i = Rs([v, ...e].filter((e) => e != null));
		return () => {
			i(), n();
		};
	}, [
		g,
		r,
		_,
		v,
		c,
		j,
		C,
		A,
		x,
		d,
		f,
		oe
	]), U(() => {
		if (!g || r || !Bt(V)) return;
		I.current = "", L.current = "";
		let e = on(V), t = zn(e);
		queueMicrotask(() => {
			let n = w.current, r = typeof n == "function" ? n(O.current || "") : n;
			if (r === void 0 || r === !1 || Bn(V, t)) return;
			let i = null, a = () => (i ??= ae(V), i[0] || V), o;
			o = r === !0 || r === null ? a() : Bi(r), o ||= a();
			let s = Bn(V, zn(e)), c = b.current.openEvent, l = c?.type === "mousedown" && xr(c);
			Ds(o, {
				sync: l,
				preventScroll: o === V,
				shouldFocus() {
					if (!k.current) return !1;
					if (s) return !0;
					let t = zn(e);
					return !(t !== o && Bn(V, t));
				}
			});
		});
	}, [
		r,
		g,
		V,
		ae,
		w,
		O,
		k,
		b
	]);
	let se = D.useRef(null);
	U(() => {
		if (r || !V) {
			se.current = null;
			return;
		}
		se.current &&= (se.current.cancelled = !0, null);
		let e = on(V), t = zn(e), n = O.current == null;
		nc(t);
		function i(e) {
			if (e.open || (I.current = Qs(e.nativeEvent, L.current)), (e.reason === "focus-out" && e.triggerElement?.hasAttribute(Ts("focus-guard")) || e.reason === "trigger-hover" && e.nativeEvent.type === "mouseleave") && (M.current = !0), e.reason === "outside-press") {
				if (e.nested) M.current = !1;
				else if (xr(e.nativeEvent) || Sr(e.nativeEvent)) M.current = !1;
				else {
					let e = !1;
					on(V).createElement("div").focus({ get preventScroll() {
						return e = !0, !1;
					} }), e ? M.current = !1 : M.current = !0;
				}
			}
		}
		y.on("openchange", i);
		function a(e) {
			let r = T.current, i = typeof r == "function" ? r(e) : r;
			if (i === void 0 || i === !1) return null;
			i === null && (i = !0);
			let a = _?.isConnected ? _ : null, o = t?.isConnected && Ft(t) !== "body" ? t : null, s = n ? o || a : a || o;
			return s ||= rc() || null, typeof i == "boolean" ? s : Bi(i) || s || null;
		}
		return () => {
			y.off("openchange", i);
			let t = zn(e), n = oe(), r = Bn(v, t) || n.some((e) => e === t || Bn(e, t)) || A && _r(A.nodesRef.current, x(), !1).some((e) => Bn(e.context?.elements.floating, t)), o = T.current, s = I.current, c = a(s), l = { cancelled: !1 };
			se.current = l, queueMicrotask(() => {
				se.current === l && (se.current = null);
				let n = ic(c), i = E.current ?? typeof o != "boolean";
				if (!l.cancelled && o && !M.current && Bt(n) && (i || n === t || t === e.body || r)) {
					let e = { preventScroll: !0 };
					s === "keyboard" && (e.focusVisible = !0), n.focus(e);
				}
				M.current = !1;
			});
		};
	}, [
		r,
		v,
		V,
		T,
		E,
		O,
		y,
		A,
		_,
		x,
		oe
	]), U(() => {
		if (!In || g || !v) return;
		let e = zn(on(v));
		Bt(e) && mr(e) && Bn(v, e) && e.blur();
	}, [g, v]), U(() => {
		if (!r && j) return j.setFocusManagerState({
			modal: c,
			closeOnFocusOut: l,
			open: g,
			onOpenChange: t.setOpen,
			domReference: _
		}), () => {
			j.setFocusManagerState(null);
		};
	}, [
		r,
		j,
		c,
		g,
		t,
		l,
		_
	]), U(() => {
		if (!r && V) return ac(V), () => {
			queueMicrotask(tc);
		};
	}, [r, V]);
	let ce = !r && (!c || !C) && (ie || c);
	return /*#__PURE__*/ (0, K.jsxs)(D.Fragment, { children: [
		ce && /*#__PURE__*/ (0, K.jsx)(ws, {
			"data-type": "inside",
			ref: te,
			onFocus: (e) => {
				if (c) {
					let e = ae();
					Ds(e[e.length - 1]);
				} else j?.portalNode && (M.current = !1, Ti(e, j.portalNode) ? Ci(_)?.focus() : Bi(f ?? j.beforeOutsideRef)?.focus());
			}
		}),
		n,
		ce && /*#__PURE__*/ (0, K.jsx)(ws, {
			"data-type": "inside",
			ref: z,
			onFocus: (e) => {
				c ? Ds(ae()[0]) : j?.portalNode && (l && (M.current = !0), Ti(e, j.portalNode) ? wi(_)?.focus() : Bi(d ?? j.afterOutsideRef)?.focus());
			}
		})
	] });
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
function sc(e, t = {}) {
	let { enabled: n = !0, event: r = "click", toggle: i = !0, ignoreMouse: a = !1, stickIfOpen: o = !0, touchOpenDelay: s = 0, reason: c = yt } = t, l = e.context.dataRef, u = D.useRef(void 0), d = zi(), f = Cs(), p = D.useMemo(() => {
		function t(t, n, r, i) {
			let a = _t(c, n, r);
			t && i === "touch" && s > 0 ? f.start(s, () => {
				e.setOpen(!0, a);
			}) : e.setOpen(t, a);
		}
		function n(t, n, r) {
			let a = l.current.openEvent, s = e.select("domReferenceElement") !== n;
			return t && s || !t || !i ? !0 : a && (typeof o == "function" ? o() : o) ? !r(a.type) : !1;
		}
		return {
			onPointerDown(e) {
				u.current = Cr(e.pointerType, !0) && Sr(e.nativeEvent) ? "virtual" : e.pointerType;
			},
			onMouseDown(i) {
				let o = u.current, s = i.nativeEvent, c = e.select("open");
				if (i.button !== 0 || r === "click" || Cr(o, !0) && a) return;
				let l = n(c, i.currentTarget, (e) => e === "click" || e === "mousedown"), f = Hn(s), p = mr(f);
				if (p || o === "virtual") {
					t(l, s, p ? f : i.currentTarget, o);
					return;
				}
				let m = i.currentTarget;
				d.request(() => {
					t(l, s, m, o);
				});
			},
			onClick(i) {
				if (r === "mousedown-only") return;
				let o = u.current;
				r === "mousedown" && o ? u.current = void 0 : Cr(o, !0) && a || t(n(e.select("open"), i.currentTarget, (e) => e === "click" || e === "mousedown" || e === "keydown" || e === "keyup"), i.nativeEvent, i.currentTarget, o);
			},
			onKeyDown() {
				u.current = void 0;
			}
		};
	}, [
		l,
		r,
		a,
		c,
		e,
		o,
		i,
		d,
		f,
		s
	]);
	return D.useMemo(() => n ? { reference: p } : Ae, [n, p]);
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
function cc() {
	return !1;
}
function lc(e) {
	return {
		escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
		outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
	};
}
function uc(e, t = {}) {
	let { enabled: n = !0, escapeKey: r = !0, outsidePress: i = !0, outsidePressEvent: a = "sloppy", referencePress: o = cc, bubbles: s, externalTree: c } = t, l = e.useState("open"), u = e.useState("floatingElement"), { dataRef: d, events: f } = e.context, p = Zs(c), m = G(typeof i == "function" ? i : () => !1), h = typeof i == "function" ? m : i, g = h !== !1, _ = G(() => a), { escapeKey: v, outsidePress: y } = lc(s), b = D.useRef(!1), x = D.useRef(!1), S = D.useRef(!1), C = D.useRef(!1), w = D.useRef(!1), T = D.useRef(""), E = D.useRef(null), O = Cs(), k = Cs(), A = Cs(), j = G(() => {
		k.clear(), d.current.insideReactTree = !1;
	}), M = G((e) => {
		let t = d.current.floatingContext?.nodeId;
		return (p ? _r(p.nodesRef.current, t) : []).some((t) => t.context?.open && !t.context.dataRef.current[e]);
	}), N = G((t) => fr(t, e.select("floatingElement")) || fr(t, e.select("domReferenceElement"))), P = G((t) => {
		o() && e.setOpen(!1, _t(yt, t.nativeEvent));
	}), F = G((t) => {
		if (!l || !n || !r || t.key !== "Escape") return;
		let i = br(t) ? t.nativeEvent : t;
		if (w.current || i.isComposing || !v && M("__escapeKeyBubbles")) return;
		let a = _t(Ct, i);
		e.setOpen(!1, a), a.isCanceled || t.preventDefault(), !v && !a.isPropagationAllowed && t.stopPropagation();
	}), I = G(() => {
		d.current.insideReactTree = !0, k.start(0, j);
	}), L = G((t) => {
		if (!l || !n || t.button !== 0) return;
		let r = Hn(t.nativeEvent);
		Bn(e.select("floatingElement"), r) && (b.current || (b.current = !0, x.current = !1));
	}), ee = G((e) => {
		l && n && (e.defaultPrevented || e.nativeEvent.defaultPrevented) && b.current && (x.current = !0);
	});
	D.useEffect(() => {
		function e(e) {
			e.open || (C.current = !1);
		}
		return f.on("openchange", e), () => {
			f.off("openchange", e);
		};
	}, [f]), D.useEffect(() => j, [j]), D.useEffect(() => {
		if (!l || !n) return l || (C.current = !1, w.current = !1, T.current = "", E.current = null), j;
		d.current.__escapeKeyBubbles = v, d.current.__outsidePressBubbles = y;
		let t = new Ss(), i = on(u);
		function a() {
			A.clear(), w.current = !0;
		}
		function o() {
			w.current = !0, A.start(In ? 5 : 0, () => {
				w.current = !1;
			});
		}
		function s() {
			S.current = !0, t.start(0, () => {
				S.current = !1;
			});
		}
		function c() {
			b.current = !1, x.current = !1;
		}
		function f() {
			let e = T.current, t = e === "pen" || !e ? "mouse" : e, n = _(), r = typeof n == "function" ? n() : n;
			return typeof r == "string" ? r : r[t];
		}
		function m(e) {
			let t = f();
			return t === "intentional" && e.type !== "click" || t === "sloppy" && e.type === "click";
		}
		function D(e) {
			let t = d.current.floatingContext?.nodeId, n = p && _r(p.nodesRef.current, t).some((t) => fr(e, t.context?.elements.floating));
			return N(e) || n;
		}
		function k(n) {
			if (m(n)) {
				n.type !== "click" && !N(n) && (t.clear(), S.current = !1), j();
				return;
			}
			if (d.current.insideReactTree) {
				j();
				return;
			}
			let r = Hn(n), i = `[${Ts("inert")}]`, a = zt(r) ? r.getRootNode() : null, o = Array.from((Vt(a) ? a : on(e.select("floatingElement"))).querySelectorAll(i)), s = e.context.triggerElements;
			if (r && (s.hasElement(r) || s.hasMatchingElement((e) => Bn(e, r)))) return;
			let c = zt(r) ? r : null;
			for (; c && !Qt(c);) {
				let e = tn(c);
				if (Qt(e) || !zt(e)) break;
				c = e;
			}
			if (!(o.length && zt(r) && !pr(r) && !Bn(r, e.select("floatingElement")) && o.every((e) => !Bn(c, e)))) {
				if (Bt(r) && !("touches" in n)) {
					let e = Qt(r), t = $t(r), i = /auto|scroll/, a = e || i.test(t.overflowX), o = e || i.test(t.overflowY), s = a && r.clientWidth > 0 && r.scrollWidth > r.clientWidth, c = o && r.clientHeight > 0 && r.scrollHeight > r.clientHeight, l = t.direction === "rtl", u = c && (l ? n.offsetX <= r.offsetWidth - r.clientWidth : n.offsetX > r.clientWidth), d = s && n.offsetY > r.clientHeight;
					if (u || d) return;
				}
				if (!D(n)) {
					if (f() === "intentional") {
						if (n.detail !== 0 && !xr(n) && !C.current) return;
						if (S.current) {
							t.clear(), S.current = !1;
							return;
						}
					}
					typeof h == "function" && !h(n) || M("__outsidePressBubbles") || (e.setOpen(!1, _t(bt, n)), j());
				}
			}
		}
		function P(t) {
			f() === "sloppy" && t.pointerType !== "touch" && e.select("open") && n && !N(t) && k(t);
		}
		function I(t) {
			if (f() !== "sloppy" || !e.select("open") || !n || N(t)) return;
			let r = t.touches[0];
			r && (E.current = {
				startTime: Date.now(),
				startX: r.clientX,
				startY: r.clientY,
				dismissOnTouchEnd: !1,
				dismissOnMouseDown: !0
			}, O.start(1e3, () => {
				E.current && (E.current.dismissOnTouchEnd = !1, E.current.dismissOnMouseDown = !1);
			}));
		}
		function L(e, t) {
			let n = Hn(e);
			if (!n) return;
			let r = bs(n, e.type, () => {
				t(e), r();
			});
		}
		function ee(e) {
			T.current = "touch", L(e, I);
		}
		function R(e) {
			O.clear(), e.type === "pointerdown" && (e.button === 0 && (C.current = !0), T.current = e.pointerType), (e.type !== "mousedown" || !E.current || E.current.dismissOnMouseDown) && L(e, (e) => {
				e.type === "pointerdown" ? P(e) : k(e);
			});
		}
		function te(e) {
			if (e.type === "pointercancel" && (C.current = !1), !b.current) return;
			let n = x.current;
			c(), f() === "intentional" && (e.type === "pointercancel" ? n && s() : D(e) || (n ? s() : (typeof h != "function" || h(e)) && (t.clear(), S.current = !0, j())));
		}
		function z(e) {
			if (f() !== "sloppy" || !E.current || N(e)) return;
			let t = e.touches[0];
			if (!t) return;
			let n = Math.abs(t.clientX - E.current.startX), r = Math.abs(t.clientY - E.current.startY), i = Math.sqrt(n * n + r * r);
			i > 5 && (E.current.dismissOnTouchEnd = !0), i > 10 && (k(e), O.clear(), E.current = null);
		}
		function ne(e) {
			L(e, z);
		}
		function B(e) {
			f() === "sloppy" && E.current && !N(e) && (E.current.dismissOnTouchEnd && k(e), O.clear(), E.current = null);
		}
		function re(e) {
			L(e, B);
		}
		let ie = ys(r && ys(bs(i, "keydown", F), bs(i, "compositionstart", a), bs(i, "compositionend", o)), g && ys(bs(i, "click", R, !0), bs(i, "pointerdown", R, !0), bs(i, "pointerup", te, !0), bs(i, "pointercancel", te, !0), bs(i, "mousedown", R, !0), bs(i, "mouseup", te, !0), bs(i, "touchstart", ee, {
			capture: !0,
			passive: !0
		}), bs(i, "touchmove", ne, {
			capture: !0,
			passive: !0
		}), bs(i, "touchend", re, {
			capture: !0,
			passive: !0
		})));
		return () => {
			ie(), t.clear(), c(), S.current = !1;
		};
	}, [
		d,
		u,
		r,
		g,
		h,
		l,
		n,
		v,
		y,
		F,
		j,
		_,
		M,
		N,
		p,
		e,
		O,
		A
	]);
	let R = D.useMemo(() => ({
		onKeyDown: F,
		onPointerDown: P,
		onClick: P
	}), [F, P]), te = D.useMemo(() => ({
		onKeyDown: F,
		onPointerDown: ee,
		onMouseDown: ee,
		onClickCapture: I,
		onMouseDownCapture(e) {
			I(), L(e);
		},
		onPointerDownCapture(e) {
			I(), L(e);
		},
		onMouseUpCapture: I,
		onTouchEndCapture: I,
		onTouchMoveCapture: I
	}), [
		F,
		I,
		L,
		ee
	]);
	return D.useMemo(() => n ? {
		reference: R,
		floating: te,
		trigger: R
	} : {}, [
		n,
		R,
		te
	]);
}
// node_modules/@base-ui/react/internals/useUnmountAfterClose.mjs
function dc(e) {
	let { open: t, ref: n, preventUnmountOnClose: r, setPreventUnmountOnClose: i, onUnmount: a, animateInitialOpen: o } = e, s = G(i), { mounted: c, setMounted: l, transitionStatus: u } = qi(t, !1, !1, o), d = !t && r;
	U(() => {
		t && s(!1);
	}, [t, s]);
	let f = D.useRef(c), p = D.useRef(!1), m = sn(), h = () => {
		f.current = !1, l(!1), a();
	};
	U(() => {
		f.current = c, p.current && (p.current = !1, !t && c && h());
	});
	let g = G(() => {
		f.current && (t ? (p.current = !0, m()) : h());
	});
	return Ki({
		enabled: c && !t && !d,
		open: t,
		ref: n,
		onComplete() {
			t || g();
		}
	}), {
		mounted: c,
		transitionStatus: u,
		preventUnmountingOnClose: d,
		forceUnmount: g
	};
}
// node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
var fc = {
	tabIndex: -1,
	[Un]: ""
};
function pc(e) {
	let t = !1;
	return e.preventUnmountOnClose = () => {
		t = !0;
	}, () => t;
}
// node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
var mc = class {
	idMap = /* @__PURE__ */ new Map();
	add(e, t) {
		this.idMap.set(e, t);
	}
	delete(e) {
		this.idMap.delete(e);
	}
	hasElement(e) {
		for (let t of this.idMap.values()) if (t === e) return !0;
		return !1;
	}
	hasMatchingElement(e) {
		for (let t of this.idMap.values()) if (e(t)) return !0;
		return !1;
	}
	getById(e) {
		return this.idMap.get(e);
	}
	entries() {
		return this.idMap.entries();
	}
	elements() {
		return this.idMap.values();
	}
	get size() {
		return this.idMap.size;
	}
}, hc = {
	open: (e) => e.open,
	transitionStatus: (e) => e.transitionStatus,
	domReferenceElement: (e) => e.domReferenceElement,
	referenceElement: (e) => e.positionReference ?? e.referenceElement,
	floatingElement: (e) => e.floatingElement,
	floatingId: (e) => e.floatingId
}, gc = class extends vs {
	constructor(e) {
		let { syncOnly: t, nested: n, onOpenChange: r, triggerElements: i, ...a } = e;
		super({
			...a,
			positionReference: a.referenceElement,
			domReferenceElement: a.referenceElement
		}, {
			onOpenChange: r,
			dataRef: { current: {} },
			events: qs(),
			nested: n,
			triggerElements: i
		}, hc), this.syncOnly = t;
	}
	syncOpenEvent = (e, t) => {
		(!e || !this.state.open || t != null && wr(t)) && (this.context.dataRef.current.openEvent = e ? t : void 0);
	};
	dispatchOpenChange = (e, t) => {
		this.syncOpenEvent(e, t.event);
		let n = {
			open: e,
			reason: t.reason,
			nativeEvent: t.event,
			nested: this.context.nested,
			triggerElement: t.trigger
		};
		this.context.events.emit("openchange", n);
	};
	setOpen = (e, t) => {
		this.syncOnly || this.dispatchOpenChange(e, t), this.context.onOpenChange?.(e, t);
	};
};
// node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function _c(e) {
	let { open: t = !1, onOpenChange: n, elements: r = {} } = e, i = dn(), a = Xs() != null, o = W(() => new gc({
		open: t,
		transitionStatus: void 0,
		onOpenChange: n,
		referenceElement: r.reference ?? null,
		floatingElement: r.floating ?? null,
		triggerElements: new mc(),
		floatingId: i,
		syncOnly: !1,
		nested: a
	})).current;
	return U(() => {
		let e = {
			open: t,
			floatingId: i
		};
		r.reference !== void 0 && (e.referenceElement = r.reference, e.domReferenceElement = zt(r.reference) ? r.reference : null), r.floating !== void 0 && (e.floatingElement = r.floating), o.update(e);
	}, [
		t,
		i,
		r.reference,
		r.floating,
		o
	]), o.context.onOpenChange = n, o.context.nested = a, o;
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useListNavigation.mjs
function vc(e) {
	return In && e.movementX === 0 && e.movementY === 0;
}
function yc(e, t, n) {
	switch (e) {
		case "vertical": return t;
		case "horizontal": return n;
		default: return t || n;
	}
}
function bc(e, t) {
	return yc(t, e === "ArrowUp" || e === "ArrowDown", e === "ArrowLeft" || e === "ArrowRight");
}
function xc(e, t, n) {
	return yc(t, e === "ArrowDown", n ? e === "ArrowLeft" : e === "ArrowRight") || e === "Enter" || e === " " || e === "";
}
function Sc(e, t, n) {
	return yc(t, n ? e === Wn : e === Gn, e === qn);
}
function Cc(e, t, n, r) {
	return t === "both" || t === "horizontal" && r ? e === "Escape" : yc(t, n ? e === Gn : e === Wn, e === Kn);
}
function wc(e, t) {
	let { listRef: n, activeIndex: r, onNavigate: i = () => {}, enabled: a = !0, selectedIndex: o = null, allowEscape: s = !1, loopFocus: c = !1, nested: l = !1, rtl: u = !1, virtual: d = !1, focusItemOnOpen: f = "auto", focusItemOnHover: p = !0, openOnArrowKeyDown: m = !0, disabledIndices: h = void 0, orientation: g = "vertical", triggerOrientation: _ = g, parentOrientation: v, id: y, resetOnPointerLeave: b = !0, externalTree: x, nestedReturnFocusRef: S, grid: C } = t, w = C != null, T = e.useState("open"), E = e.useState("floatingElement"), O = e.useState("domReferenceElement"), k = e.context.dataRef, A = gr(E), j = hr(O), M = ns(A), N = Xs(), P = Zs(x), F = D.useRef(f), I = D.useRef(o ?? -1), L = D.useRef(null), ee = D.useRef(!0), R = G((e) => {
		i(I.current === -1 ? null : I.current, e);
	}), te = D.useRef(!!E), z = D.useRef(T), ne = D.useRef(!1), B = D.useRef(!1), re = D.useRef(null), ie = ns(h), V = ns(T), ae = ns(o), oe = ns(b), se = zi(), ce = zi(), H = G(() => {
		se.cancel();
		function e(e) {
			d || (re.current = Ds(e, {
				sync: ne.current,
				preventScroll: !0
			}));
		}
		let t = n.current[I.current], r = B.current;
		t && e(t), (ne.current ? (e) => e() : (e) => se.request(e))(() => {
			let i = n.current[I.current] || t;
			i && (t || e(i), W && (r || !ee.current) && i.scrollIntoView?.({
				block: "nearest",
				inline: "nearest"
			}));
		});
	});
	U(() => {
		k.current.orientation = g;
	}, [k, g]), U(() => {
		T || (L.current = null), T && f === "auto" || (F.current = f);
	}, [T, f]), U(() => {
		a && (T && E ? (I.current = o ?? -1, F.current && o != null && (B.current = !0, R())) : te.current && (I.current = -1, R()));
	}, [
		a,
		T,
		E,
		o,
		R
	]), U(() => {
		if (a) {
			if (!T) ne.current = !1;
			else if (E) {
				if (r == null) {
					if (ne.current = !1, ae.current != null) return;
					if (te.current && (I.current = -1, H()), (!z.current || !te.current) && F.current && (L.current != null || F.current === !0 && L.current == null)) {
						let e = 0, t = () => {
							n.current[0] == null ? (e < 2 && (e ? (e) => ce.request(e) : queueMicrotask)(t), e += 1) : (I.current = L.current == null || xc(L.current, _, u) || l ? $r(n) : ei(n), L.current = null, R());
						};
						t();
					}
				} else Qr(n.current, r) || (I.current = r, H(), B.current = !1);
			}
		}
	}, [
		a,
		T,
		E,
		r,
		ae,
		l,
		n,
		_,
		u,
		R,
		H,
		ce
	]), U(() => {
		if (!a || E || !P || d || !te.current) return;
		let e = P.nodesRef.current, t = e.find((e) => e.id === N)?.context?.elements.floating, n = zn(on(O ?? t ?? null)), r = e.some((e) => e.context && Bn(e.context.elements.floating, n));
		t && !r && ee.current && t.focus({ preventScroll: !0 });
	}, [
		a,
		E,
		O,
		P,
		N,
		d
	]), U(() => {
		z.current = T, te.current = !!E;
	});
	let le = r != null, ue = G((e) => {
		if (!V.current) return;
		let t = n.current.indexOf(e.currentTarget);
		t !== -1 && (I.current !== t || r !== t) && (I.current = t, R(e));
	}), de = G(() => v ?? P?.nodesRef.current.find((e) => e.id === N)?.context?.dataRef?.current.orientation), fe = G(() => $r(n, ie.current)), pe = G((t) => {
		if (ee.current = !1, ne.current = !0, t.which === 229 || !V.current && t.currentTarget === M.current) return;
		if (l && Cc(t.key, g, u, w)) {
			bc(t.key, de()) || yr(t), e.setOpen(!1, _t(wt, t.nativeEvent));
			let n = S?.current ?? O;
			Bt(n) && n.focus();
			return;
		}
		r != null && r !== I.current && !Qr(n.current, r) && (I.current = r);
		let i = I.current, a = $r(n, h), o = ei(n, h);
		if (j || (t.key === "Home" && (yr(t), I.current = a, R(t)), t.key === "End" && (yr(t), I.current = o, R(t))), C != null) {
			let e = C(t, I.current, n, g, c, u, h, a, o);
			if (e != null && e !== I.current && (I.current = e, R(t)), g === "both") return;
		}
		if (bc(t.key, g)) {
			yr(t);
			let e = zn(t.currentTarget.ownerDocument);
			if (T && !d && Bn(t.currentTarget, e) && !n.current.some((t) => t != null && Bn(t, e))) {
				I.current = xc(t.key, g, u) ? a : o, R(t), r === I.current && H();
				return;
			}
			let { index: l, wrapped: f } = ti(n.current, i, {
				decrement: !xc(t.key, g, u),
				loopFocus: c,
				allowEscape: s,
				disabledIndices: h,
				minIndex: a,
				maxIndex: o
			});
			f && (ne.current = !1), I.current = l, R(t);
		}
	}), W = D.useMemo(() => ({
		onFocus(e) {
			ne.current = !0, ue(e);
		},
		onClick({ currentTarget: e }) {
			d || e.focus({ preventScroll: !0 });
		},
		onMouseMove(e) {
			vc(e) || (ne.current = !0, B.current = !1, p && ue(e));
		},
		onPointerLeave(e) {
			if (!V.current || !ee.current || e.pointerType === "touch") return;
			ne.current = !0;
			let t = e.relatedTarget;
			if (p && !n.current.includes(t) && oe.current && (re.current?.(), re.current = null, I.current = -1, R(e), !d)) {
				let e = M.current, t = zn(on(e));
				e && Bn(e, t) && e.focus({ preventScroll: !0 });
			}
		}
	}), [
		ue,
		V,
		M,
		p,
		n,
		R,
		oe,
		d
	]), me = D.useMemo(() => d && T && le && { "aria-activedescendant": `${y}-${r}` }, [
		d,
		T,
		le,
		y,
		r
	]), he = D.useMemo(() => ({
		...j ? {} : me,
		onKeyDown(t) {
			if (t.key === "Tab" && t.shiftKey && T && !d) {
				let n = Hn(t.nativeEvent);
				if (n && !Bn(M.current, n)) return;
				yr(t);
				let r = _t(St, t.nativeEvent);
				e.setOpen(!1, r);
				let i = S?.current ?? O;
				!r.isCanceled && Bt(i) && i.focus();
			} else pe(t);
		},
		onPointerMove(e) {
			vc(e) || (ee.current = !0);
		}
	}), [
		me,
		pe,
		M,
		j,
		e,
		T,
		d,
		O,
		S
	]), ge = D.useMemo(() => {
		function t(t) {
			e.setOpen(!0, _t(wt, t.nativeEvent, t.currentTarget));
		}
		function n(e) {
			f === "auto" && xr(e.nativeEvent) && (F.current = !d);
		}
		function r(e) {
			F.current = f, f === "auto" && Sr(e.nativeEvent) && (F.current = !0);
		}
		return {
			onKeyDown(n) {
				let r = e.select("open");
				ee.current = !1;
				let i = n.key.startsWith("Arrow"), a = Sc(n.key, de(), u), o = bc(n.key, r ? g : _), s = (l ? a : o) || n.key === "Enter" || n.key.trim() === "";
				if (d && r && (!l || mr(n.currentTarget))) return pe(n);
				if (r || m || !i) {
					if (s) {
						let e = bc(n.key, de());
						L.current = l && e ? null : n.key;
					}
					l ? a && (yr(n), r ? (I.current = fe(), R(n), d && M.current?.focus()) : t(n)) : o && (ae.current != null && (I.current = ae.current), yr(n), !r && m ? t(n) : pe(n), r && R(n));
				}
			},
			onFocus(t) {
				t.target === t.currentTarget && e.select("open") && !d && (I.current = -1, R(t));
			},
			onPointerDown: r,
			onPointerEnter: r,
			onMouseDown: n,
			onClick: n
		};
	}, [
		pe,
		f,
		fe,
		l,
		R,
		e,
		m,
		g,
		_,
		de,
		u,
		ae,
		d,
		M
	]), _e = D.useMemo(() => ({
		...me,
		...ge
	}), [me, ge]);
	return D.useMemo(() => a ? {
		reference: _e,
		floating: he,
		item: W,
		trigger: ge
	} : {}, [
		a,
		_e,
		he,
		ge,
		W
	]);
}
// node_modules/@base-ui/react/floating-ui-react/hooks/useTypeahead.mjs
function Tc(e, t) {
	let { listRef: n, elementsRef: r, activeIndex: i, onMatch: a, disabledIndices: o, onTyping: s, enabled: c = !0, resetMs: l = 750, selectedIndex: u = null } = t, d = G(s), f = e.useState("open"), p = Cs(), m = D.useRef(""), h = D.useRef(u ?? i ?? -1), g = D.useRef(null), _ = G((e) => {
		function t(e) {
			return r?.current[e];
		}
		function s(e) {
			let n = t(e);
			return n && !ai(n) || n?.matches(":disabled") ? !1 : o == null || !ri(ke, e, o);
		}
		function c(e, t, n = 0) {
			if (e.length === 0) return -1;
			let r = (n % e.length + e.length) % e.length, i = t.toLowerCase();
			for (let t = 0; t < e.length; t += 1) {
				let n = (r + t) % e.length;
				if (e[n]?.toLowerCase().startsWith(i) && s(n)) return n;
			}
			return -1;
		}
		let _ = n.current;
		if (m.current.length > 0 && e.key === " " && (yr(e), d?.(!0)), m.current.length > 0 && m.current[0] !== " " && c(_, m.current) === -1 && e.key !== " " && d?.(!1), _ == null || e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
		f && e.key !== " " && (yr(e), d?.(!0));
		let v = m.current === "";
		v && (h.current = u ?? i ?? -1), _.every((e, t) => e && s(t) ? e[0]?.toLowerCase() !== e[1]?.toLowerCase() : !0) && m.current === e.key && (m.current = "", h.current = g.current), m.current += e.key, p.start(l, () => {
			m.current = "", h.current = g.current, d?.(!1);
		});
		let y = ((v ? u ?? i ?? -1 : h.current) ?? 0) + 1, b = c(_, m.current, y);
		b === -1 ? e.key !== " " && (m.current = "", d?.(!1)) : (a?.(b, e), g.current = b);
	}), v = G((t) => {
		let n = t.relatedTarget, r = e.select("domReferenceElement"), i = e.select("floatingElement");
		Bn(r, n) || Bn(i, n) || (p.clear(), m.current = "", h.current = g.current, d?.(!1));
	});
	U(() => {
		(f || u === null) && (p.clear(), g.current = null, m.current !== "" && (m.current = "", d?.(!1)));
	}, [
		f,
		u,
		p,
		d
	]);
	let y = D.useMemo(() => ({
		onKeyDown: _,
		onBlur: v
	}), [_, v]);
	return D.useMemo(() => c ? {
		reference: y,
		floating: y
	} : {}, [c, y]);
}
// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Ec(e, t, n) {
	let { reference: r, floating: i } = e, a = Lr(t), o = Rr(t), s = Ir(o), c = Nr(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = Pr(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Dc(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Mr(t, e), p = Xr(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Zr(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Zr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Oc = 50, kc = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Dc
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ec(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Oc && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Ec(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ac = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Mr(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Nr(r), _ = Lr(o), v = Nr(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Jr(o)] : Br(o)), x = p !== "none";
			!d && x && b.push(...qr(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = zr(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === Lr(t) || T.every((e) => Lr(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Lr(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, jc = /*#__PURE__*/ new Set(["left", "top"]);
async function Mc(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Nr(n), s = Pr(n), c = Lr(n) === "y", l = jc.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Mr(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Nc = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Mc(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Pc = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Mr(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Lr(i), p = Fr(f), m = u[p], h = u[f], g = (e, t) => jr(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Fc = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Mr(e, t), u = {
				x: n,
				y: r
			}, d = Lr(i), f = Fr(d), p = u[f], m = u[d], h = Mr(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = jc.has(Nr(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Ic = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Mr(e, t), c = await i.detectOverflow(t, s), l = Nr(n), u = Pr(n), d = Lr(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Tr(p - c[m], g), y = Tr(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Er(c.left, c.right) : S = p - 2 * Er(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Lc(e) {
	let t = $t(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Bt(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Dr(n) !== a || Dr(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Rc(e) {
	return zt(e) ? e : e.contextElement;
}
function zc(e) {
	let t = Rc(e);
	if (!Bt(t)) return kr(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Lc(t), o = (a ? Dr(n.width) : n.width) / r, s = (a ? Dr(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
var Bc = /*#__PURE__*/ kr(0);
function Vc(e) {
	let t = It(e);
	return !Zt() || !t.visualViewport ? Bc : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Hc(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === It(e);
}
function Uc(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Rc(e), o = kr(1);
	t && (r ? zt(r) && (o = zc(r)) : o = zc(e));
	let s = Hc(a, n, r) ? Vc(a) : kr(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = It(a), t = zt(r) ? It(r) : r, n = e, i = an(n);
		for (; i && t !== n;) {
			let e = zc(i), t = i.getBoundingClientRect(), r = $t(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = It(i), i = an(n);
		}
	}
	return Zr({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Wc(e, t) {
	let n = en(e).scrollLeft;
	return t ? t.left + n : Uc(Lt(e)).left + n;
}
function Gc(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Wc(e, n),
		y: n.top + t.scrollTop
	};
}
function Kc(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Lt(r), s = t ? Wt(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = kr(1), u = kr(0), d = Bt(r);
	if ((d || !a) && ((Ft(r) !== "body" || Ht(o)) && (c = en(r)), d)) {
		let e = Uc(r);
		l = zc(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Gc(o, c) : kr(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function qc(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Jc(e) {
	let t = en(e), n = e.ownerDocument.body, r = Er(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Er(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Wc(e), o = -t.scrollTop;
	return $t(n).direction === "rtl" && (a += Er(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Yc = 25;
function Xc(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = It(e), a = Lt(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Zt() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Wc(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Yc && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Zc(e, t) {
	let n = Uc(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = zc(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Qc(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = Xc(e, n, t);
	else if (t === "document") r = Jc(Lt(e));
	else if (zt(t)) r = Zc(t, n);
	else {
		let n = Vc(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Zr(r);
}
function $c(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = rn(e, [], !1).filter((e) => zt(e) && Ft(e) !== "body"), i = null, a = $t(e).position === "fixed", o = a ? tn(e) : e;
	for (; zt(o) && !Qt(o);) {
		let e = $t(o), t = Yt(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = tn(o);
	}
	return t.set(e, r), r;
}
function el(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Wt(t) ? [] : $c(t, this._c) : [].concat(n), r], o = Qc(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Qc(t, a[e], i);
		s = Er(n.top, s), c = Tr(n.right, c), l = Tr(n.bottom, l), u = Er(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function tl(e) {
	let { width: t, height: n } = Lc(e);
	return {
		width: t,
		height: n
	};
}
function nl(e, t, n) {
	let r = Bt(t), i = Lt(t), a = n === "fixed", o = Uc(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = kr(0);
	if ((r || !a) && ((Ft(t) !== "body" || Ht(i)) && (s = en(t)), r)) {
		let e = Uc(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Wc(i));
	let l = i && !r && !a ? Gc(i, s) : kr(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function rl(e) {
	return $t(e).position === "static";
}
function il(e, t) {
	if (!Bt(e) || $t(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Lt(e) === n && (n = n.ownerDocument.body), n;
}
function al(e, t) {
	let n = It(e);
	if (Wt(e)) return n;
	if (!Bt(e)) {
		let t = tn(e);
		for (; t && !Qt(t);) {
			if (zt(t) && !rl(t)) return t;
			t = tn(t);
		}
		return n;
	}
	let r = il(e, t);
	for (; r && Ut(r) && rl(r);) r = il(r, t);
	return r && Qt(r) && rl(r) && !Yt(r) ? n : r || Xt(e) || n;
}
var ol = async function(e) {
	let t = this.getOffsetParent || al, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: nl(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function sl(e) {
	return $t(e).direction === "rtl";
}
var cl = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Kc,
	getDocumentElement: Lt,
	getClippingRect: el,
	getOffsetParent: al,
	getElementRects: ol,
	getClientRects: qc,
	getDimensions: tl,
	getScale: zc,
	isElement: zt,
	isRTL: sl
};
function ll(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ul(e, t, n) {
	let r = null, i, a = Lt(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Or(d), h = Or(a.clientWidth - (u + f)), g = Or(a.clientHeight - (d + p)), _ = Or(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Er(0, Tr(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!ll(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = It(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function dl(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Rc(e), u = i || a ? [...l ? rn(l) : [], ...t ? rn(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ul(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Uc(e) : null;
	c && g();
	function g() {
		let t = Uc(e);
		h && !ll(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var fl = Nc, pl = Pc, ml = Ac, hl = Ic, gl = Fc, _l = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...cl,
		...i.platform,
		_c: r
	};
	return kc(e, t, {
		...i,
		platform: a
	});
}, vl = typeof document < "u" ? D.useLayoutEffect : function() {};
function yl(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!yl(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !yl(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function bl(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xl(e, t) {
	let n = bl(e);
	return Math.round(t * n) / n;
}
function Sl(e) {
	let t = D.useRef(e);
	return vl(() => {
		t.current = e;
	}), t;
}
function Cl(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = D.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = D.useState(r);
	yl(f, r) || p(r);
	let [m, h] = D.useState(null), [g, _] = D.useState(null), v = D.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = D.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = D.useRef(null), C = D.useRef(null), w = D.useRef(u), T = c != null, E = Sl(c), O = Sl(i), k = Sl(l), A = D.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		O.current && (e.platform = O.current), _l(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: k.current !== !1
			};
			j.current && !yl(w.current, t) && (w.current = t, Hi.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		O,
		k
	]);
	vl(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let j = D.useRef(!1);
	vl(() => (j.current = !0, () => {
		j.current = !1;
	}), []), vl(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, A);
			A();
		}
	}, [
		b,
		x,
		A,
		E,
		T
	]);
	let M = D.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), N = D.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), P = D.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!N.floating) return e;
		let t = xl(N.floating, u.x), r = xl(N.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...bl(N.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		N.floating,
		u.x,
		u.y
	]);
	return D.useMemo(() => ({
		...u,
		update: A,
		refs: M,
		elements: N,
		floatingStyles: P
	}), [
		u,
		A,
		M,
		N,
		P
	]);
}
var wl = (e, t) => {
	let n = fl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Tl = (e, t) => {
	let n = pl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, El = (e, t) => ({
	fn: gl(e).fn,
	options: [e, t]
}), Dl = (e, t) => {
	let n = ml(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ol = (e, t) => {
	let n = hl(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, kl = /*#__PURE__*/ D.createContext(void 0), Al = /*#__PURE__*/ D.createContext(void 0);
function jl() {
	let e = D.useContext(kl);
	if (e === void 0) throw Error(ft(60));
	return e;
}
function Ml() {
	let e = D.useContext(Al);
	if (e === void 0) throw Error(ft(61));
	return e;
}
// node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
var Nl = "data-valid", Pl = "data-invalid", Fl = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valid: null,
	valueMissing: !1
}, Il = {
	disabled: !1,
	valid: null,
	touched: !1,
	dirty: !1,
	filled: !1,
	focused: !1
}, Ll = { valid(e) {
	return e === null ? null : e ? { [Nl]: "" } : { [Pl]: "" };
} }, Rl = {
	invalid: void 0,
	name: void 0,
	validityData: {
		state: Fl,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: Oe,
	disabled: void 0,
	setTouched: Oe,
	setDirty: Oe,
	setFilled: Oe,
	setFocused: Oe,
	focusOwnerRef: { current: void 0 },
	validationMode: "onSubmit",
	shouldValidateOnChange: () => !1,
	state: Il,
	registerFieldControl: Oe,
	validation: {
		getValidationProps: (e, t = Ae) => t,
		inputRef: { current: null },
		registeredInputs: /* @__PURE__ */ new Map(),
		registerInput: Oe,
		getInputControl: () => null,
		commit: async () => {},
		change: Oe
	}
}, zl = /*#__PURE__*/ D.createContext(Rl);
function Bl(e = !0) {
	let t = D.useContext(zl);
	if (t.setValidityData === Oe && !e) throw Error(ft(28));
	return t;
}
// node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function Vl(e, t, n, r, i = !0, a) {
	let { registerFieldControl: o } = Bl(), s = W(() => Symbol());
	U(() => {
		let c = s.current;
		i ? o(c, {
			controlRef: e,
			getValue: r,
			id: t,
			name: a,
			value: n
		}) : o(c, void 0);
	}, [
		e,
		i,
		r,
		t,
		a,
		o,
		s,
		n
	]), U(() => {
		let e = s.current;
		return () => {
			o(e, void 0);
		};
	}, [o, s]);
}
// node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
var Hl = /*#__PURE__*/ D.createContext({
	controlId: void 0,
	registerControlId: Oe,
	resetControlId: Oe,
	labelId: void 0,
	setLabelId: Oe,
	messageIds: [],
	setMessageIds: Oe,
	getDescriptionProps: (e) => e
});
function Ul() {
	return D.useContext(Hl);
}
// node_modules/@base-ui/react/internals/labelable-provider/useLabelableId.mjs
function Wl(e = {}) {
	let { id: t, enabled: n = !0 } = e, { controlId: r, registerControlId: i, resetControlId: a } = Ul(), o = fn(), s = W(() => Symbol()), c = D.useRef(!1), l = D.useRef(!1), u = G(() => {
		c.current && i !== Oe && (c.current = !1, i(s.current, void 0));
	});
	return U(() => {
		if (!n || i === Oe) {
			u();
			return;
		}
		let e;
		if (t !== void 0) l.current = !0, e = t;
		else if (l.current) e = o;
		else {
			a();
			return;
		}
		e === void 0 ? u() : (c.current = !0, i(s.current, e));
	}, [
		t,
		n,
		i,
		a,
		o,
		s,
		u
	]), U(() => u, [u]), (n ? r : void 0) ?? t ?? o;
}
// node_modules/@base-ui/utils/areArraysEqual.mjs
function Gl(e, t, n = Object.is) {
	let { length: r } = e;
	if (r !== t.length) return !1;
	for (let i = 0; i < r; i += 1) if (!n(e[i], t[i])) return !1;
	return !0;
}
// node_modules/@base-ui/react/internals/itemEquality.mjs
var Kl = (e, t) => Object.is(e, t);
function ql(e, t, n) {
	return e == null || t == null ? Object.is(e, t) : n(e, t);
}
function Jl(e, t, n) {
	return Array.isArray(e) && Array.isArray(t) ? !Gl(e, t, (e, t) => ql(e, t, n)) : e !== t;
}
function Yl(e, t, n) {
	return e ? e.some((e) => e !== void 0 && ql(t, e, n)) : !1;
}
function Xl(e, t, n) {
	return e ? e.findIndex((e) => e !== void 0 && ql(e, t, n)) : -1;
}
function Zl(e, t) {
	if (t !== Kl) return (n) => Yl(e, n, t);
	let n = new Set(e);
	return n.delete(void 0), (t) => n.has(t) && (t !== 0 || e.some((e) => Object.is(t, e)));
}
function Ql(e, t, n, r) {
	let i = r && Array.isArray(t) ? e.findIndex(Zl(t, n)) : Xl(e, t, n);
	return i === -1 ? null : i;
}
function $l(e, t, n, r, i, a) {
	return Yl(r, t, i) ? a != null && e > a && Yl(r, n[a], i) ? a : e : e === a ? Ql(n, r, i, !0) : a;
}
function eu(e, t, n) {
	return e.filter((e) => !ql(t, e, n));
}
// node_modules/@base-ui/react/internals/serializeValue.mjs
function tu(e) {
	if (e == null) return "";
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}
// node_modules/@base-ui/react/internals/resolveValueLabel.mjs
function nu(e) {
	return typeof e == "object" && !!e && Array.isArray(e.items);
}
function ru(e) {
	return nu(e?.[0]);
}
function iu(e) {
	return ru(e) ? e.flatMap((e) => e.items) : e;
}
function au(e) {
	if (!Array.isArray(e)) return e != null && "null" in e;
	let t = e;
	if (ru(t)) {
		for (let e of t) for (let t of e.items) if (t && t.value == null && t.label != null) return !0;
		return !1;
	}
	for (let e of t) if (e && e.value == null && e.label != null) return !0;
	return !1;
}
function ou(e, t) {
	if (t && e != null) return t(e) ?? "";
	if (e && typeof e == "object") {
		if ("label" in e && e.label != null) return String(e.label);
		if ("value" in e) return String(e.value);
	}
	return tu(e);
}
function su(e, t) {
	return t && e != null ? t(e) ?? "" : e && typeof e == "object" && "value" in e && "label" in e ? tu(e.value) : tu(e);
}
function cu(e, t, n) {
	function r() {
		return ou(e, n);
	}
	if (n && e != null) return n(e);
	if (e && typeof e == "object" && "label" in e && e.label != null) return e.label;
	if (t && !Array.isArray(t)) return (Object.hasOwn(t, e) ? t[e] : void 0) ?? r();
	if (Array.isArray(t)) {
		let n = iu(t);
		if (typeof e != "object" || !e) {
			let t = n.find((t) => t.value === e);
			return t && t.label != null ? t.label : r();
		}
		if ("value" in e) {
			let t = n.find((t) => t && t.value === e.value);
			if (t && t.label != null) return t.label;
		}
	}
	return r();
}
function lu(e, t, n) {
	return e.reduce((e, r, i) => (i > 0 && e.push(", "), e.push(/*#__PURE__*/ (0, K.jsx)(D.Fragment, { children: cu(r, t, n) }, i)), e), []);
}
// node_modules/@base-ui/react/select/store.mjs
var uu = {
	id: (e) => e.id,
	labelId: (e) => e.labelId,
	modal: (e) => e.modal,
	multiple: (e) => e.multiple,
	disabled: (e) => e.disabled,
	readOnly: (e) => e.readOnly,
	required: (e) => e.required,
	highlightItemOnHover: (e) => e.highlightItemOnHover,
	items: (e) => e.items,
	itemToStringLabel: (e) => e.itemToStringLabel,
	isItemEqualToValue: (e) => e.isItemEqualToValue,
	value: (e) => e.value,
	hasSelectedValue: (e) => {
		let { value: t, multiple: n, itemToStringValue: r } = e;
		return t == null ? !1 : n && Array.isArray(t) ? t.length > 0 : su(t, r) !== "";
	},
	hasNullItemLabel: (e, t) => t ? au(e.items) : !1,
	open: (e) => e.open,
	mounted: (e) => e.mounted,
	forceMount: (e) => e.forceMount,
	transitionStatus: (e) => e.transitionStatus,
	openMethod: (e) => e.openMethod,
	activeIndex: (e) => e.activeIndex,
	selectedIndex: (e) => e.selectedIndex,
	isActive: (e, t) => e.activeIndex === t,
	isSelected: (e, t) => {
		let n = e.isItemEqualToValue, r = e.value;
		return e.multiple ? Array.isArray(r) && r.some((e) => ql(t, e, n)) : ql(t, r, n);
	},
	isSelectedByFocus: (e, t) => e.selectedIndex === t,
	popupProps: (e) => e.popupProps,
	triggerProps: (e) => e.triggerProps,
	itemRoot: (e) => e.itemRoot,
	triggerElement: (e) => e.triggerElement,
	positionerElement: (e) => e.positionerElement,
	listElement: (e) => e.listElement,
	popupSide: (e) => e.popupSide,
	scrollUpArrowVisible: (e) => e.scrollUpArrowVisible,
	scrollDownArrowVisible: (e) => e.scrollDownArrowVisible,
	hasScrollArrows: (e) => e.hasScrollArrows
}, du = /*#__PURE__*/ D.createContext({
	elementRef: { current: null },
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: Oe,
	validationMode: "onSubmit",
	submitCountRef: { current: 0 }
});
function fu() {
	return D.useContext(du);
}
// node_modules/@base-ui/react/internals/useValueChanged.mjs
function pu(e, t) {
	let n = D.useRef(e), r = G(t);
	U(() => {
		n.current !== e && r(n.current), n.current = e;
	}, [e, r]);
}
// node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
function mu(e) {
	let t = D.useRef(""), n = D.useCallback((n) => {
		n.defaultPrevented || (t.current = n.pointerType, e(n, n.pointerType));
	}, [e]);
	return {
		onClick: D.useCallback((n) => {
			n.detail === 0 ? e(n, "keyboard") : ("pointerType" in n ? e(n, n.pointerType) : e(n, t.current), t.current = "");
		}, [e]),
		onPointerDown: n
	};
}
// node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
function hu(e, t) {
	let { onClick: n, onPointerDown: r } = mu(G((n, r) => {
		(typeof e == "function" ? e() : e) || t(r || (jn ? "touch" : ""));
	}));
	return D.useMemo(() => ({
		onClick: n,
		onPointerDown: r
	}), [n, r]);
}
function gu(e) {
	let [t, n] = D.useState(null), r = hu(e, n);
	return pu(e, (t) => {
		t && !e && n(null);
	}), D.useMemo(() => ({
		openMethod: t,
		triggerProps: r
	}), [t, r]);
}
// node_modules/@base-ui/utils/clamp.mjs
function _u(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
function vu(e, t) {
	return Math.max(0, e - t);
}
function yu(e, t) {
	if (t <= 0) return 0;
	let n = _u(e, 0, t), r = n, i = t - n, a = r <= 1, o = i <= 1;
	return a && o ? r <= i ? 0 : t : a ? 0 : o ? t : n;
}
// node_modules/@base-ui/react/select/root/SelectRoot.mjs
function bu(e) {
	let { id: t, value: n, defaultValue: r = null, onValueChange: i, open: a, defaultOpen: o = !1, onOpenChange: s, name: c, form: l, autoComplete: u, disabled: d = !1, readOnly: f = !1, required: p = !1, modal: m = !0, actionsRef: h, inputRef: g, onOpenChangeComplete: _, items: v, multiple: y = !1, itemToStringLabel: b, itemToStringValue: x, isItemEqualToValue: S = Kl, highlightItemOnHover: C = !0, children: w } = e, { clearErrors: T } = fu(), { setDirty: E, setTouched: O, setFocused: k, validityData: A, setFilled: j, name: M, disabled: N, validation: P, validationMode: F } = Bl(), I = Wl({ id: t }), L = N || d, ee = M ?? c, [R, te] = de({
		controlled: n,
		default: y ? r ?? ke : r,
		name: "Select",
		state: "value"
	}), [z, ne] = de({
		controlled: a,
		default: o,
		name: "Select",
		state: "open"
	}), B = D.useRef([]), re = D.useRef([]), ie = D.useRef(null), V = D.useRef(null), ae = D.useRef(0), oe = D.useRef(null), se = D.useRef([]), ce = D.useRef(!1), H = D.useRef(null), le = D.useRef(null), ue = D.useRef({
		allowSelectedMouseUp: !1,
		allowUnselectedMouseUp: !1,
		dragY: 0
	}), fe = D.useRef(!1), pe = D.useRef(R), { openMethod: me, triggerProps: he } = gu(z), ge = W(() => new vs({
		id: I,
		labelId: void 0,
		modal: m,
		multiple: y,
		disabled: L,
		readOnly: f,
		required: p,
		highlightItemOnHover: C,
		itemToStringLabel: b,
		itemToStringValue: x,
		isItemEqualToValue: S,
		value: R,
		open: z,
		mounted: z,
		transitionStatus: void 0,
		items: v,
		forceMount: !1,
		openMethod: null,
		activeIndex: null,
		selectedIndex: null,
		popupProps: Ae,
		triggerProps: Ae,
		itemRoot: {
			props: Ae,
			multiple: y,
			disabled: L,
			readOnly: f,
			isItemEqualToValue: S
		},
		triggerElement: null,
		positionerElement: null,
		listElement: null,
		popupSide: null,
		scrollUpArrowVisible: !1,
		scrollDownArrowVisible: !1,
		hasScrollArrows: !1
	}, {
		setValue: Oe,
		setOpen: Oe,
		handleScrollArrowVisibility: Oe,
		onOpenChangeComplete: Oe,
		listRef: B,
		popupRef: ie,
		scrollHandlerRef: V,
		scrollArrowsMountedCountRef: ae,
		valueRef: oe,
		valuesRef: se,
		labelsRef: re,
		typingRef: ce,
		selectionRef: ue,
		firstItemTextRef: H,
		selectedItemTextRef: le,
		alignItemWithTriggerActiveRef: fe,
		initialValueRef: pe
	}, uu)).current, [_e, ye] = D.useState(!1), { mounted: be, transitionStatus: xe, forceUnmount: Se } = dc({
		open: z,
		ref: ie,
		preventUnmountOnClose: _e,
		setPreventUnmountOnClose: ye,
		onUnmount() {
			ge.update({
				activeIndex: null,
				openMethod: null,
				scrollUpArrowVisible: !1,
				scrollDownArrowVisible: !1
			}), _?.(!1);
		}
	}), Ce = ge.useState("activeIndex"), we = ge.useState("selectedIndex"), Te = ge.useState("triggerElement"), Ee = ge.useState("positionerElement"), De = ts(me), je = me ?? De, Me = D.useMemo(() => y ? "" : su(R, x), [
		y,
		R,
		x
	]), Ne = D.useMemo(() => y && Array.isArray(R) ? R.map((e) => su(e, x)) : su(R, x), [
		y,
		R,
		x
	]);
	Vl(ns(Te), I, R, G(() => Ne), !L, c);
	let Pe = y ? Array.isArray(R) && R.length > 0 : R != null && Me !== "";
	U(() => {
		j(Pe);
	}, [Pe, j]), U(function() {
		let e = Ql(se.current, R, S, y);
		e === null && (le.current = null), z || ge.set("selectedIndex", e);
	}, [
		y,
		z,
		R,
		S,
		ge
	]), pu(R, () => {
		T(ee), E(Jl(R, A.initialValue, S)), P.change(R);
	});
	let Ie = G((e, t) => {
		let n = t, r = pc(n);
		s?.(e, n), t.isCanceled || (e || ye(r()), ne(e), e || t.reason !== "focus-out" && t.reason !== "outside-press" || (O(!0), k(!1), F === "onBlur" && P.commit(R)));
	});
	D.useImperativeHandle(h, () => ({
		unmount: Se,
		close: () => {
			ge.state.open && Ie(!1, _t(kt));
		}
	}), [
		Se,
		Ie,
		ge
	]);
	let Le = G((e, t) => {
		i?.(e, t), t.isCanceled || te(e);
	}), Re = G((e) => {
		let t = vu(e.scrollHeight, e.clientHeight), n = yu(e.scrollTop, t), r = n > 0, i = n < t;
		ge.set("scrollUpArrowVisible", r), ge.set("scrollDownArrowVisible", i);
	}), ze = _c({
		open: z,
		onOpenChange: Ie,
		elements: {
			reference: Te,
			floating: Ee
		}
	}), Be = sc(ze, {
		enabled: !L,
		event: "mousedown"
	}), Ve = uc(ze), He = wc(ze, {
		enabled: !L,
		listRef: B,
		activeIndex: Ce,
		selectedIndex: we,
		disabledIndices: ke,
		onNavigate(e) {
			(e !== null || z) && ge.set("activeIndex", e);
		},
		focusItemOnHover: C
	}), Ue = Tc(ze, {
		enabled: !L && (z || !f && !y),
		listRef: re,
		activeIndex: Ce,
		selectedIndex: we,
		disabledIndices: (e) => Ji(B.current[e]),
		onMatch(e) {
			z ? ge.set("activeIndex", e) : Le(se.current[e], _t(vt));
		},
		onTyping(e) {
			ce.current = e;
		}
	}), We = D.useMemo(() => Fe(Ue.reference, He.reference, Ve.reference, Be.reference, he), [
		Be.reference,
		Ue.reference,
		He.reference,
		Ve.reference,
		he
	]), Ge = D.useMemo(() => Fe(fc, Ue.floating, He.floating, Ve.floating), [
		Ue.floating,
		He.floating,
		Ve.floating
	]), Ke = He.item ?? Ae, qe = D.useMemo(() => ({
		props: Ke,
		multiple: y,
		disabled: L,
		readOnly: f,
		isItemEqualToValue: S
	}), [
		Ke,
		y,
		L,
		f,
		S
	]);
	ge.useContextCallback("setValue", Le), ge.useContextCallback("setOpen", Ie), ge.useContextCallback("handleScrollArrowVisibility", Re), ge.useContextCallback("onOpenChangeComplete", _), es(() => {
		ge.update({
			popupProps: Ge,
			triggerProps: We,
			itemRoot: qe
		});
	}), ge.useSyncedValues({
		id: I,
		modal: m,
		multiple: y,
		disabled: L,
		readOnly: f,
		required: p,
		highlightItemOnHover: C,
		value: R,
		open: z,
		mounted: be,
		transitionStatus: xe,
		popupProps: Ge,
		triggerProps: We,
		itemRoot: qe,
		items: v,
		itemToStringLabel: b,
		itemToStringValue: x,
		isItemEqualToValue: S,
		openMethod: je
	});
	let Je = ve(g, P.inputRef), Ye = y ? void 0 : ee, Xe = D.useMemo(() => !y || !Array.isArray(R) || !ee ? null : R.map((e) => {
		let t = su(e, x);
		return /*#__PURE__*/ (0, K.jsx)("input", {
			type: "hidden",
			form: l,
			name: ee,
			value: t,
			disabled: L
		}, t);
	}), [
		y,
		R,
		l,
		ee,
		x,
		L
	]);
	return /*#__PURE__*/ (0, K.jsxs)(kl.Provider, {
		value: ge,
		children: [
			/*#__PURE__*/ (0, K.jsx)(Al.Provider, {
				value: ze,
				children: w
			}),
			/*#__PURE__*/ (0, K.jsx)("input", {
				...P.getValidationProps(L, {
					onFocus() {
						ge.state.triggerElement?.focus({ focusVisible: !0 });
					},
					onChange(e) {
						if (e.nativeEvent.defaultPrevented || L || f) return;
						let t = e.currentTarget.value, n = _t(vt, e.nativeEvent);
						function r() {
							if (y) return;
							let e = t.toLowerCase(), r = se.current.findIndex((t) => su(t, x).toLowerCase() === e || ou(t, b).toLowerCase() === e);
							r === -1 && (r = se.current.findIndex((t, n) => {
								let r = re.current[n];
								return r != null && r.toLowerCase() === e;
							}));
							let i = se.current[r];
							i != null && Le(i, n);
						}
						ge.set("forceMount", !0), queueMicrotask(r);
					}
				}),
				id: I && Ye == null ? `${I}-hidden-input` : void 0,
				form: l,
				name: Ye,
				autoComplete: u,
				value: Me,
				disabled: L,
				required: p && !(y && Pe),
				readOnly: f,
				ref: Je,
				style: ee ? $o : Qo,
				tabIndex: -1,
				"aria-hidden": !0,
				suppressHydrationWarning: !0
			}),
			Xe
		]
	});
}
// node_modules/@base-ui/react/utils/resolveAriaLabelledBy.mjs
function xu(e, t) {
	return e ?? t;
}
// node_modules/@base-ui/react/internals/field-root-context/useSetFieldFocused.mjs
function Su(e, t, n) {
	let { setFocused: r, focusOwnerRef: i } = Bl(), a = G((t) => {
		(t ? !e : i.current === a) && (i.current = t && a, n?.(t), r(t));
	});
	return U(() => {
		let e = t.current;
		return e?.getRootNode()?.activeElement === e && a(!0), () => a(!1);
	}, [
		e,
		t,
		a
	]), a;
}
// node_modules/@base-ui/react/utils/getPseudoElementBounds.mjs
var Cu = 5;
function wu(e, t) {
	let n = Tu(t);
	return e.clientX >= n.left - Cu && e.clientX <= n.right + Cu && e.clientY >= n.top - Cu && e.clientY <= n.bottom + Cu;
}
function Tu(e) {
	let t = e.getBoundingClientRect(), n = It(e);
	if (Rn) return t;
	let r = n.getComputedStyle(e, "::before"), i = n.getComputedStyle(e, "::after");
	if (r.content === "none" && i.content === "none") return t;
	let a = parseFloat(r.width) || 0, o = parseFloat(r.height) || 0, s = parseFloat(i.width) || 0, c = parseFloat(i.height) || 0, l = Math.max(t.width, a, s), u = Math.max(t.height, o, c), d = l - t.width, f = u - t.height;
	return {
		left: t.left - d / 2,
		right: t.right + d / 2,
		top: t.top - f / 2,
		bottom: t.bottom + f / 2
	};
}
var Eu = "data-popup-side", Du = 400, Ou = {
	...ur,
	...Ll,
	popupSide: (e) => e ? { [Eu]: e } : null,
	value: () => null
}, ku = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, id: i, disabled: a = !1, nativeButton: o = !0, style: s, ...c } = e, { setTouched: l, validationMode: u, validation: d, state: f, disabled: p } = Bl(), { labelId: m } = Ul(), h = jl(), g = h.useState("readOnly"), _ = h.useState("required"), v = h.useState("disabled"), y = p || v || a, b = h.useState("open"), x = h.useState("mounted"), S = h.useState("value"), C = h.useState("triggerProps"), w = h.useState("positionerElement"), T = h.useState("listElement"), E = h.useState("popupSide"), O = h.useState("id"), k = h.useState("labelId"), A = h.useState("hasSelectedValue"), j = x && w ? E : null, M = i ?? O, N = xu(m, k);
	Wl({ id: i });
	let P = ns(w), F = D.useRef(null), I = Su(y, F), { getButtonProps: L, buttonRef: ee } = _n({
		disabled: y,
		native: o
	}), R = h.useStateSetter("triggerElement"), te = Cs(), z = Cs(), ne = Cs();
	D.useEffect(() => {
		if (b) return ne.start(Du, () => {
			h.context.selectionRef.current.allowUnselectedMouseUp = !0, h.context.selectionRef.current.allowSelectedMouseUp = !0;
		}), () => {
			ne.clear();
		};
		h.context.selectionRef.current = {
			allowSelectedMouseUp: !1,
			allowUnselectedMouseUp: !1,
			dragY: 0
		}, z.clear();
	}, [
		b,
		h,
		z,
		ne
	]);
	let B = Fe(C, {
		id: M,
		role: "combobox",
		"aria-expanded": b,
		"aria-haspopup": "listbox",
		"aria-controls": b ? T?.id ?? gr(w)?.id : void 0,
		"aria-labelledby": N,
		"aria-readonly": g || void 0,
		"aria-required": _ || void 0,
		tabIndex: y ? -1 : 0,
		onFocus(e) {
			I(!0), b && h.context.alignItemWithTriggerActiveRef.current && h.context.setOpen(!1, _t(vt, e.nativeEvent)), te.start(0, () => {
				h.set("forceMount", !0);
			});
		},
		onBlur(e) {
			Bn(w, e.relatedTarget) || (l(!0), I(!1), u === "onBlur" && d.commit(S));
		},
		onMouseDown(e) {
			if (b) return;
			let t = on(e.currentTarget);
			function n(e) {
				if (!F.current) return;
				let t = e.target;
				Bn(F.current, t) || Bn(P.current, t) || wu(e, F.current) || h.context.setOpen(!1, _t(Tt, e));
			}
			z.start(0, () => {
				t.addEventListener("mouseup", n, { once: !0 });
			});
		}
	}, c, L), re = d.getValidationProps(y, B);
	re.role = "combobox";
	let ie = {
		...f,
		open: b,
		disabled: y,
		value: S,
		readOnly: g,
		popupSide: j,
		placeholder: !A
	};
	return Je("button", e, {
		ref: [
			t,
			F,
			ee,
			R
		],
		state: ie,
		stateAttributesMapping: Ou,
		props: re
	});
}), Au = { value: () => null }, ju = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { className: n, render: r, children: i, placeholder: a, style: o, ...s } = e, c = jl(), l = c.useState("value"), u = c.useState("items"), d = c.useState("itemToStringLabel"), f = c.useState("hasSelectedValue"), p = !f && a != null && i == null, m = c.useState("hasNullItemLabel", p), h = {
		value: l,
		placeholder: !f
	}, g = null;
	return g = typeof i == "function" ? i(l) : i ?? (p && !m ? a : Array.isArray(l) ? lu(l, u, d) : cu(l, u, d)), Je("span", e, {
		state: h,
		ref: [t, c.context.valueRef],
		props: [{ children: g }, s],
		stateAttributesMapping: Au
	});
}), Mu = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e;
	return Je("span", e, {
		state: { open: jl().useState("open") },
		ref: t,
		props: [{
			"aria-hidden": !0,
			children: "▼"
		}, a],
		stateAttributesMapping: lr
	});
}), Nu = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let n = jl(), r = n.useState("mounted"), i = n.useState("forceMount");
	return r || i ? /*#__PURE__*/ (0, K.jsx)(Ks, {
		ref: t,
		...e
	}) : null;
});
// node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
function Pu(e) {
	let { nodeId: t, externalTree: n, rootContext: r } = e, i = r.useState("referenceElement"), a = r.useState("floatingElement"), o = r.useState("domReferenceElement"), s = r.useState("open"), c = r.useState("floatingId"), [l, u] = D.useState(null), d = D.useRef(null), f = Zs(n), p = D.useMemo(() => ({
		reference: i,
		floating: a,
		domReference: o
	}), [
		i,
		a,
		o
	]), m = Cl({
		...e,
		elements: {
			...p,
			...l && { reference: l }
		}
	}), h = D.useCallback((e) => {
		let t = zt(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			getClientRects: () => e.getClientRects(),
			contextElement: e
		} : e;
		u(t), m.refs.setReference(t);
	}, [m.refs]), g = D.useMemo(() => ({
		...m.refs,
		setPositionReference: h,
		domReference: d
	}), [m.refs, h]), _ = D.useMemo(() => ({
		...m.elements,
		domReference: o
	}), [m.elements, o]), v = D.useMemo(() => ({
		...m,
		dataRef: r.context.dataRef,
		open: s,
		onOpenChange: r.setOpen,
		events: r.context.events,
		floatingId: c,
		refs: g,
		elements: _,
		nodeId: t,
		rootStore: r
	}), [
		m,
		g,
		_,
		t,
		r,
		s,
		c
	]);
	return U(() => {
		o && (d.current = o);
	}, [o]), U(() => {
		r.context.dataRef.current.floatingContext = v;
		let e = f?.nodesRef.current.find((e) => e.id === t);
		e && (e.context = v);
	}), D.useMemo(() => ({
		...m,
		context: v,
		refs: g,
		elements: _,
		rootStore: r
	}), [
		m,
		g,
		_,
		v,
		r
	]);
}
// node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
var Fu = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Mr(e, t) || {};
		if (l == null) return {};
		let d = Xr(u), f = {
			x: n,
			y: r
		}, p = Rr(i), m = Ir(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = s.floating[y] || a.floating[m], C = b / 2 - x / 2, w = S / 2 - h[m] / 2 - 1, T = Math.min(d[_], w), E = Math.min(d[v], w), D = T, O = S - h[m] - E, k = S / 2 - h[m] / 2 + C, A = jr(D, k, O), j = !c.arrow && Pr(i) != null && k !== A && a.reference[m] / 2 - (k < D ? T : E) - h[m] / 2 < 0, M = j ? k < D ? k - D : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), Iu = (e, t) => {
	let { name: n, fn: r } = Fu(e);
	return {
		name: n,
		fn: r,
		options: [e, t]
	};
}, Lu = {
	name: "hide",
	async fn(e) {
		let { width: t, height: n, x: r, y: i } = e.rects.reference, a = t === 0 && n === 0 && r === 0 && i === 0, o = await e.platform.detectOverflow(e, { elementContext: "reference" });
		return { data: { referenceHidden: o.top - n >= 0 || o.right - t >= 0 || o.bottom - n >= 0 || o.left - t >= 0 || a } };
	}
}, Ru = {
	sideX: "left",
	sideY: "top"
}, zu = "--available-width", Bu = "--available-height", Vu = "--anchor-width", Hu = "--anchor-height", Uu = "--transform-origin", Wu = zu, Gu = Bu;
function Ku(e, t, n) {
	let r = e === "inline-start" || e === "inline-end";
	return {
		top: "top",
		right: r ? n ? "inline-start" : "inline-end" : "right",
		bottom: "bottom",
		left: r ? n ? "inline-end" : "inline-start" : "left"
	}[t];
}
function qu(e, t, n) {
	let { rects: r, placement: i } = e;
	return {
		side: Ku(t, Nr(i), n),
		align: Pr(i) || "center",
		anchor: {
			width: r.reference.width,
			height: r.reference.height
		},
		positioner: {
			width: r.floating.width,
			height: r.floating.height
		}
	};
}
function Ju(e) {
	return Yu(e, Pu);
}
function Yu(e, t) {
	let { anchor: n, positionMethod: r = "absolute", side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, collisionBoundary: c, collisionPadding: l = 5, sticky: u = !1, arrowPadding: d = 5, disableAnchorTracking: f = !1, inline: p, keepMounted: m = !1, floatingRootContext: h, mounted: g, collisionAvoidance: _, shift: v, nodeId: y, adaptiveOrigin: b, lazyFlip: x = !1, externalTree: S } = e, C = _.side || "flip", w = _.align || "flip", T = _.fallbackAxisSide || "end", E = v?.crossAxis ?? !1, O = v?.rootBoundary, k = typeof n == "function" ? n : void 0, A = G(k), j = k ? A : n, M = ns(n), N = ns(g), P = la() === "rtl", [F, I] = D.useState(null);
	!g && F !== null && I(null);
	let L = x === "placement", ee = F ? Nr(F) : null, R = F && L ? Pr(F) || "center" : null, te = ee || {
		top: "top",
		right: "right",
		bottom: "bottom",
		left: "left",
		"inline-end": P ? "left" : "right",
		"inline-start": P ? "right" : "left"
	}[i], z = R || o, ne = z === "center" ? te : `${te}-${z}`, B = l;
	typeof B == "number" ? B = {
		top: B,
		right: B,
		bottom: B,
		left: B
	} : B &&= {
		top: B.top || 0,
		right: B.right || 0,
		bottom: B.bottom || 0,
		left: B.left || 0
	};
	let re = +(i === "bottom"), ie = +(i === "top"), V = +(i === "right"), ae = +(i === "left"), oe = {
		boundary: c === "clipping-ancestors" ? "clippingAncestors" : c,
		padding: B
	}, se = D.useRef(null), ce = ns(a), H = ns(s), le = typeof a == "function" ? 0 : a, ue = typeof s == "function" ? 0 : s, de = [];
	p && de.push(p), de.push(wl((e) => {
		let t = qu(e, i, P), n = typeof ce.current == "function" ? ce.current(t) : ce.current, r = typeof H.current == "function" ? H.current(t) : H.current;
		return {
			mainAxis: n,
			crossAxis: r,
			alignmentAxis: r
		};
	}, [
		le,
		ue,
		P,
		i
	]));
	let fe = w === "none" && C !== "shift", pe = !fe && (u || E || C === "shift"), W = C === "none" ? null : Dl({
		...oe,
		padding: {
			top: B.top + 1 + re,
			right: B.right + 1 + ae,
			bottom: B.bottom + 1 + ie,
			left: B.left + 1 + V
		},
		mainAxis: !E && C === "flip",
		crossAxis: w === "flip" && "alignment",
		fallbackAxisSideDirection: T
	}), me = fe ? null : Tl({
		...oe,
		rootBoundary: O,
		mainAxis: w !== "none",
		crossAxis: pe,
		limiter: u || E ? void 0 : El((e) => {
			if (!se.current) return {};
			let { width: t, height: n } = se.current.getBoundingClientRect(), r = Lr(Nr(e.placement)), i = r === "y" ? t : n, a = r === "y" ? B.left + B.right : B.top + B.bottom;
			return { offset: i / 2 + a / 2 };
		})
	}, [
		oe,
		u,
		E,
		O,
		B,
		w
	]);
	C === "shift" || w === "shift" || z === "center" ? de.push(me, W) : de.push(W, me), de.push(Ol({
		...oe,
		apply({ elements: { floating: e }, availableWidth: t, availableHeight: n, rects: r }) {
			if (!N.current) return;
			let i = e.style;
			i.setProperty(Wu, `${t}px`), i.setProperty(Gu, `${n}px`);
			let a = It(e).devicePixelRatio || 1, { x: o, y: s, width: c, height: l } = r.reference, u = (Math.round((o + c) * a) - Math.round(o * a)) / a, d = (Math.round((s + l) * a) - Math.round(s * a)) / a;
			i.setProperty(Vu, `${u}px`), i.setProperty(Hu, `${d}px`);
		}
	}), Iu((e) => ({
		element: se.current || on(e.elements.floating).createElement("div"),
		padding: se.current ? d : 0
	}), [d]), {
		name: "transformOrigin",
		fn(e) {
			let { elements: { floating: t }, middlewareData: n, placement: r, platform: o, rects: s, y: c } = e, l = Nr(r), u = Pr(r), d = Lr(l) === "y", f = se.current, p = typeof a == "function" ? a(qu(e, i, P)) : a, m;
			m = !f && u && Math.abs(d ? n.shift?.x || 0 : n.shift?.y || 0) <= 1 ? u === "start" === (d && o.isRTL?.(t) === !0) ? "100%" : "0%" : `${(d ? n.arrow?.x || 0 : n.arrow?.y || 0) + (d ? f?.clientWidth || 0 : f?.clientHeight || 0) / 2}px`;
			let h = l === "top" || l === "left" ? `calc(100% + ${p}px)` : `${-p}px`;
			return pe && d && Math.abs(n.shift?.y || 0) > p && (h = `${s.reference.y + s.reference.height / 2 - c}px`), t.style.setProperty(Uu, d ? `${m} ${h}` : `${h} ${m}`), {};
		}
	}, Lu, b), U(() => {
		!g && h && h.update({
			referenceElement: null,
			floatingElement: null,
			domReferenceElement: null,
			positionReference: null
		});
	}, [g, h]);
	let he = D.useMemo(() => ({
		ancestorScroll: !f,
		elementResize: !f && typeof ResizeObserver < "u",
		layoutShift: !f && typeof IntersectionObserver < "u"
	}), [f]), { refs: ge, elements: _e, x: ve, y: ye, middlewareData: be, update: xe, placement: Se, context: Ce, isPositioned: we, floatingStyles: Te } = t({
		rootContext: h,
		open: m ? g : void 0,
		placement: ne,
		middleware: de,
		strategy: r,
		whileElementsMounted: m ? void 0 : (...e) => dl(...e, he),
		nodeId: y,
		externalTree: S
	}), { sideX: Ee, sideY: De } = be.adaptiveOrigin || Ru, Oe = we ? r : "fixed", ke = D.useMemo(() => {
		let e;
		return e = we ? b ? {
			position: Oe,
			[Ee]: ve,
			[De]: ye
		} : {
			...Te,
			position: Oe
		} : {
			position: Oe,
			top: 0,
			left: 0
		}, e[Wu] = "100vw", e[Gu] = "100vh", we || (e.opacity = 0), e;
	}, [
		b,
		Oe,
		Ee,
		ve,
		De,
		ye,
		Te,
		we
	]), Ae = D.useRef(null);
	U(() => {
		if (!g) return;
		let e = M.current, t = typeof e == "function" ? e() : e, n = (Q(t) ? t.current : t) || null;
		n !== Ae.current && (ge.setPositionReference(n), Ae.current = n);
	}, [
		g,
		ge,
		j,
		M
	]), D.useEffect(() => {
		if (!g) return;
		let e = M.current;
		typeof e != "function" && Q(e) && e.current !== Ae.current && (ge.setPositionReference(e.current), Ae.current = e.current);
	}, [
		g,
		ge,
		j,
		M
	]), D.useEffect(() => {
		if (m && g && _e.reference && _e.floating) return dl(_e.reference, _e.floating, xe, he);
	}, [
		m,
		g,
		_e,
		xe,
		he
	]);
	let je = Nr(Se), Me = Ku(i, je, P), Ne = Pr(Se) || "center", Pe = !!be.hide?.referenceHidden;
	U(() => {
		x && g && we && (je !== te || L && Ne !== z) && I(Se);
	}, [
		x,
		L,
		g,
		we,
		Se,
		je,
		Ne,
		te,
		z
	]);
	let Fe = D.useMemo(() => ({
		position: "absolute",
		top: be.arrow?.y,
		left: be.arrow?.x
	}), [be.arrow]), Ie = be.arrow?.centerOffset !== 0;
	return D.useMemo(() => ({
		positionerStyles: ke,
		arrowStyles: Fe,
		arrowRef: se,
		arrowUncentered: Ie,
		side: Me,
		align: Ne,
		physicalSide: je,
		anchorHidden: Pe,
		refs: ge,
		context: Ce,
		isPositioned: we,
		update: xe
	}), [
		ke,
		Fe,
		se,
		Ie,
		Me,
		Ne,
		je,
		Pe,
		ge,
		Ce,
		we,
		xe
	]);
}
function Q(e) {
	return e != null && "current" in e;
}
// node_modules/@base-ui/react/select/positioner/SelectPositionerContext.mjs
var Xu = /*#__PURE__*/ D.createContext(void 0);
function Zu() {
	let e = D.useContext(Xu);
	if (!e) throw Error(ft(59));
	return e;
}
// node_modules/@base-ui/react/utils/InternalBackdrop.mjs
var Qu = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { cutout: n, ...r } = e, i;
	if (n) {
		let e = n.getBoundingClientRect();
		i = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`;
	}
	return /*#__PURE__*/ (0, K.jsx)("div", {
		ref: t,
		role: "presentation",
		"data-base-ui-inert": "",
		...r,
		style: {
			position: "fixed",
			inset: 0,
			userSelect: "none",
			WebkitUserSelect: "none",
			clipPath: i
		}
	});
});
// node_modules/@base-ui/react/select/popup/utils.mjs
function $u(e, t) {
	e && Object.assign(e.style, t);
}
var ed = {
	position: "relative",
	maxHeight: "100%",
	overflowX: "hidden",
	overflowY: "auto"
};
// node_modules/@base-ui/react/internals/getDisabledMountTransitionStyles.mjs
function td(e) {
	return e === "starting" ? zs : Ae;
}
// node_modules/@base-ui/react/utils/usePositioner.mjs
function nd(e, t, { styles: n, transitionStatus: r, props: i, refs: a, hidden: o, inert: s = !1 }) {
	let c = { ...n };
	return s && (c.pointerEvents = "none"), Je("div", e, {
		state: t,
		ref: a,
		props: [
			{
				role: "presentation",
				hidden: o,
				style: c
			},
			td(r),
			i
		],
		stateAttributesMapping: dr
	});
}
// node_modules/@base-ui/utils/useScrollLock.mjs
var rd = {}, id = {}, ad = "";
function od(e, t) {
	return Ht(e) ? e : t;
}
function sd(e, t, n) {
	return /hidden|clip/.test(e.getComputedStyle(od(t, n)).overflowY);
}
function cd(e) {
	if (typeof document > "u") return !1;
	let t = on(e);
	return It(t).innerWidth - t.documentElement.clientWidth > 0;
}
function ld(e) {
	if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u") return !1;
	let t = on(e), n = t.documentElement, r = t.body, i = od(n, r), a = i.style.overflowY, o = n.style.scrollbarGutter;
	n.style.scrollbarGutter = "stable", i.style.overflowY = "scroll";
	let s = i.offsetWidth;
	i.style.overflowY = "hidden";
	let c = i.offsetWidth;
	return i.style.overflowY = a, n.style.scrollbarGutter = o, s === c;
}
function ud(e) {
	let t = on(e), n = t.documentElement, r = t.body, i = od(n, r), a = {
		overflowY: i.style.overflowY,
		overflowX: i.style.overflowX
	};
	return Object.assign(i.style, {
		overflowY: "hidden",
		overflowX: "hidden"
	}), () => {
		Object.assign(i.style, a);
	};
}
function dd(e) {
	let t = on(e), n = t.documentElement, r = t.body, i = It(n), a = 0, o = 0, s = !1, c = Ri.create();
	if (In && (i.visualViewport?.scale ?? 1) !== 1) return () => {};
	function l() {
		let t = i.getComputedStyle(n), c = i.getComputedStyle(r), l = (t.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
		a = n.scrollTop, o = n.scrollLeft, rd = {
			scrollbarGutter: n.style.scrollbarGutter,
			overflowY: n.style.overflowY,
			overflowX: n.style.overflowX
		}, ad = n.style.scrollBehavior, id = {
			position: r.style.position,
			height: r.style.height,
			width: r.style.width,
			boxSizing: r.style.boxSizing,
			overflowY: r.style.overflowY,
			overflowX: r.style.overflowX,
			scrollBehavior: r.style.scrollBehavior
		};
		let u = n.scrollHeight > n.clientHeight, d = n.scrollWidth > n.clientWidth, f = t.overflowY === "scroll" || c.overflowY === "scroll", p = t.overflowX === "scroll" || c.overflowX === "scroll", m = Math.max(0, i.innerWidth - r.clientWidth), h = Math.max(0, i.innerHeight - r.clientHeight), g = parseFloat(c.marginTop) + parseFloat(c.marginBottom), _ = parseFloat(c.marginLeft) + parseFloat(c.marginRight), v = od(n, r);
		s = ld(e), s ? (n.style.scrollbarGutter = l, v.style.overflowY = "hidden", v.style.overflowX = "hidden") : (Object.assign(n.style, {
			scrollbarGutter: l,
			overflowY: "hidden",
			overflowX: "hidden"
		}), (u || f) && (n.style.overflowY = "scroll"), (d || p) && (n.style.overflowX = "scroll"), Object.assign(r.style, {
			position: "relative",
			height: g || h ? `calc(100dvh - ${g + h}px)` : "100dvh",
			width: _ || m ? `calc(100vw - ${_ + m}px)` : "100vw",
			boxSizing: "border-box",
			overflowY: "hidden",
			overflowX: "hidden",
			scrollBehavior: "unset"
		}), r.scrollTop = a, r.scrollLeft = o, n.setAttribute("data-base-ui-scroll-locked", ""), n.style.scrollBehavior = "unset");
	}
	function u() {
		Object.assign(n.style, rd), Object.assign(r.style, id), s || (n.scrollTop = a, n.scrollLeft = o, n.removeAttribute("data-base-ui-scroll-locked"), n.style.scrollBehavior = ad);
	}
	function d() {
		u(), c.request(l);
	}
	l();
	let f = bs(i, "resize", d);
	return () => {
		c.cancel(), u(), typeof i.removeEventListener == "function" && f();
	};
}
var fd = new class {
	lockCount = 0;
	restore = null;
	timeoutLock = Ss.create();
	timeoutUnlock = Ss.create();
	acquire(e) {
		return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e)), this.release;
	}
	release = () => {
		--this.lockCount, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
	};
	unlock = () => {
		this.lockCount === 0 && this.restore && (this.restore?.(), this.restore = null);
	};
	lock(e) {
		if (this.lockCount === 0 || this.restore !== null) return;
		let t = on(e), n = t.documentElement, r = t.body, i = It(n);
		if (sd(i, n, r)) {
			let t = new i.MutationObserver(() => {
				sd(i, n, r) || (t.disconnect(), this.restore = null, this.lock(e));
			}), a = { attributes: !0 };
			t.observe(n, a), t.observe(r, a), this.restore = () => t.disconnect();
			return;
		}
		let a = jn || !cd(e);
		this.restore = a ? ud(e) : dd(e);
	}
}();
function pd(e = !0, t = null) {
	U(() => {
		if (e) return fd.acquire(t);
	}, [e, t]);
}
// node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var md = 20;
function hd(e, t, n, r) {
	let [i, a] = D.useState(!1);
	U(() => {
		if (!e || !t || n == null) {
			a(!1);
			return;
		}
		let r = on(n).documentElement.clientWidth, i = n.offsetWidth;
		a(r > 0 && i > 0 && i >= r - md);
	}, [
		e,
		t,
		n
	]), pd(e && (!t || i), r);
}
// node_modules/@base-ui/react/select/positioner/SelectPositioner.mjs
var gd = { position: "fixed" }, _d = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { anchor: n, className: r, render: i, positionMethod: a, side: o, align: s, sideOffset: c, alignOffset: l, collisionBoundary: u = "clipping-ancestors", collisionPadding: d, arrowPadding: f, sticky: p, disableAnchorTracking: m, alignItemWithTrigger: h = !0, collisionAvoidance: g = Bs, style: _, ...v } = e, y = jl(), b = Ml(), x = y.useState("open"), S = y.useState("mounted"), C = y.useState("modal"), w = y.useState("value"), T = y.useState("openMethod"), E = y.useState("positionerElement"), O = y.useState("triggerElement"), k = y.useState("isItemEqualToValue"), A = y.useState("transitionStatus"), j = D.useRef(null), M = D.useRef(null), [N, P] = D.useState(h), F = S && N && T !== "touch";
	!S && N !== h && P(h), D.useImperativeHandle(y.context.alignItemWithTriggerActiveRef, () => F), hd((F || C) && x, T === "touch", E, O);
	let I = Ju({
		anchor: n,
		floatingRootContext: b,
		positionMethod: a,
		mounted: S,
		side: o,
		sideOffset: c,
		align: s,
		alignOffset: l,
		arrowPadding: f,
		collisionBoundary: u,
		collisionPadding: d,
		sticky: p,
		disableAnchorTracking: m ?? F,
		collisionAvoidance: g,
		keepMounted: !0
	}), L = F ? "none" : I.side, ee = F ? gd : I.positionerStyles, R = {
		open: x,
		side: L,
		align: I.align,
		anchorHidden: I.anchorHidden
	};
	U(() => {
		y.set("popupSide", I.side);
	}, [y, I.side]);
	let te = nd(e, R, {
		styles: ee,
		transitionStatus: A,
		props: v,
		refs: [t, y.useStateSetter("positionerElement")],
		hidden: !S,
		inert: !x
	}), z = D.useRef(0), ne = G((e) => {
		if (y.context.valuesRef.current.length === 0) return;
		let t = z.current;
		z.current = e.size;
		let n = _t(vt);
		if (t !== 0 && !y.state.multiple && w !== null && Xl(y.context.valuesRef.current, w, k) === -1) {
			let e = y.context.initialValueRef.current, t = e != null && Xl(y.context.valuesRef.current, e, k) !== -1 ? e : null;
			y.context.setValue(t, n), t === null && (y.set("selectedIndex", null), y.context.selectedItemTextRef.current = null);
		}
		if (t !== 0 && y.state.multiple && Array.isArray(w)) {
			let e = w.filter((e) => Xl(y.context.valuesRef.current, e, k) !== -1);
			e.length !== w.length && (y.context.setValue(e, n), e.length === 0 && (y.set("selectedIndex", null), y.context.selectedItemTextRef.current = null));
		}
		if (x && F) {
			y.update({
				scrollUpArrowVisible: !1,
				scrollDownArrowVisible: !1
			});
			let e = { height: "" };
			$u(E, e), $u(y.context.popupRef.current, e);
		}
	}), B = D.useMemo(() => ({
		...I,
		side: L,
		alignItemWithTriggerActive: F,
		setControlledAlignItemWithTrigger: P,
		scrollUpArrowRef: j,
		scrollDownArrowRef: M
	}), [
		I,
		L,
		F,
		P
	]);
	return /*#__PURE__*/ (0, K.jsx)(it, {
		elementsRef: y.context.listRef,
		labelsRef: y.context.labelsRef,
		onMapChange: ne,
		children: /*#__PURE__*/ (0, K.jsxs)(Xu.Provider, {
			value: B,
			children: [S && C && /*#__PURE__*/ (0, K.jsx)(Qu, {
				inert: Pi(!x),
				cutout: O
			}), te]
		})
	});
}), vd = "base-ui-disable-scrollbar", yd = {
	className: vd,
	getElement(e) {
		return /*#__PURE__*/ (0, K.jsx)("style", {
			nonce: e,
			href: vd,
			precedence: "base-ui:low",
			children: `.${vd}{scrollbar-width:none}.${vd}::-webkit-scrollbar{display:none}`
		});
	}
}, bd = /*#__PURE__*/ D.createContext(void 0);
function xd(e) {
	let t = D.useContext(bd);
	if (t === void 0 && !e) throw Error(ft(69));
	return t;
}
// node_modules/@base-ui/react/select/positioner/SelectPositionerCssVars.mjs
var Sd = "--transform-origin", Cd = {
	...dr,
	...Qn
}, wd = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, finalFocus: a, ...o } = e, s = jl(), c = s.useState("multiple"), l = s.useState("readOnly"), u = s.useState("highlightItemOnHover"), d = Ml(), { side: f, align: p, alignItemWithTriggerActive: m, isPositioned: h, setControlledAlignItemWithTrigger: g } = Zu(), _ = xd(!0) != null, v = la(), { nonce: y, disableStyleElements: b } = Ni(), x = s.useState("id"), S = s.useState("open"), C = s.useState("openMethod"), w = s.useState("mounted"), T = s.useState("popupProps"), E = s.useState("transitionStatus"), O = s.useState("triggerElement"), k = s.useState("positionerElement"), A = s.useState("listElement"), j = D.useRef(!1), M = D.useRef(!1), N = D.useRef({}), P = zi(), F = G((e) => {
		if (!k || !s.context.popupRef.current || !M.current) return;
		let t = k.style.top === "0px", n = k.style.bottom === "0px";
		if (j.current || !m || !t && !n) {
			s.context.handleScrollArrowVisibility(e);
			return;
		}
		let r = Dd(k), i = Od(k.getBoundingClientRect().height, "y", r), a = on(k), o = It(k), c = o.getComputedStyle(k), l = parseFloat(c.marginTop), u = parseFloat(c.marginBottom), d = Td(o.getComputedStyle(s.context.popupRef.current)), f = Math.min(a.documentElement.clientHeight - l - u, d), p = e.scrollTop, h = Ed(e), g = null, _ = (e) => {
			k.style.height = `${e}px`;
		}, v = t ? h - p : p, y = Math.min(i + v, f);
		if (v <= 1) {
			let n = _u(v, 0, f - i);
			n > 0 && _(i + n), e.scrollTop = t ? h : 0, f - (i + n) <= 1 && (j.current = !0), s.context.handleScrollArrowVisibility(e);
			return;
		}
		f - y > 1 ? g = t ? Infinity : 0 : n && p < h && (g = p - (v - (i + v - f)));
		let b = Math.ceil(y);
		if (b !== 0 && _(b), g != null) {
			let t = _u(g, 0, Ed(e));
			Math.abs(e.scrollTop - t) > 1 && (e.scrollTop = t);
		}
		b >= f - 1 && (j.current = !0), s.context.handleScrollArrowVisibility(e);
	});
	D.useImperativeHandle(s.context.scrollHandlerRef, () => F, [F]), Ki({
		open: S,
		ref: s.context.popupRef,
		onComplete() {
			S && s.context.onOpenChangeComplete(!0);
		}
	});
	let I = {
		open: S,
		transitionStatus: E,
		side: f,
		align: p
	};
	U(() => {
		k && s.context.popupRef.current && !Object.keys(N.current).length && (N.current = {
			top: k.style.top || "0",
			left: k.style.left || "0",
			right: k.style.right,
			height: k.style.height,
			bottom: k.style.bottom,
			minHeight: k.style.minHeight,
			maxHeight: k.style.maxHeight,
			marginTop: k.style.marginTop,
			marginBottom: k.style.marginBottom
		});
	}, [s, k]), U(() => {
		S || m || (M.current = !1, j.current = !1, $u(k, N.current));
	}, [
		S,
		m,
		k
	]), U(() => {
		let e = s.context.popupRef.current;
		if (!S || !O || !k || !e || m && !h || s.state.transitionStatus === "ending") return;
		if (M.current = !0, e.style.removeProperty(Sd), !m) {
			P.request(() => s.context.handleScrollArrowVisibility(A || e));
			return;
		}
		let t = jd(e);
		try {
			let t = s.context.selectedItemTextRef.current;
			t?.isConnected || (t = !s.select("hasSelectedValue") && s.context.firstItemTextRef.current?.isConnected ? s.context.firstItemTextRef.current : null);
			let n = s.context.valueRef.current, r = It(k), i = r.getComputedStyle(k), a = r.getComputedStyle(e), o = on(O), c = Dd(O), l = kd(O.getBoundingClientRect(), c), d = kd(k.getBoundingClientRect(), c), f = l.height, p = A || e, m = p.scrollHeight, h = parseFloat(a.borderBottomWidth), _ = parseFloat(i.marginTop) || 10, y = parseFloat(i.marginBottom) || 10, b = parseFloat(i.minHeight) || 100, x = Td(a), S = o.documentElement.clientHeight - _ - y, C = o.documentElement.clientWidth, w = S - l.bottom + f, T, E = v === "rtl" ? l.right - d.width : l.left, D = 0;
			if (t && n) {
				let e = kd(n.getBoundingClientRect(), c);
				T = kd(t.getBoundingClientRect(), c), E = d.left + (v === "rtl" ? e.right - T.right : e.left - T.left);
				let r = e.top - l.top + e.height / 2;
				D = T.top - d.top + T.height / 2 - r;
			}
			let M = w + D + y + h, P = Math.min(S, M), F = S - _ - y, I = M - P, L = C - 5;
			k.style.left = `${_u(E, 5, L - d.width)}px`, k.style.height = `${P}px`, k.style.maxHeight = "none", k.style.marginTop = `${_}px`, k.style.marginBottom = `${y}px`, e.style.height = "100%";
			let ee = Ed(p), R = I >= ee - 1;
			R && (P = Math.min(S, d.height) - (I - ee));
			let te = l.top < 20 || l.bottom > S - 20 || Math.ceil(P) + 1 < Math.min(m, b), z = (r.visualViewport?.scale ?? 1) !== 1 && In;
			if (te || z) {
				$u(k, N.current), g(!1);
				return;
			}
			let ne = Math.max(b, P);
			if (R) {
				let e = Math.max(0, S - M);
				k.style.top = d.height >= F ? "0" : `${e}px`, k.style.height = `${P}px`, p.scrollTop = Ed(p);
			} else k.style.bottom = "0", p.scrollTop = I;
			if (T) {
				let t = d.top, n = d.height, r = T.top + T.height / 2, i = _u(n > 0 ? (r - t) / n * 100 : 50, 0, 100);
				e.style.setProperty(Sd, `50% ${i}%`);
			}
			(ne === S || P >= x) && (j.current = !0), s.context.handleScrollArrowVisibility(p), u && s.state.selectedIndex === null && s.state.activeIndex === null && s.context.listRef.current[0] != null && s.set("activeIndex", 0);
		} finally {
			t();
		}
	}, [
		s,
		S,
		k,
		O,
		m,
		g,
		P,
		A,
		u,
		v,
		h
	]), D.useEffect(() => {
		if (!m || !k || !S) return;
		let e = It(k);
		function t(e) {
			s.context.setOpen(!1, _t(At, e));
		}
		return bs(e, "resize", t);
	}, [
		s,
		m,
		k,
		S
	]);
	let L = {
		...A ? { role: "presentation" } : {
			role: "listbox",
			"aria-multiselectable": c || void 0,
			"aria-readonly": l || void 0,
			id: `${x}-list`
		},
		onKeyDown(e) {
			_ && Qi.has(e.key) && e.stopPropagation();
		},
		onScroll(e) {
			A || F(e.currentTarget);
		},
		...m && { style: A ? { height: "100%" } : ed },
		className: !A && m ? yd.className : void 0
	}, ee = Je("div", e, {
		ref: [t, s.context.popupRef],
		state: I,
		stateAttributesMapping: Cd,
		props: [
			T,
			L,
			td(E),
			o
		]
	});
	return /*#__PURE__*/ (0, K.jsxs)(D.Fragment, { children: [!b && yd.getElement(y), /*#__PURE__*/ (0, K.jsx)(oc, {
		context: d,
		modal: !1,
		disabled: !w,
		openInteractionType: C,
		returnFocus: a,
		restoreFocus: !0,
		children: ee
	})] });
});
function Td(e) {
	let t = e.maxHeight;
	return t.endsWith("px") && parseFloat(t) || Infinity;
}
function Ed(e) {
	return vu(e.scrollHeight, e.clientHeight);
}
function Dd(e) {
	return cl.getScale(e);
}
function Od(e, t, n) {
	return e / n[t];
}
function kd(e, t) {
	return Zr({
		x: Od(e.x, "x", t),
		y: Od(e.y, "y", t),
		width: Od(e.width, "x", t),
		height: Od(e.height, "y", t)
	});
}
var Ad = [
	["transform", "none"],
	["scale", "1"],
	["translate", "0 0"]
];
function jd(e) {
	let { style: t } = e, n = {};
	for (let [e, r] of Ad) n[e] = t.getPropertyValue(e), t.setProperty(e, r, "important");
	return () => {
		for (let [e] of Ad) {
			let r = n[e];
			r ? t.setProperty(e, r) : t.removeProperty(e);
		}
	};
}
// node_modules/@base-ui/react/select/list/SelectList.mjs
var Md = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, o = jl(), s = o.useState("multiple"), c = o.useState("readOnly"), { alignItemWithTriggerActive: l } = Zu(), u = o.useState("hasScrollArrows"), d = o.useState("openMethod"), f = {
		id: `${o.useState("id")}-list`,
		role: "listbox",
		"aria-multiselectable": s || void 0,
		"aria-readonly": c || void 0,
		onScroll(e) {
			o.context.scrollHandlerRef.current?.(e.currentTarget);
		},
		...l && { style: ed },
		className: u && d !== "touch" ? yd.className : void 0
	};
	return Je("div", e, {
		ref: [t, o.useStateSetter("listElement")],
		props: [f, a]
	});
}), Nd = /*#__PURE__*/ D.createContext(void 0);
function Pd() {
	let e = D.useContext(Nd);
	if (!e) throw Error(ft(57));
	return e;
}
// node_modules/@base-ui/react/select/item/SelectItem.mjs
var Fd = /*#__PURE__*/ D.memo(/*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, value: a = null, label: o, disabled: s = !1, nativeButton: c = !1, ...l } = e, u = D.useRef(null), d = xn({
		guess: !0,
		label: o,
		textRef: u
	}), f = jl(), { props: p, multiple: m, disabled: h, readOnly: g, isItemEqualToValue: _ } = f.useState("itemRoot"), v = h || s, y = f.useState("isActive", d.index), b = f.useState("open"), x = f.useState("isSelected", a), S = f.useState("isSelectedByFocus", d.index), C = d.index, w = D.useRef(null);
	U(() => {
		let e = f.context.valuesRef.current;
		return e[C] = a, () => {
			delete e[C];
		};
	}, [
		C,
		a,
		f
	]), U(() => {
		let e = f.state.value, t = f.state.selectedIndex, n = t, r;
		m && Array.isArray(e) ? (n = $l(C, a, f.context.valuesRef.current, e, _, t), r = n === C, C === t && !r && (f.context.selectedItemTextRef.current = null)) : (r = e !== void 0 && ql(a, e, _), r && (n = C)), f.set("selectedIndex", n), r && u.current && (f.context.selectedItemTextRef.current = u.current);
	}, [
		C,
		m,
		_,
		f,
		a
	]);
	let T = D.useRef("mouse"), E = D.useRef(!1), { getButtonProps: O, buttonRef: k } = _n({
		disabled: v,
		focusableWhenDisabled: !0,
		native: c,
		composite: !0
	}), A = {
		disabled: v,
		selected: x,
		highlighted: y
	};
	function j(e) {
		if (h || g) return;
		let t = f.state.value;
		if (m) {
			let n = Array.isArray(t) ? t : [], r = x ? eu(n, a, _) : [...n, a];
			f.context.setValue(r, _t(xt, e));
		} else f.context.setValue(a, _t(xt, e)), f.context.setOpen(!1, _t(xt, e));
	}
	function M() {
		f.context.selectionRef.current.dragY = 0;
	}
	let N = {
		role: "option",
		"aria-selected": x,
		tabIndex: b && y ? 0 : -1,
		onKeyDown(e) {
			f.set("activeIndex", C), e.key === " " && f.context.typingRef.current && e.preventDefault();
		},
		onClick(e) {
			let t = T.current !== "touch", n = e.nativeEvent.pointerType, r = t && xr(e.nativeEvent) && (n !== void 0 || y), i = t && !r && !E.current;
			E.current = !1, v || i || j(e.nativeEvent);
		},
		onPointerEnter(e) {
			T.current = e.pointerType;
		},
		onPointerMove(e) {
			if (e.pointerType === "mouse" && e.buttons === 1) {
				let t = f.context.selectionRef.current;
				t.dragY += e.movementY, t.dragY ** 2 >= 64 && (t.allowUnselectedMouseUp = !0);
			}
		},
		onPointerDown(e) {
			T.current = e.pointerType, E.current = !0, M();
		},
		onMouseUp() {
			if (M(), v || T.current === "touch" || E.current) return;
			let e = !f.context.selectionRef.current.allowSelectedMouseUp && x, t = !f.context.selectionRef.current.allowUnselectedMouseUp && !x;
			e || t || (E.current = !0, w.current?.click(), E.current = !1);
		}
	}, P = Je("div", e, {
		ref: [
			k,
			t,
			d.ref,
			w
		],
		state: A,
		props: [
			p,
			N,
			l,
			O
		]
	}), F = D.useMemo(() => ({
		selected: x,
		index: C,
		textRef: u,
		selectedByFocus: S
	}), [
		x,
		C,
		u,
		S
	]);
	return /*#__PURE__*/ (0, K.jsx)(Nd.Provider, {
		value: F,
		children: P
	});
})), Id = /*#__PURE__*/ D.memo(/*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, keepMounted: a, selected: o, ...s } = e, c = D.useRef(null), { transitionStatus: l, setMounted: u } = qi(o), d = Je("span", e, {
		ref: [t, c],
		state: {
			selected: o,
			transitionStatus: l
		},
		props: [{
			"aria-hidden": !0,
			children: "✔️"
		}, s],
		stateAttributesMapping: Qn
	});
	return Ki({
		batch: !0,
		enabled: !o,
		open: o,
		ref: c,
		onComplete() {
			o || u(!1);
		}
	}), d;
})), Ld = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { selected: n } = Pd();
	return e.keepMounted || n ? /*#__PURE__*/ (0, K.jsx)(Id, {
		...e,
		selected: n,
		ref: t
	}) : null;
}), Rd = /*#__PURE__*/ D.memo(/*#__PURE__*/ D.forwardRef(function(e, t) {
	let { index: n, textRef: r, selectedByFocus: i } = Pd(), a = jl(), { render: o, className: s, style: c, ...l } = e;
	return Je("div", e, {
		ref: [
			D.useCallback((e) => {
				e && (n === 0 && (a.context.firstItemTextRef.current = e), i && (a.context.selectedItemTextRef.current = e));
			}, [
				a,
				n,
				i
			]),
			t,
			r
		],
		props: l
	});
})), zd = /*#__PURE__*/ D.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, direction: a, keepMounted: o, ...s } = e, c = a === "up", l = jl(), { side: u, scrollDownArrowRef: d, scrollUpArrowRef: f } = Zu(), p = c ? "scrollUpArrowVisible" : "scrollDownArrowVisible", m = l.useState(p), h = l.useState("openMethod"), g = m && h !== "touch", _ = Cs(), v = c ? f : d, { mounted: y, transitionStatus: b, setMounted: x } = qi(g);
	U(() => (l.context.scrollArrowsMountedCountRef.current += 1, l.set("hasScrollArrows", !0), () => {
		l.context.scrollArrowsMountedCountRef.current = Math.max(0, l.context.scrollArrowsMountedCountRef.current - 1), l.context.scrollArrowsMountedCountRef.current === 0 && l.set("hasScrollArrows", !1);
	}), [l]), Ki({
		open: g,
		ref: v,
		onComplete() {
			g || x(!1);
		}
	});
	let S = Je("div", e, {
		ref: [t, v],
		state: {
			direction: a,
			visible: g,
			side: u,
			transitionStatus: b
		},
		props: [{
			"aria-hidden": !0,
			children: c ? "▲" : "▼",
			style: { position: "absolute" },
			onMouseMove(e) {
				if (e.movementX === 0 && e.movementY === 0 || _.isStarted()) return;
				l.set("activeIndex", null);
				function t() {
					let e = l.state.listElement ?? l.context.popupRef.current;
					if (!e) return;
					l.set("activeIndex", null), l.context.handleScrollArrowVisibility(e);
					let n = vu(e.scrollHeight, e.clientHeight), r = yu(e.scrollTop, n), i = r === (c ? 0 : n), a = l.context.listRef.current;
					if (r !== e.scrollTop && (e.scrollTop = r), i) _.clear();
					else {
						if (a.length > 0) {
							let t = v.current?.offsetHeight || 0;
							e.scrollTop = Bd(a, c, r, e.clientHeight, t, n);
						}
						_.start(40, t);
					}
				}
				_.start(40, t);
			},
			onMouseLeave() {
				_.clear();
			}
		}, s],
		stateAttributesMapping: Qn
	});
	return y || o ? S : null;
});
function Bd(e, t, n, r, i, a) {
	if (t) {
		let t = 0, r = n + i - 1;
		for (let n = 0; n < e.length; n += 1) {
			let i = e[n];
			if (i && i.offsetTop >= r) {
				t = n;
				break;
			}
		}
		let o = Math.max(0, t - 1), s = e[o];
		return o < t && s ? yu(s.offsetTop - i, a) : 0;
	}
	let o = e.length - 1, s = n + r - i + 1;
	for (let t = 0; t < e.length; t += 1) {
		let n = e[t];
		if (n && n.offsetTop + n.offsetHeight > s) {
			o = Math.max(0, t - 1);
			break;
		}
	}
	let c = Math.min(e.length - 1, o + 1), l = e[c];
	return c > o && l ? yu(l.offsetTop + l.offsetHeight - r + i, a) : a;
}
// node_modules/@base-ui/react/select/scroll-down-arrow/SelectScrollDownArrow.mjs
var Vd = /*#__PURE__*/ D.forwardRef(function(e, t) {
	return /*#__PURE__*/ (0, K.jsx)(zd, {
		...e,
		ref: t,
		direction: "down"
	});
}), Hd = /*#__PURE__*/ D.forwardRef(function(e, t) {
	return /*#__PURE__*/ (0, K.jsx)(zd, {
		...e,
		ref: t,
		direction: "up"
	});
}), Ud = bu;
function Wd({ className: e, ...t }) {
	return /* @__PURE__ */ (0, K.jsx)(ju, {
		"data-slot": "select-value",
		className: Uo("flex flex-1 text-left", e),
		...t
	});
}
function Gd({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ (0, K.jsxs)(ku, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: Uo("flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ (0, K.jsx)(Mu, { render: /* @__PURE__ */ (0, K.jsx)(z, { className: "pointer-events-none size-4 text-muted-foreground" }) })]
	});
}
function Kd({ className: e, children: t, side: n = "bottom", sideOffset: r = 4, align: i = "center", alignOffset: a = 0, alignItemWithTrigger: o = !0, portalContainer: s, positionerClassName: c, ...l }) {
	return /* @__PURE__ */ (0, K.jsx)(Nu, {
		container: s,
		children: /* @__PURE__ */ (0, K.jsx)(_d, {
			side: n,
			sideOffset: r,
			align: i,
			alignOffset: a,
			alignItemWithTrigger: o,
			className: Uo("isolate z-50", c),
			children: /* @__PURE__ */ (0, K.jsxs)(wd, {
				"data-slot": "select-content",
				"data-align-trigger": o,
				className: Uo("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
				...l,
				children: [
					/* @__PURE__ */ (0, K.jsx)(Jd, {}),
					/* @__PURE__ */ (0, K.jsx)(Md, { children: t }),
					/* @__PURE__ */ (0, K.jsx)(Yd, {})
				]
			})
		})
	});
}
function qd({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, K.jsxs)(Fd, {
		"data-slot": "select-item",
		className: Uo("relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ (0, K.jsx)(Rd, {
			className: "flex flex-1 shrink-0 gap-2 whitespace-nowrap",
			children: t
		}), /* @__PURE__ */ (0, K.jsx)(Ld, {
			render: /* @__PURE__ */ (0, K.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ (0, K.jsx)(R, { className: "pointer-events-none" })
		})]
	});
}
function Jd({ className: e, ...t }) {
	return /* @__PURE__ */ (0, K.jsx)(Hd, {
		"data-slot": "select-scroll-up-button",
		className: Uo("top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ (0, K.jsx)(B, {})
	});
}
function Yd({ className: e, ...t }) {
	return /* @__PURE__ */ (0, K.jsx)(Vd, {
		"data-slot": "select-scroll-down-button",
		className: Uo("bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ (0, K.jsx)(z, {})
	});
}
// src/trade-import.ts
function Xd(e) {
	let t = [], n = [], r = "", i = !1, a = !1;
	if (e = e.replace(/^\uFEFF/, ""), e.length > 2e6) throw Error("文件超过 2 MB");
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		if (i) s === "\"" && e[o + 1] === "\"" ? (r += "\"", o++) : s === "\"" ? (i = !1, a = !0) : r += s;
		else {
			if (a && s !== "," && s !== "\n" && s !== "\r" && s !== " " && s !== "	") throw Error("CSV 引号格式有误");
			if (s === "\"") {
				if (r.trim()) throw Error("CSV 引号格式有误");
				r = "", i = !0, a = !1;
			} else s === "," ? (n.push(r.trim()), r = "", a = !1) : s === "\n" || s === "\r" ? (s === "\r" && e[o + 1] === "\n" && o++, n.push(r.trim()), n.some((e) => e) && t.push(n), n = [], r = "", a = !1) : a || (r += s);
		}
	}
	if (i) throw Error("CSV 引号未闭合");
	if (n.push(r.trim()), n.some((e) => e) && t.push(n), t.length < 2) throw Error("文件需要表头和至少一条成交");
	if (t.length > 20001) throw Error("文件超过 2 万条记录");
	return t;
}
var Zd = {
	symbol: [
		"symbol",
		"ticker",
		"股票代码",
		"证券代码",
		"代码",
		"标的代码"
	],
	side: [
		"side",
		"action",
		"direction",
		"买卖方向",
		"交易方向",
		"方向",
		"买卖"
	],
	quantity: [
		"quantity",
		"qty",
		"shares",
		"成交数量",
		"成交股数",
		"数量"
	],
	price: [
		"price",
		"fill price",
		"成交价格",
		"成交价",
		"价格"
	],
	time: [
		"time",
		"datetime",
		"execution time",
		"trade time",
		"成交时间",
		"成交日期时间",
		"交易时间"
	],
	id: [
		"id",
		"trade id",
		"execution id",
		"成交编号",
		"成交号",
		"交易编号"
	]
};
function Qd(e) {
	let t = (t) => e.findIndex((e) => Zd[t].includes(e.trim().toLowerCase()));
	return {
		symbol: t("symbol"),
		side: t("side"),
		quantity: t("quantity"),
		price: t("price"),
		time: t("time"),
		id: t("id")
	};
}
function $d(e) {
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "America/New_York",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(new Date(e));
}
function ef(e, t, n) {
	if (!n.trim()) throw Error("请选择账户");
	let r = [
		"symbol",
		"side",
		"quantity",
		"price",
		"time"
	];
	if (r.some((e) => t[e] < 0)) throw Error("请指定全部必需字段");
	if (new Set(r.map((e) => t[e])).size !== r.length) throw Error("必需字段不能共用一列");
	return e.slice(1).map((e, r) => {
		let i = (n) => e[t[n]]?.trim() || "", a = i("symbol").toUpperCase().replace(/\.US$/, ""), o = {
			BUY: "BUY",
			B: "BUY",
			买入: "BUY",
			买: "BUY",
			SELL: "SELL",
			S: "SELL",
			卖出: "SELL",
			卖: "SELL"
		}[i("side").toUpperCase()], s = Number(i("quantity").replace(/,/g, "")), c = Number(i("price").replace(/[$,]/g, "")), l = i("time").replace(" ", "T");
		if (!/(Z|[+-]\d\d:\d\d)$/i.test(l)) throw Error(`第 ${r + 2} 行时间须带时区，例如 2026-11-27T10:30:00-05:00`);
		let u = Date.parse(l);
		if (!/^[A-Z][A-Z0-9.\-]{0,14}$/.test(a) || !o || !Number.isFinite(s) || s <= 0 || !Number.isFinite(c) || c <= 0 || !Number.isFinite(u)) throw Error(`第 ${r + 2} 行的代码、方向、数量、价格或时间无效`);
		l = new Date(u).toISOString();
		let d = i("id");
		return {
			id: d ? `import:${n}:${d}` : `import:${n}:${a}:${o}:${s}:${c}:${l}`,
			symbol: a,
			side: o,
			quantity: s,
			price: c,
			time: l,
			date: $d(l),
			source: n
		};
	});
}
function tf(e, t) {
	let n = new Map(e.map((e) => [e.id, e])), r = 0;
	for (let e of t) {
		let t = n.get(e.id);
		if (t) {
			if (JSON.stringify(t) !== JSON.stringify(e)) throw Error("相同成交编号对应不同数据，请核对文件");
			r++;
		} else n.set(e.id, e);
	}
	return {
		trades: [...n.values()],
		duplicates: r
	};
}
async function nf(e, t) {
	let n = Uint8Array.from(atob(t.replace(/-/g, "+").replace(/_/g, "/") + "="), (e) => e.charCodeAt(0)), r = await crypto.subtle.importKey("raw", n, "AES-GCM", !1, ["encrypt"]), i = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12)), a = await crypto.subtle.encrypt({
		name: "AES-GCM",
		iv: i,
		additionalData: new TextEncoder().encode("jybd-trades-v1")
	}, r, new TextEncoder().encode(JSON.stringify(e))), o = new Uint8Array(i.length + a.byteLength);
	return o.set(i), o.set(new Uint8Array(a), 12), btoa(Array.from(o, (e) => String.fromCharCode(e)).join(""));
}
async function rf(e, t) {
	let n = Uint8Array.from(atob(t.replace(/-/g, "+").replace(/_/g, "/") + "="), (e) => e.charCodeAt(0)), r = await crypto.subtle.importKey("raw", n, "AES-GCM", !1, ["decrypt"]), i = Uint8Array.from(atob(e), (e) => e.charCodeAt(0)), a = await crypto.subtle.decrypt({
		name: "AES-GCM",
		iv: i.slice(0, 12),
		additionalData: new TextEncoder().encode("jybd-trades-v1")
	}, r, i.slice(12)), o = JSON.parse(new TextDecoder().decode(a));
	if (!Array.isArray(o)) throw Error("本机记录格式错误");
	return o;
}
// src/TradeImport.tsx
var af = "jybd-imported-trades-v1", of = {
	symbol: "股票代码",
	side: "买卖方向",
	quantity: "成交数量",
	price: "成交价格",
	time: "成交时间（含时区）",
	id: "成交编号（可选）"
};
function sf({ brokerTrades: e, onChange: t }) {
	let [n, r] = D.useState([]), [i, a] = D.useState([]), [o, s] = D.useState({
		symbol: -1,
		side: -1,
		quantity: -1,
		price: -1,
		time: -1,
		id: -1
	}), [c, l] = D.useState(""), [u, d] = D.useState(""), [f, p] = D.useState(!1), [m, h] = D.useState(null), [g, _] = D.useState("");
	D.useEffect(() => {
		let e = !1;
		return (async () => {
			try {
				let n = localStorage.getItem(af), i = localStorage.getItem("jybd-report-key-v1");
				if (n && !i) throw Error("本机成交记录密钥不可用");
				let a = n ? await rf(n, i) : [];
				e || (r(a), t(a), p(!0));
			} catch {
				e || d("本机成交记录解密失败；已保留原数据，请检查解锁密钥。");
			}
		})(), () => {
			e = !0;
		};
	}, [t]);
	let v = async (e) => {
		d(""), _(""), h(null);
		try {
			let t = e.target.files?.[0];
			if (!t) return;
			if (t.size > 2e6) throw Error("文件超过 2 MB");
			let n = Xd(new TextDecoder("utf-8", { fatal: !0 }).decode(await t.arrayBuffer()));
			a(n), s(Qd(n[0]));
		} catch (e) {
			a([]), d(e instanceof Error ? e.message : "读取失败，请使用 UTF-8 CSV 文件");
		}
		e.target.value = "";
	}, y = () => {
		try {
			d("");
			let t = ef(i, o, c), r = tf(n, t), a = t.filter((t) => e.some((e) => e.source === t.source && e.symbol === t.symbol && e.side === t.side && e.quantity === t.quantity && e.price === t.price && Date.parse(e.time) === Date.parse(t.time)));
			if (a.length) throw Error(`发现 ${a.length} 笔与已读取券商记录完全相同，请移除重复行后重试；不同来源不会自动合并。`);
			h(t), _(`共 ${t.length} 笔，其中 ${r.duplicates} 笔与本机记录重复；保存后新增 ${t.length - r.duplicates} 笔。没有成交编号时，同账户、代码、方向、数量、价格及时间完全相同会视为重复，请核对。`);
		} catch (e) {
			h(null), d(e instanceof Error ? e.message : "校验失败");
		}
	}, b = async () => {
		if (m && f) try {
			let e = localStorage.getItem("jybd-report-key-v1");
			if (!e) throw Error("请先解锁报告");
			let i = tf(n, m), o = await nf(i.trades, e);
			localStorage.setItem(af, o), r(i.trades), t(i.trades), h(null), a([]), d(""), _(`已加密保存到当前浏览器，共 ${i.trades.length} 笔。`);
		} catch (e) {
			d(e instanceof Error ? e.message : "加密保存失败，原记录未变");
		}
	};
	return /* @__PURE__ */ (0, K.jsxs)("details", {
		className: "trade-import",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("summary", { children: ["导入其他账户成交记录 ", /* @__PURE__ */ (0, K.jsxs)("small", { children: [
				"本机加密 · ",
				n.length,
				" 笔"
			] })] }),
			/* @__PURE__ */ (0, K.jsx)("p", { children: "选择券商导出的 UTF-8 CSV，确认列对应关系后预览。记录只在此浏览器加密保存，不上传、不同步到其他设备；清除浏览器数据会丢失。" }),
			/* @__PURE__ */ (0, K.jsxs)("p", { children: [
				"仅导入已成交的美股记录；只有网站已有个股可在其图表中显示。时间需包含时区，例如 ",
				/* @__PURE__ */ (0, K.jsx)("code", { children: "2026-11-27T10:30:00-05:00" }),
				"；导出文件若不含时区，请先核对并补上。支持中英文列名，也可手动对应。原始券商格式和编码可能不同。"
			] }),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "import-controls",
				children: [/* @__PURE__ */ (0, K.jsxs)("label", { children: ["账户 ", /* @__PURE__ */ (0, K.jsxs)("select", {
					value: c,
					onChange: (e) => {
						l(e.target.value), h(null);
					},
					children: [
						/* @__PURE__ */ (0, K.jsx)("option", {
							value: "",
							children: "请选择账户"
						}),
						/* @__PURE__ */ (0, K.jsx)("option", { children: "富途" }),
						/* @__PURE__ */ (0, K.jsx)("option", { children: "BBAE" }),
						/* @__PURE__ */ (0, K.jsx)("option", { children: "盈透" }),
						/* @__PURE__ */ (0, K.jsx)("option", { children: "长桥" })
					]
				})] }), /* @__PURE__ */ (0, K.jsxs)("label", {
					className: "import-file",
					children: ["选择 CSV ", /* @__PURE__ */ (0, K.jsx)("input", {
						type: "file",
						accept: ".csv,text/csv",
						onChange: (e) => void v(e),
						disabled: !f
					})]
				})]
			}),
			i.length > 0 && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("div", {
				className: "import-map",
				children: Object.keys(of).map((e) => /* @__PURE__ */ (0, K.jsxs)("label", { children: [of[e], /* @__PURE__ */ (0, K.jsxs)("select", {
					value: o[e],
					onChange: (t) => {
						s({
							...o,
							[e]: Number(t.target.value)
						}), h(null);
					},
					children: [/* @__PURE__ */ (0, K.jsx)("option", {
						value: -1,
						children: "请选择"
					}), i[0].map((e, t) => /* @__PURE__ */ (0, K.jsx)("option", {
						value: t,
						children: e || `第 ${t + 1} 列`
					}, t))]
				})] }, e))
			}), /* @__PURE__ */ (0, K.jsx)("button", {
				type: "button",
				className: "us-primary",
				onClick: y,
				children: "校验并预览"
			})] }),
			g && /* @__PURE__ */ (0, K.jsx)("p", {
				className: "import-message",
				role: "status",
				children: g
			}),
			u && /* @__PURE__ */ (0, K.jsx)("p", {
				className: "import-error",
				role: "alert",
				children: u
			}),
			m && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
				/* @__PURE__ */ (0, K.jsx)("div", {
					className: "us-table-wrap",
					children: /* @__PURE__ */ (0, K.jsxs)("table", { children: [/* @__PURE__ */ (0, K.jsx)("thead", { children: /* @__PURE__ */ (0, K.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, K.jsx)("th", { children: "代码" }),
						/* @__PURE__ */ (0, K.jsx)("th", { children: "方向" }),
						/* @__PURE__ */ (0, K.jsx)("th", { children: "数量" }),
						/* @__PURE__ */ (0, K.jsx)("th", { children: "价格" }),
						/* @__PURE__ */ (0, K.jsx)("th", { children: "美东时间" })
					] }) }), /* @__PURE__ */ (0, K.jsx)("tbody", { children: m.slice(0, 5).map((e, t) => /* @__PURE__ */ (0, K.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, K.jsx)("td", { children: e.symbol }),
						/* @__PURE__ */ (0, K.jsx)("td", { children: e.side === "BUY" ? "买入" : "卖出" }),
						/* @__PURE__ */ (0, K.jsx)("td", { children: e.quantity }),
						/* @__PURE__ */ (0, K.jsxs)("td", { children: ["$", e.price] }),
						/* @__PURE__ */ (0, K.jsx)("td", { children: new Date(e.time).toLocaleString("zh-CN", {
							timeZone: "America/New_York",
							hour12: !1
						}) })
					] }, t)) })] })
				}),
				/* @__PURE__ */ (0, K.jsx)("p", { children: "仅预览前 5 笔；保存前请核对账户、方向与价格。" }),
				/* @__PURE__ */ (0, K.jsx)("button", {
					type: "button",
					className: "us-primary",
					onClick: () => void b(),
					children: "加密保存到本机"
				})
			] })
		]
	});
}
// node_modules/fancy-canvas/size.mjs
function cf(e) {
	var t = e.width, n = e.height;
	if (t < 0) throw Error("Negative width is not allowed for Size");
	if (n < 0) throw Error("Negative height is not allowed for Size");
	return {
		width: t,
		height: n
	};
}
function lf(e, t) {
	return e.width === t.width && e.height === t.height;
}
// node_modules/fancy-canvas/device-pixel-ratio.mjs
var uf = function() {
	function e(e) {
		var t = this;
		this._resolutionListener = function() {
			return t._onResolutionChanged();
		}, this._resolutionMediaQueryList = null, this._observers = [], this._window = e, this._installResolutionListener();
	}
	return e.prototype.dispose = function() {
		this._uninstallResolutionListener(), this._window = null;
	}, Object.defineProperty(e.prototype, "value", {
		get: function() {
			return this._window.devicePixelRatio;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.subscribe = function(e) {
		var t = this, n = { next: e };
		return this._observers.push(n), { unsubscribe: function() {
			t._observers = t._observers.filter(function(e) {
				return e !== n;
			});
		} };
	}, e.prototype._installResolutionListener = function() {
		if (this._resolutionMediaQueryList !== null) throw Error("Resolution listener is already installed");
		var e = this._window.devicePixelRatio;
		this._resolutionMediaQueryList = this._window.matchMedia(`all and (resolution: ${e}dppx)`), this._resolutionMediaQueryList.addListener(this._resolutionListener);
	}, e.prototype._uninstallResolutionListener = function() {
		this._resolutionMediaQueryList !== null && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null);
	}, e.prototype._reinstallResolutionListener = function() {
		this._uninstallResolutionListener(), this._installResolutionListener();
	}, e.prototype._onResolutionChanged = function() {
		var e = this;
		this._observers.forEach(function(t) {
			return t.next(e._window.devicePixelRatio);
		}), this._reinstallResolutionListener();
	}, e;
}();
function df(e) {
	return new uf(e);
}
// node_modules/fancy-canvas/canvas-element-bitmap-size.mjs
var ff = function() {
	function e(e, t, n) {
		this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = e, this._canvasElementClientSize = cf({
			width: this._canvasElement.clientWidth,
			height: this._canvasElement.clientHeight
		}), this._transformBitmapSize = t ?? (function(e) {
			return e;
		}), this._allowResizeObserver = n?.allowResizeObserver ?? !0, this._chooseAndInitObserver();
	}
	return e.prototype.dispose = function() {
		var e, t;
		if (this._canvasElement === null) throw Error("Object is disposed");
		(e = this._canvasElementResizeObserver) == null || e.disconnect(), this._canvasElementResizeObserver = null, (t = this._devicePixelRatioObservable) == null || t.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null;
	}, Object.defineProperty(e.prototype, "canvasElement", {
		get: function() {
			if (this._canvasElement === null) throw Error("Object is disposed");
			return this._canvasElement;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "canvasElementClientSize", {
		get: function() {
			return this._canvasElementClientSize;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "bitmapSize", {
		get: function() {
			return cf({
				width: this.canvasElement.width,
				height: this.canvasElement.height
			});
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.resizeCanvasElement = function(e) {
		this._canvasElementClientSize = cf(e), this.canvasElement.style.width = `${this._canvasElementClientSize.width}px`, this.canvasElement.style.height = `${this._canvasElementClientSize.height}px`, this._invalidateBitmapSize();
	}, e.prototype.subscribeBitmapSizeChanged = function(e) {
		this._bitmapSizeChangedListeners.push(e);
	}, e.prototype.unsubscribeBitmapSizeChanged = function(e) {
		this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(t) {
			return t !== e;
		});
	}, Object.defineProperty(e.prototype, "suggestedBitmapSize", {
		get: function() {
			return this._suggestedBitmapSize;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.subscribeSuggestedBitmapSizeChanged = function(e) {
		this._suggestedBitmapSizeChangedListeners.push(e);
	}, e.prototype.unsubscribeSuggestedBitmapSizeChanged = function(e) {
		this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(t) {
			return t !== e;
		});
	}, e.prototype.applySuggestedBitmapSize = function() {
		if (this._suggestedBitmapSize !== null) {
			var e = this._suggestedBitmapSize;
			this._suggestedBitmapSize = null, this._resizeBitmap(e), this._emitSuggestedBitmapSizeChanged(e, this._suggestedBitmapSize);
		}
	}, e.prototype._resizeBitmap = function(e) {
		var t = this.bitmapSize;
		lf(t, e) || (this.canvasElement.width = e.width, this.canvasElement.height = e.height, this._emitBitmapSizeChanged(t, e));
	}, e.prototype._emitBitmapSizeChanged = function(e, t) {
		var n = this;
		this._bitmapSizeChangedListeners.forEach(function(r) {
			return r.call(n, e, t);
		});
	}, e.prototype._suggestNewBitmapSize = function(e) {
		var t = this._suggestedBitmapSize, n = cf(this._transformBitmapSize(e, this._canvasElementClientSize)), r = lf(this.bitmapSize, n) ? null : n;
		t === null && r === null || t !== null && r !== null && lf(t, r) || (this._suggestedBitmapSize = r, this._emitSuggestedBitmapSizeChanged(t, r));
	}, e.prototype._emitSuggestedBitmapSizeChanged = function(e, t) {
		var n = this;
		this._suggestedBitmapSizeChangedListeners.forEach(function(r) {
			return r.call(n, e, t);
		});
	}, e.prototype._chooseAndInitObserver = function() {
		var e = this;
		this._allowResizeObserver ? hf().then(function(t) {
			return t ? e._initResizeObserver() : e._initDevicePixelRatioObservable();
		}) : this._initDevicePixelRatioObservable();
	}, e.prototype._initDevicePixelRatioObservable = function() {
		var e = this;
		if (this._canvasElement !== null) {
			var t = mf(this._canvasElement);
			if (t === null) throw Error("No window is associated with the canvas");
			this._devicePixelRatioObservable = df(t), this._devicePixelRatioObservable.subscribe(function() {
				return e._invalidateBitmapSize();
			}), this._invalidateBitmapSize();
		}
	}, e.prototype._invalidateBitmapSize = function() {
		if (this._canvasElement !== null) {
			var e = mf(this._canvasElement);
			if (e !== null) {
				var t = this._devicePixelRatioObservable?.value ?? e.devicePixelRatio, n = this._canvasElement.getClientRects(), r = n[0] === void 0 ? cf({
					width: this._canvasElementClientSize.width * t,
					height: this._canvasElementClientSize.height * t
				}) : gf(n[0], t);
				this._suggestNewBitmapSize(r);
			}
		}
	}, e.prototype._initResizeObserver = function() {
		var e = this;
		this._canvasElement !== null && (this._canvasElementResizeObserver = new ResizeObserver(function(t) {
			var n = t.find(function(t) {
				return t.target === e._canvasElement;
			});
			if (n && n.devicePixelContentBoxSize && n.devicePixelContentBoxSize[0]) {
				var r = n.devicePixelContentBoxSize[0], i = cf({
					width: r.inlineSize,
					height: r.blockSize
				});
				e._suggestNewBitmapSize(i);
			}
		}), this._canvasElementResizeObserver.observe(this._canvasElement, { box: "device-pixel-content-box" }));
	}, e;
}();
function pf(e, t) {
	if (t.type === "device-pixel-content-box") return new ff(e, t.transform, t.options);
	throw Error("Unsupported binding target");
}
function mf(e) {
	return e.ownerDocument.defaultView;
}
function hf() {
	return new Promise(function(e) {
		var t = new ResizeObserver(function(n) {
			e(n.every(function(e) {
				return "devicePixelContentBoxSize" in e;
			})), t.disconnect();
		});
		t.observe(document.body, { box: "device-pixel-content-box" });
	}).catch(function() {
		return !1;
	});
}
function gf(e, t) {
	return cf({
		width: Math.round(e.left * t + e.width * t) - Math.round(e.left * t),
		height: Math.round(e.top * t + e.height * t) - Math.round(e.top * t)
	});
}
// node_modules/fancy-canvas/canvas-rendering-target.mjs
var _f = function() {
	function e(e, t, n) {
		if (t.width === 0 || t.height === 0) throw TypeError("Rendering target could only be created on a media with positive width and height");
		if (this._mediaSize = t, n.width === 0 || n.height === 0) throw TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
		this._bitmapSize = n, this._context = e;
	}
	return e.prototype.useMediaCoordinateSpace = function(e) {
		try {
			return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), e({
				context: this._context,
				mediaSize: this._mediaSize
			});
		} finally {
			this._context.restore();
		}
	}, e.prototype.useBitmapCoordinateSpace = function(e) {
		try {
			return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), e({
				context: this._context,
				mediaSize: this._mediaSize,
				bitmapSize: this._bitmapSize,
				horizontalPixelRatio: this._horizontalPixelRatio,
				verticalPixelRatio: this._verticalPixelRatio
			});
		} finally {
			this._context.restore();
		}
	}, Object.defineProperty(e.prototype, "_horizontalPixelRatio", {
		get: function() {
			return this._bitmapSize.width / this._mediaSize.width;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "_verticalPixelRatio", {
		get: function() {
			return this._bitmapSize.height / this._mediaSize.height;
		},
		enumerable: !1,
		configurable: !0
	}), e;
}();
function vf(e, t) {
	var n = e.canvasElementClientSize;
	if (n.width === 0 || n.height === 0) return null;
	var r = e.bitmapSize;
	if (r.width === 0 || r.height === 0) return null;
	var i = e.canvasElement.getContext("2d", t);
	return i === null ? null : new _f(i, n, r);
}
// node_modules/lightweight-charts/dist/lightweight-charts.production.mjs
var yf = {
	title: "",
	visible: !0,
	hitTestTolerance: 3,
	lastValueVisible: !0,
	priceLineVisible: !0,
	priceLineSource: 0,
	priceLineWidth: 1,
	priceLineColor: "",
	priceLineStyle: 2,
	baseLineVisible: !0,
	baseLineWidth: 1,
	baseLineColor: "#B2B5BE",
	baseLineStyle: 0,
	priceFormat: {
		type: "price",
		precision: 2,
		minMove: .01
	}
}, bf, xf;
function Sf(e, t) {
	let n = function(e, t) {
		switch (e) {
			case 0:
			default: return [];
			case 1: return [t, t];
			case 2: return [2 * t, 2 * t];
			case 3: return [6 * t, 6 * t];
			case 4: return [t, 4 * t];
		}
	}(t, e.lineWidth);
	return e.setLineDash(n), n;
}
function Cf(e, t, n, r) {
	e.beginPath();
	let i = e.lineWidth % 2 ? .5 : 0;
	e.moveTo(n, t + i), e.lineTo(r, t + i), e.stroke();
}
function wf(e, t) {
	if (!e) throw Error("Assertion failed" + (t ? ": " + t : ""));
}
function Tf(e) {
	if (e === void 0) throw Error("Value is undefined");
	return e;
}
function $(e) {
	if (e === null) throw Error("Value is null");
	return e;
}
function Ef(e) {
	return $(Tf(e));
}
(function(e) {
	e[e.Simple = 0] = "Simple", e[e.WithSteps = 1] = "WithSteps", e[e.Curved = 2] = "Curved";
})(bf ||= {}), function(e) {
	e[e.Solid = 0] = "Solid", e[e.Dotted = 1] = "Dotted", e[e.Dashed = 2] = "Dashed", e[e.LargeDashed = 3] = "LargeDashed", e[e.SparseDotted = 4] = "SparseDotted";
}(xf ||= {});
var Df = class {
	constructor() {
		this.t = [];
	}
	i(e, t, n) {
		let r = {
			h: e,
			l: t,
			o: !0 === n
		};
		this.t.push(r);
	}
	_(e) {
		let t = this.t.findIndex((t) => e === t.h);
		t > -1 && this.t.splice(t, 1);
	}
	u(e) {
		this.t = this.t.filter((t) => t.l !== e);
	}
	p(e, t, n) {
		let r = [...this.t];
		this.t = this.t.filter((e) => !e.o), r.forEach((r) => r.h(e, t, n));
	}
	v() {
		return this.t.length > 0;
	}
	m() {
		this.t = [];
	}
};
function Of(e, ...t) {
	for (let n of t) for (let t in n) n[t] !== void 0 && Object.prototype.hasOwnProperty.call(n, t) && ![
		"__proto__",
		"constructor",
		"prototype"
	].includes(t) && (typeof n[t] != "object" || n[t] === null || e[t] === void 0 || Array.isArray(n[t]) ? e[t] = n[t] : Of(e[t], n[t]));
	return e;
}
function kf(e) {
	return typeof e == "number" && isFinite(e);
}
function Af(e) {
	return typeof e == "number" && e % 1 == 0;
}
function jf(e) {
	return typeof e == "string";
}
function Mf(e) {
	return typeof e == "boolean";
}
function Nf(e) {
	let t = e;
	if (!t || typeof t != "object") return t;
	let n, r, i;
	for (r in n = Array.isArray(t) ? [] : {}, t) Object.prototype.hasOwnProperty.call(t, r) && (i = t[r], n[r] = i && typeof i == "object" ? Nf(i) : i);
	return n;
}
function Pf(e) {
	return e !== null;
}
function Ff(e) {
	return e === null ? void 0 : e;
}
var If = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function Lf(e, t, n) {
	return t === void 0 && (t = If), `${n = n === void 0 ? "" : `${n} `}${e}px ${t}`;
}
var Rf = class {
	constructor(e) {
		this.M = {
			S: 1,
			C: 5,
			P: NaN,
			k: "",
			T: "",
			R: "",
			D: "",
			I: 0,
			V: 0,
			B: 0,
			A: 0,
			L: 0
		}, this.O = e;
	}
	N() {
		let e = this.M, t = this.F(), n = this.W();
		return e.P === t && e.T === n || (e.P = t, e.T = n, e.k = Lf(t, n), e.A = 2.5 / 12 * t, e.I = e.A, e.V = t / 12 * e.C, e.B = t / 12 * e.C, e.L = 0), e.R = this.H(), e.D = this.U(), this.M;
	}
	H() {
		return this.O.N().layout.textColor;
	}
	U() {
		return this.O.$();
	}
	F() {
		return this.O.N().layout.fontSize;
	}
	W() {
		return this.O.N().layout.fontFamily;
	}
};
function zf(e) {
	return e < 0 ? 0 : e > 255 ? 255 : Math.round(e) || 0;
}
function Bf(e) {
	return .199 * e[0] + .687 * e[1] + .114 * e[2];
}
var Vf = class {
	constructor(e, t) {
		this.j = /* @__PURE__ */ new Map(), this.q = e, t && (this.j = t);
	}
	Y(e, t) {
		if (e === "transparent") return e;
		let n = this.K(e), r = n[3];
		return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${t * r})`;
	}
	Z(e) {
		let t = this.K(e);
		return {
			G: `rgb(${t[0]}, ${t[1]}, ${t[2]})`,
			X: Bf(t) > 160 ? "black" : "white"
		};
	}
	J(e) {
		return Bf(this.K(e));
	}
	tt(e, t, n) {
		let [r, i, a, o] = this.K(e), [s, c, l, u] = this.K(t), d = [
			zf(r + n * (s - r)),
			zf(i + n * (c - i)),
			zf(a + n * (l - a)),
			(f = o + n * (u - o), f <= 0 || f > 1 ? Math.min(Math.max(f, 0), 1) : Math.round(1e4 * f) / 1e4)
		];
		var f;
		return `rgba(${d[0]}, ${d[1]}, ${d[2]}, ${d[3]})`;
	}
	K(e) {
		let t = this.j.get(e);
		if (t) return t;
		let n = function(e) {
			let t = document.createElement("div");
			t.style.display = "none", document.body.appendChild(t), t.style.color = e;
			let n = window.getComputedStyle(t).color;
			return document.body.removeChild(t), n;
		}(e).match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
		if (!n) {
			if (this.q.length) for (let t of this.q) {
				let n = t(e);
				if (n) return this.j.set(e, n), n;
			}
			throw Error(`Failed to parse color: ${e}`);
		}
		let r = [
			parseInt(n[1], 10),
			parseInt(n[2], 10),
			parseInt(n[3], 10),
			n[4] ? parseFloat(n[4]) : 1
		];
		return this.j.set(e, r), r;
	}
}, Hf = class {
	constructor() {
		this.it = [];
	}
	nt(e) {
		this.it = e;
	}
	st(e, t, n) {
		this.it.forEach((r) => {
			r.st(e, t, n);
		});
	}
}, Uf = class {
	st(e, t, n) {
		e.useBitmapCoordinateSpace((e) => this.et(e, t, n));
	}
}, Wf = class extends Uf {
	constructor() {
		super(...arguments), this.rt = null;
	}
	ht(e) {
		this.rt = e;
	}
	et({ context: e, horizontalPixelRatio: t, verticalPixelRatio: n }) {
		if (this.rt === null || this.rt.lt === null) return;
		let r = this.rt.lt, i = this.rt, a = Math.max(1, Math.floor(t)) % 2 / 2, o = (o) => {
			e.beginPath();
			for (let s = r.to - 1; s >= r.from; --s) {
				let r = i.ot[s], c = Math.round(r._t * t) + a, l = r.ut * n, u = o * n + a;
				e.moveTo(c, l), e.arc(c, l, u, 0, 2 * Math.PI);
			}
			e.fill();
		};
		i.ct > 0 && (e.fillStyle = i.dt, o(i.ft + i.ct)), e.fillStyle = i.vt, o(i.ft);
	}
};
function Gf() {
	return {
		ot: [{
			_t: 0,
			ut: 0,
			wt: 0,
			Mt: 0
		}],
		vt: "",
		dt: "",
		ft: 0,
		ct: 0,
		lt: null
	};
}
var Kf = {
	from: 0,
	to: 1
}, qf = class {
	constructor(e, t, n) {
		this.gt = new Hf(), this.bt = [], this.St = [], this.xt = !0, this.O = e, this.Ct = t, this.yt = n, this.gt.nt(this.bt);
	}
	Pt(e) {
		this.kt(), this.xt = !0;
	}
	Tt() {
		return this.xt &&= (this.Rt(), !1), this.gt;
	}
	kt() {
		let e = this.yt.Dt();
		e.length !== this.bt.length && (this.St = e.map(Gf), this.bt = this.St.map((e) => {
			let t = new Wf();
			return t.ht(e), t;
		}), this.gt.nt(this.bt));
	}
	Rt() {
		let e = this.Ct.N().mode === 2 || !this.Ct.It(), t = this.yt.Vt(), n = this.Ct.Bt(), r = this.O.Et();
		this.kt(), t.forEach((t, i) => {
			let a = this.St[i], o = t.At(n), s = t.Lt();
			!e && o !== null && t.It() && s !== null ? (a.vt = o.zt, a.ft = o.ft, a.ct = o.Ot, a.ot[0].Mt = o.Mt, a.ot[0].ut = t.Ft().Nt(o.Mt, s.Wt), a.dt = o.Ht ?? this.O.Ut(a.ot[0].ut / t.Ft().$t()), a.ot[0].wt = n, a.ot[0]._t = r.jt(n), a.lt = Kf) : a.lt = null;
		});
	}
}, Jf = class extends Uf {
	constructor(e) {
		super(), this.qt = e;
	}
	et({ context: e, bitmapSize: t, horizontalPixelRatio: n, verticalPixelRatio: r }) {
		if (this.qt === null) return;
		let i = this.qt.Yt.It, a = this.qt.Kt.It;
		if (!i && !a) return;
		let o = Math.round(this.qt._t * n), s = Math.round(this.qt.ut * r);
		e.lineCap = "butt", i && o >= 0 && (e.lineWidth = Math.floor(this.qt.Yt.ct * n), e.strokeStyle = this.qt.Yt.R, e.fillStyle = this.qt.Yt.R, Sf(e, this.qt.Yt.Zt), function(e, t, n, r) {
			e.beginPath();
			let i = e.lineWidth % 2 ? .5 : 0;
			e.moveTo(t + i, n), e.lineTo(t + i, r), e.stroke();
		}(e, o, 0, t.height)), a && s >= 0 && (e.lineWidth = Math.floor(this.qt.Kt.ct * r), e.strokeStyle = this.qt.Kt.R, e.fillStyle = this.qt.Kt.R, Sf(e, this.qt.Kt.Zt), Cf(e, s, 0, t.width));
	}
}, Yf = class {
	constructor(e, t) {
		this.xt = !0, this.Gt = {
			Yt: {
				ct: 1,
				Zt: 0,
				R: "",
				It: !1
			},
			Kt: {
				ct: 1,
				Zt: 0,
				R: "",
				It: !1
			},
			_t: 0,
			ut: 0
		}, this.Xt = new Jf(this.Gt), this.Jt = e, this.yt = t;
	}
	Pt() {
		this.xt = !0;
	}
	Tt(e) {
		return this.xt &&= (this.Rt(), !1), this.Xt;
	}
	Rt() {
		let e = this.Jt.It(), t = this.yt.Qt().N().crosshair, n = this.Gt;
		if (t.mode === 2) return n.Kt.It = !1, void (n.Yt.It = !1);
		n.Kt.It = e && this.Jt.ti(this.yt), n.Yt.It = e && this.Jt.ii(), n.Kt.ct = t.horzLine.width, n.Kt.Zt = t.horzLine.style, n.Kt.R = t.horzLine.color, n.Yt.ct = t.vertLine.width, n.Yt.Zt = t.vertLine.style, n.Yt.R = t.vertLine.color, n._t = this.Jt.ni(), n.ut = this.Jt.si();
	}
};
function Xf(e, t, n, r, i, a) {
	e.fillRect(t + a, n, r - 2 * a, a), e.fillRect(t + a, n + i - a, r - 2 * a, a), e.fillRect(t, n, a, i), e.fillRect(t + r - a, n, a, i);
}
function Zf(e, t, n, r, i, a) {
	e.save(), e.globalCompositeOperation = "copy", e.fillStyle = a, e.fillRect(t, n, r, i), e.restore();
}
function Qf(e, t, n, r, i, a) {
	e.beginPath(), e.roundRect ? e.roundRect(t, n, r, i, a) : (e.lineTo(t + r - a[1], n), a[1] !== 0 && e.arcTo(t + r, n, t + r, n + a[1], a[1]), e.lineTo(t + r, n + i - a[2]), a[2] !== 0 && e.arcTo(t + r, n + i, t + r - a[2], n + i, a[2]), e.lineTo(t + a[3], n + i), a[3] !== 0 && e.arcTo(t, n + i, t, n + i - a[3], a[3]), e.lineTo(t, n + a[0]), a[0] !== 0 && e.arcTo(t, n, t + a[0], n, a[0]));
}
function $f(e, t, n, r, i, a, o = 0, s = [
	0,
	0,
	0,
	0
], c = "") {
	if (e.save(), !o || !c || c === a) return Qf(e, t, n, r, i, s), e.fillStyle = a, e.fill(), void e.restore();
	let l = o / 2;
	var u;
	Qf(e, t + l, n + l, r - o, i - o, (u = -l, s.map((e) => e === 0 ? e : e + u))), a !== "transparent" && (e.fillStyle = a, e.fill()), c !== "transparent" && (e.lineWidth = o, e.strokeStyle = c, e.closePath(), e.stroke()), e.restore();
}
function ep(e, t, n, r, i, a, o) {
	e.save(), e.globalCompositeOperation = "copy";
	let s = e.createLinearGradient(0, 0, 0, i);
	s.addColorStop(0, a), s.addColorStop(1, o), e.fillStyle = s, e.fillRect(t, n, r, i), e.restore();
}
var tp = class {
	constructor(e, t) {
		this.ht(e, t);
	}
	ht(e, t) {
		this.qt = e, this.ei = t;
	}
	$t(e, t) {
		return this.qt.It ? e.P + e.A + e.I : 0;
	}
	st(e, t, n, r) {
		if (!this.qt.It || this.qt.ri.length === 0) return;
		let i = this.qt.R, a = this.ei.G, o = e.useBitmapCoordinateSpace((e) => {
			let o = e.context;
			o.font = t.k;
			let s = this.hi(e, t, n, r), c = s.ai;
			return s.li ? $f(o, c.oi, c._i, c.ui, c.ci, a, c.di, [
				c.ft,
				0,
				0,
				c.ft
			], a) : $f(o, c.fi, c._i, c.ui, c.ci, a, c.di, [
				0,
				c.ft,
				c.ft,
				0
			], a), this.qt.pi && (o.fillStyle = i, o.fillRect(c.fi, c.mi, c.wi - c.fi, c.Mi)), this.qt.gi && (o.fillStyle = t.D, o.fillRect(s.li ? c.bi - c.di : 0, c._i, c.di, c.Si - c._i)), s;
		});
		e.useMediaCoordinateSpace(({ context: e }) => {
			let n = o.xi;
			e.font = t.k, e.textAlign = o.li ? "right" : "left", e.textBaseline = "middle", e.fillStyle = i, e.fillText(this.qt.ri, n.Ci, (n._i + n.Si) / 2 + n.yi);
		});
	}
	hi(e, t, n, r) {
		let { context: i, bitmapSize: a, mediaSize: o, horizontalPixelRatio: s, verticalPixelRatio: c } = e, l = this.qt.pi || !this.qt.Pi ? t.C : 0, u = this.qt.ki ? t.S : 0, d = t.A + this.ei.Ti, f = t.I + this.ei.Ri, p = t.V, m = t.B, h = this.qt.ri, g = t.P, _ = n.Di(i, h), v = Math.ceil(n.Ii(i, h)), y = g + d + f, b = t.S + p + m + v + l, x = Math.max(1, Math.floor(c)), S = Math.round(y * c);
		S % 2 != x % 2 && (S += 1);
		let C = u > 0 ? Math.max(1, Math.floor(u * s)) : 0, w = Math.round(b * s), T = Math.round(l * s), E = this.ei.Vi ?? this.ei.Bi ?? this.ei.Ei, D = Math.round(E * c) - Math.floor(.5 * c), O = Math.floor(D + x / 2 - S / 2), k = O + S, A = r === "right", j = A ? o.width - u : u, M = A ? a.width - C : C, N, P, F;
		return A ? (N = M - w, P = M - T, F = j - l - p - u) : (N = M + w, P = M + T, F = j + l + p), {
			li: A,
			ai: {
				_i: O,
				mi: D,
				Si: k,
				ui: w,
				ci: S,
				ft: 2 * s,
				di: C,
				oi: N,
				fi: M,
				wi: P,
				Mi: x,
				bi: a.width
			},
			xi: {
				_i: O / c,
				Si: k / c,
				Ci: F,
				yi: _
			}
		};
	}
}, np = class {
	constructor(e) {
		this.Ai = {
			Ei: 0,
			G: "#000",
			Ri: 0,
			Ti: 0
		}, this.Li = {
			ri: "",
			It: !1,
			pi: !0,
			Pi: !1,
			Ht: "",
			R: "#FFF",
			gi: !1,
			ki: !1
		}, this.zi = {
			ri: "",
			It: !1,
			pi: !1,
			Pi: !0,
			Ht: "",
			R: "#FFF",
			gi: !0,
			ki: !0
		}, this.xt = !0, this.Oi = new (e || tp)(this.Li, this.Ai), this.Ni = new (e || tp)(this.zi, this.Ai);
	}
	ri() {
		return this.Fi(), this.Li.ri;
	}
	Ei() {
		return this.Fi(), this.Ai.Ei;
	}
	Pt() {
		this.xt = !0;
	}
	$t(e, t = !1) {
		return Math.max(this.Oi.$t(e, t), this.Ni.$t(e, t));
	}
	Wi() {
		return this.Ai.Vi ?? null;
	}
	Hi() {
		return this.Ai.Vi ?? this.Ai.Bi ?? this.Ei();
	}
	Ui(e) {
		this.Ai.Bi = e ?? void 0;
	}
	$i() {
		return this.Fi(), this.Li.It || this.zi.It;
	}
	ji() {
		return this.Fi(), this.Li.It;
	}
	Tt(e) {
		return this.Fi(), this.Li.pi = this.Li.pi && e.N().ticksVisible, this.zi.pi = this.zi.pi && e.N().ticksVisible, this.Oi.ht(this.Li, this.Ai), this.Ni.ht(this.zi, this.Ai), this.Oi;
	}
	qi() {
		return this.Fi(), this.Oi.ht(this.Li, this.Ai), this.Ni.ht(this.zi, this.Ai), this.Ni;
	}
	Fi() {
		this.xt && (this.Li.pi = !0, this.zi.pi = !1, this.Yi(this.Li, this.zi, this.Ai));
	}
}, rp = class extends np {
	constructor(e, t, n) {
		super(), this.Jt = e, this.Ki = t, this.Zi = n;
	}
	Yi(e, t, n) {
		if (e.It = !1, this.Jt.N().mode === 2) return;
		let r = this.Jt.N().horzLine;
		if (!r.labelVisible) return;
		let i = this.Ki.Lt();
		if (!this.Jt.It() || this.Ki.Gi() || i === null) return;
		let a = this.Ki.Xi().Z(r.labelBackgroundColor);
		n.G = a.G, e.R = a.X;
		let o = 2 / 12 * this.Ki.P();
		n.Ti = o, n.Ri = o;
		let s = this.Zi(this.Ki);
		n.Ei = s.Ei, e.ri = this.Ki.Ji(s.Mt, i), e.It = !0;
	}
}, ip = /[1-9]/g, ap = class {
	constructor() {
		this.qt = null;
	}
	ht(e) {
		this.qt = e;
	}
	st(e, t) {
		if (this.qt === null || !1 === this.qt.It || this.qt.ri.length === 0) return;
		let n = e.useMediaCoordinateSpace(({ context: e }) => (e.font = t.k, Math.round(t.Qi.Ii(e, $(this.qt).ri, ip))));
		if (n <= 0) return;
		let r = t.tn, i = n + 2 * r, a = i / 2, o = this.qt.nn, s = this.qt.Ei, c = Math.floor(s - a) + .5;
		c < 0 ? (s += Math.abs(0 - c), c = Math.floor(s - a) + .5) : c + i > o && (s -= Math.abs(o - (c + i)), c = Math.floor(s - a) + .5);
		let l = c + i, u = Math.ceil(0 + t.S + t.C + t.A + t.P + t.I);
		e.useBitmapCoordinateSpace(({ context: e, horizontalPixelRatio: n, verticalPixelRatio: r }) => {
			let i = $(this.qt);
			e.fillStyle = i.G;
			let a = Math.round(c * n), o = Math.round(0 * r), s = Math.round(l * n), d = Math.round(u * r), f = Math.round(2 * n);
			if (e.beginPath(), e.moveTo(a, o), e.lineTo(a, d - f), e.arcTo(a, d, a + f, d, f), e.lineTo(s - f, d), e.arcTo(s, d, s, d - f, f), e.lineTo(s, o), e.fill(), i.pi) {
				let a = Math.round(i.Ei * n), s = o, c = Math.round((s + t.C) * r);
				e.fillStyle = i.R;
				let l = Math.max(1, Math.floor(n)), u = Math.floor(.5 * n);
				e.fillRect(a - u, s, l, c - s);
			}
		}), e.useMediaCoordinateSpace(({ context: e }) => {
			let n = $(this.qt), i = 0 + t.S + t.C + t.A + t.P / 2;
			e.font = t.k, e.textAlign = "left", e.textBaseline = "middle", e.fillStyle = n.R;
			let a = t.Qi.Di(e, "Apr0");
			e.translate(c + r, i + a), e.fillText(n.ri, 0, 0);
		});
	}
}, op = class {
	constructor(e, t, n) {
		this.xt = !0, this.Xt = new ap(), this.Gt = {
			It: !1,
			G: "#4c525e",
			R: "white",
			ri: "",
			nn: 0,
			Ei: NaN,
			pi: !0
		}, this.Ct = e, this.sn = t, this.Zi = n;
	}
	Pt() {
		this.xt = !0;
	}
	Tt() {
		return this.xt &&= (this.Rt(), !1), this.Xt.ht(this.Gt), this.Xt;
	}
	Rt() {
		let e = this.Gt;
		if (e.It = !1, this.Ct.N().mode === 2) return;
		let t = this.Ct.N().vertLine;
		if (!t.labelVisible) return;
		let n = this.sn.Et();
		if (n.Gi()) return;
		e.nn = n.nn();
		let r = this.Zi();
		if (r === null) return;
		e.Ei = r.Ei;
		let i = n.en(this.Ct.Bt());
		e.ri = n.rn($(i)), e.It = !0;
		let a = this.sn.Xi().Z(t.labelBackgroundColor);
		e.G = a.G, e.R = a.X, e.pi = n.N().ticksVisible;
	}
}, sp = class {
	constructor() {
		this.hn = null, this.an = 0;
	}
	ln() {
		return this.an;
	}
	_n(e) {
		this.an = e;
	}
	Ft() {
		return this.hn;
	}
	un(e) {
		this.hn = e;
	}
	cn(e) {
		return [];
	}
	dn() {
		return [];
	}
	It() {
		return !0;
	}
}, cp;
(function(e) {
	e[e.Normal = 0] = "Normal", e[e.Magnet = 1] = "Magnet", e[e.Hidden = 2] = "Hidden", e[e.MagnetOHLC = 3] = "MagnetOHLC";
})(cp ||= {});
var lp = class extends sp {
	constructor(e, t) {
		super(), this.yt = null, this.fn = NaN, this.pn = 0, this.vn = !1, this.mn = /* @__PURE__ */ new Map(), this.wn = !1, this.Mn = /* @__PURE__ */ new WeakMap(), this.gn = /* @__PURE__ */ new WeakMap(), this.bn = NaN, this.Sn = NaN, this.xn = NaN, this.Cn = NaN, this.sn = e, this.yn = t, this.Pn = ((e, t) => (n) => {
			let r = t(), i = e();
			if (n === $(this.yt).kn()) return {
				Mt: i,
				Ei: r
			};
			{
				let e = $(n.Lt());
				return {
					Mt: n.Tn(r, e),
					Ei: r
				};
			}
		})(() => this.fn, () => this.Sn);
		let n = ((e, t) => () => {
			let n = this.sn.Et().Rn(e()), r = t();
			return n && Number.isFinite(r) ? {
				wt: n,
				Ei: r
			} : null;
		})(() => this.pn, () => this.ni());
		this.Dn = new op(this, e, n);
	}
	N() {
		return this.yn;
	}
	In(e, t) {
		this.xn = e, this.Cn = t;
	}
	Vn() {
		this.xn = NaN, this.Cn = NaN;
	}
	Bn() {
		return this.xn;
	}
	En() {
		return this.Cn;
	}
	An(e, t, n) {
		this.wn ||= !0, this.vn = !0, this.Ln(e, t, n);
	}
	Bt() {
		return this.pn;
	}
	ni() {
		return this.bn;
	}
	si() {
		return this.Sn;
	}
	It() {
		return this.vn;
	}
	zn() {
		this.vn = !1, this.On(), this.fn = NaN, this.bn = NaN, this.Sn = NaN, this.yt = null, this.Vn(), this.Nn();
	}
	Fn(e) {
		if (!this.yn.doNotSnapToHiddenSeriesIndices) return e;
		let t = this.sn, n = t.Et(), r = null, i = null;
		for (let n of t.Wn()) {
			let t = n.Un().Hn(e, -1);
			if (t) {
				if (t.$n === e) return e;
				(r === null || t.$n > r) && (r = t.$n);
			}
			let a = n.Un().Hn(e, 1);
			if (a) {
				if (a.$n === e) return e;
				(i === null || a.$n < i) && (i = a.$n);
			}
		}
		let a = [r, i].filter(Pf);
		if (a.length === 0) return e;
		let o = n.jt(e), s = a.map((e) => Math.abs(o - n.jt(e)));
		return a[s.indexOf(Math.min(...s))];
	}
	jn(e) {
		let t = this.Mn.get(e);
		t || (t = new Yf(this, e), this.Mn.set(e, t));
		let n = this.gn.get(e);
		return n || (n = new qf(this.sn, this, e), this.gn.set(e, n)), [t, n];
	}
	ti(e) {
		return e === this.yt && this.yn.horzLine.visible;
	}
	ii() {
		return this.yn.vertLine.visible;
	}
	qn(e, t) {
		this.vn && this.yt === e || this.mn.clear();
		let n = [];
		return this.yt === e && n.push(this.Yn(this.mn, t, this.Pn)), n;
	}
	dn() {
		return this.vn ? [this.Dn] : [];
	}
	Kn() {
		return this.yt;
	}
	Nn() {
		this.sn.Zn().forEach((e) => {
			this.Mn.get(e)?.Pt(), this.gn.get(e)?.Pt();
		}), this.mn.forEach((e) => e.Pt()), this.Dn.Pt();
	}
	Gn(e) {
		return e && !e.kn().Gi() ? e.kn() : null;
	}
	Ln(e, t, n) {
		this.Xn(e, t, n) && this.Nn();
	}
	Xn(e, t, n) {
		let r = this.bn, i = this.Sn, a = this.fn, o = this.pn, s = this.yt, c = this.Gn(n);
		this.pn = e, this.bn = isNaN(e) ? NaN : this.sn.Et().jt(e), this.yt = n;
		let l = c === null ? null : c.Lt();
		return c !== null && l !== null ? (this.fn = t, this.Sn = c.Nt(t, l)) : (this.fn = NaN, this.Sn = NaN), r !== this.bn || i !== this.Sn || o !== this.pn || a !== this.fn || s !== this.yt;
	}
	On() {
		let e = this.sn.Jn().map((e) => e.Un().Qn()).filter(Pf), t = e.length === 0 ? null : Math.max(...e);
		this.pn = t === null ? NaN : t;
	}
	Yn(e, t, n) {
		let r = e.get(t);
		return r === void 0 && (r = new rp(this, t, n), e.set(t, r)), r;
	}
};
function up(e) {
	return e === "left" || e === "right";
}
var dp = class e {
	constructor(e) {
		this.ts = /* @__PURE__ */ new Map(), this.ns = [], this.ss = e;
	}
	es(e, t) {
		let n = function(e, t) {
			return e === void 0 ? t : {
				rs: Math.max(e.rs, t.rs),
				hs: e.hs || t.hs
			};
		}(this.ts.get(e), t);
		this.ts.set(e, n);
	}
	ls() {
		return this.ss;
	}
	_s(e) {
		let t = this.ts.get(e);
		return t === void 0 ? { rs: this.ss } : {
			rs: Math.max(this.ss, t.rs),
			hs: t.hs
		};
	}
	us() {
		this.cs(), this.ns = [{ ds: 0 }];
	}
	fs(e) {
		this.cs(), this.ns = [{
			ds: 1,
			Wt: e
		}];
	}
	ps(e) {
		this.vs(), this.ns.push({
			ds: 5,
			Wt: e
		});
	}
	cs() {
		this.vs(), this.ns.push({ ds: 6 });
	}
	ws() {
		this.cs(), this.ns = [{ ds: 4 }];
	}
	Ms(e) {
		this.cs(), this.ns.push({
			ds: 2,
			Wt: e
		});
	}
	gs(e) {
		this.cs(), this.ns.push({
			ds: 3,
			Wt: e
		});
	}
	bs() {
		return this.ns;
	}
	Ss(e) {
		for (let t of e.ns) this.xs(t);
		this.ss = Math.max(this.ss, e.ss), e.ts.forEach((e, t) => {
			this.es(t, e);
		});
	}
	static Cs() {
		return new e(2);
	}
	static ys() {
		return new e(3);
	}
	xs(e) {
		switch (e.ds) {
			case 0:
				this.us();
				break;
			case 1:
				this.fs(e.Wt);
				break;
			case 2:
				this.Ms(e.Wt);
				break;
			case 3:
				this.gs(e.Wt);
				break;
			case 4:
				this.ws();
				break;
			case 5:
				this.ps(e.Wt);
				break;
			case 6: this.vs();
		}
	}
	vs() {
		let e = this.ns.findIndex((e) => e.ds === 5);
		e !== -1 && this.ns.splice(e, 1);
	}
}, fp = class {
	formatTickmarks(e) {
		return e.map((e) => this.format(e));
	}
}, pp = ".";
function mp(e, t) {
	if (!kf(e)) return "n/a";
	if (!Af(t) || t < 0 || t > 16) throw TypeError("invalid length");
	return t === 0 ? e.toString() : ("0000000000000000" + e.toString()).slice(-t);
}
var hp = class extends fp {
	constructor(e, t) {
		if (super(), t ||= 1, kf(e) && Af(e) || (e = 100), e < 0) throw TypeError("invalid base");
		this.Ki = e, this.Ps = t, this.ks();
	}
	format(e) {
		let t = e < 0 ? "−" : "";
		return e = Math.abs(e), t + this.Ts(e);
	}
	ks() {
		if (this.Rs = 0, this.Ki > 0 && this.Ps > 0) {
			let e = this.Ki;
			for (; e > 1;) e /= 10, this.Rs++;
		}
	}
	Ts(e) {
		let t = this.Ki / this.Ps, n = Math.floor(e), r = "", i = this.Rs === void 0 ? NaN : this.Rs;
		if (t > 1) {
			let a = +(Math.round(e * t) - n * t).toFixed(this.Rs);
			a >= t && (a -= t, n += 1), r = pp + mp(+a.toFixed(this.Rs) * this.Ps, i);
		} else n = Math.round(e * t) / t, i > 0 && (r = pp + mp(0, i));
		return n.toFixed(0) + r;
	}
}, gp = class extends hp {
	constructor(e = 100) {
		super(e);
	}
	format(e) {
		return `${super.format(e)}%`;
	}
}, _p = class extends fp {
	constructor(e) {
		super(), this.Ds = e;
	}
	format(e) {
		let t = "";
		return e < 0 && (t = "-", e = -e), e < 995 ? t + this.Is(e) : e < 999995 ? t + this.Is(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), t + this.Is(e / 1e6) + "M") : (e = 1e6 * Math.round(e / 1e6), t + this.Is(e / 1e9) + "B");
	}
	Is(e) {
		let t, n = 10 ** this.Ds;
		return t = (e = Math.round(e * n) / n) >= 1e-15 && e < 1 ? e.toFixed(this.Ds).replace(/\.?0+$/, "") : String(e), t.replace(/(\.[1-9]*)0+$/, (e, t) => t);
	}
}, vp = /[2-9]/g, yp = class {
	constructor(e = 50) {
		this.Vs = 0, this.Bs = 1, this.Es = 1, this.As = {}, this.Ls = /* @__PURE__ */ new Map(), this.zs = e;
	}
	Os() {
		this.Vs = 0, this.Ls.clear(), this.Bs = 1, this.Es = 1, this.As = {};
	}
	Ii(e, t, n) {
		return this.Ns(e, t, n).width;
	}
	Di(e, t, n) {
		let r = this.Ns(e, t, n);
		return ((r.actualBoundingBoxAscent || 0) - (r.actualBoundingBoxDescent || 0)) / 2;
	}
	Ns(e, t, n) {
		let r = n || vp, i = String(t).replace(r, "0");
		if (this.Ls.has(i)) return Tf(this.Ls.get(i)).Fs;
		if (this.Vs === this.zs) {
			let e = this.As[this.Es];
			delete this.As[this.Es], this.Ls.delete(e), this.Es++, this.Vs--;
		}
		e.save(), e.textBaseline = "middle";
		let a = e.measureText(i);
		return e.restore(), a.width === 0 && t.length || (this.Ls.set(i, {
			Fs: a,
			Ws: this.Bs
		}), this.As[this.Bs] = i, this.Vs++, this.Bs++), a;
	}
}, bp = class {
	constructor(e) {
		this.Hs = null, this.M = null, this.Us = "right", this.$s = e;
	}
	js(e, t, n) {
		this.Hs = e, this.M = t, this.Us = n;
	}
	st(e) {
		this.M !== null && this.Hs !== null && this.Hs.st(e, this.M, this.$s, this.Us);
	}
}, xp = class {
	constructor(e, t, n) {
		this.qs = e, this.$s = new yp(50), this.Ys = t, this.O = n, this.F = -1, this.Xt = new bp(this.$s);
	}
	Tt() {
		let e = this.O.Ks(this.Ys);
		if (e === null) return null;
		let t = e.Zs(this.Ys) ? e.Gs() : this.Ys.Ft();
		if (t === null) return null;
		let n = e.Xs(t);
		if (n === "overlay") return null;
		let r = this.O.Js();
		return r.P !== this.F && (this.F = r.P, this.$s.Os()), this.Xt.js(this.qs.qi(), r, n), this.Xt;
	}
}, Sp = 7, Cp = class extends Uf {
	constructor() {
		super(...arguments), this.qt = null;
	}
	ht(e) {
		this.qt = e;
	}
	Qs(e, t) {
		if (!this.qt?.It) return null;
		let { ut: n, ct: r, te: i = Sp, ie: a } = this.qt;
		return t >= n - r - i && t <= n + r + i ? {
			ne: this.qt,
			se: Math.abs(t - n),
			ee: 2,
			re: "price-line",
			ie: a
		} : null;
	}
	et({ context: e, bitmapSize: t, horizontalPixelRatio: n, verticalPixelRatio: r }) {
		if (this.qt === null || !1 === this.qt.It) return;
		let i = Math.round(this.qt.ut * r);
		i < 0 || i > t.height || (e.lineCap = "butt", e.strokeStyle = this.qt.R, e.lineWidth = Math.floor(this.qt.ct * n), Sf(e, this.qt.Zt), Cf(e, i, 0, t.width));
	}
}, wp = class {
	constructor(e) {
		this.he = {
			ut: 0,
			R: "rgba(0, 0, 0, 0)",
			ct: 1,
			Zt: 0,
			It: !1
		}, this.ae = new Cp(), this.xt = !0, this.le = e, this.oe = e.Qt(), this.ae.ht(this.he);
	}
	Pt() {
		this.xt = !0;
	}
	Tt() {
		return this.le.It() ? (this.xt &&= (this._e(), !1), this.ae) : null;
	}
}, Tp = class extends wp {
	constructor(e) {
		super(e);
	}
	_e() {
		this.he.It = !1;
		let e = this.le.Ft(), t = e.ue().ue;
		if (t !== 2 && t !== 3) return;
		let n = this.le.N();
		if (!n.baseLineVisible || !this.le.It()) return;
		let r = this.le.Lt();
		r !== null && (this.he.It = !0, this.he.ut = e.Nt(r.Wt, r.Wt), this.he.R = n.baseLineColor, this.he.ct = n.baseLineWidth, this.he.Zt = n.baseLineStyle);
	}
}, Ep = class extends Uf {
	constructor() {
		super(...arguments), this.qt = null;
	}
	ht(e) {
		this.qt = e;
	}
	ce() {
		return this.qt;
	}
	et({ context: e, horizontalPixelRatio: t, verticalPixelRatio: n }) {
		let r = this.qt;
		if (r === null) return;
		let i = Math.max(1, Math.floor(t)), a = i % 2 / 2, o = Math.round(r.de.x * t) + a, s = r.de.y * n;
		e.fillStyle = r.fe, e.beginPath();
		let c = Math.max(2, 1.5 * r.pe) * t;
		e.arc(o, s, c, 0, 2 * Math.PI, !1), e.fill(), e.fillStyle = r.ve, e.beginPath(), e.arc(o, s, r.ft * t, 0, 2 * Math.PI, !1), e.fill(), e.lineWidth = i, e.strokeStyle = r.me, e.beginPath(), e.arc(o, s, r.ft * t + i / 2, 0, 2 * Math.PI, !1), e.stroke();
	}
}, Dp = [
	{
		we: 0,
		Me: .25,
		ge: 4,
		be: 10,
		Se: .25,
		xe: 0,
		Ce: .4,
		ye: .8
	},
	{
		we: .25,
		Me: .525,
		ge: 10,
		be: 14,
		Se: 0,
		xe: 0,
		Ce: .8,
		ye: 0
	},
	{
		we: .525,
		Me: 1,
		ge: 14,
		be: 14,
		Se: 0,
		xe: 0,
		Ce: 0,
		ye: 0
	}
], Op = class {
	constructor(e) {
		this.Xt = new Ep(), this.xt = !0, this.Pe = !0, this.ke = performance.now(), this.Te = this.ke - 1, this.Re = e;
	}
	De() {
		this.Te = this.ke - 1, this.Pt();
	}
	Ie() {
		if (this.Pt(), this.Re.N().lastPriceAnimation === 2) {
			let e = performance.now(), t = this.Te - e;
			if (t > 0) return void (t < 650 && (this.Te += 2600));
			this.ke = e, this.Te = e + 2600;
		}
	}
	Pt() {
		this.xt = !0;
	}
	Ve() {
		this.Pe = !0;
	}
	It() {
		return this.Re.N().lastPriceAnimation !== 0;
	}
	Be() {
		switch (this.Re.N().lastPriceAnimation) {
			case 0: return !1;
			case 1: return !0;
			case 2: return performance.now() <= this.Te;
		}
	}
	Tt() {
		return this.xt ? (this.Rt(), this.xt = !1, this.Pe = !1) : this.Pe &&= (this.Ee(), !1), this.Xt;
	}
	Rt() {
		this.Xt.ht(null);
		let e = this.Re.Qt().Et(), t = e.Ae(), n = this.Re.Lt();
		if (t === null || n === null) return;
		let r = this.Re.Le(!0);
		if (r.ze || !t.Oe(r.$n)) return;
		let i = {
			x: e.jt(r.$n),
			y: this.Re.Ft().Nt(r.Mt, n.Wt)
		}, a = r.R, o = this.Re.N().lineWidth, s = this.Ne(this.Fe(), a);
		this.Xt.ht({
			fe: a,
			pe: o,
			ve: s.ve,
			me: s.me,
			ft: s.ft,
			de: i
		});
	}
	Ee() {
		let e = this.Xt.ce();
		if (e !== null) {
			let t = this.Ne(this.Fe(), e.fe);
			e.ve = t.ve, e.me = t.me, e.ft = t.ft;
		}
	}
	Fe() {
		return this.Be() ? performance.now() - this.ke : 2599;
	}
	We(e, t, n, r) {
		let i = n + (r - n) * t;
		return this.Re.Qt().Xi().Y(e, i);
	}
	Ne(e, t) {
		let n = e % 2600 / 2600, r;
		for (let e of Dp) if (n >= e.we && n <= e.Me) {
			r = e;
			break;
		}
		wf(r !== void 0, "Last price animation internal logic error");
		let i = (n - r.we) / (r.Me - r.we);
		return {
			ve: this.We(t, i, r.Se, r.xe),
			me: this.We(t, i, r.Ce, r.ye),
			ft: (a = i, o = r.ge, s = r.be, o + (s - o) * a)
		};
		var a, o, s;
	}
}, kp = class extends wp {
	constructor(e) {
		super(e);
	}
	_e() {
		let e = this.he;
		e.It = !1;
		let t = this.le.N();
		if (!t.priceLineVisible || !this.le.It()) return;
		let n = this.le.Le(t.priceLineSource === 0);
		n.ze || (e.It = !0, e.ut = n.Ei, e.R = this.le.He(n.R), e.ct = t.priceLineWidth, e.Zt = t.priceLineStyle);
	}
}, Ap = class extends np {
	constructor(e) {
		super(), this.Jt = e;
	}
	Yi(e, t, n) {
		e.It = !1, t.It = !1;
		let r = this.Jt;
		if (!r.It()) return;
		let i = r.N(), a = i.lastValueVisible, o = r.Ue() !== "", s = i.seriesLastValueMode === 0, c = r.Le(!1);
		if (c.ze) return;
		a && (e.ri = this.$e(c, a, s), e.It = e.ri.length !== 0), (o || s) && (t.ri = this.je(c, a, o, s), t.It = t.ri.length > 0);
		let l = r.He(c.R), u = this.Jt.Qt().Xi().Z(l);
		n.G = u.G, n.Ei = c.Ei, t.Ht = r.Qt().Ut(c.Ei / r.Ft().$t()), e.Ht = l, e.R = u.X, t.R = u.X;
	}
	je(e, t, n, r) {
		let i = "", a = this.Jt.Ue();
		return n && a.length !== 0 && (i += `${a} `), t && r && (i += this.Jt.Ft().qe() ? e.Ye : e.Ke), i.trim();
	}
	$e(e, t, n) {
		return t ? n ? this.Jt.Ft().qe() ? e.Ke : e.Ye : e.ri : "";
	}
};
function jp(e, t, n, r) {
	let i = Number.isFinite(t), a = Number.isFinite(n);
	return i && a ? e(t, n) : i || a ? i ? t : n : r;
}
var Mp = class e {
	constructor(e, t) {
		this.Ze = e, this.Ge = t;
	}
	Xe(e) {
		return e !== null && this.Ze === e.Ze && this.Ge === e.Ge;
	}
	Je() {
		return new e(this.Ze, this.Ge);
	}
	Qe() {
		return this.Ze;
	}
	tr() {
		return this.Ge;
	}
	ir() {
		return this.Ge - this.Ze;
	}
	Gi() {
		return this.Ge === this.Ze || Number.isNaN(this.Ge) || Number.isNaN(this.Ze);
	}
	Ss(t) {
		return t === null ? this : new e(jp(Math.min, this.Qe(), t.Qe(), -1 / 0), jp(Math.max, this.tr(), t.tr(), 1 / 0));
	}
	nr(e) {
		if (!kf(e) || this.Ge - this.Ze === 0) return;
		let t = .5 * (this.Ge + this.Ze), n = this.Ge - t, r = this.Ze - t;
		n *= e, r *= e, this.Ge = t + n, this.Ze = t + r;
	}
	sr(e) {
		kf(e) && (this.Ge += e, this.Ze += e);
	}
	er() {
		return {
			minValue: this.Ze,
			maxValue: this.Ge
		};
	}
	static rr(t) {
		return t === null ? null : new e(t.minValue, t.maxValue);
	}
}, Np = class e {
	constructor(e, t) {
		this.hr = e, this.ar = t || null;
	}
	lr() {
		return this.hr;
	}
	_r() {
		return this.ar;
	}
	er() {
		return {
			priceRange: this.hr === null ? null : this.hr.er(),
			margins: this.ar || void 0
		};
	}
	static rr(t) {
		return t === null ? null : new e(Mp.rr(t.priceRange), t.margins);
	}
}, Pp = [
	2,
	4,
	8,
	16,
	32,
	64,
	128,
	256,
	512
], Fp = "Custom series with conflation reducer must have a priceValueBuilder method", Ip = class extends wp {
	constructor(e, t) {
		super(e), this.ur = t;
	}
	_e() {
		let e = this.he;
		e.It = !1;
		let t = this.ur.N();
		if (!this.le.It() || !t.lineVisible) return;
		let n = this.ur.cr();
		n !== null && (e.It = !0, e.ut = n, e.R = t.color, e.ct = t.lineWidth, e.Zt = t.lineStyle, e.te = t.hitTestTolerance, e.ie = this.ur.N().id);
	}
}, Lp = class extends np {
	constructor(e, t) {
		super(), this.Re = e, this.ur = t;
	}
	Yi(e, t, n) {
		e.It = !1, t.It = !1;
		let r = this.ur.N(), i = r.axisLabelVisible, a = r.title !== "", o = this.Re;
		if (!i || !o.It()) return;
		let s = this.ur.cr();
		if (s === null) return;
		a && (t.ri = r.title, t.It = !0), t.Ht = o.Qt().Ut(s / o.Ft().$t()), e.ri = this.dr(r.price), e.It = !0;
		let c = this.Re.Qt().Xi().Z(r.axisLabelColor || r.color);
		n.G = c.G;
		let l = r.axisLabelTextColor || c.X;
		e.R = l, t.R = l, n.Ei = s;
	}
	dr(e) {
		let t = this.Re.Lt();
		return t === null ? "" : this.Re.Ft().Ji(e, t.Wt);
	}
}, Rp = class {
	constructor(e, t) {
		this.Re = e, this.yn = t, this.pr = new Ip(e, this), this.qs = new Lp(e, this), this.vr = new xp(this.qs, e, e.Qt());
	}
	mr(e) {
		Of(this.yn, e), this.Pt(), this.Re.Qt().wr();
	}
	N() {
		return this.yn;
	}
	Mr() {
		return this.pr;
	}
	gr() {
		return this.vr;
	}
	br() {
		return this.qs;
	}
	Pt() {
		this.pr.Pt(), this.qs.Pt();
	}
	cr() {
		let e = this.Re, t = e.Ft();
		if (e.Qt().Et().Gi() || t.Gi()) return null;
		let n = e.Lt();
		return n === null ? null : t.Nt(this.yn.price, n.Wt);
	}
}, zp = class {
	constructor() {
		this.Sr = /* @__PURE__ */ new WeakMap();
	}
	Cr(e, t, n) {
		let r = 1 / t * n;
		if (e >= r) return 1;
		let i = r / e;
		return Math.min(2 ** Math.floor(Math.log2(i)), 512);
	}
	yr(e, t, n, r = !1, i) {
		if (e.length === 0 || t <= 1) return e;
		let a = this.Pr(t);
		if (a <= 1) return e;
		let o = this.kr(e), s = o.Tr.get(a);
		return s !== void 0 || (s = this.Rr(e, a, n, r, i, o.Tr), o.Tr.set(a, s)), s;
	}
	Dr(e, t, n, r, i = !1, a) {
		if (n < 1 || e.length === 0) return e;
		let o = this.kr(e), s = o.Tr.get(n);
		if (!s) return this.yr(e, n, r, i, a);
		let c = this.Ir(e, t, n, s, i, r, a);
		return o.Tr.set(n, c), c;
	}
	Pr(e) {
		if (e <= 2) return 2;
		for (let t of Pp) if (e <= t) return t;
		return 512;
	}
	Vr(e) {
		if (e.length === 0) return 0;
		let t = e[0], n = e[e.length - 1];
		return 31 * e.length + 17 * t.$n + 13 * n.$n;
	}
	Rr(e, t, n, r = !1, i, a = /* @__PURE__ */ new Map()) {
		if (t === 2) return this.Br(e, 2, n, r, i);
		let o = t / 2, s = a.get(o);
		return s || (s = this.Rr(e, o, n, r, i, a), a.set(o, s)), this.Er(s, n, r, i);
	}
	Br(e, t, n, r = !1, i) {
		let a = this.Ar(e, t, n, r, i);
		return this.Lr(a, r);
	}
	Er(e, t, n = !1, r) {
		let i = this.Ar(e, 2, t, n, r);
		return this.Lr(i, n);
	}
	Ar(e, t, n, r = !1, i) {
		let a = [];
		for (let o = 0; o < e.length; o += t) if (e.length - o >= t) {
			let t = this.zr(e[o], e[o + 1], n, r, i);
			t.Or = !1, a.push(t);
		} else if (a.length === 0) a.push(this.Nr(e[o], !0));
		else {
			let t = a[a.length - 1];
			a[a.length - 1] = this.Fr(t, e[o], n, r, i);
		}
		return a;
	}
	Wr(e, t) {
		return (e ?? 1) + (t ?? 1);
	}
	zr(e, t, n, r = !1, i) {
		if (!r || !n || !i) {
			let n = e.Wt[1] > t.Wt[1] ? e.Wt[1] : t.Wt[1], r = e.Wt[2] < t.Wt[2] ? e.Wt[2] : t.Wt[2];
			return {
				Hr: e.$n,
				Ur: t.$n,
				$r: e.wt,
				jr: t.wt,
				qr: e.Wt[0],
				Yr: n,
				Kr: r,
				Zr: t.Wt[3],
				Gr: this.Wr(e.Gr, t.Gr),
				Xr: void 0,
				Or: !1
			};
		}
		let a = n(this.Jr(e, i), this.Jr(t, i)), o = i(a), s = o.length ? o[o.length - 1] : 0;
		return {
			Hr: e.$n,
			Ur: t.$n,
			$r: e.wt,
			jr: t.wt,
			qr: e.Wt[0],
			Yr: Math.max(e.Wt[1], s),
			Kr: Math.min(e.Wt[2], s),
			Zr: s,
			Gr: this.Wr(e.Gr, t.Gr),
			Xr: a,
			Or: !1
		};
	}
	Fr(e, t, n, r = !1, i) {
		if (!r || !n || !i) return {
			Hr: e.Hr,
			Ur: t.$n,
			$r: e.$r,
			jr: t.wt,
			qr: e.qr,
			Yr: e.Yr > t.Wt[1] ? e.Yr : t.Wt[1],
			Kr: e.Kr < t.Wt[2] ? e.Kr : t.Wt[2],
			Zr: t.Wt[3],
			Gr: e.Gr + (t.Gr ?? 1),
			Xr: e.Xr,
			Or: !1
		};
		let a = e.Xr, o = this.Jr(t, i), s = a ? {
			data: a,
			index: e.Hr,
			originalTime: e.$r,
			time: e.$r,
			priceValues: i(a)
		} : null, c = s ? n(s, o) : o.data, l = s ? i(c) : o.priceValues, u = l.length ? l[l.length - 1] : 0;
		return {
			Hr: e.Hr,
			Ur: t.$n,
			$r: e.$r,
			jr: t.wt,
			qr: e.qr,
			Yr: Math.max(e.Yr, u),
			Kr: Math.min(e.Kr, u),
			Zr: u,
			Gr: e.Gr + (t.Gr ?? 1),
			Xr: c,
			Or: !1
		};
	}
	Qr(e, t, n, r, i, a, o = !1, s) {
		let c = t === r ? i : e[t];
		if (n - t === 1) return this.Nr(c, !0);
		let l = t + 1 === r ? i : e[t + 1], u = this.zr(c, l, a, o, s);
		for (let c = t + 2; c < n; c++) {
			let t = c === r ? i : e[c];
			u = this.Fr(u, t, a, o, s);
		}
		return u;
	}
	Jr(e, t) {
		let n = e.ce ?? {};
		return {
			data: e.ce,
			index: e.$n,
			originalTime: e.th,
			time: e.wt,
			priceValues: t(n)
		};
	}
	ih(e, t = !1) {
		let n = !0 === t, r = !!e.Xr;
		return {
			$n: e.Hr,
			wt: e.$r,
			th: e.$r,
			Wt: [
				n ? e.Zr : e.qr,
				e.Yr,
				e.Kr,
				e.Zr
			],
			Gr: e.Gr,
			ce: n ? r ? e.Xr : { wt: e.$r } : void 0
		};
	}
	Lr(e, t = !1) {
		return e.map((e) => this.ih(e, t));
	}
	Ir(e, t, n, r, i = !1, a, o) {
		if (r.length === 0) return r;
		let s = e.length - 1, c = Math.floor(s / n) * n;
		if (Math.min(c + n, e.length) - c < n && e.length > n) {
			let r = e.slice();
			return r[r.length - 1] = t, this.yr(r, n, a, i, o);
		}
		if (Math.floor((s - 1) / n) === Math.floor(s / n) || r.length === 1) {
			let l = Math.min(c + n, e.length), u = l - c;
			if (u <= 0) return r;
			let d = u === 1 ? this.Nr(c === s ? t : e[c], !0) : this.Qr(e, c, l, s, t, a, i, o);
			return r[r.length - 1] = this.ih(d, i), r;
		}
		{
			let r = e.slice();
			return r[r.length - 1] = t, this.yr(r, n, a, i, o);
		}
	}
	Nr(e, t = !1) {
		return {
			Hr: e.$n,
			Ur: e.$n,
			$r: e.wt,
			jr: e.wt,
			qr: e.Wt[0],
			Yr: e.Wt[1],
			Kr: e.Wt[2],
			Zr: e.Wt[3],
			Gr: e.Gr ?? 1,
			Xr: e.ce,
			Or: t
		};
	}
	kr(e) {
		let t = this.nh(e), n = this.Vr(e);
		return t.sh !== n && (t.Tr.clear(), t.sh = n), t;
	}
	nh(e) {
		let t = this.Sr.get(e);
		return t === void 0 && (t = {
			sh: this.Vr(e),
			Tr: /* @__PURE__ */ new Map()
		}, this.Sr.set(e, t)), t;
	}
}, Bp = class extends sp {
	constructor(e) {
		super(), this.sn = e;
	}
	Qt() {
		return this.sn;
	}
}, Vp = {
	Bar: (e, t, n, r) => {
		let i = t.upColor, a = t.downColor, o = $(e(n, r)), s = Ef(o.Wt[0]) <= Ef(o.Wt[3]);
		return { eh: o.R ?? (s ? i : a) };
	},
	Candlestick: (e, t, n, r) => {
		let i = t.upColor, a = t.downColor, o = t.borderUpColor, s = t.borderDownColor, c = t.wickUpColor, l = t.wickDownColor, u = $(e(n, r)), d = Ef(u.Wt[0]) <= Ef(u.Wt[3]);
		return {
			eh: u.R ?? (d ? i : a),
			rh: u.Ht ?? (d ? o : s),
			hh: u.ah ?? (d ? c : l)
		};
	},
	Custom: (e, t, n, r) => ({ eh: $(e(n, r)).R ?? t.color }),
	Area: (e, t, n, r) => {
		let i = $(e(n, r));
		return {
			eh: i.vt ?? t.lineColor,
			vt: i.vt ?? t.lineColor,
			oh: i.oh ?? t.topColor,
			_h: i._h ?? t.bottomColor
		};
	},
	Baseline: (e, t, n, r) => {
		let i = $(e(n, r));
		return {
			eh: i.Wt[3] >= t.baseValue.price ? t.topLineColor : t.bottomLineColor,
			uh: i.uh ?? t.topLineColor,
			dh: i.dh ?? t.bottomLineColor,
			fh: i.fh ?? t.topFillColor1,
			ph: i.ph ?? t.topFillColor2,
			mh: i.mh ?? t.bottomFillColor1,
			wh: i.wh ?? t.bottomFillColor2
		};
	},
	Line: (e, t, n, r) => {
		let i = $(e(n, r));
		return {
			eh: i.R ?? t.color,
			vt: i.R ?? t.color
		};
	},
	Histogram: (e, t, n, r) => ({ eh: $(e(n, r)).R ?? t.color })
}, Hp = class {
	constructor(e) {
		this.Mh = (e, t) => t === void 0 ? this.Re.Un().gh(e) : t.Wt, this.Re = e, this.bh = Vp[e.Sh()];
	}
	xh(e, t) {
		return this.bh(this.Mh, this.Re.N(), e, t);
	}
};
function Up(e, t, n, r, i = 0, a = t.length) {
	let o = a - i;
	for (; 0 < o;) {
		let a = o >> 1, s = i + a;
		r(t[s], n) === e ? (i = s + 1, o -= a + 1) : o = a;
	}
	return i;
}
var Wp = Up.bind(null, !0), Gp = Up.bind(null, !1), Kp;
(function(e) {
	e[e.NearestLeft = -1] = "NearestLeft", e[e.None = 0] = "None", e[e.NearestRight = 1] = "NearestRight";
})(Kp ||= {});
var qp = 30, Jp = class {
	constructor() {
		this.Ch = [], this.yh = /* @__PURE__ */ new Map(), this.Ph = /* @__PURE__ */ new Map(), this.kh = [];
	}
	Th() {
		return this.Rh() > 0 ? this.Ch[this.Ch.length - 1] : null;
	}
	Dh() {
		return this.Rh() > 0 ? this.Ih(0) : null;
	}
	Qn() {
		return this.Rh() > 0 ? this.Ih(this.Ch.length - 1) : null;
	}
	Rh() {
		return this.Ch.length;
	}
	Gi() {
		return this.Rh() === 0;
	}
	Oe(e) {
		return this.Vh(e, 0) !== null;
	}
	gh(e) {
		return this.Hn(e);
	}
	Hn(e, t = 0) {
		let n = this.Vh(e, t);
		return n === null ? null : {
			...this.Bh(n),
			$n: this.Ih(n)
		};
	}
	Eh() {
		return this.Ch;
	}
	Ah(e, t, n) {
		if (this.Gi()) return null;
		let r = null;
		for (let i of n) r = Yp(r, this.Lh(e, t, i));
		return r;
	}
	ht(e) {
		this.Ph.clear(), this.yh.clear(), this.Ch = e, this.kh = e.map((e) => e.$n);
	}
	zh() {
		return this.kh;
	}
	Ih(e) {
		return this.Ch[e].$n;
	}
	Bh(e) {
		return this.Ch[e];
	}
	Vh(e, t) {
		let n = this.Oh(e);
		if (n === null && t !== 0) switch (t) {
			case -1: return this.Nh(e);
			case 1: return this.Fh(e);
			default: throw TypeError("Unknown search mode");
		}
		return n;
	}
	Nh(e) {
		let t = this.Wh(e);
		return t > 0 && --t, t !== this.Ch.length && this.Ih(t) < e ? t : null;
	}
	Fh(e) {
		let t = this.Hh(e);
		return t !== this.Ch.length && e < this.Ih(t) ? t : null;
	}
	Oh(e) {
		let t = this.Wh(e);
		return t === this.Ch.length || e < this.Ch[t].$n ? null : t;
	}
	Wh(e) {
		return Wp(this.Ch, e, (e, t) => e.$n < t);
	}
	Hh(e) {
		return Gp(this.Ch, e, (e, t) => e.$n > t);
	}
	Uh(e, t, n) {
		let r = null;
		for (let i = e; i < t; i++) {
			let e = this.Ch[i].Wt[n];
			Number.isNaN(e) || (r === null ? r = {
				$h: e,
				jh: e
			} : (e < r.$h && (r.$h = e), e > r.jh && (r.jh = e)));
		}
		return r;
	}
	Lh(e, t, n) {
		if (this.Gi()) return null;
		let r = null, i = $(this.Dh()), a = $(this.Qn()), o = Math.max(e, i), s = Math.min(t, a), c = Math.ceil(o / qp) * qp, l = Math.max(c, Math.floor(s / qp) * qp);
		{
			let e = this.Wh(o), i = this.Hh(Math.min(s, c, t));
			r = Yp(r, this.Uh(e, i, n));
		}
		let u = this.yh.get(n);
		u === void 0 && (u = /* @__PURE__ */ new Map(), this.yh.set(n, u));
		for (let e = Math.max(c + 1, o); e < l; e += qp) {
			let t = Math.floor(e / qp), i = u.get(t);
			if (i === void 0) {
				let e = this.Wh(t * qp), r = this.Hh((t + 1) * qp - 1);
				i = this.Uh(e, r, n), u.set(t, i);
			}
			r = Yp(r, i);
		}
		{
			let e = this.Wh(l), t = this.Hh(s);
			r = Yp(r, this.Uh(e, t, n));
		}
		return r;
	}
};
function Yp(e, t) {
	return e === null ? t : t === null ? e : {
		$h: Math.min(e.$h, t.$h),
		jh: Math.max(e.jh, t.jh)
	};
}
function Xp() {
	return new Jp();
}
var Zp = { setLineStyle: Sf }, Qp = class {
	constructor(e) {
		this.qh = e;
	}
	st(e, t, n) {
		this.qh.draw(e, Zp);
	}
	Yh(e, t, n) {
		this.qh.drawBackground?.(e, Zp);
	}
}, $p = class {
	constructor(e) {
		this.Ls = null, this.Kh = e;
	}
	Tt() {
		let e = this.Kh.renderer();
		if (e === null) return null;
		if (this.Ls?.Zh === e) return this.Ls.Gh;
		let t = new Qp(e);
		return this.Ls = {
			Zh: e,
			Gh: t
		}, t;
	}
	Xh() {
		return this.Kh.zOrder?.() ?? "normal";
	}
}, em = class {
	constructor(e) {
		this.Jh = null, this.Qh = e;
	}
	ta() {
		return this.Qh;
	}
	Nn() {
		this.Qh.updateAllViews?.();
	}
	jn() {
		let e = this.Qh.paneViews?.() ?? [];
		if (this.Jh?.Zh === e) return this.Jh.Gh;
		let t = e.map((e) => new $p(e));
		return this.Jh = {
			Zh: e,
			Gh: t
		}, t;
	}
	Qs(e, t) {
		return this.Qh.hitTest?.(e, t) ?? null;
	}
}, tm = class extends em {
	cn() {
		return [];
	}
}, nm = class {
	constructor(e) {
		this.qh = e;
	}
	st(e, t, n) {
		this.qh.draw(e, Zp);
	}
	Yh(e, t, n) {
		this.qh.drawBackground?.(e, Zp);
	}
}, rm = class {
	constructor(e) {
		this.Ls = null, this.Kh = e;
	}
	Tt() {
		let e = this.Kh.renderer();
		if (e === null) return null;
		if (this.Ls?.Zh === e) return this.Ls.Gh;
		let t = new nm(e);
		return this.Ls = {
			Zh: e,
			Gh: t
		}, t;
	}
	Xh() {
		return this.Kh.zOrder?.() ?? "normal";
	}
};
function im(e) {
	return {
		ri: e.text(),
		Ei: e.coordinate(),
		Vi: e.fixedCoordinate?.(),
		R: e.textColor(),
		G: e.backColor(),
		It: e.visible?.() ?? !0,
		pi: e.tickVisible?.() ?? !0
	};
}
var am = class {
	constructor(e, t) {
		this.Xt = new ap(), this.ia = e, this.na = t;
	}
	Tt() {
		return this.Xt.ht({
			nn: this.na.nn(),
			...im(this.ia)
		}), this.Xt;
	}
}, om = class extends np {
	constructor(e, t) {
		super(), this.ia = e, this.Ki = t;
	}
	Yi(e, t, n) {
		let r = im(this.ia);
		n.G = r.G, e.R = r.R;
		let i = 2 / 12 * this.Ki.P();
		n.Ti = i, n.Ri = i, n.Ei = r.Ei, n.Vi = r.Vi, e.ri = r.ri, e.It = r.It, e.pi = r.pi;
	}
}, sm = class extends em {
	constructor(e, t) {
		super(e), this.sa = null, this.ea = null, this.ra = null, this.ha = null, this.Re = t;
	}
	dn() {
		let e = this.Qh.timeAxisViews?.() ?? [];
		if (this.sa?.Zh === e) return this.sa.Gh;
		let t = this.Re.Qt().Et(), n = e.map((e) => new am(e, t));
		return this.sa = {
			Zh: e,
			Gh: n
		}, n;
	}
	qn() {
		let e = this.Qh.priceAxisViews?.() ?? [];
		if (this.ea?.Zh === e) return this.ea.Gh;
		let t = this.Re.Ft(), n = e.map((e) => new om(e, t));
		return this.ea = {
			Zh: e,
			Gh: n
		}, n;
	}
	aa() {
		let e = this.Qh.priceAxisPaneViews?.() ?? [];
		if (this.ra?.Zh === e) return this.ra.Gh;
		let t = e.map((e) => new rm(e));
		return this.ra = {
			Zh: e,
			Gh: t
		}, t;
	}
	la() {
		let e = this.Qh.timeAxisPaneViews?.() ?? [];
		if (this.ha?.Zh === e) return this.ha.Gh;
		let t = e.map((e) => new rm(e));
		return this.ha = {
			Zh: e,
			Gh: t
		}, t;
	}
	oa(e, t) {
		return this.Qh.autoscaleInfo?.(e, t) ?? null;
	}
};
function cm(e, t, n, r) {
	e.forEach((e) => {
		t(e).forEach((e) => {
			e.Xh() === n && r.push(e);
		});
	});
}
function lm(e) {
	return e.jn();
}
function um(e) {
	return e.aa();
}
function dm(e) {
	return e.la();
}
var fm = [
	"Area",
	"Line",
	"Baseline"
], pm = class extends Bp {
	constructor(e, t, n, r, i) {
		super(e), this.qt = Xp(), this.pr = new kp(this), this._a = [], this.ua = new Tp(this), this.ca = null, this.da = null, this.fa = null, this.pa = [], this.va = new zp(), this.ma = /* @__PURE__ */ new Map(), this.wa = null, this.yn = n, this.Ma = t;
		let a = new Ap(this);
		if (this.mn = [a], this.vr = new xp(a, this, e), fm.includes(this.Ma) && (this.ca = new Op(this)), this.ga(), this.Kh = r(this, this.Qt(), i), this.Ma === "Custom") {
			let e = this.Kh;
			e.ba && this.Sa(e.ba);
		}
	}
	m() {
		this.fa !== null && clearTimeout(this.fa);
	}
	He(e) {
		return this.yn.priceLineColor || e;
	}
	Le(e) {
		let t = { ze: !0 }, n = this.Ft();
		if (this.Qt().Et().Gi() || n.Gi() || this.qt.Gi()) return t;
		let r = this.Qt().Et().Ae(), i = this.Lt();
		if (r === null || i === null) return t;
		let a, o;
		if (e) {
			let e = this.qt.Th();
			if (e === null) return t;
			a = e, o = e.$n;
		} else {
			let e = this.qt.Hn(r.bi(), -1);
			if (e === null || (a = this.qt.gh(e.$n), a === null)) return t;
			o = e.$n;
		}
		let s = a.Wt[3], c = this.xa().xh(o, { Wt: a }), l = n.Nt(s, i.Wt);
		return {
			ze: !1,
			Mt: s,
			ri: n.Ji(s, i.Wt),
			Ye: n.Ca(s),
			Ke: n.ya(s, i.Wt),
			R: c.eh,
			Ei: l,
			$n: o
		};
	}
	xa() {
		return this.da !== null || (this.da = new Hp(this)), this.da;
	}
	N() {
		return this.yn;
	}
	mr(e) {
		let t = this.Qt(), { priceScaleId: n, visible: r, priceFormat: i } = e;
		n !== void 0 && n !== this.yn.priceScaleId && t.Pa(this, n), r !== void 0 && r !== this.yn.visible && t.ka();
		let a = e.conflationThresholdFactor !== void 0;
		Of(this.yn, e), Object.prototype.hasOwnProperty.call(e, "autoscaleInfoProvider") && e.autoscaleInfoProvider === void 0 && (this.yn.autoscaleInfoProvider = void 0), a && (this.ma.clear(), this.Qt().wr()), i !== void 0 && (this.ga(), t.Ta()), t.Ra(this), t.Da(), this.Kh.Pt("options");
	}
	ht(e, t) {
		this.qt.ht(e), this.ma.clear();
		let n = this.Qt().Et().N();
		n.enableConflation && n.precomputeConflationOnInit && this.Ia(n.precomputeConflationPriority), this.Va(), this.ca !== null && (t && t.Ba ? this.ca.Ie() : e.length === 0 && this.ca.De());
		let r = this.Qt().Ks(this);
		this.Qt().Ea(r), this.Qt().Ra(this), this.Qt().Da(), this.Qt().wr();
	}
	Va() {
		this.Kh.Pt("data");
	}
	Aa(e) {
		let t = new Rp(this, e);
		return this._a.push(t), this.Qt().Ra(this), t;
	}
	La(e) {
		let t = this._a.indexOf(e);
		t !== -1 && this._a.splice(t, 1), this.Qt().Ra(this);
	}
	za() {
		return this._a;
	}
	Sh() {
		return this.Ma;
	}
	Lt() {
		let e = this.Oa();
		return e === null ? null : {
			Wt: e.Wt[3],
			Na: e.wt
		};
	}
	Oa() {
		let e = this.Qt().Et().Ae();
		if (e === null) return null;
		let t = e.Fa();
		return this.qt.Hn(t, 1);
	}
	Un() {
		return this.qt;
	}
	Sa(e) {
		this.wa = e, this.ma.clear();
	}
	Wa() {
		return !!this.Qt().Et().N().enableConflation && this.Ha() > 1;
	}
	Dr(e) {
		if (!this.Wa()) return;
		let t = this.Ha();
		if (!this.ma.has(t)) return;
		let n = this.Ma === "Custom", r = n && this.wa || void 0, i = n && this.Kh.Ua ? (e) => {
			let t = e, n = this.Kh.Ua(t);
			return Array.isArray(n) ? n : [typeof n == "number" ? n : 0];
		} : void 0, a = this.va.Dr(this.qt.Eh(), e, t, r, n, i), o = Xp();
		o.ht(a), this.ma.set(t, o);
	}
	$a() {
		let e = this.Qt().Et().N().enableConflation;
		if (this.Ma === "Custom" && this.wa === null || !e) return this.qt;
		let t = this.Ha();
		return this.ma.get(t) || (this.ja(t), this.ma.get(t) ?? this.qt);
	}
	qa(e) {
		let t = this.qt.gh(e);
		return t === null ? null : this.Ma === "Bar" || this.Ma === "Candlestick" || this.Ma === "Custom" ? {
			qr: t.Wt[0],
			Yr: t.Wt[1],
			Kr: t.Wt[2],
			Zr: t.Wt[3]
		} : t.Wt[3];
	}
	Ya(e) {
		let t = [];
		cm(this.pa, lm, "top", t);
		let n = this.ca;
		return n !== null && n.It() && (this.fa === null && n.Be() && (this.fa = setTimeout(() => {
			this.fa = null, this.Qt().Ka();
		}, 0)), n.Ve(), t.unshift(n)), t;
	}
	jn() {
		let e = [];
		this.Za() || e.push(this.ua), e.push(this.Kh, this.pr);
		let t = this._a.map((e) => e.Mr());
		return e.push(...t), cm(this.pa, lm, "normal", e), e;
	}
	Ga() {
		let e = this.Kh.Ga?.() ?? null;
		if (e === null) return null;
		let t = [];
		this.Za() || t.push(this.ua), t.push(...e.Xa), cm(this.pa, lm, "normal", t);
		let n = [];
		n.push(...e.Ya, this.pr);
		let r = this._a.map((e) => e.Mr());
		return n.push(...r), {
			Xa: t,
			Ya: n
		};
	}
	Ja() {
		return this.Qa(lm, "bottom");
	}
	tl(e) {
		return this.Qa(um, e);
	}
	il(e) {
		return this.Qa(dm, e);
	}
	nl(e, t) {
		return this.pa.map((n) => n.Qs(e, t)).filter((e) => e !== null);
	}
	cn() {
		return [this.vr, ...this._a.map((e) => e.gr())];
	}
	qn(e, t) {
		if (t !== this.hn && !this.Za()) return [];
		let n = [...this.mn];
		for (let e of this._a) n.push(e.br());
		return this.pa.forEach((e) => {
			n.push(...e.qn());
		}), n;
	}
	dn() {
		let e = [];
		return this.pa.forEach((t) => {
			e.push(...t.dn());
		}), e;
	}
	oa(e, t) {
		if (this.yn.autoscaleInfoProvider != null) {
			let n = this.yn.autoscaleInfoProvider(() => {
				let n = this.sl(e, t);
				return n === null ? null : n.er();
			});
			return Np.rr(n);
		}
		return this.sl(e, t);
	}
	Zh() {
		let e = this.yn.priceFormat;
		return e.base ?? 1 / e.minMove;
	}
	el() {
		return this.rl;
	}
	Nn() {
		this.Kh.Pt();
		for (let e of this.mn) e.Pt();
		for (let e of this._a) e.Pt();
		this.pr.Pt(), this.ua.Pt(), this.ca?.Pt(), this.pa.forEach((e) => e.Nn());
	}
	Ft() {
		return $(super.Ft());
	}
	At(e) {
		if (this.Ma !== "Line" && this.Ma !== "Area" && this.Ma !== "Baseline" || !this.yn.crosshairMarkerVisible) return null;
		let t = this.qt.gh(e);
		return t === null ? null : {
			Mt: t.Wt[3],
			ft: this.hl(),
			Ht: this.al(),
			Ot: this.ll(),
			zt: this.ol(e)
		};
	}
	Ue() {
		return this.yn.title;
	}
	It() {
		return this.yn.visible;
	}
	_l(e) {
		this.pa.push(new sm(e, this));
	}
	ul(e) {
		this.pa = this.pa.filter((t) => t.ta() !== e);
	}
	cl() {
		if (this.Ma === "Custom") return (e) => this.Kh.Ua(e);
	}
	dl() {
		if (this.Ma === "Custom") return (e) => this.Kh.fl(e);
	}
	pl() {
		return this.qt.zh();
	}
	Za() {
		return !up(this.Ft().vl());
	}
	sl(e, t) {
		if (!Af(e) || !Af(t) || this.qt.Gi()) return null;
		let n = this.Ma === "Line" || this.Ma === "Area" || this.Ma === "Baseline" || this.Ma === "Histogram" ? [3] : [2, 1], r = this.qt.Ah(e, t, n), i = r === null ? null : new Mp(r.$h, r.jh), a = null;
		if (this.Sh() === "Histogram") {
			let e = this.yn.base, t = new Mp(e, e);
			i = i === null ? t : i.Ss(t);
		}
		return this.pa.forEach((n) => {
			let r = n.oa(e, t);
			if (r?.priceRange) {
				let e = new Mp(r.priceRange.minValue, r.priceRange.maxValue);
				i = i === null ? e : i.Ss(e);
			}
			r?.margins && (a = r.margins);
		}), new Np(i, a);
	}
	hl() {
		switch (this.Ma) {
			case "Line":
			case "Area":
			case "Baseline": return this.yn.crosshairMarkerRadius;
		}
		return 0;
	}
	al() {
		switch (this.Ma) {
			case "Line":
			case "Area":
			case "Baseline": {
				let e = this.yn.crosshairMarkerBorderColor;
				if (e.length !== 0) return e;
			}
		}
		return null;
	}
	ll() {
		switch (this.Ma) {
			case "Line":
			case "Area":
			case "Baseline": return this.yn.crosshairMarkerBorderWidth;
		}
		return 0;
	}
	ol(e) {
		switch (this.Ma) {
			case "Line":
			case "Area":
			case "Baseline": {
				let e = this.yn.crosshairMarkerBackgroundColor;
				if (e.length !== 0) return e;
			}
		}
		return this.xa().xh(e).eh;
	}
	ga() {
		switch (this.yn.priceFormat.type) {
			case "custom": {
				let e = this.yn.priceFormat.formatter;
				this.rl = {
					format: e,
					formatTickmarks: this.yn.priceFormat.tickmarksFormatter ?? ((t) => t.map(e))
				};
				break;
			}
			case "volume":
				this.rl = new _p(this.yn.priceFormat.precision);
				break;
			case "percent":
				this.rl = new gp(10 ** this.yn.priceFormat.precision);
				break;
			default: {
				let e = 10 ** this.yn.priceFormat.precision;
				this.rl = new hp(e, this.yn.priceFormat.minMove * e);
			}
		}
		this.hn !== null && this.hn.ml();
	}
	Qa(e, t) {
		let n = [];
		return cm(this.pa, e, t, n), n;
	}
	Ha() {
		let { wl: e, Ml: t, gl: n } = this.bl();
		return this.va.Cr(e, t, n);
	}
	bl() {
		let e = this.Qt().Et(), t = e.wl(), n = window.devicePixelRatio || 1, r = e.N().conflationThresholdFactor;
		return {
			wl: t,
			Ml: n,
			gl: this.yn.conflationThresholdFactor ?? r ?? 1
		};
	}
	Sl(e) {
		let t = this.qt.Eh(), n;
		if (this.Ma === "Custom" && this.wa !== null) {
			let r = this.cl();
			if (!r) throw Error(Fp);
			n = this.va.yr(t, e, this.wa, !0, (e) => r(e));
		} else n = this.va.yr(t, e);
		let r = Xp();
		return r.ht(n), r;
	}
	ja(e) {
		let t = this.Sl(e);
		this.ma.set(e, t);
	}
	Ia(e) {
		if (this.Ma === "Custom" && (this.wa === null || !this.cl())) return;
		this.ma.clear();
		let t = this.Qt().Et().xl();
		for (let n of t) {
			let t = () => {
				this.Cl(n);
			}, r = typeof window == "object" && window || typeof self == "object" && self || void 0;
			r?.scheduler?.postTask ? r.scheduler.postTask(() => {
				t();
			}, { priority: e }) : Promise.resolve().then(() => t());
		}
	}
	Cl(e) {
		if (this.ma.has(e) || this.qt.Eh().length === 0) return;
		let t = this.Sl(e);
		this.ma.set(e, t);
	}
}, mm = [3], hm = [
	0,
	1,
	2,
	3
], gm = class {
	constructor(e) {
		this.yn = e;
	}
	yl(e, t, n) {
		let r = e;
		if (this.yn.mode === 0) return r;
		let i = n.kn(), a = i.Lt();
		if (a === null) return r;
		let o = i.Nt(e, a), s = n.Pl().filter((e) => e instanceof pm).reduce((e, r) => {
			if (n.Zs(r) || !r.It()) return e;
			let i = r.Ft(), a = r.Un();
			if (i.Gi() || !a.Oe(t)) return e;
			let o = a.gh(t);
			if (o === null) return e;
			let s = Ef(r.Lt()), c = this.yn.mode === 3 ? hm : mm;
			return e.concat(c.map((e) => i.Nt(o.Wt[e], s.Wt)));
		}, []);
		if (s.length === 0) return r;
		s.sort((e, t) => Math.abs(e - o) - Math.abs(t - o));
		let c = s[0];
		return r = i.Tn(c, a), r;
	}
};
function _m(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function vm(e, t, n) {
	return t - e <= n;
}
function ym(e) {
	let t = Math.ceil(e);
	return t % 2 == 0 ? t - 1 : t;
}
var bm = class extends Uf {
	constructor() {
		super(...arguments), this.qt = null;
	}
	ht(e) {
		this.qt = e;
	}
	et({ context: e, bitmapSize: t, horizontalPixelRatio: n, verticalPixelRatio: r }) {
		if (this.qt === null) return;
		let i = Math.max(1, Math.floor(n));
		e.lineWidth = i, function(e, t) {
			e.save(), e.lineWidth % 2 && e.translate(.5, .5), t(), e.restore();
		}(e, () => {
			let a = $(this.qt);
			if (a.kl) {
				e.strokeStyle = a.Tl, Sf(e, a.Rl), e.beginPath();
				for (let r of a.Dl) {
					let a = Math.round(r.Il * n);
					e.moveTo(a, -i), e.lineTo(a, t.height + i);
				}
				e.stroke();
			}
			if (a.Vl) {
				e.strokeStyle = a.Bl, Sf(e, a.El), e.beginPath();
				for (let n of a.Al) {
					let a = Math.round(n.Il * r);
					e.moveTo(-i, a), e.lineTo(t.width + i, a);
				}
				e.stroke();
			}
		});
	}
}, xm = class {
	constructor(e) {
		this.Xt = new bm(), this.xt = !0, this.yt = e;
	}
	Pt() {
		this.xt = !0;
	}
	Tt() {
		if (this.xt) {
			let e = this.yt.Qt().N().grid, t = {
				Vl: e.horzLines.visible,
				kl: e.vertLines.visible,
				Bl: e.horzLines.color,
				Tl: e.vertLines.color,
				El: e.horzLines.style,
				Rl: e.vertLines.style,
				Al: this.yt.kn().Ll(),
				Dl: (this.yt.Qt().Et().Ll() || []).map((e) => ({ Il: e.coord }))
			};
			this.Xt.ht(t), this.xt = !1;
		}
		return this.Xt;
	}
}, Sm = class {
	constructor(e) {
		this.Kh = new xm(e);
	}
	Mr() {
		return this.Kh;
	}
}, Cm = {
	zl: 4,
	Ol: 1e-4
};
function wm(e, t) {
	let n = 100 * (e - t) / t;
	return t < 0 ? -n : n;
}
function Tm(e, t) {
	return new Mp(wm(e.Qe(), t), wm(e.tr(), t));
}
function Em(e, t) {
	let n = 100 * (e - t) / t + 100;
	return t < 0 ? -n : n;
}
function Dm(e, t) {
	return new Mp(Em(e.Qe(), t), Em(e.tr(), t));
}
function Om(e, t) {
	let n = Math.abs(e);
	if (n < 1e-15) return 0;
	let r = Math.log10(n + t.Ol) + t.zl;
	return e < 0 ? -r : r;
}
function km(e, t) {
	let n = Math.abs(e);
	if (n < 1e-15) return 0;
	let r = 10 ** (n - t.zl) - t.Ol;
	return e < 0 ? -r : r;
}
function Am(e, t) {
	return e === null ? null : new Mp(Om(e.Qe(), t), Om(e.tr(), t));
}
function jm(e, t) {
	return e === null ? null : new Mp(km(e.Qe(), t), km(e.tr(), t));
}
function Mm(e) {
	if (e === null) return Cm;
	let t = Math.abs(e.tr() - e.Qe());
	if (t >= 1 || t < 1e-15) return Cm;
	let n = Math.ceil(Math.abs(Math.log10(t))), r = Cm.zl + n;
	return {
		zl: r,
		Ol: 1 / 10 ** r
	};
}
var Nm = class {
	constructor(e, t) {
		if (this.Nl = e, this.Fl = t, function(e) {
			if (e < 0) return !1;
			if (e > 0xde0b6b3a7640000) return !0;
			for (let t = e; t > 1; t /= 10) if (t % 10 != 0) return !1;
			return !0;
		}(this.Nl)) this.Wl = [
			2,
			2.5,
			2
		];
		else {
			this.Wl = [];
			for (let e = this.Nl; e !== 1;) {
				if (e % 2 == 0) this.Wl.push(2), e /= 2;
				else {
					if (e % 5 != 0) throw Error("unexpected base");
					this.Wl.push(2, 2.5), e /= 5;
				}
				if (this.Wl.length > 100) throw Error("something wrong with base");
			}
		}
	}
	Hl(e, t, n) {
		let r = this.Nl === 0 ? 0 : 1 / this.Nl, i = 10 ** Math.max(0, Math.ceil(Math.log10(e - t))), a = 0, o = this.Fl[0];
		for (;;) {
			let e = vm(i, r, 1e-14) && i > r + 1e-14, t = vm(i, n * o, 1e-14), s = vm(i, 1, 1e-14);
			if (!(e && t && s)) break;
			i /= o, o = this.Fl[++a % this.Fl.length];
		}
		if (i <= r + 1e-14 && (i = r), i = Math.max(1, i), this.Wl.length > 0 && (s = i, c = 1, l = 1e-14, Math.abs(s - c) < l)) for (a = 0, o = this.Wl[0]; vm(i, n * o, 1e-14) && i > r + 1e-14;) i /= o, o = this.Wl[++a % this.Wl.length];
		var s, c, l;
		return i;
	}
}, Pm = class {
	constructor(e, t, n, r) {
		this.Ul = [], this.Ki = e, this.Nl = t, this.$l = n, this.jl = r;
	}
	Hl(e, t) {
		if (e < t) throw Error("high < low");
		let n = this.Ki.$t(), r = (e - t) * this.ql() / n, i = new Nm(this.Nl, [
			2,
			2.5,
			2
		]), a = new Nm(this.Nl, [
			2,
			2,
			2.5
		]), o = new Nm(this.Nl, [
			2.5,
			2,
			2
		]), s = [];
		return s.push(i.Hl(e, t, r), a.Hl(e, t, r), o.Hl(e, t, r)), function(e) {
			if (e.length < 1) throw Error("array is empty");
			let t = e[0];
			for (let n = 1; n < e.length; ++n) e[n] < t && (t = e[n]);
			return t;
		}(s);
	}
	Yl() {
		let e = this.Ki, t = e.Lt();
		if (t === null) return void (this.Ul = []);
		let n = e.$t(), r = this.$l(n - 1, t), i = this.$l(0, t), a = this.Ki.N().entireTextOnly ? this.Kl() / 2 : 0, o = a, s = n - 1 - a, c = Math.max(r, i), l = Math.min(r, i);
		if (c === l) return void (this.Ul = []);
		let u = this.Hl(c, l);
		if (this.Zl(t, u, c, l, o, s), e.Gl() && this.Xl(u, l, c)) {
			let e = this.Ki.Jl();
			this.Ql(t, u, o, s, e, 2 * e);
		}
		let d = this.Ul.map((e) => e.io), f = this.Ki.no(d);
		for (let e = 0; e < this.Ul.length; e++) this.Ul[e].so = f[e];
	}
	Ll() {
		return this.Ul;
	}
	Kl() {
		return this.Ki.P();
	}
	ql() {
		return Math.ceil(this.Kl() * this.Ki.N().tickMarkDensity);
	}
	Zl(e, t, n, r, i, a) {
		let o = this.Ul, s = this.Ki, c = n % t;
		c += c < 0 ? t : 0;
		let l = n >= r ? 1 : -1, u = null, d = 0;
		for (let f = n - c; f > r; f -= t) {
			let n = this.jl(f, e, !0);
			u !== null && Math.abs(n - u) < this.ql() || n < i || n > a || (d < o.length ? (o[d].Il = n, o[d].so = s.eo(f), o[d].io = f) : o.push({
				Il: n,
				so: s.eo(f),
				io: f
			}), d++, u = n, s.ro() && (t = this.Hl(f * l, r)));
		}
		o.length = d;
	}
	Ql(e, t, n, r, i, a) {
		let o = this.Ul, s = this.ho(e, n, i, a), c = this.ho(e, r, -a, -i), l = this.jl(0, e, !0) - this.jl(t, e, !0);
		o.length > 0 && o[0].Il - s.Il < l / 2 && o.shift(), o.length > 0 && c.Il - o[o.length - 1].Il < l / 2 && o.pop(), o.unshift(s), o.push(c);
	}
	ho(e, t, n, r) {
		let i = (n + r) / 2, a = this.$l(t + n, e), o = this.$l(t + r, e), s = Math.min(a, o), c = Math.max(a, o), l = Math.max(.1, this.Hl(c, s)), u = this.$l(t + i, e), d = u - u % l, f = this.jl(d, e, !0);
		return {
			so: this.Ki.eo(d),
			Il: f,
			io: d
		};
	}
	Xl(e, t, n) {
		let r = Ef(this.Ki.lr());
		return this.Ki.ro() && (r = jm(r, this.Ki.ao())), r.Qe() - t < e && n - r.tr() < e;
	}
};
function Fm(e) {
	return e.slice().sort((e, t) => $(e.ln()) - $(t.ln()));
}
var Im;
(function(e) {
	e[e.Normal = 0] = "Normal", e[e.Logarithmic = 1] = "Logarithmic", e[e.Percentage = 2] = "Percentage", e[e.IndexedTo100 = 3] = "IndexedTo100";
})(Im ||= {});
var Lm = new gp(), Rm = new hp(100, 1);
function zm(e) {
	return {
		visible: !0,
		autoScale: !0,
		...Nf(e)
	};
}
var Bm = class {
	constructor(e, t, n, r, i) {
		this.lo = 0, this.oo = null, this.hr = null, this._o = null, this.uo = {
			co: !1,
			do: null
		}, this.fo = !1, this.po = 0, this.vo = 0, this.mo = new Df(), this.wo = new Df(), this.Mo = [], this.bo = null, this.So = null, this.xo = null, this.Co = null, this.yo = null, this.rl = Rm, this.Po = Mm(null), this.ko = e, this.yn = t, this.To = n, this.Ro = r, this.Do = i, this.Io = new Pm(this, 100, this.Vo.bind(this), this.Bo.bind(this));
	}
	vl() {
		return this.ko;
	}
	N() {
		return this.yn;
	}
	mr(e) {
		if (Of(this.yn, e), this.ml(), e.mode !== void 0 && this.Eo({ ue: e.mode }), e.scaleMargins !== void 0) {
			let t = Tf(e.scaleMargins.top), n = Tf(e.scaleMargins.bottom);
			if (t < 0 || t > 1) throw Error(`Invalid top margin - expect value between 0 and 1, given=${t}`);
			if (n < 0 || n > 1) throw Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);
			if (t + n > 1) throw Error(`Invalid margins - sum of margins must be less than 1, given=${t + n}`);
			this.Ao(), this.xo = null;
		}
	}
	Lo() {
		return this.yn.autoScale;
	}
	zo() {
		return this.fo;
	}
	ro() {
		return this.yn.mode === 1;
	}
	qe() {
		return this.yn.mode === 2;
	}
	Oo() {
		return this.yn.mode === 3;
	}
	ao() {
		return this.Po;
	}
	ue() {
		return {
			hs: this.yn.autoScale,
			No: this.yn.invertScale,
			ue: this.yn.mode
		};
	}
	Eo(e) {
		let t = this.ue(), n = null;
		e.hs !== void 0 && (this.yn.autoScale = e.hs), e.ue !== void 0 && (this.yn.mode = e.ue, e.ue !== 2 && e.ue !== 3 || (this.yn.autoScale = !0), this.uo.co = !1), t.ue === 1 && e.ue !== t.ue && (function(e, t) {
			if (e === null) return !1;
			let n = km(e.Qe(), t), r = km(e.tr(), t);
			return isFinite(n) && isFinite(r);
		}(this.hr, this.Po) ? (n = jm(this.hr, this.Po), n !== null && this.Fo(n)) : this.yn.autoScale = !0), e.ue === 1 && e.ue !== t.ue && (n = Am(this.hr, this.Po), n !== null && this.Fo(n));
		let r = t.ue !== this.yn.mode;
		r && (t.ue === 2 || this.qe()) && this.ml(), r && (t.ue === 3 || this.Oo()) && this.ml(), e.No !== void 0 && t.No !== e.No && (this.yn.invertScale = e.No, this.Wo()), this.wo.p(t, this.ue());
	}
	Ho() {
		return this.wo;
	}
	P() {
		return this.To.fontSize;
	}
	$t() {
		return this.lo;
	}
	Uo(e) {
		this.lo !== e && (this.lo = e, this.Ao(), this.xo = null);
	}
	$o() {
		if (this.oo) return this.oo;
		let e = this.$t() - this.jo() - this.qo();
		return this.oo = e, e;
	}
	lr() {
		return this.Yo(), this.hr;
	}
	Fo(e, t) {
		let n = this.hr;
		(t || n === null && e !== null || n !== null && !n.Xe(e)) && (this.xo = null, this.hr = e);
	}
	Ko(e) {
		this.Fo(e), this.Zo(e !== null);
	}
	Gi() {
		return this.Yo(), this.lo === 0 || !this.hr || this.hr.Gi();
	}
	Go(e) {
		return this.No() ? e : this.$t() - 1 - e;
	}
	Nt(e, t) {
		return this.qe() ? e = wm(e, t) : this.Oo() && (e = Em(e, t)), this.Bo(e, t);
	}
	Xo(e, t, n) {
		this.Yo();
		let r = this.qo(), i = $(this.lr()), a = i.Qe(), o = i.tr(), s = this.$o() - 1, c = this.No(), l = s / (o - a), u = n === void 0 ? 0 : n.from, d = n === void 0 ? e.length : n.to, f = this.Jo();
		for (let n = u; n < d; n++) {
			let i = e[n], o = i.Mt;
			if (isNaN(o)) continue;
			let s = o;
			f !== null && (s = f(i.Mt, t));
			let u = r + l * (s - a);
			i.ut = c ? u : this.lo - 1 - u;
		}
	}
	Qo(e, t, n) {
		this.Yo();
		let r = this.qo(), i = $(this.lr()), a = i.Qe(), o = i.tr(), s = this.$o() - 1, c = this.No(), l = s / (o - a), u = n === void 0 ? 0 : n.from, d = n === void 0 ? e.length : n.to, f = this.Jo();
		for (let n = u; n < d; n++) {
			let i = e[n], o = i.qr, s = i.Yr, u = i.Kr, d = i.Zr;
			f !== null && (o = f(i.qr, t), s = f(i.Yr, t), u = f(i.Kr, t), d = f(i.Zr, t));
			let p = r + l * (o - a), m = c ? p : this.lo - 1 - p;
			i.t_ = m, p = r + l * (s - a), m = c ? p : this.lo - 1 - p, i.i_ = m, p = r + l * (u - a), m = c ? p : this.lo - 1 - p, i.n_ = m, p = r + l * (d - a), m = c ? p : this.lo - 1 - p, i.s_ = m;
		}
	}
	Tn(e, t) {
		let n = this.Vo(e, t);
		return this.e_(n, t);
	}
	e_(e, t) {
		let n = e;
		return this.qe() ? n = function(e, t) {
			return t < 0 && (e = -e), e / 100 * t + t;
		}(n, t) : this.Oo() && (n = function(e, t) {
			return e -= 100, t < 0 && (e = -e), e / 100 * t + t;
		}(n, t)), n;
	}
	Pl() {
		return this.Mo;
	}
	Dt() {
		return this.So ||= Fm(this.Mo), this.So;
	}
	r_(e) {
		this.Mo.indexOf(e) === -1 && (this.Mo.push(e), this.ml(), this.h_());
	}
	a_(e) {
		let t = this.Mo.indexOf(e);
		if (t === -1) throw Error("source is not attached to scale");
		this.Mo.splice(t, 1), this.Mo.length === 0 && (this.Eo({ hs: !0 }), this.Fo(null)), this.ml(), this.h_();
	}
	Lt() {
		let e = null;
		for (let t of this.Mo) {
			let n = t.Lt();
			n !== null && (e === null || n.Na < e.Na) && (e = n);
		}
		return e === null ? null : e.Wt;
	}
	No() {
		return this.yn.invertScale;
	}
	Ll() {
		let e = this.Lt() === null;
		if (this.xo !== null && (e || this.xo.l_ === e)) return this.xo.Ll;
		this.Io.Yl();
		let t = this.Io.Ll();
		return this.xo = {
			Ll: t,
			l_: e
		}, this.mo.p(), t;
	}
	o_() {
		return this.mo;
	}
	__(e) {
		this.qe() || this.Oo() || this.Co === null && this._o === null && (this.Gi() || (this.Co = this.lo - e, this._o = $(this.lr()).Je()));
	}
	u_(e) {
		if (this.qe() || this.Oo() || this.Co === null) return;
		this.Eo({ hs: !1 }), (e = this.lo - e) < 0 && (e = 0);
		let t = (this.Co + .2 * (this.lo - 1)) / (e + .2 * (this.lo - 1)), n = $(this._o).Je();
		t = Math.max(t, .1), n.nr(t), this.Fo(n);
	}
	c_() {
		this.qe() || this.Oo() || (this.Co = null, this._o = null);
	}
	d_(e) {
		this.Lo() || this.yo === null && this._o === null && (this.Gi() || (this.yo = e, this._o = $(this.lr()).Je()));
	}
	f_(e) {
		if (this.Lo() || this.yo === null) return;
		let t = $(this.lr()).ir() / (this.$o() - 1), n = e - this.yo;
		this.No() && (n *= -1);
		let r = n * t, i = $(this._o).Je();
		i.sr(r), this.Fo(i, !0), this.xo = null;
	}
	p_() {
		this.Lo() || this.yo !== null && (this.yo = null, this._o = null);
	}
	el() {
		return this.rl || this.ml(), this.rl;
	}
	Ji(e, t) {
		switch (this.yn.mode) {
			case 2: return this.v_(wm(e, t));
			case 3: return this.el().format(Em(e, t));
			default: return this.dr(e);
		}
	}
	eo(e) {
		switch (this.yn.mode) {
			case 2: return this.v_(e);
			case 3: return this.el().format(e);
			default: return this.dr(e);
		}
	}
	no(e) {
		switch (this.yn.mode) {
			case 2: return this.m_(e);
			case 3: return this.el().formatTickmarks(e);
			default: return this.w_(e);
		}
	}
	Ca(e) {
		return this.dr(e, $(this.bo).el());
	}
	ya(e, t) {
		return e = wm(e, t), this.v_(e, Lm);
	}
	M_() {
		return this.Mo;
	}
	g_(e) {
		this.uo = {
			do: e,
			co: !1
		};
	}
	Nn() {
		this.Mo.forEach((e) => e.Nn());
	}
	Gl() {
		return this.yn.ensureEdgeTickMarksVisible && this.Lo();
	}
	Jl() {
		return this.P() / 2;
	}
	ml() {
		this.xo = null;
		let e = 1 / 0;
		this.bo = null;
		for (let t of this.Mo) t.ln() < e && (e = t.ln(), this.bo = t);
		let t = 100;
		this.bo !== null && (t = Math.round(this.bo.Zh())), this.rl = Rm, this.qe() ? (this.rl = Lm, t = 100) : this.Oo() ? (this.rl = new hp(100, 1), t = 100) : this.bo !== null && (this.rl = this.bo.el()), this.Io = new Pm(this, t, this.Vo.bind(this), this.Bo.bind(this)), this.Io.Yl();
	}
	h_() {
		this.So = null;
	}
	b_() {
		return this.bo === null || this.qe() || this.Oo() ? 1 : 1 / this.bo.Zh();
	}
	Xi() {
		return this.Do;
	}
	Zo(e) {
		this.fo = e;
	}
	jo() {
		return this.No() ? this.yn.scaleMargins.bottom * this.$t() + this.vo : this.yn.scaleMargins.top * this.$t() + this.po;
	}
	qo() {
		return this.No() ? this.yn.scaleMargins.top * this.$t() + this.po : this.yn.scaleMargins.bottom * this.$t() + this.vo;
	}
	Yo() {
		this.uo.co || (this.uo.co = !0, this.S_());
	}
	Ao() {
		this.oo = null;
	}
	Bo(e, t) {
		if (this.Yo(), this.Gi()) return 0;
		e = this.ro() && e ? Om(e, this.Po) : e;
		let n = $(this.lr()), r = this.qo() + (this.$o() - 1) * (e - n.Qe()) / n.ir();
		return this.Go(r);
	}
	Vo(e, t) {
		if (this.Yo(), this.Gi()) return 0;
		let n = this.Go(e), r = $(this.lr()), i = r.Qe() + r.ir() * ((n - this.qo()) / (this.$o() - 1));
		return this.ro() ? km(i, this.Po) : i;
	}
	Wo() {
		this.xo = null, this.Io.Yl();
	}
	S_() {
		if (this.zo() && !this.Lo()) return;
		let e = this.uo.do;
		if (e === null) return;
		let t = null, n = this.M_(), r = 0, i = 0;
		for (let a of n) {
			if (!a.It()) continue;
			let n = a.Lt();
			if (n === null) continue;
			let o = a.oa(e.Fa(), e.bi()), s = o && o.lr();
			if (s !== null) {
				switch (this.yn.mode) {
					case 1:
						s = Am(s, this.Po);
						break;
					case 2:
						s = Tm(s, n.Wt);
						break;
					case 3: s = Dm(s, n.Wt);
				}
				if (t = t === null ? s : t.Ss($(s)), o !== null) {
					let e = o._r();
					e !== null && (r = Math.max(r, e.above), i = Math.max(i, e.below));
				}
			}
		}
		if (this.Gl() && (r = Math.max(r, this.Jl()), i = Math.max(i, this.Jl())), r === this.po && i === this.vo || (this.po = r, this.vo = i, this.xo = null, this.Ao()), t !== null) {
			if (t.Qe() === t.tr()) {
				this.ro() && (t = jm(t, this.Po));
				let e = this.ro() ? 1e-8 : 1e-14, n = Math.max(5 * this.b_(), Math.abs(t.Qe()) * e);
				t = new Mp(t.Qe() - n, t.tr() + n), this.ro() && (t = Am(t, this.Po));
			}
			if (this.ro()) {
				let e = jm(t, this.Po), n = Mm(e);
				if (a = n, o = this.Po, a.zl !== o.zl || a.Ol !== o.Ol) {
					let r = this._o === null ? null : jm(this._o, this.Po);
					this.Po = n, t = Am(e, n), r !== null && (this._o = Am(r, n));
				}
			}
			this.Fo(t);
		} else this.hr === null && (this.Fo(new Mp(-.5, .5)), this.Po = Mm(null));
		var a, o;
	}
	Jo() {
		return this.qe() ? wm : this.Oo() ? Em : this.ro() ? (e) => Om(e, this.Po) : null;
	}
	x_(e, t, n) {
		return t == null ? (n === void 0 && (n = this.el()), n.format(e)) : t(e);
	}
	C_(e, t, n) {
		return t == null ? (n === void 0 && (n = this.el()), n.formatTickmarks(e)) : t(e);
	}
	dr(e, t) {
		return this.x_(e, this.Ro.priceFormatter, t);
	}
	w_(e, t) {
		let n = this.Ro.priceFormatter;
		return this.C_(e, this.Ro.tickmarksPriceFormatter ?? (n ? (e) => e.map(n) : void 0), t);
	}
	v_(e, t) {
		return this.x_(e, this.Ro.percentageFormatter, t);
	}
	m_(e, t) {
		let n = this.Ro.percentageFormatter;
		return this.C_(e, this.Ro.tickmarksPercentageFormatter ?? (n ? (e) => e.map(n) : void 0), t);
	}
};
function Vm(e) {
	return e instanceof pm;
}
var Hm = class {
	constructor(e, t) {
		this.Mo = [], this.y_ = /* @__PURE__ */ new Map(), this.lo = 0, this.P_ = 0, this.k_ = 1, this.So = null, this.T_ = null, this.R_ = !1, this.D_ = new Df(), this.pa = [], this.na = e, this.sn = t, this.I_ = new Sm(this);
		let n = t.N();
		this.V_ = this.B_("left", n.leftPriceScale), this.E_ = this.B_("right", n.rightPriceScale), this.V_.Ho().i(this.A_.bind(this, this.V_), this), this.E_.Ho().i(this.A_.bind(this, this.E_), this), this.L_(n);
	}
	L_(e) {
		if (e.leftPriceScale && this.V_.mr(e.leftPriceScale), e.rightPriceScale && this.E_.mr(e.rightPriceScale), e.localization && (this.V_.ml(), this.E_.ml()), e.overlayPriceScales) {
			let t = Array.from(this.y_.values());
			for (let n of t) {
				let t = $(n[0].Ft());
				t.mr(e.overlayPriceScales), e.localization && t.ml();
			}
		}
	}
	z_(e) {
		switch (e) {
			case "left": return this.V_;
			case "right": return this.E_;
		}
		return this.y_.has(e) ? Tf(this.y_.get(e))[0].Ft() : null;
	}
	m() {
		this.Qt().O_().u(this), this.V_.Ho().u(this), this.E_.Ho().u(this), this.Mo.forEach((e) => {
			e.m && e.m();
		}), this.pa = this.pa.filter((e) => {
			let t = e.ta();
			return t.detached && t.detached(), !1;
		}), this.D_.p();
	}
	N_() {
		return this.k_;
	}
	F_(e) {
		this.k_ = e;
	}
	Qt() {
		return this.sn;
	}
	nn() {
		return this.P_;
	}
	$t() {
		return this.lo;
	}
	W_(e) {
		this.P_ = e, this.H_();
	}
	Uo(e) {
		this.lo = e, this.V_.Uo(e), this.E_.Uo(e), this.Mo.forEach((t) => {
			if (this.Zs(t)) {
				let n = t.Ft();
				n !== null && n.Uo(e);
			}
		}), this.H_();
	}
	U_(e) {
		this.R_ = e;
	}
	j_() {
		return this.R_;
	}
	q_() {
		return this.Mo.filter(Vm);
	}
	Pl() {
		return this.Mo;
	}
	Zs(e) {
		let t = e.Ft();
		return t === null || this.V_ !== t && this.E_ !== t;
	}
	r_(e, t, n) {
		this.Y_(e, t, n ? e.ln() : this.Mo.length);
	}
	a_(e, t) {
		let n = this.Mo.indexOf(e);
		wf(n !== -1, "removeDataSource: invalid data source"), this.Mo.splice(n, 1), t || this.Mo.forEach((e, t) => e._n(t));
		let r = $(e.Ft()).vl();
		if (this.y_.has(r)) {
			let t = Tf(this.y_.get(r)), n = t.indexOf(e);
			n !== -1 && (t.splice(n, 1), t.length === 0 && this.y_.delete(r));
		}
		let i = e.Ft();
		i && i.Pl().indexOf(e) >= 0 && (i.a_(e), this.K_(i)), this.Z_();
	}
	Xs(e) {
		return e === this.V_ ? "left" : e === this.E_ ? "right" : "overlay";
	}
	G_() {
		return this.V_;
	}
	X_() {
		return this.E_;
	}
	J_(e, t) {
		e.__(t);
	}
	Q_(e, t) {
		e.u_(t), this.H_();
	}
	tu(e) {
		e.c_();
	}
	iu(e, t) {
		e.d_(t);
	}
	nu(e, t) {
		e.f_(t), this.H_();
	}
	su(e) {
		e.p_();
	}
	H_() {
		this.Mo.forEach((e) => {
			e.Nn();
		});
	}
	kn() {
		let [e, t] = this.eu(), n = null;
		return e.N().visible && e.Pl().length !== 0 ? n = e : t.N().visible && t.Pl().length !== 0 ? n = t : this.Mo.length !== 0 && (n = this.Mo[0].Ft()), n === null && (n = this.Gs() ?? e), n;
	}
	Gs() {
		let [e, t] = this.eu();
		return e.N().visible ? e : t.N().visible ? t : null;
	}
	K_(e) {
		e !== null && e.Lo() && this.ru(e);
	}
	hu(e) {
		let t = this.na.Ae();
		e.Eo({ hs: !0 }), t !== null && e.g_(t), this.H_();
	}
	au() {
		this.ru(this.V_), this.ru(this.E_);
	}
	lu() {
		this.K_(this.V_), this.K_(this.E_), this.Mo.forEach((e) => {
			this.Zs(e) && this.K_(e.Ft());
		}), this.H_(), this.sn.wr();
	}
	Dt() {
		return this.So === null && (this.So = Fm(this.Mo)), this.So;
	}
	ou() {
		let e = this.Dt(), t = this.sn.uu()?._u, n = this.sn.N().hoveredSeriesOnTop, r = this.T_;
		if (r !== null && r.Zh === e && r.cu === t && r.du === n) return r.fu;
		let i = function(e, t, n) {
			if (!n) return e;
			let r = e.indexOf(t);
			if (r === -1 || r === e.length - 1) return e;
			let i = [];
			for (let t = 0; t < e.length; t++) t !== r && i.push(e[t]);
			return i.push(e[r]), i;
		}(e, t, n);
		return this.T_ = {
			Zh: e,
			cu: t,
			du: n,
			fu: i
		}, i;
	}
	pu(e, t) {
		t = _m(t, 0, this.Mo.length - 1);
		let n = this.Mo.indexOf(e);
		wf(n !== -1, "setSeriesOrder: invalid data source"), this.Mo.splice(n, 1), this.Mo.splice(t, 0, e), this.Mo.forEach((e, t) => e._n(t)), this.Z_();
		for (let e of [this.V_, this.E_]) e.h_(), e.ml();
		this.sn.wr();
	}
	Vt() {
		return this.Dt().filter(Vm);
	}
	vu() {
		return this.D_;
	}
	mu() {
		return this.I_;
	}
	_l(e) {
		this.pa.push(new tm(e));
	}
	ul(e) {
		this.pa = this.pa.filter((t) => t.ta() !== e), e.detached && e.detached(), this.sn.wr();
	}
	wu() {
		return this.pa;
	}
	nl(e, t) {
		return this.pa.map((n) => n.Qs(e, t)).filter((e) => e !== null);
	}
	ru(e) {
		let t = e.M_();
		if (t && t.length > 0 && !this.na.Gi()) {
			let t = this.na.Ae();
			t !== null && e.g_(t);
		}
		e.Nn();
	}
	Y_(e, t, n) {
		let r = this.z_(t);
		if (r === null && (r = this.B_(t, this.sn.N().overlayPriceScales)), this.Mo.splice(n, 0, e), !up(t)) {
			let n = this.y_.get(t) || [];
			n.push(e), this.y_.set(t, n);
		}
		e._n(n), r.r_(e), e.un(r), this.K_(r), this.Z_();
	}
	Z_() {
		this.So = null, this.T_ = null;
	}
	eu() {
		return this.sn.N().defaultVisiblePriceScaleId === "left" ? [this.V_, this.E_] : [this.E_, this.V_];
	}
	A_(e, t, n) {
		t.ue !== n.ue && this.ru(e);
	}
	B_(e, t) {
		let n = new Bm(e, zm(t), this.sn.N().layout, this.sn.N().localization, this.sn.Xi());
		return n.Uo(this.$t()), n;
	}
};
function Um(e, t) {
	return t === null || e.ee === 2 && t.ee !== 2 || (t.ee !== 2 || e.ee === 2) && e.se !== t.se && e.se < t.se;
}
function Wm(e) {
	return {
		ie: e.ie,
		ne: e.ne
	};
}
function Gm(e, t) {
	return !t || e === "top" && t !== "top" || e === "normal" && t === "bottom";
}
function Km(e) {
	return {
		se: e.distance ?? 0,
		ee: e.hitTestPriority ?? (e.itemType === "marker" ? 2 : 0),
		re: e.itemType ?? "primitive",
		Mu: e.cursorStyle,
		ie: e.externalId
	};
}
function qm(e) {
	return {
		_u: e._u,
		gu: Wm(e.bu),
		Mu: e.bu.Mu,
		re: e.bu.re ?? "primitive"
	};
}
function Jm(e, t, n, r) {
	let i = null;
	for (let a of e) {
		let e = a.Qs?.(t, n, r) ?? null;
		if (e === null) {
			let i = a.Tt(r);
			e = i !== null && i.Qs ? i.Qs(t, n) : null;
		}
		if (e !== null) {
			let t = {
				Su: a,
				bu: e
			};
			(i === null || Um(t.bu, i.bu)) && (i = t);
		}
	}
	return i;
}
function Ym(e) {
	return e.jn !== void 0;
}
function Xm(e, t, n) {
	let r = [e, ...e.Dt()].reverse(), i = function(e, t, n) {
		let r, i, a;
		for (let o of e) {
			let e = o.nl?.(t, n) ?? [];
			for (let t of e) {
				let e = Km(t);
				(Gm(t.zOrder, r?.zOrder) || t.zOrder === r?.zOrder && i !== void 0 && Um(e, i) || t.zOrder === r?.zOrder && i === void 0) && (r = t, i = e, a = o);
			}
		}
		return r && a && i ? {
			bu: i,
			xu: r,
			_u: a
		} : null;
	}(r, t, n);
	if (i?.xu.zOrder === "top") return qm(i);
	let a = null, o = null;
	for (let s of r) {
		if (i && i._u === s && i.xu.zOrder !== "bottom" && !i.xu.isBackground) return a ?? qm(i);
		if (Ym(s)) {
			let r = Jm(s.jn(e), t, n, e);
			if (r !== null) {
				let e = {
					_u: s,
					Su: r.Su,
					gu: Wm(r.bu),
					Mu: r.bu.Mu,
					re: r.bu.re ?? "primitive"
				};
				(a === null || Um(r.bu, o)) && (a = e, o = r.bu);
			}
		}
		if (i && i._u === s && i.xu.zOrder !== "bottom" && i.xu.isBackground) return a ?? qm(i);
	}
	return a === null ? i?.xu ? qm(i) : null : a;
}
var Zm = class {
	constructor(e, t, n = 50) {
		this.Vs = 0, this.Bs = 1, this.Es = 1, this.Ls = /* @__PURE__ */ new Map(), this.As = /* @__PURE__ */ new Map(), this.Cu = e, this.yu = t, this.zs = n;
	}
	Pu(e) {
		let t = e.time, n = this.yu.cacheKey(t), r = this.Ls.get(n);
		if (r !== void 0) return r.ku;
		if (this.Vs === this.zs) {
			let e = this.As.get(this.Es);
			this.As.delete(this.Es), this.Ls.delete(Tf(e)), this.Es++, this.Vs--;
		}
		let i = this.Cu(e);
		return this.Ls.set(n, {
			ku: i,
			Ws: this.Bs
		}), this.As.set(this.Bs, n), this.Vs++, this.Bs++, i;
	}
}, Qm = class {
	constructor(e, t) {
		wf(e <= t, "right should be >= left"), this.Tu = e, this.Ru = t;
	}
	Fa() {
		return this.Tu;
	}
	bi() {
		return this.Ru;
	}
	Du() {
		return this.Ru - this.Tu + 1;
	}
	Oe(e) {
		return this.Tu <= e && e <= this.Ru;
	}
	Xe(e) {
		return this.Tu === e.Fa() && this.Ru === e.bi();
	}
};
function $m(e, t) {
	return e === null || t === null ? e === t : e.Xe(t);
}
var eh = class {
	constructor() {
		this.Iu = /* @__PURE__ */ new Map(), this.Ls = null, this.Vu = !1;
	}
	Bu(e) {
		this.Vu = e, this.Ls = null;
	}
	Eu(e, t) {
		this.Au(t), this.Ls = null;
		for (let n = t; n < e.length; ++n) {
			let t = e[n], r = this.Iu.get(t.timeWeight);
			r === void 0 && (r = [], this.Iu.set(t.timeWeight, r)), r.push({
				index: n,
				time: t.time,
				weight: t.timeWeight,
				originalTime: t.originalTime
			});
		}
	}
	Lu(e, t, n, r, i) {
		let a = Math.ceil(t / e);
		return this.Ls !== null && this.Ls.zu === a && i === this.Ls.Ou && n === this.Ls.Nu || (this.Ls = {
			Ou: i,
			Nu: n,
			Ll: this.Fu(a, n, r),
			zu: a
		}), this.Ls.Ll;
	}
	Au(e) {
		if (e === 0) return void this.Iu.clear();
		let t = [];
		this.Iu.forEach((n, r) => {
			e <= n[0].index ? t.push(r) : n.splice(Wp(n, e, (t) => t.index < e), 1 / 0);
		});
		for (let e of t) this.Iu.delete(e);
	}
	Fu(e, t, n) {
		let r = [], i = (e) => !t || n.has(e.index);
		for (let t of Array.from(this.Iu.keys()).sort((e, t) => t - e)) {
			if (!this.Iu.get(t)) continue;
			let n = r;
			r = [];
			let a = n.length, o = 0, s = Tf(this.Iu.get(t)), c = s.length, l = 1 / 0, u = -1 / 0;
			for (let t = 0; t < c; t++) {
				let c = s[t], d = c.index;
				for (; o < a;) {
					let e = n[o], t = e.index;
					if (!(t < d && i(e))) {
						l = t;
						break;
					}
					o++, r.push(e), u = t, l = 1 / 0;
				}
				if (l - d >= e && d - u >= e && i(c)) r.push(c), u = d;
				else if (this.Vu) return n;
			}
			for (; o < a; o++) i(n[o]) && r.push(n[o]);
		}
		return r;
	}
}, th = class e {
	constructor(e) {
		this.Wu = e;
	}
	Hu() {
		return this.Wu === null ? null : new Qm(Math.floor(this.Wu.Fa()), Math.ceil(this.Wu.bi()));
	}
	Uu() {
		return this.Wu;
	}
	static $u() {
		return new e(null);
	}
};
function nh(e, t) {
	return e.weight > t.weight ? e : t;
}
var rh = class {
	constructor(e, t, n, r) {
		this.P_ = 0, this.ju = null, this.qu = [], this.yo = null, this.Co = null, this.Yu = new eh(), this.Ku = /* @__PURE__ */ new Map(), this.Zu = th.$u(), this.Gu = !0, this.Xu = new Df(), this.Ju = new Df(), this.Qu = new Df(), this.tc = null, this.nc = 0, this.sc = null, this.ec = /* @__PURE__ */ new Map(), this.rc = -1, this.hc = [], this.ac = 1, this.yn = t, this.Ro = n, this.lc = t.rightOffset, this.oc = t.barSpacing, this.sn = e, this._c(t), this.yu = r, this.uc(), this.Yu.Bu(t.uniformDistribution), this.cc(), this.dc();
	}
	N() {
		return this.yn;
	}
	fc(e) {
		Of(this.Ro, e), this.vc(), this.uc();
	}
	mr(e) {
		Of(this.yn, e), this.yn.fixLeftEdge && this.mc(), this.yn.fixRightEdge && this.wc(), e.barSpacing !== void 0 && this.sn.Ms(e.barSpacing), e.rightOffset !== void 0 && this.sn.gs(e.rightOffset), this._c(e), e.minBarSpacing === void 0 && e.maxBarSpacing === void 0 || this.sn.Ms(e.barSpacing ?? this.oc), e.ignoreWhitespaceIndices !== void 0 && e.ignoreWhitespaceIndices !== this.yn.ignoreWhitespaceIndices && this.dc(), this.vc(), this.uc(), e.enableConflation === void 0 && e.conflationThresholdFactor === void 0 || this.cc(), this.Qu.p();
	}
	Rn(e) {
		return this.qu[e]?.time ?? null;
	}
	en(e) {
		return this.qu[e] ?? null;
	}
	Mc(e, t) {
		if (this.qu.length < 1) return null;
		if (this.yu.key(e) > this.yu.key(this.qu[this.qu.length - 1].time)) return t ? this.qu.length - 1 : null;
		let n = Wp(this.qu, this.yu.key(e), (e, t) => this.yu.key(e.time) < t);
		return this.yu.key(e) < this.yu.key(this.qu[n].time) ? t ? n : null : n;
	}
	Gi() {
		return this.P_ === 0 || this.qu.length === 0 || this.ju === null;
	}
	gc() {
		return this.qu.length > 0;
	}
	Ae() {
		return this.bc(), this.Zu.Hu();
	}
	Sc() {
		return this.bc(), this.Zu.Uu();
	}
	xc() {
		let e = this.Ae();
		if (e === null) return null;
		let t = {
			from: e.Fa(),
			to: e.bi()
		};
		return this.Cc(t);
	}
	Cc(e) {
		let t = Math.round(e.from), n = Math.round(e.to), r = $(this.yc()), i = $(this.Pc());
		return {
			from: $(this.en(Math.max(r, t))),
			to: $(this.en(Math.min(i, n)))
		};
	}
	kc(e) {
		return {
			from: $(this.Mc(e.from, !0)),
			to: $(this.Mc(e.to, !0))
		};
	}
	nn() {
		return this.P_;
	}
	W_(e) {
		if (!isFinite(e) || e <= 0 || this.P_ === e) return;
		let t = this.Sc(), n = this.P_;
		if (this.P_ = e, this.Gu = !0, this.yn.lockVisibleTimeRangeOnResize && n !== 0) {
			let t = this.oc * e / n;
			this.oc = t;
		}
		if (this.yn.fixLeftEdge && t !== null && t.Fa() <= 0) {
			let t = n - e;
			this.lc -= Math.round(t / this.oc) + 1, this.Gu = !0;
		}
		this.Tc(), this.Rc();
	}
	jt(e) {
		if (this.Gi() || !Af(e)) return 0;
		let t = this.Dc() + this.lc - e;
		return this.P_ - (t + .5) * this.oc - 1;
	}
	Ic(e, t) {
		let n = this.Dc(), r = t === void 0 ? 0 : t.from, i = t === void 0 ? e.length : t.to;
		for (let t = r; t < i; t++) {
			let r = e[t].wt, i = n + this.lc - r, a = this.P_ - (i + .5) * this.oc - 1;
			e[t]._t = a;
		}
	}
	Vc(e, t) {
		let n = Math.ceil(this.Bc(e));
		return t && this.yn.ignoreWhitespaceIndices && !this.Ec(n) ? this.Ac(n) : n;
	}
	gs(e) {
		this.Gu = !0, this.lc = e, this.Rc(), this.sn.Lc(), this.sn.wr();
	}
	zc(e) {
		this.tc !== null && (this.tc.Oc -= e);
		let t = this.lc;
		this.gs(t - e), this.nc += t - this.lc;
	}
	Nc() {
		return this.lc + this.nc;
	}
	wl() {
		return this.oc;
	}
	Ms(e) {
		let t = this.oc;
		if (this.Fc(e), this.yn.rightOffsetPixels !== void 0 && t !== 0) {
			let e = this.lc * t / this.oc;
			this.lc = e;
		}
		this.Rc(), this.sn.Lc(), this.sn.wr();
	}
	Oc() {
		return this.lc;
	}
	Ll() {
		if (this.Gi()) return null;
		if (this.sc !== null) return this.sc;
		let e = this.oc, t = 5 * (this.sn.N().layout.fontSize + 4) / 8 * (this.yn.tickMarkMaxCharacterLength || 8), n = Math.round(t / e), r = $(this.Ae()), i = Math.max(r.Fa(), r.Fa() - n), a = Math.max(r.bi(), r.bi() - n), o = this.Yu.Lu(e, t, this.yn.ignoreWhitespaceIndices, this.ec, this.rc), s = this.yc() + n, c = this.Pc() - n, l = this.Wc(), u = this.yn.fixLeftEdge || l, d = this.yn.fixRightEdge || l, f = 0;
		for (let e of o) {
			if (!(i <= e.index && e.index <= a)) continue;
			let n;
			f < this.hc.length ? (n = this.hc[f], n.coord = this.jt(e.index), n.label = this.Hc(e), n.weight = e.weight) : (n = {
				needAlignCoordinate: !1,
				coord: this.jt(e.index),
				label: this.Hc(e),
				weight: e.weight
			}, this.hc.push(n)), this.oc > t / 2 && !l ? n.needAlignCoordinate = !1 : n.needAlignCoordinate = u && e.index <= s || d && e.index >= c, f++;
		}
		return this.hc.length = f, this.sc = this.hc, this.hc;
	}
	Uc() {
		let e;
		this.Gu = !0, this.Ms(this.yn.barSpacing), e = this.yn.rightOffsetPixels === void 0 ? this.yn.rightOffset : this.yn.rightOffsetPixels / this.wl(), this.gs(e);
	}
	$c(e) {
		this.Gu = !0, this.ju = e, this.Rc(), this.mc();
	}
	jc(e, t) {
		let n = this.Bc(e), r = this.wl(), i = r + r / 10 * t;
		this.Ms(i), this.yn.rightBarStaysOnScroll || this.gs(this.Oc() + (n - this.Bc(e)));
	}
	__(e) {
		this.yo && this.p_(), this.Co === null && this.tc === null && (this.Gi() || (this.Co = e, this.qc()));
	}
	u_(e) {
		if (this.tc === null) return;
		let t = _m(this.P_ - e, 0, this.P_), n = _m(this.P_ - $(this.Co), 0, this.P_);
		t !== 0 && n !== 0 && this.Ms(this.tc.wl * t / n);
	}
	c_() {
		this.Co !== null && (this.Co = null, this.Yc());
	}
	d_(e) {
		this.yo === null && this.tc === null && (this.Gi() || (this.yo = e, this.qc()));
	}
	f_(e) {
		if (this.yo === null) return;
		let t = (this.yo - e) / this.wl();
		this.lc = $(this.tc).Oc + t, this.Gu = !0, this.Rc();
	}
	p_() {
		this.yo !== null && (this.yo = null, this.Yc());
	}
	Kc() {
		this.Zc(this.yn.rightOffset);
	}
	Zc(e, t = 400) {
		if (!isFinite(e)) throw RangeError("offset is required and must be finite number");
		if (!isFinite(t) || t <= 0) throw RangeError("animationDuration (optional) must be finite positive number");
		let n = this.lc, r = performance.now();
		this.sn.ps({
			Gc: (e) => (e - r) / t >= 1,
			Xc: (i) => {
				let a = Math.max(0, (i - r) / t);
				return a >= 1 ? e : n + (e - n) * a;
			},
			sr: (e) => {
				let i = (performance.now() - r) / t;
				i < 1 && (n -= e / (1 - i));
			}
		});
	}
	Pt(e, t) {
		this.Gu = !0, this.qu = e, this.Yu.Eu(e, t), this.Rc();
	}
	Jc() {
		return this.Xu;
	}
	Qc() {
		return this.Ju;
	}
	td() {
		return this.Qu;
	}
	Dc() {
		return this.ju || 0;
	}
	nd(e, t) {
		let n = e.Du(), r = t && this.yn.rightOffsetPixels || 0;
		this.Fc((this.P_ - r) / n), this.lc = e.bi() - this.Dc(), t && (this.lc = r ? r / this.wl() : this.yn.rightOffset), this.Rc(), this.Gu = !0, this.sn.Lc(), this.sn.wr();
	}
	sd() {
		let e = this.yc(), t = this.Pc();
		if (e === null || t === null) return;
		let n = !this.yn.rightOffsetPixels && this.yn.rightOffset || 0;
		this.nd(new Qm(e, t + n), !0);
	}
	ed(e) {
		let t = new Qm(e.from, e.to);
		this.nd(t);
	}
	rn(e) {
		return this.Ro.timeFormatter == null ? this.yu.formatHorzItem(e.time) : this.Ro.timeFormatter(e.originalTime);
	}
	dc() {
		if (!this.yn.ignoreWhitespaceIndices) return;
		this.ec.clear();
		let e = this.sn.Jn();
		for (let t of e) for (let e of t.pl()) this.ec.set(e, !0);
		this.rc++;
	}
	rd() {
		return this.ac;
	}
	xl() {
		let e = 1 / (window.devicePixelRatio || 1), t = this.yn.minBarSpacing;
		if (t >= e) return [1];
		let n = [1], r = 2;
		for (; r <= 512;) t < e / r && n.push(r), r *= 2;
		return n;
	}
	Wc() {
		let e = this.sn.N().handleScroll, t = this.sn.N().handleScale;
		return !(e.horzTouchDrag || e.mouseWheel || e.pressedMouseMove || e.vertTouchDrag || t.axisDoubleClickReset.time || t.axisPressedMouseMove.time || t.mouseWheel || t.pinch);
	}
	yc() {
		return this.qu.length === 0 ? null : 0;
	}
	Pc() {
		return this.qu.length === 0 ? null : this.qu.length - 1;
	}
	hd(e) {
		return (this.P_ - 1 - e) / this.oc;
	}
	Bc(e) {
		let t = this.hd(e), n = this.Dc() + this.lc - t;
		return Math.round(1e6 * n) / 1e6;
	}
	Fc(e) {
		let t = this.oc;
		this.oc = e, this.Tc(), t !== this.oc && (this.Gu = !0, this.ad(), this.cc());
	}
	bc() {
		if (!this.Gu) return;
		if (this.Gu = !1, this.Gi()) return void this.ld(th.$u());
		let e = this.Dc(), t = this.P_ / this.oc, n = this.lc + e, r = new Qm(n - t + 1, n);
		this.ld(new th(r));
	}
	Tc() {
		let e = _m(this.oc, this.od(), this._d());
		this.oc !== e && (this.oc = e, this.Gu = !0);
	}
	_d() {
		return this.yn.maxBarSpacing > 0 ? this.yn.maxBarSpacing : .5 * this.P_;
	}
	od() {
		return this.yn.fixLeftEdge && this.yn.fixRightEdge && this.qu.length !== 0 ? this.P_ / this.qu.length : this.yn.minBarSpacing;
	}
	cc() {
		if (!this.yn.enableConflation) return void (this.ac = 1);
		let e = 1 / (window.devicePixelRatio || 1) * (this.yn.conflationThresholdFactor ?? 1);
		if (this.oc >= e) return void (this.ac = 1);
		let t = e / this.oc, n = 2 ** Math.floor(Math.log2(t));
		this.ac = Math.min(n, 512);
	}
	Rc() {
		let e = this.ud();
		e !== null && this.lc < e && (this.lc = e, this.Gu = !0);
		let t = this.dd();
		this.lc > t && (this.lc = t, this.Gu = !0);
	}
	ud() {
		let e = this.yc(), t = this.ju;
		return e === null || t === null ? null : e - t - 1 + (this.yn.fixLeftEdge ? this.P_ / this.oc : Math.min(2, this.qu.length, this.P_ / this.oc));
	}
	dd() {
		return this.yn.fixRightEdge ? 0 : this.P_ / this.oc - Math.min(2, this.qu.length, this.P_ / this.oc);
	}
	qc() {
		this.tc = {
			wl: this.wl(),
			Oc: this.Oc()
		};
	}
	Yc() {
		this.tc = null;
	}
	Hc(e) {
		let t = this.Ku.get(e.weight);
		return t === void 0 && (t = new Zm((e) => this.fd(e), this.yu), this.Ku.set(e.weight, t)), t.Pu(e);
	}
	fd(e) {
		return this.yu.formatTickmark(e, this.Ro);
	}
	ld(e) {
		let t = this.Zu;
		this.Zu = e, $m(t.Hu(), this.Zu.Hu()) || this.Xu.p(), $m(t.Uu(), this.Zu.Uu()) || this.Ju.p(), this.ad();
	}
	ad() {
		this.sc = null;
	}
	vc() {
		this.ad(), this.Ku.clear();
	}
	uc() {
		this.yu.updateFormatter(this.Ro);
	}
	mc() {
		if (!this.yn.fixLeftEdge) return;
		let e = this.yc();
		if (e === null) return;
		let t = this.Ae();
		if (t === null) return;
		let n = t.Fa() - e;
		if (n < 0) {
			let e = this.lc - n - 1;
			this.gs(e);
		}
		this.Tc();
	}
	wc() {
		this.Rc(), this.Tc();
	}
	Ec(e) {
		return !this.yn.ignoreWhitespaceIndices || this.ec.get(e) || !1;
	}
	Ac(e) {
		let t = function* (e) {
			let t = Math.round(e), n = t < e, r = 1;
			for (;;) n ? (yield t + r, yield t - r) : (yield t - r, yield t + r), r++;
		}(e), n = this.Pc();
		for (; n;) {
			let e = t.next().value;
			if (this.ec.get(e)) return e;
			if (e < 0 || e > n) break;
		}
		return e;
	}
	_c(e) {
		if (e.rightOffsetPixels !== void 0) {
			let t = e.rightOffsetPixels / (e.barSpacing || this.oc);
			this.sn.gs(t);
		}
	}
}, ih, ah, oh, sh, ch;
(function(e) {
	e[e.OnTouchEnd = 0] = "OnTouchEnd", e[e.OnNextTap = 1] = "OnNextTap";
})(ih ||= {});
var lh = class {
	constructor(e, t, n) {
		this.pd = null, this.vd = [], this.md = [], this.wd = null, this.P_ = 0, this.Md = null, this.gd = new Df(), this.bd = new Df(), this.Sd = null, this.xd = e, this.yn = t, this.yu = n, this.Do = new Vf(this.yn.layout.colorParsers), this.Cd = new Rf(this), this.na = new rh(this, t.timeScale, this.yn.localization, n), this.Ct = new lp(this, t.crosshair), this.yd = new gm(t.crosshair), t.addDefaultPane && (this.Pd(0), this.vd[0].F_(2)), this.kd = this.Td(0), this.Rd = this.Td(1);
	}
	Ta() {
		this.Dd(dp.ys());
	}
	wr() {
		this.Dd(dp.Cs());
	}
	Ka() {
		this.Dd(new dp(1));
	}
	Ra(e) {
		let t = this.Id(e);
		this.Dd(t);
	}
	uu() {
		return this.Md;
	}
	Vd(e) {
		if (this.Md?._u === e?._u && this.Md?.gu?.ie === e?.gu?.ie && this.Md?.gu?.ne === e?.gu?.ne && this.Md?.Mu === e?.Mu && this.Md?.re === e?.re) return;
		let t = this.Md;
		this.Md = e, t !== null && this.Ra(t._u), e !== null && e._u !== t?._u && this.Ra(e._u);
	}
	N() {
		return this.yn;
	}
	mr(e) {
		Of(this.yn, e), this.vd.forEach((t) => t.L_(e)), e.timeScale !== void 0 && this.na.mr(e.timeScale), e.localization !== void 0 && this.na.fc(e.localization), (e.leftPriceScale || e.rightPriceScale) && this.gd.p(), this.kd = this.Td(0), this.Rd = this.Td(1), this.Ta();
	}
	Bd(e, t, n = 0) {
		let r = this.vd[n];
		if (r === void 0) return;
		if (e === "left") return Of(this.yn, { leftPriceScale: t }), r.L_({ leftPriceScale: t }), this.gd.p(), void this.Ta();
		if (e === "right") return Of(this.yn, { rightPriceScale: t }), r.L_({ rightPriceScale: t }), this.gd.p(), void this.Ta();
		let i = this.Ed(e, n);
		i !== null && (i.Ft.mr(t), this.gd.p());
	}
	Ed(e, t) {
		let n = this.vd[t];
		if (n === void 0) return null;
		let r = n.z_(e);
		return r === null ? null : {
			Kn: n,
			Ft: r
		};
	}
	Et() {
		return this.na;
	}
	Zn() {
		return this.vd;
	}
	Ad() {
		return this.Ct;
	}
	Ld() {
		return this.bd;
	}
	zd(e, t) {
		e.Uo(t), this.Lc();
	}
	W_(e) {
		this.P_ = e, this.na.W_(this.P_), this.vd.forEach((t) => t.W_(e)), this.Lc();
	}
	Od(e) {
		this.vd.length !== 1 && (wf(e >= 0 && e < this.vd.length, "Invalid pane index"), this.vd.splice(e, 1), this.Ta());
	}
	Nd(e, t) {
		if (this.vd.length < 2) return;
		wf(e >= 0 && e < this.vd.length, "Invalid pane index");
		let n = this.vd[e], r = this.vd.reduce((e, t) => e + t.N_(), 0), i = this.vd.reduce((e, t) => e + t.$t(), 0), a = i - 30 * (this.vd.length - 1);
		t = Math.min(a, Math.max(30, t));
		let o = r / i, s = n.$t();
		n.F_(t * o);
		let c = t - s, l = this.vd.length - 1;
		for (let e of this.vd) if (e !== n) {
			let t = Math.min(a, Math.max(30, e.$t() - c / l));
			c -= e.$t() - t, --l;
			let n = t * o;
			e.F_(n);
		}
		this.Ta();
	}
	Fd(e, t) {
		wf(e >= 0 && e < this.vd.length && t >= 0 && t < this.vd.length, "Invalid pane index");
		let n = this.vd[e], r = this.vd[t];
		this.vd[e] = r, this.vd[t] = n, this.Ta();
	}
	Wd(e, t) {
		if (wf(e >= 0 && e < this.vd.length && t >= 0 && t < this.vd.length, "Invalid pane index"), e === t) return;
		let [n] = this.vd.splice(e, 1);
		this.vd.splice(t, 0, n), this.Ta();
	}
	J_(e, t, n) {
		e.J_(t, n);
	}
	Q_(e, t, n) {
		e.Q_(t, n), this.Da(), this.Dd(this.Hd(e, 2));
	}
	tu(e, t) {
		e.tu(t), this.Dd(this.Hd(e, 2));
	}
	iu(e, t, n) {
		t.Lo() || e.iu(t, n);
	}
	nu(e, t, n) {
		t.Lo() || (e.nu(t, n), this.Da(), this.Dd(this.Hd(e, 2)));
	}
	su(e, t) {
		t.Lo() || (e.su(t), this.Dd(this.Hd(e, 2)));
	}
	hu(e, t) {
		e.hu(t), this.Dd(this.Hd(e, 2));
	}
	Ud(e) {
		this.na.__(e);
	}
	$d(e, t) {
		let n = this.Et();
		if (n.Gi() || t === 0) return;
		let r = n.nn();
		e = Math.max(1, Math.min(e, r)), n.jc(e, t), this.Lc();
	}
	jd(e) {
		this.qd(0), this.Yd(e), this.Kd();
	}
	Zd(e) {
		this.na.u_(e), this.Lc();
	}
	Gd() {
		this.na.c_(), this.wr();
	}
	qd(e) {
		this.na.d_(e);
	}
	Yd(e) {
		this.na.f_(e), this.Lc();
	}
	Kd() {
		this.na.p_(), this.wr();
	}
	Jn() {
		return this.md;
	}
	Wn() {
		return this.wd === null && (this.wd = this.md.filter((e) => e.It())), this.wd;
	}
	ka() {
		this.wd = null;
	}
	Xd(e, t, n, r, i) {
		this.Ct.In(e, t);
		let a = NaN, o = this.na.Vc(e, !0), s = this.na.Ae();
		s !== null && (o = Math.min(Math.max(s.Fa(), o), s.bi())), o = this.Ct.Fn(o);
		let c = r.kn(), l = c.Lt();
		if (l !== null && (a = c.Tn(t, l)), a = this.yd.yl(a, o, r), this.Ct.An(o, a, r), this.Ka(), !i) {
			let i = Xm(r, e, t);
			this.Vd(i && {
				_u: i._u,
				gu: i.gu,
				Mu: i.Mu || null,
				re: i.re
			}), this.bd.p(this.Ct.Bt(), {
				x: e,
				y: t
			}, n);
		}
	}
	Jd(e, t, n) {
		let r = n.kn(), i = r.Lt(), a = r.Nt(e, $(i)), o = this.na.Mc(t, !0), s = this.na.jt($(o));
		this.Xd(s, a, null, n, !0);
	}
	Qd(e) {
		this.Ad().zn(), this.Ka(), e || this.bd.p(null, null, null);
	}
	Da() {
		let e = this.Ct.Kn();
		if (e !== null) {
			let t = this.Ct.Bn(), n = this.Ct.En();
			this.Xd(t, n, null, e);
		}
		this.Ct.Nn();
	}
	tf(e, t, n) {
		let r = this.na.Rn(0);
		t !== void 0 && n !== void 0 && this.na.Pt(t, n);
		let i = this.na.Rn(0), a = this.na.Dc(), o = this.na.Ae();
		if (o !== null && r !== null && i !== null) {
			let t = o.Oe(a), s = this.yu.key(r) > this.yu.key(i), c = e !== null && e > a && !s, l = this.na.N().allowShiftVisibleRangeOnWhitespaceReplacement, u = t && (n !== void 0 || l) && this.na.N().shiftVisibleRangeOnNewBar;
			if (c && !u) {
				let t = e - a;
				this.na.$c(e), this.na.zc(t), this.if(t);
				return;
			}
		}
		this.na.$c(e);
	}
	Ea(e) {
		e !== null && e.lu();
	}
	Ks(e) {
		if (function(e) {
			return e instanceof Hm;
		}(e)) return e;
		let t = this.vd.find((t) => t.Dt().includes(e));
		return t === void 0 ? null : t;
	}
	Lc() {
		this.vd.forEach((e) => e.lu()), this.Da();
	}
	m() {
		this.vd.forEach((e) => e.m()), this.vd.length = 0, this.yn.localization.priceFormatter = void 0, this.yn.localization.percentageFormatter = void 0, this.yn.localization.timeFormatter = void 0;
	}
	nf() {
		return this.Cd;
	}
	Js() {
		return this.Cd.N();
	}
	O_() {
		return this.gd;
	}
	sf(e, t) {
		let n = this.Pd(t);
		this.ef(e, n), this.md.push(e), this.ka(), this.md.length === 1 ? this.Ta() : this.wr();
	}
	rf(e) {
		let t = this.Ks(e), n = this.md.indexOf(e);
		wf(n !== -1, "Series not found");
		let r = $(t);
		this.md.splice(n, 1), r.a_(e), e.m && e.m(), this.ka(), this.na.dc(), this.hf(r);
	}
	Pa(e, t) {
		let n = $(this.Ks(e));
		n.a_(e, !0), n.r_(e, t, !0);
	}
	sd() {
		let e = dp.Cs();
		e.us(), this.Dd(e);
	}
	af(e) {
		let t = dp.Cs();
		t.fs(e), this.Dd(t);
	}
	ws() {
		let e = dp.Cs();
		e.ws(), this.Dd(e);
	}
	Ms(e) {
		let t = dp.Cs();
		t.Ms(e), this.Dd(t);
	}
	gs(e) {
		let t = dp.Cs();
		t.gs(e), this.Dd(t);
	}
	ps(e) {
		this.pd = e;
		let t = dp.Cs();
		t.ps(e), this.Dd(t);
	}
	cs() {
		this.pd = null;
		let e = dp.Cs();
		e.cs(), this.Dd(e);
	}
	lf() {
		let e = this.yn.defaultVisiblePriceScaleId, t = this.yn.leftPriceScale.visible;
		return t === this.yn.rightPriceScale.visible ? e : t ? "left" : "right";
	}
	_f(e, t) {
		if (wf(t >= 0, "Index should be greater or equal to 0"), t === this.uf(e)) return;
		let n = $(this.Ks(e));
		n.a_(e);
		let r = this.Pd(t);
		this.ef(e, r);
		let i = !1;
		n.Pl().length === 0 && (i = this.hf(n)), i || this.Ta();
	}
	cf() {
		return this.Rd;
	}
	$() {
		return this.kd;
	}
	Ut(e) {
		let t = this.Rd, n = this.kd;
		if (t === n) return t;
		if (e = Math.max(0, Math.min(100, Math.round(100 * e))), this.Sd === null || this.Sd.oh !== n || this.Sd._h !== t) this.Sd = {
			oh: n,
			_h: t,
			df: /* @__PURE__ */ new Map()
		};
		else {
			let t = this.Sd.df.get(e);
			if (t !== void 0) return t;
		}
		let r = this.Do.tt(n, t, e / 100);
		return this.Sd.df.set(e, r), r;
	}
	ff(e) {
		return this.vd.indexOf(e);
	}
	Xi() {
		return this.Do;
	}
	pf() {
		return this.vf();
	}
	vf(e) {
		let t = new Hm(this.na, this);
		this.vd.push(t);
		let n = e ?? this.vd.length - 1, r = dp.ys();
		return r.es(n, {
			rs: 0,
			hs: !0
		}), this.Dd(r), t;
	}
	Pd(e) {
		return wf(e >= 0, "Index should be greater or equal to 0"), (e = Math.min(this.vd.length, e)) < this.vd.length ? this.vd[e] : this.vf(e);
	}
	uf(e) {
		return this.vd.findIndex((t) => t.q_().includes(e));
	}
	Hd(e, t) {
		let n = new dp(t);
		if (e !== null) {
			let r = this.vd.indexOf(e);
			n.es(r, { rs: t });
		}
		return n;
	}
	Id(e, t) {
		return t === void 0 && (t = 2), this.Hd(this.Ks(e), t);
	}
	Dd(e) {
		this.xd && this.xd(e), this.vd.forEach((e) => e.mu().Mr().Pt());
	}
	ef(e, t) {
		let n = e.N().priceScaleId, r = n === void 0 ? this.lf() : n;
		t.r_(e, r), up(r) || e.mr(e.N());
	}
	Td(e) {
		let t = this.yn.layout;
		return t.background.type === "gradient" ? e === 0 ? t.background.topColor : t.background.bottomColor : t.background.color;
	}
	hf(e) {
		return !e.j_() && e.Pl().length === 0 && this.vd.length > 1 && (this.vd.splice(this.ff(e), 1), this.Ta(), !0);
	}
	if(e) {
		this.pd !== null && this.pd.sr(e);
	}
};
function uh(e) {
	if (e >= 1) return 0;
	let t = 0;
	for (; t < 8; t++) {
		if (Math.abs(Math.round(e) - e) < 1e-8) return t;
		e *= 10;
	}
	return t;
}
function dh(e) {
	return !kf(e) && !jf(e);
}
function fh(e) {
	return kf(e);
}
(function(e) {
	e[e.Disabled = 0] = "Disabled", e[e.Continuous = 1] = "Continuous", e[e.OnDataUpdate = 2] = "OnDataUpdate";
})(ah ||= {}), function(e) {
	e[e.LastBar = 0] = "LastBar", e[e.LastVisible = 1] = "LastVisible";
}(oh ||= {}), function(e) {
	e.Solid = "solid", e.VerticalGradient = "gradient";
}(sh ||= {}), function(e) {
	e[e.Year = 0] = "Year", e[e.Month = 1] = "Month", e[e.DayOfMonth = 2] = "DayOfMonth", e[e.Time = 3] = "Time", e[e.TimeWithSeconds = 4] = "TimeWithSeconds";
}(ch ||= {});
var ph = (e) => e.getUTCFullYear();
function mh(e, t, n) {
	return t.replace(/yyyy/g, ((e) => mp(ph(e), 4))(e)).replace(/yy/g, ((e) => mp(ph(e) % 100, 2))(e)).replace(/MMMM/g, ((e, t) => new Date(e.getUTCFullYear(), e.getUTCMonth(), 1).toLocaleString(t, { month: "long" }))(e, n)).replace(/MMM/g, ((e, t) => new Date(e.getUTCFullYear(), e.getUTCMonth(), 1).toLocaleString(t, { month: "short" }))(e, n)).replace(/MM/g, ((e) => mp(((e) => e.getUTCMonth() + 1)(e), 2))(e)).replace(/dd/g, ((e) => mp(((e) => e.getUTCDate())(e), 2))(e));
}
var hh = class {
	constructor(e = "yyyy-MM-dd", t = "default") {
		this.mf = e, this.wf = t;
	}
	Pu(e) {
		return mh(e, this.mf, this.wf);
	}
}, gh = class {
	constructor(e) {
		this.Mf = e || "%h:%m:%s";
	}
	Pu(e) {
		return this.Mf.replace("%h", mp(e.getUTCHours(), 2)).replace("%m", mp(e.getUTCMinutes(), 2)).replace("%s", mp(e.getUTCSeconds(), 2));
	}
}, _h = {
	gf: "yyyy-MM-dd",
	bf: "%h:%m:%s",
	Sf: " ",
	xf: "default"
}, vh = class {
	constructor(e = {}) {
		let t = {
			..._h,
			...e
		};
		this.Cf = new hh(t.gf, t.xf), this.yf = new gh(t.bf), this.Pf = t.Sf;
	}
	Pu(e) {
		return `${this.Cf.Pu(e)}${this.Pf}${this.yf.Pu(e)}`;
	}
};
function yh(e) {
	return 60 * e * 60 * 1e3;
}
function bh(e) {
	return 60 * e * 1e3;
}
var xh = [
	{
		kf: (Sh = 1, 1e3 * Sh),
		Tf: 10
	},
	{
		kf: bh(1),
		Tf: 20
	},
	{
		kf: bh(5),
		Tf: 21
	},
	{
		kf: bh(30),
		Tf: 22
	},
	{
		kf: yh(1),
		Tf: 30
	},
	{
		kf: yh(3),
		Tf: 31
	},
	{
		kf: yh(6),
		Tf: 32
	},
	{
		kf: yh(12),
		Tf: 33
	}
], Sh;
function Ch(e, t) {
	if (e.getUTCFullYear() !== t.getUTCFullYear()) return 70;
	if (e.getUTCMonth() !== t.getUTCMonth()) return 60;
	if (e.getUTCDate() !== t.getUTCDate()) return 50;
	for (let n = xh.length - 1; n >= 0; --n) if (Math.floor(t.getTime() / xh[n].kf) !== Math.floor(e.getTime() / xh[n].kf)) return xh[n].Tf;
	return 0;
}
function wh(e) {
	return e;
}
function Th(e) {
	let t = e;
	if (jf(e) && (t = Oh(e)), !dh(t)) throw Error("time must be of type BusinessDay");
	let n = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
	return {
		Rf: Math.round(n.getTime() / 1e3),
		Df: t
	};
}
function Eh(e) {
	if (!fh(e)) throw Error("time must be of type isUTCTimestamp");
	return { Rf: e };
}
var Dh = /^\d\d\d\d-\d\d-\d\d$/;
function Oh(e) {
	if (!Dh.test(e)) throw Error(`Invalid date string=${e}, expected format=yyyy-mm-dd`);
	let t = new Date(e);
	if (isNaN(t.getTime())) throw Error(`Invalid date string=${e}, expected format=yyyy-mm-dd`);
	return {
		day: t.getUTCDate(),
		month: t.getUTCMonth() + 1,
		year: t.getUTCFullYear()
	};
}
function kh(e) {
	jf(e.time) && (e.time = Oh(e.time));
}
var Ah = class {
	options() {
		return this.yn;
	}
	setOptions(e) {
		this.yn = e, this.updateFormatter(e.localization);
	}
	preprocessData(e) {
		Array.isArray(e) ? function(e) {
			e.forEach(kh);
		}(e) : kh(e);
	}
	createConverterToInternalObj(e) {
		return $(function(e) {
			return e.length === 0 ? null : dh(e[0].time) || jf(e[0].time) ? Th : Eh;
		}(e));
	}
	key(e) {
		return typeof e == "object" && "Rf" in e ? e.Rf : this.key(this.convertHorzItemToInternal(e));
	}
	cacheKey(e) {
		let t = e;
		return t.Df === void 0 ? (/* @__PURE__ */ new Date(1e3 * t.Rf)).getTime() : new Date(Date.UTC(t.Df.year, t.Df.month - 1, t.Df.day)).getTime();
	}
	convertHorzItemToInternal(e) {
		return fh(t = e) ? Eh(t) : dh(t) ? Th(t) : Th(Oh(t));
		var t;
	}
	updateFormatter(e) {
		if (!this.yn) return;
		let t = e.dateFormat;
		this.If = this.yn.timeScale.timeVisible ? new vh({
			gf: t,
			bf: this.yn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
			Sf: "   ",
			xf: e.locale
		}) : new hh(t, e.locale);
	}
	formatHorzItem(e) {
		let t = e;
		return this.If.Pu(/* @__PURE__ */ new Date(1e3 * t.Rf));
	}
	formatTickmark(e, t) {
		let n = function(e, t, n) {
			switch (e) {
				case 0:
				case 10: return t ? n ? 4 : 3 : 2;
				case 20:
				case 21:
				case 22:
				case 30:
				case 31:
				case 32:
				case 33: return t ? 3 : 2;
				case 50: return 2;
				case 60: return 1;
				case 70: return 0;
			}
		}(e.weight, this.yn.timeScale.timeVisible, this.yn.timeScale.secondsVisible), r = this.yn.timeScale;
		if (r.tickMarkFormatter !== void 0) {
			let i = r.tickMarkFormatter(e.originalTime, n, t.locale);
			if (i !== null) return i;
		}
		return function(e, t, n) {
			let r = { timeZone: "UTC" };
			switch (t) {
				case 0:
					r.year = "numeric";
					break;
				case 1:
					r.month = "short";
					break;
				case 2:
					r.day = "numeric";
					break;
				case 3:
					r.hour12 = !1, r.hour = "2-digit", r.minute = "2-digit";
					break;
				case 4: r.hour12 = !1, r.hour = "2-digit", r.minute = "2-digit", r.second = "2-digit";
			}
			return (e.Df === void 0 ? /* @__PURE__ */ new Date(1e3 * e.Rf) : new Date(Date.UTC(e.Df.year, e.Df.month - 1, e.Df.day))).toLocaleString(n, r);
		}(e.time, n, t.locale);
	}
	maxTickMarkWeight(e) {
		let t = e.reduce(nh, e[0]).weight;
		return t > 30 && t < 50 && (t = 30), t;
	}
	fillWeightsForPoints(e, t) {
		(function(e, t = 0) {
			if (e.length === 0) return;
			let n = t === 0 ? null : e[t - 1].time.Rf, r = n === null ? null : /* @__PURE__ */ new Date(1e3 * n), i = 0;
			for (let a = t; a < e.length; ++a) {
				let t = e[a], o = /* @__PURE__ */ new Date(1e3 * wh(t.time).Rf);
				r !== null && (t.timeWeight = Ch(o, r)), i += wh(t.time).Rf - (n || wh(t.time).Rf), n = wh(t.time).Rf, r = o;
			}
			if (t === 0 && e.length > 1) {
				let t = Math.ceil(i / (e.length - 1)), n = /* @__PURE__ */ new Date(1e3 * (e[0].time.Rf - t));
				e[0].timeWeight = Ch(/* @__PURE__ */ new Date(1e3 * e[0].time.Rf), n);
			}
		})(e, t);
	}
	static Vf(e) {
		return Of({ localization: { dateFormat: "dd MMM 'yy" } }, e ?? {});
	}
}, jh = typeof window < "u";
function Mh() {
	return !!jh && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function Nh() {
	return !!jh && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function Ph(e, t) {
	switch (e) {
		case "custom": return t === void 0 ? "series" : "custom-object";
		case "price-line": return "custom-price-line";
		case "marker": return "series-marker";
		case "primitive": return "primitive";
		default: return "series";
	}
}
function Fh(e) {
	return e + e % 2;
}
function Ih(e) {
	jh && window.chrome !== void 0 && e.addEventListener("mousedown", (e) => {
		if (e.button === 1) return e.preventDefault(), !1;
	});
}
var Lh = class {
	constructor(e, t, n) {
		this.Bf = 0, this.Ef = null, this.Af = {
			_t: -Infinity,
			ut: Infinity
		}, this.Lf = 0, this.zf = null, this.Of = {
			_t: -Infinity,
			ut: Infinity
		}, this.Nf = null, this.Ff = !1, this.Wf = null, this.Hf = null, this.Uf = !1, this.$f = !1, this.jf = !1, this.qf = null, this.Yf = null, this.Kf = null, this.Zf = null, this.Gf = null, this.Xf = null, this.Jf = null, this.Qf = 0, this.tp = !1, this.ip = !1, this.np = !1, this.sp = 0, this.ep = null, this.rp = !Nh(), this.hp = (e) => {
			this.ap(e);
		}, this.lp = (e) => {
			if (this.op(e)) {
				let t = this._p(e);
				if (++this.Lf, this.zf && this.Lf > 1) {
					let { up: n } = this.cp(Bh(e), this.Of);
					n < 30 && !this.jf && this.dp(t, this.pp.fp), this.vp();
				}
			} else {
				let t = this._p(e);
				if (++this.Bf, this.Ef && this.Bf > 1) {
					let { up: n } = this.cp(Bh(e), this.Af);
					n < 5 && !this.$f && this.mp(t, this.pp.wp), this.Mp();
				}
			}
		}, this.gp = e, this.pp = t, this.yn = n, this.bp();
	}
	m() {
		this.qf !== null && (this.qf(), this.qf = null), this.Yf !== null && (this.Yf(), this.Yf = null), this.Zf !== null && (this.Zf(), this.Zf = null), this.Gf !== null && (this.Gf(), this.Gf = null), this.Xf !== null && (this.Xf(), this.Xf = null), this.Kf !== null && (this.Kf(), this.Kf = null), this.Sp(), this.Mp();
	}
	xp(e) {
		this.Zf && this.Zf();
		let t = this.Cp.bind(this);
		if (this.Zf = () => {
			this.gp.removeEventListener("mousemove", t);
		}, this.gp.addEventListener("mousemove", t), this.op(e)) return;
		let n = this._p(e);
		this.mp(n, this.pp.yp), this.rp = !0;
	}
	Mp() {
		this.Ef !== null && clearTimeout(this.Ef), this.Bf = 0, this.Ef = null, this.Af = {
			_t: -Infinity,
			ut: Infinity
		};
	}
	vp() {
		this.zf !== null && clearTimeout(this.zf), this.Lf = 0, this.zf = null, this.Of = {
			_t: -Infinity,
			ut: Infinity
		};
	}
	Cp(e) {
		if (this.np || this.Hf !== null || this.op(e)) return;
		let t = this._p(e);
		this.mp(t, this.pp.Pp), this.rp = !0;
	}
	kp(e) {
		let t = Hh(e.changedTouches, $(this.ep));
		if (t === null || (this.sp = Vh(e), this.Jf !== null) || this.ip) return;
		this.tp = !0;
		let { Tp: n, Rp: r, up: i } = this.cp(Bh(t), $(this.Hf));
		if (this.Uf || !(i < 5)) {
			if (!this.Uf) {
				let e = .5 * n, t = r >= e && !this.yn.Dp(), i = e > r && !this.yn.Ip();
				t || i || (this.ip = !0), this.Uf = !0, this.jf = !0, this.Sp(), this.vp();
			}
			if (!this.ip) {
				let n = this._p(e, t);
				this.dp(n, this.pp.Vp), zh(e);
			}
		}
	}
	Bp(e) {
		if (e.button !== 0) return;
		let { up: t } = this.cp(Bh(e), $(this.Wf));
		if (t >= 5 && (this.$f = !0, this.Mp()), this.$f) {
			let t = this._p(e);
			this.mp(t, this.pp.Ep);
		}
	}
	cp(e, t) {
		let n = Math.abs(t._t - e._t), r = Math.abs(t.ut - e.ut);
		return {
			Tp: n,
			Rp: r,
			up: n + r
		};
	}
	Ap(e) {
		let t = Hh(e.changedTouches, $(this.ep));
		if (t === null && e.touches.length === 0 && (t = e.changedTouches[0]), t === null) return;
		this.ep = null, this.sp = Vh(e), this.Sp(), this.Hf = null, this.Xf &&= (this.Xf(), null);
		let n = this._p(e, t);
		if (this.dp(n, this.pp.Lp), ++this.Lf, this.zf && this.Lf > 1) {
			let { up: e } = this.cp(Bh(t), this.Of);
			e < 30 && !this.jf && this.dp(n, this.pp.fp), this.vp();
		} else this.jf || (this.dp(n, this.pp.zp), this.pp.zp && zh(e));
		this.Lf === 0 && zh(e), e.touches.length === 0 && this.Ff && (this.Ff = !1, zh(e));
	}
	ap(e) {
		if (e.button !== 0) return;
		let t = this._p(e);
		if (this.Wf = null, this.np = !1, this.Gf &&= (this.Gf(), null), Mh() && this.gp.ownerDocument.documentElement.removeEventListener("mouseleave", this.hp), !this.op(e)) {
			if (this.mp(t, this.pp.Op), ++this.Bf, this.Ef && this.Bf > 1) {
				let { up: n } = this.cp(Bh(e), this.Af);
				n < 5 && !this.$f && this.mp(t, this.pp.wp), this.Mp();
			} else this.$f || this.mp(t, this.pp.Np);
		}
	}
	Sp() {
		this.Nf !== null && (clearTimeout(this.Nf), this.Nf = null);
	}
	Fp(e) {
		if (this.ep !== null) return;
		let t = e.changedTouches[0];
		this.ep = t.identifier, this.sp = Vh(e);
		let n = this.gp.ownerDocument.documentElement;
		this.jf = !1, this.Uf = !1, this.ip = !1, this.Hf = Bh(t), this.Xf &&= (this.Xf(), null);
		{
			let t = this.kp.bind(this), r = this.Ap.bind(this);
			this.Xf = () => {
				n.removeEventListener("touchmove", t), n.removeEventListener("touchend", r);
			}, n.addEventListener("touchmove", t, { passive: !1 }), n.addEventListener("touchend", r, { passive: !1 }), this.Sp(), this.Nf = setTimeout(this.Wp.bind(this, e), 240);
		}
		let r = this._p(e, t);
		this.dp(r, this.pp.Hp), this.zf || (this.Lf = 0, this.zf = setTimeout(this.vp.bind(this), 500), this.Of = Bh(t));
	}
	Up(e) {
		if (e.button !== 0) return;
		let t = this.gp.ownerDocument.documentElement;
		Mh() && t.addEventListener("mouseleave", this.hp), this.$f = !1, this.Wf = Bh(e), this.Gf &&= (this.Gf(), null);
		{
			let e = this.Bp.bind(this), n = this.ap.bind(this);
			this.Gf = () => {
				t.removeEventListener("mousemove", e), t.removeEventListener("mouseup", n);
			}, t.addEventListener("mousemove", e), t.addEventListener("mouseup", n);
		}
		if (this.np = !0, this.op(e)) return;
		let n = this._p(e);
		this.mp(n, this.pp.$p), this.Ef || (this.Bf = 0, this.Ef = setTimeout(this.Mp.bind(this), 500), this.Af = Bh(e));
	}
	bp() {
		this.gp.addEventListener("mouseenter", this.xp.bind(this)), this.gp.addEventListener("touchcancel", this.Sp.bind(this));
		{
			let e = this.gp.ownerDocument, t = (e) => {
				this.pp.jp && (e.composed && this.gp.contains(e.composedPath()[0]) || e.target && this.gp.contains(e.target) || this.pp.jp());
			};
			this.Yf = () => {
				e.removeEventListener("touchstart", t);
			}, this.qf = () => {
				e.removeEventListener("mousedown", t);
			}, e.addEventListener("mousedown", t), e.addEventListener("touchstart", t, { passive: !0 });
		}
		Nh() && (this.Kf = () => {
			this.gp.removeEventListener("dblclick", this.lp);
		}, this.gp.addEventListener("dblclick", this.lp)), this.gp.addEventListener("mouseleave", this.qp.bind(this)), this.gp.addEventListener("touchstart", this.Fp.bind(this), { passive: !0 }), Ih(this.gp), this.gp.addEventListener("mousedown", this.Up.bind(this)), this.Yp(), this.gp.addEventListener("touchmove", () => {}, { passive: !1 });
	}
	Yp() {
		this.pp.Kp === void 0 && this.pp.Zp === void 0 && this.pp.Gp === void 0 || (this.gp.addEventListener("touchstart", (e) => this.Xp(e.touches), { passive: !0 }), this.gp.addEventListener("touchmove", (e) => {
			if (e.touches.length === 2 && this.Jf !== null && this.pp.Zp !== void 0) {
				let t = Rh(e.touches[0], e.touches[1]) / this.Qf;
				this.pp.Zp(this.Jf, t), zh(e);
			}
		}, { passive: !1 }), this.gp.addEventListener("touchend", (e) => {
			this.Xp(e.touches);
		}));
	}
	Xp(e) {
		e.length === 1 && (this.tp = !1), e.length !== 2 || this.tp || this.Ff ? this.Jp() : this.Qp(e);
	}
	Qp(e) {
		let t = this.gp.getBoundingClientRect() || {
			left: 0,
			top: 0
		};
		this.Jf = {
			_t: (e[0].clientX - t.left + (e[1].clientX - t.left)) / 2,
			ut: (e[0].clientY - t.top + (e[1].clientY - t.top)) / 2
		}, this.Qf = Rh(e[0], e[1]), this.pp.Kp !== void 0 && this.pp.Kp(), this.Sp();
	}
	Jp() {
		this.Jf !== null && (this.Jf = null, this.pp.Gp !== void 0 && this.pp.Gp());
	}
	qp(e) {
		if (this.Zf && this.Zf(), this.op(e) || !this.rp) return;
		let t = this._p(e);
		this.mp(t, this.pp.tv), this.rp = !Nh();
	}
	Wp(e) {
		let t = Hh(e.touches, $(this.ep));
		if (t === null) return;
		let n = this._p(e, t);
		this.dp(n, this.pp.iv), this.jf = !0, this.Ff = !0;
	}
	op(e) {
		return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents !== void 0 ? e.sourceCapabilities.firesTouchEvents : Vh(e) < this.sp + 500;
	}
	dp(e, t) {
		t && t.call(this.pp, e);
	}
	mp(e, t) {
		t && t.call(this.pp, e);
	}
	_p(e, t) {
		let n = t || e, r = this.gp.getBoundingClientRect() || {
			left: 0,
			top: 0
		};
		return {
			clientX: n.clientX,
			clientY: n.clientY,
			pageX: n.pageX,
			pageY: n.pageY,
			screenX: n.screenX,
			screenY: n.screenY,
			localX: n.clientX - r.left,
			localY: n.clientY - r.top,
			ctrlKey: e.ctrlKey,
			altKey: e.altKey,
			shiftKey: e.shiftKey,
			metaKey: e.metaKey,
			nv: !e.type.startsWith("mouse") && e.type !== "contextmenu" && e.type !== "click",
			sv: e.type,
			ev: n.target,
			Su: e.view,
			rv: () => {
				e.type !== "touchstart" && zh(e);
			}
		};
	}
};
function Rh(e, t) {
	let n = e.clientX - t.clientX, r = e.clientY - t.clientY;
	return Math.sqrt(n * n + r * r);
}
function zh(e) {
	e.cancelable && e.preventDefault();
}
function Bh(e) {
	return {
		_t: e.pageX,
		ut: e.pageY
	};
}
function Vh(e) {
	return e.timeStamp || performance.now();
}
function Hh(e, t) {
	for (let n = 0; n < e.length; ++n) if (e[n].identifier === t) return e[n];
	return null;
}
var Uh = class {
	constructor(e, t, n) {
		this.hv = null, this.av = null, this.lv = !0, this.ov = null, this._v = e, this.uv = e.cv()[t], this.dv = e.cv()[n], this.fv = document.createElement("tr"), this.fv.style.height = "1px", this.pv = document.createElement("td"), this.pv.style.position = "relative", this.pv.style.padding = "0", this.pv.style.margin = "0", this.pv.setAttribute("colspan", "3"), this.vv(), this.fv.appendChild(this.pv), this.lv = this._v.N().layout.panes.enableResize, this.lv ? this.mv() : (this.hv = null, this.av = null);
	}
	m() {
		this.av !== null && this.av.m();
	}
	wv() {
		return this.fv;
	}
	Mv() {
		return cf({
			width: this.uv.Mv().width,
			height: 1
		});
	}
	gv() {
		return cf({
			width: this.uv.gv().width,
			height: 1 * window.devicePixelRatio
		});
	}
	bv(e, t, n) {
		let r = this.gv();
		e.fillStyle = this._v.N().layout.panes.separatorColor, e.fillRect(t, n, r.width, r.height);
	}
	Pt() {
		this.vv(), this._v.N().layout.panes.enableResize !== this.lv && (this.lv = this._v.N().layout.panes.enableResize, this.lv ? this.mv() : (this.hv !== null && (this.pv.removeChild(this.hv.Sv), this.pv.removeChild(this.hv.xv), this.hv = null), this.av !== null && (this.av.m(), this.av = null)));
	}
	mv() {
		let e = document.createElement("div"), t = e.style;
		t.position = "fixed", t.display = "none", t.zIndex = "49", t.top = "0", t.left = "0", t.width = "100%", t.height = "100%", t.cursor = "row-resize", this.pv.appendChild(e);
		let n = document.createElement("div"), r = n.style;
		r.position = "absolute", r.zIndex = "50", r.top = "-4px", r.height = "9px", r.width = "100%", r.backgroundColor = "", r.cursor = "row-resize", this.pv.appendChild(n);
		let i = {
			yp: this.Cv.bind(this),
			tv: this.yv.bind(this),
			$p: this.Pv.bind(this),
			Hp: this.Pv.bind(this),
			Ep: this.kv.bind(this),
			Vp: this.kv.bind(this),
			Op: this.Tv.bind(this),
			Lp: this.Tv.bind(this)
		};
		this.av = new Lh(n, i, {
			Dp: () => !1,
			Ip: () => !0
		}), this.hv = {
			xv: n,
			Sv: e
		};
	}
	vv() {
		this.pv.style.backgroundColor = this._v.N().layout.panes.separatorColor;
	}
	Cv(e) {
		this.hv !== null && (this.hv.xv.style.backgroundColor = this._v.N().layout.panes.separatorHoverColor);
	}
	yv(e) {
		this.hv !== null && this.ov === null && (this.hv.xv.style.backgroundColor = "");
	}
	Pv(e) {
		if (this.hv === null) return;
		let t = this.uv.Rv().N_() + this.dv.Rv().N_(), n = t / (this.uv.Mv().height + this.dv.Mv().height), r = 30 * n;
		t <= 2 * r || (this.ov = {
			Dv: e.pageY,
			Iv: this.uv.Rv().N_(),
			Vv: t - r,
			Bv: t,
			Ev: n,
			Av: r
		}, this.hv.Sv.style.display = "block");
	}
	kv(e) {
		let t = this.ov;
		if (t === null) return;
		let n = (e.pageY - t.Dv) * t.Ev, r = _m(t.Iv + n, t.Av, t.Vv);
		this.uv.Rv().F_(r), this.dv.Rv().F_(t.Bv - r), this._v.Qt().Ta();
	}
	Tv(e) {
		this.ov !== null && this.hv !== null && (this.ov = null, this.hv.Sv.style.display = "none");
	}
};
function Wh(e, t) {
	return e.Lv - t.Lv;
}
function Gh(e, t, n) {
	let r = (e.Lv - t.Lv) / (e.wt - t.wt);
	return Math.sign(r) * Math.min(Math.abs(r), n);
}
var Kh = class {
	constructor(e, t, n, r) {
		this.zv = null, this.Ov = null, this.Nv = null, this.Fv = null, this.Wv = null, this.Hv = 0, this.Uv = 0, this.$v = e, this.jv = t, this.qv = n, this.Ps = r;
	}
	Yv(e, t) {
		if (this.zv !== null) {
			if (this.zv.wt === t) return void (this.zv.Lv = e);
			if (Math.abs(this.zv.Lv - e) < this.Ps) return;
		}
		this.Fv = this.Nv, this.Nv = this.Ov, this.Ov = this.zv, this.zv = {
			wt: t,
			Lv: e
		};
	}
	we(e, t) {
		if (this.zv === null || this.Ov === null || t - this.zv.wt > 50) return;
		let n = 0, r = Gh(this.zv, this.Ov, this.jv), i = Wh(this.zv, this.Ov), a = [r], o = [i];
		if (n += i, this.Nv !== null) {
			let e = Gh(this.Ov, this.Nv, this.jv);
			if (Math.sign(e) === Math.sign(r)) {
				let t = Wh(this.Ov, this.Nv);
				if (a.push(e), o.push(t), n += t, this.Fv !== null) {
					let e = Gh(this.Nv, this.Fv, this.jv);
					if (Math.sign(e) === Math.sign(r)) {
						let t = Wh(this.Nv, this.Fv);
						a.push(e), o.push(t), n += t;
					}
				}
			}
		}
		let s = 0;
		for (let e = 0; e < a.length; ++e) s += o[e] / n * a[e];
		Math.abs(s) < this.$v || (this.Wv = {
			Lv: e,
			wt: t
		}, this.Uv = s, this.Hv = function(e, t) {
			let n = Math.log(t);
			return Math.log(1 * n / -e) / n;
		}(Math.abs(s), this.qv));
	}
	Xc(e) {
		let t = $(this.Wv), n = this.Kv(e);
		return t.Lv + this.Uv * (this.qv ** +n - 1) / Math.log(this.qv);
	}
	sr(e) {
		this.Wv !== null && (this.Wv.Lv = this.Wv.Lv - e);
	}
	Gc(e) {
		return this.Wv === null || this.Kv(e) === this.Hv;
	}
	Kv(e) {
		let t = $(this.Wv), n = Math.max(0, e - t.wt);
		return Math.min(n, this.Hv);
	}
}, qh = class {
	constructor(e, t) {
		this.Zv = void 0, this.Gv = void 0, this.Xv = void 0, this.vn = !1, this.Jv = e, this.Qv = t, this.tm();
	}
	Pt() {
		this.tm();
	}
	im() {
		this.Zv && this.Jv.removeChild(this.Zv), this.Gv && this.Jv.removeChild(this.Gv), this.Zv = void 0, this.Gv = void 0;
	}
	nm() {
		return this.vn !== this.sm() || this.Xv !== this.rm();
	}
	rm() {
		return this.Qv.Qt().Xi().J(this.Qv.N().layout.textColor) > 160 ? "dark" : "light";
	}
	sm() {
		return this.Qv.N().layout.attributionLogo;
	}
	hm() {
		let e = new URL(location.href);
		return e.hostname ? "&utm_source=" + e.hostname + e.pathname : "";
	}
	tm() {
		this.nm() && (this.im(), this.vn = this.sm(), this.vn && (this.Xv = this.rm(), this.Gv = document.createElement("style"), this.Gv.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.Zv = document.createElement("a"), this.Zv.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.hm()}&utm_content=lwc-5.3.0`, this.Zv.title = "Charting by TradingView", this.Zv.id = "tv-attr-logo", this.Zv.target = "_blank", this.Zv.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"35\" height=\"19\" fill=\"none\"><g fill-rule=\"evenodd\" clip-path=\"url(#a)\" clip-rule=\"evenodd\"><path fill=\"var(--stroke)\" d=\"M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z\"/><path fill=\"var(--fill)\" d=\"M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\"/></g><defs><clipPath id=\"a\"><path fill=\"var(--stroke)\" d=\"M0 0h35v19H0z\"/></clipPath></defs></svg>", this.Zv.toggleAttribute("data-dark", this.Xv === "dark"), this.Jv.appendChild(this.Gv), this.Jv.appendChild(this.Zv)));
	}
};
function Jh(e, t) {
	let n = $(e.ownerDocument).createElement("canvas");
	e.appendChild(n);
	let r = pf(n, {
		type: "device-pixel-content-box",
		options: { allowResizeObserver: !0 },
		transform: (e, t) => ({
			width: Math.max(e.width, t.width),
			height: Math.max(e.height, t.height)
		})
	});
	return r.resizeCanvasElement(t), r;
}
function Yh(e) {
	e.width = 1, e.height = 1, e.getContext("2d")?.clearRect(0, 0, 1, 1);
}
function Xh(e, t, n, r) {
	e.Yh && e.Yh(t, n, r);
}
function Zh(e, t, n, r) {
	e.st(t, n, r);
}
function Qh(e, t, n, r) {
	$h(e(n, r), t, r);
}
function $h(e, t, n) {
	for (let r of e) {
		let e = r.Tt(n);
		e !== null && t(e);
	}
}
function eg(e, t) {
	return (n) => function(e) {
		return e.Ft !== void 0;
	}(n) && (n.Ft()?.vl() ?? "") === t ? n.tl?.(e) ?? [] : [];
}
function tg(e, t, n, r) {
	if (!e.length) return;
	let i = 0, a = e[0].$t(r, !0), o = t === 1 ? n / 2 - (e[0].Hi() - a / 2) : e[0].Hi() - a / 2 - n / 2;
	o = Math.max(0, o);
	for (let a = 1; a < e.length; a++) {
		let s = e[a], c = e[a - 1], l = c.$t(r, !1), u = s.Hi(), d = c.Hi();
		if (t === 1 ? u > d - l : u < d + l) {
			let r = d - l * t;
			s.Ui(r);
			let a = r - t * l / 2;
			if ((t === 1 ? a < 0 : a > n) && o > 0) {
				let r = t === 1 ? -1 - a : a - n, s = Math.min(r, o);
				for (let n = i; n < e.length; n++) e[n].Ui(e[n].Hi() + t * s);
				o -= s;
			}
		} else i = a, o = t === 1 ? d - l - u : u - (d + l);
	}
}
var ng = class {
	constructor(e, t, n, r) {
		this.Ki = null, this.am = null, this.lm = !1, this.om = new yp(200), this._m = null, this.um = 0, this.dm = !1, this.fm = () => {
			this.dm || this.yt.pm().Qt().wr();
		}, this.vm = () => {
			this.dm || this.yt.pm().Qt().wr();
		}, this.yt = e, this.yn = t, this.To = t.layout, this.Cd = n, this.wm = r === "left", this.Mm = eg("normal", r), this.gm = eg("top", r), this.bm = eg("bottom", r), this.pv = document.createElement("div"), this.pv.style.height = "100%", this.pv.style.overflow = "hidden", this.pv.style.width = "25px", this.pv.style.left = "0", this.pv.style.position = "relative", this.Sm = Jh(this.pv, cf({
			width: 16,
			height: 16
		})), this.Sm.subscribeSuggestedBitmapSizeChanged(this.fm);
		let i = this.Sm.canvasElement;
		i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.xm = Jh(this.pv, cf({
			width: 16,
			height: 16
		})), this.xm.subscribeSuggestedBitmapSizeChanged(this.vm);
		let a = this.xm.canvasElement;
		a.style.position = "absolute", a.style.zIndex = "2", a.style.left = "0", a.style.top = "0";
		let o = {
			$p: this.Pv.bind(this),
			Hp: this.Pv.bind(this),
			Ep: this.kv.bind(this),
			Vp: this.kv.bind(this),
			jp: this.Cm.bind(this),
			Op: this.Tv.bind(this),
			Lp: this.Tv.bind(this),
			wp: this.ym.bind(this),
			fp: this.ym.bind(this),
			yp: this.Pm.bind(this),
			tv: this.yv.bind(this)
		};
		this.av = new Lh(this.xm.canvasElement, o, {
			Dp: () => !this.yn.handleScroll.vertTouchDrag,
			Ip: () => !0
		});
	}
	m() {
		this.av.m(), this.xm.unsubscribeSuggestedBitmapSizeChanged(this.vm), Yh(this.xm.canvasElement), this.xm.dispose(), this.Sm.unsubscribeSuggestedBitmapSizeChanged(this.fm), Yh(this.Sm.canvasElement), this.Sm.dispose(), this.Ki !== null && this.Ki.o_().u(this), this.Ki = null;
	}
	wv() {
		return this.pv;
	}
	P() {
		return this.To.fontSize;
	}
	km() {
		let e = this.Cd.N();
		return this._m !== e.k && (this.om.Os(), this._m = e.k), e;
	}
	Tm() {
		if (this.Ki === null) return 0;
		let e = 0, t = this.km(), n = $(this.Sm.canvasElement.getContext("2d", { colorSpace: this.yt.pm().N().layout.colorSpace }));
		n.save();
		let r = this.Ki.Ll();
		n.font = this.Rm(), r.length > 0 && (e = Math.max(this.om.Ii(n, r[0].so), this.om.Ii(n, r[r.length - 1].so)));
		let i = this.Dm();
		for (let t = i.length; t--;) {
			let r = this.om.Ii(n, i[t].ri());
			r > e && (e = r);
		}
		let a = this.Ki.Lt();
		if (a !== null && this.am !== null && (o = this.yn.crosshair).mode !== 2 && o.horzLine.visible && o.horzLine.labelVisible) {
			let t = this.Ki.Tn(1, a), r = this.Ki.Tn(this.am.height - 2, a);
			e = Math.max(e, this.om.Ii(n, this.Ki.Ji(Math.floor(Math.min(t, r)) + .11111111111111, a)), this.om.Ii(n, this.Ki.Ji(Math.ceil(Math.max(t, r)) - .11111111111111, a)));
		}
		var o;
		n.restore();
		let s = e || 34;
		return Fh(Math.ceil(t.S + t.C + t.V + t.B + 5 + s));
	}
	Im(e) {
		this.am !== null && lf(this.am, e) || (this.am = e, this.dm = !0, this.Sm.resizeCanvasElement(e), this.xm.resizeCanvasElement(e), this.dm = !1, this.pv.style.width = `${e.width}px`, this.pv.style.height = `${e.height}px`);
	}
	Vm() {
		return $(this.am).width;
	}
	un(e) {
		this.Ki !== e && (this.Ki !== null && this.Ki.o_().u(this), this.Ki = e, e.o_().i(this.mo.bind(this), this));
	}
	Ft() {
		return this.Ki;
	}
	Os() {
		let e = this.yt.Rv();
		this.yt.pm().Qt().hu(e, $(this.Ft()));
	}
	Bm(e) {
		if (this.am === null) return;
		let t = { colorSpace: this.yt.pm().N().layout.colorSpace };
		if (e !== 1) {
			this.Em(), this.Sm.applySuggestedBitmapSize();
			let e = vf(this.Sm, t);
			e !== null && (e.useBitmapCoordinateSpace((e) => {
				this.Am(e), this.Lm(e);
			}), this.yt.zm(e, this.bm), this.Om(e), this.yt.zm(e, this.Mm), this.Nm(e));
		}
		this.xm.applySuggestedBitmapSize();
		let n = vf(this.xm, t);
		n !== null && (n.useBitmapCoordinateSpace(({ context: e, bitmapSize: t }) => {
			e.clearRect(0, 0, t.width, t.height);
		}), this.Fm(n), this.yt.zm(n, this.gm));
	}
	gv() {
		return this.Sm.bitmapSize;
	}
	bv(e, t, n, r) {
		let i = this.gv();
		if (i.width > 0 && i.height > 0 && (e.drawImage(this.Sm.canvasElement, t, n), r)) {
			let r = this.xm.canvasElement;
			e.drawImage(r, t, n);
		}
	}
	Pt() {
		this.Ki?.Ll();
	}
	Pv(e) {
		if (this.Ki === null || this.Ki.Gi() || !this.yn.handleScale.axisPressedMouseMove.price) return;
		let t = this.yt.pm().Qt(), n = this.yt.Rv();
		this.lm = !0, t.J_(n, this.Ki, e.localY);
	}
	kv(e) {
		if (this.Ki === null || !this.yn.handleScale.axisPressedMouseMove.price) return;
		let t = this.yt.pm().Qt(), n = this.yt.Rv(), r = this.Ki;
		t.Q_(n, r, e.localY);
	}
	Cm() {
		if (this.Ki === null || !this.yn.handleScale.axisPressedMouseMove.price) return;
		let e = this.yt.pm().Qt(), t = this.yt.Rv(), n = this.Ki;
		this.lm && (this.lm = !1, e.tu(t, n));
	}
	Tv(e) {
		if (this.Ki === null || !this.yn.handleScale.axisPressedMouseMove.price) return;
		let t = this.yt.pm().Qt(), n = this.yt.Rv();
		this.lm = !1, t.tu(n, this.Ki);
	}
	ym(e) {
		this.yn.handleScale.axisDoubleClickReset.price && this.Os();
	}
	Pm(e) {
		this.Ki !== null && (!this.yt.pm().Qt().N().handleScale.axisPressedMouseMove.price || this.Ki.qe() || this.Ki.Oo() || this.Wm(1));
	}
	yv(e) {
		this.Wm(0);
	}
	Dm() {
		let e = [], t = this.Ki === null ? void 0 : this.Ki;
		return ((n) => {
			for (let r = 0; r < n.length; ++r) {
				let i = n[r].qn(this.yt.Rv(), t);
				for (let t = 0; t < i.length; t++) e.push(i[t]);
			}
		})(this.yt.Rv().Dt()), e;
	}
	Am({ context: e, bitmapSize: t }) {
		let { width: n, height: r } = t, i = this.yt.Rv().Qt(), a = i.$(), o = i.cf();
		a === o ? Zf(e, 0, 0, n, r, a) : ep(e, 0, 0, n, r, a, o);
	}
	Lm({ context: e, bitmapSize: t, horizontalPixelRatio: n }) {
		if (this.am === null || this.Ki === null || !this.Ki.N().borderVisible) return;
		e.fillStyle = this.Ki.N().borderColor;
		let r = Math.max(1, Math.floor(this.km().S * n)), i;
		i = this.wm ? t.width - r : 0, e.fillRect(i, 0, r, t.height);
	}
	Om(e) {
		if (this.am === null || this.Ki === null) return;
		let t = this.Ki.Ll(), n = this.Ki.N(), r = this.km(), i = this.wm ? this.am.width - r.C : 0;
		n.borderVisible && n.ticksVisible && e.useBitmapCoordinateSpace(({ context: e, horizontalPixelRatio: a, verticalPixelRatio: o }) => {
			e.fillStyle = n.borderColor;
			let s = Math.max(1, Math.floor(o)), c = Math.floor(.5 * o), l = Math.round(r.C * a);
			e.beginPath();
			for (let n of t) e.rect(Math.floor(i * a), Math.round(n.Il * o) - c, l, s);
			e.fill();
		}), e.useMediaCoordinateSpace(({ context: e }) => {
			e.font = this.Rm(), e.fillStyle = n.textColor ?? this.To.textColor, e.textAlign = this.wm ? "right" : "left", e.textBaseline = "middle";
			let a = this.wm ? Math.round(i - r.V) : Math.round(i + r.C + r.V), o = t.map((t) => this.om.Di(e, t.so));
			for (let n = t.length; n--;) {
				let r = t[n];
				e.fillText(r.so, a, r.Il + o[n]);
			}
		});
	}
	Em() {
		if (this.am === null || this.Ki === null) return;
		let e = this.am.height / 2, t = [], n = this.Ki.Dt().slice(), r = this.yt.Rv(), i = this.km();
		this.Ki === r.Gs() && this.yt.Rv().Dt().forEach((e) => {
			r.Zs(e) && n.push(e);
		});
		let a = this.Ki.Pl()[0], o = this.Ki;
		n.forEach((n) => {
			let i = n.qn(r, o);
			i.forEach((e) => {
				e.$i() && e.Wi() === null && (e.Ui(null), t.push(e));
			}), a === n && i.length > 0 && (e = i[0].Ei());
		}), this.Ki.N().alignLabels && this.Hm(t, i, e);
	}
	Hm(e, t, n) {
		if (this.am === null) return;
		let r = e.filter((e) => e.Ei() <= n), i = e.filter((e) => e.Ei() > n);
		r.sort((e, t) => t.Ei() - e.Ei()), r.length && i.length && i.push(r[0]), i.sort((e, t) => e.Ei() - t.Ei());
		for (let n of e) {
			let e = Math.floor(n.$t(t) / 2), r = n.Ei();
			r > -e && r < e && n.Ui(e), r > this.am.height - e && r < this.am.height + e && n.Ui(this.am.height - e);
		}
		tg(r, 1, this.am.height, t), tg(i, -1, this.am.height, t);
	}
	Nm(e) {
		if (this.am === null) return;
		let t = this.Dm(), n = this.km(), r = this.wm ? "right" : "left";
		t.forEach((t) => {
			t.ji() && t.Tt($(this.Ki)).st(e, n, this.om, r);
		});
	}
	Fm(e) {
		if (this.am === null || this.Ki === null) return;
		let t = this.yt.pm().Qt(), n = [], r = this.yt.Rv(), i = t.Ad().qn(r, this.Ki);
		i.length && n.push(i);
		let a = this.km(), o = this.wm ? "right" : "left";
		n.forEach((t) => {
			t.forEach((t) => {
				t.Tt($(this.Ki)).st(e, a, this.om, o);
			});
		});
	}
	Wm(e) {
		this.pv.style.cursor = e === 1 ? "ns-resize" : "default";
	}
	mo() {
		let e = this.Tm();
		this.um < e && this.yt.pm().Qt().Ta(), this.um = e;
	}
	Rm() {
		return Lf(this.To.fontSize, this.To.fontFamily);
	}
};
function rg(e, t) {
	return e.Ja?.(t) ?? [];
}
function ig(e, t) {
	return e.jn?.(t) ?? [];
}
function ag(e, t) {
	return e.cn?.(t) ?? [];
}
function og(e, t) {
	return e.Ya?.(t) ?? [];
}
var sg = class e {
	constructor(e, t) {
		this.am = cf({
			width: 0,
			height: 0
		}), this.Um = null, this.$m = null, this.jm = null, this.qm = null, this.Ym = !1, this.Km = new Df(), this.Zm = new Df(), this.Gm = 0, this.Xm = !1, this.Jm = null, this.Qm = !1, this.tw = null, this.iw = null, this.dm = !1, this.fm = () => {
			this.dm || this.nw === null || this.sn().wr();
		}, this.vm = () => {
			this.dm || this.nw === null || this.sn().wr();
		}, this.Qv = e, this.nw = t, this.nw.vu().i(this.sw.bind(this), this, !0), this.ew = document.createElement("td"), this.ew.style.padding = "0", this.ew.style.position = "relative";
		let n = document.createElement("div");
		n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.rw = document.createElement("td"), this.rw.style.padding = "0", this.hw = document.createElement("td"), this.hw.style.padding = "0", this.ew.appendChild(n), this.Sm = Jh(n, cf({
			width: 16,
			height: 16
		})), this.Sm.subscribeSuggestedBitmapSizeChanged(this.fm);
		let r = this.Sm.canvasElement;
		r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.xm = Jh(n, cf({
			width: 16,
			height: 16
		})), this.xm.subscribeSuggestedBitmapSizeChanged(this.vm);
		let i = this.xm.canvasElement;
		i.style.position = "absolute", i.style.zIndex = "2", i.style.left = "0", i.style.top = "0", this.fv = document.createElement("tr"), this.fv.appendChild(this.rw), this.fv.appendChild(this.ew), this.fv.appendChild(this.hw), this.aw(), this.av = new Lh(this.xm.canvasElement, this, {
			Dp: () => this.Jm === null && !this.Qv.N().handleScroll.vertTouchDrag,
			Ip: () => this.Jm === null && !this.Qv.N().handleScroll.horzTouchDrag
		});
	}
	m() {
		this.Um !== null && this.Um.m(), this.$m !== null && this.$m.m(), this.jm = null, this.xm.unsubscribeSuggestedBitmapSizeChanged(this.vm), Yh(this.xm.canvasElement), this.xm.dispose(), this.Sm.unsubscribeSuggestedBitmapSizeChanged(this.fm), Yh(this.Sm.canvasElement), this.Sm.dispose(), this.nw !== null && (this.nw.vu().u(this), this.nw.m()), this.av.m();
	}
	Rv() {
		return $(this.nw);
	}
	lw(t) {
		this.nw !== null && this.nw.vu().u(this), this.nw = t, this.nw !== null && this.nw.vu().i(e.prototype.sw.bind(this), this, !0), this.aw(), this.Qv.cv().indexOf(this) === this.Qv.cv().length - 1 ? (this.jm = this.jm ?? new qh(this.ew, this.Qv), this.jm.Pt()) : (this.jm?.im(), this.jm = null);
	}
	pm() {
		return this.Qv;
	}
	wv() {
		return this.fv;
	}
	aw() {
		if (this.nw !== null && (this.ow(), this.sn().Jn().length !== 0)) {
			if (this.Um !== null) {
				let e = this.nw.G_();
				this.Um.un($(e));
			}
			if (this.$m !== null) {
				let e = this.nw.X_();
				this.$m.un($(e));
			}
		}
	}
	_w() {
		this.Um !== null && this.Um.Pt(), this.$m !== null && this.$m.Pt();
	}
	N_() {
		return this.nw === null ? 0 : this.nw.N_();
	}
	F_(e) {
		this.nw && this.nw.F_(e);
	}
	yp(e) {
		if (!this.nw) return;
		this.uw();
		let t = e.localX, n = e.localY;
		this.cw(t, n, e);
	}
	$p(e) {
		this.uw(), this.dw(), this.cw(e.localX, e.localY, e);
	}
	Pp(e) {
		if (!this.nw) return;
		this.uw();
		let t = e.localX, n = e.localY;
		this.cw(t, n, e);
	}
	Np(e) {
		this.nw !== null && (this.uw(), this.cw(e.localX, e.localY, e), this.fw(e));
	}
	wp(e) {
		this.nw !== null && this.pw(this.Zm, e);
	}
	fp(e) {
		this.wp(e);
	}
	Ep(e) {
		this.uw(), this.mw(e), this.cw(e.localX, e.localY, e);
	}
	Op(e) {
		this.nw !== null && (this.uw(), this.Xm = !1, this.ww(e));
	}
	zp(e) {
		this.nw !== null && this.fw(e);
	}
	iv(e) {
		if (this.Xm = !0, this.Jm === null) {
			let t = {
				x: e.localX,
				y: e.localY
			};
			this.Mw(t, t, e);
		}
	}
	tv(e) {
		this.nw !== null && (this.uw(), this.nw.Qt().Vd(null), this.gw());
	}
	bw() {
		return this.Km;
	}
	Sw() {
		return this.Zm;
	}
	Kp() {
		this.Gm = 1, this.sn().cs();
	}
	Zp(e, t) {
		if (!this.Qv.N().handleScale.pinch) return;
		let n = 5 * (t - this.Gm);
		this.Gm = t, this.sn().$d(e._t, n);
	}
	Hp(e) {
		this.Xm = !1, this.Qm = this.Jm !== null, this.dw();
		let t = this.sn().Ad();
		this.Jm !== null && t.It() && (this.tw = {
			x: t.ni(),
			y: t.si()
		}, this.Jm = {
			x: e.localX,
			y: e.localY
		});
	}
	Vp(e) {
		if (this.nw === null) return;
		let t = e.localX, n = e.localY;
		if (this.Jm !== null) {
			this.Qm = !1;
			let r = $(this.tw), i = r.x + (t - this.Jm.x), a = r.y + (n - this.Jm.y);
			this.cw(i, a, e);
		} else this.mw(e);
	}
	Lp(e) {
		this.pm().N().trackingMode.exitMode === 0 && (this.Qm = !0), this.xw(), this.ww(e);
	}
	Qs(e, t) {
		let n = this.nw;
		return n === null ? null : Xm(n, e, t);
	}
	Cw(e, t) {
		$(t === "left" ? this.Um : this.$m).Im(cf({
			width: e,
			height: this.am.height
		}));
	}
	Mv() {
		return this.am;
	}
	Im(e) {
		lf(this.am, e) || (this.am = e, this.dm = !0, this.Sm.resizeCanvasElement(e), this.xm.resizeCanvasElement(e), this.dm = !1, this.ew.style.width = e.width + "px", this.ew.style.height = e.height + "px");
	}
	yw() {
		let e = $(this.nw);
		e.K_(e.G_()), e.K_(e.X_());
		for (let t of e.Pl()) if (e.Zs(t)) {
			let n = t.Ft();
			n !== null && e.K_(n), t.Nn();
		}
		for (let t of e.wu()) t.Nn();
	}
	gv() {
		return this.Sm.bitmapSize;
	}
	bv(e, t, n, r) {
		let i = this.gv();
		if (i.width > 0 && i.height > 0 && (e.drawImage(this.Sm.canvasElement, t, n), r)) {
			let r = this.xm.canvasElement;
			e !== null && e.drawImage(r, t, n);
		}
	}
	Bm(e) {
		if (e === 0 || this.nw === null) return;
		e > 1 && this.yw(), this.Um !== null && this.Um.Bm(e), this.$m !== null && this.$m.Bm(e);
		let t = { colorSpace: this.Qv.N().layout.colorSpace };
		if (e !== 1) {
			this.Sm.applySuggestedBitmapSize();
			let e = vf(this.Sm, t);
			e !== null && (e.useBitmapCoordinateSpace((e) => {
				this.Am(e);
			}), this.nw && (this.Pw(e, rg), this.kw(e), this.Pw(e, ig), this.Pw(e, ag)));
		}
		this.xm.applySuggestedBitmapSize();
		let n = vf(this.xm, t);
		n !== null && (n.useBitmapCoordinateSpace(({ context: e, bitmapSize: t }) => {
			e.clearRect(0, 0, t.width, t.height);
		}), this.Tw(n), this.Pw(n, og), this.Pw(n, ag));
	}
	Rw() {
		return this.Um;
	}
	Dw() {
		return this.$m;
	}
	zm(e, t) {
		this.Pw(e, t);
	}
	sw() {
		this.nw !== null && this.nw.vu().u(this), this.nw = null;
	}
	fw(e) {
		this.pw(this.Km, e);
	}
	pw(e, t) {
		let n = t.localX, r = t.localY;
		e.v() && e.p(this.sn().Et().Vc(n), {
			x: n,
			y: r
		}, t);
	}
	Am({ context: e, bitmapSize: t }) {
		let { width: n, height: r } = t, i = this.sn(), a = i.$(), o = i.cf();
		a === o ? Zf(e, 0, 0, n, r, o) : ep(e, 0, 0, n, r, a, o);
	}
	kw(e) {
		let t = $(this.nw), n = t.mu().Mr().Tt(t);
		n !== null && n.st(e, !1);
	}
	Tw(e) {
		this.Iw(e, ig, Zh, this.sn().Ad());
	}
	Pw(e, t) {
		let n = $(this.nw), r = t === ig ? this.Vw() : null, i = r === null ? null : this.Bw(r, n), a = n.wu();
		if (i === null || r === null) {
			let r = n.ou();
			this.Ew(e, t, Xh, a, r), this.Ew(e, t, Zh, a, r);
			return;
		}
		let o = n.Dt(), s = (e) => e === r ? i.Xa : void 0;
		this.Ew(e, t, Xh, a, o, s), this.Ew(e, t, Zh, a, o, s), this.Iw(e, t, Xh, r, i.Ya), this.Iw(e, t, Zh, r, i.Ya);
	}
	Ew(e, t, n, r, i, a) {
		for (let i of r) this.Iw(e, t, n, i);
		if (a !== void 0) for (let r of i) this.Iw(e, t, n, r, a(r));
		else for (let r of i) this.Iw(e, t, n, r);
	}
	Vw() {
		let e = $(this.nw), t = e.Qt().uu()?._u;
		if (!e.Qt().N().hoveredSeriesOnTop || t === void 0) return null;
		for (let n of e.Dt()) if (n === t) return n;
		return null;
	}
	Bw(e, t) {
		let n = e.Ga?.(t) ?? null;
		return n === null || n.Ya.length === 0 ? null : n;
	}
	Iw(e, t, n, r, i) {
		let a = $(this.nw), o = a.Qt().uu(), s = o !== null && o._u === r, c = o !== null && s && o.gu !== void 0 ? o.gu.ne : void 0, l = (t) => n(t, e, s, c);
		i === void 0 ? Qh(t, l, r, a) : $h(i, l, a);
	}
	ow() {
		if (this.nw === null) return;
		let e = this.Qv, t = this.nw.G_().N().visible, n = this.nw.X_().N().visible;
		t || this.Um === null || (this.rw.removeChild(this.Um.wv()), this.Um.m(), this.Um = null), n || this.$m === null || (this.hw.removeChild(this.$m.wv()), this.$m.m(), this.$m = null);
		let r = e.Qt().nf();
		t && this.Um === null && (this.Um = new ng(this, e.N(), r, "left"), this.rw.appendChild(this.Um.wv())), n && this.$m === null && (this.$m = new ng(this, e.N(), r, "right"), this.hw.appendChild(this.$m.wv()));
	}
	Aw(e) {
		return e.nv && this.Xm || this.Jm !== null;
	}
	cw(e, t, n) {
		e = Math.max(0, Math.min(e, this.am.width - 1)), t = Math.max(0, Math.min(t, this.am.height - 1)), this.sn().Xd(e, t, n, $(this.nw));
	}
	gw() {
		this.sn().Qd();
	}
	xw() {
		this.Qm && (this.Jm = null, this.gw());
	}
	Mw(e, t, n) {
		this.Jm = e, this.Qm = !1, this.cw(t.x, t.y, n);
		let r = this.sn().Ad();
		this.tw = {
			x: r.ni(),
			y: r.si()
		};
	}
	sn() {
		return this.Qv.Qt();
	}
	ww(e) {
		if (!this.Ym) return;
		let t = this.sn(), n = this.Rv();
		if (t.su(n, n.kn()), this.qm = null, this.Ym = !1, t.Kd(), this.iw !== null) {
			let e = performance.now(), n = t.Et();
			this.iw.we(n.Oc(), e), this.iw.Gc(e) || t.ps(this.iw);
		}
	}
	uw() {
		this.Jm = null;
	}
	dw() {
		if (this.nw) {
			if (this.sn().cs(), document.activeElement !== document.body && document.activeElement !== document.documentElement) $(document.activeElement).blur();
			else {
				let e = document.getSelection();
				e !== null && e.removeAllRanges();
			}
			!this.nw.kn().Gi() && this.sn().Et().Gi();
		}
	}
	mw(e) {
		if (this.nw === null) return;
		let t = this.sn(), n = t.Et();
		if (n.Gi()) return;
		let r = this.Qv.N(), i = r.handleScroll, a = r.kineticScroll;
		if ((!i.pressedMouseMove || e.nv) && (!i.horzTouchDrag && !i.vertTouchDrag || !e.nv)) return;
		let o = this.nw.kn(), s = performance.now();
		if (this.qm !== null || this.Aw(e) || (this.qm = {
			x: e.clientX,
			y: e.clientY,
			Rf: s,
			Lw: e.localX,
			zw: e.localY
		}), this.qm !== null && !this.Ym && (this.qm.x !== e.clientX || this.qm.y !== e.clientY)) {
			if (e.nv && a.touch || !e.nv && a.mouse) {
				let e = n.wl();
				this.iw = new Kh(.2 / e, 7 / e, .997, 15 / e), this.iw.Yv(n.Nc(), this.qm.Rf);
			} else this.iw = null;
			o.Gi() || t.iu(this.nw, o, e.localY), t.qd(e.localX), this.Ym = !0;
		}
		this.Ym && (o.Gi() || t.nu(this.nw, o, e.localY), t.Yd(e.localX), this.iw !== null && this.iw.Yv(n.Nc(), s));
	}
}, cg = class {
	constructor(e, t, n, r, i) {
		this.xt = !0, this.am = cf({
			width: 0,
			height: 0
		}), this.fm = () => this.Bm(3), this.wm = e === "left", this.Cd = n.nf, this.yn = t, this.Ow = r, this.Nw = i, this.pv = document.createElement("div"), this.pv.style.width = "25px", this.pv.style.height = "100%", this.pv.style.overflow = "hidden", this.Sm = Jh(this.pv, cf({
			width: 16,
			height: 16
		})), this.Sm.subscribeSuggestedBitmapSizeChanged(this.fm);
	}
	m() {
		this.Sm.unsubscribeSuggestedBitmapSizeChanged(this.fm), Yh(this.Sm.canvasElement), this.Sm.dispose();
	}
	wv() {
		return this.pv;
	}
	Mv() {
		return this.am;
	}
	Im(e) {
		lf(this.am, e) || (this.am = e, this.Sm.resizeCanvasElement(e), this.pv.style.width = `${e.width}px`, this.pv.style.height = `${e.height}px`, this.xt = !0);
	}
	Bm(e) {
		if (e < 3 && !this.xt || this.am.width === 0 || this.am.height === 0) return;
		this.xt = !1, this.Sm.applySuggestedBitmapSize();
		let t = vf(this.Sm, { colorSpace: this.yn.layout.colorSpace });
		t !== null && t.useBitmapCoordinateSpace((e) => {
			this.Am(e), this.Lm(e);
		});
	}
	gv() {
		return this.Sm.bitmapSize;
	}
	bv(e, t, n) {
		let r = this.gv();
		r.width > 0 && r.height > 0 && e.drawImage(this.Sm.canvasElement, t, n);
	}
	Lm({ context: e, bitmapSize: t, horizontalPixelRatio: n, verticalPixelRatio: r }) {
		if (!this.Ow()) return;
		e.fillStyle = this.yn.timeScale.borderColor;
		let i = Math.floor(this.Cd.N().S * n), a = Math.floor(this.Cd.N().S * r), o = this.wm ? t.width - i : 0;
		e.fillRect(o, 0, i, a);
	}
	Am({ context: e, bitmapSize: t }) {
		Zf(e, 0, 0, t.width, t.height, this.Nw());
	}
};
function lg(e) {
	return (t) => t.il?.(e) ?? [];
}
var ug = lg("normal"), dg = lg("top"), fg = lg("bottom"), pg = class {
	constructor(e, t) {
		this.Fw = null, this.Ww = null, this.M = null, this.Hw = !1, this.am = cf({
			width: 0,
			height: 0
		}), this.Uw = new Df(), this.om = new yp(5), this.dm = !1, this.fm = () => {
			this.dm || this.Qv.Qt().wr();
		}, this.vm = () => {
			this.dm || this.Qv.Qt().wr();
		}, this.Qv = e, this.yu = t, this.yn = e.N().layout, this.Zv = document.createElement("tr"), this.$w = document.createElement("td"), this.$w.style.padding = "0", this.jw = document.createElement("td"), this.jw.style.padding = "0", this.pv = document.createElement("td"), this.pv.style.height = "25px", this.pv.style.padding = "0", this.qw = document.createElement("div"), this.qw.style.width = "100%", this.qw.style.height = "100%", this.qw.style.position = "relative", this.qw.style.overflow = "hidden", this.pv.appendChild(this.qw), this.Sm = Jh(this.qw, cf({
			width: 16,
			height: 16
		})), this.Sm.subscribeSuggestedBitmapSizeChanged(this.fm);
		let n = this.Sm.canvasElement;
		n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.xm = Jh(this.qw, cf({
			width: 16,
			height: 16
		})), this.xm.subscribeSuggestedBitmapSizeChanged(this.vm);
		let r = this.xm.canvasElement;
		r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.Zv.appendChild(this.$w), this.Zv.appendChild(this.pv), this.Zv.appendChild(this.jw), this.Yw(), this.Qv.Qt().O_().i(this.Yw.bind(this), this), this.av = new Lh(this.xm.canvasElement, this, {
			Dp: () => !0,
			Ip: () => !this.Qv.N().handleScroll.horzTouchDrag
		});
	}
	m() {
		this.av.m(), this.Fw !== null && this.Fw.m(), this.Ww !== null && this.Ww.m(), this.xm.unsubscribeSuggestedBitmapSizeChanged(this.vm), Yh(this.xm.canvasElement), this.xm.dispose(), this.Sm.unsubscribeSuggestedBitmapSizeChanged(this.fm), Yh(this.Sm.canvasElement), this.Sm.dispose();
	}
	wv() {
		return this.Zv;
	}
	Kw() {
		return this.Fw;
	}
	Zw() {
		return this.Ww;
	}
	$p(e) {
		if (this.Hw) return;
		this.Hw = !0;
		let t = this.Qv.Qt();
		!t.Et().Gi() && this.Qv.N().handleScale.axisPressedMouseMove.time && t.Ud(e.localX);
	}
	Hp(e) {
		this.$p(e);
	}
	jp() {
		let e = this.Qv.Qt();
		!e.Et().Gi() && this.Hw && (this.Hw = !1, this.Qv.N().handleScale.axisPressedMouseMove.time && e.Gd());
	}
	Ep(e) {
		let t = this.Qv.Qt();
		!t.Et().Gi() && this.Qv.N().handleScale.axisPressedMouseMove.time && t.Zd(e.localX);
	}
	Vp(e) {
		this.Ep(e);
	}
	Op() {
		this.Hw = !1;
		let e = this.Qv.Qt();
		e.Et().Gi() && !this.Qv.N().handleScale.axisPressedMouseMove.time || e.Gd();
	}
	Lp() {
		this.Op();
	}
	wp() {
		this.Qv.N().handleScale.axisDoubleClickReset.time && this.Qv.Qt().ws();
	}
	fp() {
		this.wp();
	}
	yp() {
		this.Qv.Qt().N().handleScale.axisPressedMouseMove.time && this.Wm(1);
	}
	tv() {
		this.Wm(0);
	}
	Mv() {
		return this.am;
	}
	Gw() {
		return this.Uw;
	}
	Xw(e, t, n) {
		lf(this.am, e) || (this.am = e, this.dm = !0, this.Sm.resizeCanvasElement(e), this.xm.resizeCanvasElement(e), this.dm = !1, this.pv.style.width = `${e.width}px`, this.pv.style.height = `${e.height}px`, this.Uw.p(e)), this.Fw !== null && this.Fw.Im(cf({
			width: t,
			height: e.height
		})), this.Ww !== null && this.Ww.Im(cf({
			width: n,
			height: e.height
		}));
	}
	Jw() {
		let e = this.Qw();
		return Math.ceil(e.S + e.C + e.P + e.A + e.I + e.tM);
	}
	Pt() {
		this.Qv.Qt().Et().Ll();
	}
	gv() {
		return this.Sm.bitmapSize;
	}
	bv(e, t, n, r) {
		let i = this.gv();
		if (i.width > 0 && i.height > 0 && (e.drawImage(this.Sm.canvasElement, t, n), r)) {
			let r = this.xm.canvasElement;
			e.drawImage(r, t, n);
		}
	}
	Bm(e) {
		if (e === 0) return;
		let t = { colorSpace: this.yn.colorSpace };
		if (e !== 1) {
			this.Sm.applySuggestedBitmapSize();
			let n = vf(this.Sm, t);
			n !== null && (n.useBitmapCoordinateSpace((e) => {
				this.Am(e), this.Lm(e), this.iM(n, fg);
			}), this.Om(n), this.iM(n, ug)), this.Fw !== null && this.Fw.Bm(e), this.Ww !== null && this.Ww.Bm(e);
		}
		this.xm.applySuggestedBitmapSize();
		let n = vf(this.xm, t);
		n !== null && (n.useBitmapCoordinateSpace(({ context: e, bitmapSize: t }) => {
			e.clearRect(0, 0, t.width, t.height);
		}), this.nM([...this.Qv.Qt().Jn(), this.Qv.Qt().Ad()], n), this.iM(n, dg));
	}
	iM(e, t) {
		let n = this.Qv.Qt().Jn();
		for (let r of n) Qh(t, (t) => Xh(t, e, !1, void 0), r, void 0);
		for (let r of n) Qh(t, (t) => Zh(t, e, !1, void 0), r, void 0);
	}
	Am({ context: e, bitmapSize: t }) {
		Zf(e, 0, 0, t.width, t.height, this.Qv.Qt().cf());
	}
	Lm({ context: e, bitmapSize: t, verticalPixelRatio: n }) {
		if (this.Qv.N().timeScale.borderVisible) {
			e.fillStyle = this.sM();
			let r = Math.max(1, Math.floor(this.Qw().S * n));
			e.fillRect(0, 0, t.width, r);
		}
	}
	Om(e) {
		let t = this.Qv.Qt().Et(), n = t.Ll();
		if (!n || n.length === 0) return;
		let r = this.yu.maxTickMarkWeight(n), i = this.Qw(), a = t.N();
		a.borderVisible && a.ticksVisible && e.useBitmapCoordinateSpace(({ context: e, horizontalPixelRatio: t, verticalPixelRatio: r }) => {
			e.strokeStyle = this.sM(), e.fillStyle = this.sM();
			let a = Math.max(1, Math.floor(t)), o = Math.floor(.5 * t);
			e.beginPath();
			let s = Math.round(i.C * r);
			for (let r = n.length; r--;) {
				let i = Math.round(n[r].coord * t);
				e.rect(i - o, 0, a, s);
			}
			e.fill();
		}), e.useMediaCoordinateSpace(({ context: e }) => {
			let t = i.S + i.C + i.A + i.P / 2;
			e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = this.H(), e.font = this.Rm();
			for (let i of n) if (i.weight < r) {
				let n = i.needAlignCoordinate ? this.eM(e, i.coord, i.label) : i.coord;
				e.fillText(i.label, n, t);
			}
			this.Qv.N().timeScale.allowBoldLabels && (e.font = this.rM());
			for (let i of n) if (i.weight >= r) {
				let n = i.needAlignCoordinate ? this.eM(e, i.coord, i.label) : i.coord;
				e.fillText(i.label, n, t);
			}
		});
	}
	eM(e, t, n) {
		let r = this.om.Ii(e, n), i = r / 2, a = Math.floor(t - i) + .5;
		return a < 0 ? t += Math.abs(0 - a) : a + r > this.am.width && (t -= Math.abs(this.am.width - (a + r))), t;
	}
	nM(e, t) {
		let n = this.Qw();
		for (let r of e) for (let e of r.dn()) e.Tt().st(t, n);
	}
	sM() {
		return this.Qv.N().timeScale.borderColor;
	}
	H() {
		return this.yn.textColor;
	}
	F() {
		return this.yn.fontSize;
	}
	Rm() {
		return Lf(this.F(), this.yn.fontFamily);
	}
	rM() {
		return Lf(this.F(), this.yn.fontFamily, "bold");
	}
	Qw() {
		this.M === null && (this.M = {
			S: 1,
			L: NaN,
			A: NaN,
			I: NaN,
			tn: NaN,
			C: 5,
			P: NaN,
			k: "",
			Qi: new yp(),
			tM: 0
		});
		let e = this.M, t = this.Rm();
		if (e.k !== t) {
			let n = this.F();
			e.P = n, e.k = t, e.A = 3 * n / 12, e.I = 3 * n / 12, e.tn = 9 * n / 12, e.L = 0, e.tM = 4 * n / 12, e.Qi.Os();
		}
		return this.M;
	}
	Wm(e) {
		this.pv.style.cursor = e === 1 ? "ew-resize" : "default";
	}
	Yw() {
		let e = this.Qv.Qt(), t = e.N();
		t.leftPriceScale.visible || this.Fw === null || (this.$w.removeChild(this.Fw.wv()), this.Fw.m(), this.Fw = null), t.rightPriceScale.visible || this.Ww === null || (this.jw.removeChild(this.Ww.wv()), this.Ww.m(), this.Ww = null);
		let n = { nf: this.Qv.Qt().nf() }, r = () => t.leftPriceScale.borderVisible && e.Et().N().borderVisible, i = () => e.cf();
		t.leftPriceScale.visible && this.Fw === null && (this.Fw = new cg("left", t, n, r, i), this.$w.appendChild(this.Fw.wv())), t.rightPriceScale.visible && this.Ww === null && (this.Ww = new cg("right", t, n, r, i), this.jw.appendChild(this.Ww.wv()));
	}
}, mg = !!jh && !(!navigator.userAgentData || !Array.isArray(navigator.userAgentData.brands)) && navigator.userAgentData.brands.some((e) => e.brand.includes("Chromium")) && !!jh && (navigator?.userAgentData?.platform ? navigator.userAgentData.platform === "Windows" : navigator.userAgent.toLowerCase().indexOf("win") >= 0), hg = class {
	constructor(e, t, n) {
		var r;
		this.hM = [], this.aM = [], this.lM = 0, this.lo = 0, this.P_ = 0, this.oM = 0, this._M = 0, this.uM = null, this.cM = !1, this.Km = new Df(), this.Zm = new Df(), this.bd = new Df(), this.dM = null, this.fM = null, this.Jv = e, this.yn = t, this.yu = n, this.Zv = document.createElement("div"), this.Zv.classList.add("tv-lightweight-charts"), this.Zv.style.overflow = "hidden", this.Zv.style.direction = "ltr", this.Zv.style.width = "100%", this.Zv.style.height = "100%", (r = this.Zv).style.userSelect = "none", r.style.webkitUserSelect = "none", r.style.msUserSelect = "none", r.style.MozUserSelect = "none", r.style.webkitTapHighlightColor = "transparent", this.pM = document.createElement("table"), this.pM.setAttribute("cellspacing", "0"), this.Zv.appendChild(this.pM), this.vM = this.mM.bind(this), gg(this.yn) && this.wM(!0), this.sn = new lh(this.xd.bind(this), this.yn, n), this.Qt().Ld().i(this.MM.bind(this), this), this.gM = new pg(this, this.yu), this.pM.appendChild(this.gM.wv());
		let i = t.autoSize && this.bM(), a = this.yn.width, o = this.yn.height;
		if (i || a === 0 || o === 0) {
			let t = e.getBoundingClientRect();
			a ||= t.width, o ||= t.height;
		}
		this.SM(a, o), this.xM(), e.appendChild(this.Zv), this.CM(), this.sn.Et().td().i(this.sn.Ta.bind(this.sn), this), this.sn.O_().i(this.sn.Ta.bind(this.sn), this);
	}
	Qt() {
		return this.sn;
	}
	N() {
		return this.yn;
	}
	cv() {
		return this.hM;
	}
	yM() {
		return this.gM;
	}
	m() {
		this.wM(!1), this.lM !== 0 && window.cancelAnimationFrame(this.lM), this.sn.Ld().u(this), this.sn.Et().td().u(this), this.sn.O_().u(this), this.sn.m();
		for (let e of this.hM) this.pM.removeChild(e.wv()), e.bw().u(this), e.Sw().u(this), e.m();
		this.hM = [];
		for (let e of this.aM) this.PM(e);
		this.aM = [], $(this.gM).m(), this.Zv.parentElement !== null && this.Zv.parentElement.removeChild(this.Zv), this.bd.m(), this.Km.m(), this.Zm.m(), this.kM();
	}
	SM(e, t, n = !1) {
		if (this.lo === t && this.P_ === e) return;
		let r = function(e) {
			let t = Math.floor(e.width), n = Math.floor(e.height);
			return cf({
				width: t - t % 2,
				height: n - n % 2
			});
		}(cf({
			width: e,
			height: t
		}));
		this.lo = r.height, this.P_ = r.width;
		let i = this.lo + "px", a = this.P_ + "px";
		if (this.TM() || ($(this.Zv).style.height = i, $(this.Zv).style.width = a), this.pM.style.height = i, this.pM.style.width = a, n) {
			this.lM !== 0 && (window.cancelAnimationFrame(this.lM), this.lM = 0), this.cM = !1;
			let e = dp.ys();
			this.uM !== null && (e.Ss(this.uM), this.uM = null), this.RM(e, performance.now());
		} else this.sn.Ta();
	}
	Bm(e) {
		e === void 0 && (e = dp.ys());
		for (let t = 0; t < this.hM.length; t++) this.hM[t].Bm(e._s(t).rs);
		this.yn.timeScale.visible && this.gM.Bm(e.ls());
	}
	mr(e) {
		let t = gg(this.yn);
		this.sn.mr(e);
		let n = gg(this.yn);
		n !== t && this.wM(n), e.layout?.panes && this.DM(), this.CM(), this.IM(e);
	}
	bw() {
		return this.Km;
	}
	Sw() {
		return this.Zm;
	}
	Ld() {
		return this.bd;
	}
	VM(e = !1) {
		this.uM !== null && (this.RM(this.uM, performance.now()), this.uM = null);
		let t = this.BM(null), n = document.createElement("canvas");
		n.width = t.width, n.height = t.height;
		let r = $(n.getContext("2d"));
		return this.BM(r, e), n;
	}
	EM(e) {
		return e === "left" && !this.AM() || e === "right" && !this.LM() || this.hM.length === 0 ? 0 : $(e === "left" ? this.hM[0].Rw() : this.hM[0].Dw()).Vm();
	}
	TM() {
		return this.yn.autoSize && this.dM !== null;
	}
	xv() {
		return this.Zv;
	}
	zM(e) {
		this.fM = e, this.fM ? this.xv().style.setProperty("cursor", e) : this.xv().style.removeProperty("cursor");
	}
	OM() {
		return this.fM;
	}
	NM(e) {
		return Tf(this.hM[e]).Mv();
	}
	DM() {
		this.aM.forEach((e) => {
			e.Pt();
		});
	}
	IM(e) {
		(e.autoSize !== void 0 || !this.dM || e.width === void 0 && e.height === void 0) && (e.autoSize && !this.dM && this.bM(), !1 === e.autoSize && this.dM !== null && this.kM(), e.autoSize || e.width === void 0 && e.height === void 0 || this.SM(e.width || this.P_, e.height || this.lo));
	}
	BM(e, t) {
		let n = 0, r = 0, i = this.hM[0], a = (n, r) => {
			let i = 0;
			for (let a = 0; a < this.hM.length; a++) {
				let o = this.hM[a], s = $(n === "left" ? o.Rw() : o.Dw()), c = s.gv();
				if (e !== null && s.bv(e, r, i, t), i += c.height, a < this.hM.length - 1) {
					let t = this.aM[a], n = t.gv();
					e !== null && t.bv(e, r, i), i += n.height;
				}
			}
		};
		this.AM() && (a("left", 0), n += $(i.Rw()).gv().width);
		for (let i = 0; i < this.hM.length; i++) {
			let a = this.hM[i], o = a.gv();
			if (e !== null && a.bv(e, n, r, t), r += o.height, i < this.hM.length - 1) {
				let t = this.aM[i], a = t.gv();
				e !== null && t.bv(e, n, r), r += a.height;
			}
		}
		n += i.gv().width, this.LM() && (a("right", n), n += $(i.Dw()).gv().width);
		let o = (t, n, r) => {
			$(t === "left" ? this.gM.Kw() : this.gM.Zw()).bv($(e), n, r);
		};
		if (this.yn.timeScale.visible) {
			let n = this.gM.gv();
			if (e !== null) {
				let a = 0;
				this.AM() && (o("left", a, r), a = $(i.Rw()).gv().width), this.gM.bv(e, a, r, t), a += n.width, this.LM() && o("right", a, r);
			}
			r += n.height;
		}
		return cf({
			width: n,
			height: r
		});
	}
	FM() {
		let e = 0, t = 0, n = 0;
		for (let r of this.hM) this.AM() && (t = Math.max(t, $(r.Rw()).Tm(), this.yn.leftPriceScale.minimumWidth)), this.LM() && (n = Math.max(n, $(r.Dw()).Tm(), this.yn.rightPriceScale.minimumWidth)), e += r.N_();
		t = Fh(t), n = Fh(n);
		let r = this.P_, i = this.lo, a = Math.max(r - t - n, 0), o = 1 * this.aM.length, s = this.yn.timeScale.visible, c = s ? Math.max(this.gM.Jw(), this.yn.timeScale.minimumHeight) : 0;
		var l;
		c = (l = c) + l % 2;
		let u = o + c, d = i < u ? 0 : i - u, f = d / e, p = 0, m = window.devicePixelRatio || 1;
		for (let e = 0; e < this.hM.length; ++e) {
			let r = this.hM[e];
			r.lw(this.sn.Zn()[e]);
			let i = 0, o = 0;
			o = e === this.hM.length - 1 ? d - p : Math.round(r.N_() * f * m) / m, i = Math.max(o, 2), p += i, r.Im(cf({
				width: a,
				height: i
			})), this.AM() && r.Cw(t, "left"), this.LM() && r.Cw(n, "right"), r.Rv() && this.sn.zd(r.Rv(), i);
		}
		this.gM.Xw(cf({
			width: s ? a : 0,
			height: c
		}), s ? t : 0, s ? n : 0), this.sn.W_(a), this.oM !== t && (this.oM = t), this._M !== n && (this._M = n);
	}
	wM(e) {
		e ? this.Zv.addEventListener("wheel", this.vM, { passive: !1 }) : this.Zv.removeEventListener("wheel", this.vM);
	}
	WM(e) {
		switch (e.deltaMode) {
			case e.DOM_DELTA_PAGE: return 120;
			case e.DOM_DELTA_LINE: return 32;
		}
		return mg ? 1 / window.devicePixelRatio : 1;
	}
	mM(e) {
		if (!(e.deltaX !== 0 && this.yn.handleScroll.mouseWheel || e.deltaY !== 0 && this.yn.handleScale.mouseWheel)) return;
		let t = this.WM(e), n = t * e.deltaX / 100, r = -t * e.deltaY / 100;
		if (e.cancelable && e.preventDefault(), r !== 0 && this.yn.handleScale.mouseWheel) {
			let t = Math.sign(r) * Math.min(1, Math.abs(r)), n = e.clientX - this.Zv.getBoundingClientRect().left;
			this.Qt().$d(n, t);
		}
		n !== 0 && this.yn.handleScroll.mouseWheel && this.Qt().jd(-80 * n);
	}
	RM(e, t) {
		let n = e.ls();
		n === 3 && this.HM(), n !== 3 && n !== 2 || (this.UM(e), this.$M(e, t), this.gM.Pt(), this.hM.forEach((e) => {
			e._w();
		}), this.uM?.ls() === 3 && (this.uM.Ss(e), this.HM(), this.UM(this.uM), this.$M(this.uM, t), e = this.uM, this.uM = null)), this.Bm(e);
	}
	$M(e, t) {
		for (let n of e.bs()) this.xs(n, t);
	}
	UM(e) {
		let t = this.sn.Zn();
		for (let n = 0; n < t.length; n++) e._s(n).hs && t[n].au();
	}
	xs(e, t) {
		let n = this.sn.Et();
		switch (e.ds) {
			case 0:
				n.sd();
				break;
			case 1:
				n.ed(e.Wt);
				break;
			case 2:
				n.Ms(e.Wt);
				break;
			case 3:
				n.gs(e.Wt);
				break;
			case 4:
				n.Uc();
				break;
			case 5: n.gs(e.Wt.Xc(t));
		}
	}
	xd(e) {
		this.uM === null ? this.uM = e : this.uM.Ss(e), this.cM || (this.cM = !0, this.lM = window.requestAnimationFrame((e) => {
			if (this.cM = !1, this.lM = 0, this.uM !== null) {
				let t = this.uM;
				this.uM = null, this.RM(t, e);
				for (let n of t.bs()) if (n.ds === 5 && !n.Wt.Gc(e)) {
					this.Qt().ps(n.Wt);
					break;
				}
			}
		}));
	}
	HM() {
		this.xM();
	}
	PM(e) {
		this.pM.removeChild(e.wv()), e.m();
	}
	xM() {
		let e = this.sn.Zn(), t = e.length, n = this.hM.length;
		for (let e = t; e < n; e++) {
			let e = Tf(this.hM.pop());
			this.pM.removeChild(e.wv()), e.bw().u(this), e.Sw().u(this), e.m();
			let t = this.aM.pop();
			t !== void 0 && this.PM(t);
		}
		for (let r = n; r < t; r++) {
			let t = new sg(this, e[r]);
			if (t.bw().i(this.jM.bind(this, t), this), t.Sw().i(this.qM.bind(this, t), this), this.hM.push(t), r > 0) {
				let e = new Uh(this, r - 1, r);
				this.aM.push(e), this.pM.insertBefore(e.wv(), this.gM.wv());
			}
			this.pM.insertBefore(t.wv(), this.gM.wv());
		}
		for (let n = 0; n < t; n++) {
			let t = e[n], r = this.hM[n];
			r.Rv() === t ? r.aw() : r.lw(t);
		}
		this.CM(), this.FM();
	}
	YM(e, t, n, r) {
		let i = /* @__PURE__ */ new Map();
		e !== null && this.sn.Jn().forEach((t) => {
			let n = t.Un().Hn(e);
			n !== null && i.set(t, n);
		});
		let a;
		if (e !== null) {
			let t = this.sn.Et().en(e)?.originalTime;
			t !== void 0 && (a = t);
		}
		let o = this.Qt().uu(), s = this.KM(r), c = function(e, t) {
			let n = e !== null && e._u instanceof pm ? e._u : void 0, r = e?.gu?.ie, i = t !== void 0 && t !== -1 ? t : void 0;
			return e === null || e.re === void 0 ? {
				ZM: n,
				GM: r
			} : {
				ZM: n,
				GM: r,
				XM: {
					ds: e.re,
					JM: (a = e._u, o = e.re, a instanceof Hm ? "pane-primitive" : o === "marker" || o === "primitive" ? "series-primitive" : "series"),
					QM: Ph(e.re, r),
					q_: n,
					tg: r,
					ig: i
				}
			};
			var a, o;
		}(o, s);
		return {
			th: a,
			$n: e ?? void 0,
			ng: t ?? void 0,
			ig: s === -1 ? void 0 : s,
			ZM: c.ZM,
			sg: i,
			GM: c.GM,
			XM: c.XM,
			eg: n ?? void 0
		};
	}
	KM(e) {
		let t = -1;
		if (e) t = this.hM.indexOf(e);
		else {
			let e = this.Qt().Ad().Kn();
			e !== null && (t = this.Qt().Zn().indexOf(e));
		}
		return t;
	}
	jM(e, t, n, r) {
		this.Km.p(() => this.YM(t, n, r, e));
	}
	qM(e, t, n, r) {
		this.Zm.p(() => this.YM(t, n, r, e));
	}
	MM(e, t, n) {
		this.zM(this.Qt().uu()?.Mu ?? null), this.bd.p(() => this.YM(e, t, n));
	}
	CM() {
		let e = this.yn.timeScale.visible ? "" : "none";
		this.gM.wv().style.display = e;
	}
	AM() {
		return this.hM[0].Rv().G_().N().visible;
	}
	LM() {
		return this.hM[0].Rv().X_().N().visible;
	}
	bM() {
		return "ResizeObserver" in window && (this.dM = new ResizeObserver((e) => {
			let t = e[e.length - 1];
			if (!t) return;
			let n = t.contentRect.width, r = t.contentRect.height;
			this.SM(n, r, !0);
		}), this.dM.observe(this.Jv, { box: "border-box" }), !0);
	}
	kM() {
		this.dM !== null && this.dM.disconnect(), this.dM = null;
	}
};
function gg(e) {
	return !!(e.handleScroll.mouseWheel || e.handleScale.mouseWheel);
}
function _g(e) {
	return e.open === void 0 && e.value === void 0;
}
function vg(e) {
	return function(e) {
		return e.open !== void 0;
	}(e) || function(e) {
		return e.value !== void 0;
	}(e);
}
function yg(e, t, n, r) {
	let i = n.value, a = {
		$n: t,
		wt: e,
		Wt: [
			i,
			i,
			i,
			i
		],
		th: r
	};
	return n.color !== void 0 && (a.R = n.color), a;
}
function bg(e, t, n, r) {
	let i = n.value, a = {
		$n: t,
		wt: e,
		Wt: [
			i,
			i,
			i,
			i
		],
		th: r
	};
	return n.lineColor !== void 0 && (a.vt = n.lineColor), n.topColor !== void 0 && (a.oh = n.topColor), n.bottomColor !== void 0 && (a._h = n.bottomColor), a;
}
function xg(e, t, n, r) {
	let i = n.value, a = {
		$n: t,
		wt: e,
		Wt: [
			i,
			i,
			i,
			i
		],
		th: r
	};
	return n.topLineColor !== void 0 && (a.uh = n.topLineColor), n.bottomLineColor !== void 0 && (a.dh = n.bottomLineColor), n.topFillColor1 !== void 0 && (a.fh = n.topFillColor1), n.topFillColor2 !== void 0 && (a.ph = n.topFillColor2), n.bottomFillColor1 !== void 0 && (a.mh = n.bottomFillColor1), n.bottomFillColor2 !== void 0 && (a.wh = n.bottomFillColor2), a;
}
function Sg(e, t, n, r) {
	let i = {
		$n: t,
		wt: e,
		Wt: [
			n.open,
			n.high,
			n.low,
			n.close
		],
		th: r
	};
	return n.color !== void 0 && (i.R = n.color), i;
}
function Cg(e, t, n, r) {
	let i = {
		$n: t,
		wt: e,
		Wt: [
			n.open,
			n.high,
			n.low,
			n.close
		],
		th: r
	};
	return n.color !== void 0 && (i.R = n.color), n.borderColor !== void 0 && (i.Ht = n.borderColor), n.wickColor !== void 0 && (i.ah = n.wickColor), i;
}
function wg(e, t, n, r, i) {
	let a = Tf(i)(n), o = Math.max(...a), s = Math.min(...a), c = a[a.length - 1], l = [
		c,
		o,
		s,
		c
	], { time: u, color: d, ...f } = n;
	return {
		$n: t,
		wt: e,
		Wt: l,
		th: r,
		ce: f,
		R: d
	};
}
function Tg(e) {
	return e.Wt !== void 0;
}
function Eg(e, t) {
	return t.customValues !== void 0 && (e.rg = t.customValues), e;
}
function Dg(e) {
	return (t, n, r, i, a, o) => function(e, t) {
		return t ? t(e) : _g(e);
	}(r, o) ? Eg({
		wt: t,
		$n: n,
		th: i
	}, r) : Eg(e(t, n, r, i, a), r);
}
function Og(e) {
	return {
		Candlestick: Dg(Cg),
		Bar: Dg(Sg),
		Area: Dg(bg),
		Baseline: Dg(xg),
		Histogram: Dg(yg),
		Line: Dg(yg),
		Custom: Dg(wg)
	}[e];
}
function kg(e) {
	return {
		$n: 0,
		hg: /* @__PURE__ */ new Map(),
		Na: e
	};
}
function Ag(e, t) {
	if (e !== void 0 && e.length !== 0) return {
		ag: t.key(e[0].wt),
		lg: t.key(e[e.length - 1].wt)
	};
}
function jg(e) {
	let t;
	return e.forEach((e) => {
		t === void 0 && (t = e.th);
	}), Tf(t);
}
var Mg = class {
	constructor(e) {
		this.og = /* @__PURE__ */ new Map(), this._g = /* @__PURE__ */ new Map(), this.ug = /* @__PURE__ */ new Map(), this.cg = [], this.yu = e;
	}
	m() {
		this.og.clear(), this._g.clear(), this.ug.clear(), this.cg = [];
	}
	dg(e, t) {
		let n = this.og.size !== 0, r = !1, i = this._g.get(e);
		if (i !== void 0) {
			if (this._g.size === 1) n = !1, r = !0, this.og.clear();
			else for (let t of this.cg) t.pointData.hg.delete(e) && (r = !0);
		}
		let a = [];
		if (t.length !== 0) {
			let n = t.map((e) => e.time), i = this.yu.createConverterToInternalObj(t), o = Og(e.Sh()), s = e.cl(), c = e.dl();
			a = t.map((t, a) => {
				let l = i(t.time), u = this.yu.key(l), d = this.og.get(u);
				d === void 0 && (d = kg(l), this.og.set(u, d), r = !0);
				let f = o(l, d.$n, t, n[a], s, c);
				return d.hg.set(e, f), f;
			});
		}
		n && this.fg(), this.pg(e, a);
		let o = -1;
		if (r) {
			let e = [];
			this.og.forEach((t) => {
				e.push({
					timeWeight: 0,
					time: t.Na,
					pointData: t,
					originalTime: jg(t.hg)
				});
			}), e.sort((e, t) => this.yu.key(e.time) - this.yu.key(t.time)), o = this.vg(e);
		}
		return this.mg(e, o, function(e, t, n) {
			let r = Ag(e, n), i = Ag(t, n);
			if (r !== void 0 && i !== void 0) return {
				wg: !1,
				Ba: r.lg >= i.lg && r.ag >= i.ag
			};
		}(this._g.get(e), i, this.yu));
	}
	rf(e) {
		return this.dg(e, []);
	}
	Mg(e, t, n) {
		if (n && e.Wa()) throw Error("Historical updates are not supported when conflation is enabled. Conflation requires data to be processed in order.");
		let r = t;
		(function(e) {
			e.th === void 0 && (e.th = e.time);
		})(r), this.yu.preprocessData(t);
		let i = this.yu.createConverterToInternalObj([t])(t.time), a = this.ug.get(e);
		if (!n && a !== void 0 && this.yu.key(i) < this.yu.key(a)) throw Error(`Cannot update oldest data, last time=${a}, new time=${i}`);
		let o = this.og.get(this.yu.key(i));
		if (n && o === void 0) throw Error("Cannot update non-existing data point when historicalUpdate is true");
		let s = o === void 0;
		o === void 0 && (o = kg(i), this.og.set(this.yu.key(i), o));
		let c = Og(e.Sh()), l = e.cl(), u = e.dl(), d = c(i, o.$n, t, r.th, l, u), f = !n && !s && a !== void 0 && this.yu.key(i) === this.yu.key(a);
		o.hg.set(e, d), n ? this.gg(e, d, o.$n) : (f && e.Wa() && Tg(d) && e.Dr(d), this.bg(e, d));
		let p = {
			Ba: Tg(d),
			wg: n
		};
		if (!s) return this.mg(e, -1, p);
		let m = {
			timeWeight: 0,
			time: o.Na,
			pointData: o,
			originalTime: jg(o.hg)
		}, h = Wp(this.cg, this.yu.key(m.time), (e, t) => this.yu.key(e.time) < t);
		this.cg.splice(h, 0, m);
		for (let e = h; e < this.cg.length; ++e) Ng(this.cg[e].pointData, e);
		return this.yu.fillWeightsForPoints(this.cg, h), this.mg(e, h, p);
	}
	Sg(e, t) {
		let n = this._g.get(e);
		if (n === void 0 || t <= 0) return [[], this.xg()];
		t = Math.min(t, n.length);
		let r = n.splice(-t).reverse();
		n.length === 0 ? this.ug.delete(e) : this.ug.set(e, n[n.length - 1].wt);
		for (let t of r) {
			let n = this.og.get(this.yu.key(t.wt));
			if (n && (n.hg.delete(e), n.hg.size === 0)) {
				this.og.delete(this.yu.key(n.Na)), this.cg.splice(n.$n, 1);
				for (let e = n.$n; e < this.cg.length; ++e) Ng(this.cg[e].pointData, e);
			}
		}
		return [r, this.mg(e, this.cg.length - 1, {
			wg: !1,
			Ba: !1
		})];
	}
	bg(e, t) {
		let n = this._g.get(e);
		n === void 0 && (n = [], this._g.set(e, n));
		let r = n.length === 0 ? null : n[n.length - 1];
		r === null || this.yu.key(t.wt) > this.yu.key(r.wt) ? Tg(t) && n.push(t) : Tg(t) ? n[n.length - 1] = t : n.splice(-1, 1), this.ug.set(e, t.wt);
	}
	gg(e, t, n) {
		let r = this._g.get(e);
		r === void 0 && (r = [], this._g.set(e, r));
		let i = Wp(r, n, (e, t) => e.$n < t), a = i < r.length && r[i].$n === n, o = this.ug.get(e);
		(o === void 0 || this.yu.key(t.wt) > this.yu.key(o)) && this.ug.set(e, t.wt), Tg(t) ? a ? r[i] = t : r.splice(i, 0, t) : a && r.splice(i, 1);
	}
	pg(e, t) {
		t.length === 0 ? (this._g.delete(e), this.ug.delete(e)) : (this._g.set(e, t.filter(Tg)), this.ug.set(e, t[t.length - 1].wt));
	}
	fg() {
		for (let e of this.cg) e.pointData.hg.size === 0 && this.og.delete(this.yu.key(e.time));
	}
	vg(e) {
		let t = -1;
		for (let n = 0; n < this.cg.length && n < e.length; ++n) {
			let r = this.cg[n], i = e[n];
			if (this.yu.key(r.time) !== this.yu.key(i.time)) {
				t = n;
				break;
			}
			i.timeWeight = r.timeWeight, Ng(i.pointData, n);
		}
		if (t === -1 && this.cg.length !== e.length && (t = Math.min(this.cg.length, e.length)), t === -1) return this.cg = e, -1;
		for (let n = t; n < e.length; ++n) Ng(e[n].pointData, n);
		return this.yu.fillWeightsForPoints(e, t), this.cg = e, t;
	}
	Cg() {
		if (this._g.size === 0) return null;
		let e = 0;
		return this._g.forEach((t) => {
			t.length !== 0 && (e = Math.max(e, t[t.length - 1].$n));
		}), e;
	}
	mg(e, t, n) {
		let r = this.xg();
		if (t !== -1) this._g.forEach((t, i) => {
			r.q_.set(i, {
				ce: t,
				yg: i === e ? n : void 0
			});
		}), this._g.has(e) || r.q_.set(e, {
			ce: [],
			yg: n
		}), r.Et.Pg = this.cg, r.Et.kg = t;
		else {
			let t = this._g.get(e);
			r.q_.set(e, {
				ce: t || [],
				yg: n
			});
		}
		return r;
	}
	xg() {
		return {
			q_: /* @__PURE__ */ new Map(),
			Et: { Dc: this.Cg() }
		};
	}
};
function Ng(e, t) {
	e.$n = t, e.hg.forEach((e) => {
		e.$n = t;
	});
}
function Pg(e, t) {
	return e._t < t;
}
function Fg(e, t) {
	return t < e._t;
}
function Ig(e, t, n, r) {
	return Wp(e, t, Pg, n, r);
}
function Lg(e, t, n, r) {
	return Gp(e, t, Fg, n, r);
}
function Rg(e, t, n) {
	return {
		se: e,
		ee: t,
		re: n
	};
}
function zg(e, t, n, r) {
	return e >= t - r && e <= n + r;
}
function Bg(e, t, n, r, i, a) {
	let o = i - n, s = a - r;
	if (o === 0 && s === 0) return Math.hypot(e - n, t - r);
	let c = ((e - n) * o + (t - r) * s) / (o * o + s * s), l = Math.max(0, Math.min(1, c)), u = n + o * l, d = r + s * l;
	return Math.hypot(e - u, t - d);
}
var Vg = [0, 0];
function Hg(e, t, n) {
	return t === void 0 || t.wt !== e.wt - 1 ? e._t - n / 2 : (t._t + e._t) / 2;
}
function Ug(e, t, n) {
	return t === void 0 || t.wt !== e.wt + 1 ? e._t + n / 2 : (e._t + t._t) / 2;
}
function Wg(e, t, n, r, i, a, o) {
	if (t === null || t.from >= t.to || e.length === 0) return null;
	let s = i / 2 + a, c = Ig(e, n - s, t.from, t.to), l = Lg(e, n + s, c, t.to);
	if (c >= l) return null;
	let u = Infinity;
	for (let s = c; s < l; s++) {
		let c = e[s], l = s > t.from ? e[s - 1] : void 0, d = s < t.to - 1 ? e[s + 1] : void 0, f = Hg(c, l, i) - a, p = Ug(c, d, i) + a;
		if (n < f || n > p) continue;
		o(c, Vg);
		let m = Vg[0], h = Vg[1], g = Math.min(m, h), _ = Math.max(m, h), v = g - a, y = _ + a;
		if (r >= g && r <= _) u = Math.min(u, 0);
		else if (r >= v && r <= y) {
			let e = Math.min(Math.abs(r - g), Math.abs(_ - r));
			u = Math.min(u, e);
		}
	}
	return Number.isFinite(u) ? Rg(u, 0, "series-range") : null;
}
function Gg(e, t) {
	return e.wt < t;
}
function Kg(e, t) {
	return t < e.wt;
}
function qg(e, t, n) {
	let r = t.Fa(), i = t.bi(), a = Wp(e, r, Gg), o = Gp(e, i, Kg);
	if (!n) return {
		from: a,
		to: o
	};
	let s = a, c = o;
	return a > 0 && a < e.length && e[a].wt >= r && (s = a - 1), o > 0 && o < e.length && e[o - 1].wt <= i && (c = o + 1), {
		from: s,
		to: c
	};
}
var Jg = class {
	constructor(e, t, n) {
		this.Tg = !0, this.Rg = !0, this.Dg = !0, this.Ig = [], this.Vg = null, this.Bg = -1, this.le = e, this.oe = t, this.Eg = n;
	}
	Pt(e) {
		this.Tg = !0, e === "data" && (this.Rg = !0), e === "options" && (this.Dg = !0);
	}
	Tt() {
		return this.le.It() ? (this.Ag(), this.Vg === null ? null : this.Lg) : null;
	}
	Qs(e, t) {
		return this.le.It() ? (this.Ag(), this.Vg === null ? null : this.zg(e, t)) : null;
	}
	zg(e, t) {
		return null;
	}
	Og() {
		this.Ig = this.Ig.map((e) => ({
			...e,
			...this.le.xa().xh(e.wt)
		}));
	}
	Ng() {
		this.Vg = null;
	}
	Ag() {
		let e = this.oe.Et(), t = e.N().enableConflation ? e.rd() : 0;
		t !== this.Bg && (this.Rg = !0, this.Bg = t), this.Rg &&= (this.Fg(), !1), this.Dg &&= (this.Og(), !1), this.Tg &&= (this.Wg(), !1);
	}
	Wg() {
		let e = this.le.Ft(), t = this.oe.Et();
		if (this.Ng(), t.Gi() || e.Gi()) return;
		let n = t.Ae();
		if (n === null || this.le.Un().Rh() === 0) return;
		let r = this.le.Lt();
		r !== null && (this.Vg = qg(this.Ig, n, this.Eg), this.Hg(e, t, r.Wt), this.Ug());
	}
}, Yg = class {
	constructor(e, t) {
		this.$g = e, this.Ki = t;
	}
	st(e, t, n) {
		this.$g.draw(e, this.Ki, t, n);
	}
};
function Xg(e) {
	switch (e) {
		case "point": return 2;
		case "range": return 0;
		default: return 1;
	}
}
var Zg = class extends Jg {
	constructor(e, t, n) {
		super(e, t, !1), this.Kh = n, this.$g = this.Kh.renderer(), this.Lg = new Yg(this.$g, (e) => this.jg(e));
	}
	get ba() {
		return this.Kh.conflationReducer;
	}
	Ua(e) {
		return this.Kh.priceValueBuilder(e);
	}
	fl(e) {
		return this.Kh.isWhitespace(e);
	}
	zg(e, t) {
		let n = this.$g.hitTest?.(e, t, (e) => this.jg(e));
		if (n != null) return {
			se: (r = n).distance,
			ee: Xg(r.type),
			re: "custom",
			Mu: r.cursorStyle,
			ie: r.objectId,
			ne: r.hitTestData
		};
		var r;
		let i = Wg(this.Ig, this.Vg, e, t, this.oe.Et().wl(), this.le.N().hitTestTolerance, (e, t) => {
			let n = e.qg, r = NaN, i = NaN;
			if (n !== void 0 && !this.Kh.isWhitespace(n)) for (let e of this.Kh.priceValueBuilder(n)) {
				let t = this.jg(e);
				t !== null && (r = Number.isNaN(r) ? t : Math.min(r, t), i = Number.isNaN(i) ? t : Math.max(i, t));
			}
			t[0] = r, t[1] = i;
		});
		return i === null ? null : {
			...i,
			re: "custom"
		};
	}
	Fg() {
		let e = this.le.xa();
		this.Ig = this.le.$a().Eh().map((t) => ({
			wt: t.$n,
			_t: NaN,
			...e.xh(t.$n),
			qg: t.ce
		}));
	}
	Hg(e, t) {
		t.Ic(this.Ig, Ff(this.Vg));
	}
	Ug() {
		this.Kh.update({
			bars: this.Ig.map(Qg),
			barSpacing: this.oe.Et().wl(),
			visibleRange: this.Vg,
			conflationFactor: this.oe.Et().rd()
		}, this.le.N());
	}
	jg(e) {
		let t = this.le.Lt();
		return t === null ? null : this.le.Ft().Nt(e, t.Wt);
	}
};
function Qg(e) {
	return {
		x: e._t,
		time: e.wt,
		originalData: e.qg,
		barColor: e.eh
	};
}
var $g = { color: "#2196f3" }, e_ = (e, t, n) => new Zg(e, t, Ef(n));
function t_(e) {
	let t = {
		value: e.Wt[3],
		time: e.th
	};
	return e.rg !== void 0 && (t.customValues = e.rg), t;
}
function n_(e) {
	let t = t_(e);
	return e.R !== void 0 && (t.color = e.R), t;
}
function r_(e) {
	let t = t_(e);
	return e.vt !== void 0 && (t.lineColor = e.vt), e.oh !== void 0 && (t.topColor = e.oh), e._h !== void 0 && (t.bottomColor = e._h), t;
}
function i_(e) {
	let t = t_(e);
	return e.uh !== void 0 && (t.topLineColor = e.uh), e.dh !== void 0 && (t.bottomLineColor = e.dh), e.fh !== void 0 && (t.topFillColor1 = e.fh), e.ph !== void 0 && (t.topFillColor2 = e.ph), e.mh !== void 0 && (t.bottomFillColor1 = e.mh), e.wh !== void 0 && (t.bottomFillColor2 = e.wh), t;
}
function a_(e) {
	let t = {
		open: e.Wt[0],
		high: e.Wt[1],
		low: e.Wt[2],
		close: e.Wt[3],
		time: e.th
	};
	return e.rg !== void 0 && (t.customValues = e.rg), t;
}
function o_(e) {
	let t = a_(e);
	return e.R !== void 0 && (t.color = e.R), t;
}
function s_(e) {
	let t = a_(e), { R: n, Ht: r, ah: i } = e;
	return n !== void 0 && (t.color = n), r !== void 0 && (t.borderColor = r), i !== void 0 && (t.wickColor = i), t;
}
function c_(e) {
	return {
		Area: r_,
		Line: n_,
		Baseline: i_,
		Histogram: n_,
		Bar: o_,
		Candlestick: s_,
		Custom: l_
	}[e];
}
function l_(e) {
	let t = e.th;
	return {
		...e.ce,
		time: t
	};
}
var u_ = {
	vertLine: {
		color: "#9598A1",
		width: 1,
		style: 3,
		visible: !0,
		labelVisible: !0,
		labelBackgroundColor: "#131722"
	},
	horzLine: {
		color: "#9598A1",
		width: 1,
		style: 3,
		visible: !0,
		labelVisible: !0,
		labelBackgroundColor: "#131722"
	},
	mode: 1,
	doNotSnapToHiddenSeriesIndices: !1
}, d_ = {
	vertLines: {
		color: "#D6DCDE",
		style: 0,
		visible: !0
	},
	horzLines: {
		color: "#D6DCDE",
		style: 0,
		visible: !0
	}
}, f_ = {
	background: {
		type: "solid",
		color: "#FFFFFF"
	},
	textColor: "#191919",
	fontSize: 12,
	fontFamily: If,
	panes: {
		enableResize: !0,
		separatorColor: "#E0E3EB",
		separatorHoverColor: "rgba(178, 181, 189, 0.2)"
	},
	attributionLogo: !0,
	colorSpace: "srgb",
	colorParsers: []
}, p_ = {
	autoScale: !0,
	mode: 0,
	invertScale: !1,
	alignLabels: !0,
	borderVisible: !0,
	borderColor: "#2B2B43",
	entireTextOnly: !1,
	visible: !1,
	ticksVisible: !1,
	scaleMargins: {
		bottom: .1,
		top: .2
	},
	minimumWidth: 0,
	ensureEdgeTickMarksVisible: !1,
	tickMarkDensity: 2.5
}, m_ = {
	rightOffset: 0,
	barSpacing: 6,
	minBarSpacing: .5,
	maxBarSpacing: 0,
	fixLeftEdge: !1,
	fixRightEdge: !1,
	lockVisibleTimeRangeOnResize: !1,
	rightBarStaysOnScroll: !1,
	borderVisible: !0,
	borderColor: "#2B2B43",
	visible: !0,
	timeVisible: !1,
	secondsVisible: !0,
	shiftVisibleRangeOnNewBar: !0,
	allowShiftVisibleRangeOnWhitespaceReplacement: !1,
	ticksVisible: !1,
	uniformDistribution: !1,
	minimumHeight: 0,
	allowBoldLabels: !0,
	ignoreWhitespaceIndices: !1,
	enableConflation: !1,
	conflationThresholdFactor: 1,
	precomputeConflationOnInit: !1,
	precomputeConflationPriority: "background"
};
function h_() {
	return {
		addDefaultPane: !0,
		hoveredSeriesOnTop: !0,
		width: 0,
		height: 0,
		autoSize: !1,
		layout: f_,
		crosshair: u_,
		grid: d_,
		overlayPriceScales: { ...p_ },
		leftPriceScale: {
			...p_,
			visible: !1
		},
		rightPriceScale: {
			...p_,
			visible: !0
		},
		defaultVisiblePriceScaleId: "right",
		timeScale: m_,
		localization: {
			locale: jh ? navigator.language : "",
			dateFormat: "dd MMM 'yy"
		},
		handleScroll: {
			mouseWheel: !0,
			pressedMouseMove: !0,
			horzTouchDrag: !0,
			vertTouchDrag: !0
		},
		handleScale: {
			axisPressedMouseMove: {
				time: !0,
				price: !0
			},
			axisDoubleClickReset: {
				time: !0,
				price: !0
			},
			mouseWheel: !0,
			pinch: !0
		},
		kineticScroll: {
			mouse: !1,
			touch: !0
		},
		trackingMode: { exitMode: 1 }
	};
}
var g_ = class {
	constructor(e, t, n) {
		this._v = e, this.Yg = t, this.Kg = n ?? 0;
	}
	applyOptions(e) {
		this._v.Qt().Bd(this.Yg, e, this.Kg);
	}
	options() {
		let e = this._v.Qt(), t = e.Ed(this.Yg, this.Kg);
		return t == null ? zm(e.N().overlayPriceScales) : t.Ft.N();
	}
	width() {
		return up(this.Yg) ? this._v.EM(this.Yg) : 0;
	}
	setVisibleRange(e) {
		this.setAutoScale(!1), this.Ki().Ko(new Mp(e.from, e.to));
	}
	getVisibleRange() {
		let e, t, n = this.Ki().lr();
		if (n === null) return null;
		if (this.Ki().ro()) {
			let r = this.Ki().b_(), i = uh(r);
			n = jm(n, this.Ki().ao()), e = Number((Math.round(n.Qe() / r) * r).toFixed(i)), t = Number((Math.round(n.tr() / r) * r).toFixed(i));
		} else e = n.Qe(), t = n.tr();
		return {
			from: e,
			to: t
		};
	}
	setAutoScale(e) {
		this.applyOptions({ autoScale: e });
	}
	Ki() {
		return $(this._v.Qt().Ed(this.Yg, this.Kg)).Ft;
	}
}, __ = class {
	constructor(e, t, n, r) {
		this._v = e, this.yt = n, this.Zg = t, this.Gg = r;
	}
	getHeight() {
		return this.yt.$t();
	}
	setHeight(e) {
		let t = this._v.Qt(), n = t.ff(this.yt);
		t.Nd(n, e);
	}
	getStretchFactor() {
		return this.yt.N_();
	}
	setStretchFactor(e) {
		this.yt.F_(e), this._v.Qt().Ta();
	}
	paneIndex() {
		return this._v.Qt().ff(this.yt);
	}
	moveTo(e) {
		let t = this.paneIndex();
		t !== e && (wf(e >= 0 && e < this._v.cv().length, "Invalid pane index"), this._v.Qt().Wd(t, e));
	}
	getSeries() {
		return this.yt.q_().map((e) => this.Zg(e)) ?? [];
	}
	getHTMLElement() {
		let e = this._v.cv();
		return e && e.length !== 0 && e[this.paneIndex()] ? e[this.paneIndex()].wv() : null;
	}
	attachPrimitive(e) {
		this.yt._l(e), e.attached && e.attached({
			chart: this.Gg,
			requestUpdate: () => this.yt.Qt().Ta()
		});
	}
	detachPrimitive(e) {
		this.yt.ul(e);
	}
	priceScale(e) {
		if (this.yt.z_(e) === null) throw Error(`Cannot find price scale with id: ${e}`);
		return new g_(this._v, e, this.paneIndex());
	}
	setPreserveEmptyPane(e) {
		this.yt.U_(e);
	}
	preserveEmptyPane() {
		return this.yt.j_();
	}
	addCustomSeries(e, t = {}, n = 0) {
		return this.Gg.addCustomSeries(e, t, n);
	}
	addSeries(e, t = {}) {
		return this.Gg.addSeries(e, t, this.paneIndex());
	}
}, v_ = {
	color: "#FF0000",
	price: 0,
	lineStyle: 2,
	lineWidth: 1,
	hitTestTolerance: 7,
	lineVisible: !0,
	axisLabelVisible: !0,
	title: "",
	axisLabelColor: "",
	axisLabelTextColor: ""
}, y_ = class {
	constructor(e) {
		this.ur = e;
	}
	applyOptions(e) {
		this.ur.mr(e);
	}
	options() {
		return this.ur.N();
	}
	Xg() {
		return this.ur;
	}
}, b_ = class {
	constructor(e, t, n, r, i, a) {
		this.Jg = new Df(), this.le = e, this.Qg = t, this.tb = n, this.yu = i, this.Gg = r, this.ib = a;
	}
	m() {
		this.Jg.m();
	}
	priceFormatter() {
		return this.le.el();
	}
	priceToCoordinate(e) {
		let t = this.le.Lt();
		return t === null ? null : this.le.Ft().Nt(e, t.Wt);
	}
	coordinateToPrice(e) {
		let t = this.le.Lt();
		return t === null ? null : this.le.Ft().Tn(e, t.Wt);
	}
	barsInLogicalRange(e) {
		if (e === null) return null;
		let t = new th(new Qm(e.from, e.to)).Hu(), n = this.le.Un();
		if (n.Gi()) return null;
		let r = n.Hn(t.Fa(), 1), i = n.Hn(t.bi(), -1), a = $(n.Dh()), o = $(n.Qn());
		if (r !== null && i !== null && r.$n > i.$n) return {
			barsBefore: e.from - a,
			barsAfter: o - e.to
		};
		let s = {
			barsBefore: r === null || r.$n === a ? e.from - a : r.$n - a,
			barsAfter: i === null || i.$n === o ? o - e.to : o - i.$n
		};
		return r !== null && i !== null && (s.from = r.th, s.to = i.th), s;
	}
	setData(e) {
		this.yu, this.le.Sh(), this.Qg.nb(this.le, e), this.sb("full");
	}
	update(e, t = !1) {
		this.le.Sh(), this.Qg.eb(this.le, e, t), this.sb("update");
	}
	pop(e = 1) {
		let t = this.Qg.rb(this.le, e);
		t.length !== 0 && this.sb("update");
		let n = c_(this.seriesType());
		return t.map((e) => n(e));
	}
	dataByIndex(e, t) {
		let n = this.le.Un().Hn(e, t);
		return n === null ? null : c_(this.seriesType())(n);
	}
	data() {
		let e = c_(this.seriesType());
		return this.le.Un().Eh().map((t) => e(t));
	}
	subscribeDataChanged(e) {
		this.Jg.i(e);
	}
	unsubscribeDataChanged(e) {
		this.Jg._(e);
	}
	applyOptions(e) {
		this.le.mr(e);
	}
	options() {
		return Nf(this.le.N());
	}
	priceScale() {
		return this.tb.priceScale(this.le.Ft().vl(), this.getPane().paneIndex());
	}
	createPriceLine(e) {
		let t = Of(Nf(v_), e);
		return new y_(this.le.Aa(t));
	}
	removePriceLine(e) {
		this.le.La(e.Xg());
	}
	priceLines() {
		return this.le.za().map((e) => new y_(e));
	}
	seriesType() {
		return this.le.Sh();
	}
	lastValueData(e) {
		let t = this.le.Le(e);
		return t.ze ? { noData: !0 } : {
			noData: !1,
			price: t.Mt,
			color: t.R
		};
	}
	attachPrimitive(e) {
		this.le._l(e), e.attached && e.attached({
			chart: this.Gg,
			series: this,
			requestUpdate: () => this.le.Qt().Ta(),
			horzScaleBehavior: this.yu
		});
	}
	detachPrimitive(e) {
		this.le.ul(e), e.detached && e.detached(), this.le.Qt().Ta();
	}
	getPane() {
		let e = this.le, t = $(this.le.Qt().Ks(e));
		return this.ib(t);
	}
	moveToPane(e) {
		this.le.Qt()._f(this.le, e);
	}
	seriesOrder() {
		let e = this.le.Qt().Ks(this.le);
		return e === null ? -1 : e.q_().indexOf(this.le);
	}
	setSeriesOrder(e) {
		let t = this.le.Qt().Ks(this.le);
		t !== null && t.pu(this.le, e);
	}
	sb(e) {
		this.Jg.v() && this.Jg.p(e);
	}
}, x_ = class {
	constructor(e, t, n) {
		this.hb = new Df(), this.Ju = new Df(), this.Uw = new Df(), this.sn = e, this.na = e.Et(), this.gM = t, this.na.Jc().i(this.ab.bind(this)), this.na.Qc().i(this.lb.bind(this)), this.gM.Gw().i(this.ob.bind(this)), this.yu = n;
	}
	m() {
		this.na.Jc().u(this), this.na.Qc().u(this), this.gM.Gw().u(this), this.hb.m(), this.Ju.m(), this.Uw.m();
	}
	scrollPosition() {
		return this.na.Oc();
	}
	scrollToPosition(e, t) {
		t ? this.na.Zc(e, 1e3) : this.sn.gs(e);
	}
	scrollToRealTime() {
		this.na.Kc();
	}
	getVisibleRange() {
		let e = this.na.xc();
		return e === null ? null : {
			from: e.from.originalTime,
			to: e.to.originalTime
		};
	}
	setVisibleRange(e) {
		let t = {
			from: this.yu.convertHorzItemToInternal(e.from),
			to: this.yu.convertHorzItemToInternal(e.to)
		}, n = this.na.kc(t);
		this.sn.af(n);
	}
	getVisibleLogicalRange() {
		let e = this.na.Sc();
		return e === null ? null : {
			from: e.Fa(),
			to: e.bi()
		};
	}
	setVisibleLogicalRange(e) {
		wf(e.from <= e.to, "The from index cannot be after the to index."), this.sn.af(e);
	}
	resetTimeScale() {
		this.sn.ws();
	}
	fitContent() {
		this.sn.sd();
	}
	logicalToCoordinate(e) {
		let t = this.sn.Et();
		return t.Gi() ? null : t.jt(e);
	}
	coordinateToLogical(e) {
		return this.na.Gi() ? null : this.na.Vc(e);
	}
	timeToIndex(e, t) {
		let n = this.yu.convertHorzItemToInternal(e);
		return this.na.Mc(n, t);
	}
	timeToCoordinate(e) {
		let t = this.timeToIndex(e, !1);
		return t === null ? null : this.na.jt(t);
	}
	coordinateToTime(e) {
		let t = this.sn.Et(), n = t.Vc(e), r = t.en(n);
		return r === null ? null : r.originalTime;
	}
	width() {
		return this.gM.Mv().width;
	}
	height() {
		return this.gM.Mv().height;
	}
	subscribeVisibleTimeRangeChange(e) {
		this.hb.i(e);
	}
	unsubscribeVisibleTimeRangeChange(e) {
		this.hb._(e);
	}
	subscribeVisibleLogicalRangeChange(e) {
		this.Ju.i(e);
	}
	unsubscribeVisibleLogicalRangeChange(e) {
		this.Ju._(e);
	}
	subscribeSizeChange(e) {
		this.Uw.i(e);
	}
	unsubscribeSizeChange(e) {
		this.Uw._(e);
	}
	applyOptions(e) {
		this.na.mr(e);
	}
	options() {
		return {
			...Nf(this.na.N()),
			barSpacing: this.na.wl()
		};
	}
	ab() {
		this.hb.v() && this.hb.p(this.getVisibleRange());
	}
	lb() {
		this.Ju.v() && this.Ju.p(this.getVisibleLogicalRange());
	}
	ob(e) {
		this.Uw.p(e.width, e.height);
	}
};
function S_(e) {
	return function(e) {
		if (Mf(e.handleScale)) {
			let t = e.handleScale;
			e.handleScale = {
				axisDoubleClickReset: {
					time: t,
					price: t
				},
				axisPressedMouseMove: {
					time: t,
					price: t
				},
				mouseWheel: t,
				pinch: t
			};
		} else if (e.handleScale !== void 0) {
			let { axisPressedMouseMove: t, axisDoubleClickReset: n } = e.handleScale;
			Mf(t) && (e.handleScale.axisPressedMouseMove = {
				time: t,
				price: t
			}), Mf(n) && (e.handleScale.axisDoubleClickReset = {
				time: n,
				price: n
			});
		}
		let t = e.handleScroll;
		Mf(t) && (e.handleScroll = {
			horzTouchDrag: t,
			vertTouchDrag: t,
			mouseWheel: t,
			pressedMouseMove: t
		});
	}(e), e;
}
var C_ = class {
	constructor(e, t, n) {
		this._b = /* @__PURE__ */ new Map(), this.ub = /* @__PURE__ */ new Map(), this.cb = new Df(), this.fb = new Df(), this.pb = new Df(), this.vd = /* @__PURE__ */ new WeakMap(), this.mb = new Mg(t);
		let r = n === void 0 ? Nf(h_()) : Of(Nf(h_()), S_(n));
		this.wb = t, this._v = new hg(e, r, t), this._v.bw().i((e) => {
			this.cb.v() && this.cb.p(this.Mb(e()));
		}, this), this._v.Sw().i((e) => {
			this.fb.v() && this.fb.p(this.Mb(e()));
		}, this), this._v.Ld().i((e) => {
			this.pb.v() && this.pb.p(this.Mb(e()));
		}, this);
		let i = this._v.Qt();
		this.gb = new x_(i, this._v.yM(), this.wb);
	}
	remove() {
		this._v.bw().u(this), this._v.Sw().u(this), this._v.Ld().u(this), this.gb.m(), this._v.m(), this._b.clear(), this.ub.clear(), this.cb.m(), this.fb.m(), this.pb.m(), this.mb.m();
	}
	resize(e, t, n) {
		this.autoSizeActive() || this._v.SM(e, t, n);
	}
	addCustomSeries(e, t = {}, n = 0) {
		let r = ((e) => ({
			type: "Custom",
			isBuiltIn: !1,
			defaultOptions: {
				...$g,
				...e.defaultOptions()
			},
			bb: e_,
			Sb: e
		}))(Ef(e));
		return this.xb(r, t, n);
	}
	addSeries(e, t = {}, n = 0) {
		return this.xb(e, t, n);
	}
	removeSeries(e) {
		let t = Tf(this._b.get(e)), n = this.mb.rf(t);
		this._v.Qt().rf(t), this.Cb(n), this._b.delete(e), this.ub.delete(t);
	}
	nb(e, t) {
		this.Cb(this.mb.dg(e, t));
	}
	eb(e, t, n) {
		this.Cb(this.mb.Mg(e, t, n));
	}
	rb(e, t) {
		let [n, r] = this.mb.Sg(e, t);
		return n.length !== 0 && this.Cb(r), n;
	}
	subscribeClick(e) {
		this.cb.i(e);
	}
	unsubscribeClick(e) {
		this.cb._(e);
	}
	subscribeCrosshairMove(e) {
		this.pb.i(e);
	}
	unsubscribeCrosshairMove(e) {
		this.pb._(e);
	}
	subscribeDblClick(e) {
		this.fb.i(e);
	}
	unsubscribeDblClick(e) {
		this.fb._(e);
	}
	priceScale(e, t = 0) {
		return new g_(this._v, e, t);
	}
	timeScale() {
		return this.gb;
	}
	applyOptions(e) {
		this._v.mr(S_(e));
	}
	options() {
		return this._v.N();
	}
	takeScreenshot(e = !1, t = !1) {
		let n, r;
		try {
			t || (n = this._v.Qt().N().crosshair.mode, this._v.mr({ crosshair: { mode: 2 } })), r = this._v.VM(e);
		} finally {
			t || n === void 0 || this._v.Qt().mr({ crosshair: { mode: n } });
		}
		return r;
	}
	addPane(e = !1) {
		let t = this._v.Qt().pf();
		return t.U_(e), this.yb(t);
	}
	removePane(e) {
		this._v.Qt().Od(e);
	}
	swapPanes(e, t) {
		this._v.Qt().Fd(e, t);
	}
	autoSizeActive() {
		return this._v.TM();
	}
	chartElement() {
		return this._v.xv();
	}
	panes() {
		return this._v.Qt().Zn().map((e) => this.yb(e));
	}
	paneSize(e = 0) {
		let t = this._v.NM(e);
		return {
			height: t.height,
			width: t.width
		};
	}
	setCrosshairPosition(e, t, n) {
		let r = this._b.get(n);
		if (r === void 0) return;
		let i = this._v.Qt().Ks(r);
		i !== null && this._v.Qt().Jd(e, t, i);
	}
	clearCrosshairPosition() {
		this._v.Qt().Qd(!0);
	}
	horzBehaviour() {
		return this.wb;
	}
	xb(e, t = {}, n = 0) {
		wf(e.bb !== void 0), function(e) {
			if (e === void 0 || e.type === "custom") return;
			let t = e;
			t.minMove !== void 0 && t.precision === void 0 && (t.precision = uh(t.minMove));
		}(t.priceFormat), e.type === "Candlestick" && function(e) {
			e.borderColor !== void 0 && (e.borderUpColor = e.borderColor, e.borderDownColor = e.borderColor), e.wickColor !== void 0 && (e.wickUpColor = e.wickColor, e.wickDownColor = e.wickColor);
		}(t);
		let r = Of(Nf(yf), Nf(e.defaultOptions), t), i = e.bb, a = new pm(this._v.Qt(), e.type, r, i, e.Sb);
		this._v.Qt().sf(a, n);
		let o = new b_(a, this, this, this, this.wb, (e) => this.yb(e));
		return this._b.set(o, a), this.ub.set(a, o), o;
	}
	Cb(e) {
		let t = this._v.Qt();
		for (let t of e.q_.keys()) t.Va();
		t.tf(e.Et.Dc, e.Et.Pg, e.Et.kg), e.q_.forEach((e, t) => t.ht(e.ce, e.yg)), t.Et().dc(), t.Lc();
	}
	Pb(e) {
		return Tf(this.ub.get(e));
	}
	kb(e) {
		return e !== void 0 && this.ub.has(e) ? this.Pb(e) : void 0;
	}
	Mb(e) {
		let t = /* @__PURE__ */ new Map();
		e.sg.forEach((e, n) => {
			let r = n.Sh(), i = c_(r)(e);
			if (r !== "Custom") wf(vg(i));
			else {
				let e = n.dl();
				wf(!e || !1 === e(i));
			}
			t.set(this.Pb(n), i);
		});
		let n = this.kb(e.ZM), r = e.XM === void 0 ? void 0 : {
			type: e.XM.ds,
			sourceKind: e.XM.JM,
			objectKind: e.XM.QM,
			series: this.kb(e.XM.q_),
			objectId: e.XM.tg,
			paneIndex: e.XM.ig
		};
		return {
			time: e.th,
			logical: e.$n,
			point: e.ng,
			paneIndex: e.ig,
			hoveredInfo: r,
			hoveredSeries: n,
			hoveredObjectId: e.GM,
			seriesData: t,
			sourceEvent: e.eg
		};
	}
	yb(e) {
		let t = this.vd.get(e);
		return t || (t = new __(this._v, (e) => this.Pb(e), e, this), this.vd.set(e, t)), t;
	}
};
function w_(e) {
	if (jf(e)) {
		let t = document.getElementById(e);
		return wf(t !== null, `Cannot find element in DOM with id=${e}`), t;
	}
	return e;
}
function T_(e, t, n) {
	let r = new C_(w_(e), t, n);
	return t.setOptions(r.options()), r;
}
function E_(e, t) {
	return T_(e, new Ah(), Ah.Vf(t));
}
function D_(e, t, n, r) {
	return Math.hypot(n - e, r - t);
}
function O_(e, t, n, r, i, a, o, s = 0) {
	if (t.length === 0 || r.from >= t.length || r.to <= 0) return;
	let { context: c, horizontalPixelRatio: l, verticalPixelRatio: u } = e, d = t[r.from], f = a(e, d), p = d;
	if (r.to - r.from < 2) {
		let t = i / 2;
		c.beginPath();
		let n = {
			_t: d._t - t,
			ut: d.ut
		}, r = {
			_t: d._t + t,
			ut: d.ut
		};
		c.moveTo(n._t * l, n.ut * u), c.lineTo(r._t * l, r.ut * u), o(e, f, n, r);
	} else {
		let i = s > 0, m = 0, h = (t, n) => {
			if (o(e, f, p, n), c.beginPath(), f = t, p = n, i) {
				let e = m % s;
				c.lineDashOffset = e, m = e;
			}
		}, g = p;
		c.beginPath(), c.moveTo(d._t * l, d.ut * u);
		for (let o = r.from + 1; o < r.to; ++o) {
			g = t[o];
			let r = g._t * l, s = g.ut * u, d = a(e, g);
			switch (n) {
				case 0:
					if (c.lineTo(r, s), i) {
						let e = t[o - 1], n = e._t * l, i = e.ut * u;
						m += D_(n, i, r, s);
					}
					break;
				case 1: {
					let e = t[o - 1], n = e.ut * u;
					c.lineTo(r, n), i && (m += Math.abs(g._t - e._t) * l), d !== f && (h(d, g), c.lineTo(r, n)), c.lineTo(r, s), i && (m += Math.abs(g.ut - e.ut) * u);
					break;
				}
				case 2: {
					let [e, n] = M_(t, o), a = e._t * l, d = e.ut * u, f = n._t * l, p = n.ut * u;
					if (c.bezierCurveTo(a, d, f, p, r, s), i) {
						let e = t[o - 1], n = e._t * l, i = e.ut * u, c = D_(n, i, r, s), h = D_(n, i, a, d) + D_(a, d, f, p) + D_(f, p, r, s);
						m += (c + h) / 2;
					}
					break;
				}
			}
			n !== 1 && d !== f && (h(d, g), c.moveTo(r, s));
		}
		(p !== g || p === g && n === 1) && o(e, f, p, g), i && (c.lineDashOffset = 0);
	}
}
function k_(e, t) {
	let n = t._t - e._t;
	return n === 0 ? 0 : (t.ut - e.ut) / n;
}
function A_(e, t, n, r) {
	return t === null ? r : function(e, t, n, r) {
		if (e <= 0 || n <= 0) return 0;
		let i = (t * n + r * e) / (e + n);
		return (Math.sign(t) + Math.sign(r)) * Math.min(Math.abs(t), Math.abs(r), .5 * Math.abs(i));
	}(Math.abs(t._t - e._t), k_(e, t), n, r);
}
function j_(e, t, n) {
	return {
		_t: e._t + t,
		ut: e.ut + t * n
	};
}
function M_(e, t) {
	let n = e[t - 1], r = e[t], i = r._t - n._t, a = k_(n, r), o = t > 1 ? e[t - 2] : null, s = t < e.length - 1 ? e[t + 1] : null, c = i / 3;
	return [j_(n, c, A_(n, o, i, a)), j_(r, -c, A_(r, s, i, a))];
}
function N_(e, t) {
	let n = e.context;
	n.strokeStyle = t, n.stroke();
}
var P_ = class extends Uf {
	constructor() {
		super(...arguments), this.rt = null;
	}
	ht(e) {
		this.rt = e;
	}
	et(e) {
		if (this.rt === null) return;
		let { ot: t, lt: n, Tb: r, Rb: i, ct: a, Zt: o, Db: s } = this.rt;
		if (n === null) return;
		let c = e.context;
		c.lineCap = "butt", c.lineWidth = a * e.verticalPixelRatio;
		let l = Sf(c, o);
		c.lineJoin = "round";
		let u = this.Ib.bind(this), d = function(e) {
			return e.reduce((e, t) => e + t, 0);
		}(l);
		i !== void 0 && O_(e, t, i, n, r, u, N_, d), s && function(e, t, n, r, i) {
			if (r.to - r.from <= 0) return;
			let { horizontalPixelRatio: a, verticalPixelRatio: o, context: s } = e, c = null, l = Math.max(1, Math.floor(a)) % 2 / 2, u = n * o + l;
			for (let n = r.to - 1; n >= r.from; --n) {
				let r = t[n];
				if (r) {
					let t = i(e, r);
					t !== c && (c !== null && s.fill(), s.beginPath(), s.fillStyle = t, c = t);
					let n = Math.round(r._t * a) + l, d = r.ut * o;
					s.moveTo(n, d), s.arc(n, d, u, 0, 2 * Math.PI);
				}
			}
			s.fill();
		}(e, t, s, n, u);
	}
}, F_ = class extends P_ {
	Ib(e, t) {
		return t.vt;
	}
};
function I_(e, t, n, r, i) {
	let a = 1 - i;
	return a * a * a * e + 3 * a * a * i * t + 3 * a * i * i * n + i * i * i * r;
}
function L_(e, t, n, r, i, a, o, s) {
	switch (i) {
		case 1: {
			let i = Bg(e, t, n._t, n.ut, r._t, n.ut), a = Bg(e, t, r._t, n.ut, r._t, r.ut), o = Math.min(i, a);
			return o <= s ? o : null;
		}
		case 2: {
			let [i, c] = M_(a, o), l = function(e, t, n) {
				let r = Infinity, i = n[0];
				for (let a = 1; a <= 12; a++) {
					let o = a / 12, s = {
						_t: I_(n[0]._t, n[1]._t, n[2]._t, n[3]._t, o),
						ut: I_(n[0].ut, n[1].ut, n[2].ut, n[3].ut, o)
					};
					r = Math.min(r, Bg(e, t, i._t, i.ut, s._t, s.ut)), i = s;
				}
				return r;
			}(e, t, [
				n,
				i,
				c,
				r
			]);
			return l <= s ? l : null;
		}
		default: {
			let i = Bg(e, t, n._t, n.ut, r._t, r.ut);
			return i <= s ? i : null;
		}
	}
}
var R_ = class extends Jg {
	constructor(e, t) {
		super(e, t, !0);
	}
	Hg(e, t, n) {
		t.Ic(this.Ig, Ff(this.Vg)), e.Xo(this.Ig, n, Ff(this.Vg));
	}
	Vb(e, t) {
		return {
			wt: e,
			Mt: t,
			_t: NaN,
			ut: NaN
		};
	}
	Fg() {
		let e = this.le.xa();
		this.Ig = this.le.$a().Eh().map((t) => {
			let n;
			if ((t.Gr ?? 1) > 1) {
				let e = t.Wt[1], r = t.Wt[2], i = t.Wt[3];
				n = Math.abs(e - i) > Math.abs(r - i) ? e : r;
			} else n = t.Wt[3];
			return this.Bb(t.$n, n, e);
		});
	}
}, z_ = class extends R_ {
	zg(e, t) {
		let n = this.le.N();
		return function(e, t, n, r, i, a, o, s = 0, c = 0) {
			if (t === null || t.from >= t.to || e.length === 0) return null;
			let l = Math.max(a / 2, o ?? 0) + c, u = Infinity;
			if (o !== void 0) {
				let i = o + c, a = Ig(e, n - i, t.from, t.to), s = Lg(e, n + i, a, t.to);
				for (let t = a; t < s; t++) {
					let i = e[t];
					if (!zg(n, i._t, i._t, o + c)) continue;
					let a = Math.hypot(n - i._t, r - i.ut);
					a <= o + c && (u = Math.min(u, a));
				}
			}
			if (t.to - t.from < 2) {
				let i = e[t.from], a = Math.max(s / 2, l), o = Bg(n, r, i._t - a, i.ut, i._t + a, i.ut);
				return o <= l && (u = Math.min(u, o)), Number.isFinite(u) ? Rg(u, 2, "series-point") : null;
			}
			let d = Infinity, f = Ig(e, n - l, t.from, t.to), p = Lg(e, n + l, f, t.to), m = Math.max(t.from + 1, f), h = Math.min(t.to, p + 1);
			for (let t = m; t < h; t++) {
				let a = e[t - 1], o = e[t];
				if (!zg(n, a._t, o._t, l)) continue;
				let s = L_(n, r, a, o, i, e, t, l);
				s !== null && (d = Math.min(d, s));
			}
			return Number.isFinite(u) ? Rg(u, 2, "series-point") : Number.isFinite(d) ? Rg(d, 1, "series-line") : null;
		}(this.Ig, this.Vg, e, t, n.lineType, n.lineVisible ? n.lineWidth : 1, n.pointMarkersVisible ? n.pointMarkersRadius || n.lineWidth / 2 + 2 : void 0, this.oe.Et().wl(), n.hitTestTolerance);
	}
}, B_ = class extends z_ {
	constructor() {
		super(...arguments), this.Lg = new F_();
	}
	Bb(e, t, n) {
		return {
			...this.Vb(e, t),
			...n.xh(e)
		};
	}
	Ug() {
		let e = this.le.N(), t = {
			ot: this.Ig,
			Zt: e.lineStyle,
			Rb: e.lineVisible ? e.lineType : void 0,
			ct: e.lineWidth,
			Db: e.pointMarkersVisible ? e.pointMarkersRadius || e.lineWidth / 2 + 2 : void 0,
			lt: this.Vg,
			Tb: this.oe.Et().wl()
		};
		this.Lg.ht(t);
	}
}, V_ = {
	type: "Line",
	isBuiltIn: !0,
	defaultOptions: {
		color: "#2196f3",
		lineStyle: 0,
		lineWidth: 3,
		lineType: 0,
		lineVisible: !0,
		crosshairMarkerVisible: !0,
		crosshairMarkerRadius: 4,
		crosshairMarkerBorderColor: "",
		crosshairMarkerBorderWidth: 2,
		crosshairMarkerBackgroundColor: "",
		lastPriceAnimation: 0,
		pointMarkersVisible: !1
	},
	bb: (e, t) => new B_(e, t)
}, H_ = class extends Jg {
	constructor(e, t) {
		super(e, t, !1);
	}
	zg(e, t) {
		return Wg(this.Ig, this.Vg, e, t, this.oe.Et().wl(), this.le.N().hitTestTolerance, (e, t) => {
			t[0] = e.i_, t[1] = e.n_;
		});
	}
	Hg(e, t, n) {
		t.Ic(this.Ig, Ff(this.Vg)), e.Qo(this.Ig, n, Ff(this.Vg));
	}
	wS(e, t, n) {
		return {
			wt: e,
			qr: t.Wt[0],
			Yr: t.Wt[1],
			Kr: t.Wt[2],
			Zr: t.Wt[3],
			_t: NaN,
			t_: NaN,
			i_: NaN,
			n_: NaN,
			s_: NaN
		};
	}
	Fg() {
		let e = this.le.xa();
		this.Ig = this.le.$a().Eh().map((t) => this.Bb(t.$n, t, e));
	}
}, U_ = class extends Uf {
	constructor() {
		super(...arguments), this.qt = null, this.dS = 0;
	}
	ht(e) {
		this.qt = e;
	}
	et(e) {
		if (this.qt === null || this.qt.Un.length === 0 || this.qt.lt === null) return;
		let { horizontalPixelRatio: t } = e;
		this.dS = function(e, t) {
			if (e >= 2.5 && e <= 4) return Math.floor(3 * t);
			let n = 1 - .2 * Math.atan(Math.max(4, e) - 4) / (.5 * Math.PI), r = Math.floor(e * n * t), i = Math.floor(e * t);
			return Math.max(Math.floor(t), Math.min(r, i));
		}(this.qt.wl, t), this.dS >= 2 && Math.floor(t) % 2 != this.dS % 2 && this.dS--;
		let n = this.qt.Un;
		this.qt.MS && this.gS(e, n, this.qt.lt), this.qt.gi && this.Lm(e, n, this.qt.lt);
		let r = this.bS(t);
		(!this.qt.gi || this.dS > 2 * r) && this.SS(e, n, this.qt.lt);
	}
	gS(e, t, n) {
		if (this.qt === null) return;
		let { context: r, horizontalPixelRatio: i, verticalPixelRatio: a } = e, o = "", s = Math.min(Math.floor(i), Math.floor(this.qt.wl * i));
		s = Math.max(Math.floor(i), Math.min(s, this.dS));
		let c = Math.floor(.5 * s), l = null;
		for (let e = n.from; e < n.to; e++) {
			let n = t[e];
			n.hh !== o && (r.fillStyle = n.hh, o = n.hh);
			let u = Math.round(Math.min(n.t_, n.s_) * a), d = Math.round(Math.max(n.t_, n.s_) * a), f = Math.round(n.i_ * a), p = Math.round(n.n_ * a), m = Math.round(i * n._t) - c, h = m + s - 1;
			l !== null && (m = Math.max(l + 1, m), m = Math.min(m, h));
			let g = h - m + 1;
			r.fillRect(m, f, g, u - f), r.fillRect(m, d + 1, g, p - d), l = h;
		}
	}
	bS(e) {
		let t = Math.floor(1 * e);
		this.dS <= 2 * t && (t = Math.floor(.5 * (this.dS - 1)));
		let n = Math.max(Math.floor(e), t);
		return this.dS <= 2 * n ? Math.max(Math.floor(e), Math.floor(1 * e)) : n;
	}
	Lm(e, t, n) {
		if (this.qt === null) return;
		let { context: r, horizontalPixelRatio: i, verticalPixelRatio: a } = e, o = "", s = this.bS(i), c = null;
		for (let e = n.from; e < n.to; e++) {
			let n = t[e];
			n.rh !== o && (r.fillStyle = n.rh, o = n.rh);
			let l = Math.round(n._t * i) - Math.floor(.5 * this.dS), u = l + this.dS - 1, d = Math.round(Math.min(n.t_, n.s_) * a), f = Math.round(Math.max(n.t_, n.s_) * a);
			if (c !== null && (l = Math.max(c + 1, l), l = Math.min(l, u)), this.qt.wl * i > 2 * s) Xf(r, l, d, u - l + 1, f - d + 1, s);
			else {
				let e = u - l + 1;
				r.fillRect(l, d, e, f - d + 1);
			}
			c = u;
		}
	}
	SS(e, t, n) {
		if (this.qt === null) return;
		let { context: r, horizontalPixelRatio: i, verticalPixelRatio: a } = e, o = "", s = this.bS(i);
		for (let e = n.from; e < n.to; e++) {
			let n = t[e], c = Math.round(Math.min(n.t_, n.s_) * a), l = Math.round(Math.max(n.t_, n.s_) * a), u = Math.round(n._t * i) - Math.floor(.5 * this.dS), d = u + this.dS - 1;
			if (n.eh !== o) {
				let e = n.eh;
				r.fillStyle = e, o = e;
			}
			this.qt.gi && (u += s, c += s, d -= s, l -= s), c > l || r.fillRect(u, c, d - u + 1, l - c + 1);
		}
	}
}, W_ = class extends H_ {
	constructor() {
		super(...arguments), this.Lg = new U_();
	}
	Bb(e, t, n) {
		return {
			...this.wS(e, t, n),
			...n.xh(e)
		};
	}
	Ug() {
		let e = this.le.N();
		this.Lg.ht({
			Un: this.Ig,
			wl: this.oe.Et().wl(),
			MS: e.wickVisible,
			gi: e.borderVisible,
			lt: this.Vg
		});
	}
}, G_ = {
	type: "Candlestick",
	isBuiltIn: !0,
	defaultOptions: {
		upColor: "#26a69a",
		downColor: "#ef5350",
		wickVisible: !0,
		borderVisible: !0,
		borderColor: "#378658",
		borderUpColor: "#26a69a",
		borderDownColor: "#ef5350",
		wickColor: "#737375",
		wickUpColor: "#26a69a",
		wickDownColor: "#ef5350"
	},
	bb: (e, t) => new W_(e, t)
}, K_ = class {
	constructor(e, t) {
		this.le = e, this.Qh = t, this.TS();
	}
	detach() {
		this.le.detachPrimitive(this.Qh);
	}
	getSeries() {
		return this.le;
	}
	applyOptions(e) {
		this.Qh && this.Qh.mr && this.Qh.mr(e);
	}
	TS() {
		this.le.attachPrimitive(this.Qh);
	}
}, q_ = {
	autoScale: !0,
	zOrder: "normal"
};
function J_(e, t) {
	return ym(Math.min(Math.max(e, 12), 30) * t);
}
function Y_(e, t) {
	return ym(Math.max(t, 12) * (e === "circle" ? .8 : e === "square" ? .7 : 1));
}
function X_(e) {
	return function(e) {
		let t = Math.ceil(e);
		return t % 2 == 0 ? t : t - 1;
	}(J_(e, 1));
}
function Z_(e) {
	return Math.max(J_(e, .1), 3);
}
function Q_(e, t, n) {
	return t ? e : n ? Math.ceil(e / 2) : 0;
}
function $_(e, t, n, r) {
	let i = (Y_("arrowUp", r) - 1) / 2 * n.XS, a = (ym(r / 2) - 1) / 2 * n.XS;
	t.beginPath(), e ? (t.moveTo(n._t - i, n.ut), t.lineTo(n._t, n.ut - i), t.lineTo(n._t + i, n.ut), t.lineTo(n._t + a, n.ut), t.lineTo(n._t + a, n.ut + i), t.lineTo(n._t - a, n.ut + i), t.lineTo(n._t - a, n.ut)) : (t.moveTo(n._t - i, n.ut), t.lineTo(n._t, n.ut + i), t.lineTo(n._t + i, n.ut), t.lineTo(n._t + a, n.ut), t.lineTo(n._t + a, n.ut - i), t.lineTo(n._t - a, n.ut - i), t.lineTo(n._t - a, n.ut)), t.fill();
}
function ev(e, t, n, r, i, a) {
	let o = (Y_("arrowUp", r) - 1) / 2, s = (ym(r / 2) - 1) / 2;
	return i >= t - s - 2 && i <= t + s + 2 && a >= (e ? n : n - o) - 2 && a <= (e ? n + o : n) + 2 || (() => {
		if (i < t - o - 3 || i > t + o + 3 || a < (e ? n - o - 3 : n) || a > (e ? n : n + o + 3)) return !1;
		let r = Math.abs(i - t);
		return Math.abs(a - n) + 3 >= r / 2;
	})();
}
var tv = class {
	constructor() {
		this.qt = null, this.$s = new yp(), this.F = -1, this.W = "", this._m = "", this.JS = "normal";
	}
	ht(e) {
		this.qt = e;
	}
	js(e, t, n) {
		this.F === e && this.W === t || (this.F = e, this.W = t, this._m = Lf(e, t), this.$s.Os()), this.JS = n;
	}
	Qs(e, t) {
		if (this.qt === null || this.qt.lt === null) return null;
		for (let n = this.qt.lt.from; n < this.qt.lt.to; n++) {
			let r = this.qt.ot[n];
			if (r && rv(r, e, t)) return {
				zOrder: "normal",
				externalId: r.ie ?? "",
				itemType: "marker"
			};
		}
		return null;
	}
	draw(e) {
		this.JS !== "aboveSeries" && e.useBitmapCoordinateSpace((e) => {
			this.et(e);
		});
	}
	drawBackground(e) {
		this.JS === "aboveSeries" && e.useBitmapCoordinateSpace((e) => {
			this.et(e);
		});
	}
	et({ context: e, horizontalPixelRatio: t, verticalPixelRatio: n }) {
		if (this.qt !== null && this.qt.lt !== null) {
			e.textBaseline = "middle", e.font = this._m;
			for (let r = this.qt.lt.from; r < this.qt.lt.to; r++) {
				let i = this.qt.ot[r];
				i.ri !== void 0 && (i.ri.nn = this.$s.Ii(e, i.ri.QS), i.ri.$t = this.F, i.ri._t = i._t - i.ri.nn / 2), nv(i, e, t, n);
			}
		}
	}
};
function nv(e, t, n, r) {
	t.fillStyle = e.R, e.ri !== void 0 && function(e, t, n, r, i, a) {
		e.save(), e.scale(i, a), e.fillText(t, n, r), e.restore();
	}(t, e.ri.QS, e.ri._t, e.ri.ut, n, r), function(e, t, n) {
		if (e.Rh !== 0) {
			switch (e.tx) {
				case "arrowDown":
					$_(!1, t, n, e.Rh);
					return;
				case "arrowUp":
					$_(!0, t, n, e.Rh);
					return;
				case "circle":
					(function(e, t, n) {
						let r = (Y_("circle", n) - 1) / 2;
						e.beginPath(), e.arc(t._t, t.ut, r * t.XS, 0, 2 * Math.PI, !1), e.fill();
					})(t, n, e.Rh);
					return;
				case "square":
					(function(e, t, n) {
						let r = Y_("square", n), i = (r - 1) * t.XS / 2, a = t._t - i, o = t.ut - i;
						e.fillRect(a, o, r * t.XS, r * t.XS);
					})(t, n, e.Rh);
					return;
			}
			e.tx;
		}
	}(e, t, function(e, t, n) {
		let r = Math.max(1, Math.floor(t)) % 2 / 2;
		return {
			_t: Math.round(e._t * t) + r,
			ut: e.ut * n,
			XS: t
		};
	}(e, n, r));
}
function rv(e, t, n) {
	return !(e.ri === void 0 || !function(e, t, n, r, i, a) {
		let o = r / 2;
		return i >= e && i <= e + n && a >= t - o && a <= t + o;
	}(e.ri._t, e.ri.ut, e.ri.nn, e.ri.$t, t, n)) || function(e, t, n) {
		if (e.Rh === 0) return !1;
		switch (e.tx) {
			case "arrowDown": return ev(!0, e._t, e.ut, e.Rh, t, n);
			case "arrowUp": return ev(!1, e._t, e.ut, e.Rh, t, n);
			case "circle": return function(e, t, n, r, i) {
				let a = 2 + Y_("circle", n) / 2, o = e - r, s = t - i;
				return Math.sqrt(o * o + s * s) <= a;
			}(e._t, e.ut, e.Rh, t, n);
			case "square": return function(e, t, n, r, i) {
				let a = Y_("square", n), o = (a - 1) / 2, s = e - o, c = t - o;
				return r >= s && r <= s + a && i >= c && i <= c + a;
			}(e._t, e.ut, e.Rh, t, n);
		}
	}(e, t, n);
}
function iv(e) {
	return e === "atPriceTop" || e === "atPriceBottom" || e === "atPriceMiddle";
}
function av(e, t, n, r, i, a, o, s) {
	let c = function(e, t, n) {
		if (iv(t.position) && t.price !== void 0) return t.price;
		if ("value" in (r = e) && typeof r.value == "number") return e.value;
		var r;
		if (function(e) {
			return "open" in e && "high" in e && "low" in e && "close" in e;
		}(e)) {
			if (t.position === "inBar") return e.close;
			if (t.position === "aboveBar") return n ? e.low : e.high;
			if (t.position === "belowBar") return n ? e.high : e.low;
		}
	}(n, t, o.priceScale().options().invertScale);
	if (c === void 0) return;
	let l = iv(t.position), u = s.timeScale(), d = kf(t.size) ? Math.max(t.size, 0) : 1, f = X_(u.options().barSpacing) * d, p = f / 2;
	switch (e.Rh = f, t.position) {
		case "inBar":
		case "atPriceMiddle":
			e.ut = $(o.priceToCoordinate(c)), e.ri !== void 0 && (e.ri.ut = e.ut + p + a + .6 * i);
			return;
		case "aboveBar":
		case "atPriceTop": {
			let t = l ? 0 : r.ix;
			e.ut = $(o.priceToCoordinate(c)) - p - t, e.ri !== void 0 && (e.ri.ut = e.ut - p - .6 * i, r.ix += 1.2 * i), l || (r.ix += f + a);
			return;
		}
		case "belowBar":
		case "atPriceBottom": {
			let t = l ? 0 : r.nx;
			e.ut = $(o.priceToCoordinate(c)) + p + t, e.ri !== void 0 && (e.ri.ut = e.ut + p + a + .6 * i, r.nx += 1.2 * i), l || (r.nx += f + a);
			return;
		}
	}
}
var ov = class {
	constructor(e, t, n) {
		this.sx = [], this.xt = !0, this.hx = !0, this.Xt = new tv(), this.Re = e, this.Qv = t, this.qt = {
			ot: [],
			lt: null
		}, this.yn = n;
	}
	renderer() {
		if (!this.Re.options().visible) return null;
		this.xt && this.Ag();
		let e = this.Qv.options().layout;
		return this.Xt.js(e.fontSize, e.fontFamily, this.yn.zOrder), this.Xt.ht(this.qt), this.Xt;
	}
	lx(e) {
		this.sx = e, this.Pt("data");
	}
	Pt(e) {
		this.xt = !0, e === "data" && (this.hx = !0);
	}
	ox(e) {
		this.xt = !0, this.yn = e;
	}
	zOrder() {
		return this.yn.zOrder === "aboveSeries" ? "top" : this.yn.zOrder;
	}
	Ag() {
		let e = this.Qv.timeScale(), t = this.sx;
		this.hx &&= (this.qt.ot = t.map((e) => ({
			wt: e.time,
			_t: 0,
			ut: 0,
			Rh: 0,
			tx: e.shape,
			R: e.color,
			ie: e.id,
			_x: e._x,
			ri: void 0
		})), !1);
		let n = this.Qv.options().layout;
		this.qt.lt = null;
		let r = e.getVisibleLogicalRange();
		if (r === null) return;
		let i = new Qm(Math.floor(r.from), Math.ceil(r.to));
		if (this.Re.dataByIndex(0, 1) === null || this.qt.ot.length === 0) return;
		let a = NaN, o = Z_(e.options().barSpacing), s = {
			ix: o,
			nx: o
		};
		this.qt.lt = qg(this.qt.ot, i, !0);
		for (let r = this.qt.lt.from; r < this.qt.lt.to; r++) {
			let i = t[r];
			i.time !== a && (s.ix = o, s.nx = o, a = i.time);
			let c = this.qt.ot[r];
			c._t = $(e.logicalToCoordinate(i.time)), i.text !== void 0 && i.text.length > 0 && (c.ri = {
				QS: i.text,
				_t: 0,
				ut: 0,
				nn: 0,
				$t: 0
			});
			let l = this.Re.dataByIndex(i.time, 0);
			l !== null && av(c, i, l, s, n.fontSize, o, this.Re, this.Qv);
		}
		this.xt = !1;
	}
};
function sv(e) {
	return {
		...q_,
		...e
	};
}
var cv = class {
	constructor(e) {
		this.Kh = null, this.sx = [], this.ux = [], this.vx = null, this.Re = null, this.Qv = null, this.mx = !0, this.wx = null, this.Mx = null, this.gx = null, this.bx = !0, this.yn = sv(e);
	}
	attached(e) {
		this.Sx(), this.Qv = e.chart, this.Re = e.series, this.Kh = new ov(this.Re, $(this.Qv), this.yn), this.ZS = e.requestUpdate, this.Re.subscribeDataChanged((e) => this.sb(e)), this.bx = !0, this.ES();
	}
	ES() {
		this.ZS && this.ZS();
	}
	detached() {
		this.Re && this.vx && this.Re.unsubscribeDataChanged(this.vx), this.Qv = null, this.Re = null, this.Kh = null, this.vx = null;
	}
	lx(e) {
		this.bx = !0, this.sx = e, this.Sx(), this.mx = !0, this.Mx = null, this.ES();
	}
	xx() {
		return this.sx;
	}
	paneViews() {
		return this.Kh ? [this.Kh] : [];
	}
	updateAllViews() {
		this.Cx();
	}
	hitTest(e, t) {
		return this.Kh ? this.Kh.renderer()?.Qs(e, t) ?? null : null;
	}
	autoscaleInfo(e, t) {
		if (this.yn.autoScale && this.Kh) {
			let e = this.yx();
			if (e) return {
				priceRange: null,
				margins: e
			};
		}
		return null;
	}
	mr(e) {
		this.yn = sv({
			...this.yn,
			...e
		}), this.ES && this.ES();
	}
	yx() {
		let e = $(this.Qv).timeScale().options().barSpacing;
		if (this.mx || e !== this.gx) {
			if (this.gx = e, this.sx.length > 0) {
				let t = Z_(e), n = 1.5 * X_(e) + 2 * t, r = this.Px();
				this.wx = {
					above: Q_(n, r.aboveBar, r.inBar),
					below: Q_(n, r.belowBar, r.inBar)
				};
			} else this.wx = null;
			this.mx = !1;
		}
		return this.wx;
	}
	Px() {
		return this.Mx === null && (this.Mx = this.sx.reduce((e, t) => (e[t.position] || (e[t.position] = !0), e), {
			inBar: !1,
			aboveBar: !1,
			belowBar: !1,
			atPriceTop: !1,
			atPriceBottom: !1,
			atPriceMiddle: !1
		})), this.Mx;
	}
	Sx() {
		if (!this.bx || !this.Qv || !this.Re) return;
		let e = this.Qv.timeScale(), t = this.Re?.data();
		if (e.getVisibleLogicalRange() == null || !this.Re || t.length === 0) return void (this.ux = []);
		let n = e.timeToIndex($(t[0].time), !0);
		this.ux = this.sx.map((t, r) => {
			let i = e.timeToIndex(t.time, !0), a = i < n ? 1 : -1, o = $(this.Re).dataByIndex(i, a), s = {
				time: e.timeToIndex($(o).time, !1),
				position: t.position,
				shape: t.shape,
				color: t.color,
				id: t.id,
				_x: r,
				text: t.text,
				size: t.size,
				price: t.price,
				th: t.time
			};
			if (t.position === "atPriceTop" || t.position === "atPriceBottom" || t.position === "atPriceMiddle") {
				if (t.price === void 0) throw Error(`Price is required for position ${t.position}`);
				return {
					...s,
					position: t.position,
					price: t.price
				};
			}
			return {
				...s,
				position: t.position,
				price: t.price
			};
		}), this.bx = !1;
	}
	Cx(e) {
		this.Kh && (this.Sx(), this.Kh.lx(this.ux), this.Kh.ox(this.yn), this.Kh.Pt(e));
	}
	sb(e) {
		this.bx = !0, this.ES();
	}
}, lv = class extends K_ {
	constructor(e, t, n) {
		super(e, t), n && this.setMarkers(n);
	}
	setMarkers(e) {
		this.Qh.lx(e);
	}
	markers() {
		return this.Qh.xx();
	}
};
function uv(e, t, n) {
	let r = new lv(e, new cv(n ?? {}));
	return t && r.setMarkers(t), r;
}
({ ...yf });
// src/us-app.tsx
var dv = {
	SPY: "标普 500",
	QQQ: "纳斯达克 100",
	XLK: "科技",
	XLC: "通信服务",
	XLY: "可选消费",
	XLP: "必需消费",
	XLF: "金融",
	XLV: "医疗",
	XLI: "工业",
	XLE: "能源",
	XLB: "原材料",
	XLU: "公用事业",
	XLRE: "房地产",
	SMH: "半导体",
	IGV: "软件"
};
function fv(e) {
	return `${e >= 0 ? "+" : ""}${e.toFixed(1)}%`;
}
function pv({ series: e }) {
	let t = D.useRef(null);
	return D.useEffect(() => {
		if (!t.current || e.length < 2) return;
		let n = E_(t.current, {
			autoSize: !0,
			height: 300,
			layout: {
				background: {
					type: sh.Solid,
					color: "#ffffff"
				},
				textColor: "#84958b",
				fontSize: 11,
				attributionLogo: !0
			},
			grid: {
				vertLines: { color: "#f4f7f3" },
				horzLines: { color: "#edf2ed" }
			},
			rightPriceScale: { borderVisible: !1 },
			timeScale: { borderVisible: !1 },
			handleScroll: {
				mouseWheel: !1,
				pressedMouseMove: !0,
				horzTouchDrag: !0,
				vertTouchDrag: !1
			},
			handleScale: {
				mouseWheel: !0,
				pinch: !0,
				axisPressedMouseMove: !0
			}
		});
		return n.addSeries(V_, {
			color: "#348866",
			lineWidth: 2,
			priceLineVisible: !1,
			title: "收盘"
		}).setData(e.map(([e, t]) => ({
			time: e,
			value: t
		}))), n.addSeries(V_, {
			color: "#c9944a",
			lineWidth: 1,
			lineStyle: xf.Dashed,
			priceLineVisible: !1,
			lastValueVisible: !1,
			title: "20 日均线"
		}).setData(e.flatMap(([t], n) => n < 19 ? [] : [{
			time: t,
			value: e.slice(n - 19, n + 1).reduce((e, t) => e + t[1], 0) / 20
		}])), n.timeScale().fitContent(), () => n.remove();
	}, [e]), e.length < 2 ? /* @__PURE__ */ (0, K.jsx)("p", { children: "暂无足够数据" }) : /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("div", {
		ref: t,
		className: "us-chart",
		role: "img",
		"aria-label": "收盘与 20 日均线走势图，可缩放"
	}), /* @__PURE__ */ (0, K.jsxs)("div", {
		className: "us-chart-legend",
		children: ["收盘价 · 20 日均线（当前展示区间内计算） ", /* @__PURE__ */ (0, K.jsx)("a", {
			href: "https://www.tradingview.com/",
			target: "_blank",
			rel: "noreferrer",
			children: "TradingView Lightweight Charts™ ↗"
		})]
	})] });
}
function mv() {
	let [e, t] = D.useState(), [n, r] = D.useState("XLK"), [i, a] = D.useState(250);
	if (D.useEffect(() => {
		fetch("./industry-data.json", { cache: "no-store" }).then((e) => {
			if (!e.ok) throw Error();
			return e.json();
		}).then((e) => t({
			...e,
			series: Object.fromEntries(Object.entries(e.series).map(([e, t]) => [e, t.slice(-250)]))
		})).catch(() => {});
	}, []), !e) return /* @__PURE__ */ (0, K.jsxs)("main", {
		className: "us-main",
		children: [/* @__PURE__ */ (0, K.jsx)("h1", { children: "美股行业走势" }), /* @__PURE__ */ (0, K.jsx)("p", { children: "正在加载数据；若持续无法加载，请稍后重试。" })]
	});
	let o = Object.entries(e.series).filter(([e]) => e !== "SPY" && e !== "QQQ").map(([e, t]) => {
		let n = t.at(-1)[1];
		return {
			s: e,
			last: n,
			draw: (n / Math.max(...t.map((e) => e[1])) - 1) * 100,
			ret: (n / t[0][1] - 1) * 100
		};
	}).sort((e, t) => e.draw - t.draw);
	return /* @__PURE__ */ (0, K.jsxs)("main", {
		className: "us-main",
		children: [
			/* @__PURE__ */ (0, K.jsx)("p", {
				className: "us-kicker",
				children: "美国市场 / 近一年收盘观察"
			}),
			/* @__PURE__ */ (0, K.jsx)("h1", { children: "美股行业走势" }),
			/* @__PURE__ */ (0, K.jsx)("p", {
				className: "us-muted",
				children: "11 个主要行业及半导体、软件细分方向，以 ETF 作为行业代理。"
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "us-note",
				children: [
					"数据截至 ",
					e.date,
					" 美东收盘 · ",
					e.source,
					" · 历史快照，不是实时行情。ETF 包含费用和成分差异，不能等同整个行业；前复权价格走势不等于含分红总回报。"
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "us-cards",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("article", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "距离一年高点最远" }),
						/* @__PURE__ */ (0, K.jsx)("h3", { children: dv[o[0].s] }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: fv(o[0].draw) })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("article", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "距离一年高点最近" }),
						/* @__PURE__ */ (0, K.jsx)("h3", { children: dv[o.at(-1).s] }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: fv(o.at(-1).draw) })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("article", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "对照基准" }),
						/* @__PURE__ */ (0, K.jsx)("h3", { children: "标普 500（SPY）" }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: fv((e.series.SPY.at(-1)[1] / Math.max(...e.series.SPY.map((e) => e[1])) - 1) * 100) })
					] })
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-heading",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
							/* @__PURE__ */ (0, K.jsx)("p", {
								className: "us-kicker",
								children: "INDUSTRY TREND"
							}),
							/* @__PURE__ */ (0, K.jsx)("h2", { children: "行业日线趋势" }),
							/* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [
									dv[n],
									" · ",
									n,
									" · 美元"
								]
							})
						] }), /* @__PURE__ */ (0, K.jsxs)("label", { children: ["行业 ", /* @__PURE__ */ (0, K.jsx)("select", {
							value: n,
							onChange: (e) => r(e.target.value),
							children: Object.keys(e.series).map((e) => /* @__PURE__ */ (0, K.jsxs)("option", {
								value: e,
								children: [
									dv[e],
									"（",
									e,
									"）"
								]
							}, e))
						})] })]
					}),
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "us-buttons",
						children: [
							60,
							120,
							250
						].map((e) => /* @__PURE__ */ (0, K.jsx)("button", {
							"aria-pressed": i === e,
							onClick: () => a(e),
							children: e === 250 ? "一年" : `${e} 日`
						}, e))
					}),
					/* @__PURE__ */ (0, K.jsx)(pv, { series: e.series[n].slice(-i) }),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-meta",
						children: [
							e.series[n].slice(-i)[0][0],
							" — ",
							e.date,
							"　收盘 ",
							e.series[n].at(-1)[1].toFixed(2),
							" 美元"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				children: [
					/* @__PURE__ */ (0, K.jsx)("h2", { children: "行业与基准对比" }),
					/* @__PURE__ */ (0, K.jsxs)("p", {
						className: "us-muted",
						children: [
							"ETF 代理 · 基准 SPY · ",
							e.series.SPY[0][0],
							" 至 ",
							e.date,
							" · 前复权价格涨跌，非含分红总回报。行业及细分主题重叠，不能直接相加。"
						]
					}),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-compare",
						children: [[...o].sort((e, t) => t.ret - e.ret).map((e) => /* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsxs)("span", { children: [
							dv[e.s],
							"（",
							e.s,
							"）"
						] }), /* @__PURE__ */ (0, K.jsx)("b", { children: fv(e.ret) })] }, e.s)), /* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("span", { children: "标普 500（SPY）" }), /* @__PURE__ */ (0, K.jsx)("b", { children: fv((e.series.SPY.at(-1)[1] / e.series.SPY[0][1] - 1) * 100) })] })]
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				children: [
					/* @__PURE__ */ (0, K.jsx)("h2", { children: "距近一年收盘高点回撤" }),
					/* @__PURE__ */ (0, K.jsx)("p", {
						className: "us-muted",
						children: "ETF 代理 · 近 250 个交易日 · 前复权收盘价：最新收盘 ÷ 区间最高收盘 − 1；这是距高点下跌，并非历史最大回撤。"
					}),
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "us-ranks",
						children: o.map((e) => /* @__PURE__ */ (0, K.jsxs)("div", { children: [
							/* @__PURE__ */ (0, K.jsxs)("span", { children: [
								dv[e.s],
								" ",
								/* @__PURE__ */ (0, K.jsx)("small", { children: e.s })
							] }),
							/* @__PURE__ */ (0, K.jsx)("div", {
								className: "us-rail",
								children: /* @__PURE__ */ (0, K.jsx)("i", { style: { width: `${Math.min(100, Math.abs(e.draw) * 2)}%` } })
							}),
							/* @__PURE__ */ (0, K.jsx)("b", { children: fv(e.draw) }),
							/* @__PURE__ */ (0, K.jsxs)("small", { children: ["区间 ", fv(e.ret)] })
						] }, e.s))
					})
				]
			})
		]
	});
}
function hv(e) {
	let t = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(new Date(e)), n = Number(t.find((e) => e.type === "hour")?.value), r = Number(t.find((e) => e.type === "minute")?.value), i = n * 60 + r;
	return i < 570 ? "常规日盘前" : i >= 960 ? "常规日盘后" : i >= 780 ? "需核对提前收盘" : "常规时段参考";
}
function gv({ symbol: e, bars: t, trades: n, asOf: r, session: i, coverage: a, checkedAt: o }) {
	let s = D.useRef(null), [c, l] = D.useState(90), [u, d] = D.useState(!1), [f, p] = D.useState("all"), [m, h] = D.useState("all"), [g, _] = D.useState(""), [v, y] = D.useState(null), b = D.useMemo(() => n.filter((t) => t.symbol === e && (f === "all" || t.source === f) && (m === "all" || t.side === m)).sort((e, t) => t.time.localeCompare(e.time)), [
		n,
		e,
		f,
		m
	]);
	D.useEffect(() => {
		d(!1), _(""), y(null);
	}, [e]), D.useEffect(() => {
		if (!s.current || t.length < 2) return;
		let e = t.filter((e) => e.length === 5 && e.slice(1).every(Number.isFinite));
		if (e.length < 2) return;
		let n = E_(s.current, {
			autoSize: !0,
			height: 360,
			layout: {
				background: {
					type: sh.Solid,
					color: "#fff"
				},
				textColor: "#758c80",
				fontSize: 11,
				attributionLogo: !0
			},
			grid: {
				vertLines: { color: "#f4f7f4" },
				horzLines: { color: "#ecf2ed" }
			},
			rightPriceScale: {
				borderVisible: !1,
				scaleMargins: {
					top: .13,
					bottom: .12
				}
			},
			timeScale: {
				borderVisible: !1,
				rightOffset: 4
			},
			crosshair: { mode: cp.Normal },
			handleScroll: {
				mouseWheel: !1,
				pressedMouseMove: !0,
				horzTouchDrag: !0,
				vertTouchDrag: !1
			},
			handleScale: {
				mouseWheel: !0,
				pinch: !0,
				axisPressedMouseMove: !0
			}
		}), r = n.addSeries(G_, {
			upColor: "#d8665f",
			downColor: "#25936e",
			borderUpColor: "#d8665f",
			borderDownColor: "#25936e",
			wickUpColor: "#d8665f",
			wickDownColor: "#25936e",
			priceLineVisible: !1,
			title: "日K"
		});
		r.setData(e.map(([e, t, n, r, i]) => ({
			time: e,
			open: t,
			high: n,
			low: r,
			close: i
		}))), n.addSeries(V_, {
			color: "#d09a47",
			lineWidth: 2,
			priceLineVisible: !1,
			lastValueVisible: !1,
			title: "MA20"
		}).setData(e.flatMap(([t], n) => n < 19 ? [] : [{
			time: t,
			value: e.slice(n - 19, n + 1).reduce((e, t) => e + t[4], 0) / 20
		}]));
		let i = new Set(e.map((e) => e[0])), a = /* @__PURE__ */ new Map();
		for (let e of b) {
			if (!i.has(e.date)) continue;
			let t = e.date + ":" + e.side, n = a.get(t) || {
				date: e.date,
				side: e.side,
				quantity: 0,
				amount: 0,
				count: 0
			};
			n.quantity += e.quantity, n.amount += e.quantity * e.price, n.count++, a.set(t, n);
		}
		uv(r, [...a.values()].sort((e, t) => e.date.localeCompare(t.date) || e.side.localeCompare(t.side)).map((e) => ({
			id: e.date + ":" + e.side,
			time: e.date,
			position: "atPriceMiddle",
			price: e.amount / e.quantity,
			color: e.side === "BUY" ? "#155be3" : "#823dc7",
			shape: e.side === "BUY" ? "arrowUp" : "arrowDown",
			text: `${e.side === "BUY" ? "买" : "卖"}${e.count > 1 ? e.count : ""}`
		})));
		let o = (e, t) => {
			let n = typeof e == "string" ? a.get(e) : void 0;
			if (!n || !t || !s.current) {
				y(null);
				return;
			}
			let r = s.current.clientWidth;
			y({
				x: Math.max(4, Math.min(t.x + 14, r - 252)),
				y: Math.max(4, Math.min(t.y + 14, s.current.clientHeight - 165)),
				side: n.side,
				date: n.date,
				quantity: n.quantity,
				average: n.amount / n.quantity,
				items: b.filter((e) => e.date === n.date && e.side === n.side)
			});
		};
		n.subscribeCrosshairMove((t) => {
			o(t.hoveredInfo?.objectId ?? t.hoveredObjectId, t.point);
			let n = e.find((e) => e[0] === t.time);
			_(n ? `${n[0]}  开 ${n[1].toFixed(2)}  高 ${n[2].toFixed(2)}  低 ${n[3].toFixed(2)}  收 ${n[4].toFixed(2)}` : "");
		}), n.subscribeClick((e) => o(e.hoveredInfo?.objectId ?? e.hoveredObjectId, e.point));
		let l = e[Math.max(0, e.length - c)][0], u = e[e.length - 1][0];
		return n.timeScale().setVisibleRange({
			from: l,
			to: u
		}), () => n.remove();
	}, [
		e,
		t,
		b,
		c
	]);
	let x = u ? b : b.slice(0, 8), S = new Set(t.map((e) => e[0])), C = b.filter((e) => !S.has(e.date)).length;
	return /* @__PURE__ */ (0, K.jsxs)("div", {
		className: "trade-chart",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "trade-chart-head",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("strong", { children: "日 K 与成交记录" }), /* @__PURE__ */ (0, K.jsxs)("p", { children: [
					"未复权 · 美东交易日 · ",
					r || "日期未知",
					" ",
					i || ""
				] })] }), /* @__PURE__ */ (0, K.jsx)("div", {
					className: "trade-ranges",
					"aria-label": "图表时间范围",
					children: [
						[30, "30个交易日"],
						[90, "90个交易日"],
						[260, "一年"]
					].map(([e, t]) => /* @__PURE__ */ (0, K.jsx)("button", {
						type: "button",
						"aria-pressed": c === e,
						onClick: () => l(e),
						children: t
					}, e))
				})]
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "trade-filters",
				children: [/* @__PURE__ */ (0, K.jsxs)("label", { children: ["账户 ", /* @__PURE__ */ (0, K.jsxs)("select", {
					value: f,
					onChange: (e) => p(e.target.value),
					children: [/* @__PURE__ */ (0, K.jsx)("option", {
						value: "all",
						children: "全部来源"
					}), Array.from(new Set(n.filter((t) => t.symbol === e).map((e) => e.source))).map((e) => /* @__PURE__ */ (0, K.jsx)("option", {
						value: e,
						children: e
					}, e))]
				})] }), /* @__PURE__ */ (0, K.jsxs)("label", { children: ["方向 ", /* @__PURE__ */ (0, K.jsxs)("select", {
					value: m,
					onChange: (e) => h(e.target.value),
					children: [
						/* @__PURE__ */ (0, K.jsx)("option", {
							value: "all",
							children: "全部"
						}),
						/* @__PURE__ */ (0, K.jsx)("option", {
							value: "BUY",
							children: "买入"
						}),
						/* @__PURE__ */ (0, K.jsx)("option", {
							value: "SELL",
							children: "卖出"
						})
					]
				})] })]
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "trade-ohlc",
				children: g || "移动鼠标或触摸 K 线查看行情，悬停或点击买卖标记查看成交价"
			}),
			t.length >= 2 ? /* @__PURE__ */ (0, K.jsxs)("div", {
				className: "trade-candle-wrap",
				children: [/* @__PURE__ */ (0, K.jsx)("div", {
					ref: s,
					className: "trade-candles",
					role: "img",
					"aria-label": `${e} 日K线及成交价格标记，可缩放`
				}), v && /* @__PURE__ */ (0, K.jsxs)("div", {
					className: "trade-tooltip",
					style: {
						left: v.x,
						top: v.y
					},
					role: "tooltip",
					children: [
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "trade-tooltip-title",
							children: [/* @__PURE__ */ (0, K.jsx)("b", { children: v.side === "BUY" ? "买入" : "卖出" }), /* @__PURE__ */ (0, K.jsxs)("span", { children: [v.date, " · 美东"] })]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "trade-tooltip-price",
							children: [
								"$",
								v.average.toLocaleString("en-US", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 4
								}),
								" ",
								/* @__PURE__ */ (0, K.jsx)("small", { children: v.items.length > 1 ? "成交均价" : "成交价格" })
							]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "trade-tooltip-meta",
							children: [
								v.quantity,
								" 股 · ",
								v.items.length,
								" 笔"
							]
						}),
						v.items.length > 1 && /* @__PURE__ */ (0, K.jsx)("div", {
							className: "trade-tooltip-items",
							children: v.items.map((e) => /* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsxs)("span", { children: [
								e.source,
								" · ",
								e.quantity,
								" 股"
							] }), /* @__PURE__ */ (0, K.jsxs)("b", { children: ["$", e.price.toLocaleString("en-US", {
								minimumFractionDigits: 2,
								maximumFractionDigits: 4
							})] })] }, e.id))
						}),
						v.items.length === 1 && /* @__PURE__ */ (0, K.jsx)("div", {
							className: "trade-tooltip-meta",
							children: v.items[0].source
						})
					]
				})]
			}) : /* @__PURE__ */ (0, K.jsx)("p", { children: "暂无足够的 K 线数据" }),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "trade-chart-legend",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", { className: "legend-buy" }), "买入"] }),
					/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", { className: "legend-sell" }), "卖出"] }),
					/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", { className: "legend-ma" }), "20 日均线"] }),
					/* @__PURE__ */ (0, K.jsx)("span", { children: "红涨绿跌" }),
					/* @__PURE__ */ (0, K.jsx)("a", {
						href: "https://www.tradingview.com/",
						target: "_blank",
						rel: "noreferrer",
						children: "TradingView Lightweight Charts™ ↗"
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsx)("p", {
				className: "trade-chart-note",
				children: "标记位置为当日同方向成交的数量加权均价；数字表示成交笔数。图表使用未复权价格以对应成交价，拆股会造成历史价格跳变；盘前盘后成交可能超出当日日 K 高低范围。"
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "trade-history",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "trade-history-head",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("strong", { children: "实际成交明细" }), /* @__PURE__ */ (0, K.jsxs)("span", { children: [
							b.length,
							" 笔 · ",
							e
						] })] }), b.length > 8 && /* @__PURE__ */ (0, K.jsx)("button", {
							type: "button",
							onClick: () => d(!u),
							children: u ? "收起" : "查看全部"
						})]
					}),
					/* @__PURE__ */ (0, K.jsxs)("p", {
						className: "trade-chart-note",
						children: [
							a || "尚未取得成交数据。",
							" ",
							o && `读取：${o}。`,
							C > 0 && ` ${C} 笔在当前图表日期范围以外，仅在明细显示。`
						]
					}),
					x.length ? /* @__PURE__ */ (0, K.jsx)("div", {
						className: "us-table-wrap",
						children: /* @__PURE__ */ (0, K.jsxs)("table", { children: [/* @__PURE__ */ (0, K.jsx)("thead", { children: /* @__PURE__ */ (0, K.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, K.jsx)("th", { children: "美东成交时间" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "方向" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "数量" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "成交价" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "账户来源" })
						] }) }), /* @__PURE__ */ (0, K.jsx)("tbody", { children: x.map((e) => /* @__PURE__ */ (0, K.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, K.jsxs)("td", { children: [
								new Date(e.time).toLocaleString("zh-CN", {
									timeZone: "America/New_York",
									hour12: !1
								}),
								" ",
								/* @__PURE__ */ (0, K.jsx)("small", {
									className: "trade-time-hint",
									children: hv(e.time)
								})
							] }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: /* @__PURE__ */ (0, K.jsx)("span", {
								className: e.side === "BUY" ? "trade-buy" : "trade-sell",
								children: e.side === "BUY" ? "买入" : "卖出"
							}) }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: e.quantity }),
							/* @__PURE__ */ (0, K.jsxs)("td", { children: ["$", e.price.toFixed(2)] }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: e.source })
						] }, e.id)) })] })
					}) : /* @__PURE__ */ (0, K.jsx)("p", {
						className: "trade-empty",
						children: "当前筛选范围内暂无成交记录；其他账户或更早记录可能未覆盖。"
					})
				]
			})
		]
	});
}
function _v() {
	let [e, t] = D.useState(), [n, r] = D.useState(""), [i, a] = D.useState(""), [o, s] = D.useState(""), [c, l] = D.useState("rank"), [u, d] = D.useState("holdings"), [f, p] = D.useState([]), m = D.useCallback(async (e) => {
		try {
			let n = e.trim();
			if ((n.startsWith("https:") || n.startsWith("http:")) && (n = new URL(n).hash.slice(1)), !/^[A-Za-z0-9_-]{43}$/.test(n)) throw Error("请输入有效的访问密钥或完整解锁链接");
			let i = Uint8Array.from(atob(n.replace(/-/g, "+").replace(/_/g, "/") + "="), (e) => e.charCodeAt(0)), o = await crypto.subtle.importKey("raw", i, "AES-GCM", !1, ["decrypt"]), s = await fetch("../portfolio.enc", { cache: "no-store" });
			if (!s.ok) throw Error("加密报告加载失败");
			let c = Uint8Array.from(atob((await s.text()).trim()), (e) => e.charCodeAt(0)), l = await crypto.subtle.decrypt({
				name: "AES-GCM",
				iv: c.slice(0, 12)
			}, o, c.slice(12));
			t(JSON.parse(new TextDecoder().decode(l))), localStorage.setItem("jybd-report-key-v1", n), r(""), a("");
		} catch {
			a("未能解锁，请核对访问密钥或检查报告是否可用。");
		}
	}, []);
	if (D.useEffect(() => {
		let e = location.hash.slice(1);
		if (!/^[A-Za-z0-9_-]{43}$/.test(e)) try {
			e = localStorage.getItem("jybd-report-key-v1") || "";
		} catch {}
		e && m(e);
	}, [m]), !e) return /* @__PURE__ */ (0, K.jsxs)("main", {
		className: "us-main",
		children: [
			/* @__PURE__ */ (0, K.jsx)("p", {
				className: "us-kicker",
				children: "PRIVATE PORTFOLIO"
			}),
			/* @__PURE__ */ (0, K.jsx)("h1", { children: "美股持仓地图" }),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				children: [
					/* @__PURE__ */ (0, K.jsx)("h2", { children: "在本机解锁报告" }),
					/* @__PURE__ */ (0, K.jsx)("p", {
						className: "us-muted",
						children: "与 A 股持仓报告使用相同的访问密钥，数据只在浏览器中解密。"
					}),
					/* @__PURE__ */ (0, K.jsx)("input", {
						type: "password",
						value: n,
						onChange: (e) => r(e.target.value),
						placeholder: "访问密钥或完整解锁链接",
						"aria-label": "访问密钥或完整解锁链接"
					}),
					/* @__PURE__ */ (0, K.jsx)("button", {
						className: "us-primary",
						onClick: () => void m(n),
						children: "打开持仓报告"
					}),
					i && /* @__PURE__ */ (0, K.jsx)("p", {
						role: "alert",
						children: i
					})
				]
			})
		]
	});
	let h = e.display || {}, g = e.research || {}, _ = Object.fromEntries(e.quotes.map((e) => [e.symbol.replace(".US", ""), e])), v = [
		...e.ibkr.positions.filter((e) => e.currency === "USD").map((e) => ({
			symbol: e.contract_description,
			name: h[e.contract_description] || e.contract_description,
			quantity: Number(e.position),
			account: "盈透"
		})),
		...e.longbridge.list.flatMap((e) => e.stock_info).filter((e) => e.market === "US").map((e) => ({
			symbol: e.symbol.replace(".US", ""),
			name: h[e.symbol.replace(".US", "")] || e.symbol_name,
			quantity: Number(e.quantity),
			account: "长桥"
		})),
		...(e.extraHoldings || []).map((e) => ({
			...e,
			name: h[e.symbol] || e.symbol
		}))
	].map((e) => ({
		...e,
		price: Number(_[e.symbol]?.last_done) || void 0,
		timestamp: _[e.symbol]?.timestamp
	})), y = Object.values(v.reduce((e, t) => {
		let n = e[t.symbol] || {
			...t,
			quantity: 0,
			account: ""
		};
		return n.quantity = n.quantity === null || t.quantity === null ? null : n.quantity + t.quantity, n.account += (n.account ? " / " : "") + t.account, e[t.symbol] = n, e;
	}, {})), b = y.filter((t) => !(e.fundSymbols || []).includes(t.symbol)), x = {
		symbol: "CRM",
		name: h.CRM || "CRM",
		quantity: null,
		account: "观察",
		price: Number(_.CRM?.last_done) || void 0
	};
	b.some((e) => e.symbol === "CRM") || b.push(x);
	let S = (t) => {
		let n = e.sortResearch?.[t.symbol]?.[c];
		if ([
			"buy",
			"add",
			"risk",
			"support"
		].includes(c)) {
			if (!n || !Number.isFinite(n.value) || !n.asOf || !n.basis) return null;
			if (c === "support") {
				if (!t.price || n.value <= 0) return null;
				let e = (t.price - n.value) / t.price * 100;
				return {
					value: Math.abs(e),
					label: `$${n.value.toFixed(2)} · ${e >= 0 ? "距观察位" : "已跌破观察位"} ${Math.abs(e).toFixed(1)}% · ${n.asOf} · ${n.basis}`
				};
			}
			return {
				value: n.value,
				label: `第 ${n.value} 位 · ${n.asOf} · ${n.basis}`
			};
		}
		if (c === "drawdown") {
			let n = e.oneYear?.[t.symbol];
			if (!n || n.count < 200 || Date.parse(n.last.slice(0, 10)) - Date.parse(n.first.slice(0, 10)) < 30672e6 || n.last.slice(0, 10) !== e.historyAsOf || !Number(n.high) || !Number(n.close)) return null;
			let r = (Number(n.close) / Number(n.high) - 1) * 100;
			return {
				value: r,
				label: `${r.toFixed(1)}% · 高点 $${Number(n.high).toFixed(2)}（${n.highDate.slice(0, 10)}） · ${n.last.slice(0, 10)} 收盘`
			};
		}
		if (c === "pnl") {
			if (t.account === "观察" || t.quantity === null || !t.price) return null;
			let n = [...e.ibkr.positions.filter((e) => e.currency === "USD" && e.contract_description === t.symbol).map((e) => ({
				qty: Number(e.position),
				cost: Number(e.average_price)
			})), ...e.longbridge.list.flatMap((e) => e.stock_info).filter((e) => e.market === "US" && e.symbol.replace(".US", "") === t.symbol).map((e) => ({
				qty: Number(e.quantity),
				cost: Number(e.cost_price)
			}))];
			if ((e.extraHoldings || []).some((e) => e.symbol === t.symbol) || !n.length || n.some((e) => !Number.isFinite(e.cost) || e.cost <= 0 || !Number.isFinite(e.qty) || e.qty <= 0) || n.reduce((e, t) => e + t.qty, 0) !== t.quantity) return null;
			let r = n.reduce((e, t) => e + t.qty * t.cost, 0) / t.quantity;
			return {
				value: (t.price / r - 1) * 100,
				label: `${((t.price / r - 1) * 100).toFixed(1)}% · 加权成本 $${r.toFixed(2)} · 快照 ${e.asOf}（费用和税务口径待核验）`
			};
		}
		return null;
	}, C = [
		"buy",
		"add",
		"risk",
		"support",
		"drawdown",
		"pnl"
	];
	c === "rank" ? b.sort((t, n) => (e.comparison?.[t.symbol]?.rank || 999) - (e.comparison?.[n.symbol]?.rank || 999)) : c === "value" ? b.sort((e, t) => {
		let n = e.price && e.quantity !== null ? e.price * e.quantity : null, r = t.price && t.quantity !== null ? t.price * t.quantity : null;
		return n === null ? r === null ? 0 : 1 : r === null ? -1 : r - n;
	}) : C.includes(c) ? b.sort((e, t) => {
		let n = S(e), r = S(t);
		return !n && !r ? e.name.localeCompare(t.name, "zh") : n ? r ? c === "pnl" ? r.value - n.value : n.value - r.value : -1 : 1;
	}) : b.sort((e, t) => e.name.localeCompare(t.name, "zh"));
	let w = b.some((e) => e.symbol === o) || o === "CRM" ? o : b[0]?.symbol || "CRM", T = e.history[w] || [], E = _[w], O = e.valuationData?.[w], k = (e) => O?.cash?.fields.find((t) => t.field === e)?.value, A = e.financialReports?.[w], j = (e) => A?.indicators.find((t) => t.field_name === e), M = T.slice(-20), N = M.length >= 20 ? Math.min(...M.map((e) => e[3])) : null, P = M.length >= 20 ? Math.max(...M.map((e) => e[2])) : null, F = e.ibkrBalances.balances.find((e) => e.currency === "USD");
	return /* @__PURE__ */ (0, K.jsxs)("main", {
		className: "us-main",
		children: [
			/* @__PURE__ */ (0, K.jsx)("p", {
				className: "us-kicker",
				children: "美国市场 / 加密持仓报告"
			}),
			/* @__PURE__ */ (0, K.jsx)("h1", { children: "美股持仓地图" }),
			/* @__PURE__ */ (0, K.jsx)("p", {
				className: "us-muted",
				children: "持仓、风险与研究线索 · 不含未确认账户"
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "data-status",
				"aria-label": "数据状态",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "行情" }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: "逐只标注" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "非实时 · 详情见个股" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "持仓" }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: e.asOf || "待核验" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "部分账户待确认" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "K 线" }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: e.chartHistoryAsOf || e.historyAsOf || "待核验" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: e.chartHistorySession || "历史记录" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "成交读取" }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: e.chartTradeCheckedAt || "待核验" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "部分账户待补充" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "研究排行" }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: e.rankAsOf || "待核验" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: e.rankStatus === "complete" ? "已复核" : "部分复核" })
					] })
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("details", {
				className: "compact-details",
				children: [
					/* @__PURE__ */ (0, K.jsx)("summary", { children: "数据来源与更新状态" }),
					/* @__PURE__ */ (0, K.jsx)("p", { children: e.coverage }),
					/* @__PURE__ */ (0, K.jsx)("p", { children: "行情、持仓、成交和研究独立更新。状态记录可能滞后：若发布本身失败，网页无法显示该次失败，请结合自动化失败通知。" }),
					e.refreshStatus ? /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsxs)("p", { children: ["状态记录时间：", e.refreshStatus.checkedAt] }), /* @__PURE__ */ (0, K.jsx)("div", {
						className: "run-status-list",
						children: [
							["industry", "行业"],
							["holdings", "持仓"],
							["quotes", "行情"],
							["trades", "成交"],
							["research", "研究"]
						].map(([t, n]) => {
							let r = e.refreshStatus?.sections[t];
							return /* @__PURE__ */ (0, K.jsxs)("p", { children: [
								/* @__PURE__ */ (0, K.jsx)("b", { children: n }),
								" · ",
								r ? {
									success: "成功",
									partial: "部分完成",
									failed: "失败",
									skipped: "跳过",
									unknown: "未核实"
								}[r.state] || "未核实" : "未记录",
								r && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
									" · 检查 ",
									r.attemptedAt,
									" · 上次成功 ",
									r.lastSuccessDate || "未知",
									r.reason && ` · ${r.reason}`
								] })
							] }, t);
						})
					})] }) : /* @__PURE__ */ (0, K.jsx)("p", { children: "尚无自动运行状态记录，不能据此判断最近一次更新成功。" })
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("nav", {
				className: "us-quick",
				"aria-label": "页面导航",
				children: [
					/* @__PURE__ */ (0, K.jsx)("a", {
						href: "#portfolio",
						children: "组合"
					}),
					/* @__PURE__ */ (0, K.jsx)("a", {
						href: "#stock-ranking",
						children: "排行"
					}),
					/* @__PURE__ */ (0, K.jsx)("a", {
						href: "#stock-detail",
						children: "个股"
					}),
					/* @__PURE__ */ (0, K.jsx)("a", {
						href: "#funds",
						children: "基金"
					}),
					/* @__PURE__ */ (0, K.jsx)("a", {
						href: "#events",
						children: "事件"
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				id: "portfolio",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-heading",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("h2", { children: "组合概览" }), /* @__PURE__ */ (0, K.jsx)("p", {
							className: "us-muted",
							children: "账户信息未完整覆盖，全资产现金比例待核验。"
						})] }), /* @__PURE__ */ (0, K.jsx)("span", {
							className: "status-pill",
							children: "部分覆盖"
						})]
					}),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "summary-grid",
						children: [
							/* @__PURE__ */ (0, K.jsxs)("div", { children: [
								/* @__PURE__ */ (0, K.jsxs)("small", { children: ["盈透美元现金 · ", e.asOf] }),
								/* @__PURE__ */ (0, K.jsx)("strong", { children: F ? `$${Number(F.cash_balance).toFixed(2)}` : "待核验" }),
								/* @__PURE__ */ (0, K.jsx)("span", { children: F && Number(F.cash_balance) < 0 ? "现金为负，需核对融资" : "以账户实际状态为准" })
							] }),
							/* @__PURE__ */ (0, K.jsxs)("div", { children: [
								/* @__PURE__ */ (0, K.jsx)("small", { children: "账户覆盖" }),
								/* @__PURE__ */ (0, K.jsx)("strong", { children: "见账户说明" }),
								/* @__PURE__ */ (0, K.jsx)("span", { children: "富途、BBAE 沿用历史确认" })
							] }),
							/* @__PURE__ */ (0, K.jsxs)("div", { children: [
								/* @__PURE__ */ (0, K.jsx)("small", { children: "现金目标" }),
								/* @__PURE__ */ (0, K.jsx)("strong", { children: "待核验" }),
								/* @__PURE__ */ (0, K.jsx)("span", { children: "无法确认是否达到 20%" })
							] })
						]
					}),
					/* @__PURE__ */ (0, K.jsxs)("details", {
						className: "compact-details",
						children: [
							/* @__PURE__ */ (0, K.jsx)("summary", { children: "查看账户覆盖" }),
							/* @__PURE__ */ (0, K.jsxs)("p", { children: [
								"盈透、长桥：报告所载连接账户的只读快照，日期 ",
								e.asOf,
								"；完整账户覆盖未核实。"
							] }),
							/* @__PURE__ */ (0, K.jsx)("p", { children: "富途、BBAE：沿用历史确认，现金与融资未完整读取；PATH 数量未知。未确认项目不计为零。" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel attention-panel",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-heading",
						children: [/* @__PURE__ */ (0, K.jsx)("h2", { children: "需要关注" }), /* @__PURE__ */ (0, K.jsx)("a", {
							href: "#events",
							children: "查看事件与来源 →"
						})]
					}),
					/* @__PURE__ */ (0, K.jsxs)("p", {
						className: "us-muted",
						children: [
							"事件检查：",
							e.reviewStatus?.status === "complete" ? "已完成" : "部分复核",
							" · ",
							e.reviewStatus?.checkedAt || "日期待核验"
						]
					}),
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "attention-list",
						children: e.reviewStatus?.events?.slice(0, 3).map((e, t) => /* @__PURE__ */ (0, K.jsxs)("p", { children: [
							/* @__PURE__ */ (0, K.jsxs)("b", { children: [
								h[e.symbol] || e.symbol,
								"（",
								e.symbol,
								"）"
							] }),
							" · ",
							e.date,
							" ",
							/* @__PURE__ */ (0, K.jsx)("span", { children: e.summary })
						] }, t)) || /* @__PURE__ */ (0, K.jsx)("p", { children: "暂无已记录线索；不代表没有重大事件。" })
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				id: "stock-ranking",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-heading",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
							/* @__PURE__ */ (0, K.jsx)("h2", { children: "股票持仓比较" }),
							/* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [
									"研究排行：",
									e.rankStatus === "complete" ? "已复核" : "部分复核",
									" · 研究名次含观察标的，筛选后可能不连续"
								]
							}),
							/* @__PURE__ */ (0, K.jsxs)("details", {
								className: "compact-details",
								children: [/* @__PURE__ */ (0, K.jsx)("summary", { children: "查看排序依据与数据缺口" }), /* @__PURE__ */ (0, K.jsx)("p", { children: e.rankCoverage || "综合研究尚未完成，排序待复核。" })]
							}),
							/* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [
									"排行复核日期：",
									e.rankAsOf || "未完成",
									e.rankStatus === "partial" ? "（部分复核，存在数据缺口）" : e.rankStatus === "complete" ? "（完整覆盖）" : "（历史记录）",
									" · 每周复核；重大事件另行复核。行情与持仓更新不代表排行已复核。"
								]
							})
						] }), /* @__PURE__ */ (0, K.jsxs)("label", { children: ["排序 ", /* @__PURE__ */ (0, K.jsxs)("select", {
							value: c,
							onChange: (e) => l(e.target.value),
							children: [
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "rank",
									children: "最值得持有（初步综合）"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "value",
									children: "已知持仓市值"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "buy",
									children: "当前买入性价比"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "add",
									children: "加仓优先级"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "risk",
									children: "风险复核优先级"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "support",
									children: "距离近期支撑位"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "drawdown",
									children: "距一年高点回撤"
								}),
								/* @__PURE__ */ (0, K.jsx)("option", {
									value: "pnl",
									children: "持仓盈亏比例"
								})
							]
						})] })]
					}),
					C.includes(c) && /* @__PURE__ */ (0, K.jsx)("p", {
						className: "us-muted",
						children: c === "drawdown" ? "按前复权日线计算：（截至日收盘价 ÷ 近一年盘中最高价 − 1）；数据不足一年则待核验，日期和高点见逐项依据。" : c === "pnl" ? "按已知账户成本加权计算，仅覆盖已核验成本的完整持仓，费用及税务口径待核验；未覆盖账户不参与。" : c === "support" ? "各股观察位的窗口与复权方式见逐项依据；距离＝（参考价−观察位）÷参考价，跌破不等于卖出信号。" : c === "add" ? "这是现金与账户条件满足后的相对研究顺序，不代表当前适合加仓；盈透及长桥美元现金为负，其他账户现金未核实。" : c === "risk" ? "优先检查经营、估值、已知集中度及融资风险；数据不完整时仅标记“优先检查”，不能据此确定减仓数量或直接归类为减仓候选。" : "依据最近财报、估值参考与下行风险的主观比较；数据及估值口径仍有缺口，不能等同交易指令。"
					}),
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "scope-tabs",
						"aria-label": "持仓范围",
						children: [
							["holdings", "持仓"],
							["watch", "观察"],
							["all", "全部"]
						].map(([e, t]) => /* @__PURE__ */ (0, K.jsx)("button", {
							type: "button",
							"aria-pressed": u === e,
							onClick: () => d(e),
							children: t
						}, e))
					}),
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "us-table-wrap ranking-table",
						children: /* @__PURE__ */ (0, K.jsxs)("table", { children: [/* @__PURE__ */ (0, K.jsx)("thead", { children: /* @__PURE__ */ (0, K.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, K.jsx)("th", { children: "排名" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "股票" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "账户" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "数量" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "参考价" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "市值参考" }),
							/* @__PURE__ */ (0, K.jsx)("th", { children: "研究建议" }),
							C.includes(c) && /* @__PURE__ */ (0, K.jsx)("th", { children: "排序依据" })
						] }) }), /* @__PURE__ */ (0, K.jsx)("tbody", { children: b.filter((e) => u === "all" || (u === "watch" ? e.account === "观察" : e.account !== "观察")).map((t, n) => /* @__PURE__ */ (0, K.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, K.jsx)("td", { children: c === "rank" ? e.comparison?.[t.symbol]?.rank || "—" : C.includes(c) ? S(t) ? [
								"buy",
								"add",
								"risk"
							].includes(c) ? e.sortResearch?.[t.symbol]?.[c]?.value : n + 1 : "—" : n + 1 }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: /* @__PURE__ */ (0, K.jsxs)("button", {
								className: "us-link",
								onClick: () => {
									s(t.symbol), document.getElementById("stock-detail")?.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
								},
								children: [
									t.name,
									"（",
									t.symbol,
									"）"
								]
							}) }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: t.account }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: t.quantity === null ? t.account === "观察" ? "—" : "未知" : t.quantity }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: t.price ? `$${t.price.toFixed(2)}` : "待核验" }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: t.price && t.quantity !== null ? `$${(t.price * t.quantity).toFixed(2)}` : t.account === "观察" ? "—" : "待核验" }),
							/* @__PURE__ */ (0, K.jsx)("td", { children: e.comparison?.[t.symbol]?.action || "待复核" }),
							C.includes(c) && /* @__PURE__ */ (0, K.jsx)("td", { children: S(t) ? /* @__PURE__ */ (0, K.jsxs)("details", {
								className: "row-evidence",
								children: [
									/* @__PURE__ */ (0, K.jsx)("summary", { children: "查看依据" }),
									/* @__PURE__ */ (0, K.jsx)("p", { children: S(t)?.label }),
									e.sortResearch?.[t.symbol]?.[c]?.url && /* @__PURE__ */ (0, K.jsx)("a", {
										href: e.sortResearch[t.symbol][c].url,
										target: "_blank",
										rel: "noreferrer",
										children: "资料来源 ↗"
									})
								]
							}) : "待核验" })
						] }, t.symbol)) })] })
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				id: "stock-detail",
				children: [
					/* @__PURE__ */ (0, K.jsx)("a", {
						className: "us-back",
						href: "#stock-ranking",
						children: "← 返回排行"
					}),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-heading",
						children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
							/* @__PURE__ */ (0, K.jsx)("p", {
								className: "us-kicker",
								children: "STOCK DETAIL"
							}),
							/* @__PURE__ */ (0, K.jsxs)("h2", { children: [
								h[w] || w,
								"（",
								w,
								"）"
							] }),
							/* @__PURE__ */ (0, K.jsx)("p", {
								className: "us-muted",
								children: w === "CRM" ? "观察标的，非持仓" : "选择上方股票查看"
							})
						] }), /* @__PURE__ */ (0, K.jsxs)("label", { children: ["个股 ", /* @__PURE__ */ (0, K.jsx)("select", {
							value: w,
							onChange: (e) => s(e.target.value),
							children: b.map((e) => e.symbol).map((e) => /* @__PURE__ */ (0, K.jsxs)("option", {
								value: e,
								children: [
									h[e] || e,
									"（",
									e,
									"）"
								]
							}, e))
						})] })]
					}),
					/* @__PURE__ */ (0, K.jsxs)("nav", {
						className: "us-quick",
						"aria-label": "个股快捷导航",
						children: [
							/* @__PURE__ */ (0, K.jsx)("a", {
								href: "#trade-detail",
								children: "K 线与成交"
							}),
							/* @__PURE__ */ (0, K.jsx)("a", {
								href: "#valuation-detail",
								children: "估值情景"
							}),
							/* @__PURE__ */ (0, K.jsx)("a", {
								href: "#events",
								children: "事件与来源"
							})
						]
					}),
					/* @__PURE__ */ (0, K.jsxs)("p", { children: ["参考价：", E ? `$${Number(E.last_done).toFixed(2)} · ${E.timestamp}（美东，${E.session === "regular_close" ? "收盘" : "盘中"}）` : "待核验"] }),
					/* @__PURE__ */ (0, K.jsx)("div", { id: "trade-detail" }),
					/* @__PURE__ */ (0, K.jsx)(gv, {
						symbol: w,
						bars: e.chartHistory?.[w] || T,
						trades: [...e.chartTrades || [], ...f],
						asOf: e.chartHistoryAsOf || e.historyAsOf,
						session: e.chartHistorySession,
						coverage: e.chartTradeCoverage,
						checkedAt: e.chartTradeCheckedAt
					}),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-cards",
						children: [
							/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "过去 20 个交易日最低价" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: N === null ? "待核验" : `$${N.toFixed(2)}` })] }),
							/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "过去 20 个交易日最高价" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: P === null ? "待核验" : `$${P.toFixed(2)}` })] }),
							/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "估值情景" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: "待研究" })] })
						]
					}),
					/* @__PURE__ */ (0, K.jsxs)("p", {
						className: "us-muted",
						children: [
							"历史高低点截至 ",
							e.historyAsOf,
							"，是观察参考，不保证构成支撑或压力；盘中价格可能已突破。具体加减仓需要估值、账户风险与持仓数据共同验证。"
						]
					}),
					e.valuationIssues?.[w] && /* @__PURE__ */ (0, K.jsxs)("div", {
						className: "us-note",
						children: [/* @__PURE__ */ (0, K.jsx)("b", { children: "估值数据待核验：" }), e.valuationIssues[w]]
					}),
					e.institution?.[w] && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
						/* @__PURE__ */ (0, K.jsx)("h3", { children: "机构持仓线索" }),
						/* @__PURE__ */ (0, K.jsx)("p", { children: e.institution[w].text }),
						/* @__PURE__ */ (0, K.jsx)("a", {
							href: e.institution[w].url,
							target: "_blank",
							rel: "noreferrer",
							children: "查看第三方申报整理 ↗"
						})
					] }),
					/* @__PURE__ */ (0, K.jsx)("div", { id: "valuation-detail" }),
					e.comparison?.[w] && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "us-note",
							children: [/* @__PURE__ */ (0, K.jsxs)("b", { children: [e.comparison[w].action, "："] }), e.comparison[w].reason]
						}),
						/* @__PURE__ */ (0, K.jsx)("h3", { children: "经营与估值情景" }),
						/* @__PURE__ */ (0, K.jsx)("p", {
							className: "us-muted",
							children: "以下为条件性研究情景，并非目标价或收益预测。历史估值口径、增长和现金流尚须进一步复核；数值价格区间暂不发布。"
						}),
						/* @__PURE__ */ (0, K.jsx)("div", {
							className: "us-cards",
							children: [
								["保守", e.comparison[w].bear],
								["基准", e.comparison[w].base],
								["乐观", e.comparison[w].bull]
							].map(([e, t]) => /* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: e }), /* @__PURE__ */ (0, K.jsx)("p", { children: t })] }, e))
						})
					] }),
					/* @__PURE__ */ (0, K.jsx)(sf, {
						brokerTrades: e.chartTrades || [],
						onChange: p
					}),
					/* @__PURE__ */ (0, K.jsxs)("details", {
						className: "research-details",
						children: [
							/* @__PURE__ */ (0, K.jsx)("summary", { children: "估值、财报与研究依据" }),
							/* @__PURE__ */ (0, K.jsx)("h3", { children: "估值与现金流参考" }),
							/* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [
									"估值数据日期：",
									e.valuationAsOf || "2026-11-19（历史快照）",
									"，不一定是当前估值。历史分位按最多 36 个逐月正市盈率样本计算，口径、利润变动及异常值会影响比较；不直接转成目标价。"
								]
							}),
							O ? /* @__PURE__ */ (0, K.jsxs)("div", {
								className: "us-cards",
								children: [
									/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "收盘市盈率参考" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: O.pe !== null && O.pe > 0 ? `${O.pe.toFixed(1)} 倍` : "亏损或不适用" })] }),
									/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsxs)("small", { children: [
										"历史中位数 · ",
										O.historical?.count || 0,
										" 个有效样本"
									] }), /* @__PURE__ */ (0, K.jsx)("h3", { children: O.historical ? `${O.historical.median.toFixed(1)} 倍` : "样本不足或不适用" })] }),
									/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsxs)("small", { children: ["最近财年经营现金流 · ", O.cash?.fp_end || "日期未知"] }), /* @__PURE__ */ (0, K.jsx)("h3", { children: k("cash_oper") ? `$${(Number(k("cash_oper")) / 1e9).toFixed(2)} 十亿` : "待核验" })] })
								]
							}) : /* @__PURE__ */ (0, K.jsx)("p", { children: "估值数据待核验。" }),
							/* @__PURE__ */ (0, K.jsx)("p", {
								className: "us-muted",
								children: "历史估值与利润口径未全部逐项复核，部分接口存在冲突；经营现金流不等于自由现金流，未单独覆盖资本化软件或税收异常，不作为排序唯一依据。"
							}),
							k("stock_based_cf") && /* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [
									"同财年现金流量表中的股权激励费用：$",
									(Number(k("stock_based_cf")) / 1e9).toFixed(2),
									" 十亿美元；它是非现金调整，不应简单视为当期现金支出，但需评估股本稀释与回购成本。"
								]
							}),
							e.cashWarnings?.[w] && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("p", { children: e.cashWarnings[w].text }), /* @__PURE__ */ (0, K.jsx)("a", {
								href: e.cashWarnings[w].url,
								target: "_blank",
								rel: "noreferrer",
								children: "核对公司现金流披露 ↗"
							})] }),
							/* @__PURE__ */ (0, K.jsx)("h3", { children: "财报数据" }),
							A ? /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [A.report_txt, " · 长桥财务摘要，部分为财年累计数据；以下为研究线索，重要指标须回查公司财报。"]
							}), /* @__PURE__ */ (0, K.jsxs)("div", {
								className: "us-cards",
								children: [
									/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "营业收入（美元）" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: j("operating_revenue") ? Number(j("operating_revenue").indicator_value).toLocaleString("en-US") : "待核验" })] }),
									/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "净利润（美元）" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: j("net_profit") ? Number(j("net_profit").indicator_value).toLocaleString("en-US") : "待核验" })] }),
									/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "营业收入同比" }), /* @__PURE__ */ (0, K.jsx)("h3", { children: j("operating_revenue")?.yoy ? fv(Number(j("operating_revenue").yoy) * 100) : "待核验" })] })
								]
							})] }) : /* @__PURE__ */ (0, K.jsx)("p", { children: "财报摘要待核验。" }),
							/* @__PURE__ */ (0, K.jsx)("h3", { children: "历史估值、同行与事件复核" }),
							e.audit?.[w] ? /* @__PURE__ */ (0, K.jsxs)("div", {
								className: "us-note",
								children: [
									/* @__PURE__ */ (0, K.jsx)("p", { children: e.audit[w].history }),
									e.audit[w].calc && /* @__PURE__ */ (0, K.jsx)("p", { children: e.audit[w].calc }),
									/* @__PURE__ */ (0, K.jsx)("p", { children: e.audit[w].peers }),
									/* @__PURE__ */ (0, K.jsxs)("p", { children: [
										e.audit[w].event,
										" ",
										e.audit[w].eventUrl && /* @__PURE__ */ (0, K.jsx)("a", {
											href: e.audit[w].eventUrl,
											target: "_blank",
											rel: "noreferrer",
											children: "查看披露 ↗"
										})
									] })
								]
							}) : /* @__PURE__ */ (0, K.jsx)("p", { children: "逐项核验待完成。" }),
							/* @__PURE__ */ (0, K.jsx)("h3", { children: "研究线索" }),
							/* @__PURE__ */ (0, K.jsx)("p", { children: g[w]?.text || "当前尚未完成最新财报、历史估值及同行比较，暂不提供个股结论。" }),
							g[w]?.url && /* @__PURE__ */ (0, K.jsx)("a", {
								href: g[w].url,
								target: "_blank",
								rel: "noreferrer",
								children: "查看公司财报 ↗"
							}),
							/* @__PURE__ */ (0, K.jsxs)("p", {
								className: "us-muted",
								children: [
									"个股研究上次复核：",
									e.researchAsOf?.[w] || (g[w] ? "2026-11-20（历史记录）" : "尚无研究记录"),
									"；行情刷新不等同于重新研究。"
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "us-panel",
				id: "funds",
				children: [
					/* @__PURE__ */ (0, K.jsx)("h2", { children: "ETF 与杠杆工具" }),
					/* @__PURE__ */ (0, K.jsx)("p", {
						className: "us-muted",
						children: "分开列示，不与普通股票做同一套持有价值排行；杠杆 ETF 有每日重置和路径风险。"
					}),
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "fund-groups",
						children: [
							["普通股票 ETF", (e) => !["TLT", "FIGG"].includes(e.symbol)],
							["债券 ETF", (e) => e.symbol === "TLT"],
							["单股杠杆 ETF", (e) => e.symbol === "FIGG"]
						].map(([t, n]) => {
							let r = y.filter((t) => (e.fundSymbols || []).includes(t.symbol) && n(t));
							return /* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("h3", { children: t }), r.length ? r.map((e) => /* @__PURE__ */ (0, K.jsxs)("p", { children: [
								e.name,
								"（",
								e.symbol,
								"） · ",
								e.account,
								" · ",
								e.quantity === null ? "数量待核验" : `${e.quantity} 份`,
								" · ",
								e.price ? `$${e.price.toFixed(2)}` : "价格待核验"
							] }, e.symbol)) : /* @__PURE__ */ (0, K.jsx)("p", { children: "暂无已确认记录" })] }, t);
						})
					}),
					/* @__PURE__ */ (0, K.jsx)("p", {
						className: "us-muted",
						children: "基金可能与个股或其他基金重复持有同一公司；具体重叠比例需核对最新基金成分及完整账户。FIGG 与 Figma（FIG）属于同一标的方向，杠杆基金会放大波动。"
					})
				]
			}),
			/* @__PURE__ */ (0, K.jsx)("section", {
				className: "us-panel event-panel",
				id: "events",
				children: /* @__PURE__ */ (0, K.jsxs)("details", { children: [
					/* @__PURE__ */ (0, K.jsxs)("summary", { children: [/* @__PURE__ */ (0, K.jsx)("span", { children: "重大变化检查" }), /* @__PURE__ */ (0, K.jsxs)("small", { children: [
						e.reviewStatus?.status === "complete" ? "已检查" : "部分复核",
						" · ",
						e.reviewStatus?.events?.length || 0,
						" 条线索"
					] })] }),
					/* @__PURE__ */ (0, K.jsx)("p", {
						className: "us-muted",
						children: e.reviewStatus?.checkedAt ? `上次检查：${e.reviewStatus.checkedAt} · ${e.reviewStatus.status === "complete" ? "已完成" : e.reviewStatus.status === "partial" ? "部分完成" : "未完成"}` : "尚未完成新版事件检查，不能据此判断没有重大变化。"
					}),
					e.reviewStatus?.summary && /* @__PURE__ */ (0, K.jsx)("p", { children: e.reviewStatus.summary }),
					e.reviewStatus?.events?.map((e, t) => /* @__PURE__ */ (0, K.jsxs)("p", { children: [
						e.symbol,
						" · ",
						e.date,
						" · ",
						e.summary,
						" ",
						/* @__PURE__ */ (0, K.jsx)("a", {
							href: e.url,
							target: "_blank",
							rel: "noreferrer",
							children: "查看来源 ↗"
						})
					] }, `${e.symbol}-${t}`))
				] })
			}),
			/* @__PURE__ */ (0, K.jsx)("section", {
				className: "us-panel",
				children: /* @__PURE__ */ (0, K.jsxs)("details", {
					className: "research-details",
					children: [
						/* @__PURE__ */ (0, K.jsx)("summary", { children: "机构持仓线索" }),
						/* @__PURE__ */ (0, K.jsx)("p", { children: "13F 为季度末快照，不能代表机构实时交易。重要持仓变动需逐项核对 SEC 原始申报，不依据网站估算成本或收益直接交易。" }),
						/* @__PURE__ */ (0, K.jsx)("a", {
							href: "https://aiyuan.ai/gurus",
							target: "_blank",
							rel: "noreferrer",
							children: "查看机构追踪资料 ↗"
						})
					]
				})
			})
		]
	});
}
function vv({ holdings: e }) {
	return e ? /* @__PURE__ */ (0, K.jsx)(_v, {}) : /* @__PURE__ */ (0, K.jsx)(mv, {});
}
// src/stock-detail.tsx
var yv = (e) => e.toFixed(2), bv = (e) => (e >= 0 ? "+" : "") + e.toFixed(2) + "%";
function xv({ stock: e, bars: t, days: n }) {
	let r = D.useRef(null), i = D.useRef(null), [a, o] = D.useState(null);
	D.useEffect(() => {
		if (!r.current) return;
		let a = r.current, s = E_(a, {
			height: 300,
			autoSize: !0,
			layout: {
				background: {
					type: sh.Solid,
					color: "#ffffff"
				},
				textColor: "#7c8984",
				fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif",
				fontSize: 11,
				attributionLogo: !0
			},
			grid: {
				vertLines: { color: "#f4f6f3" },
				horzLines: { color: "#edf1ed" }
			},
			crosshair: { mode: cp.Normal },
			rightPriceScale: {
				borderVisible: !1,
				scaleMargins: {
					top: .15,
					bottom: .12
				}
			},
			timeScale: {
				borderVisible: !1,
				timeVisible: !1,
				rightOffset: 3
			},
			handleScale: {
				mouseWheel: !0,
				pinch: !0,
				axisPressedMouseMove: !0
			},
			handleScroll: {
				mouseWheel: !1,
				pressedMouseMove: !0,
				horzTouchDrag: !0,
				vertTouchDrag: !1
			}
		});
		i.current = s;
		let c = s.addSeries(G_, {
			upColor: "#d55b54",
			downColor: "#15936e",
			borderUpColor: "#d55b54",
			borderDownColor: "#15936e",
			wickUpColor: "#d55b54",
			wickDownColor: "#15936e",
			priceLineVisible: !0,
			lastValueVisible: !0
		}), l = t.slice(-n);
		c.setData(l.map(([e, t, n, r, i]) => ({
			time: e,
			open: t,
			high: n,
			low: r,
			close: i
		}))), e.technical && (c.createPriceLine({
			price: e.technical.low,
			color: "#219b79",
			lineWidth: 1,
			lineStyle: xf.Dashed,
			axisLabelVisible: !0,
			title: "20日低"
		}), c.createPriceLine({
			price: e.technical.high,
			color: "#c2934b",
			lineWidth: 1,
			lineStyle: xf.Dashed,
			axisLabelVisible: !0,
			title: "5日高"
		})), s.timeScale().fitContent();
		let u = new Map(l.map((e) => [e[0], e]));
		s.subscribeCrosshairMove((e) => {
			let t = typeof e.time == "string" ? e.time : "";
			o(u.get(t) ?? null);
		});
		let d = -1, f = 0, p = new ResizeObserver((e) => {
			let t = Math.round(e[0].contentRect.width);
			t === d || t <= 0 || (d = t, cancelAnimationFrame(f), f = requestAnimationFrame(() => {}));
		});
		return p.observe(a), () => {
			p.disconnect(), cancelAnimationFrame(f), i.current = null, s.remove();
		};
	}, [
		e,
		t,
		n
	]);
	let s = a ?? t.at(-1);
	return /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
		/* @__PURE__ */ (0, K.jsxs)("div", {
			className: "sd-ohlc",
			"aria-live": "off",
			children: [
				/* @__PURE__ */ (0, K.jsx)("span", { children: s[0] }),
				/* @__PURE__ */ (0, K.jsxs)("span", { children: ["开 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(s[1]) })] }),
				/* @__PURE__ */ (0, K.jsxs)("span", { children: ["高 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(s[2]) })] }),
				/* @__PURE__ */ (0, K.jsxs)("span", { children: ["低 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(s[3]) })] }),
				/* @__PURE__ */ (0, K.jsxs)("span", { children: ["收 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(s[4]) })] })
			]
		}),
		/* @__PURE__ */ (0, K.jsx)("div", {
			className: "sd-chart",
			ref: r,
			"aria-label": `${e.name}前复权日K线，可拖动和缩放`,
			role: "img"
		}),
		/* @__PURE__ */ (0, K.jsxs)("div", {
			className: "sd-chart-footer",
			children: [
				/* @__PURE__ */ (0, K.jsx)("button", {
					type: "button",
					className: "sd-reset",
					onClick: () => i.current?.timeScale().fitContent(),
					children: "恢复图表范围"
				}),
				/* @__PURE__ */ (0, K.jsxs)("span", { children: [
					/* @__PURE__ */ (0, K.jsx)("i", { className: "sd-legend-support" }),
					"近20日低 ",
					/* @__PURE__ */ (0, K.jsx)("i", { className: "sd-legend-pressure" }),
					"近5日高 ",
					/* @__PURE__ */ (0, K.jsx)("span", {
						className: "sd-subtle",
						children: "· 红涨绿跌 · 拖动或缩放查看"
					})
				] }),
				/* @__PURE__ */ (0, K.jsx)("a", {
					href: "https://www.tradingview.com/",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "TradingView Lightweight Charts™ · © 2025 TradingView, Inc. ↗"
				})
			]
		})
	] });
}
function Sv({ stock: e, snapshotDate: t, researchDate: n }) {
	let r = e.bookCases?.map((t) => ({
		name: t.name,
		low: e.bps * (t.bpsFactor ?? 1) * t.lo,
		high: e.bps * (t.bpsFactor ?? 1) * t.hi,
		formula: `每股净资产约 ${yv(e.bps)} 元 × ${((t.bpsFactor ?? 1) * 100).toFixed(0)}% × PB ${t.lo}–${t.hi} 倍（计算使用未取整数据）`,
		basis: t.basis
	})) ?? e.scenarios?.map(([t, n, r], i) => ({
		name: [
			"保守",
			"基准",
			"乐观"
		][i],
		low: t * n,
		high: t * r,
		formula: `EPS 约 ${yv(t)} 元 × PE ${n}–${r} 倍（计算使用未取整数据）`,
		basis: e.scenarioNotes?.[i] ?? ""
	})) ?? [], i = Math.max(e.price, ...r.map((e) => e.high)) * 1.08;
	return /* @__PURE__ */ (0, K.jsxs)("section", {
		className: "sd-panel sd-valuation",
		"aria-labelledby": "sd-valuation-title",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-section-heading",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "sd-overline",
						children: "SCENARIO ANALYSIS"
					}),
					/* @__PURE__ */ (0, K.jsx)("h3", {
						id: "sd-valuation-title",
						children: "估值情景"
					}),
					/* @__PURE__ */ (0, K.jsx)("p", { children: "2027年末压力测试 · 假设情景，不是目标价" })
				] }), /* @__PURE__ */ (0, K.jsx)("span", {
					className: "sd-method",
					children: e.bookCases ? "PB 压力测试" : "EPS × PE 情景"
				})]
			}),
			/* @__PURE__ */ (0, K.jsxs)("p", {
				className: "sd-case-note",
				children: [
					"研究复核：",
					n || "未记录",
					"；行情：",
					t,
					"。收入、利润率和估值倍数是研究假设，依据仍需补充，不能视为可靠预测或买卖价格；区间未计股息、概率及资金时间价值。"
				]
			}),
			e.bookCases && /* @__PURE__ */ (0, K.jsxs)("p", {
				className: "sd-case-note",
				children: [
					e.caseBasis,
					" 以研究时每股净资产估算的快照 PB 约 ",
					yv(e.price / e.bps),
					" 倍；净资产及股本时点见估值依据。"
				]
			}),
			e.valuationContext && /* @__PURE__ */ (0, K.jsx)("div", {
				className: "sd-evidence-grid",
				children: e.valuationContext.map((e) => /* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("b", { children: e.label }), /* @__PURE__ */ (0, K.jsx)("p", { children: e.text })] }, e.label))
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "sd-scenario-grid",
				children: r.map((n, r) => /* @__PURE__ */ (0, K.jsxs)("article", {
					className: `sd-scenario sd-scenario-${r}`,
					children: [
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-case-title",
							children: [/* @__PURE__ */ (0, K.jsxs)("span", {
								className: "sd-case-index",
								children: ["0", r + 1]
							}), /* @__PURE__ */ (0, K.jsx)("b", { children: n.name })]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-case-price",
							children: [
								yv(n.low),
								" ",
								/* @__PURE__ */ (0, K.jsx)("span", { children: "—" }),
								" ",
								yv(n.high),
								" ",
								/* @__PURE__ */ (0, K.jsx)("small", { children: "元" })
							]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-case-relative",
							children: [
								"相对 ",
								t,
								" 收盘价 ",
								bv((n.low / e.price - 1) * 100),
								" ~ ",
								bv((n.high / e.price - 1) * 100)
							]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-case-rail",
							children: [/* @__PURE__ */ (0, K.jsx)("span", { style: {
								left: `${n.low / i * 100}%`,
								width: `${(n.high - n.low) / i * 100}%`
							} }), /* @__PURE__ */ (0, K.jsx)("i", {
								style: { left: `${e.price / i * 100}%` },
								title: `收盘价 ${yv(e.price)} 元`
							})]
						}),
						/* @__PURE__ */ (0, K.jsx)("p", { children: n.formula }),
						n.basis && /* @__PURE__ */ (0, K.jsx)("p", { children: n.basis })
					]
				}, n.name))
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-case-key",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", {}), " 区间"] }),
					/* @__PURE__ */ (0, K.jsxs)("span", { children: [
						/* @__PURE__ */ (0, K.jsx)("b", {}),
						" 收盘价 ",
						yv(e.price),
						" 元"
					] }),
					/* @__PURE__ */ (0, K.jsx)("span", { children: "竖线及区间使用同一比例尺" })
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("details", {
				className: "sd-disclosure",
				children: [/* @__PURE__ */ (0, K.jsxs)("summary", { children: [/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)(ie, { size: 16 }), " 查看估值依据与限制"] }), /* @__PURE__ */ (0, K.jsx)(z, { size: 16 })] }), /* @__PURE__ */ (0, K.jsxs)("div", {
					className: "sd-disclosure-body",
					children: [
						/* @__PURE__ */ (0, K.jsx)("p", { children: e.assumptions }),
						/* @__PURE__ */ (0, K.jsx)("p", { children: e.evidenceNote }),
						/* @__PURE__ */ (0, K.jsxs)("p", { children: [
							"近 20 日收盘区间 ",
							yv(e.recent20[0]),
							"–",
							yv(e.recent20[1]),
							" 元；近 60 日 ",
							yv(e.recent60[0]),
							"–",
							yv(e.recent60[1]),
							" 元。历史区间不是支撑或预测。"
						] }),
						e.bookCases && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("p", { children: "以上是静态压力测试，每股净资产调整幅度及 PB 均为根据历史、同行和经营状况设定的情景假设，不代表合理估值或发生概率。亏损、减值、分红和股本变化均会改变结果。" }), /* @__PURE__ */ (0, K.jsxs)("p", { children: [
							"按当前快照估算市值 ",
							yv(e.price * e.shareCapital / 1e8),
							" 亿元；按 20 倍市盈率反推需全年归母利润约 ",
							yv(e.price * e.shareCapital / 1e8 / 20),
							" 亿元，并非利润预测。"
						] })] })
					]
				})]
			})
		]
	});
}
function Cv({ stock: e, snapshotDate: t }) {
	let n = e.technical;
	if (!n) return null;
	let r = [
		{
			name: "近期支撑",
			value: n.low,
			date: n.lowDate,
			note: "前20日最低",
			tone: "support"
		},
		{
			name: "关键支撑",
			value: n.low60,
			date: n.low60Date,
			note: "前60日最低",
			tone: "support"
		},
		{
			name: "近期压力",
			value: n.high,
			date: n.highDate,
			note: "前5日最高",
			tone: "pressure"
		},
		{
			name: "更远压力",
			value: n.high20,
			date: n.high20Date,
			note: "前20日最高",
			tone: "pressure"
		}
	];
	return /* @__PURE__ */ (0, K.jsxs)("section", {
		className: "sd-panel",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-section-heading",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "sd-overline",
						children: "PRICE LEVELS"
					}),
					/* @__PURE__ */ (0, K.jsx)("h3", { children: "近期支撑与压力" }),
					/* @__PURE__ */ (0, K.jsx)("p", { children: "基于收盘前历史高低点的观察位" })
				] }), /* @__PURE__ */ (0, K.jsx)("span", {
					className: "sd-method",
					children: "前复权 · 元"
				})]
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "sd-level-grid",
				children: r.map((t, n) => /* @__PURE__ */ (0, K.jsxs)("div", {
					className: "sd-level",
					children: [
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-level-top",
							children: [/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", { className: `sd-dot ${t.tone}` }), t.name] }), /* @__PURE__ */ (0, K.jsx)("small", { children: t.note })]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-level-number",
							children: [
								yv(t.value),
								" ",
								/* @__PURE__ */ (0, K.jsx)("small", { children: "元" })
							]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-level-bottom",
							children: [
								t.date,
								" · 相对收盘 ",
								bv((t.value / e.price - 1) * 100)
							]
						})
					]
				}, n))
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-level-context",
				children: [/* @__PURE__ */ (0, K.jsx)("b", { children: "当前观察" }), /* @__PURE__ */ (0, K.jsxs)("span", { children: [e.price < n.low ? "收盘已跌破近期低点，观察能否收复并连续站稳。" : "收盘在近期低点上方，观察回踩后能否止跌并收回该价。", " 反弹受阻时结合仓位复核；突破后观察能否站稳。"] })]
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-indicators",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("span", { children: ["20 日均线 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(n.ma20) })] }),
					/* @__PURE__ */ (0, K.jsxs)("span", { children: ["60 日均线 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(n.ma60) })] }),
					/* @__PURE__ */ (0, K.jsxs)("span", { children: ["20 日量加权收盘均价 ", /* @__PURE__ */ (0, K.jsx)("b", { children: yv(n.vwapClose) })] }),
					/* @__PURE__ */ (0, K.jsxs)("span", { children: ["当日量 / 前20日均量 ", /* @__PURE__ */ (0, K.jsxs)("b", { children: [yv(n.volumeRatio), " 倍"] })] })
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("p", {
				className: "sd-fineprint",
				children: [
					"数据截至 ",
					t,
					" 收盘；高低点排除当日，均线与量价均价含当日。量加权收盘均价不是逐笔成交密集区或持仓成本；观察位并非保证支撑或自动交易信号。"
				]
			})
		]
	});
}
function wv({ stock: e, bars: t, payload: n, onReady: r }) {
	let [i, a] = D.useState("60");
	D.useEffect(r, []);
	let o = (e.price / e.prev - 1) * 100, s = [
		...e.report ? [["公司季报", e.report]] : [],
		...e.annual ? [["公司年报", e.annual]] : [],
		...e.extra ? [e.extra] : [],
		...e.sources ?? []
	];
	return /* @__PURE__ */ (0, K.jsxs)("div", {
		className: "stock-workspace",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-hero",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", {
					className: "sd-identity",
					children: [
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-overline",
							children: [
								"STOCK RESEARCH ",
								/* @__PURE__ */ (0, K.jsx)("span", { children: " / " }),
								" ",
								e.symbol
							]
						}),
						/* @__PURE__ */ (0, K.jsxs)("div", {
							className: "sd-name",
							children: [/* @__PURE__ */ (0, K.jsx)("h2", { children: e.name }), /* @__PURE__ */ (0, K.jsx)("span", { children: e.tag })]
						}),
						/* @__PURE__ */ (0, K.jsx)("p", { children: e.role })
					]
				}), /* @__PURE__ */ (0, K.jsxs)("div", {
					className: "sd-quote",
					children: [
						/* @__PURE__ */ (0, K.jsxs)("small", { children: ["收盘价格 · ", n.snapshotDate] }),
						/* @__PURE__ */ (0, K.jsxs)("div", { children: [
							/* @__PURE__ */ (0, K.jsx)("strong", { children: yv(e.price) }),
							/* @__PURE__ */ (0, K.jsx)("span", { children: " CNY" }),
							/* @__PURE__ */ (0, K.jsxs)("b", {
								className: o >= 0 ? "up" : "down",
								children: [
									o >= 0 ? /* @__PURE__ */ (0, K.jsx)(F, { size: 15 }) : /* @__PURE__ */ (0, K.jsx)(N, { size: 15 }),
									" ",
									bv(o)
								]
							})
						] }),
						/* @__PURE__ */ (0, K.jsxs)("small", { children: [
							"收盘 ",
							e.time,
							" · 前复权"
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-metrics",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "综合持有排序" }),
						/* @__PURE__ */ (0, K.jsxs)("strong", { children: [
							/* @__PURE__ */ (0, K.jsxs)("em", { children: ["#", e.holdingRank] }),
							" / ",
							n.stocks.length
						] }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "2–3 年持有视角" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "持有股数" }),
						/* @__PURE__ */ (0, K.jsxs)("strong", { children: [
							e.shares.toLocaleString(),
							" ",
							/* @__PURE__ */ (0, K.jsx)("em", {
								className: "sd-unit",
								children: "股"
							})
						] }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "数量以记录为准" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "所列 A 股证券占比" }),
						/* @__PURE__ */ (0, K.jsx)("strong", { children: e.weight === null ? "待核" : yv(e.weight) + "%" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "仅占所列证券，不含现金" })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "持仓成本" }),
						/* @__PURE__ */ (0, K.jsx)("strong", { children: e.cost === null ? "分账户记录" : yv(e.cost) + " 元" }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: "不影响持有价值排序" })
					] })
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "sd-thesis",
				children: [/* @__PURE__ */ (0, K.jsx)("div", {
					className: "sd-thesis-mark",
					children: /* @__PURE__ */ (0, K.jsx)(ue, { size: 19 })
				}), /* @__PURE__ */ (0, K.jsxs)("div", { children: [
					/* @__PURE__ */ (0, K.jsx)("span", { children: "持有判断" }),
					/* @__PURE__ */ (0, K.jsx)("p", { children: e.holdingReason }),
					/* @__PURE__ */ (0, K.jsxs)("p", {
						className: "sd-thesis-meta",
						children: [
							"研究复核：",
							n.researchDate || n.snapshotDate,
							" · 综合经营质量、盈利与现金流、成长、估值和风险；历史估值及同行比较证据有限。以下复核条件变化时重新判断。"
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "sd-panel sd-chart-panel",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", {
					className: "sd-section-heading sd-chart-heading",
					children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("div", {
							className: "sd-overline",
							children: "PRICE HISTORY"
						}),
						/* @__PURE__ */ (0, K.jsxs)("h3", { children: ["价格走势 ", /* @__PURE__ */ (0, K.jsx)("span", { children: "日 K 线" })] }),
						/* @__PURE__ */ (0, K.jsxs)("p", { children: [
							"长桥前复权 · ",
							t.slice(-Number(i))[0][0],
							" 至 ",
							n.snapshotDate
						] })
					] }), /* @__PURE__ */ (0, K.jsx)(Wo, {
						value: i,
						onValueChange: (e) => {
							e && a(String(e));
						},
						children: /* @__PURE__ */ (0, K.jsx)(Ko, {
							className: "sd-range-list",
							"aria-label": "K 线时间范围",
							children: [
								"30",
								"60",
								"120"
							].map((e) => /* @__PURE__ */ (0, K.jsxs)(qo, {
								value: e,
								className: "sd-range-tab",
								children: [e, " 日"]
							}, e))
						})
					})]
				}), /* @__PURE__ */ (0, K.jsx)(xv, {
					stock: e,
					bars: t,
					days: Number(i)
				})]
			}),
			/* @__PURE__ */ (0, K.jsx)(Sv, {
				stock: e,
				snapshotDate: n.snapshotDate,
				researchDate: n.researchDate
			}),
			/* @__PURE__ */ (0, K.jsx)(Cv, {
				stock: e,
				snapshotDate: n.snapshotDate
			}),
			/* @__PURE__ */ (0, K.jsxs)("section", {
				className: "sd-panel sd-research",
				children: [
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "sd-section-heading",
						children: /* @__PURE__ */ (0, K.jsxs)("div", { children: [
							/* @__PURE__ */ (0, K.jsx)("div", {
								className: "sd-overline",
								children: "RESEARCH NOTES"
							}),
							/* @__PURE__ */ (0, K.jsx)("h3", { children: "经营与复核" }),
							/* @__PURE__ */ (0, K.jsx)("p", { children: "保留原研究结论和信息来源" })
						] })
					}),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "sd-research-grid",
						children: [/* @__PURE__ */ (0, K.jsxs)("article", { children: [/* @__PURE__ */ (0, K.jsx)("h4", { children: "经营概况" }), /* @__PURE__ */ (0, K.jsx)("p", { children: e.facts })] }), /* @__PURE__ */ (0, K.jsxs)("article", { children: [
							/* @__PURE__ */ (0, K.jsx)("h4", { children: "下一次复核" }),
							/* @__PURE__ */ (0, K.jsx)("p", { children: e.check }),
							/* @__PURE__ */ (0, K.jsx)("p", {
								className: "sd-subtle",
								children: e.invalidate
							})
						] })]
					}),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "sd-source-row",
						children: [/* @__PURE__ */ (0, K.jsx)("span", { children: "资料来源" }), s.filter(([, e]) => e?.startsWith("https://")).map(([e, t], n) => /* @__PURE__ */ (0, K.jsxs)("a", {
							href: t,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [e, /* @__PURE__ */ (0, K.jsx)(ae, { size: 13 })]
						}, n))]
					})
				]
			})
		]
	});
}
// src/industry-charts.tsx
var Tv = [
	"#37886a",
	"#c9944a",
	"#5086b0",
	"#aa6d8a",
	"#8879b1",
	"#a7b5aa"
], Ev = (e) => e.toLocaleString("zh-CN", { maximumFractionDigits: 2 }), Dv = (e) => (e > 0 ? "+" : "") + e.toFixed(1) + "%", Ov = {
	layout: {
		background: {
			type: sh.Solid,
			color: "#ffffff"
		},
		textColor: "#84958b",
		fontFamily: "-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif",
		fontSize: 11,
		attributionLogo: !0
	},
	grid: {
		vertLines: { color: "#f4f7f3" },
		horzLines: { color: "#edf2ed" }
	},
	crosshair: { mode: cp.Normal },
	rightPriceScale: {
		borderVisible: !1,
		scaleMargins: {
			top: .15,
			bottom: .12
		}
	},
	timeScale: {
		borderVisible: !1,
		rightOffset: 2
	},
	handleScroll: {
		mouseWheel: !1,
		pressedMouseMove: !0,
		horzTouchDrag: !0,
		vertTouchDrag: !1
	},
	handleScale: {
		mouseWheel: !0,
		pinch: !0,
		axisPressedMouseMove: !0
	}
}, kv = (e) => {
	if (typeof e == "string") return e;
	if (typeof e == "object" && e && "year" in e) {
		let t = e;
		return `${t.year}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
	}
	return "";
};
function Av(e, t = 20) {
	let n = 0;
	return e.map(([r, i], a) => (n += i, a >= t && (n -= e[a - t][1]), [r, n / Math.min(t, a + 1)]));
}
function jv(e, t) {
	let n = -1, r = 0, i = new ResizeObserver((e) => {
		let t = Math.round(e[0].contentRect.width);
		t === n || t <= 0 || (n = t, cancelAnimationFrame(r), r = requestAnimationFrame(() => {}));
	});
	return i.observe(e), () => {
		i.disconnect(), cancelAnimationFrame(r);
	};
}
function Mv() {
	return /* @__PURE__ */ (0, K.jsx)("a", {
		className: "ic-credit",
		href: "https://www.tradingview.com/",
		target: "_blank",
		rel: "noopener noreferrer",
		children: "TradingView Lightweight Charts™ · © 2025 TradingView, Inc. ↗"
	});
}
function Nv({ value: e, onChange: t }) {
	return /* @__PURE__ */ (0, K.jsx)("div", {
		className: "ic-range",
		role: "group",
		"aria-label": "图表时间范围",
		children: [
			["60", "60日"],
			["120", "120日"],
			["all", "一年"]
		].map(([n, r]) => /* @__PURE__ */ (0, K.jsx)("button", {
			type: "button",
			"aria-pressed": e === n,
			onClick: () => t(n),
			children: r
		}, n))
	});
}
function Pv({ selector: e, doc: t, series: n }) {
	let [r, i] = D.useState(e.value), [a, o] = D.useState("");
	D.useEffect(() => {
		let t = () => i(e.value);
		return e.addEventListener("industry-selected", t), () => e.removeEventListener("industry-selected", t);
	}, [e]);
	let [s, c] = D.useState({
		side: "bottom",
		height: 320
	}), l = (e) => {
		if (!e) return;
		let n = t.querySelector(".ic-selector-trigger"), r = t.defaultView?.frameElement;
		if (!n || !r) return;
		let i = r.getBoundingClientRect(), a = n.getBoundingClientRect(), o = i.top + a.top, s = i.top + a.bottom, l = Math.max(0, o - 12), u = Math.max(0, window.innerHeight - s - 12), d = u < 240 && l > u ? "top" : "bottom";
		c({
			side: d,
			height: Math.max(80, Math.min(320, (d === "top" ? l : u) - 8))
		});
	}, u = Array.from(e.options).map((e) => ({
		value: e.value,
		label: e.text
	}));
	D.useEffect(() => (e.hidden = !0, e.setAttribute("aria-hidden", "true"), e.tabIndex = -1, () => {
		e.hidden = !1, e.removeAttribute("aria-hidden"), e.tabIndex = 0;
	}), [e]);
	let d = u.filter((e) => !a || (e.label + " " + (n.find((t) => t.name === e.value)?.group ?? "")).toLowerCase().includes(a.toLowerCase()));
	return /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("input", {
		className: "ic-search",
		value: a,
		onChange: (e) => o(e.target.value),
		placeholder: "搜索行业或分类",
		"aria-label": "搜索行业"
	}), /* @__PURE__ */ (0, K.jsxs)(Ud, {
		value: r,
		items: u,
		onOpenChange: l,
		onValueChange: (t) => {
			t && t !== e.value && (i(String(t)), e.value = String(t), e.dispatchEvent(new Event("change", { bubbles: !0 })));
		},
		children: [/* @__PURE__ */ (0, K.jsx)(Gd, {
			"aria-label": "选择行业查看日线明细",
			className: "ic-selector-trigger",
			children: /* @__PURE__ */ (0, K.jsx)(Wd, {})
		}), /* @__PURE__ */ (0, K.jsxs)(Kd, {
			className: "ic-selector-menu",
			positionerClassName: "ic-selector-positioner",
			portalContainer: t.body,
			align: "start",
			side: s.side,
			style: { maxHeight: s.height },
			alignItemWithTrigger: !1,
			children: [d.map((e) => /* @__PURE__ */ (0, K.jsxs)(qd, {
				className: "ic-selector-option",
				value: e.value,
				children: [
					e.label,
					" ",
					/* @__PURE__ */ (0, K.jsx)("small", { children: n.find((t) => t.name === e.value)?.group })
				]
			}, e.value)), !d.length && /* @__PURE__ */ (0, K.jsx)("div", {
				className: "ic-empty",
				children: "没有匹配的行业"
			})]
		})]
	})] });
}
function Fv({ item: e, asOf: t }) {
	let [n, r] = D.useState("all"), [i, a] = D.useState(null), o = D.useRef(null), s = D.useRef(null), c = n === "all" ? e.daily : e.daily.slice(-Number(n)), l = Av(e.daily).slice(-c.length);
	D.useEffect(() => {
		if (!o.current) return;
		let e = E_(o.current, {
			...Ov,
			autoSize: !0,
			height: 310
		});
		s.current = e;
		let t = e.addSeries(V_, {
			color: Tv[0],
			lineWidth: 2,
			lastValueVisible: !0,
			priceLineVisible: !1,
			title: "收盘",
			crosshairMarkerVisible: !0
		}), n = e.addSeries(V_, {
			color: Tv[1],
			lineWidth: 2,
			lineStyle: xf.Dashed,
			lastValueVisible: !1,
			priceLineVisible: !1,
			crosshairMarkerVisible: !0
		});
		t.setData(c.map(([e, t]) => ({
			time: e,
			value: t
		}))), n.setData(l.map(([e, t]) => ({
			time: e,
			value: t
		}))), e.timeScale().fitContent();
		let r = new Map(c.map(([e, t], n) => [e, {
			date: e,
			value: t,
			ma: l[n][1]
		}]));
		e.subscribeCrosshairMove((e) => a(r.get(kv(e.time)) ?? null));
		let i = jv(o.current, e);
		return () => {
			i(), s.current = null, e.remove();
		};
	}, [e, n]);
	let u = i ?? {
		date: t,
		value: e.current,
		ma: l.at(-1)?.[1] ?? 0
	};
	return /* @__PURE__ */ (0, K.jsxs)("div", {
		className: "ic-detail",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "ic-detail-head",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "ic-caption",
						children: "INDUSTRY TREND"
					}),
					/* @__PURE__ */ (0, K.jsxs)("h3", { children: [
						e.name,
						" ",
						/* @__PURE__ */ (0, K.jsx)("span", { children: n === "all" ? "一年日线" : `近 ${n} 个交易日` })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", {
						className: "ic-selected",
						children: [
							u.date,
							" ",
							/* @__PURE__ */ (0, K.jsxs)("span", { children: ["收盘 ", /* @__PURE__ */ (0, K.jsx)("b", { children: Ev(u.value) })] }),
							/* @__PURE__ */ (0, K.jsxs)("span", { children: ["20日均线 ", /* @__PURE__ */ (0, K.jsx)("b", { children: Ev(u.ma) })] })
						]
					})
				] }), /* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)(Nv, {
					value: n,
					onChange: r
				}), /* @__PURE__ */ (0, K.jsx)("button", {
					className: "ic-reset",
					type: "button",
					onClick: () => s.current?.timeScale().fitContent(),
					children: "恢复图表范围"
				})] })]
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "ic-summary",
				children: [
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "最新收盘" }), /* @__PURE__ */ (0, K.jsx)("strong", { children: Ev(e.current) })] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [
						/* @__PURE__ */ (0, K.jsx)("small", { children: "一年最高收盘" }),
						/* @__PURE__ */ (0, K.jsx)("strong", { children: Ev(e.high) }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: e.highDate })
					] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "距一年高点" }), /* @__PURE__ */ (0, K.jsx)("strong", {
						className: "ic-loss",
						children: Dv(e.drawdown)
					})] }),
					/* @__PURE__ */ (0, K.jsxs)("div", { children: [/* @__PURE__ */ (0, K.jsx)("small", { children: "一年涨跌" }), /* @__PURE__ */ (0, K.jsx)("strong", {
						className: e.return1y >= 0 ? "ic-up" : "ic-loss",
						children: Dv(e.return1y)
					})] })
				]
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "ic-plot",
				ref: o,
				role: "img",
				"aria-label": `${e.name}日收盘和20日均线图，可拖动和缩放`
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "ic-footer",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", {
					className: "ic-key",
					children: [
						/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", { style: { background: Tv[0] } }), "日收盘"] }),
						/* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("i", { style: { background: Tv[1] } }), "20日均线"] }),
						/* @__PURE__ */ (0, K.jsxs)("span", { children: ["拖动或缩放 · 数据截至 ", t] })
					]
				}), /* @__PURE__ */ (0, K.jsx)(Mv, {})]
			})
		]
	});
}
function Iv({ group: e, items: t, benchmark: n, asOf: r }) {
	let [i, a] = D.useState([]), [o, s] = D.useState(null), c = D.useRef(null), l = D.useRef(null), u = D.useRef(null);
	D.useEffect(() => {
		if (!c.current) return;
		let e = E_(c.current, {
			...Ov,
			autoSize: !0,
			height: 220,
			layout: {
				...Ov.layout,
				fontSize: 10
			},
			rightPriceScale: {
				...Ov.rightPriceScale,
				scaleMargins: {
					top: .12,
					bottom: .1
				}
			}
		}), r = [...t, n], a = r.map((t, n) => {
			if (i.includes(t.name)) return null;
			let r = e.addSeries(V_, {
				color: Tv[n],
				lineWidth: n === 5 ? 1 : 2,
				lineStyle: n === 5 ? xf.Dashed : xf.Solid,
				lastValueVisible: !1,
				priceLineVisible: !1,
				crosshairMarkerVisible: !0,
				priceFormat: {
					type: "price",
					precision: 1,
					minMove: .1
				}
			});
			return r.setData(t.daily.map(([e, n]) => ({
				time: e,
				value: n / t.daily[0][1] * 100
			}))), r;
		});
		l.current = e, u.current ? e.timeScale().setVisibleLogicalRange(u.current) : e.timeScale().fitContent();
		let o = r.map((e) => new Map(e.daily.map(([t, n]) => [t, n / e.daily[0][1] * 100])));
		e.subscribeCrosshairMove((e) => {
			let t = kv(e.time);
			if (!t) {
				s(null);
				return;
			}
			let n = {};
			r.forEach((e, r) => {
				let a = o[r].get(t);
				a !== void 0 && !i.includes(e.name) && (n[e.name] = a);
			}), s({
				date: t,
				values: n
			});
		});
		let d = jv(c.current, e);
		return () => {
			a.length, u.current = e.timeScale().getVisibleLogicalRange(), l.current = null, d(), e.remove();
		};
	}, [
		t,
		n,
		i
	]);
	let d = (e) => a((t) => t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ (0, K.jsxs)("section", {
		className: "ic-group",
		children: [
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "ic-group-head",
				children: [/* @__PURE__ */ (0, K.jsxs)("div", { children: [
					/* @__PURE__ */ (0, K.jsx)("div", {
						className: "ic-caption",
						children: "SECTOR COMPARISON"
					}),
					/* @__PURE__ */ (0, K.jsx)("h3", { children: e }),
					/* @__PURE__ */ (0, K.jsx)("p", { children: "起点 = 100 · 同期比较" })
				] }), /* @__PURE__ */ (0, K.jsx)("button", {
					type: "button",
					className: "ic-reset",
					onClick: () => l.current?.timeScale().fitContent(),
					children: "恢复范围"
				})]
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "ic-group-readout",
				children: o ? `${o.date} · ${Object.entries(o.values).map(([e, t]) => `${e} ${t.toFixed(1)}`).join("  /  ")}` : "移动至图表查看当日指数 · 点击图例显示或隐藏"
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "ic-group-plot",
				ref: c,
				role: "img",
				"aria-label": `${e}五个行业与沪深300的近一年标准化走势，可拖动和缩放`
			}),
			/* @__PURE__ */ (0, K.jsx)("div", {
				className: "ic-legend",
				children: [...t, n].map((e, t) => /* @__PURE__ */ (0, K.jsxs)("button", {
					type: "button",
					className: i.includes(e.name) ? "is-muted" : "",
					"aria-pressed": !i.includes(e.name),
					onClick: () => d(e.name),
					children: [
						/* @__PURE__ */ (0, K.jsx)("i", { style: { background: Tv[t] } }),
						/* @__PURE__ */ (0, K.jsx)("span", { children: e.name }),
						/* @__PURE__ */ (0, K.jsx)("b", { children: Dv(e.return1y) })
					]
				}, e.name))
			}),
			/* @__PURE__ */ (0, K.jsxs)("div", {
				className: "ic-group-foot",
				children: [/* @__PURE__ */ (0, K.jsxs)("span", { children: [
					"图例涨跌为完整一年 · ",
					r,
					" 收盘"
				] }), /* @__PURE__ */ (0, K.jsx)(Mv, {})]
			})
		]
	});
}
var Lv = "\n.ic-selector-root{width:100%;min-width:0}.ic-search{box-sizing:border-box;width:100%;height:36px;margin-bottom:6px;padding:0 11px;border:1px solid #d7e4db;border-radius:9px;color:#244b38;background:#fff;font:13px sans-serif}.ic-selector-option small{margin-left:auto;margin-right:8px;color:#90a495;font-size:10px}.ic-empty{padding:12px;color:#82988b}.ic-reset{display:block;margin:7px 0 0 auto;border:0;background:transparent;color:#56816a;font-size:11px;cursor:pointer}.ic-reset:hover{text-decoration:underline}.ic-jump{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 20px}.ic-jump a{padding:7px 11px;border:1px solid #dfeae0;border-radius:8px;color:#3d7354;text-decoration:none;font-size:12px}.drawdown-row[data-jump],#sector-table tbody tr[data-jump]{cursor:pointer}.drawdown-row[data-jump]:hover,#sector-table tbody tr[data-jump]:hover{background:#edf7ef}.drawdown-row[data-jump]:focus-visible,#sector-table tbody tr[data-jump]:focus-visible{outline:2px solid #398a61;outline-offset:-2px}.ic-selector-trigger{width:100%;min-height:42px;display:flex;align-items:center;justify-content:space-between;gap:14px;border:1px solid #d7e4db;border-radius:10px;background:#fff;color:#244b38;padding:0 12px;font:600 13px/1.2 -apple-system,BlinkMacSystemFont,\"PingFang SC\",sans-serif;cursor:pointer;box-shadow:0 1px 2px #173c3008;transition:border-color .15s,box-shadow .15s,background .15s}.ic-selector-trigger:hover{border-color:#a9cfb6;background:#fbfdfb}.ic-selector-trigger:focus-visible,.ic-selector-trigger[data-popup-open]{outline:0;border-color:#54a979;box-shadow:0 0 0 3px #a7d9ba5c}.ic-selector-trigger svg{width:16px;height:16px;color:#6d8f7a;flex:none}.ic-selector-trigger [data-slot=select-value]{flex:1;text-align:left}.ic-selector-positioner{z-index:1000;isolation:isolate}.ic-selector-menu{box-sizing:border-box;z-index:1000;min-width:210px;width:var(--anchor-width);max-height:min(320px,calc(100vh - 32px));overflow-y:auto;padding:5px;background:#fff;color:#244235;border:1px solid #dce9df;border-radius:11px;box-shadow:0 14px 36px #193e2926;font:13px/1.4 -apple-system,BlinkMacSystemFont,\"PingFang SC\",sans-serif;overscroll-behavior:contain}.ic-selector-option{position:relative;display:flex;align-items:center;min-height:36px;padding:7px 30px 7px 11px;border-radius:7px;outline:none;cursor:pointer;color:#466053;user-select:none}.ic-selector-option[data-highlighted],.ic-selector-option:focus{background:#eef7ef;color:#235d3d}.ic-selector-option[data-selected]{background:#edf7ef;color:#236440;font-weight:650}.ic-selector-option svg{position:absolute;right:10px;width:14px;height:14px;color:#39885c}.ic-selector-menu [data-slot=select-scroll-up-button],.ic-selector-menu [data-slot=select-scroll-down-button]{display:none}\n.ic-detail,.ic-group{color:#244235;font-family:-apple-system,BlinkMacSystemFont,\"PingFang SC\",sans-serif}.ic-detail *,.ic-group *{box-sizing:border-box}.ic-detail-head,.ic-group-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px}.ic-caption{font-size:10px;letter-spacing:.12em;font-weight:700;color:#91a99a}.ic-detail h3,.ic-group h3{margin:5px 0!important;font-size:19px!important;color:#244534}.ic-detail h3 span{font-size:12px;font-weight:500;color:#95a59b}.ic-selected{display:flex;flex-wrap:wrap;gap:6px 14px;color:#899d90;font-size:11px}.ic-selected b{font-variant-numeric:tabular-nums;color:#4c6959}.ic-range{display:flex;gap:2px;border-radius:9px;background:#eff4ef;padding:3px;white-space:nowrap}.ic-range button{border:0;background:transparent;border-radius:7px;color:#819388;padding:7px 11px;font-family:inherit;font-size:12px;font-weight:600;line-height:1.2;cursor:pointer}.ic-range button[aria-pressed=true]{background:#fff;color:#28664a;box-shadow:0 1px 4px #163f221a}.ic-range button:focus-visible,.ic-legend button:focus-visible{outline:2px solid #398a61;outline-offset:2px}\n.ic-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin:19px 0 8px;padding:14px 0;border-top:1px solid #eef2ee;border-bottom:1px solid #eef2ee}.ic-summary>div{padding:0 16px;border-right:1px solid #edf2ed;min-width:0}.ic-summary>div:first-child{padding-left:0}.ic-summary>div:last-child{border:0}.ic-summary small,.ic-summary span{display:block;color:#9aaba0;font-size:10px}.ic-summary strong{display:block;color:#294b39;font-size:18px;line-height:1.5;font-variant-numeric:tabular-nums}.ic-summary .ic-loss{color:#b16156}.ic-summary .ic-up{color:#387f5a}\n.ic-plot{height:310px;width:100%;min-width:0}.ic-footer,.ic-group-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:10px;font-size:11px;color:#98a99d}.ic-key{display:flex;align-items:center;flex-wrap:wrap;gap:9px 15px}.ic-key span{white-space:nowrap}.ic-key i,.ic-legend i{display:inline-block;width:14px;height:3px;border-radius:3px;margin:0 6px 3px 0}.ic-credit{color:#91a69a!important;text-decoration:none;font-size:10px}.ic-credit:hover{text-decoration:underline}\n.trend-grid .ic-group{padding:18px!important;background:#fff!important;border:1px solid #e7eee7;border-radius:12px;min-width:0;overflow:hidden}.ic-group h3{font-size:16px!important}.ic-group-head p{margin:0;color:#92a497;font-size:11px}.ic-chip{border-radius:20px;padding:4px 9px;background:#f1f7f1;color:#71937c;font-size:10px;white-space:nowrap}.ic-group-readout{min-height:30px;display:flex;align-items:center;margin-top:9px;color:#92a397;font-size:10px;line-height:1.5}.ic-group-plot{height:220px;min-width:0;width:100%}.ic-legend{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.ic-legend button{display:inline-flex;align-items:center;gap:4px;max-width:100%;border:1px solid #e5eee6;background:#f8fbf8;border-radius:7px;padding:5px 7px;color:#587163;font-family:inherit;font-size:11px;font-weight:500;line-height:1.3;cursor:pointer}.ic-legend i{width:10px;height:3px;margin:0;flex:none}.ic-legend b{color:#617e6d;font-size:10px;font-variant-numeric:tabular-nums}.ic-legend button.is-muted{opacity:.43;background:#fff}.ic-group-foot{padding-top:10px;border-top:1px solid #f0f3f0}.trend-grid .ic-group::after,#detail-chart::after{content:none!important}#detail-chart{overflow:visible!important}#detail-chart .ic-detail svg,.trend-grid .ic-group svg{min-width:0!important;max-width:100%!important}\n@media(max-width:720px){.ic-detail-head{flex-wrap:wrap}.ic-range{width:100%;justify-content:space-between}.ic-range button{flex:1}.ic-summary{grid-template-columns:1fr 1fr;row-gap:12px}.ic-summary>div:nth-child(2){border-right:0}.ic-summary>div:nth-child(3){padding-left:0}.ic-summary strong{font-size:16px}.ic-plot{height:310px}.ic-group-plot{height:220px}.ic-group-readout{min-height:40px}.ic-legend button{padding:6px 7px}.trend-grid .ic-group{overflow:hidden!important}}\n";
function Rv(e) {
	let t = e.contentDocument;
	if (!t) return;
	let n = Array.from(t.querySelectorAll("script")).find((e) => e.textContent?.includes("const payload = "))?.textContent?.match(/const payload = (\{[^\n]*\});/);
	if (!n) return;
	let r;
	try {
		r = JSON.parse(n[1]);
	} catch {
		return;
	}
	let i = t.querySelector("#sector-select"), a = t.querySelector("#detail-chart"), o = t.querySelector("#trend-grid"), s = r.series.find((e) => e.group === "基准");
	if (!i || !a || !o || !s || !r.series.length) return;
	let c = t.createElement("style");
	c.textContent = Lv, t.head.append(c);
	let l;
	function u() {
		let e = r.series.find((e) => e.name === i.value);
		e && (l?.unmount(), a.replaceChildren(), l = (0, fa.createRoot)(a), l.render(/* @__PURE__ */ (0, K.jsx)(Fv, {
			item: e,
			asOf: r.asOf
		}, e.name)));
	}
	u(), i.addEventListener("change", (e) => {
		e.stopImmediatePropagation(), u(), i.dispatchEvent(new Event("industry-selected"));
	}, !0);
	let d = t.createElement("div");
	d.className = "ic-selector-root", i.after(d), (0, fa.createRoot)(d).render(/* @__PURE__ */ (0, K.jsx)(Pv, {
		selector: i,
		doc: t,
		series: r.series
	}));
	let f = (e) => {
		i.value = e, i.dispatchEvent(new Event("change", { bubbles: !0 })), t.querySelector(".hero-panel")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	t.querySelectorAll(".drawdown-row, #sector-table tbody tr").forEach((e) => {
		let t = e.querySelector(".drawdown-name strong, .drawdown-name b")?.textContent?.trim() || e.querySelector("td")?.textContent?.trim() || Array.from(i.options).find((t) => e.textContent?.includes(t.value))?.value;
		t && Array.from(i.options).some((e) => e.value === t) && (e.dataset.jump = t, e.setAttribute("tabindex", "0"), e.setAttribute("role", "button"), e.setAttribute("aria-label", `${t}，查看日线趋势`), e.addEventListener("click", () => f(t)), e.addEventListener("keydown", (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), f(t));
		}));
	});
	let p = t.querySelector(".dashboard-header");
	if (p) {
		let e = t.createElement("nav");
		e.className = "ic-jump", e.setAttribute("aria-label", "页面快速导航"), [
			["日线趋势", ".hero-panel"],
			["回撤排行", "[aria-label=回撤排序]"],
			["行业对比", "[aria-label=行业分组走势]"],
			["行业明细", "[aria-label=行业明细表]"]
		].forEach(([n, r]) => {
			let i = t.createElement("a");
			i.href = "#", i.textContent = n, i.addEventListener("click", (e) => {
				e.preventDefault(), t.querySelector(r)?.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}), e.append(i);
		}), p.after(e);
	}
	o.replaceChildren(), (0, fa.createRoot)(o).render(/* @__PURE__ */ (0, K.jsx)(K.Fragment, { children: [
		"科技",
		"先进制造",
		"消费医药",
		"资源金融"
	].map((e) => /* @__PURE__ */ (0, K.jsx)(Iv, {
		group: e,
		items: r.series.filter((t) => t.group === e),
		benchmark: s,
		asOf: r.asOf
	}, e)) }));
	let m = t.getElementById("industry-drawdown-vis");
	if (m) {
		let t = () => {
			e.isConnected && (e.style.height = `${Math.ceil(m.getBoundingClientRect().height)}px`);
		};
		new ResizeObserver(t).observe(m), t();
	}
}
// src/main.tsx
var zv = /\/us(?:\/|$)/.test(location.pathname), Bv = /\/us\/holdings(?:\/|$)/.test(location.pathname), Vv = /\/mobile-holdings\.html$/.test(location.pathname), Hv = /\/h\/?$|\/mobile-holdings\.html$/.test(location.pathname);
function Uv() {
	let [e, t] = D.useState(zv ? Bv ? "us-holdings" : "us-industry" : Hv ? "holdings" : "industry");
	function n(n) {
		let r = Bv ? "../../" : zv || Hv && !Vv ? "../" : "./", i = {
			industry: r + "#industry",
			holdings: r + "h/",
			"us-industry": r + "us/",
			"us-holdings": r + "us/holdings/"
		};
		n && String(n) !== e && i[String(n)] && location.assign(i[String(n)]), t(String(n));
	}
	return /* @__PURE__ */ (0, K.jsx)("div", {
		className: "workspace-nav",
		children: /* @__PURE__ */ (0, K.jsxs)("div", {
			className: "workspace-nav-inner",
			children: [
				/* @__PURE__ */ (0, K.jsxs)("a", {
					className: "workspace-brand",
					href: Bv ? "../../#industry" : zv || Hv && !Vv ? "../#industry" : "./#industry",
					"aria-label": "投资观察首页",
					children: [/* @__PURE__ */ (0, K.jsx)("span", {
						className: "workspace-logo",
						children: /* @__PURE__ */ (0, K.jsx)(L, { size: 18 })
					}), /* @__PURE__ */ (0, K.jsxs)("span", { children: [/* @__PURE__ */ (0, K.jsx)("b", { children: "投资观察" }), /* @__PURE__ */ (0, K.jsx)("small", { children: "INVESTMENT RESEARCH" })] })]
				}),
				/* @__PURE__ */ (0, K.jsx)(Wo, {
					value: e,
					onValueChange: n,
					className: "workspace-tabs",
					children: /* @__PURE__ */ (0, K.jsxs)(Ko, {
						"aria-label": "网站导航",
						className: "workspace-tab-list",
						children: [
							/* @__PURE__ */ (0, K.jsxs)(qo, {
								value: "industry",
								className: "workspace-tab",
								children: [/* @__PURE__ */ (0, K.jsx)(se, { size: 15 }), "A 股行业"]
							}),
							/* @__PURE__ */ (0, K.jsxs)(qo, {
								value: "holdings",
								className: "workspace-tab",
								children: [/* @__PURE__ */ (0, K.jsx)(L, { size: 15 }), "A 股持仓"]
							}),
							/* @__PURE__ */ (0, K.jsxs)(qo, {
								value: "us-industry",
								className: "workspace-tab",
								children: [/* @__PURE__ */ (0, K.jsx)(se, { size: 15 }), "美股行业"]
							}),
							/* @__PURE__ */ (0, K.jsxs)(qo, {
								value: "us-holdings",
								className: "workspace-tab",
								children: [/* @__PURE__ */ (0, K.jsx)(L, { size: 15 }), "美股持仓"]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, K.jsxs)(Xo, {
					variant: "secondary",
					className: "workspace-private",
					children: [/* @__PURE__ */ (0, K.jsx)(H, { size: 13 }), " 本地解密"]
				})
			]
		})
	});
}
var Wv = document.querySelector(".site-tabs");
if (Wv) {
	let e = document.createElement("div");
	Wv.before(e), (0, fa.createRoot)(e).render(/* @__PURE__ */ (0, K.jsx)(Uv, {})), Wv.hidden = !0;
}
if (Hv) {
	let e = document.querySelector("#map-report"), t, n, r = () => {
		n && !n.isConnected && (t?.unmount(), t = void 0, n = void 0);
		let r = e?.querySelector("#map-stock-detail"), i = e?.querySelector("[data-stock-index][aria-pressed=\"true\"]"), a = document.querySelector("#holdings-map-data");
		if (r && i && a && !r.querySelector(".stock-workspace-mount")) try {
			let e = JSON.parse(a.textContent || ""), o = e.stocks[Number(i.dataset.stockIndex)], s = e.history[o.symbol];
			if (o && Array.isArray(s) && s.length) {
				let i = Array.from(r.children), a = document.createElement("div");
				a.className = "stock-workspace-mount", r.append(a), n = a, t = (0, fa.createRoot)(a), t.render(/* @__PURE__ */ (0, K.jsx)(wv, {
					stock: o,
					bars: s,
					payload: e,
					onReady: () => {
						a.isConnected && i.forEach((e) => {
							e.hidden = !0;
						});
					}
				}));
			}
		} catch {}
		let o = e?.querySelector("select[aria-label=\"股票排序方式\"]");
		if (o && !o.dataset.enhanced) {
			o.dataset.enhanced = "true";
			let e = Array.from(o.options).map((e) => ({
				value: e.value,
				label: e.text
			})), t = document.createElement("span");
			t.className = "workspace-sort-control", o.after(t), o.classList.add("workspace-native-select"), o.setAttribute("aria-hidden", "true"), o.tabIndex = -1, (0, fa.createRoot)(t).render(/* @__PURE__ */ (0, K.jsxs)(Ud, {
				value: o.value,
				items: e,
				onValueChange: (e) => {
					e && e !== o.value && (o.value = e, o.dispatchEvent(new Event("change", { bubbles: !0 })));
				},
				children: [/* @__PURE__ */ (0, K.jsx)(Gd, {
					"aria-label": "股票排序方式",
					className: "workspace-select-trigger",
					children: /* @__PURE__ */ (0, K.jsx)(Wd, {})
				}), /* @__PURE__ */ (0, K.jsx)(Kd, {
					className: "workspace-select-menu",
					children: e.map((e) => /* @__PURE__ */ (0, K.jsx)(qd, {
						value: e.value,
						children: e.label
					}, e.value))
				})]
			}));
		}
		let s = e?.querySelector(".map-shortcuts");
		s && !s.dataset.enhanced && (s.dataset.enhanced = "true", s.querySelectorAll("a").forEach((e) => {
			e.classList.add("workspace-shortcut");
			let t = document.createElement("span");
			t.textContent = "↗", t.setAttribute("aria-hidden", "true"), e.append(t);
		}));
	};
	e && new MutationObserver(r).observe(e, {
		childList: !0,
		subtree: !0
	}), r();
}
var Gv = document.querySelector("#chart-frame"), Kv = () => {
	let e = Gv?.contentDocument;
	if (!e?.head || e.getElementById("workspace-industry-theme")) return;
	let t = e.createElement("style");
	t.id = "workspace-industry-theme", t.textContent = ":root{--page:#f4f6f2;--ink:#1c3933;--line:#e1e9e3;--panel:#fff} .snapshot-card,.asof-card,.hero-panel,.section-block{box-shadow:0 4px 18px #173d2b08} .trend-grid section{background:#f8fbf8} .dashboard-header h1{color:#193d33}", e.head.append(t), Rv(Gv);
};
Gv?.addEventListener("load", Kv), Kv();
var qv = document.getElementById("us-app");
qv && (0, fa.createRoot)(qv).render(/* @__PURE__ */ (0, K.jsx)(vv, { holdings: Bv }));
