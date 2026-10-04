(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ProductDesigner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDesigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-easy-crop/index.module.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProductDesigner({ products }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(products[0]?._id ?? "");
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDesigner.useEffect": ()=>{
            const savedProduct = localStorage.getItem("memoria-selected-product");
            if (!savedProduct) return;
            try {
                const parsedProduct = JSON.parse(savedProduct);
                if (parsedProduct?._id && products.some({
                    "ProductDesigner.useEffect": (product)=>product._id === parsedProduct._id
                }["ProductDesigner.useEffect"])) {
                    setSelectedId(parsedProduct._id);
                }
            } catch  {
                localStorage.removeItem("memoria-selected-product");
            }
        }
    }["ProductDesigner.useEffect"], [
        products
    ]);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDesigner.useMemo[selected]": ()=>{
            return products.find({
                "ProductDesigner.useMemo[selected]": (product)=>product._id === selectedId
            }["ProductDesigner.useMemo[selected]"]) ?? products[0];
        }
    }["ProductDesigner.useMemo[selected]"], [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        marginTop: 9,
                        color: "#52525b",
                        fontSize: 13,
                        lineHeight: 1.5
                    },
                    children: [
                        "Yüklediğiniz fotoğraf",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: isMagnet ? 23 : 21,
                    background: "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.88) 48%, rgba(120,120,120,.18) 100%)"
                },
                children: [
                    preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            ].map((pieceIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            borderRadius: 14,
                            background: "radial-gradient(circle at top, rgba(255,255,255,.98), rgba(228,228,231,.88) 48%, rgba(120,120,120,.18) 100%)"
                        },
                        children: [
                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-2",
        style: {
            alignItems: "start",
            gap: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    position: "relative",
                    overflow: "hidden",
                    padding: 24,
                    borderRadius: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge",
                                children: "Kişiye Özel Tasarım"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductDesigner.tsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 18,
                                    marginTop: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "designer-product",
                                                className: "input",
                                                value: selectedId,
                                                onChange: (event)=>changeProduct(event.target.value),
                                                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    preview && !isThreePiece ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 10,
                                    marginTop: 22
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    position: "sticky",
                    top: 110,
                    overflow: "hidden",
                    padding: 22,
                    borderRadius: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map(([title, description])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "12px 10px",
                                    border: "1px solid rgba(255,255,255,.07)",
                                    borderRadius: 14,
                                    background: "rgba(255,255,255,.025)",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ProductDesigner, "SuAVZW3azvfUC7cz8cOwMGJKaUA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductDesigner;
var _c;
__turbopack_context__.k.register(_c, "ProductDesigner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/normalize-wheel/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/normalize-wheel/src/normalizeWheel.js [app-client] (ecmascript)");
}),
"[project]/node_modules/normalize-wheel/src/ExecutionEnvironment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */ /*jslint evil: true */ var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */ var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM // For now, this is true - might change in the future.
};
module.exports = ExecutionEnvironment;
}),
"[project]/node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */ /**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */ var _populated = false;
// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;
// Actual IE browser for compatibility mode
var _ie_real_version;
// Platforms
var _osx, _windows, _linux, _android;
// Architectures
var _win64;
// Devices
var _iphone, _ipad, _native;
var _mobile;
function _populate() {
    if (_populated) {
        return;
    }
    _populated = true;
    // To work around buggy JS libraries that can't handle multi-digit
    // version numbers, Opera 10's user agent string claims it's Opera
    // 9, then later includes a Version/X.Y field:
    //
    // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
    var uas = navigator.userAgent;
    var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
    var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
    _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
    _ipad = /\b(iP[ao]d)/.exec(uas);
    _android = /Android/i.exec(uas);
    _native = /FBAN\/\w+;/i.exec(uas);
    _mobile = /Mobile/i.exec(uas);
    // Note that the IE team blog would have you believe you should be checking
    // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
    // from either x64 or ia64;  so ultimately, you should just check for Win64
    // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
    // Windows will send 'WOW64' instead.
    _win64 = !!/Win64/.exec(uas);
    if (agent) {
        _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
        // IE compatibility mode
        if (_ie && document && document.documentMode) {
            _ie = document.documentMode;
        }
        // grab the "true" ie version from the trident token if available
        var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
        _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
        _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
        _opera = agent[3] ? parseFloat(agent[3]) : NaN;
        _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
        if (_webkit) {
            // We do not add the regexp to the above test, because it will always
            // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
            // the userAgent string.
            agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
            _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
        } else {
            _chrome = NaN;
        }
    } else {
        _ie = _firefox = _opera = _chrome = _webkit = NaN;
    }
    if (os) {
        if (os[1]) {
            // Detect OS X version.  If no version number matches, set _osx to true.
            // Version examples:  10, 10_6_1, 10.7
            // Parses version number as a float, taking only first two sets of
            // digits.  If only one set of digits is found, returns just the major
            // version number.
            var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
            _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
        } else {
            _osx = false;
        }
        _windows = !!os[2];
        _linux = !!os[3];
    } else {
        _osx = _windows = _linux = false;
    }
}
var UserAgent_DEPRECATED = {
    /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ ie: function() {
        return _populate() || _ie;
    },
    /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */ ieCompatibilityMode: function() {
        return _populate() || _ie_real_version > _ie;
    },
    /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */ ie64: function() {
        return UserAgent_DEPRECATED.ie() && _win64;
    },
    /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ firefox: function() {
        return _populate() || _firefox;
    },
    /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ opera: function() {
        return _populate() || _opera;
    },
    /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ webkit: function() {
        return _populate() || _webkit;
    },
    /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */ safari: function() {
        return UserAgent_DEPRECATED.webkit();
    },
    /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ chrome: function() {
        return _populate() || _chrome;
    },
    /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */ windows: function() {
        return _populate() || _windows;
    },
    /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */ osx: function() {
        return _populate() || _osx;
    },
    /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */ linux: function() {
        return _populate() || _linux;
    },
    /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */ iphone: function() {
        return _populate() || _iphone;
    },
    mobile: function() {
        return _populate() || _iphone || _ipad || _android || _mobile;
    },
    nativeApp: function() {
        // webviews inside of the native apps
        return _populate() || _native;
    },
    android: function() {
        return _populate() || _android;
    },
    ipad: function() {
        return _populate() || _ipad;
    }
};
module.exports = UserAgent_DEPRECATED;
}),
"[project]/node_modules/normalize-wheel/src/isEventSupported.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */ var ExecutionEnvironment = __turbopack_context__.r("[project]/node_modules/normalize-wheel/src/ExecutionEnvironment.js [app-client] (ecmascript)");
var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
        return false;
    }
    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
        var element = document.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
}
module.exports = isEventSupported;
}),
"[project]/node_modules/normalize-wheel/src/normalizeWheel.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */ var UserAgent_DEPRECATED = __turbopack_context__.r("[project]/node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js [app-client] (ecmascript)");
var isEventSupported = __turbopack_context__.r("[project]/node_modules/normalize-wheel/src/isEventSupported.js [app-client] (ecmascript)");
// Reasonable defaults
var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */ function normalizeWheel(/*object*/ event) /*object*/ {
    var sX = 0, sY = 0, pX = 0, pY = 0; // pixelX, pixelY
    // Legacy
    if ('detail' in event) {
        sY = event.detail;
    }
    if ('wheelDelta' in event) {
        sY = -event.wheelDelta / 120;
    }
    if ('wheelDeltaY' in event) {
        sY = -event.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in event) {
        sX = -event.wheelDeltaX / 120;
    }
    // side scrolling on FF with DOMMouseScroll
    if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in event) {
        pY = event.deltaY;
    }
    if ('deltaX' in event) {
        pX = event.deltaX;
    }
    if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode == 1) {
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
        } else {
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
        }
    }
    // Fall-back if spin cannot be determined
    if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
    }
    return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
    };
}
/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */ normalizeWheel.getEventType = function() /*string*/ {
    return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
};
module.exports = normalizeWheel;
}),
"[project]/node_modules/react-easy-crop/index.module.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cropper,
    "getInitialCropFromCroppedAreaPercentages",
    ()=>getInitialCropFromCroppedAreaPercentages,
    "getInitialCropFromCroppedAreaPixels",
    ()=>getInitialCropFromCroppedAreaPixels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$normalize$2d$wheel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/normalize-wheel/index.js [app-client] (ecmascript)");
;
;
;
/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotation
 */ function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
    if (rotation === void 0) {
        rotation = 0;
    }
    var _a = rotateSize(mediaWidth, mediaHeight, rotation), width = _a.width, height = _a.height;
    var fittingWidth = Math.min(width, containerWidth);
    var fittingHeight = Math.min(height, containerHeight);
    if (fittingWidth > fittingHeight * aspect) {
        return {
            width: fittingHeight * aspect,
            height: fittingHeight
        };
    }
    return {
        width: fittingWidth,
        height: fittingWidth / aspect
    };
}
/**
 * Compute media zoom.
 * We fit the media into the container with "max-width: 100%; max-height: 100%;"
 */ function getMediaZoom(mediaSize) {
    // Take the axis with more pixels to improve accuracy
    return mediaSize.width > mediaSize.height ? mediaSize.width / mediaSize.naturalWidth : mediaSize.height / mediaSize.naturalHeight;
}
/**
 * Ensure a new media position stays in the crop area.
 */ function restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
    if (rotation === void 0) {
        rotation = 0;
    }
    var _a = rotateSize(mediaSize.width, mediaSize.height, rotation), width = _a.width, height = _a.height;
    return {
        x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
        y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
    };
}
function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
    var maxPosition = Math.abs(mediaSize * zoom / 2 - cropSize / 2);
    return clamp(position, -maxPosition, maxPosition);
}
function getDistanceBetweenPoints(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
    return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */ function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
    if (rotation === void 0) {
        rotation = 0;
    }
    if (restrictPosition === void 0) {
        restrictPosition = true;
    }
    // if the media is rotated by the user, we cannot limit the position anymore
    // as it might need to be negative.
    var limitAreaFn = restrictPosition ? limitArea : noOp;
    var mediaBBoxSize = rotateSize(mediaSize.width, mediaSize.height, rotation);
    var mediaNaturalBBoxSize = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);
    // calculate the crop area in percentages
    // in the rotated space
    var croppedAreaPercentages = {
        x: limitAreaFn(100, ((mediaBBoxSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaBBoxSize.width * 100),
        y: limitAreaFn(100, ((mediaBBoxSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaBBoxSize.height * 100),
        width: limitAreaFn(100, cropSize.width / mediaBBoxSize.width * 100 / zoom),
        height: limitAreaFn(100, cropSize.height / mediaBBoxSize.height * 100 / zoom)
    };
    // we compute the pixels size naively
    var widthInPixels = Math.round(limitAreaFn(mediaNaturalBBoxSize.width, croppedAreaPercentages.width * mediaNaturalBBoxSize.width / 100));
    var heightInPixels = Math.round(limitAreaFn(mediaNaturalBBoxSize.height, croppedAreaPercentages.height * mediaNaturalBBoxSize.height / 100));
    var isImgWiderThanHigh = mediaNaturalBBoxSize.width >= mediaNaturalBBoxSize.height * aspect;
    // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
    // if the media is wider than high, when zoom is 0, the crop height will be equals to image height
    // thus we want to compute the width from the height and aspect for accuracy.
    // Otherwise, we compute the height from width and aspect.
    var sizePixels = isImgWiderThanHigh ? {
        width: Math.round(heightInPixels * aspect),
        height: heightInPixels
    } : {
        width: widthInPixels,
        height: Math.round(widthInPixels / aspect)
    };
    var croppedAreaPixels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sizePixels), {
        x: Math.round(limitAreaFn(mediaNaturalBBoxSize.width - sizePixels.width, croppedAreaPercentages.x * mediaNaturalBBoxSize.width / 100)),
        y: Math.round(limitAreaFn(mediaNaturalBBoxSize.height - sizePixels.height, croppedAreaPercentages.y * mediaNaturalBBoxSize.height / 100))
    });
    return {
        croppedAreaPercentages: croppedAreaPercentages,
        croppedAreaPixels: croppedAreaPixels
    };
}
/**
 * Ensure the returned value is between 0 and max
 */ function limitArea(max, value) {
    return Math.min(max, Math.max(0, value));
}
function noOp(_max, value) {
    return value;
}
/**
 * Compute crop and zoom from the croppedAreaPercentages.
 */ function getInitialCropFromCroppedAreaPercentages(croppedAreaPercentages, mediaSize, rotation, cropSize, minZoom, maxZoom) {
    var mediaBBoxSize = rotateSize(mediaSize.width, mediaSize.height, rotation);
    // This is the inverse process of computeCroppedArea
    var zoom = clamp(cropSize.width / mediaBBoxSize.width * (100 / croppedAreaPercentages.width), minZoom, maxZoom);
    var crop = {
        x: zoom * mediaBBoxSize.width / 2 - cropSize.width / 2 - mediaBBoxSize.width * zoom * (croppedAreaPercentages.x / 100),
        y: zoom * mediaBBoxSize.height / 2 - cropSize.height / 2 - mediaBBoxSize.height * zoom * (croppedAreaPercentages.y / 100)
    };
    return {
        crop: crop,
        zoom: zoom
    };
}
/**
 * Compute zoom from the croppedAreaPixels
 */ function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
    var mediaZoom = getMediaZoom(mediaSize);
    return cropSize.height > cropSize.width ? cropSize.height / (croppedAreaPixels.height * mediaZoom) : cropSize.width / (croppedAreaPixels.width * mediaZoom);
}
/**
 * Compute crop and zoom from the croppedAreaPixels
 */ function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, rotation, cropSize, minZoom, maxZoom) {
    if (rotation === void 0) {
        rotation = 0;
    }
    var mediaNaturalBBoxSize = rotateSize(mediaSize.naturalWidth, mediaSize.naturalHeight, rotation);
    var zoom = clamp(getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize), minZoom, maxZoom);
    var cropZoom = cropSize.height > cropSize.width ? cropSize.height / croppedAreaPixels.height : cropSize.width / croppedAreaPixels.width;
    var crop = {
        x: ((mediaNaturalBBoxSize.width - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
        y: ((mediaNaturalBBoxSize.height - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
    };
    return {
        crop: crop,
        zoom: zoom
    };
}
/**
 * Return the point that is the center of point a and b
 */ function getCenter(a, b) {
    return {
        x: (b.x + a.x) / 2,
        y: (b.y + a.y) / 2
    };
}
function getRadianAngle(degreeValue) {
    return degreeValue * Math.PI / 180;
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */ function rotateSize(width, height, rotation) {
    var rotRad = getRadianAngle(rotation);
    return {
        width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
    };
}
/**
 * Clamp value between min and max
 */ function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Combine multiple class names into a single string.
 */ function classNames() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return args.filter(function(value) {
        if (typeof value === 'string' && value.length > 0) {
            return true;
        }
        return false;
    }).join(' ').trim();
}
var css_248z = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";
var MIN_ZOOM = 1;
var MAX_ZOOM = 3;
var KEYBOARD_STEP = 1;
var Cropper = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Cropper, _super);
    function Cropper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cropperRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"]();
        _this.imageRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"]();
        _this.videoRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"]();
        _this.containerPosition = {
            x: 0,
            y: 0
        };
        _this.containerRef = null;
        _this.styleRef = null;
        _this.containerRect = null;
        _this.mediaSize = {
            width: 0,
            height: 0,
            naturalWidth: 0,
            naturalHeight: 0
        };
        _this.dragStartPosition = {
            x: 0,
            y: 0
        };
        _this.dragStartCrop = {
            x: 0,
            y: 0
        };
        _this.gestureZoomStart = 0;
        _this.gestureRotationStart = 0;
        _this.isTouching = false;
        _this.lastPinchDistance = 0;
        _this.lastPinchRotation = 0;
        _this.rafDragTimeout = null;
        _this.rafPinchTimeout = null;
        _this.wheelTimer = null;
        _this.currentDoc = typeof document !== 'undefined' ? document : null;
        _this.currentWindow = typeof window !== 'undefined' ? window : null;
        _this.resizeObserver = null;
        _this.previousCropSize = null;
        _this.isInitialized = false;
        _this.state = {
            cropSize: null,
            hasWheelJustStarted: false,
            mediaObjectFit: undefined
        };
        _this.initResizeObserver = function() {
            if (typeof window.ResizeObserver === 'undefined' || !_this.containerRef) {
                return;
            }
            var isFirstResize = true;
            _this.resizeObserver = new window.ResizeObserver(function(entries) {
                if (isFirstResize) {
                    isFirstResize = false; // observe() is called on mount, we don't want to trigger a recompute on mount
                    return;
                }
                _this.computeSizes();
            });
            _this.resizeObserver.observe(_this.containerRef);
        };
        // this is to prevent Safari on iOS >= 10 to zoom the page
        _this.preventZoomSafari = function(e) {
            return e.preventDefault();
        };
        _this.cleanEvents = function() {
            if (!_this.currentDoc) return;
            _this.currentDoc.removeEventListener('mousemove', _this.onMouseMove);
            _this.currentDoc.removeEventListener('mouseup', _this.onDragStopped);
            _this.currentDoc.removeEventListener('touchmove', _this.onTouchMove);
            _this.currentDoc.removeEventListener('touchend', _this.onDragStopped);
            _this.currentDoc.removeEventListener('gesturechange', _this.onGestureChange);
            _this.currentDoc.removeEventListener('gestureend', _this.onGestureEnd);
            _this.currentDoc.removeEventListener('scroll', _this.onScroll);
        };
        _this.clearScrollEvent = function() {
            if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);
            if (_this.wheelTimer) {
                clearTimeout(_this.wheelTimer);
            }
        };
        _this.onMediaLoad = function() {
            var cropSize = _this.computeSizes();
            if (cropSize) {
                _this.previousCropSize = cropSize;
                _this.emitCropData();
                _this.setInitialCrop(cropSize);
                _this.isInitialized = true;
            }
            if (_this.props.onMediaLoaded) {
                _this.props.onMediaLoaded(_this.mediaSize);
            }
        };
        _this.setInitialCrop = function(cropSize) {
            if (_this.props.initialCroppedAreaPercentages) {
                var _a = getInitialCropFromCroppedAreaPercentages(_this.props.initialCroppedAreaPercentages, _this.mediaSize, _this.props.rotation, cropSize, _this.props.minZoom, _this.props.maxZoom), crop = _a.crop, zoom = _a.zoom;
                _this.props.onCropChange(crop);
                _this.props.onZoomChange && _this.props.onZoomChange(zoom);
            } else if (_this.props.initialCroppedAreaPixels) {
                var _b = getInitialCropFromCroppedAreaPixels(_this.props.initialCroppedAreaPixels, _this.mediaSize, _this.props.rotation, cropSize, _this.props.minZoom, _this.props.maxZoom), crop = _b.crop, zoom = _b.zoom;
                _this.props.onCropChange(crop);
                _this.props.onZoomChange && _this.props.onZoomChange(zoom);
            }
        };
        _this.computeSizes = function() {
            var _a, _b, _c, _d, _e, _f;
            var mediaRef = _this.imageRef.current || _this.videoRef.current;
            if (mediaRef && _this.containerRef) {
                _this.containerRect = _this.containerRef.getBoundingClientRect();
                _this.saveContainerPosition();
                var containerAspect = _this.containerRect.width / _this.containerRect.height;
                var naturalWidth = ((_a = _this.imageRef.current) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef.current) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0;
                var naturalHeight = ((_c = _this.imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef.current) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0;
                var isMediaScaledDown = mediaRef.offsetWidth < naturalWidth || mediaRef.offsetHeight < naturalHeight;
                var mediaAspect = naturalWidth / naturalHeight;
                // We do not rely on the offsetWidth/offsetHeight if the media is scaled down
                // as the values they report are rounded. That will result in precision losses
                // when calculating zoom. We use the fact that the media is positionned relative
                // to the container. That allows us to use the container's dimensions
                // and natural aspect ratio of the media to calculate accurate media size.
                // However, for this to work, the container should not be rotated
                var renderedMediaSize = void 0;
                if (isMediaScaledDown) {
                    switch(_this.state.mediaObjectFit){
                        default:
                        case 'contain':
                            renderedMediaSize = containerAspect > mediaAspect ? {
                                width: _this.containerRect.height * mediaAspect,
                                height: _this.containerRect.height
                            } : {
                                width: _this.containerRect.width,
                                height: _this.containerRect.width / mediaAspect
                            };
                            break;
                        case 'horizontal-cover':
                            renderedMediaSize = {
                                width: _this.containerRect.width,
                                height: _this.containerRect.width / mediaAspect
                            };
                            break;
                        case 'vertical-cover':
                            renderedMediaSize = {
                                width: _this.containerRect.height * mediaAspect,
                                height: _this.containerRect.height
                            };
                            break;
                    }
                } else {
                    renderedMediaSize = {
                        width: mediaRef.offsetWidth,
                        height: mediaRef.offsetHeight
                    };
                }
                _this.mediaSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, renderedMediaSize), {
                    naturalWidth: naturalWidth,
                    naturalHeight: naturalHeight
                });
                // set media size in the parent
                if (_this.props.setMediaSize) {
                    _this.props.setMediaSize(_this.mediaSize);
                }
                var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(_this.mediaSize.width, _this.mediaSize.height, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);
                if (((_e = _this.state.cropSize) === null || _e === void 0 ? void 0 : _e.height) !== cropSize.height || ((_f = _this.state.cropSize) === null || _f === void 0 ? void 0 : _f.width) !== cropSize.width) {
                    _this.props.onCropSizeChange && _this.props.onCropSizeChange(cropSize);
                }
                _this.setState({
                    cropSize: cropSize
                }, _this.recomputeCropPosition);
                // pass crop size to parent
                if (_this.props.setCropSize) {
                    _this.props.setCropSize(cropSize);
                }
                return cropSize;
            }
        };
        _this.saveContainerPosition = function() {
            if (_this.containerRef) {
                var bounds = _this.containerRef.getBoundingClientRect();
                _this.containerPosition = {
                    x: bounds.left,
                    y: bounds.top
                };
            }
        };
        _this.onMouseDown = function(e) {
            if (!_this.currentDoc) return;
            e.preventDefault();
            _this.currentDoc.addEventListener('mousemove', _this.onMouseMove);
            _this.currentDoc.addEventListener('mouseup', _this.onDragStopped);
            _this.saveContainerPosition();
            _this.onDragStart(Cropper.getMousePoint(e));
        };
        _this.onMouseMove = function(e) {
            return _this.onDrag(Cropper.getMousePoint(e));
        };
        _this.onScroll = function(e) {
            if (!_this.currentDoc) return;
            e.preventDefault();
            _this.saveContainerPosition();
        };
        _this.onTouchStart = function(e) {
            if (!_this.currentDoc) return;
            _this.isTouching = true;
            if (_this.props.onTouchRequest && !_this.props.onTouchRequest(e)) {
                return;
            }
            _this.currentDoc.addEventListener('touchmove', _this.onTouchMove, {
                passive: false
            }); // iOS 11 now defaults to passive: true
            _this.currentDoc.addEventListener('touchend', _this.onDragStopped);
            _this.saveContainerPosition();
            if (e.touches.length === 2) {
                _this.onPinchStart(e);
            } else if (e.touches.length === 1) {
                _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
            }
        };
        _this.onTouchMove = function(e) {
            // Prevent whole page from scrolling on iOS.
            e.preventDefault();
            if (e.touches.length === 2) {
                _this.onPinchMove(e);
            } else if (e.touches.length === 1) {
                _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
            }
        };
        _this.onGestureStart = function(e) {
            if (!_this.currentDoc) return;
            e.preventDefault();
            _this.currentDoc.addEventListener('gesturechange', _this.onGestureChange);
            _this.currentDoc.addEventListener('gestureend', _this.onGestureEnd);
            _this.gestureZoomStart = _this.props.zoom;
            _this.gestureRotationStart = _this.props.rotation;
        };
        _this.onGestureChange = function(e) {
            e.preventDefault();
            if (_this.isTouching) {
                // this is to avoid conflict between gesture and touch events
                return;
            }
            var point = Cropper.getMousePoint(e);
            var newZoom = _this.gestureZoomStart - 1 + e.scale;
            _this.setNewZoom(newZoom, point, {
                shouldUpdatePosition: true
            });
            if (_this.props.onRotationChange) {
                var newRotation = _this.gestureRotationStart + e.rotation;
                _this.props.onRotationChange(newRotation);
            }
        };
        _this.onGestureEnd = function(e) {
            _this.cleanEvents();
        };
        _this.onDragStart = function(_a) {
            var _b, _c;
            var x = _a.x, y = _a.y;
            _this.dragStartPosition = {
                x: x,
                y: y
            };
            _this.dragStartCrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, _this.props.crop);
            (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
        };
        _this.onDrag = function(_a) {
            var x = _a.x, y = _a.y;
            if (!_this.currentWindow) return;
            if (_this.rafDragTimeout) _this.currentWindow.cancelAnimationFrame(_this.rafDragTimeout);
            _this.rafDragTimeout = _this.currentWindow.requestAnimationFrame(function() {
                if (!_this.state.cropSize) return;
                if (x === undefined || y === undefined) return;
                var offsetX = x - _this.dragStartPosition.x;
                var offsetY = y - _this.dragStartPosition.y;
                var requestedPosition = {
                    x: _this.dragStartCrop.x + offsetX,
                    y: _this.dragStartCrop.y + offsetY
                };
                var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;
                _this.props.onCropChange(newPosition);
            });
        };
        _this.onDragStopped = function() {
            var _a, _b;
            _this.isTouching = false;
            _this.cleanEvents();
            _this.emitCropData();
            (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        _this.onWheel = function(e) {
            if (!_this.currentWindow) return;
            if (_this.props.onWheelRequest && !_this.props.onWheelRequest(e)) {
                return;
            }
            e.preventDefault();
            var point = Cropper.getMousePoint(e);
            var pixelY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$normalize$2d$wheel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e).pixelY;
            var newZoom = _this.props.zoom - pixelY * _this.props.zoomSpeed / 200;
            _this.setNewZoom(newZoom, point, {
                shouldUpdatePosition: true
            });
            if (!_this.state.hasWheelJustStarted) {
                _this.setState({
                    hasWheelJustStarted: true
                }, function() {
                    var _a, _b;
                    return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
                });
            }
            if (_this.wheelTimer) {
                clearTimeout(_this.wheelTimer);
            }
            _this.wheelTimer = _this.currentWindow.setTimeout(function() {
                return _this.setState({
                    hasWheelJustStarted: false
                }, function() {
                    var _a, _b;
                    return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
                });
            }, 250);
        };
        _this.getPointOnContainer = function(_a, containerTopLeft) {
            var x = _a.x, y = _a.y;
            if (!_this.containerRect) {
                throw new Error('The Cropper is not mounted');
            }
            return {
                x: _this.containerRect.width / 2 - (x - containerTopLeft.x),
                y: _this.containerRect.height / 2 - (y - containerTopLeft.y)
            };
        };
        _this.getPointOnMedia = function(_a) {
            var x = _a.x, y = _a.y;
            var _b = _this.props, crop = _b.crop, zoom = _b.zoom;
            return {
                x: (x + crop.x) / zoom,
                y: (y + crop.y) / zoom
            };
        };
        _this.setNewZoom = function(zoom, point, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.shouldUpdatePosition, shouldUpdatePosition = _c === void 0 ? true : _c;
            if (!_this.state.cropSize || !_this.props.onZoomChange) return;
            var newZoom = clamp(zoom, _this.props.minZoom, _this.props.maxZoom);
            if (shouldUpdatePosition) {
                var zoomPoint = _this.getPointOnContainer(point, _this.containerPosition);
                var zoomTarget = _this.getPointOnMedia(zoomPoint);
                var requestedPosition = {
                    x: zoomTarget.x * newZoom - zoomPoint.x,
                    y: zoomTarget.y * newZoom - zoomPoint.y
                };
                var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;
                _this.props.onCropChange(newPosition);
            }
            _this.props.onZoomChange(newZoom);
        };
        _this.getCropData = function() {
            if (!_this.state.cropSize) {
                return null;
            }
            // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ValentinH/react-easy-crop/issues/6)
            var restrictedPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;
            return computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition);
        };
        _this.emitCropData = function() {
            var cropData = _this.getCropData();
            if (!cropData) return;
            var croppedAreaPercentages = cropData.croppedAreaPercentages, croppedAreaPixels = cropData.croppedAreaPixels;
            if (_this.props.onCropComplete) {
                _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
            }
            if (_this.props.onCropAreaChange) {
                _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
            }
        };
        _this.emitCropAreaChange = function() {
            var cropData = _this.getCropData();
            if (!cropData) return;
            var croppedAreaPercentages = cropData.croppedAreaPercentages, croppedAreaPixels = cropData.croppedAreaPixels;
            if (_this.props.onCropAreaChange) {
                _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
            }
        };
        _this.recomputeCropPosition = function() {
            var _a, _b;
            if (!_this.state.cropSize) return;
            var adjustedCrop = _this.props.crop;
            // Only scale if we're initialized and this is a legitimate resize
            if (_this.isInitialized && ((_a = _this.previousCropSize) === null || _a === void 0 ? void 0 : _a.width) && ((_b = _this.previousCropSize) === null || _b === void 0 ? void 0 : _b.height)) {
                var sizeChanged = Math.abs(_this.previousCropSize.width - _this.state.cropSize.width) > 1e-6 || Math.abs(_this.previousCropSize.height - _this.state.cropSize.height) > 1e-6;
                if (sizeChanged) {
                    var scaleX = _this.state.cropSize.width / _this.previousCropSize.width;
                    var scaleY = _this.state.cropSize.height / _this.previousCropSize.height;
                    adjustedCrop = {
                        x: _this.props.crop.x * scaleX,
                        y: _this.props.crop.y * scaleY
                    };
                }
            }
            var newPosition = _this.props.restrictPosition ? restrictPosition(adjustedCrop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : adjustedCrop;
            _this.previousCropSize = _this.state.cropSize;
            _this.props.onCropChange(newPosition);
            _this.emitCropData();
        };
        _this.onKeyDown = function(event) {
            var _a, _b;
            var _c = _this.props, crop = _c.crop, onCropChange = _c.onCropChange, keyboardStep = _c.keyboardStep, zoom = _c.zoom, rotation = _c.rotation;
            var step = keyboardStep;
            if (!_this.state.cropSize) return;
            // if the shift key is pressed, reduce the step to allow finer control
            if (event.shiftKey) {
                step *= 0.2;
            }
            var newCrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, crop);
            switch(event.key){
                case 'ArrowUp':
                    newCrop.y -= step;
                    event.preventDefault();
                    break;
                case 'ArrowDown':
                    newCrop.y += step;
                    event.preventDefault();
                    break;
                case 'ArrowLeft':
                    newCrop.x -= step;
                    event.preventDefault();
                    break;
                case 'ArrowRight':
                    newCrop.x += step;
                    event.preventDefault();
                    break;
                default:
                    return;
            }
            if (_this.props.restrictPosition) {
                newCrop = restrictPosition(newCrop, _this.mediaSize, _this.state.cropSize, zoom, rotation);
            }
            if (!event.repeat) {
                (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            onCropChange(newCrop);
        };
        _this.onKeyUp = function(event) {
            var _a, _b;
            switch(event.key){
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    event.preventDefault();
                    break;
                default:
                    return;
            }
            _this.emitCropData();
            (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        return _this;
    }
    Cropper.prototype.componentDidMount = function() {
        if (!this.currentDoc || !this.currentWindow) return;
        if (this.containerRef) {
            if (this.containerRef.ownerDocument) {
                this.currentDoc = this.containerRef.ownerDocument;
            }
            if (this.currentDoc.defaultView) {
                this.currentWindow = this.currentDoc.defaultView;
            }
            this.initResizeObserver();
            // only add window resize listener if ResizeObserver is not supported. Otherwise, it would be redundant
            if (typeof window.ResizeObserver === 'undefined') {
                this.currentWindow.addEventListener('resize', this.computeSizes);
            }
            this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
                passive: false
            });
            this.containerRef.addEventListener('gesturestart', this.onGestureStart);
        }
        this.currentDoc.addEventListener('scroll', this.onScroll);
        if (!this.props.disableAutomaticStylesInjection) {
            this.styleRef = this.currentDoc.createElement('style');
            this.styleRef.setAttribute('type', 'text/css');
            if (this.props.nonce) {
                this.styleRef.setAttribute('nonce', this.props.nonce);
            }
            this.styleRef.innerHTML = css_248z;
            this.currentDoc.head.appendChild(this.styleRef);
        }
        // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called
        if (this.imageRef.current && this.imageRef.current.complete) {
            this.onMediaLoad();
        }
        // set image and video refs in the parent if the callbacks exist
        if (this.props.setImageRef) {
            this.props.setImageRef(this.imageRef);
        }
        if (this.props.setVideoRef) {
            this.props.setVideoRef(this.videoRef);
        }
        if (this.props.setCropperRef) {
            this.props.setCropperRef(this.cropperRef);
        }
    };
    Cropper.prototype.componentWillUnmount = function() {
        var _a, _b;
        if (!this.currentDoc || !this.currentWindow) return;
        if (typeof window.ResizeObserver === 'undefined') {
            this.currentWindow.removeEventListener('resize', this.computeSizes);
        }
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        if (this.containerRef) {
            this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
        }
        if (this.styleRef) {
            (_b = this.styleRef.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.styleRef);
        }
        this.cleanEvents();
        this.props.zoomWithScroll && this.clearScrollEvent();
    };
    Cropper.prototype.componentDidUpdate = function(prevProps) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (prevProps.rotation !== this.props.rotation) {
            this.computeSizes();
            this.recomputeCropPosition();
        } else if (prevProps.aspect !== this.props.aspect) {
            this.computeSizes();
        } else if (prevProps.objectFit !== this.props.objectFit) {
            this.computeSizes();
        } else if (prevProps.zoom !== this.props.zoom) {
            this.recomputeCropPosition();
        } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
            this.computeSizes();
        } else if (((_e = prevProps.crop) === null || _e === void 0 ? void 0 : _e.x) !== ((_f = this.props.crop) === null || _f === void 0 ? void 0 : _f.x) || ((_g = prevProps.crop) === null || _g === void 0 ? void 0 : _g.y) !== ((_h = this.props.crop) === null || _h === void 0 ? void 0 : _h.y)) {
            this.emitCropAreaChange();
        }
        if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
            this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
                passive: false
            }) : this.clearScrollEvent();
        }
        if (prevProps.video !== this.props.video) {
            (_j = this.videoRef.current) === null || _j === void 0 ? void 0 : _j.load();
        }
        var objectFit = this.getObjectFit();
        if (objectFit !== this.state.mediaObjectFit) {
            this.setState({
                mediaObjectFit: objectFit
            }, this.computeSizes);
        }
    };
    Cropper.prototype.getAspect = function() {
        var _a = this.props, cropSize = _a.cropSize, aspect = _a.aspect;
        if (cropSize) {
            return cropSize.width / cropSize.height;
        }
        return aspect;
    };
    Cropper.prototype.getObjectFit = function() {
        var _a, _b, _c, _d;
        if (this.props.objectFit === 'cover') {
            var mediaRef = this.imageRef.current || this.videoRef.current;
            if (mediaRef && this.containerRef) {
                this.containerRect = this.containerRef.getBoundingClientRect();
                var containerAspect = this.containerRect.width / this.containerRect.height;
                var naturalWidth = ((_a = this.imageRef.current) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = this.videoRef.current) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0;
                var naturalHeight = ((_c = this.imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = this.videoRef.current) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0;
                var mediaAspect = naturalWidth / naturalHeight;
                return mediaAspect < containerAspect ? 'horizontal-cover' : 'vertical-cover';
            }
            return 'horizontal-cover';
        }
        return this.props.objectFit;
    };
    Cropper.prototype.onPinchStart = function(e) {
        var pointA = Cropper.getTouchPoint(e.touches[0]);
        var pointB = Cropper.getTouchPoint(e.touches[1]);
        this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
        this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
        this.onDragStart(getCenter(pointA, pointB));
    };
    Cropper.prototype.onPinchMove = function(e) {
        var _this = this;
        if (!this.currentDoc || !this.currentWindow) return;
        var pointA = Cropper.getTouchPoint(e.touches[0]);
        var pointB = Cropper.getTouchPoint(e.touches[1]);
        var center = getCenter(pointA, pointB);
        this.onDrag(center);
        if (this.rafPinchTimeout) this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout);
        this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
            var distance = getDistanceBetweenPoints(pointA, pointB);
            var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);
            _this.setNewZoom(newZoom, center, {
                shouldUpdatePosition: false
            });
            _this.lastPinchDistance = distance;
            var rotation = getRotationBetweenPoints(pointA, pointB);
            var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
            _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
            _this.lastPinchRotation = rotation;
        });
    };
    Cropper.prototype.render = function() {
        var _this = this;
        var _a;
        var _b = this.props, image = _b.image, video = _b.video, mediaProps = _b.mediaProps, cropperProps = _b.cropperProps, transform = _b.transform, _c = _b.crop, x = _c.x, y = _c.y, rotation = _b.rotation, zoom = _b.zoom, cropShape = _b.cropShape, showGrid = _b.showGrid, roundCropAreaPixels = _b.roundCropAreaPixels, _d = _b.style, containerStyle = _d.containerStyle, cropAreaStyle = _d.cropAreaStyle, mediaStyle = _d.mediaStyle, _e = _b.classes, containerClassName = _e.containerClassName, cropAreaClassName = _e.cropAreaClassName, mediaClassName = _e.mediaClassName;
        var objectFit = (_a = this.state.mediaObjectFit) !== null && _a !== void 0 ? _a : this.getObjectFit();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart,
            ref: function ref(el) {
                return _this.containerRef = el;
            },
            "data-testid": "container",
            style: containerStyle,
            className: classNames('reactEasyCrop_Container', containerClassName)
        }, image ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("img", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
            alt: "",
            className: classNames('reactEasyCrop_Image', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
        }, mediaProps, {
            src: image,
            ref: this.imageRef,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, mediaStyle), {
                transform: transform || "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg) scale(").concat(zoom, ")")
            }),
            onLoad: this.onMediaLoad
        })) : video && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("video", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
            autoPlay: true,
            playsInline: true,
            loop: true,
            muted: true,
            className: classNames('reactEasyCrop_Video', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
        }, mediaProps, {
            ref: this.videoRef,
            onLoadedMetadata: this.onMediaLoad,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, mediaStyle), {
                transform: transform || "translate(".concat(x, "px, ").concat(y, "px) rotate(").concat(rotation, "deg) scale(").concat(zoom, ")")
            }),
            controls: false
        }), (Array.isArray(video) ? video : [
            {
                src: video
            }
        ]).map(function(item) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("source", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
                key: item.src
            }, item));
        })), this.state.cropSize && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
            ref: this.cropperRef,
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, cropAreaStyle), {
                width: roundCropAreaPixels ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
                height: roundCropAreaPixels ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
            }),
            tabIndex: 0,
            onKeyDown: this.onKeyDown,
            onKeyUp: this.onKeyUp,
            "data-testid": "cropper",
            className: classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
        }, cropperProps)));
    };
    Cropper.defaultProps = {
        zoom: 1,
        rotation: 0,
        aspect: 4 / 3,
        maxZoom: MAX_ZOOM,
        minZoom: MIN_ZOOM,
        cropShape: 'rect',
        objectFit: 'contain',
        showGrid: true,
        style: {},
        classes: {},
        mediaProps: {},
        cropperProps: {},
        zoomSpeed: 1,
        restrictPosition: true,
        zoomWithScroll: true,
        keyboardStep: KEYBOARD_STEP
    };
    Cropper.getMousePoint = function(e) {
        return {
            x: Number(e.clientX),
            y: Number(e.clientY)
        };
    };
    Cropper.getTouchPoint = function(touch) {
        return {
            x: Number(touch.clientX),
            y: Number(touch.clientY)
        };
    };
    return Cropper;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
;
}),
"[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
]);

//# sourceMappingURL=_1o4_-wo._.js.map