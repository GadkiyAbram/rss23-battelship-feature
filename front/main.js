/*! For license information please see main.js.LICENSE.txt */
(() => {
    var e = {
        679: (e, t, n) => {
            "use strict";
            var r = n(296), o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                }, a = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
                i = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, l = {};

            function u(e) {
                return r.isMemo(e) ? i : l[e.$$typeof] || o
            }

            l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, l[r.Memo] = i;
            var s = Object.defineProperty, c = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (h) {
                        var o = p(n);
                        o && o !== h && e(t, o, r)
                    }
                    var i = c(n);
                    f && (i = i.concat(f(n)));
                    for (var l = u(t), m = u(n), g = 0; g < i.length; ++g) {
                        var y = i[g];
                        if (!(a[y] || r && r[y] || m && m[y] || l && l[y])) {
                            var v = d(n, y);
                            try {
                                s(t, y, v)
                            } catch (e) {
                            }
                        }
                    }
                }
                return t
            }
        }, 103: (e, t) => {
            "use strict";
            var n = "function" == typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107,
                i = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114,
                u = n ? Symbol.for("react.provider") : 60109, s = n ? Symbol.for("react.context") : 60110,
                c = n ? Symbol.for("react.async_mode") : 60111, f = n ? Symbol.for("react.concurrent_mode") : 60111,
                d = n ? Symbol.for("react.forward_ref") : 60112, p = n ? Symbol.for("react.suspense") : 60113,
                h = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115,
                g = n ? Symbol.for("react.lazy") : 60116, y = n ? Symbol.for("react.block") : 60121,
                v = n ? Symbol.for("react.fundamental") : 60117, b = n ? Symbol.for("react.responder") : 60118,
                w = n ? Symbol.for("react.scope") : 60119;

            function S(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case c:
                                case f:
                                case a:
                                case l:
                                case i:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case s:
                                        case d:
                                        case g:
                                        case m:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function x(e) {
                return S(e) === f
            }

            t.AsyncMode = c, t.ConcurrentMode = f, t.ContextConsumer = s, t.ContextProvider = u, t.Element = r, t.ForwardRef = d, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function (e) {
                return x(e) || S(e) === c
            }, t.isConcurrentMode = x, t.isContextConsumer = function (e) {
                return S(e) === s
            }, t.isContextProvider = function (e) {
                return S(e) === u
            }, t.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function (e) {
                return S(e) === d
            }, t.isFragment = function (e) {
                return S(e) === a
            }, t.isLazy = function (e) {
                return S(e) === g
            }, t.isMemo = function (e) {
                return S(e) === m
            }, t.isPortal = function (e) {
                return S(e) === o
            }, t.isProfiler = function (e) {
                return S(e) === l
            }, t.isStrictMode = function (e) {
                return S(e) === i
            }, t.isSuspense = function (e) {
                return S(e) === p
            }, t.isValidElementType = function (e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === f || e === l || e === i || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || e.$$typeof === s || e.$$typeof === d || e.$$typeof === v || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
            }, t.typeOf = S
        }, 296: (e, t, n) => {
            "use strict";
            e.exports = n(103)
        }, 448: (e, t, n) => {
            "use strict";
            var r = n(294), o = n(840);

            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var i = new Set, l = {};

            function u(e, t) {
                s(e, t), s(e + "Capture", t)
            }

            function s(e, t) {
                for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
            }

            var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                f = Object.prototype.hasOwnProperty,
                d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                p = {}, h = {};

            function m(e, t, n, r, o, a, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
            }

            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                g[e] = new m(e, 0, !1, e, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
                var t = e[0];
                g[t] = new m(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                g[e] = new m(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                g[e] = new m(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                g[e] = new m(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                g[e] = new m(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var y = /[\-:]([a-z])/g;

            function v(e) {
                return e[1].toUpperCase()
            }

            function b(e, t, n, r) {
                var o = g.hasOwnProperty(t) ? g[t] : null;
                (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
                    if (null == t || function (e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, o, r) && (n = null), r || null === o ? function (e) {
                    return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(y, v);
                g[t] = new m(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(y, v);
                g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(y, v);
                g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = Symbol.for("react.element"),
                x = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"),
                C = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), O = Symbol.for("react.context"),
                N = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"),
                P = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), j = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var A = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var I = Symbol.iterator;

            function T(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = I && e[I] || e["@@iterator"]) ? e : null
            }

            var L, _ = Object.assign;

            function R(e) {
                if (void 0 === L) try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    L = t && t[1] || ""
                }
                return "\n" + L + e
            }

            var F = !1;

            function U(e, t) {
                if (!e || F) return "";
                F = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" == typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (e) {
                            var r = e
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (e) {
                            r = e
                        }
                        e.call(t.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (e) {
                            r = e
                        }
                        e()
                    }
                } catch (t) {
                    if (t && r && "string" == typeof t.stack) {
                        for (var o = t.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1; 1 <= i && 0 <= l && o[i] !== a[l];) l--;
                        for (; 1 <= i && 0 <= l; i--, l--) if (o[i] !== a[l]) {
                            if (1 !== i || 1 !== l) do {
                                if (i--, 0 > --l || o[i] !== a[l]) {
                                    var u = "\n" + o[i].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                                }
                            } while (1 <= i && 0 <= l);
                            break
                        }
                    }
                } finally {
                    F = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? R(e) : ""
            }

            function Q(e) {
                switch (e.tag) {
                    case 5:
                        return R(e.type);
                    case 16:
                        return R("Lazy");
                    case 13:
                        return R("Suspense");
                    case 19:
                        return R("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return U(e.type, !1);
                    case 11:
                        return U(e.type.render, !1);
                    case 1:
                        return U(e.type, !0);
                    default:
                        return ""
                }
            }

            function B(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case k:
                        return "Fragment";
                    case x:
                        return "Portal";
                    case C:
                        return "Profiler";
                    case E:
                        return "StrictMode";
                    case D:
                        return "Suspense";
                    case P:
                        return "SuspenseList"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case O:
                        return (e.displayName || "Context") + ".Consumer";
                    case M:
                        return (e._context.displayName || "Context") + ".Provider";
                    case N:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case z:
                        return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
                    case j:
                        t = e._payload, e = e._init;
                        try {
                            return B(e(t))
                        } catch (e) {
                        }
                }
                return null
            }

            function W(e) {
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
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
                        return B(t);
                    case 8:
                        return t === E ? "StrictMode" : "Mode";
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
                        if ("function" == typeof t) return t.displayName || t.name || null;
                        if ("string" == typeof t) return t
                }
                return null
            }

            function H(e) {
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return e;
                    default:
                        return ""
                }
            }

            function V(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function $(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = V(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                        var o = n.get, a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return o.call(this)
                            }, set: function (e) {
                                r = "" + e, a.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (e) {
                                r = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function Y(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = V(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function G(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Z(e, t) {
                var n = t.checked;
                return _({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function J(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = H(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function K(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }

            function q(e, t) {
                K(e, t);
                var n = H(t.value), r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function X(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && G(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + H(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
                return _({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
            }

            function oe(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(a(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {initialValue: H(n)}
            }

            function ae(e, t) {
                var n = H(t.value), r = H(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function le(e) {
                switch (e) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function ue(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }

            var se, ce, fe = (ce = function (e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
                    for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return ce(e, t)
                }))
            } : ce);

            function de(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }

            var pe = {
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
                strokeWidth: !0
            }, he = ["Webkit", "ms", "Moz", "O"];

            function me(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
            }

            function ge(e, t) {
                for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), o = me(n, t[n], r);
                    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                }
            }

            Object.keys(pe).forEach((function (e) {
                he.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                }))
            }));
            var ye = _({menuitem: !0}, {
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
                wbr: !0
            });

            function ve(e, t) {
                if (t) {
                    if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(a(60));
                        if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
                    }
                    if (null != t.style && "object" != typeof t.style) throw Error(a(62))
                }
            }

            function be(e, t) {
                if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var we = null;

            function Se(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var xe = null, ke = null, Ee = null;

            function Ce(e) {
                if (e = wo(e)) {
                    if ("function" != typeof xe) throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = xo(t), xe(e.stateNode, e.type, t))
                }
            }

            function Me(e) {
                ke ? Ee ? Ee.push(e) : Ee = [e] : ke = e
            }

            function Oe() {
                if (ke) {
                    var e = ke, t = Ee;
                    if (Ee = ke = null, Ce(e), t) for (e = 0; e < t.length; e++) Ce(t[e])
                }
            }

            function Ne(e, t) {
                return e(t)
            }

            function De() {
            }

            var Pe = !1;

            function ze(e, t, n) {
                if (Pe) return e(t, n);
                Pe = !0;
                try {
                    return Ne(e, t, n)
                } finally {
                    Pe = !1, (null !== ke || null !== Ee) && (De(), Oe())
                }
            }

            function je(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = xo(n);
                if (null === r) return null;
                n = r[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
                return n
            }

            var Ae = !1;
            if (c) try {
                var Ie = {};
                Object.defineProperty(Ie, "passive", {
                    get: function () {
                        Ae = !0
                    }
                }), window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie)
            } catch (ce) {
                Ae = !1
            }

            function Te(e, t, n, r, o, a, i, l, u) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s)
                } catch (e) {
                    this.onError(e)
                }
            }

            var Le = !1, _e = null, Re = !1, Fe = null, Ue = {
                onError: function (e) {
                    Le = !0, _e = e
                }
            };

            function Qe(e, t, n, r, o, a, i, l, u) {
                Le = !1, _e = null, Te.apply(Ue, arguments)
            }

            function Be(e) {
                var t = e, n = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function We(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                }
                return null
            }

            function He(e) {
                if (Be(e) !== e) throw Error(a(188))
            }

            function Ve(e) {
                return null !== (e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Be(e))) throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var o = n.return;
                        if (null === o) break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i;) {
                                if (i === n) return He(o), e;
                                if (i === r) return He(o), t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return) n = o, r = i; else {
                            for (var l = !1, u = o.child; u;) {
                                if (u === n) {
                                    l = !0, n = o, r = i;
                                    break
                                }
                                if (u === r) {
                                    l = !0, r = o, n = i;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!l) {
                                for (u = i.child; u;) {
                                    if (u === n) {
                                        l = !0, n = i, r = o;
                                        break
                                    }
                                    if (u === r) {
                                        l = !0, r = i, n = o;
                                        break
                                    }
                                    u = u.sibling
                                }
                                if (!l) throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(a(190))
                    }
                    if (3 !== n.tag) throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? $e(e) : null
            }

            function $e(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = $e(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }

            var Ye = o.unstable_scheduleCallback, Ge = o.unstable_cancelCallback, Ze = o.unstable_shouldYield,
                Je = o.unstable_requestPaint, Ke = o.unstable_now, qe = o.unstable_getCurrentPriorityLevel,
                Xe = o.unstable_ImmediatePriority, et = o.unstable_UserBlockingPriority, tt = o.unstable_NormalPriority,
                nt = o.unstable_LowPriority, rt = o.unstable_IdlePriority, ot = null, at = null,
                it = Math.clz32 ? Math.clz32 : function (e) {
                    return 0 === (e >>>= 0) ? 32 : 31 - (lt(e) / ut | 0) | 0
                }, lt = Math.log, ut = Math.LN2, st = 64, ct = 4194304;

            function ft(e) {
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
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function dt(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0, o = e.suspendedLanes, a = e.pingedLanes, i = 268435455 & n;
                if (0 !== i) {
                    var l = i & ~o;
                    0 !== l ? r = ft(l) : 0 != (a &= i) && (r = ft(a))
                } else 0 != (i = n & ~o) ? r = ft(i) : 0 !== a && (r = ft(a));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 == (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 != (4194240 & a))) return t;
                if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - it(t)), r |= e[n], t &= ~o;
                return r
            }

            function pt(e, t) {
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
                    default:
                        return -1
                }
            }

            function ht(e) {
                return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function mt() {
                var e = st;
                return 0 == (4194240 & (st <<= 1)) && (st = 64), e
            }

            function gt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function yt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
            }

            function vt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - it(n), o = 1 << r;
                    o & t | e[r] & t && (e[r] |= t), n &= ~o
                }
            }

            var bt = 0;

            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
            }

            var St, xt, kt, Et, Ct, Mt = !1, Ot = [], Nt = null, Dt = null, Pt = null, zt = new Map, jt = new Map,
                At = [],
                It = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function Tt(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        Nt = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        Dt = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        Pt = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        zt.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        jt.delete(t.pointerId)
                }
            }

            function Lt(e, t, n, r, o, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [o]
                }, null !== t && null !== (t = wo(t)) && xt(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
            }

            function _t(e) {
                var t = bo(e.target);
                if (null !== t) {
                    var n = Be(t);
                    if (null !== n) if (13 === (t = n.tag)) {
                        if (null !== (t = We(n))) return e.blockedOn = t, void Ct(e.priority, (function () {
                            kt(n)
                        }))
                    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function Rt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = wo(n)) && xt(t), e.blockedOn = n, !1;
                    var r = new (n = e.nativeEvent).constructor(n.type, n);
                    we = r, n.target.dispatchEvent(r), we = null, t.shift()
                }
                return !0
            }

            function Ft(e, t, n) {
                Rt(e) && n.delete(t)
            }

            function Ut() {
                Mt = !1, null !== Nt && Rt(Nt) && (Nt = null), null !== Dt && Rt(Dt) && (Dt = null), null !== Pt && Rt(Pt) && (Pt = null), zt.forEach(Ft), jt.forEach(Ft)
            }

            function Qt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, Mt || (Mt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Ut)))
            }

            function Bt(e) {
                function t(t) {
                    return Qt(t, e)
                }

                if (0 < Ot.length) {
                    Qt(Ot[0], e);
                    for (var n = 1; n < Ot.length; n++) {
                        var r = Ot[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Nt && Qt(Nt, e), null !== Dt && Qt(Dt, e), null !== Pt && Qt(Pt, e), zt.forEach(t), jt.forEach(t), n = 0; n < At.length; n++) (r = At[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < At.length && null === (n = At[0]).blockedOn;) _t(n), null === n.blockedOn && At.shift()
            }

            var Wt = w.ReactCurrentBatchConfig, Ht = !0;

            function Vt(e, t, n, r) {
                var o = bt, a = Wt.transition;
                Wt.transition = null;
                try {
                    bt = 1, Yt(e, t, n, r)
                } finally {
                    bt = o, Wt.transition = a
                }
            }

            function $t(e, t, n, r) {
                var o = bt, a = Wt.transition;
                Wt.transition = null;
                try {
                    bt = 4, Yt(e, t, n, r)
                } finally {
                    bt = o, Wt.transition = a
                }
            }

            function Yt(e, t, n, r) {
                if (Ht) {
                    var o = Zt(e, t, n, r);
                    if (null === o) Hr(e, t, r, Gt, n), Tt(e, r); else if (function (e, t, n, r, o) {
                        switch (t) {
                            case"focusin":
                                return Nt = Lt(Nt, e, t, n, r, o), !0;
                            case"dragenter":
                                return Dt = Lt(Dt, e, t, n, r, o), !0;
                            case"mouseover":
                                return Pt = Lt(Pt, e, t, n, r, o), !0;
                            case"pointerover":
                                var a = o.pointerId;
                                return zt.set(a, Lt(zt.get(a) || null, e, t, n, r, o)), !0;
                            case"gotpointercapture":
                                return a = o.pointerId, jt.set(a, Lt(jt.get(a) || null, e, t, n, r, o)), !0
                        }
                        return !1
                    }(o, e, t, n, r)) r.stopPropagation(); else if (Tt(e, r), 4 & t && -1 < It.indexOf(e)) {
                        for (; null !== o;) {
                            var a = wo(o);
                            if (null !== a && St(a), null === (a = Zt(e, t, n, r)) && Hr(e, t, r, Gt, n), a === o) break;
                            o = a
                        }
                        null !== o && r.stopPropagation()
                    } else Hr(e, t, r, null, n)
                }
            }

            var Gt = null;

            function Zt(e, t, n, r) {
                if (Gt = null, null !== (e = bo(e = Se(r)))) if (null === (t = Be(e))) e = null; else if (13 === (n = t.tag)) {
                    if (null !== (e = We(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Gt = e, null
            }

            function Jt(e) {
                switch (e) {
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 1;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"toggle":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 4;
                    case"message":
                        switch (qe()) {
                            case Xe:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }

            var Kt = null, qt = null, Xt = null;

            function en() {
                if (Xt) return Xt;
                var e, t, n = qt, r = n.length, o = "value" in Kt ? Kt.value : Kt.textContent, a = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++) ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
                return Xt = o.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function on(e) {
                function t(t, n, r, o, a) {
                    for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }

                return _(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    }, persist: function () {
                    }, isPersistent: nn
                }), t
            }

            var an, ln, un, sn = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, cn = on(sn), fn = _({}, sn, {view: 0, detail: 0}), dn = on(fn), pn = _({}, fn, {
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
                    getModifierState: Cn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (an = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = an = 0, un = e), an)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : ln
                    }
                }), hn = on(pn), mn = on(_({}, pn, {dataTransfer: 0})), gn = on(_({}, fn, {relatedTarget: 0})),
                yn = on(_({}, sn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), vn = _({}, sn, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }), bn = on(vn), wn = on(_({}, sn, {data: 0})), Sn = {
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
                }, xn = {
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
                }, kn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function En(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
            }

            function Cn() {
                return En
            }

            var Mn = _({}, fn, {
                key: function (e) {
                    if (e.key) {
                        var t = Sn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? xn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Cn,
                charCode: function (e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }), On = on(Mn), Nn = on(_({}, pn, {
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
            })), Dn = on(_({}, fn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Cn
            })), Pn = on(_({}, sn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), zn = _({}, pn, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), jn = on(zn), An = [9, 13, 27, 32], In = c && "CompositionEvent" in window, Tn = null;
            c && "documentMode" in document && (Tn = document.documentMode);
            var Ln = c && "TextEvent" in window && !Tn, _n = c && (!In || Tn && 8 < Tn && 11 >= Tn),
                Rn = String.fromCharCode(32), Fn = !1;

            function Un(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== An.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Qn(e) {
                return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var Bn = !1, Wn = {
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

            function Hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Wn[e.type] : "textarea" === t
            }

            function Vn(e, t, n, r) {
                Me(r), 0 < (t = $r(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }

            var $n = null, Yn = null;

            function Gn(e) {
                Rr(e, 0)
            }

            function Zn(e) {
                if (Y(So(e))) return e
            }

            function Jn(e, t) {
                if ("change" === e) return t
            }

            var Kn = !1;
            if (c) {
                var qn;
                if (c) {
                    var Xn = "oninput" in document;
                    if (!Xn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Xn = "function" == typeof er.oninput
                    }
                    qn = Xn
                } else qn = !1;
                Kn = qn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                $n && ($n.detachEvent("onpropertychange", nr), Yn = $n = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && Zn(Yn)) {
                    var t = [];
                    Vn(t, Yn, e, Se(e)), ze(Gn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), Yn = n, ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function or(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Zn(Yn)
            }

            function ar(e, t) {
                if ("click" === e) return Zn(t)
            }

            function ir(e, t) {
                if ("input" === e || "change" === e) return Zn(t)
            }

            var lr = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            };

            function ur(e, t) {
                if (lr(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (!f.call(t, o) || !lr(e[o], t[o])) return !1
                }
                return !0
            }

            function sr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function cr(e, t) {
                var n, r = sr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                        e = n
                    }
                    e:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = sr(r)
                }
            }

            function fr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function dr() {
                for (var e = window, t = G(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n) break;
                    t = G((e = t.contentWindow).document)
                }
                return t
            }

            function pr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function hr(e) {
                var t = dr(), n = e.focusedElem, r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && pr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var o = n.textContent.length, a = Math.min(r.start, o);
                        r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = cr(n, a);
                        var i = cr(n, r);
                        o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }

            var mr = c && "documentMode" in document && 11 >= document.documentMode, gr = null, yr = null, vr = null,
                br = !1;

            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == gr || gr !== G(r) || (r = "selectionStart" in (r = gr) && pr(r) ? {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, vr && ur(vr, r) || (vr = r, 0 < (r = $r(yr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = gr)))
            }

            function Sr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }

            var xr = {
                animationend: Sr("Animation", "AnimationEnd"),
                animationiteration: Sr("Animation", "AnimationIteration"),
                animationstart: Sr("Animation", "AnimationStart"),
                transitionend: Sr("Transition", "TransitionEnd")
            }, kr = {}, Er = {};

            function Cr(e) {
                if (kr[e]) return kr[e];
                if (!xr[e]) return e;
                var t, n = xr[e];
                for (t in n) if (n.hasOwnProperty(t) && t in Er) return kr[e] = n[t];
                return e
            }

            c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
            var Mr = Cr("animationend"), Or = Cr("animationiteration"), Nr = Cr("animationstart"),
                Dr = Cr("transitionend"), Pr = new Map,
                zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function jr(e, t) {
                Pr.set(e, t), u(t, [e])
            }

            for (var Ar = 0; Ar < zr.length; Ar++) {
                var Ir = zr[Ar];
                jr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)))
            }
            jr(Mr, "onAnimationEnd"), jr(Or, "onAnimationIteration"), jr(Nr, "onAnimationStart"), jr("dblclick", "onDoubleClick"), jr("focusin", "onFocus"), jr("focusout", "onBlur"), jr(Dr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));

            function _r(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n, function (e, t, n, r, o, i, l, u, s) {
                    if (Qe.apply(this, arguments), Le) {
                        if (!Le) throw Error(a(198));
                        var c = _e;
                        Le = !1, _e = null, Re || (Re = !0, Fe = c)
                    }
                }(r, t, void 0, e), e.currentTarget = null
            }

            function Rr(e, t) {
                t = 0 != (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], o = r.event;
                    r = r.listeners;
                    e:{
                        var a = void 0;
                        if (t) for (var i = r.length - 1; 0 <= i; i--) {
                            var l = r[i], u = l.instance, s = l.currentTarget;
                            if (l = l.listener, u !== a && o.isPropagationStopped()) break e;
                            _r(o, l, s), a = u
                        } else for (i = 0; i < r.length; i++) {
                            if (u = (l = r[i]).instance, s = l.currentTarget, l = l.listener, u !== a && o.isPropagationStopped()) break e;
                            _r(o, l, s), a = u
                        }
                    }
                }
                if (Re) throw e = Fe, Re = !1, Fe = null, e
            }

            function Fr(e, t) {
                var n = t[go];
                void 0 === n && (n = t[go] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Wr(t, e, 2, !1), n.add(r))
            }

            function Ur(e, t, n) {
                var r = 0;
                t && (r |= 4), Wr(n, e, r, t)
            }

            var Qr = "_reactListening" + Math.random().toString(36).slice(2);

            function Br(e) {
                if (!e[Qr]) {
                    e[Qr] = !0, i.forEach((function (t) {
                        "selectionchange" !== t && (Lr.has(t) || Ur(t, !1, e), Ur(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Qr] || (t[Qr] = !0, Ur("selectionchange", !1, t))
                }
            }

            function Wr(e, t, n, r) {
                switch (Jt(t)) {
                    case 1:
                        var o = Vt;
                        break;
                    case 4:
                        o = $t;
                        break;
                    default:
                        o = Yt
                }
                n = o.bind(null, t, n, e), o = void 0, !Ae || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
            }

            function Hr(e, t, n, r, o) {
                var a = r;
                if (0 == (1 & t) && 0 == (2 & t) && null !== r) e:for (; ;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var l = r.stateNode.containerInfo;
                        if (l === o || 8 === l.nodeType && l.parentNode === o) break;
                        if (4 === i) for (i = r.return; null !== i;) {
                            var u = i.tag;
                            if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                            i = i.return
                        }
                        for (; null !== l;) {
                            if (null === (i = bo(l))) return;
                            if (5 === (u = i.tag) || 6 === u) {
                                r = a = i;
                                continue e
                            }
                            l = l.parentNode
                        }
                    }
                    r = r.return
                }
                ze((function () {
                    var r = a, o = Se(n), i = [];
                    e:{
                        var l = Pr.get(e);
                        if (void 0 !== l) {
                            var u = cn, s = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === tn(n)) break e;
                                case"keydown":
                                case"keyup":
                                    u = On;
                                    break;
                                case"focusin":
                                    s = "focus", u = gn;
                                    break;
                                case"focusout":
                                    s = "blur", u = gn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    u = gn;
                                    break;
                                case"click":
                                    if (2 === n.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    u = hn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    u = mn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    u = Dn;
                                    break;
                                case Mr:
                                case Or:
                                case Nr:
                                    u = yn;
                                    break;
                                case Dr:
                                    u = Pn;
                                    break;
                                case"scroll":
                                    u = dn;
                                    break;
                                case"wheel":
                                    u = jn;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    u = bn;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    u = Nn
                            }
                            var c = 0 != (4 & t), f = !c && "scroll" === e,
                                d = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var p, h = r; null !== h;) {
                                var m = (p = h).stateNode;
                                if (5 === p.tag && null !== m && (p = m, null !== d && null != (m = je(h, d)) && c.push(Vr(h, m, p))), f) break;
                                h = h.return
                            }
                            0 < c.length && (l = new u(l, s, null, n, o), i.push({event: l, listeners: c}))
                        }
                    }
                    if (0 == (7 & t)) {
                        if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !bo(s) && !s[mo]) && (u || l) && (l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? bo(s) : null) && (s !== (f = Be(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                            if (c = hn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Nn, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? l : So(u), p = null == s ? l : So(s), (l = new c(m, h + "leave", u, n, o)).target = f, l.relatedTarget = p, m = null, bo(o) === r && ((c = new c(d, h + "enter", s, n, o)).target = p, c.relatedTarget = f, m = c), f = m, u && s) e:{
                                for (d = s, h = 0, p = c = u; p; p = Yr(p)) h++;
                                for (p = 0, m = d; m; m = Yr(m)) p++;
                                for (; 0 < h - p;) c = Yr(c), h--;
                                for (; 0 < p - h;) d = Yr(d), p--;
                                for (; h--;) {
                                    if (c === d || null !== d && c === d.alternate) break e;
                                    c = Yr(c), d = Yr(d)
                                }
                                c = null
                            } else c = null;
                            null !== u && Gr(i, l, u, c, !1), null !== s && null !== f && Gr(i, f, s, c, !0)
                        }
                        if ("select" === (u = (l = r ? So(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var g = Jn; else if (Hn(l)) if (Kn) g = ir; else {
                            g = or;
                            var y = rr
                        } else (u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = ar);
                        switch (g && (g = g(e, r)) ? Vn(i, g, n, o) : (y && y(e, l, r), "focusout" === e && (y = l._wrapperState) && y.controlled && "number" === l.type && ee(l, "number", l.value)), y = r ? So(r) : window, e) {
                            case"focusin":
                                (Hn(y) || "true" === y.contentEditable) && (gr = y, yr = r, vr = null);
                                break;
                            case"focusout":
                                vr = yr = gr = null;
                                break;
                            case"mousedown":
                                br = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                br = !1, wr(i, n, o);
                                break;
                            case"selectionchange":
                                if (mr) break;
                            case"keydown":
                            case"keyup":
                                wr(i, n, o)
                        }
                        var v;
                        if (In) e:{
                            switch (e) {
                                case"compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                            }
                            b = void 0
                        } else Bn ? Un(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (_n && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (v = en()) : (qt = "value" in (Kt = o) ? Kt.value : Kt.textContent, Bn = !0)), 0 < (y = $r(r, b)).length && (b = new wn(b, e, null, n, o), i.push({
                            event: b,
                            listeners: y
                        }), (v || null !== (v = Qn(n))) && (b.data = v))), (v = Ln ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return Qn(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (Fn = !0, Rn);
                                case"textInput":
                                    return (e = t.data) === Rn && Fn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (Bn) return "compositionend" === e || !In && Un(e, t) ? (e = en(), Xt = qt = Kt = null, Bn = !1, e) : null;
                            switch (e) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return _n && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && 0 < (r = $r(r, "onBeforeInput")).length && (o = new wn("onBeforeInput", "beforeinput", null, n, o), i.push({
                            event: o,
                            listeners: r
                        }), o.data = v)
                    }
                    Rr(i, t)
                }))
            }

            function Vr(e, t, n) {
                return {instance: e, listener: t, currentTarget: n}
            }

            function $r(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var o = e, a = o.stateNode;
                    5 === o.tag && null !== a && (o = a, null != (a = je(e, n)) && r.unshift(Vr(e, a, o)), null != (a = je(e, t)) && r.push(Vr(e, a, o))), e = e.return
                }
                return r
            }

            function Yr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Gr(e, t, n, r, o) {
                for (var a = t._reactName, i = []; null !== n && n !== r;) {
                    var l = n, u = l.alternate, s = l.stateNode;
                    if (null !== u && u === r) break;
                    5 === l.tag && null !== s && (l = s, o ? null != (u = je(n, a)) && i.unshift(Vr(n, u, l)) : o || null != (u = je(n, a)) && i.push(Vr(n, u, l))), n = n.return
                }
                0 !== i.length && e.push({event: t, listeners: i})
            }

            var Zr = /\r\n?/g, Jr = /\u0000|\uFFFD/g;

            function Kr(e) {
                return ("string" == typeof e ? e : "" + e).replace(Zr, "\n").replace(Jr, "")
            }

            function qr(e, t, n) {
                if (t = Kr(t), Kr(e) !== t && n) throw Error(a(425))
            }

            function Xr() {
            }

            var eo = null, to = null;

            function no(e, t) {
                return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var ro = "function" == typeof setTimeout ? setTimeout : void 0,
                oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
                ao = "function" == typeof Promise ? Promise : void 0,
                io = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== ao ? function (e) {
                    return ao.resolve(null).then(e).catch(lo)
                } : ro;

            function lo(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            function uo(e, t) {
                var n = t, r = 0;
                do {
                    var o = n.nextSibling;
                    if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
                        if (0 === r) return e.removeChild(o), void Bt(t);
                        r--
                    } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = o
                } while (n);
                Bt(t)
            }

            function so(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function co(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            var fo = Math.random().toString(36).slice(2), po = "__reactFiber$" + fo, ho = "__reactProps$" + fo,
                mo = "__reactContainer$" + fo, go = "__reactEvents$" + fo, yo = "__reactListeners$" + fo,
                vo = "__reactHandles$" + fo;

            function bo(e) {
                var t = e[po];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[mo] || n[po]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = co(e); null !== e;) {
                            if (n = e[po]) return n;
                            e = co(e)
                        }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function wo(e) {
                return !(e = e[po] || e[mo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function So(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(a(33))
            }

            function xo(e) {
                return e[ho] || null
            }

            var ko = [], Eo = -1;

            function Co(e) {
                return {current: e}
            }

            function Mo(e) {
                0 > Eo || (e.current = ko[Eo], ko[Eo] = null, Eo--)
            }

            function Oo(e, t) {
                Eo++, ko[Eo] = e.current, e.current = t
            }

            var No = {}, Do = Co(No), Po = Co(!1), zo = No;

            function jo(e, t) {
                var n = e.type.contextTypes;
                if (!n) return No;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, a = {};
                for (o in n) a[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function Ao(e) {
                return null != e.childContextTypes
            }

            function Io() {
                Mo(Po), Mo(Do)
            }

            function To(e, t, n) {
                if (Do.current !== No) throw Error(a(168));
                Oo(Do, t), Oo(Po, n)
            }

            function Lo(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(a(108, W(e) || "Unknown", o));
                return _({}, n, r)
            }

            function _o(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || No, zo = Do.current, Oo(Do, e), Oo(Po, Po.current), !0
            }

            function Ro(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(a(169));
                n ? (e = Lo(e, t, zo), r.__reactInternalMemoizedMergedChildContext = e, Mo(Po), Mo(Do), Oo(Do, e)) : Mo(Po), Oo(Po, n)
            }

            var Fo = null, Uo = !1, Qo = !1;

            function Bo(e) {
                null === Fo ? Fo = [e] : Fo.push(e)
            }

            function Wo() {
                if (!Qo && null !== Fo) {
                    Qo = !0;
                    var e = 0, t = bt;
                    try {
                        var n = Fo;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Fo = null, Uo = !1
                    } catch (t) {
                        throw null !== Fo && (Fo = Fo.slice(e + 1)), Ye(Xe, Wo), t
                    } finally {
                        bt = t, Qo = !1
                    }
                }
                return null
            }

            var Ho = [], Vo = 0, $o = null, Yo = 0, Go = [], Zo = 0, Jo = null, Ko = 1, qo = "";

            function Xo(e, t) {
                Ho[Vo++] = Yo, Ho[Vo++] = $o, $o = e, Yo = t
            }

            function ea(e, t, n) {
                Go[Zo++] = Ko, Go[Zo++] = qo, Go[Zo++] = Jo, Jo = e;
                var r = Ko;
                e = qo;
                var o = 32 - it(r) - 1;
                r &= ~(1 << o), n += 1;
                var a = 32 - it(t) + o;
                if (30 < a) {
                    var i = o - o % 5;
                    a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Ko = 1 << 32 - it(t) + o | n << o | r, qo = a + e
                } else Ko = 1 << a | n << o | r, qo = e
            }

            function ta(e) {
                null !== e.return && (Xo(e, 1), ea(e, 1, 0))
            }

            function na(e) {
                for (; e === $o;) $o = Ho[--Vo], Ho[Vo] = null, Yo = Ho[--Vo], Ho[Vo] = null;
                for (; e === Jo;) Jo = Go[--Zo], Go[Zo] = null, qo = Go[--Zo], Go[Zo] = null, Ko = Go[--Zo], Go[Zo] = null
            }

            var ra = null, oa = null, aa = !1, ia = null;

            function la(e, t) {
                var n = zs(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function ua(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, oa = so(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, oa = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Jo ? {
                            id: Ko,
                            overflow: qo
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = zs(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ra = e, oa = null, !0);
                    default:
                        return !1
                }
            }

            function sa(e) {
                return 0 != (1 & e.mode) && 0 == (128 & e.flags)
            }

            function ca(e) {
                if (aa) {
                    var t = oa;
                    if (t) {
                        var n = t;
                        if (!ua(e, t)) {
                            if (sa(e)) throw Error(a(418));
                            t = so(n.nextSibling);
                            var r = ra;
                            t && ua(e, t) ? la(r, n) : (e.flags = -4097 & e.flags | 2, aa = !1, ra = e)
                        }
                    } else {
                        if (sa(e)) throw Error(a(418));
                        e.flags = -4097 & e.flags | 2, aa = !1, ra = e
                    }
                }
            }

            function fa(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                ra = e
            }

            function da(e) {
                if (e !== ra) return !1;
                if (!aa) return fa(e), aa = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oa)) {
                    if (sa(e)) throw pa(), Error(a(418));
                    for (; t;) la(e, t), t = so(t.nextSibling)
                }
                if (fa(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                    e:{
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        oa = so(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        oa = null
                    }
                } else oa = ra ? so(e.stateNode.nextSibling) : null;
                return !0
            }

            function pa() {
                for (var e = oa; e;) e = so(e.nextSibling)
            }

            function ha() {
                oa = ra = null, aa = !1
            }

            function ma(e) {
                null === ia ? ia = [e] : ia.push(e)
            }

            var ga = w.ReactCurrentBatchConfig;

            function ya(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = _({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }

            var va = Co(null), ba = null, wa = null, Sa = null;

            function xa() {
                Sa = wa = ba = null
            }

            function ka(e) {
                var t = va.current;
                Mo(va), e._currentValue = t
            }

            function Ea(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Ca(e, t) {
                ba = e, Sa = wa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wl = !0), e.firstContext = null)
            }

            function Ma(e) {
                var t = e._currentValue;
                if (Sa !== e) if (e = {context: e, memoizedValue: t, next: null}, null === wa) {
                    if (null === ba) throw Error(a(308));
                    wa = e, ba.dependencies = {lanes: 0, firstContext: e}
                } else wa = wa.next = e;
                return t
            }

            var Oa = null;

            function Na(e) {
                null === Oa ? Oa = [e] : Oa.push(e)
            }

            function Da(e, t, n, r) {
                var o = t.interleaved;
                return null === o ? (n.next = n, Na(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Pa(e, r)
            }

            function Pa(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            var za = !1;

            function ja(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, interleaved: null, lanes: 0},
                    effects: null
                }
            }

            function Aa(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Ia(e, t) {
                return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function Ta(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 != (2 & Nu)) {
                    var o = r.pending;
                    return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Pa(e, n)
                }
                return null === (o = r.interleaved) ? (t.next = t, Na(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Pa(e, n)
            }

            function La(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
                }
            }

            function _a(e, t) {
                var n = e.updateQueue, r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null, a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? o = a = i : a = a.next = i, n = n.next
                        } while (null !== n);
                        null === a ? o = a = t : a = a.next = t
                    } else o = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        effects: r.effects
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function Ra(e, t, n, r) {
                var o = e.updateQueue;
                za = !1;
                var a = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
                if (null !== l) {
                    o.shared.pending = null;
                    var u = l, s = u.next;
                    u.next = null, null === i ? a = s : i.next = s, i = u;
                    var c = e.alternate;
                    null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u)
                }
                if (null !== a) {
                    var f = o.baseState;
                    for (i = 0, c = s = u = null, l = a; ;) {
                        var d = l.lane, p = l.eventTime;
                        if ((r & d) === d) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e:{
                                var h = e, m = l;
                                switch (d = t, p = n, m.tag) {
                                    case 1:
                                        if ("function" == typeof (h = m.payload)) {
                                            f = h.call(p, f, d);
                                            break e
                                        }
                                        f = h;
                                        break e;
                                    case 3:
                                        h.flags = -65537 & h.flags | 128;
                                    case 0:
                                        if (null == (d = "function" == typeof (h = m.payload) ? h.call(p, f, d) : h)) break e;
                                        f = _({}, f, d);
                                        break e;
                                    case 2:
                                        za = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (d = o.effects) ? o.effects = [l] : d.push(l))
                        } else p = {
                            eventTime: p,
                            lane: d,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null
                        }, null === c ? (s = c = p, u = f) : c = c.next = p, i |= d;
                        if (null === (l = l.next)) {
                            if (null === (l = o.shared.pending)) break;
                            l = (d = l).next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null
                        }
                    }
                    if (null === c && (u = f), o.baseState = u, o.firstBaseUpdate = s, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                        o = t;
                        do {
                            i |= o.lane, o = o.next
                        } while (o !== t)
                    } else null === a && (o.shared.lanes = 0);
                    Lu |= i, e.lanes = i, e.memoizedState = f
                }
            }

            function Fa(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
                    var r = e[t], o = r.callback;
                    if (null !== o) {
                        if (r.callback = null, r = n, "function" != typeof o) throw Error(a(191, o));
                        o.call(r)
                    }
                }
            }

            var Ua = (new r.Component).refs;

            function Qa(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : _({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }

            var Ba = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && Be(e) === e
                }, enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = es(), o = ts(e), a = Ia(r, o);
                    a.payload = t, null != n && (a.callback = n), null !== (t = Ta(e, a, o)) && (ns(t, e, o, r), La(t, e, o))
                }, enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = es(), o = ts(e), a = Ia(r, o);
                    a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Ta(e, a, o)) && (ns(t, e, o, r), La(t, e, o))
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = es(), r = ts(e), o = Ia(n, r);
                    o.tag = 2, null != t && (o.callback = t), null !== (t = Ta(e, o, r)) && (ns(t, e, r, n), La(t, e, r))
                }
            };

            function Wa(e, t, n, r, o, a, i) {
                return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(o, a))
            }

            function Ha(e, t, n) {
                var r = !1, o = No, a = t.contextType;
                return "object" == typeof a && null !== a ? a = Ma(a) : (o = Ao(t) ? zo : Do.current, a = (r = null != (r = t.contextTypes)) ? jo(e, o) : No), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ba, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
            }

            function Va(e, t, n, r) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ba.enqueueReplaceState(t, t.state, null)
            }

            function $a(e, t, n, r) {
                var o = e.stateNode;
                o.props = n, o.state = e.memoizedState, o.refs = Ua, ja(e);
                var a = t.contextType;
                "object" == typeof a && null !== a ? o.context = Ma(a) : (a = Ao(t) ? zo : Do.current, o.context = jo(e, a)), o.state = e.memoizedState, "function" == typeof (a = t.getDerivedStateFromProps) && (Qa(e, t, a, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Ba.enqueueReplaceState(o, o.state, null), Ra(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
            }

            function Ya(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(a(147, e));
                        var o = r, i = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
                            var t = o.refs;
                            t === Ua && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e
                        }, t._stringRef = i, t)
                    }
                    if ("string" != typeof e) throw Error(a(284));
                    if (!n._owner) throw Error(a(290, e))
                }
                return e
            }

            function Ga(e, t) {
                throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Za(e) {
                return (0, e._init)(e._payload)
            }

            function Ja(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function o(e, t) {
                    return (e = As(e, t)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function l(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = _s(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function s(e, t, n, r) {
                    var a = n.type;
                    return a === k ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === j && Za(a) === t.type) ? ((r = o(t, n.props)).ref = Ya(e, t, n), r.return = e, r) : ((r = Is(n.type, n.key, n.props, null, e.mode, r)).ref = Ya(e, t, n), r.return = e, r)
                }

                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Rs(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                }

                function f(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = Ts(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function d(e, t, n) {
                    if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = _s("" + t, e.mode, n)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case S:
                                return (n = Is(t.type, t.key, t.props, null, e.mode, n)).ref = Ya(e, null, t), n.return = e, n;
                            case x:
                                return (t = Rs(t, e.mode, n)).return = e, t;
                            case j:
                                return d(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || T(t)) return (t = Ts(t, e.mode, n, null)).return = e, t;
                        Ga(e, t)
                    }
                    return null
                }

                function p(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case S:
                                return n.key === o ? s(e, t, n, r) : null;
                            case x:
                                return n.key === o ? c(e, t, n, r) : null;
                            case j:
                                return p(e, t, (o = n._init)(n._payload), r)
                        }
                        if (te(n) || T(n)) return null !== o ? null : f(e, t, n, r, null);
                        Ga(e, n)
                    }
                    return null
                }

                function h(e, t, n, r, o) {
                    if ("string" == typeof r && "" !== r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, o);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case S:
                                return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                            case x:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                            case j:
                                return h(e, t, n, (0, r._init)(r._payload), o)
                        }
                        if (te(r) || T(r)) return f(t, e = e.get(n) || null, r, o, null);
                        Ga(t, r)
                    }
                    return null
                }

                function m(o, a, l, u) {
                    for (var s = null, c = null, f = a, m = a = 0, g = null; null !== f && m < l.length; m++) {
                        f.index > m ? (g = f, f = null) : g = f.sibling;
                        var y = p(o, f, l[m], u);
                        if (null === y) {
                            null === f && (f = g);
                            break
                        }
                        e && f && null === y.alternate && t(o, f), a = i(y, a, m), null === c ? s = y : c.sibling = y, c = y, f = g
                    }
                    if (m === l.length) return n(o, f), aa && Xo(o, m), s;
                    if (null === f) {
                        for (; m < l.length; m++) null !== (f = d(o, l[m], u)) && (a = i(f, a, m), null === c ? s = f : c.sibling = f, c = f);
                        return aa && Xo(o, m), s
                    }
                    for (f = r(o, f); m < l.length; m++) null !== (g = h(f, o, m, l[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), a = i(g, a, m), null === c ? s = g : c.sibling = g, c = g);
                    return e && f.forEach((function (e) {
                        return t(o, e)
                    })), aa && Xo(o, m), s
                }

                function g(o, l, u, s) {
                    var c = T(u);
                    if ("function" != typeof c) throw Error(a(150));
                    if (null == (u = c.call(u))) throw Error(a(151));
                    for (var f = c = null, m = l, g = l = 0, y = null, v = u.next(); null !== m && !v.done; g++, v = u.next()) {
                        m.index > g ? (y = m, m = null) : y = m.sibling;
                        var b = p(o, m, v.value, s);
                        if (null === b) {
                            null === m && (m = y);
                            break
                        }
                        e && m && null === b.alternate && t(o, m), l = i(b, l, g), null === f ? c = b : f.sibling = b, f = b, m = y
                    }
                    if (v.done) return n(o, m), aa && Xo(o, g), c;
                    if (null === m) {
                        for (; !v.done; g++, v = u.next()) null !== (v = d(o, v.value, s)) && (l = i(v, l, g), null === f ? c = v : f.sibling = v, f = v);
                        return aa && Xo(o, g), c
                    }
                    for (m = r(o, m); !v.done; g++, v = u.next()) null !== (v = h(m, o, g, v.value, s)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), l = i(v, l, g), null === f ? c = v : f.sibling = v, f = v);
                    return e && m.forEach((function (e) {
                        return t(o, e)
                    })), aa && Xo(o, g), c
                }

                return function e(r, a, i, u) {
                    if ("object" == typeof i && null !== i && i.type === k && null === i.key && (i = i.props.children), "object" == typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case S:
                                e:{
                                    for (var s = i.key, c = a; null !== c;) {
                                        if (c.key === s) {
                                            if ((s = i.type) === k) {
                                                if (7 === c.tag) {
                                                    n(r, c.sibling), (a = o(c, i.props.children)).return = r, r = a;
                                                    break e
                                                }
                                            } else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === j && Za(s) === c.type) {
                                                n(r, c.sibling), (a = o(c, i.props)).ref = Ya(r, c, i), a.return = r, r = a;
                                                break e
                                            }
                                            n(r, c);
                                            break
                                        }
                                        t(r, c), c = c.sibling
                                    }
                                    i.type === k ? ((a = Ts(i.props.children, r.mode, u, i.key)).return = r, r = a) : ((u = Is(i.type, i.key, i.props, null, r.mode, u)).ref = Ya(r, a, i), u.return = r, r = u)
                                }
                                return l(r);
                            case x:
                                e:{
                                    for (c = i.key; null !== a;) {
                                        if (a.key === c) {
                                            if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                                                n(r, a.sibling), (a = o(a, i.children || [])).return = r, r = a;
                                                break e
                                            }
                                            n(r, a);
                                            break
                                        }
                                        t(r, a), a = a.sibling
                                    }
                                    (a = Rs(i, r.mode, u)).return = r, r = a
                                }
                                return l(r);
                            case j:
                                return e(r, a, (c = i._init)(i._payload), u)
                        }
                        if (te(i)) return m(r, a, i, u);
                        if (T(i)) return g(r, a, i, u);
                        Ga(r, i)
                    }
                    return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = o(a, i)).return = r, r = a) : (n(r, a), (a = _s(i, r.mode, u)).return = r, r = a), l(r)) : n(r, a)
                }
            }

            var Ka = Ja(!0), qa = Ja(!1), Xa = {}, ei = Co(Xa), ti = Co(Xa), ni = Co(Xa);

            function ri(e) {
                if (e === Xa) throw Error(a(174));
                return e
            }

            function oi(e, t) {
                switch (Oo(ni, t), Oo(ti, e), Oo(ei, Xa), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                        break;
                    default:
                        t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Mo(ei), Oo(ei, t)
            }

            function ai() {
                Mo(ei), Mo(ti), Mo(ni)
            }

            function ii(e) {
                ri(ni.current);
                var t = ri(ei.current), n = ue(t, e.type);
                t !== n && (Oo(ti, e), Oo(ei, n))
            }

            function li(e) {
                ti.current === e && (Mo(ei), Mo(ti))
            }

            var ui = Co(0);

            function si(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var ci = [];

            function fi() {
                for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
                ci.length = 0
            }

            var di = w.ReactCurrentDispatcher, pi = w.ReactCurrentBatchConfig, hi = 0, mi = null, gi = null, yi = null,
                vi = !1, bi = !1, wi = 0, Si = 0;

            function xi() {
                throw Error(a(321))
            }

            function ki(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
                return !0
            }

            function Ei(e, t, n, r, o, i) {
                if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = null === e || null === e.memoizedState ? ll : ul, e = n(r, o), bi) {
                    i = 0;
                    do {
                        if (bi = !1, wi = 0, 25 <= i) throw Error(a(301));
                        i += 1, yi = gi = null, t.updateQueue = null, di.current = sl, e = n(r, o)
                    } while (bi)
                }
                if (di.current = il, t = null !== gi && null !== gi.next, hi = 0, yi = gi = mi = null, vi = !1, t) throw Error(a(300));
                return e
            }

            function Ci() {
                var e = 0 !== wi;
                return wi = 0, e
            }

            function Mi() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === yi ? mi.memoizedState = yi = e : yi = yi.next = e, yi
            }

            function Oi() {
                if (null === gi) {
                    var e = mi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = gi.next;
                var t = null === yi ? mi.memoizedState : yi.next;
                if (null !== t) yi = t, gi = e; else {
                    if (null === e) throw Error(a(310));
                    e = {
                        memoizedState: (gi = e).memoizedState,
                        baseState: gi.baseState,
                        baseQueue: gi.baseQueue,
                        queue: gi.queue,
                        next: null
                    }, null === yi ? mi.memoizedState = yi = e : yi = yi.next = e
                }
                return yi
            }

            function Ni(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function Di(e) {
                var t = Oi(), n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = gi, o = r.baseQueue, i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var l = o.next;
                        o.next = i.next, i.next = l
                    }
                    r.baseQueue = o = i, n.pending = null
                }
                if (null !== o) {
                    i = o.next, r = r.baseState;
                    var u = l = null, s = null, c = i;
                    do {
                        var f = c.lane;
                        if ((hi & f) === f) null !== s && (s = s.next = {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                            var d = {
                                lane: f,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === s ? (u = s = d, l = r) : s = s.next = d, mi.lanes |= f, Lu |= f
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (wl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    o = e;
                    do {
                        i = o.lane, mi.lanes |= i, Lu |= i, o = o.next
                    } while (o !== e)
                } else null === o && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function Pi(e) {
                var t = Oi(), n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch, o = n.pending, i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var l = o = o.next;
                    do {
                        i = e(i, l.action), l = l.next
                    } while (l !== o);
                    lr(i, t.memoizedState) || (wl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                }
                return [i, r]
            }

            function zi() {
            }

            function ji(e, t) {
                var n = mi, r = Oi(), o = t(), i = !lr(r.memoizedState, o);
                if (i && (r.memoizedState = o, wl = !0), r = r.queue, Hi(Ti.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== yi && 1 & yi.memoizedState.tag) {
                    if (n.flags |= 2048, Fi(9, Ii.bind(null, n, r, o, t), void 0, null), null === Du) throw Error(a(349));
                    0 != (30 & hi) || Ai(n, t, o)
                }
                return o
            }

            function Ai(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = mi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function Ii(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Li(t) && _i(e)
            }

            function Ti(e, t, n) {
                return n((function () {
                    Li(t) && _i(e)
                }))
            }

            function Li(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !lr(e, n)
                } catch (e) {
                    return !0
                }
            }

            function _i(e) {
                var t = Pa(e, 1);
                null !== t && ns(t, e, 1, -1)
            }

            function Ri(e) {
                var t = Mi();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ni,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = nl.bind(null, mi, e), [t.memoizedState, e]
            }

            function Fi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = mi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Ui() {
                return Oi().memoizedState
            }

            function Qi(e, t, n, r) {
                var o = Mi();
                mi.flags |= e, o.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Bi(e, t, n, r) {
                var o = Oi();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== gi) {
                    var i = gi.memoizedState;
                    if (a = i.destroy, null !== r && ki(r, i.deps)) return void (o.memoizedState = Fi(t, n, a, r))
                }
                mi.flags |= e, o.memoizedState = Fi(1 | t, n, a, r)
            }

            function Wi(e, t) {
                return Qi(8390656, 8, e, t)
            }

            function Hi(e, t) {
                return Bi(2048, 8, e, t)
            }

            function Vi(e, t) {
                return Bi(4, 2, e, t)
            }

            function $i(e, t) {
                return Bi(4, 4, e, t)
            }

            function Yi(e, t) {
                return "function" == typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null != t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function Gi(e, t, n) {
                return n = null != n ? n.concat([e]) : null, Bi(4, 4, Yi.bind(null, t, e), n)
            }

            function Zi() {
            }

            function Ji(e, t) {
                var n = Oi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Ki(e, t) {
                var n = Oi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && ki(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function qi(e, t, n) {
                return 0 == (21 & hi) ? (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n) : (lr(n, t) || (n = mt(), mi.lanes |= n, Lu |= n, e.baseState = !0), t)
            }

            function Xi(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = pi.transition;
                pi.transition = {};
                try {
                    e(!1), t()
                } finally {
                    bt = n, pi.transition = r
                }
            }

            function el() {
                return Oi().memoizedState
            }

            function tl(e, t, n) {
                var r = ts(e);
                n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, rl(e) ? ol(t, n) : null !== (n = Da(e, t, n, r)) && (ns(n, e, r, es()), al(n, t, r))
            }

            function nl(e, t, n) {
                var r = ts(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (rl(e)) ol(t, o); else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                        var i = t.lastRenderedState, l = a(i, n);
                        if (o.hasEagerState = !0, o.eagerState = l, lr(l, i)) {
                            var u = t.interleaved;
                            return null === u ? (o.next = o, Na(t)) : (o.next = u.next, u.next = o), void (t.interleaved = o)
                        }
                    } catch (e) {
                    }
                    null !== (n = Da(e, t, o, r)) && (ns(n, e, r, o = es()), al(n, t, r))
                }
            }

            function rl(e) {
                var t = e.alternate;
                return e === mi || null !== t && t === mi
            }

            function ol(e, t) {
                bi = vi = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function al(e, t, n) {
                if (0 != (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
                }
            }

            var il = {
                readContext: Ma,
                useCallback: xi,
                useContext: xi,
                useEffect: xi,
                useImperativeHandle: xi,
                useInsertionEffect: xi,
                useLayoutEffect: xi,
                useMemo: xi,
                useReducer: xi,
                useRef: xi,
                useState: xi,
                useDebugValue: xi,
                useDeferredValue: xi,
                useTransition: xi,
                useMutableSource: xi,
                useSyncExternalStore: xi,
                useId: xi,
                unstable_isNewReconciler: !1
            }, ll = {
                readContext: Ma, useCallback: function (e, t) {
                    return Mi().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: Ma, useEffect: Wi, useImperativeHandle: function (e, t, n) {
                    return n = null != n ? n.concat([e]) : null, Qi(4194308, 4, Yi.bind(null, t, e), n)
                }, useLayoutEffect: function (e, t) {
                    return Qi(4194308, 4, e, t)
                }, useInsertionEffect: function (e, t) {
                    return Qi(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var n = Mi();
                    return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                }, useReducer: function (e, t, n) {
                    var r = Mi();
                    return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, r.queue = e, e = e.dispatch = tl.bind(null, mi, e), [r.memoizedState, e]
                }, useRef: function (e) {
                    return e = {current: e}, Mi().memoizedState = e
                }, useState: Ri, useDebugValue: Zi, useDeferredValue: function (e) {
                    return Mi().memoizedState = e
                }, useTransition: function () {
                    var e = Ri(!1), t = e[0];
                    return e = Xi.bind(null, e[1]), Mi().memoizedState = e, [t, e]
                }, useMutableSource: function () {
                }, useSyncExternalStore: function (e, t, n) {
                    var r = mi, o = Mi();
                    if (aa) {
                        if (void 0 === n) throw Error(a(407));
                        n = n()
                    } else {
                        if (n = t(), null === Du) throw Error(a(349));
                        0 != (30 & hi) || Ai(r, t, n)
                    }
                    o.memoizedState = n;
                    var i = {value: n, getSnapshot: t};
                    return o.queue = i, Wi(Ti.bind(null, r, i, e), [e]), r.flags |= 2048, Fi(9, Ii.bind(null, r, i, n, t), void 0, null), n
                }, useId: function () {
                    var e = Mi(), t = Du.identifierPrefix;
                    if (aa) {
                        var n = qo;
                        t = ":" + t + "R" + (n = (Ko & ~(1 << 32 - it(Ko) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (n = Si++).toString(32) + ":";
                    return e.memoizedState = t
                }, unstable_isNewReconciler: !1
            }, ul = {
                readContext: Ma,
                useCallback: Ji,
                useContext: Ma,
                useEffect: Hi,
                useImperativeHandle: Gi,
                useInsertionEffect: Vi,
                useLayoutEffect: $i,
                useMemo: Ki,
                useReducer: Di,
                useRef: Ui,
                useState: function () {
                    return Di(Ni)
                },
                useDebugValue: Zi,
                useDeferredValue: function (e) {
                    return qi(Oi(), gi.memoizedState, e)
                },
                useTransition: function () {
                    return [Di(Ni)[0], Oi().memoizedState]
                },
                useMutableSource: zi,
                useSyncExternalStore: ji,
                useId: el,
                unstable_isNewReconciler: !1
            }, sl = {
                readContext: Ma,
                useCallback: Ji,
                useContext: Ma,
                useEffect: Hi,
                useImperativeHandle: Gi,
                useInsertionEffect: Vi,
                useLayoutEffect: $i,
                useMemo: Ki,
                useReducer: Pi,
                useRef: Ui,
                useState: function () {
                    return Pi(Ni)
                },
                useDebugValue: Zi,
                useDeferredValue: function (e) {
                    var t = Oi();
                    return null === gi ? t.memoizedState = e : qi(t, gi.memoizedState, e)
                },
                useTransition: function () {
                    return [Pi(Ni)[0], Oi().memoizedState]
                },
                useMutableSource: zi,
                useSyncExternalStore: ji,
                useId: el,
                unstable_isNewReconciler: !1
            };

            function cl(e, t) {
                try {
                    var n = "", r = t;
                    do {
                        n += Q(r), r = r.return
                    } while (r);
                    var o = n
                } catch (e) {
                    o = "\nError generating stack: " + e.message + "\n" + e.stack
                }
                return {value: e, source: t, stack: o, digest: null}
            }

            function fl(e, t, n) {
                return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null}
            }

            function dl(e, t) {
                try {
                    console.error(t.value)
                } catch (e) {
                    setTimeout((function () {
                        throw e
                    }))
                }
            }

            var pl = "function" == typeof WeakMap ? WeakMap : Map;

            function hl(e, t, n) {
                (n = Ia(-1, n)).tag = 3, n.payload = {element: null};
                var r = t.value;
                return n.callback = function () {
                    Hu || (Hu = !0, Vu = r), dl(0, t)
                }, n
            }

            function ml(e, t, n) {
                (n = Ia(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var o = t.value;
                    n.payload = function () {
                        return r(o)
                    }, n.callback = function () {
                        dl(0, t)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
                    dl(0, t), "function" != typeof r && (null === $u ? $u = new Set([this]) : $u.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
                }), n
            }

            function gl(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new pl;
                    var o = new Set;
                    r.set(t, o)
                } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                o.has(n) || (o.add(n), e = Cs.bind(null, e, t, n), t.then(e, e))
            }

            function yl(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function vl(e, t, n, r, o) {
                return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ia(-1, 1)).tag = 2, Ta(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
            }

            var bl = w.ReactCurrentOwner, wl = !1;

            function Sl(e, t, n, r) {
                t.child = null === e ? qa(t, null, n, r) : Ka(t, e.child, n, r)
            }

            function xl(e, t, n, r, o) {
                n = n.render;
                var a = t.ref;
                return Ca(t, o), r = Ei(e, t, n, r, a, o), n = Ci(), null === e || wl ? (aa && n && ta(t), t.flags |= 1, Sl(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o))
            }

            function kl(e, t, n, r, o) {
                if (null === e) {
                    var a = n.type;
                    return "function" != typeof a || js(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Is(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, El(e, t, a, r, o))
                }
                if (a = e.child, 0 == (e.lanes & o)) {
                    var i = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return Hl(e, t, o)
                }
                return t.flags |= 1, (e = As(a, r)).ref = t.ref, e.return = t, t.child = e
            }

            function El(e, t, n, r, o) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (ur(a, r) && e.ref === t.ref) {
                        if (wl = !1, t.pendingProps = r = a, 0 == (e.lanes & o)) return t.lanes = e.lanes, Hl(e, t, o);
                        0 != (131072 & e.flags) && (wl = !0)
                    }
                }
                return Ol(e, t, n, r, o)
            }

            function Cl(e, t, n) {
                var r = t.pendingProps, o = r.children, a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode) if (0 == (1 & t.mode)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, Oo(Au, ju), ju |= n; else {
                    if (0 == (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, Oo(Au, ju), ju |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, r = null !== a ? a.baseLanes : n, Oo(Au, ju), ju |= r
                } else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Oo(Au, ju), ju |= r;
                return Sl(e, t, o, n), t.child
            }

            function Ml(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Ol(e, t, n, r, o) {
                var a = Ao(n) ? zo : Do.current;
                return a = jo(t, a), Ca(t, o), n = Ei(e, t, n, r, a, o), r = Ci(), null === e || wl ? (aa && r && ta(t), t.flags |= 1, Sl(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Hl(e, t, o))
            }

            function Nl(e, t, n, r, o) {
                if (Ao(n)) {
                    var a = !0;
                    _o(t)
                } else a = !1;
                if (Ca(t, o), null === t.stateNode) Wl(e, t), Ha(t, n, r), $a(t, n, r, o), r = !0; else if (null === e) {
                    var i = t.stateNode, l = t.memoizedProps;
                    i.props = l;
                    var u = i.context, s = n.contextType;
                    s = "object" == typeof s && null !== s ? Ma(s) : jo(t, s = Ao(n) ? zo : Do.current);
                    var c = n.getDerivedStateFromProps,
                        f = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                    f || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || u !== s) && Va(t, i, r, s), za = !1;
                    var d = t.memoizedState;
                    i.state = d, Ra(t, r, i, o), u = t.memoizedState, l !== r || d !== u || Po.current || za ? ("function" == typeof c && (Qa(t, n, c, r), u = t.memoizedState), (l = za || Wa(t, n, l, r, d, u, s)) ? (f || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    i = t.stateNode, Aa(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : ya(t.type, l), i.props = s, f = t.pendingProps, d = i.context, u = "object" == typeof (u = n.contextType) && null !== u ? Ma(u) : jo(t, u = Ao(n) ? zo : Do.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== f || d !== u) && Va(t, i, r, u), za = !1, d = t.memoizedState, i.state = d, Ra(t, r, i, o);
                    var h = t.memoizedState;
                    l !== f || d !== h || Po.current || za ? ("function" == typeof p && (Qa(t, n, p, r), h = t.memoizedState), (s = za || Wa(t, n, s, r, d, h, u) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = u, r = s) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return Dl(e, t, n, r, a, o)
            }

            function Dl(e, t, n, r, o, a) {
                Ml(e, t);
                var i = 0 != (128 & t.flags);
                if (!r && !i) return o && Ro(t, n, !1), Hl(e, t, a);
                r = t.stateNode, bl.current = t;
                var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && i ? (t.child = Ka(t, e.child, null, a), t.child = Ka(t, null, l, a)) : Sl(e, t, l, a), t.memoizedState = r.state, o && Ro(t, n, !0), t.child
            }

            function Pl(e) {
                var t = e.stateNode;
                t.pendingContext ? To(0, t.pendingContext, t.pendingContext !== t.context) : t.context && To(0, t.context, !1), oi(e, t.containerInfo)
            }

            function zl(e, t, n, r, o) {
                return ha(), ma(o), t.flags |= 256, Sl(e, t, n, r), t.child
            }

            var jl, Al, Il, Tl = {dehydrated: null, treeContext: null, retryLane: 0};

            function Ll(e) {
                return {baseLanes: e, cachePool: null, transitions: null}
            }

            function _l(e, t, n) {
                var r, o = t.pendingProps, i = ui.current, l = !1, u = 0 != (128 & t.flags);
                if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Oo(ui, 1 & i), null === e) return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = o.children, e = o.fallback, l ? (o = t.mode, l = t.child, u = {
                    mode: "hidden",
                    children: u
                }, 0 == (1 & o) && null !== l ? (l.childLanes = 0, l.pendingProps = u) : l = Ls(u, o, 0, null), e = Ts(e, o, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ll(n), t.memoizedState = Tl, e) : Rl(t, u));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, o, i, l) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Fl(e, t, l, r = fl(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ls({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null), (i = Ts(i, o, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 != (1 & t.mode) && Ka(t, e.child, null, l), t.child.memoizedState = Ll(l), t.memoizedState = Tl, i);
                    if (0 == (1 & t.mode)) return Fl(e, t, l, null);
                    if ("$!" === o.data) {
                        if (r = o.nextSibling && o.nextSibling.dataset) var u = r.dgst;
                        return r = u, Fl(e, t, l, r = fl(i = Error(a(419)), r, void 0))
                    }
                    if (u = 0 != (l & e.childLanes), wl || u) {
                        if (null !== (r = Du)) {
                            switch (l & -l) {
                                case 4:
                                    o = 2;
                                    break;
                                case 16:
                                    o = 8;
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
                                    o = 32;
                                    break;
                                case 536870912:
                                    o = 268435456;
                                    break;
                                default:
                                    o = 0
                            }
                            0 !== (o = 0 != (o & (r.suspendedLanes | l)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Pa(e, o), ns(r, e, o, -1))
                        }
                        return ms(), Fl(e, t, l, r = fl(Error(a(421))))
                    }
                    return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Os.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, oa = so(o.nextSibling), ra = t, aa = !0, ia = null, null !== e && (Go[Zo++] = Ko, Go[Zo++] = qo, Go[Zo++] = Jo, Ko = e.id, qo = e.overflow, Jo = t), (t = Rl(t, r.children)).flags |= 4096, t)
                }(e, t, u, o, r, i, n);
                if (l) {
                    l = o.fallback, u = t.mode, r = (i = e.child).sibling;
                    var s = {mode: "hidden", children: o.children};
                    return 0 == (1 & u) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null) : (o = As(i, s)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = As(r, l) : (l = Ts(l, u, n, null)).flags |= 2, l.return = t, o.return = t, o.sibling = l, t.child = o, o = l, l = t.child, u = null === (u = e.child.memoizedState) ? Ll(n) : {
                        baseLanes: u.baseLanes | n,
                        cachePool: null,
                        transitions: u.transitions
                    }, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Tl, o
                }
                return e = (l = e.child).sibling, o = As(l, {
                    mode: "visible",
                    children: o.children
                }), 0 == (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
            }

            function Rl(e, t) {
                return (t = Ls({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
            }

            function Fl(e, t, n, r) {
                return null !== r && ma(r), Ka(t, e.child, null, n), (e = Rl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function Ul(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), Ea(e.return, t, n)
            }

            function Ql(e, t, n, r, o) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o
                } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
            }

            function Bl(e, t, n) {
                var r = t.pendingProps, o = r.revealOrder, a = r.tail;
                if (Sl(e, t, r.children, n), 0 != (2 & (r = ui.current))) r = 1 & r | 2, t.flags |= 128; else {
                    if (null !== e && 0 != (128 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t); else if (19 === e.tag) Ul(e, n, t); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (Oo(ui, r), 0 == (1 & t.mode)) t.memoizedState = null; else switch (o) {
                    case"forwards":
                        for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === si(e) && (o = n), n = n.sibling;
                        null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ql(t, !1, o, n, a);
                        break;
                    case"backwards":
                        for (n = null, o = t.child, t.child = null; null !== o;) {
                            if (null !== (e = o.alternate) && null === si(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling, o.sibling = n, n = o, o = e
                        }
                        Ql(t, !0, n, null, a);
                        break;
                    case"together":
                        Ql(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function Wl(e, t) {
                0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function Hl(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Lu |= t.lanes, 0 == (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(a(153));
                if (null !== t.child) {
                    for (n = As(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = As(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function Vl(e, t) {
                if (!aa) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function $l(e) {
                var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
                if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling; else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function Yl(e, t, n) {
                var r = t.pendingProps;
                switch (na(t), t.tag) {
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
                        return $l(t), null;
                    case 1:
                    case 17:
                        return Ao(t.type) && Io(), $l(t), null;
                    case 3:
                        return r = t.stateNode, ai(), Mo(Po), Mo(Do), fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (da(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ia && (is(ia), ia = null))), $l(t), null;
                    case 5:
                        li(t);
                        var o = ri(ni.current);
                        if (n = t.type, null !== e && null != t.stateNode) Al(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(a(166));
                                return $l(t), null
                            }
                            if (e = ri(ei.current), da(t)) {
                                r = t.stateNode, n = t.type;
                                var i = t.memoizedProps;
                                switch (r[po] = t, r[ho] = i, e = 0 != (1 & t.mode), n) {
                                    case"dialog":
                                        Fr("cancel", r), Fr("close", r);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Fr("load", r);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (o = 0; o < Tr.length; o++) Fr(Tr[o], r);
                                        break;
                                    case"source":
                                        Fr("error", r);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Fr("error", r), Fr("load", r);
                                        break;
                                    case"details":
                                        Fr("toggle", r);
                                        break;
                                    case"input":
                                        J(r, i), Fr("invalid", r);
                                        break;
                                    case"select":
                                        r._wrapperState = {wasMultiple: !!i.multiple}, Fr("invalid", r);
                                        break;
                                    case"textarea":
                                        oe(r, i), Fr("invalid", r)
                                }
                                for (var u in ve(n, i), o = null, i) if (i.hasOwnProperty(u)) {
                                    var s = i[u];
                                    "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && qr(r.textContent, s, e), o = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && qr(r.textContent, s, e), o = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Fr("scroll", r)
                                }
                                switch (n) {
                                    case"input":
                                        $(r), X(r, i, !0);
                                        break;
                                    case"textarea":
                                        $(r), ie(r);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" == typeof i.onClick && (r.onclick = Xr)
                                }
                                r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                u = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, {is: r.is}) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[po] = t, e[ho] = r, jl(e, t), t.stateNode = e;
                                e:{
                                    switch (u = be(n, r), n) {
                                        case"dialog":
                                            Fr("cancel", e), Fr("close", e), o = r;
                                            break;
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            Fr("load", e), o = r;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (o = 0; o < Tr.length; o++) Fr(Tr[o], e);
                                            o = r;
                                            break;
                                        case"source":
                                            Fr("error", e), o = r;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            Fr("error", e), Fr("load", e), o = r;
                                            break;
                                        case"details":
                                            Fr("toggle", e), o = r;
                                            break;
                                        case"input":
                                            J(e, r), o = Z(e, r), Fr("invalid", e);
                                            break;
                                        case"option":
                                        default:
                                            o = r;
                                            break;
                                        case"select":
                                            e._wrapperState = {wasMultiple: !!r.multiple}, o = _({}, r, {value: void 0}), Fr("invalid", e);
                                            break;
                                        case"textarea":
                                            oe(e, r), o = re(e, r), Fr("invalid", e)
                                    }
                                    for (i in ve(n, o), s = o) if (s.hasOwnProperty(i)) {
                                        var c = s[i];
                                        "style" === i ? ge(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? "string" == typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" == typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Fr("scroll", e) : null != c && b(e, i, c, u))
                                    }
                                    switch (n) {
                                        case"input":
                                            $(e), X(e, r, !1);
                                            break;
                                        case"textarea":
                                            $(e), ie(e);
                                            break;
                                        case"option":
                                            null != r.value && e.setAttribute("value", "" + H(r.value));
                                            break;
                                        case"select":
                                            e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof o.onClick && (e.onclick = Xr)
                                    }
                                    switch (n) {
                                        case"button":
                                        case"input":
                                        case"select":
                                        case"textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case"img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return $l(t), null;
                    case 6:
                        if (e && null != t.stateNode) Il(0, t, e.memoizedProps, r); else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
                            if (n = ri(ni.current), ri(ei.current), da(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (i = r.nodeValue !== n) && null !== (e = ra)) switch (e.tag) {
                                    case 3:
                                        qr(r.nodeValue, n, 0 != (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && qr(r.nodeValue, n, 0 != (1 & e.mode))
                                }
                                i && (t.flags |= 4)
                            } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r
                        }
                        return $l(t), null;
                    case 13:
                        if (Mo(ui), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (aa && null !== oa && 0 != (1 & t.mode) && 0 == (128 & t.flags)) pa(), ha(), t.flags |= 98560, i = !1; else if (i = da(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!i) throw Error(a(318));
                                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                                    i[po] = t
                                } else ha(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                $l(t), i = !1
                            } else null !== ia && (is(ia), ia = null), i = !0;
                            if (!i) return 65536 & t.flags ? t : null
                        }
                        return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & ui.current) ? 0 === Iu && (Iu = 3) : ms())), null !== t.updateQueue && (t.flags |= 4), $l(t), null);
                    case 4:
                        return ai(), null === e && Br(t.stateNode.containerInfo), $l(t), null;
                    case 10:
                        return ka(t.type._context), $l(t), null;
                    case 19:
                        if (Mo(ui), null === (i = t.memoizedState)) return $l(t), null;
                        if (r = 0 != (128 & t.flags), null === (u = i.rendering)) if (r) Vl(i, !1); else {
                            if (0 !== Iu || null !== e && 0 != (128 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (u = si(e))) {
                                    for (t.flags |= 128, Vl(i, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (u = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return Oo(ui, 1 & ui.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== i.tail && Ke() > Bu && (t.flags |= 128, r = !0, Vl(i, !1), t.lanes = 4194304)
                        } else {
                            if (!r) if (null !== (e = si(u))) {
                                if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Vl(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !aa) return $l(t), null
                            } else 2 * Ke() - i.renderingStartTime > Bu && 1073741824 !== n && (t.flags |= 128, r = !0, Vl(i, !1), t.lanes = 4194304);
                            i.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = i.last) ? n.sibling = u : t.child = u, i.last = u)
                        }
                        return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = ui.current, Oo(ui, r ? 1 & n | 2 : 1 & n), t) : ($l(t), null);
                    case 22:
                    case 23:
                        return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & ju) && ($l(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : $l(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(a(156, t.tag))
            }

            function Gl(e, t) {
                switch (na(t), t.tag) {
                    case 1:
                        return Ao(t.type) && Io(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return ai(), Mo(Po), Mo(Do), fi(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return li(t), null;
                    case 13:
                        if (Mo(ui), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(a(340));
                            ha()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return Mo(ui), null;
                    case 4:
                        return ai(), null;
                    case 10:
                        return ka(t.type._context), null;
                    case 22:
                    case 23:
                        return fs(), null;
                    default:
                        return null
                }
            }

            jl = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Al = function (e, t, n, r) {
                var o = e.memoizedProps;
                if (o !== r) {
                    e = t.stateNode, ri(ei.current);
                    var a, i = null;
                    switch (n) {
                        case"input":
                            o = Z(e, o), r = Z(e, r), i = [];
                            break;
                        case"select":
                            o = _({}, o, {value: void 0}), r = _({}, r, {value: void 0}), i = [];
                            break;
                        case"textarea":
                            o = re(e, o), r = re(e, r), i = [];
                            break;
                        default:
                            "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Xr)
                    }
                    for (c in ve(n, r), n = null, o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c]) if ("style" === c) {
                        var u = o[c];
                        for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                    } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var s = r[c];
                        if (u = null != o ? o[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u)) if ("style" === c) if (u) {
                            for (a in u) !u.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in s) s.hasOwnProperty(a) && u[a] !== s[a] && (n || (n = {}), n[a] = s[a])
                        } else n || (i || (i = []), i.push(c, n)), n = s; else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (i = i || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Fr("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s))
                    }
                    n && (i = i || []).push("style", n);
                    var c = i;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }, Il = function (e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var Zl = !1, Jl = !1, Kl = "function" == typeof WeakSet ? WeakSet : Set, ql = null;

            function Xl(e, t) {
                var n = e.ref;
                if (null !== n) if ("function" == typeof n) try {
                    n(null)
                } catch (n) {
                    Es(e, t, n)
                } else n.current = null
            }

            function eu(e, t, n) {
                try {
                    n()
                } catch (n) {
                    Es(e, t, n)
                }
            }

            var tu = !1;

            function nu(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var o = r = r.next;
                    do {
                        if ((o.tag & e) === e) {
                            var a = o.destroy;
                            o.destroy = void 0, void 0 !== a && eu(t, n, a)
                        }
                        o = o.next
                    } while (o !== r)
                }
            }

            function ru(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }

            function ou(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
                }
            }

            function au(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, au(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[po], delete t[ho], delete t[go], delete t[yo], delete t[vo]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function iu(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function lu(e) {
                e:for (; ;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || iu(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function uu(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Xr)); else if (4 !== r && null !== (e = e.child)) for (uu(e, t, n), e = e.sibling; null !== e;) uu(e, t, n), e = e.sibling
            }

            function su(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
            }

            var cu = null, fu = !1;

            function du(e, t, n) {
                for (n = n.child; null !== n;) pu(e, t, n), n = n.sibling
            }

            function pu(e, t, n) {
                if (at && "function" == typeof at.onCommitFiberUnmount) try {
                    at.onCommitFiberUnmount(ot, n)
                } catch (e) {
                }
                switch (n.tag) {
                    case 5:
                        Jl || Xl(n, t);
                    case 6:
                        var r = cu, o = fu;
                        cu = null, du(e, t, n), fu = o, null !== (cu = r) && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cu.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== cu && (fu ? (e = cu, n = n.stateNode, 8 === e.nodeType ? uo(e.parentNode, n) : 1 === e.nodeType && uo(e, n), Bt(e)) : uo(cu, n.stateNode));
                        break;
                    case 4:
                        r = cu, o = fu, cu = n.stateNode.containerInfo, fu = !0, du(e, t, n), cu = r, fu = o;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Jl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                            o = r = r.next;
                            do {
                                var a = o, i = a.destroy;
                                a = a.tag, void 0 !== i && (0 != (2 & a) || 0 != (4 & a)) && eu(n, t, i), o = o.next
                            } while (o !== r)
                        }
                        du(e, t, n);
                        break;
                    case 1:
                        if (!Jl && (Xl(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (e) {
                            Es(n, t, e)
                        }
                        du(e, t, n);
                        break;
                    case 21:
                        du(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? (Jl = (r = Jl) || null !== n.memoizedState, du(e, t, n), Jl = r) : du(e, t, n);
                        break;
                    default:
                        du(e, t, n)
                }
            }

            function hu(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Kl), t.forEach((function (t) {
                        var r = Ns.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function mu(e, t) {
                var n = t.deletions;
                if (null !== n) for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    try {
                        var i = e, l = t, u = l;
                        e:for (; null !== u;) {
                            switch (u.tag) {
                                case 5:
                                    cu = u.stateNode, fu = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cu = u.stateNode.containerInfo, fu = !0;
                                    break e
                            }
                            u = u.return
                        }
                        if (null === cu) throw Error(a(160));
                        pu(i, l, o), cu = null, fu = !1;
                        var s = o.alternate;
                        null !== s && (s.return = null), o.return = null
                    } catch (e) {
                        Es(o, t, e)
                    }
                }
                if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) gu(t, e), t = t.sibling
            }

            function gu(e, t) {
                var n = e.alternate, r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (mu(t, e), yu(e), 4 & r) {
                            try {
                                nu(3, e, e.return), ru(3, e)
                            } catch (t) {
                                Es(e, e.return, t)
                            }
                            try {
                                nu(5, e, e.return)
                            } catch (t) {
                                Es(e, e.return, t)
                            }
                        }
                        break;
                    case 1:
                        mu(t, e), yu(e), 512 & r && null !== n && Xl(n, n.return);
                        break;
                    case 5:
                        if (mu(t, e), yu(e), 512 & r && null !== n && Xl(n, n.return), 32 & e.flags) {
                            var o = e.stateNode;
                            try {
                                de(o, "")
                            } catch (t) {
                                Es(e, e.return, t)
                            }
                        }
                        if (4 & r && null != (o = e.stateNode)) {
                            var i = e.memoizedProps, l = null !== n ? n.memoizedProps : i, u = e.type,
                                s = e.updateQueue;
                            if (e.updateQueue = null, null !== s) try {
                                "input" === u && "radio" === i.type && null != i.name && K(o, i), be(u, l);
                                var c = be(u, i);
                                for (l = 0; l < s.length; l += 2) {
                                    var f = s[l], d = s[l + 1];
                                    "style" === f ? ge(o, d) : "dangerouslySetInnerHTML" === f ? fe(o, d) : "children" === f ? de(o, d) : b(o, f, d, c)
                                }
                                switch (u) {
                                    case"input":
                                        q(o, i);
                                        break;
                                    case"textarea":
                                        ae(o, i);
                                        break;
                                    case"select":
                                        var p = o._wrapperState.wasMultiple;
                                        o._wrapperState.wasMultiple = !!i.multiple;
                                        var h = i.value;
                                        null != h ? ne(o, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                o[ho] = i
                            } catch (t) {
                                Es(e, e.return, t)
                            }
                        }
                        break;
                    case 6:
                        if (mu(t, e), yu(e), 4 & r) {
                            if (null === e.stateNode) throw Error(a(162));
                            o = e.stateNode, i = e.memoizedProps;
                            try {
                                o.nodeValue = i
                            } catch (t) {
                                Es(e, e.return, t)
                            }
                        }
                        break;
                    case 3:
                        if (mu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Bt(t.containerInfo)
                        } catch (t) {
                            Es(e, e.return, t)
                        }
                        break;
                    case 4:
                    default:
                        mu(t, e), yu(e);
                        break;
                    case 13:
                        mu(t, e), yu(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Qu = Ke())), 4 & r && hu(e);
                        break;
                    case 22:
                        if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Jl = (c = Jl) || f, mu(t, e), Jl = c) : mu(t, e), yu(e), 8192 & r) {
                            if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode)) for (ql = e, f = e.child; null !== f;) {
                                for (d = ql = f; null !== ql;) {
                                    switch (h = (p = ql).child, p.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            nu(4, p, p.return);
                                            break;
                                        case 1:
                                            Xl(p, p.return);
                                            var m = p.stateNode;
                                            if ("function" == typeof m.componentWillUnmount) {
                                                r = p, n = p.return;
                                                try {
                                                    t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                } catch (e) {
                                                    Es(r, n, e)
                                                }
                                            }
                                            break;
                                        case 5:
                                            Xl(p, p.return);
                                            break;
                                        case 22:
                                            if (null !== p.memoizedState) {
                                                Su(d);
                                                continue
                                            }
                                    }
                                    null !== h ? (h.return = p, ql = h) : Su(d)
                                }
                                f = f.sibling
                            }
                            e:for (f = null, d = e; ;) {
                                if (5 === d.tag) {
                                    if (null === f) {
                                        f = d;
                                        try {
                                            o = d.stateNode, c ? "function" == typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (u = d.stateNode, l = null != (s = d.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", l))
                                        } catch (t) {
                                            Es(e, e.return, t)
                                        }
                                    }
                                } else if (6 === d.tag) {
                                    if (null === f) try {
                                        d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                    } catch (t) {
                                        Es(e, e.return, t)
                                    }
                                } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                    d.child.return = d, d = d.child;
                                    continue
                                }
                                if (d === e) break e;
                                for (; null === d.sibling;) {
                                    if (null === d.return || d.return === e) break e;
                                    f === d && (f = null), d = d.return
                                }
                                f === d && (f = null), d.sibling.return = d.return, d = d.sibling
                            }
                        }
                        break;
                    case 19:
                        mu(t, e), yu(e), 4 & r && hu(e);
                    case 21:
                }
            }

            function yu(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e:{
                            for (var n = e.return; null !== n;) {
                                if (iu(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(a(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var o = r.stateNode;
                                32 & r.flags && (de(o, ""), r.flags &= -33), su(e, lu(e), o);
                                break;
                            case 3:
                            case 4:
                                var i = r.stateNode.containerInfo;
                                uu(e, lu(e), i);
                                break;
                            default:
                                throw Error(a(161))
                        }
                    } catch (t) {
                        Es(e, e.return, t)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function vu(e, t, n) {
                ql = e, bu(e, t, n)
            }

            function bu(e, t, n) {
                for (var r = 0 != (1 & e.mode); null !== ql;) {
                    var o = ql, a = o.child;
                    if (22 === o.tag && r) {
                        var i = null !== o.memoizedState || Zl;
                        if (!i) {
                            var l = o.alternate, u = null !== l && null !== l.memoizedState || Jl;
                            l = Zl;
                            var s = Jl;
                            if (Zl = i, (Jl = u) && !s) for (ql = o; null !== ql;) u = (i = ql).child, 22 === i.tag && null !== i.memoizedState ? xu(o) : null !== u ? (u.return = i, ql = u) : xu(o);
                            for (; null !== a;) ql = a, bu(a, t, n), a = a.sibling;
                            ql = o, Zl = l, Jl = s
                        }
                        wu(e)
                    } else 0 != (8772 & o.subtreeFlags) && null !== a ? (a.return = o, ql = a) : wu(e)
                }
            }

            function wu(e) {
                for (; null !== ql;) {
                    var t = ql;
                    if (0 != (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 != (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Jl || ru(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Jl) if (null === n) r.componentDidMount(); else {
                                        var o = t.elementType === t.type ? n.memoizedProps : ya(t.type, n.memoizedProps);
                                        r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var i = t.updateQueue;
                                    null !== i && Fa(t, i, r);
                                    break;
                                case 3:
                                    var l = t.updateQueue;
                                    if (null !== l) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        Fa(t, l, n)
                                    }
                                    break;
                                case 5:
                                    var u = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = u;
                                        var s = t.memoizedProps;
                                        switch (t.type) {
                                            case"button":
                                            case"input":
                                            case"select":
                                            case"textarea":
                                                s.autoFocus && n.focus();
                                                break;
                                            case"img":
                                                s.src && (n.src = s.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var f = c.memoizedState;
                                            if (null !== f) {
                                                var d = f.dehydrated;
                                                null !== d && Bt(d)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                            Jl || 512 & t.flags && ou(t)
                        } catch (e) {
                            Es(t, t.return, e)
                        }
                    }
                    if (t === e) {
                        ql = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, ql = n;
                        break
                    }
                    ql = t.return
                }
            }

            function Su(e) {
                for (; null !== ql;) {
                    var t = ql;
                    if (t === e) {
                        ql = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, ql = n;
                        break
                    }
                    ql = t.return
                }
            }

            function xu(e) {
                for (; null !== ql;) {
                    var t = ql;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    ru(4, t)
                                } catch (e) {
                                    Es(t, n, e)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" == typeof r.componentDidMount) {
                                    var o = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (e) {
                                        Es(t, o, e)
                                    }
                                }
                                var a = t.return;
                                try {
                                    ou(t)
                                } catch (e) {
                                    Es(t, a, e)
                                }
                                break;
                            case 5:
                                var i = t.return;
                                try {
                                    ou(t)
                                } catch (e) {
                                    Es(t, i, e)
                                }
                        }
                    } catch (e) {
                        Es(t, t.return, e)
                    }
                    if (t === e) {
                        ql = null;
                        break
                    }
                    var l = t.sibling;
                    if (null !== l) {
                        l.return = t.return, ql = l;
                        break
                    }
                    ql = t.return
                }
            }

            var ku, Eu = Math.ceil, Cu = w.ReactCurrentDispatcher, Mu = w.ReactCurrentOwner,
                Ou = w.ReactCurrentBatchConfig, Nu = 0, Du = null, Pu = null, zu = 0, ju = 0, Au = Co(0), Iu = 0,
                Tu = null, Lu = 0, _u = 0, Ru = 0, Fu = null, Uu = null, Qu = 0, Bu = 1 / 0, Wu = null, Hu = !1,
                Vu = null, $u = null, Yu = !1, Gu = null, Zu = 0, Ju = 0, Ku = null, qu = -1, Xu = 0;

            function es() {
                return 0 != (6 & Nu) ? Ke() : -1 !== qu ? qu : qu = Ke()
            }

            function ts(e) {
                return 0 == (1 & e.mode) ? 1 : 0 != (2 & Nu) && 0 !== zu ? zu & -zu : null !== ga.transition ? (0 === Xu && (Xu = mt()), Xu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Jt(e.type)
            }

            function ns(e, t, n, r) {
                if (50 < Ju) throw Ju = 0, Ku = null, Error(a(185));
                yt(e, n, r), 0 != (2 & Nu) && e === Du || (e === Du && (0 == (2 & Nu) && (_u |= n), 4 === Iu && ls(e, zu)), rs(e, r), 1 === n && 0 === Nu && 0 == (1 & t.mode) && (Bu = Ke() + 500, Uo && Wo()))
            }

            function rs(e, t) {
                var n = e.callbackNode;
                !function (e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                        var i = 31 - it(a), l = 1 << i, u = o[i];
                        -1 === u ? 0 != (l & n) && 0 == (l & r) || (o[i] = pt(l, t)) : u <= t && (e.expiredLanes |= l), a &= ~l
                    }
                }(e, t);
                var r = dt(e, e === Du ? zu : 0);
                if (0 === r) null !== n && Ge(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && Ge(n), 1 === t) 0 === e.tag ? function (e) {
                        Uo = !0, Bo(e)
                    }(us.bind(null, e)) : Bo(us.bind(null, e)), io((function () {
                        0 == (6 & Nu) && Wo()
                    })), n = null; else {
                        switch (wt(r)) {
                            case 1:
                                n = Xe;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Ds(n, os.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function os(e, t) {
                if (qu = -1, Xu = 0, 0 != (6 & Nu)) throw Error(a(327));
                var n = e.callbackNode;
                if (xs() && e.callbackNode !== n) return null;
                var r = dt(e, e === Du ? zu : 0);
                if (0 === r) return null;
                if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gs(e, r); else {
                    t = r;
                    var o = Nu;
                    Nu |= 2;
                    var i = hs();
                    for (Du === e && zu === t || (Wu = null, Bu = Ke() + 500, ds(e, t)); ;) try {
                        vs();
                        break
                    } catch (t) {
                        ps(e, t)
                    }
                    xa(), Cu.current = i, Nu = o, null !== Pu ? t = 0 : (Du = null, zu = 0, t = Iu)
                }
                if (0 !== t) {
                    if (2 === t && 0 !== (o = ht(e)) && (r = o, t = as(e, o)), 1 === t) throw n = Tu, ds(e, 0), ls(e, r), rs(e, Ke()), n;
                    if (6 === t) ls(e, r); else {
                        if (o = e.current.alternate, 0 == (30 & r) && !function (e) {
                            for (var t = e; ;) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                                        var o = n[r], a = o.getSnapshot;
                                        o = o.value;
                                        try {
                                            if (!lr(a(), o)) return !1
                                        } catch (e) {
                                            return !1
                                        }
                                    }
                                }
                                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                                    if (t === e) break;
                                    for (; null === t.sibling;) {
                                        if (null === t.return || t.return === e) return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return, t = t.sibling
                                }
                            }
                            return !0
                        }(o) && (2 === (t = gs(e, r)) && 0 !== (i = ht(e)) && (r = i, t = as(e, i)), 1 === t)) throw n = Tu, ds(e, 0), ls(e, r), rs(e, Ke()), n;
                        switch (e.finishedWork = o, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(a(345));
                            case 2:
                            case 5:
                                Ss(e, Uu, Wu);
                                break;
                            case 3:
                                if (ls(e, r), (130023424 & r) === r && 10 < (t = Qu + 500 - Ke())) {
                                    if (0 !== dt(e, 0)) break;
                                    if (((o = e.suspendedLanes) & r) !== r) {
                                        es(), e.pingedLanes |= e.suspendedLanes & o;
                                        break
                                    }
                                    e.timeoutHandle = ro(Ss.bind(null, e, Uu, Wu), t);
                                    break
                                }
                                Ss(e, Uu, Wu);
                                break;
                            case 4:
                                if (ls(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, o = -1; 0 < r;) {
                                    var l = 31 - it(r);
                                    i = 1 << l, (l = t[l]) > o && (o = l), r &= ~i
                                }
                                if (r = o, 10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r)) {
                                    e.timeoutHandle = ro(Ss.bind(null, e, Uu, Wu), r);
                                    break
                                }
                                Ss(e, Uu, Wu);
                                break;
                            default:
                                throw Error(a(329))
                        }
                    }
                }
                return rs(e, Ke()), e.callbackNode === n ? os.bind(null, e) : null
            }

            function as(e, t) {
                var n = Fu;
                return e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Uu, Uu = n, null !== t && is(t)), e
            }

            function is(e) {
                null === Uu ? Uu = e : Uu.push.apply(Uu, e)
            }

            function ls(e, t) {
                for (t &= ~Ru, t &= ~_u, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - it(t), r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function us(e) {
                if (0 != (6 & Nu)) throw Error(a(327));
                xs();
                var t = dt(e, 0);
                if (0 == (1 & t)) return rs(e, Ke()), null;
                var n = gs(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = ht(e);
                    0 !== r && (t = r, n = as(e, r))
                }
                if (1 === n) throw n = Tu, ds(e, 0), ls(e, t), rs(e, Ke()), n;
                if (6 === n) throw Error(a(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Uu, Wu), rs(e, Ke()), null
            }

            function ss(e, t) {
                var n = Nu;
                Nu |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Nu = n) && (Bu = Ke() + 500, Uo && Wo())
                }
            }

            function cs(e) {
                null !== Gu && 0 === Gu.tag && 0 == (6 & Nu) && xs();
                var t = Nu;
                Nu |= 1;
                var n = Ou.transition, r = bt;
                try {
                    if (Ou.transition = null, bt = 1, e) return e()
                } finally {
                    bt = r, Ou.transition = n, 0 == (6 & (Nu = t)) && Wo()
                }
            }

            function fs() {
                ju = Au.current, Mo(Au)
            }

            function ds(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Pu) for (n = Pu.return; null !== n;) {
                    var r = n;
                    switch (na(r), r.tag) {
                        case 1:
                            null != (r = r.type.childContextTypes) && Io();
                            break;
                        case 3:
                            ai(), Mo(Po), Mo(Do), fi();
                            break;
                        case 5:
                            li(r);
                            break;
                        case 4:
                            ai();
                            break;
                        case 13:
                        case 19:
                            Mo(ui);
                            break;
                        case 10:
                            ka(r.type._context);
                            break;
                        case 22:
                        case 23:
                            fs()
                    }
                    n = n.return
                }
                if (Du = e, Pu = e = As(e.current, null), zu = ju = t, Iu = 0, Tu = null, Ru = _u = Lu = 0, Uu = Fu = null, null !== Oa) {
                    for (t = 0; t < Oa.length; t++) if (null !== (r = (n = Oa[t]).interleaved)) {
                        n.interleaved = null;
                        var o = r.next, a = n.pending;
                        if (null !== a) {
                            var i = a.next;
                            a.next = o, r.next = i
                        }
                        n.pending = r
                    }
                    Oa = null
                }
                return e
            }

            function ps(e, t) {
                for (; ;) {
                    var n = Pu;
                    try {
                        if (xa(), di.current = il, vi) {
                            for (var r = mi.memoizedState; null !== r;) {
                                var o = r.queue;
                                null !== o && (o.pending = null), r = r.next
                            }
                            vi = !1
                        }
                        if (hi = 0, yi = gi = mi = null, bi = !1, wi = 0, Mu.current = null, null === n || null === n.return) {
                            Iu = 1, Tu = t, Pu = null;
                            break
                        }
                        e:{
                            var i = e, l = n.return, u = n, s = t;
                            if (t = zu, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                                var c = s, f = u, d = f.tag;
                                if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                                    var p = f.alternate;
                                    p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                }
                                var h = yl(l);
                                if (null !== h) {
                                    h.flags &= -257, vl(h, l, u, 0, t), 1 & h.mode && gl(i, c, t), s = c;
                                    var m = (t = h).updateQueue;
                                    if (null === m) {
                                        var g = new Set;
                                        g.add(s), t.updateQueue = g
                                    } else m.add(s);
                                    break e
                                }
                                if (0 == (1 & t)) {
                                    gl(i, c, t), ms();
                                    break e
                                }
                                s = Error(a(426))
                            } else if (aa && 1 & u.mode) {
                                var y = yl(l);
                                if (null !== y) {
                                    0 == (65536 & y.flags) && (y.flags |= 256), vl(y, l, u, 0, t), ma(cl(s, u));
                                    break e
                                }
                            }
                            i = s = cl(s, u), 4 !== Iu && (Iu = 2), null === Fu ? Fu = [i] : Fu.push(i), i = l;
                            do {
                                switch (i.tag) {
                                    case 3:
                                        i.flags |= 65536, t &= -t, i.lanes |= t, _a(i, hl(0, s, t));
                                        break e;
                                    case 1:
                                        u = s;
                                        var v = i.type, b = i.stateNode;
                                        if (0 == (128 & i.flags) && ("function" == typeof v.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === $u || !$u.has(b)))) {
                                            i.flags |= 65536, t &= -t, i.lanes |= t, _a(i, ml(i, u, t));
                                            break e
                                        }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        ws(n)
                    } catch (e) {
                        t = e, Pu === n && null !== n && (Pu = n = n.return);
                        continue
                    }
                    break
                }
            }

            function hs() {
                var e = Cu.current;
                return Cu.current = il, null === e ? il : e
            }

            function ms() {
                0 !== Iu && 3 !== Iu && 2 !== Iu || (Iu = 4), null === Du || 0 == (268435455 & Lu) && 0 == (268435455 & _u) || ls(Du, zu)
            }

            function gs(e, t) {
                var n = Nu;
                Nu |= 2;
                var r = hs();
                for (Du === e && zu === t || (Wu = null, ds(e, t)); ;) try {
                    ys();
                    break
                } catch (t) {
                    ps(e, t)
                }
                if (xa(), Nu = n, Cu.current = r, null !== Pu) throw Error(a(261));
                return Du = null, zu = 0, Iu
            }

            function ys() {
                for (; null !== Pu;) bs(Pu)
            }

            function vs() {
                for (; null !== Pu && !Ze();) bs(Pu)
            }

            function bs(e) {
                var t = ku(e.alternate, e, ju);
                e.memoizedProps = e.pendingProps, null === t ? ws(e) : Pu = t, Mu.current = null
            }

            function ws(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 == (32768 & t.flags)) {
                        if (null !== (n = Yl(n, t, ju))) return void (Pu = n)
                    } else {
                        if (null !== (n = Gl(n, t))) return n.flags &= 32767, void (Pu = n);
                        if (null === e) return Iu = 6, void (Pu = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void (Pu = t);
                    Pu = t = e
                } while (null !== t);
                0 === Iu && (Iu = 5)
            }

            function Ss(e, t, n) {
                var r = bt, o = Ou.transition;
                try {
                    Ou.transition = null, bt = 1, function (e, t, n, r) {
                        do {
                            xs()
                        } while (null !== Gu);
                        if (0 != (6 & Nu)) throw Error(a(327));
                        n = e.finishedWork;
                        var o = e.finishedLanes;
                        if (null === n) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                        e.callbackNode = null, e.callbackPriority = 0;
                        var i = n.lanes | n.childLanes;
                        if (function (e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n;) {
                                var o = 31 - it(n), a = 1 << o;
                                t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
                            }
                        }(e, i), e === Du && (Pu = Du = null, zu = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Yu || (Yu = !0, Ds(tt, (function () {
                            return xs(), null
                        }))), i = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || i) {
                            i = Ou.transition, Ou.transition = null;
                            var l = bt;
                            bt = 1;
                            var u = Nu;
                            Nu |= 4, Mu.current = null, function (e, t) {
                                if (eo = Ht, pr(e = dr())) {
                                    if ("selectionStart" in e) var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    }; else e:{
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var o = r.anchorOffset, i = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, i.nodeType
                                            } catch (e) {
                                                n = null;
                                                break e
                                            }
                                            var l = 0, u = -1, s = -1, c = 0, f = 0, d = e, p = null;
                                            t:for (; ;) {
                                                for (var h; d !== n || 0 !== o && 3 !== d.nodeType || (u = l + o), d !== i || 0 !== r && 3 !== d.nodeType || (s = l + r), 3 === d.nodeType && (l += d.nodeValue.length), null !== (h = d.firstChild);) p = d, d = h;
                                                for (; ;) {
                                                    if (d === e) break t;
                                                    if (p === n && ++c === o && (u = l), p === i && ++f === r && (s = l), null !== (h = d.nextSibling)) break;
                                                    p = (d = p).parentNode
                                                }
                                                d = h
                                            }
                                            n = -1 === u || -1 === s ? null : {start: u, end: s}
                                        } else n = null
                                    }
                                    n = n || {start: 0, end: 0}
                                } else n = null;
                                for (to = {
                                    focusedElem: e,
                                    selectionRange: n
                                }, Ht = !1, ql = t; null !== ql;) if (e = (t = ql).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, ql = e; else for (; null !== ql;) {
                                    t = ql;
                                    try {
                                        var m = t.alternate;
                                        if (0 != (1024 & t.flags)) switch (t.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (null !== m) {
                                                    var g = m.memoizedProps, y = m.memoizedState, v = t.stateNode,
                                                        b = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ya(t.type, g), y);
                                                    v.__reactInternalSnapshotBeforeUpdate = b
                                                }
                                                break;
                                            case 3:
                                                var w = t.stateNode.containerInfo;
                                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                break;
                                            default:
                                                throw Error(a(163))
                                        }
                                    } catch (e) {
                                        Es(t, t.return, e)
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, ql = e;
                                        break
                                    }
                                    ql = t.return
                                }
                                m = tu, tu = !1
                            }(e, n), gu(n, e), hr(to), Ht = !!eo, to = eo = null, e.current = n, vu(n, e, o), Je(), Nu = u, bt = l, Ou.transition = i
                        } else e.current = n;
                        if (Yu && (Yu = !1, Gu = e, Zu = o), 0 === (i = e.pendingLanes) && ($u = null), function (e) {
                            if (at && "function" == typeof at.onCommitFiberRoot) try {
                                at.onCommitFiberRoot(ot, e, void 0, 128 == (128 & e.current.flags))
                            } catch (e) {
                            }
                        }(n.stateNode), rs(e, Ke()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
                            componentStack: o.stack,
                            digest: o.digest
                        });
                        if (Hu) throw Hu = !1, e = Vu, Vu = null, e;
                        0 != (1 & Zu) && 0 !== e.tag && xs(), 0 != (1 & (i = e.pendingLanes)) ? e === Ku ? Ju++ : (Ju = 0, Ku = e) : Ju = 0, Wo()
                    }(e, t, n, r)
                } finally {
                    Ou.transition = o, bt = r
                }
                return null
            }

            function xs() {
                if (null !== Gu) {
                    var e = wt(Zu), t = Ou.transition, n = bt;
                    try {
                        if (Ou.transition = null, bt = 16 > e ? 16 : e, null === Gu) var r = !1; else {
                            if (e = Gu, Gu = null, Zu = 0, 0 != (6 & Nu)) throw Error(a(331));
                            var o = Nu;
                            for (Nu |= 4, ql = e.current; null !== ql;) {
                                var i = ql, l = i.child;
                                if (0 != (16 & ql.flags)) {
                                    var u = i.deletions;
                                    if (null !== u) {
                                        for (var s = 0; s < u.length; s++) {
                                            var c = u[s];
                                            for (ql = c; null !== ql;) {
                                                var f = ql;
                                                switch (f.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        nu(8, f, i)
                                                }
                                                var d = f.child;
                                                if (null !== d) d.return = f, ql = d; else for (; null !== ql;) {
                                                    var p = (f = ql).sibling, h = f.return;
                                                    if (au(f), f === c) {
                                                        ql = null;
                                                        break
                                                    }
                                                    if (null !== p) {
                                                        p.return = h, ql = p;
                                                        break
                                                    }
                                                    ql = h
                                                }
                                            }
                                        }
                                        var m = i.alternate;
                                        if (null !== m) {
                                            var g = m.child;
                                            if (null !== g) {
                                                m.child = null;
                                                do {
                                                    var y = g.sibling;
                                                    g.sibling = null, g = y
                                                } while (null !== g)
                                            }
                                        }
                                        ql = i
                                    }
                                }
                                if (0 != (2064 & i.subtreeFlags) && null !== l) l.return = i, ql = l; else e:for (; null !== ql;) {
                                    if (0 != (2048 & (i = ql).flags)) switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            nu(9, i, i.return)
                                    }
                                    var v = i.sibling;
                                    if (null !== v) {
                                        v.return = i.return, ql = v;
                                        break e
                                    }
                                    ql = i.return
                                }
                            }
                            var b = e.current;
                            for (ql = b; null !== ql;) {
                                var w = (l = ql).child;
                                if (0 != (2064 & l.subtreeFlags) && null !== w) w.return = l, ql = w; else e:for (l = b; null !== ql;) {
                                    if (0 != (2048 & (u = ql).flags)) try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ru(9, u)
                                        }
                                    } catch (e) {
                                        Es(u, u.return, e)
                                    }
                                    if (u === l) {
                                        ql = null;
                                        break e
                                    }
                                    var S = u.sibling;
                                    if (null !== S) {
                                        S.return = u.return, ql = S;
                                        break e
                                    }
                                    ql = u.return
                                }
                            }
                            if (Nu = o, Wo(), at && "function" == typeof at.onPostCommitFiberRoot) try {
                                at.onPostCommitFiberRoot(ot, e)
                            } catch (e) {
                            }
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n, Ou.transition = t
                    }
                }
                return !1
            }

            function ks(e, t, n) {
                e = Ta(e, t = hl(0, t = cl(n, t), 1), 1), t = es(), null !== e && (yt(e, 1, t), rs(e, t))
            }

            function Es(e, t, n) {
                if (3 === e.tag) ks(e, e, n); else for (; null !== t;) {
                    if (3 === t.tag) {
                        ks(t, e, n);
                        break
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === $u || !$u.has(r))) {
                            t = Ta(t, e = ml(t, e = cl(n, e), 1), 1), e = es(), null !== t && (yt(t, 1, e), rs(t, e));
                            break
                        }
                    }
                    t = t.return
                }
            }

            function Cs(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = es(), e.pingedLanes |= e.suspendedLanes & n, Du === e && (zu & n) === n && (4 === Iu || 3 === Iu && (130023424 & zu) === zu && 500 > Ke() - Qu ? ds(e, 0) : Ru |= n), rs(e, t)
            }

            function Ms(e, t) {
                0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = es();
                null !== (e = Pa(e, t)) && (yt(e, t, n), rs(e, n))
            }

            function Os(e) {
                var t = e.memoizedState, n = 0;
                null !== t && (n = t.retryLane), Ms(e, n)
            }

            function Ns(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode, o = e.memoizedState;
                        null !== o && (n = o.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(a(314))
                }
                null !== r && r.delete(t), Ms(e, n)
            }

            function Ds(e, t) {
                return Ye(e, t)
            }

            function Ps(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function zs(e, t, n, r) {
                return new Ps(e, t, n, r)
            }

            function js(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function As(e, t) {
                var n = e.alternate;
                return null === n ? ((n = zs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Is(e, t, n, r, o, i) {
                var l = 2;
                if (r = e, "function" == typeof e) js(e) && (l = 1); else if ("string" == typeof e) l = 5; else e:switch (e) {
                    case k:
                        return Ts(n.children, o, i, t);
                    case E:
                        l = 8, o |= 8;
                        break;
                    case C:
                        return (e = zs(12, n, t, 2 | o)).elementType = C, e.lanes = i, e;
                    case D:
                        return (e = zs(13, n, t, o)).elementType = D, e.lanes = i, e;
                    case P:
                        return (e = zs(19, n, t, o)).elementType = P, e.lanes = i, e;
                    case A:
                        return Ls(n, o, i, t);
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case M:
                                l = 10;
                                break e;
                            case O:
                                l = 9;
                                break e;
                            case N:
                                l = 11;
                                break e;
                            case z:
                                l = 14;
                                break e;
                            case j:
                                l = 16, r = null;
                                break e
                        }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                }
                return (t = zs(l, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
            }

            function Ts(e, t, n, r) {
                return (e = zs(7, e, r, t)).lanes = n, e
            }

            function Ls(e, t, n, r) {
                return (e = zs(22, e, r, t)).elementType = A, e.lanes = n, e.stateNode = {isHidden: !1}, e
            }

            function _s(e, t, n) {
                return (e = zs(6, e, null, t)).lanes = n, e
            }

            function Rs(e, t, n) {
                return (t = zs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Fs(e, t, n, r, o) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
            }

            function Us(e, t, n, r, o, a, i, l, u) {
                return e = new Fs(e, t, n, l, u), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = zs(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, ja(a), e
            }

            function Qs(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {$$typeof: x, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n}
            }

            function Bs(e) {
                if (!e) return No;
                e:{
                    if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Ao(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(a(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Ao(n)) return Lo(e, n, t)
                }
                return t
            }

            function Ws(e, t, n, r, o, a, i, l, u) {
                return (e = Us(n, r, !0, e, 0, a, 0, l, u)).context = Bs(null), n = e.current, (a = Ia(r = es(), o = ts(n))).callback = null != t ? t : null, Ta(n, a, o), e.current.lanes = o, yt(e, o, r), rs(e, r), e
            }

            function Hs(e, t, n, r) {
                var o = t.current, a = es(), i = ts(o);
                return n = Bs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ia(a, i)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ta(o, t, i)) && (ns(e, o, i, a), La(e, o, i)), i
            }

            function Vs(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function $s(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Ys(e, t) {
                $s(e, t), (e = e.alternate) && $s(e, t)
            }

            ku = function (e, t, n) {
                if (null !== e) if (e.memoizedProps !== t.pendingProps || Po.current) wl = !0; else {
                    if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return wl = !1, function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Pl(t), ha();
                                break;
                            case 5:
                                ii(t);
                                break;
                            case 1:
                                Ao(t.type) && _o(t);
                                break;
                            case 4:
                                oi(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context, o = t.memoizedProps.value;
                                Oo(va, r._currentValue), r._currentValue = o;
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Oo(ui, 1 & ui.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? _l(e, t, n) : (Oo(ui, 1 & ui.current), null !== (e = Hl(e, t, n)) ? e.sibling : null);
                                Oo(ui, 1 & ui.current);
                                break;
                            case 19:
                                if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                    if (r) return Bl(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Oo(ui, ui.current), r) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, Cl(e, t, n)
                        }
                        return Hl(e, t, n)
                    }(e, t, n);
                    wl = 0 != (131072 & e.flags)
                } else wl = !1, aa && 0 != (1048576 & t.flags) && ea(t, Yo, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        Wl(e, t), e = t.pendingProps;
                        var o = jo(t, Do.current);
                        Ca(t, n), o = Ei(null, t, r, e, o, n);
                        var i = Ci();
                        return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ao(r) ? (i = !0, _o(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, ja(t), o.updater = Ba, t.stateNode = o, o._reactInternals = t, $a(t, r, e, n), t = Dl(null, t, r, !0, i, n)) : (t.tag = 0, aa && i && ta(t), Sl(null, t, o, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e:{
                            switch (Wl(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) {
                                if ("function" == typeof e) return js(e) ? 1 : 0;
                                if (null != e) {
                                    if ((e = e.$$typeof) === N) return 11;
                                    if (e === z) return 14
                                }
                                return 2
                            }(r), e = ya(r, e), o) {
                                case 0:
                                    t = Ol(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = Nl(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = xl(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = kl(null, t, r, ya(r.type, e), n);
                                    break e
                            }
                            throw Error(a(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, o = t.pendingProps, Ol(e, t, r, o = t.elementType === r ? o : ya(r, o), n);
                    case 1:
                        return r = t.type, o = t.pendingProps, Nl(e, t, r, o = t.elementType === r ? o : ya(r, o), n);
                    case 3:
                        e:{
                            if (Pl(t), null === e) throw Error(a(387));
                            r = t.pendingProps, o = (i = t.memoizedState).element, Aa(e, t), Ra(t, r, null, n);
                            var l = t.memoizedState;
                            if (r = l.element, i.isDehydrated) {
                                if (i = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: l.cache,
                                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                    transitions: l.transitions
                                }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                    t = zl(e, t, r, n, o = cl(Error(a(423)), t));
                                    break e
                                }
                                if (r !== o) {
                                    t = zl(e, t, r, n, o = cl(Error(a(424)), t));
                                    break e
                                }
                                for (oa = so(t.stateNode.containerInfo.firstChild), ra = t, aa = !0, ia = null, n = qa(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (ha(), r === o) {
                                    t = Hl(e, t, n);
                                    break e
                                }
                                Sl(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return ii(t), null === e && ca(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = o.children, no(r, o) ? l = null : null !== i && no(r, i) && (t.flags |= 32), Ml(e, t), Sl(e, t, l, n), t.child;
                    case 6:
                        return null === e && ca(t), null;
                    case 13:
                        return _l(e, t, n);
                    case 4:
                        return oi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ka(t, null, r, n) : Sl(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, o = t.pendingProps, xl(e, t, r, o = t.elementType === r ? o : ya(r, o), n);
                    case 7:
                        return Sl(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Sl(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e:{
                            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Oo(va, r._currentValue), r._currentValue = l, null !== i) if (lr(i.value, l)) {
                                if (i.children === o.children && !Po.current) {
                                    t = Hl(e, t, n);
                                    break e
                                }
                            } else for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                var u = i.dependencies;
                                if (null !== u) {
                                    l = i.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === i.tag) {
                                                (s = Ia(-1, n & -n)).tag = 2;
                                                var c = i.updateQueue;
                                                if (null !== c) {
                                                    var f = (c = c.shared).pending;
                                                    null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
                                                }
                                            }
                                            i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), Ea(i.return, n, t), u.lanes |= n;
                                            break
                                        }
                                        s = s.next
                                    }
                                } else if (10 === i.tag) l = i.type === t.type ? null : i.child; else if (18 === i.tag) {
                                    if (null === (l = i.return)) throw Error(a(341));
                                    l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), Ea(l, n, t), l = i.sibling
                                } else l = i.child;
                                if (null !== l) l.return = i; else for (l = i; null !== l;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (null !== (i = l.sibling)) {
                                        i.return = l.return, l = i;
                                        break
                                    }
                                    l = l.return
                                }
                                i = l
                            }
                            Sl(e, t, o.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return o = t.type, r = t.pendingProps.children, Ca(t, n), r = r(o = Ma(o)), t.flags |= 1, Sl(e, t, r, n), t.child;
                    case 14:
                        return o = ya(r = t.type, t.pendingProps), kl(e, t, r, o = ya(r.type, o), n);
                    case 15:
                        return El(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ya(r, o), Wl(e, t), t.tag = 1, Ao(r) ? (e = !0, _o(t)) : e = !1, Ca(t, n), Ha(t, r, o), $a(t, r, o, n), Dl(null, t, r, !0, e, n);
                    case 19:
                        return Bl(e, t, n);
                    case 22:
                        return Cl(e, t, n)
                }
                throw Error(a(156, t.tag))
            };
            var Gs = "function" == typeof reportError ? reportError : function (e) {
                console.error(e)
            };

            function Zs(e) {
                this._internalRoot = e
            }

            function Js(e) {
                this._internalRoot = e
            }

            function Ks(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function qs(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Xs() {
            }

            function ec(e, t, n, r, o) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a;
                    if ("function" == typeof o) {
                        var l = o;
                        o = function () {
                            var e = Vs(i);
                            l.call(e)
                        }
                    }
                    Hs(t, i, e, o)
                } else i = function (e, t, n, r, o) {
                    if (o) {
                        if ("function" == typeof r) {
                            var a = r;
                            r = function () {
                                var e = Vs(i);
                                a.call(e)
                            }
                        }
                        var i = Ws(t, r, e, 0, null, !1, 0, "", Xs);
                        return e._reactRootContainer = i, e[mo] = i.current, Br(8 === e.nodeType ? e.parentNode : e), cs(), i
                    }
                    for (; o = e.lastChild;) e.removeChild(o);
                    if ("function" == typeof r) {
                        var l = r;
                        r = function () {
                            var e = Vs(u);
                            l.call(e)
                        }
                    }
                    var u = Us(e, 0, !1, null, 0, !1, 0, "", Xs);
                    return e._reactRootContainer = u, e[mo] = u.current, Br(8 === e.nodeType ? e.parentNode : e), cs((function () {
                        Hs(t, u, n, r)
                    })), u
                }(n, t, e, o, r);
                return Vs(i)
            }

            Js.prototype.render = Zs.prototype.render = function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(a(409));
                Hs(e, t, null, null)
            }, Js.prototype.unmount = Zs.prototype.unmount = function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    cs((function () {
                        Hs(null, e, null, null)
                    })), t[mo] = null
                }
            }, Js.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = Et();
                    e = {blockedOn: null, target: e, priority: t};
                    for (var n = 0; n < At.length && 0 !== t && t < At[n].priority; n++) ;
                    At.splice(n, 0, e), 0 === n && _t(e)
                }
            }, St = function (e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = ft(t.pendingLanes);
                            0 !== n && (vt(t, 1 | n), rs(t, Ke()), 0 == (6 & Nu) && (Bu = Ke() + 500, Wo()))
                        }
                        break;
                    case 13:
                        cs((function () {
                            var t = Pa(e, 1);
                            if (null !== t) {
                                var n = es();
                                ns(t, e, 1, n)
                            }
                        })), Ys(e, 1)
                }
            }, xt = function (e) {
                if (13 === e.tag) {
                    var t = Pa(e, 134217728);
                    null !== t && ns(t, e, 134217728, es()), Ys(e, 134217728)
                }
            }, kt = function (e) {
                if (13 === e.tag) {
                    var t = ts(e), n = Pa(e, t);
                    null !== n && ns(n, e, t, es()), Ys(e, t)
                }
            }, Et = function () {
                return bt
            }, Ct = function (e, t) {
                var n = bt;
                try {
                    return bt = e, t()
                } finally {
                    bt = n
                }
            }, xe = function (e, t, n) {
                switch (t) {
                    case"input":
                        if (q(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var o = xo(r);
                                    if (!o) throw Error(a(90));
                                    Y(r), q(r, o)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        ae(e, n);
                        break;
                    case"select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, Ne = ss, De = cs;
            var tc = {usingClientEntryPoint: !1, Events: [wo, So, xo, Me, Oe, ss]},
                nc = {findFiberByHostInstance: bo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
                rc = {
                    bundleType: nc.bundleType,
                    version: nc.version,
                    rendererPackageName: nc.rendererPackageName,
                    rendererConfig: nc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: w.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = Ve(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: nc.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!oc.isDisabled && oc.supportsFiber) try {
                    ot = oc.inject(rc), at = oc
                } catch (ce) {
                }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Ks(t)) throw Error(a(200));
                return Qs(e, t, null, n)
            }, t.createRoot = function (e, t) {
                if (!Ks(e)) throw Error(a(299));
                var n = !1, r = "", o = Gs;
                return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Us(e, 1, !1, null, 0, n, 0, r, o), e[mo] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new Zs(t)
            }, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(a(188));
                    throw e = Object.keys(e).join(","), Error(a(268, e))
                }
                return null === (e = Ve(t)) ? null : e.stateNode
            }, t.flushSync = function (e) {
                return cs(e)
            }, t.hydrate = function (e, t, n) {
                if (!qs(t)) throw Error(a(200));
                return ec(null, e, t, !0, n)
            }, t.hydrateRoot = function (e, t, n) {
                if (!Ks(e)) throw Error(a(405));
                var r = null != n && n.hydratedSources || null, o = !1, i = "", l = Gs;
                if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Ws(t, null, e, 1, null != n ? n : null, o, 0, i, l), e[mo] = t.current, Br(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                return new Js(t)
            }, t.render = function (e, t, n) {
                if (!qs(t)) throw Error(a(200));
                return ec(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function (e) {
                if (!qs(e)) throw Error(a(40));
                return !!e._reactRootContainer && (cs((function () {
                    ec(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[mo] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = ss, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!qs(n)) throw Error(a(200));
                if (null == e || void 0 === e._reactInternals) throw Error(a(38));
                return ec(e, t, n, !1, r)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        }, 745: (e, t, n) => {
            "use strict";
            var r = n(935);
            t.s = r.createRoot, r.hydrateRoot
        }, 935: (e, t, n) => {
            "use strict";
            !function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), e.exports = n(448)
        }, 921: (e, t) => {
            "use strict";
            var n, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"),
                s = Symbol.for("react.context"), c = Symbol.for("react.server_context"),
                f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"),
                p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"),
                g = Symbol.for("react.offscreen");
            n = Symbol.for("react.module.reference"), t.isValidElementType = function (e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === l || e === i || e === d || e === p || e === g || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === u || e.$$typeof === s || e.$$typeof === f || e.$$typeof === n || void 0 !== e.getModuleId)
            }, t.typeOf = function (e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case a:
                                case l:
                                case i:
                                case d:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case s:
                                        case f:
                                        case m:
                                        case h:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }
        }, 864: (e, t, n) => {
            "use strict";
            e.exports = n(921)
        }, 408: (e, t) => {
            "use strict";
            var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"),
                u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"),
                f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.iterator, h = {
                    isMounted: function () {
                        return !1
                    }, enqueueForceUpdate: function () {
                    }, enqueueReplaceState: function () {
                    }, enqueueSetState: function () {
                    }
                }, m = Object.assign, g = {};

            function y(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || h
            }

            function v() {
            }

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || h
            }

            y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, y.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, v.prototype = y.prototype;
            var w = b.prototype = new v;
            w.constructor = b, m(w, y.prototype), w.isPureReactComponent = !0;
            var S = Array.isArray, x = Object.prototype.hasOwnProperty, k = {current: null},
                E = {key: !0, ref: !0, __self: !0, __source: !0};

            function C(e, t, r) {
                var o, a = {}, i = null, l = null;
                if (null != t) for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) x.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
                var u = arguments.length - 2;
                if (1 === u) a.children = r; else if (1 < u) {
                    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                    a.children = s
                }
                if (e && e.defaultProps) for (o in u = e.defaultProps) void 0 === a[o] && (a[o] = u[o]);
                return {$$typeof: n, type: e, key: i, ref: l, props: a, _owner: k.current}
            }

            function M(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }

            var O = /\/+/g;

            function N(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function D(e, t, o, a, i) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var u = !1;
                if (null === e) u = !0; else switch (l) {
                    case"string":
                    case"number":
                        u = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                u = !0
                        }
                }
                if (u) return i = i(u = e), e = "" === a ? "." + N(u, 0) : a, S(i) ? (o = "", null != e && (o = e.replace(O, "$&/") + "/"), D(i, t, o, "", (function (e) {
                    return e
                }))) : null != i && (M(i) && (i = function (e, t) {
                    return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(i, o + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(O, "$&/") + "/") + e)), t.push(i)), 1;
                if (u = 0, a = "" === a ? "." : a + ":", S(e)) for (var s = 0; s < e.length; s++) {
                    var c = a + N(l = e[s], s);
                    u += D(l, t, o, c, i)
                } else if (c = function (e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e), "function" == typeof c) for (e = c.call(e), s = 0; !(l = e.next()).done;) u += D(l = l.value, t, o, c = a + N(l, s++), i); else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return u
            }

            function P(e, t, n) {
                if (null == e) return e;
                var r = [], o = 0;
                return D(e, r, "", "", (function (e) {
                    return t.call(n, e, o++)
                })), r
            }

            function z(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            var j = {current: null}, A = {transition: null},
                I = {ReactCurrentDispatcher: j, ReactCurrentBatchConfig: A, ReactCurrentOwner: k};
            t.Children = {
                map: P, forEach: function (e, t, n) {
                    P(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                }, count: function (e) {
                    var t = 0;
                    return P(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return P(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!M(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = y, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function (e, t, r) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = m({}, e.props), a = e.key, i = e.ref, l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, l = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                    for (s in t) x.call(t, s) && !E.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
                }
                var s = arguments.length - 2;
                if (1 === s) o.children = r; else if (1 < s) {
                    u = Array(s);
                    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
                    o.children = u
                }
                return {$$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l}
            }, t.createContext = function (e) {
                return (e = {
                    $$typeof: u,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: l, _context: e}, e.Consumer = e
            }, t.createElement = C, t.createFactory = function (e) {
                var t = C.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: s, render: e}
            }, t.isValidElement = M, t.lazy = function (e) {
                return {$$typeof: d, _payload: {_status: -1, _result: e}, _init: z}
            }, t.memo = function (e, t) {
                return {$$typeof: f, type: e, compare: void 0 === t ? null : t}
            }, t.startTransition = function (e) {
                var t = A.transition;
                A.transition = {};
                try {
                    e()
                } finally {
                    A.transition = t
                }
            }, t.unstable_act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function (e, t) {
                return j.current.useCallback(e, t)
            }, t.useContext = function (e) {
                return j.current.useContext(e)
            }, t.useDebugValue = function () {
            }, t.useDeferredValue = function (e) {
                return j.current.useDeferredValue(e)
            }, t.useEffect = function (e, t) {
                return j.current.useEffect(e, t)
            }, t.useId = function () {
                return j.current.useId()
            }, t.useImperativeHandle = function (e, t, n) {
                return j.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function (e, t) {
                return j.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function (e, t) {
                return j.current.useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return j.current.useMemo(e, t)
            }, t.useReducer = function (e, t, n) {
                return j.current.useReducer(e, t, n)
            }, t.useRef = function (e) {
                return j.current.useRef(e)
            }, t.useState = function (e) {
                return j.current.useState(e)
            }, t.useSyncExternalStore = function (e, t, n) {
                return j.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function () {
                return j.current.useTransition()
            }, t.version = "18.2.0"
        }, 294: (e, t, n) => {
            "use strict";
            e.exports = n(408)
        }, 53: (e, t) => {
            "use strict";

            function n(e, t) {
                var n = e.length;
                e.push(t);
                e:for (; 0 < n;) {
                    var r = n - 1 >>> 1, o = e[r];
                    if (!(0 < a(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function o(e) {
                if (0 === e.length) return null;
                var t = e[0], n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e:for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
                        var l = 2 * (r + 1) - 1, u = e[l], s = l + 1, c = e[s];
                        if (0 > a(u, n)) s < o && 0 > a(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l); else {
                            if (!(s < o && 0 > a(c, n))) break e;
                            e[r] = c, e[s] = n, r = s
                        }
                    }
                }
                return t
            }

            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }

            if ("object" == typeof performance && "function" == typeof performance.now) {
                var i = performance;
                t.unstable_now = function () {
                    return i.now()
                }
            } else {
                var l = Date, u = l.now();
                t.unstable_now = function () {
                    return l.now() - u
                }
            }
            var s = [], c = [], f = 1, d = null, p = 3, h = !1, m = !1, g = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                v = "function" == typeof clearTimeout ? clearTimeout : null,
                b = "undefined" != typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = r(c); null !== t;) {
                    if (null === t.callback) o(c); else {
                        if (!(t.startTime <= e)) break;
                        o(c), t.sortIndex = t.expirationTime, n(s, t)
                    }
                    t = r(c)
                }
            }

            function S(e) {
                if (g = !1, w(e), !m) if (null !== r(s)) m = !0, A(x); else {
                    var t = r(c);
                    null !== t && I(S, t.startTime - e)
                }
            }

            function x(e, n) {
                m = !1, g && (g = !1, v(M), M = -1), h = !0;
                var a = p;
                try {
                    for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !D());) {
                        var i = d.callback;
                        if ("function" == typeof i) {
                            d.callback = null, p = d.priorityLevel;
                            var l = i(d.expirationTime <= n);
                            n = t.unstable_now(), "function" == typeof l ? d.callback = l : d === r(s) && o(s), w(n)
                        } else o(s);
                        d = r(s)
                    }
                    if (null !== d) var u = !0; else {
                        var f = r(c);
                        null !== f && I(S, f.startTime - n), u = !1
                    }
                    return u
                } finally {
                    d = null, p = a, h = !1
                }
            }

            "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var k, E = !1, C = null, M = -1, O = 5, N = -1;

            function D() {
                return !(t.unstable_now() - N < O)
            }

            function P() {
                if (null !== C) {
                    var e = t.unstable_now();
                    N = e;
                    var n = !0;
                    try {
                        n = C(!0, e)
                    } finally {
                        n ? k() : (E = !1, C = null)
                    }
                } else E = !1
            }

            if ("function" == typeof b) k = function () {
                b(P)
            }; else if ("undefined" != typeof MessageChannel) {
                var z = new MessageChannel, j = z.port2;
                z.port1.onmessage = P, k = function () {
                    j.postMessage(null)
                }
            } else k = function () {
                y(P, 0)
            };

            function A(e) {
                C = e, E || (E = !0, k())
            }

            function I(e, n) {
                M = y((function () {
                    e(t.unstable_now())
                }), n)
            }

            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                m || h || (m = !0, A(x))
            }, t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function () {
                return p
            }, t.unstable_getFirstCallbackNode = function () {
                return r(s)
            }, t.unstable_next = function (e) {
                switch (p) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = function () {
            }, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }, t.unstable_scheduleCallback = function (e, o, a) {
                var i = t.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? i + a : i, e) {
                    case 1:
                        var l = -1;
                        break;
                    case 2:
                        l = 250;
                        break;
                    case 5:
                        l = 1073741823;
                        break;
                    case 4:
                        l = 1e4;
                        break;
                    default:
                        l = 5e3
                }
                return e = {
                    id: f++,
                    callback: o,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: l = a + l,
                    sortIndex: -1
                }, a > i ? (e.sortIndex = a, n(c, e), null === r(s) && e === r(c) && (g ? (v(M), M = -1) : g = !0, I(S, a - i))) : (e.sortIndex = l, n(s, e), m || h || (m = !0, A(x))), e
            }, t.unstable_shouldYield = D, t.unstable_wrapCallback = function (e) {
                var t = p;
                return function () {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        }, 840: (e, t, n) => {
            "use strict";
            e.exports = n(53)
        }, 774: e => {
            e.exports = function (e, t, n, r) {
                var o = n ? n.call(r, e, t) : void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var a = Object.keys(e), i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
                    var s = a[u];
                    if (!l(s)) return !1;
                    var c = e[s], f = t[s];
                    if (!1 === (o = n ? n.call(r, c, f, s) : void 0) || void 0 === o && c !== f) return !1
                }
                return !0
            }
        }, 250: (e, t, n) => {
            "use strict";
            var r = n(294), o = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }, a = r.useState, i = r.useEffect, l = r.useLayoutEffect, u = r.useDebugValue;

            function s(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (e) {
                    return !0
                }
            }

            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
                return t()
            } : function (e, t) {
                var n = t(), r = a({inst: {value: n, getSnapshot: t}}), o = r[0].inst, c = r[1];
                return l((function () {
                    o.value = n, o.getSnapshot = t, s(o) && c({inst: o})
                }), [e, n, t]), i((function () {
                    return s(o) && c({inst: o}), e((function () {
                        s(o) && c({inst: o})
                    }))
                }), [e]), u(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
        }, 139: (e, t, n) => {
            "use strict";
            var r = n(294), o = n(688), a = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }, i = o.useSyncExternalStore, l = r.useRef, u = r.useEffect, s = r.useMemo, c = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
                var f = l(null);
                if (null === f.current) {
                    var d = {hasValue: !1, value: null};
                    f.current = d
                } else d = f.current;
                f = s((function () {
                    function e(e) {
                        if (!u) {
                            if (u = !0, i = e, e = r(e), void 0 !== o && d.hasValue) {
                                var t = d.value;
                                if (o(t, e)) return l = t
                            }
                            return l = e
                        }
                        if (t = l, a(i, e)) return t;
                        var n = r(e);
                        return void 0 !== o && o(t, n) ? t : (i = e, l = n)
                    }

                    var i, l, u = !1, s = void 0 === n ? null : n;
                    return [function () {
                        return e(t())
                    }, null === s ? void 0 : function () {
                        return e(s())
                    }]
                }), [t, n, r, o]);
                var p = i(e, f[0], f[1]);
                return u((function () {
                    d.hasValue = !0, d.value = p
                }), [p]), c(p), p
            }
        }, 688: (e, t, n) => {
            "use strict";
            e.exports = n(250)
        }, 798: (e, t, n) => {
            "use strict";
            e.exports = n(139)
        }
    }, t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {exports: {}};
        return e[r](a, a.exports, n), a.exports
    }

    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {a: t}), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.nc = void 0, (() => {
        "use strict";
        var e = n(294), t = n(745), r = n(688), o = n(798), a = n(935);
        let i = function (e) {
            e()
        };
        const l = () => i, u = (0, e.createContext)(null);

        function s() {
            return (0, e.useContext)(u)
        }

        let c = () => {
            throw new Error("uSES not initialized!")
        };
        const f = (e, t) => e === t;

        function d(t = u) {
            const n = t === u ? s : () => (0, e.useContext)(t);
            return function (t, r = f) {
                const {store: o, subscription: a, getServerState: i} = n(),
                    l = c(a.addNestedSub, o.getState, i || o.getState, t, r);
                return (0, e.useDebugValue)(l), l
            }
        }

        const p = d();
        var h = n(679), m = n.n(h), g = n(864);
        const y = {
            notify() {
            }, get: () => []
        };
        const v = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? e.useLayoutEffect : e.useEffect;
        let b = null;

        function w(t = u) {
            const n = t === u ? s : () => (0, e.useContext)(t);
            return function () {
                const {store: e} = n();
                return e
            }
        }

        const S = w();

        function x(e = u) {
            const t = e === u ? S : w(e);
            return function () {
                return t().dispatch
            }
        }

        const k = x();
        var E;
        (e => {
            c = e
        })(o.useSyncExternalStoreWithSelector), (e => {
            b = e
        })(r.useSyncExternalStore), E = a.unstable_batchedUpdates, i = E;
        var C = function () {
            function e(e, t, n, r) {
                void 0 === t && (t = "div"), void 0 === n && (n = ""), void 0 === r && (r = "");
                var o = document.createElement(t);
                o.className = n, o.textContent = r, e && e.append(o), this.node = o
            }

            return e.prototype.setCanvasBackground = function () {
                throw new Error("Method not implemented.")
            }, e.prototype.destroy = function () {
                this.node.remove()
            }, e
        }();
        const M = C;
        var O, N = (O = function (e, t) {
            return O = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }, O(e, t)
        }, function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }

            O(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        const D = function (e) {
            function t(t, n, r, o, a) {
                var i = e.call(this, t) || this;
                return i.canvasSection = new M(t, "canvas", "canvas"), i.ctx = i.canvasSection.node.getContext("2d"), i.cellSize = o, i.canvasSection.node.width = r * o, i.canvasSection.node.height = n * o, i.imagesData = a, i
            }

            return N(t, e), Object.defineProperty(t.prototype, "canvas", {
                get: function () {
                    return this.canvasSection.node
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "context", {
                get: function () {
                    return this.ctx
                }, enumerable: !1, configurable: !0
            }), t.prototype.inPixels = function (e) {
                return e * this.cellSize
            }, t.prototype.drawBoard = function (e) {
                var t = this;
                this.ctx.drawImage(this.imagesData.bgImg, 0, 0, this.canvasSection.node.width, this.canvasSection.node.height), e.forEach((function (e, n) {
                    e.forEach((function (e, r) {
                        t.ctx.fillStyle = 5 === e ? "rgba(0,0,255,0.3)" : 1 === e ? "rgba(100,105,255,0.5)" : 2 === e ? "rgba(0,0,255,0.1)" : 7 === e ? "red" : 4 === e ? "black" : "rgba(0,50,255,0.5)", t.ctx.fillRect(t.inPixels(r) + 1, t.inPixels(n) + 1, t.cellSize - 2, t.cellSize - 2)
                    }))
                }))
            }, t.prototype.drawShips = function (e) {
                var t = this;
                null == e || e.forEach((function (e) {
                    var n = e.isRotate ? "vertical" : "horizont", r = t.imagesData[n][e.type];
                    t.ctx.drawImage(r, t.inPixels(e.xC), t.inPixels(e.yC), r.width, r.height)
                }))
            }, t.prototype.drawShotShips = function (e) {
                var t = this;
                e.forEach((function (e, n) {
                    e.forEach((function (e, r) {
                        if (4 === e || 3 === e) {
                            var o = t.imagesData.broken;
                            t.ctx.drawImage(o, t.inPixels(r), t.inPixels(n), o.width, o.height)
                        }
                    }))
                }))
            }, t.prototype.drawScene = function (e, t) {
                this.drawBoard(e), t && this.drawShips(t), this.drawShotShips(e)
            }, t
        }(M);
        var P = function () {
            var e = function (t, n) {
                return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, e(t, n)
            };
            return function (t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(), z = function () {
            function e(e) {
                this.board = JSON.parse(JSON.stringify(e)), this.cellsInRow = 10, this._cellSize = 30
            }

            return e.prototype.getCurrentCell = function (e, t) {
                return {x: Math.floor(e / this._cellSize), y: Math.floor(t / this._cellSize)}
            }, e.prototype.getCursorPosition = function (e, t) {
                var n = t.getBoundingClientRect(), r = e.clientX - n.left, o = e.clientY - n.top;
                return this.getCurrentCell(r, o)
            }, e
        }(), j = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.ctx = n, r.drawBoard(), r
            }

            return P(t, e), t.prototype.drawBoard = function () {
                var e = this;
                this.board.forEach((function (t, n) {
                    t.forEach((function (t, r) {
                        e.ctx.fillStyle = "rgba(255, 20, 20, 0.2)", e.ctx.fillRect(e.inPixels(r) + 1, e.inPixels(n) + 1, e._cellSize - 2, e._cellSize - 2)
                    }))
                }))
            }, t.prototype.inPixels = function (e) {
                return e * this._cellSize
            }, Object.defineProperty(t.prototype, "cellSize", {
                get: function () {
                    return this._cellSize
                }, enumerable: !1, configurable: !0
            }), t
        }(z), A = function (e) {
            function t(t) {
                return e.call(this, t) || this
            }

            return P(t, e), t.prototype.isOnBoard = function (e, t, n, r) {
                return r ? t + n <= this.matrixLength() && e < this.matrixLength() && t >= 0 && e >= 0 : e + n <= this.matrixLength() && t < this.matrixLength() && t >= 0 && e >= 0
            }, t.prototype.matrixLength = function () {
                return this.board.length
            }, Object.defineProperty(t.prototype, "cellSize", {
                get: function () {
                    return this._cellSize
                }, enumerable: !1, configurable: !0
            }), t
        }(z), I = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.ckickBinded = n.onClick.bind(n), n
            }

            return P(t, e), t.prototype.onClick = function (e) {
                this.onGetClickedCell(e.x, e.y)
            }, t
        }(A), T = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.cellsInRow = 10, n._cellSize = 30, n.hoveredCells = [], n.boardMatrixFullValue = 1, n.boardMatrixBlockedCell = 5, n.boardMatrixHoverValue = 2, n.boardMatrixEmptyValue = 0, n.boardOccupateValue = 7, n
            }

            return P(t, e), t.prototype.fillCell = function (e, t, n, r, o) {
                this.clearCells(), this.fillCells(e, t, n, r, o)
            }, t.prototype.getBlockValue = function () {
                return this.boardMatrixBlockedCell
            }, t.prototype.defineCellValue = function (e) {
                return "occupate" === e ? this.boardOccupateValue : "hovered" === e ? this.boardMatrixHoverValue : 99
            }, t.prototype.fillCells = function (e, t, n, r, o) {
                for (var a = this.defineCellValue(e), i = [], l = [], u = 0; u < r; u++) {
                    var s = o ? t : t + u;
                    (c = o ? n + u : n) < this.cellsInRow && s < this.cellsInRow && i.push("+")
                }
                if (i.length === r) for (u = 0; u < i.length; u++) {
                    var c = o ? n + u : n;
                    s = o ? t : t + u, this.board[c][s] !== this.boardMatrixBlockedCell && l.push("".concat(c, "-").concat(s))
                }
                this.onFillCells({data: l, value: a})
            }, t.prototype.clearCells = function () {
                this.onClearHovered(this.boardMatrixEmptyValue)
            }, t.prototype.valueToCell = function (e, t, n) {
                var r = "blocked" === n ? this.boardMatrixBlockedCell : "ship" === n ? 88 : 99;
                this.board[e][t] = r
            }, t.prototype.updateBoard = function (e) {
                this.board = JSON.parse(JSON.stringify(e))
            }, t
        }(A);
        const L = T;
        var _ = n(774), R = n.n(_);
        const F = function (e) {
            function t(e, r, u, s, d) {
                for (var p, h, m, g, w, x = 0, k = 0, E = 0, C = 0, M = 0, j = 0, I = m = p = 0, L = 0, _ = 0, R = 0, F = 0, U = u.length, Q = U - 1, B = "", W = "", H = "", V = ""; L < U;) {
                    if (h = u.charCodeAt(L), L === Q && 0 !== k + C + E + x && (0 !== k && (h = 47 === k ? 10 : 47), C = E = x = 0, U++, Q++), 0 === k + C + E + x) {
                        if (L === Q && (0 < _ && (B = B.replace(f, "")), 0 < B.trim().length)) {
                            switch (h) {
                                case 32:
                                case 9:
                                case 59:
                                case 13:
                                case 10:
                                    break;
                                default:
                                    B += u.charAt(L)
                            }
                            h = 59
                        }
                        switch (h) {
                            case 123:
                                for (p = (B = B.trim()).charCodeAt(0), m = 1, F = ++L; L < U;) {
                                    switch (h = u.charCodeAt(L)) {
                                        case 123:
                                            m++;
                                            break;
                                        case 125:
                                            m--;
                                            break;
                                        case 47:
                                            switch (h = u.charCodeAt(L + 1)) {
                                                case 42:
                                                case 47:
                                                    e:{
                                                        for (I = L + 1; I < Q; ++I) switch (u.charCodeAt(I)) {
                                                            case 47:
                                                                if (42 === h && 42 === u.charCodeAt(I - 1) && L + 2 !== I) {
                                                                    L = I + 1;
                                                                    break e
                                                                }
                                                                break;
                                                            case 10:
                                                                if (47 === h) {
                                                                    L = I + 1;
                                                                    break e
                                                                }
                                                        }
                                                        L = I
                                                    }
                                            }
                                            break;
                                        case 91:
                                            h++;
                                        case 40:
                                            h++;
                                        case 34:
                                        case 39:
                                            for (; L++ < Q && u.charCodeAt(L) !== h;) ;
                                    }
                                    if (0 === m) break;
                                    L++
                                }
                                if (m = u.substring(F, L), 0 === p && (p = (B = B.replace(c, "").trim()).charCodeAt(0)), 64 === p) {
                                    switch (0 < _ && (B = B.replace(f, "")), h = B.charCodeAt(1)) {
                                        case 100:
                                        case 109:
                                        case 115:
                                        case 45:
                                            _ = r;
                                            break;
                                        default:
                                            _ = z
                                    }
                                    if (F = (m = t(r, _, m, h, d + 1)).length, 0 < A && (w = l(3, m, _ = n(z, B, R), r, N, O, F, h, d, s), B = _.join(""), void 0 !== w && 0 === (F = (m = w.trim()).length) && (h = 0, m = "")), 0 < F) switch (h) {
                                        case 115:
                                            B = B.replace(S, i);
                                        case 100:
                                        case 109:
                                        case 45:
                                            m = B + "{" + m + "}";
                                            break;
                                        case 107:
                                            m = (B = B.replace(y, "$1 $2")) + "{" + m + "}", m = 1 === P || 2 === P && a("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                            break;
                                        default:
                                            m = B + m, 112 === s && (W += m, m = "")
                                    } else m = ""
                                } else m = t(r, n(r, B, R), m, s, d + 1);
                                H += m, m = R = _ = I = p = 0, B = "", h = u.charCodeAt(++L);
                                break;
                            case 125:
                            case 59:
                                if (1 < (F = (B = (0 < _ ? B.replace(f, "") : B).trim()).length)) switch (0 === I && (p = B.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (F = (B = B.replace(" ", ":")).length), 0 < A && void 0 !== (w = l(1, B, r, e, N, O, W.length, s, d, s)) && 0 === (F = (B = w.trim()).length) && (B = "\0\0"), p = B.charCodeAt(0), h = B.charCodeAt(1), p) {
                                    case 0:
                                        break;
                                    case 64:
                                        if (105 === h || 99 === h) {
                                            V += B + u.charAt(L);
                                            break
                                        }
                                    default:
                                        58 !== B.charCodeAt(F - 1) && (W += o(B, p, h, B.charCodeAt(2)))
                                }
                                R = _ = I = p = 0, B = "", h = u.charCodeAt(++L)
                        }
                    }
                    switch (h) {
                        case 13:
                        case 10:
                            47 === k ? k = 0 : 0 === 1 + p && 107 !== s && 0 < B.length && (_ = 1, B += "\0"), 0 < A * T && l(0, B, r, e, N, O, W.length, s, d, s), O = 1, N++;
                            break;
                        case 59:
                        case 125:
                            if (0 === k + C + E + x) {
                                O++;
                                break
                            }
                        default:
                            switch (O++, g = u.charAt(L), h) {
                                case 9:
                                case 32:
                                    if (0 === C + x + k) switch (M) {
                                        case 44:
                                        case 58:
                                        case 9:
                                        case 32:
                                            g = "";
                                            break;
                                        default:
                                            32 !== h && (g = " ")
                                    }
                                    break;
                                case 0:
                                    g = "\\0";
                                    break;
                                case 12:
                                    g = "\\f";
                                    break;
                                case 11:
                                    g = "\\v";
                                    break;
                                case 38:
                                    0 === C + k + x && (_ = R = 1, g = "\f" + g);
                                    break;
                                case 108:
                                    if (0 === C + k + x + D && 0 < I) switch (L - I) {
                                        case 2:
                                            112 === M && 58 === u.charCodeAt(L - 3) && (D = M);
                                        case 8:
                                            111 === j && (D = j)
                                    }
                                    break;
                                case 58:
                                    0 === C + k + x && (I = L);
                                    break;
                                case 44:
                                    0 === k + E + C + x && (_ = 1, g += "\r");
                                    break;
                                case 34:
                                case 39:
                                    0 === k && (C = C === h ? 0 : 0 === C ? h : C);
                                    break;
                                case 91:
                                    0 === C + k + E && x++;
                                    break;
                                case 93:
                                    0 === C + k + E && x--;
                                    break;
                                case 41:
                                    0 === C + k + x && E--;
                                    break;
                                case 40:
                                    0 === C + k + x && (0 === p && (2 * M + 3 * j == 533 || (p = 1)), E++);
                                    break;
                                case 64:
                                    0 === k + E + C + x + I + m && (m = 1);
                                    break;
                                case 42:
                                case 47:
                                    if (!(0 < C + x + E)) switch (k) {
                                        case 0:
                                            switch (2 * h + 3 * u.charCodeAt(L + 1)) {
                                                case 235:
                                                    k = 47;
                                                    break;
                                                case 220:
                                                    F = L, k = 42
                                            }
                                            break;
                                        case 42:
                                            47 === h && 42 === M && F + 2 !== L && (33 === u.charCodeAt(F + 2) && (W += u.substring(F, L + 1)), g = "", k = 0)
                                    }
                            }
                            0 === k && (B += g)
                    }
                    j = M, M = h, L++
                }
                if (0 < (F = W.length)) {
                    if (_ = r, 0 < A && void 0 !== (w = l(2, W, _, e, N, O, F, s, d, s)) && 0 === (W = w).length) return V + W + H;
                    if (W = _.join(",") + "{" + W + "}", 0 != P * D) {
                        switch (2 !== P || a(W, 2) || (D = 0), D) {
                            case 111:
                                W = W.replace(b, ":-moz-$1") + W;
                                break;
                            case 112:
                                W = W.replace(v, "::-webkit-input-$1") + W.replace(v, "::-moz-$1") + W.replace(v, ":-ms-input-$1") + W
                        }
                        D = 0
                    }
                }
                return V + W + H
            }

            function n(e, t, n) {
                var o = t.trim().split(m);
                t = o;
                var a = o.length, i = e.length;
                switch (i) {
                    case 0:
                    case 1:
                        var l = 0;
                        for (e = 0 === i ? "" : e[0] + " "; l < a; ++l) t[l] = r(e, t[l], n).trim();
                        break;
                    default:
                        var u = l = 0;
                        for (t = []; l < a; ++l) for (var s = 0; s < i; ++s) t[u++] = r(e[s] + " ", o[l], n).trim()
                }
                return t
            }

            function r(e, t, n) {
                var r = t.charCodeAt(0);
                switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                    case 38:
                        return t.replace(g, "$1" + e.trim());
                    case 58:
                        return e.trim() + t.replace(g, "$1" + e.trim());
                    default:
                        if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                }
                return e + t
            }

            function o(e, t, n, r) {
                var i = e + ";", l = 2 * t + 3 * n + 4 * r;
                if (944 === l) {
                    e = i.indexOf(":", 9) + 1;
                    var u = i.substring(e, i.length - 1).trim();
                    return u = i.substring(0, e).trim() + u + ";", 1 === P || 2 === P && a(u, 1) ? "-webkit-" + u + u : u
                }
                if (0 === P || 2 === P && !a(i, 1)) return i;
                switch (l) {
                    case 1015:
                        return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
                    case 951:
                        return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
                    case 963:
                        return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
                    case 1009:
                        if (100 !== i.charCodeAt(4)) break;
                    case 969:
                    case 942:
                        return "-webkit-" + i + i;
                    case 978:
                        return "-webkit-" + i + "-moz-" + i + i;
                    case 1019:
                    case 983:
                        return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
                    case 883:
                        if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
                        if (0 < i.indexOf("image-set(", 11)) return i.replace(M, "$1-webkit-$2") + i;
                        break;
                    case 932:
                        if (45 === i.charCodeAt(4)) switch (i.charCodeAt(5)) {
                            case 103:
                                return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
                            case 115:
                                return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
                            case 98:
                                return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i
                        }
                        return "-webkit-" + i + "-ms-" + i + i;
                    case 964:
                        return "-webkit-" + i + "-ms-flex-" + i + i;
                    case 1023:
                        if (99 !== i.charCodeAt(8)) break;
                        return "-webkit-box-pack" + (u = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + u + i;
                    case 1005:
                        return p.test(i) ? i.replace(d, ":-webkit-") + i.replace(d, ":-moz-") + i : i;
                    case 1e3:
                        switch (t = (u = i.substring(13).trim()).indexOf("-") + 1, u.charCodeAt(0) + u.charCodeAt(t)) {
                            case 226:
                                u = i.replace(w, "tb");
                                break;
                            case 232:
                                u = i.replace(w, "tb-rl");
                                break;
                            case 220:
                                u = i.replace(w, "lr");
                                break;
                            default:
                                return i
                        }
                        return "-webkit-" + i + "-ms-" + u + i;
                    case 1017:
                        if (-1 === i.indexOf("sticky", 9)) break;
                    case 975:
                        switch (t = (i = e).length - 10, l = (u = (33 === i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | u.charCodeAt(7))) {
                            case 203:
                                if (111 > u.charCodeAt(8)) break;
                            case 115:
                                i = i.replace(u, "-webkit-" + u) + ";" + i;
                                break;
                            case 207:
                            case 102:
                                i = i.replace(u, "-webkit-" + (102 < l ? "inline-" : "") + "box") + ";" + i.replace(u, "-webkit-" + u) + ";" + i.replace(u, "-ms-" + u + "box") + ";" + i
                        }
                        return i + ";";
                    case 938:
                        if (45 === i.charCodeAt(5)) switch (i.charCodeAt(6)) {
                            case 105:
                                return u = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + u + "-ms-flex-" + u + i;
                            case 115:
                                return "-webkit-" + i + "-ms-flex-item-" + i.replace(k, "") + i;
                            default:
                                return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(k, "") + i
                        }
                        break;
                    case 973:
                    case 989:
                        if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
                    case 931:
                    case 953:
                        if (!0 === C.test(e)) return 115 === (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : i.replace(u, "-webkit-" + u) + i.replace(u, "-moz-" + u.replace("fill-", "")) + i;
                        break;
                    case 962:
                        if (i = "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i, 211 === n + r && 105 === i.charCodeAt(13) && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + i
                }
                return i
            }

            function a(e, t) {
                var n = e.indexOf(1 === t ? ":" : "{"), r = e.substring(0, 3 !== t ? n : 10);
                return n = e.substring(n + 1, e.length - 1), I(2 !== t ? r : r.replace(E, "$1"), n, t)
            }

            function i(e, t) {
                var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                return n !== t + ";" ? n.replace(x, " or ($1)").substring(4) : "(" + t + ")"
            }

            function l(e, t, n, r, o, a, i, l, u, c) {
                for (var f, d = 0, p = t; d < A; ++d) switch (f = j[d].call(s, e, p, n, r, o, a, i, l, u, c)) {
                    case void 0:
                    case!1:
                    case!0:
                    case null:
                        break;
                    default:
                        p = f
                }
                if (p !== t) return p
            }

            function u(e) {
                return void 0 !== (e = e.prefix) && (I = null, e ? "function" != typeof e ? P = 1 : (P = 2, I = e) : P = 0), u
            }

            function s(e, n) {
                var r = e;
                if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < A) {
                    var o = l(-1, n, r, r, N, O, 0, 0, 0, 0);
                    void 0 !== o && "string" == typeof o && (n = o)
                }
                var a = t(z, r, n, 0, 0);
                return 0 < A && void 0 !== (o = l(-2, a, r, r, N, O, a.length, 0, 0, 0)) && (a = o), D = 0, O = N = 1, a
            }

            var c = /^\0+/g, f = /[\0\r\f]/g, d = /: */g, p = /zoo|gra/, h = /([,: ])(transform)/g, m = /,\r+?/g,
                g = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, v = /::(place)/g, b = /:(read-only)/g,
                w = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, x = /([\s\S]*?);/g, k = /-self|flex-/g,
                E = /[^]*?(:[rp][el]a[\w-]+)[^]*/, C = /stretch|:\s*\w+\-(?:conte|avail)/, M = /([^-])(image-set\()/,
                O = 1, N = 1, D = 0, P = 1, z = [], j = [], A = 0, I = null, T = 0;
            return s.use = function e(t) {
                switch (t) {
                    case void 0:
                    case null:
                        A = j.length = 0;
                        break;
                    default:
                        if ("function" == typeof t) j[A++] = t; else if ("object" == typeof t) for (var n = 0, r = t.length; n < r; ++n) e(t[n]); else T = 0 | !!t
                }
                return e
            }, s.set = u, void 0 !== e && u(e), s
        }, U = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        }, Q = function (e) {
            var t = Object.create(null);
            return function (n) {
                return void 0 === t[n] && (t[n] = e(n)), t[n]
            }
        };
        var B = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
        const W = Q((function (e) {
            return B.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        }));

        function H() {
            return (H = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        var V = function (e, t) {
            for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
            return n
        }, $ = function (e) {
            return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, g.typeOf)(e)
        }, Y = Object.freeze([]), G = Object.freeze({});

        function Z(e) {
            return "function" == typeof e
        }

        function J(e) {
            return e.displayName || e.name || "Component"
        }

        function K(e) {
            return e && "string" == typeof e.styledComponentId
        }

        var q = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
            X = "undefined" != typeof window && "HTMLElement" in window,
            ee = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY);

        function te(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
        }

        var ne = function () {
                function e(e) {
                    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                }

                var t = e.prototype;
                return t.indexOfGroup = function (e) {
                    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                    return t
                }, t.insertRules = function (e, t) {
                    if (e >= this.groupSizes.length) {
                        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && te(16, "" + e);
                        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
                        for (var a = r; a < o; a++) this.groupSizes[a] = 0
                    }
                    for (var i = this.indexOfGroup(e + 1), l = 0, u = t.length; l < u; l++) this.tag.insertRule(i, t[l]) && (this.groupSizes[e]++, i++)
                }, t.clearGroup = function (e) {
                    if (e < this.length) {
                        var t = this.groupSizes[e], n = this.indexOfGroup(e), r = n + t;
                        this.groupSizes[e] = 0;
                        for (var o = n; o < r; o++) this.tag.deleteRule(n)
                    }
                }, t.getGroup = function (e) {
                    var t = "";
                    if (e >= this.length || 0 === this.groupSizes[e]) return t;
                    for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, a = r; a < o; a++) t += this.tag.getRule(a) + "/*!sc*/\n";
                    return t
                }, e
            }(), re = new Map, oe = new Map, ae = 1, ie = function (e) {
                if (re.has(e)) return re.get(e);
                for (; oe.has(ae);) ae++;
                var t = ae++;
                return re.set(e, t), oe.set(t, e), t
            }, le = function (e) {
                return oe.get(e)
            }, ue = function (e, t) {
                t >= ae && (ae = t + 1), re.set(e, t), oe.set(t, e)
            }, se = "style[" + q + '][data-styled-version="5.3.6"]',
            ce = new RegExp("^" + q + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), fe = function (e, t, n) {
                for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++) (r = o[a]) && e.registerName(t, r)
            }, de = function (e, t) {
                for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, a = n.length; o < a; o++) {
                    var i = n[o].trim();
                    if (i) {
                        var l = i.match(ce);
                        if (l) {
                            var u = 0 | parseInt(l[1], 10), s = l[2];
                            0 !== u && (ue(s, u), fe(e, s, l[3]), e.getTag().insertRules(u, r)), r.length = 0
                        } else r.push(i)
                    }
                }
            }, pe = function () {
                return n.nc
            }, he = function (e) {
                var t = document.head, n = e || t, r = document.createElement("style"), o = function (e) {
                    for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                        var r = t[n];
                        if (r && 1 === r.nodeType && r.hasAttribute(q)) return r
                    }
                }(n), a = void 0 !== o ? o.nextSibling : null;
                r.setAttribute(q, "active"), r.setAttribute("data-styled-version", "5.3.6");
                var i = pe();
                return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r
            }, me = function () {
                function e(e) {
                    var t = this.element = he(e);
                    t.appendChild(document.createTextNode("")), this.sheet = function (e) {
                        if (e.sheet) return e.sheet;
                        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                            var o = t[n];
                            if (o.ownerNode === e) return o
                        }
                        te(17)
                    }(t), this.length = 0
                }

                var t = e.prototype;
                return t.insertRule = function (e, t) {
                    try {
                        return this.sheet.insertRule(t, e), this.length++, !0
                    } catch (e) {
                        return !1
                    }
                }, t.deleteRule = function (e) {
                    this.sheet.deleteRule(e), this.length--
                }, t.getRule = function (e) {
                    var t = this.sheet.cssRules[e];
                    return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
                }, e
            }(), ge = function () {
                function e(e) {
                    var t = this.element = he(e);
                    this.nodes = t.childNodes, this.length = 0
                }

                var t = e.prototype;
                return t.insertRule = function (e, t) {
                    if (e <= this.length && e >= 0) {
                        var n = document.createTextNode(t), r = this.nodes[e];
                        return this.element.insertBefore(n, r || null), this.length++, !0
                    }
                    return !1
                }, t.deleteRule = function (e) {
                    this.element.removeChild(this.nodes[e]), this.length--
                }, t.getRule = function (e) {
                    return e < this.length ? this.nodes[e].textContent : ""
                }, e
            }(), ye = function () {
                function e(e) {
                    this.rules = [], this.length = 0
                }

                var t = e.prototype;
                return t.insertRule = function (e, t) {
                    return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                }, t.deleteRule = function (e) {
                    this.rules.splice(e, 1), this.length--
                }, t.getRule = function (e) {
                    return e < this.length ? this.rules[e] : ""
                }, e
            }(), ve = X, be = {isServer: !X, useCSSOMInjection: !ee}, we = function () {
                function e(e, t, n) {
                    void 0 === e && (e = G), void 0 === t && (t = {}), this.options = H({}, be, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && X && ve && (ve = !1, function (e) {
                        for (var t = document.querySelectorAll(se), n = 0, r = t.length; n < r; n++) {
                            var o = t[n];
                            o && "active" !== o.getAttribute(q) && (de(e, o), o.parentNode && o.parentNode.removeChild(o))
                        }
                    }(this))
                }

                e.registerId = function (e) {
                    return ie(e)
                };
                var t = e.prototype;
                return t.reconstructWithOptions = function (t, n) {
                    return void 0 === n && (n = !0), new e(H({}, this.options, {}, t), this.gs, n && this.names || void 0)
                }, t.allocateGSInstance = function (e) {
                    return this.gs[e] = (this.gs[e] || 0) + 1
                }, t.getTag = function () {
                    return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new ye(o) : r ? new me(o) : new ge(o), new ne(e)));
                    var e, t, n, r, o
                }, t.hasNameForId = function (e, t) {
                    return this.names.has(e) && this.names.get(e).has(t)
                }, t.registerName = function (e, t) {
                    if (ie(e), this.names.has(e)) this.names.get(e).add(t); else {
                        var n = new Set;
                        n.add(t), this.names.set(e, n)
                    }
                }, t.insertRules = function (e, t, n) {
                    this.registerName(e, t), this.getTag().insertRules(ie(e), n)
                }, t.clearNames = function (e) {
                    this.names.has(e) && this.names.get(e).clear()
                }, t.clearRules = function (e) {
                    this.getTag().clearGroup(ie(e)), this.clearNames(e)
                }, t.clearTag = function () {
                    this.tag = void 0
                }, t.toString = function () {
                    return function (e) {
                        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                            var a = le(o);
                            if (void 0 !== a) {
                                var i = e.names.get(a), l = t.getGroup(o);
                                if (i && l && i.size) {
                                    var u = q + ".g" + o + '[id="' + a + '"]', s = "";
                                    void 0 !== i && i.forEach((function (e) {
                                        e.length > 0 && (s += e + ",")
                                    })), r += "" + l + u + '{content:"' + s + '"}/*!sc*/\n'
                                }
                            }
                        }
                        return r
                    }(this)
                }, e
            }(), Se = /(a)(d)/gi, xe = function (e) {
                return String.fromCharCode(e + (e > 25 ? 39 : 97))
            };

        function ke(e) {
            var t, n = "";
            for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = xe(t % 52) + n;
            return (xe(t % 52) + n).replace(Se, "$1-$2")
        }

        var Ee = function (e, t) {
            for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
            return e
        }, Ce = function (e) {
            return Ee(5381, e)
        };

        function Me(e) {
            for (var t = 0; t < e.length; t += 1) {
                var n = e[t];
                if (Z(n) && !K(n)) return !1
            }
            return !0
        }

        var Oe = Ce("5.3.6"), Ne = function () {
            function e(e, t, n) {
                this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && Me(e), this.componentId = t, this.baseHash = Ee(Oe, t), this.baseStyle = n, we.registerId(t)
            }

            return e.prototype.generateAndInjectStyles = function (e, t, n) {
                var r = this.componentId, o = [];
                if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId); else {
                    var a = Ve(this.rules, e, t, n).join(""), i = ke(Ee(this.baseHash, a) >>> 0);
                    if (!t.hasNameForId(r, i)) {
                        var l = n(a, "." + i, void 0, r);
                        t.insertRules(r, i, l)
                    }
                    o.push(i), this.staticRulesId = i
                } else {
                    for (var u = this.rules.length, s = Ee(this.baseHash, n.hash), c = "", f = 0; f < u; f++) {
                        var d = this.rules[f];
                        if ("string" == typeof d) c += d; else if (d) {
                            var p = Ve(d, e, t, n), h = Array.isArray(p) ? p.join("") : p;
                            s = Ee(s, h + f), c += h
                        }
                    }
                    if (c) {
                        var m = ke(s >>> 0);
                        if (!t.hasNameForId(r, m)) {
                            var g = n(c, "." + m, void 0, r);
                            t.insertRules(r, m, g)
                        }
                        o.push(m)
                    }
                }
                return o.join(" ")
            }, e
        }(), De = /^\s*\/\/.*$/gm, Pe = [":", "[", ".", "#"];

        function ze(e) {
            var t, n, r, o, a = void 0 === e ? G : e, i = a.options, l = void 0 === i ? G : i, u = a.plugins,
                s = void 0 === u ? Y : u, c = new F(l), f = [], d = function (e) {
                    function t(t) {
                        if (t) try {
                            e(t + "}")
                        } catch (e) {
                        }
                    }

                    return function (n, r, o, a, i, l, u, s, c, f) {
                        switch (n) {
                            case 1:
                                if (0 === c && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                                break;
                            case 2:
                                if (0 === s) return r + "/*|*/";
                                break;
                            case 3:
                                switch (s) {
                                    case 102:
                                    case 112:
                                        return e(o[0] + r), "";
                                    default:
                                        return r + (0 === f ? "/*|*/" : "")
                                }
                            case-2:
                                r.split("/*|*/}").forEach(t)
                        }
                    }
                }((function (e) {
                    f.push(e)
                })), p = function (e, r, a) {
                    return 0 === r && -1 !== Pe.indexOf(a[n.length]) || a.match(o) ? e : "." + t
                };

            function h(e, a, i, l) {
                void 0 === l && (l = "&");
                var u = e.replace(De, ""), s = a && i ? i + " " + a + " { " + u + " }" : u;
                return t = l, n = a, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), c(i || !a ? "" : a, s)
            }

            return c.use([].concat(s, [function (e, t, o) {
                2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, p))
            }, d, function (e) {
                if (-2 === e) {
                    var t = f;
                    return f = [], t
                }
            }])), h.hash = s.length ? s.reduce((function (e, t) {
                return t.name || te(15), Ee(e, t.name)
            }), 5381).toString() : "", h
        }

        var je = e.createContext(), Ae = (je.Consumer, e.createContext()), Ie = (Ae.Consumer, new we), Te = ze();

        function Le() {
            return (0, e.useContext)(je) || Ie
        }

        function _e(t) {
            var n = (0, e.useState)(t.stylisPlugins), r = n[0], o = n[1], a = Le(), i = (0, e.useMemo)((function () {
                var e = a;
                return t.sheet ? e = t.sheet : t.target && (e = e.reconstructWithOptions({target: t.target}, !1)), t.disableCSSOMInjection && (e = e.reconstructWithOptions({useCSSOMInjection: !1})), e
            }), [t.disableCSSOMInjection, t.sheet, t.target]), l = (0, e.useMemo)((function () {
                return ze({options: {prefix: !t.disableVendorPrefixes}, plugins: r})
            }), [t.disableVendorPrefixes, r]);
            return (0, e.useEffect)((function () {
                R()(r, t.stylisPlugins) || o(t.stylisPlugins)
            }), [t.stylisPlugins]), e.createElement(je.Provider, {value: i}, e.createElement(Ae.Provider, {value: l}, t.children))
        }

        var Re = function () {
            function e(e, t) {
                var n = this;
                this.inject = function (e, t) {
                    void 0 === t && (t = Te);
                    var r = n.name + t.hash;
                    e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                }, this.toString = function () {
                    return te(12, String(n.name))
                }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
            }

            return e.prototype.getName = function (e) {
                return void 0 === e && (e = Te), this.name + e.hash
            }, e
        }(), Fe = /([A-Z])/, Ue = /([A-Z])/g, Qe = /^ms-/, Be = function (e) {
            return "-" + e.toLowerCase()
        };

        function We(e) {
            return Fe.test(e) ? e.replace(Ue, Be).replace(Qe, "-ms-") : e
        }

        var He = function (e) {
            return null == e || !1 === e || "" === e
        };

        function Ve(e, t, n, r) {
            if (Array.isArray(e)) {
                for (var o, a = [], i = 0, l = e.length; i < l; i += 1) "" !== (o = Ve(e[i], t, n, r)) && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
                return a
            }
            return He(e) ? "" : K(e) ? "." + e.styledComponentId : Z(e) ? "function" != typeof (u = e) || u.prototype && u.prototype.isReactComponent || !t ? e : Ve(e(t), t, n, r) : e instanceof Re ? n ? (e.inject(n, r), e.getName(r)) : e : $(e) ? function e(t, n) {
                var r, o, a = [];
                for (var i in t) t.hasOwnProperty(i) && !He(t[i]) && (Array.isArray(t[i]) && t[i].isCss || Z(t[i]) ? a.push(We(i) + ":", t[i], ";") : $(t[i]) ? a.push.apply(a, e(t[i], i)) : a.push(We(i) + ": " + (r = i, (null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in U ? String(o).trim() : o + "px") + ";")));
                return n ? [n + " {"].concat(a, ["}"]) : a
            }(e) : e.toString();
            var u
        }

        var $e = function (e) {
            return Array.isArray(e) && (e.isCss = !0), e
        };

        function Ye(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return Z(e) || $(e) ? $e(Ve(V(Y, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : $e(Ve(V(e, n)))
        }

        new Set;
        var Ge = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ze = /(^-|-$)/g;

        function Je(e) {
            return e.replace(Ge, "-").replace(Ze, "")
        }

        function Ke(e) {
            return "string" == typeof e && !0
        }

        var qe = function (e) {
            return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
        }, Xe = function (e) {
            return "__proto__" !== e && "constructor" !== e && "prototype" !== e
        };

        function et(e, t, n) {
            var r = e[n];
            qe(t) && qe(r) ? tt(r, t) : e[n] = t
        }

        function tt(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            for (var o = 0, a = n; o < a.length; o++) {
                var i = a[o];
                if (qe(i)) for (var l in i) Xe(l) && et(e, i[l], l)
            }
            return e
        }

        var nt = e.createContext();
        nt.Consumer;
        var rt = {};

        function ot(t, n, r) {
            var o = K(t), a = !Ke(t), i = n.attrs, l = void 0 === i ? Y : i, u = n.componentId,
                s = void 0 === u ? function (e, t) {
                    var n = "string" != typeof e ? "sc" : Je(e);
                    rt[n] = (rt[n] || 0) + 1;
                    var r = n + "-" + function (e) {
                        return ke(Ce(e) >>> 0)
                    }("5.3.6" + n + rt[n]);
                    return t ? t + "-" + r : r
                }(n.displayName, n.parentComponentId) : u, c = n.displayName, f = void 0 === c ? function (e) {
                    return Ke(e) ? "styled." + e : "Styled(" + J(e) + ")"
                }(t) : c, d = n.displayName && n.componentId ? Je(n.displayName) + "-" + n.componentId : n.componentId || s,
                p = o && t.attrs ? Array.prototype.concat(t.attrs, l).filter(Boolean) : l, h = n.shouldForwardProp;
            o && t.shouldForwardProp && (h = n.shouldForwardProp ? function (e, r, o) {
                return t.shouldForwardProp(e, r, o) && n.shouldForwardProp(e, r, o)
            } : t.shouldForwardProp);
            var g, y = new Ne(r, d, o ? t.componentStyle : void 0), v = y.isStatic && 0 === l.length,
                b = function (t, n) {
                    return function (t, n, r, o) {
                        var a = t.attrs, i = t.componentStyle, l = t.defaultProps, u = t.foldedComponentIds,
                            s = t.shouldForwardProp, c = t.styledComponentId, f = t.target, d = function (e, t, n) {
                                void 0 === e && (e = G);
                                var r = H({}, t, {theme: e}), o = {};
                                return n.forEach((function (e) {
                                    var t, n, a, i = e;
                                    for (t in Z(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], a = i[t], n && a ? n + " " + a : n || a) : i[t]
                                })), [r, o]
                            }(function (e, t, n) {
                                return void 0 === n && (n = G), e.theme !== n.theme && e.theme || t || n.theme
                            }(n, (0, e.useContext)(nt), l) || G, n, a), p = d[0], h = d[1], m = function (t, n, r, o) {
                                var a = Le(), i = (0, e.useContext)(Ae) || Te;
                                return n ? t.generateAndInjectStyles(G, a, i) : t.generateAndInjectStyles(r, a, i)
                            }(i, o, p), g = r, y = h.$as || n.$as || h.as || n.as || f, v = Ke(y),
                            b = h !== n ? H({}, n, {}, h) : n, w = {};
                        for (var S in b) "$" !== S[0] && "as" !== S && ("forwardedAs" === S ? w.as = b[S] : (s ? s(S, W, y) : !v || W(S)) && (w[S] = b[S]));
                        return n.style && h.style !== n.style && (w.style = H({}, n.style, {}, h.style)), w.className = Array.prototype.concat(u, c, m !== c ? m : null, n.className, h.className).filter(Boolean).join(" "), w.ref = g, (0, e.createElement)(y, w)
                    }(g, t, n, v)
                };
            return b.displayName = f, (g = e.forwardRef(b)).attrs = p, g.componentStyle = y, g.displayName = f, g.shouldForwardProp = h, g.foldedComponentIds = o ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : Y, g.styledComponentId = d, g.target = o ? t.target : t, g.withComponent = function (e) {
                var t = n.componentId, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {}, a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(n, ["componentId"]), a = t && t + "-" + (Ke(e) ? e : Je(J(e)));
                return ot(e, H({}, o, {attrs: p, componentId: a}), r)
            }, Object.defineProperty(g, "defaultProps", {
                get: function () {
                    return this._foldedDefaultProps
                }, set: function (e) {
                    this._foldedDefaultProps = o ? tt({}, t.defaultProps, e) : e
                }
            }), g.toString = function () {
                return "." + g.styledComponentId
            }, a && m()(g, t, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0
            }), g
        }

        var at = function (e) {
            return function e(t, n, r) {
                if (void 0 === r && (r = G), !(0, g.isValidElementType)(n)) return te(1, String(n));
                var o = function () {
                    return t(n, r, Ye.apply(void 0, arguments))
                };
                return o.withConfig = function (o) {
                    return e(t, n, H({}, r, {}, o))
                }, o.attrs = function (o) {
                    return e(t, n, H({}, r, {attrs: Array.prototype.concat(r.attrs, o).filter(Boolean)}))
                }, o
            }(ot, e)
        };
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function (e) {
            at[e] = at(e)
        })), function () {
            var e = function (e, t) {
                this.rules = e, this.componentId = t, this.isStatic = Me(e), we.registerId(this.componentId + 1)
            }.prototype;
            e.createStyles = function (e, t, n, r) {
                var o = r(Ve(this.rules, t, n, r).join(""), ""), a = this.componentId + e;
                n.insertRules(a, a, o)
            }, e.removeStyles = function (e, t) {
                t.clearRules(this.componentId + e)
            }, e.renderStyles = function (e, t, n, r) {
                e > 2 && we.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
            }
        }(), function () {
            var t = function () {
                var t = this;
                this._emitSheetCSS = function () {
                    var e = t.instance.toString();
                    if (!e) return "";
                    var n = pe();
                    return "<style " + [n && 'nonce="' + n + '"', q + '="true"', 'data-styled-version="5.3.6"'].filter(Boolean).join(" ") + ">" + e + "</style>"
                }, this.getStyleTags = function () {
                    return t.sealed ? te(2) : t._emitSheetCSS()
                }, this.getStyleElement = function () {
                    var n;
                    if (t.sealed) return te(2);
                    var r = ((n = {})[q] = "", n["data-styled-version"] = "5.3.6", n.dangerouslySetInnerHTML = {__html: t.instance.toString()}, n),
                        o = pe();
                    return o && (r.nonce = o), [e.createElement("style", H({}, r, {key: "sc-0-0"}))]
                }, this.seal = function () {
                    t.sealed = !0
                }, this.instance = new we({isServer: !0}), this.sealed = !1
            }.prototype;
            t.collectStyles = function (t) {
                return this.sealed ? te(2) : e.createElement(_e, {sheet: this.instance}, t)
            }, t.interleaveWithNodeStream = function (e) {
                return te(3)
            }
        }();
        const it = at;
        var lt, ut, st = "rgb(0, 4, 23)", ct = "rgb(109, 128, 155, 0.7)", ft = "80px", dt = "60px", pt = "40px",
            ht = "40px", mt = "30px", gt = "20px", yt = "20px", vt = "10px", bt = "575px", wt = "768px", St = {
                mobileWidht: "(max-width: ".concat(bt, ")"),
                tabletWidht: "(max-width: ".concat(wt, ")"),
                mobileHeight: "(max-height: ".concat(bt, ")"),
                tabletHeight: "(max-height: ".concat(wt, ")"),
                laptopWeight: "(max-width: ".concat("1320px", ")")
            },
            xt = it.p(Et || (lt = ["\n  font-size: ", ";\n  text-align: ", ";\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n"], ut = ["\n  font-size: ", ";\n  text-align: ", ";\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n"], Object.defineProperty ? Object.defineProperty(lt, "raw", {value: ut}) : lt.raw = ut, Et = lt), ht, (function (e) {
                return e.textAlign
            }), St.tabletWidht, mt, St.tabletHeight, mt, St.mobileWidht, gt, St.mobileHeight, gt);
        const kt = function (t) {
            var n = t.children, r = t.textAlign;
            return e.createElement(xt, {textAlign: r}, n)
        };
        var Et, Ct = it.div(Ot || (Ot = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  padding: 50px;\n  margin: 20px;\n  width: ", ";\n  border: 1px solid ", ";\n  border-radius: 10px;\n  background-color: ", ";\n  @media ", " {\n    padding: 20px;\n  }\n  @media ", " {\n    padding: 20px;\n  }\n"], ["\n  padding: 50px;\n  margin: 20px;\n  width: ", ";\n  border: 1px solid ", ";\n  border-radius: 10px;\n  background-color: ", ";\n  @media ", " {\n    padding: 20px;\n  }\n  @media ", " {\n    padding: 20px;\n  }\n"])), (function (e) {
            return e.width ? e.width + "px" : ""
        }), st, ct, St.mobileWidht, St.mobileHeight);
        const Mt = function (t) {
            var n = t.children, r = t.width;
            return e.createElement(Ct, {width: r}, n)
        };
        var Ot, Nt = it.div(Pt || (Pt = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  @media ", " {\n    flex-wrap: wrap;\n  }\n  @media ", " {\n    height: auto;\n  }\n  @media ", " {\n    height: auto;\n  }\n"], ["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  @media ", " {\n    flex-wrap: wrap;\n  }\n  @media ", " {\n    height: auto;\n  }\n  @media ", " {\n    height: auto;\n  }\n"])), St.laptopWeight, St.mobileWidht, St.tabletHeight);
        const Dt = function (t) {
            var n = t.children;
            return e.createElement(Nt, null, n)
        };
        var Pt, zt = function () {
            function e(e, t, n, r, o) {
                var a = this;
                this.img = new Image, this.img.src = "miss" === o ? "./public/assets/water2.png" : "./public/assets/explosion.png", this.curFrame = 0, this.cellSize = r, this.y = e, this.x = t, this.ctx = n, this.totalFrames = 6, this.img.onload = function () {
                    a.drawLogic(0, 3 * a.totalFrames)
                }
            }

            return e.prototype.inPixels = function (e) {
                return e * this.cellSize
            }, e.prototype.drawLogic = function (e, t) {
                var n = this, r = e, o = t, a = setInterval((function () {
                    n.draw(r++), 0 == --o && clearInterval(a)
                }), 50)
            }, e.prototype.draw = function (e) {
                this.ctx.clearRect(this.inPixels(this.x), this.inPixels(this.y), this.cellSize, this.cellSize), this.ctx.drawImage(this.img, this.img.width / 6 * e, 0, this.img.width / 6, this.img.height, this.inPixels(this.x) || 0, this.inPixels(this.y) || 0, this.cellSize, this.cellSize)
            }, Object.defineProperty(e.prototype, "imgObj", {
                get: function () {
                    return this.img
                }, enumerable: !1, configurable: !0
            }), e.prototype.incCurFrame = function () {
                this.curFrame = this.curFrame + 1 > this.totalFrames ? 0 : this.curFrame + 1
            }, e
        }();
        const jt = zt;
        var At = function () {
            var e = function (t, n) {
                return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, e(t, n)
            };
            return function (t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(), It = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t, "canvas") || this;
                return o.node.width = n, o.node.height = r, o.hashedCells = new Map, o.ctx = o.node.getContext("2d"), o.board = new Array(10).fill(new Array(10).fill(0)), o.spriteMatrix = new j(o.board, o.ctx), o.node.onclick = function (e) {
                    return o.onClickSprite(o.spriteMatrix.getCursorPosition(e, o.node))
                }, o
            }

            return At(t, e), t.prototype.upDateOccupied = function (e) {
                new jt(+e.position.y, +e.position.x, this.ctx, this.spriteMatrix.cellSize, e.status)
            }, t
        }(M), Tt = function (t) {
            var n = (0, e.useRef)(null), r = p((function (e) {
                return e.boardData.cellSize
            })), o = p((function (e) {
                return e.boardData.cellsInRow
            })), a = p((function (e) {
                return e.boardData.ourOccupiedData
            })), i = p((function (e) {
                return e.boardData.enemyOccupiedData
            })), l = "enemy" === t.player ? i : a;
            (0, e.useEffect)((function () {
                null == s || s.upDateOccupied(l)
            }), [l]);
            var u = (0, e.useState)(null), s = u[0], c = u[1];
            return (0, e.useEffect)((function () {
                var e = new It(n.current, r * o, r * o);
                e.onClickSprite = function (e) {
                    return t.onClick(e)
                }, c(e)
            }), []), e.createElement("div", {style: {position: "absolute", top: "0"}, ref: n})
        };

        function Lt(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function (e) {
                return "'" + e + "'"
            })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
        }

        function _t(e) {
            return !!e && !!e[En]
        }

        function Rt(e) {
            var t;
            return !!e && (function (e) {
                if (!e || "object" != typeof e) return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t) return !0;
                var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return n === Object || "function" == typeof n && Function.toString.call(n) === Cn
            }(e) || Array.isArray(e) || !!e[kn] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[kn]) || Ht(e) || Vt(e))
        }

        function Ft(e, t, n) {
            void 0 === n && (n = !1), 0 === Ut(e) ? (n ? Object.keys : Mn)(e).forEach((function (r) {
                n && "symbol" == typeof r || t(r, e[r], e)
            })) : e.forEach((function (n, r) {
                return t(r, n, e)
            }))
        }

        function Ut(e) {
            var t = e[En];
            return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Ht(e) ? 2 : Vt(e) ? 3 : 0
        }

        function Qt(e, t) {
            return 2 === Ut(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }

        function Bt(e, t, n) {
            var r = Ut(e);
            2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : e[t] = n
        }

        function Wt(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }

        function Ht(e) {
            return bn && e instanceof Map
        }

        function Vt(e) {
            return wn && e instanceof Set
        }

        function $t(e) {
            return e.o || e.t
        }

        function Yt(e) {
            if (Array.isArray(e)) return Array.prototype.slice.call(e);
            var t = On(e);
            delete t[En];
            for (var n = Mn(t), r = 0; r < n.length; r++) {
                var o = n[r], a = t[o];
                !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[o] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: a.enumerable,
                    value: e[o]
                })
            }
            return Object.create(Object.getPrototypeOf(e), t)
        }

        function Gt(e, t) {
            return void 0 === t && (t = !1), Jt(e) || _t(e) || !Rt(e) || (Ut(e) > 1 && (e.set = e.add = e.clear = e.delete = Zt), Object.freeze(e), t && Ft(e, (function (e, t) {
                return Gt(t, !0)
            }), !0)), e
        }

        function Zt() {
            Lt(2)
        }

        function Jt(e) {
            return null == e || "object" != typeof e || Object.isFrozen(e)
        }

        function Kt(e) {
            var t = Nn[e];
            return t || Lt(18, e), t
        }

        function qt() {
            return yn
        }

        function Xt(e, t) {
            t && (Kt("Patches"), e.u = [], e.s = [], e.v = t)
        }

        function en(e) {
            tn(e), e.p.forEach(rn), e.p = null
        }

        function tn(e) {
            e === yn && (yn = e.l)
        }

        function nn(e) {
            return yn = {p: [], l: yn, h: e, m: !0, _: 0}
        }

        function rn(e) {
            var t = e[En];
            0 === t.i || 1 === t.i ? t.j() : t.O = !0
        }

        function on(e, t) {
            t._ = t.p.length;
            var n = t.p[0], r = void 0 !== e && e !== n;
            return t.h.g || Kt("ES5").S(t, e, r), r ? (n[En].P && (en(t), Lt(4)), Rt(e) && (e = an(t, e), t.l || un(t, e)), t.u && Kt("Patches").M(n[En].t, e, t.u, t.s)) : e = an(t, n, []), en(t), t.u && t.v(t.u, t.s), e !== xn ? e : void 0
        }

        function an(e, t, n) {
            if (Jt(t)) return t;
            var r = t[En];
            if (!r) return Ft(t, (function (o, a) {
                return ln(e, r, t, o, a, n)
            }), !0), t;
            if (r.A !== e) return t;
            if (!r.P) return un(e, r.t, !0), r.t;
            if (!r.I) {
                r.I = !0, r.A._--;
                var o = 4 === r.i || 5 === r.i ? r.o = Yt(r.k) : r.o;
                Ft(3 === r.i ? new Set(o) : o, (function (t, a) {
                    return ln(e, r, o, t, a, n)
                })), un(e, o, !1), n && e.u && Kt("Patches").N(r, n, e.u, e.s)
            }
            return r.o
        }

        function ln(e, t, n, r, o, a) {
            if (_t(o)) {
                var i = an(e, o, a && t && 3 !== t.i && !Qt(t.R, r) ? a.concat(r) : void 0);
                if (Bt(n, r, i), !_t(i)) return;
                e.m = !1
            }
            if (Rt(o) && !Jt(o)) {
                if (!e.h.D && e._ < 1) return;
                an(e, o), t && t.A.l || un(e, o)
            }
        }

        function un(e, t, n) {
            void 0 === n && (n = !1), e.h.D && e.m && Gt(t, n)
        }

        function sn(e, t) {
            var n = e[En];
            return (n ? $t(n) : e)[t]
        }

        function cn(e, t) {
            if (t in e) for (var n = Object.getPrototypeOf(e); n;) {
                var r = Object.getOwnPropertyDescriptor(n, t);
                if (r) return r;
                n = Object.getPrototypeOf(n)
            }
        }

        function fn(e) {
            e.P || (e.P = !0, e.l && fn(e.l))
        }

        function dn(e) {
            e.o || (e.o = Yt(e.t))
        }

        function pn(e, t, n) {
            var r = Ht(t) ? Kt("MapSet").F(t, n) : Vt(t) ? Kt("MapSet").T(t, n) : e.g ? function (e, t) {
                var n = Array.isArray(e), r = {
                    i: n ? 1 : 0,
                    A: t ? t.A : qt(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: t,
                    t: e,
                    k: null,
                    o: null,
                    j: null,
                    C: !1
                }, o = r, a = Dn;
                n && (o = [r], a = Pn);
                var i = Proxy.revocable(o, a), l = i.revoke, u = i.proxy;
                return r.k = u, r.j = l, u
            }(t, n) : Kt("ES5").J(t, n);
            return (n ? n.A : qt()).p.push(r), r
        }

        function hn(e) {
            return _t(e) || Lt(22, e), function e(t) {
                if (!Rt(t)) return t;
                var n, r = t[En], o = Ut(t);
                if (r) {
                    if (!r.P && (r.i < 4 || !Kt("ES5").K(r))) return r.t;
                    r.I = !0, n = mn(t, o), r.I = !1
                } else n = mn(t, o);
                return Ft(n, (function (t, o) {
                    r && function (e, t) {
                        return 2 === Ut(e) ? e.get(t) : e[t]
                    }(r.t, t) === o || Bt(n, t, e(o))
                })), 3 === o ? new Set(n) : n
            }(e)
        }

        function mn(e, t) {
            switch (t) {
                case 2:
                    return new Map(e);
                case 3:
                    return Array.from(e)
            }
            return Yt(e)
        }

        var gn, yn, vn = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), bn = "undefined" != typeof Map,
            wn = "undefined" != typeof Set,
            Sn = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
            xn = vn ? Symbol.for("immer-nothing") : ((gn = {})["immer-nothing"] = !0, gn),
            kn = vn ? Symbol.for("immer-draftable") : "__$immer_draftable",
            En = vn ? Symbol.for("immer-state") : "__$immer_state",
            Cn = ("undefined" != typeof Symbol && Symbol.iterator, "" + Object.prototype.constructor),
            Mn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : Object.getOwnPropertyNames, On = Object.getOwnPropertyDescriptors || function (e) {
                var t = {};
                return Mn(e).forEach((function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n)
                })), t
            }, Nn = {}, Dn = {
                get: function (e, t) {
                    if (t === En) return e;
                    var n = $t(e);
                    if (!Qt(n, t)) return function (e, t, n) {
                        var r, o = cn(t, n);
                        return o ? "value" in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k) : void 0
                    }(e, n, t);
                    var r = n[t];
                    return e.I || !Rt(r) ? r : r === sn(e.t, t) ? (dn(e), e.o[t] = pn(e.A.h, r, e)) : r
                }, has: function (e, t) {
                    return t in $t(e)
                }, ownKeys: function (e) {
                    return Reflect.ownKeys($t(e))
                }, set: function (e, t, n) {
                    var r = cn($t(e), t);
                    if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
                    if (!e.P) {
                        var o = sn($t(e), t), a = null == o ? void 0 : o[En];
                        if (a && a.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                        if (Wt(n, o) && (void 0 !== n || Qt(e.t, t))) return !0;
                        dn(e), fn(e)
                    }
                    return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
                }, deleteProperty: function (e, t) {
                    return void 0 !== sn(e.t, t) || t in e.t ? (e.R[t] = !1, dn(e), fn(e)) : delete e.R[t], e.o && delete e.o[t], !0
                }, getOwnPropertyDescriptor: function (e, t) {
                    var n = $t(e), r = Reflect.getOwnPropertyDescriptor(n, t);
                    return r ? {
                        writable: !0,
                        configurable: 1 !== e.i || "length" !== t,
                        enumerable: r.enumerable,
                        value: n[t]
                    } : r
                }, defineProperty: function () {
                    Lt(11)
                }, getPrototypeOf: function (e) {
                    return Object.getPrototypeOf(e.t)
                }, setPrototypeOf: function () {
                    Lt(12)
                }
            }, Pn = {};
        Ft(Dn, (function (e, t) {
            Pn[e] = function () {
                return arguments[0] = arguments[0][0], t.apply(this, arguments)
            }
        })), Pn.deleteProperty = function (e, t) {
            return Pn.set.call(this, e, t, void 0)
        }, Pn.set = function (e, t, n) {
            return Dn.set.call(this, e[0], t, n, e[0])
        };
        var zn = function () {
            function e(e) {
                var t = this;
                this.g = Sn, this.D = !0, this.produce = function (e, n, r) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var o = n;
                        n = e;
                        var a = t;
                        return function (e) {
                            var t = this;
                            void 0 === e && (e = o);
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) i[l - 1] = arguments[l];
                            return a.produce(e, (function (e) {
                                var r;
                                return (r = n).call.apply(r, [t, e].concat(i))
                            }))
                        }
                    }
                    var i;
                    if ("function" != typeof n && Lt(6), void 0 !== r && "function" != typeof r && Lt(7), Rt(e)) {
                        var l = nn(t), u = pn(t, e, void 0), s = !0;
                        try {
                            i = n(u), s = !1
                        } finally {
                            s ? en(l) : tn(l)
                        }
                        return "undefined" != typeof Promise && i instanceof Promise ? i.then((function (e) {
                            return Xt(l, r), on(e, l)
                        }), (function (e) {
                            throw en(l), e
                        })) : (Xt(l, r), on(i, l))
                    }
                    if (!e || "object" != typeof e) {
                        if (void 0 === (i = n(e)) && (i = e), i === xn && (i = void 0), t.D && Gt(i, !0), r) {
                            var c = [], f = [];
                            Kt("Patches").M(e, i, c, f), r(c, f)
                        }
                        return i
                    }
                    Lt(21, e)
                }, this.produceWithPatches = function (e, n) {
                    if ("function" == typeof e) return function (n) {
                        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                        return t.produceWithPatches(n, (function (t) {
                            return e.apply(void 0, [t].concat(o))
                        }))
                    };
                    var r, o, a = t.produce(e, n, (function (e, t) {
                        r = e, o = t
                    }));
                    return "undefined" != typeof Promise && a instanceof Promise ? a.then((function (e) {
                        return [e, r, o]
                    })) : [a, r, o]
                }, "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }

            var t = e.prototype;
            return t.createDraft = function (e) {
                Rt(e) || Lt(8), _t(e) && (e = hn(e));
                var t = nn(this), n = pn(this, e, void 0);
                return n[En].C = !0, tn(t), n
            }, t.finishDraft = function (e, t) {
                var n = (e && e[En]).A;
                return Xt(n, t), on(void 0, n)
            }, t.setAutoFreeze = function (e) {
                this.D = e
            }, t.setUseProxies = function (e) {
                e && !Sn && Lt(20), this.g = e
            }, t.applyPatches = function (e, t) {
                var n;
                for (n = t.length - 1; n >= 0; n--) {
                    var r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var o = Kt("Patches").$;
                return _t(e) ? o(e, t) : this.produce(e, (function (e) {
                    return o(e, t)
                }))
            }, e
        }(), jn = new zn, An = jn.produce;
        jn.produceWithPatches.bind(jn), jn.setAutoFreeze.bind(jn), jn.setUseProxies.bind(jn), jn.applyPatches.bind(jn), jn.createDraft.bind(jn), jn.finishDraft.bind(jn);
        const In = An;

        function Tn(e) {
            return Tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Tn(e)
        }

        function Ln(e, t, n) {
            return (t = function (e) {
                var t = function (e, t) {
                    if ("object" !== Tn(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" !== Tn(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === Tn(t) ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function _n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Rn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _n(Object(n), !0).forEach((function (t) {
                    Ln(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _n(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Fn(e) {
            return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
        }

        var Un = "function" == typeof Symbol && Symbol.observable || "@@observable", Qn = function () {
            return Math.random().toString(36).substring(7).split("").join(".")
        }, Bn = {
            INIT: "@@redux/INIT" + Qn(), REPLACE: "@@redux/REPLACE" + Qn(), PROBE_UNKNOWN_ACTION: function () {
                return "@@redux/PROBE_UNKNOWN_ACTION" + Qn()
            }
        };

        function Wn(e) {
            if ("object" != typeof e || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }

        function Hn(e, t, n) {
            var r;
            if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(Fn(0));
            if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                if ("function" != typeof n) throw new Error(Fn(1));
                return n(Hn)(e, t)
            }
            if ("function" != typeof e) throw new Error(Fn(2));
            var o = e, a = t, i = [], l = i, u = !1;

            function s() {
                l === i && (l = i.slice())
            }

            function c() {
                if (u) throw new Error(Fn(3));
                return a
            }

            function f(e) {
                if ("function" != typeof e) throw new Error(Fn(4));
                if (u) throw new Error(Fn(5));
                var t = !0;
                return s(), l.push(e), function () {
                    if (t) {
                        if (u) throw new Error(Fn(6));
                        t = !1, s();
                        var n = l.indexOf(e);
                        l.splice(n, 1), i = null
                    }
                }
            }

            function d(e) {
                if (!Wn(e)) throw new Error(Fn(7));
                if (void 0 === e.type) throw new Error(Fn(8));
                if (u) throw new Error(Fn(9));
                try {
                    u = !0, a = o(a, e)
                } finally {
                    u = !1
                }
                for (var t = i = l, n = 0; n < t.length; n++) (0, t[n])();
                return e
            }

            function p(e) {
                if ("function" != typeof e) throw new Error(Fn(10));
                o = e, d({type: Bn.REPLACE})
            }

            function h() {
                var e, t = f;
                return (e = {
                    subscribe: function (e) {
                        if ("object" != typeof e || null === e) throw new Error(Fn(11));

                        function n() {
                            e.next && e.next(c())
                        }

                        return n(), {unsubscribe: t(n)}
                    }
                })[Un] = function () {
                    return this
                }, e
            }

            return d({type: Bn.INIT}), (r = {dispatch: d, subscribe: f, getState: c, replaceReducer: p})[Un] = h, r
        }

        function Vn() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return 0 === t.length ? function (e) {
                return e
            } : 1 === t.length ? t[0] : t.reduce((function (e, t) {
                return function () {
                    return e(t.apply(void 0, arguments))
                }
            }))
        }

        function $n() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function (e) {
                return function () {
                    var n = e.apply(void 0, arguments), r = function () {
                        throw new Error(Fn(15))
                    }, o = {
                        getState: n.getState, dispatch: function () {
                            return r.apply(void 0, arguments)
                        }
                    }, a = t.map((function (e) {
                        return e(o)
                    }));
                    return r = Vn.apply(void 0, a)(n.dispatch), Rn(Rn({}, n), {}, {dispatch: r})
                }
            }
        }

        function Yn(e) {
            return function (t) {
                var n = t.dispatch, r = t.getState;
                return function (t) {
                    return function (o) {
                        return "function" == typeof o ? o(n, r, e) : t(o)
                    }
                }
            }
        }

        var Gn = Yn();
        Gn.withExtraArgument = Yn;
        const Zn = Gn;
        var Jn = function () {
                var e = function (t, n) {
                    return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, e(t, n)
                };
                return function (t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function r() {
                        this.constructor = t
                    }

                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(), Kn = function (e, t) {
                for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                return e
            }, qn = Object.defineProperty, Xn = Object.defineProperties, er = Object.getOwnPropertyDescriptors,
            tr = Object.getOwnPropertySymbols, nr = Object.prototype.hasOwnProperty,
            rr = Object.prototype.propertyIsEnumerable, or = function (e, t, n) {
                return t in e ? qn(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n
            }, ar = function (e, t) {
                for (var n in t || (t = {})) nr.call(t, n) && or(e, n, t[n]);
                if (tr) for (var r = 0, o = tr(t); r < o.length; r++) n = o[r], rr.call(t, n) && or(e, n, t[n]);
                return e
            }, ir = function (e, t) {
                return Xn(e, er(t))
            },
            lr = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
                if (0 !== arguments.length) return "object" == typeof arguments[0] ? Vn : Vn.apply(null, arguments)
            };
        "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
        var ur = function (e) {
            function t() {
                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                var o = e.apply(this, n) || this;
                return Object.setPrototypeOf(o, t.prototype), o
            }

            return Jn(t, e), Object.defineProperty(t, Symbol.species, {
                get: function () {
                    return t
                }, enumerable: !1, configurable: !0
            }), t.prototype.concat = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return e.prototype.concat.apply(this, t)
            }, t.prototype.prepend = function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, Kn([void 0], e[0].concat(this)))) : new (t.bind.apply(t, Kn([void 0], e.concat(this))))
            }, t
        }(Array);

        function sr(e) {
            return Rt(e) ? In(e, (function () {
            })) : e
        }

        function cr(e, t) {
            function n() {
                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                if (t) {
                    var o = t.apply(void 0, n);
                    if (!o) throw new Error("prepareAction did not return an object");
                    return ar(ar({
                        type: e,
                        payload: o.payload
                    }, "meta" in o && {meta: o.meta}), "error" in o && {error: o.error})
                }
                return {type: e, payload: n[0]}
            }

            return n.toString = function () {
                return "" + e
            }, n.type = e, n.match = function (t) {
                return t.type === e
            }, n
        }

        function fr(e) {
            var t, n = {}, r = [], o = {
                addCase: function (e, t) {
                    var r = "string" == typeof e ? e : e.type;
                    if (r in n) throw new Error("addCase cannot be called with two reducers for the same action type");
                    return n[r] = t, o
                }, addMatcher: function (e, t) {
                    return r.push({matcher: e, reducer: t}), o
                }, addDefaultCase: function (e) {
                    return t = e, o
                }
            };
            return e(o), [n, r, t]
        }

        function dr(e) {
            var t = e.name;
            if (!t) throw new Error("`name` is a required option for createSlice");
            var n, r = "function" == typeof e.initialState ? e.initialState : sr(e.initialState), o = e.reducers || {},
                a = Object.keys(o), i = {}, l = {}, u = {};

            function s() {
                var t = "function" == typeof e.extraReducers ? fr(e.extraReducers) : [e.extraReducers], n = t[0],
                    o = void 0 === n ? {} : n, a = t[1], i = void 0 === a ? [] : a, u = t[2],
                    s = void 0 === u ? void 0 : u, c = ar(ar({}, o), l);
                return function (e, t, n, r) {
                    void 0 === n && (n = []);
                    var o, a = fr(t), i = a[0], l = a[1], u = a[2];
                    if (function (e) {
                        return "function" == typeof e
                    }(e)) o = function () {
                        return sr(e())
                    }; else {
                        var s = sr(e);
                        o = function () {
                            return s
                        }
                    }

                    function c(e, t) {
                        void 0 === e && (e = o());
                        var n = Kn([i[t.type]], l.filter((function (e) {
                            return (0, e.matcher)(t)
                        })).map((function (e) {
                            return e.reducer
                        })));
                        return 0 === n.filter((function (e) {
                            return !!e
                        })).length && (n = [u]), n.reduce((function (e, n) {
                            if (n) {
                                var r;
                                if (_t(e)) return void 0 === (r = n(e, t)) ? e : r;
                                if (Rt(e)) return In(e, (function (e) {
                                    return n(e, t)
                                }));
                                if (void 0 === (r = n(e, t))) {
                                    if (null === e) return e;
                                    throw Error("A case reducer on a non-draftable value must not return undefined")
                                }
                                return r
                            }
                            return e
                        }), e)
                    }

                    return c.getInitialState = o, c
                }(r, (function (e) {
                    for (var t in c) e.addCase(t, c[t]);
                    for (var n = 0, r = i; n < r.length; n++) {
                        var o = r[n];
                        e.addMatcher(o.matcher, o.reducer)
                    }
                    s && e.addDefaultCase(s)
                }))
            }

            return a.forEach((function (e) {
                var n, r, a = o[e], s = t + "/" + e;
                "reducer" in a ? (n = a.reducer, r = a.prepare) : n = a, i[e] = n, l[s] = n, u[e] = r ? cr(s, r) : cr(s)
            })), {
                name: t, reducer: function (e, t) {
                    return n || (n = s()), n(e, t)
                }, actions: u, caseReducers: i, getInitialState: function () {
                    return n || (n = s()), n.getInitialState()
                }
            }
        }

        var pr = ["name", "message", "stack", "code"], hr = function (e, t) {
            this.payload = e, this.meta = t
        }, mr = function (e, t) {
            this.payload = e, this.meta = t
        }, gr = function (e) {
            if ("object" == typeof e && null !== e) {
                for (var t = {}, n = 0, r = pr; n < r.length; n++) {
                    var o = r[n];
                    "string" == typeof e[o] && (t[o] = e[o])
                }
                return t
            }
            return {message: String(e)}
        };

        function yr(e) {
            if (e.meta && e.meta.rejectedWithValue) throw e.payload;
            if (e.error) throw e.error;
            return e.payload
        }

        !function () {
            function e(e, t, n) {
                var r = cr(e + "/fulfilled", (function (e, t, n, r) {
                    return {payload: e, meta: ir(ar({}, r || {}), {arg: n, requestId: t, requestStatus: "fulfilled"})}
                })), o = cr(e + "/pending", (function (e, t, n) {
                    return {
                        payload: void 0,
                        meta: ir(ar({}, n || {}), {arg: t, requestId: e, requestStatus: "pending"})
                    }
                })), a = cr(e + "/rejected", (function (e, t, r, o, a) {
                    return {
                        payload: o,
                        error: (n && n.serializeError || gr)(e || "Rejected"),
                        meta: ir(ar({}, a || {}), {
                            arg: r,
                            requestId: t,
                            rejectedWithValue: !!o,
                            requestStatus: "rejected",
                            aborted: "AbortError" === (null == e ? void 0 : e.name),
                            condition: "ConditionError" === (null == e ? void 0 : e.name)
                        })
                    }
                })), i = "undefined" != typeof AbortController ? AbortController : function () {
                    function e() {
                        this.signal = {
                            aborted: !1, addEventListener: function () {
                            }, dispatchEvent: function () {
                                return !1
                            }, onabort: function () {
                            }, removeEventListener: function () {
                            }, reason: void 0, throwIfAborted: function () {
                            }
                        }
                    }

                    return e.prototype.abort = function () {
                    }, e
                }();
                return Object.assign((function (e) {
                    return function (l, u, s) {
                        var c, f = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : function (e) {
                            void 0 === e && (e = 21);
                            for (var t = "", n = e; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64 * Math.random() | 0];
                            return t
                        }(), d = new i;

                        function p(e) {
                            c = e, d.abort()
                        }

                        var h = function () {
                            return i = this, h = null, m = function () {
                                var i, h, m, g, y, v;
                                return function (e, t) {
                                    var n, r, o, a, i = {
                                        label: 0, sent: function () {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        }, trys: [], ops: []
                                    };
                                    return a = {
                                        next: l(0),
                                        throw: l(1),
                                        return: l(2)
                                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                                        return this
                                    }), a;

                                    function l(a) {
                                        return function (l) {
                                            return function (a) {
                                                if (n) throw new TypeError("Generator is already executing.");
                                                for (; i;) try {
                                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = a;
                                                            break;
                                                        case 4:
                                                            return i.label++, {value: a[1], done: !1};
                                                        case 5:
                                                            i.label++, r = a[1], a = [0];
                                                            continue;
                                                        case 7:
                                                            a = i.ops.pop(), i.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                                i = 0;
                                                                continue
                                                            }
                                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                                i.label = a[1];
                                                                break
                                                            }
                                                            if (6 === a[0] && i.label < o[1]) {
                                                                i.label = o[1], o = a;
                                                                break
                                                            }
                                                            if (o && i.label < o[2]) {
                                                                i.label = o[2], i.ops.push(a);
                                                                break
                                                            }
                                                            o[2] && i.ops.pop(), i.trys.pop();
                                                            continue
                                                    }
                                                    a = t.call(e, i)
                                                } catch (e) {
                                                    a = [6, e], r = 0
                                                } finally {
                                                    n = o = 0
                                                }
                                                if (5 & a[0]) throw a[1];
                                                return {value: a[0] ? a[1] : void 0, done: !0}
                                            }([a, l])
                                        }
                                    }
                                }(this, (function (b) {
                                    switch (b.label) {
                                        case 0:
                                            return b.trys.push([0, 4, , 5]), null === (w = g = null == (i = null == n ? void 0 : n.condition) ? void 0 : i.call(n, e, {
                                                getState: u,
                                                extra: s
                                            })) || "object" != typeof w || "function" != typeof w.then ? [3, 2] : [4, g];
                                        case 1:
                                            g = b.sent(), b.label = 2;
                                        case 2:
                                            if (!1 === g || d.signal.aborted) throw{
                                                name: "ConditionError",
                                                message: "Aborted due to condition callback returning false."
                                            };
                                            return y = new Promise((function (e, t) {
                                                return d.signal.addEventListener("abort", (function () {
                                                    return t({name: "AbortError", message: c || "Aborted"})
                                                }))
                                            })), l(o(f, e, null == (h = null == n ? void 0 : n.getPendingMeta) ? void 0 : h.call(n, {
                                                requestId: f,
                                                arg: e
                                            }, {
                                                getState: u,
                                                extra: s
                                            }))), [4, Promise.race([y, Promise.resolve(t(e, {
                                                dispatch: l,
                                                getState: u,
                                                extra: s,
                                                requestId: f,
                                                signal: d.signal,
                                                abort: p,
                                                rejectWithValue: function (e, t) {
                                                    return new hr(e, t)
                                                },
                                                fulfillWithValue: function (e, t) {
                                                    return new mr(e, t)
                                                }
                                            })).then((function (t) {
                                                if (t instanceof hr) throw t;
                                                return t instanceof mr ? r(t.payload, f, e, t.meta) : r(t, f, e)
                                            }))])];
                                        case 3:
                                            return m = b.sent(), [3, 5];
                                        case 4:
                                            return v = b.sent(), m = v instanceof hr ? a(null, f, e, v.payload, v.meta) : a(v, f, e), [3, 5];
                                        case 5:
                                            return n && !n.dispatchConditionRejection && a.match(m) && m.meta.condition || l(m), [2, m]
                                    }
                                    var w
                                }))
                            }, new Promise((function (e, t) {
                                var n = function (e) {
                                    try {
                                        o(m.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }, r = function (e) {
                                    try {
                                        o(m.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }, o = function (t) {
                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r)
                                };
                                o((m = m.apply(i, h)).next())
                            }));
                            var i, h, m
                        }();
                        return Object.assign(h, {
                            abort: p, requestId: f, arg: e, unwrap: function () {
                                return h.then(yr)
                            }
                        })
                    }
                }), {pending: o, rejected: a, fulfilled: r, typePrefix: e})
            }

            e.withTypes = function () {
                return e
            }
        }(), Object.assign;
        var vr = "listenerMiddleware";
        cr(vr + "/add"), cr(vr + "/removeAll"), cr(vr + "/remove"), "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : void 0 !== n.g ? n.g : globalThis);

        function br(e) {
            return new Array(e).fill(new Array(e).fill(0))
        }

        "undefined" != typeof window && window.requestAnimationFrame && window.requestAnimationFrame, function () {
            function e(e, t) {
                var n = o[e];
                return n ? n.enumerable = t : o[e] = n = {
                    configurable: !0, enumerable: t, get: function () {
                        var t = this[En];
                        return Dn.get(t, e)
                    }, set: function (t) {
                        var n = this[En];
                        Dn.set(n, e, t)
                    }
                }, n
            }

            function t(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var o = e[t][En];
                    if (!o.P) switch (o.i) {
                        case 5:
                            r(o) && fn(o);
                            break;
                        case 4:
                            n(o) && fn(o)
                    }
                }
            }

            function n(e) {
                for (var t = e.t, n = e.k, r = Mn(n), o = r.length - 1; o >= 0; o--) {
                    var a = r[o];
                    if (a !== En) {
                        var i = t[a];
                        if (void 0 === i && !Qt(t, a)) return !0;
                        var l = n[a], u = l && l[En];
                        if (u ? u.t !== i : !Wt(l, i)) return !0
                    }
                }
                var s = !!t[En];
                return r.length !== Mn(t).length + (s ? 0 : 1)
            }

            function r(e) {
                var t = e.k;
                if (t.length !== e.t.length) return !0;
                var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                if (n && !n.get) return !0;
                for (var r = 0; r < t.length; r++) if (!t.hasOwnProperty(r)) return !0;
                return !1
            }

            var o = {};
            !function (e, t) {
                Nn[e] || (Nn[e] = t)
            }("ES5", {
                J: function (t, n) {
                    var r = Array.isArray(t), o = function (t, n) {
                        if (t) {
                            for (var r = Array(n.length), o = 0; o < n.length; o++) Object.defineProperty(r, "" + o, e(o, !0));
                            return r
                        }
                        var a = On(n);
                        delete a[En];
                        for (var i = Mn(a), l = 0; l < i.length; l++) {
                            var u = i[l];
                            a[u] = e(u, t || !!a[u].enumerable)
                        }
                        return Object.create(Object.getPrototypeOf(n), a)
                    }(r, t), a = {
                        i: r ? 5 : 4,
                        A: n ? n.A : qt(),
                        P: !1,
                        I: !1,
                        R: {},
                        l: n,
                        t,
                        k: o,
                        o: null,
                        O: !1,
                        C: !1
                    };
                    return Object.defineProperty(o, En, {value: a, writable: !0}), o
                }, S: function (e, n, o) {
                    o ? _t(n) && n[En].A === e && t(e.p) : (e.u && function e(t) {
                        if (t && "object" == typeof t) {
                            var n = t[En];
                            if (n) {
                                var o = n.t, a = n.k, i = n.R, l = n.i;
                                if (4 === l) Ft(a, (function (t) {
                                    t !== En && (void 0 !== o[t] || Qt(o, t) ? i[t] || e(a[t]) : (i[t] = !0, fn(n)))
                                })), Ft(o, (function (e) {
                                    void 0 !== a[e] || Qt(a, e) || (i[e] = !1, fn(n))
                                })); else if (5 === l) {
                                    if (r(n) && (fn(n), i.length = !0), a.length < o.length) for (var u = a.length; u < o.length; u++) i[u] = !1; else for (var s = o.length; s < a.length; s++) i[s] = !0;
                                    for (var c = Math.min(a.length, o.length), f = 0; f < c; f++) a.hasOwnProperty(f) || (i[f] = !0), void 0 === i[f] && e(a[f])
                                }
                            }
                        }
                    }(e.p[0]), t(e.p))
                }, K: function (e) {
                    return 4 === e.i ? n(e) : r(e)
                }
            })
        }();
        var wr = dr({
                name: "boardData",
                initialState: {
                    cellsInRow: 10,
                    cellSize: 30,
                    boardMatrix: br(10),
                    _moveAdded: !1,
                    _ckickAdded: !1,
                    enemyOccupiedData: null,
                    ourOccupiedData: null
                },
                reducers: {
                    ourOccupied: function (e, t) {
                        e.ourOccupiedData = t.payload
                    }, enemyOccupied: function (e, t) {
                        e.enemyOccupiedData = t.payload
                    }, fillAreaCells: function (e, t) {
                        t.payload.data.forEach((function (n) {
                            var r = n.split("-"), o = r[0], a = r[1];
                            e.boardMatrix[+o][+a] = t.payload.value
                        }))
                    }, fillCells: function (e, t) {
                        t.payload.data.forEach((function (n) {
                            var r = n.split("-"), o = r[0], a = r[1];
                            e.boardMatrix[+o][+a] = t.payload.value
                        }))
                    }, clearHovered: function (e, t) {
                        e.boardMatrix.map((function (e) {
                            return e.map((function (n, r) {
                                5 !== n && (e[r] = t.payload)
                            }))
                        }))
                    }, setMoveAdded: function (e) {
                        e._moveAdded = !0
                    }, clearMatrix: function (e) {
                        e.boardMatrix = br(10)
                    }
                }
            }), Sr = wr.actions, xr = wr.reducer, kr = Sr.fillCells, Er = Sr.clearHovered,
            Cr = (Sr.setMoveAdded, Sr.fillAreaCells), Mr = Sr.ourOccupied, Or = Sr.enemyOccupied, Nr = Sr.clearMatrix;
        const Dr = xr, Pr = function () {
            function e(e, t, n, r) {
                this.time = e, this.count = t, this.size = t, this.func = n, this.endTimer = r
            }

            return e.prototype.startTimer = function () {
                var e = this;
                this.count = this.size, this.timer = setInterval((function () {
                    e.func(), e.count--, e.count <= 0 && (e.stopTimer(), e.endTimer())
                }), this.time)
            }, e.prototype.stopTimer = function () {
                clearInterval(this.timer)
            }, e
        }();
        var zr = it.p(Ar || (Ar = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  font-size: ", ";\n  height: 25px;\n"], ["\n  font-size: ", ";\n  height: 25px;\n"])), yt);
        const jr = function (t) {
            var n = t.count, r = t.endTimer, o = t.startTimer, a = (0, e.useState)(n), i = a[0], l = a[1],
                u = (0, e.useState)(""), s = u[0], c = u[1], f = (0, e.useState)(new Pr(1e3, n, (function () {
                    l((function (e) {
                        return e - 1
                    }))
                }), (function () {
                    r()
                })))[0];
            return (0, e.useEffect)((function () {
                o ? (l(n), f.startTimer()) : (l(0), f.stopTimer())
            }), [o]), (0, e.useEffect)((function () {
                return function () {
                    return f.stopTimer()
                }
            }), []), (0, e.useEffect)((function () {
                c((function () {
                    return 0 === i ? "" : i > 9 ? "Time: 00:".concat(i) : "Time: 00:0".concat(i)
                }))
            }), [i]), e.createElement(e.Fragment, null, e.createElement(zr, null, s))
        };
        var Ar, Ir = dr({
            name: "timerData", initialState: {timer: !1}, reducers: {
                changeTimer: function (e, t) {
                    e.timer = t.payload.timer
                }
            }
        }), Tr = Ir.actions, Lr = Ir.reducer, _r = Tr.changeTimer;
        const Rr = Lr;
        var Fr, Ur, Qr = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            }, Br = it.div(Fr || (Fr = Qr(["\n  margin: 10px;\n"], ["\n  margin: 10px;\n"]))),
            Wr = it.div(Ur || (Ur = Qr(["\n  width: 300px;\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: ", ";\n"], ["\n  width: 300px;\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: ", ";\n"])), ct);

        function Hr(t) {
            var n = p((function (e) {
                return e.fieldsData.enemyOccupiedCell
            })), r = p((function (e) {
                return e.fieldsData.enemyField
            })), o = p((function (e) {
                return e.userData.idGames
            })), a = (0, e.useRef)(null), i = p((function (e) {
                return e.boardData.cellsInRow
            })), l = p((function (e) {
                return e.boardData.cellSize
            })), u = new I(r), s = k(), c = (0, e.useState)(null), f = c[0], d = c[1];
            return (0, e.useEffect)((function () {
                null == f || f.drawBoard(r), null == f || f.drawShotShips(r), s(Or(n))
            }), [r]), u.onGetClickedCell = function (e, n) {
                t.socket.attack(e, n, o[o.length - 1])
            }, (0, e.useEffect)((function () {
                var e = new D(a.current, i, i, l, t.shipsImages);
                e.drawScene(r), d(e)
            }), []), e.createElement(Br, null, e.createElement(Wr, null, e.createElement(kt, null, "Enemy Field")), e.createElement("div", {style: {position: "relative"}}, e.createElement("div", {ref: a}), e.createElement(Tt, {
                player: "enemy",
                onClick: function (e) {
                    u.onClick(e), s(_r({timer: !1}))
                }
            })))
        }

        function Vr(t) {
            var n = t.shipsImages, r = p((function (e) {
                return e.fieldsData.ourOccupiedCell
            })), o = p((function (e) {
                return e.fieldsData.ourField
            })), a = (0, e.useRef)(null), i = p((function (e) {
                return e.boardData.cellsInRow
            })), l = p((function (e) {
                return e.boardData.cellSize
            })), u = p((function (e) {
                return e.shipsData.shipsOnCanvas
            })), s = (0, e.useState)(null), c = s[0], f = s[1], d = k();
            return (0, e.useEffect)((function () {
                null == c || c.drawScene(o, u), d(Mr(r))
            }), [o]), (0, e.useEffect)((function () {
                var e = new D(a.current, i, i, l, n);
                e.drawScene(o, u), f(e)
            }), []), e.createElement(Br, null, e.createElement(Wr, null, e.createElement(kt, null, "Our Field")), e.createElement("div", {style: {position: "relative"}}, e.createElement("div", {ref: a}), e.createElement(Tt, {player: "our"})))
        }

        function $r(t) {
            var n = p((function (e) {
                return e.userData.isCurrentPlayer
            })), r = p((function (e) {
                return e.userData.idGames
            })), o = p((function (e) {
                return e.timerData.timer
            })), a = k();
            return e.createElement(Dt, null, e.createElement(Mt, {width: 310}, e.createElement(kt, null, n ? "Your Turn" : "Next player goes"), e.createElement(jr, {
                count: 15,
                endTimer: function () {
                    a(_r({timer: !1})), t.socket.randomAttack(r[r.length - 1])
                },
                startTimer: o
            })), e.createElement(e.Fragment, null, e.createElement(Vr, {shipsImages: t.shipsImages}), e.createElement(Hr, {
                shipsImages: t.shipsImages,
                socket: t.socket
            })))
        }

        var Yr = it.h1(Zr || (Zr = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  margin-bottom: 20px;\n  font-size: ", ";\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: ", ";\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    margin-bottom: 5px;\n    font-size: ", ";\n  }\n  @media ", " {\n    margin-bottom: 5px;\n    font-size: ", ";\n  }\n"], ["\n  margin-bottom: 20px;\n  font-size: ", ";\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: ", ";\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    margin-bottom: 5px;\n    font-size: ", ";\n  }\n  @media ", " {\n    margin-bottom: 5px;\n    font-size: ", ";\n  }\n"])), ft, (function (e) {
            return e.textAlign
        }), St.tabletWidht, dt, St.tabletHeight, dt, St.mobileWidht, pt, St.mobileHeight, pt);
        const Gr = function (t) {
            var n = t.children, r = t.textAlign;
            return e.createElement(Yr, {textAlign: r}, n)
        };
        var Zr, Jr, Kr, qr, Xr, eo = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            to = it.button(Jr || (Jr = eo(["\n  color: white;\n  background-color: ", ";\n  border: none;\n  transition: all 0.5s;\n  &:hover {\n    transform: scale(1.1);\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n"], ["\n  color: white;\n  background-color: ", ";\n  border: none;\n  transition: all 0.5s;\n  &:hover {\n    transform: scale(1.1);\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n"])), st, St.tabletWidht, mt, St.tabletHeight, mt, St.mobileWidht, gt, St.mobileHeight, gt),
            no = it(to)(Kr || (Kr = eo(["\n  display: block;\n  margin: 50px auto 0;\n  font-size: ", ";\n  padding: 10px 100px;\n  border-radius: 20px;\n  @media ", " {\n    padding: 10px 30px;\n    margin: 10px auto 0;\n    font-size: ", ";\n  }\n  @media ", " {\n    padding: 10px 30px;\n    margin: 10px auto 0;\n  }\n"], ["\n  display: block;\n  margin: 50px auto 0;\n  font-size: ", ";\n  padding: 10px 100px;\n  border-radius: 20px;\n  @media ", " {\n    padding: 10px 30px;\n    margin: 10px auto 0;\n    font-size: ", ";\n  }\n  @media ", " {\n    padding: 10px 30px;\n    margin: 10px auto 0;\n  }\n"])), ht, St.mobileWidht, gt, St.mobileHeight),
            ro = function (t) {
                var n = t.children, r = t.onClick;
                return e.createElement(no, {type: "submit", onClick: r}, n)
            },
            oo = it(to)(qr || (qr = eo(["\n  font-size: ", ";\n  padding: 10px 50px;\n  margin: 10px;\n  border-radius: 5px;\n"], ["\n  font-size: ", ";\n  padding: 10px 50px;\n  margin: 10px;\n  border-radius: 5px;\n"])), yt),
            ao = function (t) {
                var n = t.children, r = t.onClick;
                return e.createElement(oo, {type: "submit", onClick: r}, n)
            },
            io = it(to)(Xr || (Xr = eo(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"], ["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"]))),
            lo = function (t) {
                var n = t.children, r = t.onClick;
                return e.createElement(io, {type: "submit", onClick: r}, n)
            }, uo = it.input(co || (co = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            }(["\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: ", ";\n  padding: 5px 20px;\n  border: 1px soled ", ";\n  border-radius: 10px;\n  @media ", " {\n    width: 300px;\n    font-size: ", ";\n  }\n  @media ", " {\n    width: 300px;\n    font-size: ", ";\n  }\n  @media ", " {\n    width: 200px;\n    margin-top: 10px;\n    font-size: ", ";\n  }\n  @media ", " {\n    width: 200px;\n    margin-top: 10px;\n    font-size: ", ";\n  }\n"], ["\n  margin: 0 auto;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: ", ";\n  padding: 5px 20px;\n  border: 1px soled ", ";\n  border-radius: 10px;\n  @media ", " {\n    width: 300px;\n    font-size: ", ";\n  }\n  @media ", " {\n    width: 300px;\n    font-size: ", ";\n  }\n  @media ", " {\n    width: 200px;\n    margin-top: 10px;\n    font-size: ", ";\n  }\n  @media ", " {\n    width: 200px;\n    margin-top: 10px;\n    font-size: ", ";\n  }\n"])), ht, st, St.tabletWidht, mt, St.tabletHeight, mt, St.mobileWidht, gt, St.mobileHeight, gt);
        const so = function (t) {
            var n = t.placeHolder, r = t.value, o = t.handlerChange, a = t.type, i = void 0 === a ? "text" : a;
            return e.createElement(uo, {onChange: o, placeholder: n, value: r, type: i})
        };
        var co, fo = it.div(ho || (ho = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  position: absolute;\n  bottom: ", ";\n  left: 10px;\n  color: white;\n  background-color: red;\n  font-size: ", ';\n  padding: 5px;\n  border-radius: 5px;\n  opacity: 0.8;\n  &:after {\n    content: "";\n    position: absolute;\n    left: 10px;\n    bottom: -15px;\n    border: 10px solid transparent;\n    border-top: 10px solid red;\n  }\n  @media ', " {\n    bottom: ", ";\n    font-size: ", ";\n  }\n  @media ", " {\n    bottom: ", ";\n    font-size: ", ";\n  }\n"], ["\n  position: absolute;\n  bottom: ", ";\n  left: 10px;\n  color: white;\n  background-color: red;\n  font-size: ", ';\n  padding: 5px;\n  border-radius: 5px;\n  opacity: 0.8;\n  &:after {\n    content: "";\n    position: absolute;\n    left: 10px;\n    bottom: -15px;\n    border: 10px solid transparent;\n    border-top: 10px solid red;\n  }\n  @media ', " {\n    bottom: ", ";\n    font-size: ", ";\n  }\n  @media ", " {\n    bottom: ", ";\n    font-size: ", ";\n  }\n"])), (function (e) {
            return "name" === e.type ? "170px" : "50px"
        }), yt, St.mobileWidht, (function (e) {
            return "name" === e.type ? "125px" : "45px"
        }), vt, St.mobileHeight, (function (e) {
            return "name" === e.type ? "125px" : "45px"
        }), vt);
        const po = function (t) {
            var n = t.children, r = t.type;
            return e.createElement(fo, {type: r}, n)
        };
        var ho, mo = it.div(yo || (yo = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
        const go = function (t) {
            var n = t.socket, r = (0, e.useState)(""), o = r[0], a = r[1], i = (0, e.useState)(""), l = i[0], u = i[1],
                s = (0, e.useState)(!1), c = s[0], f = s[1], d = (0, e.useState)(""), h = d[0], m = d[1],
                g = (0, e.useState)("name"), y = g[0], v = g[1], b = p((function (e) {
                    return e.userData
                }));
            return (0, e.useEffect)((function () {
                f(b.error), v("name"), m(b.errorText)
            }), [b]), e.createElement(Dt, null, e.createElement(Mt, null, e.createElement(Gr, {textAlign: "center"}, "Battleship"), e.createElement(kt, {textAlign: "center"}, "Please, write your name"), e.createElement("form", null, e.createElement(mo, null, e.createElement(so, {
                handlerChange: function (e) {
                    a(e.target.value), f(!1)
                }, placeHolder: "login", value: o
            }), c ? e.createElement(po, {type: y}, h) : "", e.createElement(kt, {textAlign: "center"}, "Please, write your password"), e.createElement(so, {
                handlerChange: function (e) {
                    u(e.target.value), f(!1)
                }, placeHolder: "password", value: l, type: "password"
            })), e.createElement(ro, {
                onClick: function (e) {
                    e.preventDefault(), o.length < 5 ? (f(!0), v("name"), m("Minimum 5 characters")) : l.length < 5 ? (f(!0), v("password"), m("Minimum 5 characters")) : n.reg({
                        name: o,
                        password: l
                    })
                }
            }, "Submit"))))
        };
        var yo;

        function vo() {
            for (var e = [], t = 0; t < 10; t++) {
                for (var n = [], r = 0; r < 10; r++) n.push(0);
                e.push(n)
            }
            return e
        }

        var bo = dr({
                name: "userData",
                initialState: {name: "", index: -1, isCurrentPlayer: !1, winner: !1, idGames: [], error: !1, errorText: ""},
                reducers: {
                    addUserName: function (e, t) {
                        e.name = t.payload.name
                    }, addError: function (e, t) {
                        e.error = t.payload.error, e.errorText = t.payload.errorText
                    }, addUserIndex: function (e, t) {
                        e.index = t.payload.index
                    }, addIdGame: function (e, t) {
                        e.idGames.push(t.payload.idGame)
                    }, changeCurrentPlayer: function (e, t) {
                        e.isCurrentPlayer = t.payload.isCurrentPlayer
                    }, setWinner: function (e, t) {
                        e.winner = t.payload.winner
                    }
                }
            }), wo = bo.actions, So = bo.reducer, xo = wo.addUserName, ko = wo.addUserIndex, Eo = wo.addIdGame,
            Co = wo.changeCurrentPlayer, Mo = wo.setWinner, Oo = wo.addError;
        const No = So;
        var Do = dr({
            name: "winnerData", initialState: {winners: []}, reducers: {
                setWinners: function (e, t) {
                    e.winners = t.payload.winners
                }
            }
        }), Po = Do.actions, zo = Do.reducer, jo = Po.setWinners;
        const Ao = zo;
        var Io = dr({
            name: "roomsData", initialState: {data: []}, reducers: {
                setRooms: function (e, t) {
                    e.data = t.payload.data
                }
            }
        }), To = Io.actions, Lo = Io.reducer, _o = To.setRooms;
        const Ro = Lo;
        var Fo = dr({
            name: "pagesData", initialState: {page: "reg"}, reducers: {
                changePage: function (e, t) {
                    e.page = t.payload.page
                }
            }
        }), Uo = Fo.actions, Qo = Fo.reducer, Bo = Uo.changePage;
        const Wo = Qo;
        var Ho = dr({
            name: "fieldsData",
            initialState: {enemyField: vo(), ourField: vo(), enemyOccupiedCell: null, ourOccupiedCell: null},
            reducers: {
                addField: function (e, t) {
                    e.ourField = t.payload.field
                }, clearField: function (e) {
                    e.ourField = vo(), e.enemyField = vo()
                }, changeField: function (e, t) {
                    var n = t.payload, r = n.player, o = n.position, a = n.status;
                    e[r] || (e[r] = vo());
                    var i = e[r].slice().map((function (e, t) {
                        return e.map((function (e, n) {
                            return "killed" === a ? o.x === n && o.y === t ? 4 : e : "shot" === a ? o.x === n && o.y === t ? 3 : e : o.x === n && o.y === t ? 1 : e
                        }))
                    }));
                    "ourField" === r ? e.ourOccupiedCell = {
                        position: o,
                        status: a
                    } : e.enemyOccupiedCell = {position: o, status: a}, e[r] = i
                }
            }
        }), Vo = Ho.actions, $o = Ho.reducer, Yo = Vo.changeField, Go = Vo.addField, Zo = Vo.clearField;
        const Jo = $o;
        var Ko = function () {
            function e() {
                this.sound = {volume: .5, isSound: !0}, this.music = {
                    volume: .5,
                    isSound: !1
                }, this.missAudio = new Audio, this.missAudio.currentTime = 0, this.missAudio.src = "./public/assets/mp3/miss.mp3", this.killAudio = new Audio, this.killAudio.currentTime = 0, this.killAudio.src = "./public/assets/mp3/killed.mp3", this.shotAudio = new Audio, this.shotAudio.currentTime = 0, this.shotAudio.src = "./public/assets/mp3/shot.mp3", this.musicAudio = new Audio, this.musicAudio.currentTime = 0, this.musicAudio.src = "./public/assets/mp3/music.mp3"
            }

            return e.prototype.getSetting = function (e) {
                return "music" === e ? this.music : this.sound
            }, e.prototype.updateSetting = function (e, t) {
                "music" === e ? this.music = Object.assign(t) : this.sound = Object.assign(t), this.music.isSound ? this.playMusic() : this.musicAudio.pause()
            }, e.prototype.playAudio = function (e) {
                switch (e) {
                    case"shot":
                        this.shotShip();
                        break;
                    case"killed":
                        this.killShip();
                        break;
                    case"miss":
                        this.missShip()
                }
            }, e.prototype.killShip = function () {
                this.killAudio.currentTime = 0, !this.sound.isSound || this.killAudio.currentTime > 0 && !this.killAudio.paused && !this.killAudio.ended && this.killAudio.readyState > this.killAudio.HAVE_CURRENT_DATA || (this.killAudio.currentTime = 0, this.killAudio.volume = this.sound.volume, this.killAudio.play())
            }, e.prototype.shotShip = function () {
                this.shotAudio.currentTime = 0, !this.sound.isSound || this.shotAudio.currentTime > 0 && !this.shotAudio.paused && !this.shotAudio.ended && this.shotAudio.readyState > this.shotAudio.HAVE_CURRENT_DATA || (this.shotAudio.currentTime = 0, this.shotAudio.volume = this.sound.volume, this.shotAudio.play())
            }, e.prototype.missShip = function () {
                this.missAudio.currentTime = 0, !this.sound.isSound || this.missAudio.currentTime > 0 && !this.missAudio.paused && !this.missAudio.ended && this.missAudio.readyState > this.missAudio.HAVE_CURRENT_DATA || (this.missAudio.currentTime = 0, this.missAudio.volume = this.sound.volume, this.missAudio.play())
            }, e.prototype.playMusic = function () {
                var e = this;
                this.musicAudio.volume = this.music.volume, this.musicAudio.play(), this.musicAudio.onended = function () {
                    e.musicAudio.currentTime = 0, e.musicAudio.play()
                }
            }, e
        }();
        const qo = new Ko;
        var Xo;
        !function (e) {
            e[e.huge = 1] = "huge", e[e.large = 2] = "large", e[e.medium = 3] = "medium", e[e.small = 4] = "small"
        }(Xo || (Xo = {}));
        var ea = dr({
                name: "shipsData",
                initialState: {
                    activeShip: null,
                    isRotate: !1,
                    shipsOnCanvas: [],
                    shipsToPut: {huge: Xo.huge, large: Xo.large, medium: Xo.medium, small: Xo.small},
                    isAutoPut: !1
                },
                reducers: {
                    addShip: function (e, t) {
                        var n = JSON.parse(t.payload.ship);
                        e.shipsOnCanvas.push(n)
                    }, isRotateShip: function (e) {
                        e.isRotate = !e.isRotate
                    }, rotateInput: function (e, t) {
                        e.isRotate = t.payload
                    }, setActiveShip: function (e, t) {
                        e.activeShip = t.payload
                    }, setAutoPut: function (e) {
                        e.isAutoPut = !0
                    }, setDecShip: function (e, t) {
                        e.shipsToPut[t.payload] = e.shipsToPut[t.payload] - 1
                    }, randomRotate: function (e, t) {
                        e.isRotate = t.payload
                    }, cleanShips: function (e) {
                        e.shipsToPut = {
                            huge: Xo.huge,
                            large: Xo.large,
                            medium: Xo.medium,
                            small: Xo.small
                        }, e.isAutoPut = !1, e.shipsOnCanvas = [], e.activeShip = null
                    }, setShipsOnCanvas: function (e, t) {
                        e.shipsOnCanvas = t.payload
                    }
                }
            }), ta = ea.actions, na = ea.reducer, ra = ta.isRotateShip, oa = ta.addShip, aa = ta.setActiveShip,
            ia = ta.setAutoPut, la = ta.setDecShip, ua = (ta.randomRotate, ta.rotateInput),
            sa = (ta.setShipsOnCanvas, ta.cleanShips);
        const ca = na;
        var fa = function () {
            function e(e) {
                var t = e.dispatch, n = this;
                this.playerIdx = -1;
                var r = new WebSocket("ws://localhost:3000");
                this.webSocket = r, r.onmessage = function (e) {
                    var r = JSON.parse(e.data), o = r.data;
                    switch (console.log(r.type), r.type) {
                        case"turn":
                            var a = (u = JSON.parse(r.data).currentPlayer) === n.playerIdx;
                            t(Co({isCurrentPlayer: a})), t(_r({timer: a}));
                            break;
                        case"attack":
                            var i = JSON.parse(r.data), l = i.position, u = i.currentPlayer, s = i.status,
                                c = n.playerIdx === u ? "enemyField" : "ourField";
                            t(Yo({position: l, status: s, player: c})), qo.playAudio(s);
                            break;
                        case"start_game":
                            t(Bo({page: "gameField"})), t(Mo({winner: !1}));
                            var f = JSON.parse(r.data), d = f.ships, p = f.currentPlayerIndex, h = vo();
                            d.forEach((function (e) {
                                for (var t = 0; t < e.length; t++) e.direction ? h[e.position.y + t][e.position.x] = 2 : h[e.position.y][e.position.x + t] = 2
                            })), t(Go({field: h})), t(Co({isCurrentPlayer: p === n.playerIdx}));
                            break;
                        case"reg":
                            var m = JSON.parse(o), g = m.name, y = m.error, v = m.errorText;
                            y ? t(Oo({error: y, errorText: v})) : (t(xo({name: g})), t(Oo({
                                error: y,
                                errorText: ""
                            })), t(Bo({page: "room"})));
                            break;
                        case"update_room":
                            console.log(o);
                            var b = JSON.parse(o);
                            t(_o({data: b}));
                            break;
                        case"update_winners":
                            t(jo({winners: w}));
                            break;
                        case"create_game":
                            console.log(o);
                            var S = JSON.parse(o), x = S.idPlayer, k = S.idGame;
                            n.playerIdx = x, t(ko({index: x})), t(Eo({idGame: k})), t(Bo({page: "chooseShip"}));
                            break;
                        case"finish":
                            var E = JSON.parse(o).winPlayer;
                            setTimeout((function () {
                                t(Mo({winner: E === n.playerIdx})), t(Bo({page: "finishGame"})), t(Zo()), t(sa()), t(Nr())
                            }), 1e3);
                            break;
                        case"diconnect":
                            t(Mo({winner: !0})), t(Bo({page: "finishGame"})), t(Zo()), t(sa()), t(Nr())
                    }
                }, r.onopen = function () {
                    console.log("connected")
                }
            }

            return e.prototype.close = function () {
                this.webSocket.close()
            }, e.prototype.attack = function (e, t, n) {
                this.sendMessage("attack", JSON.stringify({x: e, y: t, gameId: n, indexPlayer: this.playerIdx}))
            }, e.prototype.randomAttack = function (e) {
                this.sendMessage("randomAttack", JSON.stringify({gameId: e, indexPlayer: this.playerIdx}))
            }, e.prototype.reg = function (e) {
                this.sendMessage("reg", JSON.stringify(e))
            }, e.prototype.createRoom = function () {
                this.sendMessage("create_room", "")
            }, e.prototype.addUserToRoom = function (e) {
                this.sendMessage("add_user_to_room", JSON.stringify({indexRoom: e}))
            }, e.prototype.startGame = function (e, t) {
                this.sendMessage("add_ships", JSON.stringify({gameId: e, ships: t, indexPlayer: this.playerIdx}))
            }, e.prototype.singlePlay = function () {
                this.sendMessage("single_play", "")
            }, e.prototype.sendMessage = function (e, t) {
                var n = {type: e, data: t, id: 0};
                this.webSocket.send(JSON.stringify(n))
            }, e
        }(), da = it.div(ha || (ha = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  padding: 50px;\n  margin: 20px;\n  width: 330px;\n  max-height: 90vh;\n  border-radius: 10px;\n  border: 1px solid ", ";\n  overflow: auto;\n  background-color: ", ";\n"], ["\n  padding: 50px;\n  margin: 20px;\n  width: 330px;\n  max-height: 90vh;\n  border-radius: 10px;\n  border: 1px solid ", ";\n  overflow: auto;\n  background-color: ", ";\n"])), st, ct);
        const pa = function (t) {
            var n = t.socket, r = p((function (e) {
                    return e.roomsData.data
                })),
                o = r.length ? e.createElement(da, null, e.createElement(kt, null, "Rooms in game"), r.map((function (t, r) {
                    return e.createElement("div", {key: r}, "User in Room: ", t.roomUsers.map((function (e) {
                        return e.name
                    })).join(), e.createElement(ao, {
                        onClick: function () {
                            return function (e) {
                                n.addUserToRoom(e)
                            }(t.roomId)
                        }
                    }, "add to Room"))
                }))) : "";
            return e.createElement(e.Fragment, null, o)
        };
        var ha, ma = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            ga = it.div(Sa || (Sa = ma(["\n  padding: 50px;\n  margin: 20px;\n  width: 330px;\n  max-height: 90vh;\n  border-radius: 10px;\n  border: 1px solid ", ";\n  overflow: auto;\n  background-color: ", ";\n"], ["\n  padding: 50px;\n  margin: 20px;\n  width: 330px;\n  max-height: 90vh;\n  border-radius: 10px;\n  border: 1px solid ", ";\n  overflow: auto;\n  background-color: ", ";\n"])), st, ct),
            ya = it.table(xa || (xa = ma(["\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n"]))),
            va = it.td(ka || (ka = ma(["\n  border: 1px solid ", ";\n"], ["\n  border: 1px solid ", ";\n"])), st),
            ba = it.th(Ea || (Ea = ma(["\n  border: 1px solid ", ";\n"], ["\n  border: 1px solid ", ";\n"])), st);
        const wa = function () {
            var t = p((function (e) {
                    return e.winnerData.winners
                })),
                n = t.length ? e.createElement(ga, null, e.createElement(kt, null, "Best players"), e.createElement(ya, null, e.createElement("thead", null, e.createElement("tr", {key: 0}, e.createElement(ba, null, "N"), e.createElement(ba, null, "Name"), e.createElement(ba, null, "Poins"))), t.map((function (t, n) {
                    return e.createElement("tbody", {key: n + 1}, e.createElement("tr", {key: n + 1}, e.createElement(va, null, n + 1), e.createElement(va, null, t.name), e.createElement(va, null, t.wins)))
                })))) : "";
            return e.createElement(e.Fragment, null, n)
        };
        var Sa, xa, ka, Ea;
        const Ca = function (t) {
            var n = t.socket, r = p((function (e) {
                return e.userData.name
            }));
            return e.createElement(Dt, null, e.createElement(Mt, {width: 500}, e.createElement("div", null, e.createElement(kt, null, "Welcome to Battleship, ", r), e.createElement(kt, null, "What game do you choose?"), e.createElement(ao, {
                onClick: function () {
                    return n.singlePlay()
                }
            }, "Play with Bot"), e.createElement(ao, {
                onClick: function () {
                    return n.createRoom()
                }
            }, "Create Room"))), e.createElement(pa, {socket: n}), e.createElement(wa, null))
        }, Ma = function () {
            var t = p((function (e) {
                return e.userData.winner
            })), n = k();
            return e.createElement(Dt, null, e.createElement(Mt, null, e.createElement(Gr, {textAlign: "center"}, t ? "You Winner" : "You loser"), e.createElement(ro, {
                onClick: function () {
                    return n(Bo({page: "room"}))
                }
            }, "Back to main")))
        };
        var Oa;
        !function (e) {
            e[e.small = 1] = "small", e[e.medium = 2] = "medium", e[e.large = 3] = "large", e[e.huge = 4] = "huge"
        }(Oa || (Oa = {}));
        var Na = it.img(Pa || (Pa = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  margin: 0 auto;\n  display: block;\n  padding: 5px;\n  filter: ", ";\n  border: ", ";\n  border-radius: 5px;\n"], ["\n  margin: 0 auto;\n  display: block;\n  padding: 5px;\n  filter: ", ";\n  border: ", ";\n  border-radius: 5px;\n"])), (function (e) {
            return 0 === e.count ? "grayscale(100%)" : ""
        }), (function (e) {
            return e.activeShip ? "2px solid gold" : ""
        }));
        const Da = function (t) {
            var n = t.shipType, r = t.count, o = t.activeShip, a = t.onClick,
                i = "./public/assets/ships/".concat(n, ".png");
            return e.createElement(Na, {count: r, activeShip: o, src: i, alt: "ship", onClick: a})
        };
        var Pa, za = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            ja = it.div(Ta || (Ta = za(["\n  display: flex;\n  align-items: end;\n  justify-content: space-evenly;\n"], ["\n  display: flex;\n  align-items: end;\n  justify-content: space-evenly;\n"]))),
            Aa = it.div(La || (La = za(["\n  padding: 10px;\n"], ["\n  padding: 10px;\n"])));
        const Ia = function (t) {
            var n = t.onStartGame, r = p((function (e) {
                return e.shipsData.shipsToPut
            })), o = p((function (e) {
                return e.shipsData.activeShip
            })), a = p((function (e) {
                return e.shipsData.shipsOnCanvas
            }));
            (0, e.useEffect)((function () {
                Object.values(r).every((function (e) {
                    return 0 === e
                })) && n(a)
            }), [r]);
            var i = k();
            return e.createElement(ja, null, Object.entries(r).map((function (t, n) {
                var r = "Count:" + t[1];
                return e.createElement(Aa, {key: n}, e.createElement(Da, {
                    activeShip: o === t[0],
                    shipType: t[0],
                    onClick: function () {
                        t[1] > 0 && i(aa(t[0]))
                    },
                    count: t[1]
                }), e.createElement(kt, null, r))
            })))
        };
        var Ta, La, _a = function () {
            function e() {
                this.matrix = null, this.forSmallShips = []
            }

            return e.prototype.start = function (e) {
                this.matrix = e, this.notRotatedAreas = this.arrayDataFromArray("horizont", e), this.rotatedAreas = this.arrayDataFromArray("vertical", e)
            }, e.prototype.isNext = function (e, t) {
                return e + 1 === t
            }, e.prototype.arrToSubArr = function (e) {
                for (var t = [], n = [], r = 0; r < e.length; r++) n.length ? this.isNext(n[n.length - 1], e[r]) ? n.push(e[r]) : (t.push(n), (n = []).push(e[r])) : n.push(e[r]), r + 1 === e.length && n.length && t.push(n);
                return t
            }, e.prototype.axisData = function (e, t) {
                for (var n = [], r = 0; r < t.length; r++) {
                    for (var o = [], a = 0; a < t[0].length; a++) 0 === ("vertical" === e ? t[a][r] : t[r][a]) && o.push(a);
                    var i = this.arrToSubArr(o);
                    n.push(i)
                }
                return n
            }, e.prototype.longerSub = function (e) {
                var t = 0;
                return e.forEach((function (e) {
                    t < e.length && (t = e.length)
                })), t
            }, e.prototype.sortByLonger = function (e) {
                return e.sort((function (e, t) {
                    return t.longer - e.longer
                }))
            }, e.prototype.arrayDataFromArray = function (e, t) {
                var n = this, r = [];
                return this.axisData(e, t).forEach((function (e, t) {
                    var o = n.longerSub(e);
                    r.push({id: t, data: e, longer: o})
                })), this.sortByLonger(r)
            }, e.prototype.elementsHasntInSet = function (e, t) {
                return e.data.flat().filter((function (e) {
                    if (!t.has("".concat(e))) return "" + e
                }))
            }, e.prototype.apdateEmptyAreas = function (e, t) {
                var n = "y" === e ? this.notRotatedAreas : this.rotatedAreas, r = n.find((function (e) {
                        return e.id == +t[0]
                    })), o = n.indexOf(r), a = new Set(t[1].split("-")), i = this.elementsHasntInSet(r, a),
                    l = this.arrToSubArr(i), u = this.longerSub(l);
                n.splice(o, 1, {
                    id: r.id,
                    data: this.arrToSubArr(i),
                    longer: u
                }), r.data = this.arrToSubArr(i), r.longer = u
            }, e.prototype.deleteFromEmptyAreas = function (e, t) {
                var n = this;
                Array.from(t).forEach((function (t) {
                    n.apdateEmptyAreas(e, t)
                }))
            }, e.prototype.occupateArea = function (e) {
                var t = new Map, n = new Map;
                Array.from(e).forEach((function (e) {
                    var r = e.split("-")[0], o = e.split("-")[1],
                        a = t.has(r) ? t.get(r) + "-".concat(o) : "".concat(o);
                    t.set(r, a);
                    var i = n.has(o) ? n.get(o) + "-".concat(r) : "".concat(r);
                    n.set(o, i)
                })), this.deleteFromEmptyAreas("x", n), this.deleteFromEmptyAreas("y", t)
            }, e.prototype.generateRandomShip = function (e, t, n) {
                var r = (n ? JSON.parse(JSON.stringify(this.rotatedAreas)) : JSON.parse(JSON.stringify(this.notRotatedAreas))).filter((function (e) {
                        return e.longer >= t
                    })), o = Math.round(Math.random() * (r.length - 1)), a = r[o].data.find((function (e) {
                        return e.length >= t
                    })), i = n ? r[o].id : a[Math.floor(Math.random() * (a.length - t))],
                    l = n ? a[Math.floor(Math.random() * (a.length - t))] : r[o].id;
                this.onGetCoordinates(e, l, i, n)
            }, e
        }(), Ra = function () {
            function e(e) {
                var t = this;
                this.botShips = [], this.ships = null, this.isRandomActive = !1, this.generator = null, this.emptyAreas = new _a, this.emptyAreas.onGetCoordinates = function (n, r, o, a) {
                    e ? t.botShips.push({type: n, y: r, x: o, isRotate: a}) : t.onGetCoordinates(n, r, o, a)
                }
            }

            return e.prototype.genShipsToAuto = function () {
                var e, t;
                return function (e, t) {
                    var n, r, o, a, i = {
                        label: 0, sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        }, trys: [], ops: []
                    };
                    return a = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                        return this
                    }), a;

                    function l(l) {
                        return function (u) {
                            return function (l) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a && (a = 0, l[0] && (i = 0)), i;) try {
                                    if (n = 1, r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done) return o;
                                    switch (r = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                                        case 0:
                                        case 1:
                                            o = l;
                                            break;
                                        case 4:
                                            return i.label++, {value: l[1], done: !1};
                                        case 5:
                                            i.label++, r = l[1], l = [0];
                                            continue;
                                        case 7:
                                            l = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                                                i.label = l[1];
                                                break
                                            }
                                            if (6 === l[0] && i.label < o[1]) {
                                                i.label = o[1], o = l;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(l);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    l = t.call(e, i)
                                } catch (e) {
                                    l = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & l[0]) throw l[1];
                                return {value: l[0] ? l[1] : void 0, done: !0}
                            }([l, u])
                        }
                    }
                }(this, (function (n) {
                    switch (n.label) {
                        case 0:
                            e = [], Object.entries(this.ships).forEach((function (t) {
                                for (var n = 0; n < t[1]; n++) e.push(t[0])
                            })), t = 0, n.label = 1;
                        case 1:
                            return t < e.length ? [4, e[t]] : [3, 4];
                        case 2:
                            n.sent(), n.label = 3;
                        case 3:
                            return t++, [3, 1];
                        case 4:
                            return [2]
                    }
                }))
            }, e.prototype.interval = function () {
                var e = this.generator.next().value;
                if (!e) return !1;
                var t = !!Math.round(Math.random()), n = Oa[e];
                return this.emptyAreas.generateRandomShip(e, n, t), !0
            }, e.prototype.emptyValues = function (e) {
                this.emptyAreas.start(e)
            }, e.prototype.putRandomShips = function (e, t) {
                for (this.ships = e, this.emptyValues(t), this.generator = this.genShipsToAuto(); this.interval();) ;
            }, e.prototype.occupateCells = function (e) {
                this.emptyAreas.occupateArea(e)
            }, e
        }();
        const Fa = Ra;
        var Ua = function () {
            function e(e, t) {
                this.circleSteps = [{x: 0, y: 1}, {x: 1, y: 1}, {x: -1, y: 1}, {x: 1, y: 0}, {x: -1, y: 0}, {
                    x: 0,
                    y: 0
                }, {x: 0, y: -1}, {x: 1, y: -1}, {x: -1, y: -1}], this.intersectionController = e, this.boardMatrix = t
            }

            return e.prototype.fillArea = function (e, t) {
                return this.boardMatrix.valueToCell(e, t, "blocked"), this.intersectionController.addToIntersection("".concat(e, "-").concat(t)), "".concat(e, "-").concat(t)
            }, e.prototype.circleStepsFill = function (e, t) {
                var n = this, r = [];
                return this.circleSteps.forEach((function (o) {
                    e + o.y < 0 || e + o.y >= n.boardMatrix.matrixLength() || t + o.x < 0 || t + o.x >= n.boardMatrix.matrixLength() || r.push(n.fillArea(e + o.y, t + o.x))
                })), r
            }, e.prototype.fillShipArea = function (e, t, n, r) {
                for (var o = new Set, a = 0; a < n; a++) {
                    var i = r ? e : e + a, l = r ? t + a : t;
                    this.circleStepsFill(l, i).forEach((function (e) {
                        o.add(e)
                    })), this.boardMatrix.valueToCell(l, i, "ship")
                }
                this.onFillArea(o)
            }, e
        }();
        const Qa = Ua;
        var Ba = function () {
            function e() {
                this._isCurrentIntersect = !1, this.intersectionData = new Set
            }

            return e.prototype.isIntersection = function (e, t, n, r) {
                for (var o = [], a = 0; a < n; a++) r ? o.push(this.intersectionData.has("".concat(t + a, "-").concat(e))) : o.push(this.intersectionData.has("".concat(t, "-").concat(e + a)));
                return o.some((function (e) {
                    return e
                }))
            }, e.prototype.addToIntersection = function (e) {
                this.intersectionData.add(e)
            }, e.prototype.iterAddToIntersection = function (e, t, n, r) {
                if (r) for (o = t; o < n; o++) this.intersectionData.add("".concat(t + o, "-").concat(e)); else for (var o = 0; o < n; o++) this.intersectionData.add("".concat(t, "-").concat(e + o))
            }, Object.defineProperty(e.prototype, "isCurrentIntersect", {
                get: function () {
                    return this._isCurrentIntersect
                }, enumerable: !1, configurable: !0
            }), e
        }();
        const Wa = Ba;
        var Ha = function () {
            function e(e) {
                var t = this;
                this.intersectionController = new Wa, this.fillComponent = new Qa(this.intersectionController, e), this.fillComponent.onFillArea = function (e) {
                    t.onFillShipArea(e)
                }, this.boardMatrix = e, this.isMovesLisen = !1, this.isListenCkick = !1, this.isMovesLisen || (this.isMovesLisen = !0)
            }

            return e.prototype.addShipToCanvasmage = function (e, t, n, r, o) {
                return this.intersectionController.iterAddToIntersection(e, t, n, r), this.boardMatrix.clearCells(), this.fillComponent.fillShipArea(e, t, n || n, r), {
                    xC: e,
                    yC: t,
                    isRotate: r,
                    type: o
                }
            }, e.prototype.onClick = function (e, t, n, r, o) {
                this.isListenCkick = !1, this.isMovesLisen = !1, this.addShipImg(e, t, n, r, o)
            }, e.prototype.addShipImg = function (e, t, n, r, o) {
                var a = this.addShipToCanvasmage(e, t, n, r, o);
                this.onAddShip(a)
            }, e.prototype.onMove = function (e, t, n, r) {
                if (!this.boardMatrix.isOnBoard(e, t, n, r)) return this.isListenCkick = !1, !0;
                if (this.boardMatrix.isOnBoard(e, t, n, r)) {
                    this.x = e, this.y = t;
                    var o = this.intersectionController.isIntersection(e, t, n, r), a = o ? "occupate" : "hovered";
                    return this.isListenCkick = !o, this.boardMatrix.fillCell(a, e, t, n, r), o || !o && !this.isListenCkick
                }
            }, e.prototype.rotateShip = function (e, t) {
                this.boardMatrix.fillCell("hovered", this.x, this.y, e, t)
            }, e
        }();
        const Va = Ha;
        var $a = function () {
            var e = function (t, n) {
                return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, e(t, n)
            };
            return function (t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }

                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }(), Ya = function (e) {
            function t(t, n, r, o, a, i, l, u, s) {
                var c = e.call(this, t) || this;
                return c.isRandomMode = !1, c.isRotated = !1, c.activeShip = a, c.activeSize = Oa[c.activeShip], c.board = r, c.boardMatrix = new L(c.board), c.boardComponent = new D(c.node, 10, 10, c.boardMatrix.cellSize, l), c.boardMatrix.onClearHovered = function (e) {
                    return c.onClearHovered(e)
                }, c.boardMatrix.onFillCells = function (e) {
                    c.onFillCells(e)
                }, c.onAddShip = s, c.parentNode = t, c.createEmptyValues = !1, c.moveBinded = c.onMove.bind(c), c.clickBinded = c.onClick.bind(c), c.rotateShipBinded = c.rotateShip.bind(c), c.canvasSectionController = new Va(c.boardMatrix), c.canvasSectionController.onAddShip = function (e) {
                    return c.onAddShip(e)
                }, c.canvasSectionController.onFillShipArea = function (e) {
                    c.isRandomMode && c.randomShips.occupateCells(e), c.onFillShipArea(e, c.boardMatrix.getBlockValue())
                }, c.boardComponent.drawScene(c.board, c.shipsOnCanvas), c.randomShips = new Fa, c.randomShips.onGetCoordinates = function (e, t, n, r) {
                    var o = Oa[e];
                    c.canvasSectionController.addShipImg(n, t, o, r, e)
                }, c.boardComponent.canvas.onmousemove = c.moveBinded, c
            }

            return $a(t, e), t.prototype.autoPutShips = function (e, t) {
                this.isRandomMode = !0, this.isRotated = null, this.randomShips.putRandomShips(e, t)
            }, t.prototype.onClick = function (e) {
                var t = this.boardMatrix.getCursorPosition(e, this.boardComponent.node), n = t.x, r = t.y;
                this.boardComponent.canvas.removeEventListener("mousemove", this.moveBinded), this.boardComponent.canvas.removeEventListener("click", this.clickBinded), document.body.removeEventListener("keyup", this.rotateShipBinded), this.canvasSectionController.onClick(n, r, this.activeSize, this.isRotated, this.activeShip), this.boardComponent.drawScene(this.board, this.shipsOnCanvas), this.onResetActiveShip()
            }, t.prototype.updateShipOnBoard = function (e) {
                this.shipsOnCanvas = e, this.boardComponent.drawScene(this.board, this.shipsOnCanvas)
            }, t.prototype.addActiveShip = function (e) {
                this.activeShip = e, this.activeSize = Oa[e]
            }, t.prototype.setRotate = function (e) {
                this.isRotated = e
            }, t.prototype.onMove = function (e) {
                var t = this.boardMatrix.getCursorPosition(e, this.boardComponent.node), n = t.x, r = t.y;
                this.canvasSectionController.onMove(n, r, this.activeSize, this.isRotated) ? (document.body.removeEventListener("keyup", this.rotateShipBinded), this.boardComponent.canvas.removeEventListener("click", this.clickBinded)) : (document.body.addEventListener("keyup", this.rotateShipBinded), this.boardComponent.canvas.addEventListener("click", this.clickBinded)), this.boardComponent.drawScene(this.board, this.shipsOnCanvas)
            }, t.prototype.updateBoard = function (e) {
                this.board = e, this.boardMatrix.updateBoard(e), this.boardComponent.drawScene(this.board, this.shipsOnCanvas)
            }, t.prototype.rotateShip = function (e) {
                "Space" === e.code && (this.onRotateShip(), this.canvasSectionController.rotateShip(this.activeSize, this.isRotated), this.boardComponent.drawScene(this.board, this.shipsOnCanvas))
            }, t
        }(M);
        const Ga = Ya;
        var Za = function (t) {
                var n = t.imagesObj, r = (0, e.useRef)(null), o = k(), a = p((function (e) {
                    return e.shipsData.shipsOnCanvas
                })), i = p((function (e) {
                    return e.shipsData.isRotate
                })), l = p((function (e) {
                    return e.shipsData.activeShip
                })), u = p((function (e) {
                    return e.shipsData.isAutoPut
                })), s = (0, e.useState)(null), c = s[0], f = s[1], d = p((function (e) {
                    return e.shipsData.shipsToPut
                })), h = p((function (e) {
                    return e.boardData.boardMatrix
                }));
                return (0, e.useEffect)((function () {
                    if (c) c.destroy(); else {
                        var e = new Ga(r.current, d, h, i, l, a, n, u, (function (e) {
                            qo.playAudio("miss"), o(oa({ship: JSON.stringify(e), active: l})), o(aa(null)), o(la(e.type))
                        }));
                        f(e), e.onRotateShip = function () {
                            return o(ra())
                        }, e.onFillCells = function (e) {
                            return o(kr(e))
                        }, e.onClearHovered = function (e) {
                            return o(Er(e))
                        }, e.onResetActiveShip = function () {
                            return o(aa(null))
                        }, e.onFillShipArea = function (e, t) {
                            o(Cr({data: Array.from(e), value: t}))
                        }
                    }
                }), []), (0, e.useEffect)((function () {
                    return null == c ? void 0 : c.autoPutShips(d, h)
                }), [u]), (0, e.useEffect)((function () {
                    return null == c ? void 0 : c.updateShipOnBoard(a)
                }), [a]), (0, e.useEffect)((function () {
                    return null == c ? void 0 : c.updateBoard(h)
                }), [h]), (0, e.useEffect)((function () {
                    return null == c ? void 0 : c.addActiveShip(l)
                }), [l]), (0, e.useEffect)((function () {
                    return null == c ? void 0 : c.setRotate(i)
                }), [i]), e.createElement(e.Fragment, null, e.createElement("div", {ref: r}))
            }, Ja = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            Ka = it.label(ni || (ni = Ja(["\n  height: 28px;\n  line-height: 28px;\n  margin: 10px 0;\n  position: relative;\n  font-size: 14px;\n  user-select: none;\n"], ["\n  height: 28px;\n  line-height: 28px;\n  margin: 10px 0;\n  position: relative;\n  font-size: 14px;\n  user-select: none;\n"]))),
            qa = it.span(ri || (ri = Ja(['\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 56px;\n  height: 28px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 25%/50%;\n  vertical-align: top;\n  background: #eee;\n  transition: 0.2s;\n  &::before {\n    content: "";\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: white;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n    transition: 0.15s;\n  }\n'], ['\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 56px;\n  height: 28px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 25%/50%;\n  vertical-align: top;\n  background: #eee;\n  transition: 0.2s;\n  &::before {\n    content: "";\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: white;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n    transition: 0.15s;\n  }\n']))),
            Xa = it.input(oi || (oi = Ja(["\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  &:not(:disabled):active + ", " {\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\n  }\n  &:checked + ", " {\n    background: ", ";\n  }\n  &:checked + ", " {\n    &::before {\n      transform: translateX(28px);\n    }\n  }\n  &:not(:disabled) + ", " {\n    cursor: pointer;\n    border-color: rgba(0, 0, 0, 0.3);\n  }\n  &:disabled + ", " {\n    filter: grayscale(70%);\n    border-color: rgba(0, 0, 0, 0.1);\n  }\n  &:disabled + ", " {\n    &::before {\n      background: #eee;\n    }\n  }\n"], ["\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  &:not(:disabled):active + ", " {\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\n  }\n  &:checked + ", " {\n    background: ", ";\n  }\n  &:checked + ", " {\n    &::before {\n      transform: translateX(28px);\n    }\n  }\n  &:not(:disabled) + ", " {\n    cursor: pointer;\n    border-color: rgba(0, 0, 0, 0.3);\n  }\n  &:disabled + ", " {\n    filter: grayscale(70%);\n    border-color: rgba(0, 0, 0, 0.1);\n  }\n  &:disabled + ", " {\n    &::before {\n      background: #eee;\n    }\n  }\n"])), qa, qa, st, qa, qa, qa, qa),
            ei = it.span(ai || (ai = Ja(["\n  font-size: ", ";\n  padding: 0 5px;\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  padding: 0 5px;\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n  @media ", " {\n    font-size: ", ";\n  }\n"])), ht, St.tabletWidht, mt, St.tabletHeight, mt, St.mobileWidht, gt, St.mobileHeight, gt);
        const ti = function (t) {
            var n = t.handleChange, r = t.before, o = t.after;
            return e.createElement(Ka, null, e.createElement(ei, null, r), e.createElement(Xa, {
                type: "checkbox",
                onChange: n
            }), e.createElement(qa, null), e.createElement(ei, null, o))
        };
        var ni, ri, oi, ai;
        const ii = function (t) {
            var n = t.imagesObj, r = t.onStartGame, o = (0, e.useRef)(null), a = k(), i = p((function (e) {
                return e.timerData.timer
            }));
            return (0, e.useEffect)((function () {
                a(_r({timer: !0}))
            }), []), e.createElement(Dt, null, e.createElement(Mt, {width: 500}, e.createElement("div", {ref: o}, e.createElement(kt, null, "Arrange your ships on grid"), e.createElement(jr, {
                count: 59,
                endTimer: function () {
                    a(ia())
                },
                startTimer: i
            }), e.createElement(Ia, {
                onStartGame: function (e) {
                    setTimeout((function () {
                        return r(e)
                    }), 2e3)
                }
            }), e.createElement(ti, {
                handleChange: function (e) {
                    return a(ua(e.target.checked))
                }, before: "horizontal", after: "vertical"
            }), e.createElement(ao, {
                onClick: function () {
                    a(ia()), a(_r({timer: !1}))
                }
            }, "Automatically"))), e.createElement("div", null, e.createElement(Za, {imagesObj: n})))
        }, li = function (t) {
            var n = t.socket, r = t.imagesObj, o = p((function (e) {
                return e.userData.idGames
            })), a = p((function (e) {
                return e.shipsData.shipsOnCanvas
            }));
            return e.createElement(e.Fragment, null, e.createElement(ii, {
                imagesObj: r, onStartGame: function () {
                    var e = a.map((function (e) {
                        return {position: {x: e.xC, y: e.yC}, direction: !!e.isRotate, type: e.type, length: Oa[e.type]}
                    }));
                    null == n || n.startGame(o[o.length - 1], e)
                }
            }))
        };

        function ui(e, t, n) {
            return new Promise((function (r) {
                var o = new Image;
                o.src = e, o.width = t, o.height = n, o.onload = function () {
                    r(o)
                }
            }))
        }

        var si = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            ci = it.video(pi || (pi = si(["\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: -1;\n"], ["\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: -1;\n"]))),
            fi = it.div(hi || (hi = si(["\n  width: 100vw;\n  height: 100vh;\n"], ["\n  width: 100vw;\n  height: 100vh;\n"])));
        const di = function (t) {
            var n = t.children;
            return e.createElement(fi, null, e.createElement(ci, {
                loop: !0,
                id: "myVideo",
                autoPlay: !0,
                muted: !0
            }, e.createElement("source", {src: "../../public/assets/mp4/bg3-1.mp4", type: "video/mp4"})), n)
        };
        var pi, hi, mi = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            gi = it.button(bi || (bi = mi(["\n  position: absolute;\n  top: 30px;\n  right: 50px;\n  width: 45px;\n  height: 45px;\n  border: none;\n  background: none;\n"], ["\n  position: absolute;\n  top: 30px;\n  right: 50px;\n  width: 45px;\n  height: 45px;\n  border: none;\n  background: none;\n"]))),
            yi = it.img(wi || (wi = mi(["\n  transition: all 5s;\n  &:hover {\n    transform: rotate(720deg);\n  }\n"], ["\n  transition: all 5s;\n  &:hover {\n    transform: rotate(720deg);\n  }\n"])));
        const vi = function (t) {
            var n = t.handleClick;
            return e.createElement(gi, {onClick: n}, e.createElement(yi, {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00Mi42MDQyIDIwLjEwNDRINDEuMDUyNUM0MC42MTY5IDE2Ljc0MjMgMzkuMjk2NiAxMy42NTI0IDM3LjMwOTMgMTEuMDkzNUwzOC40MTE5IDkuOTkwOTNDMzkuMzUxMSA5LjA1MTcyIDM5LjM1MTEgNy41MjcyMiAzOC40MTE5IDYuNTg4MDJDMzcuNDcyNyA1LjY0ODgyIDM1Ljk0ODIgNS42NDg4MiAzNS4wMDkgNi41ODgwMkwzMy45MDY0IDcuNjkwNTZDMzEuMzYxMSA1LjcxNjg4IDI4LjI3MTIgNC4zODI5NCAyNC45MDkyIDMuOTQ3MzdWMi4zOTU2NEMyNC45MDkyIDEuMDc1MzIgMjMuODMzOSAwIDIyLjQ5OTkgMEMyMS4xNjYgMCAyMC4xMDQzIDEuMDc1MzIgMjAuMTA0MyAyLjM5NTY0VjMuOTQ3MzdDMTYuNzQyMiA0LjM4Mjk0IDEzLjY1MjQgNS43MDMyNyAxMS4wOTM0IDcuNjkwNTZMOS45OTA5IDYuNTg4MDJDOS4wNTE3IDUuNjQ4ODIgNy41MjcyIDUuNjQ4ODIgNi41ODggNi41ODgwMkM1LjY0ODggNy41MjcyMiA1LjY0ODggOS4wNTE3MiA2LjU4OCA5Ljk5MDkzTDcuNjkwNTQgMTEuMDkzNUM1LjcxNjg2IDEzLjY1MjQgNC4zODI5MyAxNi43Mjg3IDMuOTQ3MzYgMjAuMTA0NEgyLjM5NTY0QzEuMDc1MzEgMjAuMTA0NCAwIDIxLjE3OTcgMCAyMi41QzAgMjMuODIwMyAxLjA3NTMxIDI0Ljg5NTYgMi4zOTU2NCAyNC44OTU2SDMuOTQ3MzZDNC4zODI5MyAyOC4yNTc3IDUuNzAzMjUgMzEuMzQ3NSA3LjY5MDU0IDMzLjkwNjVMNi41ODggMzUuMDA5MUM1LjY0ODggMzUuOTQ4MyA1LjY0ODggMzcuNDcyOCA2LjU4OCAzOC40MTJDNy41MjcyIDM5LjM1MTIgOS4wNTE3IDM5LjM1MTIgOS45OTA5IDM4LjQxMkwxMS4wOTM0IDM3LjMwOTRDMTMuNjUyNCAzOS4yODMxIDE2Ljc0MjIgNDAuNjE3MSAyMC4xMDQzIDQxLjA1MjZWNDIuNjA0NEMyMC4xMDQzIDQzLjkyNDcgMjEuMTc5NiA0NSAyMi40OTk5IDQ1QzIzLjgyMDMgNDUgMjQuOTA5MiA0My45MzgzIDI0LjkwOTIgNDIuNjA0NFY0MS4wNTI2QzI4LjI3MTIgNDAuNjE3MSAzMS4zNjExIDM5LjI5NjcgMzMuOTIgMzcuMzA5NEwzNS4wMjI2IDM4LjQxMkMzNS45NjE4IDM5LjM1MTIgMzcuNDg2MyAzOS4zNTEyIDM4LjQyNTUgMzguNDEyQzM5LjM2NDcgMzcuNDcyOCAzOS4zNjQ3IDM1Ljk0ODMgMzguNDI1NSAzNS4wMDkxTDM3LjMyMjkgMzMuOTA2NUMzOS4yOTY2IDMxLjM0NzUgNDAuNjMwNiAyOC4yNTc3IDQxLjA2NjEgMjQuODk1Nkg0Mi42MDQyQzQzLjkyNDYgMjQuODk1NiA0NC45OTk5IDIzLjgyMDMgNDQuOTk5OSAyMi41QzQ1LjAxMzUgMjEuMTc5NyA0My45MzgyIDIwLjEwNDQgNDIuNjA0MiAyMC4xMDQ0Wk0yMi40OTk5IDM2LjIzNDFDMTQuOTE4MyAzNi4yMzQxIDguNzc5NDcgMzAuMDk1MyA4Ljc3OTQ3IDIyLjUxMzZDOC43Nzk0NyAxNC45MzE5IDE0LjkxODMgOC43OTMxIDIyLjQ5OTkgOC43OTMxQzMwLjA4MTYgOC43OTMxIDM2LjIyMDQgMTQuOTMxOSAzNi4yMjA0IDIyLjUxMzZDMzYuMjM0IDMwLjA4MTcgMzAuMDgxNiAzNi4yMzQxIDIyLjQ5OTkgMzYuMjM0MVoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMjIuNDk5OSAyOC44NDNDMjYuMDAzMSAyOC44NDMgMjguODQyOSAyNi4wMDMxIDI4Ljg0MjkgMjIuNUMyOC44NDI5IDE4Ljk5NjggMjYuMDAzMSAxNi4xNTcgMjIuNDk5OSAxNi4xNTdDMTguOTk2OCAxNi4xNTcgMTYuMTU2OSAxOC45OTY4IDE2LjE1NjkgMjIuNUMxNi4xNTY5IDI2LjAwMzEgMTguOTk2OCAyOC44NDMgMjIuNDk5OSAyOC44NDNaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=",
                alt: "icon"
            }))
        };
        var bi, wi, Si = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            xi = it.label(Mi || (Mi = Si(["\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 25px;\n  height: 25px;\n"], ["\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 25px;\n  height: 25px;\n"]))),
            ki = it.span(Oi || (Oi = Si(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  display: block;\n  &:hover {\n    background-color: #ccc;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  display: block;\n  &:hover {\n    background-color: #ccc;\n  }\n"]))),
            Ei = it.input(Ni || (Ni = Si(["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n  &:checked + ", " {\n    background-color: ", ';\n    &:after {\n      content: "";\n      position: absolute;\n      left: 9px;\n      top: 5px;\n      width: 5px;\n      height: 10px;\n      border: solid white;\n      border-width: 0 3px 3px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n  }\n'], ["\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n  &:checked + ", " {\n    background-color: ", ';\n    &:after {\n      content: "";\n      position: absolute;\n      left: 9px;\n      top: 5px;\n      width: 5px;\n      height: 10px;\n      border: solid white;\n      border-width: 0 3px 3px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n  }\n'])), ki, st);
        const Ci = function (t) {
            var n = t.isSound, r = t.handleChange, o = t.type;
            return e.createElement(xi, {htmlFor: o}, e.createElement(Ei, {
                type: "checkbox",
                checked: n,
                onChange: r,
                id: o
            }), e.createElement(ki, null))
        };
        var Mi, Oi, Ni, Di = it.input(zi || (zi = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  -webkit-appearance: none;\n  margin: 15px 0;\n  height: 15px;\n  width: 100%;\n  background: linear-gradient(\n    to right,\n    ", " 0%,\n    ", " ", "%,\n    rgb(247, 247, 247) ", "%,\n    rgb(247, 247, 247) 100%\n  );\n  border-radius: 10px;\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 30px;\n    width: 30px;\n    background: ", ";\n    border-radius: 100%;\n  }\n"], ["\n  -webkit-appearance: none;\n  margin: 15px 0;\n  height: 15px;\n  width: 100%;\n  background: linear-gradient(\n    to right,\n    ", " 0%,\n    ", " ", "%,\n    rgb(247, 247, 247) ", "%,\n    rgb(247, 247, 247) 100%\n  );\n  border-radius: 10px;\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 30px;\n    width: 30px;\n    background: ", ";\n    border-radius: 100%;\n  }\n"])), st, st, (function (e) {
            return 100 * e.value
        }), (function (e) {
            return 100 * e.value
        }), st);
        const Pi = function (t) {
            var n = t.volume, r = t.handleChange;
            return e.createElement(e.Fragment, null, e.createElement(Di, {
                type: "range",
                min: "0",
                max: "1",
                step: "0.1",
                value: n,
                onChange: r
            }))
        };
        var zi, ji = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            Ai = it.div(Li || (Li = ji(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), (function (e) {
                return e.isSound ? "" : "&::before {\n            content: ''; \n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 70px;\n            height: 5px;\n            transform: rotate(45deg);\n            transform-origin: top left;\n            background-color: #000;\n        }"
            })),
            Ii = it.img(_i || (_i = ji(["\n  width: 50px;\n  height: auto;\n  display: block;\n  scale: ", ";\n"], ["\n  width: 50px;\n  height: auto;\n  display: block;\n  scale: ", ";\n"])), (function (e) {
                return e.scale
            }));
        const Ti = function (t) {
            var n = t.type, r = t.isSound,
                o = "music" === n ? "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQzMC40OTlweCIgaGVpZ2h0PSI0MzAuNDk5cHgiIHZpZXdCb3g9IjAgMCA0MzAuNDk5IDQzMC40OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMC40OTkgNDMwLjQ5OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9IkxheWVyXzciPg0KCQk8cGF0aCBkPSJNMzg4LjI0MSwzMTUuMzk5YzYuOTU3LDIyLjUyNS02Ljk3NSw1MC4wNTgtMzMuOTYzLDY0LjQxNWMtMjkuNzM3LDE1LjgwNi02My45NjcsOS41ODctNzYuNDM4LTEzLjg5MQ0KCQkJYy0xMi40ODMtMjMuNDc4LDEuNTEzLTU1LjMyNCwzMS4yNDQtNzEuMTI0YzE1LjE3OS04LjA2OCwzMS41MTctMTAuMzY3LDQ1LjUzNy03LjU5NmwtMC42NzQtMjQ2LjMxM0wxNTUuNTM0LDc1LjU0OA0KCQkJbC0wLjAyOSwyODEuOTgxYzYuODMzLDIyLjQ5MS03LjA5OSw0OS45MjMtMzQuMDIyLDY0LjIyN2MtMjkuNzM3LDE1LjgtNjMuOTU4LDkuNi03Ni40MzgtMTMuODc4DQoJCQljLTEyLjQ3NS0yMy40ODksMS41MTMtNTUuMzM3LDMxLjI1LTcxLjE0MmMxNS4xOTYtOC4wOCwzMS41NTEtMTAuMzgsNDUuNTkyLTcuNTg0bDAuMDQ0LTI4Mi41MDVMMzg5LjEwNCwwTDM4OC4yNDEsMzE1LjM5OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJfMjR4MjRfT25fTGlnaHRfU291bmQiIGRhdGEtbmFtZT0iMjR4MjQvT24gTGlnaHQvU291bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxyZWN0IGlkPSJ2aWV3LWJveCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIi8+DQogIDxwYXRoIGlkPSJTaGFwZSIgZD0iTTUuMTIsMTUuNTczYTcuNzg2LDcuNzg2LDAsMCwxLTEuNTA3LTEuNTlIMi43NTFBMi43NTQsMi43NTQsMCwwLDEsMCwxMS4yMzJWNi4yNjlhMi43NTQsMi43NTQsMCwwLDEsMi43NTEtMi43NUgzLjZBNy4yODgsNy4yODgsMCwwLDEsNS4wNTMsMS45MzEsOC42Nyw4LjY3LDAsMCwxLDEwLjc1LDAsLjc1MS43NTEsMCwwLDEsMTEuNS43NXYxNmEuNzUxLjc1MSwwLDAsMS0uNzUxLjc1QTguNjgxLDguNjgxLDAsMCwxLDUuMTIsMTUuNTczWk0xLjUsNi4yNjl2NC45NjRhMS4yNTIsMS4yNTIsMCwwLDAsMS4yNTEsMS4yNUg0LjAyOGEuNzUyLjc1MiwwLDAsMSwuNjU4LjM4OUE0LDQsMCwwLDAsNSwxMy4zMjJhNi43NCw2Ljc0LDAsMCwwLDEuMDY5LDEuMDg3QTcuMDksNy4wOSwwLDAsMCwxMCwxNS45NjlWMS41MjlBNyw3LDAsMCwwLDYuMDA5LDMuMDg2LDYuMTY2LDYuMTY2LDAsMCwwLDQuOTg1LDQuMTYzLDMuNiwzLjYsMCwwLDAsNC43LDQuNmEuNzQ4Ljc0OCwwLDAsMS0uNjcuNDEzSDIuNzUxQTEuMjUzLDEuMjUzLDAsMCwwLDEuNSw2LjI2OVpNMTUsMTcuMDU5QS43NTEuNzUxLDAsMCwxLDE1LDE2LDEwLjI0OSwxMC4yNDksMCwwLDAsMTUsMS41Ljc1Ljc1LDAsMSwxLDE2LjA1OS40NDJhMTEuNzQ5LDExLjc0OSwwLDAsMSwwLDE2LjYxNy43NTEuNzUxLDAsMCwxLTEuMDYxLDBaTTEzLjE3LDE0LjIzYS43NDkuNzQ5LDAsMCwxLDAtMS4wNiw2LjI1LDYuMjUsMCwwLDAsMC04LjgzOUEuNzUuNzUsMCwxLDEsMTQuMjMsMy4yN2E3Ljc1LDcuNzUsMCwwLDEsMCwxMC45Ni43NDkuNzQ5LDAsMCwxLTEuMDYsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMjUgMy4yNSkiIGZpbGw9IiMxNDExMjQiLz4NCjwvc3ZnPg0K",
                a = "sound" === n ? 1.2 : 1;
            return e.createElement(Ai, {isSound: r}, e.createElement(Ii, {src: o, alt: "icon", scale: a}))
        };
        var Li, _i, Ri = function () {
            return Ri = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, Ri.apply(this, arguments)
        }, Fi = it.div(Qi || (Qi = function (e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
        }(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n"])));
        const Ui = function (t) {
            var n = t.type, r = (0, e.useState)(Object.assign(qo.getSetting(n))), o = r[0], a = r[1];
            return (0, e.useEffect)((function () {
                qo.updateSetting(n, o), localStorage.setItem(n, JSON.stringify(Ri({}, o)))
            }), [o]), e.createElement(Fi, null, e.createElement(Ti, {
                type: n,
                isSound: o.isSound
            }), e.createElement(kt, null, n), e.createElement(Ci, {
                isSound: o.isSound,
                type: n,
                handleChange: function (e) {
                    a(Ri(Ri({}, o), {isSound: e.target.checked}))
                }
            }), e.createElement(Pi, {
                volume: o.volume, handleChange: function (e) {
                    a(Ri(Ri({}, o), {volume: +e.target.value}))
                }
            }))
        };
        var Qi, Bi = function (e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t, e
            },
            Wi = it.div(Yi || (Yi = Bi(["\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  padding: 50px;\n  margin: 20px;\n  border-radius: 10px;\n  width: 500px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  @media ", " {\n    flex-wrap: wrap;\n    padding: 30px;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: space-around;\n  padding: 50px;\n  margin: 20px;\n  border-radius: 10px;\n  width: 500px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  @media ", " {\n    flex-wrap: wrap;\n    padding: 30px;\n  }\n"])), st, "rgb(109, 128, 155)", St.tabletWidht),
            Hi = it.div(Gi || (Gi = Bi(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),
            Vi = it.img(Zi || (Zi = Bi(["\n  width: 30px;\n  height: 30px;\n  filter: invert(1);\n"], ["\n  width: 30px;\n  height: 30px;\n  filter: invert(1);\n"])));
        const $i = function () {
            var t = (0, e.useState)(!1), n = t[0], r = t[1], o = function () {
                r(!1)
            }, a = e.createElement(Hi, {onClick: o}, e.createElement(Wi, {
                onClick: function (e) {
                    e.stopPropagation()
                }
            }, e.createElement(Ui, {type: "sound"}), e.createElement(Ui, {type: "music"}), e.createElement(lo, {onClick: o}, e.createElement(Vi, {
                src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7b3BhY2l0eTowO30uY2xzLTJ7ZmlsbDojMjMxZjIwO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y2xvc2U8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJjbG9zZSI+PGcgaWQ9ImNsb3NlLTIiIGRhdGEtbmFtZT0iY2xvc2UiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNCAyNCkgcm90YXRlKDE4MCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMy40MSwxMmw0LjMtNC4yOWExLDEsMCwxLDAtMS40Mi0xLjQyTDEyLDEwLjU5LDcuNzEsNi4yOUExLDEsMCwwLDAsNi4yOSw3LjcxTDEwLjU5LDEybC00LjMsNC4yOWExLDEsMCwwLDAsMCwxLjQyLDEsMSwwLDAsMCwxLjQyLDBMMTIsMTMuNDFsNC4yOSw0LjNhMSwxLDAsMCwwLDEuNDIsMCwxLDEsMCwwLDAsMC0xLjQyWiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==",
                alt: "close popup"
            }))));
            return e.createElement(e.Fragment, null, e.createElement(vi, {
                handleClick: function () {
                    return r((function (e) {
                        return !e
                    }))
                }
            }), n ? a : null)
        };
        var Yi, Gi, Zi, Ji = function (e) {
            var t, n = function (e) {
                    return function (e) {
                        void 0 === e && (e = {});
                        var t = e.thunk, n = void 0 === t || t, r = (e.immutableCheck, e.serializableCheck, new ur);
                        return n && (function (e) {
                            return "boolean" == typeof e
                        }(n) ? r.push(Zn) : r.push(Zn.withExtraArgument(n.extraArgument))), r
                    }(e)
                }, r = e || {}, o = r.reducer, a = void 0 === o ? void 0 : o, i = r.middleware, l = void 0 === i ? n() : i,
                u = r.devTools, s = void 0 === u || u, c = r.preloadedState, f = void 0 === c ? void 0 : c,
                d = r.enhancers, p = void 0 === d ? void 0 : d;
            if ("function" == typeof a) t = a; else {
                if (!function (e) {
                    if ("object" != typeof e || null === e) return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
                    return t === n
                }(a)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                t = function (e) {
                    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                        var o = t[r];
                        "function" == typeof e[o] && (n[o] = e[o])
                    }
                    var a, i = Object.keys(n);
                    try {
                        !function (e) {
                            Object.keys(e).forEach((function (t) {
                                var n = e[t];
                                if (void 0 === n(void 0, {type: Bn.INIT})) throw new Error(Fn(12));
                                if (void 0 === n(void 0, {type: Bn.PROBE_UNKNOWN_ACTION()})) throw new Error(Fn(13))
                            }))
                        }(n)
                    } catch (e) {
                        a = e
                    }
                    return function (e, t) {
                        if (void 0 === e && (e = {}), a) throw a;
                        for (var r = !1, o = {}, l = 0; l < i.length; l++) {
                            var u = i[l], s = n[u], c = e[u], f = s(c, t);
                            if (void 0 === f) throw t && t.type, new Error(Fn(14));
                            o[u] = f, r = r || f !== c
                        }
                        return (r = r || i.length !== Object.keys(e).length) ? o : e
                    }
                }(a)
            }
            var h = l;
            "function" == typeof h && (h = h(n));
            var m = $n.apply(void 0, h), g = Vn;
            s && (g = lr(ar({trace: !1}, "object" == typeof s && s)));
            var y = [m];
            return Array.isArray(p) ? y = Kn([m], p) : "function" == typeof p && (y = p(y)), Hn(t, f, g.apply(void 0, y))
        }({
            reducer: {
                userData: No,
                pagesData: Wo,
                roomsData: Ro,
                fieldsData: Jo,
                shipsData: ca,
                boardData: Dr,
                timerData: Rr,
                winnerData: Ao
            }
        });
        const Ki = Ji;
        t.s(document.body).render(e.createElement((function ({store: t, context: n, children: r, serverState: o}) {
            const a = (0, e.useMemo)((() => {
                const e = function (e, t) {
                    let n, r = y;

                    function o() {
                        i.onStateChange && i.onStateChange()
                    }

                    function a() {
                        n || (n = t ? t.addNestedSub(o) : e.subscribe(o), r = function () {
                            const e = l();
                            let t = null, n = null;
                            return {
                                clear() {
                                    t = null, n = null
                                }, notify() {
                                    e((() => {
                                        let e = t;
                                        for (; e;) e.callback(), e = e.next
                                    }))
                                }, get() {
                                    let e = [], n = t;
                                    for (; n;) e.push(n), n = n.next;
                                    return e
                                }, subscribe(e) {
                                    let r = !0, o = n = {callback: e, next: null, prev: n};
                                    return o.prev ? o.prev.next = o : t = o, function () {
                                        r && null !== t && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                                    }
                                }
                            }
                        }())
                    }

                    const i = {
                        addNestedSub: function (e) {
                            return a(), r.subscribe(e)
                        }, notifyNestedSubs: function () {
                            r.notify()
                        }, handleChangeWrapper: o, isSubscribed: function () {
                            return Boolean(n)
                        }, trySubscribe: a, tryUnsubscribe: function () {
                            n && (n(), n = void 0, r.clear(), r = y)
                        }, getListeners: () => r
                    };
                    return i
                }(t);
                return {store: t, subscription: e, getServerState: o ? () => o : void 0}
            }), [t, o]), i = (0, e.useMemo)((() => t.getState()), [t]);
            v((() => {
                const {subscription: e} = a;
                return e.onStateChange = e.notifyNestedSubs, e.trySubscribe(), i !== t.getState() && e.notifyNestedSubs(), () => {
                    e.tryUnsubscribe(), e.onStateChange = void 0
                }
            }), [a, i]);
            const s = n || u;
            return e.createElement(s.Provider, {value: a}, r)
        }), {store: Ki}, e.createElement((function () {
            var t = (0, e.useState)(null), n = t[0], r = t[1], o = (0, e.useState)(null), a = o[0], i = o[1],
                l = (0, e.useState)(null), u = l[0], s = l[1], c = k(), f = p((function (e) {
                    return e.pagesData.page
                }));
            return (0, e.useEffect)((function () {
                "room" === f && i(e.createElement(Ca, {socket: n})), "chooseShip" === f && i(e.createElement(li, {
                    imagesObj: u,
                    socket: n
                })), "gameField" === f && i(e.createElement(e.Fragment, null, e.createElement($r, {
                    socket: n,
                    shipsImages: u
                }))), "finishGame" === f && i(e.createElement(Ma, null))
            }), [f]), (0, e.useEffect)((function () {
                var t, n;
                t = 30, n = {small: 30, medium: 60, large: 90, huge: 120}, new Promise((function () {
                    Promise.all(Object.entries(n).map((function (e) {
                        return ui("./public/assets/ships/".concat(e[0], ".png"), t, e[1])
                    }))).then((function (o) {
                        Promise.all(Object.entries(n).map((function (e) {
                            return ui("./public/assets/ships/".concat(e[0], "H.png"), e[1], t)
                        }))).then((function (n) {
                            ui("./public/assets/ships/fair.png", t, t).then((function (a) {
                                ui("./public/assets/bgCanvas.png", t, t).then((function (t) {
                                    var l = {}, u = {}, f = ["small", "medium", "large", "huge"];
                                    f.forEach((function (e, t) {
                                        l[e] = n[t]
                                    })), f.forEach((function (e, t) {
                                        u[e] = o[t]
                                    })), function (t) {
                                        s(t);
                                        var n = new fa({dispatch: c});
                                        r(n), i(e.createElement(go, {socket: n}))
                                    }({vertical: u, horizont: l, broken: a, bgImg: t})
                                }))
                            }))
                        }))
                    }))
                }))
            }), []), (0, e.useEffect)((function () {
                var e = localStorage.getItem("sound") ? JSON.parse(localStorage.getItem("sound")) : {
                    volume: .5,
                    isSound: !0
                };
                "number" == typeof e.volume && e.volume >= 0 && e.volume <= 1 && "boolean" == typeof e.isSound && qo.updateSetting("sound", {
                    volume: e.volume,
                    isSound: e.isSound
                });
                var t = localStorage.getItem("music") ? JSON.parse(localStorage.getItem("music")) : {
                    volume: .5,
                    isSound: !1
                };
                "number" == typeof t.volume && t.volume >= 0 && t.volume <= 1 && "boolean" == typeof t.isSound && qo.updateSetting("music", {
                    volume: t.volume,
                    isSound: t.isSound
                })
            }), []), e.createElement(di, null, a, e.createElement($i, null))
        }), null)))
    })()
})();