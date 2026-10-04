module.exports = [
"[project]/components/ProductDesigner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDesigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-easy-crop/index.module.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProductDesigner({ products }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(products[0]?._id ?? "");
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedProduct = localStorage.getItem("memoria-selected-product");
        if (!savedProduct) return;
        try {
            const parsedProduct = JSON.parse(savedProduct);
            if (parsedProduct?._id && products.some((product)=>product._id === parsedProduct._id)) {
                setSelectedId(parsedProduct._id);
            }
        } catch  {
            localStorage.removeItem("memoria-selected-product");
        }
    }, [
        products
    ]);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return products.find((product)=>product._id === selectedId) ?? products[0];
    }, [
        products,
        selectedId
    ]);
    function handleFile(event) {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setStatus("Lütfen JPG, PNG veya WEBP görsel yükleyin.");
            return;
        }
        const maximumFileSize = 10 * 1024 * 1024;
        if (file.size > maximumFileSize) {
            setStatus("Görsel en fazla 10 MB olabilir.");
            return;
        }
        const reader = new FileReader();
        reader.onload = ()=>{
            setPreview(String(reader.result ?? ""));
            setFileName(file.name);
            setZoom(1);
            setCrop({
                x: 0,
                y: 0
            });
            setStatus("Fotoğraf başarıyla yüklendi.");
            setIsAdded(false);
        };
        reader.onerror = ()=>{
            setStatus("Fotoğraf okunamadı. Tekrar deneyin.");
        };
        reader.readAsDataURL(file);
    }
    function removeImage() {
        setPreview("");
        setFileName("");
        setZoom(1);
        setCrop({
            x: 0,
            y: 0
        });
        setStatus("Fotoğraf kaldırıldı.");
        setIsAdded(false);
    }
    function changeProduct(productId) {
        setSelectedId(productId);
        setZoom(1);
        setCrop({
            x: 0,
            y: 0
        });
        setStatus("");
        setIsAdded(false);
    }
    function addToCart() {
        if (!selected) return;
        if (!preview) {
            setStatus("Sepete eklemeden önce bir fotoğraf yükleyin.");
            return;
        }
        let cart = [];
        try {
            const existingCart = localStorage.getItem("memoria-cart");
            cart = existingCart ? JSON.parse(existingCart) : [];
            if (!Array.isArray(cart)) {
                cart = [];
            }
        } catch  {
            cart = [];
        }
        const newCartItem = {
            id: `${selected._id}-${Date.now()}`,
            productId: selected._id,
            name: selected.name,
            price: selected.price,
            quantity: Math.max(1, qty),
            size: selected.size,
            image: preview,
            note: note.trim()
        };
        cart.push(newCartItem);
        localStorage.setItem("memoria-cart", JSON.stringify(cart));
        setStatus("Ürün başarıyla sepete eklendi.");
        setIsAdded(true);
    }
    function goToCart() {
        router.push("/sepet");
    }
    if (!selected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            style: {
                padding: 24
            },
            children: "Henüz tasarlanabilir ürün bulunmuyor."
        }, void 0, false, {
            fileName: "[project]/components/ProductDesigner.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this);
    }
    const normalizedName = selected.name.toLocaleLowerCase("tr-TR");
    const isMagnet = normalizedName.includes("magnet");
    const isPanoramic = normalizedName.includes("panoramik");
    const isThreePiece = normalizedName.includes("3 parça");
    const frameSize = isMagnet ? {
        width: 230,
        height: 230
    } : isPanoramic ? {
        width: 360,
        height: 180
    } : selected.size === "A5" ? {
        width: 220,
        height: 300
    } : selected.size === "A4" ? {
        width: 260,
        height: 360
    } : selected.size === "A3" ? {
        width: 300,
        height: 410
    } : {
        width: 260,
        height: 340
    };
    const totalPrice = selected.price * Math.max(1, qty);
    function renderPlaceholder() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                color: "#111",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 58,
                        height: 58,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        borderRadius: 18,
                        background: "rgba(250,204,21,.24)",
                        color: "#713f12",
                        fontSize: 25,
                        fontWeight: 900
                    },
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/components/ProductDesigner.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    style: {
                        fontSize: isPanoramic ? 23 : 27,
                        lineHeight: 1.15
                    },
                    children: isMagnet ? "Metal Magnet" : isPanoramic ? "Panoramik Metal" : "Metal Baskı"
                }, void 0, false, {
                    fileName: "[project]/components/ProductDesigner.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        marginTop: 9,
                        color: "#52525b",
                        fontSize: 13,
                        lineHeight: 1.5
                    },
                    children: [
                        "Yüklediğiniz fotoğraf",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/components/ProductDesigner.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        "burada görünecek"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductDesigner.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductDesigner.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this);
    }
    function renderSingleFrame() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "relative",
                width: frameSize.width + 22,
                height: frameSize.height + 22,
                maxWidth: "100%",
                padding: 9,
                borderRadius: isMagnet ? 30 : 28,
                background: "linear-gradient(135deg, #ffffff 0%, #b8b8be 28%, #f8fafc 50%, #85858d 100%)",
                boxShadow: "0 38px 95px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.85)",
                transform: isPanoramic ? "rotate(-1.5deg)" : "rotate(-2.5deg)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: isMagnet ? 23 : 21,
                    background: "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.88) 48%, rgba(120,120,120,.18) 100%)"
                },
                children: [
                    preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        image: preview,
                        crop: crop,
                        zoom: zoom,
                        aspect: frameSize.width / frameSize.height,
                        onCropChange: setCrop,
                        onZoomChange: setZoom,
                        showGrid: false,
                        cropShape: "rect",
                        style: {
                            containerStyle: {
                                width: "100%",
                                height: "100%",
                                background: "transparent"
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this) : renderPlaceholder(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(145deg, rgba(255,255,255,.24), transparent 28%, transparent 72%, rgba(0,0,0,.11))",
                            pointerEvents: "none",
                            zIndex: 3
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: 12,
                            bottom: 12,
                            left: 12,
                            zIndex: 5,
                            overflow: "hidden",
                            padding: "8px 12px",
                            border: "1px solid rgba(255,255,255,.16)",
                            borderRadius: 999,
                            background: "rgba(0,0,0,.64)",
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 700,
                            textAlign: "center",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            backdropFilter: "blur(10px)"
                        },
                        children: note
                    }, void 0, false, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 326,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductDesigner.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProductDesigner.tsx",
            lineNumber: 264,
            columnNumber: 7
        }, this);
    }
    function renderThreePiece() {
        const pieceWidth = 92;
        const pieceHeight = 220;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                maxWidth: "100%",
                alignItems: "center",
                justifyContent: "center",
                gap: 10
            },
            children: [
                0,
                1,
                2
            ].map((pieceIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        width: pieceWidth + 16,
                        height: pieceHeight + 16,
                        padding: 7,
                        borderRadius: 20,
                        background: "linear-gradient(135deg, #ffffff 0%, #b8b8be 30%, #fafafa 52%, #85858d 100%)",
                        boxShadow: "0 28px 65px rgba(0,0,0,.48)",
                        transform: pieceIndex === 1 ? "translateY(-8px)" : "translateY(8px)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            borderRadius: 14,
                            background: "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.88) 48%, rgba(120,120,120,.18) 100%)"
                        },
                        children: [
                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: preview,
                                alt: "Yüklenen fotoğraf önizlemesi",
                                style: {
                                    width: "300%",
                                    height: "100%",
                                    maxWidth: "none",
                                    objectFit: "cover",
                                    transform: pieceIndex === 0 ? "translateX(0)" : pieceIndex === 1 ? "translateX(-33.333%)" : "translateX(-66.666%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 399,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 8,
                                    color: "#111",
                                    fontSize: 11,
                                    fontWeight: 900,
                                    textAlign: "center"
                                },
                                children: pieceIndex === 1 ? "3 Parça Metal" : ""
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 416,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(145deg, rgba(255,255,255,.2), transparent 30%, transparent 72%, rgba(0,0,0,.1))",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 387,
                        columnNumber: 13
                    }, this)
                }, pieceIndex, false, {
                    fileName: "[project]/components/ProductDesigner.tsx",
                    lineNumber: 370,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/ProductDesigner.tsx",
            lineNumber: 360,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-2",
        style: {
            alignItems: "start",
            gap: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    padding: 24,
                    borderRadius: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -90,
                            right: -90,
                            width: 220,
                            height: 220,
                            borderRadius: "50%",
                            background: "rgba(250,204,21,.07)",
                            filter: "blur(35px)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge",
                                children: "Kişiye Özel Tasarım"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: "16px 0 0",
                                    fontSize: 34,
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.03em"
                                },
                                children: "Metal tablonu hazırla"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "small",
                                style: {
                                    maxWidth: 540,
                                    marginTop: 10,
                                    lineHeight: 1.75
                                },
                                children: "Ürünü seçin, fotoğrafınızı yükleyin ve canlı önizleme üzerinden konumlandırın."
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 18,
                                    marginTop: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "designer-product",
                                                style: {
                                                    display: "block",
                                                    marginBottom: 8,
                                                    color: "#e4e4e7",
                                                    fontSize: 13,
                                                    fontWeight: 800
                                                },
                                                children: "1. Ürün seçin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 515,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "designer-product",
                                                className: "input",
                                                value: selectedId,
                                                onChange: (event)=>changeProduct(event.target.value),
                                                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: product._id,
                                                        children: [
                                                            product.name,
                                                            " —",
                                                            " ",
                                                            product.price.toLocaleString("tr-TR", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            }),
                                                            " ",
                                                            "TL"
                                                        ]
                                                    }, product._id, true, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "block",
                                                    marginBottom: 8,
                                                    color: "#e4e4e7",
                                                    fontSize: 13,
                                                    fontWeight: 800
                                                },
                                                children: "2. Fotoğraf yükleyin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 553,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "designer-file",
                                                style: {
                                                    display: "flex",
                                                    minHeight: 118,
                                                    alignItems: "center",
                                                    gap: 15,
                                                    padding: 16,
                                                    border: preview ? "1px solid rgba(34,197,94,.28)" : "1px dashed rgba(250,204,21,.34)",
                                                    borderRadius: 18,
                                                    background: preview ? "rgba(34,197,94,.055)" : "rgba(250,204,21,.035)",
                                                    cursor: "pointer",
                                                    transition: "border-color .2s ease, background .2s ease"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            width: 52,
                                                            height: 52,
                                                            flexShrink: 0,
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: 16,
                                                            background: preview ? "rgba(34,197,94,.14)" : "rgba(250,204,21,.13)",
                                                            color: preview ? "#86efac" : "#facc15",
                                                            fontSize: 24,
                                                            fontWeight: 900
                                                        },
                                                        children: preview ? "✓" : "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    display: "block",
                                                                    overflow: "hidden",
                                                                    color: "#f4f4f5",
                                                                    fontSize: 15,
                                                                    textOverflow: "ellipsis",
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: fileName || "Fotoğraf seçmek için tıklayın"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "small",
                                                                style: {
                                                                    display: "block",
                                                                    marginTop: 5,
                                                                    lineHeight: 1.5
                                                                },
                                                                children: "JPG, PNG veya WEBP • En fazla 10 MB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                                lineNumber: 619,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 565,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "designer-file",
                                                type: "file",
                                                accept: "image/jpeg,image/png,image/webp",
                                                onChange: handleFile,
                                                style: {
                                                    display: "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 632,
                                                columnNumber: 15
                                            }, this),
                                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: removeImage,
                                                style: {
                                                    marginTop: 9,
                                                    padding: 0,
                                                    border: 0,
                                                    background: "transparent",
                                                    color: "#fca5a5",
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                    cursor: "pointer"
                                                },
                                                children: "Fotoğrafı kaldır"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this),
                                    preview && !isThreePiece ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "designer-zoom",
                                                        style: {
                                                            color: "#e4e4e7",
                                                            fontSize: 13,
                                                            fontWeight: 800
                                                        },
                                                        children: "3. Fotoğraf yakınlığı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#facc15",
                                                            fontSize: 12,
                                                            fontWeight: 900
                                                        },
                                                        children: [
                                                            zoom.toFixed(1),
                                                            "x"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 662,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "designer-zoom",
                                                type: "range",
                                                min: 1,
                                                max: 3,
                                                step: 0.1,
                                                value: zoom,
                                                onChange: (event)=>setZoom(Number(event.target.value)),
                                                style: {
                                                    width: "100%",
                                                    marginTop: 12,
                                                    accentColor: "#facc15",
                                                    cursor: "pointer"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 692,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "small",
                                                style: {
                                                    margin: "8px 0 0",
                                                    fontSize: 12
                                                },
                                                children: "Fotoğrafı önizleme alanında sürükleyerek konumlandırabilirsiniz."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "designer-note",
                                                style: {
                                                    display: "block",
                                                    marginBottom: 8,
                                                    color: "#e4e4e7",
                                                    fontSize: 13,
                                                    fontWeight: 800
                                                },
                                                children: "Özel not"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 724,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "designer-note",
                                                className: "input",
                                                rows: 4,
                                                maxLength: 250,
                                                value: note,
                                                onChange: (event)=>{
                                                    setNote(event.target.value);
                                                    setIsAdded(false);
                                                },
                                                placeholder: "Örneğin: Alt bölüme tarih eklensin.",
                                                style: {
                                                    minHeight: 110,
                                                    resize: "vertical"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 737,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "small",
                                                style: {
                                                    marginTop: 6,
                                                    fontSize: 11,
                                                    textAlign: "right"
                                                },
                                                children: [
                                                    note.length,
                                                    "/250"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 754,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 723,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "designer-quantity",
                                                        style: {
                                                            display: "block",
                                                            marginBottom: 8,
                                                            color: "#e4e4e7",
                                                            fontSize: 13,
                                                            fontWeight: 800
                                                        },
                                                        children: "Adet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "designer-quantity",
                                                        className: "input",
                                                        type: "number",
                                                        min: 1,
                                                        max: 99,
                                                        value: qty,
                                                        onChange: (event)=>{
                                                            const value = Number(event.target.value);
                                                            setQty(Number.isFinite(value) ? Math.min(99, Math.max(1, value)) : 1);
                                                            setIsAdded(false);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 767,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            display: "block",
                                                            marginBottom: 8,
                                                            color: "#e4e4e7",
                                                            fontSize: 13,
                                                            fontWeight: 800
                                                        },
                                                        children: "Toplam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 803,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "input",
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            color: "#facc15",
                                                            fontSize: 20,
                                                            fontWeight: 950
                                                        },
                                                        children: [
                                                            totalPrice.toLocaleString("tr-TR", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            }),
                                                            " ",
                                                            "TL"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ProductDesigner.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProductDesigner.tsx",
                                                lineNumber: 802,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 766,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 10,
                                    marginTop: 22
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-primary",
                                        onClick: addToCart,
                                        style: {
                                            width: "100%",
                                            minHeight: 54,
                                            fontSize: 16
                                        },
                                        children: isAdded ? "Sepete Eklendi ✓" : "Sepete Ekle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 842,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "btn btn-secondary",
                                        onClick: goToCart,
                                        style: {
                                            width: "100%",
                                            minHeight: 50
                                        },
                                        children: "Sepete Git"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 857,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, this),
                            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 14,
                                    padding: "12px 14px",
                                    border: isAdded ? "1px solid rgba(34,197,94,.2)" : "1px solid rgba(250,204,21,.15)",
                                    borderRadius: 14,
                                    background: isAdded ? "rgba(34,197,94,.07)" : "rgba(250,204,21,.05)",
                                    color: isAdded ? "#86efac" : "#e4e4e7",
                                    fontSize: 13,
                                    fontWeight: 750
                                },
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 871,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductDesigner.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    position: "sticky",
                    top: 110,
                    overflow: "hidden",
                    padding: 22,
                    borderRadius: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#facc15",
                                            fontSize: 12,
                                            fontWeight: 900,
                                            letterSpacing: ".08em",
                                            textTransform: "uppercase"
                                        },
                                        children: "Canlı Önizleme"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 912,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: "8px 0 0",
                                            fontSize: 28,
                                            lineHeight: 1.2,
                                            letterSpacing: "-0.025em"
                                        },
                                        children: selected.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 924,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "small",
                                        style: {
                                            margin: "7px 0 0",
                                            lineHeight: 1.6
                                        },
                                        children: preview ? "Fotoğrafınızı sürükleyerek uygun konuma getirin." : "Fotoğraf yüklediğinizde ürün üzerinde görünecek."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 935,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 911,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    flexShrink: 0,
                                    padding: "7px 11px",
                                    border: "1px solid rgba(250,204,21,.18)",
                                    borderRadius: 999,
                                    background: "rgba(250,204,21,.07)",
                                    color: "#facc15",
                                    fontSize: 12,
                                    fontWeight: 900
                                },
                                children: selected.size
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 948,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 903,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            display: "flex",
                            minHeight: 590,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20,
                            overflow: "hidden",
                            padding: 24,
                            border: "1px solid rgba(255,255,255,.08)",
                            borderRadius: 25,
                            background: "radial-gradient(circle at 50% 12%, rgba(250,204,21,.09), transparent 30%), linear-gradient(180deg, #1b1b1e 0%, #101012 100%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: -80,
                                    right: -80,
                                    width: 230,
                                    height: 230,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,.055)",
                                    filter: "blur(30px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 980,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: -100,
                                    left: -90,
                                    width: 260,
                                    height: 260,
                                    borderRadius: "50%",
                                    background: "rgba(250,204,21,.055)",
                                    filter: "blur(38px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 993,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transform: selected.size === "A3" && !isThreePiece ? "scale(.88)" : "none"
                                },
                                children: isThreePiece ? renderThreePiece() : renderSingleFrame()
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 1006,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    right: 16,
                                    bottom: 16,
                                    zIndex: 4,
                                    padding: "10px 13px",
                                    border: "1px solid rgba(255,255,255,.09)",
                                    borderRadius: 14,
                                    background: "rgba(12,12,14,.72)",
                                    backdropFilter: "blur(12px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            display: "block",
                                            color: "#facc15",
                                            fontSize: 13
                                        },
                                        children: isMagnet ? "Kare Magnet" : isPanoramic ? "Panoramik" : isThreePiece ? "3 Parça" : selected.size
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "small",
                                        style: {
                                            fontSize: 10
                                        },
                                        children: "Premium metal yüzey"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 1054,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 1025,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 964,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-3",
                        style: {
                            gap: 9,
                            marginTop: 12
                        },
                        children: [
                            [
                                "Canlı",
                                "Baskı görünümü"
                            ],
                            [
                                "Premium",
                                "Metal yüzey"
                            ],
                            [
                                "Güvenli",
                                "Paketleme"
                            ]
                        ].map(([title, description])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "12px 10px",
                                    border: "1px solid rgba(255,255,255,.07)",
                                    borderRadius: 14,
                                    background: "rgba(255,255,255,.025)",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            display: "block",
                                            color: "#f4f4f5",
                                            fontSize: 12
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "small",
                                        style: {
                                            display: "block",
                                            marginTop: 3,
                                            fontSize: 10
                                        },
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductDesigner.tsx",
                                        lineNumber: 1095,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 1075,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ProductDesigner.tsx",
                        lineNumber: 1063,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductDesigner.tsx",
                lineNumber: 893,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductDesigner.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_ProductDesigner_tsx_1t1m60b._.js.map