(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/odeme/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SHIPPING_COST = 49.9;
function CheckoutPage() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusType, setStatusType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agreementAccepted, setAgreementAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        city: "Tekirdağ",
        district: "",
        postalCode: "",
        orderNote: "",
        paymentMethod: "Kapıda Ödeme"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            try {
                const savedCart = localStorage.getItem("memoria-cart");
                const parsedCart = savedCart ? JSON.parse(savedCart) : [];
                setCart(Array.isArray(parsedCart) ? parsedCart : []);
            } catch  {
                setCart([]);
                localStorage.removeItem("memoria-cart");
            } finally{
                setIsLoaded(true);
            }
        }
    }["CheckoutPage.useEffect"], []);
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[subtotal]": ()=>{
            return cart.reduce({
                "CheckoutPage.useMemo[subtotal]": (sum, item)=>sum + item.price * item.quantity
            }["CheckoutPage.useMemo[subtotal]"], 0);
        }
    }["CheckoutPage.useMemo[subtotal]"], [
        cart
    ]);
    const shipping = cart.length ? SHIPPING_COST : 0;
    const total = subtotal + shipping;
    function updateForm(key, value) {
        setForm((currentForm)=>({
                ...currentForm,
                [key]: value
            }));
        setStatus("");
    }
    function splitName(fullName) {
        const parts = fullName.trim().split(/\s+/);
        const name = parts[0] || "Misafir";
        const surname = parts.slice(1).join(" ") || "Kullanıcı";
        return {
            name,
            surname
        };
    }
    function validateForm() {
        if (!cart.length) {
            return "Sepetiniz boş. Önce ürün ekleyin.";
        }
        if (form.fullName.trim().length < 3) {
            return "Lütfen ad ve soyadınızı girin.";
        }
        if (form.phone.replace(/\D/g, "").length < 10) {
            return "Lütfen geçerli bir telefon numarası girin.";
        }
        if (!form.email.includes("@") || !form.email.includes(".")) {
            return "Lütfen geçerli bir e-posta adresi girin.";
        }
        if (!form.city.trim()) {
            return "Lütfen şehir bilgisini girin.";
        }
        if (!form.district.trim()) {
            return "Lütfen ilçe bilgisini girin.";
        }
        if (form.address.trim().length < 10) {
            return "Lütfen açık teslimat adresinizi girin.";
        }
        if (!agreementAccepted) {
            return "Siparişi tamamlamak için sözleşmeleri onaylayın.";
        }
        return "";
    }
    async function createOrderOnly() {
        const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userEmail: form.email.trim(),
                customerName: form.fullName.trim(),
                phone: form.phone.trim(),
                address: `${form.address.trim()}, ${form.district.trim()}/${form.city.trim()}`,
                city: form.city.trim(),
                note: form.orderNote.trim(),
                uploadedImage: cart[0]?.image || "",
                paymentMethod: form.paymentMethod,
                total,
                items: cart.map((item)=>({
                        productId: item.productId,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        size: item.size,
                        note: item.note,
                        uploadedImage: item.image
                    }))
            })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Sipariş oluşturulamadı.");
        }
        localStorage.removeItem("memoria-cart");
        setCart([]);
        setStatusType("success");
        setStatus(`Siparişiniz başarıyla oluşturuldu. Sipariş kodunuz: ${data.orderCode}`);
    }
    async function startIyzicoPayment() {
        const { name, surname } = splitName(form.fullName);
        const productItems = cart.map((item, index)=>({
                id: item.productId || `item-${index + 1}`,
                name: item.name,
                category1: "Metal Tablo",
                itemType: "PHYSICAL",
                price: (item.price * item.quantity).toFixed(2)
            }));
        const basketItems = [
            ...productItems,
            {
                id: "shipping",
                name: "Kargo",
                category1: "Kargo",
                itemType: "VIRTUAL",
                price: SHIPPING_COST.toFixed(2)
            }
        ];
        const fullAddress = `${form.address.trim()}, ${form.district.trim()}/${form.city.trim()}`;
        const response = await fetch("/api/iyzico/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                price: total.toFixed(2),
                paidPrice: total.toFixed(2),
                basketItems,
                customer: {
                    id: "guest-user",
                    name,
                    surname,
                    phone: form.phone.trim(),
                    email: form.email.trim(),
                    identityNumber: "11111111111"
                },
                shippingAddress: {
                    contactName: form.fullName.trim(),
                    city: form.city.trim(),
                    address: fullAddress,
                    zipCode: form.postalCode.trim() || "59500"
                },
                billingAddress: {
                    contactName: form.fullName.trim(),
                    city: form.city.trim(),
                    address: fullAddress,
                    zipCode: form.postalCode.trim() || "59500"
                }
            })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || data.errorMessage || "iyzico ödeme formu oluşturulamadı.");
        }
        if (data.paymentPageUrl) {
            window.location.href = data.paymentPageUrl;
            return;
        }
        if (data.checkoutFormContent) {
            const checkoutWindow = window.open("", "_self");
            if (checkoutWindow) {
                checkoutWindow.document.open();
                checkoutWindow.document.write(data.checkoutFormContent);
                checkoutWindow.document.close();
                return;
            }
        }
        throw new Error("iyzico ödeme formu alınamadı.");
    }
    async function handleCheckout() {
        const validationMessage = validateForm();
        if (validationMessage) {
            setStatusType("error");
            setStatus(validationMessage);
            return;
        }
        try {
            setLoading(true);
            setStatusType("info");
            setStatus("İşleminiz hazırlanıyor...");
            if (form.paymentMethod === "iyzico") {
                await startIyzicoPayment();
                return;
            }
            await createOrderOnly();
        } catch (error) {
            setStatusType("error");
            setStatus(error instanceof Error ? error.message : "İşlem sırasında beklenmeyen bir hata oluştu.");
        } finally{
            setLoading(false);
        }
    }
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            style: {
                padding: "40px 16px 80px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: 24
                },
                children: "Ödeme bilgileri yükleniyor..."
            }, void 0, false, {
                fileName: "[project]/app/odeme/page.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/odeme/page.tsx",
            lineNumber: 294,
            columnNumber: 7
        }, this);
    }
    if (!cart.length && statusType !== "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            style: {
                padding: "40px 16px 80px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    padding: "52px 24px",
                    borderRadius: 28,
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            width: 74,
                            height: 74,
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            borderRadius: 22,
                            background: "rgba(250,204,21,.1)",
                            color: "#facc15",
                            fontSize: 30,
                            fontWeight: 900
                        },
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: "20px 0 0",
                            fontSize: 32
                        },
                        children: "Ödeme için ürün bulunamadı"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "small",
                        style: {
                            maxWidth: 520,
                            margin: "10px auto 0",
                            fontSize: 15,
                            lineHeight: 1.7
                        },
                        children: "Ödeme adımına geçmeden önce sepetinize bir ürün eklemelisiniz."
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/urunler",
                        className: "btn btn-primary",
                        style: {
                            width: "auto",
                            marginTop: 22
                        },
                        children: "Ürünleri İncele"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/odeme/page.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/odeme/page.tsx",
            lineNumber: 307,
            columnNumber: 7
        }, this);
    }
    if (!cart.length && statusType === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            style: {
                padding: "40px 16px 80px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    padding: "52px 24px",
                    borderRadius: 28,
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            width: 76,
                            height: 76,
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            borderRadius: 22,
                            background: "rgba(34,197,94,.12)",
                            color: "#86efac",
                            fontSize: 32,
                            fontWeight: 900
                        },
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: "20px 0 0",
                            fontSize: 32
                        },
                        children: "Siparişiniz alındı"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            maxWidth: 620,
                            margin: "12px auto 0",
                            color: "#d4d4d8",
                            lineHeight: 1.7
                        },
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            gap: 10,
                            marginTop: 24,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/siparis-takip",
                                className: "btn btn-primary",
                                style: {
                                    width: "auto"
                                },
                                children: "Siparişimi Takip Et"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "btn btn-secondary",
                                style: {
                                    width: "auto"
                                },
                                children: "Ana Sayfaya Dön"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/odeme/page.tsx",
                lineNumber: 372,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/odeme/page.tsx",
            lineNumber: 368,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            padding: "40px 16px 80px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "badge",
                        children: "Güvenli Ödeme"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            margin: "16px 0 0",
                            fontSize: 42,
                            lineHeight: 1.1,
                            letterSpacing: "-0.04em"
                        },
                        children: "Siparişini tamamla"
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "small",
                        style: {
                            maxWidth: 640,
                            marginTop: 10,
                            fontSize: 15,
                            lineHeight: 1.7
                        },
                        children: "Teslimat bilgilerini gir, ödeme yöntemini seç ve siparişini güvenle oluştur."
                    }, void 0, false, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/odeme/page.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-2",
                style: {
                    alignItems: "start",
                    gap: 24,
                    marginTop: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        style: {
                            padding: 24,
                            borderRadius: 28
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#facc15",
                                    fontSize: 12,
                                    fontWeight: 900,
                                    letterSpacing: ".08em",
                                    textTransform: "uppercase"
                                },
                                children: "Teslimat Bilgileri"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: "8px 0 0",
                                    fontSize: 28
                                },
                                children: "Adres ve iletişim"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 18,
                                    marginTop: 22
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkout-name",
                                                style: labelStyle,
                                                children: "Ad Soyad"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "checkout-name",
                                                className: "input",
                                                autoComplete: "name",
                                                placeholder: "Adınız ve soyadınız",
                                                value: form.fullName,
                                                onChange: (event)=>updateForm("fullName", event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "checkout-phone",
                                                        style: labelStyle,
                                                        children: "Telefon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "checkout-phone",
                                                        className: "input",
                                                        type: "tel",
                                                        autoComplete: "tel",
                                                        placeholder: "05XX XXX XX XX",
                                                        value: form.phone,
                                                        onChange: (event)=>updateForm("phone", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "checkout-email",
                                                        style: labelStyle,
                                                        children: "E-posta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "checkout-email",
                                                        className: "input",
                                                        type: "email",
                                                        autoComplete: "email",
                                                        placeholder: "ornek@mail.com",
                                                        value: form.email,
                                                        onChange: (event)=>updateForm("email", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "checkout-city",
                                                        style: labelStyle,
                                                        children: "Şehir"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "checkout-city",
                                                        className: "input",
                                                        autoComplete: "address-level1",
                                                        placeholder: "Şehir",
                                                        value: form.city,
                                                        onChange: (event)=>updateForm("city", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "checkout-district",
                                                        style: labelStyle,
                                                        children: "İlçe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "checkout-district",
                                                        className: "input",
                                                        autoComplete: "address-level2",
                                                        placeholder: "İlçe",
                                                        value: form.district,
                                                        onChange: (event)=>updateForm("district", event.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 599,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkout-postal",
                                                style: labelStyle,
                                                children: "Posta Kodu"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "checkout-postal",
                                                className: "input",
                                                inputMode: "numeric",
                                                autoComplete: "postal-code",
                                                placeholder: "İsteğe bağlı",
                                                value: form.postalCode,
                                                onChange: (event)=>updateForm("postalCode", event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkout-address",
                                                style: labelStyle,
                                                children: "Açık Adres"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "checkout-address",
                                                className: "input",
                                                rows: 5,
                                                autoComplete: "street-address",
                                                placeholder: "Mahalle, cadde, sokak, bina ve daire bilgileri",
                                                value: form.address,
                                                onChange: (event)=>updateForm("address", event.target.value),
                                                style: {
                                                    minHeight: 125,
                                                    resize: "vertical"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "checkout-note",
                                                style: labelStyle,
                                                children: "Sipariş Notu"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 667,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "checkout-note",
                                                className: "input",
                                                rows: 3,
                                                maxLength: 300,
                                                placeholder: "Siparişinizle ilgili eklemek istediğiniz not",
                                                value: form.orderNote,
                                                onChange: (event)=>updateForm("orderNote", event.target.value),
                                                style: {
                                                    minHeight: 95,
                                                    resize: "vertical"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 666,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 1,
                                    margin: "25px 0",
                                    background: "rgba(255,255,255,.08)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 692,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#facc15",
                                    fontSize: 12,
                                    fontWeight: 900,
                                    letterSpacing: ".08em",
                                    textTransform: "uppercase"
                                },
                                children: "Ödeme Yöntemi"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: "8px 0 0",
                                    fontSize: 28
                                },
                                children: "Nasıl ödemek istersiniz?"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 712,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 11,
                                    marginTop: 18
                                },
                                children: [
                                    {
                                        value: "iyzico",
                                        title: "Banka veya kredi kartı",
                                        description: "iyzico güvenli ödeme altyapısı"
                                    },
                                    {
                                        value: "Havale / EFT",
                                        title: "Havale / EFT",
                                        description: "Banka hesabına para transferi"
                                    },
                                    {
                                        value: "Kapıda Ödeme",
                                        title: "Kapıda Ödeme",
                                        description: "Teslimat sırasında ödeme"
                                    }
                                ].map((method)=>{
                                    const isSelected = form.paymentMethod === method.value;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 13,
                                            padding: 15,
                                            border: isSelected ? "1px solid rgba(250,204,21,.42)" : "1px solid rgba(255,255,255,.08)",
                                            borderRadius: 17,
                                            background: isSelected ? "rgba(250,204,21,.06)" : "rgba(255,255,255,.025)",
                                            cursor: "pointer"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                name: "paymentMethod",
                                                value: method.value,
                                                checked: isSelected,
                                                onChange: ()=>updateForm("paymentMethod", method.value),
                                                style: {
                                                    width: 18,
                                                    height: 18,
                                                    accentColor: "#facc15"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 761,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            display: "block",
                                                            color: isSelected ? "#facc15" : "#f4f4f5",
                                                            fontSize: 14
                                                        },
                                                        children: method.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "small",
                                                        style: {
                                                            display: "block",
                                                            marginTop: 4,
                                                            fontSize: 12
                                                        },
                                                        children: method.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 779,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, method.value, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 10,
                                    marginTop: 22,
                                    color: "#a1a1aa",
                                    fontSize: 12,
                                    lineHeight: 1.6,
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: agreementAccepted,
                                        onChange: (event)=>setAgreementAccepted(event.target.checked),
                                        style: {
                                            width: 17,
                                            height: 17,
                                            marginTop: 2,
                                            accentColor: "#facc15"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 820,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ön bilgilendirme formunu ve mesafeli satış sözleşmesini okudum, kabul ediyorum."
                                    }, void 0, false, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 808,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: handleCheckout,
                                disabled: loading,
                                style: {
                                    width: "100%",
                                    minHeight: 56,
                                    marginTop: 20,
                                    fontSize: 16,
                                    opacity: loading ? 0.68 : 1,
                                    cursor: loading ? "not-allowed" : "pointer"
                                },
                                children: loading ? "İşlem yapılıyor..." : form.paymentMethod === "iyzico" ? `${total.toLocaleString("tr-TR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })} TL Güvenli Öde` : "Siparişi Tamamla"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 840,
                                columnNumber: 11
                            }, this),
                            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 14,
                                    padding: "13px 14px",
                                    border: statusType === "error" ? "1px solid rgba(239,68,68,.23)" : statusType === "success" ? "1px solid rgba(34,197,94,.23)" : "1px solid rgba(250,204,21,.18)",
                                    borderRadius: 14,
                                    background: statusType === "error" ? "rgba(239,68,68,.07)" : statusType === "success" ? "rgba(34,197,94,.07)" : "rgba(250,204,21,.05)",
                                    color: statusType === "error" ? "#fca5a5" : statusType === "success" ? "#86efac" : "#e4e4e7",
                                    fontSize: 13,
                                    fontWeight: 750,
                                    lineHeight: 1.6
                                },
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 865,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "card",
                        style: {
                            position: "sticky",
                            top: 110,
                            padding: 22,
                            borderRadius: 28
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#facc15",
                                    fontSize: 12,
                                    fontWeight: 900,
                                    letterSpacing: ".08em",
                                    textTransform: "uppercase"
                                },
                                children: "Sipariş Özeti"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 907,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: "8px 0 0",
                                    fontSize: 28
                                },
                                children: "Sepetiniz"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 919,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 14,
                                    marginTop: 20
                                },
                                children: cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "72px minmax(0, 1fr)",
                                            gap: 12,
                                            paddingBottom: 14,
                                            borderBottom: "1px solid rgba(255,255,255,.08)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 84,
                                                    overflow: "hidden",
                                                    borderRadius: 13,
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,.95), rgba(220,220,224,.75), rgba(110,110,118,.22))"
                                                },
                                                children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.image,
                                                    alt: item.name,
                                                    style: {
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/odeme/page.tsx",
                                                    lineNumber: 952,
                                                    columnNumber: 21
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 942,
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
                                                            fontSize: 14,
                                                            lineHeight: 1.35,
                                                            textOverflow: "ellipsis"
                                                        },
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "small",
                                                        style: {
                                                            display: "block",
                                                            marginTop: 4,
                                                            fontSize: 11
                                                        },
                                                        children: [
                                                            item.quantity,
                                                            " adet • ",
                                                            item.size
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 978,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            display: "block",
                                                            marginTop: 8,
                                                            color: "#facc15",
                                                            fontSize: 14
                                                        },
                                                        children: [
                                                            (item.price * item.quantity).toLocaleString("tr-TR", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            }),
                                                            " ",
                                                            "TL"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 964,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 923,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 13,
                                    marginTop: 18
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: summaryRowStyle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "small",
                                                children: "Ara toplam"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    subtotal.toLocaleString("tr-TR", {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    }),
                                                    " ",
                                                    "TL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: summaryRowStyle,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "small",
                                                children: "Kargo"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    shipping.toLocaleString("tr-TR", {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    }),
                                                    " ",
                                                    "TL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            height: 1,
                                            margin: "3px 0",
                                            background: "rgba(255,255,255,.08)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 1039,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-end",
                                            justifyContent: "space-between",
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "small",
                                                        children: "Ödenecek toplam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 1056,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: 3,
                                                            color: "#71717a",
                                                            fontSize: 10
                                                        },
                                                        children: "Kargo dahil"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/odeme/page.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1055,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: "#facc15",
                                                    fontSize: 27,
                                                    letterSpacing: "-0.03em"
                                                },
                                                children: [
                                                    total.toLocaleString("tr-TR", {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    }),
                                                    " ",
                                                    "TL"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 1047,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 1010,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gap: 9,
                                    marginTop: 20,
                                    paddingTop: 18,
                                    borderTop: "1px solid rgba(255,255,255,.08)"
                                },
                                children: [
                                    "SSL ile güvenli bağlantı",
                                    "Koruyucu ürün paketleme",
                                    "Sipariş ve kargo takibi"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 9,
                                            color: "#a1a1aa",
                                            fontSize: 12,
                                            fontWeight: 700
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "inline-flex",
                                                    width: 18,
                                                    height: 18,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "50%",
                                                    background: "rgba(34,197,94,.11)",
                                                    color: "#86efac",
                                                    fontSize: 10
                                                },
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/odeme/page.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 17
                                            }, this),
                                            item
                                        ]
                                    }, item, true, {
                                        fileName: "[project]/app/odeme/page.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 1087,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/sepet",
                                style: {
                                    display: "inline-block",
                                    marginTop: 18,
                                    color: "#facc15",
                                    fontSize: 12,
                                    fontWeight: 800
                                },
                                children: "← Sepete geri dön"
                            }, void 0, false, {
                                fileName: "[project]/app/odeme/page.tsx",
                                lineNumber: 1133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/odeme/page.tsx",
                        lineNumber: 898,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/odeme/page.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/odeme/page.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_s(CheckoutPage, "BueQRkb5DZ8IO9AgOXCPhta3sIE=");
_c = CheckoutPage;
const labelStyle = {
    display: "block",
    marginBottom: 8,
    color: "#e4e4e7",
    fontSize: 13,
    fontWeight: 800
};
const summaryRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: 12
};
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
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
]);

//# sourceMappingURL=_1zzpa52._.js.map