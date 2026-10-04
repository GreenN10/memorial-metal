module.exports = [
"[project]/app/siparis-takip/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrackingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const shipmentStatuses = [
    "Sipariş Alındı",
    "Hazırlanıyor",
    "Kargoya Verildi",
    "Teslim Edildi"
];
function TrackingPage() {
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [messageType, setMessageType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("info");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!result) return -1;
        return shipmentStatuses.indexOf(result.status);
    }, [
        result
    ]);
    async function handleSearch(event) {
        event.preventDefault();
        const normalizedCode = code.trim().toUpperCase();
        if (!normalizedCode) {
            setResult(null);
            setMessageType("error");
            setMessage("Lütfen sipariş veya kargo kodunu girin.");
            return;
        }
        try {
            setLoading(true);
            setResult(null);
            setMessageType("info");
            setMessage("Siparişiniz aranıyor...");
            const response = await fetch(`/api/tracking/${encodeURIComponent(normalizedCode)}`, {
                method: "GET",
                cache: "no-store"
            });
            const data = await response.json();
            if (!response.ok) {
                setMessageType("error");
                setMessage(data.message || "Sipariş bulunamadı.");
                return;
            }
            setResult(data);
            setMessageType("success");
            setMessage("Siparişiniz bulundu.");
        } catch  {
            setResult(null);
            setMessageType("error");
            setMessage("Sipariş sorgulanırken bağlantı hatası oluştu. Tekrar deneyin.");
        } finally{
            setLoading(false);
        }
    }
    function formatPrice(value) {
        return Number(value || 0).toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    function formatDate(value) {
        if (!value) return "Tarih bilgisi bulunmuyor";
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) {
            return "Tarih bilgisi bulunmuyor";
        }
        return new Intl.DateTimeFormat("tr-TR", {
            dateStyle: "long",
            timeStyle: "short"
        }).format(date);
    }
    function getProgressWidth() {
        if (currentStep < 0) return "0%";
        return `${(currentStep + 1) / shipmentStatuses.length * 100}%`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            minHeight: "100vh",
            padding: "40px 16px 80px",
            background: "radial-gradient(circle at top right, rgba(250,204,21,.08), transparent 25%), linear-gradient(180deg, #0b0b0c 0%, #111214 100%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    padding: 28,
                    borderRadius: 30,
                    border: "1px solid rgba(250,204,21,.16)",
                    background: "linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.02))",
                    boxShadow: "0 30px 80px rgba(0,0,0,.35)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -120,
                            right: -120,
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            background: "rgba(250,204,21,.07)",
                            filter: "blur(42px)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/siparis-takip/page.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 760
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "badge",
                                        children: "Premium Sipariş Takibi"
                                    }, void 0, false, {
                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            margin: "18px 0 0",
                                            fontSize: 46,
                                            lineHeight: 1.1,
                                            letterSpacing: "-0.04em"
                                        },
                                        children: "Siparişini kolayca takip et"
                                    }, void 0, false, {
                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "small",
                                        style: {
                                            marginTop: 12,
                                            fontSize: 16,
                                            lineHeight: 1.8
                                        },
                                        children: "Sipariş kodunu veya kargo kodunu girerek üretim ve teslimat sürecini görüntüleyebilirsin."
                                    }, void 0, false, {
                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/siparis-takip/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 12,
                                    marginTop: 26
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input",
                                        value: code,
                                        onChange: (event)=>{
                                            setCode(event.target.value);
                                            setMessage("");
                                        },
                                        placeholder: "Örn: MM225959 veya ARS456734",
                                        "aria-label": "Sipariş veya kargo kodu",
                                        autoComplete: "off",
                                        style: {
                                            flex: 1,
                                            minWidth: 250,
                                            height: 56,
                                            fontSize: 16,
                                            textTransform: "uppercase"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-primary",
                                        type: "submit",
                                        disabled: loading,
                                        style: {
                                            minWidth: 150,
                                            height: 56,
                                            opacity: loading ? 0.68 : 1,
                                            cursor: loading ? "not-allowed" : "pointer"
                                        },
                                        children: loading ? "Aranıyor..." : "Siparişi Sorgula"
                                    }, void 0, false, {
                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/siparis-takip/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 16,
                                    padding: "13px 15px",
                                    border: messageType === "error" ? "1px solid rgba(239,68,68,.24)" : messageType === "success" ? "1px solid rgba(34,197,94,.24)" : "1px solid rgba(250,204,21,.18)",
                                    borderRadius: 14,
                                    background: messageType === "error" ? "rgba(239,68,68,.07)" : messageType === "success" ? "rgba(34,197,94,.07)" : "rgba(250,204,21,.05)",
                                    color: messageType === "error" ? "#fca5a5" : messageType === "success" ? "#86efac" : "#e4e4e7",
                                    fontSize: 13,
                                    fontWeight: 750
                                },
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/app/siparis-takip/page.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this) : null,
                            result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 28
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    style: {
                                        padding: 24,
                                        border: "1px solid rgba(250,204,21,.18)",
                                        borderRadius: 28,
                                        background: "radial-gradient(circle at top, rgba(250,204,21,.07), transparent 30%), rgba(255,255,255,.025)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                gap: 18
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            children: "Sipariş Kodu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: 6,
                                                                color: "#facc15",
                                                                fontSize: 30,
                                                                fontWeight: 950,
                                                                letterSpacing: "-0.03em"
                                                            },
                                                            children: result.orderCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            style: {
                                                                marginTop: 9,
                                                                lineHeight: 1.7
                                                            },
                                                            children: [
                                                                "Kargo Kodu:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    style: {
                                                                        color: "#e4e4e7"
                                                                    },
                                                                    children: result.cargoCode || "Henüz oluşturulmadı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            children: [
                                                                "Sipariş Tarihi:",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    style: {
                                                                        color: "#e4e4e7"
                                                                    },
                                                                    children: formatDate(result.createdAt)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: "Güncel Durum"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "badge",
                                                            style: {
                                                                marginTop: 8
                                                            },
                                                            children: result.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 30
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: 10,
                                                        overflow: "hidden",
                                                        borderRadius: 999,
                                                        background: "rgba(255,255,255,.08)",
                                                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,.04)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: getProgressWidth(),
                                                            height: "100%",
                                                            borderRadius: 999,
                                                            background: "linear-gradient(90deg, #facc15, #fde047)",
                                                            boxShadow: "0 0 20px rgba(250,204,21,.26)",
                                                            transition: "width .4s ease"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-4",
                                                    style: {
                                                        gap: 12,
                                                        marginTop: 18
                                                    },
                                                    children: shipmentStatuses.map((status, index)=>{
                                                        const completed = currentStep >= index;
                                                        const current = currentStep === index;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "relative",
                                                                minHeight: 95,
                                                                padding: 15,
                                                                border: completed ? "1px solid rgba(250,204,21,.35)" : "1px solid rgba(255,255,255,.08)",
                                                                borderRadius: 18,
                                                                background: completed ? current ? "#facc15" : "rgba(250,204,21,.09)" : "rgba(255,255,255,.025)",
                                                                color: current ? "#090909" : completed ? "#fde047" : "#71717a",
                                                                textAlign: "center",
                                                                boxShadow: current ? "0 14px 30px rgba(250,204,21,.18)" : "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        width: 30,
                                                                        height: 30,
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        margin: "0 auto 10px",
                                                                        borderRadius: "50%",
                                                                        background: current ? "rgba(0,0,0,.13)" : completed ? "rgba(250,204,21,.12)" : "rgba(255,255,255,.04)",
                                                                        fontSize: 12,
                                                                        fontWeight: 950
                                                                    },
                                                                    children: completed ? "✓" : index + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 12,
                                                                        fontWeight: 900,
                                                                        lineHeight: 1.4
                                                                    },
                                                                    children: status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, status, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-2",
                                            style: {
                                                marginTop: 24
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "card",
                                                    style: {
                                                        padding: 19,
                                                        borderRadius: 22
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            children: "Müşteri Bilgileri"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 456,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: 10,
                                                                fontSize: 21,
                                                                fontWeight: 900
                                                            },
                                                            children: result.customerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            style: {
                                                                marginTop: 9,
                                                                lineHeight: 1.7
                                                            },
                                                            children: [
                                                                result.userEmail || "E-posta bulunmuyor",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 25
                                                                }, this),
                                                                result.phone || "Telefon bulunmuyor"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: "card",
                                                    style: {
                                                        padding: 19,
                                                        borderRadius: 22
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            children: "Teslimat Bilgileri"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: 10,
                                                                fontSize: 21,
                                                                fontWeight: 900
                                                            },
                                                            children: result.city || "Şehir bilgisi bulunmuyor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "small",
                                                            style: {
                                                                marginTop: 9,
                                                                lineHeight: 1.7
                                                            },
                                                            children: result.address || "Adres bilgisi bulunmuyor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                            lineNumber: 443,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "card",
                                            style: {
                                                marginTop: 20,
                                                padding: 19,
                                                borderRadius: 22
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        gap: 12
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "small",
                                                                    children: "Sipariş Özeti"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        margin: "7px 0 0",
                                                                        fontSize: 22
                                                                    },
                                                                    children: "Sipariş edilen ürünler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "7px 11px",
                                                                border: "1px solid rgba(255,255,255,.08)",
                                                                borderRadius: 999,
                                                                background: "rgba(255,255,255,.03)",
                                                                color: "#d4d4d8",
                                                                fontSize: 11,
                                                                fontWeight: 800
                                                            },
                                                            children: result.paymentMethod || "Ödeme yöntemi belirtilmedi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gap: 13,
                                                        marginTop: 17
                                                    },
                                                    children: result.items?.length ? result.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                justifyContent: "space-between",
                                                                gap: 14,
                                                                paddingBottom: 13,
                                                                borderBottom: "1px solid rgba(255,255,255,.08)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: 16,
                                                                                fontWeight: 850
                                                                            },
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                                            lineNumber: 579,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "small",
                                                                            style: {
                                                                                marginTop: 5
                                                                            },
                                                                            children: [
                                                                                item.quantity,
                                                                                " adet • ",
                                                                                item.size
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    style: {
                                                                        flexShrink: 0,
                                                                        color: "#f4f4f5"
                                                                    },
                                                                    children: [
                                                                        formatPrice(item.price * item.quantity),
                                                                        " ",
                                                                        "TL"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, `${item.name}-${index}`, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 27
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "small",
                                                        children: "Ürün bilgisi bulunamadı."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/siparis-takip/page.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "flex-end",
                                                        justifyContent: "space-between",
                                                        gap: 14,
                                                        marginTop: 18
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "small",
                                                                    children: "Sipariş toplamı"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 628,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginTop: 3,
                                                                        color: "#71717a",
                                                                        fontSize: 10
                                                                    },
                                                                    children: "Kargo dahil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                                    lineNumber: 630,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            style: {
                                                                color: "#facc15",
                                                                fontSize: 27,
                                                                letterSpacing: "-0.03em"
                                                            },
                                                            children: [
                                                                formatPrice(result.total),
                                                                " TL"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 19
                                        }, this),
                                        result.uploadedImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "card",
                                            style: {
                                                marginTop: 20,
                                                padding: 19,
                                                borderRadius: 22
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "small",
                                                    children: "Yüklenen Fotoğraf"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: result.uploadedImage,
                                                    alt: "Sipariş için yüklenen fotoğraf",
                                                    style: {
                                                        width: 260,
                                                        maxWidth: "100%",
                                                        maxHeight: 320,
                                                        marginTop: 13,
                                                        objectFit: "cover",
                                                        border: "1px solid rgba(255,255,255,.08)",
                                                        borderRadius: 18,
                                                        boxShadow: "0 20px 40px rgba(0,0,0,.25)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 21
                                        }, this) : null,
                                        result.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "card",
                                            style: {
                                                marginTop: 20,
                                                padding: 19,
                                                borderRadius: 22
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "small",
                                                    children: "Sipariş Notu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: 10,
                                                        color: "#d4d4d8",
                                                        lineHeight: 1.8
                                                    },
                                                    children: result.note
                                                }, void 0, false, {
                                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/siparis-takip/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/siparis-takip/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/siparis-takip/page.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/siparis-takip/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/siparis-takip/page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/siparis-takip/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/siparis-takip/page.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0m7fuvs._.js.map